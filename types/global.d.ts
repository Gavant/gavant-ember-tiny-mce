// Types for compiled templates
declare module 'gavant-ember-tiny-mce/templates/*' {
    import { TemplateFactory } from 'htmlbars-inline-precompile';
    const tmpl: TemplateFactory;
    export default tmpl;
}
