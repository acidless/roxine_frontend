import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GetLoadingStatus } from "../../../../redux/reducers/App/AppSelector";
import SmallLoader from "../../../Common/Loaders/SmallLoader/SmallLoader";
import RequiredField from "../../../Common/Inputs/RequiredField/RequiredField";
import { AdminLogin } from "../../../../redux/reducers/APanel/APanelAuthReducer/APanelAuthReducer";

/*====================*/

function AdminLoginForm() {
  const dispatch = useDispatch();

  /*====================*/

  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        dispatch(AdminLogin(values));
      }}
    >
      {({ handleSubmit, touched, errors }) => {
        return (
          <Form onSubmit={handleSubmit} className="paddinged flex-container content-center">
            <div style={{ padding: "2em" }} className="block flex-container content-center column">
              <h2 className="gradient-text align-center line">Вход в админ-панель</h2>
              <div className="line">
                <label htmlFor="login">Введите логин</label>
                <RequiredField name="login" type="text" touched={touched.login} error={errors.login} />
              </div>
              <div className="wide-line">
                <label htmlFor="password">Введите пароль</label>
                <RequiredField name="password" type="text" touched={touched.password} error={errors.password} />
              </div>
              <button type="submit">Войти</button>
              <SmallLoader isActive={isLoading} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

/*====================*/

export default AdminLoginForm;
