module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports'
      },
    ],
  ],
  collectCoverageFrom: [
    "src/**/*.{js|vue}"
  ]
};
