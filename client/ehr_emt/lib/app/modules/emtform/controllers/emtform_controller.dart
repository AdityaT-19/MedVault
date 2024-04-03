import 'dart:convert';

import 'package:ehr_emt/URL.dart';
import 'package:ehr_emt/app/models/emt_form.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;
import 'package:socket_io_client/socket_io_client.dart' as IO;

class EmtformController extends GetxController {
  final RxString uid = ''.obs;
  final RxString receiverId = ''.obs; // Added receiverId field
  final RxString emergencyType = ''.obs;
  final Rx<MaterialColor> triageLevel = Colors.red.obs;
  final RxString description = ''.obs;
  final RxString bp = ''.obs;
  final RxString spo2 = ''.obs;
  final RxString pulseRate = ''.obs;
  final RxBool isMedicoLegalCase = false.obs;
  final formKey = GlobalKey<FormState>();
  late IO.Socket socket;

  // Speech Recognition
  final stt.SpeechToText _speech = stt.SpeechToText();
  final RxString recognizedText = ''.obs;
  final RxBool isListening = false.obs;

  @override
  void onInit() {
    socket = IO.io(
      '${URL.SOCKET_URL}',
      IO.OptionBuilder()
          .setTransports(['websocket'])
          .disableAutoConnect()
          .build(),
    );
    debugPrint('Socket initialized');
    socket.connect();
    socket.onConnect((_) {
      debugPrint('Socket connected');

      socket.emit('msg', 'test');
    });
    super.onInit();
    initializeSpeech();
  }

  void initializeSpeech() async {
    final hasSpeech = await _speech.initialize();

    if (hasSpeech) {
      print('Speech recognition initialized successfully');
    } else {
      print('Error initializing speech recognition');
    }
  }

  String? toggleListening() {
    if (_speech.isListening) {
      _speech.stop();
      isListening.value = false;
    } else {
      _speech.listen(
        onResult: (result) {
          recognizedText.value = result.recognizedWords;
        },
      );
      isListening.value = true;
    }
    return recognizedText.value;
  }

  void setUid(String value) => uid.value = value;
  void setReceiverId(String value) =>
      receiverId.value = value; // Setter for receiverId
  void setEmergencyType(String value) => emergencyType.value = value;
  //void setTriageLevel(String value) => triageLevel.value = value;
  void setDescription(String value) => description.value = value;
  void setBp(String value) => bp.value = value;
  void setSpo2(String value) => spo2.value = value;
  void setPulseRate(String value) => pulseRate.value = value;

  String? validateUID(String? value) {
    if (value == null || value.isEmpty) {
      return 'UID is required';
    }
    uid.value = value;
    return null;
  }

  String? validateReceiverId(String? value) =>
      validateUID(value); // Validation for receiverId

  String? validateEmergencyType(String? value) {
    if (value == null || value.isEmpty) {
      return 'Emergency Type is required';
    }
    return null;
  }

  String? validateTriageLevel(String? value) {
    if (value == null || value.isEmpty) {
      return 'Triage Level is required';
    }
    return null;
  }

  String? validateDescription(String? value) {
    if (value == null || value.isEmpty) {
      return 'Description is required';
    }
    return null;
  }

  String? validateBP(String? value) {
    if (value == null || value.isEmpty) {
      return 'BP is required';
    }
    return null;
  }

  String? validateSpO2(String? value) {
    if (value == null || value.isEmpty) {
      return 'SpO2 is required';
    }
    return null;
  }

  String? validatePulseRate(String? value) {
    if (value == null || value.isEmpty) {
      return 'Pulse Rate is required';
    }
    return null;
  }

  // Other validation methods for triage level, description, bp, spo2, pulse rate, etc. can be added similarly.
  void submitForm() {
    if (formKey.currentState!.validate()) {
      Get.snackbar(
        'Form Submitted',
        'UID: ${uid.value}\nReceiver ID: ${receiverId.value}\nEmergency Type: ${emergencyType.value}\nTriage Level: ${triageLevel.value}\nDescription: ${description.value}\nBP: ${bp.value}\nSpO2: ${spo2.value}\nPulse Rate: ${pulseRate.value}',
        snackPosition: SnackPosition.BOTTOM,
      );
      print('Form Submitted');
      final EMTForm emtForm = EMTForm(
        patientId: uid.value,
        //receiverId: receiverId.value,
        emtId: '362eb28-f263-48e2-9bcf-7f6490516bO',
        typeOfEmergency: emergencyType.value,
        triage: Color(
          triageLevel.value.value,
        ).obs,
        description: description.value,
        bpLevel: bp.value,
        spO2: spo2.value,
        pulseRate: pulseRate.value,
        isMLC: isMedicoLegalCase.value,
      );
      final body = json.encode(emtForm.toJson());
      print(body);
      socket.emit('qrscan', body);
    }
  }

  @override
  void onClose() {
    _speech.stop();
    super.onClose();
  }
}
