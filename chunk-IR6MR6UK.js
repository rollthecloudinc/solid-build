import { __read as ft, __spreadArray as at, __values as ct } from "tslib";
function y(r) { return typeof r == "function"; }
function k(r) { var t = function (n) { Error.call(n), n.stack = new Error().stack; }, e = r(t); return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e; }
var mr = k(function (r) {
    return function (e) {
        r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function (n, o) { return o + 1 + ") " + n.toString(); }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
    };
});
function C(r, t) { if (r) {
    var e = r.indexOf(t);
    0 <= e && r.splice(e, 1);
} }
var F = (function () { function r(t) { this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null; } return r.prototype.unsubscribe = function () { var t, e, n, o, i; if (!this.closed) {
    this.closed = !0;
    var u = this._parentage;
    if (u)
        if (this._parentage = null, Array.isArray(u))
            try {
                for (var f = ct(u), a = f.next(); !a.done; a = f.next()) {
                    var m = a.value;
                    m.remove(this);
                }
            }
            catch (b) {
                t = { error: b };
            }
            finally {
                try {
                    a && !a.done && (e = f.return) && e.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        else
            u.remove(this);
    var l = this.initialTeardown;
    if (y(l))
        try {
            l();
        }
        catch (b) {
            i = b instanceof mr ? b.errors : [b];
        }
    var s = this._finalizers;
    if (s) {
        this._finalizers = null;
        try {
            for (var v = ct(s), S = v.next(); !S.done; S = v.next()) {
                var d = S.value;
                try {
                    pt(d);
                }
                catch (b) {
                    i = i ?? [], b instanceof mr ? i = at(at([], ft(i)), ft(b.errors)) : i.push(b);
                }
            }
        }
        catch (b) {
            n = { error: b };
        }
        finally {
            try {
                S && !S.done && (o = v.return) && o.call(v);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    }
    if (i)
        throw new mr(i);
} }, r.prototype.add = function (t) { var e; if (t && t !== this)
    if (this.closed)
        pt(t);
    else {
        if (t instanceof r) {
            if (t.closed || t._hasParent(this))
                return;
            t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
    } }, r.prototype._hasParent = function (t) { var e = this._parentage; return e === t || Array.isArray(e) && e.includes(t); }, r.prototype._addParent = function (t) { var e = this._parentage; this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t; }, r.prototype._removeParent = function (t) { var e = this._parentage; e === t ? this._parentage = null : Array.isArray(e) && C(e, t); }, r.prototype.remove = function (t) { var e = this._finalizers; e && C(e, t), t instanceof r && t._removeParent(this); }, r.EMPTY = (function () { var t = new r; return t.closed = !0, t; })(), r; })();
var Wr = F.EMPTY;
function lr(r) { return r instanceof F || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe); }
function pt(r) { y(r) ? r() : r.unsubscribe(); }
import { __extends as bt } from "tslib";
var L = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
import { __read as mt, __spreadArray as lt } from "tslib";
var Q = { setTimeout: function (r, t) { for (var e = [], n = 2; n < arguments.length; n++)
        e[n - 2] = arguments[n]; var o = Q.delegate; return o?.setTimeout ? o.setTimeout.apply(o, lt([r, t], mt(e))) : setTimeout.apply(void 0, lt([r, t], mt(e))); }, clearTimeout: function (r) { var t = Q.delegate; return (t?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function sr(r) { Q.setTimeout(function () { var t = L.onUnhandledError; if (t)
    t(r);
else
    throw r; }); }
function O() { }
var st = (function () { return Dr("C", void 0, void 0); })();
function vt(r) { return Dr("E", void 0, r); }
function dt(r) { return Dr("N", r, void 0); }
function Dr(r, t, e) { return { kind: r, value: t, error: e }; }
var Z = null;
function rr(r) { if (L.useDeprecatedSynchronousErrorHandling) {
    var t = !Z;
    if (t && (Z = { errorThrown: !1, error: null }), r(), t) {
        var e = Z, n = e.errorThrown, o = e.error;
        if (Z = null, n)
            throw o;
    }
}
else
    r(); }
function ht(r) { L.useDeprecatedSynchronousErrorHandling && Z && (Z.errorThrown = !0, Z.error = r); }
var cr = (function (r) { bt(t, r); function t(e) { var n = r.call(this) || this; return n.isStopped = !1, e ? (n.destination = e, lr(e) && e.add(n)) : n.destination = ye, n; } return t.create = function (e, n, o) { return new $(e, n, o); }, t.prototype.next = function (e) { this.isStopped ? qr(dt(e), this) : this._next(e); }, t.prototype.error = function (e) { this.isStopped ? qr(vt(e), this) : (this.isStopped = !0, this._error(e)); }, t.prototype.complete = function () { this.isStopped ? qr(st, this) : (this.isStopped = !0, this._complete()); }, t.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null); }, t.prototype._next = function (e) { this.destination.next(e); }, t.prototype._error = function (e) { try {
    this.destination.error(e);
}
finally {
    this.unsubscribe();
} }, t.prototype._complete = function () { try {
    this.destination.complete();
}
finally {
    this.unsubscribe();
} }, t; })(F);
var de = Function.prototype.bind;
function Yr(r, t) { return de.call(r, t); }
var he = (function () { function r(t) { this.partialObserver = t; } return r.prototype.next = function (t) { var e = this.partialObserver; if (e.next)
    try {
        e.next(t);
    }
    catch (n) {
        vr(n);
    } }, r.prototype.error = function (t) { var e = this.partialObserver; if (e.error)
    try {
        e.error(t);
    }
    catch (n) {
        vr(n);
    }
else
    vr(t); }, r.prototype.complete = function () { var t = this.partialObserver; if (t.complete)
    try {
        t.complete();
    }
    catch (e) {
        vr(e);
    } }, r; })(), $ = (function (r) { bt(t, r); function t(e, n, o) { var i = r.call(this) || this, u; if (y(e) || !e)
    u = { next: e ?? void 0, error: n ?? void 0, complete: o ?? void 0 };
else {
    var f;
    i && L.useDeprecatedNextContext ? (f = Object.create(e), f.unsubscribe = function () { return i.unsubscribe(); }, u = { next: e.next && Yr(e.next, f), error: e.error && Yr(e.error, f), complete: e.complete && Yr(e.complete, f) }) : u = e;
} return i.destination = new he(u), i; } return t; })(cr);
function vr(r) { L.useDeprecatedSynchronousErrorHandling ? ht(r) : sr(r); }
function be(r) { throw r; }
function qr(r, t) { var e = L.onStoppedNotification; e && Q.setTimeout(function () { return e(r, t); }); }
var ye = { closed: !0, next: O, error: be, complete: O };
var tr = (function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; })();
function A(r) { return r; }
function dr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return zr(r); }
function zr(r) { return r.length === 0 ? A : r.length === 1 ? r[0] : function (e) { return r.reduce(function (n, o) { return o(n); }, e); }; }
var w = (function () { function r(t) { t && (this._subscribe = t); } return r.prototype.lift = function (t) { var e = new r; return e.source = this, e.operator = t, e; }, r.prototype.subscribe = function (t, e, n) { var o = this, i = Se(t) ? t : new $(t, e, n); return rr(function () { var u = o, f = u.operator, a = u.source; i.add(f ? f.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i)); }), i; }, r.prototype._trySubscribe = function (t) { try {
    return this._subscribe(t);
}
catch (e) {
    t.error(e);
} }, r.prototype.forEach = function (t, e) { var n = this; return e = yt(e), new e(function (o, i) { var u = new $({ next: function (f) { try {
        t(f);
    }
    catch (a) {
        i(a), u.unsubscribe();
    } }, error: i, complete: o }); n.subscribe(u); }); }, r.prototype._subscribe = function (t) { var e; return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t); }, r.prototype[tr] = function () { return this; }, r.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e]; return zr(t)(this); }, r.prototype.toPromise = function (t) { var e = this; return t = yt(t), new t(function (n, o) { var i; e.subscribe(function (u) { return i = u; }, function (u) { return o(u); }, function () { return n(i); }); }); }, r.create = function (t) { return new r(t); }, r; })();
