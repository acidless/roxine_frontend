import { Dispatch, SetStateAction } from "react";

/*====================*/

type FormPartType = {
  changeFormEvents: Dispatch<SetStateAction<FormActions>>;
  fieldValues: {
    error: string;
    touched: boolean;
  };
};

export type FormActions = {
  onNextClick: () => void;
};

/*====================*/

export default FormPartType;
