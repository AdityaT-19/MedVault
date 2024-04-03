import 'package:ehr_user/app/models/user.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class DiseasesPage extends StatelessWidget {
  final List<Disease> diseases;
  DiseasesPage({
    super.key,
    required this.diseases,
  });
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: diseases.length,
      itemBuilder: (context, index) {
        return Container(
          padding: const EdgeInsets.all(8),
          child: ListTile(
            title: Text(diseases[index].diseaseName),
            subtitle: Text(diseases[index].severity),
            tileColor: Get.theme.colorScheme.tertiaryContainer,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
        );
      },
    );
  }
}
