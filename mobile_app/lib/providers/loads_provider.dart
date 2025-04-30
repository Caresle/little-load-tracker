import 'package:flutter/material.dart';
import 'package:mobile_app/entities/load.dart';
import 'package:mobile_app/services/loads_service.dart';

class LoadsProvider extends ChangeNotifier {
  List<Load> loads = [];
  bool _isLoading = false;

  bool get isLoading => _isLoading;

  void setLoads(List<Load> loads) {
    this.loads = loads;
    notifyListeners();
  }

  void addLoad(Load load) {
    loads.add(load);
    notifyListeners();
  }

  void removeLoad(Load load) {
    // loads.remove(load);
    notifyListeners();
  }

  Future<void> getLoads() async {
    _isLoading = true;
    notifyListeners();
    try {
      final loads = await LoadsService.getLoads();
      this.loads = loads;
    } catch (e) {
      print(e);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
