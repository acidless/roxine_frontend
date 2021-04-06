import { Selector } from "react-redux";
import { AppStateType } from "../../store";

/*====================*/

export const GetWebSocket: Selector<AppStateType, WebSocket | null> = (state) => state.webSocket.webSocket;
