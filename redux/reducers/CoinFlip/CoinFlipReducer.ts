import ActionsType, { DispatchActions } from "../../Types";
import { Dispatch, Reducer } from "redux";
import CoinAPI from "../../../../../react/roxine_frontend/API/Games/Coin/CoinAPI";
import ResponseHandler from "../../../utils/ResponseHandler";
import catchThunk from "../../../utils/redux/catchThunk";
import ILobby from "../../../types-interfaces/Content/Lobbies/Lobbies";
import { ChangeBalance } from "../Users/CurrentUserReducer/UsersReducer";
import withLoading from "../../../utils/redux/withLoading";
import WebSocketAPI from "../../../../../react/roxine_frontend/API/WebSocket/WebSocketAPI";
import { CreateMessage } from "../App/AppReducer";

/*====================*/

const SET_LOBBIES = "Roxine/CoinFlip/SET_LOBBIES";
const SET_CURRENT_LOBBY = "Roxine/CoinFlip/SET_CURRENT_LOBBY";
const SET_COIN_FLIP_RESULT = "Roxine/CoinFlip/SET_COIN_FLIP_RESULT";

/*====================*/

const initState = {
  lobbies: [] as Array<ILobby>,
  currentLobby: null as ILobby | null,
  currentResult: null as null | { win: boolean },
};

type CoinFlipPropsType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof CoinFlipActions>;

/*====================*/

const CoinFlipReducer: Reducer<CoinFlipPropsType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_LOBBIES:
      return {
        ...state,
        lobbies: action.payload.lobbies,
      };
    case SET_CURRENT_LOBBY:
      return {
        ...state,
        currentLobby: action.payload.lobby,
      };
    case SET_COIN_FLIP_RESULT:
      return {
        ...state,
        currentResult: action.payload.result,
      };
    default:
      return state;
  }
};

/*====================*/

export const CoinFlipActions = {
  setLobbies(lobbies: Array<ILobby>) {
    return <const>{ type: SET_LOBBIES, payload: { lobbies } };
  },
  setCurrentLobby(lobby: ILobby) {
    return <const>{ type: SET_CURRENT_LOBBY, payload: { lobby } };
  },
  setCoinFlipResult(result: { win: boolean }) {
    return <const>{ type: SET_COIN_FLIP_RESULT, payload: { result } };
  },
};

export function GetCoinFlipLobbies() {
  return catchThunk(async (dispatch: Dispatch<DispatchActions<Actions>>) => {
    withLoading(dispatch, async () => {
      const response = await CoinAPI.getLobbies();

      new ResponseHandler(response, dispatch, (err) => {
        dispatch(CoinFlipActions.setLobbies(response.data));
      });
    });
  });
}

export function CreateCoinFlipLobby(bet: number) {
  return catchThunk(async (dispatch) => {
    const response = await CoinAPI.createLobby(bet);

    new ResponseHandler(response, dispatch, (err) => {
      dispatch(GetCoinFlipLobbies());
    });
  });
}

export function PlayCoinFlip(lobbyId: number) {
  return catchThunk(async (dispatch: Dispatch<DispatchActions<any>>) => {
    const response = await CoinAPI.play(lobbyId);

    new ResponseHandler(response, dispatch, () => {
      dispatch(CoinFlipActions.setCoinFlipResult(response.data));
      dispatch(ChangeBalance(response.data.balance));
    }).withEvents((event) => {
      const coin = event[0].data;
      dispatch(CreateMessage(`Вы получили значок ${coin.name}!`, false));
    });
  });
}

export function SetCoinFlipNotificationHandler() {
  return catchThunk(async (dispatch, getState) => {
    const ws = getState().webSocket.webSocket;

    if (ws) {
      if (!handler) {
        CreateNotificationHandler(dispatch, getState);
      }

      WebSocketAPI.unsubscribe(0, handler);
      WebSocketAPI.subscribe(0, handler);
    }
  });
}

/*====================*/

let handler;

function CreateNotificationHandler(dispatch, getState) {
  handler = (message) => {
    const currentUser = getState().users.users.currentUser;

    const data = message.parsedData;
    if (currentUser && data.data.eop === 1 && data.data.user.id === currentUser.id) {
      const result = data.data.result >> 4;
      const currentBalance = currentUser.balance;
      console.log(currentBalance);
      const isWin = data.data.result & 1;

      dispatch(ChangeBalance(currentBalance + (isWin ? result : -result)));
      dispatch(
        CreateMessage(`Вы ${isWin ? "выиграли" : "проиграли"} в своем лобби Coin Flip!`, !isWin, "Coin Flip", 10000)
      );
    }
  };
}

/*====================*/

export default CoinFlipReducer;
