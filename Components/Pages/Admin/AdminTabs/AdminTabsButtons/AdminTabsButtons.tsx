import AdminTabButton from "./AdminTabButton/AdminTabButton";
import { AdminTabsType } from "../AdminTabs";

/*====================*/

type PropsType = {
  setActiveId: (value: AdminTabsType) => any;
};

/*====================*/

const AdminTabsButtons: React.FC<PropsType> = function ({ setActiveId }) {
  return (
    <div className="admin-tabs-buttons flex-container content-center">
      <AdminTabButton setActiveId={setActiveId} id="users" text="Пользователи" />
      <AdminTabButton setActiveId={setActiveId} id="withdraws" text="Вывод" />
      <AdminTabButton setActiveId={setActiveId} id="main" text="Основные" />
    </div>
  );
};

/*====================*/

export default AdminTabsButtons;
