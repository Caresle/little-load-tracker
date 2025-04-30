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

  static Future<Load> getLoad(int id) async {
    try {
      final ans = await dioInstance.get('/v1/loads/$id');
      final loadRaw = ans.data as Map<String, dynamic>;
      final load = Load.fromJson(loadRaw);
      return load;
    } catch (e) {
      print(e);
      return Load.empty();
    }
  }
}
