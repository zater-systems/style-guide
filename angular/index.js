module.exports = {
  rulesDirectory: ['codelyzer'],
  extends: ['../typescript/index.js', 'tslint-angular'],
  rules: {
    'max-classes-per-file': false,
  },
};
