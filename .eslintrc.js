module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': false,
      'variables': false,
    }],
    'global-require': 0,
    'react/jsx-filename-extension': [0, { 'extensions': ['.ts', '.tsx'] }],
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': [
      2, {
        'ignore': ['\.ts', '\.tsx'],
      }
    ]
  },
};
