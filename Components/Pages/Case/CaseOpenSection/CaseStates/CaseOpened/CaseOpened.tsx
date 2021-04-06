import RobuxSymbol from "../../../../../Common/Images/RobuxSymbol/RobuxSymbol";

/*====================*/

type PropsType = {
  goNext: (event: React.MouseEvent) => any;
  dropValue: number;
};

/*====================*/

const CaseOpened: React.FC<PropsType> = function ({ goNext, dropValue }) {
  return (
    <div className="flex-container case__result align-items-center column">
      <p className="gradient-text line">
        {" "}
        Вы получили <span className="case__drop-value bold">{dropValue}</span> <RobuxSymbol />!
      </p>
      <button onClick={goNext}>Далее</button>
    </div>
  );
};

/*====================*/

export default CaseOpened;
