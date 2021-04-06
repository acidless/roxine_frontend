import Http from "../../Http";
import JSONResponse from "../../../types-interfaces/Response/ResponsesTypes";
import ILobby from "../../../types-interfaces/Content/Lobbies/Lobbies";
import IBadge from "../../../types-interfaces/Content/Badge/IBadge";

/*====================*/

const CoinAPI = {
  async getLobbies(): Promise<JSONResponse<Array<ILobby>>> {
    return Http.request("GET", `/api/games/coin`);
  },
  async createLobby(bet: number): Promise<JSONResponse<undefined>> {
    return Http.request("POST", `/api/games/coin/create`, { bet });
  },
  async play(lobbyId: number): Promise<JSONResponse<{ win: boolean; balance: number }, IBadge>> {
    return Http.request("POST", `/api/games/coin/${lobbyId}/play`);
  },
};

/*====================*/

export default CoinAPI;
