import Link from "next/link";
import ICase from "../../../../../types-interfaces/Content/Cases/ICase";
import CaseInfo from "./CaseInfo/CaseInfo";
import CaseHoverSvg from "./CaseHoverSvg/CaseHoverSvg";

/*====================*/

interface ICasePreview {
  caseInfo: ICase;
}

/*====================*/

const Case: React.FC<ICasePreview> = function ({ caseInfo }) {
  return (
    <div className="case relative align-center flex-container">
      <Link href={`/cases/${caseInfo.id}`}>
        <a>
          <img className="case__image" src={`/imgs/cases/${caseInfo.image}.webp`} alt="" />
          <CaseInfo name={caseInfo.name} price={caseInfo.price} />
          <CaseHoverSvg />
        </a>
      </Link>
    </div>
  );
};

/*====================*/

export default Case;
