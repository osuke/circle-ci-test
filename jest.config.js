module.exports = {
  reporters: ["default", "jest-junit"]
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "src/**/*.{js|vue}"
  ]
};
