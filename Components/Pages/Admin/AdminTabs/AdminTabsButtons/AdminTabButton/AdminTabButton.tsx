import { useContext } from "react";
import { ActiveContext, AdminTabsType } from "../../AdminTabs";

/*====================*/

type PropsType = {
  id: AdminTabsType;
  text: string;
  setActiveId: (value: AdminTabsType) => any;
};

/*====================*/

const AdminTabButton: React.FC<PropsType> = function ({ setActiveId, id, text }) {
  const activeTabId = useContext(ActiveContext);

  /*====================*/

  return (
    <button
      onClick={() => {
        setActiveId(id);
      }}
      className={activeTabId === id ? "active" : ""}
    >
      {text}
    </button>
  );
};

/*====================*/

export default AdminTabButton;
