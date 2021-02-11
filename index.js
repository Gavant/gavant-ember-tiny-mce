'use strict';

module.exports = {
    name: '@gavant/ember-tiny-mce',
    options: {
        babel: {
            plugins: [require.resolve('ember-auto-import/babel-plugin')]
        },
        autoImport: {
            publicAssetURL: '/assets',
            alias: {
                tinymce: 'tinymce'
            },
            skipBabel: [
                {
                    package: 'tinymce',
                    semVer: '*'
                }
            ]
        }
    }
};