function yt(r) { var t; return (t = r ?? L.Promise) !== null && t !== void 0 ? t : Promise; }
function xe(r) { return r && y(r.next) && y(r.error) && y(r.complete); }
function Se(r) { return r && r instanceof cr || xe(r) && lr(r); }
function Gr(r) { return y(r?.lift); }
function c(r) { return function (t) { if (Gr(t))
    return t.lift(function (e) { try {
        return r(e, this);
    }
    catch (n) {
        this.error(n);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
import { __extends as ge } from "tslib";
function p(r, t, e, n, o) { return new Kr(r, t, e, n, o); }
var Kr = (function (r) { ge(t, r); function t(e, n, o, i, u, f) { var a = r.call(this, e) || this; return a.onFinalize = u, a.shouldUnsubscribe = f, a._next = n ? function (m) { try {
    n(m);
}
catch (l) {
    e.error(l);
} } : r.prototype._next, a._error = i ? function (m) { try {
    i(m);
}
catch (l) {
    e.error(l);
}
finally {
    this.unsubscribe();
} } : r.prototype._error, a._complete = o ? function () { try {
    o();
}
catch (m) {
    e.error(m);
}
finally {
    this.unsubscribe();
} } : r.prototype._complete, a; } return t.prototype.unsubscribe = function () { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
    var n = this.closed;
    r.prototype.unsubscribe.call(this), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
} }, t; })(cr);
function xt() { return c(function (r, t) { var e = null; r._refCount++; var n = p(t, void 0, void 0, void 0, function () { if (!r || r._refCount <= 0 || 0 < --r._refCount) {
    e = null;
    return;
} var o = r._connection, i = e; e = null, o && (!i || o === i) && o.unsubscribe(), t.unsubscribe(); }); r.subscribe(n), n.closed || (e = r.connect()); }); }
import { __extends as wt, __values as we } from "tslib";
var St = k(function (r) { return function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }; });
var E = (function (r) { wt(t, r); function t() { var e = r.call(this) || this; return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return t.prototype.lift = function (e) { var n = new gt(this, this); return n.operator = e, n; }, t.prototype._throwIfClosed = function () { if (this.closed)
    throw new St; }, t.prototype.next = function (e) { var n = this; rr(function () { var o, i; if (n._throwIfClosed(), !n.isStopped) {
    n.currentObservers || (n.currentObservers = Array.from(n.observers));
    try {
        for (var u = we(n.currentObservers), f = u.next(); !f.done; f = u.next()) {
            var a = f.value;
            a.next(e);
        }
    }
    catch (m) {
        o = { error: m };
    }
    finally {
        try {
            f && !f.done && (i = u.return) && i.call(u);
        }
        finally {
            if (o)
                throw o.error;
        }
    }
} }); }, t.prototype.error = function (e) { var n = this; rr(function () { if (n._throwIfClosed(), !n.isStopped) {
    n.hasError = n.isStopped = !0, n.thrownError = e;
    for (var o = n.observers; o.length;)
        o.shift().error(e);
} }); }, t.prototype.complete = function () { var e = this; rr(function () { if (e._throwIfClosed(), !e.isStopped) {
    e.isStopped = !0;
    for (var n = e.observers; n.length;)
        n.shift().complete();
} }); }, t.prototype.unsubscribe = function () { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }, Object.defineProperty(t.prototype, "observed", { get: function () { var e; return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0; }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function (e) { return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e); }, t.prototype._subscribe = function (e) { return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e); }, t.prototype._innerSubscribe = function (e) { var n = this, o = this, i = o.hasError, u = o.isStopped, f = o.observers; return i || u ? Wr : (this.currentObservers = null, f.push(e), new F(function () { n.currentObservers = null, C(f, e); })); }, t.prototype._checkFinalizedStatuses = function (e) { var n = this, o = n.hasError, i = n.thrownError, u = n.isStopped; o ? e.error(i) : u && e.complete(); }, t.prototype.asObservable = function () { var e = new w; return e.source = this, e; }, t.create = function (e, n) { return new gt(e, n); }, t; })(w);
var gt = (function (r) { wt(t, r); function t(e, n) { var o = r.call(this) || this; return o.destination = e, o.source = n, o; } return t.prototype.next = function (e) { var n, o; (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, e); }, t.prototype.error = function (e) { var n, o; (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, e); }, t.prototype.complete = function () { var e, n; (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e); }, t.prototype._subscribe = function (e) { var n, o; return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && o !== void 0 ? o : Wr; }, t; })(E);
import { __extends as Ee } from "tslib";
var Et = (function (r) { Ee(t, r); function t(e) { var n = r.call(this) || this; return n._value = e, n; } return Object.defineProperty(t.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function (e) { var n = r.prototype._subscribe.call(this, e); return !n.closed && e.next(this._value), n; }, t.prototype.getValue = function () { var e = this, n = e.hasError, o = e.thrownError, i = e._value; if (n)
    throw o; return this._throwIfClosed(), i; }, t.prototype.next = function (e) { r.prototype.next.call(this, this._value = e); }, t; })(E);
import { __extends as Oe } from "tslib";
var B = { now: function () { return (B.delegate || Date).now(); }, delegate: void 0 };
var hr = (function (r) { Oe(t, r); function t(e, n, o) { e === void 0 && (e = 1 / 0), n === void 0 && (n = 1 / 0), o === void 0 && (o = B); var i = r.call(this) || this; return i._bufferSize = e, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, n), i; } return t.prototype.next = function (e) { var n = this, o = n.isStopped, i = n._buffer, u = n._infiniteTimeWindow, f = n._timestampProvider, a = n._windowTime; o || (i.push(e), !u && i.push(f.now() + a)), this._trimBuffer(), r.prototype.next.call(this, e); }, t.prototype._subscribe = function (e) { this._throwIfClosed(), this._trimBuffer(); for (var n = this._innerSubscribe(e), o = this, i = o._infiniteTimeWindow, u = o._buffer, f = u.slice(), a = 0; a < f.length && !e.closed; a += i ? 1 : 2)
    e.next(f[a]); return this._checkFinalizedStatuses(e), n; }, t.prototype._trimBuffer = function () { var e = this, n = e._bufferSize, o = e._timestampProvider, i = e._buffer, u = e._infiniteTimeWindow, f = (u ? 1 : 2) * n; if (n < 1 / 0 && f < i.length && i.splice(0, i.length - f), !u) {
    for (var a = o.now(), m = 0, l = 1; l < i.length && i[l] <= a; l += 2)
        m = l;
    m && i.splice(0, m + 1);
} }, t; })(E);
var N = new w(function (r) { return r.complete(); });
function I(r, t, e, n, o) { n === void 0 && (n = 0), o === void 0 && (o = !1); var i = t.schedule(function () { e(), o ? r.add(this.schedule(null, n)) : this.unsubscribe(); }, n); if (r.add(i), !o)
    return i; }
function br(r, t) { return t === void 0 && (t = 0), c(function (e, n) { e.subscribe(p(n, function (o) { return I(n, r, function () { return n.next(o); }, t); }, function () { return I(n, r, function () { return n.complete(); }, t); }, function (o) { return I(n, r, function () { return n.error(o); }, t); })); }); }
function yr(r, t) { return t === void 0 && (t = 0), c(function (e, n) { n.add(r.schedule(function () { return e.subscribe(n); }, t)); }); }
import { __asyncValues as Te, __awaiter as Fe, __generator as Ce, __values as je } from "tslib";
var xr = function (r) { return r && typeof r.length == "number" && typeof r != "function"; };
function Sr(r) { return y(r?.then); }
function gr(r) { return y(r[tr]); }
function wr(r) { return Symbol.asyncIterator && y(r?.[Symbol.asyncIterator]); }
function Er(r) { return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."); }
function Ae() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var Or = Ae();
function Ar(r) { return y(r?.[Or]); }
import { __asyncGenerator as _e, __await as Zr, __generator as Ie } from "tslib";
function _r(r) { return _e(this, arguments, function () { var e, n, o, i; return Ie(this, function (u) { switch (u.label) {
    case 0: e = r.getReader(), u.label = 1;
    case 1: u.trys.push([1, , 9, 10]), u.label = 2;
    case 2: return [4, Zr(e.read())];
    case 3: return n = u.sent(), o = n.value, i = n.done, i ? [4, Zr(void 0)] : [3, 5];
    case 4: return [2, u.sent()];
    case 5: return [4, Zr(o)];
    case 6: return [4, u.sent()];
    case 7: return u.sent(), [3, 2];
    case 8: return [3, 10];
    case 9: return e.releaseLock(), [7];
    case 10: return [2];
} }); }); }
function Ir(r) { return y(r?.getReader); }
function x(r) { if (r instanceof w)
    return r; if (r != null) {
    if (gr(r))
        return Re(r);
    if (xr(r))
        return Pe(r);
    if (Sr(r))
        return ke(r);
    if (wr(r))
        return Ot(r);
    if (Ar(r))
        return Me(r);
    if (Ir(r))
        return Ve(r);
} throw Er(r); }
function Re(r) { return new w(function (t) { var e = r[tr](); if (y(e.subscribe))
    return e.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function Pe(r) { return new w(function (t) { for (var e = 0; e < r.length && !t.closed; e++)
    t.next(r[e]); t.complete(); }); }
function ke(r) { return new w(function (t) { r.then(function (e) { t.closed || (t.next(e), t.complete()); }, function (e) { return t.error(e); }).then(null, sr); }); }
function Me(r) { return new w(function (t) { var e, n; try {
    for (var o = je(r), i = o.next(); !i.done; i = o.next()) {
        var u = i.value;
        if (t.next(u), t.closed)
            return;
    }
}
catch (f) {
    e = { error: f };
}
finally {
    try {
        i && !i.done && (n = o.return) && n.call(o);
    }
    finally {
        if (e)
            throw e.error;
    }
} t.complete(); }); }
function Ot(r) { return new w(function (t) { Le(r, t).catch(function (e) { return t.error(e); }); }); }
function Ve(r) { return Ot(_r(r)); }
function Le(r, t) { var e, n, o, i; return Fe(this, void 0, void 0, function () { var u, f; return Ce(this, function (a) { switch (a.label) {
    case 0: a.trys.push([0, 5, 6, 11]), e = Te(r), a.label = 1;
    case 1: return [4, e.next()];
    case 2:
        if (n = a.sent(), !!n.done)
            return [3, 4];
        if (u = n.value, t.next(u), t.closed)
            return [2];
        a.label = 3;
    case 3: return [3, 1];
    case 4: return [3, 11];
    case 5: return f = a.sent(), o = { error: f }, [3, 11];
    case 6: return a.trys.push([6, , 9, 10]), n && !n.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
    case 7: a.sent(), a.label = 8;
    case 8: return [3, 10];
    case 9:
        if (o)
            throw o.error;
        return [7];
    case 10: return [7];
    case 11: return t.complete(), [2];
} }); }); }
function At(r, t) { return x(r).pipe(yr(t), br(t)); }
function _t(r, t) { return x(r).pipe(yr(t), br(t)); }
function It(r, t) { return new w(function (e) { var n = 0; return t.schedule(function () { n === r.length ? e.complete() : (e.next(r[n++]), e.closed || this.schedule()); }); }); }
function Tt(r, t) { return new w(function (e) { var n; return I(e, t, function () { n = r[Or](), I(e, t, function () { var o, i, u; try {
    o = n.next(), i = o.value, u = o.done;
}
catch (f) {
    e.error(f);
    return;
} u ? e.complete() : e.next(i); }, 0, !0); }), function () { return y(n?.return) && n.return(); }; }); }
function Tr(r, t) { if (!r)
    throw new Error("Iterable cannot be null"); return new w(function (e) { I(e, t, function () { var n = r[Symbol.asyncIterator](); I(e, t, function () { n.next().then(function (o) { o.done ? e.complete() : e.next(o.value); }); }, 0, !0); }); }); }
function Ft(r, t) { return Tr(_r(r), t); }
function Ct(r, t) { if (r != null) {
    if (gr(r))
        return At(r, t);
    if (xr(r))
        return It(r, t);
    if (Sr(r))
        return _t(r, t);
    if (wr(r))
        return Tr(r, t);
    if (Ar(r))
        return Tt(r, t);
    if (Ir(r))
        return Ft(r, t);
} throw Er(r); }
function U(r, t) { return t ? Ct(r, t) : x(r); }
function Fr(r) { return r && y(r.schedule); }
function $r(r) { return r[r.length - 1]; }
function D(r) { return y($r(r)) ? r.pop() : void 0; }
function j(r) { return Fr($r(r)) ? r.pop() : void 0; }
function jt(r, t) { return typeof $r(r) == "number" ? r.pop() : t; }
function Cr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = j(r); return U(r, e); }
import { __extends as Ne } from "tslib";
import { __extends as Ue } from "tslib";
var Rt = (function (r) { Ue(t, r); function t(e, n) { return r.call(this) || this; } return t.prototype.schedule = function (e, n) { return n === void 0 && (n = 0), this; }, t; })(F);
import { __read as Pt, __spreadArray as kt } from "tslib";
var pr = { setInterval: function (r, t) { for (var e = [], n = 2; n < arguments.length; n++)
        e[n - 2] = arguments[n]; var o = pr.delegate; return o?.setInterval ? o.setInterval.apply(o, kt([r, t], Pt(e))) : setInterval.apply(void 0, kt([r, t], Pt(e))); }, clearInterval: function (r) { var t = pr.delegate; return (t?.clearInterval || clearInterval)(r); }, delegate: void 0 };
var Mt = (function (r) { Ne(t, r); function t(e, n) { var o = r.call(this, e, n) || this; return o.scheduler = e, o.work = n, o.pending = !1, o; } return t.prototype.schedule = function (e, n) { var o; if (n === void 0 && (n = 0), this.closed)
    return this; this.state = e; var i = this.id, u = this.scheduler; return i != null && (this.id = this.recycleAsyncId(u, i, n)), this.pending = !0, this.delay = n, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(u, this.id, n), this; }, t.prototype.requestAsyncId = function (e, n, o) { return o === void 0 && (o = 0), pr.setInterval(e.flush.bind(e, this), o); }, t.prototype.recycleAsyncId = function (e, n, o) { if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
    return n; n != null && pr.clearInterval(n); }, t.prototype.execute = function (e, n) { if (this.closed)
    return new Error("executing a cancelled action"); this.pending = !1; var o = this._execute(e, n); if (o)
    return o; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }, t.prototype._execute = function (e, n) { var o = !1, i; try {
    this.work(e);
}
catch (u) {
    o = !0, i = u || new Error("Scheduled action threw falsy error");
} if (o)
    return this.unsubscribe(), i; }, t.prototype.unsubscribe = function () { if (!this.closed) {
    var e = this, n = e.id, o = e.scheduler, i = o.actions;
    this.work = this.state = this.scheduler = null, this.pending = !1, C(i, this), n != null && (this.id = this.recycleAsyncId(o, n, null)), this.delay = null, r.prototype.unsubscribe.call(this);
} }, t; })(Rt);
import { __extends as We } from "tslib";
var Br = (function () { function r(t, e) { e === void 0 && (e = r.now), this.schedulerActionCtor = t, this.now = e; } return r.prototype.schedule = function (t, e, n) { return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(n, e); }, r.now = B.now, r; })();
var Vt = (function (r) { We(t, r); function t(e, n) { n === void 0 && (n = Br.now); var o = r.call(this, e, n) || this; return o.actions = [], o._active = !1, o; } return t.prototype.flush = function (e) { var n = this.actions; if (this._active) {
    n.push(e);
    return;
} var o; this._active = !0; do
    if (o = e.execute(e.state, e.delay))
        break;
while (e = n.shift()); if (this._active = !1, o) {
    for (; e = n.shift();)
        e.unsubscribe();
    throw o;
} }, t; })(Br);
var T = new Vt(Mt), jr = T;
function er(r) { return r instanceof Date && !isNaN(r); }
var De = k(function (r) { return function (e) { e === void 0 && (e = null), r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = e; }; });
function Lt(r, t) { var e = er(r) ? { first: r } : typeof r == "number" ? { each: r } : r, n = e.first, o = e.each, i = e.with, u = i === void 0 ? Ye : i, f = e.scheduler, a = f === void 0 ? t ?? T : f, m = e.meta, l = m === void 0 ? null : m; if (n == null && o == null)
    throw new TypeError("No timeout provided."); return c(function (s, v) { var S, d, b = null, h = 0, g = function (_) { d = I(v, a, function () { try {
    S.unsubscribe(), x(u({ meta: l, lastValue: b, seen: h })).subscribe(v);
}
catch (P) {
    v.error(P);
} }, _); }; S = s.subscribe(p(v, function (_) { d?.unsubscribe(), h++, v.next(b = _), o > 0 && g(o); }, void 0, void 0, function () { d?.closed || d?.unsubscribe(), b = null; })), !h && g(n != null ? typeof n == "number" ? n : +n - a.now() : o); }); }
function Ye(r) { throw new De(r); }
function M(r, t) { return c(function (e, n) { var o = 0; e.subscribe(p(n, function (i) { n.next(r.call(t, i, o++)); })); }); }
var qe = Array.isArray, ze = Object.getPrototypeOf, Ge = Object.prototype, Ke = Object.keys;
function Ut(r) { if (r.length === 1) {
    var t = r[0];
    if (qe(t))
        return { args: t, keys: null };
    if (Ze(t)) {
        var e = Ke(t);
        return { args: e.map(function (n) { return t[n]; }), keys: e };
    }
} return { args: r, keys: null }; }
function Ze(r) { return r && typeof r == "object" && ze(r) === Ge; }
import { __read as $e, __spreadArray as Be } from "tslib";
var Je = Array.isArray;
function Xe(r, t) { return Je(t) ? r.apply(void 0, Be([], $e(t))) : r(t); }
function nr(r) { return M(function (t) { return Xe(r, t); }); }
function Nt(r, t) { return r.reduce(function (e, n, o) { return e[n] = t[o], e; }, {}); }
function Dt() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = j(r), n = D(r), o = Ut(r), i = o.args, u = o.keys; if (i.length === 0)
    return U([], e); var f = new w(Jr(i, e, u ? function (a) { return Nt(u, a); } : A)); return n ? f.pipe(nr(n)) : f; }
function Jr(r, t, e) { return e === void 0 && (e = A), function (n) { Wt(t, function () { for (var o = r.length, i = new Array(o), u = o, f = o, a = function (l) { Wt(t, function () { var s = U(r[l], t), v = !1; s.subscribe(p(n, function (S) { i[l] = S, v || (v = !0, f--), f || n.next(e(i.slice())); }, function () { --u || n.complete(); })); }, n); }, m = 0; m < o; m++)
    a(m); }, n); }; }
function Wt(r, t, e) { r ? I(e, r, t) : t(); }
function or(r, t, e, n, o, i, u, f) { var a = [], m = 0, l = 0, s = !1, v = function () { s && !a.length && !m && t.complete(); }, S = function (b) { return m < n ? d(b) : a.push(b); }, d = function (b) { i && t.next(b), m++; var h = !1; x(e(b, l++)).subscribe(p(t, function (g) { o?.(g), i ? S(g) : t.next(g); }, function () { h = !0; }, void 0, function () { if (h)
    try {
        m--;
        for (var g = function () { var _ = a.shift(); u ? I(t, u, function () { return d(_); }) : d(_); }; a.length && m < n;)
            g();
        v();
    }
    catch (_) {
        t.error(_);
    } })); }; return r.subscribe(p(t, S, function () { s = !0, v(); })), function () { f?.(); }; }
function R(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? R(function (n, o) { return M(function (i, u) { return t(n, i, o, u); })(x(r(n, o))); }, e) : (typeof t == "number" && (e = t), c(function (n, o) { return or(n, o, r, e); })); }
function Rr(r) { return r === void 0 && (r = 1 / 0), R(A, r); }
function Pr() { return Rr(1); }
function J() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Pr()(U(r, j(r))); }
function V(r, t, e) { r === void 0 && (r = 0), e === void 0 && (e = jr); var n = -1; return t != null && (Fr(t) ? e = t : n = t), new w(function (o) { var i = er(r) ? +r - e.now() : r; i < 0 && (i = 0); var u = 0; return e.schedule(function () { o.closed || (o.next(u++), 0 <= n ? this.schedule(void 0, n) : o.complete()); }, i); }); }
function Yt(r, t) { return r === void 0 && (r = 0), t === void 0 && (t = T), r < 0 && (r = 0), V(r, r, t); }
function Y(r, t) { return c(function (e, n) { var o = 0; e.subscribe(p(n, function (i) { return r.call(t, i, o++) && n.next(i); })); }); }
function qt(r) { return c(function (t, e) { var n = !1, o = null, i = null, u = !1, f = function () { if (i?.unsubscribe(), i = null, n) {
    n = !1;
    var m = o;
    o = null, e.next(m);
} u && e.complete(); }, a = function () { i = null, u && e.complete(); }; t.subscribe(p(e, function (m) { n = !0, o = m, i || x(r(m)).subscribe(i = p(e, f, a)); }, function () { u = !0, (!n || !i || i.closed) && e.complete(); })); }); }
function ra(r, t) { return t === void 0 && (t = T), qt(function () { return V(r, t); }); }
function ia(r) { return c(function (t, e) { var n = []; return t.subscribe(p(e, function (o) { return n.push(o); }, function () { e.next(n), e.complete(); })), r.subscribe(p(e, function () { var o = n; n = [], e.next(o); }, O)), function () { n = null; }; }); }
import { __values as Xr } from "tslib";
function ma(r, t) { return t === void 0 && (t = null), t = t ?? r, c(function (e, n) { var o = [], i = 0; e.subscribe(p(n, function (u) { var f, a, m, l, s = null; i++ % t === 0 && o.push([]); try {
    for (var v = Xr(o), S = v.next(); !S.done; S = v.next()) {
        var d = S.value;
        d.push(u), r <= d.length && (s = s ?? [], s.push(d));
    }
}
catch (g) {
    f = { error: g };
}
finally {
    try {
        S && !S.done && (a = v.return) && a.call(v);
    }
    finally {
        if (f)
            throw f.error;
    }
} if (s)
    try {
        for (var b = Xr(s), h = b.next(); !h.done; h = b.next()) {
            var d = h.value;
            C(o, d), n.next(d);
        }
    }
    catch (g) {
        m = { error: g };
    }
    finally {
        try {
            h && !h.done && (l = b.return) && l.call(b);
        }
        finally {
            if (m)
                throw m.error;
        }
    } }, function () { var u, f; try {
    for (var a = Xr(o), m = a.next(); !m.done; m = a.next()) {
        var l = m.value;
        n.next(l);
    }
}
catch (s) {
    u = { error: s };
}
finally {
    try {
        m && !m.done && (f = a.return) && f.call(a);
    }
    finally {
        if (u)
            throw u.error;
    }
} n.complete(); }, void 0, function () { o = null; })); }); }
import { __values as He } from "tslib";
function ga(r) { for (var t, e, n = [], o = 1; o < arguments.length; o++)
    n[o - 1] = arguments[o]; var i = (t = j(n)) !== null && t !== void 0 ? t : T, u = (e = n[0]) !== null && e !== void 0 ? e : null, f = n[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (b) { var h = b.buffer, g = b.subs; g.unsubscribe(), C(l, b), m.next(h), s && S(); }, S = function () { if (l) {
    var b = new F;
    m.add(b);
    var h = [], g = { buffer: h, subs: b };
    l.push(g), I(b, i, function () { return v(g); }, r);
} }; u !== null && u >= 0 ? I(m, i, S, u, !0) : s = !0, S(); var d = p(m, function (b) { var h, g, _ = l.slice(); try {
    for (var P = He(_), W = P.next(); !W.done; W = P.next()) {
        var G = W.value, K = G.buffer;
        K.push(b), f <= K.length && v(G);
    }
}
catch (ve) {
    h = { error: ve };
}
finally {
    try {
        W && !W.done && (g = P.return) && g.call(P);
    }
    finally {
        if (h)
            throw h.error;
    }
} }, function () { for (; l?.length;)
    m.next(l.shift().buffer); d?.unsubscribe(), m.complete(), m.unsubscribe(); }, void 0, function () { return l = null; }); a.subscribe(d); }); }
import { __values as Qe } from "tslib";
function Ca(r, t) { return c(function (e, n) { var o = []; x(r).subscribe(p(n, function (i) { var u = []; o.push(u); var f = new F, a = function () { C(o, u), n.next(u), f.unsubscribe(); }; f.add(x(t(i)).subscribe(p(n, a, O))); }, O)), e.subscribe(p(n, function (i) { var u, f; try {
    for (var a = Qe(o), m = a.next(); !m.done; m = a.next()) {
        var l = m.value;
        l.push(i);
    }
}
catch (s) {
    u = { error: s };
}
finally {
    try {
        m && !m.done && (f = a.return) && f.call(a);
    }
    finally {
        if (u)
            throw u.error;
    }
} }, function () { for (; o.length > 0;)
    n.next(o.shift()); n.complete(); })); }); }
function Va(r) { return c(function (t, e) { var n = null, o = null, i = function () { o?.unsubscribe(); var u = n; n = [], u && e.next(u), x(r()).subscribe(o = p(e, i, O)); }; i(), t.subscribe(p(e, function (u) { return n?.push(u); }, function () { n && e.next(n), e.complete(); }, void 0, function () { return n = o = null; })); }); }
function rn(r) { return c(function (t, e) { var n = null, o = !1, i; n = t.subscribe(p(e, void 0, void 0, function (u) { i = x(r(u, rn(r)(t))), n ? (n.unsubscribe(), n = null, i.subscribe(e)) : o = !0; })), o && (n.unsubscribe(), n = null, i.subscribe(e)); }); }
function kr(r, t, e, n, o) { return function (i, u) { var f = e, a = t, m = 0; i.subscribe(p(u, function (l) { var s = m++; a = f ? r(a, l, s) : (f = !0, l), n && u.next(a); }, o && function () { f && u.next(a), u.complete(); })); }; }
function q(r, t) { return c(kr(r, t, arguments.length >= 2, !1, !0)); }
var tn = function (r, t) { return r.push(t), r; };
function zt() { return c(function (r, t) { q(tn, [])(r).subscribe(t); }); }
function Mr(r, t) { return dr(zt(), R(function (e) { return r(e); }), t ? nr(t) : A); }
function Gt(r) { return Mr(Dt, r); }
var uc = Gt;
import { __read as Kt, __spreadArray as Zt } from "tslib";
var en = Array.isArray;
function ir(r) { return r.length === 1 && en(r[0]) ? r[0] : r; }
function Hr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = D(r); return e ? dr(Hr.apply(void 0, Zt([], Kt(r))), nr(e)) : c(function (n, o) { Jr(Zt([n], Kt(ir(r))))(o); }); }
import { __read as nn, __spreadArray as on } from "tslib";
function xc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Hr.apply(void 0, on([], nn(r))); }
function Qr(r, t) { return y(t) ? R(r, t, 1) : R(r, 1); }
function _c(r, t) { return y(t) ? Qr(function () { return r; }, t) : Qr(function () { return r; }); }
import { __read as un, __spreadArray as fn } from "tslib";
function $t() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = j(r); return c(function (n, o) { Pr()(U(fn([n], un(r)), e)).subscribe(o); }); }
import { __read as an, __spreadArray as cn } from "tslib";
function Vc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return $t.apply(void 0, cn([], an(r))); }
function Bt(r) { return new w(function (t) { return r.subscribe(t); }); }
var pn = { connector: function () { return new E; } };
function Vr(r, t) { t === void 0 && (t = pn); var e = t.connector; return c(function (n, o) { var i = e(); x(r(Bt(i))).subscribe(o), o.add(n.subscribe(i)); }); }
function Kc(r) { return q(function (t, e, n) { return !r || r(e, n) ? t + 1 : t; }, 0); }
function Hc(r) { return c(function (t, e) { var n = !1, o = null, i = null, u = function () { if (i?.unsubscribe(), i = null, n) {
    n = !1;
    var f = o;
    o = null, e.next(f);
} }; t.subscribe(p(e, function (f) { i?.unsubscribe(), n = !0, o = f, i = p(e, u, O), x(r(f)).subscribe(i); }, function () { u(), e.complete(); }, void 0, function () { o = i = null; })); }); }
function np(r, t) { return t === void 0 && (t = T), c(function (e, n) { var o = null, i = null, u = null, f = function () { if (o) {
    o.unsubscribe(), o = null;
    var m = i;
    i = null, n.next(m);
} }; function a() { var m = u + r, l = t.now(); if (l < m) {
    o = this.schedule(void 0, m - l), n.add(o);
    return;
} f(); } e.subscribe(p(n, function (m) { i = m, u = t.now(), o || (o = t.schedule(a, r), n.add(o)); }, function () { f(), n.complete(); }, void 0, function () { i = o = null; })); }); }
function ur(r) { return c(function (t, e) { var n = !1; t.subscribe(p(e, function (o) { n = !0, e.next(o); }, function () { n || e.next(r), e.complete(); })); }); }
function X(r) { return r <= 0 ? function () { return N; } : c(function (t, e) { var n = 0; t.subscribe(p(e, function (o) { ++n <= r && (e.next(o), r <= n && e.complete()); })); }); }
function Jt() { return c(function (r, t) { r.subscribe(p(t, O)); }); }
function Xt(r) { return M(function () { return r; }); }
function rt(r, t) { return t ? function (e) { return J(t.pipe(X(1), Jt()), e.pipe(rt(r))); } : R(function (e, n) { return r(e, n).pipe(X(1), Xt(e)); }); }
function Ip(r, t) { t === void 0 && (t = T); var e = V(r, t); return rt(function () { return e; }); }
function Ht(r, t) { var e = y(r) ? r : function () { return r; }, n = function (o) { return o.error(e()); }; return new w(t ? function (o) { return t.schedule(n, 0, o); } : n); }
var Lr = (function () { function r(t, e, n) { this.kind = t, this.value = e, this.error = n, this.hasValue = t === "N"; } return r.prototype.observe = function (t) { return tt(this, t); }, r.prototype.do = function (t, e, n) { var o = this, i = o.kind, u = o.value, f = o.error; return i === "N" ? t?.(u) : i === "E" ? e?.(f) : n?.(); }, r.prototype.accept = function (t, e, n) { var o; return y((o = t) === null || o === void 0 ? void 0 : o.next) ? this.observe(t) : this.do(t, e, n); }, r.prototype.toObservable = function () { var t = this, e = t.kind, n = t.value, o = t.error, i = e === "N" ? Cr(n) : e === "E" ? Ht(function () { return o; }) : e === "C" ? N : 0; if (!i)
    throw new TypeError("Unexpected notification kind " + e); return i; }, r.createNext = function (t) { return new r("N", t); }, r.createError = function (t) { return new r("E", void 0, t); }, r.createComplete = function () { return r.completeNotification; }, r.completeNotification = new r("C"), r; })();
