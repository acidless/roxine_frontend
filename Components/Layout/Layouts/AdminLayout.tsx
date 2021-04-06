import { ILayout } from "./Layout";
import AdminHeader from "../Headers/AdminHeader/AdminHeader";
import { useSelector } from "react-redux";
import { GetCurrentTheme } from "../../../redux/reducers/Settings/SettingsSelector";
import StatusMessage from "../StatusMessage/StatusMessage";
import useMenuToggle from "../../../Hooks/useMenuToggle/useMenuToggle";
import Head from "next/head";

/*====================*/

const AdminLayout: React.FC<ILayout> = function ({ title, children }) {
  const currentTheme = useSelector(GetCurrentTheme);

  /*====================*/

  useMenuToggle();

  /*====================*/

  return (
    <>
      <Head>
        <html lang="ru" />
        <title>{title && title + " | "}Roxine</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Roboto:wght@400;700&display=swap"
          as="font"
          rel="preload stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="preload stylesheet" />
        <link rel="shortcut icon" href="/imgs/dollar.svg" type="image/png" />
      </Head>
      <div data-theme={currentTheme} className="app-container">
        <AdminHeader />
        <main className={`container`}>{children}</main>
        <StatusMessage />
      </div>
    </>
  );
};

/*====================*/

export default AdminLayout;
