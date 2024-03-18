import 'package:get/get.dart';

import '../controllers/emergency_view_controller.dart';

class EmergencyViewBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<EmergencyViewController>(
      () => EmergencyViewController(),
    );
  }
}
