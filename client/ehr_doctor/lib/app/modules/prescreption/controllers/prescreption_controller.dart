import 'package:get/get.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

class PrescreptionController extends GetxController {
  //TODO: Implement PrescreptionController
  final RxBool checkfollow = false.obs;
  RxString uid = ''.obs;
  RxString healthIssues = ''.obs;
  RxString suspectedDisease = ''.obs;
  RxString investigation = ''.obs;
  RxString requiredTreatments = ''.obs;
  RxBool followUp = false.obs;
  RxString followUpDate = ''.obs;
  RxString medications = ''.obs;

  void setUid(String value) => uid.value = value;
  void setHealthIssues(String value) => healthIssues.value = value;
  void setSuspectedDisease(String value) => suspectedDisease.value = value;
  void setInvestigation(String value) => investigation.value = value;
  void setRequiredTreatments(String value) => requiredTreatments.value = value;
  void setFollowUp(bool value) => followUp.value = value;
  void setFollowUpDate(String value) => followUpDate.value = value;
  void setMedications(String value) => medications.value = value;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void change() {
    checkfollow.toggle();
  }

  String? validateDiagnosis(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Diagnosis is required';
    }
    return null;
  }

  String? validateTreatment(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Treatment is required';
    }
    return null;
  }

  String? validateFollowUpDate(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Follow Up Date is required';
    }
    return null;
  }

  String? validateHealthIssues(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Health Issues is required';
    }
    return null;
  }

  String? validateSuspectedDisease(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Suspected Disease is required';
    }
    return null;
  }

  String? validateUID(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'UID is required';
    }
    return null;
  }

  String? validateFollowUP(String? value) {
    if ((GetUtils.isNullOrBlank(value) ?? false)) {
      return 'Enter Follow Up Date';
    }
    return null;
  }

  stt.SpeechToText _speech = stt.SpeechToText();
  RxString recognizedText = ''.obs;
  RxBool isListening = false.obs;

  void initializeSpeech() async {
    var hasSpeech = await _speech.initialize();

    if (hasSpeech) {
      print('Speech recognition initialized successfully');
    } else {
      print('Error initializing speech recognition');
    }
  }

  String? toggleListening() {
    initializeSpeech();
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

  Future<void> submitPrescreption() async {}
}
