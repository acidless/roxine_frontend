import HistoryAnyObject from "../../../../../../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";
import ProfileDropIcon from "../../../../../../../Pages/Profile/ProfileHistory/ProfileDropIcon/ProfileDropIcon";
import useHistoryObjValues from "../../../../../../../../Hooks/UseHistoryObjValues/useHistoryObjValues";
import LazyImg from "../../../../../../../Common/Images/LazyImg/LazyImg";
import Link from "next/link";

/*====================*/

type PropsType = {
  historyObject: HistoryAnyObject;
};

/*====================*/

const LiveRowItem: React.FC<PropsType> = function ({ historyObject }) {
  const { value, className, rarity } = useHistoryObjValues(historyObject);

  /*====================*/

  return (
    <div className="live-row__item-wrapper">
      <div className={`${className} live-row__item relative flex-container column`}>
        <ProfileDropIcon id={historyObject.action_id} rarity={rarity} />
        <p className="bold">{value}</p>
        <div className="item__user-info full-size-block">
          <Link href={`/profile/${historyObject.user.id}`}>
            <a aria-label="Profile" className="full-size-block flex-container">
              <LazyImg src={`https://tr.rbxcdn.com/${historyObject.user.avatar}/180/180/AvatarHeadshot/Png`}></LazyImg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

/*====================*/

export default LiveRowItem;
