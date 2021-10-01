/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
/*
 * |H0/1:item:Id:SubType:InternalLevel:EnchantId:EnchantSubType:EnchantLevel:Writ1/TransmuteTrait:Writ2:Writ3:Writ4:Writ5:Writ6:0:0:0:Style:Crafted:Bound:Stolen:Charges:PotionEffect/WritReward|hName|h
 * 0: |H0/1
 * 1: "item"
 * 2: Id
 * 3: SubType
 * 4: InternalLevel
 * 5: EnchantId
 * 6: EnchantSubType
 * 7: EnchantLevel
 * 8: Writ1 / TransmuteTrait
 * 9: Writ2
 * 10: Writ3
 * 11: Writ4
 * 12: Writ5
 * 13: Writ6
 * 14: 0
 * 15: 0
 * 16: 0
 * 17: Style
 * 18: Crafted
 * 19: Bound
 * 20: Stolen
 * 21: Charges
 * 22: PotionEffect/WritReward (|h|h)
 */
import Item from './Item';
import Potion from './Potion';
import { Level, LinkType, SubTypeMap } from './types';
import Writ from './Writ';

// interface Item {
//     id: number;
//     enchantId: number;
//     level: number | VR;
//     quality: Quality;
//     style: number;
//     crafted: boolean;
//     charges: number;
// }

// interface Potion {
//     level: number | VR;
//     potionEffect: number;
// }

interface RawData {
    id: number;
    subType: number;
    /** 0-50_indicating items level (CP items always 50) */
    internalLevel: number;
    /** ID of any enchantments on the gear. 0 for none */
    enchantId: number;
    /** Same as subtype but for an enchantment */
    enchantSubType: number;
    /** Same as internal level */
    enchantLevel: number;
    /** If transmuted_the new trait for the item. Otherwise:
     *
     * **Alchemy**: 199 = potion_239 = poison
     *
     * **Enchanting**: Glyph ID
     *
     * **Provisioning**: Food item ID
     *
     * **Gear**: Item Type
     *
     * **Jewelry**: Item Type
     *
     */
    writ1OrTransmute: number;
    /**
     * **Alchemy**: Potion effect
     *
     * **Enchanting**: 207 (related to the glyph level)
     *
     * **Provisioning**: 0
     *
     * **Gear**: Craft Type
     *
     * **Jewelry**: 255
     *
     */
    writ2: number;
    /**
     * **Alchemy**: Potion effect
     *
     * **Enchanting**: Quality (1-5)
     *
     * **Provisioning**: 0
     *
     * **Gear**: Quality (1-5)
     *
     * **Jewelry**: Quality (1-5)
     *
     */
    writ3: number;
    /**
     * **Alchemy**: Potion effect
     *
     * **Enchanting**: 0
     *
     * **Provisioning**: 0
     *
     * **Gear**: Set index
     *
     * **Jewelry**: Set index
     *
     */
    writ4: number;
    /**
     * **Alchemy**: 0
     *
     * **Enchanting**: 0
     *
     * **Provisioning**: 0
     *
     * **Gear**: Trait
     *
     * **Jewelry**: Trait
     *
     */
    writ5: number;
    /**
     * **Alchemy**: 0
     *
     * **Enchanting**: 0
     *
     * **Provisioning**: 0
     *
     * **Gear**: Style
     *
     * **Jewelry**: 0
     *
     */
    writ6: number;
    /** Armor style ID */
    style: number;
    /** 1 if the item is crafted */
    crafted: boolean;
    /** 1 if the item is bound to the player */
    bound: boolean;
    /** 1 if the item is stolen */
    stolen: boolean;
    /** Charges left on a weapon_or the durability left on armor */
    charges: number;
    /** For writ rewards_divide by 10000 and round up */
    potionEffectOrWritReward: number;
}

export default class ItemLink {
    /* https://esoitem.uesp.net/itemSearch.php
     * https://esoitem.uesp.net/itemLink.php?itemid=45350
     * https://en.uesp.net/wiki/Online:Item_Link
     *
     * |H0/1:item:Id:SubType:InternalLevel:EnchantId:EnchantSubType:EnchantLevel:Writ1/TransmuteTrait:Writ2:Writ3:Writ4:Writ5:Writ6:0:0:0:Style:Crafted:Bound:Stolen:Charges:PotionEffect/WritReward|hName|h
     * 0: |H0/1
     * 1: "item"
     * 2: Id
     * 3: SubType
     * 4: InternalLevel
     * 5: EnchantId
     * 6: EnchantSubType
     * 7: EnchantLevel
     * 8: Writ1 / TransmuteTrait
     * 9: Writ2
     * 10: Writ3
     * 11: Writ4
     * 12: Writ5
     * 13: Writ6
     * 14: 0
     * 15: 0
     * 16: 0
     * 17: Style
     * 18: Crafted
     * 19: Bound
     * 20: Stolen
     * 21: Charges
     * 22: PotionEffect/WritReward (|h|h)
     */
    rawData: RawData;

