import 'package:flutter/material.dart';
import 'package:mobile_app/entities/load.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:mobile_app/widgets/load_id_widgets/item_header.dart';
import 'package:mobile_app/widgets/load_id_widgets/status_options.dart';
import 'package:provider/provider.dart';

class ItemList extends StatelessWidget {
  final LoadDetail detail;
  const ItemList({super.key, required this.detail});

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
                ItemHeader(detail: detail),
                StatusOptions(),
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
                Text(detail.quantity.toString()),
              ],
            ),
            Row(
              children: [
                Text(detail.itemDescription),
              ],
            )
          ],
        ),
      ),
    );
  }
}
