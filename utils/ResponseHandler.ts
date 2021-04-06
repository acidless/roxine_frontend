import JSONResponse from "../types-interfaces/Response/ResponsesTypes";
import { CreateMessage } from "../redux/reducers/App/AppReducer";

/*====================*/

export default class ResponseHandler {
  constructor(
    private response: JSONResponse<any>,
    private dispatch?: Function,
    private onSuccess?: (err: any) => void
  ) {
    this.handle();
  }

  private handle() {
    let error;
    if (!this.response.success) {
      error = this.response.data.toString();

      if (this.dispatch) {
        return this.dispatch(CreateMessage(error));
      }
    }
    this.onSuccess && this.onSuccess(error);
  }

  public withEvents(handler) {
    const event = this.response.event;

    if (event && event.length) {
      handler(event);
    }
  }
}
