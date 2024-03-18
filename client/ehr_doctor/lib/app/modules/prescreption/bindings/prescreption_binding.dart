import 'package:get/get.dart';

import '../controllers/prescreption_controller.dart';

class PrescreptionBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<PrescreptionController>(
      () => PrescreptionController(),
    );
  }
}
