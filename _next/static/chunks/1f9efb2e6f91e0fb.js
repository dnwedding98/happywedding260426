;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "59e53acb-5d7f-4953-51a9-83f153a9cbf5")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 791089, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "text"
    }), n = t("p");
    n.displayName = "Text", e.s(["Text", () => n])
}, 118190, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        n = e.i(389868);
    let o = (0, r.forwardRef)(function(e, r) {
        return (0, t.jsx)(n.Stack, {
            align: "center",
            ...e,
            direction: "column",
            ref: r
        })
    });
    o.displayName = "VStack", e.s(["VStack", () => o])
}, 667357, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(251570);

    function o(e, t) {
        let r = (0, n.useRef)(null),
            o = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (r.current = u(e, n)), t && (o.current = u(t, n))
        }, [e, t])
    }

    function u(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 690797, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "container"
    }), n = t("div");
    n.displayName = "Container", e.s(["Container", () => n])
}, 969249, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 219614, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return b
        },
        useLinkStatus: function() {
            return v
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(744066),
        l = e.r(483632),
        a = u._(e.r(251570)),
        i = e.r(400446),
        c = e.r(486175),
        s = e.r(667357),
        f = e.r(64481),
        d = e.r(146201);
    e.r(681821);
    let p = e.r(540537),
        h = e.r(915868),
        y = e.r(187531);

    function g(e) {
        return "string" == typeof e ? e : (0, i.formatUrl)(e)
    }

    function b(t) {
        var r;
        let n, o, u, [i, b] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
            v = (0, a.useRef)(null),
            {
                href: m,
                as: _,
                children: j,
                prefetch: S = null,
                passHref: k,
                replace: C,
                shallow: T,
                scroll: R,
                onClick: P,
                onMouseEnter: O,
                onTouchStart: E,
                legacyBehavior: M = !1,
                onNavigate: w,
                ref: A,
                unstable_dynamicOnHover: L,
                ...F
            } = t;
        n = j, M && ("string" == typeof n || "number" == typeof n) && (n = (0, l.jsx)("a", {
            children: n
        }));
        let I = a.default.useContext(c.AppRouterContext),
            N = !1 !== S,
            z = !1 !== S ? null === (r = S) || "auto" === r ? y.FetchStrategy.PPR : y.FetchStrategy.Full : y.FetchStrategy.PPR,
            {
                href: K,
                as: U
            } = a.default.useMemo(() => {
                let e = g(m);
                return {
                    href: e,
                    as: _ ? g(_) : e
                }
            }, [m, _]);
        if (M) {
            if ((null == n ? void 0 : n.$$typeof) === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = a.default.Children.only(n)
        }
        let B = M ? o && "object" == typeof o && o.ref : A,
            D = a.default.useCallback(e => (null !== I && (v.current = (0, p.mountLinkInstance)(e, K, I, z, N, b)), () => {
                v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [N, K, I, z, b]),
            V = {
                ref: (0, s.useMergedRef)(D, B),
                onClick(t) {
                    M || "function" != typeof P || P(t), M && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !I || t.defaultPrevented || function(t, r, n, o, u, l, i) {
                        if ("undefined" != typeof window) {
                            let c, {
                                nodeName: s
                            } = t.currentTarget;
                            if ("A" === s.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(r)) {
                                u && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), i) {
                                let e = !1;
                                if (i({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: f
                            } = e.r(35316);
                            a.default.startTransition(() => {
                                f(n || r, u ? "replace" : "push", null == l || l, o.current)
                            })
                        }
                    }(t, K, U, v, C, R, w)
                },
                onMouseEnter(e) {
                    M || "function" != typeof O || O(e), M && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), I && N && (0, p.onNavigationIntent)(e.currentTarget, !0 === L)
                },
                onTouchStart: function(e) {
                    M || "function" != typeof E || E(e), M && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), I && N && (0, p.onNavigationIntent)(e.currentTarget, !0 === L)
                }
            };
        return (0, f.isAbsoluteUrl)(U) ? V.href = U : M && !k && ("a" !== o.type || "href" in o.props) || (V.href = (0, d.addBasePath)(U)), u = M ? a.default.cloneElement(o, V) : (0, l.jsx)("a", { ...F,
            ...V,
            children: n
        }), (0, l.jsx)(x.Provider, {
            value: i,
            children: u
        })
    }
    e.r(969249);
    let x = (0, a.createContext)(p.IDLE_LINK_STATUS),
        v = () => (0, a.useContext)(x);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 636768, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(299846),
        n = e.i(690797),
        o = e.i(791089),
        u = e.i(118190),
        l = e.i(219614),
        a = e.i(833707);
    e.i(308972);
    var i = e.i(445979);

    function c() {
        let e = (0, a.useRouter)(),
            {
                t: c
            } = (0, i.useTranslation)();
        return (0, t.jsx)(n.Container, {
            maxW: "6xl",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bg: {
                base: "white",
                _dark: "gray.900"
            },
            children: (0, t.jsxs)(u.VStack, {
                gap: 8,
                textAlign: "center",
                py: 20,
                children: [(0, t.jsxs)(u.VStack, {
                    gap: 4,
                    children: [(0, t.jsx)(o.Text, {
                        fontSize: ["24px", "32px", "40px"],
                        fontWeight: "bold",
                        color: {
                            base: "gray.800",
                            _dark: "gray.100"
                        },
                        children: c("notFound.heading")
                    }), (0, t.jsx)(o.Text, {
                        fontSize: ["16px", "18px", "20px"],
                        color: {
                            base: "gray.600",
                            _dark: "gray.400"
                        },
                        maxW: "500px",
                        children: c("notFound.description")
                    })]
                }), (0, t.jsxs)(u.VStack, {
                    gap: 4,
                    children: [(0, t.jsx)(l.default, {
                        href: "/",
                        children: (0, t.jsx)(r.Button, {
                            size: "lg",
                            colorScheme: "orange",
                            px: 8,
                            py: 6,
                            fontSize: "18px",
                            fontWeight: "bold",
                            borderRadius: "full",
                            _hover: {
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            },
                            transition: "all 0.2s",
                            children: c("notFound.buttons.home")
                        })
                    }), (0, t.jsxs)(r.Button, {
                        size: "md",
                        variant: "outline",
                        colorScheme: "orange",
                        onClick: () => e.back(),
                        px: 6,
                        py: 4,
                        fontSize: "16px",
                        borderRadius: "full",
                        _hover: {
                            bg: {
                                base: "orange.50",
                                _dark: "whiteAlpha.100"
                            }
                        },
                        children: ["← ", c("notFound.buttons.back")]
                    })]
                })]
            })
        })
    }
    e.s(["default", () => c])
}]);

//# debugId=59e53acb-5d7f-4953-51a9-83f153a9cbf5
//# sourceMappingURL=36a824b95c43ca30.js.map