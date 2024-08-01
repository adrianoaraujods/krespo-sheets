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
    "^@/root/(.*)$": "<rootDir>/$1",
    "^@/tests/(.*)$": "<rootDir>/__tests__/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/utils/"],
  preset: "ts-jest",
  verbose: true,
};

module.exports = createJestConfig(jestConfig);