function tt(r, t) { var e, n, o, i = r, u = i.kind, f = i.value, a = i.error; if (typeof u != "string")
    throw new TypeError('Invalid notification, missing "kind"'); u === "N" ? (e = t.next) === null || e === void 0 || e.call(t, f) : u === "E" ? (n = t.error) === null || n === void 0 || n.call(t, a) : (o = t.complete) === null || o === void 0 || o.call(t); }
function Wp() { return c(function (r, t) { r.subscribe(p(t, function (e) { return tt(e, t); })); }); }
function Gp(r, t) { return c(function (e, n) { var o = new Set; e.subscribe(p(n, function (i) { var u = r ? r(i) : i; o.has(u) || (o.add(u), n.next(i)); })), t?.subscribe(p(n, function () { return o.clear(); }, O)); }); }
function Qt(r, t) { return t === void 0 && (t = A), r = r ?? mn, c(function (e, n) { var o, i = !0; e.subscribe(p(n, function (u) { var f = t(u); (i || !r(o, f)) && (i = !1, o = f, n.next(u)); })); }); }
function mn(r, t) { return r === t; }
function Hp(r, t) { return Qt(function (e, n) { return t ? t(e[r], n[r]) : e[r] === n[r]; }); }
var z = k(function (r) { return function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; }; });
function fr(r) { return r === void 0 && (r = ln), c(function (t, e) { var n = !1; t.subscribe(p(e, function (o) { n = !0, e.next(o); }, function () { return n ? e.complete() : e.error(r()); })); }); }
function ln() { return new z; }
var et = k(function (r) { return function () { r(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; }; });
function sm(r, t) { if (r < 0)
    throw new et; var e = arguments.length >= 2; return function (n) { return n.pipe(Y(function (o, i) { return i === r; }), X(1), e ? ur(t) : fr(function () { return new et; })); }; }
import { __read as sn, __spreadArray as vn } from "tslib";
function ym() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return function (e) { return J(e, Cr.apply(void 0, vn([], sn(r)))); }; }
function wm(r, t) { return c(function (e, n) { var o = 0; e.subscribe(p(n, function (i) { r.call(t, i, o++, e) || (n.next(!1), n.complete()); }, function () { n.next(!0), n.complete(); })); }); }
function nt(r, t) { return t ? function (e) { return e.pipe(nt(function (n, o) { return x(r(n, o)).pipe(M(function (i, u) { return t(n, i, o, u); })); })); } : c(function (e, n) { var o = 0, i = null, u = !1; e.subscribe(p(n, function (f) { i || (i = p(n, void 0, function () { i = null, u && n.complete(); }), x(r(f, o++)).subscribe(i)); }, function () { u = !0, !i && n.complete(); })); }); }
function re() { return nt(A); }
var Pm = re;
function Lm(r, t, e) { return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, c(function (n, o) { return or(n, o, r, t, void 0, !0, e); }); }
function Wm(r) { return c(function (t, e) { try {
    t.subscribe(e);
}
finally {
    e.add(r);
} }); }
function zm(r, t) { return c(ot(r, t, "value")); }
function ot(r, t, e) { var n = e === "index"; return function (o, i) { var u = 0; o.subscribe(p(i, function (f) { var a = u++; r.call(t, f, a, o) && (i.next(n ? a : f), i.complete()); }, function () { i.next(n ? -1 : void 0), i.complete(); })); }; }
function $m(r, t) { return c(ot(r, t, "index")); }
function el(r, t) { var e = arguments.length >= 2; return function (n) { return n.pipe(r ? Y(function (o, i) { return r(o, i, n); }) : A, X(1), e ? ur(t) : fr(function () { return new z; })); }; }
function cl(r, t, e, n) { return c(function (o, i) { var u; !t || typeof t == "function" ? u = t : (e = t.duration, u = t.element, n = t.connector); var f = new Map, a = function (d) { f.forEach(d), d(i); }, m = function (d) { return a(function (b) { return b.error(d); }); }, l = 0, s = !1, v = new Kr(i, function (d) { try {
    var b = r(d), h = f.get(b);
    if (!h) {
        f.set(b, h = n ? n() : new E);
        var g = S(b, h);
        if (i.next(g), e) {
            var _ = p(h, function () { h.complete(), _?.unsubscribe(); }, void 0, void 0, function () { return f.delete(b); });
            v.add(x(e(g)).subscribe(_));
        }
    }
    h.next(u ? u(d) : d);
}
catch (P) {
    m(P);
} }, function () { return a(function (d) { return d.complete(); }); }, m, function () { return f.clear(); }, function () { return s = !0, l === 0; }); o.subscribe(v); function S(d, b) { var h = new w(function (g) { l++; var _ = b.subscribe(g); return function () { _.unsubscribe(), --l === 0 && s && v.unsubscribe(); }; }); return h.key = d, h; } }); }
function sl() { return c(function (r, t) { r.subscribe(p(t, function () { t.next(!1), t.complete(); }, function () { t.next(!0), t.complete(); })); }); }
import { __values as dn } from "tslib";
function te(r) { return r <= 0 ? function () { return N; } : c(function (t, e) { var n = []; t.subscribe(p(e, function (o) { n.push(o), r < n.length && n.shift(); }, function () { var o, i; try {
    for (var u = dn(n), f = u.next(); !f.done; f = u.next()) {
        var a = f.value;
        e.next(a);
    }
}
catch (m) {
    o = { error: m };
}
finally {
    try {
        f && !f.done && (i = u.return) && i.call(u);
    }
    finally {
        if (o)
            throw o.error;
    }
} e.complete(); }, void 0, function () { n = null; })); }); }
function _l(r, t) { var e = arguments.length >= 2; return function (n) { return n.pipe(r ? Y(function (o, i) { return r(o, i, n); }) : A, te(1), e ? ur(t) : fr(function () { return new z; })); }; }
function jl() { return c(function (r, t) { r.subscribe(p(t, function (e) { t.next(Lr.createNext(e)); }, function () { t.next(Lr.createComplete()), t.complete(); }, function (e) { t.next(Lr.createError(e)), t.complete(); })); }); }
function Ml(r) { return q(y(r) ? function (t, e) { return r(t, e) > 0 ? t : e; } : function (t, e) { return t > e ? t : e; }); }
var Ul = R;
function Yl(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? R(function () { return r; }, t, e) : (typeof t == "number" && (e = t), R(function () { return r; }, e)); }
function Kl(r, t, e) { return e === void 0 && (e = 1 / 0), c(function (n, o) { var i = t; return or(n, o, function (u, f) { return r(i, u, f); }, e, function (u) { i = u; }, !1, void 0, function () { return i = null; }); }); }
import { __read as hn, __spreadArray as bn } from "tslib";
function ee() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = j(r), n = jt(r, 1 / 0); return r = ir(r), c(function (o, i) { Rr(n)(U(bn([o], hn(r)), e)).subscribe(i); }); }
import { __read as yn, __spreadArray as xn } from "tslib";
function ns() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return ee.apply(void 0, xn([], yn(r))); }
function fs(r) { return q(y(r) ? function (t, e) { return r(t, e) < 0 ? t : e; } : function (t, e) { return t < e ? t : e; }); }
import { __extends as Sn } from "tslib";
var ar = (function (r) { Sn(t, r); function t(e, n) { var o = r.call(this) || this; return o.source = e, o.subjectFactory = n, o._subject = null, o._refCount = 0, o._connection = null, Gr(e) && (o.lift = e.lift), o; } return t.prototype._subscribe = function (e) { return this.getSubject().subscribe(e); }, t.prototype.getSubject = function () { var e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }, t.prototype._teardown = function () { this._refCount = 0; var e = this._connection; this._subject = this._connection = null, e?.unsubscribe(); }, t.prototype.connect = function () { var e = this, n = this._connection; if (!n) {
    n = this._connection = new F;
    var o = this.getSubject();
    n.add(this.source.subscribe(p(o, void 0, function () { e._teardown(), o.complete(); }, function (i) { e._teardown(), o.error(i); }, function () { return e._teardown(); }))), n.closed && (this._connection = null, n = F.EMPTY);
} return n; }, t.prototype.refCount = function () { return xt()(this); }, t; })(w);
function Ur(r, t) { var e = y(r) ? r : function () { return r; }; return y(t) ? Vr(t, { connector: e }) : function (n) { return new ar(n, e); }; }
function ws() { return c(function (r, t) { var e, n = !1; r.subscribe(p(t, function (o) { var i = e; e = o, n && t.next([i, o]), n = !0; })); }); }
function As() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = r.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return M(function (n) { for (var o = n, i = 0; i < e; i++) {
    var u = o?.[r[i]];
    if (typeof u < "u")
        o = u;
    else
        return;
} return o; }); }
function Cs(r) { return r ? function (t) { return Vr(r)(t); } : function (t) { return Ur(new E)(t); }; }
function ks(r) { return function (t) { var e = new Et(r); return new ar(t, function () { return e; }); }; }
import { __extends as gn } from "tslib";
var ne = (function (r) { gn(t, r); function t() { var e = r !== null && r.apply(this, arguments) || this; return e._value = null, e._hasValue = !1, e._isComplete = !1, e; } return t.prototype._checkFinalizedStatuses = function (e) { var n = this, o = n.hasError, i = n._hasValue, u = n._value, f = n.thrownError, a = n.isStopped, m = n._isComplete; o ? e.error(f) : (a || m) && (i && e.next(u), e.complete()); }, t.prototype.next = function (e) { this.isStopped || (this._value = e, this._hasValue = !0); }, t.prototype.complete = function () { var e = this, n = e._hasValue, o = e._value, i = e._isComplete; i || (this._isComplete = !0, n && r.prototype.next.call(this, o), r.prototype.complete.call(this)); }, t; })(E);
function Ds() { return function (r) { var t = new ne; return new ar(r, function () { return t; }); }; }
function Ks(r, t, e, n) { e && !y(e) && (n = e); var o = y(e) ? e : void 0; return function (i) { return Ur(new hr(r, t, n), o)(i); }; }
import { __read as wn, __spreadArray as En } from "tslib";
function oe(r) { return function (t) { for (var e = [], n = function (i) { e.push(x(r[i]).subscribe(p(t, function (u) { if (e) {
    for (var f = 0; f < e.length; f++)
        f !== i && e[f].unsubscribe();
    e = null;
} t.next(u); }))); }, o = 0; e && !t.closed && o < r.length; o++)
    n(o); }; }
