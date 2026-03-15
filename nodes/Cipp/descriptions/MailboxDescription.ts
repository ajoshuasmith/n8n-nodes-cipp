import type { INodeProperties } from 'n8n-workflow';

// Operations that support returnAll / limit
const listOperations = [
	'listMailboxes',
	'listMailboxDetails',
	'listMailboxRules',
	'listMailboxMobileDevices',
	'listMailboxCAS',
	'listCalendarPermissions',
	'listContactPermissions',
	'listOoO',
	'listMailboxForwarding',
	'listRestrictedUsers',
	'listSharedMailboxStatistics',
	'listSharedMailboxAccountEnabled',
];

// Operations that require userId
const userIdOperations = [
	'convert',
	'enableArchive',
	'setForwarding',
	'setOutOfOffice',
	'listMailboxDetails',
	'listMailboxRules',
	'listMailboxMobileDevices',
	'listCalendarPermissions',
	'listContactPermissions',
	'listOoO',
	'editMailboxPermissions',
	'editCalendarPermissions',
	'modifyContactPerms',
	'removeMailboxRule',
	'setMailboxRule',
	'setMailboxQuota',
	'setLitigationHold',
	'setMailboxEmailSize',
	'setMailboxLocale',
	'setRetentionHold',
	'setRecipientLimits',
	'copyForSent',
	'hideFromGAL',
	'mailboxMobileDevices',
	'startManagedFolderAssistant',
	'enableAutoExpandingArchive',
	'scheduleMailboxVacation',
	'scheduleOOOVacation',
	'setMailboxRetentionPolicies',
	'removeRestrictedUser',
];

