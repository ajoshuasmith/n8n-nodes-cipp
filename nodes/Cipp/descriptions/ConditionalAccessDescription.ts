import type { INodeProperties } from 'n8n-workflow';

const listOperations = [
	'listPolicies',
	'listTemplates',
	'listNamedLocations',
];

const policyIdOperations = [
	'editPolicy',
	'removePolicy',
];

export const conditionalAccessOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
			},
		},
		options: [
			{
				name: 'Add Named Location',
				value: 'addNamedLocation',
				description: 'Create a new named location',
				action: 'Add named location',
			},
			{
				name: 'Add Policy',
				value: 'addPolicy',
				description: 'Create a new conditional access policy',
				action: 'Add policy',
			},
			{
				name: 'Add Template',
				value: 'addTemplate',
				description: 'Create a conditional access policy template',
				action: 'Add template',
			},
			{
				name: 'CA Policy Check',
				value: 'caCheck',
				description: 'Test or validate a conditional access policy',
				action: 'CA policy check',
			},
			{
				name: 'Edit Policy',
				value: 'editPolicy',
				description: 'Edit an existing conditional access policy',
				action: 'Edit policy',
			},
			{
				name: 'List Named Locations',
				value: 'listNamedLocations',
				description: 'List all named locations',
				action: 'List named locations',
			},
			{
				name: 'List Policies',
				value: 'listPolicies',
				description: 'List all conditional access policies',
				action: 'List policies',
			},
			{
				name: 'List Templates',
				value: 'listTemplates',
				description: 'List conditional access policy templates',
				action: 'List templates',
			},
			{
				name: 'Manage Named Location',
				value: 'manageNamedLocation',
				description: 'Update or delete a named location',
				action: 'Manage named location',
			},
			{
				name: 'Remove Policy',
				value: 'removePolicy',
				description: 'Delete a conditional access policy',
				action: 'Remove policy',
			},
			{
				name: 'Remove Template',
				value: 'removeTemplate',
				description: 'Delete a conditional access policy template',
				action: 'Remove template',
			},
		],
		default: 'listPolicies',
	},
];

export const conditionalAccessFields: INodeProperties[] = [
	// ==================== Tenant selector (all operations) ====================
	{
		displayName: 'Tenant',
		name: 'tenantFilter',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The tenant to perform the operation on',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
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

	// ==================== Return All / Limit (list operations) ====================
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: listOperations,
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
				resource: ['conditionalAccess'],
				operation: listOperations,
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

	// ==================== Policy ID (edit/remove) ====================
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: policyIdOperations,
			},
		},
		default: '',
		description: 'The ID of the conditional access policy',
	},

	// ==================== Add Policy ====================
	{
		displayName: 'Policy JSON',
		name: 'caPolicyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addPolicy'],
			},
		},
		default: '{}',
		description: 'The conditional access policy definition as JSON. Must include displayName, state, conditions, and grantControls.',
	},
	{
		displayName: 'State Override',
		name: 'caState',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addPolicy'],
			},
		},
		options: [
			{ name: 'Enabled', value: 'enabled' },
			{ name: 'Disabled', value: 'disabled' },
			{ name: 'Report Only', value: 'enabledForReportingButNotEnforced' },
			{ name: 'Use JSON Value', value: '' },
		],
		default: '',
		description: 'Override the policy state (or use the value from JSON)',
	},

	// ==================== Edit Policy ====================
	{
		displayName: 'Policy JSON',
		name: 'editPolicyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['editPolicy'],
			},
		},
		default: '{}',
		description: 'The updated policy definition as JSON. Only include fields you want to change.',
	},
	{
		displayName: 'State Override',
		name: 'editCaState',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['editPolicy'],
			},
		},
		options: [
			{ name: 'Enabled', value: 'enabled' },
			{ name: 'Disabled', value: 'disabled' },
			{ name: 'Report Only', value: 'enabledForReportingButNotEnforced' },
			{ name: 'No Change', value: '' },
		],
		default: '',
		description: 'Override the policy state',
	},

	// ==================== Add Template ====================
	{
		displayName: 'Template JSON',
		name: 'caTemplateJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addTemplate'],
			},
		},
		default: '{}',
		description: 'The conditional access template definition as JSON',
	},

	// ==================== Remove Template ====================
	{
		displayName: 'Template ID',
		name: 'caTemplateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['removeTemplate'],
			},
		},
		default: '',
		description: 'The ID of the conditional access template to remove',
	},

	// ==================== CA Policy Check ====================
	{
		displayName: 'User ID',
		name: 'caCheckUserId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['caCheck'],
			},
		},
		default: '',
		placeholder: 'user@domain.com',
		description: 'The user to check policies against',
	},

	// ==================== Add Named Location ====================
	{
		displayName: 'Location Name',
		name: 'namedLocationName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addNamedLocation'],
			},
		},
		default: '',
		description: 'The display name for the named location',
	},
	{
		displayName: 'Location Type',
		name: 'namedLocationType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addNamedLocation'],
			},
		},
		options: [
			{ name: 'IP Range', value: 'ip' },
			{ name: 'Country', value: 'country' },
		],
		default: 'ip',
		description: 'The type of named location',
	},
	{
		displayName: 'IP Ranges',
		name: 'namedLocationIpRanges',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addNamedLocation'],
				namedLocationType: ['ip'],
			},
		},
		default: '',
		placeholder: 'e.g. 192.168.1.0/24, 10.0.0.0/8',
		description: 'Comma-separated list of IP ranges in CIDR notation',
	},
	{
		displayName: 'Countries',
		name: 'namedLocationCountries',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addNamedLocation'],
				namedLocationType: ['country'],
			},
		},
		default: '',
		placeholder: 'e.g. US, GB, DE',
		description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)',
	},
	{
		displayName: 'Is Trusted',
		name: 'namedLocationTrusted',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['addNamedLocation'],
				namedLocationType: ['ip'],
			},
		},
		default: false,
		description: 'Whether to mark this location as trusted',
	},

	// ==================== Manage Named Location ====================
	{
		displayName: 'Location ID',
		name: 'namedLocationId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['manageNamedLocation'],
			},
		},
		default: '',
		description: 'The ID of the named location to manage',
	},
	{
		displayName: 'Action',
		name: 'namedLocationAction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['manageNamedLocation'],
			},
		},
		options: [
			{ name: 'Update', value: 'Update' },
			{ name: 'Delete', value: 'Delete' },
		],
		default: 'Update',
		description: 'The action to perform on the named location',
	},
	{
		displayName: 'Location JSON',
		name: 'namedLocationJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['conditionalAccess'],
				operation: ['manageNamedLocation'],
				namedLocationAction: ['Update'],
			},
		},
		default: '{}',
		description: 'The updated named location definition as JSON',
	},
];
