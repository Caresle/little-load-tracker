import 'package:flutter/material.dart';
import 'package:mobile_app/config/environment.dart';
import 'package:mobile_app/config/router/app_router.dart';
import 'package:mobile_app/providers/load_id_provider.dart';
import 'package:mobile_app/providers/loads_provider.dart';
import 'package:mobile_app/providers/theme_provider.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Environment.initEnvironment();
  runApp(MultiProvider(providers: [
    ChangeNotifierProvider(create: (_) => LoadsProvider()),
    ChangeNotifierProvider(create: (_) => LoadIdProvider()),
    ChangeNotifierProvider(create: (_) => ThemeProvider()),
  ], child: const MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = context.watch<ThemeProvider>().isDark;

    final themeData = ThemeData(
      brightness: isDark ? Brightness.dark : Brightness.light,
      useMaterial3: true,
      colorSchemeSeed: Colors.blue.shade500,
    );

    return AnimatedTheme(
      data: themeData,
      duration: const Duration(milliseconds: 200),
      curve: Curves.easeInOut,
      child: MaterialApp.router(
        debugShowCheckedModeBanner: false,
        title: 'Little Load Tracker Mobile',
        routerConfig: appRouter,
        theme: themeData,
      ),
    );
  }
}
