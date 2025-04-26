import 'package:shared_preferences/shared_preferences.dart';

class SharedConfig {
  static Future<bool> save(String key, dynamic value) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();

    await prefs.setString(key, value);
    return true;
  }

  static Future<dynamic> get(String key) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
  }
}
