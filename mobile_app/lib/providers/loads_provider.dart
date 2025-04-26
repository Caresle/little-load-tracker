import 'package:flutter/material.dart';

class LoadsProvider extends ChangeNotifier {
  List<String> loads = [];

  void addLoad(String load) {
    loads.add(load);
    notifyListeners();
  }

  void removeLoad(String load) {
    loads.remove(load);
    notifyListeners();
  }
}
