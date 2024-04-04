import 'package:animate_do/animate_do.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Get.theme.colorScheme.primary,
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Container(
              height: 400,
              decoration: BoxDecoration(
                image: DecorationImage(
                    colorFilter: ColorFilter.mode(
                      Get.theme.colorScheme.primary.withOpacity(0.5),
                      BlendMode.srcOver,
                    ),
                    image: const AssetImage(
                      'assets/background.png',
                    ),
                    fit: BoxFit.fill),
              ),
              child: Stack(
                children: <Widget>[
                  Column(
                    children: [
                      const SizedBox(
                        height: 40,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            alignment: Alignment.center,
                            width: 300,
                            height: 300,
                            child: FadeInUp(
                              duration: const Duration(milliseconds: 1300),
                              child: Image.asset(
                                'assets/plus.png',
                                color: Get.theme.colorScheme.onPrimary,
                                fit: BoxFit.fill,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(30.0),
              child: Column(
                children: <Widget>[
                  const SizedBox(
                    height: 30,
                  ),
                  FadeInUp(
                    duration: const Duration(milliseconds: 1900),
                    child: ElevatedButton(
                      onPressed: () {
                        Get.toNamed('/dashboard');
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Get.theme.colorScheme.background,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 50,
                          vertical: 15,
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(
                            10,
                          ),
                        ),
                      ),
                      child: Text(
                        "Lets Go!",
                        style: TextStyle(
                          color: Get.theme.colorScheme.primary,
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 70,
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
