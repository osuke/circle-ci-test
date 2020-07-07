module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: [
    "tests/unit/**/*.spec.js",
  ],
  collectCoverageFrom: [
    "src/**/*.{js|vue}"
  ]
};
