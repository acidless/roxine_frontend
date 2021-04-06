import RobloxAccount from "./RobloxAccount/RobloxAccount";
import Loader from "../../../../../../Common/Loaders/Loader/Loader";
import { useSelector } from "react-redux";
import { GetLoadingStatus } from "../../../../../../../redux/reducers/App/AppSelector";
import { GetRobloxAccountsSelector } from "../../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainSelector";

/*====================*/

function RobloxAccountsList() {
  const robloxAccounts = useSelector(GetRobloxAccountsSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  return (
    <>
      <div className="roblox-accounts__list">
        {robloxAccounts.map((account) => {
          return <RobloxAccount robloxAccount={account} key={account.user.id} />;
        })}
      </div>
      {isLoading && <Loader />}
    </>
  );
}

/*====================*/

export default RobloxAccountsList;
