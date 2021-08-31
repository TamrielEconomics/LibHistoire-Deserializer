import { Quality } from './types';

export enum WritType {
    ALCHEMY = 1,
    ENCHANTING = 2,
    PROVISIONING = 3,
    WOODWORKING = 4,
    BLACKSMITHING = 5,
    CLOTHIER = 6,
    JEWLERY = 7,
}

export enum WritGearTypes {
    Helmet = 17,
    Neck = 18,
    Chest = 19,
    Shoulder = 20,
    Belt = 21,
    Legs = 22,
    Feet = 23,
    Ring = 24,
    Gloves = 25,
    Helmet_Light = 26,
    Neck_Light = 27,
    Chest_Light = 28,
    Shoulder_Light = 29,
    Belt_Light = 30,
    Legs_Light = 31,
    Feet_Light = 32,
    Ring_Light = 33,
    Gloves_Light = 34,
    Helmet_Medium = 35,
    Neck_Medium = 36,
    // Chest_Medium = 37,
    Shoulder_Medium = 38,
    Belt_Medium = 39,
    Legs_Medium = 40,
    Feet_Medium = 41,
    Ring_Medium = 42,
    Gloves_Medium = 43,
    Helmet_Heavy = 44,
    Neck_Heavy = 45,
    Chest_Heavy = 46,
    Shoulder_Heavy = 47,
    Belt_Heavy = 48,
    Greaves_Heavy = 49,
    Feet_Heavy = 50,
    Ring_Heavy = 51,
    Gloves_Heavy = 52,
    ONE_H_Axe = 53,
    ONE_H_Mace = 56,
    ONE_H_Sword = 59,
    Dagger = 62,
    Shield = 65,
    TWO_H_Sword = 67,
    TWO_H_Axe = 68,
    TWO_H_Maul = 69,
    Bow = 70,
    Restoration_Staff = 71,
    Inferno_Staff = 72,
    Frost_Staff = 73,
    Lightning_Staff = 74,
    Chest_Medium = 75,
    Bread = 76,
    Meat = 77,
    Stew = 78,
    Wine = 80,
    Spirits = 81,
    Beer = 82,
}

// export interface Writ {
//     id: number;
//     vouchers: number;
//     type: WritType;
// }

// export interface AlchemyWrit extends Writ {
//     potion: "POTION" | "POISON";
//     effectOne: number;
//     effectTwo: number;
//     effectThree: number;
// }

// export interface EnchantingWrit extends Writ {
//     glyphId: number;
//     quality: Quality;
// }

// export interface ProvisioningWrit extends Writ {
//     foodId: number;
// }

// export interface GearWrit extends Writ {
//     item: WritGearTypes;
//     quality: Quality;
//     trait: number;
//     style: number;
// }

export default class Writ {
    private type: WritType | undefined;

    constructor(private id: number, private vouchers: number) {
        if (this.InRange(id, 119696, [119698, 119705], [119818, 119820])) {
            this.type = WritType.ALCHEMY;
            // const writ: AlchemyWrit = {
            //     id: id,
            //     type: WritType.ALCHEMY,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     potion:
            //         this.rawData.writ1OrTransmute === 119 ? "POTION" : "POISON",
            //     effectOne: this.rawData.writ2,
            //     effectTwo: this.rawData.writ3,
            //     effectThree: this.rawData.writ4,
            // };
            // this.item = writ;
        } else if (this.InRange(id, 119564, 121528)) {
            // const writ: EnchantingWrit = {
            //     id: id,
            //     type: WritType.ENCHANTING,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     glyphId: this.rawData.writ1OrTransmute,
            //     quality: this.rawData.writ3,
            // };
            this.type = WritType.ENCHANTING;
            // this.item = writ;
        } else if (this.InRange(id, 11993)) {
            // const writ: ProvisioningWrit = {
            //     id: id,
            //     type: WritType.PROVISIONING,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     foodId: this.rawData.writ1OrTransmute,
            // };
            // this.item = writ;
            this.type = WritType.PROVISIONING;
        } else if (this.InRange(id, 119563, 119680, 121527, 121529)) {
            // const writ: GearWrit = {
            //     id: id,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     type: WritType.BLACKSMITHING,
            //     item: this.rawData.writ1OrTransmute,
            //     quality: this.rawData.writ3,
            //     trait: this.rawData.writ5,
            //     style: this.rawData.writ6,
            // };
            // this.item = writ;
            this.type = WritType.BLACKSMITHING;
        } else if (this.InRange(id, 119694, 119695, 121532)) {
            // const writ: GearWrit = {
            //     id: id,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     type: WritType.CLOTHIER,
            //     item: this.rawData.writ1OrTransmute,
            //     quality: this.rawData.writ3,
            //     trait: this.rawData.writ5,
            //     style: this.rawData.writ6,
            // };
            // this.item = writ;
            this.type = WritType.CLOTHIER;
        } else if (this.InRange(id, 119681, 119682, 121530, 121531)) {
            // const writ: GearWrit = {
            //     id: id,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     type: WritType.WOODWORKING,
            //     item: this.rawData.writ1OrTransmute,
            //     quality: this.rawData.writ3,
            //     trait: this.rawData.writ5,
            //     style: this.rawData.writ6,
            // };
            // this.item = writ;
            this.type = WritType.WOODWORKING;
        } else if (this.InRange(id, 138789, 138799)) {
            // const writ: GearWrit = {
            //     id: id,
            //     vouchers: this.GetVouchers(
            //         this.rawData.potionEffectOrWritReward
            //     ),
            //     type: WritType.JEWLERY,
            //     item: this.rawData.writ1OrTransmute,
            //     quality: this.rawData.writ3,
            //     trait: this.rawData.writ5,
            //     style: this.rawData.writ6,
            // };
            // this.item = writ;
            this.type = WritType.JEWLERY;
        }
    }

    private InRange(num: number, ...values: Array<number | number[]>): boolean {
        let inRange = false;
        values.forEach((val) => {
            if (typeof val === 'object') {
                if (num > val[0] && num < val[1]) {
                    inRange = true;
                }
            } else if (val === num) {
                inRange = true;
            }
        });
        return inRange;
    }

    GetVouchers(): number {
        return Math.round(this.vouchers / 10000.0);
    }

    GetType(): string {
        return this.type?.toString() ?? '';
    }
}
