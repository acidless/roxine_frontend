import IWithdraw from "../../../../../../types-interfaces/Content/Withdraw/IWithdraw";
import RobuxSymbol from "../../../../../Common/Images/RobuxSymbol/RobuxSymbol";
import { useDispatch } from "react-redux";
import { GetApanelUser } from "../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersReducer";
import { AdminTabsType } from "../../AdminTabs";

/*====================*/

type PropsType = {
  withdraw: IWithdraw;
  setActiveTab: (tab: AdminTabsType) => any;
};

/*====================*/

const AdminWithdraw: React.FC<PropsType> = function ({ setActiveTab, withdraw }) {
  const dispatch = useDispatch();

  /*====================*/

  return (
    <div className="flex-container content-space-between withdraws-list__row">
      <button
        onClick={() => {
          setActiveTab("users");
          dispatch(GetApanelUser(withdraw.user.id));
        }}
        className="default-btn one-line-text"
      >
        {withdraw.user.name}
      </button>
      <p className="bold robux">
        {withdraw.amount} <RobuxSymbol />
      </p>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

/*====================*/

export default AdminWithdraw;
