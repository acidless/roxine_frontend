function AdminHeader() {
  return (
    <header className="flex-container content-start admin-header header relative">
      <h1 className="flex-container header__logo gradient-text">
        R
        <img className="logo__icon small-icon" src="/imgs/dollar.svg" alt="o" />
        xine
      </h1>
      <span className="header__admin-title text--bright bold">Admin</span>
    </header>
  );
}

/*====================*/

export default AdminHeader;
