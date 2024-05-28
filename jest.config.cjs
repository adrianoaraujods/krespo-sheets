const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const jestConfig = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/tests/(.*)$": "<rootDir>/tests/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/utils/"],
  preset: "ts-jest",
};

module.exports = createJestConfig(jestConfig);
