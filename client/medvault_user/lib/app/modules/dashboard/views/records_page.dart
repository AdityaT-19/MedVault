import 'package:ehr_user/app/models/user.dart';
import 'package:flutter/material.dart';

class RecordsPage extends StatelessWidget {
  final List<History> records;
  const RecordsPage({Key? key, required this.records}) : super(key: key);
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: records.length,
      itemBuilder: (context, index) {
        final record = records[index];
        return ListTile(
          title: Text(record.diseaseName),
          subtitle: Text(record.doctorName),
        );
      },
    );
  }
}
