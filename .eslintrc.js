'use strict';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    plugins: ['ember', '@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        // Ember specific rules
        'ember/no-jquery': 'error',
        'ember/no-mixins': 'off',
        'ember/use-ember-data-rfc-395-imports': 'off',
        //@see http://eslint.org/docs/rules/no-var
        'no-var': 'error',
        //@see http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 'error',
        //@see http://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',
        'require-yield': 'off',
        'prefer-rest-params': 'off',

        // typescript
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': 'off'
    },
    globals: {
        tinymce: true
    },
    overrides: [
        // node files
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'index.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'tests/dummy/config/**/*.js'
            ],
            excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            },
            plugins: ['node'],
            rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
                // add your custom rules and overrides for node files here

                // this can be removed once the following is fixed
                // https://github.com/mysticatea/eslint-plugin-node/issues/77
                'node/no-unpublished-require': 'off'
            })
        }
    ]
};
