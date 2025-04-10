import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/screens/screens.dart';

class MenuItem {
  final String name;
  final String path;
  final IconData icon;
  final Widget widgetPage;
  final bool isBottom;
  final Page<dynamic> Function(BuildContext, GoRouterState)? pageBuilder;

  const MenuItem({
    required this.name,
    required this.path,
    required this.icon,
    required this.widgetPage,
    this.isBottom = false,
    this.pageBuilder,
  });

  GoRoute getGoRoute() => GoRoute(
        path: path,
        name: name,
        builder: (context, state) => widgetPage,
        pageBuilder: pageBuilder ??
            (context, state) {
              return CustomTransitionPage(
                  child: widgetPage,
                  transitionsBuilder:
                      (context, animation, secondaryAnimation, child) =>
                          SlideTransition(
                            position: animation.drive(
                              Tween<Offset>(
                                      begin: const Offset(0.05, 0),
                                      end: Offset.zero)
                                  .chain(CurveTween(curve: Curves.easeIn)),
                            ),
                            child: child,
                          ));
            },
      );
}

final appMenuItems = <MenuItem>[
  const MenuItem(
    name: 'Home',
    path: '/',
    icon: Icons.home_rounded,
    isBottom: true,
    widgetPage: HomeScreen(),
  ),
  const MenuItem(
    name: 'Loads',
    path: '/loads',
    icon: Icons.home_rounded,
    isBottom: true,
    widgetPage: HomeScreen(),
  ),
  const MenuItem(
    name: 'Login',
    path: '/login',
    icon: Icons.login_rounded,
    widgetPage: LoginScreen(),
  ),
];
