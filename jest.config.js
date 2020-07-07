module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: [
    "<rootDir>/tests/unit/**/*.spec.js",
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,vue}"
  ]
};
