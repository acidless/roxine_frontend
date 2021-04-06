import LiveRowItemDriver from "./LiveRowItemDriver";
import IHistoryCoinObject from "../../../types-interfaces/Content/HistoryObjects/IHistoryCoinObject";
import ILiveRowCoinItem from "../../../types-interfaces/Content/LiveRow/ILiveRowCoinItem";

/*====================*/

export default class LiveRowCoinDriver extends LiveRowItemDriver {
  constructor(caseItem: ILiveRowCoinItem) {
    super(caseItem);
  }

  public toHistoryObject(): IHistoryCoinObject {
    const item = this.item as ILiveRowCoinItem;

    const historyObject = super.toHistoryObject() as IHistoryCoinObject;

    historyObject.result = item.data.result;

    return historyObject;
  }
}
