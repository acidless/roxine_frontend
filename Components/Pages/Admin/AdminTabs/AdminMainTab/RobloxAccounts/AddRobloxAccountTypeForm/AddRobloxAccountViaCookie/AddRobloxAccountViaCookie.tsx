import MessageWindow, { IMessageWindow } from "../../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import RequiredField from "../../../../../../../Common/Inputs/RequiredField/RequiredField";
import { AddRobloxAccountCookie } from "../../../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainReducer";

/*====================*/

const AddRobloxAccountViaCookie: React.FC<IMessageWindow> = function ({ toggleOpen, isOpened }) {
  const dispatch = useDispatch();

  /*====================*/

  function onSubmit(values) {
    const regexp = /_\|WARNING.+\|_(.+)/;
    const sec = values.rbxsec.match(regexp);
    const rbxid = values.rbxid.match(regexp);

    dispatch(
      AddRobloxAccountCookie({
        id: values.id,
        rbxid: rbxid ? rbxid[1] : values.rbxid,
        rbxsec: sec ? sec[1] : values.rbxsec,
      })
    );
    toggleOpen(false);
  }

  return (
    <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
      <div className="paddinged">
        <Formik
          initialValues={{ id: "", rbxid: "", rbxsec: "" }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <h2 className="gradient-text align-center line">Вход по cookie</h2>
                <div className="line">
                  <label htmlFor="rbxid">Введите id аккаунта</label>
                  <RequiredField name="id" type="text" error={errors.id} touched={touched.id} />
                </div>
                <div className="line">
                  <label htmlFor="rbxid">Введите rbxid</label>
                  <RequiredField name="rbxid" type="text" error={errors.rbxid} touched={touched.rbxid} />
                </div>
                <div className="line">
                  <label htmlFor="rbsec">Введите rbxsec</label>
                  <RequiredField name="rbxsec" type="text" error={errors.rbxsec} touched={touched.rbxsec} />
                </div>
                <div className="flex-container content-center">
                  <button type="submit">Добавить</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default AddRobloxAccountViaCookie;
