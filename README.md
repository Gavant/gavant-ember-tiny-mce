# @gavant/ember-tinymce

Typescript lazy loaded wrapper for the tinymce wysiwyg editor.

## Compatibility

-   Ember.js v3.12 or above
-   Ember CLI v2.13 or above
-   Node.js v10 or above

## Installation

```
ember install @gavant/ember-tinymce
```

## Usage

The tinymce library and its assets are not bundled with the main app/vendor files, and will not be loaded until the component is rendered for the first time.
We accept any args that the tinymce editor does.

```
export default class Application extends Controller {
    plugins: string[] = [TinymceEditorPlugins.EMOTICONS];
    toolbar: string[] = ['emoticons'];
    ...
}

<TinymceEditor @plugins={{this.plugins}} @toolbar={{this.toolbar}} />
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
