import type { INodeProperties } from 'n8n-workflow';

const listOperations = [
	'listRooms',
	'listEquipment',
	'listRoomLists',
];

export const exchangeResourceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
			},
		},
		options: [
			{
				name: 'Add Equipment Mailbox',
				value: 'addEquipmentMailbox',
				description: 'Create a new equipment mailbox',
				action: 'Add equipment mailbox',
			},
			{
				name: 'Add Room List',
				value: 'addRoomList',
				description: 'Create a new room list',
				action: 'Add room list',
			},
			{
				name: 'Add Room Mailbox',
				value: 'addRoomMailbox',
				description: 'Create a new room mailbox',
				action: 'Add room mailbox',
			},
			{
				name: 'Edit Equipment Mailbox',
				value: 'editEquipmentMailbox',
				description: 'Edit an existing equipment mailbox',
				action: 'Edit equipment mailbox',
			},
			{
				name: 'Edit Room List',
				value: 'editRoomList',
				description: 'Edit an existing room list',
				action: 'Edit room list',
			},
			{
				name: 'Edit Room Mailbox',
				value: 'editRoomMailbox',
				description: 'Edit an existing room mailbox',
				action: 'Edit room mailbox',
			},
			{
				name: 'List Equipment',
				value: 'listEquipment',
				description: 'List all equipment mailboxes',
				action: 'List equipment',
			},
			{
				name: 'List Room Lists',
				value: 'listRoomLists',
				description: 'List all room lists',
				action: 'List room lists',
			},
			{
				name: 'List Rooms',
				value: 'listRooms',
				description: 'List all room mailboxes',
				action: 'List rooms',
			},
		],
		default: 'listRooms',
	},
];

export const exchangeResourceFields: INodeProperties[] = [
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
				resource: ['exchangeResource'],
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
				resource: ['exchangeResource'],
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
				resource: ['exchangeResource'],
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

	// ==================== Display Name (add operations) ====================
	{
		displayName: 'Display Name',
		name: 'erDisplayName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['addRoomMailbox', 'addEquipmentMailbox', 'addRoomList'],
			},
		},
		default: '',
		description: 'The display name for the resource',
	},

	// ==================== Username (add operations) ====================
	{
		displayName: 'Username',
		name: 'erUsername',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['addRoomMailbox', 'addEquipmentMailbox', 'addRoomList'],
			},
		},
		default: '',
		description: 'The username (alias) for the resource',
	},

	// ==================== Domain (add operations) ====================
	{
		displayName: 'Domain',
		name: 'erDomain',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['addRoomMailbox', 'addEquipmentMailbox', 'addRoomList'],
			},
		},
		default: '',
		placeholder: 'e.g. contoso.onmicrosoft.com',
		description: 'The domain for the resource email address',
	},

	// ==================== Additional JSON (addRoomMailbox) ====================
	{
		displayName: 'Additional JSON',
		name: 'erAdditionalJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['addRoomMailbox'],
			},
		},
		default: '{}',
		description: 'Additional properties to include when creating the room mailbox',
	},

	// ==================== Room JSON (editRoomMailbox) ====================
	{
		displayName: 'Room JSON',
		name: 'erRoomJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['editRoomMailbox'],
			},
		},
		default: '{}',
		description: 'The room mailbox properties to update as JSON',
	},

	// ==================== Equipment JSON (editEquipmentMailbox) ====================
	{
		displayName: 'Equipment JSON',
		name: 'erEquipmentJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['editEquipmentMailbox'],
			},
		},
		default: '{}',
		description: 'The equipment mailbox properties to update as JSON',
	},

	// ==================== Room List JSON (editRoomList) ====================
	{
		displayName: 'Room List JSON',
		name: 'erRoomListJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['exchangeResource'],
				operation: ['editRoomList'],
			},
		},
		default: '{}',
		description: 'The room list properties to update as JSON',
	},
];
