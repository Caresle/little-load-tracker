import 'package:flutter/material.dart';
import 'package:mobile_app/constants/token.dart';
import 'package:mobile_app/helpers/jwt.dart';
import 'package:mobile_app/helpers/shared_config.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          SizedBox(
            width: double.infinity,
            child: DrawerHeader(
              decoration: BoxDecoration(color: Colors.blue.shade600),
              child: Text(
                'Little Load Tracker',
                style: TextStyle(color: Colors.white, fontSize: 18),
              ),
            ),
          ),
          ListTile(
            leading: Icon(Icons.fire_truck_rounded),
            title: Text('Loads'),
            onTap: () async {
              print('loads tapped');
              final token = await SharedConfig.get(TokenConstants.key);
              if (token == null) {
                print('No token found');
                return;
              }

              verifyJwt(token);
            },
          ),
          ListTile(
            leading: Icon(Icons.settings_rounded),
            title: Text('Settings'),
            onTap: () => context.read<ThemeProvider>().toggleTheme(),
          ),
          Spacer(), // Pushes the switch to the bottom
          Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: SwitchListTile(
              title: Text('Dark Mode'),
              value: context.watch<ThemeProvider>().isDark,
              onChanged: (_) => context.read<ThemeProvider>().toggleTheme(),
            ),
          ),
        ],
      ),
    );
  }
}
