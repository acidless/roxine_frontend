import { useDispatch, useSelector } from "react-redux";
import { GetBadges } from "../../../../redux/reducers/Settings/SettingsSelector";
import { GetAllBadges, SettingsActions } from "../../../../redux/reducers/Settings/SettingsReducer";
import Badge from "./Badge/Badge";
import { GetLoadingStatus } from "../../../../redux/reducers/App/AppSelector";
import Loader from "../../../Common/Loaders/Loader/Loader";
import { useEffect } from "react";
import { GetCurrentUser } from "../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";

/*====================*/

function Badges() {
  const badges = useSelector(GetBadges);
  const isLoading = useSelector(GetLoadingStatus);
  const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    if (currentUser) {
      dispatch(GetAllBadges());
      dispatch(SettingsActions.setActiveBadge(currentUser.badge?.id));
    }
  }, [currentUser?.id]);

  /*====================*/
  return (
    <div>
      {currentUser && badges && badges.length ? (
        <>
          <h3 className="align-center line text--bright">Значки</h3>
          <div className="badges-wrapper">
            {badges.map((badge) => {
              return <Badge badge={badge} key={badge.id} />;
            })}
          </div>
        </>
      ) : (
        <></>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

/*====================*/

export default Badges;
