import AddRobloxAccountTypeForm from "./AddRobloxAccountTypeForm/AddRobloxAccountTypeForm";
import { useState } from "react";
import useDispatchOnMount from "../../../../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import RobloxAccountsActions from "./RobloxAccountsActions/RobloxAccountsActions";
import RobloxAccountsList from "./RobloxAccountsList/RobloxAccountsList";
import { GetRobloxAccounts } from "../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainReducer";

/*====================*/

function RobloxAccounts() {
  const [isFormOpened, toggleFormOpened] = useState(false);

  /*====================*/

  useDispatchOnMount(GetRobloxAccounts);

  /*====================*/

  return (
    <>
      <section className="roblox-accounts wide-line">
        <h2 className="custom-heading">Ваши аккаунты Roblox</h2>
        <RobloxAccountsActions onAddClick={toggleFormOpened} />
        <RobloxAccountsList />
      </section>
      <AddRobloxAccountTypeForm toggleOpen={toggleFormOpened} isOpened={isFormOpened} />
    </>
  );
}

/*====================*/

export default RobloxAccounts;
