import { RarityType } from "../../../../../types-interfaces/Content/Cases/IDrop";
import RobuxIcon from "../../../../Common/Images/RobuxIcon";

/*====================*/

type PropsType = {
  id: number;
  rarity?: number;
};

/*====================*/

const ProfileDropIcon: React.FC<PropsType> = function ({ id, rarity }) {
  switch (id) {
    case 1:
      return <img className="line" src="/imgs/dollar.svg" alt="" />;
    default:
    case 0:
      return <RobuxIcon rarity={RarityType[rarity]} />;
  }
};

/*====================*/

export default ProfileDropIcon;
