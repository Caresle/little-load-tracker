import 'package:flutter/material.dart';
import 'package:mobile_app/config/theme/button.dart';

class StatusOptions extends StatelessWidget {
  const StatusOptions({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        IconButton(
          style: buttonConfirmTonalIcon,
          onPressed: () {},
          icon: Icon(Icons.check_circle_outline_rounded),
        ),
        IconButton(
          style: buttonDangerTonalIcon,
          onPressed: () {},
          icon: Icon(Icons.remove_circle_outline_rounded),
        ),
      ],
    );
  }
}
