import { Selector } from "react-redux";
import { AppStateType } from "../../store";

/*====================*/

export const GetMarketBalanceSelector: Selector<AppStateType, number> = (state) => state.market.balance;
