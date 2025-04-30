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
    final theme = Theme.of(context);
    final isDark = context.watch<ThemeProvider>().isDark;
    final colorScheme = theme.colorScheme;

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: isDark ? Colors.grey.shade800 : Colors.grey.shade300,
        ),
        color: colorScheme.surface,
      ),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    const Icon(Icons.fire_truck_rounded),
                    const SizedBox(width: 6),
                    Text(
                      load.name,
                      style: theme.textTheme.titleMedium,
                    ),
                  ],
                ),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.more_horiz_rounded),
                ),
              ],
            ),
            const SizedBox(height: 4),
            Wrap(
              spacing: 6,
              children: [
                Chip(
                  label: Text('Sample Tag'),
                  backgroundColor: colorScheme.primaryContainer,
                ),
              ],
            ),
            const SizedBox(height: 6),
            Text(
              load.description,
              style: theme.textTheme.bodyMedium,
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: FilledButton.tonal(
                style: buttonSecondaryTonal,
                onPressed: () {
                  context.push('/loads/${load.id}');
                },
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.remove_red_eye_rounded,
                        color: Colors.orange.shade900),
                    const SizedBox(width: 8),
                    const Text('View Load'),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
