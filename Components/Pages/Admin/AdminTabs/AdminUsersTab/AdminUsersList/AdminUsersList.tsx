import AdminUser from "./AdminUser/AdminUser";
import Loader from "../../../../../Common/Loaders/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { GetApanelUsersSelector } from "../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersSelector";
import { GetLoadingStatus } from "../../../../../../redux/reducers/App/AppSelector";
import Paginator from "../../../../../Common/Paginator/Paginator";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetApanelUsers } from "../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersReducer";
import AdminCurrentUser from "./AdminCurrentUser/AdminCurrentUser";

/*====================*/

function AdminUserList() {
  const [currentPage, setCurrentPage] = useState(0);
  /*====================*/

  const users = useSelector(GetApanelUsersSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  const dispatch = useDispatch();
  const router = useRouter();

  /*====================*/

  useEffect(() => {
    dispatch(GetApanelUsers(currentPage, router.query.s as string));
  }, [currentPage, router.query.s]);

  /*====================*/

  return (
    <>
      {!!users.length && (
        <div className="admin-users__list block wide-line admin-table">
          {users.map((user) => {
            return <AdminUser user={user} key={user.id} />;
          })}
        </div>
      )}
      {isLoading && <Loader />}
      <Paginator isLastPage={!users.length} currentPage={currentPage} setPage={setCurrentPage} />
      <AdminCurrentUser />
    </>
  );
}

/*====================*/

export default AdminUserList;
