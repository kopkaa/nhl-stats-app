module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      esversion: 9,
      destructuring: true,
      generators: true,
      superInFunctions: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-unused-vars': 'error',
    'no-var': 'error',
    semi: 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
  },
};