function tv() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return r.length ? c(function (e, n) { oe(En([e], wn(r)))(n); }) : A; }
function av(r) { var t, e = 1 / 0, n; return r != null && (typeof r == "object" ? (t = r.count, e = t === void 0 ? 1 / 0 : t, n = r.delay) : e = r), e <= 0 ? function () { return N; } : c(function (o, i) { var u = 0, f, a = function () { if (f?.unsubscribe(), f = null, n != null) {
    var l = typeof n == "number" ? V(n) : x(n(u)), s = p(i, function () { s.unsubscribe(), m(); });
    l.subscribe(s);
}
else
    m(); }, m = function () { var l = !1; f = o.subscribe(p(i, void 0, function () { ++u < e ? f ? a() : l = !0 : i.complete(); })), l && a(); }; m(); }); }
function sv(r) { return c(function (t, e) { var n, o = !1, i, u = !1, f = !1, a = function () { return f && u && (e.complete(), !0); }, m = function () { return i || (i = new E, r(i).subscribe(p(e, function () { n ? l() : o = !0; }, function () { u = !0, a(); }))), i; }, l = function () { f = !1, n = t.subscribe(p(e, void 0, function () { f = !0, !a() && m().next(); })), o && (n.unsubscribe(), n = null, o = !1, l()); }; l(); }); }
function Sv(r) { r === void 0 && (r = 1 / 0); var t; r && typeof r == "object" ? t = r : t = { count: r }; var e = t.count, n = e === void 0 ? 1 / 0 : e, o = t.delay, i = t.resetOnSuccess, u = i === void 0 ? !1 : i; return n <= 0 ? A : c(function (f, a) { var m = 0, l, s = function () { var v = !1; l = f.subscribe(p(a, function (S) { u && (m = 0), a.next(S); }, void 0, function (S) { if (m++ < n) {
    var d = function () { l ? (l.unsubscribe(), l = null, s()) : v = !0; };
    if (o != null) {
        var b = typeof o == "number" ? V(o) : x(o(S, m)), h = p(a, function () { h.unsubscribe(), d(); }, function () { a.complete(); });
        b.subscribe(h);
    }
    else
        d();
}
else
    a.error(S); })), v && (l.unsubscribe(), l = null, s()); }; s(); }); }
