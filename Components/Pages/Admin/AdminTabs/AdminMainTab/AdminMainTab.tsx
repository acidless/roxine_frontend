import RobloxAccounts from "./RobloxAccounts/RobloxAccounts";
import React, { useContext } from "react";
import { ActiveContext } from "../AdminTabs";
import APanelSetter from "./APanelSetter/APanelSetter";
import { useDispatch } from "react-redux";
import {
  SetQIWINumber,
  SetRobuxCourse,
} from "../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainReducer";
import {
  GetQIWINumberSelector,
  GetRobuxCourseSelector,
} from "../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainSelector";

/*====================*/

function AdminMainTab() {
  const activeTabId = useContext(ActiveContext);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  return (
    <div className={`${activeTabId === "main" ? "active " : ""}admin-tab`}>
      <div className="admin-tab__setters-wrapper">
        <APanelSetter
          selector={GetRobuxCourseSelector}
          fieldName="robuxCourse"
          labelText="Введите курс робуксов (Робуксы за рубль)"
          onSubmit={(values) => {
            dispatch(SetRobuxCourse(values.robuxCourse));
          }}
        />
        <APanelSetter
          selector={GetQIWINumberSelector}
          type="tel"
          fieldName="qiwiNumber"
          labelText="Введите номер QIWI"
          onSubmit={(values) => {
            dispatch(SetQIWINumber(values.qiwiNumber));
          }}
        />
      </div>

      <RobloxAccounts />
    </div>
  );
}

/*====================*/

export default AdminMainTab;
