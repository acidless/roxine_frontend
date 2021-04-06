import ActionsType, { DispatchActions } from "../../Types";
import { Dispatch, Reducer } from "redux";
import HistoryAnyObject from "../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";
import catchThunk from "../../../utils/redux/catchThunk";
import LiveRowAPI from "../../../../../react/roxine_frontend/API/LiveRow/LiveRowAPI";
import ResponseHandler from "../../../utils/ResponseHandler";
import WebSocketAPI from "../../../../../react/roxine_frontend/API/WebSocket/WebSocketAPI";
import LiveRowItemDriverFactory from "../../../utils/LiveRow/LiveRowItemDriverFactory";

/*====================*/

const SET_ITEMS = "Roxine/LiveRow/SET-ITEMS";

/*====================*/

const initState = {
  items: [] as Array<HistoryAnyObject>,
};
type LiveRowStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof LiveRowActions>;

/*====================*/

const LiveRowReducer: Reducer<LiveRowStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

/*====================*/

const LiveRowActions = {
  setItems(items: Array<HistoryAnyObject>) {
    return <const>{ type: SET_ITEMS, payload: { items } };
  },
};

/*====================*/

export function AddLiveRowItem(item: HistoryAnyObject) {
  return function (dispatch: Dispatch<DispatchActions<Actions>>, getState) {
    let newArray: Array<any> = getState().liveRow.items;

    if (newArray.length >= 15) {
      newArray.pop();
    }

    newArray.unshift(item);

    dispatch(LiveRowActions.setItems([...newArray]));
  };
}

export function GetLiveRowItems() {
  return catchThunk(async (dispatch: Dispatch<DispatchActions<Actions>>) => {
    const response = await LiveRowAPI.getLiveRowItems();

    new ResponseHandler(response, dispatch, () => {
      const data = response.data.map((item) => {
        item.key = Math.random() * 100;
        return item;
      });
      dispatch(LiveRowActions.setItems(data));
    });
  });
}

export function SetItemWSHandler() {
  return catchThunk(async (dispatch, getState) => {
    const ws = getState().webSocket.webSocket;

    if (ws) {
      if (!handler) {
        CreateItemsHandler(dispatch);
      }

      WebSocketAPI.unsubscribe(0, handler);
      WebSocketAPI.subscribe(0, handler);
    }
  });
}

/*====================*/

let handler;

function CreateItemsHandler(dispatch) {
  handler = (message) => {
    message.parsedData.id = Math.random() * 100;
    dispatch(AddLiveRowItem(new LiveRowItemDriverFactory().construct(message.parsedData).toHistoryObject()));
  };
}

/*====================*/

export default LiveRowReducer;
