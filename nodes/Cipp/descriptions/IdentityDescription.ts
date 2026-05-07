import type { INodeProperties } from 'n8n-workflow';

export const identityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['identity'],
			},
		},
		options: [
			{
				name: 'List App Consent Requests',
				value: 'listAppConsentRequests',
				description: 'List application consent requests',
				action: 'List app consent requests',
			},
			{
				name: 'List Audit Logs',
				value: 'listAuditLogs',
				description: 'List audit logs for compliance monitoring',
				action: 'List audit logs',
			},
			{
				name: 'List Azure AD Connect Status',
				value: 'listAzureAdConnectStatus',
				description: 'List Azure AD Connect status',
				action: 'List Azure AD Connect status',
			},
			{
				name: 'List Basic Auth',
				value: 'listBasicAuth',
				description: 'List basic authentication report data',
				action: 'List basic auth',
			},
			{
				name: 'List Deleted Items',
				value: 'listDeletedItems',
				description: 'List deleted users, groups, and applications',
				action: 'List deleted items',
			},
			{
				name: 'List Domains',
				value: 'listDomains',
				description: 'List domains for a tenant',
				action: 'List domains',
			},
			{
				name: 'List Roles',
				value: 'listRoles',
				description: 'List Azure AD roles and assignments',
				action: 'List roles',
			},
			{
				name: 'Restore Deleted',
				value: 'restoreDeleted',
				description: 'Restore a deleted object',
				action: 'Restore deleted object',
			},
			{
				name: 'Set Cloud Managed',
				value: 'setCloudManaged',
				description: 'Set cloud-managed status for a directory object',
				action: 'Set cloud managed',
			},
		],
		default: 'listAuditLogs',
	},
];

const identityListOperations = [
	'listAppConsentRequests',
	'listAuditLogs',
	'listAzureAdConnectStatus',
	'listBasicAuth',
	'listDeletedItems',
	'listDomains',
	'listRoles',
];

export const identityFields: INodeProperties[] = [
	// Tenant selector
	{
		displayName: 'Tenant',
		name: 'tenantFilter',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The tenant to perform the operation on',
		displayOptions: {
			show: {
				resource: ['identity'],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: {
					searchListMethod: 'tenantSearch',
					searchable: true,
				},
			},
			{
				displayName: 'By Domain',
				name: 'domain',
				type: 'string',
				placeholder: 'e.g. contoso.onmicrosoft.com',
			},
		],
	},

	// Return All for list operations
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: identityListOperations,
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: identityListOperations,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
	},

	// Object ID for restore
	{
		displayName: 'Object ID',
		name: 'objectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['restoreDeleted'],
			},
		},
		default: '',
		placeholder: 'e.g. 12345678-1234-1234-1234-123456789abc',
		description: 'The ID of the deleted object to restore',
	},
	{
		displayName: 'Data to Return',
		name: 'aadConnectDataToReturn',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['listAzureAdConnectStatus'],
			},
		},
		default: '',
		description: 'Optional DataToReturn query value for Azure AD Connect status',
	},
	{
		displayName: 'Request Status',
		name: 'appConsentRequestStatus',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['listAppConsentRequests'],
			},
		},
		default: '',
		description: 'Optional request status filter',
	},
	{
		displayName: 'Filter',
		name: 'appConsentFilter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['listAppConsentRequests'],
			},
		},
		default: '',
		description: 'Optional app consent request filter',
	},
	{
		displayName: 'Object ID',
		name: 'cloudManagedObjectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['setCloudManaged'],
			},
		},
		default: '',
		description: 'The ID of the user, group, or contact',
	},
	{
		displayName: 'Display Name',
		name: 'cloudManagedDisplayName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['setCloudManaged'],
			},
		},
		default: '',
		description: 'Optional display name for logging',
	},
	{
		displayName: 'Object Type',
		name: 'cloudManagedType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['setCloudManaged'],
			},
		},
		options: [
			{ name: 'Contact', value: 'contact' },
			{ name: 'Group', value: 'group' },
			{ name: 'User', value: 'user' },
		],
		default: 'user',
		description: 'Directory object type',
	},
	{
		displayName: 'Cloud Managed',
		name: 'isCloudManaged',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['identity'],
				operation: ['setCloudManaged'],
			},
		},
		default: true,
		description: 'Whether to mark the object as cloud managed',
	},
];
