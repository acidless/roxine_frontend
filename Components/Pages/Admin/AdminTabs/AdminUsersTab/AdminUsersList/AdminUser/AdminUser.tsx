import IUser from "../../../../../../../types-interfaces/Content/Users/IUser";
import { useDispatch } from "react-redux";
import { GetApanelUser } from "../../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersReducer";

/*====================*/

type PropsType = {
  user: IUser;
};

/*====================*/

const AdminUser: React.FC<PropsType> = function ({ user }) {
  const dispatch = useDispatch();

  /*====================*/

  return (
    <div className="admin-users__user flex-container content-space-between">
      <p>
        {user.name} (ID: {user.id})
      </p>
      <button
        onClick={() => {
          dispatch(GetApanelUser(user.id));
        }}
        className="admin-users__inspect-user flex-container default-btn"
      >
        <span className="material-icons">keyboard_backspace</span>
      </button>
    </div>
  );
};

/*====================*/

export default AdminUser;
