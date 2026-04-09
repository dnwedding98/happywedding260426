;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "c3814709-b51f-63b7-750b-0205d1c66783")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 376054, 303069, 463075, 136927, 550475, t => {
    "use strict";

    function e(t, e, i) {
        if (!e.has(t)) throw TypeError("attempted to " + i + " private field on non-instance");
        return e.get(t)
    }

    function i(t, i) {
        var s = e(t, i, "get");
        return s.get ? s.get.call(t) : s.value
    }

    function s(t, e) {
        if (e.has(t)) throw TypeError("Cannot initialize the same private elements twice on an object")
    }

    function n(t, e, i) {
        s(t, e), e.set(t, i)
    }

    function r(t, i, s) {
        var n = e(t, i, "set");
        if (n.set) n.set.call(t, s);
        else {
            if (!n.writable) throw TypeError("attempted to set read only private field");
            n.value = s
        }
        return s
    }
    t.s(["_", () => e], 303069), t.s(["_", () => i], 376054), t.s(["_", () => s], 463075), t.s(["_", () => n], 136927), t.s(["_", () => r], 550475)
}, 457765, t => {
    "use strict";
    var e, i, s = t.i(376054),
        n = t.i(136927),
        r = t.i(550475),
        a = {
            setTimeout: (t, e) => setTimeout(t, e),
            clearTimeout: t => clearTimeout(t),
            setInterval: (t, e) => setInterval(t, e),
            clearInterval: t => clearInterval(t)
        },
        o = new(e = new WeakMap, i = new WeakMap, class {
            setTimeoutProvider(t) {
                (0, r._)(this, e, t)
            }
            setTimeout(t, i) {
                return (0, s._)(this, e).setTimeout(t, i)
            }
            clearTimeout(t) {
                (0, s._)(this, e).clearTimeout(t)
            }
            setInterval(t, i) {
                return (0, s._)(this, e).setInterval(t, i)
            }
            clearInterval(t) {
                (0, s._)(this, e).clearInterval(t)
            }
            constructor() {
                (0, n._)(this, e, {
                    writable: !0,
                    value: a
                }), (0, n._)(this, i, {
                    writable: !0,
                    value: !1
                })
            }
        });

    function l(t) {
        setTimeout(t, 0)
    }
    t.s(["systemSetTimeoutZero", () => l, "timeoutManager", () => o])
}, 879994, t => {
    "use strict";
    var e = t.i(457765),
        i = "undefined" == typeof window || "Deno" in globalThis;

    function s() {}

    function n(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function r(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0
    }

    function a(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0)
    }

    function o(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function l(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function u(t, e) {
        let {
            type: i = "all",
            exact: s,
            fetchStatus: n,
            predicate: r,
            queryKey: a,
            stale: o
        } = t;
        if (a) {
            if (s) {
                if (e.queryHash !== h(a, e.options)) return !1
            } else if (!f(e.queryKey, a)) return !1
        }
        if ("all" !== i) {
            let t = e.isActive();
            if ("active" === i && !t || "inactive" === i && t) return !1
        }
        return ("boolean" != typeof o || e.isStale() === o) && (!n || n === e.state.fetchStatus) && (!r || !!r(e))
    }

    function c(t, e) {
        let {
            exact: i,
            status: s,
            predicate: n,
            mutationKey: r
        } = t;
        if (r) {
            if (!e.options.mutationKey) return !1;
            if (i) {
                if (d(e.options.mutationKey) !== d(r)) return !1
            } else if (!f(e.options.mutationKey, r)) return !1
        }
        return (!s || e.state.status === s) && (!n || !!n(e))
    }

    function h(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || d)(t)
    }

    function d(t) {
        return JSON.stringify(t, (t, e) => b(e) ? Object.keys(e).sort().reduce((t, i) => (t[i] = e[i], t), {}) : e)
    }

    function f(t, e) {
        return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && Object.keys(e).every(i => f(t[i], e[i]))
    }
    var v = Object.prototype.hasOwnProperty;

    function p(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let i in t)
            if (t[i] !== e[i]) return !1;
        return !0
    }

    function y(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length
    }

    function b(t) {
        if (!_(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let i = e.prototype;
        return !!_(i) && !!i.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype
    }

    function _(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function m(t) {
        return new Promise(i => {
            e.timeoutManager.setTimeout(i, t)
        })
    }

    function w(t, e, i) {
        return "function" == typeof i.structuralSharing ? i.structuralSharing(t, e) : !1 !== i.structuralSharing ? function t(e, i) {
            if (e === i) return e;
            let s = y(e) && y(i);
            if (!s && !(b(e) && b(i))) return i;
            let n = (s ? e : Object.keys(e)).length,
                r = s ? i : Object.keys(i),
                a = r.length,
                o = s ? Array(a) : {},
                l = 0;
            for (let u = 0; u < a; u++) {
                let a = s ? u : r[u],
                    c = e[a],
                    h = i[a];
                if (c === h) {
                    o[a] = c, (s ? u < n : v.call(e, a)) && l++;
                    continue
                }
                if (null === c || null === h || "object" != typeof c || "object" != typeof h) {
                    o[a] = h;
                    continue
                }
                let d = t(c, h);
                o[a] = d, d === c && l++
            }
            return n === a && l === n ? e : o
        }(t, e) : e
    }

    function g(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = [...t, e];
        return i && s.length > i ? s.slice(1) : s
    }

    function S(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = [e, ...t];
        return i && s.length > i ? s.slice(0, -1) : s
    }
    var C = Symbol();

    function O(t, e) {
        return !t.queryFn && (null == e ? void 0 : e.initialPromise) ? () => e.initialPromise : t.queryFn && t.queryFn !== C ? t.queryFn : () => Promise.reject(Error("Missing queryFn: '".concat(t.queryHash, "'")))
    }

    function T(t, e) {
        return "function" == typeof t ? t(...e) : !!t
    }
    t.s(["addToEnd", () => g, "addToStart", () => S, "ensureQueryFn", () => O, "functionalUpdate", () => n, "hashKey", () => d, "hashQueryKeyByOptions", () => h, "isServer", () => i, "isValidTimeout", () => r, "matchMutation", () => c, "matchQuery", () => u, "noop", () => s, "partialMatchKey", () => f, "replaceData", () => w, "resolveEnabled", () => l, "resolveStaleTime", () => o, "shallowEqualObjects", () => p, "shouldThrowError", () => T, "skipToken", () => C, "sleep", () => m, "timeUntilStale", () => a])
}, 42297, 474754, t => {
    "use strict";

    function e(t, e, i) {
        if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
        return i
    }
    t.s(["_", () => e], 42297);
    var i = t.i(463075);

    function s(t, e) {
        (0, i._)(t, e), e.add(t)
    }
    t.s(["_", () => s], 474754)
}, 318459, t => {
    "use strict";
    let e, i, s, n, r, a;
    var o = t.i(457765).systemSetTimeoutZero,
        l = (e = [], i = 0, s = t => {
            t()
        }, n = t => {
            t()
        }, r = o, {
            batch: t => {
                let a;
                i++;
                try {
                    a = t()
                } finally {
                    let t;
                    --i || (t = e, e = [], t.length && r(() => {
                        n(() => {
                            t.forEach(t => {
                                s(t)
                            })
                        })
                    }))
                }
                return a
            },
            batchCalls: t => function() {
                for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                a(() => {
                    t(...i)
                })
            },
            schedule: a = t => {
                i ? e.push(t) : r(() => {
                    s(t)
                })
            },
            setNotifyFunction: t => {
                s = t
            },
            setBatchNotifyFunction: t => {
                n = t
            },
            setScheduler: t => {
                r = t
            }
        });
    t.s(["notifyManager", () => l])
}, 423216, t => {
    "use strict";
    var e = class {
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
    };
    t.s(["Subscribable", () => e])
}, 708347, t => {
    "use strict";
    var e, i, s, n = t.i(376054),
        r = t.i(136927),
        a = t.i(550475),
        o = t.i(423216),
        l = t.i(879994),
        u = new(e = new WeakMap, i = new WeakMap, s = new WeakMap, class extends o.Subscribable {
            onSubscribe() {
                (0, n._)(this, i) || this.setEventListener((0, n._)(this, s))
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || (null == (t = (0, n._)(this, i)) || t.call(this), (0, a._)(this, i, void 0))
            }
            setEventListener(t) {
                var e;
                (0, a._)(this, s, t), null == (e = (0, n._)(this, i)) || e.call(this), (0, a._)(this, i, t(t => {
                    "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                }))
            }
            setFocused(t) {
                (0, n._)(this, e) !== t && ((0, a._)(this, e, t), this.onFocus())
            }
            onFocus() {
                let t = this.isFocused();
                this.listeners.forEach(e => {
                    e(t)
                })
            }
            isFocused() {
                var t;
                return "boolean" == typeof(0, n._)(this, e) ? (0, n._)(this, e) : (null == (t = globalThis.document) ? void 0 : t.visibilityState) !== "hidden"
            }
            constructor() {
                super(), (0, r._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, r._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, r._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, s, t => {
                    if (!l.isServer && window.addEventListener) {
                        let e = () => t();
                        return window.addEventListener("visibilitychange", e, !1), () => {
                            window.removeEventListener("visibilitychange", e)
                        }
                    }
                })
            }
        });
    t.s(["focusManager", () => u])
}, 371622, 964463, 159337, t => {
    "use strict";
    var e, i, s, n = t.i(708347),
        r = t.i(376054),
        a = t.i(136927),
        o = t.i(550475),
        l = t.i(423216),
        u = t.i(879994),
        c = new(e = new WeakMap, i = new WeakMap, s = new WeakMap, class extends l.Subscribable {
            onSubscribe() {
                (0, r._)(this, i) || this.setEventListener((0, r._)(this, s))
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || (null == (t = (0, r._)(this, i)) || t.call(this), (0, o._)(this, i, void 0))
            }
            setEventListener(t) {
                var e;
                (0, o._)(this, s, t), null == (e = (0, r._)(this, i)) || e.call(this), (0, o._)(this, i, t(this.setOnline.bind(this)))
            }
            setOnline(t) {
                (0, r._)(this, e) !== t && ((0, o._)(this, e, t), this.listeners.forEach(e => {
                    e(t)
                }))
            }
            isOnline() {
                return (0, r._)(this, e)
            }
            constructor() {
                super(), (0, a._)(this, e, {
                    writable: !0,
                    value: !0
                }), (0, a._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, s, t => {
                    if (!u.isServer && window.addEventListener) {
                        let e = () => t(!0),
                            i = () => t(!1);
                        return window.addEventListener("online", e, !1), window.addEventListener("offline", i, !1), () => {
                            window.removeEventListener("online", e), window.removeEventListener("offline", i)
                        }
                    }
                })
            }
        });

    function h() {
        let t, e, i = new Promise((i, s) => {
            t = i, e = s
        });

        function s(t) {
            Object.assign(i, t), delete i.resolve, delete i.reject
        }
        return i.status = "pending", i.catch(() => {}), i.resolve = e => {
            s({
                status: "fulfilled",
                value: e
            }), t(e)
        }, i.reject = t => {
            s({
                status: "rejected",
                reason: t
            }), e(t)
        }, i
    }

    function d(t) {
        return Math.min(1e3 * 2 ** t, 3e4)
    }

    function f(t) {
        return (null != t ? t : "online") !== "online" || c.isOnline()
    }
    t.s(["onlineManager", () => c], 964463), t.s(["pendingThenable", () => h], 159337);
    var v = class extends Error {
        constructor(t) {
            super("CancelledError"), this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
        }
    };

    function p(t) {
        let e, i = !1,
            s = 0,
            r = h(),
            a = () => n.focusManager.isFocused() && ("always" === t.networkMode || c.isOnline()) && t.canRun(),
            o = () => f(t.networkMode) && t.canRun(),
            l = t => {
                "pending" === r.status && (null == e || e(), r.resolve(t))
            },
            p = t => {
                "pending" === r.status && (null == e || e(), r.reject(t))
            },
            y = () => new Promise(i => {
                var s;
                e = t => {
                    ("pending" !== r.status || a()) && i(t)
                }, null == (s = t.onPause) || s.call(t)
            }).then(() => {
                if (e = void 0, "pending" === r.status) {
                    var i;
                    null == (i = t.onContinue) || i.call(t)
                }
            }),
            b = () => {
                let e;
                if ("pending" !== r.status) return;
                let n = 0 === s ? t.initialPromise : void 0;
                try {
                    e = null != n ? n : t.fn()
                } catch (t) {
                    e = Promise.reject(t)
                }
                Promise.resolve(e).then(l).catch(e => {
                    var n, o, l;
                    if ("pending" !== r.status) return;
                    let c = null != (o = t.retry) ? o : 3 * !u.isServer,
                        h = null != (l = t.retryDelay) ? l : d,
                        f = "function" == typeof h ? h(s, e) : h,
                        v = !0 === c || "number" == typeof c && s < c || "function" == typeof c && c(s, e);
                    i || !v ? p(e) : (s++, null == (n = t.onFail) || n.call(t, s, e), (0, u.sleep)(f).then(() => a() ? void 0 : y()).then(() => {
                        i ? p(e) : b()
                    }))
                })
            };
        return {
            promise: r,
            status: () => r.status,
            cancel: e => {
                if ("pending" === r.status) {
                    var i;
                    let s = new v(e);
                    p(s), null == (i = t.onCancel) || i.call(t, s)
                }
            },
            continue: () => (null == e || e(), r),
            cancelRetry: () => {
                i = !0
            },
            continueRetry: () => {
                i = !1
            },
            canStart: o,
            start: () => (o() ? b() : y().then(b), r)
        }
    }
    t.s(["CancelledError", () => v, "canFetch", () => f, "createRetryer", () => p], 371622)
}, 556683, t => {
    "use strict";
    var e, i = t.i(376054),
        s = t.i(136927),
        n = t.i(550475),
        r = t.i(457765),
        a = t.i(879994),
        o = (e = new WeakMap, class {
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, a.isValidTimeout)(this.gcTime) && (0, n._)(this, e, r.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(t) {
                this.gcTime = Math.max(this.gcTime || 0, null != t ? t : a.isServer ? 1 / 0 : 3e5)
            }
            clearGcTimeout() {
                (0, i._)(this, e) && (r.timeoutManager.clearTimeout((0, i._)(this, e)), (0, n._)(this, e, void 0))
            }
            constructor() {
                (0, s._)(this, e, {
                    writable: !0,
                    value: void 0
                })
            }
        });
    t.s(["Removable", () => o])
}, 87147, t => {
    "use strict";
    var e, i, s, n, r, a, o, l, u = t.i(376054),
        c = t.i(136927),
        h = t.i(550475),
        d = t.i(42297),
        f = t.i(474754),
        v = t.i(879994),
        p = t.i(318459),
        y = t.i(371622),
        b = t.i(556683),
        _ = (e = new WeakMap, i = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakMap, a = new WeakMap, o = new WeakMap, l = new WeakSet, class extends b.Removable {
            get meta() {
                return this.options.meta
            }
            get promise() {
                var t;
                return null == (t = (0, u._)(this, r)) ? void 0 : t.promise
            }
            setOptions(t) {
                if (this.options = { ...(0, u._)(this, a),
                        ...t
                    }, this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                    let t = g(this.options);
                    void 0 !== t.data && (this.setState(w(t.data, t.dataUpdatedAt)), (0, h._)(this, e, t))
                }
            }
            optionalRemove() {
                this.observers.length || "idle" !== this.state.fetchStatus || (0, u._)(this, s).remove(this)
            }
            setData(t, e) {
                let i = (0, v.replaceData)(this.state.data, t, this.options);
                return (0, d._)(this, l, S).call(this, {
                    data: i,
                    type: "success",
                    dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                    manual: null == e ? void 0 : e.manual
                }), i
            }
            setState(t, e) {
                (0, d._)(this, l, S).call(this, {
                    type: "setState",
                    state: t,
                    setStateOptions: e
                })
            }
            cancel(t) {
                var e, i;
                let s = null == (e = (0, u._)(this, r)) ? void 0 : e.promise;
                return null == (i = (0, u._)(this, r)) || i.cancel(t), s ? s.then(v.noop).catch(v.noop) : Promise.resolve()
            }
            destroy() {
                super.destroy(), this.cancel({
                    silent: !0
                })
            }
            reset() {
                this.destroy(), this.setState((0, u._)(this, e))
            }
            isActive() {
                return this.observers.some(t => !1 !== (0, v.resolveEnabled)(t.options.enabled, this))
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === v.skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            }
            isStatic() {
                return this.getObserversCount() > 0 && this.observers.some(t => "static" === (0, v.resolveStaleTime)(t.options.staleTime, this))
            }
            isStale() {
                return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
            }
            isStaleByTime() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return void 0 === this.state.data || "static" !== t && (!!this.state.isInvalidated || !(0, v.timeUntilStale)(this.state.dataUpdatedAt, t))
            }
            onFocus() {
                var t;
                let e = this.observers.find(t => t.shouldFetchOnWindowFocus());
                null == e || e.refetch({
                    cancelRefetch: !1
                }), null == (t = (0, u._)(this, r)) || t.continue()
            }
            onOnline() {
                var t;
                let e = this.observers.find(t => t.shouldFetchOnReconnect());
                null == e || e.refetch({
                    cancelRefetch: !1
                }), null == (t = (0, u._)(this, r)) || t.continue()
            }
            addObserver(t) {
                this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), (0, u._)(this, s).notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
            }
            removeObserver(t) {
                this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || ((0, u._)(this, r) && ((0, u._)(this, o) ? (0, u._)(this, r).cancel({
                    revert: !0
                }) : (0, u._)(this, r).cancelRetry()), this.scheduleGc()), (0, u._)(this, s).notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
            }
            getObserversCount() {
                return this.observers.length
            }
            invalidate() {
                this.state.isInvalidated || (0, d._)(this, l, S).call(this, {
                    type: "invalidate"
                })
            }
            async fetch(t, e) {
                var a, c, f, p, b, _, m, w, g, C, O, T;
                let M;
                if ("idle" !== this.state.fetchStatus && (null == (a = (0, u._)(this, r)) ? void 0 : a.status()) !== "rejected") {
                    if (void 0 !== this.state.data && (null == e ? void 0 : e.cancelRefetch)) this.cancel({
                        silent: !0
                    });
                    else if ((0, u._)(this, r)) return (0, u._)(this, r).continueRetry(), (0, u._)(this, r).promise
                }
                if (t && this.setOptions(t), !this.options.queryFn) {
                    let t = this.observers.find(t => t.options.queryFn);
                    t && this.setOptions(t.options)
                }
                let E = new AbortController,
                    F = t => {
                        Object.defineProperty(t, "signal", {
                            enumerable: !0,
                            get: () => ((0, h._)(this, o, !0), E.signal)
                        })
                    },
                    x = () => {
                        let t, i = (0, v.ensureQueryFn)(this.options, e),
                            s = (F(t = {
                                client: (0, u._)(this, n),
                                queryKey: this.queryKey,
                                meta: this.meta
                            }), t);
                        return ((0, h._)(this, o, !1), this.options.persister) ? this.options.persister(i, s, this) : i(s)
                    },
                    k = (F(M = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: (0, u._)(this, n),
                        state: this.state,
                        fetchFn: x
                    }), M);
                null == (c = this.options.behavior) || c.onFetch(k, this), (0, h._)(this, i, this.state), ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (f = k.fetchOptions) ? void 0 : f.meta)) && (0, d._)(this, l, S).call(this, {
                    type: "fetch",
                    meta: null == (p = k.fetchOptions) ? void 0 : p.meta
                }), (0, h._)(this, r, (0, y.createRetryer)({
                    initialPromise: null == e ? void 0 : e.initialPromise,
                    fn: k.fetchFn,
                    onCancel: t => {
                        t instanceof y.CancelledError && t.revert && this.setState({ ...(0, u._)(this, i),
                            fetchStatus: "idle"
                        }), E.abort()
                    },
                    onFail: (t, e) => {
                        (0, d._)(this, l, S).call(this, {
                            type: "failed",
                            failureCount: t,
                            error: e
                        })
                    },
                    onPause: () => {
                        (0, d._)(this, l, S).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        (0, d._)(this, l, S).call(this, {
                            type: "continue"
                        })
                    },
                    retry: k.options.retry,
                    retryDelay: k.options.retryDelay,
                    networkMode: k.options.networkMode,
                    canRun: () => !0
                }));
                try {
                    let t = await (0, u._)(this, r).start();
                    if (void 0 === t) throw Error("".concat(this.queryHash, " data is undefined"));
                    return this.setData(t), null == (b = (_ = (0, u._)(this, s).config).onSuccess) || b.call(_, t, this), null == (m = (w = (0, u._)(this, s).config).onSettled) || m.call(w, t, this.state.error, this), t
                } catch (t) {
                    if (t instanceof y.CancelledError) {
                        if (t.silent) return (0, u._)(this, r).promise;
                        else if (t.revert) {
                            if (void 0 === this.state.data) throw t;
                            return this.state.data
                        }
                    }
                    throw (0, d._)(this, l, S).call(this, {
                        type: "error",
                        error: t
                    }), null == (g = (C = (0, u._)(this, s).config).onError) || g.call(C, t, this), null == (O = (T = (0, u._)(this, s).config).onSettled) || O.call(T, this.state.data, t, this), t
                } finally {
                    this.scheduleGc()
                }
            }
            constructor(t) {
                var d;
                super(), (0, f._)(this, l), (0, c._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, a, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, o, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, o, !1), (0, h._)(this, a, t.defaultOptions), this.setOptions(t.options), this.observers = [], (0, h._)(this, n, t.client), (0, h._)(this, s, (0, u._)(this, n).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, (0, h._)(this, e, g(this.options)), this.state = null != (d = t.state) ? d : (0, u._)(this, e), this.scheduleGc()
            }
        });

    function m(t, e) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: (0, y.canFetch)(e.networkMode) ? "fetching" : "paused",
            ...void 0 === t && {
                error: null,
                status: "pending"
            }
        }
    }

    function w(t, e) {
        return {
            data: t,
            dataUpdatedAt: null != e ? e : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function g(t) {
        let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
            i = void 0 !== e,
            s = i ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
        return {
            data: e,
            dataUpdateCount: 0,
            dataUpdatedAt: i ? null != s ? s : Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: i ? "success" : "pending",
            fetchStatus: "idle"
        }
    }

    function S(t) {
        let e = e => {
            switch (t.type) {
                case "failed":
                    return { ...e,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...e,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...e,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    var s;
                    return { ...e,
                        ...m(e.data, this.options),
                        fetchMeta: null != (s = t.meta) ? s : null
                    };
                case "success":
                    let n = { ...e,
                        ...w(t.data, t.dataUpdatedAt),
                        dataUpdateCount: e.dataUpdateCount + 1,
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return (0, h._)(this, i, t.manual ? n : void 0), n;
                case "error":
                    let r = t.error;
                    return { ...e,
                        error: r,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        fetchFailureReason: r,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...e,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...e,
                        ...t.state
                    }
            }
        };
        this.state = e(this.state), p.notifyManager.batch(() => {
            this.observers.forEach(t => {
                t.onQueryUpdate()
            }), (0, u._)(this, s).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }
    t.s(["Query", () => _, "fetchState", () => m])
}, 614988, t => {
    "use strict";
    var e, i, s, n, r, a = t.i(376054),
        o = t.i(136927),
        l = t.i(550475),
        u = t.i(42297),
        c = t.i(474754),
        h = t.i(318459),
        d = t.i(556683),
        f = t.i(371622),
        v = (e = new WeakMap, i = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakSet, class extends d.Removable {
            setOptions(t) {
                this.options = t, this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(t) {
                (0, a._)(this, i).includes(t) || ((0, a._)(this, i).push(t), this.clearGcTimeout(), (0, a._)(this, s).notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: t
                }))
            }
            removeObserver(t) {
                (0, l._)(this, i, (0, a._)(this, i).filter(e => e !== t)), this.scheduleGc(), (0, a._)(this, s).notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: t
                })
            }
            optionalRemove() {
                (0, a._)(this, i).length || ("pending" === this.state.status ? this.scheduleGc() : (0, a._)(this, s).remove(this))
            }
            continue () {
                var t, e;
                return null != (e = null == (t = (0, a._)(this, n)) ? void 0 : t.continue()) ? e : this.execute(this.state.variables)
            }
            async execute(t) {
                var i, o, c, h, d, v, p, b, _, m, w, g, S, C, O, T, M, E, F, x, k;
                let j = () => {
                        (0, u._)(this, r, y).call(this, {
                            type: "continue"
                        })
                    },
                    R = {
                        client: (0, a._)(this, e),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (0, l._)(this, n, (0, f.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t, R) : Promise.reject(Error("No mutationFn found")),
                    onFail: (t, e) => {
                        (0, u._)(this, r, y).call(this, {
                            type: "failed",
                            failureCount: t,
                            error: e
                        })
                    },
                    onPause: () => {
                        (0, u._)(this, r, y).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: j,
                    retry: null != (i = this.options.retry) ? i : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => (0, a._)(this, s).canRun(this)
                }));
                let P = "pending" === this.state.status,
                    U = !(0, a._)(this, n).canStart();
                try {
                    if (P) j();
                    else {
                        (0, u._)(this, r, y).call(this, {
                            type: "pending",
                            variables: t,
                            isPaused: U
                        }), await (null == (m = (w = (0, a._)(this, s).config).onMutate) ? void 0 : m.call(w, t, this, R));
                        let e = await (null == (g = (S = this.options).onMutate) ? void 0 : g.call(S, t, R));
                        e !== this.state.context && (0, u._)(this, r, y).call(this, {
                            type: "pending",
                            context: e,
                            variables: t,
                            isPaused: U
                        })
                    }
                    let e = await (0, a._)(this, n).start();
                    return await (null == (o = (c = (0, a._)(this, s).config).onSuccess) ? void 0 : o.call(c, e, t, this.state.context, this, R)), await (null == (h = (d = this.options).onSuccess) ? void 0 : h.call(d, e, t, this.state.context, R)), await (null == (v = (p = (0, a._)(this, s).config).onSettled) ? void 0 : v.call(p, e, null, this.state.variables, this.state.context, this, R)), await (null == (b = (_ = this.options).onSettled) ? void 0 : b.call(_, e, null, t, this.state.context, R)), (0, u._)(this, r, y).call(this, {
                        type: "success",
                        data: e
                    }), e
                } catch (e) {
                    try {
                        throw await (null == (C = (O = (0, a._)(this, s).config).onError) ? void 0 : C.call(O, e, t, this.state.context, this, R)), await (null == (T = (M = this.options).onError) ? void 0 : T.call(M, e, t, this.state.context, R)), await (null == (E = (F = (0, a._)(this, s).config).onSettled) ? void 0 : E.call(F, void 0, e, this.state.variables, this.state.context, this, R)), await (null == (x = (k = this.options).onSettled) ? void 0 : x.call(k, void 0, e, t, this.state.context, R)), e
                    } finally {
                        (0, u._)(this, r, y).call(this, {
                            type: "error",
                            error: e
                        })
                    }
                } finally {
                    (0, a._)(this, s).runNext(this)
                }
            }
            constructor(t) {
                super(), (0, c._)(this, r), (0, o._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, l._)(this, e, t.client), this.mutationId = t.mutationId, (0, l._)(this, s, t.mutationCache), (0, l._)(this, i, []), this.state = t.state || p(), this.setOptions(t.options), this.scheduleGc()
            }
        });

    function p() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        }
    }

    function y(t) {
        this.state = (e => {
            switch (t.type) {
                case "failed":
                    return { ...e,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...e,
                        isPaused: !0
                    };
                case "continue":
                    return { ...e,
                        isPaused: !1
                    };
                case "pending":
                    return { ...e,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...e,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...e,
                        data: void 0,
                        error: t.error,
                        failureCount: e.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        })(this.state), h.notifyManager.batch(() => {
            (0, a._)(this, i).forEach(e => {
                e.onMutationUpdate(t)
            }), (0, a._)(this, s).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }
    t.s(["Mutation", () => v, "getDefaultState", () => p])
}, 940948, t => {
    "use strict";
    var e = t.i(251570),
        i = t.i(483632),
        s = e.createContext(void 0),
        n = t => {
            let i = e.useContext(s);
            if (t) return t;
            if (!i) throw Error("No QueryClient set, use QueryClientProvider to set one");
            return i
        },
        r = t => {
            let {
                client: n,
                children: r
            } = t;
            return e.useEffect(() => (n.mount(), () => {
                n.unmount()
            }), [n]), (0, i.jsx)(s.Provider, {
                value: n,
                children: r
            })
        };
    t.s(["QueryClientProvider", () => r, "useQueryClient", () => n])
}, 212483, (t, e, i) => {
    "use strict";
    var s = t.r(251570),
        n = "function" == typeof Object.is ? Object.is : function(t, e) {
            return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        },
        r = s.useSyncExternalStore,
        a = s.useRef,
        o = s.useEffect,
        l = s.useMemo,
        u = s.useDebugValue;
    i.useSyncExternalStoreWithSelector = function(t, e, i, s, c) {
        var h = a(null);
        if (null === h.current) {
            var d = {
                hasValue: !1,
                value: null
            };
            h.current = d
        } else d = h.current;
        var f = r(t, (h = l(function() {
            function t(t) {
                if (!o) {
                    if (o = !0, r = t, t = s(t), void 0 !== c && d.hasValue) {
                        var e = d.value;
                        if (c(e, t)) return a = e
                    }
                    return a = t
                }
                if (e = a, n(r, t)) return e;
                var i = s(t);
                return void 0 !== c && c(e, i) ? (r = t, e) : (r = t, a = i)
            }
            var r, a, o = !1,
                l = void 0 === i ? null : i;
            return [function() {
                return t(e())
            }, null === l ? void 0 : function() {
                return t(l())
            }]
        }, [e, i, s, c]))[0], h[1]);
        return o(function() {
            d.hasValue = !0, d.value = f
        }, [f]), u(f), f
    }
}, 129852, (t, e, i) => {
    "use strict";
    e.exports = t.r(212483)
}, 391265, t => {
    "use strict";
    var e = t.i(251570),
        i = t.i(129852),
        s = {
            notify() {},
            get: () => []
        },
        n = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        r = "undefined" != typeof navigator && "ReactNative" === navigator.product,
        a = n || r ? e.useLayoutEffect : e.useEffect;

    function o(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }

    function l(t, e) {
        if (o(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        let i = Object.keys(t),
            s = Object.keys(e);
        if (i.length !== s.length) return !1;
        for (let s = 0; s < i.length; s++)
            if (!Object.prototype.hasOwnProperty.call(e, i[s]) || !o(t[i[s]], e[i[s]])) return !1;
        return !0
    }
    var u = Symbol.for("react-redux-context"),
        c = "undefined" != typeof globalThis ? globalThis : {},
        h = function() {
            var t;
            if (!e.createContext) return {};
            let i = null != (t = c[u]) ? t : c[u] = new Map,
                s = i.get(e.createContext);
            return s || (s = e.createContext(null), i.set(e.createContext, s)), s
        }(),
        d = function(t) {
            let {
                children: i,
                context: n,
                serverState: r,
                store: o
            } = t, l = e.useMemo(() => {
                let t = function(t, e) {
                    let i, n = s,
                        r = 0,
                        a = !1;

                    function o() {
                        c.onStateChange && c.onStateChange()
                    }

                    function l() {
                        if (r++, !i) {
                            let e, s;
                            i = t.subscribe(o), e = null, s = null, n = {
                                clear() {
                                    e = null, s = null
                                },
                                notify() {
                                    let t = e;
                                    for (; t;) t.callback(), t = t.next
                                },
                                get() {
                                    let t = [],
                                        i = e;
                                    for (; i;) t.push(i), i = i.next;
                                    return t
                                },
                                subscribe(t) {
                                    let i = !0,
                                        n = s = {
                                            callback: t,
                                            next: null,
                                            prev: s
                                        };
                                    return n.prev ? n.prev.next = n : e = n,
                                        function() {
                                            i && null !== e && (i = !1, n.next ? n.next.prev = n.prev : s = n.prev, n.prev ? n.prev.next = n.next : e = n.next)
                                        }
                                }
                            }
                        }
                    }

                    function u() {
                        r--, i && 0 === r && (i(), i = void 0, n.clear(), n = s)
                    }
                    let c = {
                        addNestedSub: function(t) {
                            l();
                            let e = n.subscribe(t),
                                i = !1;
                            return () => {
                                i || (i = !0, e(), u())
                            }
                        },
                        notifyNestedSubs: function() {
                            n.notify()
                        },
                        handleChangeWrapper: o,
                        isSubscribed: function() {
                            return a
                        },
                        trySubscribe: function() {
                            a || (a = !0, l())
                        },
                        tryUnsubscribe: function() {
                            a && (a = !1, u())
                        },
                        getListeners: () => n
                    };
                    return c
                }(o);
                return {
                    store: o,
                    subscription: t,
                    getServerState: r ? () => r : void 0
                }
            }, [o, r]), u = e.useMemo(() => o.getState(), [o]);
            return a(() => {
                let {
                    subscription: t
                } = l;
                return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), u !== o.getState() && t.notifyNestedSubs(), () => {
                    t.tryUnsubscribe(), t.onStateChange = void 0
                }
            }, [l, u]), e.createElement((n || h).Provider, {
                value: l
            }, i)
        };

    function f() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
        return function() {
            return e.useContext(t)
        }
    }
    var v = f();

    function p() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            e = t === h ? v : f(t),
            i = () => {
                let {
                    store: t
                } = e();
                return t
            };
        return Object.assign(i, {
            withTypes: () => i
        }), i
    }
    var y = p(),
        b = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                e = t === h ? y : p(t),
                i = () => e().dispatch;
            return Object.assign(i, {
                withTypes: () => i
            }), i
        }(),
        _ = (t, e) => t === e,
        m = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                s = t === h ? v : f(t),
                n = function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            equalityFn: r = _
                        } = "function" == typeof n ? {
                            equalityFn: n
                        } : n,
                        {
                            store: a,
                            subscription: o,
                            getServerState: l
                        } = s();
                    e.useRef(!0);
                    let u = e.useCallback({
                            [t.name]: e => t(e)
                        }[t.name], [t]),
                        c = (0, i.useSyncExternalStoreWithSelector)(o.addNestedSub, a.getState, l || a.getState, u, r);
                    return e.useDebugValue(c), c
                };
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }();
    t.s(["Provider", () => d, "shallowEqual", () => l, "useDispatch", () => b, "useSelector", () => m])
}]);

//# debugId=c3814709-b51f-63b7-750b-0205d1c66783
//# sourceMappingURL=aa60688ec415dc1c.js.map