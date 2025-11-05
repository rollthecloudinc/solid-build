import * as o from "@angular/core";
import { inject as a, APP_ID as c } from "@angular/core";
var n = {}, s = (() => { class e {
    _appId = a(c);
    getId(t) { return this._appId !== "ng" && (t += this._appId), n.hasOwnProperty(t) || (n[t] = 0), `${t}${n[t]++}`; }
    static ɵfac = function (r) { return new (r || e); };
    static ɵprov = o.ɵɵdefineInjectable({ token: e, factory: e.ɵfac, providedIn: "root" });
} return e; })();
export { s as a };
