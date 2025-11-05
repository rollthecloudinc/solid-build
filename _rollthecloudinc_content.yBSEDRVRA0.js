import "@nf-internal/chunk-C2A5IV4Z";
import { w as r } from "@nf-internal/chunk-IR6MR6UK";
import "@nf-internal/chunk-6MDQTQU3";
import * as i from "@angular/core";
import { InjectionToken as p } from "@angular/core";
import { CommonModule as d } from "@angular/common";
import { AttributeValue as h } from "@rollthecloudinc/attributes";
import * as l from "@rollthecloudinc/plugin";
import { Plugin as g, BasePluginManager as M, PluginDef as C } from "@rollthecloudinc/plugin";
import * as m from "@rollthecloudinc/utils";
var I = (() => { class n {
    static { this.ɵfac = function (o) { return new (o || n); }; }
    static { this.ɵmod = i.ɵɵdefineNgModule({ type: n }); }
    static { this.ɵinj = i.ɵɵdefineInjector({ imports: [d] }); }
} return n; })(), s = class extends g {
    constructor(e) { super(e), this.fileTypes = [], e && (this.name = this.id, this.handler = e.handler !== void 0 ? e.handler : void 0, this.selectionComponent = e.selectionComponent ? e.selectionComponent : void 0, this.renderComponent = e.renderComponent ? e.renderComponent : void 0, this.editorComponent = e.editorComponent ? e.editorComponent : void 0); }
}, c = class {
    constructor(e) { e && (this.type = e.type, this.id = e.id); }
}, f = class {
    constructor(e) { this.settings = [], e && (this.pluginName = e.pluginName, e.settings && (this.settings = e.settings.map(t => new h(t)))); }
}, u = class {
    constructor(e) { this.fullscreen = !1, e && (this.fullscreen = e.fullscreen); }
}, P = new p("ContentPlugin"), T = (() => { class n extends M {
    constructor(t, o) { super(t, o); }
    pluginDef() { return r(new C({ name: "content" })); }
    static { this.ɵfac = function (o) { return new (o || n)(i.ɵɵinject(l.PluginConfigurationManager), i.ɵɵinject(m.ModuleLoaderService)); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" }); }
} return n; })();
export { P as CONTENT_PLUGIN, c as ContentBinding, f as ContentInstance, I as ContentModule, s as ContentPlugin, u as ContentPluginEditorOptions, T as ContentPluginManager };
