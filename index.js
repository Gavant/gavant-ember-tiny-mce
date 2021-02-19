'use strict';
const Funnel = require('broccoli-funnel');
module.exports = {
    name: '@gavant/ember-tinymce',

    treeForPublic() {
        const tinymceTree = new Funnel('node_modules/tinymce/', {
            include: ['icons/**/*', 'skins/**/*', 'themes/**/*', 'plugins/**/*'],
            destDir: 'assets'
        });
        return tinymceTree;
    },

    options: {
        babel: {
            plugins: [require.resolve('ember-auto-import/babel-plugin')]
        },
        alias: {
            tinymcetypes: 'tinymce.d.ts'
        }
    }
};
