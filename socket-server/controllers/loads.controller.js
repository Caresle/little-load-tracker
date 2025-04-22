const SOCKET_EVENTS = {
  CREATE_LOAD: "CREATE_LOAD",
  UPDATE_LOAD: "UPDATE_LOAD",
  DELETE_LOAD: "DELETE_LOAD",
};

const socketLoadController = (socket) => {
  socket.on(SOCKET_EVENTS.CREATE_LOAD, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.CREATE_LOAD, data);
  });

  socket.on(SOCKET_EVENTS.UPDATE_LOAD, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.UPDATE_LOAD, data);
  });

  socket.on(SOCKET_EVENTS.DELETE_LOAD, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.DELETE_LOAD, data);
  });
};

export default socketLoadController;
