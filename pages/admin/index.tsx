import AdminLayout from "../../../../react/roxine_frontend/Components/Layout/Layouts/AdminLayout";
import { useSelector } from "react-redux";
import { GetAdminStatus } from "../../redux/reducers/APanel/APanelAuthReducer/APanelAuthSelector";
import AdminLoginForm from "../../../../react/roxine_frontend/Components/Pages/Admin/AdminLoginForm/AdminLoginForm";
import AdminTabs from "../../../../react/roxine_frontend/Components/Pages/Admin/AdminTabs/AdminTabs";
import useDispatchOnMount from "../../../../react/roxine_frontend/Hooks/useDispatchOnMount/useDispatchOnMount";
import { AdminAuth } from "../../redux/reducers/APanel/APanelAuthReducer/APanelAuthReducer";

/*====================*/

function Admin() {
  const isAdmin = useSelector(GetAdminStatus);

  /*====================*/

  useDispatchOnMount(AdminAuth);

  /*====================*/

  return (
    <AdminLayout title="Admin">
      {isAdmin ? (
        <>
          <AdminTabs />
        </>
      ) : (
        <AdminLoginForm />
      )}
    </AdminLayout>
  );
}

/*====================*/

export default Admin;
