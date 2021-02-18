import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';

import { TinymceEditorPlugins } from '@gavant/ember-tinymce/components/tinymce-editor';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { Editor, EditorEvent, Events } from 'tinymce';

module('Integration | Component | tinymce-editor', function (hooks) {
    setupRenderingTest(hooks);

    test('Can render initial text', async function (assert) {
        const done = assert.async();
        const text = '<p>Such wow, Much fun</p>';
        const onInit = (_event: EditorEvent<Events.EditorEventMap['init']>, instance: Editor) => {
            assert.equal(instance.getContent(), text);
            done();
        };
        this.set('onInit', onInit);
        this.set('text', text);

        await render(hbs`<TinymceEditor @onInit={{this.onInit}} @value={{this.text}}/>`);
    });

    test('Can render toolbar and plugins', async function (assert) {
        const plugins = [TinymceEditorPlugins.EMOTICONS];
        this.set('plugins', plugins);

        const toolbar = [TinymceEditorPlugins.EMOTICONS];
        this.set('toolbar', toolbar);
        const done = assert.async();

        const onInit = () => {
            const emoticonsButton = this.element
                .querySelector('.tox-toolbar__group')
                ?.querySelector('[aria-label=Emoticons]');
            assert.ok(emoticonsButton !== null && emoticonsButton !== undefined);
            done();
        };
        this.set('onInit', onInit);

        await render(hbs`<TinymceEditor @plugins={{this.plugins}} @toolbar={{this.toolbar}} @onInit={{this.onInit}}/>`);
    });
});
