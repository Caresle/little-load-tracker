import 'package:dio/dio.dart';
import 'package:mobile_app/config/environtment.dart';

final dioInstance = Dio(
  BaseOptions(
    baseUrl: Environment.apiURL,
    headers: {
      'Content-Type': 'application/json',
    },
  ),
);
