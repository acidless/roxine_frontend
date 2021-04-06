import IDrop from "../../../../types-interfaces/Content/Cases/IDrop";
import ICase from "../../../../types-interfaces/Content/Cases/ICase";
import CaseDrop from "./CaseDrop/CaseDrop";

/*====================*/

type PropsType = {
  currentCase: ICase | null;
};

/*====================*/

const CaseDrops: React.FC<PropsType> = function ({ currentCase }) {
  function sortDrops(firstDrop: IDrop, secondDrop: IDrop) {
    return firstDrop.value - secondDrop.value;
  }
  /*====================*/

  return (
    <section className="case-wrapper__drops-section">
      <h3>Содержимое кейса</h3>
      <hr />
      <div className="case-wrapper__drops content-center">
        {currentCase.items.sort(sortDrops).map((item, index) => {
          return <CaseDrop drop={item} key={index} />;
        })}
      </div>
    </section>
  );
};

/*====================*/

export default CaseDrops;
