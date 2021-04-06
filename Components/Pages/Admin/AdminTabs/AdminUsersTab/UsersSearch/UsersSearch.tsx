import { Form, Formik } from "formik";
import FieldContainer from "../../../../../Common/Inputs/FieldContainer/FieldContainer";
import { useRouter } from "next/router";

/*====================*/

function UsersSearch() {
  const router = useRouter();

  /*====================*/

  function createQueryObject(search: string) {
    if (search.trim()) {
      return { s: search };
    }

    return {};
  }

  /*====================*/

  return (
    <div className="admin-users__search wide-line">
      <Formik
        onSubmit={(values) => {
          router.push({ query: createQueryObject(values.s as string) });
        }}
        initialValues={{ s: router.query.s || "" }}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <FieldContainer placeholder="Введите имя или id пользователя" name="s" type="text">
                <button type="submit" className="flex-container default-btn animated-icon">
                  <span className="material-icons content">search</span>
                </button>
              </FieldContainer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

/*====================*/

export default UsersSearch;
