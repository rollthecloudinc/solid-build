import { b as r, c as a } from "@nf-internal/chunk-3C63DHR6";
import * as e from "@angular/core";
import { EventEmitter as o, signal as d } from "@angular/core";
var p = (() => { class i {
    _isInitialized = !1;
    _rawDir;
    change = new o;
    get dir() { return this.valueSignal(); }
    set dir(n) { let t = this.valueSignal(); this.valueSignal.set(r(n)), this._rawDir = n, t !== this.valueSignal() && this._isInitialized && this.change.emit(this.valueSignal()); }
    get value() { return this.dir; }
    valueSignal = d("ltr");
    ngAfterContentInit() { this._isInitialized = !0; }
    ngOnDestroy() { this.change.complete(); }
    static ɵfac = function (t) { return new (t || i); };
    static ɵdir = e.ɵɵdefineDirective({ type: i, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function (t, s) { t & 2 && e.ɵɵattribute("dir", s._rawDir); }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [e.ɵɵProvidersFeature([{ provide: a, useExisting: i }])] });
} return i; })(), D = (() => { class i {
    static ɵfac = function (t) { return new (t || i); };
    static ɵmod = e.ɵɵdefineNgModule({ type: i });
    static ɵinj = e.ɵɵdefineInjector({});
} return i; })();
export { p as a, D as b };
