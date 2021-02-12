import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';

import { TinymceEditorPlugins } from '@gavant/ember-tinymce/components/tinymce-editor';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | tinymce-editor', function (hooks) {
    setupRenderingTest(hooks);

    test('Can render toolbar and plugins', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });
        const plugins = [TinymceEditorPlugins.EMOTICONS];
        this.set('plugins', plugins);

        const toolbar = [TinymceEditorPlugins.EMOTICONS];
        this.set('toolbar', toolbar);
        const done = assert.async();

        const onRender = () => {
            const emoticonsButton = this.element
                .querySelector('.tox-toolbar__group')
                ?.querySelector('[aria-label=Emoticons]');
            assert.ok(emoticonsButton !== null && emoticonsButton !== undefined);
            done();
        };
        this.set('onRender', onRender);

        await render(
            hbs`<TinymceEditor @plugins={{this.plugins}} @toolbar={{this.toolbar}} @onRender={{this.onRender}}/>`
        );
    });
});
