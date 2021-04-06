import IRobloxAccount from "../../../../../../../../types-interfaces/Content/Roblox/IRobloxAccount";
import CorrectionWindow from "../../../../../../../Common/Windows/CorrectionWindow/CorrectionWindow";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteRobloxAccount } from "../../../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainReducer";
import RobuxSymbol from "../../../../../../../Common/Images/RobuxSymbol/RobuxSymbol";

/*====================*/

type PropsType = {
  robloxAccount: IRobloxAccount;
};

/*====================*/

const RobloxAccount: React.FC<PropsType> = function ({ robloxAccount }) {
  const [isDeleteWindowActive, setDeleteWindowActive] = useState(false);
  const dispatch = useDispatch();

  /*====================*/

  function onDelete() {
    dispatch(DeleteRobloxAccount(robloxAccount.user.id));
  }

  /*====================*/

  return (
    <div className="roblox-account block column flex-container align-items-stretch">
      <div className="roblox-account__info relative flex-container content-space-between">
        <div className="flex-container">
          <p className="text--bright roblox-account__name one-line-text">{robloxAccount.user.name}</p>
          <button
            onClick={() => {
              setDeleteWindowActive(true);
            }}
            className="roblox-account__delete default-btn animated-icon flex-container"
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
        <p className="bold robux">
          {robloxAccount.user.currency || 0} <RobuxSymbol />
        </p>
      </div>
      <CorrectionWindow
        title="Удаление"
        text="Вы действительно хотите удалить этот аккаунт?"
        isOpened={isDeleteWindowActive}
        toggleOpen={setDeleteWindowActive}
        onAccept={onDelete}
      />
    </div>
  );
};

/*====================*/

export default RobloxAccount;
