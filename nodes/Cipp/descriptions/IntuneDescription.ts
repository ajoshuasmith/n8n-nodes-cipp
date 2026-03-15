import type { INodeProperties } from 'n8n-workflow';

// ────────────────── Shared helpers ──────────────────

const tenantSelector: INodeProperties = {
	displayName: 'Tenant',
	name: 'tenantFilter',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	description: 'The tenant to perform the operation on',
	displayOptions: {
		show: {
			resource: ['intune'],
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

// ────────────────── Operations ──────────────────

export const intuneOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['intune'],
			},
		},
		options: [
			{
				name: 'Add Assignment Filter',
				value: 'addAssignmentFilter',
				description: 'Create an Intune assignment filter',
				action: 'Add assignment filter',
			},
			{
				name: 'Add Intune Reusable Setting',
				value: 'addIntuneReusableSetting',
				description: 'Create a reusable Intune setting',
				action: 'Add Intune reusable setting',
			},
			{
				name: 'Add Win32 Script App',
				value: 'addWin32ScriptApp',
				description: 'Add a Win32 script application',
				action: 'Add Win32 script app',
			},
			{
				name: 'Edit Intune Script',
				value: 'editIntuneScript',
				description: 'Edit an existing Intune script',
				action: 'Edit Intune script',
			},
			{
				name: 'List App Protection Policies',
				value: 'listAppProtectionPolicies',
				description: 'List all app protection policies',
				action: 'List app protection policies',
			},
			{
				name: 'List Assignment Filters',
				value: 'listAssignmentFilters',
				description: 'List Intune assignment filters',
				action: 'List assignment filters',
			},
			{
				name: 'List Compliance Policies',
				value: 'listCompliancePolicies',
				description: 'List Intune compliance policies',
				action: 'List compliance policies',
			},
			{
				name: 'List Intune Reusable Settings',
				value: 'listIntuneReusableSettings',
				description: 'List reusable Intune settings',
				action: 'List Intune reusable settings',
			},
			{
				name: 'List Intune Scripts',
				value: 'listIntuneScripts',
				description: 'List all Intune scripts',
				action: 'List Intune scripts',
			},
			{
				name: 'List Intune Templates',
				value: 'listIntuneTemplates',
				description: 'List available Intune templates',
				action: 'List Intune templates',
			},
			{
				name: 'Remove Intune Reusable Setting',
				value: 'removeIntuneReusableSetting',
				description: 'Remove a reusable Intune setting',
				action: 'Remove Intune reusable setting',
			},
			{
				name: 'Remove Intune Script',
				value: 'removeIntuneScript',
				description: 'Remove an Intune script',
				action: 'Remove Intune script',
			},
		],
		default: 'listIntuneScripts',
	},
];

// ────────────────── Fields ──────────────────

export const intuneFields: INodeProperties[] = [
	// Shared: Tenant
	tenantSelector,

	// Return All / Limit for list operations
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: [
					'listIntuneScripts',
					'listCompliancePolicies',
					'listAppProtectionPolicies',
					'listAssignmentFilters',
					'listIntuneReusableSettings',
					'listIntuneTemplates',
				],
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
				resource: ['intune'],
				operation: [
					'listIntuneScripts',
					'listCompliancePolicies',
					'listAppProtectionPolicies',
					'listAssignmentFilters',
					'listIntuneReusableSettings',
					'listIntuneTemplates',
				],
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

	// ID field for remove operations
	{
		displayName: 'ID',
		name: 'intuneId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: ['removeIntuneScript', 'removeIntuneReusableSetting'],
			},
		},
		default: '',
		description: 'The ID of the resource to remove',
	},

	// Script JSON for editIntuneScript
	{
		displayName: 'Script JSON',
		name: 'intuneScriptJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: ['editIntuneScript'],
			},
		},
		default: '{}',
		description: 'JSON object containing the Intune script properties to update',
	},

	// Filter JSON for addAssignmentFilter
	{
		displayName: 'Filter JSON',
		name: 'intuneFilterJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: ['addAssignmentFilter'],
			},
		},
		default: '{}',
		description: 'JSON object containing the assignment filter properties',
	},

	// Setting JSON for addIntuneReusableSetting
	{
		displayName: 'Setting JSON',
		name: 'intuneSettingJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: ['addIntuneReusableSetting'],
			},
		},
		default: '{}',
		description: 'JSON object containing the reusable setting properties',
	},

	// App JSON for addWin32ScriptApp
	{
		displayName: 'App JSON',
		name: 'intuneAppJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['intune'],
				operation: ['addWin32ScriptApp'],
			},
		},
		default: '{}',
		description: 'JSON object containing the Win32 script app properties',
	},
];
