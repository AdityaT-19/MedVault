import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

import '../controllers/prescreption_controller.dart';

class PrescreptionView extends StatelessWidget {
  final stt.SpeechToText speech = stt.SpeechToText();
  void initializeSpeech() async {
    var hasSpeech = await speech.initialize();

    if (hasSpeech) {
      print('Speech recognition initialized successfully');
    } else {
      print('Error initializing speech recognition');
    }
  }

  final PrescreptionController prescreptionController = Get.find();
  PrescreptionView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Prescription',
          style: TextStyle(color: Get.theme.colorScheme.tertiary),
        ),
        backgroundColor: Get.theme.colorScheme.primaryContainer,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Form(
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                        decoration: const InputDecoration(
                          labelText: 'UID',
                          hintText: 'Enter Patient UID',
                        ),
                        onChanged: (value) =>
                            prescreptionController.setUid(value),
                        validator: (value) =>
                            prescreptionController.validateUID(
                              value,
                            )),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Health Issues',
                        hintText: 'Enter the health issues of the patient',
                        suffixIcon: IconButton(
                            icon: Icon(Icons.mic),
                            onPressed: () {
                              String? val =
                                  prescreptionController.toggleListening();
                              print(val);
                              if (val != null) {
                                print(val);
                                prescreptionController.setHealthIssues(val);
                              }
                            }),
                      ),
                      validator: (value) =>
                          prescreptionController.validateHealthIssues(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Suspected Disease',
                        hintText: 'Enter the suspected diseases of the patient',
                        suffixIcon: IconButton(
                            icon: Icon(Icons.mic),
                            onPressed: () {
                              String? val =
                                  prescreptionController.toggleListening();

                              if (val != null) {
                                prescreptionController.setSuspectedDisease(val);
                              }
                            }),
                      ),
                      validator: (value) => prescreptionController
                          .validateSuspectedDisease(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Investigation',
                        hintText: 'Mention the Tests to be performed',
                        suffixIcon: IconButton(
                            icon: Icon(Icons.mic),
                            onPressed: () {
                              String? val =
                                  prescreptionController.toggleListening();

                              if (val != null) {
                                prescreptionController.setInvestigation(val);
                              }
                            }),
                      ),
                      onChanged: (value) =>
                          prescreptionController.setInvestigation(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Required Treatments',
                        hintText:
                            'Enter the treatments required for the patient',
                        suffixIcon: IconButton(
                            icon: Icon(Icons.mic),
                            onPressed: () {
                              String? val =
                                  prescreptionController.toggleListening();

                              if (val != null) {
                                prescreptionController
                                    .setRequiredTreatments(val);
                              }
                            }),
                      ),
                      validator: (value) =>
                          prescreptionController.validateTreatment(value),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Medication',
                        hintText: 'Enter the Medications of the Patient',
                        suffixIcon: IconButton(
                            icon: const Icon(Icons.mic),
                            onPressed: () {
                              String? val =
                                  prescreptionController.toggleListening();

                              if (val != null) {
                                prescreptionController.setMedications(val);
                              }
                            }),
                      ),
                      onChanged: (value) =>
                          prescreptionController.setMedications(value),
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('Follow Up?'),
                      const SizedBox(
                        width: 10,
                      ),
                      Obx(
                        () => Switch(
                          value: prescreptionController.checkfollow.value,
                          onChanged: (value) {
                            prescreptionController.change();
                          },
                        ),
                      ),
                    ],
                  ),
                  Obx(() => prescreptionController.checkfollow.value
                      ? Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text('Pick a Date :'),
                            IconButton(
                                onPressed: () async {
                                  await showDatePicker(
                                    context: context,
                                    //initialDate: DateTime(2023, 1, 1),
                                    firstDate: DateTime(2024),
                                    lastDate: DateTime(2025),
                                  ).then((value) {
                                    if (prescreptionController.validateFollowUP(
                                            value.toString()) ==
                                        null) {
                                      prescreptionController
                                          .setFollowUpDate(value.toString());
                                    }
                                  });
                                },
                                icon: const Icon(Icons.calendar_today)),
                          ],
                        )
                      : const SizedBox()),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    onPressed: () {},
                    child: const Text(
                      'Save',
                      style: TextStyle(fontSize: 15),
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
