import { useContext } from "react";
import { ActiveContext } from "../AdminTabs";
import UsersSearch from "./UsersSearch/UsersSearch";
import AdminUserList from "./AdminUsersList/AdminUsersList";

/*====================*/

function AdminUsersTab() {
  const activeTabId = useContext(ActiveContext);

  /*====================*/

  return (
    <section className={`${activeTabId === "users" ? "active " : ""}admin-tab`}>
      <div className="full-size-block flex-container">
        <div className="admin-users__main">
          <UsersSearch />
          <AdminUserList />
        </div>
      </div>
    </section>
  );
}

/*====================*/

export default AdminUsersTab;
