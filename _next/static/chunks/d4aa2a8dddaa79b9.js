;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "55722e23-d7e6-1604-a1a9-e78334efcdbd")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 501829, 904849, e => {
    "use strict";
    var t = e.i(30500),
        r = e.i(409078),
        i = e.i(251570),
        s = e.i(453325),
        a = e.i(593006);
    e.i(483632);
    var n = void 0 !== globalThis.document ? i.useLayoutEffect : i.useEffect;

    function l(e) {
        var t, a;
        let l = null != (t = e().value) ? t : e().defaultValue,
            o = null != (a = e().isEqual) ? a : Object.is,
            [u] = (0, i.useState)(l),
            [c, d] = (0, i.useState)(u),
            h = void 0 !== e().value,
            p = (0, i.useRef)(c);
        p.current = h ? e().value : c;
        let f = (0, i.useRef)(p.current);
        return n(() => {
            f.current = p.current
        }, [c, e().value]), {
            initial: u,
            ref: p,
            get: function() {
                return h ? e().value : c
            },
            set(t) {
                (e().sync ? s.flushSync : r.identity)(() => (t => {
                    let i = f.current,
                        s = (0, r.isFunction)(t) ? t(i) : t;
                    if (e().debug && console.log("[bindable > ".concat(e().debug, "] setValue"), {
                            next: s,
                            prev: i
                        }), h || d(s), !o(s, i)) {
                        var a, n;
                        null == (a = (n = e()).onChange) || a.call(n, s, i)
                    }
                })(t))
            },
            invoke(t, r) {
                var i, s;
                null == (i = (s = e()).onChange) || i.call(s, t, r)
            },
            hash(t) {
                var r, i, s;
                return null != (s = null == (r = (i = e()).hash) ? void 0 : r.call(i, t)) ? s : String(t)
            }
        }
    }
    l.cleanup = e => {
        (0, i.useEffect)(() => e, [])
    }, l.ref = e => {
        let t = (0, i.useRef)(e);
        return {
            get: () => t.current,
            set: e => {
                t.current = e
            }
        }
    };
    var o = (e, t) => {
        let r = (0, i.useRef)(!1),
            s = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
            if (r.current && s.current) return t();
            s.current = !0
        }, [...(null != e ? e : []).map(e => "function" == typeof e ? e() : e)]), (0, i.useEffect)(() => (r.current = !0, () => {
            r.current = !1
        }), [])
    };

    function u(e) {
        var a, u, h, p, f, v, m;
        let _, g, b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            y = (0, i.useMemo)(() => {
                let {
                    id: e,
                    ids: r,
                    getRootNode: i
                } = b;
                return (0, t.createScope)({
                    id: e,
                    ids: r,
                    getRootNode: i
                })
            }, [b]),
            x = function() {
                for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                e.debug && console.log(...r)
            },
            w = (_ = c(null != (f = null == (a = e.props) ? void 0 : a.call(e, {
                props: (0, r.compact)(b),
                scope: y
            })) ? f : b), function(e) {
                return _.current[e]
            }),
            R = c(null == (u = e.context) ? void 0 : u.call(e, {
                prop: w,
                bindable: l,
                scope: y,
                flush: d,
                getContext: () => S,
                getComputed: () => q,
                getRefs: () => P,
                getEvent: () => T()
            })),
            S = {
                get(e) {
                    var t;
                    return null == (t = R.current) ? void 0 : t[e].ref.current
                },
                set(e, t) {
                    var r;
                    null == (r = R.current) || r[e].set(t)
                },
                initial(e) {
                    var t;
                    return null == (t = R.current) ? void 0 : t[e].initial
                },
                hash(e) {
                    var t, r;
                    let i = null == (t = R.current) ? void 0 : t[e].get();
                    return null == (r = R.current) ? void 0 : r[e].hash(i)
                }
            },
            C = (0, i.useRef)(new Map),
            k = (0, i.useRef)(null),
            E = (0, i.useRef)(null),
            M = (0, i.useRef)({
                type: ""
            }),
            T = () => ({ ...M.current,
                current: () => M.current,
                previous: () => E.current
            }),
            F = () => ({ ...A,
                matches() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.includes(A.ref.current)
                },
                hasTag(t) {
                    var r, i;
                    return !!(null == (i = e.states[A.ref.current]) || null == (r = i.tags) ? void 0 : r.includes(t))
                }
            }),
            P = (m = null != (v = null == (h = e.refs) ? void 0 : h.call(e, {
                prop: w,
                context: S
            })) ? v : {}, g = (0, i.useRef)(m), {
                get: e => g.current[e],
                set(e, t) {
                    g.current[e] = t
                }
            }),
            O = () => ({
                state: F(),
                context: S,
                event: T(),
                prop: w,
                send: Q,
                action: N,
                guard: j,
                track: o,
                refs: P,
                computed: q,
                flush: d,
                scope: y,
                choose: I
            }),
            N = t => {
                let i = (0, r.isFunction)(t) ? t(O()) : t;
                if (i)
                    for (let t of i.map(t => {
                            var i, s;
                            let a = null == (s = e.implementations) || null == (i = s.actions) ? void 0 : i[t];
                            return a || (0, r.warn)('[zag-js] No implementation found for action "'.concat(JSON.stringify(t), '"')), a
                        })) null == t || t(O())
            },
            j = t => {
                var i, s;
                return (0, r.isFunction)(t) ? t(O()) : null == (s = e.implementations) || null == (i = s.guards) ? void 0 : i[t](O())
            },
            W = t => {
                let i = (0, r.isFunction)(t) ? t(O()) : t;
                if (!i) return;
                let s = i.map(t => {
                        var i, s;
                        let a = null == (s = e.implementations) || null == (i = s.effects) ? void 0 : i[t];
                        return a || (0, r.warn)('[zag-js] No implementation found for effect "'.concat(JSON.stringify(t), '"')), a
                    }),
                    a = [];
                for (let e of s) {
                    let t = null == e ? void 0 : e(O());
                    t && a.push(t)
                }
                return () => a.forEach(e => null == e ? void 0 : e())
            },
            I = e => (0, r.toArray)(e).find(e => {
                let t = !e.guard;
                return (0, r.isString)(e.guard) ? t = !!j(e.guard) : (0, r.isFunction)(e.guard) && (t = e.guard(O())), t
            }),
            q = t => ((0, r.ensure)(e.computed, () => "[zag-js] No computed object found on machine"), (0, e.computed[t])({
                context: S,
                event: T(),
                prop: w,
                refs: P,
                scope: y,
                computed: q
            })),
            A = l(() => ({
                defaultValue: e.initialState({
                    prop: w
                }),
                onChange(r, i) {
                    var s, a, n, l;
                    if (i) {
                        let e = C.current.get(i);
                        null == e || e(), C.current.delete(i)
                    }
                    i && N(null == (l = e.states[i]) ? void 0 : l.exit), N(null == (s = k.current) ? void 0 : s.actions);
                    let o = W(null == (a = e.states[r]) ? void 0 : a.effects);
                    if (o && C.current.set(r, o), i === t.INIT_STATE) {
                        N(e.entry);
                        let r = W(e.effects);
                        r && C.current.set(t.INIT_STATE, r)
                    }
                    N(null == (n = e.states[r]) ? void 0 : n.entry)
                }
            })),
            L = (0, i.useRef)(void 0),
            U = (0, i.useRef)(t.MachineStatus.NotStarted);
        n(() => {
            queueMicrotask(() => {
                var e;
                let r = U.current === t.MachineStatus.Started;
                U.current = t.MachineStatus.Started, x(r ? "rehydrating..." : "initializing...");
                let i = null != (e = L.current) ? e : A.initial;
                A.invoke(i, r ? A.get() : t.INIT_STATE)
            });
            let r = C.current,
                i = A.ref.current;
            return () => {
                x("unmounting..."), L.current = i, U.current = t.MachineStatus.Stopped, r.forEach(e => null == e ? void 0 : e()), C.current = new Map, k.current = null, queueMicrotask(() => {
                    N(e.exit)
                })
            }
        }, []);
        let Q = r => {
            queueMicrotask(() => {
                var i, a, n, l, o;
                if (U.current !== t.MachineStatus.Started) return;
                E.current = M.current, M.current = r;
                let u = "ref" in A ? A.ref.current : A.get(),
                    c = I(null != (n = null == (i = e.states[u].on) ? void 0 : i[r.type]) ? n : null == (a = e.on) ? void 0 : a[r.type]);
                if (!c) return;
                k.current = c;
                let d = null != (l = c.target) ? l : u;
                x("transition", r.type, c.target || u, "(".concat(c.actions, ")"));
                let h = d !== u;
                h ? (0, s.flushSync)(() => A.set(d)) : c.reenter && !h ? A.invoke(u, u) : N(null != (o = c.actions) ? o : [])
            })
        };
        return null == (p = e.watch) || p.call(e, O()), {
            state: F(),
            send: Q,
            context: S,
            prop: w,
            scope: y,
            refs: P,
            computed: q,
            event: T(),
            getStatus: () => U.current
        }
    }

    function c(e) {
        let t = (0, i.useRef)(e);
        return t.current = e, t
    }

    function d(e) {
        queueMicrotask(() => {
            (0, s.flushSync)(() => e())
        })
    }
    var h = (0, a.createNormalizer)(e => e);
    e.s(["normalizeProps", () => h, "useMachine", () => u], 501829);
    let [p, f] = (0, e.i(483591).createContext)({
        name: "LocaleContext",
        hookName: "useLocaleContext",
        providerName: "<LocaleProvider />",
        strict: !1,
        defaultValue: {
            dir: "ltr",
            locale: "en-US"
        }
    });
    e.s(["useLocaleContext", () => f], 904849)
}, 664288, 179878, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        i = e.i(820512),
        s = e.i(476379),
        a = e.i(87065),
        n = e.i(198994),
        l = e.i(489198),
        o = e.i(13484);

    function u(e) {
        let {
            key: t,
            recipe: i
        } = e, s = (0, o.useChakraContext)();
        return (0, r.useMemo)(() => {
            let e = i || (null != t ? s.getSlotRecipe(t) : {});
            return s.sva(structuredClone(e))
        }, [t, i, s])
    }
    e.s(["useSlotRecipe", () => u], 179878);
    let c = e => {
        let o, {
                key: c,
                recipe: d
            } = e,
            h = (o = c || d.className || "Component").charAt(0).toUpperCase() + o.slice(1),
            [p, f] = (0, i.createContext)({
                name: "".concat(h, "StylesContext"),
                errorMessage: "use".concat(h, "Styles returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(h, '.Root />" ')
            }),
            [v, m] = (0, i.createContext)({
                name: "".concat(h, "ClassNameContext"),
                errorMessage: "use".concat(h, "ClassNames returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(h, '.Root />" '),
                strict: !1
            }),
            [_, g] = (0, i.createContext)({
                strict: !1,
                name: "".concat(h, "PropsContext"),
                providerName: "".concat(h, "PropsContext"),
                defaultValue: {}
            });

        function b(e) {
            let {
                unstyled: t,
                ...i
            } = e, s = u({
                key: c,
                recipe: i.recipe || d
            }), [a, l] = (0, r.useMemo)(() => s.splitVariantProps(i), [i, s]);
            return {
                styles: (0, r.useMemo)(() => t ? n.EMPTY_SLOT_STYLES : s(a), [t, a, s]),
                classNames: s.classNameMap,
                props: l
            }
        }
        return {
            StylesProvider: p,
            ClassNamesProvider: v,
            PropsProvider: _,
            usePropsContext: g,
            useRecipeResult: b,
            withProvider: (e, i, n) => {
                let {
                    defaultProps: o,
                    ...u
                } = null != n ? n : {}, c = (0, l.chakra)(e, {}, u), d = (0, r.forwardRef)((e, l) => {
                    var u, d;
                    let h = g(),
                        f = (0, r.useMemo)(() => (0, s.mergeProps)(null != o ? o : {}, h, e), [h, e]),
                        {
                            styles: m,
                            props: _,
                            classNames: y
                        } = b(f),
                        x = y[i],
                        w = (0, t.jsx)(p, {
                            value: m,
                            children: (0, t.jsx)(v, {
                                value: y,
                                children: (0, t.jsx)(c, {
                                    ref: l,
                                    ..._,
                                    css: [m[i], f.css],
                                    className: (0, a.cx)(f.className, x)
                                })
                            })
                        });
                    return null != (d = null == n || null == (u = n.wrapElement) ? void 0 : u.call(n, w, f)) ? d : w
                });
                return d.displayName = e.displayName || e.name, d
            },
            withContext: (e, i, s) => {
                let n = (0, l.chakra)(e, {}, s),
                    o = (0, r.forwardRef)((e, r) => {
                        let {
                            unstyled: s,
                            ...l
                        } = e, o = f(), u = m(), c = null == u ? void 0 : u[i];
                        return (0, t.jsx)(n, { ...l,
                            css: [!s && i ? o[i] : void 0, e.css],
                            ref: r,
                            className: (0, a.cx)(e.className, c)
                        })
                    });
                return o.displayName = e.displayName || e.name, o
            },
            withRootProvider: function(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        defaultProps: a
                    } = i,
                    n = i => {
                        let n = g(),
                            {
                                styles: l,
                                classNames: o,
                                props: u
                            } = b((0, r.useMemo)(() => (0, s.mergeProps)(a, n, i), [n, i]));
                        return (0, t.jsx)(p, {
                            value: l,
                            children: (0, t.jsx)(v, {
                                value: o,
                                children: (0, t.jsx)(e, { ...u
                                })
                            })
                        })
                    };
                return n.displayName = e.displayName || e.name, n
            },
            useStyles: f,
            useClassNames: m
        }
    };
    e.s(["createSlotRecipeContext", () => c], 664288)
}, 215669, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        i = e.i(389868);
    let s = (0, r.forwardRef)(function(e, r) {
        return (0, t.jsx)(i.Stack, {
            align: "center",
            ...e,
            direction: "row",
            ref: r
        })
    });
    s.displayName = "HStack", e.s(["HStack", () => s])
}, 791089, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "text"
    }), i = t("p");
    i.displayName = "Text", e.s(["Text", () => i])
}, 483591, e => {
    "use strict";
    var t = e.i(409078),
        r = e.i(251570);

    function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                name: i,
                strict: s = !0,
                hookName: a = "useContext",
                providerName: n = "Provider",
                errorMessage: l,
                defaultValue: o
            } = e,
            u = (0, r.createContext)(o);
        return u.displayName = i, [u.Provider, function e() {
            let i = (0, r.useContext)(u);
            if (!i && s) {
                let r = Error(null != l ? l : "".concat(a, " returned `undefined`. Seems you forgot to wrap component within ").concat(n));
                throw r.name = "ContextError", (0, t.hasProp)(Error, "captureStackTrace") && (0, t.isFunction)(Error.captureStackTrace) && Error.captureStackTrace(r, e), r
            }
            return i
        }, u]
    }
    e.s(["createContext", () => i])
}, 517913, e => {
    "use strict";

    function t() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return e => {
            let r = [];
            for (let i of t)
                if ("function" == typeof i) {
                    let t = i(e);
                    "function" == typeof t && r.push(t)
                } else i && (i.current = e);
            if (r.length) return () => {
                for (let e of r) e()
            }
        }
    }
    e.s(["composeRefs", () => t])
}, 173614, e => {
    "use strict";
    let t;
    var r = e.i(30500),
        i = e.i(251570),
        s = e.i(517913);
    let a = e => {
            let t = (0, i.memo)((0, i.forwardRef)((t, a) => {
                var n, l;
                let o, {
                    asChild: u,
                    children: c,
                    ...d
                } = t;
                if (!u) return (0, i.createElement)(e, { ...d,
                    ref: a
                }, c);
                if (!(0, i.isValidElement)(c)) return null;
                let h = i.Children.only(c),
                    p = (o = null == (n = Object.getOwnPropertyDescriptor(h.props, "ref")) ? void 0 : n.get) && "isReactWarning" in o && o.isReactWarning ? h.ref : (o = null == (l = Object.getOwnPropertyDescriptor(h, "ref")) ? void 0 : l.get) && "isReactWarning" in o && o.isReactWarning ? h.props.ref : h.props.ref || h.ref;
                return (0, i.cloneElement)(h, { ...(0, r.mergeProps)(d, h.props),
                    ref: a ? (0, s.composeRefs)(a, p) : p
                })
            }));
            return t.displayName = e.displayName || e.name, t
        },
        n = (t = new Map, new Proxy(a, {
            apply: (e, t, r) => a(r[0]),
            get: (e, r) => (t.has(r) || t.set(r, a(r)), t.get(r))
        }));
    e.s(["ark", () => n])
}, 520036, e => {
    "use strict";
    let [t, r] = (0, e.i(483591).createContext)({
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
    e.s(["useEnvironmentContext", () => r])
}, 878262, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(841158),
        i = e.i(251570),
        s = e.i(453325),
        a = e.i(520036);
    let n = e => {
            var r;
            let {
                children: n,
                disabled: u
            } = e, [c, d] = (0, i.useState)(null == (r = e.container) ? void 0 : r.current), h = (0, i.useSyncExternalStore)(o, () => !1, () => !0), {
                getRootNode: p
            } = (0, a.useEnvironmentContext)();
            if ((0, i.useEffect)(() => {
                    d(() => {
                        var t;
                        return null == (t = e.container) ? void 0 : t.current
                    })
                }, [e.container]), h || u) return (0, t.jsx)(t.Fragment, {
                children: n
            });
            let f = null != c ? c : l(p);
            return (0, t.jsx)(t.Fragment, {
                children: i.Children.map(n, e => (0, s.createPortal)(e, f))
            })
        },
        l = e => {
            let t = null == e ? void 0 : e(),
                i = t.getRootNode();
            return (0, r.isShadowRoot)(i) ? i : (0, r.getDocument)(t).body
        },
        o = () => () => {};
    e.s(["Portal", () => n])
}, 3373, e => {
    "use strict";
    e.s([])
}, 416574, e => {
    "use strict";
    let [t, r] = (0, e.i(483591).createContext)({
        name: "FieldContext",
        hookName: "useFieldContext",
        providerName: "<FieldProvider />",
        strict: !1
    });
    e.s(["FieldProvider", () => t, "useFieldContext", () => r])
}, 528089, 228625, 413572, 947467, 96411, 484726, e => {
    "use strict";
    var t = e.i(416574);
    let r = e => e.children((0, t.useFieldContext)());
    e.s(["FieldContext", () => r], 528089);
    var i = e.i(483632),
        s = e.i(30500),
        a = e.i(251570),
        n = e.i(173614);
    let l = (0, a.forwardRef)((e, r) => {
        let a = (0, t.useFieldContext)(),
            l = (0, s.mergeProps)(a.getErrorTextProps(), e);
        return (null == a ? void 0 : a.invalid) ? (0, i.jsx)(n.ark.span, { ...l,
            ref: r
        }) : null
    });
    l.displayName = "FieldErrorText", e.s(["FieldErrorText", () => l], 228625);
    let o = (0, a.forwardRef)((e, r) => {
        let a = (0, t.useFieldContext)(),
            l = (0, s.mergeProps)(null == a ? void 0 : a.getHelperTextProps(), e);
        return (0, i.jsx)(n.ark.span, { ...l,
            ref: r
        })
    });
    o.displayName = "FieldHelperText", e.s(["FieldHelperText", () => o], 413572);
    let u = (0, a.forwardRef)((e, r) => {
        let a = (0, t.useFieldContext)(),
            l = (0, s.mergeProps)(null == a ? void 0 : a.getInputProps(), e);
        return (0, i.jsx)(n.ark.input, { ...l,
            ref: r
        })
    });
    u.displayName = "FieldInput", e.s(["FieldInput", () => u], 947467);
    let c = (0, a.forwardRef)((e, r) => {
        let a = (0, t.useFieldContext)(),
            l = (0, s.mergeProps)(null == a ? void 0 : a.getLabelProps(), e);
        return (0, i.jsx)(n.ark.label, { ...l,
            ref: r
        })
    });
    c.displayName = "FieldLabel", e.s(["FieldLabel", () => c], 96411);
    let d = (0, a.forwardRef)((e, r) => {
        var a;
        let {
            fallback: l,
            ...o
        } = e, u = (0, t.useFieldContext)();
        if (!u.required) return l;
        let c = (0, s.mergeProps)(u.getRequiredIndicatorProps(), o);
        return (0, i.jsx)(n.ark.span, { ...c,
            ref: r,
            children: null != (a = o.children) ? a : "*"
        })
    });
    d.displayName = "FieldRequiredIndicator", e.s(["FieldRequiredIndicator", () => d], 484726)
}, 341061, e => {
    "use strict";
    let t = () => (e, t) => t.reduce((e, t) => {
        let [r, i] = e;
        return void 0 !== i[t] && (r[t] = i[t]), delete i[t], [r, i]
    }, [{}, { ...e
    }]);
    e.s(["createSplitProps", () => t])
}, 165341, 739383, e => {
    "use strict";
    e.i(3373);
    var t = e.i(528089),
        r = e.i(228625),
        i = e.i(413572),
        s = e.i(947467),
        a = e.i(96411),
        n = e.i(484726),
        l = e.i(483632),
        o = e.i(30500),
        u = e.i(251570),
        c = e.i(517913),
        d = e.i(341061),
        h = e.i(173614),
        p = e.i(841158),
        f = e.i(520036);
    let v = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect,
        [m, _] = (0, e.i(483591).createContext)({
            name: "FieldsetContext",
            hookName: "useFieldsetContext",
            providerName: "<FieldsetProvider />",
            strict: !1
        });
    var g = e.i(565398);
    let b = function() {
        var e, t, r, i, s;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = _(),
            l = (0, f.useEnvironmentContext)(),
            {
                ids: o,
                disabled: c = !!(null == n ? void 0 : n.disabled),
                invalid: d = !1,
                readOnly: h = !1,
                required: m = !1
            } = a,
            [b, y] = (0, u.useState)(!1),
            [x, w] = (0, u.useState)(!1),
            R = (0, u.useId)(),
            S = null != (e = a.id) ? e : R,
            C = (0, u.useRef)(null),
            k = null != (t = null == o ? void 0 : o.control) ? t : "field::".concat(S),
            E = null != (r = null == o ? void 0 : o.errorText) ? r : "field::".concat(S, "::error-text"),
            M = null != (i = null == o ? void 0 : o.helperText) ? i : "field::".concat(S, "::helper-text"),
            T = null != (s = null == o ? void 0 : o.label) ? s : "field::".concat(S, "::label");
        v(() => {
            let e = C.current;
            if (!e) return;
            let t = () => {
                let e = l.getRootNode();
                y(!!e.getElementById(E)), w(!!e.getElementById(M))
            };
            t();
            let r = new(l.getWindow()).MutationObserver(t);
            return r.observe(e, {
                childList: !0,
                subtree: !0
            }), () => r.disconnect()
        }, [l, E, M]);
        let F = (0, u.useMemo)(() => {
                let e = [];
                return b && d && e.push(E), x && e.push(M), e.join(" ") || void 0
            }, [d, E, M, b, x]),
            P = (0, u.useMemo)(() => () => ({ ...g.parts.root.attrs,
                id: k,
                ref: C,
                role: "group",
                "data-disabled": (0, p.dataAttr)(c),
                "data-invalid": (0, p.dataAttr)(d),
                "data-readonly": (0, p.dataAttr)(h)
            }), [c, d, h, k]),
            O = (0, u.useMemo)(() => () => ({ ...g.parts.label.attrs,
                id: T,
                "data-disabled": (0, p.dataAttr)(c),
                "data-invalid": (0, p.dataAttr)(d),
                "data-readonly": (0, p.dataAttr)(h),
                "data-required": (0, p.dataAttr)(m),
                htmlFor: S
            }), [c, d, h, m, S, T]),
            N = (0, u.useMemo)(() => () => ({
                "aria-describedby": F,
                "aria-invalid": (0, p.ariaAttr)(d),
                "data-invalid": (0, p.dataAttr)(d),
                "data-required": (0, p.dataAttr)(m),
                "data-readonly": (0, p.dataAttr)(h),
                id: S,
                required: m,
                disabled: c,
                readOnly: h
            }), [F, d, m, h, S, c]),
            j = (0, u.useMemo)(() => () => ({ ...N(),
                ...g.parts.input.attrs
            }), [N]),
            W = (0, u.useMemo)(() => () => ({ ...N(),
                ...g.parts.textarea.attrs
            }), [N]),
            I = (0, u.useMemo)(() => () => ({ ...N(),
                ...g.parts.select.attrs
            }), [N]),
            q = (0, u.useMemo)(() => () => ({
                id: M,
                ...g.parts.helperText.attrs,
                "data-disabled": (0, p.dataAttr)(c)
            }), [c, M]),
            A = (0, u.useMemo)(() => () => ({
                id: E,
                ...g.parts.errorText.attrs,
                "aria-live": "polite"
            }), [E]);
        return {
            ariaDescribedby: F,
            ids: {
                root: k,
                control: S,
                label: T,
                errorText: E,
                helperText: M
            },
            refs: {
                rootRef: C
            },
            disabled: c,
            invalid: d,
            readOnly: h,
            required: m,
            getLabelProps: O,
            getRootProps: P,
            getInputProps: j,
            getTextareaProps: W,
            getSelectProps: I,
            getHelperTextProps: q,
            getErrorTextProps: A,
            getRequiredIndicatorProps: (0, u.useMemo)(() => () => ({
                "aria-hidden": !0,
                ...g.parts.requiredIndicator.attrs
            }), [])
        }
    };
    var y = e.i(416574);
    let x = (0, d.createSplitProps)(),
        w = (0, u.forwardRef)((e, t) => {
            let [r, i] = x(e, ["id", "ids", "disabled", "invalid", "readOnly", "required"]), s = b(r), a = (0, o.mergeProps)(s.getRootProps(), i);
            return (0, l.jsx)(y.FieldProvider, {
                value: s,
                children: (0, l.jsx)(h.ark.div, { ...a,
                    ref: (0, c.composeRefs)(t, s.refs.rootRef)
                })
            })
        });
    w.displayName = "FieldRoot";
    let R = (0, d.createSplitProps)(),
        S = (0, u.forwardRef)((e, t) => {
            let [{
                value: r
            }, i] = R(e, ["value"]), s = (0, o.mergeProps)(r.getRootProps(), i);
            return (0, l.jsx)(y.FieldProvider, {
                value: r,
                children: (0, l.jsx)(h.ark.div, { ...s,
                    ref: t
                })
            })
        });
    S.displayName = "FieldRootProvider";
    let C = (0, u.forwardRef)((e, t) => {
        let r = (0, y.useFieldContext)(),
            i = (0, o.mergeProps)(null == r ? void 0 : r.getSelectProps(), e);
        return (0, l.jsx)(h.ark.select, { ...i,
            ref: t
        })
    });
    C.displayName = "FieldSelect";
    var k = e.i(101759);
    let E = (0, u.forwardRef)((e, t) => {
        let {
            autoresize: r,
            ...i
        } = e, s = (0, u.useRef)(null), a = (0, y.useFieldContext)(), n = (0, o.mergeProps)(null == a ? void 0 : a.getTextareaProps(), {
            style: {
                resize: r ? "none" : void 0
            }
        }, i);
        return (0, u.useEffect)(() => {
            if (r) return (0, k.autoresizeTextarea)(s.current)
        }, [r]), (0, l.jsx)(h.ark.textarea, { ...n,
            ref: (0, c.composeRefs)(t, s)
        })
    });
    E.displayName = "FieldTextarea", e.s(["Context", () => t.FieldContext, "ErrorText", () => r.FieldErrorText, "HelperText", () => i.FieldHelperText, "Input", () => s.FieldInput, "Label", () => a.FieldLabel, "RequiredIndicator", () => n.FieldRequiredIndicator, "Root", () => w, "RootProvider", () => S, "Select", () => C, "Textarea", () => E], 522886);
    var M = e.i(522886);
    e.s(["Field", 0, M], 739383);
    var M = M;
    let {
        withContext: T,
        PropsProvider: F
    } = (0, e.i(285281).createRecipeContext)({
        key: "input"
    }), P = T(M.Input);
    e.s(["Input", () => P], 165341)
}, 118190, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        i = e.i(389868);
    let s = (0, r.forwardRef)(function(e, r) {
        return (0, t.jsx)(i.Stack, {
            align: "center",
            ...e,
            direction: "column",
            ref: r
        })
    });
    s.displayName = "VStack", e.s(["VStack", () => s])
}, 494114, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        i = e.i(489198);
    let s = (0, r.forwardRef)(function(e, r) {
        let {
            direction: s,
            align: a,
            justify: n,
            wrap: l,
            basis: o,
            grow: u,
            shrink: c,
            inline: d,
            ...h
        } = e;
        return (0, t.jsx)(i.chakra.div, {
            ref: r,
            ...h,
            css: {
                display: d ? "inline-flex" : "flex",
                flexDirection: s,
                alignItems: a,
                justifyContent: n,
                flexWrap: l,
                flexBasis: o,
                flexGrow: u,
                flexShrink: c,
                ...e.css
            }
        })
    });
    s.displayName = "Flex", e.s(["Flex", () => s])
}, 816941, 706645, 378469, e => {
    "use strict";
    let t;
    var r, i, s, a, n, l, o, u, c, d, h, p, f, v, m, _, g, b, y, x, w, R, S, C, k = e.i(376054),
        E = e.i(136927),
        M = e.i(550475),
        T = e.i(42297),
        F = e.i(474754),
        P = e.i(708347),
        O = e.i(318459),
        N = e.i(87147),
        j = e.i(423216),
        W = e.i(159337),
        I = e.i(879994),
        q = e.i(457765),
        A = (r = new WeakMap, i = new WeakMap, s = new WeakMap, a = new WeakMap, n = new WeakMap, l = new WeakMap, o = new WeakMap, u = new WeakMap, c = new WeakMap, d = new WeakMap, h = new WeakMap, p = new WeakMap, f = new WeakMap, v = new WeakMap, m = new WeakMap, _ = new WeakSet, g = new WeakSet, b = new WeakSet, y = new WeakSet, x = new WeakSet, w = new WeakSet, R = new WeakSet, S = new WeakSet, C = new WeakSet, class extends j.Subscribable {
            bindMethods() {
                this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
                1 === this.listeners.size && ((0, k._)(this, i).addObserver(this), L((0, k._)(this, i), this.options) ? (0, T._)(this, _, H).call(this) : this.updateResult(), (0, T._)(this, x, K).call(this))
            }
            onUnsubscribe() {
                this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
                return U((0, k._)(this, i), this.options, this.options.refetchOnReconnect)
            }
            shouldFetchOnWindowFocus() {
                return U((0, k._)(this, i), this.options, this.options.refetchOnWindowFocus)
            }
            destroy() {
                this.listeners = new Set, (0, T._)(this, w, J).call(this), (0, T._)(this, R, Y).call(this), (0, k._)(this, i).removeObserver(this)
            }
            setOptions(e) {
                let t = this.options,
                    s = (0, k._)(this, i);
                if (this.options = (0, k._)(this, r).defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, I.resolveEnabled)(this.options.enabled, (0, k._)(this, i))) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                (0, T._)(this, S, G).call(this), (0, k._)(this, i).setOptions(this.options), t._defaulted && !(0, I.shallowEqualObjects)(this.options, t) && (0, k._)(this, r).getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: (0, k._)(this, i),
                    observer: this
                });
                let a = this.hasListeners();
                a && Q((0, k._)(this, i), s, this.options, t) && (0, T._)(this, _, H).call(this), this.updateResult(), a && ((0, k._)(this, i) !== s || (0, I.resolveEnabled)(this.options.enabled, (0, k._)(this, i)) !== (0, I.resolveEnabled)(t.enabled, (0, k._)(this, i)) || (0, I.resolveStaleTime)(this.options.staleTime, (0, k._)(this, i)) !== (0, I.resolveStaleTime)(t.staleTime, (0, k._)(this, i))) && (0, T._)(this, g, V).call(this);
                let n = (0, T._)(this, b, z).call(this);
                a && ((0, k._)(this, i) !== s || (0, I.resolveEnabled)(this.options.enabled, (0, k._)(this, i)) !== (0, I.resolveEnabled)(t.enabled, (0, k._)(this, i)) || n !== (0, k._)(this, v)) && (0, T._)(this, y, B).call(this, n)
            }
            getOptimisticResult(e) {
                var t, s;
                let o = (0, k._)(this, r).getQueryCache().build((0, k._)(this, r), e),
                    u = this.createResult(o, e);
                return t = this, s = u, (0, I.shallowEqualObjects)(t.getCurrentResult(), s) || ((0, M._)(this, a, u), (0, M._)(this, l, this.options), (0, M._)(this, n, (0, k._)(this, i).state)), u
            }
            getCurrentResult() {
                return (0, k._)(this, a)
            }
            trackResult(e, t) {
                return new Proxy(e, {
                    get: (e, r) => (this.trackProp(r), null == t || t(r), "promise" === r && (this.trackProp("data"), this.options.experimental_prefetchInRender || "pending" !== (0, k._)(this, o).status || (0, k._)(this, o).reject(Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, r))
                })
            }
            trackProp(e) {
                (0, k._)(this, m).add(e)
            }
            getCurrentQuery() {
                return (0, k._)(this, i)
            }
            refetch() {
                let { ...e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.fetch({ ...e
                })
            }
            fetchOptimistic(e) {
                let t = (0, k._)(this, r).defaultQueryOptions(e),
                    i = (0, k._)(this, r).getQueryCache().build((0, k._)(this, r), t);
                return i.fetch().then(() => this.createResult(i, t))
            }
            fetch(e) {
                var t;
                return (0, T._)(this, _, H).call(this, { ...e,
                    cancelRefetch: null == (t = e.cancelRefetch) || t
                }).then(() => (this.updateResult(), (0, k._)(this, a)))
            }
            createResult(e, t) {
                let r, p = (0, k._)(this, i),
                    f = this.options,
                    v = (0, k._)(this, a),
                    m = (0, k._)(this, n),
                    _ = (0, k._)(this, l),
                    g = e !== p ? e.state : (0, k._)(this, s),
                    {
                        state: b
                    } = e,
                    y = { ...b
                    },
                    x = !1;
                if (t._optimisticResults) {
                    let r = this.hasListeners(),
                        i = !r && L(e, t),
                        s = r && Q(e, p, t, f);
                    (i || s) && (y = { ...y,
                        ...(0, N.fetchState)(b.data, e.options)
                    }), "isRestoring" === t._optimisticResults && (y.fetchStatus = "idle")
                }
                let {
                    error: w,
                    errorUpdatedAt: R,
                    status: S
                } = y;
                r = y.data;
                let C = !1;
                if (void 0 !== t.placeholderData && void 0 === r && "pending" === S) {
                    let e;
                    if ((null == v ? void 0 : v.isPlaceholderData) && t.placeholderData === (null == _ ? void 0 : _.placeholderData)) e = v.data, C = !0;
                    else {
                        var E;
                        e = "function" == typeof t.placeholderData ? t.placeholderData(null == (E = (0, k._)(this, h)) ? void 0 : E.state.data, (0, k._)(this, h)) : t.placeholderData
                    }
                    void 0 !== e && (S = "success", r = (0, I.replaceData)(null == v ? void 0 : v.data, e, t), x = !0)
                }
                if (t.select && void 0 !== r && !C)
                    if (v && r === (null == m ? void 0 : m.data) && t.select === (0, k._)(this, c)) r = (0, k._)(this, d);
                    else try {
                        (0, M._)(this, c, t.select), r = t.select(r), r = (0, I.replaceData)(null == v ? void 0 : v.data, r, t), (0, M._)(this, d, r), (0, M._)(this, u, null)
                    } catch (e) {
                        (0, M._)(this, u, e)
                    }(0, k._)(this, u) && (w = (0, k._)(this, u), r = (0, k._)(this, d), R = Date.now(), S = "error");
                let T = "fetching" === y.fetchStatus,
                    F = "pending" === S,
                    P = "error" === S,
                    O = F && T,
                    j = void 0 !== r,
                    q = {
                        status: S,
                        fetchStatus: y.fetchStatus,
                        isPending: F,
                        isSuccess: "success" === S,
                        isError: P,
                        isInitialLoading: O,
                        isLoading: O,
                        data: r,
                        dataUpdatedAt: y.dataUpdatedAt,
                        error: w,
                        errorUpdatedAt: R,
                        failureCount: y.fetchFailureCount,
                        failureReason: y.fetchFailureReason,
                        errorUpdateCount: y.errorUpdateCount,
                        isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                        isFetchedAfterMount: y.dataUpdateCount > g.dataUpdateCount || y.errorUpdateCount > g.errorUpdateCount,
                        isFetching: T,
                        isRefetching: T && !F,
                        isLoadingError: P && !j,
                        isPaused: "paused" === y.fetchStatus,
                        isPlaceholderData: x,
                        isRefetchError: P && j,
                        isStale: D(e, t),
                        refetch: this.refetch,
                        promise: (0, k._)(this, o),
                        isEnabled: !1 !== (0, I.resolveEnabled)(t.enabled, e)
                    };
                if (this.options.experimental_prefetchInRender) {
                    let t = e => {
                            "error" === q.status ? e.reject(q.error) : void 0 !== q.data && e.resolve(q.data)
                        },
                        r = () => {
                            t((0, M._)(this, o, q.promise = (0, W.pendingThenable)()))
                        },
                        i = (0, k._)(this, o);
                    switch (i.status) {
                        case "pending":
                            e.queryHash === p.queryHash && t(i);
                            break;
                        case "fulfilled":
                            ("error" === q.status || q.data !== i.value) && r();
                            break;
                        case "rejected":
                            ("error" !== q.status || q.error !== i.reason) && r()
                    }
                }
                return q
            }
            updateResult() {
                let e = (0, k._)(this, a),
                    t = this.createResult((0, k._)(this, i), this.options);
                if ((0, M._)(this, n, (0, k._)(this, i).state), (0, M._)(this, l, this.options), void 0 !== (0, k._)(this, n).data && (0, M._)(this, h, (0, k._)(this, i)), (0, I.shallowEqualObjects)(t, e)) return;
                (0, M._)(this, a, t);
                let r = () => {
                    if (!e) return !0;
                    let {
                        notifyOnChangeProps: t
                    } = this.options, r = "function" == typeof t ? t() : t;
                    if ("all" === r || !r && !(0, k._)(this, m).size) return !0;
                    let i = new Set(null != r ? r : (0, k._)(this, m));
                    return this.options.throwOnError && i.add("error"), Object.keys((0, k._)(this, a)).some(t => (0, k._)(this, a)[t] !== e[t] && i.has(t))
                };
                (0, T._)(this, C, X).call(this, {
                    listeners: r()
                })
            }
            onQueryUpdate() {
                this.updateResult(), this.hasListeners() && (0, T._)(this, x, K).call(this)
            }
            constructor(e, t) {
                super(), (0, F._)(this, _), (0, F._)(this, g), (0, F._)(this, b), (0, F._)(this, y), (0, F._)(this, x), (0, F._)(this, w), (0, F._)(this, R), (0, F._)(this, S), (0, F._)(this, C), (0, E._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, a, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, n, {
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
                }), (0, E._)(this, d, {
                    writable: !0,
                    value: void 0
                }), (0, E._)(this, h, {
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
                }), (0, E._)(this, m, {
                    writable: !0,
                    value: new Set
                }), this.options = t, (0, M._)(this, r, e), (0, M._)(this, u, null), (0, M._)(this, o, (0, W.pendingThenable)()), this.bindMethods(), this.setOptions(t)
            }
        });

    function L(e, t) {
        return !1 !== (0, I.resolveEnabled)(t.enabled, e) && void 0 === e.state.data && ("error" !== e.state.status || !1 !== t.retryOnMount) || void 0 !== e.state.data && U(e, t, t.refetchOnMount)
    }

    function U(e, t, r) {
        if (!1 !== (0, I.resolveEnabled)(t.enabled, e) && "static" !== (0, I.resolveStaleTime)(t.staleTime, e)) {
            let i = "function" == typeof r ? r(e) : r;
            return "always" === i || !1 !== i && D(e, t)
        }
        return !1
    }

    function Q(e, t, r, i) {
        return (e !== t || !1 === (0, I.resolveEnabled)(i.enabled, e)) && (!r.suspense || "error" !== e.state.status) && D(e, r)
    }

    function D(e, t) {
        return !1 !== (0, I.resolveEnabled)(t.enabled, e) && e.isStaleByTime((0, I.resolveStaleTime)(t.staleTime, e))
    }

    function H(e) {
        (0, T._)(this, S, G).call(this);
        let t = (0, k._)(this, i).fetch(this.options, e);
        return (null == e ? void 0 : e.throwOnError) || (t = t.catch(I.noop)), t
    }

    function V() {
        (0, T._)(this, w, J).call(this);
        let e = (0, I.resolveStaleTime)(this.options.staleTime, (0, k._)(this, i));
        if (I.isServer || (0, k._)(this, a).isStale || !(0, I.isValidTimeout)(e)) return;
        let t = (0, I.timeUntilStale)((0, k._)(this, a).dataUpdatedAt, e);
        (0, M._)(this, p, q.timeoutManager.setTimeout(() => {
            (0, k._)(this, a).isStale || this.updateResult()
        }, t + 1))
    }

    function z() {
        var e;
        return null != (e = "function" == typeof this.options.refetchInterval ? this.options.refetchInterval((0, k._)(this, i)) : this.options.refetchInterval) && e
    }

    function B(e) {
        (0, T._)(this, R, Y).call(this), (0, M._)(this, v, e), !I.isServer && !1 !== (0, I.resolveEnabled)(this.options.enabled, (0, k._)(this, i)) && (0, I.isValidTimeout)((0, k._)(this, v)) && 0 !== (0, k._)(this, v) && (0, M._)(this, f, q.timeoutManager.setInterval(() => {
            (this.options.refetchIntervalInBackground || P.focusManager.isFocused()) && (0, T._)(this, _, H).call(this)
        }, (0, k._)(this, v)))
    }

    function K() {
        (0, T._)(this, g, V).call(this), (0, T._)(this, y, B).call(this, (0, T._)(this, b, z).call(this))
    }

    function J() {
        (0, k._)(this, p) && (q.timeoutManager.clearTimeout((0, k._)(this, p)), (0, M._)(this, p, void 0))
    }

    function Y() {
        (0, k._)(this, f) && (q.timeoutManager.clearInterval((0, k._)(this, f)), (0, M._)(this, f, void 0))
    }

    function G() {
        let e = (0, k._)(this, r).getQueryCache().build((0, k._)(this, r), this.options);
        if (e === (0, k._)(this, i)) return;
        let t = (0, k._)(this, i);
        (0, M._)(this, i, e), (0, M._)(this, s, e.state), this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
    }

    function X(e) {
        O.notifyManager.batch(() => {
            e.listeners && this.listeners.forEach(e => {
                e((0, k._)(this, a))
            }), (0, k._)(this, r).getQueryCache().notify({
                query: (0, k._)(this, i),
                type: "observerResultsUpdated"
            })
        })
    }
    e.s(["QueryObserver", () => A], 706645), e.i(556464);
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
    var er = (e, t, r) => t.fetchOptimistic(e).catch(() => {
        r.clearReset()
    });

    function ei(e, t, r) {
        var i, s, a, n, l;
        let o = Z.useContext(et),
            u = Z.useContext(ee),
            c = (0, $.useQueryClient)(r),
            d = c.defaultQueryOptions(e);
        if (null == (s = c.getDefaultOptions().queries) || null == (i = s._experimental_beforeQuery) || i.call(s, d), d._optimisticResults = o ? "isRestoring" : "optimistic", d.suspense) {
            let e = e => "static" === e ? e : Math.max(null != e ? e : 1e3, 1e3),
                t = d.staleTime;
            d.staleTime = "function" == typeof t ? function() {
                for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                return e(t(...i))
            } : e(t), "number" == typeof d.gcTime && (d.gcTime = Math.max(d.gcTime, 1e3))
        }(d.suspense || d.throwOnError || d.experimental_prefetchInRender) && !u.isReset() && (d.retryOnMount = !1), Z.useEffect(() => {
            u.clearReset()
        }, [u]);
        let h = !c.getQueryCache().get(d.queryHash),
            [p] = Z.useState(() => new t(c, d)),
            f = p.getOptimisticResult(d),
            v = !o && !1 !== e.subscribed;
        if (Z.useSyncExternalStore(Z.useCallback(e => {
                let t = v ? p.subscribe(O.notifyManager.batchCalls(e)) : I.noop;
                return p.updateResult(), t
            }, [p, v]), () => p.getCurrentResult(), () => p.getCurrentResult()), Z.useEffect(() => {
                p.setOptions(d)
            }, [d, p]), (null == d ? void 0 : d.suspense) && f.isPending) throw er(d, p, u);
        if ((e => {
                let {
                    result: t,
                    errorResetBoundary: r,
                    throwOnError: i,
                    query: s,
                    suspense: a
                } = e;
                return t.isError && !r.isReset() && !t.isFetching && s && (a && void 0 === t.data || (0, I.shouldThrowError)(i, [t.error, s]))
            })({
                result: f,
                errorResetBoundary: u,
                throwOnError: d.throwOnError,
                query: c.getQueryCache().get(d.queryHash),
                suspense: d.suspense
            })) throw f.error;
        if (null == (n = c.getDefaultOptions().queries) || null == (a = n._experimental_afterQuery) || a.call(n, d, f), d.experimental_prefetchInRender && !I.isServer && f.isLoading && f.isFetching && !o) {
            let e = h ? er(d, p, u) : null == (l = c.getQueryCache().get(d.queryHash)) ? void 0 : l.promise;
            null == e || e.catch(I.noop).finally(() => {
                p.updateResult()
            })
        }
        return d.notifyOnChangeProps ? f : p.trackResult(f)
    }

    function es(e, t) {
        return ei(e, A, t)
    }
    e.s(["useBaseQuery", () => ei], 378469), e.s(["useQuery", () => es], 816941)
}, 840171, e => {
    "use strict";
    var t, r, i, s, a, n, l = e.i(251570),
        o = e.i(376054),
        u = e.i(136927),
        c = e.i(550475),
        d = e.i(42297),
        h = e.i(474754),
        p = e.i(614988),
        f = e.i(318459),
        v = e.i(423216),
        m = e.i(879994),
        _ = (t = new WeakMap, r = new WeakMap, i = new WeakMap, s = new WeakMap, a = new WeakSet, n = new WeakSet, class extends v.Subscribable {
            bindMethods() {
                this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
            }
            setOptions(e) {
                var r;
                let s = this.options;
                this.options = (0, o._)(this, t).defaultMutationOptions(e), (0, m.shallowEqualObjects)(this.options, s) || (0, o._)(this, t).getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: (0, o._)(this, i),
                    observer: this
                }), (null == s ? void 0 : s.mutationKey) && this.options.mutationKey && (0, m.hashKey)(s.mutationKey) !== (0, m.hashKey)(this.options.mutationKey) ? this.reset() : (null == (r = (0, o._)(this, i)) ? void 0 : r.state.status) === "pending" && (0, o._)(this, i).setOptions(this.options)
            }
            onUnsubscribe() {
                if (!this.hasListeners()) {
                    var e;
                    null == (e = (0, o._)(this, i)) || e.removeObserver(this)
                }
            }
            onMutationUpdate(e) {
                (0, d._)(this, a, g).call(this), (0, d._)(this, n, b).call(this, e)
            }
            getCurrentResult() {
                return (0, o._)(this, r)
            }
            reset() {
                var e;
                null == (e = (0, o._)(this, i)) || e.removeObserver(this), (0, c._)(this, i, void 0), (0, d._)(this, a, g).call(this), (0, d._)(this, n, b).call(this)
            }
            mutate(e, r) {
                var a;
                return (0, c._)(this, s, r), null == (a = (0, o._)(this, i)) || a.removeObserver(this), (0, c._)(this, i, (0, o._)(this, t).getMutationCache().build((0, o._)(this, t), this.options)), (0, o._)(this, i).addObserver(this), (0, o._)(this, i).execute(e)
            }
            constructor(e, l) {
                super(), (0, h._)(this, a), (0, h._)(this, n), (0, u._)(this, t, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, c._)(this, t, e), this.setOptions(l), this.bindMethods(), (0, d._)(this, a, g).call(this)
            }
        });

    function g() {
        var e, t;
        let s = null != (t = null == (e = (0, o._)(this, i)) ? void 0 : e.state) ? t : (0, p.getDefaultState)();
        (0, c._)(this, r, { ...s,
            isPending: "pending" === s.status,
            isSuccess: "success" === s.status,
            isError: "error" === s.status,
            isIdle: "idle" === s.status,
            mutate: this.mutate,
            reset: this.reset
        })
    }

    function b(e) {
        f.notifyManager.batch(() => {
            if ((0, o._)(this, s) && this.hasListeners()) {
                var i, a, n, l, u, c, d, h;
                let p = (0, o._)(this, r).variables,
                    f = (0, o._)(this, r).context,
                    v = {
                        client: (0, o._)(this, t),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (null == e ? void 0 : e.type) === "success" ? (null == (i = (a = (0, o._)(this, s)).onSuccess) || i.call(a, e.data, p, f, v), null == (n = (l = (0, o._)(this, s)).onSettled) || n.call(l, e.data, null, p, f, v)) : (null == e ? void 0 : e.type) === "error" && (null == (u = (c = (0, o._)(this, s)).onError) || u.call(c, e.error, p, f, v), null == (d = (h = (0, o._)(this, s)).onSettled) || d.call(h, void 0, e.error, p, f, v))
            }
            this.listeners.forEach(e => {
                e((0, o._)(this, r))
            })
        })
    }
    var y = e.i(940948);

    function x(e, t) {
        let r = (0, y.useQueryClient)(t),
            [i] = l.useState(() => new _(r, e));
        l.useEffect(() => {
            i.setOptions(e)
        }, [i, e]);
        let s = l.useSyncExternalStore(l.useCallback(e => i.subscribe(f.notifyManager.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
            a = l.useCallback((e, t) => {
                i.mutate(e, t).catch(m.noop)
            }, [i]);
        if (s.error && (0, m.shouldThrowError)(i.options.throwOnError, [s.error])) throw s.error;
        return { ...s,
            mutate: a,
            mutateAsync: s.mutate
        }
    }
    e.s(["useMutation", () => x], 840171)
}, 789757, e => {
    "use strict";
    let {
        PropsProvider: t,
        withContext: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "badge"
    }), i = r("span");
    i.displayName = "Badge", e.s(["Badge", () => i])
}]);

//# debugId=55722e23-d7e6-1604-a1a9-e78334efcdbd
//# sourceMappingURL=3ee431411ac3beae.js.map