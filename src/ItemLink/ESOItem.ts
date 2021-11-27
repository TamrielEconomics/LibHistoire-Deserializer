import Item from './Item';
import Potion from './Potion';
import Writ from './Writ';

export type ESOItem = Item | Potion | Writ;
export type ESOItemName = 'Item' | 'Potion' | 'Writ';

export interface ESOItemBase {
    esoItemType: ESOItemName;
}
