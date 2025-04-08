import 'package:flutter/material.dart';
import 'package:mobile_app/config/theme/theme.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                decoration: BoxDecoration(
                    color: Colors.blue.shade800, shape: BoxShape.circle),
                width: 128,
                height: 128,
                child: Center(
                    child: Text(
                  'L',
                  style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                      fontSize: 64),
                )),
              ),
              const SizedBox(height: 32),
              TextFormField(
                decoration: InputDecoration(
                    prefixIcon: Icon(Icons.account_circle_rounded),
                    border: OutlineInputBorder(),
                    hintText: 'Username'),
              ),
              const SizedBox(height: 8),
              TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                  prefixIcon: Icon(Icons.key_rounded),
                  border: OutlineInputBorder(),
                  hintText: 'Password',
                ),
              ),
              const SizedBox(height: 8),
              SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                      style: buttonPrimary,
                      onPressed: () {},
                      child: Text('Login')))
            ],
          ),
        ),
      ),
    );
  }
}