function Av(r) { return c(function (t, e) { var n, o = !1, i, u = function () { n = t.subscribe(p(e, void 0, void 0, function (f) { i || (i = new E, r(i).subscribe(p(e, function () { return n ? u() : o = !0; }))), i && i.next(f); })), o && (n.unsubscribe(), n = null, o = !1, u()); }; u(); }); }
function ie(r) { return c(function (t, e) { var n = !1, o = null; t.subscribe(p(e, function (i) { n = !0, o = i; })), r.subscribe(p(e, function () { if (n) {
    n = !1;
    var i = o;
    o = null, e.next(i);
} }, O)); }); }
function kv(r, t) { return t === void 0 && (t = T), ie(Yt(r, t)); }
function Uv(r, t) { return c(kr(r, t, arguments.length >= 2, !0)); }
function Yv(r, t) { return t === void 0 && (t = function (e, n) { return e === n; }), c(function (e, n) { var o = ue(), i = ue(), u = function (a) { n.next(a), n.complete(); }, f = function (a, m) { var l = p(n, function (s) { var v = m.buffer, S = m.complete; v.length === 0 ? S ? u(!1) : a.buffer.push(s) : !t(s, v.shift()) && u(!1); }, function () { a.complete = !0; var s = m.complete, v = m.buffer; s && u(v.length === 0), l?.unsubscribe(); }); return l; }; e.subscribe(f(o, i)), r.subscribe(f(i, o)); }); }
function ue() { return { buffer: [], complete: !1 }; }
import { __read as On, __spreadArray as An } from "tslib";
function fe(r) { r === void 0 && (r = {}); var t = r.connector, e = t === void 0 ? function () { return new E; } : t, n = r.resetOnError, o = n === void 0 ? !0 : n, i = r.resetOnComplete, u = i === void 0 ? !0 : i, f = r.resetOnRefCountZero, a = f === void 0 ? !0 : f; return function (m) { var l, s, v, S = 0, d = !1, b = !1, h = function () { s?.unsubscribe(), s = void 0; }, g = function () { h(), l = v = void 0, d = b = !1; }, _ = function () { var P = l; g(), P?.unsubscribe(); }; return c(function (P, W) { S++, !b && !d && h(); var G = v = v ?? e(); W.add(function () { S--, S === 0 && !b && !d && (s = it(_, a)); }), G.subscribe(W), !l && S > 0 && (l = new $({ next: function (K) { return G.next(K); }, error: function (K) { b = !0, h(), s = it(g, o, K), G.error(K); }, complete: function () { d = !0, h(), s = it(g, u), G.complete(); } }), x(P).subscribe(l)); })(m); }; }
function it(r, t) { for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n]; if (t === !0) {
    r();
    return;
} if (t !== !1) {
    var o = new $({ next: function () { o.unsubscribe(), r(); } });
    return t.apply(void 0, An([], On(e))).subscribe(o);
} }
function Hv(r, t, e) { var n, o, i, u, f = !1; return r && typeof r == "object" ? (n = r.bufferSize, u = n === void 0 ? 1 / 0 : n, o = r.windowTime, t = o === void 0 ? 1 / 0 : o, i = r.refCount, f = i === void 0 ? !1 : i, e = r.scheduler) : u = r ?? 1 / 0, fe({ connector: function () { return new hr(u, t, e); }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: f }); }
var ae = k(function (r) { return function (e) { r(this), this.name = "SequenceError", this.message = e; }; });
var ce = k(function (r) { return function (e) { r(this), this.name = "NotFoundError", this.message = e; }; });
function cd(r) { return c(function (t, e) { var n = !1, o, i = !1, u = 0; t.subscribe(p(e, function (f) { i = !0, (!r || r(f, u++, t)) && (n && e.error(new ae("Too many matching values")), n = !0, o = f); }, function () { n ? (e.next(o), e.complete()) : e.error(i ? new ce("No matching values") : new z); })); }); }
function ld(r) { return Y(function (t, e) { return r <= e; }); }
function bd(r) { return r <= 0 ? A : c(function (t, e) { var n = new Array(r), o = 0; return t.subscribe(p(e, function (i) { var u = o++; if (u < r)
    n[u] = i;
else {
    var f = u % r, a = n[f];
    n[f] = i, e.next(a);
} })), function () { n = null; }; }); }
function Ed(r) { return c(function (t, e) { var n = !1, o = p(e, function () { o?.unsubscribe(), n = !0; }, O); x(r).subscribe(o), t.subscribe(p(e, function (i) { return n && e.next(i); })); }); }
function Id(r) { return c(function (t, e) { var n = !1, o = 0; t.subscribe(p(e, function (i) { return (n || (n = !r(i, o++))) && e.next(i); })); }); }
function Rd() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = j(r); return c(function (n, o) { (e ? J(r, n, e) : J(r, n)).subscribe(o); }); }
function H(r, t) { return c(function (e, n) { var o = null, i = 0, u = !1, f = function () { return u && !o && n.complete(); }; e.subscribe(p(n, function (a) { o?.unsubscribe(); var m = 0, l = i++; x(r(a, l)).subscribe(o = p(n, function (s) { return n.next(t ? t(a, s, l, m++) : s); }, function () { o = null, f(); })); }, function () { u = !0, f(); })); }); }
function Wd() { return H(A); }
function zd(r, t) { return y(t) ? H(function () { return r; }, t) : H(function () { return r; }); }
function $d(r, t) { return c(function (e, n) { var o = t; return H(function (i, u) { return r(o, i, u); }, function (i, u) { return o = u, u; })(e).subscribe(n), function () { o = null; }; }); }
function rh(r) { return c(function (t, e) { x(r).subscribe(p(e, function () { return e.complete(); }, O)), !e.closed && t.subscribe(e); }); }
function oh(r, t) { return t === void 0 && (t = !1), c(function (e, n) { var o = 0; e.subscribe(p(n, function (i) { var u = r(i, o++); (u || t) && n.next(i), !u && n.complete(); })); }); }
function ph(r, t, e) { var n = y(r) || t || e ? { next: r, error: t, complete: e } : r; return n ? c(function (o, i) { var u; (u = n.subscribe) === null || u === void 0 || u.call(n); var f = !0; o.subscribe(p(i, function (a) { var m; (m = n.next) === null || m === void 0 || m.call(n, a), i.next(a); }, function () { var a; f = !1, (a = n.complete) === null || a === void 0 || a.call(n), i.complete(); }, function (a) { var m; f = !1, (m = n.error) === null || m === void 0 || m.call(n, a), i.error(a); }, function () { var a, m; f && ((a = n.unsubscribe) === null || a === void 0 || a.call(n)), (m = n.finalize) === null || m === void 0 || m.call(n); })); }) : A; }
var ut = { leading: !0, trailing: !1 };
function pe(r, t) { return t === void 0 && (t = ut), c(function (e, n) { var o = t.leading, i = t.trailing, u = !1, f = null, a = null, m = !1, l = function () { a?.unsubscribe(), a = null, i && (S(), m && n.complete()); }, s = function () { a = null, m && n.complete(); }, v = function (d) { return a = x(r(d)).subscribe(p(n, l, s)); }, S = function () { if (u) {
    u = !1;
    var d = f;
    f = null, n.next(d), !m && v(d);
} }; e.subscribe(p(n, function (d) { u = !0, f = d, !(a && !a.closed) && (o ? S() : v(d)); }, function () { m = !0, !(i && u && a && !a.closed) && n.complete(); })); }); }
function xh(r, t, e) { t === void 0 && (t = T), e === void 0 && (e = ut); var n = V(r, t); return pe(function () { return n; }, e); }
function Oh(r) { return r === void 0 && (r = T), c(function (t, e) { var n = r.now(); t.subscribe(p(e, function (o) { var i = r.now(), u = i - n; n = i, e.next(new _n(o, u)); })); }); }
var _n = (function () { function r(t, e) { this.value = t, this.interval = e; } return r; })();
function Fh(r, t, e) { var n, o, i; if (e = e ?? jr, er(r) ? n = r : typeof r == "number" && (o = r), t)
    i = function () { return t; };
else
    throw new TypeError("No observable provided to switch to"); if (n == null && o == null)
    throw new TypeError("No timeout provided."); return Lt({ first: n, each: o, scheduler: e, with: i }); }
