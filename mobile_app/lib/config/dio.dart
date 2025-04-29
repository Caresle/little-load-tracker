import 'package:dio/dio.dart';
import 'package:mobile_app/config/environment.dart';
import 'package:mobile_app/constants/token.dart';
import 'package:mobile_app/helpers/shared_config.dart';

final dioInstance = Dio(
  BaseOptions(
    baseUrl: Environment.apiURL,
    headers: {
      'Content-Type': 'application/json',
    },
  ),
);

class TokenInterceptor extends Interceptor {
  @override
  void onRequest(
    RequestOptions options,
    RequestInterceptorHandler handler,
  ) async {
    final result = await SharedConfig.get(TokenConstants.key);
    if (result != null) {
      options.headers['Authorization'] = 'Bearer $result';
    }
    handler.next(options);
  }
}
