import 'package:get/get.dart';

import '../controllers/sosqr_controller.dart';

class SosqrBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<SosqrController>(
      () => SosqrController(),
    );
  }
}
