import NavLink from "../../NavLink/NavLink";
import { IMessageWindow } from "../../Windows/MessageWindow/MessageWindow";

/*====================*/

export type DroppingListHeadingPropsType = {
  name: string;
  icon?: any;
  href: string;
};

/*====================*/

const DroppingListHeading: React.FC<DroppingListHeadingPropsType & IMessageWindow> = function ({
  toggleOpen,
  isOpened,
  href,
  icon,
  name,
}) {
  return (
    <div className="flex-container dropping-list__heading">
      <NavLink className="flex-container content-center text--bright" href={href}>
        {icon}
        {name}
      </NavLink>
      <button
        onClick={() => {
          toggleOpen(!isOpened);
        }}
        className={`${isOpened ? "active " : ""}dropping-list__button default-btn flex-container`}
      >
        <span className="material-icons text--bright">keyboard_arrow_down</span>
      </button>
    </div>
  );
};

/*====================*/

export default DroppingListHeading;
