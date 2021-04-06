import NavLink from "../../../../Common/NavLink/NavLink";
import { DroppingListHeadingPropsType } from "../../../../Common/DroppingList/DroppingListHeading/DroppingListHeading";

/*====================*/

const MenuLink: React.FC<DroppingListHeadingPropsType> = function ({ name, icon, href }) {
  return (
    <NavLink className="flex-container text--bright" href={href}>
      {icon}
      {name}
    </NavLink>
  );
};

/*====================*/

export default MenuLink;
