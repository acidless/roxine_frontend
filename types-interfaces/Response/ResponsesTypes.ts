type JSONResponse<T, E = any> = {
  success: boolean;
  data: T;
  event?: Array<EventType<E>>;
};

/*====================*/

type EventType<E> = {
  type: number;
  data: E;
};

/*====================*/

export default JSONResponse;
