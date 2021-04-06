import { RarityType } from "../../types-interfaces/Content/Cases/IDrop";
import HistoryAnyObject from "../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";
import IHistoryCaseObject from "../../types-interfaces/Content/HistoryObjects/IHistoryCaseObject";
import IHistoryCoinObject from "../../types-interfaces/Content/HistoryObjects/IHistoryCoinObject";

/*====================*/

function useHistoryObjValues(historyObj: HistoryAnyObject) {
  let className: string = "",
    value: number = 0,
    rarity;

  if (historyObj) {
    switch (historyObj.action_id) {
      case 0:
        historyObj = historyObj as IHistoryCaseObject;

        value = historyObj.result.value;
        rarity = historyObj.result.rarity;
        className = RarityType[rarity];
        break;

      case 1:
        historyObj = historyObj as IHistoryCoinObject;

        value = historyObj.result >> 4;
        className = historyObj.result & 1 ? "win" : "lose";
        break;
    }
  }

  return {
    value,
    className,
    rarity,
  };
}

/*====================*/

export default useHistoryObjValues;
