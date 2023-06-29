# NestJS E-Commerce API - README

Welcome to the NestJS E-Commerce API! This API is built using NestJS, a progressive Node.js framework. It provides an e-commerce backend solution with PostgreSQL as the database.

## Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- Node.js (version 14 or higher)
- PostgreSQL (version 9.6 or higher)

## Installation

To install and set up the API, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone <repository_url>
   ```

2. Change into the project directory:

   ```bash
   cd ecoms
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and provide the necessary environment variables. You can refer to the `.env.example` file for the required variables.

5. Run the database migrations to set up the necessary data structure:

   ```bash
   npm run migration:run
   ```

## Running the API

To start the API server, use the following command:

```bash
npm run start:dev
```

This command will start the server in development mode and automatically restart it whenever code changes are detected.

## API Endpoints

The API provides various endpoints for managing the e-commerce functionality. Here are some of the important endpoints:

- `/users`: User-related operations (e.g., registration, login, profile management)
- `/products`: Product-related operations (e.g., fetching products, adding to cart)
- `/orders`: Order-related operations (e.g., placing orders, viewing order history)

Please refer to the API documentation or the source code for a complete list of available endpoints and their usage.

## Database Management

Whenever there are changes to the data structure (e.g., adding new tables, modifying existing tables), you need to run the database migrations to keep the database schema up to date.

To generate a new migration file based on the changes in the entities:

```bash
npm run migration:generate -- -n <migration_name>
```

To apply the pending migrations and update the database schema:

```bash
npm run migration:run
```

To revert the last applied migration:

```bash
npm run migration-revert
```

To drop the entire database (caution: this deletes all data):

```bash
npm run db:drop
```

## Testing

The API includes a suite of tests to ensure its functionality. To run the tests, use the following command:

```bash
npm test
```

You can also use the `test:watch` command to run the tests in watch mode, which re-runs the tests whenever code changes are detected:

```bash
npm run test:watch
```

## Contributing

If you'd like to contribute to the project, please follow the guidelines outlined in the CONTRIBUTING.md file. We appreciate your contributions!

## License

This project is licensed under the UNLICENSED license. You are free to use, modify, and distribute the code, but no formal license agreement is provided.

## Support

If you encounter any issues or have any questions, please open an issue on the GitHub repository. We'll be happy to assist you!

---

Thank you for using the NestJS E-Commerce API. Happy coding!
## ecom-nest-api
