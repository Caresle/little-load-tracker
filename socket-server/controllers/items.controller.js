const SOCKET_EVENTS = {
  CREATE_ITEM: "CREATE_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

const socketItemController = (socket) => {
  socket.on(SOCKET_EVENTS.CREATE_ITEM, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.CREATE_ITEM, data);
  });

  socket.on(SOCKET_EVENTS.UPDATE_ITEM, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.UPDATE_ITEM, data);
  });

  socket.on(SOCKET_EVENTS.DELETE_ITEM, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.DELETE_ITEM, data);
  });
};

export default socketItemController;
