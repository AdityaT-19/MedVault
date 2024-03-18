import 'package:get/get.dart';

import '../controllers/emergency_splash_controller.dart';

class EmergencySplashBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<EmergencySplashController>(
      () => EmergencySplashController(),
    );
  }
}
