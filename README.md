# Little Load Tracker

Simple app for testing the interaction between a web app made with Next.js and a
mobile app made with Flutter.

## Table of contents

- [Getting Started](#getting-started)
  - [General Setup](#general-setup)
  - [Generating the keys](#generating-the-keys)
- [About the project](#about-the-project)

## Getting Started

For start using the project you should have installed the next dependencies in your system

- Docker
- Nodejs
- Flutter SDK

Also we recommend to use `pnpm` instead of `npm`

### General setup

1. After installing the dependencies, clone the repo in your system.

```bash
git clone git@github.com:Caresle/little-load-tracker.git
```

For the next steps please go to the specific sections for each part of the app

### Generating the keys

```bash
# Step 1
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048

# Step 2
openssl rsa -pubout -in private.pem -out public.pem
```

## About the project

A learning project to understand how to interact between a mobile app and a web application.

Some of the reasons that we choose to use `nextjs` and `flutter` for this demo where:

- Most familiarity with it
- Techonologies that we were making some research to start using

