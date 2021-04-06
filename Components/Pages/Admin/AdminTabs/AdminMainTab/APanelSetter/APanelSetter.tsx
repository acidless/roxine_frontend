import { Form, Formik } from "formik";
import FieldContainer from "../../../../../Common/Inputs/FieldContainer/FieldContainer";
import { Selector, useSelector } from "react-redux";
import { AppStateType } from "../../../../../../redux/store";

/*====================*/

type PropsType = {
  selector: Selector<AppStateType, any>;
  fieldName: string;
  labelText: string;
  onSubmit: (values: any) => void;
  type?: string;
};

/*====================*/

const APanelSetter: React.FC<PropsType> = function ({ type = "number", selector, fieldName, labelText, onSubmit }) {
  const value = useSelector(selector);

  /*====================*/

  return (
    <section className="flex-container content-center admin-tab__setter">
      <div className="block small-container">
        <Formik enableReinitialize onSubmit={onSubmit} initialValues={{ [fieldName]: value }}>
          {({ handleSubmit }) => {
            return (
              <Form className="align-center small-container" onSubmit={handleSubmit}>
                <div className="line">
                  <label className="line" htmlFor={fieldName}>
                    {labelText}
                  </label>
                  <FieldContainer id={fieldName} type={type} name={fieldName} />
                </div>

                <button type="submit">Установить</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

/*====================*/

export default APanelSetter;
