import { Selector } from "react-redux";
import { AppStateType } from "../../../store";
import IUser from "../../../../types-interfaces/Content/Users/IUser";
import HistoryAnyObject from "../../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";

/*====================*/

export const GetCurrentProfile: Selector<AppStateType, IUser | null> = (state) => state.users.profile.currentProfile;

export const GetCurrentProfileHistory: Selector<AppStateType, Array<HistoryAnyObject>> = (state) =>
  state.users.profile.currentProfileHistory;

export const GetHistoryPageStatus: Selector<AppStateType, boolean> = (state) => state.users.profile.isHistoryPageLast;
