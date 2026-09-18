import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from 'eslint-config-prettier/flat';
import pluginOxlint from 'eslint-plugin-oxlint';
import pluginVue from 'eslint-plugin-vue';
import { globalIgnores } from 'eslint/config';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    name: 'app/import-restrictions',
    rules: {
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['../../*', '../..'],
              message: 'Do not import more than one parent level (../). Use the @/ alias instead.',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'app/vue-component-structure',
    rules: {
      'vue/block-order': [
        'warn',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          globals: ['RouterView', 'RouterLink'],
        },
      ],
    },
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
);
