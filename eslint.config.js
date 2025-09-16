import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astroPlugin from 'eslint-plugin-astro'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Apply recommended JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Astro configuration
  ...astroPlugin.configs.recommended,

  // Prettier config to disable conflicting rules
  prettierConfig,

  // Custom rules
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'prefer-const': 'error'
    }
  },

  // Global ignores
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'public/']
  }
]
