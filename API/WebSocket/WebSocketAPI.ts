const events = new Map();

/*====================*/

const WebSocketAPI = {
  connect() {
    const isSecured = window.location.protocol === "https:";

    let port = "";
    if (process.env.NODE_ENV === "development") {
      port = ":1339";
    }

    return new WebSocket(`ws${isSecured ? "s" : ""}://${window.location.hostname}${port}`);
  },

  subscribe(event: number, callback: Function) {
    const currentEvents = events.get(event) || [];
    events.set(event, [...currentEvents, callback]);
  },

  unsubscribe(event: number, callback: Function) {
    events.set(
      event,
      events.get(event)?.filter((handler) => handler !== callback)
    );
  },

  emit(event: number, data: any) {
    events.get(event)?.forEach((handler) => handler(data));
  },
};

/*====================*/

export default WebSocketAPI;
