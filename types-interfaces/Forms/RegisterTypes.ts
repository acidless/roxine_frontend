type RegisterFormValues = {
  registerName: string;
  registerEmail: string;
  registerPassword: string;
};

export enum LoginFormStates {
  LOGIN,
  CODE,
  PASSWORD,
}

/*====================*/

export default RegisterFormValues;
