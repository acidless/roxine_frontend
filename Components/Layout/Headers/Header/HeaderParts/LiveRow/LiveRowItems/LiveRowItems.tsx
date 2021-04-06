import LiveRowItem from "./LiveRowItem/LiveRowItem";
import { useSelector } from "react-redux";
import { GetLiveRowItemsSelector } from "../../../../../../../redux/reducers/LiveRow/LiveRowSelector";

/*====================*/

function LiveRowItems() {
  const liveRowItems = useSelector(GetLiveRowItemsSelector);

  /*====================*/

  return (
    <div className="live-row__items content-center">
      {liveRowItems.map((item) => {
        return <LiveRowItem key={item.key} historyObject={item} />;
      })}
    </div>
  );
}

/*====================*/

export default LiveRowItems;
