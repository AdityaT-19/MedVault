import 'package:flutter/material.dart';
import 'package:get/get.dart';

class EMTForm {
  String patientId;
  //String receiverId;
  String emtId;
  String typeOfEmergency;
  Rx<Color> triage;
  String description;
  String bpLevel;
  String spO2;
  String pulseRate;
  bool isMLC;

  EMTForm({
    required this.patientId,
    // required this.receiverId,
    required this.emtId,
    required this.typeOfEmergency,
    required this.triage,
    required this.description,
    required this.bpLevel,
    required this.spO2,
    required this.pulseRate,
    this.isMLC = false,
  });

  factory EMTForm.fromJson(Map<String, dynamic> json) {
    return EMTForm(
      patientId: json['patient_id'],
      //receiverId: json['receiver_id'],
      emtId: json['emt_id'],
      typeOfEmergency: json['type_of_emergency'] ?? '',
      triage: Color(
        int.parse(json['triage'], radix: 16),
        //['triage'],
      ).obs,
      description: json['description'],
      bpLevel: json['bp_level'],
      spO2: json['spO2'],
      pulseRate: json['pulse_rate'],
      isMLC: json['isMLC'] ?? false,
    );
  }
}
