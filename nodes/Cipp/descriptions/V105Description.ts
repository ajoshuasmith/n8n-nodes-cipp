import type { INodeProperties } from 'n8n-workflow';

const v105ListOperations = [
	'listAndroidEnrollmentProfiles',
	'listAppleEnrollmentProfiles',
	'listMailboxRestores',
	'listDlpCompliancePolicy',
	'listRetentionCompliancePolicy',
	'listSensitiveInfoType',
	'listSensitivityLabel',
	'listSnoozedAlerts',
	'listCspSku',
	'listLicensesReport',
	'listHveAccounts',
	'listActiveSyncDevices',
	'listAssignmentFilterTemplates',
];

const v105PayloadOperations = [
	'addEnrollment',
	'removeEnrollmentProfile',
	'setCasMailbox',
	'removeAdminRole',
	'execMailboxRestore',
	'addDlpCompliancePolicy',
	'editDlpCompliancePolicy',
	'removeDlpCompliancePolicy',
	'addRetentionCompliancePolicy',
	'editRetentionCompliancePolicy',
	'removeRetentionCompliancePolicy',
	'addSensitiveInfoType',
	'editSensitiveInfoType',
	'removeSensitiveInfoType',
	'addSensitivityLabel',
	'editSensitivityLabel',
	'removeSensitivityLabel',
	'execSpoVersionCleanup',
	'execMcp',
	'snoozeAlert',
	'removeSnooze',
	'setPackageTag',
	'assignPolicy',
	'execAssignmentFilter',
	'editAssignmentFilter',
	'addAssignmentFilterTemplate',
	'removeAssignmentFilterTemplate',
	'addGroupTeam',
	'addUserBulk',
	'patchUser',
];

