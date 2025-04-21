import 'package:flutter_dotenv/flutter_dotenv.dart';

class Environment {
  static initEnvironment() async {
    await dotenv.load(fileName: '.env');
  }

  // Supabase
  static String apiURL = dotenv.env['API_URL'] ?? '';
  static String socketURL = dotenv.env['SOCKET_URL'] ?? '';
}
