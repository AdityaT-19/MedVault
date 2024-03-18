import 'package:ehr_user/app/modules/login/controllers/login_controller.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/profile_controller.dart';

class ProfileView extends GetView<ProfileController> {
  ProfileView({Key? key}) : super(key: key);
  final patient = Get.find<LoginController>().patient;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Profile'),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              Get.find<LoginController>().signOut();
            },
          )
        ],
      ),
      body: ListView(
        children: [
          InkWell(
            child: Container(
              alignment: Alignment.center,
              child: CircleAvatar(
                radius: 50,
                backgroundColor: Colors.transparent,
                child: ClipOval(
                  child: patient.profileImage != null
                      ? Image.network(patient.profileImage!)
                      : Image.asset('assets/plus.png'),
                ),
              ),
            ),
          ),
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
                  leading: Icon(Icons.numbers,
                      color: Get.theme.colorScheme.background),
                  title: Text("UID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.uuid,
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
                  leading: Icon(Icons.perm_identity_outlined,
                      color: Get.theme.colorScheme.background),
                  title: Text("Name", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.userName,
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
                  leading: Icon(Icons.perm_identity,
                      color: Get.theme.colorScheme.background),
                  title: Text("Age", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.age.toString(),
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
                  leading:
                      Icon(Icons.call, color: Get.theme.colorScheme.background),
                  title:
                      Text("Phone No", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.phoneNo,
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
                  leading: Icon(Icons.bloodtype_outlined,
                      color: Get.theme.colorScheme.background),
                  title: Text("Blood Group",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.bloodGroup,
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
                  leading: Icon(Icons.email_outlined,
                      color: Get.theme.colorScheme.background),
                  title:
                      Text("Email ID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.email,
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
                  leading: Icon(Icons.fingerprint,
                      color: Get.theme.colorScheme.background),
                  title: Text("Aadhar Number",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.aadharNo.toString(),
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
                  leading:
                      Icon(Icons.home, color: Get.theme.colorScheme.background),
                  title: Text("Insurance Policy Number",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.insurancePolicyNo,
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
