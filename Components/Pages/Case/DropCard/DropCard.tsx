import RobuxIcon from "../../../Common/Images/RobuxIcon";
import IDrop, { RarityType } from "../../../../types-interfaces/Content/Cases/IDrop";
import { useEffect, useState } from "react";
import { CaseStates } from "../CaseOpenSection/CaseOpenSection";

/*====================*/

type DropCardProps = {
  drop: IDrop | null;
  openCase: Function | null;
  caseState: CaseStates;
  id: number;
};

/*====================*/

const DropCard: React.FC<DropCardProps> = function ({ id, caseState, openCase, drop }) {
  const [isRotated, setRotated] = useState(false);
  const [isChoised, setChoised] = useState(false);

  /*====================*/

  useEffect(() => {
    if (caseState !== "opened") {
      setRotated(false);
    } else {
      setRotated(true);
      setChoised(false);
    }
  }, [caseState]);

  /*====================*/

  function OpenCaseHandle() {
    if (caseState === "opening") {
      openCase(id);
      setChoised(true);
    }
  }

  /*====================*/

  return (
    <div
      onClick={OpenCaseHandle}
      className={`${isChoised ? "choiced " : ""}${drop.selected ? "current-drop " : ""}${
        isRotated ? "rotated " : ""
      }flex-container align-center relative case-wrapper__drop case-wrapper__drop-card align-items-center column content-center ${
        RarityType[drop.rarity]
      }`}
    >
      <img className="line" src="/imgs/cardbg.svg" alt="" />
      <RobuxIcon rarity={RarityType[drop.rarity]} />
    </div>
  );
};

/*====================*/

export default DropCard;
