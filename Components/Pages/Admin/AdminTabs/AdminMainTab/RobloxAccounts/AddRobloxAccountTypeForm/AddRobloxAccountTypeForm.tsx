import MessageWindow, { IMessageWindow } from "../../../../../../Common/Windows/MessageWindow/MessageWindow";
import AddRobloxAccountViaCookie from "./AddRobloxAccountViaCookie/AddRobloxAccountViaCookie";
import { useState } from "react";

/*====================*/

const AddRobloxAccountTypeForm: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  const [isCookieFormOpened, setCookieFormOpened] = useState(false);

  return (
    <>
      <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
        <div className="add-roblox-account-type-form small-container paddinged flex-container">
          <button className="button_dark button-with-icon">
            <p className="flex-container column">
              <span className="material-icons">login</span>
              Войти по логину
            </p>
          </button>
          <button
            onClick={() => {
              setCookieFormOpened(true);
            }}
            className="button_dark button-with-icon"
          >
            <p className="flex-container column">
              <span className="material-icons">backup</span>
              Войти по cookie
            </p>
          </button>
        </div>
      </MessageWindow>
      <AddRobloxAccountViaCookie toggleOpen={setCookieFormOpened} isOpened={isCookieFormOpened} />
    </>
  );
};

/*====================*/

export default AddRobloxAccountTypeForm;
