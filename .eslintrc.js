module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
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
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': false,
      'variables': false,
    }],
    '@typescript-eslint/no-use-before-define': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
