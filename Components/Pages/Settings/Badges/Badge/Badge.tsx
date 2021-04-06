import IBadge from "../../../../../types-interfaces/Content/Badge/IBadge";
import { useDispatch, useSelector } from "react-redux";
import { SetBadge } from "../../../../../redux/reducers/Settings/SettingsReducer";
import { GetActiveBadgeId } from "../../../../../redux/reducers/Settings/SettingsSelector";

/*====================*/

type PropsType = {
  badge: IBadge;
};

/*====================*/

const Badge: React.FC<PropsType> = function ({ badge }) {
  const activeBadgeId = useSelector(GetActiveBadgeId);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  function setBadge() {
    dispatch(SetBadge(badge.id));
  }

  /*====================*/

  return (
    <div
      onClick={setBadge}
      className={`${
        activeBadgeId === badge.id ? "active " : ""
      }badge flex-container column align-items-stretch`}
    >
      {badge.url ? (
        <img
          className="badge__image"
          src={`/imgs/badges/${badge.url}.svg`}
          alt=""
        />
      ) : (
        <span className="material-icons badge__image align-center">
          crop_free
        </span>
      )}

      <p className="badge__title one-line-text align-center">{badge.name}</p>
    </div>
  );
};

/*====================*/

export default Badge;
