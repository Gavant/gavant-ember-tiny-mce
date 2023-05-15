import Component from '@glimmer/component';
declare type RawEditorSettings = import('tinymce').RawEditorSettings;
declare type Editor = import('tinymce').Editor;
declare type Init = import('tinymce').Events.EditorEventMap['init'];
declare type InitEvent = import('tinymce').EditorEvent<Init>;
export declare enum TinymceEditorPlugins {
    /**
     * The advlist plugin extends the core bullist and numlist toolbar controls by adding CSS list-style-type styled number formats and bullet types to the controls.
     * @memberof TinymceEditorPlugins
     * @link www.tiny.cloud/docs/plugins/opensource/advlist
     */
    ADV_LIST = "advlist",
    /**
     * This plugin adds an anchor/bookmark button to the toolbar that inserts an anchor at the editor’s cursor insertion point. It also adds the menu item anchor under the Insert menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/anchor/
     */
    ANCHOR = "anchor",
    /**
     * The Autolink plugin automatically creates hyperlinks when a user types a valid, complete URL. For example www.example.com is converted to http://www.example.com.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/autolink/
     */
    AUTO_LINK = "autolink",
    /**
     * This plugin automatically resizes the editor to the content inside it. It is typically used to prevent the editor from expanding infinitely as a user types into the editable area. For example, by giving the max_height option a value the editor will stop resizing when the set value is reached.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/autoresize/
     */
    AUTO_RESIZE = "autoresize",
    /**
     * The autosave plugin gives the user a warning if they have unsaved changes in the editor and either:
     *
     *  Try to close the browser window or tab, or
     *  Try to navigate away from the current page.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/autosave/
     */
    AUTO_SAVE = "autosave",
    /**
     * This plugin makes it possible to edit BBCode in a WYSIWYG style by converting tags like [b] into <strong> and then back, when user submits the content.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/bbcode/
     */
    BBCODE = "bbcode",
    /**
     * This plugin adds a dialog to the editor with a map of special unicode characters, which cannot be added directly from the keyboard. The dialog can be invoked via a toolbar button - charmap - or a dedicated menu item added as Insert > Special character.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/charmap/
     */
    CHARMAP = "charmap",
    /**
     * This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item Source code under the Tools menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/code/
     */
    CODE = "code",
    /**
     * The Code Sample plugin (codesample) lets a user insert and embed syntax color highlighted code snippets into the editable area. It also adds a button to the toolbar which on click will open a dialog box to accept raw code input.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/codesample/
     */
    CODE_SAMPLE = "codesample",
    /**
     * This plugin adds directionality controls to the toolbar, enabling TinyMCE to better handle languages written from right to left. It also adds a toolbar button for each of its values, ltr for left-to-right text and rtl for right-to-left text.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/directionality/
     */
    DIRECTIONALITY = "directionality",
    /**
     * This plugin adds a dialog to the editor lets users insert emoji into TinyMCE’s editable area. The dialog can be invoked via a toolbar button - emoticons - or a dedicated menu item added as Insert > Emoticons.
     * The emoticons plugin provides an autocompleter for adding emoji without using the toolbar button or menu item. Adding a colon :, followed by at least two characters will open the emoticon picker showing matching emoji.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/emoticons/
     */
    EMOTICONS = "emoticons",
    /**
     * This plugin allows user to edit certain metadata and document properties such as title, keywords, and description. This is done via a dialog box which appears after pressing a control added to the toolbar. If the code plugin is enabled fullpage exposes <head>, <body> and various meta tags in source code view.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/fullpage/
     */
    FULL_PAGE = "fullpage",
    /**
     * This plugin adds full screen editing capabilities to TinyMCE. When the toolbar button is pressed the editable area will fill the browser’s viewport. The plugin adds a toolbar button and a menu item Fullscreen under the View menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/fullscreen/
     */
    FULL_SCREEN = "fullscreen",
    /**
     * The help plugin adds a button and/or menu item that opens a dialog showing two tabs:
     * Handy shortcuts that explains some nice-to-know keyboard shortcuts
     * Plugin list that shows which plugins that have been installed, with links to the relevant documentation pages if available, and a list of available premium plugins.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/help/
     */
    HELP = "help",
    /**
     * The Horizontal Rule (hr) plugin allows a user to insert a horizontal rule on the page at the cursor insertion point. It also adds a toolbar button and a menu item Horizontal line under the Insert menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/hr/
     */
    HORIZONTAL_RULE = "hr",
    /**
     * This plugin enables the user to insert an image into TinyMCE’s editable area. The plugin also adds a toolbar button and an Insert/edit image menu item under the Insert menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/image/
     */
    IMAGE = "image",
    /**
     * Image Tools (imagetools) plugin adds a contextual editing toolbar to the images in the editor.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/imagetools/
     */
    IMAGE_TOOLS = "imagetools",
    /**
     * The importcss plugin adds the ability to automatically import CSS classes from the CSS file specified in the content_css configuration setting.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/importcss/
     */
    IMPORT_CSS = "importcss",
    /**
     * The insertdatetime plugin provides a toolbar control and menu item Insert date/time (under the Insert menu) that lets a user easily insert the current date and/or time into the editable area at the cursor insertion point.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/insertdatetime/
     */
    INSERT_DATE_TIME = "insertdatetime",
    /**
     * The legacyoutput plugin changes TinyMCE’s output, producing legacy elements such as font, b, i, u, strike, and use align attributes.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/legacyoutput/
     */
    LEGACY_OUTPUT = "legacyoutput",
    /**
     * The link plugin allows a user to link external resources such as website URLs, to selected text in their document.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/link/
     */
    LINK = "link",
    /**
     * The lists plugin allows you to add numbered and bulleted lists to TinyMCE. To enable advanced lists (e.g. alpha numbered lists, square bullets) you should also enable the Advanced List (advlist) plugin. The plugin also normalizes list behavior between browsers. Enable it if you have problems with consistency making lists.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/lists/
     */
    LISTS = "lists",
    /**
     * The media plugin adds the ability for users to be able to add HTML5 video and audio elements to the editable area. It also adds the item Insert/edit video under the Insert menu as well as a toolbar button.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/media/
     */
    MEDIA = "media",
    /**
     * This plugin adds a button for inserting nonbreaking space entities &nbsp; at the current caret location (cursor insert point). It also adds a menu item Nonbreaking space under the Insert menu dropdown and a toolbar button.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/nonbreaking/
     */
    NON_BREAKING_SPACE = "nonbreaking",
    /**
     * This plugin enables you to prevent users from being able to edit content within elements assigned the mceNonEditable class.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/noneditable/
     */
    NON_EDITABLE = "noneditable",
    /**
     * This plugin adds page break support and enables a user to insert page breaks in the editable area. This is useful where a CMS uses a special separator to break content into pages.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/pagebreak/
     */
    PAGE_BREAK = "pagebreak",
    /**
     * This plugin will filter/cleanup content pasted from Microsoft Word. The power of the plugin is in its options, so please take the time to learn more about them below.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/paste/
     */
    PASTE = "paste",
    /**
     * This plugin adds a preview button to the toolbar. Pressing the button opens a dialog box showing the current content in a preview mode. It also adds a menu item Preview under the File and View menu dropdowns.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/preview/
     */
    PREVIEW = "preview",
    /**
     * This plugin adds a print button to the toolbar. It also adds a Print item to the File menu dropdown.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/print/
     */
    PRINT = "print",
    /**
     * The Quick Toolbar plugin adds three context toolbars:
     * A Quick Selection toolbar - Shown when text is selected, providing formatting buttons such as: bold, italic, and link.
     * A Quick Insert toolbar - Shown when a new line is added, providing buttons for inserting objects such as tables and images.
     * A Quick Image toolbar - Shown when an image or figure is selected, providing image formatting buttons such as alignment options.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/quickbars/
     */
    QUICK_TOOLBARS = "quickbars",
    /**
     * This plugin adds a save button to the TinyMCE toolbar, which will submit the form that the editor is within.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/save/
     */
    SAVE = "save",
    /**
     * This plugin adds search/replace dialogs to TinyMCE. It also adds a toolbar button and the menu item Find and replace under the Edit menu dropdown.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/searchreplace/
     */
    SEARCH_AND_REPLACE = "searchreplace",
    /**
     * This plugin enables TinyMCE’s spellcheck functionality. It also adds a toolbar button and the menu item Spellcheck under the Tools menu dropdown.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/spellchecker/
     */
    SPELL_CHECKER = "spellchecker",
    /**
     * This plugin adds the possibility to tab in/out of TinyMCE.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/tabfocus/
     */
    TAB_FOCUS = "tabfocus",
    /**
     * The table plugin adds table management functionality to TinyMCE. It also adds a new menubar item Table with various options in its dropdown including Insert table and options to modify cells, rows and columns, and a toolbar button with the same functionality.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/table/
     */
    TABLE = "table",
    /**
     * The template plugin adds support for custom templates. It also adds a menu item Insert template under the Insert menu and a toolbar button.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/template/
     */
    TEMPLATE = "template",
    /**
     * The Text Pattern plugin matches special patterns in the text and applies formats, replaces text, or executes commands on these patterns
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/textpattern/
     */
    TEXT_PATTERN = "textpattern",
    /**
     * The toc plugin will generate basic Table of Contents and insert it into the editor at the current cursor position. Items for the table will be taken from the headers found in the content.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/toc/
     */
    TABLE_OF_CONTENTS = "toc",
    /**
     * This plugin allows a user to see block level elements in the editable area. It is similar to WYSIWYG hidden character functionality, but at block level. It also adds a toolbar button and a menu item Show blocks under the View menu dropdown.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/visualblocks/
     */
    VISUAL_BLOCKS = "visualblocks",
    /**
     * This plugin adds the ability to see invisible characters like &nbsp; displayed in the editable area. It also adds a toolbar control and a menu item Show invisible characters under the View menu.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/visualchars/
     */
    VISUAL_CHARACTERS = "visualchars",
    /**
     * The Word Count plugin adds the functionality for counting words to the TinyMCE editor by placing a counter on the right edge of the status bar. Clicking Word Count in the status bar switches between counting words and characters. A dialog box with both word and character counts can be opened using the menu item situated in the Tools drop-down, or the toolbar button.
     * @memberof TinymceEditorPlugins
     * @link https://www.tiny.cloud/docs/plugins/opensource/wordcount/
     */
    WORD_COUNT = "wordcount"
}
export interface TinymceEditorArgs extends RawEditorSettings {
    plugins: TinymceEditorPlugins[];
    onUpdate: (html: string, event: Editor) => void;
    value?: string;
    onSetup?: (editor: Editor) => void;
    onInit?: (event: InitEvent, editor: Editor) => void;
    baseUrl?: string;
}
export default class TinymceEditor extends Component<TinymceEditorArgs> {
    private instance?;
    loading: boolean;
    /**
     * Tinymce wants to load its own theme and skin. This tells tinymce where to try and load the items from
     *
     * @readonly
     * @memberof TinymceEditor
     */
    get baseUrl(): string;
    /**
     * Get the selector for the current editor instance
     *
     * @readonly
     * @memberof TinymceEditor
     */
    get selector(): string;
    /**
     * Get a unique id for the current editor instance
     *
     * @readonly
     * @memberof TinymceEditor
     */
    get uniqueId(): string;
    /**
     * Gets the current HTML
     *
     * @readonly
     * @memberof TinymceEditor
     */
    get currentContent(): string | undefined;
    /**
     * This function is called on change of the passed in value argument. If the new value is not the same as whats currently there, then we should update
     *
     * @memberof TinymceEditor
     */
    updateValue(): void;
    /**
     * Init the editor. Loads the tinymce package, and passes in all the arguments
     *
     * @memberof TinymceEditor
     */
    initEditor(): Promise<void>;
    /**
     * When the user makes changes in the editor, update the owners of the component.
     *
     * @memberof TinymceEditor
     */
    handleEditorChange(): void;
    /**
     * Destroy the editor when we destroy the component
     *
     * @memberof TinymceEditor
     */
    willDestroy(): void;
    /**
     * Handle the initialization of the editor and setting the default value
     *
     * @private
     * @param {EditorEvent<Events.EditorEventMap['init']>} initEvent
     * @memberof TinymceEditor
     */
    private handleInit;
}
export {};
