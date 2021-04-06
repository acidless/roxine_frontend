import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import MarketForm from "../../../../react/roxine_frontend/Components/Pages/Market/MarketForm/MarketForm";

/*====================*/

function Market() {
  return (
    <Layout title="Market">
      <section className="market">
        <h2 className="custom-heading align-center line">Покупка робуксов</h2>
        <MarketForm />
      </section>
    </Layout>
  );
}

/*====================*/

export default Market;
