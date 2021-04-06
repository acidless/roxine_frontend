import LiveRowAnyItem from "../../types-interfaces/Content/LiveRow/LiveRowAnyItem";
import LiveRowCaseDriver from "./LiveRowItemDrivers/LiveRowCaseDriver";
import ILiveRowCaseItem from "../../types-interfaces/Content/LiveRow/ILiveRowCaseItem";
import LiveRowCoinDriver from "./LiveRowItemDrivers/LiveRowCoinDriver";
import ILiveRowCoinItem from "../../types-interfaces/Content/LiveRow/ILiveRowCoinItem";

/*====================*/

class LiveRowItemDriverFactory {
  public construct(item: LiveRowAnyItem) {
    switch (item.data.eop) {
      case 0:
        return new LiveRowCaseDriver(item as ILiveRowCaseItem);
      case 1:
        return new LiveRowCoinDriver(item as ILiveRowCoinItem);
      default:
        return null;
    }
  }
}

/*====================*/

export default LiveRowItemDriverFactory;