function Ph(r) { return r === void 0 && (r = B), M(function (t) { return { value: t, timestamp: r.now() }; }); }
function Nh(r) { return c(function (t, e) { var n = new E; e.next(n.asObservable()); var o = function (i) { n.error(i), e.error(i); }; return t.subscribe(p(e, function (i) { return n?.next(i); }, function () { n.complete(), e.complete(); }, o)), r.subscribe(p(e, function () { n.complete(), e.next(n = new E); }, O, o)), function () { n?.unsubscribe(), n = null; }; }); }
import { __values as In } from "tslib";
function Gh(r, t) { t === void 0 && (t = 0); var e = t > 0 ? t : r; return c(function (n, o) { var i = [new E], u = [], f = 0; o.next(i[0].asObservable()), n.subscribe(p(o, function (a) { var m, l; try {
    for (var s = In(i), v = s.next(); !v.done; v = s.next()) {
        var S = v.value;
        S.next(a);
    }
}
catch (h) {
    m = { error: h };
}
finally {
    try {
        v && !v.done && (l = s.return) && l.call(s);
    }
    finally {
        if (m)
            throw m.error;
    }
} var d = f - r + 1; if (d >= 0 && d % e === 0 && i.shift().complete(), ++f % e === 0) {
    var b = new E;
    i.push(b), o.next(b.asObservable());
} }, function () { for (; i.length > 0;)
    i.shift().complete(); o.complete(); }, function (a) { for (; i.length > 0;)
    i.shift().error(a); o.error(a); }, function () { u = null, i = null; })); }); }
