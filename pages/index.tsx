import Layout from "../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import { useSelector } from "react-redux";
import { GetCases } from "../redux/reducers/Cases/CasesReducer";
import Loader from "../../../react/roxine_frontend/Components/Common/Loaders/Loader/Loader";
import { GetLoadingStatus } from "../redux/reducers/App/AppSelector";
import useDispatchOnMount from "../../../react/roxine_frontend/Hooks/useDispatchOnMount/useDispatchOnMount";
import CasesList from "../../../react/roxine_frontend/Components/Pages/Cases/CasesList/CasesList";

/*====================*/

function Home() {
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  useDispatchOnMount(GetCases);

  /*====================*/

  return (
    <Layout title="Cases">
      <section className="cases-wrapper">
        <h1 className="custom-heading">Кейсы</h1>
        <CasesList />
        {isLoading && <Loader />}
      </section>
    </Layout>
  );
}

/*====================*/

export default Home;
