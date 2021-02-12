import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { TinymceEditorPlugins } from '@gavant/ember-tinymce/components/tinymce-editor';

export default class Application extends Controller {
    plugins: string[] = [TinymceEditorPlugins.EMOTICONS];
    toolbar: string[] = ['emoticons'];

    @tracked
    value = '<p>Such wow</p>';

    @action
    onInit() {
        this.value = '<p>Much fun</p>';
        console.log('rendered');
    }

    @action
    onUpdate(value: string) {
        this.value = value;
        console.log(value);
    }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
    interface Registry {
        application: Application;
    }
}
