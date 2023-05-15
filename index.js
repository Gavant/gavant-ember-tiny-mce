'use strict';
const Funnel = require('broccoli-funnel');
module.exports = {
    name: '@gavant/ember-tinymce',

    treeForPublic() {
        const tinymceTree = new Funnel('node_modules/tinymce/', {
            include: ['icons/**/*', 'skins/**/*', 'themes/**/*', 'plugins/**/*'],
            destDir: this.name
        });
        return tinymceTree;
    },

    options: {
        fingerprint: {
            exclude: [
                '@gavant/ember-tinymce/icons/',
                '@gavant/ember-tinymce/plugins/',
                '@gavant/ember-tinymce/skins/',
                '@gavant/ember-tinymce/themes/mobile/',
                '@gavant/ember-tinymce/themes/silver/'
            ]
        },
        babel: {
            plugins: [require.resolve('ember-auto-import/babel-plugin')]
        },
        alias: {
            tinymcetypes: 'tinymce.d.ts'
        }
    }
};
