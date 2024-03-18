enum Sex { M, F }

class HealthSchemeData {
  String schemeName;
  String id;

  HealthSchemeData({required this.schemeName, required this.id});

  factory HealthSchemeData.fromJson(Map<String, dynamic> json) {
    return HealthSchemeData(
      schemeName: json['scheme_name'],
      id: json['id'],
    );
  }
}

class Medicine {
  String name;
  String dosage;

  Medicine({required this.name, required this.dosage});

  factory Medicine.fromJson(Map<String, dynamic> json) {
    return Medicine(
      name: json['name'],
      dosage: json['dosage'],
    );
  }
}

class Disease {
  String diseaseName;
  String severity;

  Disease({
    required this.diseaseName,
    required this.severity,
  });

  factory Disease.fromJson(Map<String, dynamic> json) {
    return Disease(
      diseaseName: json['disease_name'],
      severity: json['severity'],
    );
  }
}

class History {
  String diseaseName;
  String doctorName;

  History({
    required this.diseaseName,
    required this.doctorName,
  });

  factory History.fromJson(Map<String, dynamic> json) {
    return History(
      diseaseName: json['disease_name'],
      doctorName: json['doctor_name'],
    );
  }
}

class Treatment {
  String treatments;
  int noOfDays;

  Treatment({required this.treatments, required this.noOfDays});

  factory Treatment.fromJson(Map<String, dynamic> json) {
    return Treatment(
      treatments: json['treatments'],
      noOfDays: json['no_of_days'],
    );
  }
}

class Allergies {
  String allergyName;
  String severity;

  Allergies({required this.allergyName, required this.severity});

  factory Allergies.fromJson(Map<String, dynamic> json) {
    return Allergies(
      allergyName: json['allergy_name'],
      severity: json['severity'],
    );
  }
}

class EmergencyDetails {
  String emergencyContactName;
  String emergencyPhoneNo;

  EmergencyDetails(
      {required this.emergencyContactName, required this.emergencyPhoneNo});

  factory EmergencyDetails.fromJson(Map<String, dynamic> json) {
    return EmergencyDetails(
      emergencyContactName: json['emergency_contact_name'],
      emergencyPhoneNo: json['emergency_phone_no'],
    );
  }
}

class Prescription {
  String prescriptionId;
  String healthIssue;
  List<Disease> suspectedDisease;
  List<Treatment> treatementRequired;
  String? followUp;
  List<Medicine> medicines;
  String doctorId;

  Prescription(
      {required this.prescriptionId,
      required this.healthIssue,
      required this.suspectedDisease,
      required this.treatementRequired,
      required this.followUp,
      required this.medicines,
      required this.doctorId});

  factory Prescription.fromJson(Map<String, dynamic> json) {
    final List<Disease> suspectedDisease =
        (json['suspected_disease'] as List<dynamic>)
            .map((json) => Disease.fromJson(json))
            .toList();
    final List<Treatment> treatementRequired =
        (json['treatement_required'] as List<dynamic>)
            .map((json) => Treatment.fromJson(json))
            .toList();
    final List<Medicine> medicines = (json['medicines'] as List<dynamic>)
        .map((json) => Medicine.fromJson(json))
        .toList();
    return Prescription(
      prescriptionId: json['prescription_id'],
      healthIssue: json['health_issue'],
      suspectedDisease: suspectedDisease,
      treatementRequired: treatementRequired,
      followUp: (json['follow_up']),
      medicines: medicines,
      doctorId: json['doctor_id'],
    );
  }
}

class PreviousRecordandReports {
  String path;
  String addedDate;

  PreviousRecordandReports({required this.path, required this.addedDate});

  factory PreviousRecordandReports.fromJson(Map<String, dynamic> json) {
    return PreviousRecordandReports(
      path: json['path'],
      addedDate: (json['added_date']),
    );
  }
}

class LabReport {
  bool completed;
  String typeOfTest;
  String dateOfTest;
  List<PreviousRecordandReports> subTestReports;
  String doctorId;
  String techinicanId;
  String reportId;
  String reportName;

  LabReport(
      {required this.completed,
      required this.typeOfTest,
      required this.dateOfTest,
      required this.subTestReports,
      required this.doctorId,
      required this.reportId,
      required this.reportName,
      required this.techinicanId});

