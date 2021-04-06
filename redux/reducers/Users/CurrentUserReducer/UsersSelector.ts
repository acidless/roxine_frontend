import { Selector } from "react-redux";
import { AppStateType } from "../../../store";
import IUser from "../../../../types-interfaces/Content/Users/IUser";

/*====================*/

export const GetCurrentUser: Selector<AppStateType, IUser | null> = (state) => state.users.users.currentUser;

export const GetBalanceDifference: Selector<AppStateType, number | null> = (state) =>
  state.users.users.balanceDifference;

export const GetWithdrawLoadingStatus: Selector<AppStateType, boolean> = (state) => state.users.users.isWithdrawLoading;
