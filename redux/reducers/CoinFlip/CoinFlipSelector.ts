import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import ILobby from "../../../types-interfaces/Content/Lobbies/Lobbies";

/*====================*/

export const GetCoinFlipLobbiesSelector: Selector<AppStateType, Array<ILobby>> = (state) => state.coinFlip.lobbies;

export const GetCoinFlipLobby: Selector<AppStateType, null | ILobby> = (state) => state.coinFlip.currentLobby;

export const GetCoinFlipResult: Selector<AppStateType, { win: boolean }> = (state) => state.coinFlip.currentResult;
