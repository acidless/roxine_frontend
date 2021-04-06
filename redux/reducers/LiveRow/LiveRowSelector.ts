import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import HistoryAnyObject from "../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";

/*====================*/

export const GetLiveRowItemsSelector: Selector<AppStateType, Array<HistoryAnyObject>> = (state) => state.liveRow.items;
