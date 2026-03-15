import type { INodeProperties } from 'n8n-workflow';

const listOperations = [
	'listSpamFilters',
	'listTransportRules',
	'listExchangeConnectors',
	'listConnectionFilters',
	'listAntiPhishingFilters',
	'listMalwareFilters',
	'listSafeAttachmentsFilters',
	'listTenantAllowBlockList',
];

export const emailSecurityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
			},
		},
		options: [
			{
				name: 'Add Connection Filter',
				value: 'addConnectionFilter',
				description: 'Add a connection filter policy',
				action: 'Add connection filter',
			},
			{
				name: 'Add Exchange Connector',
				value: 'addExConnector',
				description: 'Add an Exchange connector',
				action: 'Add Exchange connector',
			},
			{
				name: 'Add Spam Filter',
				value: 'addSpamFilter',
				description: 'Add a spam filter policy',
				action: 'Add spam filter',
			},
			{
				name: 'Add Tenant Allow/Block List',
				value: 'addTenantAllowBlockList',
				description: 'Add an entry to the tenant allow/block list',
				action: 'Add tenant allow block list',
			},
			{
				name: 'Add Transport Rule',
				value: 'addTransportRule',
				description: 'Add a transport rule',
				action: 'Add transport rule',
			},
			{
				name: 'Edit Anti-Phishing Filter',
				value: 'editAntiPhishingFilter',
				description: 'Edit an anti-phishing filter policy',
				action: 'Edit anti-phishing filter',
			},
			{
				name: 'Edit Exchange Connector',
				value: 'editExConnector',
				description: 'Edit an Exchange connector',
				action: 'Edit Exchange connector',
			},
			{
				name: 'Edit Malware Filter',
				value: 'editMalwareFilter',
				description: 'Edit a malware filter policy',
				action: 'Edit malware filter',
			},
			{
				name: 'Edit Spam Filter',
				value: 'editSpamFilter',
				description: 'Edit a spam filter policy',
				action: 'Edit spam filter',
			},
			{
				name: 'Edit Transport Rule',
				value: 'editTransportRule',
				description: 'Edit a transport rule',
				action: 'Edit transport rule',
			},
			{
				name: 'List Anti-Phishing Filters',
				value: 'listAntiPhishingFilters',
				description: 'List all anti-phishing filter policies',
				action: 'List anti-phishing filters',
			},
			{
				name: 'List Connection Filters',
				value: 'listConnectionFilters',
				description: 'List all connection filter policies',
				action: 'List connection filters',
			},
			{
				name: 'List Exchange Connectors',
				value: 'listExchangeConnectors',
				description: 'List all Exchange connectors',
				action: 'List Exchange connectors',
			},
			{
				name: 'List Malware Filters',
				value: 'listMalwareFilters',
				description: 'List all malware filter policies',
				action: 'List malware filters',
			},
			{
				name: 'List Safe Attachments Filters',
				value: 'listSafeAttachmentsFilters',
				description: 'List all Safe Attachments filter policies',
				action: 'List Safe Attachments filters',
			},
			{
				name: 'List Spam Filters',
				value: 'listSpamFilters',
				description: 'List all spam filter policies',
				action: 'List spam filters',
			},
			{
				name: 'List Tenant Allow/Block List',
				value: 'listTenantAllowBlockList',
				description: 'List tenant allow/block list entries',
				action: 'List tenant allow block list',
			},
			{
				name: 'List Transport Rules',
				value: 'listTransportRules',
				description: 'List all transport rules',
				action: 'List transport rules',
			},
			{
				name: 'Remove Exchange Connector',
				value: 'removeExConnector',
				description: 'Remove an Exchange connector',
				action: 'Remove Exchange connector',
			},
			{
				name: 'Remove Spam Filter',
				value: 'removeSpamFilter',
				description: 'Remove a spam filter policy',
				action: 'Remove spam filter',
			},
			{
				name: 'Remove Tenant Allow/Block List',
				value: 'removeTenantAllowBlockList',
				description: 'Remove an entry from the tenant allow/block list',
				action: 'Remove tenant allow block list',
			},
			{
				name: 'Remove Transport Rule',
				value: 'removeTransportRule',
				description: 'Remove a transport rule',
				action: 'Remove transport rule',
			},
		],
		default: 'listSpamFilters',
	},
];

export const emailSecurityFields: INodeProperties[] = [
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
				resource: ['emailSecurity'],
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
				resource: ['emailSecurity'],
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
				resource: ['emailSecurity'],
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

	// ==================== Name (for remove operations) ====================
	{
		displayName: 'Name',
		name: 'esName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['removeSpamFilter', 'removeTransportRule', 'removeExConnector'],
			},
		},
		default: '',
		description: 'The name of the item to remove',
	},

	// ==================== Spam Filter JSON (add/edit) ====================
	{
		displayName: 'Policy JSON',
		name: 'esSpamFilterJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['addSpamFilter', 'editSpamFilter'],
			},
		},
		default: '{}',
		description: 'The spam filter policy definition as JSON',
	},

	// ==================== Transport Rule JSON (add/edit) ====================
	{
		displayName: 'Rule JSON',
		name: 'esTransportRuleJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['addTransportRule', 'editTransportRule'],
			},
		},
		default: '{}',
		description: 'The transport rule definition as JSON',
	},

	// ==================== Exchange Connector JSON (add/edit) ====================
	{
		displayName: 'Connector JSON',
		name: 'esConnectorJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['addExConnector', 'editExConnector'],
			},
		},
		default: '{}',
		description: 'The Exchange connector definition as JSON',
	},

	// ==================== Connection Filter JSON (add) ====================
	{
		displayName: 'Filter JSON',
		name: 'esConnectionFilterJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['addConnectionFilter'],
			},
		},
		default: '{}',
		description: 'The connection filter policy definition as JSON',
	},

	// ==================== Anti-Phishing Filter JSON (edit) ====================
	{
		displayName: 'Filter JSON',
		name: 'esAntiPhishingFilterJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['editAntiPhishingFilter'],
			},
		},
		default: '{}',
		description: 'The anti-phishing filter policy definition as JSON',
	},

	// ==================== Malware Filter JSON (edit) ====================
	{
		displayName: 'Filter JSON',
		name: 'esMalwareFilterJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['editMalwareFilter'],
			},
		},
		default: '{}',
		description: 'The malware filter policy definition as JSON',
	},

	// ==================== Tenant Allow/Block List JSON (add/remove) ====================
	{
		displayName: 'Block List JSON',
		name: 'esBlockListJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailSecurity'],
				operation: ['addTenantAllowBlockList', 'removeTenantAllowBlockList'],
			},
		},
		default: '{}',
		description: 'The tenant allow/block list entry definition as JSON',
	},
];
