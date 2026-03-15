import type { INodeProperties } from 'n8n-workflow';

const listOperations = [
	'listPolicies',
	'listTemplates',
];

export const safeLinksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['safeLinks'],
			},
		},
		options: [
			{
				name: 'Add Policy',
				value: 'addPolicy',
				description: 'Create a new Safe Links policy',
				action: 'Add Safe Links policy',
			},
			{
				name: 'Add Policy From Template',
				value: 'addFromTemplate',
				description: 'Create a Safe Links policy from a template',
				action: 'Add policy from template',
			},
			{
				name: 'Add Template',
				value: 'addTemplate',
				description: 'Create a Safe Links policy template',
				action: 'Add template',
			},
			{
				name: 'Delete Policy',
				value: 'deletePolicy',
				description: 'Delete a Safe Links policy',
				action: 'Delete policy',
			},
			{
				name: 'Edit Policy',
				value: 'editPolicy',
				description: 'Edit an existing Safe Links policy',
				action: 'Edit policy',
			},
			{
				name: 'Edit Template',
				value: 'editTemplate',
				description: 'Edit an existing Safe Links template',
				action: 'Edit template',
			},
			{
				name: 'List Policies',
				value: 'listPolicies',
				description: 'List all Safe Links policies',
				action: 'List policies',
			},
			{
				name: 'List Templates',
				value: 'listTemplates',
				description: 'List Safe Links policy templates',
				action: 'List templates',
			},
			{
				name: 'Remove Template',
				value: 'removeTemplate',
				description: 'Delete a Safe Links policy template',
				action: 'Remove template',
			},
		],
		default: 'listPolicies',
	},
];

export const safeLinksFields: INodeProperties[] = [
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
				resource: ['safeLinks'],
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
				resource: ['safeLinks'],
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
				resource: ['safeLinks'],
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

	// ==================== Policy Name (for add/edit/delete) ====================
	{
		displayName: 'Policy Name',
		name: 'slPolicyName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['safeLinks'],
				operation: ['addPolicy', 'editPolicy', 'deletePolicy'],
			},
		},
		default: '',
		description: 'The name of the Safe Links policy',
	},

	// ==================== Policy JSON (add/edit) ====================
	{
		displayName: 'Policy JSON',
		name: 'slPolicyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['safeLinks'],
				operation: ['addPolicy', 'editPolicy'],
			},
		},
		default: '{}',
		description: 'The Safe Links policy definition as JSON',
	},

	// ==================== Template operations ====================
	{
		displayName: 'Template Name',
		name: 'slTemplateName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['safeLinks'],
				operation: ['addTemplate', 'editTemplate', 'removeTemplate', 'addFromTemplate'],
			},
		},
		default: '',
		description: 'The name of the Safe Links template',
	},
	{
		displayName: 'Template JSON',
		name: 'slTemplateJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['safeLinks'],
				operation: ['addTemplate', 'editTemplate'],
			},
		},
		default: '{}',
		description: 'The Safe Links template definition as JSON',
	},
];
