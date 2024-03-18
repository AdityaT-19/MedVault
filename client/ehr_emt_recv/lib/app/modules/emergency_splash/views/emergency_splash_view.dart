import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/emergency_splash_controller.dart';

class EmergencySplashView extends GetView<EmergencySplashController> {
  const EmergencySplashView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('EmergencySplashView'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          'EmergencySplashView is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
