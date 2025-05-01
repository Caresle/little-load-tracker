import 'package:flutter/material.dart';
import 'package:mobile_app/providers/load_id_provider.dart';
import 'package:mobile_app/widgets/load_id_widgets/item_list.dart';
import 'package:provider/provider.dart';

class LoadContent extends StatelessWidget {
  const LoadContent({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Item List',
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          Consumer<LoadIdProvider>(builder: (context, provider, child) {
            if (provider.load.details.isEmpty) {
              return const Text('Empty');
            }

            return Expanded(
              child: ListView.separated(
                itemCount: provider.load.details.length,
                separatorBuilder: (_, __) => const SizedBox(height: 8),
                itemBuilder: (context, index) {
                  final detail = provider.load.details[index];
                  return ItemList(detail: detail);
                },
              ),
            );
          })
        ],
      ),
    );
  }
}
