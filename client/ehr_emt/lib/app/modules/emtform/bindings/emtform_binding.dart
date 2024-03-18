import 'package:get/get.dart';

import '../controllers/emtform_controller.dart';

class EmtformBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<EmtformController>(
      () => EmtformController(),
    );
  }
}
