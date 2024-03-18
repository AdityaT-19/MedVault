import 'package:ehr_emt/app/modules/qrscan/controllers/qrscan_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class QrCodePage extends StatelessWidget {
  QrCodePage({super.key}); // Observable variable
  final QRcodeController c = Get.put(QRcodeController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('QR Code Scanner'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Obx(
              () => Text(c.scanResult.value),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: c.scan,
              child: const Text('Scan QR Code'),
            ),
          ],
        ),
      ),
    );
  }
}
