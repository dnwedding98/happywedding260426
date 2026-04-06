;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "840e826e-25c4-22e8-4c75-00bcd14d0cf2")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 878262, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(841158),
        s = e.i(251570),
        r = e.i(453325),
        n = e.i(520036);
    let a = e => {
            var i;
            let {
                children: a,
                disabled: u
            } = e, [c, h] = (0, s.useState)(null == (i = e.container) ? void 0 : i.current), d = (0, s.useSyncExternalStore)(o, () => !1, () => !0), {
                getRootNode: p
            } = (0, n.useEnvironmentContext)();
            if ((0, s.useEffect)(() => {
                    h(() => {
                        var t;
                        return null == (t = e.container) ? void 0 : t.current
                    })
                }, [e.container]), d || u) return (0, t.jsx)(t.Fragment, {
                children: a
            });
            let f = null != c ? c : l(p);
            return (0, t.jsx)(t.Fragment, {
                children: s.Children.map(a, e => (0, r.createPortal)(e, f))
            })
        },
        l = e => {
            let t = null == e ? void 0 : e(),
                s = t.getRootNode();
            return (0, i.isShadowRoot)(s) ? s : (0, i.getDocument)(t).body
        },
        o = () => () => {};
    e.s(["Portal", () => a])
}, 791089, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: i
    } = (0, e.i(285281).createRecipeContext)({
        key: "text"
    }), s = t("p");
    s.displayName = "Text", e.s(["Text", () => s])
}, 483591, e => {
    "use strict";
    var t = e.i(409078),
        i = e.i(251570);

    function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                name: s,
                strict: r = !0,
                hookName: n = "useContext",
                providerName: a = "Provider",
                errorMessage: l,
                defaultValue: o
            } = e,
            u = (0, i.createContext)(o);
        return u.displayName = s, [u.Provider, function e() {
            let s = (0, i.useContext)(u);
            if (!s && r) {
                let i = Error(null != l ? l : "".concat(n, " returned `undefined`. Seems you forgot to wrap component within ").concat(a));
                throw i.name = "ContextError", (0, t.hasProp)(Error, "captureStackTrace") && (0, t.isFunction)(Error.captureStackTrace) && Error.captureStackTrace(i, e), i
            }
            return s
        }, u]
    }
    e.s(["createContext", () => s])
}, 520036, e => {
    "use strict";
    let [t, i] = (0, e.i(483591).createContext)({
        name: "EnvironmentContext",
        hookName: "useEnvironmentContext",
        providerName: "<EnvironmentProvider />",
        strict: !1,
        defaultValue: {
            getRootNode: () => document,
            getDocument: () => document,
            getWindow: () => window
        }
    });
    e.s(["useEnvironmentContext", () => i])
}, 501829, e => {
    "use strict";
    var t = e.i(30500),
        i = e.i(409078),
        s = e.i(251570),
        r = e.i(453325),
        n = e.i(593006);
    e.i(483632);
    var a = void 0 !== globalThis.document ? s.useLayoutEffect : s.useEffect;

    function l(e) {
        var t, n;
        let l = null != (t = e().value) ? t : e().defaultValue,
            o = null != (n = e().isEqual) ? n : Object.is,
            [u] = (0, s.useState)(l),
            [c, h] = (0, s.useState)(u),
            d = void 0 !== e().value,
            p = (0, s.useRef)(c);
        p.current = d ? e().value : c;
        let f = (0, s.useRef)(p.current);
        return a(() => {
            f.current = p.current
        }, [c, e().value]), {
            initial: u,
            ref: p,
            get: function() {
                return d ? e().value : c
            },
            set(t) {
                (e().sync ? r.flushSync : i.identity)(() => (t => {
                    let s = f.current,
                        r = (0, i.isFunction)(t) ? t(s) : t;
                    if (e().debug && console.log("[bindable > ".concat(e().debug, "] setValue"), {
                            next: r,
                            prev: s
                        }), d || h(r), !o(r, s)) {
                        var n, a;
                        null == (n = (a = e()).onChange) || n.call(a, r, s)
                    }
                })(t))
            },
            invoke(t, i) {
                var s, r;
                null == (s = (r = e()).onChange) || s.call(r, t, i)
            },
            hash(t) {
                var i, s, r;
                return null != (r = null == (i = (s = e()).hash) ? void 0 : i.call(s, t)) ? r : String(t)
            }
        }
    }
    l.cleanup = e => {
        (0, s.useEffect)(() => e, [])
    }, l.ref = e => {
        let t = (0, s.useRef)(e);
        return {
            get: () => t.current,
            set: e => {
                t.current = e
            }
        }
    };
    var o = (e, t) => {
        let i = (0, s.useRef)(!1),
            r = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
            if (i.current && r.current) return t();
            r.current = !0
        }, [...(null != e ? e : []).map(e => "function" == typeof e ? e() : e)]), (0, s.useEffect)(() => (i.current = !0, () => {
            i.current = !1
        }), [])
    };

    function u(e) {
        var n, u, d, p, f, v, _;
        let m, g, b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            y = (0, s.useMemo)(() => {
                let {
                    id: e,
                    ids: i,
                    getRootNode: s
                } = b;
                return (0, t.createScope)({
                    id: e,
                    ids: i,
                    getRootNode: s
                })
            }, [b]),
            w = function() {
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                e.debug && console.log(...i)
            },
            S = (m = c(null != (f = null == (n = e.props) ? void 0 : n.call(e, {
                props: (0, i.compact)(b),
                scope: y
            })) ? f : b), function(e) {
                return m.current[e]
            }),
            R = c(null == (u = e.context) ? void 0 : u.call(e, {
                prop: S,
                bindable: l,
                scope: y,
                flush: h,
                getContext: () => x,
                getComputed: () => I,
                getRefs: () => N,
                getEvent: () => O()
            })),
            x = {
                get(e) {
                    var t;
                    return null == (t = R.current) ? void 0 : t[e].ref.current
                },
                set(e, t) {
                    var i;
                    null == (i = R.current) || i[e].set(t)
                },
                initial(e) {
                    var t;
                    return null == (t = R.current) ? void 0 : t[e].initial
                },
                hash(e) {
                    var t, i;
                    let s = null == (t = R.current) ? void 0 : t[e].get();
                    return null == (i = R.current) ? void 0 : i[e].hash(s)
                }
            },
            C = (0, s.useRef)(new Map),
            k = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            M = (0, s.useRef)({
                type: ""
            }),
            O = () => ({ ...M.current,
                current: () => M.current,
                previous: () => E.current
            }),
            T = () => ({ ...Q,
                matches() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return t.includes(Q.ref.current)
                },
                hasTag(t) {
                    var i, s;
                    return !!(null == (s = e.states[Q.ref.current]) || null == (i = s.tags) ? void 0 : i.includes(t))
                }
            }),
            N = (_ = null != (v = null == (d = e.refs) ? void 0 : d.call(e, {
                prop: S,
                context: x
            })) ? v : {}, g = (0, s.useRef)(_), {
                get: e => g.current[e],
                set(e, t) {
                    g.current[e] = t
                }
            }),
            W = () => ({
                state: T(),
                context: x,
                event: O(),
                prop: S,
                send: L,
                action: P,
                guard: j,
                track: o,
                refs: N,
                computed: I,
                flush: h,
                scope: y,
                choose: F
            }),
            P = t => {
                let s = (0, i.isFunction)(t) ? t(W()) : t;
                if (s)
                    for (let t of s.map(t => {
                            var s, r;
                            let n = null == (r = e.implementations) || null == (s = r.actions) ? void 0 : s[t];
                            return n || (0, i.warn)('[zag-js] No implementation found for action "'.concat(JSON.stringify(t), '"')), n
                        })) null == t || t(W())
            },
            j = t => {
                var s, r;
                return (0, i.isFunction)(t) ? t(W()) : null == (r = e.implementations) || null == (s = r.guards) ? void 0 : s[t](W())
            },
            U = t => {
                let s = (0, i.isFunction)(t) ? t(W()) : t;
                if (!s) return;
                let r = s.map(t => {
                        var s, r;
                        let n = null == (r = e.implementations) || null == (s = r.effects) ? void 0 : s[t];
                        return n || (0, i.warn)('[zag-js] No implementation found for effect "'.concat(JSON.stringify(t), '"')), n
                    }),
                    n = [];
                for (let e of r) {
                    let t = null == e ? void 0 : e(W());
                    t && n.push(t)
                }
                return () => n.forEach(e => null == e ? void 0 : e())
            },
            F = e => (0, i.toArray)(e).find(e => {
                let t = !e.guard;
                return (0, i.isString)(e.guard) ? t = !!j(e.guard) : (0, i.isFunction)(e.guard) && (t = e.guard(W())), t
            }),
            I = t => ((0, i.ensure)(e.computed, () => "[zag-js] No computed object found on machine"), (0, e.computed[t])({
                context: x,
                event: O(),
                prop: S,
                refs: N,
                scope: y,
                computed: I
            })),
            Q = l(() => ({
                defaultValue: e.initialState({
                    prop: S
                }),
                onChange(i, s) {
                    var r, n, a, l;
                    if (s) {
                        let e = C.current.get(s);
                        null == e || e(), C.current.delete(s)
                    }
                    s && P(null == (l = e.states[s]) ? void 0 : l.exit), P(null == (r = k.current) ? void 0 : r.actions);
                    let o = U(null == (n = e.states[i]) ? void 0 : n.effects);
                    if (o && C.current.set(i, o), s === t.INIT_STATE) {
                        P(e.entry);
                        let i = U(e.effects);
                        i && C.current.set(t.INIT_STATE, i)
                    }
                    P(null == (a = e.states[i]) ? void 0 : a.entry)
                }
            })),
            q = (0, s.useRef)(void 0),
            D = (0, s.useRef)(t.MachineStatus.NotStarted);
        a(() => {
            queueMicrotask(() => {
                var e;
                let i = D.current === t.MachineStatus.Started;
                D.current = t.MachineStatus.Started, w(i ? "rehydrating..." : "initializing...");
                let s = null != (e = q.current) ? e : Q.initial;
                Q.invoke(s, i ? Q.get() : t.INIT_STATE)
            });
            let i = C.current,
                s = Q.ref.current;
            return () => {
                w("unmounting..."), q.current = s, D.current = t.MachineStatus.Stopped, i.forEach(e => null == e ? void 0 : e()), C.current = new Map, k.current = null, queueMicrotask(() => {
                    P(e.exit)
                })
            }
        }, []);
        let L = i => {
            queueMicrotask(() => {
                var s, n, a, l, o;
                if (D.current !== t.MachineStatus.Started) return;
                E.current = M.current, M.current = i;
                let u = "ref" in Q ? Q.ref.current : Q.get(),
                    c = F(null != (a = null == (s = e.states[u].on) ? void 0 : s[i.type]) ? a : null == (n = e.on) ? void 0 : n[i.type]);
                if (!c) return;
                k.current = c;
                let h = null != (l = c.target) ? l : u;
                w("transition", i.type, c.target || u, "(".concat(c.actions, ")"));
                let d = h !== u;
                d ? (0, r.flushSync)(() => Q.set(h)) : c.reenter && !d ? Q.invoke(u, u) : P(null != (o = c.actions) ? o : [])
            })
        };
        return null == (p = e.watch) || p.call(e, W()), {
            state: T(),
            send: L,
            context: x,
            prop: S,
            scope: y,
            refs: N,
            computed: I,
            event: O(),
            getStatus: () => D.current
        }
    }

    function c(e) {
        let t = (0, s.useRef)(e);
        return t.current = e, t
    }

    function h(e) {
        queueMicrotask(() => {
            (0, r.flushSync)(() => e())
        })
    }
    var d = (0, n.createNormalizer)(e => e);
    e.s(["normalizeProps", () => d, "useMachine", () => u])
}, 904849, e => {
    "use strict";
    let [t, i] = (0, e.i(483591).createContext)({
        name: "LocaleContext",
        hookName: "useLocaleContext",
        providerName: "<LocaleProvider />",
        strict: !1,
        defaultValue: {
            dir: "ltr",
            locale: "en-US"
        }
    });
    e.s(["useLocaleContext", () => i])
}, 517913, e => {
    "use strict";

    function t() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return e => {
            let i = [];
            for (let s of t)
                if ("function" == typeof s) {
                    let t = s(e);
                    "function" == typeof t && i.push(t)
                } else s && (s.current = e);
            if (i.length) return () => {
                for (let e of i) e()
            }
        }
    }
    e.s(["composeRefs", () => t])
}, 173614, e => {
    "use strict";
    let t;
    var i = e.i(30500),
        s = e.i(251570),
        r = e.i(517913);
    let n = e => {
            let t = (0, s.memo)((0, s.forwardRef)((t, n) => {
                var a, l;
                let o, {
                    asChild: u,
                    children: c,
                    ...h
                } = t;
                if (!u) return (0, s.createElement)(e, { ...h,
                    ref: n
                }, c);
                if (!(0, s.isValidElement)(c)) return null;
                let d = s.Children.only(c),
                    p = (o = null == (a = Object.getOwnPropertyDescriptor(d.props, "ref")) ? void 0 : a.get) && "isReactWarning" in o && o.isReactWarning ? d.ref : (o = null == (l = Object.getOwnPropertyDescriptor(d, "ref")) ? void 0 : l.get) && "isReactWarning" in o && o.isReactWarning ? d.props.ref : d.props.ref || d.ref;
                return (0, s.cloneElement)(d, { ...(0, i.mergeProps)(h, d.props),
                    ref: n ? (0, r.composeRefs)(n, p) : p
                })
            }));
            return t.displayName = e.displayName || e.name, t
        },
        a = (t = new Map, new Proxy(n, {
            apply: (e, t, i) => n(i[0]),
            get: (e, i) => (t.has(i) || t.set(i, n(i)), t.get(i))
        }));
    e.s(["ark", () => a])
}, 664288, 179878, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        s = e.i(820512),
        r = e.i(476379),
        n = e.i(87065),
        a = e.i(198994),
        l = e.i(489198),
        o = e.i(13484);

    function u(e) {
        let {
            key: t,
            recipe: s
        } = e, r = (0, o.useChakraContext)();
        return (0, i.useMemo)(() => {
            let e = s || (null != t ? r.getSlotRecipe(t) : {});
            return r.sva(structuredClone(e))
        }, [t, s, r])
    }
    e.s(["useSlotRecipe", () => u], 179878);
    let c = e => {
        let o, {
                key: c,
                recipe: h
            } = e,
            d = (o = c || h.className || "Component").charAt(0).toUpperCase() + o.slice(1),
            [p, f] = (0, s.createContext)({
                name: "".concat(d, "StylesContext"),
                errorMessage: "use".concat(d, "Styles returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(d, '.Root />" ')
            }),
            [v, _] = (0, s.createContext)({
                name: "".concat(d, "ClassNameContext"),
                errorMessage: "use".concat(d, "ClassNames returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(d, '.Root />" '),
                strict: !1
            }),
            [m, g] = (0, s.createContext)({
                strict: !1,
                name: "".concat(d, "PropsContext"),
                providerName: "".concat(d, "PropsContext"),
                defaultValue: {}
            });

        function b(e) {
            let {
                unstyled: t,
                ...s
            } = e, r = u({
                key: c,
                recipe: s.recipe || h
            }), [n, l] = (0, i.useMemo)(() => r.splitVariantProps(s), [s, r]);
            return {
                styles: (0, i.useMemo)(() => t ? a.EMPTY_SLOT_STYLES : r(n), [t, n, r]),
                classNames: r.classNameMap,
                props: l
            }
        }
        return {
            StylesProvider: p,
            ClassNamesProvider: v,
            PropsProvider: m,
            usePropsContext: g,
            useRecipeResult: b,
            withProvider: (e, s, a) => {
                let {
                    defaultProps: o,
                    ...u
                } = null != a ? a : {}, c = (0, l.chakra)(e, {}, u), h = (0, i.forwardRef)((e, l) => {
                    var u, h;
                    let d = g(),
                        f = (0, i.useMemo)(() => (0, r.mergeProps)(null != o ? o : {}, d, e), [d, e]),
                        {
                            styles: _,
                            props: m,
                            classNames: y
                        } = b(f),
                        w = y[s],
                        S = (0, t.jsx)(p, {
                            value: _,
                            children: (0, t.jsx)(v, {
                                value: y,
                                children: (0, t.jsx)(c, {
                                    ref: l,
                                    ...m,
                                    css: [_[s], f.css],
                                    className: (0, n.cx)(f.className, w)
                                })
                            })
                        });
                    return null != (h = null == a || null == (u = a.wrapElement) ? void 0 : u.call(a, S, f)) ? h : S
                });
                return h.displayName = e.displayName || e.name, h
            },
            withContext: (e, s, r) => {
                let a = (0, l.chakra)(e, {}, r),
                    o = (0, i.forwardRef)((e, i) => {
                        let {
                            unstyled: r,
                            ...l
                        } = e, o = f(), u = _(), c = null == u ? void 0 : u[s];
                        return (0, t.jsx)(a, { ...l,
                            css: [!r && s ? o[s] : void 0, e.css],
                            ref: i,
                            className: (0, n.cx)(e.className, c)
                        })
                    });
                return o.displayName = e.displayName || e.name, o
            },
            withRootProvider: function(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        defaultProps: n
                    } = s,
                    a = s => {
                        let a = g(),
                            {
                                styles: l,
                                classNames: o,
                                props: u
                            } = b((0, i.useMemo)(() => (0, r.mergeProps)(n, a, s), [a, s]));
                        return (0, t.jsx)(p, {
                            value: l,
                            children: (0, t.jsx)(v, {
                                value: o,
                                children: (0, t.jsx)(e, { ...u
                                })
                            })
                        })
                    };
                return a.displayName = e.displayName || e.name, a
            },
            useStyles: f,
            useClassNames: _
        }
    };
    e.s(["createSlotRecipeContext", () => c], 664288)
}, 215669, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        s = e.i(389868);
    let r = (0, i.forwardRef)(function(e, i) {
        return (0, t.jsx)(s.Stack, {
            align: "center",
            ...e,
            direction: "row",
            ref: i
        })
    });
    r.displayName = "HStack", e.s(["HStack", () => r])
}, 341061, e => {
    "use strict";
    let t = () => (e, t) => t.reduce((e, t) => {
        let [i, s] = e;
        return void 0 !== s[t] && (i[t] = s[t]), delete s[t], [i, s]
    }, [{}, { ...e
    }]);
    e.s(["createSplitProps", () => t])
}, 118190, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        s = e.i(389868);
    let r = (0, i.forwardRef)(function(e, i) {
        return (0, t.jsx)(s.Stack, {
            align: "center",
            ...e,
            direction: "column",
            ref: i
        })
    });
    r.displayName = "VStack", e.s(["VStack", () => r])
}, 494114, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        s = e.i(489198);
    let r = (0, i.forwardRef)(function(e, i) {
        let {
            direction: r,
            align: n,
            justify: a,
            wrap: l,
            basis: o,
            grow: u,
            shrink: c,
            inline: h,
            ...d
        } = e;
        return (0, t.jsx)(s.chakra.div, {
            ref: i,
            ...d,
            css: {
                display: h ? "inline-flex" : "flex",
                flexDirection: r,
                alignItems: n,
                justifyContent: a,
                flexWrap: l,
                flexBasis: o,
                flexGrow: u,
                flexShrink: c,
                ...e.css
            }
        })
    });
    r.displayName = "Flex", e.s(["Flex", () => r])
}, 816941, 706645, 378469, e => {
    "use strict";
    let t;
    var i, s, r, n, a, l, o, u, c, h, d, p, f, v, _, m, g, b, y, w, S, R, x, C, k = e.i(376054),
        E = e.i(136927),
        M = e.i(550475),
        O = e.i(42297),
        T = e.i(474754),
        N = e.i(708347),
        W = e.i(318459),
        P = e.i(87147),
        j = e.i(423216),
        U = e.i(159337),
        F = e.i(879994),
        I = e.i(457765),
        Q = (i = new WeakMap, s = new WeakMap, r = new WeakMap, n = new WeakMap, a = new WeakMap, l = new WeakMap, o = new WeakMap, u = new WeakMap, c = new WeakMap, h = new WeakMap, d = new WeakMap, p = new WeakMap, f = new WeakMap, v = new WeakMap, _ = new WeakMap, m = new WeakSet, g = new WeakSet, b = new WeakSet, y = new WeakSet, w = new WeakSet, S = new WeakSet, R = new WeakSet, x = new WeakSet, C = new WeakSet, class extends j.Subscribable {
            bindMethods() {
                this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
                1 === this.listeners.size && ((0, k._)(this, s).addObserver(this), q((0, k._)(this, s), this.options) ? (0, O._)(this, m, V).call(this) : this.updateResult(), (0, O._)(this, w, H).call(this))
            }
            onUnsubscribe() {
                this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
                return D((0, k._)(this, s), this.options, this.options.refetchOnReconnect)
            }
            shouldFetchOnWindowFocus() {
                return D((0, k._)(this, s), this.options, this.options.refetchOnWindowFocus)
            }
            destroy() {
                this.listeners = new Set, (0, O._)(this, S, J).call(this), (0, O._)(this, R, Y).call(this), (0, k._)(this, s).removeObserver(this)
            }
            setOptions(e) {
                let t = this.options,
                    r = (0, k._)(this, s);
                if (this.options = (0, k._)(this, i).defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, F.resolveEnabled)(this.options.enabled, (0, k._)(this, s))) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                (0, O._)(this, x, G).call(this), (0, k._)(this, s).setOptions(this.options), t._defaulted && !(0, F.shallowEqualObjects)(this.options, t) && (0, k._)(this, i).getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: (0, k._)(this, s),
                    observer: this
                });
                let n = this.hasListeners();
                n && L((0, k._)(this, s), r, this.options, t) && (0, O._)(this, m, V).call(this), this.updateResult(), n && ((0, k._)(this, s) !== r || (0, F.resolveEnabled)(this.options.enabled, (0, k._)(this, s)) !== (0, F.resolveEnabled)(t.enabled, (0, k._)(this, s)) || (0, F.resolveStaleTime)(this.options.staleTime, (0, k._)(this, s)) !== (0, F.resolveStaleTime)(t.staleTime, (0, k._)(this, s))) && (0, O._)(this, g, K).call(this);
                let a = (0, O._)(this, b, z).call(this);
                n && ((0, k._)(this, s) !== r || (0, F.resolveEnabled)(this.options.enabled, (0, k._)(this, s)) !== (0, F.resolveEnabled)(t.enabled, (0, k._)(this, s)) || a !== (0, k._)(this, v)) && (0, O._)(this, y, B).call(this, a)
            }
            getOptimisticResult(e) {
                var t, r;
                let o = (0, k._)(this, i).getQueryCache().build((0, k._)(this, i), e),
                    u = this.createResult(o, e);
                return t = this, r = u, (0, F.shallowEqualObjects)(t.getCurrentResult(), r) || ((0, M._)(this, n, u), (0, M._)(this, l, this.options), (0, M._)(this, a, (0, k._)(this, s).state)), u
            }
            getCurrentResult() {
                return (0, k._)(this, n)
            }
            trackResult(e, t) {
                return new Proxy(e, {
                    get: (e, i) => (this.trackProp(i), null == t || t(i), "promise" === i && (this.trackProp("data"), this.options.experimental_prefetchInRender || "pending" !== (0, k._)(this, o).status || (0, k._)(this, o).reject(Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, i))
                })
            }
            trackProp(e) {
                (0, k._)(this, _).add(e)
            }
            getCurrentQuery() {
                return (0, k._)(this, s)
            }
            refetch() {
                let { ...e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.fetch({ ...e
                })
            }
            fetchOptimistic(e) {
                let t = (0, k._)(this, i).defaultQueryOptions(e),
                    s = (0, k._)(this, i).getQueryCache().build((0, k._)(this, i), t);
                return s.fetch().then(() => this.createResult(s, t))
            }
            fetch(e) {
                var t;
                return (0, O._)(this, m, V).call(this, { ...e,
                    cancelRefetch: null == (t = e.cancelRefetch) || t
                }).then(() => (this.updateResult(), (0, k._)(this, n)))
            }
            createResult(e, t) {
                let i, p = (0, k._)(this, s),
                    f = this.options,
                    v = (0, k._)(this, n),
                    _ = (0, k._)(this, a),
                    m = (0, k._)(this, l),
                    g = e !== p ? e.state : (0, k._)(this, r),
                    {
                        state: b
                    } = e,
                    y = { ...b
                    },
                    w = !1;
                if (t._optimisticResults) {
                    let i = this.hasListeners(),
                        s = !i && q(e, t),
                        r = i && L(e, p, t, f);
                    (s || r) && (y = { ...y,
                        ...(0, P.fetchState)(b.data, e.options)
                    }), "isRestoring" === t._optimisticResults && (y.fetchStatus = "idle")
                }
                let {
                    error: S,
                    errorUpdatedAt: R,
                    status: x
                } = y;
                i = y.data;
                let C = !1;
                if (void 0 !== t.placeholderData && void 0 === i && "pending" === x) {
                    let e;
                    if ((null == v ? void 0 : v.isPlaceholderData) && t.placeholderData === (null == m ? void 0 : m.placeholderData)) e = v.data, C = !0;
                    else {
                        var E;
                        e = "function" == typeof t.placeholderData ? t.placeholderData(null == (E = (0, k._)(this, d)) ? void 0 : E.state.data, (0, k._)(this, d)) : t.placeholderData
                    }
                    void 0 !== e && (x = "success", i = (0, F.replaceData)(null == v ? void 0 : v.data, e, t), w = !0)
                }
                if (t.select && void 0 !== i && !C)
                    if (v && i === (null == _ ? void 0 : _.data) && t.select === (0, k._)(this, c)) i = (0, k._)(this, h);
                    else try {
                        (0, M._)(this, c, t.select), i = t.select(i), i = (0, F.replaceData)(null == v ? void 0 : v.data, i, t), (0, M._)(this, h, i), (0, M._)(this, u, null)
                    } catch (e) {
                        (0, M._)(this, u, e)
                    }(0, k._)(this, u) && (S = (0, k._)(this, u), i = (0, k._)(this, h), R = Date.now(), x = "error");
                let O = "fetching" === y.fetchStatus,
                    T = "pending" === x,
                    N = "error" === x,
                    W = T && O,
                    j = void 0 !== i,
                    I = {
                        status: x,
                        fetchStatus: y.fetchStatus,
                        isPending: T,
                        isSuccess: "success" === x,
                        isError: N,
                        isInitialLoading: W,
                        isLoading: W,
                        data: i,
                        dataUpdatedAt: y.dataUpdatedAt,
                        error: S,
                        errorUpdatedAt: R,
                        failureCount: y.fetchFailureCount,
                        failureReason: y.fetchFailureReason,
                        errorUpdateCount: y.errorUpdateCount,
                        isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                        isFetchedAfterMount: y.dataUpdateCount > g.dataUpdateCount || y.errorUpdateCount > g.errorUpdateCount,
                        isFetching: O,
                        isRefetching: O && !T,
                        isLoadingError: N && !j,
                        isPaused: "paused" === y.fetchStatus,
                        isPlaceholderData: w,
                        isRefetchError: N && j,
                        isStale: A(e, t),
                        refetch: this.refetch,
                        promise: (0, k._)(this, o),
                        isEnabled: !1 !== (0, F.resolveEnabled)(t.enabled, e)
                    };
                if (this.options.experimental_prefetchInRender) {
                    let t = e => {
                            "error" === I.status ? e.reject(I.error) : void 0 !== I.data && e.resolve(I.data)
                        },
                        i = () => {
                            t((0, M._)(this, o, I.promise = (0, U.pendingThenable)()))
                        },
                        s = (0, k._)(this, o);
                    switch (s.status) {
                        case "pending":
                            e.queryHash === p.queryHash && t(s);
                            break;
                        case "fulfilled":
                            ("error" === I.status || I.data !== s.value) && i();
                            break;
                        case "rejected":
                            ("error" !== I.status || I.error !== s.reason) && i()
                    }
                }
                return I
            }
            updateResult() {
                let e = (0, k._)(this, n),
                    t = this.createResult((0, k._)(this, s), this.options);
                if ((0, M._)(this, a, (0, k._)(this, s).state), (0, M._)(this, l, this.options), void 0 !== (0, k._)(this, a).data && (0, M._)(this, d, (0, k._)(this, s)), (0, F.shallowEqualObjects)(t, e)) return;
                (0, M._)(this, n, t);
                let i = () => {
                    if (!e) return !0;
                    let {
                        notifyOnChangeProps: t
                    } = this.options, i = "function" == typeof t ? t() : t;
                    if ("all" === i || !i && !(0, k._)(this, _).size) return !0;
                    let s = new Set(null != i ? i : (0, k._)(this, _));
                    return this.options.throwOnError && s.add("error"), Object.keys((0, k._)(this, n)).some(t => (0, k._)(this, n)[t] !== e[t] && s.has(t))
                };
                (0, O._)(this, C, X).call(this, {
                    listeners: i()
                })
            }
            onQueryUpdate() {
                this.updateResult(), this.hasListeners() && (0, O._)(this, w, H).call(this)
            }
            constructor(e, t) {
                super(), (0, T._)(this, m), (0, T._)(this, g), (0, T._)(this, b), (0, T._)(this, y), (0, T._)(this, w), (0, T._)(this, S), (0, T._)(this, R), (0, T._)(this, x), (0, T._)(this, C), (0, E._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, a, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, l, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, o, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, u, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, c, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, h, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, d, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, p, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, f, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, v, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, _, {
                    writable: !0,
                    value: new Set
                }), this.options = t, (0, M._)(this, i, e), (0, M._)(this, u, null), (0, M._)(this, o, (0, U.pendingThenable)()), this.bindMethods(), this.setOptions(t)
            }
        });

    function q(e, t) {
        return !1 !== (0, F.resolveEnabled)(t.enabled, e) && void 0 === e.state.data && ("error" !== e.state.status || !1 !== t.retryOnMount) || void 0 !== e.state.data && D(e, t, t.refetchOnMount)
    }

    function D(e, t, i) {
        if (!1 !== (0, F.resolveEnabled)(t.enabled, e) && "static" !== (0, F.resolveStaleTime)(t.staleTime, e)) {
            let s = "function" == typeof i ? i(e) : i;
            return "always" === s || !1 !== s && A(e, t)
        }
        return !1
    }

    function L(e, t, i, s) {
        return (e !== t || !1 === (0, F.resolveEnabled)(s.enabled, e)) && (!i.suspense || "error" !== e.state.status) && A(e, i)
    }

    function A(e, t) {
        return !1 !== (0, F.resolveEnabled)(t.enabled, e) && e.isStaleByTime((0, F.resolveStaleTime)(t.staleTime, e))
    }

    function V(e) {
        (0, O._)(this, x, G).call(this);
        let t = (0, k._)(this, s).fetch(this.options, e);
        return (null == e ? void 0 : e.throwOnError) || (t = t.catch(F.noop)), t
    }

    function K() {
        (0, O._)(this, S, J).call(this);
        let e = (0, F.resolveStaleTime)(this.options.staleTime, (0, k._)(this, s));
        if (F.isServer || (0, k._)(this, n).isStale || !(0, F.isValidTimeout)(e)) return;
        let t = (0, F.timeUntilStale)((0, k._)(this, n).dataUpdatedAt, e);
        (0, M._)(this, p, I.timeoutManager.setTimeout(() => {
            (0, k._)(this, n).isStale || this.updateResult()
        }, t + 1))
    }

    function z() {
        var e;
        return null != (e = "function" == typeof this.options.refetchInterval ? this.options.refetchInterval((0, k._)(this, s)) : this.options.refetchInterval) && e
    }

    function B(e) {
        (0, O._)(this, R, Y).call(this), (0, M._)(this, v, e), !F.isServer && !1 !== (0, F.resolveEnabled)(this.options.enabled, (0, k._)(this, s)) && (0, F.isValidTimeout)((0, k._)(this, v)) && 0 !== (0, k._)(this, v) && (0, M._)(this, f, I.timeoutManager.setInterval(() => {
            (this.options.refetchIntervalInBackground || N.focusManager.isFocused()) && (0, O._)(this, m, V).call(this)
        }, (0, k._)(this, v)))
    }

    function H() {
        (0, O._)(this, g, K).call(this), (0, O._)(this, y, B).call(this, (0, O._)(this, b, z).call(this))
    }

    function J() {
        (0, k._)(this, p) && (I.timeoutManager.clearTimeout((0, k._)(this, p)), (0, M._)(this, p, void 0))
    }

    function Y() {
        (0, k._)(this, f) && (I.timeoutManager.clearInterval((0, k._)(this, f)), (0, M._)(this, f, void 0))
    }

    function G() {
        let e = (0, k._)(this, i).getQueryCache().build((0, k._)(this, i), this.options);
        if (e === (0, k._)(this, s)) return;
        let t = (0, k._)(this, s);
        (0, M._)(this, s, e), (0, M._)(this, r, e.state), this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
    }

    function X(e) {
        W.notifyManager.batch(() => {
            e.listeners && this.listeners.forEach(e => {
                e((0, k._)(this, n))
            }), (0, k._)(this, i).getQueryCache().notify({
                query: (0, k._)(this, s),
                type: "observerResultsUpdated"
            })
        })
    }
    e.s(["QueryObserver", () => Q], 706645), e.i(556464);
    var Z = e.i(251570),
        $ = e.i(940948);
    e.i(483632);
    var ee = Z.createContext((t = !1, {
            clearReset: () => {
                t = !1
            },
            reset: () => {
                t = !0
            },
            isReset: () => t
        })),
        et = Z.createContext(!1);
    et.Provider;
    var ei = (e, t, i) => t.fetchOptimistic(e).catch(() => {
        i.clearReset()
    });

    function es(e, t, i) {
        var s, r, n, a, l;
        let o = Z.useContext(et),
            u = Z.useContext(ee),
            c = (0, $.useQueryClient)(i),
            h = c.defaultQueryOptions(e);
        if (null == (r = c.getDefaultOptions().queries) || null == (s = r._experimental_beforeQuery) || s.call(r, h), h._optimisticResults = o ? "isRestoring" : "optimistic", h.suspense) {
            let e = e => "static" === e ? e : Math.max(null != e ? e : 1e3, 1e3),
                t = h.staleTime;
            h.staleTime = "function" == typeof t ? function() {
                for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return e(t(...s))
            } : e(t), "number" == typeof h.gcTime && (h.gcTime = Math.max(h.gcTime, 1e3))
        }(h.suspense || h.throwOnError || h.experimental_prefetchInRender) && !u.isReset() && (h.retryOnMount = !1), Z.useEffect(() => {
            u.clearReset()
        }, [u]);
        let d = !c.getQueryCache().get(h.queryHash),
            [p] = Z.useState(() => new t(c, h)),
            f = p.getOptimisticResult(h),
            v = !o && !1 !== e.subscribed;
        if (Z.useSyncExternalStore(Z.useCallback(e => {
                let t = v ? p.subscribe(W.notifyManager.batchCalls(e)) : F.noop;
                return p.updateResult(), t
            }, [p, v]), () => p.getCurrentResult(), () => p.getCurrentResult()), Z.useEffect(() => {
                p.setOptions(h)
            }, [h, p]), (null == h ? void 0 : h.suspense) && f.isPending) throw ei(h, p, u);
        if ((e => {
                let {
                    result: t,
                    errorResetBoundary: i,
                    throwOnError: s,
                    query: r,
                    suspense: n
                } = e;
                return t.isError && !i.isReset() && !t.isFetching && r && (n && void 0 === t.data || (0, F.shouldThrowError)(s, [t.error, r]))
            })({
                result: f,
                errorResetBoundary: u,
                throwOnError: h.throwOnError,
                query: c.getQueryCache().get(h.queryHash),
                suspense: h.suspense
            })) throw f.error;
        if (null == (a = c.getDefaultOptions().queries) || null == (n = a._experimental_afterQuery) || n.call(a, h, f), h.experimental_prefetchInRender && !F.isServer && f.isLoading && f.isFetching && !o) {
            let e = d ? ei(h, p, u) : null == (l = c.getQueryCache().get(h.queryHash)) ? void 0 : l.promise;
            null == e || e.catch(F.noop).finally(() => {
                p.updateResult()
            })
        }
        return h.notifyOnChangeProps ? f : p.trackResult(f)
    }

    function er(e, t) {
        return es(e, Q, t)
    }
    e.s(["useBaseQuery", () => es], 378469), e.s(["useQuery", () => er], 816941)
}, 840171, e => {
    "use strict";
    var t, i, s, r, n, a, l = e.i(251570),
        o = e.i(376054),
        u = e.i(136927),
        c = e.i(550475),
        h = e.i(42297),
        d = e.i(474754),
        p = e.i(614988),
        f = e.i(318459),
        v = e.i(423216),
        _ = e.i(879994),
        m = (t = new WeakMap, i = new WeakMap, s = new WeakMap, r = new WeakMap, n = new WeakSet, a = new WeakSet, class extends v.Subscribable {
            bindMethods() {
                this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
            }
            setOptions(e) {
                var i;
                let r = this.options;
                this.options = (0, o._)(this, t).defaultMutationOptions(e), (0, _.shallowEqualObjects)(this.options, r) || (0, o._)(this, t).getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: (0, o._)(this, s),
                    observer: this
                }), (null == r ? void 0 : r.mutationKey) && this.options.mutationKey && (0, _.hashKey)(r.mutationKey) !== (0, _.hashKey)(this.options.mutationKey) ? this.reset() : (null == (i = (0, o._)(this, s)) ? void 0 : i.state.status) === "pending" && (0, o._)(this, s).setOptions(this.options)
            }
            onUnsubscribe() {
                if (!this.hasListeners()) {
                    var e;
                    null == (e = (0, o._)(this, s)) || e.removeObserver(this)
                }
            }
            onMutationUpdate(e) {
                (0, h._)(this, n, g).call(this), (0, h._)(this, a, b).call(this, e)
            }
            getCurrentResult() {
                return (0, o._)(this, i)
            }
            reset() {
                var e;
                null == (e = (0, o._)(this, s)) || e.removeObserver(this), (0, c._)(this, s, void 0), (0, h._)(this, n, g).call(this), (0, h._)(this, a, b).call(this)
            }
            mutate(e, i) {
                var n;
                return (0, c._)(this, r, i), null == (n = (0, o._)(this, s)) || n.removeObserver(this), (0, c._)(this, s, (0, o._)(this, t).getMutationCache().build((0, o._)(this, t), this.options)), (0, o._)(this, s).addObserver(this), (0, o._)(this, s).execute(e)
            }
            constructor(e, l) {
                super(), (0, d._)(this, n), (0, d._)(this, a), (0, u._)(this, t, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, t, e), this.setOptions(l), this.bindMethods(), (0, h._)(this, n, g).call(this)
            }
        });

    function g() {
        var e, t;
        let r = null != (t = null == (e = (0, o._)(this, s)) ? void 0 : e.state) ? t : (0, p.getDefaultState)();
        (0, c._)(this, i, { ...r,
            isPending: "pending" === r.status,
            isSuccess: "success" === r.status,
            isError: "error" === r.status,
            isIdle: "idle" === r.status,
            mutate: this.mutate,
            reset: this.reset
        })
    }

    function b(e) {
        f.notifyManager.batch(() => {
            if ((0, o._)(this, r) && this.hasListeners()) {
                var s, n, a, l, u, c, h, d;
                let p = (0, o._)(this, i).variables,
                    f = (0, o._)(this, i).context,
                    v = {
                        client: (0, o._)(this, t),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (null == e ? void 0 : e.type) === "success" ? (null == (s = (n = (0, o._)(this, r)).onSuccess) || s.call(n, e.data, p, f, v), null == (a = (l = (0, o._)(this, r)).onSettled) || a.call(l, e.data, null, p, f, v)) : (null == e ? void 0 : e.type) === "error" && (null == (u = (c = (0, o._)(this, r)).onError) || u.call(c, e.error, p, f, v), null == (h = (d = (0, o._)(this, r)).onSettled) || h.call(d, void 0, e.error, p, f, v))
            }
            this.listeners.forEach(e => {
                e((0, o._)(this, i))
            })
        })
    }
    var y = e.i(940948);

    function w(e, t) {
        let i = (0, y.useQueryClient)(t),
            [s] = l.useState(() => new m(i, e));
        l.useEffect(() => {
            s.setOptions(e)
        }, [s, e]);
        let r = l.useSyncExternalStore(l.useCallback(e => s.subscribe(f.notifyManager.batchCalls(e)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()),
            n = l.useCallback((e, t) => {
                s.mutate(e, t).catch(_.noop)
            }, [s]);
        if (r.error && (0, _.shouldThrowError)(s.options.throwOnError, [r.error])) throw r.error;
        return { ...r,
            mutate: n,
            mutateAsync: r.mutate
        }
    }
    e.s(["useMutation", () => w], 840171)
}, 789757, e => {
    "use strict";
    let {
        PropsProvider: t,
        withContext: i
    } = (0, e.i(285281).createRecipeContext)({
        key: "badge"
    }), s = i("span");
    s.displayName = "Badge", e.s(["Badge", () => s])
}]);

//# debugId=840e826e-25c4-22e8-4c75-00bcd14d0cf2
//# sourceMappingURL=e1c53b9f6d5e4335.js.map