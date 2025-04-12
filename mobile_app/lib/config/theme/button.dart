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

final ButtonStyle buttonPrimaryTonalIcon = IconButton.styleFrom(
  backgroundColor: Colors.blue.shade100,
  foregroundColor: Colors.blue.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
);

final ButtonStyle buttonDangerTonalIcon = IconButton.styleFrom(
  backgroundColor: Colors.red.shade100,
  foregroundColor: Colors.red.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
);

final ButtonStyle buttonConfirmTonalIcon = IconButton.styleFrom(
  backgroundColor: Colors.green.shade100,
  foregroundColor: Colors.green.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
);

final ButtonStyle buttonDefaultTonalIcon = IconButton.styleFrom(
  backgroundColor: Colors.grey.shade300,
  foregroundColor: Colors.grey.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
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

final ButtonStyle buttonSecondary = ElevatedButton.styleFrom(
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
  backgroundColor: Colors.orange.shade800,
  foregroundColor: Colors.white,
  minimumSize: Size(120, 48),
);

final ButtonStyle buttonSecondaryTonal = FilledButton.styleFrom(
  backgroundColor: Colors.orange.shade100,
  foregroundColor: Colors.orange.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
  minimumSize: Size(120, 48),
);

final ButtonStyle buttonSecondaryTonalIcon = IconButton.styleFrom(
  backgroundColor: Colors.orange.shade100,
  foregroundColor: Colors.orange.shade900,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
      Radius.circular(8),
    ),
  ),
);

final InputDecoration inputDecoration = InputDecoration(
  // prefixIcon: Icon(Icons.account_circle_rounded),
  border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
);
