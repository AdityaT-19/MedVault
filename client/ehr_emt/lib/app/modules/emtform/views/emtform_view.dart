import 'package:ehr_emt/app/modules/emtform/controllers/emtform_controller.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

class EmtformView extends StatelessWidget {
  final stt.SpeechToText speech = stt.SpeechToText();
  final TextEditingController uidController = TextEditingController();
  final String uuid;
  void initializeSpeech() async {
    var hasSpeech = await speech.initialize();

    if (hasSpeech) {
      print('Speech recognition initialized successfully');
    } else {
      print('Error initializing speech recognition');
    }
  }

  final EmtformController emtController = Get.find();
  EmtformView({Key? key, required this.uuid}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    uidController.text = uuid;

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'EMT Form',
        ),
        backgroundColor: Get.theme.colorScheme.primaryContainer,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Form(
              key: emtController.formKey,
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'Medico Legal Case',
                        style: TextStyle(
                          fontSize: 15,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      Checkbox(
                        value: emtController.isMedicoLegalCase.value,
                        onChanged: (value) {
                          emtController.isMedicoLegalCase.value = value!;
                        },
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: const InputDecoration(
                        labelText: 'UID',
                        hintText: 'Enter Patient UID',
                      ),
                      onChanged: (value) => emtController.setUid(value),
                      validator: (value) => emtController.validateUID(
                        value,
                      ),
                      controller: uidController,
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Emergency Type',
                        hintText: 'Enter the type of Emergency',
                        suffixIcon: IconButton(
                            icon: const Icon(Icons.mic),
                            onPressed: () {
                              String? val = emtController.toggleListening();
                              print(val);
                              if (val != null) {
                                print(val);
                                emtController.setEmergencyType(val);
                              }
                            }),
                      ),
                      validator: (value) =>
                          emtController.validateEmergencyType(value),
                      onChanged: (value) =>
                          emtController.setEmergencyType(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  const Text(
                    'Triage Level',
                    style: TextStyle(
                      fontSize: 15,
                    ),
                  ),
                  Obx(
                    () => DropdownButton(
                      padding: EdgeInsets.all(8),
                      value: emtController.triageLevel.value,
                      items: [
                        DropdownMenuItem(
                          value: Colors.red,
                          child: Container(
                            padding: EdgeInsets.all(8),
                            color: Colors.red,
                            child: const SizedBox(
                              child: Center(child: Text('Red')),
                            ),
                          ),
                        ),
                        DropdownMenuItem(
                          value: Colors.yellow,
                          child: Container(
                            color: Colors.yellow,
                            child: const SizedBox(
                              child: Center(child: const Text('Yellow')),
                            ),
                          ),
                        ),
                        DropdownMenuItem(
                          value: Colors.green,
                          child: Container(
                            color: Colors.green,
                            child: const SizedBox(
                              child: Center(child: Text('Green')),
                            ),
                          ),
                        ),
                      ],
                      onChanged: (value) =>
                          emtController.triageLevel.value = value!,
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Description',
                        hintText:
                            'Enter the description of the patient condition',
                        suffixIcon: IconButton(
                            icon: const Icon(Icons.mic),
                            onPressed: () {
                              String? val = emtController.toggleListening();

                              if (val != null) {
                                emtController.setDescription(val);
                              }
                            }),
                      ),
                      onChanged: (value) => emtController.setDescription(value),
                      validator: emtController.validateDescription,
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'BP',
                        hintText: 'Enter the BP of the Patient',
                        suffixIcon: IconButton(
                          icon: const Icon(Icons.mic),
                          onPressed: () {
                            String? val = emtController.toggleListening();

                            if (val != null) {
                              emtController.setBp(val);
                            }
                          },
                        ),
                      ),
                      onChanged: (value) => emtController.setBp(value),
                      validator: (value) => emtController.validateBP(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'sPO2',
                        hintText: 'Enter the sPO2 of the Patient',
                        suffixIcon: IconButton(
                            icon: const Icon(Icons.mic),
                            onPressed: () {
                              String? val = emtController.toggleListening();

                              if (val != null) {
                                emtController.setSpo2(val);
                              }
                            }),
                      ),
                      onChanged: (value) => emtController.setSpo2(value),
                      validator: (value) => emtController.validateSpO2(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(8),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Pulse Rate',
                        hintText: 'Enter the Pulse Rate of the Patient',
                        suffixIcon: IconButton(
                            icon: const Icon(Icons.mic),
                            onPressed: () {
                              String? val = emtController.toggleListening();

                              if (val != null) {
                                emtController.setPulseRate(val);
                              }
                            }),
                      ),
                      onChanged: (value) => emtController.setPulseRate(value),
                      validator: (value) =>
                          emtController.validatePulseRate(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      emtController.submitForm();
                    },
                    child: const Text(
                      'Send',
                      style: TextStyle(fontSize: 20),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
