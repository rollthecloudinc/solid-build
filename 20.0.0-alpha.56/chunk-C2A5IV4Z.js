import { A as g, B as C, C as P, E as R, F as j, a as i, b as y, d as u, f as q, l as v, m as h, n as E, o as L, p as M, q as W, r as _, s as l, v as F } from "@nf-internal/chunk-IR6MR6UK";
import { __extends as rr } from "tslib";
import { __read as G, __spreadArray as X } from "tslib";
var D = 1, w, S = {};
function z(e) { return e in S ? (delete S[e], !0) : !1; }
var I = { setImmediate: function (e) { var o = D++; return S[o] = !0, w || (w = Promise.resolve()), w.then(function () { return z(o) && e(); }), o; }, clearImmediate: function (e) { z(e); } };
var Z = I.setImmediate, $ = I.clearImmediate, d = { setImmediate: function () { for (var e = [], o = 0; o < arguments.length; o++)
        e[o] = arguments[o]; var r = d.delegate; return (r?.setImmediate || Z).apply(void 0, X([], G(e))); }, clearImmediate: function (e) { var o = d.delegate; return (o?.clearImmediate || $)(e); }, delegate: void 0 };
var U = (function (e) { rr(o, e); function o(r, n) { var t = e.call(this, r, n) || this; return t.scheduler = r, t.work = n, t; } return o.prototype.requestAsyncId = function (r, n, t) { return t === void 0 && (t = 0), t !== null && t > 0 ? e.prototype.requestAsyncId.call(this, r, n, t) : (r.actions.push(this), r._scheduled || (r._scheduled = d.setImmediate(r.flush.bind(r, void 0)))); }, o.prototype.recycleAsyncId = function (r, n, t) { var m; if (t === void 0 && (t = 0), t != null ? t > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, t); var f = r.actions; n != null && ((m = f[f.length - 1]) === null || m === void 0 ? void 0 : m.id) !== n && (d.clearImmediate(n), r._scheduled = void 0); }, o; })(v);
import { __extends as er } from "tslib";
var V = (function (e) { er(o, e); function o() { return e !== null && e.apply(this, arguments) || this; } return o.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var t = this.actions, m; r = r || t.shift(); do
    if (m = r.execute(r.state, r.delay))
        break;
while ((r = t[0]) && r.id === n && t.shift()); if (this._active = !1, m) {
    for (; (r = t[0]) && r.id === n && t.shift();)
        r.unsubscribe();
    throw m;
} }, o; })(h);
var or = new V(U);
import { __extends as tr } from "tslib";
import { __read as H, __spreadArray as N } from "tslib";
var c = { schedule: function (e) { var o = requestAnimationFrame, r = cancelAnimationFrame, n = c.delegate; n && (o = n.requestAnimationFrame, r = n.cancelAnimationFrame); var t = o(function (m) { r = void 0, e(m); }); return new y(function () { return r?.(t); }); }, requestAnimationFrame: function () { for (var e = [], o = 0; o < arguments.length; o++)
        e[o] = arguments[o]; var r = c.delegate; return (r?.requestAnimationFrame || requestAnimationFrame).apply(void 0, N([], H(e))); }, cancelAnimationFrame: function () { for (var e = [], o = 0; o < arguments.length; o++)
        e[o] = arguments[o]; var r = c.delegate; return (r?.cancelAnimationFrame || cancelAnimationFrame).apply(void 0, N([], H(e))); }, delegate: void 0 };
var B = (function (e) { tr(o, e); function o(r, n) { var t = e.call(this, r, n) || this; return t.scheduler = r, t.work = n, t; } return o.prototype.requestAsyncId = function (r, n, t) { return t === void 0 && (t = 0), t !== null && t > 0 ? e.prototype.requestAsyncId.call(this, r, n, t) : (r.actions.push(this), r._scheduled || (r._scheduled = c.requestAnimationFrame(function () { return r.flush(void 0); }))); }, o.prototype.recycleAsyncId = function (r, n, t) { var m; if (t === void 0 && (t = 0), t != null ? t > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, t); var f = r.actions; n != null && ((m = f[f.length - 1]) === null || m === void 0 ? void 0 : m.id) !== n && (c.cancelAnimationFrame(n), r._scheduled = void 0); }, o; })(v);
import { __extends as nr } from "tslib";
var J = (function (e) { nr(o, e); function o() { return e !== null && e.apply(this, arguments) || this; } return o.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var t = this.actions, m; r = r || t.shift(); do
    if (m = r.execute(r.state, r.delay))
        break;
while ((r = t[0]) && r.id === n && t.shift()); if (this._active = !1, m) {
    for (; (r = t[0]) && r.id === n && t.shift();)
        r.unsubscribe();
    throw m;
} }, o; })(h);
var mr = new J(B);
function ir(e) { return !!e && (e instanceof u || i(e.lift) && i(e.subscribe)); }
function fr(e) { return new u(function (o) { l(e()).subscribe(o); }); }
function ar() { for (var e = [], o = 0; o < arguments.length; o++)
    e[o] = arguments[o]; var r = L(e), n = C(e), t = n.args, m = n.keys, f = new u(function (a) { var p = t.length; if (!p) {
    a.complete();
    return;
} for (var s = new Array(p), x = p, T = p, Y = function (k) { var b = !1; l(t[k]).subscribe(q(a, function (Q) { b || (b = !0, T--), s[k] = Q; }, function () { return x--; }, void 0, function () { (!x || !b) && (T || a.next(m ? P(m, s) : s), a.complete()); })); }, A = 0; A < p; A++)
    Y(A); }); return r ? f.pipe(g(r)) : f; }
import { __read as pr } from "tslib";
var ur = ["addListener", "removeListener"], sr = ["addEventListener", "removeEventListener"], lr = ["on", "off"];
function O(e, o, r, n) { if (i(r) && (n = r, r = void 0), n)
    return O(e, o, r).pipe(g(n)); var t = pr(dr(e) ? sr.map(function (a) { return function (p) { return e[a](o, p, r); }; }) : xr(e) ? ur.map(K(e, o)) : cr(e) ? lr.map(K(e, o)) : [], 2), m = t[0], f = t[1]; if (!m && _(e))
    return R(function (a) { return O(a, o, r); })(l(e)); if (!m)
    throw new TypeError("Invalid event target"); return new u(function (a) { var p = function () { for (var s = [], x = 0; x < arguments.length; x++)
    s[x] = arguments[x]; return a.next(1 < s.length ? s : s[0]); }; return m(p), function () { return f(p); }; }); }
function K(e, o) { return function (r) { return function (n) { return e[r](o, n); }; }; }
function xr(e) { return i(e.addListener) && i(e.removeListener); }
function cr(e) { return i(e.on) && i(e.off); }
function dr(e) { return i(e.addEventListener) && i(e.removeEventListener); }
function vr() { for (var e = [], o = 0; o < arguments.length; o++)
    e[o] = arguments[o]; var r = M(e), n = W(e, 1 / 0), t = e; return t.length ? t.length === 1 ? l(t[0]) : j(n)(F(t, r)) : E; }
export { or as a, mr as b, ir as c, fr as d, ar as e, O as f, vr as g };