function tb(r) { for (var t, e, n = [], o = 1; o < arguments.length; o++)
    n[o - 1] = arguments[o]; var i = (t = j(n)) !== null && t !== void 0 ? t : T, u = (e = n[0]) !== null && e !== void 0 ? e : null, f = n[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (h) { var g = h.window, _ = h.subs; g.complete(), _.unsubscribe(), C(l, h), s && S(); }, S = function () { if (l) {
    var h = new F;
    m.add(h);
    var g = new E, _ = { window: g, subs: h, seen: 0 };
    l.push(_), m.next(g.asObservable()), I(h, i, function () { return v(_); }, r);
} }; u !== null && u >= 0 ? I(m, i, S, u, !0) : s = !0, S(); var d = function (h) { return l.slice().forEach(h); }, b = function (h) { d(function (g) { var _ = g.window; return h(_); }), h(m), m.unsubscribe(); }; return a.subscribe(p(m, function (h) { d(function (g) { g.window.next(h), f <= ++g.seen && v(g); }); }, function () { return b(function (h) { return h.complete(); }); }, function (h) { return b(function (g) { return g.error(h); }); })), function () { l = null; }; }); }
import { __values as Tn } from "tslib";
function mb(r, t) { return c(function (e, n) { var o = [], i = function (u) { for (; 0 < o.length;)
    o.shift().error(u); n.error(u); }; x(r).subscribe(p(n, function (u) { var f = new E; o.push(f); var a = new F, m = function () { C(o, f), f.complete(), a.unsubscribe(); }, l; try {
    l = x(t(u));
}
catch (s) {
    i(s);
    return;
} n.next(f.asObservable()), a.add(l.subscribe(p(n, m, O, i))); }, O)), e.subscribe(p(n, function (u) { var f, a, m = o.slice(); try {
    for (var l = Tn(m), s = l.next(); !s.done; s = l.next()) {
        var v = s.value;
        v.next(u);
    }
}
catch (S) {
    f = { error: S };
}
finally {
    try {
        s && !s.done && (a = l.return) && a.call(l);
    }
    finally {
        if (f)
            throw f.error;
    }
} }, function () { for (; 0 < o.length;)
    o.shift().complete(); n.complete(); }, i, function () { for (; 0 < o.length;)
    o.shift().unsubscribe(); })); }); }
