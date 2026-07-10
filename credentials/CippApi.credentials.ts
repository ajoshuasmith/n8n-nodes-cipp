import type {
	ICredentialDataDecryptedObject,
	ICredentialType,
	IDataObject,
	IHttpRequestOptions,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

interface ICippAuthToken {
	accessToken: string;
	expiresAt: number;
}

const tokenCache = new Map<string, ICippAuthToken>();

function getCredentialString(
	credentials: ICredentialDataDecryptedObject,
	name: string,
): string {
	const value = credentials[name];

	if (typeof value !== 'string' || value.trim() === '') {
		throw new Error(`Missing required CIPP credential field: ${name}`);
	}

	return value.trim();
}

function getCacheKey(clientId: string, tenantId: string): string {
	return `${clientId}:${tenantId}`;
}

async function getAccessToken(credentials: ICredentialDataDecryptedObject): Promise<string> {
	const tenantId = getCredentialString(credentials, 'tenantId');
	const clientId = getCredentialString(credentials, 'clientId');
	const clientSecret = getCredentialString(credentials, 'clientSecret');
	const cacheKey = getCacheKey(clientId, tenantId);
	const cached = tokenCache.get(cacheKey);

	if (cached && cached.expiresAt > Date.now() + 300000) {
		return cached.accessToken;
	}

	const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
	const body = new URLSearchParams({
		grant_type: 'client_credentials',
		client_id: clientId,
		client_secret: clientSecret,
		scope: `api://${clientId}/.default`,
	});

	const response = await fetch(tokenUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body,
	});

	const responseBody = (await response.json().catch(() => ({}))) as IDataObject;

	if (!response.ok || typeof responseBody.access_token !== 'string') {
		tokenCache.delete(cacheKey);

		const message =
			(responseBody.error_description as string | undefined) ||
			(responseBody.error as string | undefined) ||
			`Azure AD token request failed with status ${response.status}`;

		throw new Error(message);
	}

	const expiresIn =
		typeof responseBody.expires_in === 'number' ? responseBody.expires_in : 3600;

	tokenCache.set(cacheKey, {
		accessToken: responseBody.access_token,
		expiresAt: Date.now() + expiresIn * 1000,
	});

	return responseBody.access_token;
}

export class CippApi implements ICredentialType {
	name = 'cippApi';
	displayName = 'CIPP.app API';
	icon: Icon = 'file:cipp.svg';
	documentationUrl = 'https://docs.cipp.app/api-documentation/setup-and-authentication';
	genericAuth = true;

	properties: INodeProperties[] = [
		{
			displayName: 'CIPP Instance URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://cipp.yourdomain.com',
			description: 'The base URL of your CIPP deployment (API URL)',
		},
		{
			displayName: 'Azure AD Tenant ID',
			name: 'tenantId',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			description: 'Your Azure AD Tenant ID (where the CIPP-SAM app registration lives)',
		},
		{
			displayName: 'Application (Client) ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			description: 'The Application (Client) ID from your CIPP-SAM Azure AD App Registration',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The Client Secret from your CIPP-SAM Azure AD App Registration',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		const accessToken = await getAccessToken(credentials);

		requestOptions.headers = {
			...((requestOptions.headers as IDataObject | undefined) ?? {}),
			Authorization: `Bearer ${accessToken}`,
			Accept: 'application/json',
		};

		return requestOptions;
	}
}
