import { DecoderKeys } from './types';

const dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const dictLen = dict.length;
const fDict: string[] = [];
const rDict: { [key: string]: number } = {};
const fastLookup: { [key: string]: number } = {};
dict.match(/./g)?.forEach((c) => {
    rDict[c.charCodeAt(0)] = fDict.length;
    fastLookup[c] = fDict.length;
    fDict.push(c);
});

const DEFAULT_SEPERATOR = ':';
const MINUS_SIGN = '-'.charCodeAt(0);

const ITEM_LINK_PREFIX = '|H0:item';
const ITEM_LINK_SUFFIX = '|h|h';
const ITEM_LINK_PREFIX_LENGTH = ITEM_LINK_PREFIX.length;
const ITEM_LINK_SUFFIX_LENGTH = ITEM_LINK_SUFFIX.length;

function StringToInteger(value: string) {
    if (!value || value == '') return 0;

    let result = 0,
        start = 0,
        sign = 1,
        j = 0;
    if (value.charCodeAt(0) === MINUS_SIGN) {
        // sbyte(value, 1, 1) equivilent?
        start = 1;
        sign = -1;
    }
    for (let i = value.length - 1; i >= start; i--) {
        // indicies correct?
        const c = value.charCodeAt(i);
        if (!rDict[c]) return 0;
        result = result + rDict[c] * Math.pow(dictLen, j);
        j++;
    }
    return result * sign;
}

const StringToItemLink = (value: string) => {
    console.log(value);
    const ITEM_LINK_PREFIX = '|H0:item';
    const ITEM_LINK_SUFFIX = '|h|h';
    const LINK_COMPACT_DATA_SEPARATOR = '#';
    const LINK_COMPACT_DATA_OLD_ZERO_FIELD = '##';
    const LINK_COMPACT_DATA_NEW_ZERO_FIELD = '#0#';
    // this isn't 100% clean, but we want the last repetition to end on the separator
    // and zo_strsplit will collapse multiple separators anyway
    const LINK_COMPACT_DATA_REPLACEMENT = LINK_COMPACT_DATA_SEPARATOR + '0' + LINK_COMPACT_DATA_SEPARATOR;
    const LINK_ORIGINAL_DATA_SEPARATOR = ':';
    const LINK_PLACEHOLDER_PATTERN = '<(\\d+)>';

    const cache: { [key: string]: string } = {};
    function ExpandPlaceholder(match: string, p1: string, offset: number, string: string) {
        cache[p1] = cache[p1] || LINK_COMPACT_DATA_REPLACEMENT.repeat(parseInt(p1));
        return cache[p1];
    }

    function ExpandPlaceholderFix(match: string, p1: string, offset: number, string: string) {
        return LINK_COMPACT_DATA_REPLACEMENT.repeat(parseInt(p1) - 1);
    }

    function ExpandPlaceholderFix2(match: string, p1: string, offset: number, string: string) {
        return LINK_COMPACT_DATA_REPLACEMENT.repeat(parseInt(p1) / 2);
    }

    function FixOldEncoding(value: string, fields: string[]): string[] {
        let v2 = value;
        for (let i = 0; i < 2; i++) {
            v2 = v2.replace(new RegExp(LINK_COMPACT_DATA_OLD_ZERO_FIELD, 'g'), LINK_COMPACT_DATA_NEW_ZERO_FIELD);
        }

        if (fields.length > 22) {
            const expanded = v2.replace(new RegExp(LINK_PLACEHOLDER_PATTERN, 'g'), ExpandPlaceholderFix);
            fields = [ITEM_LINK_PREFIX].concat(expanded.split(LINK_COMPACT_DATA_SEPARATOR));
        }

        if (fields.length > 22) {
            const expanded = v2.replace(new RegExp(LINK_PLACEHOLDER_PATTERN, 'g'), ExpandPlaceholderFix2);
            fields = [ITEM_LINK_PREFIX].concat(expanded.split(LINK_COMPACT_DATA_SEPARATOR));
        }

        while (fields.length < 22) {
            fields.push('0');
        }

        if (fields.length !== 22) {
            console.log('SOMETHING IS VERY WRONG');
            return [];
        }
        return fields;
    }

    const expanded = value.replace(new RegExp(LINK_PLACEHOLDER_PATTERN, 'g'), ExpandPlaceholder);
    let fields = [ITEM_LINK_PREFIX].concat(expanded.split(LINK_COMPACT_DATA_SEPARATOR));
    if (fields.length !== 22) {
        fields = FixOldEncoding(value, fields);
    }

    for (let i = 2; i < fields.length; i++) {
        fields[i] = fastLookup[fields[i]].toString() || StringToInteger(fields[i]).toString();
    }
    return fields.join(LINK_ORIGINAL_DATA_SEPARATOR) + ITEM_LINK_SUFFIX;
};

export const decoders = {
    string: (value: string | number | boolean) => {
        if (!value || value === '') return '';
        return value.toString() ?? '';
    },
    boolean: (value: string) => {
        if (!value || value === '') return false;
        return true;
    },
    number: (value: string) => {
        if (!value || value === '') return 0;
        return parseInt(value) || 0;
    },
    integer: StringToInteger,
    base64: (value: string) => {
        console.log('TODO IMPLEMENT BASE64');
        return '';
    },
    id64: (value: string) => {
        console.log('TODO IMPLEMENT ID64');
        return '';
    },
    itemLink: StringToItemLink,
};

function DecodeValue(type: DecoderKeys, value: string) {
    if (type === 'dictionary') {
        return '@name';
    } else {
        return decoders[type](value);
    }
}

function DecodeData(
    encodedString: string,
    format: { [key: string]: DecoderKeys[] },
    seperator: string,
    dictionary?: object
) {
    let type: DecoderKeys[],
        version: number = -1;
    let data: string[] = [];
    seperator = seperator || DEFAULT_SEPERATOR;
    (encodedString + seperator).match(new RegExp(`([^${seperator}]+)(?=${seperator})`, 'g'))?.forEach((value) => {
        if (!type) {
            version = fastLookup[value] || StringToInteger(value);
            type = format[version] || format.default;
            if (!type) return;
            data.push(version.toString());
        } else {
            data.push(DecodeValue(type[data.length], value).toString());
        }
    });
    return { data, version };
}

export { DecodeData };
