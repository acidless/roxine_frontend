import Head from "next/head";
import useTheme from "../../../Hooks/useTheme/useTheme";
import {ILayout} from "./Layout";

/*====================*/

const Layout: React.FC<ILayout> = function ({  centered,title = "", children }) {
    const currentTheme = useTheme();

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
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="preload stylesheet" as="font" />
                <link rel="shortcut icon" href="/imgs/dollar.svg" type="image/png" />
            </Head>
            <div data-theme={currentTheme} className="app-container">
                <main className={`${centered ? "main-container " : ""}container`}>{children}</main>
            </div>
        </>
    );
};

/*====================*/

export default Layout;
