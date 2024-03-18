import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() async {
    Get.putAsync<LoginController>(
      () async {
        final controller = LoginController();
        controller.onInit();
        return controller;
      },
    );
  }
}
