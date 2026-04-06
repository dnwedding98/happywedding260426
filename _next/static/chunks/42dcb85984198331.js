;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "56e1e942-52b5-fc41-8cb2-5c0041e34486")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 131825, 872706, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(309966),
        r = e.i(30500),
        o = e.i(593006),
        a = e.i(409078),
        l = (0, t.createAnatomy)("checkbox").parts("root", "label", "control", "indicator"),
        d = l.build(),
        s = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.root) ? n : "checkbox:".concat(e.id)
        },
        c = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.label) ? n : "checkbox:".concat(e.id, ":label")
        },
        u = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.hiddenInput) ? n : "checkbox:".concat(e.id, ":input")
        },
        g = e => e.getById(u(e));

    function h(e, t) {
        let {
            send: r,
            context: o,
            prop: a,
            computed: l,
            scope: h
        } = e, p = !!a("disabled"), v = !!a("readOnly"), E = !!a("required"), O = !!a("invalid"), m = !p && o.get("focused"), T = !p && o.get("focusVisible"), C = l("checked"), k = l("indeterminate"), f = o.get("checked"), P = {
            "data-active": (0, n.dataAttr)(o.get("active")),
            "data-focus": (0, n.dataAttr)(m),
            "data-focus-visible": (0, n.dataAttr)(T),
            "data-readonly": (0, n.dataAttr)(v),
            "data-hover": (0, n.dataAttr)(o.get("hovered")),
            "data-disabled": (0, n.dataAttr)(p),
            "data-state": k ? "indeterminate" : C ? "checked" : "unchecked",
            "data-invalid": (0, n.dataAttr)(O),
            "data-required": (0, n.dataAttr)(E)
        };
        return {
            checked: C,
            disabled: p,
            indeterminate: k,
            focused: m,
            checkedState: f,
            setChecked(e) {
                r({
                    type: "CHECKED.SET",
                    checked: e,
                    isTrusted: !1
                })
            },
            toggleChecked() {
                r({
                    type: "CHECKED.TOGGLE",
                    checked: C,
                    isTrusted: !1
                })
            },
            getRootProps: () => t.label({ ...d.root.attrs,
                ...P,
                dir: a("dir"),
                id: s(h),
                htmlFor: u(h),
                onPointerMove() {
                    p || r({
                        type: "CONTEXT.SET",
                        context: {
                            hovered: !0
                        }
                    })
                },
                onPointerLeave() {
                    p || r({
                        type: "CONTEXT.SET",
                        context: {
                            hovered: !1
                        }
                    })
                },
                onClick(e) {
                    (0, n.getEventTarget)(e) === g(h) && e.stopPropagation()
                }
            }),
            getLabelProps: () => t.element({ ...d.label.attrs,
                ...P,
                dir: a("dir"),
                id: c(h)
            }),
            getControlProps: () => {
                var e, n;
                return t.element({ ...d.control.attrs,
                    ...P,
                    dir: a("dir"),
                    id: null != (n = null == (e = h.ids) ? void 0 : e.control) ? n : "checkbox:".concat(h.id, ":control"),
                    "aria-hidden": !0
                })
            },
            getIndicatorProps: () => t.element({ ...d.indicator.attrs,
                ...P,
                dir: a("dir"),
                hidden: !k && !C
            }),
            getHiddenInputProps: () => t.input({
                id: u(h),
                type: "checkbox",
                required: a("required"),
                defaultChecked: C,
                disabled: p,
                "aria-labelledby": c(h),
                "aria-invalid": O,
                name: a("name"),
                form: a("form"),
                value: a("value"),
                style: n.visuallyHiddenStyle,
                onFocus() {
                    r({
                        type: "CONTEXT.SET",
                        context: {
                            focused: !0,
                            focusVisible: (0, i.isFocusVisible)()
                        }
                    })
                },
                onBlur() {
                    r({
                        type: "CONTEXT.SET",
                        context: {
                            focused: !1,
                            focusVisible: !1
                        }
                    })
                },
                onClick(e) {
                    v ? e.preventDefault() : r({
                        type: "CHECKED.SET",
                        checked: e.currentTarget.checked,
                        isTrusted: !0
                    })
                }
            })
        }
    }
    var {
        not: p
    } = (0, r.createGuards)(), v = (0, r.createMachine)({
        props(e) {
            var t;
            let {
                props: n
            } = e;
            return {
                value: "on",
                ...n,
                defaultChecked: null != (t = n.defaultChecked) && t
            }
        },
        initialState: () => "ready",
        context(e) {
            let {
                prop: t,
                bindable: n
            } = e;
            return {
                checked: n(() => ({
                    defaultValue: t("defaultChecked"),
                    value: t("checked"),
                    onChange(e) {
                        var n;
                        null == (n = t("onCheckedChange")) || n({
                            checked: e
                        })
                    }
                })),
                fieldsetDisabled: n(() => ({
                    defaultValue: !1
                })),
                focusVisible: n(() => ({
                    defaultValue: !1
                })),
                active: n(() => ({
                    defaultValue: !1
                })),
                focused: n(() => ({
                    defaultValue: !1
                })),
                hovered: n(() => ({
                    defaultValue: !1
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                context: n,
                prop: i,
                action: r
            } = e;
            t([() => i("disabled")], () => {
                r(["removeFocusIfNeeded"])
            }), t([() => n.get("checked")], () => {
                r(["syncInputElement"])
            })
        },
        effects: ["trackFormControlState", "trackPressEvent", "trackFocusVisible"],
        on: {
            "CHECKED.TOGGLE": [{
                guard: p("isTrusted"),
                actions: ["toggleChecked", "dispatchChangeEvent"]
            }, {
                actions: ["toggleChecked"]
            }],
            "CHECKED.SET": [{
                guard: p("isTrusted"),
                actions: ["setChecked", "dispatchChangeEvent"]
            }, {
                actions: ["setChecked"]
            }],
            "CONTEXT.SET": {
                actions: ["setContext"]
            }
        },
        computed: {
            indeterminate: e => {
                let {
                    context: t
                } = e;
                return E(t.get("checked"))
            },
            checked: e => {
                var t;
                let {
                    context: n
                } = e;
                return !E(t = n.get("checked")) && !!t
            },
            disabled: e => {
                let {
                    context: t,
                    prop: n
                } = e;
                return !!n("disabled") || t.get("fieldsetDisabled")
            }
        },
        states: {
            ready: {}
        },
        implementations: {
            guards: {
                isTrusted: e => {
                    let {
                        event: t
                    } = e;
                    return !!t.isTrusted
                }
            },
            effects: {
                trackPressEvent(e) {
                    let {
                        context: t,
                        computed: i,
                        scope: r
                    } = e;
                    if (!i("disabled")) return (0, n.trackPress)({
                        pointerNode: r.getById(s(r)),
                        keyboardNode: g(r),
                        isValidKey: e => " " === e.key,
                        onPress: () => t.set("active", !1),
                        onPressStart: () => t.set("active", !0),
                        onPressEnd: () => t.set("active", !1)
                    })
                },
                trackFocusVisible(e) {
                    var t;
                    let {
                        computed: n,
                        scope: r
                    } = e;
                    if (!n("disabled")) return (0, i.trackFocusVisible)({
                        root: null == (t = r.getRootNode) ? void 0 : t.call(r)
                    })
                },
                trackFormControlState(e) {
                    let {
                        context: t,
                        scope: i
                    } = e;
                    return (0, n.trackFormControl)(g(i), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            t.set("checked", t.initial("checked"))
                        }
                    })
                }
            },
            actions: {
                setContext(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    for (let e in n.context) t.set(e, n.context[e])
                },
                syncInputElement(e) {
                    let {
                        context: t,
                        computed: i,
                        scope: r
                    } = e, o = g(r);
                    o && ((0, n.setElementChecked)(o, i("checked")), o.indeterminate = E(t.get("checked")))
                },
                removeFocusIfNeeded(e) {
                    let {
                        context: t,
                        prop: n
                    } = e;
                    n("disabled") && t.get("focused") && (t.set("focused", !1), t.set("focusVisible", !1))
                },
                setChecked(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("checked", n.checked)
                },
                toggleChecked(e) {
                    let {
                        context: t,
                        computed: n
                    } = e, i = !!E(n("checked")) || !n("checked");
                    t.set("checked", i)
                },
                dispatchChangeEvent(e) {
                    let {
                        computed: t,
                        scope: i
                    } = e;
                    queueMicrotask(() => {
                        let e = g(i);
                        (0, n.dispatchInputCheckedEvent)(e, {
                            checked: t("checked")
                        })
                    })
                }
            }
        }
    });

    function E(e) {
        return "indeterminate" === e
    }
    var O = (0, o.createProps)()(["defaultChecked", "checked", "dir", "disabled", "form", "getRootNode", "id", "ids", "invalid", "name", "onCheckedChange", "readOnly", "required", "value"]);
    (0, a.createSplitProps)(O), e.s(["anatomy", () => l, "connect", () => h, "machine", () => v], 872706);
    let m = l.extendWith("group");
    e.s(["checkboxAnatomy", () => m], 131825)
}, 792506, e => {
    "use strict";

    function t(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n
    }
    e.s(["omit", () => t])
}, 727618, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(309966),
        r = e.i(30500),
        o = e.i(593006),
        a = e.i(409078),
        l = (0, t.createAnatomy)("switch").parts("root", "label", "control", "thumb"),
        d = l.build(),
        s = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.root) ? n : "switch:".concat(e.id)
        },
        c = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.label) ? n : "switch:".concat(e.id, ":label")
        },
        u = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.hiddenInput) ? n : "switch:".concat(e.id, ":input")
        },
        g = e => e.getById(u(e));

    function h(e, t) {
        let {
            context: r,
            send: o,
            prop: a,
            scope: l
        } = e, h = !!a("disabled"), p = !!a("readOnly"), v = !!a("required"), E = !!r.get("checked"), O = !h && r.get("focused"), m = !h && r.get("focusVisible"), T = !h && r.get("active"), C = {
            "data-active": (0, n.dataAttr)(T),
            "data-focus": (0, n.dataAttr)(O),
            "data-focus-visible": (0, n.dataAttr)(m),
            "data-readonly": (0, n.dataAttr)(p),
            "data-hover": (0, n.dataAttr)(r.get("hovered")),
            "data-disabled": (0, n.dataAttr)(h),
            "data-state": E ? "checked" : "unchecked",
            "data-invalid": (0, n.dataAttr)(a("invalid")),
            "data-required": (0, n.dataAttr)(v)
        };
        return {
            checked: E,
            disabled: h,
            focused: O,
            setChecked(e) {
                o({
                    type: "CHECKED.SET",
                    checked: e,
                    isTrusted: !1
                })
            },
            toggleChecked() {
                o({
                    type: "CHECKED.TOGGLE",
                    checked: E,
                    isTrusted: !1
                })
            },
            getRootProps: () => t.label({ ...d.root.attrs,
                ...C,
                dir: a("dir"),
                id: s(l),
                htmlFor: u(l),
                onPointerMove() {
                    h || o({
                        type: "CONTEXT.SET",
                        context: {
                            hovered: !0
                        }
                    })
                },
                onPointerLeave() {
                    h || o({
                        type: "CONTEXT.SET",
                        context: {
                            hovered: !1
                        }
                    })
                },
                onClick(e) {
                    if (!h && ((0, n.getEventTarget)(e) === g(l) && e.stopPropagation(), (0, n.isSafari)())) {
                        var t;
                        null == (t = g(l)) || t.focus()
                    }
                }
            }),
            getLabelProps: () => t.element({ ...d.label.attrs,
                ...C,
                dir: a("dir"),
                id: c(l)
            }),
            getThumbProps: () => {
                var e, n;
                return t.element({ ...d.thumb.attrs,
                    ...C,
                    dir: a("dir"),
                    id: null != (n = null == (e = l.ids) ? void 0 : e.thumb) ? n : "switch:".concat(l.id, ":thumb"),
                    "aria-hidden": !0
                })
            },
            getControlProps: () => {
                var e, n;
                return t.element({ ...d.control.attrs,
                    ...C,
                    dir: a("dir"),
                    id: null != (n = null == (e = l.ids) ? void 0 : e.control) ? n : "switch:".concat(l.id, ":control"),
                    "aria-hidden": !0
                })
            },
            getHiddenInputProps: () => t.input({
                id: u(l),
                type: "checkbox",
                required: a("required"),
                defaultChecked: E,
                disabled: h,
                "aria-labelledby": c(l),
                "aria-invalid": a("invalid"),
                name: a("name"),
                form: a("form"),
                value: a("value"),
                style: n.visuallyHiddenStyle,
                onFocus() {
                    o({
                        type: "CONTEXT.SET",
                        context: {
                            focused: !0,
                            focusVisible: (0, i.isFocusVisible)()
                        }
                    })
                },
                onBlur() {
                    o({
                        type: "CONTEXT.SET",
                        context: {
                            focused: !1,
                            focusVisible: !1
                        }
                    })
                },
                onClick(e) {
                    p ? e.preventDefault() : o({
                        type: "CHECKED.SET",
                        checked: e.currentTarget.checked,
                        isTrusted: !0
                    })
                }
            })
        }
    }
    var {
        not: p
    } = (0, r.createGuards)(), v = (0, r.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                defaultChecked: !1,
                label: "switch",
                value: "on",
                ...t
            }
        },
        initialState: () => "ready",
        context(e) {
            let {
                prop: t,
                bindable: n
            } = e;
            return {
                checked: n(() => ({
                    defaultValue: t("defaultChecked"),
                    value: t("checked"),
                    onChange(e) {
                        var n;
                        null == (n = t("onCheckedChange")) || n({
                            checked: e
                        })
                    }
                })),
                fieldsetDisabled: n(() => ({
                    defaultValue: !1
                })),
                focusVisible: n(() => ({
                    defaultValue: !1
                })),
                active: n(() => ({
                    defaultValue: !1
                })),
                focused: n(() => ({
                    defaultValue: !1
                })),
                hovered: n(() => ({
                    defaultValue: !1
                }))
            }
        },
        computed: {
            isDisabled: e => {
                let {
                    context: t,
                    prop: n
                } = e;
                return n("disabled") || t.get("fieldsetDisabled")
            }
        },
        watch(e) {
            let {
                track: t,
                prop: n,
                context: i,
                action: r
            } = e;
            t([() => n("disabled")], () => {
                r(["removeFocusIfNeeded"])
            }), t([() => i.get("checked")], () => {
                r(["syncInputElement"])
            })
        },
        effects: ["trackFormControlState", "trackPressEvent", "trackFocusVisible"],
        on: {
            "CHECKED.TOGGLE": [{
                guard: p("isTrusted"),
                actions: ["toggleChecked", "dispatchChangeEvent"]
            }, {
                actions: ["toggleChecked"]
            }],
            "CHECKED.SET": [{
                guard: p("isTrusted"),
                actions: ["setChecked", "dispatchChangeEvent"]
            }, {
                actions: ["setChecked"]
            }],
            "CONTEXT.SET": {
                actions: ["setContext"]
            }
        },
        states: {
            ready: {}
        },
        implementations: {
            guards: {
                isTrusted: e => {
                    let {
                        event: t
                    } = e;
                    return !!t.isTrusted
                }
            },
            effects: {
                trackPressEvent(e) {
                    let {
                        computed: t,
                        scope: i,
                        context: r
                    } = e;
                    if (!t("isDisabled")) return (0, n.trackPress)({
                        pointerNode: i.getById(s(i)),
                        keyboardNode: g(i),
                        isValidKey: e => " " === e.key,
                        onPress: () => r.set("active", !1),
                        onPressStart: () => r.set("active", !0),
                        onPressEnd: () => r.set("active", !1)
                    })
                },
                trackFocusVisible(e) {
                    let {
                        computed: t,
                        scope: n
                    } = e;
                    if (!t("isDisabled")) return (0, i.trackFocusVisible)({
                        root: n.getRootNode()
                    })
                },
                trackFormControlState(e) {
                    let {
                        context: t,
                        send: i,
                        scope: r
                    } = e;
                    return (0, n.trackFormControl)(g(r), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            i({
                                type: "CHECKED.SET",
                                checked: !!t.initial("checked"),
                                src: "form-reset"
                            })
                        }
                    })
                }
            },
            actions: {
                setContext(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    for (let e in n.context) t.set(e, n.context[e])
                },
                syncInputElement(e) {
                    let {
                        context: t,
                        scope: i
                    } = e, r = g(i);
                    r && (0, n.setElementChecked)(r, !!t.get("checked"))
                },
                removeFocusIfNeeded(e) {
                    let {
                        context: t,
                        prop: n
                    } = e;
                    n("disabled") && t.set("focused", !1)
                },
                setChecked(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("checked", n.checked)
                },
                toggleChecked(e) {
                    let {
                        context: t
                    } = e;
                    t.set("checked", !t.get("checked"))
                },
                dispatchChangeEvent(e) {
                    let {
                        context: t,
                        scope: i
                    } = e, r = g(i);
                    (0, n.dispatchInputCheckedEvent)(r, {
                        checked: t.get("checked")
                    })
                }
            }
        }
    }), E = (0, o.createProps)()(["checked", "defaultChecked", "dir", "disabled", "form", "getRootNode", "id", "ids", "invalid", "label", "name", "onCheckedChange", "readOnly", "required", "value"]);
    (0, a.createSplitProps)(E), e.s(["anatomy", () => l, "connect", () => h, "machine", () => v])
}, 964358, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(30500),
        i = e.i(841158),
        r = e.i(541356),
        o = e.i(409078),
        a = e.i(143713),
        l = (e, t) => ({
            x: e,
            y: t
        }),
        {
            min: d,
            max: s
        } = Math,
        {
            sign: c,
            abs: u,
            min: g
        } = Math,
        h = e.i(593006),
        p = (0, t.createAnatomy)("menu").parts("arrow", "arrowTip", "content", "contextTrigger", "indicator", "item", "itemGroup", "itemGroupLabel", "itemIndicator", "itemText", "positioner", "separator", "trigger", "triggerItem"),
        v = p.build(),
        E = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "menu:".concat(e.id, ":trigger")
        },
        O = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.contextTrigger) ? n : "menu:".concat(e.id, ":ctx-trigger")
        },
        m = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.content) ? n : "menu:".concat(e.id, ":content")
        },
        T = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "menu:".concat(e.id, ":popper")
        },
        C = (e, t) => "".concat(e.id, "/").concat(t),
        k = e => {
            var t;
            return null != (t = null == e ? void 0 : e.dataset.value) ? t : null
        },
        f = (e, t) => {
            var n, i, r;
            return null != (r = null == (i = e.ids) || null == (n = i.groupLabel) ? void 0 : n.call(i, t)) ? r : "menu:".concat(e.id, ":group-label:").concat(t)
        },
        P = e => e.getById(m(e)),
        y = e => e.getById(T(e)),
        I = e => e.getById(E(e)),
        b = e => e.getById(O(e)),
        R = e => {
            let t = CSS.escape(m(e));
            return (0, i.queryAll)(P(e), '[role^="menuitem"][data-ownedby='.concat(t, "]:not([data-disabled])"))
        },
        S = (e, t) => !!t && (e.id === t || e.dataset.value === t),
        N = e => (0, i.isHTMLElement)(e) && ("" === e.dataset.disabled || e.hasAttribute("disabled")),
        A = "menu:select";

    function D(e, t) {
        let {
            context: a,
            send: l,
            state: d,
            computed: s,
            prop: c,
            scope: u
        } = e, g = d.hasTag("open"), h = a.get("isSubmenu"), p = s("isTypingAhead"), k = c("composite"), P = a.get("currentPlacement"), y = a.get("anchorPoint"), I = a.get("highlightedValue"), b = (0, r.getPlacementStyles)({ ...c("positioning"),
            placement: y ? "bottom" : P
        });

        function R(e) {
            return {
                id: C(u, e.value),
                disabled: !!e.disabled,
                highlighted: I === e.value
            }
        }

        function S(e) {
            var t;
            let n = null != (t = e.valueText) ? t : e.value;
            return { ...e,
                id: e.value,
                valueText: n
            }
        }

        function D(e) {
            return { ...R(S(e)),
                checked: !!e.checked
            }
        }

        function L(n) {
            let {
                closeOnSelect: r,
                valueText: o,
                value: a
            } = n, d = R(n), s = C(u, a);
            return t.element({ ...v.item.attrs,
                id: s,
                role: "menuitem",
                "aria-disabled": (0, i.ariaAttr)(d.disabled),
                "data-disabled": (0, i.dataAttr)(d.disabled),
                "data-ownedby": m(u),
                "data-highlighted": (0, i.dataAttr)(d.highlighted),
                "data-value": a,
                "data-valuetext": o,
                onDragStart(e) {
                    e.currentTarget.matches("a[href]") && e.preventDefault()
                },
                onPointerMove(e) {
                    if (d.disabled || "mouse" !== e.pointerType) return;
                    let t = e.currentTarget;
                    d.highlighted || l({
                        type: "ITEM_POINTERMOVE",
                        id: s,
                        target: t,
                        closeOnSelect: r
                    })
                },
                onPointerLeave(t) {
                    var n;
                    !d.disabled && "mouse" === t.pointerType && (null == (n = e.event.previous()) ? void 0 : n.type.includes("POINTER")) && l({
                        type: "ITEM_POINTERLEAVE",
                        id: s,
                        target: t.currentTarget,
                        closeOnSelect: r
                    })
                },
                onPointerDown(e) {
                    d.disabled || l({
                        type: "ITEM_POINTERDOWN",
                        target: e.currentTarget,
                        id: s,
                        closeOnSelect: r
                    })
                },
                onClick(e) {
                    (0, i.isDownloadingEvent)(e) || (0, i.isOpeningInNewTab)(e) || d.disabled || l({
                        type: "ITEM_CLICK",
                        target: e.currentTarget,
                        id: s,
                        closeOnSelect: r
                    })
                }
            })
        }
        return {
            highlightedValue: I,
            open: g,
            setOpen(e) {
                d.hasTag("open") !== e && l({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            setHighlightedValue(e) {
                l({
                    type: "HIGHLIGHTED.SET",
                    value: e
                })
            },
            setParent(e) {
                l({
                    type: "PARENT.SET",
                    value: e,
                    id: e.prop("id")
                })
            },
            setChild(e) {
                l({
                    type: "CHILD.SET",
                    value: e,
                    id: e.prop("id")
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                l({
                    type: "POSITIONING.SET",
                    options: e
                })
            },
            addItemListener(e) {
                let t = u.getById(e.id);
                if (!t) return;
                let n = () => {
                    var t;
                    return null == (t = e.onSelect) ? void 0 : t.call(e)
                };
                return t.addEventListener(A, n), () => t.removeEventListener(A, n)
            },
            getContextTriggerProps: () => t.element({ ...v.contextTrigger.attrs,
                dir: c("dir"),
                id: O(u),
                "data-state": g ? "open" : "closed",
                onPointerDown(e) {
                    "mouse" === e.pointerType || l({
                        type: "CONTEXT_MENU_START",
                        point: (0, i.getEventPoint)(e)
                    })
                },
                onPointerCancel(e) {
                    "mouse" !== e.pointerType && l({
                        type: "CONTEXT_MENU_CANCEL"
                    })
                },
                onPointerMove(e) {
                    "mouse" !== e.pointerType && l({
                        type: "CONTEXT_MENU_CANCEL"
                    })
                },
                onPointerUp(e) {
                    "mouse" !== e.pointerType && l({
                        type: "CONTEXT_MENU_CANCEL"
                    })
                },
                onContextMenu(e) {
                    l({
                        type: "CONTEXT_MENU",
                        point: (0, i.getEventPoint)(e)
                    }), e.preventDefault()
                },
                style: {
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none"
                }
            }),
            getTriggerItemProps(e) {
                let t = e.getTriggerProps();
                return (0, n.mergeProps)(L({
                    value: t.id
                }), t)
            },
            getTriggerProps: () => t.button({ ...h ? v.triggerItem.attrs : v.trigger.attrs,
                "data-placement": a.get("currentPlacement"),
                type: "button",
                dir: c("dir"),
                id: E(u),
                "data-uid": c("id"),
                "aria-haspopup": k ? "menu" : "dialog",
                "aria-controls": m(u),
                "aria-expanded": g || void 0,
                "data-state": g ? "open" : "closed",
                onPointerMove(e) {
                    if ("mouse" !== e.pointerType || N(e.currentTarget) || !h) return;
                    let t = (0, i.getEventPoint)(e);
                    l({
                        type: "TRIGGER_POINTERMOVE",
                        target: e.currentTarget,
                        point: t
                    })
                },
                onPointerLeave(e) {
                    if (N(e.currentTarget) || "mouse" !== e.pointerType || !h) return;
                    let t = (0, i.getEventPoint)(e);
                    l({
                        type: "TRIGGER_POINTERLEAVE",
                        target: e.currentTarget,
                        point: t
                    })
                },
                onPointerDown(e) {
                    N(e.currentTarget) || (0, i.isContextMenuEvent)(e) || e.preventDefault()
                },
                onClick(e) {
                    e.defaultPrevented || N(e.currentTarget) || l({
                        type: "TRIGGER_CLICK",
                        target: e.currentTarget
                    })
                },
                onBlur() {
                    l({
                        type: "TRIGGER_BLUR"
                    })
                },
                onFocus() {
                    l({
                        type: "TRIGGER_FOCUS"
                    })
                },
                onKeyDown(e) {
                    if (e.defaultPrevented) return;
                    let t = {
                        ArrowDown() {
                            l({
                                type: "ARROW_DOWN"
                            })
                        },
                        ArrowUp() {
                            l({
                                type: "ARROW_UP"
                            })
                        },
                        Enter() {
                            l({
                                type: "ARROW_DOWN",
                                src: "enter"
                            })
                        },
                        Space() {
                            l({
                                type: "ARROW_DOWN",
                                src: "space"
                            })
                        }
                    }[(0, i.getEventKey)(e, {
                        orientation: "vertical",
                        dir: c("dir")
                    })];
                    t && (e.preventDefault(), t(e))
                }
            }),
            getIndicatorProps: () => t.element({ ...v.indicator.attrs,
                dir: c("dir"),
                "data-state": g ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({ ...v.positioner.attrs,
                dir: c("dir"),
                id: T(u),
                style: b.floating
            }),
            getArrowProps: () => {
                var e, n;
                return t.element({
                    id: null != (n = null == (e = u.ids) ? void 0 : e.arrow) ? n : "menu:".concat(u.id, ":arrow"),
                    ...v.arrow.attrs,
                    dir: c("dir"),
                    style: b.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...v.arrowTip.attrs,
                dir: c("dir"),
                style: b.arrowTip
            }),
            getContentProps: () => t.element({ ...v.content.attrs,
                id: m(u),
                "aria-label": c("aria-label"),
                hidden: !g,
                "data-state": g ? "open" : "closed",
                role: k ? "menu" : "dialog",
                tabIndex: 0,
                dir: c("dir"),
                "aria-activedescendant": s("highlightedId") || void 0,
                "aria-labelledby": E(u),
                "data-placement": P,
                onPointerEnter(e) {
                    "mouse" === e.pointerType && l({
                        type: "MENU_POINTERENTER"
                    })
                },
                onKeyDown(e) {
                    if (e.defaultPrevented || !(0, i.contains)(e.currentTarget, (0, i.getEventTarget)(e))) return;
                    let t = (0, i.getEventTarget)(e);
                    if ((null == t ? void 0 : t.closest("[role=menu]")) !== e.currentTarget && t !== e.currentTarget) return;
                    if ("Tab" === e.key && !(0, i.isValidTabEvent)(e)) return void e.preventDefault();
                    let n = {
                            ArrowDown() {
                                l({
                                    type: "ARROW_DOWN"
                                })
                            },
                            ArrowUp() {
                                l({
                                    type: "ARROW_UP"
                                })
                            },
                            ArrowLeft() {
                                l({
                                    type: "ARROW_LEFT"
                                })
                            },
                            ArrowRight() {
                                l({
                                    type: "ARROW_RIGHT"
                                })
                            },
                            Enter() {
                                l({
                                    type: "ENTER"
                                })
                            },
                            Space(e) {
                                if (p) l({
                                    type: "TYPEAHEAD",
                                    key: e.key
                                });
                                else {
                                    var t;
                                    null == (t = n.Enter) || t.call(n, e)
                                }
                            },
                            Home() {
                                l({
                                    type: "HOME"
                                })
                            },
                            End() {
                                l({
                                    type: "END"
                                })
                            }
                        },
                        r = n[(0, i.getEventKey)(e, {
                            dir: c("dir")
                        })];
                    if (r) {
                        r(e), e.stopPropagation(), e.preventDefault();
                        return
                    }!c("typeahead") || !(0, i.isPrintableKey)(e) || (0, i.isModifierKey)(e) || (0, i.isEditableElement)(t) || (l({
                        type: "TYPEAHEAD",
                        key: e.key
                    }), e.preventDefault())
                }
            }),
            getSeparatorProps: () => t.element({ ...v.separator.attrs,
                role: "separator",
                dir: c("dir"),
                "aria-orientation": "horizontal"
            }),
            getItemState: R,
            getItemProps: L,
            getOptionItemState: D,
            getOptionItemProps(e) {
                let {
                    type: n,
                    disabled: r,
                    closeOnSelect: o
                } = e, a = S(e), d = D(e);
                return { ...L(a),
                    ...t.element({
                        "data-type": n,
                        ...v.item.attrs,
                        dir: c("dir"),
                        "data-value": a.value,
                        role: "menuitem".concat(n),
                        "aria-checked": !!d.checked,
                        "data-state": d.checked ? "checked" : "unchecked",
                        onClick(e) {
                            r || (0, i.isDownloadingEvent)(e) || (0, i.isOpeningInNewTab)(e) || l({
                                type: "ITEM_CLICK",
                                target: e.currentTarget,
                                option: a,
                                closeOnSelect: o
                            })
                        }
                    })
                }
            },
            getItemIndicatorProps(e) {
                let n = D((0, o.cast)(e)),
                    r = n.checked ? "checked" : "unchecked";
                return t.element({ ...v.itemIndicator.attrs,
                    dir: c("dir"),
                    "data-disabled": (0, i.dataAttr)(n.disabled),
                    "data-highlighted": (0, i.dataAttr)(n.highlighted),
                    "data-state": (0, o.hasProp)(e, "checked") ? r : void 0,
                    hidden: (0, o.hasProp)(e, "checked") ? !n.checked : void 0
                })
            },
            getItemTextProps(e) {
                let n = D((0, o.cast)(e)),
                    r = n.checked ? "checked" : "unchecked";
                return t.element({ ...v.itemText.attrs,
                    dir: c("dir"),
                    "data-disabled": (0, i.dataAttr)(n.disabled),
                    "data-highlighted": (0, i.dataAttr)(n.highlighted),
                    "data-state": (0, o.hasProp)(e, "checked") ? r : void 0
                })
            },
            getItemGroupLabelProps: e => t.element({ ...v.itemGroupLabel.attrs,
                id: f(u, e.htmlFor),
                dir: c("dir")
            }),
            getItemGroupProps: e => {
                var n, i, r, o;
                return t.element({
                    id: (n = e.id, null != (o = null == (r = u.ids) || null == (i = r.group) ? void 0 : i.call(r, n)) ? o : "menu:".concat(u.id, ":group:").concat(n)),
                    ...v.itemGroup.attrs,
                    dir: c("dir"),
                    "aria-labelledby": f(u, e.id),
                    role: "group"
                })
            }
        }
    }
    var {
        not: L,
        and: M,
        or: V
    } = (0, n.createGuards)(), H = (0, n.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                closeOnSelect: !0,
                typeahead: !0,
                composite: !0,
                loopFocus: !1,
                navigate(e) {
                    (0, i.clickIfLink)(e.node)
                },
                ...t,
                positioning: {
                    placement: "bottom-start",
                    gutter: 8,
                    ...t.positioning
                }
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "idle"
        },
        context(e) {
            let {
                bindable: t,
                prop: n
            } = e;
            return {
                suspendPointer: t(() => ({
                    defaultValue: !1
                })),
                highlightedValue: t(() => ({
                    defaultValue: n("defaultHighlightedValue") || null,
                    value: n("highlightedValue"),
                    onChange(e) {
                        var t;
                        null == (t = n("onHighlightChange")) || t({
                            highlightedValue: e
                        })
                    }
                })),
                lastHighlightedValue: t(() => ({
                    defaultValue: null
                })),
                currentPlacement: t(() => ({
                    defaultValue: void 0
                })),
                intentPolygon: t(() => ({
                    defaultValue: null
                })),
                anchorPoint: t(() => ({
                    defaultValue: null,
                    hash: e => "x: ".concat(null == e ? void 0 : e.x, ", y: ").concat(null == e ? void 0 : e.y)
                })),
                isSubmenu: t(() => ({
                    defaultValue: !1
                }))
            }
        },
        refs: () => ({
            parent: null,
            children: {},
            typeaheadState: { ...i.getByTypeahead.defaultOptions
            },
            positioningOverride: {}
        }),
        computed: {
            isRtl: e => {
                let {
                    prop: t
                } = e;
                return "rtl" === t("dir")
            },
            isTypingAhead: e => {
                let {
                    refs: t
                } = e;
                return "" !== t.get("typeaheadState").keysSoFar
            },
            highlightedId: e => {
                let {
                    context: t,
                    scope: n,
                    refs: i
                } = e;
                return function(e, t, n) {
                    let i = Object.keys(e).length > 0;
                    if (!t) return null;
                    if (!i) return C(n, t);
                    for (let n in e) {
                        let i = E(e[n].scope);
                        if (i === t) return i
                    }
                    return C(n, t)
                }(i.get("children"), t.get("highlightedValue"), n)
            }
        },
        watch(e) {
            let {
                track: t,
                action: n,
                context: i,
                prop: r
            } = e;
            t([() => i.get("isSubmenu")], () => {
                n(["setSubmenuPlacement"])
            }), t([() => i.hash("anchorPoint")], () => {
                i.get("anchorPoint") && n(["reposition"])
            }), t([() => r("open")], () => {
                n(["toggleVisibility"])
            })
        },
        on: {
            "PARENT.SET": {
                actions: ["setParentMenu"]
            },
            "CHILD.SET": {
                actions: ["setChildMenu"]
            },
            OPEN: [{
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
            }, {
                target: "open",
                actions: ["invokeOnOpen"]
            }],
            OPEN_AUTOFOCUS: [{
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
            }, {
                target: "open",
                actions: ["highlightFirstItem", "invokeOnOpen"]
            }],
            CLOSE: [{
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
            }, {
                target: "closed",
                actions: ["invokeOnClose"]
            }],
            "HIGHLIGHTED.RESTORE": {
                actions: ["restoreHighlightedItem"]
            },
            "HIGHLIGHTED.SET": {
                actions: ["setHighlightedItem"]
            }
        },
        states: {
            idle: {
                tags: ["closed"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    CONTEXT_MENU_START: {
                        target: "opening:contextmenu",
                        actions: ["setAnchorPoint"]
                    },
                    CONTEXT_MENU: [{
                        guard: "isOpenControlled",
                        actions: ["setAnchorPoint", "invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setAnchorPoint", "invokeOnOpen"]
                    }],
                    TRIGGER_CLICK: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    TRIGGER_FOCUS: {
                        guard: L("isSubmenu"),
                        target: "closed"
                    },
                    TRIGGER_POINTERMOVE: {
                        guard: "isSubmenu",
                        target: "opening"
                    }
                }
            },
            "opening:contextmenu": {
                tags: ["closed"],
                effects: ["waitForLongPress"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    CONTEXT_MENU_CANCEL: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "LONG_PRESS.OPEN": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }]
                }
            },
            opening: {
                tags: ["closed"],
                effects: ["waitForOpenDelay"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    BLUR: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    TRIGGER_POINTERLEAVE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "DELAY.OPEN": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }]
                }
            },
            closing: {
                tags: ["open"],
                effects: ["trackPointerMove", "trackInteractOutside", "waitForCloseDelay"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    "CONTROLLED.CLOSE": {
                        target: "closed",
                        actions: ["focusParentMenu", "restoreParentHighlightedItem"]
                    },
                    MENU_POINTERENTER: {
                        target: "open",
                        actions: ["clearIntentPolygon"]
                    },
                    POINTER_MOVED_AWAY_FROM_SUBMENU: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["focusParentMenu", "restoreParentHighlightedItem"]
                    }],
                    "DELAY.CLOSE": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["focusParentMenu", "restoreParentHighlightedItem", "invokeOnClose"]
                    }]
                }
            },
            closed: {
                tags: ["closed"],
                entry: ["clearHighlightedItem", "focusTrigger", "resumePointer", "clearAnchorPoint"],
                on: {
                    "CONTROLLED.OPEN": [{
                        guard: V("isOpenAutoFocusEvent", "isArrowDownEvent"),
                        target: "open",
                        actions: ["highlightFirstItem"]
                    }, {
                        guard: "isArrowUpEvent",
                        target: "open",
                        actions: ["highlightLastItem"]
                    }, {
                        target: "open"
                    }],
                    CONTEXT_MENU_START: {
                        target: "opening:contextmenu",
                        actions: ["setAnchorPoint"]
                    },
                    CONTEXT_MENU: [{
                        guard: "isOpenControlled",
                        actions: ["setAnchorPoint", "invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setAnchorPoint", "invokeOnOpen"]
                    }],
                    TRIGGER_CLICK: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    TRIGGER_POINTERMOVE: {
                        guard: "isTriggerItem",
                        target: "opening"
                    },
                    TRIGGER_BLUR: {
                        target: "idle"
                    },
                    ARROW_DOWN: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["highlightFirstItem", "invokeOnOpen"]
                    }],
                    ARROW_UP: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["highlightLastItem", "invokeOnOpen"]
                    }]
                }
            },
            open: {
                tags: ["open"],
                effects: ["trackInteractOutside", "trackPositioning", "scrollToHighlightedItem"],
                entry: ["focusMenu", "resumePointer"],
                on: {
                    "CONTROLLED.CLOSE": [{
                        target: "closed",
                        guard: "isArrowLeftEvent",
                        actions: ["focusParentMenu"]
                    }, {
                        target: "closed"
                    }],
                    TRIGGER_CLICK: [{
                        guard: M(L("isTriggerItem"), "isOpenControlled"),
                        actions: ["invokeOnClose"]
                    }, {
                        guard: L("isTriggerItem"),
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    CONTEXT_MENU: {
                        actions: ["setAnchorPoint", "focusMenu"]
                    },
                    ARROW_UP: {
                        actions: ["highlightPrevItem", "focusMenu"]
                    },
                    ARROW_DOWN: {
                        actions: ["highlightNextItem", "focusMenu"]
                    },
                    ARROW_LEFT: [{
                        guard: M("isSubmenu", "isOpenControlled"),
                        actions: ["invokeOnClose"]
                    }, {
                        guard: "isSubmenu",
                        target: "closed",
                        actions: ["focusParentMenu", "invokeOnClose"]
                    }],
                    HOME: {
                        actions: ["highlightFirstItem", "focusMenu"]
                    },
                    END: {
                        actions: ["highlightLastItem", "focusMenu"]
                    },
                    ARROW_RIGHT: {
                        guard: "isTriggerItemHighlighted",
                        actions: ["openSubmenu"]
                    },
                    ENTER: [{
                        guard: "isTriggerItemHighlighted",
                        actions: ["openSubmenu"]
                    }, {
                        actions: ["clickHighlightedItem"]
                    }],
                    ITEM_POINTERMOVE: [{
                        guard: L("isPointerSuspended"),
                        actions: ["setHighlightedItem", "focusMenu"]
                    }, {
                        actions: ["setLastHighlightedItem"]
                    }],
                    ITEM_POINTERLEAVE: {
                        guard: M(L("isPointerSuspended"), L("isTriggerItem")),
                        actions: ["clearHighlightedItem"]
                    },
                    ITEM_CLICK: [{
                        guard: M(L("isTriggerItemHighlighted"), L("isHighlightedItemEditable"), "closeOnSelect", "isOpenControlled"),
                        actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
                    }, {
                        guard: M(L("isTriggerItemHighlighted"), L("isHighlightedItemEditable"), "closeOnSelect"),
                        target: "closed",
                        actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
                    }, {
                        guard: M(L("isTriggerItemHighlighted"), L("isHighlightedItemEditable")),
                        actions: ["invokeOnSelect", "setOptionState"]
                    }, {
                        actions: ["setHighlightedItem"]
                    }],
                    TRIGGER_POINTERMOVE: {
                        guard: "isTriggerItem",
                        actions: ["setIntentPolygon"]
                    },
                    TRIGGER_POINTERLEAVE: {
                        target: "closing"
                    },
                    ITEM_POINTERDOWN: {
                        actions: ["setHighlightedItem"]
                    },
                    TYPEAHEAD: {
                        actions: ["highlightMatchedItem"]
                    },
                    FOCUS_MENU: {
                        actions: ["focusMenu"]
                    },
                    "POSITIONING.SET": {
                        actions: ["reposition"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                closeOnSelect: e => {
                    var t;
                    let {
                        prop: n,
                        event: i
                    } = e;
                    return !!(null != (t = null == i ? void 0 : i.closeOnSelect) ? t : n("closeOnSelect"))
                },
                isTriggerItem: e => {
                    var t, n;
                    let {
                        event: i
                    } = e;
                    return !!(null == (t = i.target) || null == (n = t.getAttribute("role")) ? void 0 : n.startsWith("menuitem")) && !!(null == t ? void 0 : t.hasAttribute("aria-controls"))
                },
                isTriggerItemHighlighted: e => {
                    var t;
                    let {
                        event: n,
                        scope: i,
                        computed: r
                    } = e, o = null != (t = n.target) ? t : i.getById(r("highlightedId"));
                    return !!(null == o ? void 0 : o.hasAttribute("aria-controls"))
                },
                isSubmenu: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("isSubmenu")
                },
                isPointerSuspended: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("suspendPointer")
                },
                isHighlightedItemEditable: e => {
                    let {
                        scope: t,
                        computed: n
                    } = e;
                    return (0, i.isEditableElement)(t.getById(n("highlightedId")))
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return void 0 !== t("open")
                },
                isArrowLeftEvent: e => {
                    var t;
                    let {
                        event: n
                    } = e;
                    return (null == (t = n.previousEvent) ? void 0 : t.type) === "ARROW_LEFT"
                },
                isArrowUpEvent: e => {
                    var t;
                    let {
                        event: n
                    } = e;
                    return (null == (t = n.previousEvent) ? void 0 : t.type) === "ARROW_UP"
                },
                isArrowDownEvent: e => {
                    var t;
                    let {
                        event: n
                    } = e;
                    return (null == (t = n.previousEvent) ? void 0 : t.type) === "ARROW_DOWN"
                },
                isOpenAutoFocusEvent: e => {
                    var t;
                    let {
                        event: n
                    } = e;
                    return (null == (t = n.previousEvent) ? void 0 : t.type) === "OPEN_AUTOFOCUS"
                }
            },
            effects: {
                waitForOpenDelay(e) {
                    let {
                        send: t
                    } = e, n = setTimeout(() => {
                        t({
                            type: "DELAY.OPEN"
                        })
                    }, 100);
                    return () => clearTimeout(n)
                },
                waitForCloseDelay(e) {
                    let {
                        send: t
                    } = e, n = setTimeout(() => {
                        t({
                            type: "DELAY.CLOSE"
                        })
                    }, 300);
                    return () => clearTimeout(n)
                },
                waitForLongPress(e) {
                    let {
                        send: t
                    } = e, n = setTimeout(() => {
                        t({
                            type: "LONG_PRESS.OPEN"
                        })
                    }, 700);
                    return () => clearTimeout(n)
                },
                trackPositioning(e) {
                    let {
                        context: t,
                        prop: n,
                        scope: i,
                        refs: o
                    } = e;
                    if (b(i)) return;
                    let a = { ...n("positioning"),
                        ...o.get("positioningOverride")
                    };
                    return t.set("currentPlacement", a.placement), (0, r.getPlacement)(I(i), () => y(i), { ...a,
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                trackInteractOutside(e) {
                    let {
                        refs: t,
                        scope: n,
                        prop: r,
                        context: o,
                        send: l
                    } = e, d = !0;
                    return (0, a.trackDismissableElement)(() => P(n), {
                        type: "menu",
                        defer: !0,
                        exclude: [I(n)],
                        onInteractOutside: r("onInteractOutside"),
                        onRequestDismiss: r("onRequestDismiss"),
                        onFocusOutside(e) {
                            var t;
                            null == (t = r("onFocusOutside")) || t(e);
                            let o = (0, i.getEventTarget)(e.detail.originalEvent);
                            if ((0, i.contains)(b(n), o)) return void e.preventDefault()
                        },
                        onEscapeKeyDown(e) {
                            var n;
                            null == (n = r("onEscapeKeyDown")) || n(e), o.get("isSubmenu") && e.preventDefault(), _({
                                parent: t.get("parent")
                            })
                        },
                        onPointerDownOutside(e) {
                            var t;
                            null == (t = r("onPointerDownOutside")) || t(e);
                            let o = (0, i.getEventTarget)(e.detail.originalEvent);
                            (0, i.contains)(b(n), o) && e.detail.contextmenu ? e.preventDefault() : d = !e.detail.focusable
                        },
                        onDismiss() {
                            l({
                                type: "CLOSE",
                                src: "interact-outside",
                                restoreFocus: d
                            })
                        }
                    })
                },
                trackPointerMove(e) {
                    let {
                        context: t,
                        scope: n,
                        send: r,
                        refs: o,
                        flush: a
                    } = e, l = o.get("parent");
                    a(() => {
                        l.context.set("suspendPointer", !0)
                    });
                    let d = n.getDoc();
                    return (0, i.addDomEvent)(d, "pointermove", e => {
                        var n, i;
                        n = t.get("intentPolygon"), i = {
                            x: e.clientX,
                            y: e.clientY
                        }, n && function(e, t) {
                            let {
                                x: n,
                                y: i
                            } = t, r = !1;
                            for (let t = 0, o = e.length - 1; t < e.length; o = t++) {
                                let a = e[t].x,
                                    l = e[t].y,
                                    d = e[o].x,
                                    s = e[o].y;
                                l > i != s > i && n < (d - a) * (i - l) / (s - l) + a && (r = !r)
                            }
                            return r
                        }(n, i) || (r({
                            type: "POINTER_MOVED_AWAY_FROM_SUBMENU"
                        }), l.context.set("suspendPointer", !1))
                    })
                },
                scrollToHighlightedItem(e) {
                    let {
                        event: t,
                        scope: n,
                        computed: r
                    } = e, o = () => {
                        if (t.current().type.startsWith("ITEM_POINTER")) return;
                        let e = n.getById(r("highlightedId")),
                            o = P(n);
                        (0, i.scrollIntoView)(e, {
                            rootEl: o,
                            block: "nearest"
                        })
                    };
                    return (0, i.raf)(() => o()), (0, i.observeAttributes)(() => P(n), {
                        defer: !0,
                        attributes: ["aria-activedescendant"],
                        callback: o
                    })
                }
            },
            actions: {
                setAnchorPoint(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("anchorPoint", e => (0, o.isEqual)(e, n.point) ? e : n.point)
                },
                setSubmenuPlacement(e) {
                    let {
                        context: t,
                        computed: n,
                        refs: i
                    } = e;
                    if (!t.get("isSubmenu")) return;
                    let r = n("isRtl") ? "left-start" : "right-start";
                    i.set("positioningOverride", {
                        placement: r,
                        gutter: 0
                    })
                },
                reposition(e) {
                    var t;
                    let {
                        context: n,
                        scope: i,
                        prop: o,
                        event: a,
                        refs: l
                    } = e, d = n.get("anchorPoint"), s = { ...o("positioning"),
                        ...l.get("positioningOverride")
                    };
                    (0, r.getPlacement)(I(i), () => y(i), { ...s,
                        defer: !0,
                        getAnchorRect: d ? () => ({
                            width: 0,
                            height: 0,
                            ...d
                        }) : void 0,
                        ...null != (t = a.options) ? t : {},
                        listeners: !1,
                        onComplete(e) {
                            n.set("currentPlacement", e.placement)
                        }
                    })
                },
                setOptionState(e) {
                    let {
                        event: t
                    } = e;
                    if (!t.option) return;
                    let {
                        checked: n,
                        onCheckedChange: i,
                        type: r
                    } = t.option;
                    "radio" === r ? null == i || i(!0) : "checkbox" === r && (null == i || i(!n))
                },
                clickHighlightedItem(e) {
                    let {
                        scope: t,
                        computed: n,
                        prop: r,
                        context: o
                    } = e, a = t.getById(n("highlightedId"));
                    if (!a || a.dataset.disabled) return;
                    let l = o.get("highlightedValue");
                    if ((0, i.isAnchorElement)(a)) {
                        var d;
                        null == (d = r("navigate")) || d({
                            value: l,
                            node: a,
                            href: a.href
                        })
                    } else queueMicrotask(() => a.click())
                },
                setIntentPolygon(e) {
                    let {
                        context: t,
                        scope: n,
                        event: i
                    } = e, o = P(n), a = t.get("currentPlacement");
                    if (!o || !a) return;
                    let d = function(e, t) {
                        let n, i, r = function(e) {
                                let {
                                    x: t,
                                    y: n,
                                    width: i,
                                    height: r
                                } = e, o = t + i / 2, a = n + r / 2;
                                return {
                                    x: t,
                                    y: n,
                                    width: i,
                                    height: r,
                                    minX: t,
                                    minY: n,
                                    maxX: t + i,
                                    maxY: n + r,
                                    midX: o,
                                    midY: a,
                                    center: l(o, a)
                                }
                            }(e),
                            {
                                top: o,
                                right: a,
                                left: d,
                                bottom: s
                            } = (n = l(r.minX, r.minY), i = l(r.maxX, r.minY), {
                                top: n,
                                right: i,
                                bottom: l(r.maxX, r.maxY),
                                left: l(r.minX, r.maxY)
                            }),
                            [c] = t.split("-");
                        return ({
                            top: [d, o, a, s],
                            right: [o, a, s, d],
                            bottom: [o, d, s, a],
                            left: [a, o, d, s]
                        })[c]
                    }(o.getBoundingClientRect(), a);
                    if (!d) return;
                    let s = "right" === (0, r.getPlacementSide)(a);
                    t.set("intentPolygon", [{ ...i.point,
                        x: i.point.x + (s ? -5 : 5)
                    }, ...d])
                },
                clearIntentPolygon(e) {
                    let {
                        context: t
                    } = e;
                    t.set("intentPolygon", null)
                },
                clearAnchorPoint(e) {
                    let {
                        context: t
                    } = e;
                    t.set("anchorPoint", null)
                },
                resumePointer(e) {
                    let {
                        refs: t,
                        flush: n
                    } = e, i = t.get("parent");
                    i && n(() => {
                        i.context.set("suspendPointer", !1)
                    })
                },
                setHighlightedItem(e) {
                    let {
                        context: t,
                        event: n
                    } = e, i = n.value || k(n.target);
                    t.set("highlightedValue", i)
                },
                clearHighlightedItem(e) {
                    let {
                        context: t
                    } = e;
                    t.set("highlightedValue", null)
                },
                focusMenu(e) {
                    let {
                        scope: t
                    } = e;
                    (0, i.raf)(() => {
                        let e = P(t),
                            n = (0, i.getInitialFocus)({
                                root: e,
                                enabled: !(0, i.contains)(e, t.getActiveElement()),
                                filter(e) {
                                    var t;
                                    return !(null == (t = e.role) ? void 0 : t.startsWith("menuitem"))
                                }
                            });
                        null == n || n.focus({
                            preventScroll: !0
                        })
                    })
                },
                highlightFirstItem(e) {
                    let {
                        context: t,
                        scope: n
                    } = e;
                    (P(n) ? queueMicrotask : i.raf)(() => {
                        let e = (0, o.first)(R(n));
                        e && t.set("highlightedValue", k(e))
                    })
                },
                highlightLastItem(e) {
                    let {
                        context: t,
                        scope: n
                    } = e;
                    (P(n) ? queueMicrotask : i.raf)(() => {
                        let e = (0, o.last)(R(n));
                        e && t.set("highlightedValue", k(e))
                    })
                },
                highlightNextItem(e) {
                    var t, n;
                    let i, r, {
                            context: a,
                            scope: l,
                            event: d,
                            prop: s
                        } = e,
                        c = (t = {
                            loop: d.loop,
                            value: a.get("highlightedValue"),
                            loopFocus: s("loopFocus")
                        }, r = (i = R(l)).findIndex(e => S(e, t.value)), (0, o.next)(i, r, {
                            loop: null != (n = t.loop) ? n : t.loopFocus
                        }));
                    a.set("highlightedValue", k(c))
                },
                highlightPrevItem(e) {
                    var t, n;
                    let i, r, {
                            context: a,
                            scope: l,
                            event: d,
                            prop: s
                        } = e,
                        c = (t = {
                            loop: d.loop,
                            value: a.get("highlightedValue"),
                            loopFocus: s("loopFocus")
                        }, r = (i = R(l)).findIndex(e => S(e, t.value)), (0, o.prev)(i, r, {
                            loop: null != (n = t.loop) ? n : t.loopFocus
                        }));
                    a.set("highlightedValue", k(c))
                },
                invokeOnSelect(e) {
                    var t;
                    let {
                        context: n,
                        prop: r,
                        scope: o
                    } = e, a = n.get("highlightedValue");
                    null != a && (! function(e, t) {
                        if (!e) return;
                        let n = new((0, i.getWindow)(e)).CustomEvent(A, {
                            detail: {
                                value: t
                            }
                        });
                        e.dispatchEvent(n)
                    }(a ? o.getById(C(o, a)) : null, a), null == (t = r("onSelect")) || t({
                        value: a
                    }))
                },
                focusTrigger(e) {
                    let {
                        scope: t,
                        context: n,
                        event: i
                    } = e;
                    n.get("isSubmenu") || n.get("anchorPoint") || !1 === i.restoreFocus || queueMicrotask(() => {
                        var e;
                        return null == (e = I(t)) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    })
                },
                highlightMatchedItem(e) {
                    var t, n;
                    let r, o, {
                            scope: a,
                            context: l,
                            event: d,
                            refs: s
                        } = e,
                        c = (t = {
                            key: d.key,
                            value: l.get("highlightedValue"),
                            typeaheadState: s.get("typeaheadState")
                        }, o = (r = R(a)).find(e => S(e, t.value)), (0, i.getByTypeahead)(r, {
                            state: t.typeaheadState,
                            key: t.key,
                            activeId: null != (n = null == o ? void 0 : o.id) ? n : null
                        }));
                    c && l.set("highlightedValue", k(c))
                },
                setParentMenu(e) {
                    let {
                        refs: t,
                        event: n,
                        context: i
                    } = e;
                    t.set("parent", n.value), i.set("isSubmenu", !0)
                },
                setChildMenu(e) {
                    let {
                        refs: t,
                        event: n
                    } = e, i = t.get("children");
                    i[n.id] = n.value, t.set("children", i)
                },
                closeRootMenu(e) {
                    let {
                        refs: t
                    } = e;
                    _({
                        parent: t.get("parent")
                    })
                },
                openSubmenu(e) {
                    let {
                        refs: t,
                        scope: n,
                        computed: i
                    } = e, r = n.getById(i("highlightedId")), o = null == r ? void 0 : r.getAttribute("data-uid"), a = t.get("children"), l = o ? a[o] : null;
                    null == l || l.send({
                        type: "OPEN_AUTOFOCUS"
                    })
                },
                focusParentMenu(e) {
                    var t;
                    let {
                        refs: n
                    } = e;
                    null == (t = n.get("parent")) || t.send({
                        type: "FOCUS_MENU"
                    })
                },
                setLastHighlightedItem(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("lastHighlightedValue", k(n.target))
                },
                restoreHighlightedItem(e) {
                    let {
                        context: t
                    } = e;
                    t.get("lastHighlightedValue") && (t.set("highlightedValue", t.get("lastHighlightedValue")), t.set("lastHighlightedValue", null))
                },
                restoreParentHighlightedItem(e) {
                    var t;
                    let {
                        refs: n
                    } = e;
                    null == (t = n.get("parent")) || t.send({
                        type: "HIGHLIGHTED.RESTORE"
                    })
                },
                invokeOnOpen(e) {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !0
                    })
                },
                invokeOnClose(e) {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !1
                    })
                },
                toggleVisibility(e) {
                    let {
                        prop: t,
                        event: n,
                        send: i
                    } = e;
                    i({
                        type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                        previousEvent: n
                    })
                }
            }
        }
    });

    function _(e) {
        let t = e.parent;
        for (; t && t.context.get("isSubmenu");) t = t.refs.get("parent");
        null == t || t.send({
            type: "CLOSE"
        })
    }
    var x = (0, h.createProps)()(["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "dir", "getRootNode", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "onSelect", "open", "positioning", "typeahead"]);
    (0, o.createSplitProps)(x);
    var F = (0, h.createProps)()(["closeOnSelect", "disabled", "value", "valueText"]);
    (0, o.createSplitProps)(F);
    var w = (0, h.createProps)()(["htmlFor"]);
    (0, o.createSplitProps)(w);
    var G = (0, h.createProps)()(["id"]);
    (0, o.createSplitProps)(G);
    var U = (0, h.createProps)()(["checked", "closeOnSelect", "disabled", "onCheckedChange", "type", "value", "valueText"]);
    (0, o.createSplitProps)(U), e.s(["anatomy", () => p, "connect", () => D, "machine", () => H], 964358)
}]);

//# debugId=56e1e942-52b5-fc41-8cb2-5c0041e34486
//# sourceMappingURL=a35d258e8ec66103.js.map