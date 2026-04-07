;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "db78e557-de85-d87a-98d6-a17aa5b0c267")
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
                if (e.queryHash !== c(a, e.options)) return !1
            } else if (!f(e.queryKey, a)) return !1
        }
        if ("all" !== i) {
            let t = e.isActive();
            if ("active" === i && !t || "inactive" === i && t) return !1
        }
        return ("boolean" != typeof o || e.isStale() === o) && (!n || n === e.state.fetchStatus) && (!r || !!r(e))
    }

    function h(t, e) {
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

    function c(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || d)(t)
    }

    function d(t) {
        return JSON.stringify(t, (t, e) => m(e) ? Object.keys(e).sort().reduce((t, i) => (t[i] = e[i], t), {}) : e)
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

    function m(t) {
        if (!b(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let i = e.prototype;
        return !!b(i) && !!i.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype
    }

    function b(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function g(t) {
        return new Promise(i => {
            e.timeoutManager.setTimeout(i, t)
        })
    }

    function _(t, e, i) {
        return "function" == typeof i.structuralSharing ? i.structuralSharing(t, e) : !1 !== i.structuralSharing ? function t(e, i) {
            if (e === i) return e;
            let s = y(e) && y(i);
            if (!s && !(m(e) && m(i))) return i;
            let n = (s ? e : Object.keys(e)).length,
                r = s ? i : Object.keys(i),
                a = r.length,
                o = s ? Array(a) : {},
                l = 0;
            for (let u = 0; u < a; u++) {
                let a = s ? u : r[u],
                    h = e[a],
                    c = i[a];
                if (h === c) {
                    o[a] = h, (s ? u < n : v.call(e, a)) && l++;
                    continue
                }
                if (null === h || null === c || "object" != typeof h || "object" != typeof c) {
                    o[a] = c;
                    continue
                }
                let d = t(h, c);
                o[a] = d, d === h && l++
            }
            return n === a && l === n ? e : o
        }(t, e) : e
    }

    function w(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = [...t, e];
        return i && s.length > i ? s.slice(1) : s
    }

    function S(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = [e, ...t];
        return i && s.length > i ? s.slice(0, -1) : s
    }
    var T = Symbol();

    function F(t, e) {
        return !t.queryFn && (null == e ? void 0 : e.initialPromise) ? () => e.initialPromise : t.queryFn && t.queryFn !== T ? t.queryFn : () => Promise.reject(Error("Missing queryFn: '".concat(t.queryHash, "'")))
    }

    function O(t, e) {
        return "function" == typeof t ? t(...e) : !!t
    }
    t.s(["addToEnd", () => w, "addToStart", () => S, "ensureQueryFn", () => F, "functionalUpdate", () => n, "hashKey", () => d, "hashQueryKeyByOptions", () => c, "isServer", () => i, "isValidTimeout", () => r, "matchMutation", () => h, "matchQuery", () => u, "noop", () => s, "partialMatchKey", () => f, "replaceData", () => _, "resolveEnabled", () => l, "resolveStaleTime", () => o, "shallowEqualObjects", () => p, "shouldThrowError", () => O, "skipToken", () => T, "sleep", () => g, "timeUntilStale", () => a])
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
        h = new(e = new WeakMap, i = new WeakMap, s = new WeakMap, class extends l.Subscribable {
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

    function c() {
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
        return (null != t ? t : "online") !== "online" || h.isOnline()
    }
    t.s(["onlineManager", () => h], 964463), t.s(["pendingThenable", () => c], 159337);
    var v = class extends Error {
        constructor(t) {
            super("CancelledError"), this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
        }
    };

    function p(t) {
        let e, i = !1,
            s = 0,
            r = c(),
            a = () => n.focusManager.isFocused() && ("always" === t.networkMode || h.isOnline()) && t.canRun(),
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
            m = () => {
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
                    let h = null != (o = t.retry) ? o : 3 * !u.isServer,
                        c = null != (l = t.retryDelay) ? l : d,
                        f = "function" == typeof c ? c(s, e) : c,
                        v = !0 === h || "number" == typeof h && s < h || "function" == typeof h && h(s, e);
                    i || !v ? p(e) : (s++, null == (n = t.onFail) || n.call(t, s, e), (0, u.sleep)(f).then(() => a() ? void 0 : y()).then(() => {
                        i ? p(e) : m()
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
            start: () => (o() ? m() : y().then(m), r)
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
        h = t.i(136927),
        c = t.i(550475),
        d = t.i(42297),
        f = t.i(474754),
        v = t.i(879994),
        p = t.i(318459),
        y = t.i(371622),
        m = t.i(556683),
        b = (e = new WeakMap, i = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakMap, a = new WeakMap, o = new WeakMap, l = new WeakSet, class extends m.Removable {
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
                    let t = w(this.options);
                    void 0 !== t.data && (this.setState(_(t.data, t.dataUpdatedAt)), (0, c._)(this, e, t))
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
                var a, h, f, p, m, b, g, _, w, T, F, O;
                let C;
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
                let M = new AbortController,
                    E = t => {
                        Object.defineProperty(t, "signal", {
                            enumerable: !0,
                            get: () => ((0, c._)(this, o, !0), M.signal)
                        })
                    },
                    x = () => {
                        let t, i = (0, v.ensureQueryFn)(this.options, e),
                            s = (E(t = {
                                client: (0, u._)(this, n),
                                queryKey: this.queryKey,
                                meta: this.meta
                            }), t);
                        return ((0, c._)(this, o, !1), this.options.persister) ? this.options.persister(i, s, this) : i(s)
                    },
                    k = (E(C = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: (0, u._)(this, n),
                        state: this.state,
                        fetchFn: x
                    }), C);
                null == (h = this.options.behavior) || h.onFetch(k, this), (0, c._)(this, i, this.state), ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (f = k.fetchOptions) ? void 0 : f.meta)) && (0, d._)(this, l, S).call(this, {
                    type: "fetch",
                    meta: null == (p = k.fetchOptions) ? void 0 : p.meta
                }), (0, c._)(this, r, (0, y.createRetryer)({
                    initialPromise: null == e ? void 0 : e.initialPromise,
                    fn: k.fetchFn,
                    onCancel: t => {
                        t instanceof y.CancelledError && t.revert && this.setState({ ...(0, u._)(this, i),
                            fetchStatus: "idle"
                        }), M.abort()
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
                    return this.setData(t), null == (m = (b = (0, u._)(this, s).config).onSuccess) || m.call(b, t, this), null == (g = (_ = (0, u._)(this, s).config).onSettled) || g.call(_, t, this.state.error, this), t
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
                    }), null == (w = (T = (0, u._)(this, s).config).onError) || w.call(T, t, this), null == (F = (O = (0, u._)(this, s).config).onSettled) || F.call(O, this.state.data, t, this), t
                } finally {
                    this.scheduleGc()
                }
            }
            constructor(t) {
                var d;
                super(), (0, f._)(this, l), (0, h._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, a, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, o, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, o, !1), (0, c._)(this, a, t.defaultOptions), this.setOptions(t.options), this.observers = [], (0, c._)(this, n, t.client), (0, c._)(this, s, (0, u._)(this, n).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, (0, c._)(this, e, w(this.options)), this.state = null != (d = t.state) ? d : (0, u._)(this, e), this.scheduleGc()
            }
        });

    function g(t, e) {
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

    function _(t, e) {
        return {
            data: t,
            dataUpdatedAt: null != e ? e : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function w(t) {
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
                        ...g(e.data, this.options),
                        fetchMeta: null != (s = t.meta) ? s : null
                    };
                case "success":
                    let n = { ...e,
                        ..._(t.data, t.dataUpdatedAt),
                        dataUpdateCount: e.dataUpdateCount + 1,
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return (0, c._)(this, i, t.manual ? n : void 0), n;
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
    t.s(["Query", () => b, "fetchState", () => g])
}, 614988, t => {
    "use strict";
    var e, i, s, n, r, a = t.i(376054),
        o = t.i(136927),
        l = t.i(550475),
        u = t.i(42297),
        h = t.i(474754),
        c = t.i(318459),
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
                var i, o, h, c, d, v, p, m, b, g, _, w, S, T, F, O, C, M, E, x, k;
                let R = () => {
                        (0, u._)(this, r, y).call(this, {
                            type: "continue"
                        })
                    },
                    P = {
                        client: (0, a._)(this, e),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (0, l._)(this, n, (0, f.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t, P) : Promise.reject(Error("No mutationFn found")),
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
                    onContinue: R,
                    retry: null != (i = this.options.retry) ? i : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => (0, a._)(this, s).canRun(this)
                }));
                let j = "pending" === this.state.status,
                    A = !(0, a._)(this, n).canStart();
                try {
                    if (j) R();
                    else {
                        (0, u._)(this, r, y).call(this, {
                            type: "pending",
                            variables: t,
                            isPaused: A
                        }), await (null == (g = (_ = (0, a._)(this, s).config).onMutate) ? void 0 : g.call(_, t, this, P));
                        let e = await (null == (w = (S = this.options).onMutate) ? void 0 : w.call(S, t, P));
                        e !== this.state.context && (0, u._)(this, r, y).call(this, {
                            type: "pending",
                            context: e,
                            variables: t,
                            isPaused: A
                        })
                    }
                    let e = await (0, a._)(this, n).start();
                    return await (null == (o = (h = (0, a._)(this, s).config).onSuccess) ? void 0 : o.call(h, e, t, this.state.context, this, P)), await (null == (c = (d = this.options).onSuccess) ? void 0 : c.call(d, e, t, this.state.context, P)), await (null == (v = (p = (0, a._)(this, s).config).onSettled) ? void 0 : v.call(p, e, null, this.state.variables, this.state.context, this, P)), await (null == (m = (b = this.options).onSettled) ? void 0 : m.call(b, e, null, t, this.state.context, P)), (0, u._)(this, r, y).call(this, {
                        type: "success",
                        data: e
                    }), e
                } catch (e) {
                    try {
                        throw await (null == (T = (F = (0, a._)(this, s).config).onError) ? void 0 : T.call(F, e, t, this.state.context, this, P)), await (null == (O = (C = this.options).onError) ? void 0 : O.call(C, e, t, this.state.context, P)), await (null == (M = (E = (0, a._)(this, s).config).onSettled) ? void 0 : M.call(E, void 0, e, this.state.variables, this.state.context, this, P)), await (null == (x = (k = this.options).onSettled) ? void 0 : x.call(k, void 0, e, t, this.state.context, P)), e
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
                super(), (0, h._)(this, r), (0, o._)(this, e, {
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
        })(this.state), c.notifyManager.batch(() => {
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
}, 565398, 101759, t => {
    "use strict";
    let e = (0, t.i(360706).createAnatomy)("field").parts("root", "errorText", "helperText", "input", "label", "select", "textarea", "requiredIndicator"),
        i = e.build();
    t.s(["fieldAnatomy", () => e, "parts", () => i], 565398);
    var s = t.i(841158);

    function n(t) {
        var e;
        if (!t) return;
        let i = (0, s.getDocument)(t),
            n = (0, s.getWindow)(t),
            r = ((e = i.createElement("div")).id = "ghost", e.style.cssText = "display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;", i.body.appendChild(e), e),
            a = function(t) {
                if (!t) return;
                let e = (0, s.getComputedStyle)(t);
                return "box-sizing:" + e.boxSizing + ";border-left:" + e.borderLeftWidth + " solid red;border-right:" + e.borderRightWidth + " solid red;font-family:" + e.fontFamily + ";font-feature-settings:" + e.fontFeatureSettings + ";font-kerning:" + e.fontKerning + ";font-size:" + e.fontSize + ";font-stretch:" + e.fontStretch + ";font-style:" + e.fontStyle + ";font-variant:" + e.fontVariant + ";font-variant-caps:" + e.fontVariantCaps + ";font-variant-ligatures:" + e.fontVariantLigatures + ";font-variant-numeric:" + e.fontVariantNumeric + ";font-weight:" + e.fontWeight + ";letter-spacing:" + e.letterSpacing + ";margin-left:" + e.marginLeft + ";margin-right:" + e.marginRight + ";padding-left:" + e.paddingLeft + ";padding-right:" + e.paddingRight + ";text-indent:" + e.textIndent + ";text-transform:" + e.textTransform
            }(t);

        function o() {
            n.requestAnimationFrame(() => {
                r.innerHTML = t.value;
                let e = n.getComputedStyle(r);
                null == t || t.style.setProperty("width", e.width)
            })
        }
        return a && (r.style.cssText += a), o(), null == t || t.addEventListener("input", o), null == t || t.addEventListener("change", o), () => {
            i.body.removeChild(r), null == t || t.removeEventListener("input", o), null == t || t.removeEventListener("change", o)
        }
    }
    var r = t => {
        var e, i;
        if (!t) return;
        let n = (0, s.getComputedStyle)(t),
            r = (0, s.getWindow)(t),
            a = (0, s.getDocument)(t),
            o = () => {
                requestAnimationFrame(() => {
                    let e;
                    t.style.height = "auto", e = "content-box" === n.boxSizing ? t.scrollHeight - (parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : t.scrollHeight + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), "none" !== n.maxHeight && e > parseFloat(n.maxHeight) ? ("hidden" === n.overflowY && (t.style.overflowY = "scroll"), e = parseFloat(n.maxHeight)) : "hidden" !== n.overflowY && (t.style.overflowY = "hidden"), t.style.height = "".concat(e, "px")
                })
            };
        t.addEventListener("input", o), null == (e = t.form) || e.addEventListener("reset", o);
        let l = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value");
        Object.defineProperty(t, "value", { ...l,
            set() {
                var t;
                null == l || null == (t = l.set) || t.apply(this, arguments), o()
            }
        });
        let u = new r.ResizeObserver(() => {
            requestAnimationFrame(() => o())
        });
        u.observe(t);
        let h = new r.MutationObserver(() => o());
        return h.observe(t, {
            attributes: !0,
            attributeFilter: ["rows", "placeholder"]
        }), null == (i = a.fonts) || i.addEventListener("loadingdone", o), () => {
            var e, i;
            t.removeEventListener("input", o), null == (e = t.form) || e.removeEventListener("reset", o), null == (i = a.fonts) || i.removeEventListener("loadingdone", o), u.disconnect(), h.disconnect()
        }
    };
    t.s(["autoResizeInput", () => n, "autoresizeTextarea", () => r], 101759)
}]);

//# debugId=db78e557-de85-d87a-98d6-a17aa5b0c267
//# sourceMappingURL=b1be0efa01fa703c.js.map