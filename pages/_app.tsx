import "../styles/app.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";
import { useEffect } from "react";

/*====================*/

type PropsType = {
  Component: React.ComponentType;
  pageProps: any;
};

/*====================*/

const MyApp: React.FC<PropsType> = function ({ Component, pageProps }) {
  useEffect(() => {
    if (location.hostname !== "localhost" && location.protocol !== "https:") {
      location.href = `https://${location.hostname}`;
    }
  }, []);

  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
};

/*====================*/

export default MyApp;
