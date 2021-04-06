import ProfileDropIcon from "../ProfileDropIcon/ProfileDropIcon";
import useHistoryObjValues from "../../../../../Hooks/UseHistoryObjValues/useHistoryObjValues";
import HistoryAnyObject from "../../../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";

/*====================*/

type PropsType = {
  historyItem: HistoryAnyObject;
};

/*====================*/

const ProfileHistoryItem: React.FC<PropsType> = function ({ historyItem }) {
  const { value, className, rarity } = useHistoryObjValues(historyItem);

  /*====================*/

  return (
    <div className={`profile__drop align-center content-center align-items-center column flex-container ${className}`}>
      <ProfileDropIcon id={historyItem.action_id} rarity={rarity} />
      <p className="drop__value bold">{value}</p>
    </div>
  );
};

/*====================*/

export default ProfileHistoryItem;
