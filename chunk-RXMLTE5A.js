import { HighContrastModeDetector as n } from "@angular/cdk/a11y";
import { BidiModule as e } from "@angular/cdk/bidi";
import * as t from "@angular/core";
import { InjectionToken as r, inject as d } from "@angular/core";
var p = new r("mat-sanity-checks", { providedIn: "root", factory: () => !0 }), u = (() => { class o {
    constructor() { d(n)._applyBodyHighContrastModeCssClasses(); }
    static ɵfac = function (i) { return new (i || o); };
    static ɵmod = t.ɵɵdefineNgModule({ type: o });
    static ɵinj = t.ɵɵdefineInjector({ imports: [e, e] });
} return o; })();
export { p as a, u as b };
