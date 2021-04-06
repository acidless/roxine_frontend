import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import ICase from "../../../types-interfaces/Content/Cases/ICase";
import IDrop from "../../../types-interfaces/Content/Cases/IDrop";

/*====================*/

export const GetCasesSelector: Selector<AppStateType, Array<ICase>> = (state) => state.cases.cases;

export const GetCurrentCaseSelector: Selector<AppStateType, ICase | null> = (state) => state.cases.currentCase;

export const GetCurrentDrops: Selector<AppStateType, Array<IDrop>> = (state) => state.cases.currentDrops;
