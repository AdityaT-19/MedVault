import 'dart:convert';
import 'package:ehr_emt_recv/URL.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class LoginController extends GetxController {
  //TODO: Implement LoginController
  final authInstance = FirebaseAuth.instance;
  RxBool isLogged = false.obs;
  @override
  void onInit() async {
    FirebaseAuth.instance.authStateChanges().listen((event) async {
      if (event != null) {
        final response = await http
            .get(Uri.parse('${URL.REG_URL}/user/getUserDetails/${event.uid}'));
        print(response.body);
        print(jsonDecode(response.body));
        isLogged.value = true;
      }
      Get.offAllNamed('/login');
    });

    super.onInit();
    //create a dummy  patient based on the model
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
      //Get.offAllNamed('/dashboard');
      await authInstance.signInWithEmailAndPassword(
          email: email, password: password);

      //Get.offAllNamed('/dashboard');
      //fetch from custom backend
    } on FirebaseAuthException catch (e) {
      Get.snackbar('Error', e.message!);
    }
  }

  Future<void> signOut() async {
    await authInstance.signOut();
  }
}
