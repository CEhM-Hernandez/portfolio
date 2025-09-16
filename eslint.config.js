import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astroPlugin from 'eslint-plugin-astro'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Apply recommended JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Specific TypeScript configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off'
    }
  },

  // Astro configuration
  ...astroPlugin.configs.recommended,

  // Prettier config to disable conflicting rules
  prettierConfig,

  // Custom rules for all files
  {
    rules: {
      'no-console': 'off',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error'
    }
  },

  // Global ignores
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'public/']
  }
]
