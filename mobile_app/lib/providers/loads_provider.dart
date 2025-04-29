import 'package:flutter/material.dart';
import 'package:mobile_app/entities/load.dart';

class LoadsProvider extends ChangeNotifier {
  List<Load> loads = [];

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
}
