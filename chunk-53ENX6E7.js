import * as n from "@angular/core";
import "@angular/core";
var f = (() => { class e {
    _listeners = [];
    notify(t, r) { for (let i of this._listeners)
        i(t, r); }
    listen(t) { return this._listeners.push(t), () => { this._listeners = this._listeners.filter(r => t !== r); }; }
    ngOnDestroy() { this._listeners = []; }
    static ɵfac = function (r) { return new (r || e); };
    static ɵprov = n.ɵɵdefineInjectable({ token: e, factory: e.ɵfac, providedIn: "root" });
} return e; })();
export { f as a };
