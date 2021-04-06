import LiveRowItemDriver from "./LiveRowItemDriver";
import ILiveRowCaseItem from "../../../types-interfaces/Content/LiveRow/ILiveRowCaseItem";
import IHistoryCaseObject from "../../../types-interfaces/Content/HistoryObjects/IHistoryCaseObject";

/*====================*/

export default class LiveRowCaseDriver extends LiveRowItemDriver {
  constructor(caseItem: ILiveRowCaseItem) {
    super(caseItem);
  }

  public toHistoryObject(): IHistoryCaseObject {
    const item = this.item as ILiveRowCaseItem;
    const itemData = item.data;

    const historyObject = super.toHistoryObject() as IHistoryCaseObject;

    historyObject.result = {
      id: itemData.result.item_id,
      rarity: itemData.result.rarity,
      value: itemData.result.value,
    };

    return historyObject;
  }
}
