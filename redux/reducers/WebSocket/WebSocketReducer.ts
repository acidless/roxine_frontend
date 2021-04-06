import { Reducer } from "redux";
import ActionsType from "../../Types";
import catchThunk from "../../../utils/redux/catchThunk";
import WebSocketAPI from "../../../../../react/roxine_frontend/API/WebSocket/WebSocketAPI";
import { CreateMessage } from "../App/AppReducer";

/*====================*/

const SET_WEBSOCKET = "Roxine/WebSocket/SET_WEBSOCKET";

/*====================*/

const initState = {
  webSocket: null as WebSocket | null,
};
type WebSocketStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof WebSocketActions>;

/*====================*/

const WebSocketReducer: Reducer<WebSocketStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_WEBSOCKET:
      return {
        ...state,
        webSocket: action.payload.ws,
      };
    default:
      return state;
  }
};

/*====================*/

export const WebSocketActions = {
  setWebSocket(ws: WebSocket) {
    return <const>{ type: SET_WEBSOCKET, payload: { ws } };
  },
};

/*====================*/

export function WebSocketConnect() {
  return catchThunk(async (dispatch) => {
    let ws = WebSocketAPI.connect();

    ws.addEventListener("message", (message: any) => {
      message.parsedData = JSON.parse(message.data);
      WebSocketAPI.emit(message.parsedData.op, message);
    });

    ws.onclose = function (event) {
      if (!event.wasClean) {
        dispatch(CreateMessage("Ошибка при подключении к веб-сокету."));
        setTimeout(() => {
          dispatch(WebSocketConnect());
        }, 3000);
      }
    };

    dispatch(WebSocketActions.setWebSocket(ws));
  });
}

/*====================*/

export default WebSocketReducer;
