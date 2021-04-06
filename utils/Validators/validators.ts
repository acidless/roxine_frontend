export function minLength(length: number) {
  return function (value: string) {
    return value.length < length ? `Минимальная длина - ${length} символов.` : undefined;
  };
}

/*====================*/

export function maxLength(length: number) {
  return function (value: string) {
    return value.length > length ? `Максимальная длина - ${length} символов.` : undefined;
  };
}

/*====================*/

export function required(value: string) {
  return value.toString().trim().length === 0 ? "Это обязательное поле." : undefined;
}

/*====================*/

export function minValue(min: number) {
  return function (value: string) {
    return +value < min ? `Минимальное значение - ${min}.` : undefined;
  };
}

/*====================*/

export function maxValue(max: number) {
  return function (value: string) {
    return +value > max ? `Максимальное значение - ${max}.` : undefined;
  };
}

/*====================*/

export function match(regExp: RegExp) {
  return function (value: string) {
    return !regExp.test(value) ? "Неверный формат данных." : undefined;
  };
}

/*====================*/

export type Validator = (value: string) => string | undefined;