export const mailboxOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
			},
		},
		options: [
			{
				name: 'Add Shared Mailbox',
				value: 'addSharedMailbox',
				description: 'Create a new shared mailbox',
				action: 'Add shared mailbox',
			},
			{
				name: 'Convert',
				value: 'convert',
				description: 'Convert mailbox between shared and regular types',
				action: 'Convert mailbox',
			},
			{
				name: 'Copy for Sent',
				value: 'copyForSent',
				description: 'Set copy-for-sent items behavior on a shared mailbox',
				action: 'Copy for sent',
			},
			{
				name: 'Edit Calendar Permissions',
				value: 'editCalendarPermissions',
				description: 'Edit calendar permissions for a user',
				action: 'Edit calendar permissions',
			},
			{
				name: 'Edit Mailbox Permissions',
				value: 'editMailboxPermissions',
				description: 'Edit mailbox permissions (Full Access, Send As, Send on Behalf)',
				action: 'Edit mailbox permissions',
			},
			{
				name: 'Enable Archive',
				value: 'enableArchive',
				description: 'Enable online archive for a user',
				action: 'Enable archive',
			},
			{
				name: 'Enable Auto-Expanding Archive',
				value: 'enableAutoExpandingArchive',
				description: 'Enable auto-expanding archive for a user',
				action: 'Enable auto-expanding archive',
			},
			{
				name: 'Hide From GAL',
				value: 'hideFromGAL',
				description: 'Hide or unhide a mailbox from the Global Address List',
				action: 'Hide from GAL',
			},
			{
				name: 'High Volume Email',
				value: 'hveUser',
				description: 'Enable or disable high volume email for a user',
				action: 'High volume email',
			},
			{
				name: 'List Calendar Permissions',
				value: 'listCalendarPermissions',
				description: 'List calendar permissions for a user',
				action: 'List calendar permissions',
			},
			{
				name: 'List Contact Permissions',
				value: 'listContactPermissions',
				description: 'List contact folder permissions for a user',
				action: 'List contact permissions',
			},
			{
				name: 'List Mailbox CAS Settings',
				value: 'listMailboxCAS',
				description: 'List Client Access Settings for a mailbox',
				action: 'List mailbox CAS settings',
			},
			{
				name: 'List Mailbox Forwarding',
				value: 'listMailboxForwarding',
				description: 'List mailbox forwarding rules across a tenant',
				action: 'List mailbox forwarding',
			},
			{
				name: 'List Mailbox Mobile Devices',
				value: 'listMailboxMobileDevices',
				description: 'List mobile devices associated with a mailbox',
				action: 'List mailbox mobile devices',
			},
			{
				name: 'List Mailbox Details',
				value: 'listMailboxDetails',
				description: 'Get mailbox details including permissions for a user',
				action: 'List mailbox details',
			},
			{
				name: 'List Mailbox Rules',
				value: 'listMailboxRules',
				description: 'List inbox rules for a mailbox',
				action: 'List mailbox rules',
			},
			{
				name: 'List Mailboxes',
				value: 'listMailboxes',
				description: 'List all mailboxes in a tenant',
				action: 'List mailboxes',
			},
			{
				name: 'List Out of Office',
				value: 'listOoO',
				description: 'List out-of-office settings for a user',
				action: 'List out of office',
			},
			{
				name: 'List Restricted Users',
				value: 'listRestrictedUsers',
				description: 'List users restricted from sending email',
				action: 'List restricted users',
			},
			{
				name: 'List Shared Mailbox Account Enabled',
				value: 'listSharedMailboxAccountEnabled',
				description: 'List shared mailboxes with account sign-in enabled',
				action: 'List shared mailbox account enabled',
			},
			{
				name: 'List Shared Mailbox Statistics',
				value: 'listSharedMailboxStatistics',
				description: 'List shared mailbox statistics',
				action: 'List shared mailbox statistics',
			},
			{
				name: 'Manage Mobile Devices',
				value: 'mailboxMobileDevices',
				description: 'Manage mobile devices on a mailbox (wipe, block, allow)',
				action: 'Manage mobile devices',
			},
			{
				name: 'Manage Retention Policies',
				value: 'manageRetentionPolicies',
				description: 'Manage Exchange retention policies for a tenant',
				action: 'Manage retention policies',
			},
			{
				name: 'Manage Retention Tags',
				value: 'manageRetentionTags',
				description: 'Manage Exchange retention tags for a tenant',
				action: 'Manage retention tags',
			},
			{
				name: 'Modify Contact Permissions',
				value: 'modifyContactPerms',
				description: 'Modify contact folder permissions for a user',
				action: 'Modify contact permissions',
			},
			{
				name: 'Remove Mailbox Rule',
				value: 'removeMailboxRule',
				description: 'Remove an inbox rule from a mailbox',
				action: 'Remove mailbox rule',
			},
			{
				name: 'Remove Restricted User',
				value: 'removeRestrictedUser',
				description: 'Remove a user from the restricted senders list',
				action: 'Remove restricted user',
			},
			{
				name: 'Schedule Mailbox Vacation',
				value: 'scheduleMailboxVacation',
				description: 'Schedule mailbox vacation settings (permissions, calendar)',
				action: 'Schedule mailbox vacation',
			},
			{
				name: 'Schedule OOO Vacation',
				value: 'scheduleOOOVacation',
				description: 'Schedule out-of-office vacation auto-reply',
				action: 'Schedule OOO vacation',
			},
			{
				name: 'Set Email Forwarding',
				value: 'setForwarding',
				description: 'Manage email forwarding settings',
				action: 'Set email forwarding',
			},
			{
				name: 'Set Litigation Hold',
				value: 'setLitigationHold',
				description: 'Enable or disable litigation hold on a mailbox',
				action: 'Set litigation hold',
			},
			{
				name: 'Set Mailbox Email Size',
				value: 'setMailboxEmailSize',
				description: 'Set the maximum send/receive email size for a mailbox',
				action: 'Set mailbox email size',
			},
			{
				name: 'Set Mailbox Locale',
				value: 'setMailboxLocale',
				description: 'Set the language and locale for a mailbox',
				action: 'Set mailbox locale',
			},
			{
				name: 'Set Mailbox Quota',
				value: 'setMailboxQuota',
				description: 'Set mailbox storage quotas',
				action: 'Set mailbox quota',
			},
			{
				name: 'Set Mailbox Retention Policy',
				value: 'setMailboxRetentionPolicies',
				description: 'Assign a retention policy to a mailbox',
				action: 'Set mailbox retention policy',
			},
			{
				name: 'Set Mailbox Rule',
				value: 'setMailboxRule',
				description: 'Create or update an inbox rule on a mailbox',
				action: 'Set mailbox rule',
			},
			{
				name: 'Set Out of Office',
				value: 'setOutOfOffice',
				description: 'Set or disable out of office message',
				action: 'Set out of office',
			},
			{
				name: 'Set Recipient Limits',
				value: 'setRecipientLimits',
				description: 'Set the maximum number of recipients per message',
				action: 'Set recipient limits',
			},
			{
				name: 'Set Retention Hold',
				value: 'setRetentionHold',
				description: 'Enable or disable retention hold on a mailbox',
				action: 'Set retention hold',
			},
			{
				name: 'Start Managed Folder Assistant',
				value: 'startManagedFolderAssistant',
				description: 'Start the managed folder assistant to process retention policies',
				action: 'Start managed folder assistant',
			},
		],
		default: 'listMailboxes',
	},
];

