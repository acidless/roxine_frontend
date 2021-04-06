import IUser from "../Users/IUser";

/*====================*/

interface IWithdraw {
  amount: number;
  id: number;
  status: number;
  user: IUser;
}

/*====================*/

export default IWithdraw;
