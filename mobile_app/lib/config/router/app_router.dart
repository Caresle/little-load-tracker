import './menu_item.dart';
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
    routes: [...appMenuItems.map((route) => route.getGoRoute())],
    initialLocation: '/login');

final bottomRoutes = appMenuItems.where((route) => route.isBottom).toList();
