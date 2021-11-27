import { Level, Quality, QualityColors, VR } from './types';
import { ESOItemBase, ESOItemName } from './ESOItem';

export const ArmorTraits = [
    'Divines',
    'Invigorating',
    'Impenetrable',
    'Infused',
    'Nirnhoned',
    'Reinforced',
    'Sturdy',
    'Training',
    'Well Fitted',
    'Ornate',
    'Intricate',
];

export const WeaponTraits = [
    'Charged',
    'Defending',
    'Infused',
    'Nirnhoned',
    'Powered',
    'Precise',
    'Sharpened',
    'Training',
    'Decisive',
    'Ornate',
    'Intricate',
];

export const JewelryTraits = [
    'Bloodthirsty',
    'Harmony',
    'Healthy',
    'Infused',
    'Protective',
    'Robust',
    'Swift',
    'Triune',
    'Ornate',
    'Intricate',
];

export default class Item implements ESOItemBase {
    esoItemType: ESOItemName = 'Item';

    constructor(
        private id: number,
        private enchantId: number,
        private level: Level,
        private quality: Quality,
        private style: number,
        private crafted: boolean,
        private charges: number,
        private trait: string // private itemtype1: string, // private itemtype2: string
    ) {}

    GetLevel() {
        switch (this.level.vr) {
            case VR.NOVR:
                return `Level ${this.level.level}`;
            default:
                return `CP ${this.level.vr.valueOf() - 50}0`;
        }
    }

    GetQuality() {
        return this.quality.toString();
    }

    GetQualityColor() {
        return QualityColors[this.quality];
    }

    GetTrait() {
        return this.trait;
    }
}