export const mailboxFields: INodeProperties[] = [
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
				resource: ['mailbox'],
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

	// ==================== User ID (most operations) ====================
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: userIdOperations,
			},
		},
		default: '',
		placeholder: 'user@domain.com',
		description: 'The User Principal Name (UPN) of the mailbox owner',
	},

	// ==================== Return All / Limit (list operations) ====================
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['mailbox'],
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
				resource: ['mailbox'],
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

	// ==================== Convert Mailbox ====================
	{
		displayName: 'Mailbox Type',
		name: 'mailboxType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['convert'],
			},
		},
		options: [
			{ name: 'Shared', value: 'Shared' },
			{ name: 'Regular', value: 'Regular' },
		],
		default: 'Shared',
		description: 'The type to convert the mailbox to',
	},

	// ==================== Out of Office ====================
	{
		displayName: 'Auto-Reply State',
		name: 'autoReplyState',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setOutOfOffice'],
			},
		},
		options: [
			{ name: 'Enabled', value: 'Enabled' },
			{ name: 'Disabled', value: 'Disabled' },
		],
		default: 'Enabled',
		description: 'Whether to enable or disable the auto-reply',
	},
	{
		displayName: 'Auto-Reply Message',
		name: 'autoReplyMessage',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setOutOfOffice'],
				autoReplyState: ['Enabled'],
			},
		},
		default: '',
		description: 'The out of office message to set',
	},

	// ==================== Email Forwarding ====================
	{
		displayName: 'Forward To',
		name: 'forwardTo',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setForwarding'],
			},
		},
		default: '',
		placeholder: 'forward@domain.com',
		description: 'The email address to forward to (leave empty to disable)',
	},
	{
		displayName: 'Keep Copy',
		name: 'keepCopy',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setForwarding'],
			},
		},
		default: true,
		description: 'Whether to keep a copy of forwarded messages in the mailbox',
	},

	// ==================== Add Shared Mailbox ====================
	{
		displayName: 'Display Name',
		name: 'displayName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['addSharedMailbox'],
			},
		},
		default: '',
		description: 'The display name for the shared mailbox',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['addSharedMailbox'],
			},
		},
		default: '',
		placeholder: 'e.g. support',
		description: 'The username (alias) for the shared mailbox',
	},
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['addSharedMailbox'],
			},
		},
		default: '',
		placeholder: 'e.g. contoso.com',
		description: 'The domain for the shared mailbox email address',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['addSharedMailbox'],
			},
		},
		options: [
			{
				displayName: 'Auto-Mapping',
				name: 'autoMapping',
				type: 'boolean',
				default: true,
				description: 'Whether to auto-map the shared mailbox in Outlook',
			},
		],
	},

	// ==================== Edit Mailbox Permissions ====================
	{
		displayName: 'Permissions',
		name: 'permissions',
		type: 'collection',
		placeholder: 'Add Permission',
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['editMailboxPermissions'],
			},
		},
		options: [
			{
				displayName: 'Add Full Access',
				name: 'AddFullAccess',
				type: 'string',
				default: '',
				description: 'User to grant full access to (UPN)',
			},
			{
				displayName: 'Remove Full Access',
				name: 'RemoveFullAccess',
				type: 'string',
				default: '',
				description: 'User to remove full access from (UPN)',
			},
			{
				displayName: 'Add Send As',
				name: 'AddSendAs',
				type: 'string',
				default: '',
				description: 'User to grant send-as permission to (UPN)',
			},
			{
				displayName: 'Remove Send As',
				name: 'RemoveSendAs',
				type: 'string',
				default: '',
				description: 'User to remove send-as permission from (UPN)',
			},
			{
				displayName: 'Add Send on Behalf',
				name: 'AddSendOnBehalf',
				type: 'string',
				default: '',
				description: 'User to grant send-on-behalf permission to (UPN)',
			},
			{
				displayName: 'Remove Send on Behalf',
				name: 'RemoveSendOnBehalf',
				type: 'string',
				default: '',
				description: 'User to remove send-on-behalf permission from (UPN)',
			},
			{
				displayName: 'Auto-Mapping',
				name: 'AutoMapping',
				type: 'boolean',
				default: true,
				description: 'Whether to auto-map the mailbox in Outlook for full access users',
			},
		],
	},

	// ==================== Edit Calendar Permissions ====================
	{
		displayName: 'User to Modify',
		name: 'userToModify',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['editCalendarPermissions'],
			},
		},
		default: '',
		placeholder: 'user@domain.com',
		description: 'The user to add or modify calendar permissions for',
	},
	{
		displayName: 'Permission Level',
		name: 'permissionLevel',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['editCalendarPermissions'],
			},
		},
		options: [
			{ name: 'Author', value: 'Author' },
			{ name: 'Contributor', value: 'Contributor' },
			{ name: 'Editor', value: 'Editor' },
			{ name: 'None', value: 'None' },
			{ name: 'Non Editing Author', value: 'NonEditingAuthor' },
			{ name: 'Owner', value: 'Owner' },
			{ name: 'Publishing Author', value: 'PublishingAuthor' },
			{ name: 'Publishing Editor', value: 'PublishingEditor' },
			{ name: 'Reviewer', value: 'Reviewer' },
			{ name: 'Limited Details', value: 'LimitedDetails' },
			{ name: 'Availability Only', value: 'AvailabilityOnly' },
		],
		default: 'Reviewer',
		description: 'The calendar permission level to assign',
	},
	{
		displayName: 'Folder Name',
		name: 'folderName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['editCalendarPermissions'],
			},
		},
		default: 'Calendar',
		description: 'The calendar folder name (default: Calendar)',
	},

	// ==================== Modify Contact Permissions ====================
	{
		displayName: 'User to Modify',
		name: 'contactUserToModify',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['modifyContactPerms'],
			},
		},
		default: '',
		placeholder: 'user@domain.com',
		description: 'The user to add or modify contact folder permissions for',
	},
	{
		displayName: 'Permission Level',
		name: 'contactPermissionLevel',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['modifyContactPerms'],
			},
		},
		options: [
			{ name: 'Author', value: 'Author' },
			{ name: 'Contributor', value: 'Contributor' },
			{ name: 'Editor', value: 'Editor' },
			{ name: 'None', value: 'None' },
			{ name: 'Non Editing Author', value: 'NonEditingAuthor' },
			{ name: 'Owner', value: 'Owner' },
			{ name: 'Publishing Author', value: 'PublishingAuthor' },
			{ name: 'Publishing Editor', value: 'PublishingEditor' },
			{ name: 'Reviewer', value: 'Reviewer' },
		],
		default: 'Reviewer',
		description: 'The contact folder permission level to assign',
	},

	// ==================== Remove Mailbox Rule ====================
	{
		displayName: 'Rule Name',
		name: 'ruleName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['removeMailboxRule'],
			},
		},
		default: '',
		description: 'The name of the inbox rule to remove',
	},
	{
		displayName: 'Rule ID',
		name: 'ruleId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['removeMailboxRule'],
			},
		},
		default: '',
		description: 'The ID of the inbox rule to remove',
	},

	// ==================== Set Mailbox Rule ====================
	{
		displayName: 'Rule Name',
		name: 'setRuleName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxRule'],
			},
		},
		default: '',
		description: 'The name of the inbox rule to enable or disable',
	},
	{
		displayName: 'Rule ID',
		name: 'setRuleId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxRule'],
			},
		},
		default: '',
		description: 'The ID of the inbox rule',
	},
	{
		displayName: 'Action',
		name: 'ruleAction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxRule'],
			},
		},
		options: [
			{ name: 'Enable', value: 'Enable' },
			{ name: 'Disable', value: 'Disable' },
		],
		default: 'Enable',
		description: 'Whether to enable or disable the rule',
	},

	// ==================== Set Mailbox Quota ====================
	{
		displayName: 'Quota Type',
		name: 'quotaType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxQuota'],
			},
		},
		options: [
			{ name: 'Prohibit Send', value: 'ProhibitSendQuota' },
			{ name: 'Prohibit Send/Receive', value: 'ProhibitSendReceiveQuota' },
			{ name: 'Issue Warning', value: 'IssueWarningQuota' },
		],
		default: 'ProhibitSendQuota',
		description: 'The type of quota to set',
	},
	{
		displayName: 'Quota Value',
		name: 'quotaValue',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxQuota'],
			},
		},
		default: '50GB',
		placeholder: 'e.g. 50GB',
		description: 'The quota value (e.g. "50GB")',
	},

	// ==================== Set Litigation Hold ====================
	{
		displayName: 'Enabled',
		name: 'litigationHoldEnabled',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setLitigationHold'],
			},
		},
		default: true,
		description: 'Whether to enable or disable litigation hold',
	},
	{
		displayName: 'Duration (Days)',
		name: 'litigationHoldDuration',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setLitigationHold'],
				litigationHoldEnabled: [true],
			},
		},
		default: 0,
		description: 'Duration in days (0 = unlimited)',
	},

	// ==================== Set Mailbox Email Size ====================
	{
		displayName: 'Max Send Size (MB)',
		name: 'maxSendSize',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxEmailSize'],
			},
		},
		default: 35,
		description: 'Maximum email size for sending (in MB)',
	},
	{
		displayName: 'Max Receive Size (MB)',
		name: 'maxReceiveSize',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxEmailSize'],
			},
		},
		default: 36,
		description: 'Maximum email size for receiving (in MB)',
	},

	// ==================== Set Mailbox Locale ====================
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxLocale'],
			},
		},
		default: 'en-US',
		placeholder: 'e.g. en-US, de-DE, fr-FR',
		description: 'The language/locale code for the mailbox',
	},

	// ==================== Set Retention Hold ====================
	{
		displayName: 'Enabled',
		name: 'retentionHoldEnabled',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setRetentionHold'],
			},
		},
		default: true,
		description: 'Whether to enable or disable retention hold',
	},

	// ==================== Set Recipient Limits ====================
	{
		displayName: 'Recipient Limit',
		name: 'recipientLimit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setRecipientLimits'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 500,
		description: 'Maximum number of recipients per message',
	},

	// ==================== Copy for Sent ====================
	{
		displayName: 'Enabled',
		name: 'copyForSentEnabled',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['copyForSent'],
			},
		},
		default: true,
		description: 'Whether to save a copy of sent items in the shared mailbox sent folder',
	},

	// ==================== Hide From GAL ====================
	{
		displayName: 'Hidden',
		name: 'hiddenFromGAL',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['hideFromGAL'],
			},
		},
		default: true,
		description: 'Whether to hide the mailbox from the Global Address List',
	},

	// ==================== Manage Mobile Devices ====================
	{
		displayName: 'GUID',
		name: 'deviceGuid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['mailboxMobileDevices'],
			},
		},
		default: '',
		description: 'The GUID of the mobile device to manage',
	},
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['mailboxMobileDevices'],
			},
		},
		default: '',
		description: 'The device ID of the mobile device',
	},
	{
		displayName: 'Action',
		name: 'mobileAction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['mailboxMobileDevices'],
			},
		},
		options: [
			{ name: 'Quarantine (Block)', value: 'Quarantine' },
			{ name: 'Delete', value: 'Delete' },
		],
		default: 'Quarantine',
		description: 'The action to perform on the mobile device',
	},

	// ==================== High Volume Email ====================
	{
		displayName: 'Display Name',
		name: 'hveDisplayName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['hveUser'],
			},
		},
		default: '',
		description: 'The display name for the HVE user',
	},
	{
		displayName: 'Primary SMTP Address',
		name: 'hvePrimarySMTPAddress',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['hveUser'],
			},
		},
		default: '',
		placeholder: 'hve@domain.com',
		description: 'The primary SMTP address for the HVE user',
	},
	{
		displayName: 'Password',
		name: 'hvePassword',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['hveUser'],
			},
		},
		default: '',
		description: 'The password for the HVE user',
	},

	// ==================== Schedule Mailbox Vacation ====================
	{
		displayName: 'Start Date',
		name: 'vacationStartDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleMailboxVacation'],
			},
		},
		default: '',
		description: 'The start date/time of the vacation',
	},
	{
		displayName: 'End Date',
		name: 'vacationEndDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleMailboxVacation'],
			},
		},
		default: '',
		description: 'The end date/time of the vacation',
	},
	{
		displayName: 'Additional Options',
		name: 'vacationOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleMailboxVacation'],
			},
		},
		options: [
			{
				displayName: 'Forward To',
				name: 'ForwardTo',
				type: 'string',
				default: '',
				placeholder: 'user@domain.com',
				description: 'User to forward emails to during vacation',
			},
			{
				displayName: 'Keep Copy',
				name: 'KeepCopy',
				type: 'boolean',
				default: true,
				description: 'Whether to keep a copy in the original mailbox',
			},
			{
				displayName: 'Calendar Access User',
				name: 'CalendarAccessUser',
				type: 'string',
				default: '',
				placeholder: 'user@domain.com',
				description: 'User to grant calendar access to',
			},
			{
				displayName: 'Calendar Permission',
				name: 'CalendarPermission',
				type: 'options',
				options: [
					{ name: 'Author', value: 'Author' },
					{ name: 'Editor', value: 'Editor' },
					{ name: 'Reviewer', value: 'Reviewer' },
				],
				default: 'Reviewer',
				description: 'The calendar permission level to grant',
			},
		],
	},

	// ==================== Schedule OOO Vacation ====================
	{
		displayName: 'Start Date',
		name: 'oooStartDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleOOOVacation'],
			},
		},
		default: '',
		description: 'The start date/time for the auto-reply',
	},
	{
		displayName: 'End Date',
		name: 'oooEndDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleOOOVacation'],
			},
		},
		default: '',
		description: 'The end date/time for the auto-reply',
	},
	{
		displayName: 'Internal Message',
		name: 'oooInternalMessage',
		type: 'string',
		typeOptions: { rows: 4 },
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleOOOVacation'],
			},
		},
		default: '',
		description: 'The auto-reply message for internal recipients',
	},
	{
		displayName: 'External Message',
		name: 'oooExternalMessage',
		type: 'string',
		typeOptions: { rows: 4 },
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['scheduleOOOVacation'],
			},
		},
		default: '',
		description: 'The auto-reply message for external recipients (optional)',
	},

	// ==================== Manage Retention Policies ====================
	{
		displayName: 'Action',
		name: 'retentionPolicyAction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['manageRetentionPolicies'],
			},
		},
		options: [
			{ name: 'List', value: 'List' },
			{ name: 'Create', value: 'Create' },
			{ name: 'Delete', value: 'Delete' },
		],
		default: 'List',
		description: 'The retention policy action to perform',
	},
	{
		displayName: 'Policy Name',
		name: 'retentionPolicyName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['manageRetentionPolicies'],
				retentionPolicyAction: ['Create', 'Delete'],
			},
		},
		default: '',
		description: 'The name of the retention policy',
	},

	// ==================== Manage Retention Tags ====================
	{
		displayName: 'Action',
		name: 'retentionTagAction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['manageRetentionTags'],
			},
		},
		options: [
			{ name: 'List', value: 'List' },
			{ name: 'Create', value: 'Create' },
			{ name: 'Delete', value: 'Delete' },
		],
		default: 'List',
		description: 'The retention tag action to perform',
	},
	{
		displayName: 'Tag Name',
		name: 'retentionTagName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['manageRetentionTags'],
				retentionTagAction: ['Create', 'Delete'],
			},
		},
		default: '',
		description: 'The name of the retention tag',
	},

	// ==================== Set Mailbox Retention Policy ====================
	{
		displayName: 'Retention Policy Name',
		name: 'retentionPolicyToSet',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['mailbox'],
				operation: ['setMailboxRetentionPolicies'],
			},
		},
		default: '',
		description: 'The name of the retention policy to assign to the mailbox',
	},
];
