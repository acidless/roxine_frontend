import { Selector } from "react-redux";
import { AppStateType } from "../../../store";
import IWithdraw from "../../../../types-interfaces/Content/Withdraw/IWithdraw";

/*====================*/

export const GetWithdrawsSelector: Selector<AppStateType, Array<IWithdraw>> = (state) =>
  state.aPanel.withdraws.withdraws;
