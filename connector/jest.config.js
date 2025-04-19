/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+.(ts|tsx)?$": [
      "ts-jest",
      {
        /* ts-jest config options */
      },
    ],
  },
  // Optional: Add a setup file if needed for global setup/teardown
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // Increase timeout if Solr operations take longer
  testTimeout: 30000, // 30 seconds
};
