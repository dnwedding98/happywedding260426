;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "6ff54e8f-aadc-2cad-74b3-db6457d5d8ee")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 796407, (e, t, i) => {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o() {}
    i.__esModule = !0, i.default = function(e) {
        var t = "".concat(e, "Storage");
        return ! function(e) {
            if (("undefined" == typeof self ? "undefined" : r(self)) !== "object" || !(e in self)) return !1;
            try {
                var t = self[e],
                    i = "redux-persist ".concat(e, " test");
                t.setItem(i, "test"), t.getItem(i), t.removeItem(i)
            } catch (e) {
                return !1
            }
            return !0
        }(t) ? n : self[t]
    };
    var n = {
        getItem: o,
        setItem: o,
        removeItem: o
    }
}, 195401, (e, t, i) => {
    "use strict";
    i.__esModule = !0, i.default = function(e) {
        var t = (0, o.default)(e);
        return {
            getItem: function(e) {
                return new Promise(function(i, r) {
                    i(t.getItem(e))
                })
            },
            setItem: function(e, i) {
                return new Promise(function(r, o) {
                    r(t.setItem(e, i))
                })
            },
            removeItem: function(e) {
                return new Promise(function(i, r) {
                    i(t.removeItem(e))
                })
            }
        }
    };
    var r, o = (r = e.r(796407)) && r.__esModule ? r : {
        default: r
    }
}, 756788, (e, t, i) => {
    "use strict";
    var r;
    i.__esModule = !0, i.default = void 0, i.default = (0, ((r = e.r(195401)) && r.__esModule ? r : {
        default: r
    }).default)("local")
}, 96923, e => {
    "use strict";
    var t, i, r, o, n, a, l, s, u, d, f, c, p, h, g, y, m, b = e.i(483632);
    (() => {
        let e = globalThis;
        if ("function" == typeof e.structuredClone) return;
        let t = (e, i) => {
            if (null === e || "object" != typeof e) return e;
            if (i.has(e)) return i.get(e);
            if (e instanceof Date) return new Date(e.getTime());
            if (e instanceof RegExp) return new RegExp(e.source, e.flags);
            if (e instanceof ArrayBuffer) return e.slice(0);
            if ("undefined" != typeof DataView && e instanceof DataView) return new DataView(t(e.buffer, i), e.byteOffset, e.byteLength);
            if (ArrayBuffer.isView(e)) return e.slice ? e.slice(0) : new e.constructor(e);
            if (e instanceof Map) {
                let r = new Map;
                return i.set(e, r), e.forEach((e, o) => {
                    r.set(t(o, i), t(e, i))
                }), r
            }
            if (e instanceof Set) {
                let r = new Set;
                return i.set(e, r), e.forEach(e => {
                    r.add(t(e, i))
                }), r
            }
            if (Array.isArray(e)) {
                let r = [];
                i.set(e, r);
                for (let o = 0; o < e.length; o += 1) r[o] = t(e[o], i);
                return r
            }
            let r = Object.create(Object.getPrototypeOf(e));
            return i.set(e, r), Reflect.ownKeys(e).forEach(o => {
                let n = Object.getOwnPropertyDescriptor(e, o);
                n && ("value" in n && (n.value = t(n.value, i)), Object.defineProperty(r, o, n))
            }), r
        };
        e.structuredClone = e => t(e, new WeakMap)
    })();
    var S = e.i(13484),
        w = e.i(469562),
        M = e.i(57222);

    function O(e) {
        return (0, b.jsx)(S.ChakraProvider, {
            value: M.default,
            children: (0, b.jsx)(w.ColorModeProvider, { ...e,
                defaultTheme: "light"
            })
        })
    }
    var P = e.i(391265);
    e.i(556464);
    var _ = e.i(251570);

    function C(e) {
        return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function k(e) {
        return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function x(e, t) {
        return (x = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var j = function(e) {
        var t;
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");

        function i() {
            var e;
            if (!(this instanceof i)) throw TypeError("Cannot call a class as a function");
            for (var t, r, o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return r = (e = (t = k(i)).call.apply(t, [this].concat(n))) && ("object" === C(e) || "function" == typeof e) ? e : A(this), E(A(r), "state", {
                bootstrapped: !1
            }), E(A(r), "_unsubscribe", void 0), E(A(r), "handlePersistorState", function() {
                r.props.persistor.getState().bootstrapped && (r.props.onBeforeLift ? Promise.resolve(r.props.onBeforeLift()).finally(function() {
                    return r.setState({
                        bootstrapped: !0
                    })
                }) : r.setState({
                    bootstrapped: !0
                }), r._unsubscribe && r._unsubscribe())
            }), r
        }
        return i.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: i,
                    writable: !0,
                    configurable: !0
                }
            }), e && x(i, e), t = [{
                key: "componentDidMount",
                value: function() {
                    this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._unsubscribe && this._unsubscribe()
                }
            }, {
                key: "render",
                value: function() {
                    return "function" == typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading
                }
            }],
            function(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(i.prototype, t), i
    }(_.PureComponent);
    E(j, "defaultProps", {
        children: null,
        loading: null
    });
    var D = e.i(633008),
        T = e.i(813753),
        I = e.i(920861),
        Q = e.i(756788),
        F = "persist:",
        L = "persist/FLUSH",
        R = "persist/REHYDRATE",
        V = "persist/PAUSE",
        H = "persist/PERSIST",
        B = "persist/PURGE",
        U = "persist/REGISTER";

    function q(e) {
        return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function W(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), i.push.apply(i, r)
        }
        return i
    }

    function N(e, t, i, r) {
        r.debug;
        var o = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(i, !0).forEach(function(t) {
                    var r, o, n;
                    r = e, o = t, n = i[t], o in r ? Object.defineProperty(r, o, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : W(i).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }({}, i);
        return e && "object" === q(e) && Object.keys(e).forEach(function(r) {
            "_persist" !== r && t[r] === i[r] && (o[r] = e[r])
        }), o
    }

    function K(e) {
        return JSON.stringify(e)
    }

    function z(e) {
        var t, i = e.transforms || [],
            r = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : F).concat(e.key),
            o = e.storage;
        return e.debug, t = !1 === e.deserialize ? function(e) {
            return e
        } : "function" == typeof e.deserialize ? e.deserialize : G, o.getItem(r).then(function(e) {
            if (e) try {
                var r = {},
                    o = t(e);
                return Object.keys(o).forEach(function(e) {
                    r[e] = i.reduceRight(function(t, i) {
                        return i.out(t, e, o)
                    }, t(o[e]))
                }), r
            } catch (e) {
                throw e
            }
        })
    }

    function G(e) {
        return JSON.parse(e)
    }

    function J(e) {}

    function Z(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), i.push.apply(i, r)
        }
        return i
    }

    function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Z(i, !0).forEach(function(t) {
                var r, o, n;
                r = e, o = t, n = i[t], o in r ? Object.defineProperty(r, o, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = n
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Z(i).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return e
    }

    function $(e, t) {
        var i = void 0 !== e.version ? e.version : -1;
        e.debug;
        var r = void 0 === e.stateReconciler ? N : e.stateReconciler,
            o = e.getStoredState || z,
            n = void 0 !== e.timeout ? e.timeout : 5e3,
            a = null,
            l = !1,
            s = !0,
            u = function(e) {
                return e._persist.rehydrated && a && !s && a.update(e), e
            };
        return function(d, f) {
            var c, p, h = d || {},
                g = h._persist,
                y = function(e, t) {
                    if (null == e) return {};
                    var i, r, o = function(e, t) {
                        if (null == e) return {};
                        var i, r, o = {},
                            n = Object.keys(e);
                        for (r = 0; r < n.length; r++) i = n[r], t.indexOf(i) >= 0 || (o[i] = e[i]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i])
                    }
                    return o
                }(h, ["_persist"]);
            if (f.type === H) {
                var m = !1,
                    b = function(t, i) {
                        m || (f.rehydrate(e.key, t, i), m = !0)
                    };
                if (n && setTimeout(function() {
                        m || b(void 0, Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')))
                    }, n), s = !1, a || (a = function(e) {
                        var t, i = e.blacklist || null,
                            r = e.whitelist || null,
                            o = e.transforms || [],
                            n = e.throttle || 0,
                            a = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : F).concat(e.key),
                            l = e.storage;
                        t = !1 === e.serialize ? function(e) {
                            return e
                        } : "function" == typeof e.serialize ? e.serialize : K;
                        var s = e.writeFailHandler || null,
                            u = {},
                            d = {},
                            f = [],
                            c = null,
                            p = null;

                        function h() {
                            if (0 === f.length) {
                                c && clearInterval(c), c = null;
                                return
                            }
                            var e = f.shift(),
                                i = o.reduce(function(t, i) {
                                    return i.in(t, e, u)
                                }, u[e]);
                            if (void 0 !== i) try {
                                d[e] = t(i)
                            } catch (e) {
                                console.error("redux-persist/createPersistoid: error serializing state", e)
                            } else delete d[e];
                            0 === f.length && (Object.keys(d).forEach(function(e) {
                                void 0 === u[e] && delete d[e]
                            }), p = l.setItem(a, t(d)).catch(y))
                        }

                        function g(e) {
                            return (!r || -1 !== r.indexOf(e) || "_persist" === e) && (!i || -1 === i.indexOf(e))
                        }

                        function y(e) {
                            s && s(e)
                        }
                        return {
                            update: function(e) {
                                Object.keys(e).forEach(function(t) {
                                    g(t) && u[t] !== e[t] && -1 === f.indexOf(t) && f.push(t)
                                }), Object.keys(u).forEach(function(t) {
                                    void 0 === e[t] && g(t) && -1 === f.indexOf(t) && void 0 !== u[t] && f.push(t)
                                }), null === c && (c = setInterval(h, n)), u = e
                            },
                            flush: function() {
                                for (; 0 !== f.length;) h();
                                return p || Promise.resolve()
                            }
                        }
                    }(e)), g) return Y({}, t(y, f), {
                    _persist: g
                });
                if ("function" != typeof f.rehydrate || "function" != typeof f.register) throw Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return f.register(e.key), o(e).then(function(t) {
                    (e.migrate || function(e, t) {
                        return Promise.resolve(e)
                    })(t, i).then(function(e) {
                        b(e)
                    }, function(e) {
                        b(void 0, e)
                    })
                }, function(e) {
                    b(void 0, e)
                }), Y({}, t(y, f), {
                    _persist: {
                        version: i,
                        rehydrated: !1
                    }
                })
            }
            if (f.type === B) return l = !0, f.result((c = e.storage, p = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : F).concat(e.key), c.removeItem(p, J))), Y({}, t(y, f), {
                _persist: g
            });
            if (f.type === L) return f.result(a && a.flush()), Y({}, t(y, f), {
                _persist: g
            });
            if (f.type === V) s = !0;
            else if (f.type === R) {
                if (l) return Y({}, y, {
                    _persist: Y({}, g, {
                        rehydrated: !0
                    })
                });
                if (f.key === e.key) {
                    var S = t(y, f),
                        w = f.payload;
                    return u(Y({}, !1 !== r && void 0 !== w ? r(w, d, S, e) : S, {
                        _persist: Y({}, g, {
                            rehydrated: !0
                        })
                    }))
                }
            }
            if (!g) return t(d, f);
            var M = t(y, f);
            return M === y ? d : u(Y({}, M, {
                _persist: g
            }))
        }
    }
    var X = e.i(606581);

    function ee(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function et(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), i.push.apply(i, r)
        }
        return i
    }

    function ei(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? et(i, !0).forEach(function(t) {
                var r, o, n;
                r = e, o = t, n = i[t], o in r ? Object.defineProperty(r, o, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = n
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : et(i).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return e
    }
    var er = {
            registry: [],
            bootstrapped: !1
        },
        eo = e.i(649725);
    let en = {
            key: "root",
            storage: Q.default,
            whitelist: ["auth", "drawer"]
        },
        ea = $(en, T.default),
        el = $(en, I.default),
        es = (0, D.configureStore)({
            reducer: {
                auth: ea,
                drawer: el
            },
            middleware: e => e({
                serializableCheck: {
                    ignoredActions: [L, R, V, H, B, U]
                }
            })
        }),
        eu = (t = !1, i = (0, X.createStore)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case U:
                    return ei({}, e, {
                        registry: [].concat(ee(e.registry), [t.key])
                    });
                case R:
                    var i = e.registry.indexOf(t.key),
                        r = ee(e.registry);
                    return r.splice(i, 1), ei({}, e, {
                        registry: r,
                        bootstrapped: 0 === r.length
                    });
                default:
                    return e
            }
        }, er, void 0), r = function(e) {
            i.dispatch({
                type: U,
                key: e
            })
        }, o = function(e, r, o) {
            var a = {
                type: R,
                payload: r,
                err: o,
                key: e
            };
            es.dispatch(a), i.dispatch(a), t && n.getState().bootstrapped && (t(), t = !1)
        }, (n = ei({}, i, {
            purge: function() {
                var e = [];
                return es.dispatch({
                    type: B,
                    result: function(t) {
                        e.push(t)
                    }
                }), Promise.all(e)
            },
            flush: function() {
                var e = [];
                return es.dispatch({
                    type: L,
                    result: function(t) {
                        e.push(t)
                    }
                }), Promise.all(e)
            },
            pause: function() {
                es.dispatch({
                    type: V
                })
            },
            persist: function() {
                es.dispatch({
                    type: H,
                    register: r,
                    rehydrate: o
                })
            }
        })).persist(), n);

    function ed(e) {
        let {
            children: t
        } = e;
        return (0, b.jsx)(P.Provider, {
            store: es,
            children: (0, b.jsx)(j, {
                loading: null,
                persistor: eu,
                children: t
            })
        })
    }(0, eo.injectStore)(es);
    var ef = e.i(376054),
        ec = e.i(136927),
        ep = e.i(550475),
        eh = e.i(303069);

    function eg(e, t) {
        var i = (0, eh._)(e, t, "update");
        if (i.set) {
            if (!i.get) throw TypeError("attempted to read set only private field");
            return "__destrWrapper" in i || (i.__destrWrapper = {
                set value(v) {
                    i.set.call(e, v)
                },
                get value() {
                    return i.get.call(e)
                }
            }), i.__destrWrapper
        }
        if (!i.writable) throw TypeError("attempted to set read only private field");
        return i
    }
    var ey = e.i(879994),
        em = e.i(87147),
        ev = e.i(318459),
        eb = e.i(423216),
        eS = (a = new WeakMap, class extends eb.Subscribable {
            build(e, t, i) {
                var r;
                let o = t.queryKey,
                    n = null != (r = t.queryHash) ? r : (0, ey.hashQueryKeyByOptions)(o, t),
                    a = this.get(n);
                return a || (a = new em.Query({
                    client: e,
                    queryKey: o,
                    queryHash: n,
                    options: e.defaultQueryOptions(t),
                    state: i,
                    defaultOptions: e.getQueryDefaults(o)
                }), this.add(a)), a
            }
            add(e) {
                (0, ef._)(this, a).has(e.queryHash) || ((0, ef._)(this, a).set(e.queryHash, e), this.notify({
                    type: "added",
                    query: e
                }))
            }
            remove(e) {
                let t = (0, ef._)(this, a).get(e.queryHash);
                t && (e.destroy(), t === e && (0, ef._)(this, a).delete(e.queryHash), this.notify({
                    type: "removed",
                    query: e
                }))
            }
            clear() {
                ev.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        this.remove(e)
                    })
                })
            }
            get(e) {
                return (0, ef._)(this, a).get(e)
            }
            getAll() {
                return [...(0, ef._)(this, a).values()]
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, ey.matchQuery)(t, e))
            }
            findAll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0, ey.matchQuery)(e, t)) : t
            }
            notify(e) {
                ev.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            onFocus() {
                ev.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onFocus()
                    })
                })
            }
            onOnline() {
                ev.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onOnline()
                    })
                })
            }
            constructor(e = {}) {
                super(), (0, ec._)(this, a, {
                    writable: !0,
                    value: void 0
                }), this.config = e, (0, ep._)(this, a, new Map)
            }
        }),
        ew = e.i(614988),
        eM = eb,
        eO = (l = new WeakMap, s = new WeakMap, u = new WeakMap, class extends eM.Subscribable {
            build(e, t, i) {
                let r = new ew.Mutation({
                    client: e,
                    mutationCache: this,
                    mutationId: ++eg(this, u).value,
                    options: e.defaultMutationOptions(t),
                    state: i
                });
                return this.add(r), r
            }
            add(e) {
                (0, ef._)(this, l).add(e);
                let t = eP(e);
                if ("string" == typeof t) {
                    let i = (0, ef._)(this, s).get(t);
                    i ? i.push(e) : (0, ef._)(this, s).set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if ((0, ef._)(this, l).delete(e)) {
                    let t = eP(e);
                    if ("string" == typeof t) {
                        let i = (0, ef._)(this, s).get(t);
                        if (i)
                            if (i.length > 1) {
                                let t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
                            } else i[0] === e && (0, ef._)(this, s).delete(t)
                    }
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = eP(e);
                if ("string" != typeof t) return !0; {
                    let i = (0, ef._)(this, s).get(t),
                        r = null == i ? void 0 : i.find(e => "pending" === e.state.status);
                    return !r || r === e
                }
            }
            runNext(e) {
                let t = eP(e);
                if ("string" != typeof t) return Promise.resolve(); {
                    var i, r;
                    let o = null == (i = (0, ef._)(this, s).get(t)) ? void 0 : i.find(t => t !== e && t.state.isPaused);
                    return null != (r = null == o ? void 0 : o.continue()) ? r : Promise.resolve()
                }
            }
            clear() {
                ev.notifyManager.batch(() => {
                    (0, ef._)(this, l).forEach(e => {
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }), (0, ef._)(this, l).clear(), (0, ef._)(this, s).clear()
                })
            }
            getAll() {
                return Array.from((0, ef._)(this, l))
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, ey.matchMutation)(t, e))
            }
            findAll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.getAll().filter(t => (0, ey.matchMutation)(e, t))
            }
            notify(e) {
                ev.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e => e.state.isPaused);
                return ev.notifyManager.batch(() => Promise.all(e.map(e => e.continue().catch(ey.noop))))
            }
            constructor(e = {}) {
                super(), (0, ec._)(this, l, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, u, {
                    writable: !0,
                    value: void 0
                }), this.config = e, (0, ep._)(this, l, new Set), (0, ep._)(this, s, new Map), (0, ep._)(this, u, 0)
            }
        });

    function eP(e) {
        var t;
        return null == (t = e.options.scope) ? void 0 : t.id
    }
    var e_ = e.i(708347),
        eC = e.i(964463),
        ek = e.i(997837),
        eA = (d = new WeakMap, f = new WeakMap, c = new WeakMap, p = new WeakMap, h = new WeakMap, g = new WeakMap, y = new WeakMap, m = new WeakMap, class {
            mount() {
                eg(this, g).value++, 1 === (0, ef._)(this, g) && ((0, ep._)(this, y, e_.focusManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), (0, ef._)(this, d).onFocus())
                })), (0, ep._)(this, m, eC.onlineManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), (0, ef._)(this, d).onOnline())
                })))
            }
            unmount() {
                var e, t;
                eg(this, g).value--, 0 === (0, ef._)(this, g) && (null == (e = (0, ef._)(this, y)) || e.call(this), (0, ep._)(this, y, void 0), null == (t = (0, ef._)(this, m)) || t.call(this), (0, ep._)(this, m, void 0))
            }
            isFetching(e) {
                return (0, ef._)(this, d).findAll({ ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return (0, ef._)(this, f).findAll({ ...e,
                    status: "pending"
                }).length
            }
            getQueryData(e) {
                var t;
                let i = this.defaultQueryOptions({
                    queryKey: e
                });
                return null == (t = (0, ef._)(this, d).get(i.queryHash)) ? void 0 : t.state.data
            }
            ensureQueryData(e) {
                let t = this.defaultQueryOptions(e),
                    i = (0, ef._)(this, d).build(this, t),
                    r = i.state.data;
                return void 0 === r ? this.fetchQuery(e) : (e.revalidateIfStale && i.isStaleByTime((0, ey.resolveStaleTime)(t.staleTime, i)) && this.prefetchQuery(t), Promise.resolve(r))
            }
            getQueriesData(e) {
                return (0, ef._)(this, d).findAll(e).map(e => {
                    let {
                        queryKey: t,
                        state: i
                    } = e;
                    return [t, i.data]
                })
            }
            setQueryData(e, t, i) {
                let r = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    o = (0, ef._)(this, d).get(r.queryHash),
                    n = null == o ? void 0 : o.state.data,
                    a = (0, ey.functionalUpdate)(t, n);
                if (void 0 !== a) return (0, ef._)(this, d).build(this, r).setData(a, { ...i,
                    manual: !0
                })
            }
            setQueriesData(e, t, i) {
                return ev.notifyManager.batch(() => (0, ef._)(this, d).findAll(e).map(e => {
                    let {
                        queryKey: r
                    } = e;
                    return [r, this.setQueryData(r, t, i)]
                }))
            }
            getQueryState(e) {
                var t;
                let i = this.defaultQueryOptions({
                    queryKey: e
                });
                return null == (t = (0, ef._)(this, d).get(i.queryHash)) ? void 0 : t.state
            }
            removeQueries(e) {
                let t = (0, ef._)(this, d);
                ev.notifyManager.batch(() => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    })
                })
            }
            resetQueries(e, t) {
                let i = (0, ef._)(this, d);
                return ev.notifyManager.batch(() => (i.findAll(e).forEach(e => {
                    e.reset()
                }), this.refetchQueries({
                    type: "active",
                    ...e
                }, t)))
            }
            cancelQueries(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = {
                        revert: !0,
                        ...t
                    };
                return Promise.all(ev.notifyManager.batch(() => (0, ef._)(this, d).findAll(e).map(e => e.cancel(i)))).then(ey.noop).catch(ey.noop)
            }
            invalidateQueries(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return ev.notifyManager.batch(() => {
                    var i, r;
                    return ((0, ef._)(this, d).findAll(e).forEach(e => {
                        e.invalidate()
                    }), (null == e ? void 0 : e.refetchType) === "none") ? Promise.resolve() : this.refetchQueries({ ...e,
                        type: null != (r = null != (i = null == e ? void 0 : e.refetchType) ? i : null == e ? void 0 : e.type) ? r : "active"
                    }, t)
                })
            }
            refetchQueries(e) {
                var t;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = { ...i,
                        cancelRefetch: null == (t = i.cancelRefetch) || t
                    };
                return Promise.all(ev.notifyManager.batch(() => (0, ef._)(this, d).findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, r);
                    return r.throwOnError || (t = t.catch(ey.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(ey.noop)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let i = (0, ef._)(this, d).build(this, t);
                return i.isStaleByTime((0, ey.resolveStaleTime)(t.staleTime, i)) ? i.fetch(t) : Promise.resolve(i.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(ey.noop).catch(ey.noop)
            }
            fetchInfiniteQuery(e) {
                return e.behavior = (0, ek.infiniteQueryBehavior)(e.pages), this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(ey.noop).catch(ey.noop)
            }
            ensureInfiniteQueryData(e) {
                return e.behavior = (0, ek.infiniteQueryBehavior)(e.pages), this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return eC.onlineManager.isOnline() ? (0, ef._)(this, f).resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return (0, ef._)(this, d)
            }
            getMutationCache() {
                return (0, ef._)(this, f)
            }
            getDefaultOptions() {
                return (0, ef._)(this, c)
            }
            setDefaultOptions(e) {
                (0, ep._)(this, c, e)
            }
            setQueryDefaults(e, t) {
                (0, ef._)(this, p).set((0, ey.hashKey)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...(0, ef._)(this, p).values()],
                    i = {};
                return t.forEach(t => {
                    (0, ey.partialMatchKey)(e, t.queryKey) && Object.assign(i, t.defaultOptions)
                }), i
            }
            setMutationDefaults(e, t) {
                (0, ef._)(this, h).set((0, ey.hashKey)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...(0, ef._)(this, h).values()],
                    i = {};
                return t.forEach(t => {
                    (0, ey.partialMatchKey)(e, t.mutationKey) && Object.assign(i, t.defaultOptions)
                }), i
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                let t = { ...(0, ef._)(this, c).queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0, ey.hashQueryKeyByOptions)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ey.skipToken && (t.enabled = !1), t
            }
            defaultMutationOptions(e) {
                return (null == e ? void 0 : e._defaulted) ? e : { ...(0, ef._)(this, c).mutations,
                    ...(null == e ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                    ...e,
                    _defaulted: !0
                }
            }
            clear() {
                (0, ef._)(this, d).clear(), (0, ef._)(this, f).clear()
            }
            constructor(e = {}) {
                (0, ec._)(this, d, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, f, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, c, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, p, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, h, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, g, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, y, {
                    writable: !0,
                    value: void 0
                }), (0, ec._)(this, m, {
                    writable: !0,
                    value: void 0
                }), (0, ep._)(this, d, e.queryCache || new eS), (0, ep._)(this, f, e.mutationCache || new eO), (0, ep._)(this, c, e.defaultOptions || {}), (0, ep._)(this, p, new Map), (0, ep._)(this, h, new Map), (0, ep._)(this, g, 0)
            }
        }),
        ex = e.i(940948);

    function eE(e) {
        let {
            children: t
        } = e, [i] = (0, _.useState)(() => new eA({
            defaultOptions: {
                queries: {
                    staleTime: 6e4
                }
            }
        }));
        return (0, b.jsx)(ex.QueryClientProvider, {
            client: i,
            children: t
        })
    }
    e.i(308972);
    var ej = e.i(386926),
        eD = e.i(495839),
        eT = e.i(175868);
    let {
        slice: eI,
        forEach: eQ
    } = [], eF = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, eL = function(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                path: "/"
            },
            r = encodeURIComponent(t),
            o = "".concat(e, "=").concat(r);
        if (i.maxAge > 0) {
            let e = i.maxAge - 0;
            if (Number.isNaN(e)) throw Error("maxAge should be a Number");
            o += "; Max-Age=".concat(Math.floor(e))
        }
        if (i.domain) {
            if (!eF.test(i.domain)) throw TypeError("option domain is invalid");
            o += "; Domain=".concat(i.domain)
        }
        if (i.path) {
            if (!eF.test(i.path)) throw TypeError("option path is invalid");
            o += "; Path=".concat(i.path)
        }
        if (i.expires) {
            if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
            o += "; Expires=".concat(i.expires.toUTCString())
        }
        if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
            case !0:
            case "strict":
                o += "; SameSite=Strict";
                break;
            case "lax":
                o += "; SameSite=Lax";
                break;
            case "none":
                o += "; SameSite=None";
                break;
            default:
                throw TypeError("option sameSite is invalid")
        }
        return i.partitioned && (o += "; Partitioned"), o
    }, eR = {
        create(e, t, i, r) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            i && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * i * 1e3)), r && (o.domain = r), document.cookie = eL(e, t, o)
        },
        read(e) {
            let t = "".concat(e, "="),
                i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
                let r = i[e];
                for (;
                    " " === r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return null
        },
        remove(e, t) {
            this.create(e, "", -1, t)
        }
    };
    var eV = {
            name: "cookie",
            lookup(e) {
                let {
                    lookupCookie: t
                } = e;
                if (t && "undefined" != typeof document) return eR.read(t) || void 0
            },
            cacheUserLanguage(e, t) {
                let {
                    lookupCookie: i,
                    cookieMinutes: r,
                    cookieDomain: o,
                    cookieOptions: n
                } = t;
                i && "undefined" != typeof document && eR.create(i, e, r, o, n)
            }
        },
        eH = {
            name: "querystring",
            lookup(e) {
                let t, {
                    lookupQuerystring: i
                } = e;
                if ("undefined" != typeof window) {
                    var r;
                    let {
                        search: e
                    } = window.location;
                    !window.location.search && (null == (r = window.location.hash) ? void 0 : r.indexOf("?")) > -1 && (e = window.location.hash.substring(window.location.hash.indexOf("?")));
                    let o = e.substring(1).split("&");
                    for (let e = 0; e < o.length; e++) {
                        let r = o[e].indexOf("=");
                        r > 0 && o[e].substring(0, r) === i && (t = o[e].substring(r + 1))
                    }
                }
                return t
            }
        },
        eB = {
            name: "hash",
            lookup(e) {
                let t, {
                    lookupHash: i,
                    lookupFromHashIndex: r
                } = e;
                if ("undefined" != typeof window) {
                    let {
                        hash: e
                    } = window.location;
                    if (e && e.length > 2) {
                        let n = e.substring(1);
                        if (i) {
                            let e = n.split("&");
                            for (let r = 0; r < e.length; r++) {
                                let o = e[r].indexOf("=");
                                o > 0 && e[r].substring(0, o) === i && (t = e[r].substring(o + 1))
                            }
                        }
                        if (t) return t;
                        if (!t && r > -1) {
                            var o;
                            let t = e.match(/\/([a-zA-Z-]*)/g);
                            if (!Array.isArray(t)) return;
                            return null == (o = t["number" == typeof r ? r : 0]) ? void 0 : o.replace("/", "")
                        }
                    }
                }
                return t
            }
        };
    let eU = null,
        eq = () => {
            if (null !== eU) return eU;
            try {
                if (!(eU = "undefined" != typeof window && null !== window.localStorage)) return !1;
                let e = "i18next.translate.boo";
                window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
            } catch (e) {
                eU = !1
            }
            return eU
        };
    var eW = {
        name: "localStorage",
        lookup(e) {
            let {
                lookupLocalStorage: t
            } = e;
            if (t && eq()) return window.localStorage.getItem(t) || void 0
        },
        cacheUserLanguage(e, t) {
            let {
                lookupLocalStorage: i
            } = t;
            i && eq() && window.localStorage.setItem(i, e)
        }
    };
    let eN = null,
        eK = () => {
            if (null !== eN) return eN;
            try {
                if (!(eN = "undefined" != typeof window && null !== window.sessionStorage)) return !1;
                let e = "i18next.translate.boo";
                window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
            } catch (e) {
                eN = !1
            }
            return eN
        };
    var ez = {
            name: "sessionStorage",
            lookup(e) {
                let {
                    lookupSessionStorage: t
                } = e;
                if (t && eK()) return window.sessionStorage.getItem(t) || void 0
            },
            cacheUserLanguage(e, t) {
                let {
                    lookupSessionStorage: i
                } = t;
                i && eK() && window.sessionStorage.setItem(i, e)
            }
        },
        eG = {
            name: "navigator",
            lookup(e) {
                let t = [];
                if ("undefined" != typeof navigator) {
                    let {
                        languages: e,
                        userLanguage: i,
                        language: r
                    } = navigator;
                    if (e)
                        for (let i = 0; i < e.length; i++) t.push(e[i]);
                    i && t.push(i), r && t.push(r)
                }
                return t.length > 0 ? t : void 0
            }
        },
        eJ = {
            name: "htmlTag",
            lookup(e) {
                let t, {
                        htmlTag: i
                    } = e,
                    r = i || ("undefined" != typeof document ? document.documentElement : null);
                return r && "function" == typeof r.getAttribute && (t = r.getAttribute("lang")), t
            }
        },
        eZ = {
            name: "path",
            lookup(e) {
                var t;
                let {
                    lookupFromPathIndex: i
                } = e;
                if ("undefined" == typeof window) return;
                let r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                if (Array.isArray(r)) return null == (t = r["number" == typeof i ? i : 0]) ? void 0 : t.replace("/", "")
            }
        },
        eY = {
            name: "subdomain",
            lookup(e) {
                var t, i;
                let {
                    lookupFromSubdomainIndex: r
                } = e, o = "undefined" != typeof window && (null == (i = window.location) || null == (t = i.hostname) ? void 0 : t.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
                if (o) return o["number" == typeof r ? r + 1 : 1]
            }
        };
    let e$ = !1;
    try {
        document.cookie, e$ = !0
    } catch (e) {}
    let eX = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
    e$ || eX.splice(1, 1);
    class e0 {
        init() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    languageUtils: {}
                },
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.services = e, this.options = function(e) {
                return eQ.call(eI.call(arguments, 1), t => {
                    if (t)
                        for (let i in t) void 0 === e[i] && (e[i] = t[i])
                }), e
            }(t, this.options || {}, {
                order: eX,
                lookupQuerystring: "lng",
                lookupCookie: "i18next",
                lookupLocalStorage: "i18nextLng",
                lookupSessionStorage: "i18nextLng",
                caches: ["localStorage"],
                excludeCacheFor: ["cimode"],
                convertDetectedLanguage: e => e
            }), "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = e => e.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(eV), this.addDetector(eH), this.addDetector(eW), this.addDetector(ez), this.addDetector(eG), this.addDetector(eJ), this.addDetector(eZ), this.addDetector(eY), this.addDetector(eB)
        }
        addDetector(e) {
            return this.detectors[e.name] = e, this
        }
        detect() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.order,
                t = [];
            return (e.forEach(e => {
                if (this.detectors[e]) {
                    let i = this.detectors[e].lookup(this.options);
                    i && "string" == typeof i && (i = [i]), i && (t = t.concat(i))
                }
            }), t = t.filter(e => null != e && !("string" == typeof e && [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(t => t.test(e)))).map(e => this.options.convertDetectedLanguage(e)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) ? t : t.length > 0 ? t[0] : null
        }
        cacheUserLanguage(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.caches;
            !t || this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach(t => {
                this.detectors[t] && this.detectors[t].cacheUserLanguage(e, this.options)
            })
        }
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.type = "languageDetector", this.detectors = {}, this.init(e, t)
        }
    }
    e0.type = "languageDetector";
    var e1 = e.i(476659),
        e7 = e.i(448583),
        e8 = e.i(446983),
        e4 = e.i(238914),
        e6 = e.i(343202),
        e5 = e.i(13929),
        e3 = e.i(317852),
        e9 = e.i(765760),
        e2 = e.i(969348),
        te = e.i(800119),
        tt = e.i(39779),
        ti = e.i(61162),
        tr = e.i(490659),
        to = e.i(573413),
        tn = e.i(291117),
        ta = e.i(881441),
        tl = e.i(522108),
        ts = e.i(862968),
        tu = e.i(864454),
        td = e.i(383971),
        tf = e.i(916235),
        tc = e.i(497496),
        tp = e.i(530234),
        th = e.i(13216),
        tg = e.i(195525),
        ty = e.i(3573),
        tm = e.i(808808),
        tv = e.i(40057),
        tb = e.i(662675),
        tS = e.i(686913),
        tw = e.i(301513),
        tM = e.i(245108),
        tO = e.i(77603),
        tP = e.i(277832),
        t_ = e.i(684294),
        tC = e.i(97193),
        tk = e.i(572887),
        tA = e.i(816412),
        tx = e.i(998867),
        tE = e.i(433946),
        tj = e.i(432882),
        tD = e.i(510861),
        tT = e.i(236467),
        tI = e.i(200510),
        tQ = e.i(348714),
        tF = e.i(881634),
        tL = e.i(647834),
        tR = e.i(143705),
        tV = e.i(573196),
        tH = e.i(376823),
        tB = e.i(342398),
        tU = e.i(626886),
        tq = e.i(54440),
        tW = e.i(891501),
        tN = e.i(492406),
        tK = e.i(579793),
        tz = e.i(871672),
        tG = e.i(759819),
        tJ = e.i(937179),
        tZ = e.i(717611),
        tY = e.i(437767),
        t$ = e.i(305792),
        tX = e.i(878339),
        t0 = e.i(359391),
        t1 = e.i(895564),
        t7 = e.i(196935),
        t8 = e.i(688666),
        t4 = e.i(761002),
        t6 = e.i(518880),
        t5 = e.i(889648),
        t3 = e.i(875593),
        t9 = e.i(398975),
        t2 = e.i(504005),
        ie = e.i(506407),
        it = e.i(975385),
        ii = e.i(554524),
        ir = e.i(574488),
        io = e.i(30573),
        ia = e.i(751945),
        il = e.i(921587),
        is = e.i(53711),
        iu = e.i(667038),
        id = e.i(4741),
        ic = e.i(785125),
        ip = e.i(326637),
        ih = e.i(454599),
        ig = e.i(569467),
        iy = e.i(469894),
        im = e.i(158822),
        iv = e.i(261071),
        ib = e.i(224785),
        iS = e.i(531083),
        iw = e.i(741006),
        iM = e.i(21479),
        iO = e.i(525286),
        iP = e.i(379726),
        i_ = e.i(247434),
        iC = e.i(51808),
        ik = e.i(17781),
        iA = e.i(219730),
        ix = e.i(218410),
        iE = e.i(467406),
        ij = e.i(332651),
        iD = e.i(484911),
        iT = e.i(290136),
        iI = e.i(66656),
        iQ = e.i(462857),
        iF = e.i(515996),
        iL = e.i(430824),
        iR = e.i(812717),
        iV = e.i(868778),
        iH = e.i(233018),
        iB = e.i(131668),
        iU = e.i(576597),
        iq = e.i(810933),
        iW = e.i(342729),
        iN = e.i(561650),
        iK = e.i(117934),
        iz = e.i(781402),
        iG = e.i(444857),
        iJ = e.i(543661),
        iZ = e.i(440343),
        iY = e.i(818122),
        i$ = e.i(27061),
        iX = e.i(704972),
        i0 = e.i(999241),
        i1 = e.i(466077),
        i7 = e.i(847712),
        i8 = e.i(374463),
        i4 = e.i(611671),
        i6 = e.i(475671),
        i5 = e.i(858026),
        i3 = e.i(187798),
        i9 = e.i(483935),
        i2 = e.i(162150),
        re = e.i(613267),
        rt = e.i(178521),
        ri = e.i(568152),
        rr = e.i(415526),
        ro = e.i(802019),
        rn = e.i(562543),
        ra = e.i(49283),
        rl = e.i(845169),
        rs = e.i(586845),
        ru = e.i(227195),
        rd = e.i(645066),
        rf = e.i(341073),
        rc = e.i(603387),
        rp = e.i(677482),
        rh = e.i(215983),
        rg = e.i(420674),
        ry = e.i(256011),
        rm = e.i(400060),
        rv = e.i(327213),
        rb = e.i(219122),
        rS = e.i(293983),
        rw = e.i(265858),
        rM = e.i(776881),
        rO = e.i(279447),
        rP = e.i(573438),
        r_ = e.i(952558),
        rC = e.i(449051),
        rk = e.i(470804),
        rA = e.i(63380),
        rx = e.i(504426),
        rE = e.i(114573),
        rj = e.i(878680),
        rD = e.i(700473),
        rT = e.i(609572),
        rI = e.i(251746),
        rQ = e.i(915667),
        rF = e.i(163404),
        rL = e.i(844955),
        rR = e.i(875719),
        rV = e.i(250757),
        rH = e.i(994650),
        rB = e.i(830597),
        rU = e.i(54372),
        rq = e.i(960019),
        rW = e.i(507705),
        rN = e.i(488480),
        rK = e.i(921616),
        rz = e.i(138441),
        rG = e.i(355233),
        rJ = e.i(464147),
        rZ = e.i(189823),
        rY = e.i(995063),
        r$ = e.i(374576),
        rX = e.i(59362),
        r0 = e.i(718506),
        r1 = e.i(347562),
        r7 = e.i(891653),
        r8 = e.i(856362),
        r4 = e.i(74037),
        r6 = e.i(788134),
        r5 = e.i(419119),
        r3 = e.i(232270),
        r9 = e.i(166249),
        r2 = e.i(200747),
        oe = e.i(721003),
        ot = e.i(189747),
        oi = e.i(92147),
        or = e.i(592074),
        oo = e.i(208114),
        on = e.i(968804),
        oa = e.i(520204),
        ol = e.i(978994),
        os = e.i(264399),
        ou = e.i(52958),
        od = e.i(739794),
        of = e.i(466338),
        oc = e.i(290856),
        op = e.i(115032),
        oh = e.i(558905),
        og = e.i(338950),
        oy = e.i(100115),
        om = e.i(357355),
        ov = e.i(533716),
        ob = e.i(164473),
        oS = e.i(523372),
        ow = e.i(609008),
        oM = e.i(554649),
        oO = e.i(78102),
        oP = e.i(193749),
        o_ = e.i(424891),
        oC = e.i(137738),
        ok = e.i(748980);
    let oA = (0, e1.isStorageAvailable)("localStorage");
    eD.default.use(e0).use(eT.initReactI18next).init({
        resources: {
            en: {
                translation: { ...tw.default,
                    account: e7.default,
                    agent: e8.default,
                    agentTopupModal: e4.default,
                    auth: e6.default,
                    brideGroom: e5.default,
                    dealer: e3.default,
                    domain: e9.default,
                    home: e2.default,
                    invitation: te.default,
                    page: tt.default,
                    permissions: ti.default,
                    photobooth: tr.default,
                    pricing: to.default,
                    privacy: tn.default,
                    upgradePlan: iO.default,
                    productAffiliates: ta.default,
                    referral: tl.default,
                    settings: ts.default,
                    template: tu.default,
                    templateWedding: td.default,
                    templateInvite: tf.default,
                    userManager: tc.default,
                    videos: tp.default,
                    wedding: th.default,
                    weddingHome: tg.default,
                    inviteHome: ty.default,
                    feedback: tm.default,
                    qrCode: tv.default,
                    fileSelect: tb.default,
                    designSupport: tS.default,
                    notification: tM.default,
                    adminTemplate: iP.default,
                    photoStorage: i_.default,
                    adminPhotoStorage: iC.default,
                    pageSlot: ik.default,
                    adminPageSlot: iA.default,
                    pageDuration: ix.default,
                    adminPageDuration: iE.default,
                    adminAssets: ij.default,
                    adminPlanFeature: iF.default,
                    adminAnalytics: iL.default,
                    editorComponentsSections: tO.default,
                    editorComponentsAnimationManager: t_.default,
                    editorComponentsAssetSaveModal: tC.default,
                    editorComponentsAudioSettingsModal: tk.default,
                    editorComponentsCalendarProviderModal: tA.default,
                    editorComponentsCommonSettings: tx.default,
                    editorComponentsColorPickerModal: tE.default,
                    editorComponentsCreateCustomAudioModal: tj.default,
                    editorComponentsCrossPlatformSyncToggle: tD.default,
                    editorComponentsCustomEffectsModal: tT.default,
                    editorComponentsCustomHtmlSettingsModal: tI.default,
                    editorComponentsElementIdEditModal: tQ.default,
                    editorComponentsEventManager: tF.default,
                    editorComponentsFileManagementModal: tL.default,
                    editorComponentsFileSelectModal: tR.default,
                    editorComponentsFontSelectModal: tV.default,
                    editorComponentsGroupActionButtons: tH.default,
                    editorComponentsIconPickerModal: tB.default,
                    editorComponentsNodeControls: tU.default,
                    editorComponentsNodeControlsPanel: tq.default,
                    editorComponentsNotificationSettingsModal: tW.default,
                    editorComponentsParticleEffectsModal: tN.default,
                    editorComponentsPinningManager: tK.default,
                    editorComponentsSectionBottomIndicator: tz.default,
                    editorComponentsSectionsNodeControlsPanel: tG.default,
                    editorComponentsSelectionBox: tJ.default,
                    editorComponentsSEOSettingsModal: tZ.default,
                    editorComponentsStyledFontSelector: tY.default,
                    editorComponentsViewportSettingsModal: t$.default,
                    editorModalsAutoFillInfoModal: tX.default,
                    editorModalsCollaborativeEditingModal: t0.default,
                    editorModalsPageSelectionModal: t1.default,
                    editorToolbar: t7.default,
                    editorViewportSidebar: t8.default,
                    editorViewportElementsPopup: t4.default,
                    editorViewportHeader: t6.default,
                    editorViewportLayerPopup: t5.default,
                    editorViewportCustomLayerSystem: t3.default,
                    editorViewportQRCodeSettingsModal: t9.default,
                    editorViewportShareButton: t2.default,
                    editorViewport: ie.default,
                    editorViewportContext: iD.default,
                    editorRenderNode: it.default,
                    ...tP.default,
                    notFound: ii.default,
                    editorSelectorsAlbumModalSettings: ir.default,
                    editorSelectorsAlbumModal: io.default,
                    editorSelectorsAlbumSection: ia.default,
                    editorSelectorsButtonSettings: il.default,
                    editorSelectorsCalendarSettings: is.default,
                    editorSelectorsCountSettings: iu.default,
                    editorSelectorsFormSettings: id.default,
                    editorSelectorsHtmlSelector: ic.default,
                    editorSelectorsIconSettings: ip.default,
                    editorSelectorsImageSettings: ih.default,
                    editorSelectorsInputSettings: ig.default,
                    editorSelectorsLineSettings: iy.default,
                    editorSelectorsPopupSettings: im.default,
                    editorSelectorsQuickActionsSettings: iv.default,
                    editorSelectorsTextSettings: ib.default,
                    editorSelectorsVideoSettings: iS.default,
                    editorSelectorsWishListSettings: iw.default,
                    editorComponentsOpeningEffectModal: iT.default,
                    editorSelectorsMapSelector: iI.default,
                    editorModalsMapLocationPicker: iQ.default,
                    publicPages: iR.default,
                    editorComponentsTypography: iV.default,
                    terms: iH.default,
                    payment: iB.default,
                    support: iU.default,
                    ...iM.default
                }
            },
            vi: {
                translation: { ...rs.default,
                    account: iq.default,
                    agent: iW.default,
                    agentTopupModal: iN.default,
                    auth: iK.default,
                    brideGroom: iz.default,
                    dealer: iG.default,
                    domain: iJ.default,
                    home: iZ.default,
                    invitation: iY.default,
                    page: i$.default,
                    permissions: iX.default,
                    photobooth: i0.default,
                    pricing: i1.default,
                    privacy: i7.default,
                    upgradePlan: os.default,
                    productAffiliates: i8.default,
                    referral: i4.default,
                    settings: i6.default,
                    template: i5.default,
                    templateWedding: i3.default,
                    templateInvite: i9.default,
                    userManager: i2.default,
                    videos: re.default,
                    wedding: rt.default,
                    weddingHome: ri.default,
                    inviteHome: rr.default,
                    feedback: ro.default,
                    qrCode: rn.default,
                    fileSelect: ra.default,
                    designSupport: rl.default,
                    adminTemplate: ou.default,
                    photoStorage: od.default,
                    adminPhotoStorage: of .default,
                    pageSlot: oc.default,
                    adminPageSlot: op.default,
                    pageDuration: oh.default,
                    adminPageDuration: og.default,
                    adminAssets: oy.default,
                    adminPlanFeature: ow.default,
                    adminAnalytics: oM.default,
                    notification: ru.default,
                    editorComponentsSections: rd.default,
                    editorComponentsAnimationManager: rc.default,
                    editorComponentsAssetSaveModal: rp.default,
                    editorComponentsAudioSettingsModal: rh.default,
                    editorComponentsCalendarProviderModal: rg.default,
                    editorComponentsCommonSettings: ry.default,
                    editorComponentsColorPickerModal: rm.default,
                    editorComponentsCreateCustomAudioModal: rv.default,
                    editorComponentsCrossPlatformSyncToggle: rb.default,
                    editorComponentsCustomEffectsModal: rS.default,
                    editorComponentsCustomHtmlSettingsModal: rw.default,
                    editorComponentsElementIdEditModal: rM.default,
                    editorComponentsEventManager: rO.default,
                    editorComponentsFileManagementModal: rP.default,
                    editorComponentsFileSelectModal: r_.default,
                    editorComponentsFontSelectModal: rC.default,
                    editorComponentsGroupActionButtons: rk.default,
                    editorComponentsIconPickerModal: rA.default,
                    editorComponentsNodeControls: rx.default,
                    editorComponentsNodeControlsPanel: rE.default,
                    editorComponentsNotificationSettingsModal: rj.default,
                    editorComponentsParticleEffectsModal: rD.default,
                    editorComponentsPinningManager: rT.default,
                    editorComponentsSectionBottomIndicator: rI.default,
                    editorComponentsSectionsNodeControlsPanel: rQ.default,
                    editorComponentsSelectionBox: rF.default,
                    editorComponentsSEOSettingsModal: rL.default,
                    editorComponentsStyledFontSelector: rR.default,
                    editorComponentsViewportSettingsModal: rV.default,
                    editorModalsAutoFillInfoModal: rH.default,
                    editorModalsCollaborativeEditingModal: rB.default,
                    editorModalsPageSelectionModal: rU.default,
                    editorToolbar: rq.default,
                    editorViewportSidebar: rW.default,
                    editorViewportElementsPopup: rN.default,
                    editorViewportHeader: rK.default,
                    editorViewportLayerPopup: rz.default,
                    editorViewportCustomLayerSystem: rG.default,
                    editorViewportQRCodeSettingsModal: rJ.default,
                    editorViewportShareButton: rZ.default,
                    editorViewport: rY.default,
                    editorViewportContext: om.default,
                    editorRenderNode: r$.default,
                    ...rf.default,
                    notFound: rX.default,
                    editorSelectorsAlbumModalSettings: r0.default,
                    editorSelectorsAlbumModal: r1.default,
                    editorSelectorsAlbumSection: r7.default,
                    editorSelectorsButtonSettings: r8.default,
                    editorSelectorsCalendarSettings: r4.default,
                    editorSelectorsCountSettings: r6.default,
                    editorSelectorsFormSettings: r5.default,
                    editorSelectorsHtmlSelector: r3.default,
                    editorSelectorsIconSettings: r9.default,
                    editorSelectorsImageSettings: r2.default,
                    editorSelectorsInputSettings: oe.default,
                    editorSelectorsLineSettings: ot.default,
                    editorSelectorsPopupSettings: oi.default,
                    editorSelectorsQuickActionsSettings: or.default,
                    editorSelectorsTextSettings: oo.default,
                    editorSelectorsVideoSettings: on.default,
                    editorSelectorsWishListSettings: oa.default,
                    editorComponentsOpeningEffectModal: ov.default,
                    editorSelectorsMapSelector: ob.default,
                    editorModalsMapLocationPicker: oS.default,
                    publicPages: oO.default,
                    editorComponentsTypography: oP.default,
                    terms: o_.default,
                    payment: oC.default,
                    support: ok.default,
                    ...ol.default
                }
            }
        },
        lng: "vi",
        fallbackLng: "vi",
        interpolation: {
            escapeValue: !1
        },
        detection: {
            order: oA ? ["localStorage", "navigator"] : ["navigator"],
            caches: oA ? ["localStorage"] : []
        }
    });
    let ox = eD.default;

    function oE(e) {
        let {
            children: t
        } = e;
        return (0, b.jsx)(ej.I18nextProvider, {
            i18n: ox,
            children: t
        })
    }
    var oj = e.i(833707),
        oD = e.i(177848);

    function oT() {
        var e, t, i;
        let r = (0, oj.usePathname)(),
            o = (0, oj.useSearchParams)(),
            n = (0, P.useSelector)(T.selectAuth),
            a = (0, _.useRef)(""),
            l = (0, _.useMemo)(() => {
                let e = (null == o ? void 0 : o.toString()) || "";
                return e ? "".concat(r, "?").concat(e) : r || "/"
            }, [r, o]);
        return (0, _.useEffect)(() => {
            (0, oD.configureAnalyticsTracker)({
                getAccessToken: () => null == n ? void 0 : n.accessToken,
                getUserId: () => {
                    var e;
                    return null == n || null == (e = n.user) ? void 0 : e.id
                },
                getUserRole: () => {
                    var e;
                    return null == n || null == (e = n.user) ? void 0 : e.role
                }
            })
        }, [null == n ? void 0 : n.accessToken, null == n || null == (e = n.user) ? void 0 : e.id, null == n || null == (t = n.user) ? void 0 : t.role]), (0, _.useEffect)(() => ((0, oD.initializeAnalyticsTracker)(), () => {
            (0, oD.shutdownAnalyticsTracker)()
        }), []), (0, _.useEffect)(() => {
            l && a.current !== l && (a.current = l, (0, oD.trackPageView)())
        }, [l]), (0, _.useEffect)(() => {
            var e;
            (null == n ? void 0 : n.accessToken) && (0, oD.bindAnonymousToUser)(null == n || null == (e = n.user) ? void 0 : e.id)
        }, [null == n ? void 0 : n.accessToken, null == n || null == (i = n.user) ? void 0 : i.id]), null
    }

    function oI(e) {
        let {
            children: t
        } = e;
        return (0, b.jsxs)(ed, {
            children: [(0, b.jsx)(oT, {}), (0, b.jsx)(eE, {
                children: (0, b.jsx)(oE, {
                    children: (0, b.jsx)(O, {
                        children: t
                    })
                })
            })]
        })
    }
    e.s(["Providers", () => oI], 96923)
}]);

//# debugId=6ff54e8f-aadc-2cad-74b3-db6457d5d8ee
//# sourceMappingURL=060ab0dd0314ed8a.js.map