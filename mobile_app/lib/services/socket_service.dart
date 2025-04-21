import 'package:mobile_app/config/environment.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

class SocketService {
  SocketService._internal() {
    _initSocket();
  }

  static final SocketService _instance = SocketService._internal();

  static SocketService get instance => _instance;

  late IO.Socket _socket;

  IO.Socket get socket => _socket;

  void _initSocket() {
    _socket = IO.io(
      Environment.socketURL,
      IO.OptionBuilder().setTransports(['websocket']).build(),
    );

    _socket.onConnect((_) => print('Connected to server'));

    _socket.on("CREATE_LOAD", (data) {
      print("CREATE_LOAD");
      print(data);
    });

    _socket.onDisconnect((_) => print('Disconnected from server'));
  }

  void connect() {
    if (!_socket.connected) {
      _socket.connect();
    }
  }

  void disconnect() {
    if (_socket.connected) {
      _socket.disconnect();
    }
  }

  void emit(String event, dynamic data) {
    _socket.emit(event, data);
  }
}
