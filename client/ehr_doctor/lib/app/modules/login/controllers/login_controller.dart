import 'package:get/get.dart';
import 'package:firebase_auth/firebase_auth.dart';

class LoginController extends GetxController {
  //TODO: Implement LoginController
  final authInstance = FirebaseAuth.instance;
  RxBool isLogged = false.obs;

  @override
  void onInit() {
    FirebaseAuth.instance.authStateChanges().listen((event) {
      if (event != null) {
        Get.offAllNamed('/dashboard');
        isLogged.value = true;
      } else {
        Get.offAllNamed('/login');
      }
    });
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void signIn(String email, String password) async {
    try {
      await authInstance.signInWithEmailAndPassword(
          email: email, password: password);
      //Get.offAllNamed('/dashboard');
      //fetch from custom backend
    } on FirebaseAuthException catch (e) {
      Get.snackbar('Error', e.message!);
    }
  }
}
