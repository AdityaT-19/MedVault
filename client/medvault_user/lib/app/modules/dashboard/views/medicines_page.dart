import 'package:ehr_user/app/models/user.dart';
import 'package:flutter/material.dart';

class MedicinesPage extends StatelessWidget {
  final List<Medicine> medicines;
  const MedicinesPage({Key? key, required this.medicines}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: medicines.length,
      itemBuilder: (context, index) {
        final medicine = medicines[index];
        return ListTile(
          title: Text(medicine.name),
          subtitle: Text(medicine.dosage),
        );
      },
    );
  }
}
