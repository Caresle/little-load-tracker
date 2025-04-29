import 'package:mobile_app/config/dio.dart';
import 'package:mobile_app/entities/load.dart';

class LoadsService {
  static Future<List<Load>> getLoads() async {
    try {
      final ans = await dioInstance.get('/v1/loads');
      final loadsRaws = ans.data as List<dynamic>;

      final loads = List<Load>.from(
        loadsRaws.map((x) {
          return Load.fromJson(x);
        }),
      );

      return loads;
    } catch (e) {
      print(e);
      return [];
    }
  }
}
