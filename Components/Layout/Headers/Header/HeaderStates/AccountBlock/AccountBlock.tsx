import IUser from "../../../../../../types-interfaces/Content/Users/IUser";
import { useDispatch, useSelector } from "react-redux";
import { Logout as LogoutThunk } from "../../../../../../redux/reducers/Auth/AuthReducer";
import Balance from "./Balance/Balance";
import Avatar from "./Avatar/Avatar";
import Logout from "./Logout/Logout";
import { useState } from "react";

/*====================*/

type PropsType = {
  currentUser: IUser | null;
};

/*====================*/

const AccountBlock: React.FC<PropsType> = function ({ currentUser }) {
  const [isNotifyWindowActive, setNotifyWindowActive] = useState(false);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  function LogoutHandler() {
    dispatch(LogoutThunk());
  }

  /*====================*/

  return (
    <div className="flex-container">
      <Balance balance={currentUser.balance} />
      <Avatar currentUserId={currentUser.id} avatar={currentUser.avatar} />
      <Logout onClick={LogoutHandler} />
    </div>
  );
};

/*====================*/

export default AccountBlock;
