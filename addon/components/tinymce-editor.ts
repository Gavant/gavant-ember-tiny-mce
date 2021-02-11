import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import { TinyMCE } from 'tinymce';

declare global {
    var tinymce: TinyMCE | undefined;
}

interface TinymceEditorArgs {
    selector: string;
}

export default class TinymceEditor extends Component<TinymceEditorArgs> {
    get selector() {
        return this.args.selector ?? `#${this.areaId}`;
    }

    get areaId() {
        return guidFor(this);
    }

    @action
    async initEditor() {
        if (!window.tinymce) {
            await Promise.all([
                import('tinymce').then((module) => module.default),
                import('tinymce/themes/silver').then((module) => module.default),
                import('tinymce/plugins/spellchecker/plugin').then((module) => module.default),
                import('tinymce/icons/default/icons').then((module) => module.default)
            ]);
        }
        tinymce!.init({
            selector: this.selector,
            plugins: 'spellchecker',
            toolbar:
                'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
            content_css: '/vendor.css'
        });
    }
}
