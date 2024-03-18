import 'package:ehr_emt/app/modules/splash.dart';
import 'package:get/get.dart';

import '../modules/emtform/bindings/emtform_binding.dart';
import '../modules/emtform/views/emtform_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/login/bindings/login_binding.dart';
import '../modules/login/views/login_view.dart';
import '../modules/qrscan/bindings/qrscan_binding.dart';
import '../modules/qrscan/views/qrscan_view.dart';

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
      name: _Paths.QRSCAN,
      page: () => QrCodePage(),
      binding: QrscanBinding(),
    ),
    GetPage(
      name: _Paths.EMTFORM,
      page: () => EmtformView(uuid: Get.arguments['uuid'] as String),
      binding: EmtformBinding(),
    ),
    GetPage(
      name: _Paths.LOGIN,
      page: () => LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.SPLASH,
      page: () => const SplashScreen(),
    ),
  ];
}
