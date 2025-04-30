import 'package:flutter/material.dart';
import 'package:mobile_app/providers/loads_provider.dart';
import 'package:mobile_app/widgets/home_widgets/load_card.dart';
import 'package:provider/provider.dart';

class LoadsList extends StatelessWidget {
  const LoadsList({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<LoadsProvider>(
      builder: (context, provider, _) {
        if (provider.isLoading) {
          return const Center(child: CircularProgressIndicator());
        }

        final loads = provider.loads;

        if (loads.isEmpty) {
          return const Center(child: Text('No loads found'));
        }

        return ListView.separated(
          padding: const EdgeInsets.all(8),
          itemCount: loads.length,
          separatorBuilder: (_, __) => const SizedBox(height: 8),
          itemBuilder: (context, index) {
            return LoadCard(load: loads[index]);
          },
        );
      },
    );
  }
}
