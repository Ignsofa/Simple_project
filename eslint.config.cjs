const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
  // Ігнорування CJS конфігураційних файлів і dist
  { ignores: ['**/*.cjs', '**/dist/**'] },

  // Базові правила JS
  js.configs.recommended,

  // Базові правила TS
  ...tseslint.configs.recommended,

  // Відключення конфліктів з Prettier
  prettier,

  // Правила для TS-файлів у проекті
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Визначаємо глобальні змінні Node.js
        console: 'readonly',
        process: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // заборона any
      'no-unused-vars': 'warn', // попередження про неиспользуемі змінні
    },
  },
];
