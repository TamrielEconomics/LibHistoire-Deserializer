import { Level, Quality, QualityColors, VR } from './types';
import { ESOItemBase, ESOItemName } from './ESOItem';
import { NonFunctionProperties } from '../types';

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
] as const;

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
] as const;

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
] as const;

class _Item implements ESOItemBase {
    esoItemType: ESOItemName = 'Item';

    constructor(
        public id: number,
        public enchantId: number,
        public level: Level,
        public quality: Quality,
        public style: number,
        public crafted: boolean,
        public charges: number,
        public trait: string // private itemtype1: string, // private itemtype2: string
    ) {}

    // static FromObject(obj: ItemFields) {
    //     return new Item(obj.id, obj.enchantId, obj.level, obj.quality, obj.style, obj.crafted, obj.charges, obj.trait);
    // }

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
export interface IItem
    extends Omit<_Item, 'id' | 'enchantId' | 'level' | 'quality' | 'style' | 'crafted' | 'charges' | 'trait'> {}

const Item: new (
    id: number,
    enchantId: number,
    level: Level,
    quality: Quality,
    style: number,
    crafted: boolean,
    charges: number,
    trait: string
) => IItem = _Item;
export default Item;

export type ItemFields = NonFunctionProperties<_Item>;
