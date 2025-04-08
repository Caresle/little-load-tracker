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

final ButtonStyle buttonOutlined = ElevatedButton.styleFrom(
  shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.all(
        Radius.circular(8),
      ),
      side: BorderSide(
        color: Colors.grey.shade300,
      )),
  backgroundColor: Colors.white,
  foregroundColor: Colors.grey.shade700,
  minimumSize: Size(120, 48),
);

final InputDecoration inputDecoration = InputDecoration(
  // prefixIcon: Icon(Icons.account_circle_rounded),
  border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
);
