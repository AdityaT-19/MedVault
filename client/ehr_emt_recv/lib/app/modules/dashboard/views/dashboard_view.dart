import 'dart:convert';

import 'package:ehr_emt_recv/URL.dart';
import 'package:ehr_emt_recv/app/models/emt_form.dart';
import 'package:ehr_emt_recv/app/modules/login/controllers/login_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:http/http.dart' as http;

class Dashboard extends StatefulWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  late IO.Socket client;
  @override
  void initState() {
    debugPrint('initState');
    client = IO.io(
        '${URL.SOCKET_URL}',
        IO.OptionBuilder()
            .setTransports(['websocket'])
            .disableAutoConnect()
            .build());
    debugPrint('connect');
    client.connect();

    client.on('connect', (_) {
      print('connected');
    });
    client.on('qrscan', (data) {
      print(data);
      final json = jsonDecode(data);
      print(json);
      final EMTForm emtForm = EMTForm.fromJson(json as Map<String, dynamic>);
      print(emtForm.patientId);
      print(emtForm.emtId);
      Get.toNamed('/emergency_view', arguments: emtForm);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashboard'),
        actions: [
          //signout
          IconButton(
            onPressed: () async {
              final loginController = Get.find<LoginController>();
              await loginController.signOut();
            },
            icon: const Icon(Icons.logout),
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text(
              'Waiting for Emeregencies',
              style: Get.textTheme.displayMedium,
            ),
            SizedBox(
              height: 100,
              width: 100,
              child: CircularProgressIndicator(
                color: Get.theme.colorScheme.primary,
                strokeWidth: 7,
                strokeCap: StrokeCap.butt,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