    linkType: LinkType;

    item: Writ | Item | Potion;

    constructor(private link: string, trait?: string) {
        this.link = link.replace('|H0:item:', '').replace('|h|h', '');
        const fields = this.link.split(':');
        this.rawData = {
            id: parseInt(fields[0], 10),
            subType: parseInt(fields[1], 10),
            internalLevel: parseInt(fields[2], 10),
            enchantId: parseInt(fields[3], 10),
            enchantSubType: parseInt(fields[4], 10),
            enchantLevel: parseInt(fields[5], 10),
            writ1OrTransmute: parseInt(fields[6], 10),
            writ2: parseInt(fields[7], 10),
            writ3: parseInt(fields[8], 10),
            writ4: parseInt(fields[9], 10),
            writ5: parseInt(fields[10], 10),
            writ6: parseInt(fields[11], 10),
            style: parseInt(fields[15], 10),
            crafted: parseInt(fields[16], 10) > 0,
            bound: parseInt(fields[17], 10) > 0,
            stolen: parseInt(fields[18], 10) > 0,
            charges: parseInt(fields[19], 10),
            potionEffectOrWritReward: parseInt(fields[20].replace(/[^0-9]/g, ''), 10),
        };

        if (this.rawData.writ1OrTransmute !== 0 || this.rawData.writ2 !== 0) {
            this.linkType = LinkType.WRIT;
            this.item = new Writ(this.rawData.id, this.rawData.potionEffectOrWritReward);
        } else if (this.rawData.potionEffectOrWritReward !== 0) {
            this.linkType = LinkType.POTION;
            const subTypeInfo = SubTypeMap[this.rawData.subType];
            this.item = new Potion(
                this.rawData.id,
                {
                    level: this.rawData.internalLevel,
                    vr: subTypeInfo.level,
                } as Level,
                this.rawData.potionEffectOrWritReward
            );
        } else {
            this.linkType = LinkType.ITEM;
            const subTypeInfo = SubTypeMap[this.rawData.subType];
            this.item = new Item(
                this.rawData.id,
                this.rawData.enchantId,
                {
                    level: this.rawData.internalLevel,
                    vr: subTypeInfo.level,
                } as Level,
                subTypeInfo.quality,
                this.rawData.style,
                this.rawData.crafted,
                this.rawData.charges,
                trait ?? ''
            );
        }
    }

    compress() {
        return ItemLink.compress(this.link);
    }

    static compress(link: string) {
        let seg: Array<string | number[]> = [];
        let c = 1;
        link.split(':').reduce((prev, curr, i, arr) => {
            if (prev === curr && i < arr.length - 1) {
                c++;
            } else if (prev === curr) {
                // the last value is the same as the previous
                seg.push(`${arr[i - 1]}<${++c}>`);
            } else {
                if (c > 2) {
                    // if the repetition count is greater then 2, compress the value
                    seg.push(`${arr[i - 1]}<${c}>`);
                } else {
                    seg.push(new Array(c).fill(arr[i - 1]));
                }
                if (i === arr.length - 1) {
                    // we are at the last value, and it is different then the previous
                    seg.push(new Array(1).fill(arr[i]));
                }
                c = 1;
            }
            return curr;
        });
        return seg.flat().join(':');
    }

    static decompress(link: string) {
        return link
            .split(':')
            .map((seg) => {
                const match = /(\d+)<(\d+)>/.exec(seg);
                return match ? new Array(parseInt(match[2])).fill(match[1]) : seg;
            })
            .flat()
            .join(':');
    }

    // toString() {
    //     if ((this.item as Writ).vouchers !== undefined) {
    //         if ((this.item as AlchemyWrit).effectOne !== undefined) {
    //             const writ = this.item as AlchemyWrit;
    //             return `${writ.vouchers}-${writ.potion}-${writ.effectOne}-${writ.effectTwo}-${writ.effectThree}`;
    //         } else if ((this.item as EnchantingWrit).glyphId !== undefined) {
    //             const writ = item as EnchantingWrit;
    //             return `${writ.vouchers}-${writ.glyphId}-${writ.quality}`;
    //         } else if ((this.item as ProvisioningWrit).foodId !== undefined) {
    //             const writ = item as ProvisioningWrit;
    //             return `${writ.vouchers}-${writ.foodId}`;
    //         } else if ((this.item as GearWrit).trait !== undefined) {
    //             const writ = item as GearWrit;
    //             return `${writ.vouchers}-${writ.item}-${writ.quality}-${writ.trait}-${writ.style}`;
    //         }
    //     } else if ((this.item as Item).charges !== undefined) {
    //         const item = this.item as Item;
    //         return `${item.id}-${item.level}-${item.quality}-${item.style}-${item.enchantId}-${item.crafted}-${item.charges}`;
    //     } else if ((this.item as Potion).potionEffect !== undefined) {
    //         return null;
    //     }
    //     return null;
    // }
}
