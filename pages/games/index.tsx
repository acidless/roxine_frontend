import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import CoinFlip from "../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlip";

/*====================*/

function Games() {
  return (
    <Layout title="Games">
      <section className="games-wrapper">
        <h1 className="custom-heading">Игровые режимы</h1>
        <div className="games content-center">
          <CoinFlip />
        </div>
      </section>
    </Layout>
  );
}

/*====================*/

export default Games;
