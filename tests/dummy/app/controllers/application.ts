import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { TinymceEditorPlugins } from '@gavant/ember-tinymce/components/tinymce-editor';

export default class Application extends Controller {
    plugins: string[] = [TinymceEditorPlugins.EMOTICONS];
    toolbar: string[] = ['mybutton', 'emoticons'];

    @tracked
    value = '<p>Such wow</p>';

    @action
    onSetup(editor: Editor): void {
        var toggleState = false;

        /* example, adding a toolbar menu button */
        editor.ui.registry.addMenuButton('mybutton', {
            text: 'My button',
            fetch: function (callback) {
                var items = [
                    {
                        type: 'menuitem',
                        text: 'Menu item 1',
                        onAction: function () {
                            editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
                        }
                    },
                    {
                        type: 'nestedmenuitem',
                        text: 'Menu item 2',
                        icon: 'user',
                        getSubmenuItems: function () {
                            return [
                                {
                                    type: 'menuitem',
                                    text: 'Sub menu item 1',
                                    icon: 'unlock',
                                    onAction: function () {
                                        editor.insertContent('&nbsp;<em>You clicked Sub menu item 1!</em>');
                                    }
                                },
                                {
                                    type: 'menuitem',
                                    text: 'Sub menu item 2',
                                    icon: 'lock',
                                    onAction: function () {
                                        editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>');
                                    }
                                }
                            ];
                        }
                    },
                    {
                        type: 'togglemenuitem',
                        text: 'Toggle menu item',
                        onAction: function () {
                            toggleState = !toggleState;
                            editor.insertContent(
                                '&nbsp;<em>You toggled a menuitem ' + (toggleState ? 'on' : 'off') + '</em>'
                            );
                        },
                        onSetup: function (api) {
                            api.setActive(toggleState);
                            return function () {};
                        }
                    }
                ];
                callback(items);
            }
        });
    }
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
