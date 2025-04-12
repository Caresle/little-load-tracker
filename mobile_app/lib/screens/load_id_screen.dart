import 'package:flutter/material.dart';
import 'package:mobile_app/config/theme/button.dart';

class LoadIdScreen extends StatelessWidget {
  const LoadIdScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Load ID'),
        actions: [
          IconButton(
            style: IconButton.styleFrom(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.all(
                  Radius.circular(8),
                ),
              ),
            ),
            onPressed: () {},
            icon: Icon(Icons.more_vert_rounded),
          ),
        ],
      ),
      body: SafeArea(
          child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Item List',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 4),
              _ItemList(),
              const SizedBox(height: 4),
              _ItemList(),
              const SizedBox(height: 4),
              _ItemList(),
            ],
          ),
        ),
      )),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blue.shade800,
        foregroundColor: Colors.white,
        onPressed: () {},
        shape: CircleBorder(),
        tooltip: 'Actions',
        child: Icon(Icons.menu_rounded),
      ),
    );
  }
}

class _ItemList extends StatelessWidget {
  const _ItemList();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.grey.shade400),
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    IconButton.outlined(
                      style: IconButton.styleFrom(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(
                            Radius.circular(8),
                          ),
                        ),
                      ),
                      onPressed: () {},
                      icon: Icon(Icons.fire_truck_rounded),
                    ),
                    const SizedBox(width: 4),
                    Text('Item name'),
                  ],
                ),
                Row(
                  children: [
                    IconButton(
                      style: buttonConfirmTonalIcon,
                      onPressed: () {},
                      icon: Icon(Icons.check_circle_outline_rounded),
                    ),
                    IconButton(
                      style: buttonDangerTonalIcon,
                      onPressed: () {},
                      icon: Icon(Icons.remove_circle_outline_rounded),
                    ),
                  ],
                ),
              ],
            ),
            Row(
              children: [
                Text(
                  'Quantity:',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text('10'),
              ],
            ),
            Row(
              children: [
                Text('1234'),
              ],
            )
          ],
        ),
      ),
    );
  }
}
