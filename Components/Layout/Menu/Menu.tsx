import MenuButton from "./MenuButton/MenuButton";
import MenuContent from "./MenuContent/MenuContent";
import { useDispatch, useSelector } from "react-redux";
import { GetMenuActive } from "../../../redux/reducers/App/AppSelector";
import { AppActions } from "../../../redux/reducers/App/AppReducer";

/*====================*/

function Menu() {
  const dispatch = useDispatch();
  const isMenuActive = useSelector(GetMenuActive);

  /*====================*/

  function setMenuActive(value: boolean) {
    dispatch(AppActions.setMenuActive(value));
  }

  /*====================*/

  return (
    <aside className={`${isMenuActive ? "active " : ""}menu align-items-start column`}>
      <MenuButton toggleOpen={setMenuActive} isOpened={isMenuActive} />
      <MenuContent />
    </aside>
  );
}

/*====================*/

export default Menu;
