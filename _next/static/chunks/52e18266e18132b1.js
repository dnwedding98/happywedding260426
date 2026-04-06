;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "490362e7-c328-7ba5-caed-d65c6930f597")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 291645, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(744066),
        a = e.r(483632),
        o = n._(e.r(251570)),
        i = e.r(449561),
        c = e.r(620343);
    e.r(681821);
    let s = e.r(486175);
    class u extends o.default.Component {
        componentDidCatch() {}
        static getDerivedStateFromError(e) {
            if ((0, c.isHTTPAccessFallbackError)(e)) return {
                triggeredStatus: (0, c.getAccessFallbackHTTPStatus)(e)
            };
            throw e
        }
        static getDerivedStateFromProps(e, t) {
            return e.pathname !== t.previousPathname && t.triggeredStatus ? {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            } : {
                triggeredStatus: t.triggeredStatus,
                previousPathname: e.pathname
            }
        }
        render() {
            let {
                notFound: e,
                forbidden: t,
                unauthorized: r,
                children: n
            } = this.props, {
                triggeredStatus: o
            } = this.state, i = {
                [c.HTTPAccessErrorStatus.NOT_FOUND]: e,
                [c.HTTPAccessErrorStatus.FORBIDDEN]: t,
                [c.HTTPAccessErrorStatus.UNAUTHORIZED]: r
            };
            if (o) {
                let s = o === c.HTTPAccessErrorStatus.NOT_FOUND && e,
                    u = o === c.HTTPAccessErrorStatus.FORBIDDEN && t,
                    l = o === c.HTTPAccessErrorStatus.UNAUTHORIZED && r;
                return s || u || l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }), !1, i[o]]
                }) : n
            }
            return n
        }
        constructor(e) {
            super(e), this.state = {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            }
        }
    }

    function l(e) {
        let {
            notFound: t,
            forbidden: r,
            unauthorized: n,
            children: c
        } = e, l = (0, i.useUntrackedPathname)(), d = (0, o.useContext)(s.MissingSlotContext);
        return t || r || n ? (0, a.jsx)(u, {
            pathname: l,
            notFound: t,
            forbidden: r,
            unauthorized: n,
            missingSlots: d,
            children: c
        }) : (0, a.jsx)(a.Fragment, {
            children: c
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 341452, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(251570);

    function a(e, t) {
        let [r, a] = (0, n.useState)(() => ({
            tree: e,
            stateKey: t,
            next: null
        }));
        if (r.tree === e) return r;
        let o = {
                tree: e,
                stateKey: t,
                next: null
            },
            i = 1,
            c = r,
            s = o;
        for (; null !== c && i < 1;) {
            if (c.stateKey === t) {
                s.next = c.next;
                break
            } {
                i++;
                let e = {
                    tree: c.tree,
                    stateKey: c.stateKey,
                    next: null
                };
                s.next = e, s = e
            }
            c = c.next
        }
        return a(o), o
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 277502, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return w
        }
    });
    let n = e.r(481258),
        a = e.r(744066),
        o = e.r(483632),
        i = a._(e.r(251570)),
        c = n._(e.r(453325)),
        s = e.r(486175),
        u = e.r(475358),
        l = e.r(906014),
        d = e.r(37563),
        f = e.r(346127),
        p = e.r(531015),
        h = e.r(291645),
        m = e.r(188076),
        g = e.r(341452);
    e.r(154408);
    let y = e.r(423244),
        b = e.r(695304),
        P = e.r(399932),
        _ = c.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        S = ["bottom", "height", "left", "right", "top", "width", "x", "y"];

    function v(e, t) {
        let r = e.getBoundingClientRect();
        return r.top >= 0 && r.top <= t
    }
    class O extends i.default.Component {
        componentDidMount() {
            this.handlePotentialScroll()
        }
        componentDidUpdate() {
            this.props.focusAndScrollRef.apply && this.handlePotentialScroll()
        }
        render() {
            return this.props.children
        }
        constructor(...e) {
            super(...e), this.handlePotentialScroll = () => {
                let {
                    focusAndScrollRef: e,
                    segmentPath: t
                } = this.props;
                if (e.apply) {
                    var r;
                    if (0 !== e.segmentPaths.length && !e.segmentPaths.some(e => t.every((t, r) => (0, d.matchSegment)(t, e[r])))) return;
                    let n = null,
                        a = e.hashFragment;
                    if (a && (n = "top" === a ? document.body : null != (r = document.getElementById(a)) ? r : document.getElementsByName(a)[0]), n || (n = "undefined" == typeof window ? null : (0, _.findDOMNode)(this)), !(n instanceof Element)) return;
                    for (; !(n instanceof HTMLElement) || function(e) {
                            if (["sticky", "fixed"].includes(getComputedStyle(e).position)) return !0;
                            let t = e.getBoundingClientRect();
                            return S.every(e => 0 === t[e])
                        }(n);) {
                        if (null === n.nextElementSibling) return;
                        n = n.nextElementSibling
                    }
                    e.apply = !1, e.hashFragment = null, e.segmentPaths = [], (0, f.disableSmoothScrollDuringRouteTransition)(() => {
                        if (a) return void n.scrollIntoView();
                        let e = document.documentElement,
                            t = e.clientHeight;
                        !v(n, t) && (e.scrollTop = 0, v(n, t) || n.scrollIntoView())
                    }, {
                        dontForceLayout: !0,
                        onlyHashChange: e.onlyHashChange
                    }), e.onlyHashChange = !1, n.focus()
                }
            }
        }
    }

    function E(e) {
        let {
            segmentPath: t,
            children: r
        } = e, n = (0, i.useContext)(s.GlobalLayoutRouterContext);
        if (!n) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        return (0, o.jsx)(O, {
            segmentPath: t,
            focusAndScrollRef: n.focusAndScrollRef,
            children: r
        })
    }

    function R(e) {
        let t, {
                tree: r,
                segmentPath: n,
                debugNameContext: a,
                cacheNode: c,
                params: l,
                url: d,
                isActive: f
            } = e,
            p = (0, i.useContext)(s.GlobalLayoutRouterContext);
        if ((0, i.useContext)(y.NavigationPromisesContext), !p) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        let h = null !== c ? c : (0, i.use)(u.unresolvedThenable),
            m = null !== h.prefetchRsc ? h.prefetchRsc : h.rsc,
            g = (0, i.useDeferredValue)(h.rsc, m);
        if ((0, P.isDeferredRsc)(g)) {
            let e = (0, i.use)(g);
            null === e && (0, i.use)(u.unresolvedThenable), t = e
        } else null === g && (0, i.use)(u.unresolvedThenable), t = g;
        let b = t;
        return (0, o.jsx)(s.LayoutRouterContext.Provider, {
            value: {
                parentTree: r,
                parentCacheNode: h,
                parentSegmentPath: n,
                parentParams: l,
                debugNameContext: a,
                url: d,
                isActive: f
            },
            children: b
        })
    }

    function j(e) {
        let t, {
            name: r,
            loading: n,
            children: a
        } = e;
        if (t = "object" == typeof n && null !== n && "function" == typeof n.then ? (0, i.use)(n) : n) {
            let e = t[0],
                n = t[1],
                c = t[2];
            return (0, o.jsx)(i.Suspense, {
                name: r,
                fallback: (0, o.jsxs)(o.Fragment, {
                    children: [n, c, e]
                }),
                children: a
            })
        }
        return (0, o.jsx)(o.Fragment, {
            children: a
        })
    }

    function w(e) {
        let {
            parallelRouterKey: t,
            error: r,
            errorStyles: n,
            errorScripts: a,
            templateStyles: c,
            templateScripts: d,
            template: f,
            notFound: y,
            forbidden: P,
            unauthorized: _,
            segmentViewBoundaries: S
        } = e, v = (0, i.useContext)(s.LayoutRouterContext);
        if (!v) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: !1,
            configurable: !0
        });
        let {
            parentTree: O,
            parentCacheNode: w,
            parentSegmentPath: C,
            parentParams: T,
            url: x,
            isActive: A,
            debugNameContext: M
        } = v, D = w.parallelRoutes, F = D.get(t);
        F || (F = new Map, D.set(t, F));
        let I = O[0],
            k = null === C ? [t] : C.concat([I, t]),
            N = O[1][t];
        void 0 === N && (0, i.use)(u.unresolvedThenable);
        let U = N[0],
            L = (0, m.createRouterCacheKey)(U, !0),
            X = (0, g.useRouterBFCache)(N, L),
            H = [];
        do {
            var B;
            let e = X.tree,
                t = X.stateKey,
                i = e[0],
                u = (0, m.createRouterCacheKey)(i),
                g = null != (B = F.get(u)) ? B : null,
                S = T;
            if (Array.isArray(i)) {
                let e = i[0],
                    t = i[1],
                    r = i[2],
                    n = (0, b.getParamValueFromCacheKey)(t, r);
                null !== n && (S = { ...T,
                    [e]: n
                })
            }
            let v = function(e) {
                    if ("/" === e) return "/";
                    if ("string" == typeof e)
                        if ("(slot)" === e) return;
                        else return e + "/";
                    return e[1] + "/"
                }(i),
                O = null != v ? v : M,
                C = void 0 === v ? void 0 : M,
                D = w.loading,
                I = (0, o.jsxs)(s.TemplateContext.Provider, {
                    value: (0, o.jsxs)(E, {
                        segmentPath: k,
                        children: [(0, o.jsx)(l.ErrorBoundary, {
                            errorComponent: r,
                            errorStyles: n,
                            errorScripts: a,
                            children: (0, o.jsx)(j, {
                                name: C,
                                loading: D,
                                children: (0, o.jsx)(h.HTTPAccessFallbackBoundary, {
                                    notFound: y,
                                    forbidden: P,
                                    unauthorized: _,
                                    children: (0, o.jsxs)(p.RedirectBoundary, {
                                        children: [(0, o.jsx)(R, {
                                            url: x,
                                            tree: e,
                                            params: S,
                                            cacheNode: g,
                                            segmentPath: k,
                                            debugNameContext: O,
                                            isActive: A && t === L
                                        }), null]
                                    })
                                })
                            })
                        }), null]
                    }),
                    children: [c, d, f]
                }, t);
            H.push(I), X = X.next
        } while (null !== X) return H
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 588409, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let n = e.r(744066),
        a = e.r(483632),
        o = n._(e.r(251570)),
        i = e.r(486175);

    function c() {
        let e = (0, o.useContext)(i.TemplateContext);
        return (0, a.jsx)(a.Fragment, {
            children: e
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 514401, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 289534, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(514401).createRenderSearchParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 97631, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 575956, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(97631).createRenderParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 522990, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ReflectAdapter", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    class n {
        static get(e, t, r) {
            let n = Reflect.get(e, t, r);
            return "function" == typeof n ? n.bind(e) : n
        }
        static set(e, t, r, n) {
            return Reflect.set(e, t, r, n)
        }
        static has(e, t) {
            return Reflect.has(e, t)
        }
        static deleteProperty(e, t) {
            return Reflect.deleteProperty(e, t)
        }
    }
}, 408168, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createDedupedByCallsiteServerErrorLoggerDev", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = function(e, t) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var r = a(void 0);
        if (r && r.has(e)) return r.get(e);
        var n = {
                __proto__: null
            },
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                var c = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = e[i]
            }
        return n.default = e, r && r.set(e, n), n
    }(e.r(251570));

    function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            r = new WeakMap;
        return (a = function(e) {
            return e ? r : t
        })(e)
    }
    let o = {
            current: null
        },
        i = "function" == typeof n.cache ? n.cache : e => e,
        c = console.warn;

    function s(e) {
        return function() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            c(e(...r))
        }
    }
    i(e => {
        try {
            c(o.current)
        } finally {
            o.current = null
        }
    })
}, 386289, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        describeHasCheckingStringProperty: function() {
            return c
        },
        describeStringPropertyAccess: function() {
            return i
        },
        wellKnownProperties: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

    function i(e, t) {
        return o.test(t) ? "`".concat(e, ".").concat(t, "`") : "`".concat(e, "[").concat(JSON.stringify(t), "]`")
    }

    function c(e, t) {
        let r = JSON.stringify(t);
        return "`Reflect.has(".concat(e, ", ").concat(r, ")`, `").concat(r, " in ").concat(e, "`, or similar")
    }
    let s = new Set(["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "then", "catch", "finally", "status", "displayName", "_debugInfo", "toJSON", "$$typeof", "__esModule"])
}, 847387, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "afterTaskAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (0, e.r(433029).createAsyncLocalStorage)()
}, 422200, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "afterTaskAsyncStorage", {
        enumerable: !0,
        get: function() {
            return n.afterTaskAsyncStorageInstance
        }
    });
    let n = e.r(847387)
}, 778762, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        isRequestAPICallableInsideAfter: function() {
            return u
        },
        throwForSearchParamsAccessInUseCache: function() {
            return s
        },
        throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
            return c
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e.r(116601),
        i = e.r(422200);

    function c(e, t) {
        throw Object.defineProperty(new o.StaticGenBailoutError("Route ".concat(e, ' with `dynamic = "error"` couldn\'t be rendered statically because it used ').concat(t, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
            value: "E543",
            enumerable: !1,
            configurable: !0
        })
    }

    function s(e, t) {
        let r = Object.defineProperty(Error("Route ".concat(e.route, ' used `searchParams` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await `searchParams` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
            value: "E842",
            enumerable: !1,
            configurable: !0
        });
        throw Error.captureStackTrace(r, t), null != e.invalidDynamicUsageError || (e.invalidDynamicUsageError = r), r
    }

    function u() {
        let e = i.afterTaskAsyncStorage.getStore();
        return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action"
    }
}, 778571, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n, a = {
        RenderStage: function() {
            return s
        },
        StagedRenderingController: function() {
            return u
        }
    };
    for (var o in a) Object.defineProperty(r, o, {
        enumerable: !0,
        get: a[o]
    });
    let i = e.r(285235),
        c = e.r(667210);
    var s = ((n = {})[n.Before = 1] = "Before", n[n.Static = 2] = "Static", n[n.Runtime = 3] = "Runtime", n[n.Dynamic = 4] = "Dynamic", n[n.Abandoned = 5] = "Abandoned", n);
    class u {
        onStage(e, t) {
            if (this.currentStage >= e) t();
            else if (3 === e) this.runtimeStageListeners.push(t);
            else if (4 === e) this.dynamicStageListeners.push(t);
            else throw Object.defineProperty(new i.InvariantError("Invalid render stage: ".concat(e)), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: !1,
                configurable: !0
            })
        }
        canSyncInterrupt() {
            if (1 === this.currentStage) return !1;
            let e = this.hasRuntimePrefetch ? 4 : 3;
            return this.currentStage < e
        }
        syncInterruptCurrentStageWithReason(e) {
            if (1 !== this.currentStage) {
                if (this.mayAbandon) return this.abandonRenderImpl();
                switch (this.currentStage) {
                    case 2:
                        this.staticInterruptReason = e, this.advanceStage(4);
                        return;
                    case 3:
                        this.hasRuntimePrefetch && (this.runtimeInterruptReason = e, this.advanceStage(4));
                        return
                }
            }
        }
        getStaticInterruptReason() {
            return this.staticInterruptReason
        }
        getRuntimeInterruptReason() {
            return this.runtimeInterruptReason
        }
        getStaticStageEndTime() {
            return this.staticStageEndTime
        }
        getRuntimeStageEndTime() {
            return this.runtimeStageEndTime
        }
        abandonRender() {
            if (!this.mayAbandon) throw Object.defineProperty(new i.InvariantError("`abandonRender` called on a stage controller that cannot be abandoned."), "__NEXT_ERROR_CODE", {
                value: "E938",
                enumerable: !1,
                configurable: !0
            });
            this.abandonRenderImpl()
        }
        abandonRenderImpl() {
            let {
                currentStage: e
            } = this;
            switch (e) {
                case 2:
                    this.currentStage = 5, this.resolveRuntimeStage();
                    return;
                case 3:
                    this.currentStage = 5;
                    return
            }
        }
        advanceStage(e) {
            if (e <= this.currentStage) return;
            let t = this.currentStage;
            if (this.currentStage = e, t < 3 && e >= 3 && (this.staticStageEndTime = performance.now() + performance.timeOrigin, this.resolveRuntimeStage()), t < 4 && e >= 4) {
                this.runtimeStageEndTime = performance.now() + performance.timeOrigin, this.resolveDynamicStage();
                return
            }
        }
        resolveRuntimeStage() {
            let e = this.runtimeStageListeners;
            for (let t = 0; t < e.length; t++) e[t]();
            e.length = 0, this.runtimeStagePromise.resolve()
        }
        resolveDynamicStage() {
            let e = this.dynamicStageListeners;
            for (let t = 0; t < e.length; t++) e[t]();
            e.length = 0, this.dynamicStagePromise.resolve()
        }
        getStagePromise(e) {
            switch (e) {
                case 3:
                    return this.runtimeStagePromise.promise;
                case 4:
                    return this.dynamicStagePromise.promise;
                default:
                    throw Object.defineProperty(new i.InvariantError("Invalid render stage: ".concat(e)), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: !1,
                        configurable: !0
                    })
            }
        }
        waitForStage(e) {
            return this.getStagePromise(e)
        }
        delayUntilStage(e, t, r) {
            var n, a, o;
            let i, c = (n = this.getStagePromise(e), a = t, o = r, i = new Promise((e, t) => {
                n.then(e.bind(null, o), t)
            }), void 0 !== a && (i.displayName = a), i);
            return this.abortSignal && c.catch(l), c
        }
        constructor(e = null, t) {
            this.abortSignal = e, this.hasRuntimePrefetch = t, this.currentStage = 1, this.staticInterruptReason = null, this.runtimeInterruptReason = null, this.staticStageEndTime = 1 / 0, this.runtimeStageEndTime = 1 / 0, this.runtimeStageListeners = [], this.dynamicStageListeners = [], this.runtimeStagePromise = (0, c.createPromiseWithResolvers)(), this.dynamicStagePromise = (0, c.createPromiseWithResolvers)(), this.mayAbandon = !1, e && (e.addEventListener("abort", () => {
                let {
                    reason: t
                } = e;
                this.currentStage < 3 && (this.runtimeStagePromise.promise.catch(l), this.runtimeStagePromise.reject(t)), (this.currentStage < 4 || 5 === this.currentStage) && (this.dynamicStagePromise.promise.catch(l), this.dynamicStagePromise.reject(t))
            }, {
                once: !0
            }), this.mayAbandon = !0)
        }
    }

    function l() {}
}, 887933, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        createPrerenderSearchParamsForClientPage: function() {
            return g
        },
        createSearchParamsFromClient: function() {
            return p
        },
        createServerSearchParamsForMetadata: function() {
            return h
        },
        createServerSearchParamsForServerPage: function() {
            return m
        },
        makeErroringSearchParamsForUseCache: function() {
            return S
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e.r(522990),
        i = e.r(165017),
        c = e.r(242),
        s = e.r(285235),
        u = e.r(485016),
        l = e.r(408168),
        d = e.r(386289),
        f = e.r(778762);

    function p(e, t) {
        let r = c.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
                return y(t, r);
            case "prerender-runtime":
                throw Object.defineProperty(new s.InvariantError("createSearchParamsFromClient should not be called in a runtime prerender."), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: !1,
                    configurable: !0
                });
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new s.InvariantError("createSearchParamsFromClient should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: !1,
                    configurable: !0
                });
            case "request":
                return b(e, t, r)
        }(0, c.throwInvariantForMissingStore)()
    }
    e.r(778571);
    let h = m;

    function m(e, t) {
        let r = c.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
                return y(t, r);
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new s.InvariantError("createServerSearchParamsForServerPage should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender-runtime":
                var n, a;
                return n = e, a = r, (0, i.delayUntilRuntimeStage)(a, v(n));
            case "request":
                return b(e, t, r)
        }(0, c.throwInvariantForMissingStore)()
    }

    function g(e) {
        if (e.forceStatic) return Promise.resolve({});
        let t = c.workUnitAsyncStorage.getStore();
        if (t) switch (t.type) {
            case "prerender":
            case "prerender-client":
                return (0, u.makeHangingPromise)(t.renderSignal, e.route, "`searchParams`");
            case "prerender-runtime":
                throw Object.defineProperty(new s.InvariantError("createPrerenderSearchParamsForClientPage should not be called in a runtime prerender."), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: !1,
                    configurable: !0
                });
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new s.InvariantError("createPrerenderSearchParamsForClientPage should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
                return Promise.resolve({})
        }(0, c.throwInvariantForMissingStore)()
    }

    function y(e, t) {
        if (e.forceStatic) return Promise.resolve({});
        switch (t.type) {
            case "prerender":
            case "prerender-client":
                var r = e,
                    n = t;
                let a = P.get(n);
                if (a) return a;
                let c = (0, u.makeHangingPromise)(n.renderSignal, r.route, "`searchParams`"),
                    s = new Proxy(c, {
                        get(e, t, r) {
                            if (Object.hasOwn(c, t)) return o.ReflectAdapter.get(e, t, r);
                            switch (t) {
                                case "then":
                                    return (0, i.annotateDynamicAccess)("`await searchParams`, `searchParams.then`, or similar", n), o.ReflectAdapter.get(e, t, r);
                                case "status":
                                    return (0, i.annotateDynamicAccess)("`use(searchParams)`, `searchParams.status`, or similar", n), o.ReflectAdapter.get(e, t, r);
                                default:
                                    return o.ReflectAdapter.get(e, t, r)
                            }
                        }
                    });
                return P.set(n, s), s;
            case "prerender-ppr":
            case "prerender-legacy":
                var l = e,
                    d = t;
                let p = P.get(l);
                if (p) return p;
                let h = Promise.resolve({}),
                    m = new Proxy(h, {
                        get(e, t, r) {
                            if (Object.hasOwn(h, t)) return o.ReflectAdapter.get(e, t, r);
                            if ("string" == typeof t && "then" === t) {
                                let e = "`await searchParams`, `searchParams.then`, or similar";
                                l.dynamicShouldError ? (0, f.throwWithStaticGenerationBailoutErrorWithDynamicError)(l.route, e) : "prerender-ppr" === d.type ? (0, i.postponeWithTracking)(l.route, e, d.dynamicTracking) : (0, i.throwToInterruptStaticGeneration)(e, l, d)
                            }
                            return o.ReflectAdapter.get(e, t, r)
                        }
                    });
                return P.set(l, m), m;
            default:
                return t
        }
    }

    function b(e, t, r) {
        return t.forceStatic ? Promise.resolve({}) : v(e)
    }
    let P = new WeakMap,
        _ = new WeakMap;

    function S(e) {
        let t = _.get(e);
        if (t) return t;
        let r = Promise.resolve({}),
            n = new Proxy(r, {
                get: function t(n, a, i) {
                    return Object.hasOwn(r, a) || "string" != typeof a || "then" !== a && d.wellKnownProperties.has(a) || (0, f.throwForSearchParamsAccessInUseCache)(e, t), o.ReflectAdapter.get(n, a, i)
                }
            });
        return _.set(e, n), n
    }

    function v(e) {
        let t = P.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return P.set(e, r), r
    }(0, l.createDedupedByCallsiteServerErrorLoggerDev)(function(e, t) {
        return Object.defineProperty(Error("".concat(e ? 'Route "'.concat(e, '" ') : "This route ", "used ").concat(t, ". ") + "`searchParams` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
            value: "E848",
            enumerable: !1,
            configurable: !0
        })
    })
}, 18737, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "dynamicAccessAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (0, e.r(433029).createAsyncLocalStorage)()
}, 402856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "dynamicAccessAsyncStorage", {
        enumerable: !0,
        get: function() {
            return n.dynamicAccessAsyncStorageInstance
        }
    });
    let n = e.r(18737)
}, 332899, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        createParamsFromClient: function() {
            return h
        },
        createPrerenderParamsForClientSegment: function() {
            return b
        },
        createServerParamsForMetadata: function() {
            return m
        },
        createServerParamsForRoute: function() {
            return g
        },
        createServerParamsForServerSegment: function() {
            return y
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e.r(523061),
        i = e.r(522990),
        c = e.r(165017),
        s = e.r(242),
        u = e.r(285235),
        l = e.r(386289),
        d = e.r(485016),
        f = e.r(408168),
        p = e.r(402856);

    function h(e, t) {
        let r = s.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
                return P(e, t, r);
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new u.InvariantError("createParamsFromClient should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender-runtime":
                throw Object.defineProperty(new u.InvariantError("createParamsFromClient should not be called in a runtime prerender."), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: !1,
                    configurable: !0
                });
            case "request":
                return O(e)
        }(0, s.throwInvariantForMissingStore)()
    }
    e.r(778571);
    let m = y;

    function g(e, t) {
        let r = s.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
                return P(e, t, r);
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new u.InvariantError("createServerParamsForRoute should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender-runtime":
                return _(e, r);
            case "request":
                return O(e)
        }(0, s.throwInvariantForMissingStore)()
    }

    function y(e, t) {
        let r = s.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
                return P(e, t, r);
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new u.InvariantError("createServerParamsForServerSegment should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender-runtime":
                return _(e, r);
            case "request":
                return O(e)
        }(0, s.throwInvariantForMissingStore)()
    }

    function b(e) {
        let t = o.workAsyncStorage.getStore();
        if (!t) throw Object.defineProperty(new u.InvariantError("Missing workStore in createPrerenderParamsForClientSegment"), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: !1,
            configurable: !0
        });
        let r = s.workUnitAsyncStorage.getStore();
        if (r) switch (r.type) {
            case "prerender":
            case "prerender-client":
                let n = r.fallbackRouteParams;
                if (n) {
                    for (let a in e)
                        if (n.has(a)) return (0, d.makeHangingPromise)(r.renderSignal, t.route, "`params`")
                }
                break;
            case "cache":
            case "private-cache":
            case "unstable-cache":
                throw Object.defineProperty(new u.InvariantError("createPrerenderParamsForClientSegment should not be called in cache contexts."), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: !1,
                    configurable: !0
                })
        }
        return Promise.resolve(e)
    }

    function P(e, t, r) {
        switch (r.type) {
            case "prerender":
            case "prerender-client":
                {
                    let n = r.fallbackRouteParams;
                    if (n) {
                        for (let a in e)
                            if (n.has(a)) return function(e, t, r) {
                                let n = S.get(e);
                                if (n) return n;
                                let a = new Proxy((0, d.makeHangingPromise)(r.renderSignal, t.route, "`params`"), v);
                                return S.set(e, a), a
                            }(e, t, r)
                    }
                    break
                }
            case "prerender-ppr":
                {
                    let n = r.fallbackRouteParams;
                    if (n) {
                        for (let a in e)
                            if (n.has(a)) return function(e, t, r, n) {
                                let a = S.get(e);
                                if (a) return a;
                                let o = { ...e
                                    },
                                    i = Promise.resolve(o);
                                return S.set(e, i), Object.keys(e).forEach(e => {
                                    l.wellKnownProperties.has(e) || t.has(e) && Object.defineProperty(o, e, {
                                        get() {
                                            let t = (0, l.describeStringPropertyAccess)("params", e);
                                            "prerender-ppr" === n.type ? (0, c.postponeWithTracking)(r.route, t, n.dynamicTracking) : (0, c.throwToInterruptStaticGeneration)(t, r, n)
                                        },
                                        enumerable: !0
                                    })
                                }), i
                            }(e, n, t, r)
                    }
                }
        }
        return O(e)
    }

    function _(e, t) {
        return (0, c.delayUntilRuntimeStage)(t, O(e))
    }
    let S = new WeakMap,
        v = {
            get: function(e, t, r) {
                if ("then" === t || "catch" === t || "finally" === t) {
                    let n = i.ReflectAdapter.get(e, t, r);
                    return ({
                        [t]: function() {
                            for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                            let o = p.dynamicAccessAsyncStorage.getStore();
                            return o && o.abortController.abort(Object.defineProperty(Error("Accessed fallback `params` during prerendering."), "__NEXT_ERROR_CODE", {
                                value: "E691",
                                enumerable: !1,
                                configurable: !0
                            })), new Proxy(n.apply(e, r), v)
                        }
                    })[t]
                }
                return i.ReflectAdapter.get(e, t, r)
            }
        };

    function O(e) {
        let t = S.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return S.set(e, r), r
    }(0, f.createDedupedByCallsiteServerErrorLoggerDev)(function(e, t) {
        return Object.defineProperty(Error("".concat(e ? 'Route "'.concat(e, '" ') : "This route ", "used ").concat(t, ". ") + "`params` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
            value: "E834",
            enumerable: !1,
            configurable: !0
        })
    })
}, 204889, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(483632),
        a = e.r(285235),
        o = e.r(486175),
        i = e.r(251570),
        c = e.r(695304),
        s = e.r(423244);

    function u(t) {
        let r, u, {
            Component: l,
            serverProvidedParams: d
        } = t;
        if (null !== d) r = d.searchParams, u = d.params;
        else {
            let e = (0, i.use)(o.LayoutRouterContext);
            u = null !== e ? e.parentParams : {}, r = (0, c.urlSearchParamsToParsedUrlQuery)((0, i.use)(s.SearchParamsContext))
        }
        if ("undefined" == typeof window) {
            let t, o, {
                    workAsyncStorage: i
                } = e.r(523061),
                c = i.getStore();
            if (!c) throw Object.defineProperty(new a.InvariantError("Expected workStore to exist when handling searchParams in a client Page."), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: !1,
                configurable: !0
            });
            let {
                createSearchParamsFromClient: s
            } = e.r(887933);
            t = s(r, c);
            let {
                createParamsFromClient: d
            } = e.r(332899);
            return o = d(u, c), (0, n.jsx)(l, {
                params: o,
                searchParams: t
            })
        } {
            let {
                createRenderSearchParamsFromClient: t
            } = e.r(289534), a = t(r), {
                createRenderParamsFromClient: o
            } = e.r(575956), i = o(u);
            return (0, n.jsx)(l, {
                params: i,
                searchParams: a
            })
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 808068, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let n = e.r(483632),
        a = e.r(285235),
        o = e.r(486175),
        i = e.r(251570);

    function c(t) {
        let r, {
            Component: c,
            slots: s,
            serverProvidedParams: u
        } = t;
        if (null !== u) r = u.params;
        else {
            let e = (0, i.use)(o.LayoutRouterContext);
            r = null !== e ? e.parentParams : {}
        }
        if ("undefined" == typeof window) {
            let t, {
                    workAsyncStorage: o
                } = e.r(523061),
                i = o.getStore();
            if (!i) throw Object.defineProperty(new a.InvariantError("Expected workStore to exist when handling params in a client segment such as a Layout or Template."), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: !1,
                configurable: !0
            });
            let {
                createParamsFromClient: u
            } = e.r(332899);
            return t = u(r, i), (0, n.jsx)(c, { ...s,
                params: t
            })
        } {
            let {
                createRenderParamsFromClient: t
            } = e.r(575956), a = t(r);
            return (0, n.jsx)(c, { ...s,
                params: a
            })
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 590239, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(483632),
        a = () => "undefined" != typeof window ? null : (0, n.jsx)("meta", {
            name: "«nxt-icon»"
        })
}]);

//# debugId=490362e7-c328-7ba5-caed-d65c6930f597
//# sourceMappingURL=4cc9bdafcb2a9d6e.js.map