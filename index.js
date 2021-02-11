'use strict';
const Funnel = require('broccoli-funnel');
module.exports = {
    name: '@gavant/ember-tiny-mce',

    treeForPublic() {
        return new Funnel('node_modules/tinymce/', {
            include: ['icons/**/*', 'skins/**/*', 'themes/**/*'],
            destDir: 'assets'
        });
    },

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
