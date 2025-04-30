import 'package:flutter/material.dart';
import 'package:mobile_app/entities/load.dart';
import 'package:mobile_app/services/loads_service.dart';

class LoadIdProvider extends ChangeNotifier {
  Load _load = Load.empty();
  bool _isLoading = false;

  bool get isLoading => _isLoading;
  Load get load => _load;

  Future<void> getLoad(int id) async {
    _isLoading = true;
    notifyListeners();
    try {
      final load = await LoadsService.getLoad(id);
      _load = load;
    } catch (e) {
      print(e);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
