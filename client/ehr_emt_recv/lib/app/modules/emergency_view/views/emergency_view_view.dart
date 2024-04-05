import 'dart:convert';

import 'package:ehr_emt_recv/URL.dart';
import 'package:ehr_emt_recv/app/models/emt_form.dart';
import 'package:flutter/material.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

import 'package:get/get.dart';

class EmergencyViewView extends StatefulWidget {
  const EmergencyViewView({Key? key, required this.data}) : super(key: key);
  final EMTForm data;

  @override
  State<EmergencyViewView> createState() => _EmergencyViewViewState();
}

class _EmergencyViewViewState extends State<EmergencyViewView> {
  late IO.Socket client;
  @override
  void initState() {
    super.initState();

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
      Get.back();
      Get.toNamed('/emergency_view', arguments: emtForm);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Emergency View'),
        backgroundColor: Get.theme.colorScheme.primaryContainer,
      ),
      body: ListView(
        children: [
          const SizedBox(
            height: 10,
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                const ListTile(
                  title: Text(
                    "UID",
                    style: TextStyle(color: Colors.black),
                  ),
                ),
                Text(
                  widget.data.patientId,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text(
                    "EMT_ID",
                    style: TextStyle(color: Colors.black),
                  ),
                ),
                Text(
                  widget.data.emtId,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("Emergency Type",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.typeOfEmergency,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("Triage", style: TextStyle(color: Colors.black)),
                ),
                Container(
                  color: widget.data.triage.value,
                  child: const SizedBox(
                    height: 50,
                    width: 100,
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("Description",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.description,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title:
                      Text("BP Level", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.bpLevel,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("sPO2", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.spO2,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  title:
                      Text("Pulse Rate", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.pulseRate,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 20),
                ),
                const SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
