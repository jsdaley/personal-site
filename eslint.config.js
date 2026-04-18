import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist/', 'coverage/', 'styled-system/'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  {
    files: ['**/*.{ts,tsx}'],
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
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
      'no-undef': 'off',
      'no-octal': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'arrow-parens': 'error',
      'arrow-spacing': 'error',
      'generator-star-spacing': 'error',
      'no-constant-condition': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'off',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
    },
  },
);
