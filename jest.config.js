const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@features/(.*)": "<rootDir>/src/modules/features/$1",
    "^@core/(.*)": "<rootDir>/src/modules/core/$1",
    "^@testing/(.*)": "<rootDir>/src/modules/testing/$1",
    "^@ui/(.*)": "<rootDir>/src/modules/core/ui/$1",
    "^@ui": "<rootDir>/src/modules/core/ui/index",
  },
};

module.exports = createJestConfig(customJestConfig);
