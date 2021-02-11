import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | tinymce-editor', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{tinymce-editor}}`);

        assert.equal(this.element.textContent?.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#tinymce-editor}}
        template block text
      {{/tinymce-editor}}
    `);

        assert.equal(this.element.textContent?.trim(), 'template block text');
    });
});
