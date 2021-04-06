import IHistoryObject from "./IHistoryObject";

/*====================*/

interface IHistoryCaseObject extends IHistoryObject {
  result: {
    id: number;
    value: number;
    rarity: number;
  };
}

/*====================*/

export default IHistoryCaseObject;
