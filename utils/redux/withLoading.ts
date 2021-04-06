import { AppActions } from "../../redux/reducers/App/AppReducer";

/*====================*/

async function withLoading(dispatch, actions: Function) {
  dispatch(AppActions.setLoadingStatus(true));
  await actions();
  dispatch(AppActions.setLoadingStatus(false));
}

/*====================*/

export default withLoading;