  factory LabReport.fromJson(Map<String, dynamic> json) {
    final List<PreviousRecordandReports> subTestReports =
        (json['sub_test_reports'] as List<dynamic>)
            .map((json) => PreviousRecordandReports.fromJson(json))
            .toList();
    return LabReport(
      completed: json['completed'],
      typeOfTest: json['type_of_test'],
      dateOfTest: (json['date_of_test']),
      subTestReports: subTestReports,
      doctorId: json['doctor_id'],
      techinicanId: json['techinican_id'],
      reportId: json['report_id'],
      reportName: json['report_name'],
    );
  }
}

class Patient {
  String uuid;
  String? profileImage;
  String userName;
  int age;
  Sex sex;
  String phoneNo;
  String email;
  List<EmergencyDetails> emergencyDetails;
  String address;
  int aadharNo;
  int bplNo;
  String bloodGroup;
  List<HealthSchemeData> healthSchemeData;
  String insurancePolicyNo;
  List<Disease> medicalDiseases;
  List<History> pastHistory;
  List<Treatment> treatmentsHistory;
  List<Allergies> allergies;
  List<Prescription> prescriptions;
  List<LabReport> labReports;
  List<Medicine> medicines;

  Patient(
      {required this.uuid,
      this.profileImage,
      required this.medicines,
      required this.userName,
      required this.age,
      required this.sex,
      required this.phoneNo,
      required this.email,
      required this.emergencyDetails,
      required this.address,
      required this.aadharNo,
      required this.bplNo,
      required this.healthSchemeData,
      required this.insurancePolicyNo,
      required this.medicalDiseases,
      required this.pastHistory,
      required this.treatmentsHistory,
      required this.allergies,
      required this.prescriptions,
      required this.bloodGroup,
      required this.labReports});

  factory Patient.fromJson(Map<String, dynamic> json) {
    final List<HealthSchemeData> healthSchemeData =
        (json['health_scheme_data'] as List<dynamic>)
            .map((json) => HealthSchemeData.fromJson(json))
            .toList();
    final List<Disease> medicalDiseases =
        (json['medical_diseases'] as List<dynamic>)
            .map((json) => Disease.fromJson(json))
            .toList();
    final List<History> pastHistory = (json['past_history'] as List<dynamic>)
        .map((json) => History.fromJson(json))
        .toList();
    final List<Treatment> treatmentsHistory =
        (json['treatments_history'] as List<dynamic>)
            .map((json) => Treatment.fromJson(json))
            .toList();
    final List<Allergies> allergies = (json['allergies'] as List<dynamic>)
        .map((json) => Allergies.fromJson(json))
        .toList();
    final List<Prescription> prescriptions =
        (json['prescriptions'] as List<dynamic>)
            .map((json) => Prescription.fromJson(json))
            .toList();
    final List<LabReport> labReports = (json['lab_reports'] as List<dynamic>)
        .map((json) => LabReport.fromJson(json))
        .toList();
    final List<EmergencyDetails> emergencyDetails =
        (json['emergency_details'] as List<dynamic>)
            .map((json) => EmergencyDetails.fromJson(json))
            .toList();
    final List<Medicine> medicines = (json['medicines'] as List<dynamic>)
        .map((json) => Medicine.fromJson(json))
        .toList();
    return Patient(
      uuid: json['uuid'],
      profileImage: json['profile_image'],
      userName: json['user_name'],
      age: json['age'],
      sex: json['sex'] == 'M' ? Sex.M : Sex.F,
      phoneNo: json['phone_no'],
      email: json['email'],
      bloodGroup: json['bloodGroup'],
      emergencyDetails: emergencyDetails,
      address: json['address'],
      aadharNo: json['aadhar_no'],
      bplNo: json['bpl_no'] ?? 0,
      healthSchemeData: healthSchemeData,
      insurancePolicyNo: json['insurance_policy_no'],
      medicalDiseases: medicalDiseases,
      pastHistory: pastHistory,
      treatmentsHistory: treatmentsHistory,
      allergies: allergies,
      prescriptions: prescriptions,
      labReports: labReports,
      medicines: medicines,
    );
  }
}
