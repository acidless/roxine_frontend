import NavLink from "../../../Common/NavLink/NavLink";
import CaseImg from "../../../Common/Images/CaseImg";
import DroppingList from "../../../Common/DroppingList/DroppingList";
import FortuneImg from "../../../Common/Images/FortuneImg";
import DollarImg from "../../../Common/Images/DollarImg";
import { useSelector } from "react-redux";
import { GetCurrentUser } from "../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";
import MenuLink from "./MenuLink/MenuLink";

/*====================*/

function MenuContent() {
  const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  return (
    <nav className="menu__content flex-container column align-items-stretch">
      <MenuLink name="Кейсы" href="/" icon={<CaseImg />} />
      <DroppingList icon={<FortuneImg />} name="Режимы" href="/games">
        <NavLink className="flex-container text--bright" href="/games/coinflip">
          <DollarImg />
          Coin Flip
        </NavLink>
      </DroppingList>
      {currentUser && (
        <MenuLink
          name=" Профиль"
          href={`/profile/${currentUser.id}`}
          icon={<span className="material-icons text--bright">person_outline</span>}
        />
      )}
      <MenuLink
        name="Магазин"
        href="/market"
        icon={<span className="material-icons text--bright">shopping_cart</span>}
      />
      {/*<MenuLink name="Премиум" href="/premium" icon={<span className="material-icons text--bright">star_border</span>} />*/}
      <MenuLink
        name="Настройки"
        href="/settings"
        icon={<span className="material-icons text--bright">settings</span>}
      />
    </nav>
  );
}

/*====================*/

export default MenuContent;
