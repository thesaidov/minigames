import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  {
    files: ['**/*.{js,ts,mjs,cjs,mts,cts}'],

    extends: [js.configs.recommended, tseslint.configs.recommended, unicorn.configs['recommended']],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'error',
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);
