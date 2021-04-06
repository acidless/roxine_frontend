import AdminTabsButtons from "./AdminTabsButtons/AdminTabsButtons";
import React, { useState } from "react";
import AdminMainTab from "./AdminMainTab/AdminMainTab";
import AdminWithdrawTab from "./AdminWithdrawTab/AdminWithdrawTab";
import AdminUsersTab from "./AdminUsersTab/AdminUsersTab";

/*====================*/

export type AdminTabsType = "main" | "users" | "withdraws";

/*====================*/

export const ActiveContext = React.createContext("main");

/*====================*/

function AdminTabs() {
  const [activeId, setActiveId] = useState<AdminTabsType>("main");

  /*====================*/

  return (
    <div>
      <ActiveContext.Provider value={activeId}>
        <AdminTabsButtons setActiveId={setActiveId} />
        <AdminMainTab />
        <AdminWithdrawTab setActiveTab={setActiveId} />
        <AdminUsersTab />
      </ActiveContext.Provider>
    </div>
  );
}

/*====================*/

export default AdminTabs;
