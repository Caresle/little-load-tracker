import 'package:flutter/material.dart';
import 'package:mobile_app/providers/load_id_provider.dart';
import 'package:provider/provider.dart';

class LoadIdScreen extends StatefulWidget {
  final int id;
  const LoadIdScreen({super.key, required this.id});

  @override
  State<LoadIdScreen> createState() => _LoadIdScreenState();
}

class _LoadIdScreenState extends State<LoadIdScreen> {
  @override
  void initState() {
    super.initState();

    Future.microtask(() {
      if (!mounted) return;
      context.read<LoadIdProvider>().getLoad(widget.id);
    });
  }

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
          child: Consumer<LoadIdProvider>(builder: (context, provider, _) {
        if (provider.isLoading) {
          return Center(
              child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CircularProgressIndicator(),
              const SizedBox(height: 16),
              Text('Loading Load details'),
            ],
          ));
        }

        return _LoadContent();
      })),
      // floatingActionButton: FloatingActionButton(
      //   backgroundColor: Colors.blue.shade800,
      //   foregroundColor: Colors.white,
      //   onPressed: () {},
      //   shape: CircleBorder(),
      //   tooltip: 'Actions',
      //   child: Icon(Icons.menu_rounded),
      // ),
    );
  }
}

class _LoadContent extends StatelessWidget {
  const _LoadContent({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Item List',
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          // const SizedBox(height: 4),
          // _ItemList(),
          // const SizedBox(height: 4),
          // _ItemList(),
          // const SizedBox(height: 4),
          // _ItemList(),
        ],
      ),
    );
  }
}
