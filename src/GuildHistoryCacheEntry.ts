import { DecodeData } from './codec';
import { DecoderKeys, GuildEvents } from './types';

const INDEX_EVENT_TYPE = 0; // enum (EventType)
const INDEX_EVENT_TIME = 1; // integer
const INDEX_PARAM_1 = 2; // mixed
const INDEX_PARAM_2 = 3; // mixed
const INDEX_PARAM_3 = 4; // mixed
const INDEX_PARAM_4 = 5; // mixed
const INDEX_PARAM_5 = 6; // mixed
const INDEX_PARAM_6 = 7; // mixed
const INDEX_EVENT_ID = 8; // integer

const VERSION = 1;
const FIELD_SEPARATOR = ';';
const EVENT_ID_SEARCH_STRING_TEMPLATE = ';%s;';
const FIELD_FORMAT: { [key: string]: DecoderKeys[] } = {
    1: ['integer', 'integer', 'integer', 'string'],
};

const CURRENT_FIELD_FORMAT = FIELD_FORMAT[VERSION];

const PARAM_SEPARATOR = ':';
const PARAMS_FORMAT_NO_DATA: DecoderKeys[] = [
    'integer', // eventType
];

const PARAMS_FORMAT_ONE_NAME: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
];

const PARAMS_FORMAT_TWO_NAMES: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
    'dictionary', // param 2
];

const PARAMS_FORMAT_NAME_INTEGER: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
    'integer', // param 2
];

const PARAMS_FORMAT_THREE_NAMES: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
    'dictionary', // param 2
    'dictionary', // param 3
];

const PARAMS_FORMAT_NAME_INTEGER_NAME: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
    'integer', // param 2
    'dictionary', // param 3
];

const PARAMS_FORMAT_NAME_INTEGER_LINK: DecoderKeys[] = [
    'integer', // eventType
    'dictionary', // param 1
    'integer', // param 2
    'itemLink', // param 3
];

const PARAMS_FORMAT: { [key: string]: { [key: string]: DecoderKeys[] } } = {
    1: {
        default: [
            'integer', // eventType
            'base64', // param 1
            'base64', // param 2
            'base64', // param 3
            'base64', // param 4
            'base64', // param 5
            'base64', // param 6
        ],
        [GuildEvents.GUILD_EVENT_GUILD_PROMOTE.toString()]: PARAMS_FORMAT_THREE_NAMES, // (eventType, displayName1, displayName2, rankName)
        [GuildEvents.GUILD_EVENT_GUILD_DEMOTE.toString()]: PARAMS_FORMAT_THREE_NAMES, // (eventType, displayName1, displayName2, rankName)
        [GuildEvents.GUILD_EVENT_GUILD_CREATE.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_GUILD_INVITE.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_GUILD_JOIN.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, joinerDisplayName, optionalInviterDisplayName)
        [GuildEvents.GUILD_EVENT_GUILD_LEAVE.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_GUILD_KICKED.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_BANKITEM_ADDED.toString()]: PARAMS_FORMAT_NAME_INTEGER_LINK, // (eventType, displayName, itemQuantity, itemName)
        [GuildEvents.GUILD_EVENT_BANKITEM_REMOVED.toString()]: PARAMS_FORMAT_NAME_INTEGER_LINK, // (eventType, displayName, itemQuantity, itemName)
        [GuildEvents.GUILD_EVENT_BANKGOLD_ADDED.toString()]: PARAMS_FORMAT_NAME_INTEGER, // (eventType, displayName, goldQuantity)
        [GuildEvents.GUILD_EVENT_BANKGOLD_REMOVED.toString()]: PARAMS_FORMAT_NAME_INTEGER, // (eventType, displayName, goldQuantity)
        [GuildEvents.GUILD_EVENT_BANKGOLD_KIOSK_BID_REFUND.toString()]: PARAMS_FORMAT_NAME_INTEGER, // (eventType, kioskName, goldQuantity)
        [GuildEvents.GUILD_EVENT_BANKGOLD_KIOSK_BID.toString()]: PARAMS_FORMAT_NAME_INTEGER_NAME, // (eventType, displayName, goldQuantity, kioskName)
        [GuildEvents.GUILD_EVENT_GUILD_KIOSK_PURCHASED.toString()]: PARAMS_FORMAT_NAME_INTEGER_NAME, // (eventType, displayName, goldQuantity, kioskName)
        [GuildEvents.GUILD_EVENT_BANKGOLD_GUILD_STORE_TAX.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_MOTD_EDITED.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_ABOUT_US_EDITED.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_KEEP_CLAIMED.toString()]: PARAMS_FORMAT_THREE_NAMES, // (eventType, displayName, keepName, campaignName)
        [GuildEvents.GUILD_EVENT_KEEP_RELEASED.toString()]: PARAMS_FORMAT_THREE_NAMES, // (eventType, displayName, keepName, campaignName)
        [GuildEvents.GUILD_EVENT_KEEP_LOST.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, keepName, campaignName)
        [GuildEvents.GUILD_EVENT_HERALDRY_EDITED.toString()]: PARAMS_FORMAT_NAME_INTEGER, // (eventType, displayName, goldCost)
        [GuildEvents.GUILD_EVENT_GUILD_STORE_UNLOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_STORE_LOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_BANK_UNLOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_BANK_LOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_STANDARD_UNLOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_STANDARD_LOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_KIOSK_UNLOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_KIOSK_LOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_TABARD_UNLOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_TABARD_LOCKED.toString()]: PARAMS_FORMAT_NO_DATA, // (eventType)
        [GuildEvents.GUILD_EVENT_GUILD_APPLICATION_DECLINED.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_GUILD_APPLICATION_ACCEPTED.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_REMOVED_FROM_BLACKLIST.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_ADDED_TO_BLACKLIST.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_EDIT_BLACKLIST_NOTE.toString()]: PARAMS_FORMAT_TWO_NAMES, // (eventType, displayName1, displayName2)
        [GuildEvents.GUILD_EVENT_GUILD_RECRUITMENT_GUILD_LISTED.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_GUILD_RECRUITMENT_GUILD_UNLISTED.toString()]: PARAMS_FORMAT_ONE_NAME, // (eventType, displayName)
        [GuildEvents.GUILD_EVENT_ITEM_SOLD.toString()]: [
            'integer', // eventType
            'dictionary', // sellerName
            'dictionary', // buyerName
            'integer', // quantity
            'itemLink', // itemLink
            'integer', // price
            'integer', // tax
        ],
    },
};

export function Deserialize(serializedData: string) {
    const idOffset = 0,
        timeOffset = 0;
    const info = [];

    const { data, version } = DecodeData(serializedData, FIELD_FORMAT, FIELD_SEPARATOR); // version return 0 instead of 1, issue?
    let i = 1;
    info[INDEX_EVENT_TIME] = data[i] + timeOffset;
    i++;
    info[INDEX_EVENT_ID] = data[i] + idOffset;
    i++;
    const serializedParams = data[i];
    console.log(serializedParams);

    const paramsFormat = PARAMS_FORMAT[version];
    const { data: params, version: eventType } = DecodeData(serializedParams, paramsFormat, PARAM_SEPARATOR, {});
    info[INDEX_EVENT_TYPE] = eventType;
    console.log(params);
    for (let i = 1; i < params.length; i++) {
        info[INDEX_PARAM_1 + i - 1] = params[i];
    }

    return info;
}
