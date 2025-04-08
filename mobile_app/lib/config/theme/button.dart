import 'package:flutter/material.dart';

final ButtonStyle buttonPrimary = ElevatedButton.styleFrom(
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
  backgroundColor: Colors.blue.shade800,
  foregroundColor: Colors.white,
  minimumSize: Size(120, 48),
);
