;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9674437b-c61f-3d6f-41d5-36ed262ca84c")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 595941, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(541356),
        n = e.i(30500),
        i = e.i(143713),
        o = e.i(593006),
        r = e.i(409078),
        l = (0, t.createAnatomy)("hoverCard").parts("arrow", "arrowTip", "trigger", "positioner", "content"),
        s = l.build(),
        d = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.trigger) ? a : "hover-card:".concat(e.id, ":trigger")
        },
        c = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "hover-card:".concat(e.id, ":content")
        },
        u = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.positioner) ? a : "hover-card:".concat(e.id, ":popper")
        },
        p = e => e.getById(d(e)),
        g = e => e.getById(u(e));

    function v(e, t) {
        let {
            state: n,
            send: i,
            prop: o,
            context: r,
            scope: l
        } = e, p = n.hasTag("open"), g = (0, a.getPlacementStyles)({ ...o("positioning"),
            placement: r.get("currentPlacement")
        });
        return {
            open: p,
            setOpen(e) {
                n.hasTag("open") === e || o("disabled") || i({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i({
                    type: "POSITIONING.SET",
                    options: e
                })
            },
            getArrowProps: () => {
                var e, a;
                return t.element({
                    id: null != (a = null == (e = l.ids) ? void 0 : e.arrow) ? a : "hover-card:".concat(l.id, ":arrow"),
                    ...s.arrow.attrs,
                    dir: o("dir"),
                    style: g.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...s.arrowTip.attrs,
                dir: o("dir"),
                style: g.arrowTip
            }),
            getTriggerProps: () => t.element({ ...s.trigger.attrs,
                dir: o("dir"),
                "data-placement": r.get("currentPlacement"),
                id: d(l),
                "data-state": p ? "open" : "closed",
                onPointerEnter(e) {
                    "touch" === e.pointerType || o("disabled") || i({
                        type: "POINTER_ENTER",
                        src: "trigger"
                    })
                },
                onPointerLeave(e) {
                    "touch" === e.pointerType || o("disabled") || i({
                        type: "POINTER_LEAVE",
                        src: "trigger"
                    })
                },
                onFocus() {
                    o("disabled") || i({
                        type: "TRIGGER_FOCUS"
                    })
                },
                onBlur() {
                    o("disabled") || i({
                        type: "TRIGGER_BLUR"
                    })
                }
            }),
            getPositionerProps: () => t.element({
                id: u(l),
                ...s.positioner.attrs,
                dir: o("dir"),
                style: g.floating
            }),
            getContentProps: () => t.element({ ...s.content.attrs,
                dir: o("dir"),
                id: c(l),
                hidden: !p,
                tabIndex: -1,
                "data-state": p ? "open" : "closed",
                "data-placement": r.get("currentPlacement"),
                onPointerEnter(e) {
                    "touch" === e.pointerType || o("disabled") || i({
                        type: "POINTER_ENTER",
                        src: "content"
                    })
                },
                onPointerLeave(e) {
                    "touch" === e.pointerType || o("disabled") || i({
                        type: "POINTER_LEAVE",
                        src: "content"
                    })
                }
            })
        }
    }
    var {
        not: m,
        and: f
    } = (0, n.createGuards)(), O = (0, n.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                disabled: !1,
                openDelay: 600,
                closeDelay: 300,
                ...t,
                positioning: {
                    placement: "bottom",
                    ...t.positioning
                }
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "closed"
        },
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                open: a(() => ({
                    defaultValue: t("defaultOpen"),
                    value: t("open"),
                    onChange(e) {
                        var a;
                        null == (a = t("onOpenChange")) || a({
                            open: e
                        })
                    }
                })),
                currentPlacement: a(() => ({
                    defaultValue: void 0
                })),
                isPointer: a(() => ({
                    defaultValue: !1
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                context: a,
                action: n,
                prop: i,
                send: o
            } = e;
            t([() => i("disabled")], () => {
                i("disabled") && o({
                    type: "CLOSE",
                    src: "disabled.change"
                })
            }), t([() => a.get("open")], () => {
                n(["toggleVisibility"])
            })
        },
        states: {
            closed: {
                tags: ["closed"],
                entry: ["clearIsPointer"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    POINTER_ENTER: {
                        target: "opening",
                        actions: ["setIsPointer"]
                    },
                    TRIGGER_FOCUS: {
                        target: "opening"
                    },
                    OPEN: {
                        target: "opening"
                    }
                }
            },
            opening: {
                tags: ["closed"],
                effects: ["waitForOpenDelay"],
                on: {
                    OPEN_DELAY: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    POINTER_LEAVE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    TRIGGER_BLUR: [{
                        guard: f("isOpenControlled", m("isPointer")),
                        actions: ["invokeOnClose", "toggleVisibility"]
                    }, {
                        guard: m("isPointer"),
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    CLOSE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }]
                }
            },
            open: {
                tags: ["open"],
                effects: ["trackDismissableElement", "trackPositioning"],
                on: {
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    POINTER_ENTER: {
                        actions: ["setIsPointer"]
                    },
                    POINTER_LEAVE: {
                        target: "closing"
                    },
                    CLOSE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    TRIGGER_BLUR: [{
                        guard: f("isOpenControlled", m("isPointer")),
                        actions: ["invokeOnClose"]
                    }, {
                        guard: m("isPointer"),
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "POSITIONING.SET": {
                        actions: ["reposition"]
                    }
                }
            },
            closing: {
                tags: ["open"],
                effects: ["trackPositioning", "waitForCloseDelay"],
                on: {
                    CLOSE_DELAY: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "CONTROLLED.CLOSE": {
                        target: "closed"
                    },
                    "CONTROLLED.OPEN": {
                        target: "open"
                    },
                    POINTER_ENTER: {
                        target: "open",
                        actions: ["setIsPointer"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                isPointer: e => {
                    let {
                        context: t
                    } = e;
                    return !!t.get("isPointer")
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return null != t("open")
                }
            },
            effects: {
                waitForOpenDelay(e) {
                    let {
                        send: t,
                        prop: a
                    } = e, n = setTimeout(() => {
                        t({
                            type: "OPEN_DELAY"
                        })
                    }, a("openDelay"));
                    return () => clearTimeout(n)
                },
                waitForCloseDelay(e) {
                    let {
                        send: t,
                        prop: a
                    } = e, n = setTimeout(() => {
                        t({
                            type: "CLOSE_DELAY"
                        })
                    }, a("closeDelay"));
                    return () => clearTimeout(n)
                },
                trackPositioning(e) {
                    let {
                        context: t,
                        prop: n,
                        scope: i
                    } = e;
                    return t.get("currentPlacement") || t.set("currentPlacement", n("positioning").placement), (0, a.getPlacement)(p(i), () => g(i), { ...n("positioning"),
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                trackDismissableElement(e) {
                    let {
                        send: t,
                        scope: a,
                        prop: n
                    } = e;
                    return (0, i.trackDismissableElement)(() => a.getById(c(a)), {
                        type: "popover",
                        defer: !0,
                        exclude: [p(a)],
                        onDismiss() {
                            t({
                                type: "CLOSE",
                                src: "interact-outside"
                            })
                        },
                        onInteractOutside: n("onInteractOutside"),
                        onPointerDownOutside: n("onPointerDownOutside"),
                        onFocusOutside(e) {
                            var t;
                            e.preventDefault(), null == (t = n("onFocusOutside")) || t(e)
                        }
                    })
                }
            },
            actions: {
                invokeOnClose(e) {
                    var t;
                    let {
                        prop: a
                    } = e;
                    null == (t = a("onOpenChange")) || t({
                        open: !1
                    })
                },
                invokeOnOpen(e) {
                    var t;
                    let {
                        prop: a
                    } = e;
                    null == (t = a("onOpenChange")) || t({
                        open: !0
                    })
                },
                setIsPointer(e) {
                    let {
                        context: t
                    } = e;
                    t.set("isPointer", !0)
                },
                clearIsPointer(e) {
                    let {
                        context: t
                    } = e;
                    t.set("isPointer", !1)
                },
                reposition(e) {
                    let {
                        context: t,
                        prop: n,
                        scope: i,
                        event: o
                    } = e;
                    (0, a.getPlacement)(p(i), () => g(i), { ...n("positioning"),
                        ...o.options,
                        defer: !0,
                        listeners: !1,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                toggleVisibility(e) {
                    let {
                        prop: t,
                        event: a,
                        send: n
                    } = e;
                    queueMicrotask(() => {
                        n({
                            type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: a
                        })
                    })
                }
            }
        }
    }), y = (0, o.createProps)()(["closeDelay", "dir", "getRootNode", "id", "ids", "disabled", "onOpenChange", "defaultOpen", "open", "openDelay", "positioning", "onInteractOutside", "onPointerDownOutside", "onFocusOutside"]);
    (0, r.createSplitProps)(y), e.s(["anatomy", () => l, "connect", () => v, "machine", () => O])
}, 941259, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(841158),
        n = e.i(309966),
        i = e.i(409078),
        o = e.i(30500),
        r = e.i(593006),
        l = (0, t.createAnatomy)("radio-group").parts("root", "label", "item", "itemText", "itemControl", "indicator"),
        s = l.build(),
        d = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "radio-group:".concat(e.id)
        },
        c = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.label) ? a : "radio-group:".concat(e.id, ":label")
        },
        u = (e, t) => {
            var a, n, i;
            return null != (i = null == (n = e.ids) || null == (a = n.item) ? void 0 : a.call(n, t)) ? i : "radio-group:".concat(e.id, ":radio:").concat(t)
        },
        p = (e, t) => {
            var a, n, i;
            return null != (i = null == (n = e.ids) || null == (a = n.itemHiddenInput) ? void 0 : a.call(n, t)) ? i : "radio-group:".concat(e.id, ":radio:input:").concat(t)
        },
        g = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.indicator) ? a : "radio-group:".concat(e.id, ":indicator")
        },
        v = e => e.getById(d(e)),
        m = e => {
            let t = CSS.escape(d(e));
            return (0, a.queryAll)(v(e), "input[type=radio][data-ownedby='".concat(t, "']:not([disabled])"))
        };

    function f(e, t) {
        let {
            context: o,
            send: r,
            computed: l,
            prop: m,
            scope: f
        } = e, O = l("isDisabled"), y = m("readOnly");

        function E(e) {
            return {
                value: e.value,
                invalid: !!e.invalid,
                disabled: !!e.disabled || O,
                checked: o.get("value") === e.value,
                focused: o.get("focusedValue") === e.value,
                focusVisible: o.get("focusVisibleValue") === e.value,
                hovered: o.get("hoveredValue") === e.value,
                active: o.get("activeValue") === e.value
            }
        }

        function h(e) {
            let t = E(e);
            return {
                "data-focus": (0, a.dataAttr)(t.focused),
                "data-focus-visible": (0, a.dataAttr)(t.focusVisible),
                "data-disabled": (0, a.dataAttr)(t.disabled),
                "data-readonly": (0, a.dataAttr)(y),
                "data-state": t.checked ? "checked" : "unchecked",
                "data-hover": (0, a.dataAttr)(t.hovered),
                "data-invalid": (0, a.dataAttr)(t.invalid),
                "data-orientation": m("orientation"),
                "data-ssr": (0, a.dataAttr)(o.get("ssr"))
            }
        }
        let b = () => {
            var e, t, a;
            let n = null != (e = null == (t = v(f)) ? void 0 : t.querySelector("input:not(:disabled):checked")) ? e : null == (a = v(f)) ? void 0 : a.querySelector("input:not(:disabled)");
            null == n || n.focus()
        };
        return {
            focus: b,
            value: o.get("value"),
            setValue(e) {
                r({
                    type: "SET_VALUE",
                    value: e,
                    isTrusted: !1
                })
            },
            clearValue() {
                r({
                    type: "SET_VALUE",
                    value: null,
                    isTrusted: !1
                })
            },
            getRootProps: () => t.element({ ...s.root.attrs,
                role: "radiogroup",
                id: d(f),
                "aria-labelledby": c(f),
                "data-orientation": m("orientation"),
                "data-disabled": (0, a.dataAttr)(O),
                "aria-orientation": m("orientation"),
                dir: m("dir"),
                style: {
                    position: "relative"
                }
            }),
            getLabelProps: () => t.element({ ...s.label.attrs,
                dir: m("dir"),
                "data-orientation": m("orientation"),
                "data-disabled": (0, a.dataAttr)(O),
                id: c(f),
                onClick: b
            }),
            getItemState: E,
            getItemProps(e) {
                let n = E(e);
                return t.label({ ...s.item.attrs,
                    dir: m("dir"),
                    id: u(f, e.value),
                    htmlFor: p(f, e.value),
                    ...h(e),
                    onPointerMove() {
                        n.disabled || n.hovered || r({
                            type: "SET_HOVERED",
                            value: e.value,
                            hovered: !0
                        })
                    },
                    onPointerLeave() {
                        n.disabled || r({
                            type: "SET_HOVERED",
                            value: null
                        })
                    },
                    onPointerDown(t) {
                        n.disabled || (0, a.isLeftClick)(t) && (n.focused && "mouse" === t.pointerType && t.preventDefault(), r({
                            type: "SET_ACTIVE",
                            value: e.value,
                            active: !0
                        }))
                    },
                    onPointerUp() {
                        n.disabled || r({
                            type: "SET_ACTIVE",
                            value: null
                        })
                    },
                    onClick() {
                        if (!n.disabled && (0, a.isSafari)()) {
                            var t;
                            let a;
                            null === (a = e.value, t = f.getById(p(f, a))) || void 0 === t || t.focus()
                        }
                    }
                })
            },
            getItemTextProps: e => {
                var a, n, i, o;
                return t.element({ ...s.itemText.attrs,
                    dir: m("dir"),
                    id: (a = e.value, null != (o = null == (i = f.ids) || null == (n = i.itemLabel) ? void 0 : n.call(i, a)) ? o : "radio-group:".concat(f.id, ":radio:label:").concat(a)),
                    ...h(e)
                })
            },
            getItemControlProps(e) {
                var n, i, o, r;
                let l = E(e);
                return t.element({ ...s.itemControl.attrs,
                    dir: m("dir"),
                    id: (n = e.value, null != (r = null == (o = f.ids) || null == (i = o.itemControl) ? void 0 : i.call(o, n)) ? r : "radio-group:".concat(f.id, ":radio:control:").concat(n)),
                    "data-active": (0, a.dataAttr)(l.active),
                    "aria-hidden": !0,
                    ...h(e)
                })
            },
            getItemHiddenInputProps(e) {
                let i = E(e);
                return t.input({
                    "data-ownedby": d(f),
                    id: p(f, e.value),
                    type: "radio",
                    name: m("name") || m("id"),
                    form: m("form"),
                    value: e.value,
                    onClick(t) {
                        y ? t.preventDefault() : t.currentTarget.checked && r({
                            type: "SET_VALUE",
                            value: e.value,
                            isTrusted: !0
                        })
                    },
                    onBlur() {
                        r({
                            type: "SET_FOCUSED",
                            value: null,
                            focused: !1,
                            focusVisible: !1
                        })
                    },
                    onFocus() {
                        let t = (0, n.isFocusVisible)();
                        r({
                            type: "SET_FOCUSED",
                            value: e.value,
                            focused: !0,
                            focusVisible: t
                        })
                    },
                    onKeyDown(t) {
                        t.defaultPrevented || " " === t.key && r({
                            type: "SET_ACTIVE",
                            value: e.value,
                            active: !0
                        })
                    },
                    onKeyUp(e) {
                        e.defaultPrevented || " " === e.key && r({
                            type: "SET_ACTIVE",
                            value: null
                        })
                    },
                    disabled: i.disabled || y,
                    defaultChecked: i.checked,
                    style: a.visuallyHiddenStyle
                })
            },
            getIndicatorProps() {
                let e = o.get("indicatorRect");
                return t.element({
                    id: g(f),
                    ...s.indicator.attrs,
                    dir: m("dir"),
                    hidden: null == o.get("value") || null == e,
                    "data-disabled": (0, a.dataAttr)(O),
                    "data-orientation": m("orientation"),
                    style: {
                        "--transition-property": "left, top, width, height",
                        "--left": (0, i.toPx)(null == e ? void 0 : e.x),
                        "--top": (0, i.toPx)(null == e ? void 0 : e.y),
                        "--width": (0, i.toPx)(null == e ? void 0 : e.width),
                        "--height": (0, i.toPx)(null == e ? void 0 : e.height),
                        position: "absolute",
                        willChange: "var(--transition-property)",
                        transitionProperty: "var(--transition-property)",
                        transitionDuration: "var(--transition-duration, 150ms)",
                        transitionTimingFunction: "var(--transition-timing-function)",
                        ["horizontal" === m("orientation") ? "left" : "top"]: "horizontal" === m("orientation") ? "var(--left)" : "var(--top)"
                    }
                })
            }
        }
    }
    var {
        not: O
    } = (0, o.createGuards)(), y = (0, o.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                orientation: "vertical",
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e
                        })
                    }
                })),
                activeValue: a(() => ({
                    defaultValue: null
                })),
                focusedValue: a(() => ({
                    defaultValue: null
                })),
                focusVisibleValue: a(() => ({
                    defaultValue: null
                })),
                hoveredValue: a(() => ({
                    defaultValue: null
                })),
                indicatorRect: a(() => ({
                    defaultValue: null
                })),
                fieldsetDisabled: a(() => ({
                    defaultValue: !1
                })),
                ssr: a(() => ({
                    defaultValue: !0
                }))
            }
        },
        refs: () => ({
            indicatorCleanup: null,
            focusVisibleValue: null
        }),
        computed: {
            isDisabled: e => {
                let {
                    prop: t,
                    context: a
                } = e;
                return !!t("disabled") || a.get("fieldsetDisabled")
            }
        },
        entry: ["syncIndicatorRect", "syncSsr"],
        exit: ["cleanupObserver"],
        effects: ["trackFormControlState", "trackFocusVisible"],
        watch(e) {
            let {
                track: t,
                action: a,
                context: n
            } = e;
            t([() => n.get("value")], () => {
                a(["syncIndicatorRect", "syncInputElements"])
            })
        },
        on: {
            SET_VALUE: [{
                guard: O("isTrusted"),
                actions: ["setValue", "dispatchChangeEvent"]
            }, {
                actions: ["setValue"]
            }],
            SET_HOVERED: {
                actions: ["setHovered"]
            },
            SET_ACTIVE: {
                actions: ["setActive"]
            },
            SET_FOCUSED: {
                actions: ["setFocused"]
            }
        },
        states: {
            idle: {}
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
                trackFormControlState(e) {
                    let {
                        context: t,
                        scope: n
                    } = e;
                    return (0, a.trackFormControl)(v(n), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            t.set("value", t.initial("value"))
                        }
                    })
                },
                trackFocusVisible(e) {
                    var t;
                    let {
                        scope: a
                    } = e;
                    return (0, n.trackFocusVisible)({
                        root: null == (t = a.getRootNode) ? void 0 : t.call(a)
                    })
                }
            },
            actions: {
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                setHovered(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("hoveredValue", a.value)
                },
                setActive(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("activeValue", a.value)
                },
                setFocused(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("focusedValue", a.value);
                    let n = null != a.value && a.focusVisible ? a.value : null;
                    t.set("focusVisibleValue", n)
                },
                syncInputElements(e) {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    m(a).forEach(e => {
                        e.checked = e.value === t.get("value")
                    })
                },
                cleanupObserver(e) {
                    var t;
                    let {
                        refs: a
                    } = e;
                    null == (t = a.get("indicatorCleanup")) || t()
                },
                syncSsr(e) {
                    let {
                        context: t
                    } = e;
                    t.set("ssr", !1)
                },
                syncIndicatorRect(e) {
                    var t;
                    let {
                        context: n,
                        scope: i,
                        refs: o
                    } = e;
                    if (null == (t = o.get("indicatorCleanup")) || t(), !i.getById(g(i))) return;
                    let r = n.get("value"),
                        l = ((e, t) => {
                            if (t) return e.getById(u(e, t))
                        })(i, r);
                    if (null == r || !l) return void n.set("indicatorRect", null);
                    let s = () => {
                        var e, t, a, i;
                        n.set("indicatorRect", {
                            x: null != (e = null == l ? void 0 : l.offsetLeft) ? e : 0,
                            y: null != (t = null == l ? void 0 : l.offsetTop) ? t : 0,
                            width: null != (a = null == l ? void 0 : l.offsetWidth) ? a : 0,
                            height: null != (i = null == l ? void 0 : l.offsetHeight) ? i : 0
                        })
                    };
                    s();
                    let d = a.resizeObserverBorderBox.observe(l, s);
                    o.set("indicatorCleanup", d)
                },
                dispatchChangeEvent(e) {
                    let {
                        context: t,
                        scope: n
                    } = e;
                    m(n).forEach(e => {
                        let n = e.value === t.get("value");
                        n !== e.checked && (0, a.dispatchInputCheckedEvent)(e, {
                            checked: n
                        })
                    })
                }
            }
        }
    }), E = (0, r.createProps)()(["dir", "disabled", "form", "getRootNode", "id", "ids", "name", "onValueChange", "orientation", "readOnly", "value", "defaultValue"]);
    (0, i.createSplitProps)(E);
    var h = (0, r.createProps)()(["value", "disabled", "invalid"]);
    (0, i.createSplitProps)(h), e.s(["anatomy", () => l, "connect", () => f, "machine", () => y])
}, 132509, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(30500),
        n = e.i(409078),
        i = e.i(593006),
        o = (0, t.createAnatomy)("progress").parts("root", "label", "track", "range", "valueText", "view", "circle", "circleTrack", "circleRange"),
        r = o.build();

    function l(e, t) {
        var a, n, i;
        let {
            context: o,
            computed: l,
            prop: c,
            send: u,
            scope: p
        } = e, g = l("percent"), v = l("isIndeterminate") ? "" : l("formatter").format(g / 100), m = c("max"), f = c("min"), O = c("orientation"), y = c("translations"), E = l("isIndeterminate"), h = o.get("value"), b = null != (a = null == y ? void 0 : y.value({
            value: h,
            max: m,
            percent: g,
            min: f,
            formatter: l("formatter")
        })) ? a : "", T = (n = h, i = m, null == n ? "indeterminate" : n === i ? "complete" : "loading"), C = {
            role: "progressbar",
            "aria-label": b,
            "data-max": m,
            "aria-valuemin": f,
            "aria-valuemax": m,
            "aria-valuenow": null != h ? h : void 0,
            "data-orientation": O,
            "data-state": T
        }, P = function(e) {
            let {
                context: t,
                computed: a
            } = e;
            return {
                root: d,
                track: s,
                range: {
                    opacity: 0 === t.get("value") ? 0 : void 0,
                    style: { ...s.style,
                        "--percent": a("percent"),
                        "--circumference": "calc(2 * 3.14159 * var(--radius))",
                        "--offset": "calc(var(--circumference) * (100 - var(--percent)) / 100)",
                        strokeDashoffset: "calc(var(--circumference) * ((100 - var(--percent)) / 100))",
                        strokeDasharray: a("isIndeterminate") ? void 0 : "var(--circumference)",
                        transformOrigin: "center",
                        transform: "rotate(-90deg)"
                    }
                }
            }
        }(e);
        return {
            value: h,
            valueAsString: b,
            min: f,
            max: m,
            percent: g,
            percentAsString: v,
            indeterminate: E,
            setValue(e) {
                u({
                    type: "VALUE.SET",
                    value: e
                })
            },
            setToMax() {
                u({
                    type: "VALUE.SET",
                    value: m
                })
            },
            setToMin() {
                u({
                    type: "VALUE.SET",
                    value: f
                })
            },
            getRootProps: () => {
                var e, a;
                return t.element({
                    dir: c("dir"),
                    ...r.root.attrs,
                    id: null != (a = null == (e = p.ids) ? void 0 : e.root) ? a : "progress-".concat(p.id),
                    "data-max": m,
                    "data-value": null != h ? h : void 0,
                    "data-state": T,
                    "data-orientation": O,
                    style: {
                        "--percent": E ? void 0 : g
                    }
                })
            },
            getLabelProps: () => {
                var e, a;
                return t.element({
                    dir: c("dir"),
                    id: null != (a = null == (e = p.ids) ? void 0 : e.label) ? a : "progress-".concat(p.id, "-label"),
                    ...r.label.attrs,
                    "data-orientation": O
                })
            },
            getValueTextProps: () => t.element({
                dir: c("dir"),
                "aria-live": "polite",
                ...r.valueText.attrs
            }),
            getTrackProps: () => {
                var e, a;
                return t.element({
                    dir: c("dir"),
                    id: null != (a = null == (e = p.ids) ? void 0 : e.track) ? a : "progress-".concat(p.id, "-track"),
                    ...r.track.attrs,
                    ...C
                })
            },
            getRangeProps: () => t.element({
                dir: c("dir"),
                ...r.range.attrs,
                "data-orientation": O,
                "data-state": T,
                style: {
                    [l("isHorizontal") ? "width" : "height"]: E ? void 0 : "".concat(g, "%")
                }
            }),
            getCircleProps: () => {
                var e, a;
                return t.element({
                    dir: c("dir"),
                    id: null != (a = null == (e = p.ids) ? void 0 : e.circle) ? a : "progress-".concat(p.id, "-circle"),
                    ...r.circle.attrs,
                    ...C,
                    ...P.root
                })
            },
            getCircleTrackProps: () => t.element({
                dir: c("dir"),
                "data-orientation": O,
                ...r.circleTrack.attrs,
                ...P.track
            }),
            getCircleRangeProps: () => t.element({
                dir: c("dir"),
                ...r.circleRange.attrs,
                ...P.range,
                "data-state": T
            }),
            getViewProps: e => t.element({
                dir: c("dir"),
                ...r.view.attrs,
                "data-state": e.state,
                hidden: e.state !== T
            })
        }
    }
    var s = {
            style: {
                "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
                cx: "calc(var(--size) / 2)",
                cy: "calc(var(--size) / 2)",
                r: "var(--radius)",
                fill: "transparent",
                strokeWidth: "var(--thickness)"
            }
        },
        d = {
            style: {
                width: "var(--size)",
                height: "var(--size)"
            }
        },
        c = (0, a.createMachine)({
            props(e) {
                var t, a;
                let {
                    props: n
                } = e, i = null != (t = n.min) ? t : 0, o = null != (a = n.max) ? a : 100;
                return {
                    orientation: "horizontal",
                    ...n,
                    max: o,
                    min: i,
                    defaultValue: void 0 !== n.defaultValue ? n.defaultValue : v(i, o),
                    formatOptions: {
                        style: "percent",
                        ...n.formatOptions
                    },
                    translations: {
                        value: e => {
                            let {
                                value: t,
                                percent: a,
                                formatter: n
                            } = e;
                            if (null === t) return "loading...";
                            if (n) {
                                let e = "percent" === n.resolvedOptions().style ? a / 100 : t;
                                return n.format(e)
                            }
                            return t.toString()
                        },
                        ...n.translations
                    }
                }
            },
            initialState: () => "idle",
            entry: ["validateContext"],
            context(e) {
                let {
                    bindable: t,
                    prop: a
                } = e;
                return {
                    value: t(() => ({
                        defaultValue: a("defaultValue"),
                        value: a("value"),
                        onChange(e) {
                            var t;
                            null == (t = a("onValueChange")) || t({
                                value: e
                            })
                        }
                    }))
                }
            },
            computed: {
                isIndeterminate: e => {
                    let {
                        context: t
                    } = e;
                    return null === t.get("value")
                },
                percent(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, i = t.get("value");
                    return (0, n.isNumber)(i) ? 100 * (0, n.getValuePercent)(i, a("min"), a("max")) : -1
                },
                formatter: (0, a.memo)(e => {
                    let {
                        prop: t
                    } = e;
                    return [t("locale"), t("formatOptions")]
                }, e => {
                    let [t, a] = e;
                    return new Intl.NumberFormat(t, a)
                }),
                isHorizontal: e => {
                    let {
                        prop: t
                    } = e;
                    return "horizontal" === t("orientation")
                }
            },
            states: {
                idle: {
                    on: {
                        "VALUE.SET": {
                            actions: ["setValue"]
                        }
                    }
                }
            },
            implementations: {
                actions: {
                    setValue: e => {
                        let {
                            context: t,
                            event: a,
                            prop: n
                        } = e, i = null === a.value ? null : Math.max(0, Math.min(a.value, n("max")));
                        t.set("value", i)
                    },
                    validateContext: e => {
                        let {
                            context: t,
                            prop: a
                        } = e, n = a("max"), i = a("min"), o = t.get("value");
                        if (null != o) {
                            if (!u(n)) throw Error("[progress] The max value passed `".concat(n, "` is not a valid number"));
                            if (!p(o, n)) throw Error("[progress] The value passed `".concat(o, "` exceeds the max value `").concat(n, "`"));
                            if (!g(o, i)) throw Error("[progress] The value passed `".concat(o, "` exceeds the min value `").concat(i, "`"))
                        }
                    }
                }
            }
        }),
        u = e => (0, n.isNumber)(e) && !isNaN(e),
        p = (e, t) => u(e) && e <= t,
        g = (e, t) => u(e) && e >= t,
        v = (e, t) => e + (t - e) / 2,
        m = (0, i.createProps)()(["dir", "getRootNode", "id", "ids", "max", "min", "orientation", "translations", "value", "onValueChange", "defaultValue", "formatOptions", "locale"]);
    (0, n.createSplitProps)(m), e.s(["anatomy", () => o, "connect", () => l, "machine", () => c])
}, 230840, e => {
    "use strict";

    function t(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    e.s(["_", () => t])
}, 358537, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(841158),
        n = e.i(541356),
        i = e.i(833288),
        o = e.i(30500),
        r = e.i(143713),
        l = e.i(279511),
        s = e.i(635398),
        d = e.i(593006),
        c = e.i(409078),
        u = (0, t.createAnatomy)("popover").parts("arrow", "arrowTip", "anchor", "trigger", "indicator", "positioner", "content", "title", "description", "closeTrigger"),
        p = u.build(),
        g = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.anchor) ? a : "popover:".concat(e.id, ":anchor")
        },
        v = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.trigger) ? a : "popover:".concat(e.id, ":trigger")
        },
        m = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "popover:".concat(e.id, ":content")
        },
        f = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.positioner) ? a : "popover:".concat(e.id, ":popper")
        },
        O = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.title) ? a : "popover:".concat(e.id, ":title")
        },
        y = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.description) ? a : "popover:".concat(e.id, ":desc")
        },
        E = e => e.getById(g(e)),
        h = e => e.getById(v(e)),
        b = e => e.getById(m(e)),
        T = e => e.getById(f(e));

    function C(e, t) {
        let {
            state: i,
            context: o,
            send: r,
            computed: l,
            prop: s,
            scope: d
        } = e, c = i.matches("open"), u = o.get("currentPlacement"), E = l("currentPortalled"), h = o.get("renderedElements"), b = (0, n.getPlacementStyles)({ ...s("positioning"),
            placement: u
        });
        return {
            portalled: E,
            open: c,
            setOpen(e) {
                i.matches("open") !== e && r({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r({
                    type: "POSITIONING.SET",
                    options: e
                })
            },
            getArrowProps: () => {
                var e, a;
                return t.element({
                    id: null != (a = null == (e = d.ids) ? void 0 : e.arrow) ? a : "popover:".concat(d.id, ":arrow"),
                    ...p.arrow.attrs,
                    dir: s("dir"),
                    style: b.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...p.arrowTip.attrs,
                dir: s("dir"),
                style: b.arrowTip
            }),
            getAnchorProps: () => t.element({ ...p.anchor.attrs,
                dir: s("dir"),
                id: g(d)
            }),
            getTriggerProps: () => t.button({ ...p.trigger.attrs,
                dir: s("dir"),
                type: "button",
                "data-placement": u,
                id: v(d),
                "aria-haspopup": "dialog",
                "aria-expanded": c,
                "data-state": c ? "open" : "closed",
                "aria-controls": m(d),
                onPointerDown(e) {
                    (0, a.isLeftClick)(e) && (0, a.isSafari)() && e.currentTarget.focus()
                },
                onClick(e) {
                    e.defaultPrevented || r({
                        type: "TOGGLE"
                    })
                },
                onBlur(e) {
                    r({
                        type: "TRIGGER_BLUR",
                        target: e.relatedTarget
                    })
                }
            }),
            getIndicatorProps: () => t.element({ ...p.indicator.attrs,
                dir: s("dir"),
                "data-state": c ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({
                id: f(d),
                ...p.positioner.attrs,
                dir: s("dir"),
                style: b.floating
            }),
            getContentProps: () => t.element({ ...p.content.attrs,
                dir: s("dir"),
                id: m(d),
                tabIndex: -1,
                role: "dialog",
                "aria-modal": (0, a.ariaAttr)(s("modal")),
                hidden: !c,
                "data-state": c ? "open" : "closed",
                "data-expanded": (0, a.dataAttr)(c),
                "aria-labelledby": h.title ? O(d) : void 0,
                "aria-describedby": h.description ? y(d) : void 0,
                "data-placement": u
            }),
            getTitleProps: () => t.element({ ...p.title.attrs,
                id: O(d),
                dir: s("dir")
            }),
            getDescriptionProps: () => t.element({ ...p.description.attrs,
                id: y(d),
                dir: s("dir")
            }),
            getCloseTriggerProps: () => {
                var e, a;
                return t.button({ ...p.closeTrigger.attrs,
                    dir: s("dir"),
                    id: null != (a = null == (e = d.ids) ? void 0 : e.closeTrigger) ? a : "popover:".concat(d.id, ":close"),
                    type: "button",
                    "aria-label": "close",
                    onClick(e) {
                        e.defaultPrevented || (e.stopPropagation(), r({
                            type: "CLOSE"
                        }))
                    }
                })
            }
        }
    }
    var P = (0, o.createMachine)({
            props(e) {
                let {
                    props: t
                } = e;
                return {
                    closeOnInteractOutside: !0,
                    closeOnEscape: !0,
                    autoFocus: !0,
                    modal: !1,
                    portalled: !0,
                    ...t,
                    positioning: {
                        placement: "bottom",
                        ...t.positioning
                    }
                }
            },
            initialState(e) {
                let {
                    prop: t
                } = e;
                return t("open") || t("defaultOpen") ? "open" : "closed"
            },
            context(e) {
                let {
                    bindable: t
                } = e;
                return {
                    currentPlacement: t(() => ({
                        defaultValue: void 0
                    })),
                    renderedElements: t(() => ({
                        defaultValue: {
                            title: !0,
                            description: !0
                        }
                    }))
                }
            },
            computed: {
                currentPortalled: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("modal") || !!t("portalled")
                }
            },
            watch(e) {
                let {
                    track: t,
                    prop: a,
                    action: n
                } = e;
                t([() => a("open")], () => {
                    n(["toggleVisibility"])
                })
            },
            entry: ["checkRenderedElements"],
            states: {
                closed: {
                    on: {
                        "CONTROLLED.OPEN": {
                            target: "open",
                            actions: ["setInitialFocus"]
                        },
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        OPEN: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }]
                    }
                },
                open: {
                    effects: ["trapFocus", "preventScroll", "hideContentBelow", "trackPositioning", "trackDismissableElement", "proxyTabFocus"],
                    on: {
                        "CONTROLLED.CLOSE": {
                            target: "closed",
                            actions: ["setFinalFocus"]
                        },
                        CLOSE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose", "setFinalFocus"]
                        }],
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose"]
                        }],
                        "POSITIONING.SET": {
                            actions: ["reposition"]
                        }
                    }
                }
            },
            implementations: {
                guards: {
                    isOpenControlled: e => {
                        let {
                            prop: t
                        } = e;
                        return void 0 != t("open")
                    }
                },
                effects: {
                    trackPositioning(e) {
                        var t;
                        let {
                            context: a,
                            prop: i,
                            scope: o
                        } = e;
                        a.set("currentPlacement", i("positioning").placement);
                        let r = null != (t = E(o)) ? t : h(o);
                        return (0, n.getPlacement)(r, () => T(o), { ...i("positioning"),
                            defer: !0,
                            onComplete(e) {
                                a.set("currentPlacement", e.placement)
                            }
                        })
                    },
                    trackDismissableElement(e) {
                        let {
                            send: t,
                            prop: a,
                            scope: n
                        } = e, i = !0;
                        return (0, r.trackDismissableElement)(() => b(n), {
                            type: "popover",
                            pointerBlocking: a("modal"),
                            exclude: h(n),
                            defer: !0,
                            onEscapeKeyDown(e) {
                                var t;
                                null == (t = a("onEscapeKeyDown")) || t(e), a("closeOnEscape") || e.preventDefault()
                            },
                            onInteractOutside(e) {
                                var t;
                                null == (t = a("onInteractOutside")) || t(e), !e.defaultPrevented && (i = !(e.detail.focusable || e.detail.contextmenu), a("closeOnInteractOutside") || e.preventDefault())
                            },
                            onPointerDownOutside: a("onPointerDownOutside"),
                            onFocusOutside: a("onFocusOutside"),
                            persistentElements: a("persistentElements"),
                            onRequestDismiss: a("onRequestDismiss"),
                            onDismiss() {
                                t({
                                    type: "CLOSE",
                                    src: "interact-outside",
                                    restoreFocus: i
                                })
                            }
                        })
                    },
                    proxyTabFocus(e) {
                        let {
                            prop: t,
                            scope: n
                        } = e;
                        if (!t("modal") && t("portalled")) return (0, a.proxyTabFocus)(() => b(n), {
                            triggerElement: h(n),
                            defer: !0,
                            getShadowRoot: !0,
                            onFocus(e) {
                                e.focus({
                                    preventScroll: !0
                                })
                            }
                        })
                    },
                    hideContentBelow(e) {
                        let {
                            prop: t,
                            scope: a
                        } = e;
                        if (t("modal")) return (0, i.ariaHidden)(() => [b(a), h(a)], {
                            defer: !0
                        })
                    },
                    preventScroll(e) {
                        let {
                            prop: t,
                            scope: a
                        } = e;
                        if (t("modal")) return (0, s.preventBodyScroll)(a.getDoc())
                    },
                    trapFocus(e) {
                        let {
                            prop: t,
                            scope: n
                        } = e;
                        if (t("modal")) return (0, l.trapFocus)(() => b(n), {
                            initialFocus: () => (0, a.getInitialFocus)({
                                root: b(n),
                                getInitialEl: t("initialFocusEl"),
                                enabled: t("autoFocus")
                            }),
                            getShadowRoot: !0
                        })
                    }
                },
                actions: {
                    reposition(e) {
                        var t;
                        let {
                            event: a,
                            prop: i,
                            scope: o,
                            context: r
                        } = e, l = null != (t = E(o)) ? t : h(o);
                        (0, n.getPlacement)(l, () => T(o), { ...i("positioning"),
                            ...a.options,
                            defer: !0,
                            listeners: !1,
                            onComplete(e) {
                                r.set("currentPlacement", e.placement)
                            }
                        })
                    },
                    checkRenderedElements(e) {
                        let {
                            context: t,
                            scope: n
                        } = e;
                        (0, a.raf)(() => {
                            Object.assign(t.get("renderedElements"), {
                                title: !!n.getById(O(n)),
                                description: !!n.getById(y(n))
                            })
                        })
                    },
                    setInitialFocus(e) {
                        let {
                            prop: t,
                            scope: n
                        } = e;
                        t("modal") || (0, a.raf)(() => {
                            let e = (0, a.getInitialFocus)({
                                root: b(n),
                                getInitialEl: t("initialFocusEl"),
                                enabled: t("autoFocus")
                            });
                            null == e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    setFinalFocus(e) {
                        var t, n;
                        let {
                            event: i,
                            scope: o
                        } = e, r = null != (n = i.restoreFocus) ? n : null == (t = i.previousEvent) ? void 0 : t.restoreFocus;
                        (null == r || r) && (0, a.raf)(() => {
                            let e = h(o);
                            null == e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    invokeOnOpen(e) {
                        let {
                            prop: t,
                            flush: a
                        } = e;
                        a(() => {
                            var e;
                            null == (e = t("onOpenChange")) || e({
                                open: !0
                            })
                        })
                    },
                    invokeOnClose(e) {
                        let {
                            prop: t,
                            flush: a
                        } = e;
                        a(() => {
                            var e;
                            null == (e = t("onOpenChange")) || e({
                                open: !1
                            })
                        })
                    },
                    toggleVisibility(e) {
                        let {
                            event: t,
                            send: a,
                            prop: n
                        } = e;
                        a({
                            type: n("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: t
                        })
                    }
                }
            }
        }),
        I = (0, d.createProps)()(["autoFocus", "closeOnEscape", "closeOnInteractOutside", "dir", "getRootNode", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "defaultOpen", "open", "persistentElements", "portalled", "positioning"]);
    (0, c.createSplitProps)(I), e.s(["anatomy", () => u, "connect", () => C, "machine", () => P])
}, 895315, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(841158),
        n = e.i(30500),
        i = e.i(593006),
        o = e.i(409078),
        r = (0, t.createAnatomy)("avatar").parts("root", "image", "fallback"),
        l = r.build(),
        s = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "avatar:".concat(e.id)
        },
        d = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.image) ? a : "avatar:".concat(e.id, ":image")
        },
        c = e => e.getById(d(e));

    function u(e, t) {
        let {
            state: a,
            send: n,
            prop: i,
            scope: o
        } = e, r = a.matches("loaded");
        return {
            loaded: r,
            setSrc(e) {
                let t = c(o);
                null == t || t.setAttribute("src", e)
            },
            setLoaded() {
                n({
                    type: "img.loaded",
                    src: "api"
                })
            },
            setError() {
                n({
                    type: "img.error",
                    src: "api"
                })
            },
            getRootProps: () => t.element({ ...l.root.attrs,
                dir: i("dir"),
                id: s(o)
            }),
            getImageProps: () => t.img({ ...l.image.attrs,
                hidden: !r,
                dir: i("dir"),
                id: d(o),
                "data-state": r ? "visible" : "hidden",
                onLoad() {
                    n({
                        type: "img.loaded",
                        src: "element"
                    })
                },
                onError() {
                    n({
                        type: "img.error",
                        src: "element"
                    })
                }
            }),
            getFallbackProps: () => {
                var e, a;
                return t.element({ ...l.fallback.attrs,
                    dir: i("dir"),
                    id: null != (a = null == (e = o.ids) ? void 0 : e.fallback) ? a : "avatar:".concat(o.id, ":fallback"),
                    hidden: r,
                    "data-state": r ? "hidden" : "visible"
                })
            }
        }
    }
    var p = (0, n.createMachine)({
            initialState: () => "loading",
            effects: ["trackImageRemoval", "trackSrcChange"],
            on: {
                "src.change": {
                    target: "loading"
                },
                "img.unmount": {
                    target: "error"
                }
            },
            states: {
                loading: {
                    entry: ["checkImageStatus"],
                    on: {
                        "img.loaded": {
                            target: "loaded",
                            actions: ["invokeOnLoad"]
                        },
                        "img.error": {
                            target: "error",
                            actions: ["invokeOnError"]
                        }
                    }
                },
                error: {
                    on: {
                        "img.loaded": {
                            target: "loaded",
                            actions: ["invokeOnLoad"]
                        }
                    }
                },
                loaded: {
                    on: {
                        "img.error": {
                            target: "error",
                            actions: ["invokeOnError"]
                        }
                    }
                }
            },
            implementations: {
                actions: {
                    invokeOnLoad(e) {
                        var t;
                        let {
                            prop: a
                        } = e;
                        null == (t = a("onStatusChange")) || t({
                            status: "loaded"
                        })
                    },
                    invokeOnError(e) {
                        var t;
                        let {
                            prop: a
                        } = e;
                        null == (t = a("onStatusChange")) || t({
                            status: "error"
                        })
                    },
                    checkImageStatus(e) {
                        var t;
                        let {
                            send: a,
                            scope: n
                        } = e, i = c(n);
                        (null == i ? void 0 : i.complete) && a({
                            type: (t = i).complete && 0 !== t.naturalWidth && 0 !== t.naturalHeight ? "img.loaded" : "img.error",
                            src: "ssr"
                        })
                    }
                },
                effects: {
                    trackImageRemoval(e) {
                        let {
                            send: t,
                            scope: n
                        } = e, i = n.getById(s(n));
                        return (0, a.observeChildren)(i, {
                            callback(e) {
                                Array.from(e[0].removedNodes).find(e => e.nodeType === Node.ELEMENT_NODE && e.matches("[data-scope=avatar][data-part=image]")) && t({
                                    type: "img.unmount"
                                })
                            }
                        })
                    },
                    trackSrcChange(e) {
                        let {
                            send: t,
                            scope: n
                        } = e, i = c(n);
                        return (0, a.observeAttributes)(i, {
                            attributes: ["src", "srcset"],
                            callback() {
                                t({
                                    type: "src.change"
                                })
                            }
                        })
                    }
                }
            }
        }),
        g = (0, i.createProps)()(["dir", "id", "ids", "onStatusChange", "getRootNode"]);
    (0, o.createSplitProps)(g), e.s(["anatomy", () => r, "connect", () => u, "machine", () => p])
}, 570140, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(841158),
        n = e.i(409078),
        i = e.i(30500),
        o = e.i(593006),
        r = (0, t.createAnatomy)("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator"),
        l = r.build(),
        s = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "accordion:".concat(e.id)
        },
        d = (e, t) => {
            var a, n, i;
            return null != (i = null == (n = e.ids) || null == (a = n.itemContent) ? void 0 : a.call(n, t)) ? i : "accordion:".concat(e.id, ":content:").concat(t)
        },
        c = (e, t) => {
            var a, n, i;
            return null != (i = null == (n = e.ids) || null == (a = n.itemTrigger) ? void 0 : a.call(n, t)) ? i : "accordion:".concat(e.id, ":trigger:").concat(t)
        },
        u = e => {
            let t = CSS.escape(s(e));
            return (0, a.queryAll)(e.getById(s(e)), "[aria-controls][data-ownedby='".concat(t, "']:not([disabled])"))
        };

    function p(e, t) {
        let {
            send: n,
            context: i,
            prop: o,
            scope: r,
            computed: u
        } = e, p = i.get("focusedValue"), g = i.get("value"), v = o("multiple");

        function m(e) {
            var t;
            return {
                expanded: g.includes(e.value),
                focused: p === e.value,
                disabled: !!(null != (t = e.disabled) ? t : o("disabled"))
            }
        }
        return {
            focusedValue: p,
            value: g,
            setValue: function(e) {
                let t = e;
                !v && t.length > 1 && (t = [t[0]]), n({
                    type: "VALUE.SET",
                    value: t
                })
            },
            getItemState: m,
            getRootProps: () => t.element({ ...l.root.attrs,
                dir: o("dir"),
                id: s(r),
                "data-orientation": o("orientation")
            }),
            getItemProps(e) {
                var n, i, s, d;
                let c = m(e);
                return t.element({ ...l.item.attrs,
                    dir: o("dir"),
                    id: (n = e.value, null != (d = null == (s = r.ids) || null == (i = s.item) ? void 0 : i.call(s, n)) ? d : "accordion:".concat(r.id, ":item:").concat(n)),
                    "data-state": c.expanded ? "open" : "closed",
                    "data-focus": (0, a.dataAttr)(c.focused),
                    "data-disabled": (0, a.dataAttr)(c.disabled),
                    "data-orientation": o("orientation")
                })
            },
            getItemContentProps(e) {
                let n = m(e);
                return t.element({ ...l.itemContent.attrs,
                    dir: o("dir"),
                    role: "region",
                    id: d(r, e.value),
                    "aria-labelledby": c(r, e.value),
                    hidden: !n.expanded,
                    "data-state": n.expanded ? "open" : "closed",
                    "data-disabled": (0, a.dataAttr)(n.disabled),
                    "data-focus": (0, a.dataAttr)(n.focused),
                    "data-orientation": o("orientation")
                })
            },
            getItemIndicatorProps(e) {
                let n = m(e);
                return t.element({ ...l.itemIndicator.attrs,
                    dir: o("dir"),
                    "aria-hidden": !0,
                    "data-state": n.expanded ? "open" : "closed",
                    "data-disabled": (0, a.dataAttr)(n.disabled),
                    "data-focus": (0, a.dataAttr)(n.focused),
                    "data-orientation": o("orientation")
                })
            },
            getItemTriggerProps(e) {
                let {
                    value: i
                } = e, p = m(e);
                return t.button({ ...l.itemTrigger.attrs,
                    type: "button",
                    dir: o("dir"),
                    id: c(r, i),
                    "aria-controls": d(r, i),
                    "aria-expanded": p.expanded,
                    disabled: p.disabled,
                    "data-orientation": o("orientation"),
                    "aria-disabled": p.disabled,
                    "data-state": p.expanded ? "open" : "closed",
                    "data-ownedby": s(r),
                    onFocus() {
                        p.disabled || n({
                            type: "TRIGGER.FOCUS",
                            value: i
                        })
                    },
                    onBlur() {
                        p.disabled || n({
                            type: "TRIGGER.BLUR"
                        })
                    },
                    onClick(e) {
                        p.disabled || ((0, a.isSafari)() && e.currentTarget.focus(), n({
                            type: "TRIGGER.CLICK",
                            value: i
                        }))
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || p.disabled) return;
                        let t = {
                            ArrowDown() {
                                u("isHorizontal") || n({
                                    type: "GOTO.NEXT",
                                    value: i
                                })
                            },
                            ArrowUp() {
                                u("isHorizontal") || n({
                                    type: "GOTO.PREV",
                                    value: i
                                })
                            },
                            ArrowRight() {
                                u("isHorizontal") && n({
                                    type: "GOTO.NEXT",
                                    value: i
                                })
                            },
                            ArrowLeft() {
                                u("isHorizontal") && n({
                                    type: "GOTO.PREV",
                                    value: i
                                })
                            },
                            Home() {
                                n({
                                    type: "GOTO.FIRST",
                                    value: i
                                })
                            },
                            End() {
                                n({
                                    type: "GOTO.LAST",
                                    value: i
                                })
                            }
                        }[(0, a.getEventKey)(e, {
                            dir: o("dir"),
                            orientation: o("orientation")
                        })];
                        t && (t(e), e.preventDefault())
                    }
                })
            }
        }
    }
    var {
        and: g,
        not: v
    } = (0, i.createGuards)(), m = (0, i.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                collapsible: !1,
                multiple: !1,
                orientation: "vertical",
                defaultValue: [],
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                focusedValue: a(() => ({
                    defaultValue: null,
                    sync: !0,
                    onChange(e) {
                        var a;
                        null == (a = t("onFocusChange")) || a({
                            value: e
                        })
                    }
                })),
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e
                        })
                    }
                }))
            }
        },
        computed: {
            isHorizontal: e => {
                let {
                    prop: t
                } = e;
                return "horizontal" === t("orientation")
            }
        },
        on: {
            "VALUE.SET": {
                actions: ["setValue"]
            }
        },
        states: {
            idle: {
                on: {
                    "TRIGGER.FOCUS": {
                        target: "focused",
                        actions: ["setFocusedValue"]
                    }
                }
            },
            focused: {
                on: {
                    "GOTO.NEXT": {
                        actions: ["focusNextTrigger"]
                    },
                    "GOTO.PREV": {
                        actions: ["focusPrevTrigger"]
                    },
                    "TRIGGER.CLICK": [{
                        guard: g("isExpanded", "canToggle"),
                        actions: ["collapse"]
                    }, {
                        guard: v("isExpanded"),
                        actions: ["expand"]
                    }],
                    "GOTO.FIRST": {
                        actions: ["focusFirstTrigger"]
                    },
                    "GOTO.LAST": {
                        actions: ["focusLastTrigger"]
                    },
                    "TRIGGER.BLUR": {
                        target: "idle",
                        actions: ["clearFocusedValue"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                canToggle: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("collapsible") || !!t("multiple")
                },
                isExpanded: e => {
                    let {
                        context: t,
                        event: a
                    } = e;
                    return t.get("value").includes(a.value)
                }
            },
            actions: {
                collapse(e) {
                    let {
                        context: t,
                        prop: a,
                        event: i
                    } = e, o = a("multiple") ? (0, n.remove)(t.get("value"), i.value) : [];
                    t.set("value", o)
                },
                expand(e) {
                    let {
                        context: t,
                        prop: a,
                        event: i
                    } = e, o = a("multiple") ? (0, n.add)(t.get("value"), i.value) : [i.value];
                    t.set("value", o)
                },
                focusFirstTrigger(e) {
                    var t;
                    let {
                        scope: a
                    } = e;
                    null === (t = (0, n.first)(u(a))) || void 0 === t || t.focus()
                },
                focusLastTrigger(e) {
                    var t;
                    let {
                        scope: a
                    } = e;
                    null === (t = (0, n.last)(u(a))) || void 0 === t || t.focus()
                },
                focusNextTrigger(e) {
                    let {
                        context: t,
                        scope: n
                    } = e, i = t.get("focusedValue");
                    if (!i) return;
                    let o = (0, a.nextById)(u(n), c(n, i));
                    null == o || o.focus()
                },
                focusPrevTrigger(e) {
                    let {
                        context: t,
                        scope: n
                    } = e, i = t.get("focusedValue");
                    if (!i) return;
                    let o = (0, a.prevById)(u(n), c(n, i));
                    null == o || o.focus()
                },
                setFocusedValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("focusedValue", a.value)
                },
                clearFocusedValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedValue", null)
                },
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                coarseValue(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    !a("multiple") && t.get("value").length > 1 && ((0, n.warn)("The value of accordion should be a single value when multiple is false."), t.set("value", [t.get("value")[0]]))
                }
            }
        }
    }), f = (0, o.createProps)()(["collapsible", "dir", "disabled", "getRootNode", "id", "ids", "multiple", "onFocusChange", "onValueChange", "orientation", "value", "defaultValue"]);
    (0, n.createSplitProps)(f);
    var O = (0, o.createProps)()(["value", "disabled"]);
    (0, n.createSplitProps)(O), e.s(["anatomy", () => r, "connect", () => p, "machine", () => m])
}, 301594, e => {
    "use strict";
    var t = e.i(360706),
        a = e.i(841158),
        n = e.i(409078),
        i = e.i(30500),
        o = e.i(593006),
        r = (0, t.createAnatomy)("collapsible").parts("root", "trigger", "content", "indicator"),
        l = r.build(),
        s = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "collapsible:".concat(e.id, ":content")
        },
        d = e => e.getById(s(e));

    function c(e, t) {
        let {
            state: i,
            send: o,
            context: r,
            scope: d,
            prop: c
        } = e, u = i.matches("open") || i.matches("closing"), p = i.matches("open"), g = i.matches("closed"), {
            width: v,
            height: m
        } = r.get("size"), f = !!c("disabled"), O = c("collapsedHeight"), y = c("collapsedWidth"), E = null != O, h = null != y, b = E || h, T = !r.get("initial") && p;
        return {
            disabled: f,
            visible: u,
            open: p,
            measureSize() {
                o({
                    type: "size.measure"
                })
            },
            setOpen(e) {
                i.matches("open") !== e && o({
                    type: e ? "open" : "close"
                })
            },
            getRootProps: () => {
                var e, a;
                return t.element({ ...l.root.attrs,
                    "data-state": p ? "open" : "closed",
                    dir: c("dir"),
                    id: null != (a = null == (e = d.ids) ? void 0 : e.root) ? a : "collapsible:".concat(d.id)
                })
            },
            getContentProps: () => t.element({ ...l.content.attrs,
                id: s(d),
                "data-collapsible": "",
                "data-state": T ? void 0 : p ? "open" : "closed",
                "data-disabled": (0, a.dataAttr)(f),
                "data-has-collapsed-size": (0, a.dataAttr)(b),
                hidden: !u && !b,
                dir: c("dir"),
                style: {
                    "--height": (0, n.toPx)(m),
                    "--width": (0, n.toPx)(v),
                    "--collapsed-height": (0, n.toPx)(O),
                    "--collapsed-width": (0, n.toPx)(y),
                    ...g && E && {
                        overflow: "hidden",
                        minHeight: (0, n.toPx)(O),
                        maxHeight: (0, n.toPx)(O)
                    },
                    ...g && h && {
                        overflow: "hidden",
                        minWidth: (0, n.toPx)(y),
                        maxWidth: (0, n.toPx)(y)
                    }
                }
            }),
            getTriggerProps: () => {
                var e, n;
                return t.element({ ...l.trigger.attrs,
                    id: null != (n = null == (e = d.ids) ? void 0 : e.trigger) ? n : "collapsible:".concat(d.id, ":trigger"),
                    dir: c("dir"),
                    type: "button",
                    "data-state": p ? "open" : "closed",
                    "data-disabled": (0, a.dataAttr)(f),
                    "aria-controls": s(d),
                    "aria-expanded": u || !1,
                    onClick(e) {
                        e.defaultPrevented || f || o({
                            type: p ? "close" : "open"
                        })
                    }
                })
            },
            getIndicatorProps: () => t.element({ ...l.indicator.attrs,
                dir: c("dir"),
                "data-state": p ? "open" : "closed",
                "data-disabled": (0, a.dataAttr)(f)
            })
        }
    }
    var u = (0, i.createMachine)({
            initialState(e) {
                let {
                    prop: t
                } = e;
                return t("open") || t("defaultOpen") ? "open" : "closed"
            },
            context(e) {
                let {
                    bindable: t
                } = e;
                return {
                    size: t(() => ({
                        defaultValue: {
                            height: 0,
                            width: 0
                        },
                        sync: !0
                    })),
                    initial: t(() => ({
                        defaultValue: !1
                    }))
                }
            },
            refs: () => ({
                cleanup: void 0,
                stylesRef: void 0
            }),
            watch(e) {
                let {
                    track: t,
                    prop: a,
                    action: n
                } = e;
                t([() => a("open")], () => {
                    n(["setInitial", "computeSize", "toggleVisibility"])
                })
            },
            exit: ["clearInitial", "cleanupNode"],
            states: {
                closed: {
                    effects: ["trackTabbableElements"],
                    on: {
                        "controlled.open": {
                            target: "open"
                        },
                        open: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["setInitial", "computeSize", "invokeOnOpen"]
                        }]
                    }
                },
                closing: {
                    effects: ["trackExitAnimation"],
                    on: {
                        "controlled.close": {
                            target: "closed"
                        },
                        "controlled.open": {
                            target: "open"
                        },
                        open: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["setInitial", "invokeOnOpen"]
                        }],
                        close: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnExitComplete"]
                        }, {
                            target: "closed",
                            actions: ["setInitial", "computeSize", "invokeOnExitComplete"]
                        }],
                        "animation.end": {
                            target: "closed",
                            actions: ["invokeOnExitComplete", "clearInitial"]
                        }
                    }
                },
                open: {
                    effects: ["trackEnterAnimation"],
                    on: {
                        "controlled.close": {
                            target: "closing"
                        },
                        close: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closing",
                            actions: ["setInitial", "computeSize", "invokeOnClose"]
                        }],
                        "size.measure": {
                            actions: ["measureSize"]
                        },
                        "animation.end": {
                            actions: ["clearInitial"]
                        }
                    }
                }
            },
            implementations: {
                guards: {
                    isOpenControlled: e => {
                        let {
                            prop: t
                        } = e;
                        return void 0 != t("open")
                    }
                },
                effects: {
                    trackEnterAnimation: e => {
                        let t, {
                                send: n,
                                scope: i
                            } = e,
                            o = (0, a.raf)(() => {
                                let e = d(i);
                                if (!e) return;
                                let o = (0, a.getComputedStyle)(e).animationName;
                                if (!o || "none" === o) return void n({
                                    type: "animation.end"
                                });
                                let r = t => {
                                    (0, a.getEventTarget)(t) === e && n({
                                        type: "animation.end"
                                    })
                                };
                                e.addEventListener("animationend", r), t = () => {
                                    e.removeEventListener("animationend", r)
                                }
                            });
                        return () => {
                            o(), null == t || t()
                        }
                    },
                    trackExitAnimation: e => {
                        let t, {
                                send: n,
                                scope: i
                            } = e,
                            o = (0, a.raf)(() => {
                                let e = d(i);
                                if (!e) return;
                                let o = (0, a.getComputedStyle)(e).animationName;
                                if (!o || "none" === o) return void n({
                                    type: "animation.end"
                                });
                                let r = t => {
                                    (0, a.getEventTarget)(t) === e && n({
                                        type: "animation.end"
                                    })
                                };
                                e.addEventListener("animationend", r);
                                let l = (0, a.setStyle)(e, {
                                    animationFillMode: "forwards"
                                });
                                t = () => {
                                    e.removeEventListener("animationend", r), (0, a.nextTick)(() => l())
                                }
                            });
                        return () => {
                            o(), null == t || t()
                        }
                    },
                    trackTabbableElements: e => {
                        let {
                            scope: t,
                            prop: n
                        } = e;
                        if (!n("collapsedHeight") && !n("collapsedWidth")) return;
                        let i = d(t);
                        if (!i) return;
                        let o = () => {
                                let e = (0, a.getTabbables)(i).map(e => (0, a.setAttribute)(e, "inert", ""));
                                return () => {
                                    e.forEach(e => e())
                                }
                            },
                            r = o(),
                            l = (0, a.observeChildren)(i, {
                                callback() {
                                    r(), r = o()
                                }
                            });
                        return () => {
                            r(), l()
                        }
                    }
                },
                actions: {
                    setInitial: e => {
                        let {
                            context: t,
                            flush: a
                        } = e;
                        a(() => {
                            t.set("initial", !0)
                        })
                    },
                    clearInitial: e => {
                        let {
                            context: t
                        } = e;
                        t.set("initial", !1)
                    },
                    cleanupNode: e => {
                        let {
                            refs: t
                        } = e;
                        t.set("stylesRef", null)
                    },
                    measureSize: e => {
                        let {
                            context: t,
                            scope: a
                        } = e, n = d(a);
                        if (!n) return;
                        let {
                            height: i,
                            width: o
                        } = n.getBoundingClientRect();
                        t.set("size", {
                            height: i,
                            width: o
                        })
                    },
                    computeSize: e => {
                        var t;
                        let {
                            refs: n,
                            scope: i,
                            context: o
                        } = e;
                        null == (t = n.get("cleanup")) || t();
                        let r = (0, a.raf)(() => {
                            let e = d(i);
                            if (!e) return;
                            let t = e.hidden;
                            e.style.animationName = "none", e.style.animationDuration = "0s", e.hidden = !1;
                            let a = e.getBoundingClientRect();
                            o.set("size", {
                                height: a.height,
                                width: a.width
                            }), o.get("initial") && (e.style.animationName = "", e.style.animationDuration = ""), e.hidden = t
                        });
                        n.set("cleanup", r)
                    },
                    invokeOnOpen: e => {
                        var t;
                        let {
                            prop: a
                        } = e;
                        null == (t = a("onOpenChange")) || t({
                            open: !0
                        })
                    },
                    invokeOnClose: e => {
                        var t;
                        let {
                            prop: a
                        } = e;
                        null == (t = a("onOpenChange")) || t({
                            open: !1
                        })
                    },
                    invokeOnExitComplete: e => {
                        var t;
                        let {
                            prop: a
                        } = e;
                        null == (t = a("onExitComplete")) || t()
                    },
                    toggleVisibility: e => {
                        let {
                            prop: t,
                            send: a
                        } = e;
                        a({
                            type: t("open") ? "controlled.open" : "controlled.close"
                        })
                    }
                }
            }
        }),
        p = (0, o.createProps)()(["dir", "disabled", "getRootNode", "id", "ids", "collapsedHeight", "collapsedWidth", "onExitComplete", "onOpenChange", "defaultOpen", "open"]);
    (0, n.createSplitProps)(p), e.s(["anatomy", () => r, "connect", () => c, "machine", () => u])
}, 897547, e => {
    "use strict";
    let t = e => e,
        a = e => e,
        n = e => e,
        i = e => e,
        o = e => e,
        r = e => e,
        l = e => e,
        s = e => e,
        d = e => e;

    function c() {
        let e = e => e;
        return new Proxy(e, {
            get: () => e
        })
    }
    let u = c(),
        p = c(),
        g = e => e;
    e.s(["defineAnimationStyles", () => s, "defineConditions", () => t, "defineConfig", () => g, "defineGlobalStyles", () => o, "defineKeyframes", () => i, "defineLayerStyles", () => d, "defineRecipe", () => a, "defineSemanticTokens", () => p, "defineSlotRecipe", () => n, "defineStyle", () => r, "defineTextStyles", () => l, "defineTokens", () => u])
}]);

//# debugId=9674437b-c61f-3d6f-41d5-36ed262ca84c
//# sourceMappingURL=62d6a7cf224d42c9.js.map