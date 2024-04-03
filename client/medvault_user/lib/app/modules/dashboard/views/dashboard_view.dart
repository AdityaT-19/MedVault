import 'package:ehr_user/app/models/user.dart';
import 'package:ehr_user/app/modules/dashboard/views/diseases_page.dart';
import 'package:ehr_user/app/modules/dashboard/views/medicines_page.dart';
import 'package:ehr_user/app/modules/dashboard/views/records_page.dart';
import 'package:ehr_user/app/modules/login/controllers/login_controller.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

class DashboardView extends StatelessWidget {
  DashboardView({Key? key}) : super(key: key);

  static const List<Tab> myTabs = <Tab>[
    Tab(text: 'Medications'),
    Tab(text: 'Diseases'),
    Tab(text: 'Records'),
  ];

  final Patient patient = Get.find<LoginController>().patient;

  @override
  Widget build(BuildContext context) {
    final tabChildren = [
      MedicinesPage(
        medicines: patient.medicines,
      ),
      DiseasesPage(
        diseases: patient.medicalDiseases,
      ),
      RecordsPage(
        records: patient.pastHistory,
      ),
    ];
    return DefaultTabController(
      length: myTabs.length,
      child: Scaffold(
          appBar: AppBar(
            title: const Text('Dashboard'),
            backgroundColor: Get.theme.colorScheme.primaryContainer,
            actions: [
              IconButton(
                icon: Icon(Icons.perm_identity_outlined),
                onPressed: () {
                  Get.toNamed('/profile');
                },
              ),
            ],
            bottom: const TabBar(
              tabs: myTabs,
            ),
          ),
          body: TabBarView(
            children: tabChildren,
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () {
              Get.toNamed('/sosqr');
            },
            child: const Icon(Icons.qr_code),
          )),
    );
  }
}
