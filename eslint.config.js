import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import globals from 'globals';

export default [
  {
    ignores: ['dist/', 'coverage/', 'styled-system/'],
  },
  js.configs.recommended,
  eslintReact.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'react-x': {
        version: '19',
      },
    },
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'linebreak-style': ['error', 'unix'],
      'semi': ['error', 'always'],
      'no-extra-semi': 'error',
      'keyword-spacing': 'error',
      'space-before-blocks': 'error',
      'space-infix-ops': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-console': 'error',
      'no-unused-vars': ['error', { 'args': 'none' }],
      'no-undef': 'error',
      'no-octal': 'error',
      'no-redeclare': 'error',
      'arrow-parens': 'error',
      'arrow-spacing': 'error',
      'generator-star-spacing': 'error',
      'no-constant-condition': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
    },
  },
];
