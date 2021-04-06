import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import Themes from "../../../../react/roxine_frontend/Components/Pages/Settings/Themes/Themes";
import Badges from "../../../../react/roxine_frontend/Components/Pages/Settings/Badges/Badges";

/*====================*/

function Settings() {
  return (
    <Layout title="Settings">
      <section className="settings">
        <h2 className="custom-heading">Настройки</h2>
        <Themes />
        <Badges />
      </section>
    </Layout>
  );
}

/*====================*/

export default Settings;
