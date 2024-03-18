import 'dart:convert';

import 'package:ehr_user/URL.dart';
import 'package:ehr_user/app/models/user.dart';
import 'package:ehr_user/app/modules/login/controllers/login_controller.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:get/get.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      final user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        final authController = Get.put(LoginController(), permanent: true);
        final uid = user.uid;
        debugPrint(uid);
        final response = await http.get(
            Uri.parse('${URL.REG_URL}:${URL.REG_PORT}/user/getDetails/$uid'));
        debugPrint(response.body);
        final pat =
            Patient.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
        authController.patient = pat;
        Get.offAllNamed('/dashboard');
      }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}
