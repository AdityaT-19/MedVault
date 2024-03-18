import 'dart:convert';

import 'package:ehr_user/URL.dart';
import 'package:ehr_user/app/models/user.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class LoginController extends GetxController {
  //TODO: Implement LoginController
  final authInstance = FirebaseAuth.instance;
  RxBool isLogged = false.obs;

  late Patient patient;
  @override
  void onInit() async {
    FirebaseAuth.instance.authStateChanges().listen((event) async {
      if (event != null) {
        final response = await http.get(Uri.parse(
            '${URL.REG_URL}:${URL.REG_PORT}/user/getDetails/${event.uid}'));
        print(response.body);
        print(jsonDecode(response.body));
        final user =
            Patient.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
        patient = user;
        if (Get.currentRoute != '/sosqr') {
          Get.offAllNamed('/dashboard');
        }
        isLogged.value = true;
      }
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
      Get.offAllNamed('/dashboard');
      //Get.offAllNamed('/dashboard');
      //fetch from custom backend
    } on FirebaseAuthException catch (e) {
      Get.snackbar('Error', e.message!);
    }
  }

  void signOut() async {
    await authInstance.signOut();
  }
}
