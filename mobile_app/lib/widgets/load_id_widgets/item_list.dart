import 'package:flutter/material.dart';
import 'package:mobile_app/config/theme/button.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

class ItemList extends StatelessWidget {
  const ItemList({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = context.read<ThemeProvider>().isDark;

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        border: Border.all(
            color: isDark ? Colors.grey.shade800 : Colors.grey.shade400),
        color: isDark ? Colors.grey.shade900 : Colors.white,
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
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
                    Text('Item name'),
                  ],
                ),
                Row(
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
                ),
              ],
            ),
            Row(
              children: [
                Text(
                  'Quantity:',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text('10'),
              ],
            ),
            Row(
              children: [
                Text('1234'),
              ],
            )
          ],
        ),
      ),
    );
  }
}
