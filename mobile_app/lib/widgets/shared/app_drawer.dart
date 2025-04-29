import 'package:flutter/material.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = context.read<ThemeProvider>();
    return Drawer(
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
            onTap: () {
              theme.toggleTheme();
            },
          ),
          SwitchListTile(
            subtitle: Text('Dark Mode'),
            value: theme.isDark ? true : false,
            onChanged: (_) => theme.toggleTheme(),
          )
        ],
      ),
    );
  }
}
