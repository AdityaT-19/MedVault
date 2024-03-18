import 'dart:convert';

import 'package:ehr_emt_recv/URL.dart';
import 'package:ehr_emt_recv/app/models/emt_form.dart';
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
        '${URL.SOCKET_URL}:${URL.SOCKET_PORT}',
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
        title: Text('Dashboard'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Waiting for Emeregencies'),
            CircularProgressIndicator(),
          ],
        ),
      ),
    );
  }
}
