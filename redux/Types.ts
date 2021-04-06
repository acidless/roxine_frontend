import { Action } from "redux";
import { UsersActions } from "./reducers/Users/CurrentUserReducer/UsersReducer";
import { AppActions } from "./reducers/App/AppReducer";

/*====================*/

type ObjValuesType<Obj> = Obj extends { [key: string]: infer U } ? U : never;

type ActionsType<Obj extends ActionType> = ReturnType<ObjValuesType<Obj>>;

type ActionType = {
  [key: string]: (...args: any) => Action<string>;
};

export type DispatchActions<T> = T | ActionsType<typeof AppActions> | ActionsType<typeof UsersActions> | any;

/*====================*/

export default ActionsType;
