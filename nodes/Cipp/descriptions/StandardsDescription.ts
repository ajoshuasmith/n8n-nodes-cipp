import type { INodeProperties } from 'n8n-workflow';

const listOperations = [
	'listStandards',
	'listStandardTemplates',
	'listBPA',
	'listDomainAnalyser',
	'listDomainHealth',
	'listTenantDrift',
	'listTenantAlignment',
];

const tenantOperations = [
	'listStandards',
	'addStandardsDeploy',
	'removeStandard',
	'runStandards',
	'listBPA',
	'execBPA',
	'listDomainAnalyser',
	'execDomainAnalyser',
	'listTenantDrift',
	'listTenantAlignment',
	'execDriftClone',
];

export const standardsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['standards'],
			},
		},
		options: [
			{
				name: 'Add Standards Deploy',
				value: 'addStandardsDeploy',
				description: 'Deploy standards to a tenant',
				action: 'Deploy standards to a tenant',
			},
			{
				name: 'Add Standard Template',
				value: 'addStandardTemplate',
				description: 'Create a standard template',
				action: 'Create a standard template',
			},
			{
				name: 'Exec BPA',
				value: 'execBPA',
				description: 'Execute a Best Practice Analysis for a tenant',
				action: 'Execute BPA for a tenant',
			},
			{
				name: 'Exec Domain Analyser',
				value: 'execDomainAnalyser',
				description: 'Execute domain analysis for a tenant',
				action: 'Execute domain analyser',
			},
			{
				name: 'Exec Drift Clone',
				value: 'execDriftClone',
				description: 'Clone drift configuration for a tenant',
				action: 'Clone drift configuration',
			},
			{
				name: 'List BPA',
				value: 'listBPA',
				description: 'List Best Practice Analysis results',
				action: 'List BPA results',
			},
			{
				name: 'List Domain Analyser',
				value: 'listDomainAnalyser',
				description: 'List domain analyser results for a tenant',
				action: 'List domain analyser results',
			},
			{
				name: 'List Domain Health',
				value: 'listDomainHealth',
				description: 'List domain health information',
				action: 'List domain health',
			},
			{
				name: 'List Standards',
				value: 'listStandards',
				description: 'List all tenant standards',
				action: 'List tenant standards',
			},
			{
				name: 'List Standard Templates',
				value: 'listStandardTemplates',
				description: 'List all standard templates',
				action: 'List standard templates',
			},
			{
				name: 'List Tenant Alignment',
				value: 'listTenantAlignment',
				description: 'List tenant alignment status',
				action: 'List tenant alignment',
			},
			{
				name: 'List Tenant Drift',
				value: 'listTenantDrift',
				description: 'List tenant configuration drift',
				action: 'List tenant drift',
			},
			{
				name: 'Remove Standard',
				value: 'removeStandard',
				description: 'Remove a deployed standard from a tenant',
				action: 'Remove a standard',
			},
			{
				name: 'Remove Standard Template',
				value: 'removeStandardTemplate',
				description: 'Remove a standard template',
				action: 'Remove a standard template',
			},
			{
				name: 'Run Standards',
				value: 'runStandards',
				description: 'Trigger a standards run for a tenant',
				action: 'Run standards for a tenant',
			},
		],
		default: 'listStandards',
	},
];

export const standardsFields: INodeProperties[] = [
	// ==================== Tenant selector ====================
	{
		displayName: 'Tenant',
		name: 'tenantFilter',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The tenant to perform the operation on',
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: tenantOperations,
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

	// ==================== Return All / Limit ====================
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['standards'],
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
				resource: ['standards'],
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

	// ==================== Standard ID (for remove) ====================
	{
		displayName: 'Standard ID',
		name: 'standardId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['removeStandard'],
			},
		},
		default: '',
		description: 'The ID of the standard to remove',
	},

	// ==================== Standards JSON (for deploy) ====================
	{
		displayName: 'Standards JSON',
		name: 'standardsJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['addStandardsDeploy'],
			},
		},
		default: '{}',
		description: 'The standards deployment configuration as JSON',
	},

	// ==================== Template ID (for remove template) ====================
	{
		displayName: 'Template ID',
		name: 'standardTemplateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['removeStandardTemplate'],
			},
		},
		default: '',
		description: 'The ID of the standard template to remove',
	},

	// ==================== Template JSON (for add template) ====================
	{
		displayName: 'Template JSON',
		name: 'standardTemplateJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['addStandardTemplate'],
			},
		},
		default: '{}',
		description: 'The standard template definition as JSON',
	},

	// ==================== Domain (for domain analyser / health) ====================
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['execDomainAnalyser', 'listDomainHealth'],
			},
		},
		default: '',
		description: 'The domain to analyse',
	},

	// ==================== Drift JSON (for drift clone) ====================
	{
		displayName: 'Drift JSON',
		name: 'driftJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['standards'],
				operation: ['execDriftClone'],
			},
		},
		default: '{}',
		description: 'The drift clone configuration as JSON',
	},
];
