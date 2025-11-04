import "@nf-internal/chunk-C2A5IV4Z";
import { w as M } from "@nf-internal/chunk-IR6MR6UK";
import { a as v, b as h } from "@nf-internal/chunk-6MDQTQU3";
import * as i from "@angular/core";
import { InjectionToken as G, forwardRef as D } from "@angular/core";
import * as C from "@angular/common";
import { CommonModule as S } from "@angular/common";
import { provideHttpClient as E, withJsonpSupport as q } from "@angular/common/http";
import * as o from "@angular/forms";
import { UntypedFormGroup as b, UntypedFormArray as N, UntypedFormControl as c, Validators as d, NG_VALUE_ACCESSOR as j, NG_VALIDATORS as R, ReactiveFormsModule as T } from "@angular/forms";
import { MaterialModule as W } from "@rollthecloudinc/material";
import * as A from "@rollthecloudinc/plugin";
import { BasePluginManager as k, PluginDef as O, Plugin as z } from "@rollthecloudinc/plugin";
import * as I from "@rollthecloudinc/utils";
import * as f from "@angular/material/input";
import * as F from "number-string";
function B(n, a) { }
function P(n, a) { if (n & 1 && (i.ɵɵelementStart(0, "div", 4), i.ɵɵelement(1, "classifieds-ui-attribute-widget", 5), i.ɵɵelementEnd()), n & 2) {
    let e = a.index, t = i.ɵɵnextContext();
    i.ɵɵproperty("formGroupName", i.ɵɵinterpolate(e)), i.ɵɵadvance(), i.ɵɵproperty("attribute", t.attributes[e])("widget", t.discoverWidget(t.attributes[e].widget))("appearance", t.appearance);
} }
function _(n, a) { n & 1 && (i.ɵɵelementStart(0, "div")(1, "p"), i.ɵɵtext(2, "No attributes available for ad type. Click next to continue."), i.ɵɵelementEnd()()); }
var g = new G("AttributeWidget"), V = (() => { class n {
    constructor(e) { this.widgets = e; }
    get(e) { return this.widgets.find(t => t.name === e); }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵinject(g)); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac }); }
} return n; })(), $ = (() => { class n extends k {
    constructor(e, t) { super(e, t); }
    pluginDef() { return M(new O({ name: "widget" })); }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵinject(A.PluginConfigurationManager), i.ɵɵinject(I.ModuleLoaderService)); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" }); }
} return n; })(), x = (() => { class n {
    constructor(e) { this.viewContainerRef = e; }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(i.ViewContainerRef)); }; }
    static { this.ɵdir = i.ɵɵdefineDirective({ type: n, selectors: [["", "classifiedsUiWidgetHost", ""]], standalone: !1 }); }
} return n; })(), U = (() => { class n {
    constructor(e, t) { this.componentFactoryResolver = e, this.controlContainer = t, this.appearance = "legacy"; }
    ngOnInit() { this.widget.subscribe(e => { let t = this.componentFactoryResolver.resolveComponentFactory(e.component), r = this.widgetHost.viewContainerRef; r.clear(); let s = r.createComponent(t); s.instance.attribute = this.attribute, s.instance.appearance = this.appearance; }); }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(i.ComponentFactoryResolver), i.ɵɵdirectiveInject(o.ControlContainer)); }; }
    static { this.ɵcmp = i.ɵɵdefineComponent({ type: n, selectors: [["classifieds-ui-attribute-widget"]], viewQuery: function (t, r) { if (t & 1 && i.ɵɵviewQuery(x, 7), t & 2) {
            let s;
            i.ɵɵqueryRefresh(s = i.ɵɵloadQuery()) && (r.widgetHost = s.first);
        } }, inputs: { widget: "widget", attribute: "attribute", appearance: "appearance" }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["classifiedsUiWidgetHost", ""]], template: function (t, r) { t & 1 && (i.ɵɵelementContainerStart(0, 0), i.ɵɵtemplate(1, B, 0, 0, "ng-template", 1), i.ɵɵelementContainerEnd()), t & 2 && i.ɵɵproperty("formGroup", r.controlContainer.control); }, dependencies: [o.NgControlStatusGroup, o.FormGroupDirective, x], encapsulation: 2 }); }
} return n; })(), pe = (() => { class n {
    set attributeValues(e) { this._attributeValues = e, this.applyValues(); }
    get attributeValues() { return this._attributeValues; }
    get attributesArray() { return this.attributesForm.get("attributes"); }
    constructor(e, t) { this.widgetsService = e, this.wpm = t, this.attributes = [], this.appearance = "legacy", this.attributesForm = new b({ attributes: new N([]) }), this._attributeValues = [], this.onTouched = () => { }; }
    ngOnChanges(e) { if (e.attributes && (!e.attributes.previousValue || e.attributes.previousValue !== e.attributes.currentValue)) {
        for (; this.attributesArray.length !== 0;)
            this.attributesArray.removeAt(0);
        this.attributes.forEach(t => { this.attributesArray.push(new b({ name: new c(t.name, d.required), type: new c(t.type, d.required), displayName: new c(t.label, d.required), value: new c("", t.required ? d.required : []), attributes: new N(t.attributes ? t.attributes.map(r => new b({ name: new c(r.name, d.required), type: new c(r.type, d.required), displayName: new c(r.label, d.required), value: new c("", r.required ? d.required : []) })) : []) })); }), this.applyValues();
    } }
    writeValue(e) { e && (console.log(`write value: ${e}`), this.attributesArray.setValue(e, { emitEvent: !1 })); }
    registerOnChange(e) { this.attributesArray.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.attributesArray.disable() : this.attributesArray.enable(); }
    validate(e) { return this.attributesForm.valid ? null : { invalidForm: { valid: !1, message: "attributes are invalid" } }; }
    discoverWidget(e) { return this.wpm.getPlugin(e); }
    applyValues() { this.attributesArray.controls.forEach((e, t) => { let r = this.attributeValues ? this.attributeValues.find(s => s.name === e.get("name").value) : void 0; r !== void 0 && (e.get("value").setValue(r.value), e.updateValueAndValidity()), e.get("attributes").controls.forEach(s => { let u = this.attributeValues && this.attributeValues[t] !== void 0 ? this.attributeValues[t].attributes.find(p => p.name === s.get("name").value) : void 0; u !== void 0 && (s.get("value").setValue(u.value), s.updateValueAndValidity()); }); }); }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(V), i.ɵɵdirectiveInject($)); }; }
    static { this.ɵcmp = i.ɵɵdefineComponent({ type: n, selectors: [["classifieds-ui-attributes-builder"]], inputs: { attributes: "attributes", appearance: "appearance", attributeValues: "attributeValues" }, standalone: !1, features: [i.ɵɵProvidersFeature([V, { provide: j, useExisting: D(() => n), multi: !0 }, { provide: R, useExisting: D(() => n), multi: !0 }]), i.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "formGroup"], ["formArrayName", "attributes", 1, "attribute-fields"], ["class", "attribute-field-container", 3, "formGroupName", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "attribute-field-container", 3, "formGroupName"], [3, "attribute", "widget", "appearance"]], template: function (t, r) { t & 1 && (i.ɵɵelementContainerStart(0, 0), i.ɵɵelementStart(1, "div", 1), i.ɵɵtemplate(2, P, 2, 5, "div", 2), i.ɵɵelementEnd(), i.ɵɵelementContainerEnd(), i.ɵɵtemplate(3, _, 3, 0, "div", 3)), t & 2 && (i.ɵɵproperty("formGroup", r.attributesForm), i.ɵɵadvance(2), i.ɵɵproperty("ngForOf", r.attributesArray.controls), i.ɵɵadvance(), i.ɵɵproperty("ngIf", r.attributes.length == 0)); }, dependencies: [C.NgForOf, C.NgIf, o.NgControlStatusGroup, o.FormGroupDirective, o.FormGroupName, o.FormArrayName, U], encapsulation: 2 }); }
} return n; })(), H = (() => { class n {
    constructor(e) { this.controlContainer = e, this.appearance = "legacy"; }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(o.ControlContainer)); }; }
    static { this.ɵcmp = i.ɵɵdefineComponent({ type: n, selectors: [["classifieds-ui-text-widget"]], inputs: { attribute: "attribute", appearance: "appearance" }, standalone: !1, decls: 3, vars: 3, consts: [[3, "formGroup"], [3, "appearance"], ["matInput", "", "formControlName", "value", 3, "placeholder"]], template: function (t, r) { t & 1 && (i.ɵɵelementContainerStart(0, 0), i.ɵɵelementStart(1, "mat-form-field", 1), i.ɵɵelement(2, "input", 2), i.ɵɵelementEnd(), i.ɵɵelementContainerEnd()), t & 2 && (i.ɵɵproperty("formGroup", r.controlContainer.control), i.ɵɵadvance(), i.ɵɵproperty("appearance", r.appearance), i.ɵɵadvance(), i.ɵɵproperty("placeholder", r.attribute.label)); }, dependencies: [o.DefaultValueAccessor, o.NgControlStatus, o.NgControlStatusGroup, o.FormGroupDirective, o.FormControlName, f.MatInput, f.MatFormField], encapsulation: 2 }); }
} return n; })(), Q = (() => { class n {
    constructor(e) { this.controlContainer = e; }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(o.ControlContainer)); }; }
    static { this.ɵcmp = i.ɵɵdefineComponent({ type: n, selectors: [["classifieds-ui-min-max-widget"]], inputs: { attribute: "attribute" }, standalone: !1, decls: 8, vars: 4, consts: [[3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], ["matInput", "", "type", "number", "formControlName", "value", 3, "placeholder"], ["formGroupName", "1"]], template: function (t, r) { t & 1 && (i.ɵɵelementContainerStart(0, 0), i.ɵɵelementStart(1, "label"), i.ɵɵtext(2), i.ɵɵelementEnd(), i.ɵɵelementStart(3, "div", 1)(4, "mat-form-field", 2), i.ɵɵelement(5, "input", 3), i.ɵɵelementEnd(), i.ɵɵelementStart(6, "mat-form-field", 4), i.ɵɵelement(7, "input", 3), i.ɵɵelementEnd()(), i.ɵɵelementContainerEnd()), t & 2 && (i.ɵɵproperty("formGroup", r.controlContainer.control), i.ɵɵadvance(2), i.ɵɵtextInterpolate(r.attribute.label), i.ɵɵadvance(3), i.ɵɵproperty("placeholder", r.attribute.attributes[0].label), i.ɵɵadvance(2), i.ɵɵproperty("placeholder", r.attribute.attributes[1].label)); }, dependencies: [o.DefaultValueAccessor, o.NumberValueAccessor, o.NgControlStatus, o.NgControlStatusGroup, o.FormGroupDirective, o.FormControlName, o.FormGroupName, o.FormArrayName, f.MatInput, f.MatFormField], encapsulation: 2 }); }
} return n; })(), J = (() => { class n {
    getComputedValue(e, t) { let r = t && t.length > 0 && this.matchAttribute(e, t); if (r)
        return r.computedValue; }
    getValue(e, t) { let r = t && t.length > 0 && this.matchAttribute(e, t); if (r)
        return r.value; }
    matchAttribute(e, t) { let r = t.length; for (let s = 0; s < r; s++)
        if (t[s].attributes && t[s].attributes.length > 0) {
            if (this.matchAttribute(e, t[s].attributes))
                return t[s];
            continue;
        }
        else {
            if (e === t[s].name)
                return t[s];
            continue;
        } }
    static { this.ɵfac = function (t) { return new (t || n); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" }); }
} return n; })(), fe = (() => { class n {
    constructor(e) { this.attributeMatcher = e; }
    transform(e, t) { let r = this.attributeMatcher.getComputedValue(t, e); return r || ""; }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵdirectiveInject(J, 16)); }; }
    static { this.ɵpipe = i.ɵɵdefinePipe({ name: "attribute", type: n, pure: !0, standalone: !1 }); }
} return n; })(), l = function (n) { return n[n.Number = 0] = "Number", n[n.Text = 1] = "Text", n[n.Complex = 2] = "Complex", n[n.Float = 3] = "Float", n[n.Array = 4] = "Array", n[n.Bool = 5] = "Bool", n[n.Date = 6] = "Date", n; }(l || {}), y = class extends z {
    constructor(a) { super(a), a && (this.name = this.id, this.schema = a.schema ? new w(a.schema) : void 0, this.component = a.component); }
}, w = class n {
    constructor(a) { this.attributes = [], a && (this.name = a.name, this.widget = a.widget !== void 0 ? a.widget : "text", this.type = a.type, this.label = a.label, this.required = a.required, this.options = a.options, a.attributes && (this.attributes = a.attributes.map(e => new n(e)))); }
}, m = class n {
    constructor(a) { this.attributes = [], a && (this.name = a.name, this.displayName = a.displayName, this.type = a.type, this.value = a.value, this.intValue = a.intValue, this.computedValue = a.computedValue, a.attributes && (Array.isArray(a.attributes) ? this.attributes = a.attributes.reduce((e, t) => t._store === void 0 || t._store ? [...e, new n(t)] : e, []) : (a.attributes._store === void 0 || a.attributes._store) && (this.attributes = [a.attributes])), a.value && typeof a.value == "object" ? (this.value = void 0, this.type = l.Complex, a.value.attributes.reduce((e, t) => t._store === void 0 || t._store ? [...e, new n(t)] : e, [])) : this.value = a.value); }
}, L = () => { let n = new w({ name: "", type: l.Text, label: "", required: !1, widget: "text", options: {}, attributes: [] }); return new y({ id: "text", name: "text", title: "Text", component: H, schema: n }); }, K = () => new y({ id: "minmax", name: "minmax", title: "MinMax", component: Q, schema: void 0 }), ve = (() => { class n {
    constructor(e, t) { e.forEach(r => t.register(r)); }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵinject(g), i.ɵɵinject($)); }; }
    static { this.ɵmod = i.ɵɵdefineNgModule({ type: n }); }
    static { this.ɵinj = i.ɵɵdefineInjector({ providers: [{ provide: g, useFactory: L, multi: !0 }, { provide: g, useFactory: K, multi: !0 }, E(q())], imports: [S, T, W] }); }
} return n; })(), X = (() => { class n {
    constructor() { }
    compute(e) { let t = []; return e.forEach(r => t.push(this.computeAttribute(r))), t; }
    computeAttribute(e) { let t = this.resolveComputedValue(e.value, e.type); return e.attributes && e.attributes.length > 0 ? new m(h(v({}, e), { computedValue: t, attributes: this.compute(e.attributes) })) : new m(h(v({}, e), { computedValue: t })); }
    resolveComputedValue(e, t) { let r; return t === l.Number ? (r = F.toNumber(e.trim()), r && isNaN(r) && (r = void 0)) : r = e.trim(), r === void 0 ? r : `${r}`; }
    static { this.ɵfac = function (t) { return new (t || n); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" }); }
} return n; })(), he = (() => { class n {
    constructor(e) { this.valueComputer = e; }
    serialize(e, t) { let r = typeof e; if (r !== "object")
        return new m({ name: t, type: r !== "string" ? r !== "boolean" ? l.Number : l.Bool : l.Text, displayName: t, value: `${e}`, intValue: void 0, computedValue: this.valueComputer.resolveComputedValue(`${e}`, r !== "string" ? r !== "boolean" ? l.Number : l.Bool : l.Text), attributes: [] }); if (Array.isArray(e) && (t === "attributes" || t === "settings"))
        return new m({ name: t, type: l.Complex, displayName: t, value: void 0, intValue: void 0, computedValue: void 0, attributes: e }); if (Array.isArray(e)) {
        let s = e.length, u = [];
        for (let p = 0; p < s; p++)
            typeof e[p] != "object" ? u.push(this.serialize(e[p], `${p}`)) : u.push(this.serialize(e[p], `${p}`));
        return new m({ name: t, type: l.Array, displayName: t, value: void 0, intValue: void 0, computedValue: void 0, attributes: u });
    }
    else {
        if (e instanceof Date)
            return new m({ name: t, type: l.Date, displayName: t, value: e.toJSON(), intValue: void 0, computedValue: e.toJSON(), attributes: [] });
        {
            let s = [];
            for (let u in e)
                s.push(this.serialize(e[u], u));
            return new m({ name: t, type: l.Complex, displayName: t, value: void 0, intValue: void 0, computedValue: void 0, attributes: s });
        }
    } }
    deserializeAsObject(e, t = !1) { return this.deserialize(new m({ name: "root", type: l.Complex, displayName: "root", value: void 0, computedValue: void 0, intValue: 0, attributes: e }), t); }
    deserialize(e, t = !1) { let r, s; switch (e.type) {
        case l.Complex:
            if (!t && (e.name === "attributes" || e.name === "settings"))
                r = e.attributes.map(u => new m(u));
            else {
                s = e.attributes.length;
                for (let u = 0; u < s; u++)
                    r = h(v({}, r), { [e.attributes[u].name]: this.deserialize(e.attributes[u]) });
            }
            break;
        case l.Bool:
            r = e.value !== void 0 ? ["1", "true", "on"].findIndex(u => u === e.value) > -1 : void 0;
            break;
        case l.Number:
        case l.Float:
            r = e.value !== void 0 && e.value !== "" && e.value !== "undefined" ? e.value !== "0" ? F.toNumber(e.value.trim()) : 0 : void 0;
            break;
        case l.Text:
            r = e.value;
            break;
        case l.Array:
            if (!t && (e.name === "attributes" || e.name === "settings"))
                r = e.attributes.map(u => new m(u));
            else {
                s = e.attributes.length, r = [];
                for (let u = 0; u < s; u++)
                    r = [...r, this.deserialize(e.attributes[u])];
            }
            break;
        case l.Date:
            r = e.value !== void 0 && e.value !== "" ? new Date(e.value) : void 0;
            break;
        default:
    } return r; }
    convertToGroup(e) { let t = new b({ name: new c(e.name, d.required), type: new c(e.type, d.required), displayName: new c(e.displayName, d.required), value: new c(e.value, d.required), computedValue: new c(e.value, d.required), attributes: new N([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(r => { t.get("attributes").push(this.convertToGroup(r)); }), t; }
    static { this.ɵfac = function (t) { return new (t || n)(i.ɵɵinject(X)); }; }
    static { this.ɵprov = i.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" }); }
} return n; })();
export { g as ATTRIBUTE_WIDGET, w as Attribute, J as AttributeMatcherService, fe as AttributePipe, he as AttributeSerializerService, l as AttributeTypes, m as AttributeValue, y as AttributeWidget, U as AttributeWidgetComponent, pe as AttributesBuilderComponent, ve as AttributesModule, X as ValueComputerService, $ as WidgetPluginManager, V as WidgetsService };
