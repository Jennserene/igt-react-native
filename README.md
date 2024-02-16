# IGT React Native Template

A template React Native project to quickly create incremental games with the igt-library, with TypeScript, ESLint, Jest, and GitHub Actions pre-configured.

[Please visit the actual Docs here](https://123ishatest.github.io/igt-docs)

## Getting Started
This readme assumes you are using npm, but you can use yarn if you prefer.

To get started with this template, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install` or `yarn install`.
3. Start the Expo development server by running `npm run start`.
4. Open the Expo app on your mobile device and scan the QR code displayed in the terminal or in the Expo DevTools.
5. Start building your app by editing the files in the `src` directory.

### Available Scripts

- `npm run prepare`: Installs Husky, a Git hook manager, to enable precommit hooks.
- `npm run start`: Starts the Expo development server.
- `npm run start:clear`: Starts the Expo development server and clears the cache.
- `npm run start:android`: Starts the Expo development server and opens the app on an Android emulator or device.
- `npm run start:ios`: Starts the Expo development server and opens the app on an iOS simulator or device.
- `npm run start:web`: Starts the Expo development server and opens the app in a web browser.
- `npm run ts:check`: Runs the TypeScript compiler to check for type errors.
- `npm run lint`: Runs ESLint to check for code quality and consistency issues.
- `npm run lint:fix`: Runs ESLint and automatically fixes code quality and consistency issues.
- `npm run test`: Runs Jest to execute unit tests.
- `npm run test:coverage`: Runs Jest to execute unit tests and generate a coverage report.
- `npm run test:watch`: Runs Jest in watch mode, allowing you to re-run tests automatically when files change.

## Features

- IGT Library: This template uses the IGT library to create incremental games.
- TypeScript: This template is configured to use TypeScript for type checking and improved developer experience.
- Linting: ESLint is set up with a basic configuration to enforce code quality and consistency.
- Testing: Jest is configured for unit testing your code. You can add your tests in the `__tests__` directory.
- Pre-commit Hook: This template includes a precommit hook that runs linting and testing before committing and pushing your code, respectively.
- Pre-push Hook: This template includes a prepush hook that runs tests before pushing your code.
- CI: This template includes a GitHub Actions workflow that runs linting and tests on every pull request.
- Commonly Used Dependencies: This template includes some commonly used dependencies such as Expo Router.
  - [Expo Router](https://docs.expo.dev/router/introduction/): This template includes the Expo router for easy navigation between screens.

## Folder Structure

The folder structure of this template is as follows:

- root: Project configuration
- ./\_\_tests\_\_/: Contains all tests
  - /\_\_mocks\_\_/: Contains mock files for testing. Imported with `@mocks`
- ./src/: Contains the entirety of the app
  - /api/: Contains API-related files. Imported with `@api`
  - /app/: Contains the main application files. Imported with `@app`
  - /assets/: Contains static assets such as images and fonts. Imported with `@assets`
  - /components/: Contains reusable UI components. Imported with `@components`
  - /hooks/: Contains custom React hooks. Imported with `@hooks`
  - /typeDefs/: Contains TypeScript type definitions. Imported with `@typeDefs`
  - /utils/: Contains utility functions and helper files. Imported with `@utils`

## Customization

Adding additional dependencies should be done using `expo`. For example, to add `expo-battery`, you can run:

`npx expo install expo-battery`

If you need to add a development dependency, you can add the `-- --save-dev` flag:

`npx expo install axios-mock-adapter -- --save-dev`

## Linting
This template is configured to enforce linting rules using a pre-commit hook. This will try to fix any linting issues before you commit your code. If there are any issues that cannot be fixed automatically, the commit will be aborted.

You can also run the linter manually by running `npm run lint` or `npm run lint:fix` to automatically fix any issues that can be fixed.

To modify the linter, you can edit the `.eslintrc.js` and `.prettierrc.js` files in the root of the project.

### console.log & console.trace
By default the linter does not allow console.logs or console.trace in the code to be committed. If you want to allow a specific console.log in your code, you can add `// eslint-disable-next-line no-console` to the line before the console.log.

This rule is set in the `.eslintrc.js` file if you want to modify it.

### import order
The linter enforces a specific order for imports, in the hope that it will help prevent import conflicts and to ensure that the code is easier to read.

The order is set in the `.pretterrc.js` file, and can be modified to suit your needs.

## Testing

This template is configured to use Jest for unit testing. You can add your tests in the `__tests__` directory.

You can run the tests by running `npm run test`. You can also run the tests in watch mode by running `npm run test:watch` or generate a coverage report by running `npm run test:coverage`.

### Console.log
This template is configured to mock out console.log in tests.

You can spy on console.log by accessing `global.log` in your tests, for example:

```ts
const ComponentWithAConsoleLog = (msg: string) => {
  ...
  console.log(msg)
  ...
}

const logMessage = "This does not show in the test results"

it('should log a message', () => {
  render(<ComponentWithAConsoleLog msg={logMessage}>)

  expect(global.log).toHaveBeenCalledWith(logMessage) // This will pass
})
```

If you want to enable console.log in an individual test you can add this line: `global.log.mockRestore()`

Spies are put back on the console.log and console.trace methods after each test, so calling `mockRestore()` will only affect the current test.

Just remember that by restoring the mock, you will lose the ability to spy on console.log.

For example:
  
```ts
it('should log a message', () => {
  global.log.mockRestore()
  render(<ComponentWithAConsoleLog msg="You can see me!">)
  expect(global.log).toHaveBeenCalledWith('You can see me!') // This will fail
})

it('should log a message again', () => {
  render(<ComponentWithAConsoleLog msg="I'm hidden!">)
  expect(global.log).toHaveBeenCalledWith("I'm hidden!") // This will pass
})
```
Your test results will include:
```sh
console.log
  You can see me!
```