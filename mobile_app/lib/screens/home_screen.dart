import 'package:flutter/material.dart';
import 'package:mobile_app/providers/loads_provider.dart';
import 'package:mobile_app/widgets/home_widgets/load_card.dart';
import 'package:mobile_app/widgets/shared/app_drawer.dart';
import 'package:mobile_app/widgets/shared/buttons/general_floating_button.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: AppDrawer(),
      appBar: AppBar(
        title: Text('Little Load Tracker'),
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.settings_rounded),
          ),
        ],
      ),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                'Recent Loads',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
            ),
            const SizedBox(height: 8),
            const Expanded(child: LoadsList()),
          ],
        ),
      ),
      floatingActionButton: GeneralFloatingButton(),
    );
  }
}

class LoadsList extends StatelessWidget {
  const LoadsList({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<LoadsProvider>(
      builder: (context, value, _) {
        final loads = value.loads;

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
