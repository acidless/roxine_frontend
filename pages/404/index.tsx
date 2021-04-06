import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";

/*====================*/

function NotFound() {
  return (
    <Layout centered title="Not Found">
      <section className="not-found relative align-center">
        <span className="material-icons not-found__icon">settings</span>
        <div className="not-found__content relative">
          <h2 className="volumetric-text">404</h2>
          <p>Мы искали вдоль и поперек, но ничего не нашли.</p>
        </div>
      </section>
    </Layout>
  );
}

/*====================*/

export default NotFound;
