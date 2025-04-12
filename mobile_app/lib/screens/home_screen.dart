import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/config/theme/theme.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue.shade600,
              ),
              child: Text(
                'Little Load Tracker',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
            ListTile(
              title: Row(
                children: [
                  Icon(Icons.fire_truck_rounded),
                  const SizedBox(width: 8),
                  Text('Loads'),
                ],
              ),
              onTap: () {},
            ),
            ListTile(
              title: Row(
                children: [
                  Icon(Icons.settings_rounded),
                  const SizedBox(width: 8),
                  Text('Settings'),
                ],
              ),
              onTap: () {},
            ),
          ],
        ),
      ),
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
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Recent Loads'),
                const SizedBox(height: 8),
                _LoadCard(),
                const SizedBox(height: 8),
                _LoadCard(),
              ],
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blue.shade800,
        foregroundColor: Colors.white,
        onPressed: () {},
        shape: CircleBorder(),
        tooltip: 'Scan QR LOAD',
        child: Icon(Icons.qr_code_2_rounded),
      ),
    );
  }
}

class _LoadCard extends StatelessWidget {
  const _LoadCard();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.grey.shade400),
        color: Colors.white,
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
                    Text('1 - Load Test'),
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
            Text('Description'),
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
