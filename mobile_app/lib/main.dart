import 'package:flutter/material.dart';
import 'package:mobile_app/config/environment.dart';
import 'package:mobile_app/config/router/app_router.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  await Environment.initEnvironment();
  runApp(ChangeNotifierProvider(
      create: (context) => ThemeProvider(), child: const MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = context.watch<ThemeProvider>().isDark;

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: 'Little Load Tracker Mobile',
      routerConfig: appRouter,
      theme: ThemeData(
        brightness: isDark ? Brightness.dark : Brightness.light,
        useMaterial3: true,
        colorSchemeSeed: Colors.blue.shade500,
      ),
    );
  }
}
