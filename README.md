# Little Load Tracker

Simple app for testing the interaction between a web app made with Next.js and a
mobile app made with Flutter.

## Table of contents

- [Getting Started](#getting-started)
  - [Generating the keys](#generating-the-keys)
- [About the project](#about-the-project)

## Getting Started

### Generating the keys

```bash
# Step 1
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048

# Step 2
openssl rsa -pubout -in private.pem -out public.pem
```

## About the project
