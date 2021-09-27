enum WebSocketEvents {
  WEBSOCKET_CONNECT = "@@WEBSOCKET/CONNECT",
  WEBSOCKET_OPEN = "@@WEBSOCKET/OPEN",
  WEBSOCKET_SEND = "@@WEBSOCKET/SEND",
  WEBSOCKET_MESSAGE = "@@WEBSOCKET/MESSAGE",
}

enum Events {
  NORMAL = "@@NORMAL/MESSAGE",
  CLEAR_CURRENT_ROOM = "clear-current-room",
  SET_CURRENT_ROOM_ID = "set-current-room-id",
}

export const ActionTypes = {
  WebSocketEvents: WebSocketEvents,
  Events: Events,
};
