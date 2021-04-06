import { useContext, useEffect, useState } from "react";
import { ActiveContext, AdminTabsType } from "../AdminTabs";
import { GetWithdraws } from "../../../../../redux/reducers/APanel/APanelWithdrawsReducer/APanelWithdrawsReducer";
import { useDispatch, useSelector } from "react-redux";
import { GetWithdrawsSelector } from "../../../../../redux/reducers/APanel/APanelWithdrawsReducer/APanelWithdrawsSelector";
import AdminWithdraw from "./AdminWithdraw/AdminWithdraw";
import { GetLoadingStatus } from "../../../../../redux/reducers/App/AppSelector";
import Loader from "../../../../Common/Loaders/Loader/Loader";
import Paginator from "../../../../Common/Paginator/Paginator";

/*====================*/

type PropsType = {
  setActiveTab: (tab: AdminTabsType) => any;
};

/*====================*/

const AdminWithdrawTab: React.FC<PropsType> = function ({ setActiveTab }) {
  const [currentPage, setPage] = useState(0);

  /*====================*/

  const activeTabId = useContext(ActiveContext);
  const dispatch = useDispatch();

  /*====================*/

  const withdraws = useSelector(GetWithdrawsSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  useEffect(() => {
    dispatch(GetWithdraws(currentPage));
  }, [currentPage]);

  /*====================*/

  return (
    <section className={`${activeTabId === "withdraws" ? "active " : ""}admin-tab`}>
      <h2 className="custom-heading line align-center">Недавние выводы</h2>
      <div className="flex-container content-center column">
        <div className="withdraws-list admin-table wide-line">
          <div className="withdraws-list__heading flex-container content-space-between withdraws-list__row">
            <p className="text--bright">Аккаунт</p>
            <p className="text--bright">Вывод</p>
            <p className="text--bright">Дата</p>
          </div>
          {withdraws.length ? (
            withdraws.map((withdraw) => {
              return <AdminWithdraw setActiveTab={setActiveTab} key={withdraw.id} withdraw={withdraw} />;
            })
          ) : (
            <p className="gradient-text paddinged align-center">Больше выводов нет.</p>
          )}
        </div>
        <Paginator isLastPage={!withdraws.length} currentPage={currentPage} setPage={setPage} />
        {isLoading && <Loader />}
      </div>
    </section>
  );
};

/*====================*/

export default AdminWithdrawTab;
