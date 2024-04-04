import 'package:get/get.dart';

import '../modules/dashboard/bindings/dashboard_binding.dart';
import '../modules/dashboard/views/dashboard_view.dart';
import '../modules/emergency_splash/bindings/emergency_splash_binding.dart';
import '../modules/emergency_splash/views/emergency_splash_view.dart';
import '../modules/emergency_view/bindings/emergency_view_binding.dart';
import '../modules/emergency_view/views/emergency_view_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/login/bindings/login_binding.dart';
import '../modules/login/views/login_view.dart';
import '../modules/splash.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.HOME;

  static final routes = [
    GetPage(
      name: _Paths.HOME,
      page: () => const HomeView(),
      binding: HomeBinding(),
    ),
    GetPage(
      name: _Paths.LOGIN,
      page: () => LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.DASHBOARD,
      page: () => Dashboard(),
      binding: DashboardBinding(),
    ),
    GetPage(
      name: _Paths.SPLASH,
      page: () => const SplashScreen(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.EMERGENCY,
      page: () => EmergencyViewView(
        data: Get.arguments,
      ),
      binding: EmergencyViewBinding(),
    ),
    GetPage(
      name: _Paths.EMERGENCY_SPLASH,
      page: () => const EmergencySplashView(),
      binding: EmergencySplashBinding(),
    ),
  ];
}
