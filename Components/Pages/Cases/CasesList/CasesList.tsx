import Case from "./Case/Case";
import { useSelector } from "react-redux";
import { GetCasesSelector } from "../../../../redux/reducers/Cases/CasesSelector";
import ICase from "../../../../types-interfaces/Content/Cases/ICase";

/*====================*/

function CasesList() {
  const cases = useSelector(GetCasesSelector);

  /*====================*/

  function sortByPrice(a: ICase, b: ICase) {
    return b.price - a.price;
  }

  /*====================*/

  return (
    <div className="cases grid-container content-center">
      {cases.sort(sortByPrice).map((caseItem) => {
        return <Case caseInfo={caseItem} key={caseItem.id} />;
      })}
    </div>
  );
}

/*====================*/

export default CasesList;
