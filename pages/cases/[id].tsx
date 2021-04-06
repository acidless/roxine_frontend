import { useRouter } from "next/router";
import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import { useSelector } from "react-redux";
import { GetCurrentCase } from "../../redux/reducers/Cases/CasesReducer";
import { GetCurrentCaseSelector } from "../../redux/reducers/Cases/CasesSelector";
import Loader from "../../../../react/roxine_frontend/Components/Common/Loaders/Loader/Loader";
import CaseOpenSection from "../../../../react/roxine_frontend/Components/Pages/Case/CaseOpenSection/CaseOpenSection";
import { GetLoadingStatus } from "../../redux/reducers/App/AppSelector";
import useIdForDispatch from "../../../../react/roxine_frontend/Hooks/UseIdForDispatch/UseIdForDispatch";
import CaseDrops from "../../../../react/roxine_frontend/Components/Pages/Case/CaseDrops/CaseDrops";

/*====================*/

function CasePage() {
  const router = useRouter();

  /*====================*/

  const isLoading = useSelector(GetLoadingStatus);
  const currentCase = useSelector(GetCurrentCaseSelector);

  /*====================*/

  const caseId = +router.query.id!;

  /*====================*/

  useIdForDispatch(caseId, GetCurrentCase);

  /*====================*/

  return (
    <Layout title={currentCase?.name}>
      {(!currentCase || isLoading) && <Loader />}
      {currentCase && (
        <div className="case-wrapper">
          <h2 className="case-wrapper__name align-center gradient-text">{currentCase.name}</h2>
          <CaseOpenSection currentCase={currentCase} />
          <CaseDrops currentCase={currentCase} />
        </div>
      )}
    </Layout>
  );
}

/*====================*/

export default CasePage;
