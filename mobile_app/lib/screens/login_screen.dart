import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
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
              Text(
                "Little Load Tracker",
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.w600,
                ),
              ),
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
                decoration: inputDecoration.copyWith(
                    hintText: 'Username',
                    prefixIcon: Icon(
                      Icons.account_circle_rounded,
                    )),
              ),
              const SizedBox(height: 8),
              TextFormField(
                obscureText: true,
                decoration: inputDecoration.copyWith(
                  hintText: 'Password',
                  prefixIcon: Icon(Icons.key_rounded),
                ),
              ),
              const SizedBox(height: 8),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton.icon(
                  style: buttonPrimary,
                  onPressed: () {
                    context.go('/');
                  },
                  icon: Icon(
                    Icons.login_rounded,
                    color: Colors.white,
                  ),
                  label: Text('Login'),
                ),
              ),
              const SizedBox(height: 8),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  style: buttonOutlined,
                  onPressed: () {},
                  child: Text('Create Account'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
