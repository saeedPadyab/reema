module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "@Components/(.*)": "<rootDir>/src/components/$1",
    "@Hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@Utils/(.*)": "<rootDir>/src/utils/$1",
    "@Interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "@Core/(.*)": "<rootDir>/src/core/$1",
    "@Shared/(.*)": "<rootDir>/src/shared/$1",
  },
};
