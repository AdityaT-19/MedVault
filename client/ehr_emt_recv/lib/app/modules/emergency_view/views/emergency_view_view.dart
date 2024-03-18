import 'package:ehr_emt_recv/app/models/emt_form.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/emergency_view_controller.dart';

class EmergencyViewView extends StatefulWidget {
  const EmergencyViewView({Key? key, required this.data}) : super(key: key);
  final EMTForm data;

  @override
  State<EmergencyViewView> createState() => _EmergencyViewViewState();
}

class _EmergencyViewViewState extends State<EmergencyViewView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Emergency View'),
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
              color: Get.theme.colorScheme.primary,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("UID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.patientId,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
            ),
            child: Column(
              children: [
                ListTile(
                  title: Text("EMT_ID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  widget.data.emtId,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
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
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
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
                    width: 50,
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
              color: Get.theme.colorScheme.primary,
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
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
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
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
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
                      fontSize: 25),
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
              color: Get.theme.colorScheme.primary,
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
                      fontSize: 25),
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
