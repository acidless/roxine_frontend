import LazyImg from "../../../Common/Images/LazyImg/LazyImg";
import CaseImg from "../../../Common/Images/CaseImg";
import IUser from "../../../../types-interfaces/Content/Users/IUser";

/*====================*/

type PropsType = {
  currentProfile: IUser;
};

/*====================*/

const ProfileCenterBlock: React.FC<PropsType> = function ({ currentProfile }) {
  return (
    <div className={`${currentProfile.premium ? "premium " : ""}profile__center-block`}>
      <div className="profile__avatar relative">
        <LazyImg src={`https://tr.rbxcdn.com/${currentProfile.avatar}/250/250/AvatarHeadshot/Png`} />
      </div>
      <p className="profile__name align-center bold text--bright">{currentProfile.name}</p>
      <div className="profile__stats content-center flex-container">
        <div className="profile__cases-opened">
          <div className="flex-container content-center">
            <CaseImg />
            <span className="gradient-text bold">{currentProfile.total_activity}</span>
          </div>
          <p className="text--bright">Кейсов открыто</p>
        </div>
      </div>
    </div>
  );
};

/*====================*/

export default ProfileCenterBlock;
