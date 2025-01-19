
# Backend - iTunes Albums Search API

This backend application is a Node.js-based server designed to work with a frontend application that allows users to search for albums from iTunes. The backend is built with Node.js version 20 and serves as an API that interacts with the iTunes API to fetch album data.

## Requirements

- Node.js version 20
- npm (Node Package Manager)

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd <backend-directory>
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the backend directory, you'll find the following commands in the `package.json` file:

### `npm start`

This command will start the backend server. It uses the `node` command to run `src/server.js`.

```bash
npm start
```

The backend API will be available on your configured port (default port is 3000).

### `npm run dev`

This command will start the backend server in development mode using `nodemon`, which will automatically restart the server when changes are made to the source files.

```bash
npm run dev
```

This is useful when actively developing and testing the backend code.

### `npm run test`

This command will run the tests using **Jest**, a testing framework for JavaScript. It will execute all the unit tests defined in your project.

```bash
npm run test
```

Make sure your tests are located in the appropriate test folder or file structure.

## Running Tests

To run tests, simply execute:

```bash
npm run test
```

It will run all the tests using Jest and display the results in the terminal.

## Folder Structure

- **src/**: Contains the server and API logic.
- **test/**: Contains test files for backend functionalities.

## Additional Notes

- Ensure that **Node.js version 20** is installed. You can check your current version by running:
  ```bash
  node -v
  ```

- If you're using **npm**, make sure to install dependencies by running:
  ```bash
  npm install
  ```

