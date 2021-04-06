import { useEffect } from "react";
import Header from "../Headers/Header/Header";
import Menu from "../Menu/Menu";
import StatusMessage from "../StatusMessage/StatusMessage";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { GetCurrentTheme, GetSettings } from "../../../redux/reducers/Settings/SettingsSelector";
import { OnNewPage } from "../../../redux/reducers/App/AppReducer";
import useDispatchOnMount from "../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import useMenuToggle from "../../../Hooks/useMenuToggle/useMenuToggle";
import Head from "next/head";

/*====================*/

export interface ILayout {
  title?: string;
  centered?: boolean;
  description?: string;
}

/*====================*/

const descriptionContent =
  "Roxine - игровой сайт, где вы можете получить робуксы, открывая кейсы или играя в различные режимы. Также есть возможность просто купить робуксы.";

/*====================*/

const Layout: React.FC<ILayout> = function ({ description = descriptionContent, centered, title = "", children }) {
  const currentTheme = useSelector(GetCurrentTheme);
  const settings = useSelector(GetSettings);

  /*====================*/

  useDispatchOnMount(OnNewPage);
  useMenuToggle();

  /*====================*/

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("settings", JSON.stringify(settings));
    }, 200);
  }, [settings]);

  /*====================*/

  return (
    <>
      <Head>
        <html lang="ru" />
        <title>{title && title + " | "}Roxine</title>
        {description && <meta name="description" content={description} />}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Roboto:wght@400;700&display=swap"
          as="font"
          rel="preload stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="preload stylesheet" as="font" />
        <link rel="shortcut icon" href="/imgs/dollar.svg" type="image/png" />
      </Head>
      <div data-theme={currentTheme} className="app-container">
        <Header />
        <Menu />
        <main className={`${centered ? "main-container " : ""}container`}>{children}</main>
        <StatusMessage />
        <Footer />
      </div>
    </>
  );
};

/*====================*/

export default Layout;
