import 'package:flutter/material.dart';
import 'package:mobile_app/entities/load.dart';

class ItemHeader extends StatelessWidget {
  const ItemHeader({
    super.key,
    required this.detail,
  });

  final LoadDetail detail;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        IconButton.outlined(
          style: IconButton.styleFrom(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.all(
                Radius.circular(8),
              ),
            ),
          ),
          onPressed: () {},
          icon: Icon(Icons.fire_truck_rounded),
        ),
        const SizedBox(width: 4),
        Text(detail.itemName),
      ],
    );
  }
}
