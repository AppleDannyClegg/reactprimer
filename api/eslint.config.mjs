/* eslint-disable @cspell/spellchecker */
// Purpose: ESLint configuration for TypeScript projects.

import cspellConfigs from '@cspell/eslint-plugin/configs';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  cspellConfigs.recommended,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error'
    },
    ignores: ['node_modules', 'dist', 'build', 'coverage', 'out', 'temp', 'tmp'],
  },
  
);
