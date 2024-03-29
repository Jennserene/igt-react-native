module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/react-native',
    '<rootDir>/__tests__/jest.setup.ts',
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@123ishatest/igt-library|lodash-es)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/__tests__/**/*.test.{ts,tsx,js,jsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // Paths defined in tsconfig.json:
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@app': '<rootDir>/src/app.tsx',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@game/(.*)': '<rootDir>/src/game/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@typeDefs/(.*)': '<rootDir>/src/typeDefs/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    // Don't forget to add the path to the tsconfig.json above this.
    // Mocks:
    '@mocks/(.*)': '<rootDir>/__tests__/__mocks__/$1',
    '^expo-font$': '<rootDir>/__tests__/__mocks__/expo-font.js',
  },
}
