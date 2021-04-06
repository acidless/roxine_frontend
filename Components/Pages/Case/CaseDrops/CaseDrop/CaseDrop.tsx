import IDrop, { RarityType } from "../../../../../types-interfaces/Content/Cases/IDrop";
import RobuxIcon from "../../../../Common/Images/RobuxIcon";

/*====================*/

type PropsType = {
  drop: IDrop;
};

/*====================*/

const CaseDrop: React.FC<PropsType> = function ({ drop }) {
  return (
    <div className={`case-wrapper__drop flex-container column ${RarityType[drop.rarity]}`}>
      <RobuxIcon rarity={RarityType[drop.rarity]} />
      <p className="drop__value bold">{drop.value}</p>
    </div>
  );
};

/*====================*/

export default CaseDrop;
