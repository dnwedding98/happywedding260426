;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "746fa1bc-c400-32e3-b905-257934f71820")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 565398, 101759, e => {
    "use strict";
    let t = (0, e.i(360706).createAnatomy)("field").parts("root", "errorText", "helperText", "input", "label", "select", "textarea", "requiredIndicator"),
        n = t.build();
    e.s(["fieldAnatomy", () => t, "parts", () => n], 565398);
    var o = e.i(841158);

    function r(e) {
        var t;
        if (!e) return;
        let n = (0, o.getDocument)(e),
            r = (0, o.getWindow)(e),
            i = ((t = n.createElement("div")).id = "ghost", t.style.cssText = "display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;", n.body.appendChild(t), t),
            l = function(e) {
                if (!e) return;
                let t = (0, o.getComputedStyle)(e);
                return "box-sizing:" + t.boxSizing + ";border-left:" + t.borderLeftWidth + " solid red;border-right:" + t.borderRightWidth + " solid red;font-family:" + t.fontFamily + ";font-feature-settings:" + t.fontFeatureSettings + ";font-kerning:" + t.fontKerning + ";font-size:" + t.fontSize + ";font-stretch:" + t.fontStretch + ";font-style:" + t.fontStyle + ";font-variant:" + t.fontVariant + ";font-variant-caps:" + t.fontVariantCaps + ";font-variant-ligatures:" + t.fontVariantLigatures + ";font-variant-numeric:" + t.fontVariantNumeric + ";font-weight:" + t.fontWeight + ";letter-spacing:" + t.letterSpacing + ";margin-left:" + t.marginLeft + ";margin-right:" + t.marginRight + ";padding-left:" + t.paddingLeft + ";padding-right:" + t.paddingRight + ";text-indent:" + t.textIndent + ";text-transform:" + t.textTransform
            }(e);

        function a() {
            r.requestAnimationFrame(() => {
                i.innerHTML = e.value;
                let t = r.getComputedStyle(i);
                null == e || e.style.setProperty("width", t.width)
            })
        }
        return l && (i.style.cssText += l), a(), null == e || e.addEventListener("input", a), null == e || e.addEventListener("change", a), () => {
            n.body.removeChild(i), null == e || e.removeEventListener("input", a), null == e || e.removeEventListener("change", a)
        }
    }
    var i = e => {
        var t, n;
        if (!e) return;
        let r = (0, o.getComputedStyle)(e),
            i = (0, o.getWindow)(e),
            l = (0, o.getDocument)(e),
            a = () => {
                requestAnimationFrame(() => {
                    let t;
                    e.style.height = "auto", t = "content-box" === r.boxSizing ? e.scrollHeight - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)) : e.scrollHeight + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), "none" !== r.maxHeight && t > parseFloat(r.maxHeight) ? ("hidden" === r.overflowY && (e.style.overflowY = "scroll"), t = parseFloat(r.maxHeight)) : "hidden" !== r.overflowY && (e.style.overflowY = "hidden"), e.style.height = "".concat(t, "px")
                })
            };
        e.addEventListener("input", a), null == (t = e.form) || t.addEventListener("reset", a);
        let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value");
        Object.defineProperty(e, "value", { ...s,
            set() {
                var e;
                null == s || null == (e = s.set) || e.apply(this, arguments), a()
            }
        });
        let c = new i.ResizeObserver(() => {
            requestAnimationFrame(() => a())
        });
        c.observe(e);
        let u = new i.MutationObserver(() => a());
        return u.observe(e, {
            attributes: !0,
            attributeFilter: ["rows", "placeholder"]
        }), null == (n = l.fonts) || n.addEventListener("loadingdone", a), () => {
            var t, n;
            e.removeEventListener("input", a), null == (t = e.form) || t.removeEventListener("reset", a), null == (n = l.fonts) || n.removeEventListener("loadingdone", a), c.disconnect(), u.disconnect()
        }
    };
    e.s(["autoResizeInput", () => r, "autoresizeTextarea", () => i], 101759)
}, 212483, (e, t, n) => {
    "use strict";
    var o = e.r(251570),
        r = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = o.useSyncExternalStore,
        l = o.useRef,
        a = o.useEffect,
        s = o.useMemo,
        c = o.useDebugValue;
    n.useSyncExternalStoreWithSelector = function(e, t, n, o, u) {
        var d = l(null);
        if (null === d.current) {
            var p = {
                hasValue: !1,
                value: null
            };
            d.current = p
        } else p = d.current;
        var v = i(e, (d = s(function() {
            function e(e) {
                if (!a) {
                    if (a = !0, i = e, e = o(e), void 0 !== u && p.hasValue) {
                        var t = p.value;
                        if (u(t, e)) return l = t
                    }
                    return l = e
                }
                if (t = l, r(i, e)) return t;
                var n = o(e);
                return void 0 !== u && u(t, n) ? (i = e, t) : (i = e, l = n)
            }
            var i, l, a = !1,
                s = void 0 === n ? null : n;
            return [function() {
                return e(t())
            }, null === s ? void 0 : function() {
                return e(s())
            }]
        }, [t, n, o, u]))[0], d[1]);
        return a(function() {
            p.hasValue = !0, p.value = v
        }, [v]), c(v), v
    }
}, 129852, (e, t, n) => {
    "use strict";
    t.exports = e.r(212483)
}, 391265, e => {
    "use strict";
    var t = e.i(251570),
        n = e.i(129852),
        o = {
            notify() {},
            get: () => []
        },
        r = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        i = "undefined" != typeof navigator && "ReactNative" === navigator.product,
        l = r || i ? t.useLayoutEffect : t.useEffect;

    function a(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    function s(e, t) {
        if (a(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        let n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (let o = 0; o < n.length; o++)
            if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !a(e[n[o]], t[n[o]])) return !1;
        return !0
    }
    var c = Symbol.for("react-redux-context"),
        u = "undefined" != typeof globalThis ? globalThis : {},
        d = function() {
            var e;
            if (!t.createContext) return {};
            let n = null != (e = u[c]) ? e : u[c] = new Map,
                o = n.get(t.createContext);
            return o || (o = t.createContext(null), n.set(t.createContext, o)), o
        }(),
        p = function(e) {
            let {
                children: n,
                context: r,
                serverState: i,
                store: a
            } = e, s = t.useMemo(() => {
                let e = function(e, t) {
                    let n, r = o,
                        i = 0,
                        l = !1;

                    function a() {
                        u.onStateChange && u.onStateChange()
                    }

                    function s() {
                        if (i++, !n) {
                            let t, o;
                            n = e.subscribe(a), t = null, o = null, r = {
                                clear() {
                                    t = null, o = null
                                },
                                notify() {
                                    let e = t;
                                    for (; e;) e.callback(), e = e.next
                                },
                                get() {
                                    let e = [],
                                        n = t;
                                    for (; n;) e.push(n), n = n.next;
                                    return e
                                },
                                subscribe(e) {
                                    let n = !0,
                                        r = o = {
                                            callback: e,
                                            next: null,
                                            prev: o
                                        };
                                    return r.prev ? r.prev.next = r : t = r,
                                        function() {
                                            n && null !== t && (n = !1, r.next ? r.next.prev = r.prev : o = r.prev, r.prev ? r.prev.next = r.next : t = r.next)
                                        }
                                }
                            }
                        }
                    }

                    function c() {
                        i--, n && 0 === i && (n(), n = void 0, r.clear(), r = o)
                    }
                    let u = {
                        addNestedSub: function(e) {
                            s();
                            let t = r.subscribe(e),
                                n = !1;
                            return () => {
                                n || (n = !0, t(), c())
                            }
                        },
                        notifyNestedSubs: function() {
                            r.notify()
                        },
                        handleChangeWrapper: a,
                        isSubscribed: function() {
                            return l
                        },
                        trySubscribe: function() {
                            l || (l = !0, s())
                        },
                        tryUnsubscribe: function() {
                            l && (l = !1, c())
                        },
                        getListeners: () => r
                    };
                    return u
                }(a);
                return {
                    store: a,
                    subscription: e,
                    getServerState: i ? () => i : void 0
                }
            }, [a, i]), c = t.useMemo(() => a.getState(), [a]);
            return l(() => {
                let {
                    subscription: e
                } = s;
                return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), c !== a.getState() && e.notifyNestedSubs(), () => {
                    e.tryUnsubscribe(), e.onStateChange = void 0
                }
            }, [s, c]), t.createElement((r || d).Provider, {
                value: s
            }, n)
        };

    function v() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
        return function() {
            return t.useContext(e)
        }
    }
    var g = v();

    function f() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = e === d ? g : v(e),
            n = () => {
                let {
                    store: e
                } = t();
                return e
            };
        return Object.assign(n, {
            withTypes: () => n
        }), n
    }
    var y = f(),
        m = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                t = e === d ? y : f(e),
                n = () => t().dispatch;
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }(),
        b = (e, t) => e === t,
        h = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                o = e === d ? g : v(e),
                r = function(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            equalityFn: i = b
                        } = "function" == typeof r ? {
                            equalityFn: r
                        } : r,
                        {
                            store: l,
                            subscription: a,
                            getServerState: s
                        } = o();
                    t.useRef(!0);
                    let c = t.useCallback({
                            [e.name]: t => e(t)
                        }[e.name], [e]),
                        u = (0, n.useSyncExternalStoreWithSelector)(a.addNestedSub, l.getState, s || l.getState, c, i);
                    return t.useDebugValue(u), u
                };
            return Object.assign(r, {
                withTypes: () => r
            }), r
        }();
    e.s(["Provider", () => p, "shallowEqual", () => s, "useDispatch", () => m, "useSelector", () => h])
}, 833707, (e, t, n) => {
    t.exports = e.r(306682)
}, 309966, e => {
    "use strict";
    var t = e.i(841158),
        n = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        o = null,
        r = new Set,
        i = new Map,
        l = !1,
        a = !1,
        s = {
            Tab: !0,
            Escape: !0
        };

    function c(e, t) {
        for (let n of r) n(e, t)
    }

    function u(e) {
        l = !0, e.metaKey || !(0, t.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (o = "keyboard", c("keyboard", e))
    }

    function d(e) {
        o = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (l = !0, c("pointer", e))
    }

    function p(e) {
        (0, t.isVirtualClick)(e) && (l = !0, o = "virtual")
    }

    function v(e) {
        let n = (0, t.getEventTarget)(e);
        n !== (0, t.getWindow)(n) && n !== (0, t.getDocument)(n) && (l || a || (o = "virtual", c("virtual", e)), l = !1, a = !1)
    }

    function g() {
        l = !1, a = !0
    }

    function f() {
        return o
    }

    function y() {
        return "keyboard" === o
    }

    function m() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isTextInput: a,
                autoFocus: f,
                onChange: m,
                root: b
            } = e;
        ! function(e) {
            if ("undefined" == typeof window || i.get((0, t.getWindow)(e))) return;
            let n = (0, t.getWindow)(e),
                r = (0, t.getDocument)(e),
                a = n.HTMLElement.prototype.focus;
            try {
                Object.defineProperty(n.HTMLElement.prototype, "focus", {
                    configurable: !0,
                    value: function() {
                        o = "virtual", c("virtual", null), l = !0, a.apply(this, arguments)
                    }
                })
            } catch {}
            r.addEventListener("keydown", u, !0), r.addEventListener("keyup", u, !0), r.addEventListener("click", p, !0), n.addEventListener("focus", v, !0), n.addEventListener("blur", g, !1), void 0 !== n.PointerEvent ? (r.addEventListener("pointerdown", d, !0), r.addEventListener("pointermove", d, !0), r.addEventListener("pointerup", d, !0)) : (r.addEventListener("mousedown", d, !0), r.addEventListener("mousemove", d, !0), r.addEventListener("mouseup", d, !0)), n.addEventListener("beforeunload", () => {
                ((e, n) => {
                    let o = (0, t.getWindow)(e),
                        r = (0, t.getDocument)(e),
                        l = i.get(o);
                    if (l) {
                        try {
                            Object.defineProperty(o.HTMLElement.prototype, "focus", {
                                configurable: !0,
                                value: l.focus
                            })
                        } catch {}
                        r.removeEventListener("keydown", u, !0), r.removeEventListener("keyup", u, !0), r.removeEventListener("click", p, !0), o.removeEventListener("focus", v, !0), o.removeEventListener("blur", g, !1), void 0 !== o.PointerEvent ? (r.removeEventListener("pointerdown", d, !0), r.removeEventListener("pointermove", d, !0), r.removeEventListener("pointerup", d, !0)) : (r.removeEventListener("mousedown", d, !0), r.removeEventListener("mousemove", d, !0), r.removeEventListener("mouseup", d, !0)), i.delete(o)
                    }
                })(e)
            }, {
                once: !0
            }), i.set(n, {
                focus: a
            })
        }(b), null == m || m({
            isFocusVisible: f || y(),
            modality: o
        });
        let h = (e, o) => {
            var r;
            let i, l;
            r = !!a, i = o ? (0, t.getEventTarget)(o) : null, l = (0, t.getWindow)(i), (r = r || i instanceof l.HTMLInputElement && !n.has(null == i ? void 0 : i.type) || i instanceof l.HTMLTextAreaElement || i instanceof l.HTMLElement && i.isContentEditable) && "keyboard" === e && o instanceof l.KeyboardEvent && !Reflect.has(s, o.key) || null == m || m({
                isFocusVisible: y(),
                modality: e
            })
        };
        return r.add(h), () => {
            r.delete(h)
        }
    }
    e.s(["getInteractionModality", () => f, "isFocusVisible", () => y, "trackFocusVisible", () => m])
}, 458943, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        o = e.i(309966),
        r = e.i(541356),
        i = e.i(409078),
        l = e.i(30500),
        a = e.i(593006),
        s = (0, t.createAnatomy)("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content"),
        c = s.build(),
        u = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "tooltip:".concat(e.id, ":trigger")
        },
        d = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "tooltip:".concat(e.id, ":popper")
        },
        p = e => e.getById(u(e)),
        v = e => e.getById(d(e)),
        g = (0, i.createStore)({
            id: null
        });

    function f(e, t) {
        var i, l;
        let {
            state: a,
            context: s,
            send: p,
            scope: v,
            prop: f,
            event: y
        } = e, m = f("id"), b = !!f("aria-label"), h = a.matches("open", "closing"), O = u(v), k = null != (l = null == (i = v.ids) ? void 0 : i.content) ? l : "tooltip:".concat(v.id, ":content"), w = f("disabled"), P = (0, r.getPlacementStyles)({ ...f("positioning"),
            placement: s.get("currentPlacement")
        });
        return {
            open: h,
            setOpen(e) {
                a.matches("open", "closing") !== e && p({
                    type: e ? "open" : "close"
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                p({
                    type: "positioning.set",
                    options: e
                })
            },
            getTriggerProps: () => t.button({ ...c.trigger.attrs,
                id: O,
                dir: f("dir"),
                "data-expanded": (0, n.dataAttr)(h),
                "data-state": h ? "open" : "closed",
                "aria-describedby": h ? k : void 0,
                onClick(e) {
                    e.defaultPrevented || w || f("closeOnClick") && p({
                        type: "close",
                        src: "trigger.click"
                    })
                },
                onFocus(e) {
                    queueMicrotask(() => {
                        e.defaultPrevented || w || "trigger.pointerdown" === y.src || (0, o.isFocusVisible)() && p({
                            type: "open",
                            src: "trigger.focus"
                        })
                    })
                },
                onBlur(e) {
                    e.defaultPrevented || w || m === g.get("id") && p({
                        type: "close",
                        src: "trigger.blur"
                    })
                },
                onPointerDown(e) {
                    e.defaultPrevented || w || !(0, n.isLeftClick)(e) || f("closeOnPointerDown") && m === g.get("id") && p({
                        type: "close",
                        src: "trigger.pointerdown"
                    })
                },
                onPointerMove(e) {
                    e.defaultPrevented || w || "touch" !== e.pointerType && p({
                        type: "pointer.move"
                    })
                },
                onPointerLeave() {
                    w || p({
                        type: "pointer.leave"
                    })
                },
                onPointerCancel() {
                    w || p({
                        type: "pointer.leave"
                    })
                }
            }),
            getArrowProps: () => {
                var e, n;
                return t.element({
                    id: null != (n = null == (e = v.ids) ? void 0 : e.arrow) ? n : "tooltip:".concat(v.id, ":arrow"),
                    ...c.arrow.attrs,
                    dir: f("dir"),
                    style: P.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...c.arrowTip.attrs,
                dir: f("dir"),
                style: P.arrowTip
            }),
            getPositionerProps: () => t.element({
                id: d(v),
                ...c.positioner.attrs,
                dir: f("dir"),
                style: P.floating
            }),
            getContentProps: () => t.element({ ...c.content.attrs,
                dir: f("dir"),
                hidden: !h,
                "data-state": h ? "open" : "closed",
                role: b ? void 0 : "tooltip",
                id: b ? void 0 : k,
                "data-placement": s.get("currentPlacement"),
                onPointerEnter() {
                    p({
                        type: "content.pointer.move"
                    })
                },
                onPointerLeave() {
                    p({
                        type: "content.pointer.leave"
                    })
                },
                style: {
                    pointerEvents: f("interactive") ? "auto" : "none"
                }
            })
        }
    }
    var {
        and: y,
        not: m
    } = (0, l.createGuards)(), b = (0, l.createMachine)({
        initialState: e => {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "closed"
        },
        props(e) {
            var t, n;
            let {
                props: o
            } = e, r = null == (t = o.closeOnClick) || t, i = null != (n = o.closeOnPointerDown) ? n : r;
            return {
                id: "x",
                openDelay: 400,
                closeDelay: 150,
                closeOnEscape: !0,
                interactive: !1,
                closeOnScroll: !0,
                disabled: !1,
                ...o,
                closeOnPointerDown: i,
                closeOnClick: r,
                positioning: {
                    placement: "bottom",
                    ...o.positioning
                }
            }
        },
        effects: ["trackFocusVisible", "trackStore"],
        context: e => {
            let {
                bindable: t
            } = e;
            return {
                currentPlacement: t(() => ({
                    defaultValue: void 0
                })),
                hasPointerMoveOpened: t(() => ({
                    defaultValue: !1
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                action: n,
                prop: o
            } = e;
            t([() => o("disabled")], () => {
                n(["closeIfDisabled"])
            }), t([() => o("open")], () => {
                n(["toggleVisibility"])
            })
        },
        states: {
            closed: {
                entry: ["clearGlobalId"],
                on: {
                    "controlled.open": {
                        target: "open"
                    },
                    open: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    "pointer.leave": {
                        actions: ["clearPointerMoveOpened"]
                    },
                    "pointer.move": [{
                        guard: y("noVisibleTooltip", m("hasPointerMoveOpened")),
                        target: "opening"
                    }, {
                        guard: m("hasPointerMoveOpened"),
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }]
                }
            },
            opening: {
                effects: ["trackScroll", "trackPointerlockChange", "waitForOpenDelay"],
                on: {
                    "after.openDelay": [{
                        guard: "isOpenControlled",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }],
                    "controlled.open": {
                        target: "open"
                    },
                    "controlled.close": {
                        target: "closed"
                    },
                    open: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    "pointer.leave": [{
                        guard: "isOpenControlled",
                        actions: ["clearPointerMoveOpened", "invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }],
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }]
                }
            },
            open: {
                effects: ["trackEscapeKey", "trackScroll", "trackPointerlockChange", "trackPositioning"],
                entry: ["setGlobalId"],
                on: {
                    "controlled.close": {
                        target: "closed"
                    },
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "pointer.leave": [{
                        guard: "isVisible",
                        target: "closing",
                        actions: ["clearPointerMoveOpened"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }],
                    "content.pointer.leave": {
                        guard: "isInteractive",
                        target: "closing"
                    },
                    "positioning.set": {
                        actions: ["reposition"]
                    }
                }
            },
            closing: {
                effects: ["trackPositioning", "waitForCloseDelay"],
                on: {
                    "after.closeDelay": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "controlled.close": {
                        target: "closed"
                    },
                    "controlled.open": {
                        target: "open"
                    },
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "pointer.move": [{
                        guard: "isOpenControlled",
                        actions: ["setPointerMoveOpened", "invokeOnOpen", "toggleVisibility"]
                    }, {
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }],
                    "content.pointer.move": {
                        guard: "isInteractive",
                        target: "open"
                    },
                    "positioning.set": {
                        actions: ["reposition"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                noVisibleTooltip: () => null === g.get("id"),
                isVisible: e => {
                    let {
                        prop: t
                    } = e;
                    return t("id") === g.get("id")
                },
                isInteractive: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("interactive")
                },
                hasPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("hasPointerMoveOpened")
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return void 0 !== t("open")
                }
            },
            actions: {
                setGlobalId: e => {
                    let {
                        prop: t
                    } = e;
                    g.set("id", t("id"))
                },
                clearGlobalId: e => {
                    let {
                        prop: t
                    } = e;
                    t("id") === g.get("id") && g.set("id", null)
                },
                invokeOnOpen: e => {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !0
                    })
                },
                invokeOnClose: e => {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !1
                    })
                },
                closeIfDisabled: e => {
                    let {
                        prop: t,
                        send: n
                    } = e;
                    t("disabled") && n({
                        type: "close",
                        src: "disabled.change"
                    })
                },
                reposition: e => {
                    let {
                        context: t,
                        event: n,
                        prop: o,
                        scope: i
                    } = e;
                    if ("positioning.set" === n.type) return (0, r.getPlacement)(p(i), () => v(i), { ...o("positioning"),
                        ...n.options,
                        defer: !0,
                        listeners: !1,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                toggleVisibility: e => {
                    let {
                        prop: t,
                        event: n,
                        send: o
                    } = e;
                    queueMicrotask(() => {
                        o({
                            type: t("open") ? "controlled.open" : "controlled.close",
                            previousEvent: n
                        })
                    })
                },
                setPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    t.set("hasPointerMoveOpened", !0)
                },
                clearPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    t.set("hasPointerMoveOpened", !1)
                }
            },
            effects: {
                trackFocusVisible: e => {
                    var t;
                    let {
                        scope: n
                    } = e;
                    return (0, o.trackFocusVisible)({
                        root: null == (t = n.getRootNode) ? void 0 : t.call(n)
                    })
                },
                trackPositioning: e => {
                    let {
                        context: t,
                        prop: n,
                        scope: o
                    } = e;
                    return t.get("currentPlacement") || t.set("currentPlacement", n("positioning").placement), (0, r.getPlacement)(p(o), () => v(o), { ...n("positioning"),
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                trackPointerlockChange: e => {
                    let {
                        send: t,
                        scope: o
                    } = e, r = o.getDoc();
                    return (0, n.addDomEvent)(r, "pointerlockchange", () => t({
                        type: "close",
                        src: "pointerlock:change"
                    }), !1)
                },
                trackScroll: e => {
                    let {
                        send: t,
                        prop: o,
                        scope: r
                    } = e;
                    if (!o("closeOnScroll")) return;
                    let i = p(r);
                    if (!i) return;
                    let l = (0, n.getOverflowAncestors)(i).map(e => (0, n.addDomEvent)(e, "scroll", () => {
                        t({
                            type: "close",
                            src: "scroll"
                        })
                    }, {
                        passive: !0,
                        capture: !0
                    }));
                    return () => {
                        l.forEach(e => null == e ? void 0 : e())
                    }
                },
                trackStore: e => {
                    let t, {
                        prop: n,
                        send: o
                    } = e;
                    return queueMicrotask(() => {
                        t = g.subscribe(() => {
                            g.get("id") !== n("id") && o({
                                type: "close",
                                src: "id.change"
                            })
                        })
                    }), () => null == t ? void 0 : t()
                },
                trackEscapeKey: e => {
                    let {
                        send: t,
                        prop: o
                    } = e;
                    if (o("closeOnEscape")) return (0, n.addDomEvent)(document, "keydown", e => {
                        (0, n.isComposingEvent)(e) || "Escape" === e.key && (e.stopPropagation(), t({
                            type: "close",
                            src: "keydown.escape"
                        }))
                    }, !0)
                },
                waitForOpenDelay: e => {
                    let {
                        send: t,
                        prop: n
                    } = e, o = setTimeout(() => {
                        t({
                            type: "after.openDelay"
                        })
                    }, n("openDelay"));
                    return () => clearTimeout(o)
                },
                waitForCloseDelay: e => {
                    let {
                        send: t,
                        prop: n
                    } = e, o = setTimeout(() => {
                        t({
                            type: "after.closeDelay"
                        })
                    }, n("closeDelay"));
                    return () => clearTimeout(o)
                }
            }
        }
    }), h = (0, a.createProps)()(["aria-label", "closeDelay", "closeOnEscape", "closeOnPointerDown", "closeOnScroll", "closeOnClick", "dir", "disabled", "getRootNode", "id", "ids", "interactive", "onOpenChange", "defaultOpen", "open", "openDelay", "positioning"]);
    (0, i.createSplitProps)(h), e.s(["anatomy", () => s, "connect", () => f, "machine", () => b])
}, 476659, e => {
    "use strict";
    e.s(["isStorageAvailable", 0, e => {
        try {
            let t = window[e],
                n = "__storage_test__";
            return t.setItem(n, "test"), t.removeItem(n), !0
        } catch (e) {
            return !1
        }
    }, "safeLocalStorage", 0, {
        getItem: e => {
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return null
            }
        },
        setItem: (e, t) => {
            try {
                localStorage.setItem(e, t)
            } catch (e) {}
        },
        removeItem: e => {
            try {
                localStorage.removeItem(e)
            } catch (e) {}
        }
    }])
}]);

//# debugId=746fa1bc-c400-32e3-b905-257934f71820
//# sourceMappingURL=b3ea2c01da56e887.js.map