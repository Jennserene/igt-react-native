# Expo Template

This repository serves as a starting point for creating Expo projects with TypeScript, linting, testing, and Expo router already set up.

## Getting Started

To get started with this template, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install` or `yarn install`.
3. Start the Expo development server by running `expo start`.
4. Open the Expo app on your mobile device and scan the QR code displayed in the terminal or in the Expo DevTools.
5. Start building your app by editing the files in the `src` directory.

## Features

- TypeScript: This template is configured to use TypeScript for type checking and improved developer experience.
- Linting: ESLint is set up with a basic configuration to enforce code quality and consistency.
- Testing: Jest is configured for unit testing your code. You can add your tests in the `__tests__` directory.
- Precommit Hook: This template includes a precommit hook that runs linting and testing before committing and pushing your code, respectively.
- Expo Router: This template includes the Expo router for easy navigation between screens in your app.

## Folder Structure

The folder structure of this template is as follows:

- root: Project configuration
- ./tests: Contains all tests
- ./src: Contains the entirety of the app
  - api: Contains API-related files
  - app: Contains the main application files
  - assets: Contains static assets such as images and fonts
  - components: Contains reusable UI components
  - hooks: Contains custom React hooks
  - types: Contains TypeScript type definitions
  - utils: Contains utility functions and helper files

