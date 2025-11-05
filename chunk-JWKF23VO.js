import * as n from "@angular/core";
import "@angular/core";
var d = (() => { class e {
    isErrorState(t, i) { return !!(t && t.invalid && (t.dirty || i && i.submitted)); }
    static ɵfac = function (i) { return new (i || e); };
    static ɵprov = n.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), o = (() => { class e {
    isErrorState(t, i) { return !!(t && t.invalid && (t.touched || i && i.submitted)); }
    static ɵfac = function (i) { return new (i || e); };
    static ɵprov = n.ɵɵdefineInjectable({ token: e, factory: e.ɵfac, providedIn: "root" });
} return e; })();
export { d as a, o as b };
