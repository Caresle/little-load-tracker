import 'package:mobile_app/config/dio.dart';

class LoginService {
  static Future<String?> login(username, password) async {
    try {
      final ans = await dioInstance.post("/v1/auth", data: {
        'username': username,
        'password': password,
      });
      return ans.data;
    } catch (e) {
      print(e);
      return null;
    }
  }
}
