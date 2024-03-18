import 'dart:convert';

import 'package:barcode_scan2/barcode_scan2.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class QRcodeController extends GetxController {
  var scanResult = ''.obs;
  Future<void> scan() async {
    try {
      final result = await BarcodeScanner.scan(
        options: const ScanOptions(
          strings: {
            'cancel': 'Cancel',
            'flash_on': 'Flash on',
            'flash_off': 'Flash off',
          },
          restrictFormat: <BarcodeFormat>[BarcodeFormat.qr],
          useCamera: -1,
          autoEnableFlash: false,
          android: AndroidOptions(
            aspectTolerance: 0.00,
            useAutoFocus: true,
          ),
        ),
      );
      debugPrint(result.rawContent);
      Get.snackbar(
        'QR Code Result',
        jsonEncode(result.rawContent),
        snackPosition: SnackPosition.BOTTOM,
      );
      scanResult.value = result.rawContent;
      Get.toNamed(
        '/emtform',
        arguments: {'uuid': result.rawContent},
      );
    } catch (e) {
      print(e.toString());
      scanResult.value = e == BarcodeScanner.cameraAccessDenied
          ? 'The user did not grant the camera permission!'
          : 'Unknown error: $e';
    }
  }
}
