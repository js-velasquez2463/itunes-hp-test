
# iTunes Albums Search Frontend

## Description

This frontend application allows users to search for albums on iTunes. It is connected to a backend deployed with Node.js, which retrieves album data and sends it to the frontend. Users can search for albums by artist name and view the results in a simple and fast interface.

## Technologies Used

- **Vite**: A modern build tool for fast development and building applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vitest**: A testing framework used for unit and integration tests in the frontend.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.

## Requirements

To run this project locally, you’ll need to have the following Node.js version installed:

- **Node.js v20**: This project is configured to work with Node.js version 20.

Additionally, you’ll need to install the project dependencies using `npm`.

## Installation and Running the Application

Follow these steps to get the project up and running:

1. **Clone the repository:**

   ```bash
   git clone <REPOSITORY_URL>
   cd <project_name>
   ```

2. **Install dependencies:**

   Make sure you have Node.js v20 installed, then run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Start the development server:**

   To start the Vite development server, run the following command:

   ```bash
   npm run dev
   ```

   This will start the application at `http://localhost:5173` (or the configured port).

4. **Build the application for production:**

   To build the project for production, run the following command:

   ```bash
   npm run build
   ```

   This command compiles the project using TypeScript (`tsc -b`) and builds optimized production files using Vite.

5. **Preview the built application:**

   To preview the optimized production build, use:

   ```bash
   npm run preview
   ```

   This command will serve the production build, allowing you to check the final output of the application.

## Running Tests

This project uses **Vitest** for running tests. To execute the tests, use the following command:

```bash
npm run test
```

Vitest will run the tests defined in the project and show the results in the terminal.

### Command Overview

- **`dev`**: Starts the Vite development server. This is used for local development. You can run the application on your machine while you're working on it. After running this command, visit `http://localhost:3000` (or the configured port) to access the app.
- **`build`**: Compiles the project using TypeScript (`tsc -b`) and builds the production files using Vite. This command prepares the app for deployment, creating optimized and minified code.
- **`lint`**: Runs ESLint on the project files to check for any code style issues or errors. It's a good practice to run this to ensure the code follows consistent standards and avoids potential issues.
- **`preview`**: Serves the production build so you can preview the app as it would appear in production. It helps you test the final build of your app before deployment.
- **`test`**: Runs the tests with **Vitest**. It will run the unit and integration tests defined for the application. Use this command to ensure your code is working as expected before making any changes to production.

## Contribution

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make the necessary changes and commit with a clear description.
4. Open a pull request explaining your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using the iTunes Albums Search application!
