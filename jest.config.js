module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports',
        outputName: 'js-test-results.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' > ',
      },
    ],
  ],
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "src/**/*.{js|vue}"
  ]
};
