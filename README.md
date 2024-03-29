# @gavant/ember-tinymce

Typescript lazy loaded wrapper for the tinymce wysiwyg editor.

## Compatibility

-   Ember.js v3.24 or above
-   Ember CLI v3.24 or above
-   Node.js v12 or above

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
    @tracked value = 'Much wow';
    ...
}

<TinymceEditor @plugins={{this.plugins}} @toolbar={{this.toolbar}} @value={{this.value}} @onUpdate={{this.onUpdate}}>
    <:loading>
        Hey, Im shown while tinymce is initializing. This might be helpful when rendering in fastboot
    </:loading>
</TinymceEditor>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
