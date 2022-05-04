'use strict';

define("dummy/tests/integration/components/tinymce-editor-test", ["@ember/test-helpers", "ember-qunit", "@gavant/ember-tinymce/components/tinymce-editor", "qunit"], function (_testHelpers, _emberQunit, _tinymceEditor, _qunit) {
  "use strict";

  (0, _qunit.module)('Integration | Component | tinymce-editor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('Can render initial text', async function (assert) {
      const done = assert.async();
      const text = '<p>Such wow, Much fun</p>';

      const onInit = (_event, instance) => {
        assert.equal(instance.getContent(), text);
        done();
      };

      this.set('onInit', onInit);
      this.set('text', text);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <TinymceEditor @onInit={{this.onInit}} @value={{this.text}}/>
      */
      {
        "id": "ZFLLH5OG",
        "block": "{\"symbols\":[],\"statements\":[[8,\"tinymce-editor\",[],[[\"@onInit\",\"@value\"],[[32,0,[\"onInit\"]],[32,0,[\"text\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
    });
    (0, _qunit.test)('Can render toolbar and plugins', async function (assert) {
      const plugins = [_tinymceEditor.TinymceEditorPlugins.EMOTICONS];
      this.set('plugins', plugins);
      const toolbar = [_tinymceEditor.TinymceEditorPlugins.EMOTICONS];
      this.set('toolbar', toolbar);
      const done = assert.async();

      const onInit = () => {
        const emoticonsButton = this.element.querySelector('.tox-toolbar__group')?.querySelector('[aria-label=Emoticons]');
        assert.ok(emoticonsButton !== null && emoticonsButton !== undefined);
        done();
      };

      this.set('onInit', onInit);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <TinymceEditor @plugins={{this.plugins}} @toolbar={{this.toolbar}} @onInit={{this.onInit}}/>
      */
      {
        "id": "ktVDVRY1",
        "block": "{\"symbols\":[],\"statements\":[[8,\"tinymce-editor\",[],[[\"@plugins\",\"@toolbar\",\"@onInit\"],[[32,0,[\"plugins\"]],[32,0,[\"toolbar\"]],[32,0,[\"onInit\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
    });
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
