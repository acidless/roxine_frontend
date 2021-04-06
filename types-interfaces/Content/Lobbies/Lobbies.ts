import IUser from "../Users/IUser";

/*====================*/

interface ILobby {
  id: number;
  bet: number;
  date: number;
  creator: IUser;
}

/*====================*/

export default ILobby;
