import 'package:flutter/material.dart';
import 'package:mobile_app/providers/loads_provider.dart';
import 'package:mobile_app/services/loads_service.dart';
import 'package:provider/provider.dart';

class GeneralFloatingButton extends StatelessWidget {
  const GeneralFloatingButton({super.key});

  @override
  Widget build(BuildContext context) {
    final loadsProvider = context.read<LoadsProvider>();
    return FloatingActionButton(
      backgroundColor: Colors.blue.shade800,
      foregroundColor: Colors.white,
      onPressed: () async {
        final loads = await LoadsService.getLoads();
        loadsProvider.setLoads(loads);
        // socket.connect();
        // socket.emit("ping", "TEST");
        // socket.emit("CREATE_LOAD", {
        //   "id": 1,
        //   "name": "Load Test",
        //   "description": "This is a test load",
        // });
      },
      shape: CircleBorder(),
      tooltip: 'Scan QR LOAD',
      child: Icon(Icons.qr_code_2_rounded),
    );
  }
}
