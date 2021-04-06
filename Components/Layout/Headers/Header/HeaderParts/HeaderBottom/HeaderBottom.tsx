import HeaderNotAuth from "../../HeaderStates/NotAuth/HeaderNotAuth";
import AccountBlock from "../../HeaderStates/AccountBlock/AccountBlock";
import { useSelector } from "react-redux";
import { GetAuthStatus } from "../../../../../../redux/reducers/Auth/AuthSelector";
import { GetCurrentUser } from "../../../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";

/*====================*/

function HeaderBottom() {
  const isAuth = useSelector(GetAuthStatus);
  const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  return (
    <div className="flex-container header__bottom content-end">
      <HeaderNotAuth isActive={!isAuth || !currentUser} />
      {isAuth && currentUser && <AccountBlock currentUser={currentUser} />}
    </div>
  );
}

/*====================*/

export default HeaderBottom;