const tenantSelector: INodeProperties = {
	displayName: 'Tenant',
	name: 'tenantFilter',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	description: 'Tenant to send as tenantFilter',
	displayOptions: {
		show: {
			resource: ['cippV105'],
			v105IncludeTenant: [true],
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
};

export const v105Operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cippV105'],
			},
		},
		options: [
			{ name: 'Add Assignment Filter Template', value: 'addAssignmentFilterTemplate', action: 'Add assignment filter template' },
			{ name: 'Add DLP Compliance Policy', value: 'addDlpCompliancePolicy', action: 'Add DLP compliance policy' },
			{ name: 'Add Enrollment', value: 'addEnrollment', action: 'Add enrollment' },
			{ name: 'Add Group Team', value: 'addGroupTeam', action: 'Add group team' },
			{ name: 'Add Retention Compliance Policy', value: 'addRetentionCompliancePolicy', action: 'Add retention compliance policy' },
			{ name: 'Add Sensitive Info Type', value: 'addSensitiveInfoType', action: 'Add sensitive info type' },
			{ name: 'Add Sensitivity Label', value: 'addSensitivityLabel', action: 'Add sensitivity label' },
			{ name: 'Add User Bulk', value: 'addUserBulk', action: 'Add users in bulk' },
			{ name: 'Assign Policy', value: 'assignPolicy', action: 'Assign intune policy' },
			{ name: 'Edit Assignment Filter', value: 'editAssignmentFilter', action: 'Edit assignment filter' },
			{ name: 'Edit DLP Compliance Policy', value: 'editDlpCompliancePolicy', action: 'Edit DLP compliance policy' },
			{ name: 'Edit Retention Compliance Policy', value: 'editRetentionCompliancePolicy', action: 'Edit retention compliance policy' },
			{ name: 'Edit Sensitive Info Type', value: 'editSensitiveInfoType', action: 'Edit sensitive info type' },
			{ name: 'Edit Sensitivity Label', value: 'editSensitivityLabel', action: 'Edit sensitivity label' },
			{ name: 'Execute Assignment Filter Delete', value: 'execAssignmentFilter', action: 'Delete assignment filter' },
			{ name: 'Execute Mailbox Restore', value: 'execMailboxRestore', action: 'Execute mailbox restore' },
			{ name: 'Execute MCP', value: 'execMcp', action: 'Execute mcp request' },
			{ name: 'Execute SharePoint Version Cleanup', value: 'execSpoVersionCleanup', action: 'Execute sharepoint version cleanup' },
			{ name: 'List ActiveSync Devices', value: 'listActiveSyncDevices', action: 'List active sync devices' },
			{ name: 'List Android Enrollment Profiles', value: 'listAndroidEnrollmentProfiles', action: 'List android enrollment profiles' },
			{ name: 'List Apple Enrollment Profiles', value: 'listAppleEnrollmentProfiles', action: 'List apple enrollment profiles' },
			{ name: 'List Assignment Filter Templates', value: 'listAssignmentFilterTemplates', action: 'List assignment filter templates' },
			{ name: 'List CSP SKU', value: 'listCspSku', action: 'List CSP SKU' },
			{ name: 'List DLP Compliance Policy', value: 'listDlpCompliancePolicy', action: 'List DLP compliance policies' },
			{ name: 'List HVE Accounts', value: 'listHveAccounts', action: 'List HVE accounts' },
			{ name: 'List Licenses Report', value: 'listLicensesReport', action: 'List licenses report' },
			{ name: 'List Mailbox Restores', value: 'listMailboxRestores', action: 'List mailbox restores' },
			{ name: 'List Retention Compliance Policy', value: 'listRetentionCompliancePolicy', action: 'List retention compliance policies' },
			{ name: 'List Sensitive Info Type', value: 'listSensitiveInfoType', action: 'List sensitive info types' },
			{ name: 'List Sensitivity Label', value: 'listSensitivityLabel', action: 'List sensitivity labels' },
			{ name: 'List Snoozed Alerts', value: 'listSnoozedAlerts', action: 'List snoozed alerts' },
			{ name: 'Patch User', value: 'patchUser', action: 'Patch user' },
			{ name: 'Remove Admin Role', value: 'removeAdminRole', action: 'Remove admin role' },
			{ name: 'Remove Assignment Filter Template', value: 'removeAssignmentFilterTemplate', action: 'Remove assignment filter template' },
			{ name: 'Remove DLP Compliance Policy', value: 'removeDlpCompliancePolicy', action: 'Remove DLP compliance policy' },
			{ name: 'Remove Enrollment Profile', value: 'removeEnrollmentProfile', action: 'Remove enrollment profile' },
			{ name: 'Remove Retention Compliance Policy', value: 'removeRetentionCompliancePolicy', action: 'Remove retention compliance policy' },
			{ name: 'Remove Sensitive Info Type', value: 'removeSensitiveInfoType', action: 'Remove sensitive info type' },
			{ name: 'Remove Sensitivity Label', value: 'removeSensitivityLabel', action: 'Remove sensitivity label' },
			{ name: 'Remove Snooze', value: 'removeSnooze', action: 'Remove alert snooze' },
			{ name: 'Set CAS Mailbox', value: 'setCasMailbox', action: 'Set CAS mailbox' },
			{ name: 'Set Package Tag', value: 'setPackageTag', action: 'Set package tag' },
			{ name: 'Snooze Alert', value: 'snoozeAlert', action: 'Snooze alert' },
		],
		default: 'listLicensesReport',
	},
];

export const v105Fields: INodeProperties[] = [
	{
		displayName: 'Include Tenant',
		name: 'v105IncludeTenant',
		type: 'boolean',
		default: true,
		description: 'Whether to add tenantFilter to the request body/query',
		displayOptions: {
			show: {
				resource: ['cippV105'],
			},
		},
	},
	tenantSelector,
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['cippV105'],
				operation: v105ListOperations,
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['cippV105'],
				operation: v105ListOperations,
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Query Parameters',
		name: 'v105QueryJson',
		type: 'json',
		default: '{}',
		description: 'Additional query parameters as a JSON object',
		displayOptions: {
			show: {
				resource: ['cippV105'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'v105BodyJson',
		type: 'json',
		default: '{}',
		required: true,
		description: 'Request body as a JSON object. Use the same field names CIPP expects for this endpoint.',
		displayOptions: {
			show: {
				resource: ['cippV105'],
				operation: v105PayloadOperations,
			},
		},
	},
	{
		displayName: 'Options',
		name: 'v105Options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['cippV105'],
			},
		},
		options: [
			{
				displayName: 'Max Payload Bytes',
				name: 'maxPayloadBytes',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 262144,
				description: 'Maximum serialized request body size',
			},
		],
	},
];
