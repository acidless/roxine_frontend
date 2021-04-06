import { useDispatch } from "react-redux";
import { RefreshRobloxGroups } from "../../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainReducer";

/*====================*/

type PropsType = {
  onAddClick: (value: boolean) => void;
};

/*====================*/

const RobloxAccountsActions: React.FC<PropsType> = function ({ onAddClick }) {
  const dispatch = useDispatch();

  /*====================*/

  return (
    <div className="roblox-accounts__actions flex-container content-center wide-line">
      <button
        className="button_dark flex-container"
        onClick={() => {
          onAddClick(true);
        }}
      >
        <span className="material-icons">add</span>
      </button>
      <button
        onClick={() => {
          dispatch(RefreshRobloxGroups());
        }}
        className="button_dark flex-container"
      >
        <span className="material-icons">cached</span>
      </button>
    </div>
  );
};

/*====================*/

export default RobloxAccountsActions;
