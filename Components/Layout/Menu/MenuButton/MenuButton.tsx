import { IMessageWindow } from "../../../Common/Windows/MessageWindow/MessageWindow";
import { useEffect, useState } from "react";

/*====================*/

const MenuButton: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  const [onOpenedIcon, setOnOpenedIcon] = useState("keyboard_arrow_right");

  /*====================*/

  function onResize() {
    return setOnOpenedIcon(window.innerWidth > 600 ? "keyboard_arrow_right" : "close");
  }

  /*====================*/

  useEffect(() => {
    onResize();
    window.onresize = onResize;
  }, []);

  /*====================*/

  return (
    <button
      onClick={() => {
        toggleOpen(!isOpened);
      }}
      className="flex-container menu__button"
    >
      <span className="material-icons">{isOpened ? onOpenedIcon : "keyboard_arrow_right"}</span>
    </button>
  );
};

/*====================*/

export default MenuButton;
