import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/config/dio.dart';
import 'package:mobile_app/config/theme/theme.dart';
import 'package:mobile_app/constants/token.dart';
import 'package:mobile_app/helpers/shared_config.dart';
import 'package:mobile_app/services/login_service.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  void onSubmit(BuildContext context) async {
    final res = await LoginService.login(
        _usernameController.text, _passwordController.text);
    if (res == null) {
      return;
    }
    await SharedConfig.save(TokenConstants.key, res);

    dioInstance.interceptors.add(TokenInterceptor());
    if (context.mounted) context.go('/');
  }

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
                controller: _usernameController,
                decoration: inputDecoration.copyWith(
                    hintText: 'Username',
                    prefixIcon: Icon(
                      Icons.account_circle_rounded,
                    )),
              ),
              const SizedBox(height: 8),
              TextFormField(
                controller: _passwordController,
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
                  onPressed: () => onSubmit(context),
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
