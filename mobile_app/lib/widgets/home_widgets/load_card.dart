import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/config/theme/button.dart';
import 'package:mobile_app/entities/load.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

class LoadCard extends StatelessWidget {
  final Load load;
  const LoadCard({super.key, required this.load});

  @override
  Widget build(BuildContext context) {
    final isDark = context.watch<ThemeProvider>().isDark;
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
                    Icon(Icons.fire_truck_rounded),
                    const SizedBox(width: 4),
                    Text(load.name),
                  ],
                ),
                IconButton(
                  onPressed: () {},
                  icon: Icon(Icons.more_horiz_rounded),
                )
              ],
            ),
            Row(
              children: [
                Chip(
                  label: Text('chip'),
                ),
              ],
            ),
            Text(load.description),
            const SizedBox(height: 8),
            SizedBox(
              width: double.infinity,
              child: FilledButton.tonal(
                style: buttonSecondaryTonal,
                onPressed: () {
                  context.push('/loads/id');
                },
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.remove_red_eye_rounded,
                      color: Colors.orange.shade900,
                    ),
                    const SizedBox(width: 8),
                    Text('View Load'),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
