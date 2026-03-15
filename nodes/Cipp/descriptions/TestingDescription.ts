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
			resource: ['testing'],
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

export const testingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['testing'],
			},
		},
		options: [
			{
				name: 'Add Test Report',
				value: 'addTestReport',
				description: 'Add a new test report',
				action: 'Add test report',
			},
			{
				name: 'Delete Test Report',
				value: 'deleteTestReport',
				description: 'Delete a test report',
				action: 'Delete test report',
			},
			{
				name: 'Execute Test Run',
				value: 'execTestRun',
				description: 'Execute a test run',
				action: 'Execute test run',
			},
			{
				name: 'List Available Tests',
				value: 'listAvailableTests',
				description: 'List all available tests',
				action: 'List available tests',
			},
			{
				name: 'List Test Reports',
				value: 'listTestReports',
				description: 'List all test reports',
				action: 'List test reports',
			},
			{
				name: 'List Tests',
				value: 'listTests',
				description: 'List all tests',
				action: 'List tests',
			},
		],
		default: 'listTests',
	},
];

// ────────────────── Fields ──────────────────

export const testingFields: INodeProperties[] = [
	// Shared: Tenant
	tenantSelector,

	// Return All / Limit for list operations
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['testing'],
				operation: ['listTests', 'listAvailableTests', 'listTestReports'],
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
				resource: ['testing'],
				operation: ['listTests', 'listAvailableTests', 'listTestReports'],
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

	// Test JSON for execTestRun
	{
		displayName: 'Test JSON',
		name: 'testJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['testing'],
				operation: ['execTestRun'],
			},
		},
		default: '{}',
		description: 'JSON object containing the test run configuration',
	},

	// Report JSON for addTestReport
	{
		displayName: 'Report JSON',
		name: 'reportJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['testing'],
				operation: ['addTestReport'],
			},
		},
		default: '{}',
		description: 'JSON object containing the test report properties',
	},

	// ID for deleteTestReport
	{
		displayName: 'Report ID',
		name: 'testReportId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['testing'],
				operation: ['deleteTestReport'],
			},
		},
		default: '',
		description: 'The ID of the test report to delete',
	},
];
