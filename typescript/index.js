module.exports = {
  extends: ['tslint:all'],
  rules: {
    quotemark: [true, 'single'],
    'member-access': true,
    typedef: [true, 'call-signature', 'arrow-call-signature'],
    'only-arrow-functions': false,
    'no-floating-promises': false,
    'no-unsafe-any': false,
    'no-submodule-imports': false,
    'max-classes-per-file': false,
    'newline-per-chained-call': false,
    'prefer-function-over-method': false,
    'completed-docs': false,
    'no-parameter-properties': false,
    'no-unnecessary-class': false,
    'no-import-side-effect': false,
    'no-implicit-dependencies': false,
    'arrow-parens': false,
  },
};
