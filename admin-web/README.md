# Admin Web

This section of the project is related with the web admin interface of the application.

It is build using Nextjs, tailwind (shadcn components) and typescript.

## Table of contents

- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Getting Started

For start using this section of the project you should have installed the following in your machine:

- Docker
- Node.JS (We recommend using pnmp as package manager)

1. Copy the `.env.example` file to `.env` and fill in the required environment variables.
2. Start the services in the `docker-compose.yml` file:

   ```bash
   docker-compose up -d
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

## Development

## Deployment

For the deployment of the application we use Docker. Please check this to know more info about this.

## Contributing

See the [CONTRIBUTING.md](../CONTRIBUTING.md) file for more information on how to contribute to this project.
