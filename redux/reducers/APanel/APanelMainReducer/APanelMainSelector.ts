import { Selector } from "react-redux";
import { AppStateType } from "../../../store";
import IRobloxAccount from "../../../../types-interfaces/Content/Roblox/IRobloxAccount";

/*====================*/

export const GetRobloxAccountsSelector: Selector<AppStateType, Array<IRobloxAccount>> = (state) =>
  state.aPanel.main.robloxAccounts;

export const GetRobuxCourseSelector: Selector<AppStateType, number> = (state) => state.aPanel.main.robuxCourse;

export const GetQIWINumberSelector: Selector<AppStateType, number> = (state) => state.aPanel.main.qiwiNumber;