function bb(r) { return c(function (t, e) { var n, o, i = function (f) { n.error(f), e.error(f); }, u = function () { o?.unsubscribe(), n?.complete(), n = new E, e.next(n.asObservable()); var f; try {
    f = x(r());
}
catch (a) {
    i(a);
    return;
} f.subscribe(o = p(e, u, u, i)); }; u(), t.subscribe(p(e, function (f) { return n.next(f); }, function () { n.complete(), e.complete(); }, i, function () { o?.unsubscribe(), n = null; })); }); }
import { __read as me, __spreadArray as le } from "tslib";
function _b() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = D(r); return c(function (n, o) { for (var i = r.length, u = new Array(i), f = r.map(function () { return !1; }), a = !1, m = function (s) { x(r[s]).subscribe(p(o, function (v) { u[s] = v, !a && !f[s] && (f[s] = !0, (a = f.every(A)) && (f = null)); }, O)); }, l = 0; l < i; l++)
    m(l); n.subscribe(p(o, function (s) { if (a) {
    var v = le([s], me(u));
    o.next(e ? e.apply(void 0, le([], me(v))) : v);
} })); }); }
import { __read as Fn, __spreadArray as Cn } from "tslib";
function Nr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = D(r), n = ir(r); return n.length ? new w(function (o) { var i = n.map(function () { return []; }), u = n.map(function () { return !1; }); o.add(function () { i = u = null; }); for (var f = function (m) { x(n[m]).subscribe(p(o, function (l) { if (i[m].push(l), i.every(function (v) { return v.length; })) {
    var s = i.map(function (v) { return v.shift(); });
    o.next(e ? e.apply(void 0, Cn([], Fn(s))) : s), i.some(function (v, S) { return !v.length && u[S]; }) && o.complete();
} }, function () { u[m] = !0, !i[m].length && o.complete(); })); }, a = 0; !o.closed && a < n.length; a++)
    f(a); return function () { i = u = null; }; }) : N; }
function Ub(r) { return Mr(Nr, r); }
import { __read as jn, __spreadArray as Rn } from "tslib";
function se() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return c(function (e, n) { Nr.apply(void 0, Rn([e], jn(r))).subscribe(n); }); }
import { __read as Pn, __spreadArray as kn } from "tslib";
function Kb() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return se.apply(void 0, kn([], Pn(r))); }
export { y as a, F as b, O as c, w as d, c as e, p as f, xt as g, ar as h, E as i, Et as j, hr as k, Mt as l, Vt as m, N as n, D as o, j as p, jt as q, xr as r, x as s, br as t, yr as u, U as v, Cr as w, Ht as x, Lt as y, M as z, nr as A, Ut as B, Nt as C, Dt as D, R as E, Rr as F, Pr as G, J as H, V as I, Yt as J, ir as K, Y as L, qt as M, ra as N, ia as O, ma as P, ga as Q, Ca as R, Va as S, rn as T, q as U, zt as V, Gt as W, uc as X, Hr as Y, xc as Z, Qr as _, _c as $, $t as aa, Vc as ba, Vr as ca, Kc as da, Hc as ea, np as fa, ur as ga, X as ha, Jt as ia, Xt as ja, rt as ka, Ip as la, Wp as ma, Gp as na, Qt as oa, Hp as pa, fr as qa, sm as ra, ym as sa, wm as ta, nt as ua, re as va, Pm as wa, Lm as xa, Wm as ya, zm as za, $m as Aa, el as Ba, cl as Ca, sl as Da, te as Ea, _l as Fa, jl as Ga, Ml as Ha, Ul as Ia, Yl as Ja, Kl as Ka, ee as La, ns as Ma, fs as Na, Ur as Oa, ws as Pa, As as Qa, Cs as Ra, ks as Sa, Ds as Ta, Ks as Ua, tv as Va, av as Wa, sv as Xa, Sv as Ya, Av as Za, ie as _a, kv as $a, Uv as ab, Yv as bb, fe as cb, Hv as db, cd as eb, ld as fb, bd as gb, Ed as hb, Id as ib, Rd as jb, H as kb, Wd as lb, zd as mb, $d as nb, rh as ob, oh as pb, ph as qb, pe as rb, xh as sb, Oh as tb, Fh as ub, Ph as vb, Nh as wb, Gh as xb, tb as yb, mb as zb, bb as Ab, _b as Bb, Ub as Cb, se as Db, Kb as Eb };
