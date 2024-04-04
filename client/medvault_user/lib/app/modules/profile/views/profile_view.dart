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
        backgroundColor: Get.theme.colorScheme.primaryContainer,
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              Get.find<LoginController>().signOut();
              Get.offAllNamed('/login');
            },
          )
        ],
      ),
      body: ListView(
        children: [
          SizedBox(
            height: 20,
          ),
          InkWell(
            child: Container(
              alignment: Alignment.center,
              child: CircleAvatar(
                radius: 100,
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
              color: Get.theme.colorScheme.primaryContainer,
            ),
            child: Column(
              children: [
                ListTile(
                  leading: Icon(Icons.numbers, color: Colors.black),
                  title: Text("UID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.uuid,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 15),
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
                  leading:
                      Icon(Icons.perm_identity_outlined, color: Colors.black),
                  title: Text("Name", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.userName,
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
                  leading: Icon(Icons.perm_identity, color: Colors.black),
                  title: Text("Age", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.age.toString(),
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
                  leading: Icon(Icons.call, color: Colors.black),
                  title:
                      Text("Phone No", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.phoneNo,
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
                  leading: Icon(Icons.bloodtype_outlined, color: Colors.black),
                  title: Text("Blood Group",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.bloodGroup,
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
                  leading: Icon(Icons.email_outlined, color: Colors.black),
                  title:
                      Text("Email ID", style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.email,
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
                  leading: Icon(Icons.fingerprint, color: Colors.black),
                  title: Text("Aadhar Number",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.aadharNo.toString(),
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
                  leading: Icon(Icons.home, color: Colors.black),
                  title: Text("Insurance Policy Number",
                      style: TextStyle(color: Colors.black)),
                ),
                Text(
                  patient.insurancePolicyNo,
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
