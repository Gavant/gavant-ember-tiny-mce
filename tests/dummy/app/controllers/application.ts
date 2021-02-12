import Controller from '@ember/controller';
import { action } from '@ember/object';

import { TinymceEditorPlugins } from '@gavant/ember-tinymce/components/tinymce-editor';

export default class Application extends Controller {
    plugins: string[] = [TinymceEditorPlugins.EMOTICONS];
    toolbar: string[] = ['emoticons'];

    @action
    onRender() {
        console.log('rendered');
    }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
    interface Registry {
        application: Application;
    }
}
