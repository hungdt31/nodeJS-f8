import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      js,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-undef': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': 'off',
      'max-len': [
        'error',
        {
          code: 500,
        },
      ],
    },
  },
]);
