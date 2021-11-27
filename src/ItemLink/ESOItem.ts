import Item, { IItem, ItemFields } from './Item';
import Potion, { IPotion, PotionFields } from './Potion';
import Writ, { IWrit, WritFields } from './Writ';

export type ESOItem = IItem | IPotion | IWrit;
export type ESOItemName = 'Item' | 'Potion' | 'Writ';

export interface ESOItemBase {
    esoItemType: ESOItemName;
}

export const GetEsoItemFromObject = (obj: ItemFields | PotionFields | WritFields) => {
    switch (obj.esoItemType) {
        case 'Item': {
            const i = obj as ItemFields;
            return new Item(i.id, i.enchantId, i.level, i.quality, i.style, i.crafted, i.charges, i.trait);
        }
        case 'Potion': {
            const p = obj as PotionFields;
            return new Potion(p.id, p.level, p.potionEffect);
        }
        case 'Writ': {
            const w = obj as WritFields;
            return new Writ(w.id, w.vouchers);
        }
        default: {
            return null;
        }
    }
};
