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
			resource: ['sharepoint'],
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

export const sharepointOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sharepoint'],
			},
		},
		options: [
			{
				name: 'Delete Site',
				value: 'deleteSharepointSite',
				description: 'Delete a SharePoint site',
				action: 'Delete SharePoint site',
			},
			{
				name: 'List Admin URL',
				value: 'listSharepointAdminUrl',
				description: 'Get the SharePoint admin URL for a tenant',
				action: 'List SharePoint admin URL',
			},
			{
				name: 'List Quota',
				value: 'listSharepointQuota',
				description: 'List SharePoint quota information',
				action: 'List SharePoint quota',
			},
			{
				name: 'List Settings',
				value: 'listSharepointSettings',
				description: 'List SharePoint settings for a tenant',
				action: 'List SharePoint settings',
			},
		],
		default: 'listSharepointQuota',
	},
];

// ────────────────── Fields ──────────────────

export const sharepointFields: INodeProperties[] = [
	// Shared: Tenant
	tenantSelector,

	// Return All / Limit for list operations
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['sharepoint'],
				operation: ['listSharepointQuota', 'listSharepointSettings', 'listSharepointAdminUrl'],
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
				resource: ['sharepoint'],
				operation: ['listSharepointQuota', 'listSharepointSettings', 'listSharepointAdminUrl'],
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

	// Site URL for deleteSharepointSite
	{
		displayName: 'Site URL',
		name: 'siteUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sharepoint'],
				operation: ['deleteSharepointSite'],
			},
		},
		default: '',
		placeholder: 'e.g. https://contoso.sharepoint.com/sites/MySite',
		description: 'The URL of the SharePoint site to delete',
	},
];
