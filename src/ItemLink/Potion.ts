import { NonFunctionProperties } from '../types';
import { ESOItemBase, ESOItemName } from './ESOItem';
import { Level, VR } from './types';

export const IdToPotionEffect = {
    [0]: 'Unknown',
    [1]: 'Restore Health',
    [2]: 'Ravage Health',
    [3]: 'Restore Magicka',
    [4]: 'Ravage Magicka',
    [5]: 'Restore Stamina',
    [6]: 'Ravage Stamina',
    [7]: 'Spell Resistance',
    [8]: 'Breach',
    [9]: 'Increase Armor',
    [10]: 'Fracture',
    [11]: 'Increase Spell Power',
    [12]: 'Lower Spell Power',
    [13]: 'Increase Weapon Power',
    [14]: 'Maim',
    [15]: 'Spell Critical',
    [16]: 'Uncertainty',
    [17]: 'Weapon Critical',
    [18]: 'Enervation',
    [19]: 'Unstoppable',
    [20]: 'Entrapment',
    [21]: 'Detection',
    [22]: 'Invisible',
    [23]: 'Speed',
    [24]: 'Hindrance',
    [25]: 'Protection',
    [26]: 'Vulnerability',
    [27]: 'Sustained Restore Health',
    [28]: 'Gradual Ravage Healt',
    [29]: 'Vitality',
    [30]: 'Defile',
};

export const PotionEffects = Object.values(IdToPotionEffect);

type ValidIds = keyof typeof IdToPotionEffect;

class _Potion implements ESOItemBase {
    esoItemType: ESOItemName = 'Potion';
    effects: ValidIds[];

    constructor(public id: number, public level: Level, public potionEffect: number) {
        this.effects = [this.getEffectId(1), this.getEffectId(2), this.getEffectId(3)];
    }

    getEffectIds() {
        return this.effects;
    }

    getEffect(i: 1 | 2 | 3) {
        return IdToPotionEffect[this.effects[i - 1]];
    }

    getEffects() {
        return [this.getEffect(1), this.getEffect(2), this.getEffect(3)];
    }

    GetLevel() {
        switch (this.level.vr) {
            case VR.NOVR:
                return `Level ${this.level.level}`;
            default:
                return `CP ${this.level.vr.valueOf() - 50}0`;
        }
    }

    // private
    getEffectId(i: ValidIds) {
        return _Potion.getEffectId(this.potionEffect, i);
    }

    static getEffectId(potionEffect: number, i: number): ValidIds {
        if (i > 0 && i <= 3) {
            const val = (potionEffect >> (8 * (i - 1))) & 0b1111111;
            return (val >= 0 && val <= 30 ? val : 0) as ValidIds;
        } else {
            return 0;
        }
    }
}

export interface IPotion extends Omit<_Potion, 'id' | 'level' | 'potionEffect' | 'effects' | 'getEffectId'> {}

const Potion: new (id: number, level: Level, potionEffect: number) => IPotion = _Potion;
export default Potion;

export type PotionFields = NonFunctionProperties<_Potion>;
