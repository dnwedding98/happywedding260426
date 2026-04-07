;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "61664b65-b2c3-4596-3ebe-2bc86acb4aa5")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 647017, e => {
    "use strict";
    e.s([], 419401), e.i(419401);
    var r = e.i(483632);
    e.s([], 879715), e.i(879715);
    var t = e.i(30500),
        a = e.i(251570),
        i = e.i(173614),
        n = e.i(483591);
    let [o, s] = (0, n.createContext)({
        name: "MenuContext",
        hookName: "useMenuContext",
        providerName: "<MenuProvider />",
        strict: !1
    }), l = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, t.mergeProps)(n.getArrowProps(), e);
        return (0, r.jsx)(i.ark.div, { ...o,
            ref: a
        })
    });
    l.displayName = "MenuArrow";
    let u = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, t.mergeProps)(n.getArrowTipProps(), e);
        return (0, r.jsx)(i.ark.div, { ...o,
            ref: a
        })
    });
    u.displayName = "MenuArrowTip";
    var d = e.i(341061);
    let [c, p] = (0, n.createContext)({
        name: "MenuItemContext",
        hookName: "useMenuItemContext",
        providerName: "<MenuItemProvider />"
    }), [m, h] = (0, n.createContext)({
        name: "MenuItemPropsContext",
        hookName: "useMenuItemPropsContext",
        providerName: "<MenuItemPropsProvider />"
    }), g = (0, d.createSplitProps)(), v = (0, a.forwardRef)((e, a) => {
        let [n, o] = g(e, ["checked", "closeOnSelect", "disabled", "onCheckedChange", "value", "valueText"]), l = { ...n,
            type: "checkbox"
        }, u = s(), d = (0, t.mergeProps)(u.getOptionItemProps(l), o), p = u.getOptionItemState(l);
        return (0, r.jsx)(m, {
            value: l,
            children: (0, r.jsx)(c, {
                value: p,
                children: (0, r.jsx)(i.ark.div, { ...d,
                    ref: a
                })
            })
        })
    });
    v.displayName = "MenuCheckboxItem";
    var f = e.i(517913),
        C = e.i(139197);
    let x = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, C.usePresenceContext)(),
            l = (0, t.mergeProps)(n.getContentProps(), o.getPresenceProps(), e);
        return o.unmounted ? null : (0, r.jsx)(i.ark.div, { ...l,
            ref: (0, f.composeRefs)(o.ref, a)
        })
    });
    x.displayName = "MenuContent";
    let y = e => e.children(s()),
        _ = (0, a.forwardRef)((e, a) => {
            let n = s(),
                o = (0, t.mergeProps)(n.getContextTriggerProps(), e);
            return (0, r.jsx)(i.ark.button, { ...o,
                ref: a
            })
        });
    _.displayName = "MenuContextTrigger";
    let b = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, t.mergeProps)(n.getIndicatorProps(), e);
        return (0, r.jsx)(i.ark.div, { ...o,
            ref: a
        })
    });
    b.displayName = "MenuIndicator";
    let P = (0, d.createSplitProps)(),
        I = (0, a.forwardRef)((e, n) => {
            let [o, l] = P(e, ["closeOnSelect", "disabled", "value", "valueText", "onSelect"]), u = s(), d = (0, t.mergeProps)(u.getItemProps(o), l), p = u.getItemState(o);
            return (0, a.useEffect)(() => u.addItemListener({
                id: p.id,
                onSelect: o.onSelect
            }), [p.id, o.onSelect]), (0, r.jsx)(m, {
                value: o,
                children: (0, r.jsx)(c, {
                    value: p,
                    children: (0, r.jsx)(i.ark.div, { ...d,
                        ref: n
                    })
                })
            })
        });
    I.displayName = "MenuItem";
    let S = e => e.children(p()),
        [w, E] = (0, n.createContext)({
            name: "MenuItemGroupContext",
            hookName: "useMenuItemGroupContext",
            providerName: "<MenuItemGroupProvider />"
        }),
        T = (0, d.createSplitProps)(),
        R = (0, a.forwardRef)((e, n) => {
            let [o, l] = T(e, ["id"]), u = s(), d = {
                id: (0, a.useId)(),
                ...o
            }, c = (0, t.mergeProps)(u.getItemGroupProps(d), l);
            return (0, r.jsx)(w, {
                value: d,
                children: (0, r.jsx)(i.ark.div, { ...c,
                    ref: n
                })
            })
        });
    R.displayName = "MenuItemGroup";
    let A = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = E(),
            l = (0, t.mergeProps)(n.getItemGroupLabelProps({
                htmlFor: o.id
            }), e);
        return (0, r.jsx)(i.ark.div, { ...l,
            ref: a
        })
    });
    A.displayName = "MenuItemGroupLabel";
    let k = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = h(),
            l = (0, t.mergeProps)(n.getItemIndicatorProps(o), e);
        return (0, r.jsx)(i.ark.div, { ...l,
            ref: a
        })
    });
    k.displayName = "MenuItemIndicator";
    let F = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = h(),
            l = (0, t.mergeProps)(n.getItemTextProps(o), e);
        return (0, r.jsx)(i.ark.div, { ...l,
            ref: a
        })
    });
    F.displayName = "MenuItemText";
    let M = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, t.mergeProps)(n.getPositionerProps(), e);
        return (0, C.usePresenceContext)().unmounted ? null : (0, r.jsx)(i.ark.div, { ...o,
            ref: a
        })
    });
    M.displayName = "MenuPositioner";
    let j = (0, d.createSplitProps)(),
        N = (0, a.forwardRef)((e, a) => {
            let [n, o] = j(e, ["closeOnSelect", "disabled", "value", "valueText"]), l = s(), u = E(), d = { ...n,
                checked: u.value === n.value,
                type: "radio",
                onCheckedChange: () => {
                    var e;
                    return null == (e = u.onValueChange) ? void 0 : e.call(u, {
                        value: n.value
                    })
                }
            }, p = (0, t.mergeProps)(l.getOptionItemProps(d), o), h = l.getOptionItemState(d);
            return (0, r.jsx)(m, {
                value: d,
                children: (0, r.jsx)(c, {
                    value: h,
                    children: (0, r.jsx)(i.ark.div, { ...p,
                        ref: a
                    })
                })
            })
        });
    N.displayName = "MenuRadioItem";
    let U = (0, d.createSplitProps)(),
        O = (0, a.forwardRef)((e, n) => {
            let [o, l] = U(e, ["id", "onValueChange", "value"]), u = s(), d = {
                id: (0, a.useId)(),
                ...o
            }, c = (0, t.mergeProps)(u.getItemGroupProps({
                id: d.id
            }), l);
            return (0, r.jsx)(w, {
                value: d,
                children: (0, r.jsx)(i.ark.div, { ...c,
                    ref: n
                })
            })
        });
    O.displayName = "MenuRadioItemGroup";
    let G = e => {
        let r = (0, a.useRef)(e),
            t = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
            r.current = e
        }), (0, a.useEffect)(() => {
            !0 !== t.current && (t.current = !0, r.current())
        }, [])
    };
    var L = e.i(185676),
        D = e.i(358765),
        B = e.i(964358),
        q = e.i(501829),
        K = e.i(520036),
        Q = e.i(904849);
    let [V, z] = (0, n.createContext)({
        name: "MenuMachineContext",
        hookName: "useMenuMachineContext",
        providerName: "<MenuMachineProvider />",
        strict: !1
    }), [H, W] = (0, n.createContext)({
        name: "MenuMachineContext",
        hookName: "useMenuMachineContext",
        providerName: "<MenuMachineProvider />",
        strict: !1
    }), Y = (0, d.createSplitProps)(), X = e => {
        let [i, n] = (0, L.splitPresenceProps)(e), [l, u] = Y(n, ["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "onSelect", "open", "positioning", "typeahead"]), d = s(), c = z(), {
            api: p,
            service: m
        } = (e => {
            let r = (0, a.useId)(),
                {
                    getRootNode: t
                } = (0, K.useEnvironmentContext)(),
                {
                    dir: i
                } = (0, Q.useLocaleContext)(),
                n = {
                    id: r,
                    dir: i,
                    getRootNode: t,
                    ...e
                },
                o = (0, q.useMachine)(B.machine, n);
            return {
                api: B.connect(o, q.normalizeProps),
                service: o
            }
        })(l), h = (0, D.usePresence)((0, t.mergeProps)({
            present: p.open
        }, i));
        G(() => {
            !c || d && (d.setChild(m), p.setParent(c))
        });
        let g = (0, a.useCallback)(() => null == d ? void 0 : d.getTriggerItemProps(p), [p, d]);
        return (0, r.jsx)(H, {
            value: g,
            children: (0, r.jsx)(V, {
                value: m,
                children: (0, r.jsx)(o, {
                    value: p,
                    children: (0, r.jsx)(C.PresenceProvider, {
                        value: h,
                        ...u
                    })
                })
            })
        })
    }, Z = e => {
        let i = s(),
            n = z(),
            [l, {
                value: u,
                children: d
            }] = (0, L.splitPresenceProps)(e),
            {
                api: c,
                service: p
            } = u,
            m = (0, D.usePresence)((0, t.mergeProps)({
                present: c.open
            }, l));
        G(() => {
            !n || i && (i.setChild(p), c.setParent(n))
        });
        let h = (0, a.useCallback)(() => null == i ? void 0 : i.getTriggerItemProps(c), [c, i]);
        return (0, r.jsx)(H, {
            value: h,
            children: (0, r.jsx)(V, {
                value: p,
                children: (0, r.jsx)(o, {
                    value: c,
                    children: (0, r.jsx)(C.PresenceProvider, {
                        value: m,
                        children: d
                    })
                })
            })
        })
    }, J = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, t.mergeProps)(n.getSeparatorProps(), e);
        return (0, r.jsx)(i.ark.hr, { ...o,
            ref: a
        })
    });
    J.displayName = "MenuSeparator";
    let $ = (0, a.forwardRef)((e, a) => {
        let n = s(),
            o = (0, C.usePresenceContext)(),
            l = (0, t.mergeProps)({ ...n.getTriggerProps(),
                "aria-controls": o.unmounted ? void 0 : n.getTriggerProps()["aria-controls"]
            }, e);
        return (0, r.jsx)(i.ark.button, { ...l,
            ref: a
        })
    });
    $.displayName = "MenuTrigger";
    let ee = (0, a.forwardRef)((e, a) => {
        var n;
        let o = W(),
            s = (0, t.mergeProps)(null != (n = null == o ? void 0 : o()) ? n : {}, e);
        return (0, r.jsx)(m, {
            value: {
                value: s["data-value"]
            },
            children: (0, r.jsx)(i.ark.div, { ...s,
                ref: a
            })
        })
    });
    ee.displayName = "MenuTriggerItem", e.s(["Arrow", () => l, "ArrowTip", () => u, "CheckboxItem", () => v, "Content", () => x, "Context", () => y, "ContextTrigger", () => _, "Indicator", () => b, "Item", () => I, "ItemContext", () => S, "ItemGroup", () => R, "ItemGroupLabel", () => A, "ItemIndicator", () => k, "ItemText", () => F, "Positioner", () => M, "RadioItem", () => N, "RadioItemGroup", () => O, "Root", () => X, "RootProvider", () => Z, "Separator", () => J, "Trigger", () => $, "TriggerItem", () => ee], 716024);
    var er = e.i(716024),
        er = er,
        et = e.i(664288),
        ea = e.i(613291);
    let {
        withRootProvider: ei,
        withContext: en,
        useStyles: eo,
        PropsProvider: es
    } = (0, et.createSlotRecipeContext)({
        key: "menu"
    }), el = ei(er.RootProvider), eu = ei(er.Root, {
        defaultProps: {
            lazyMount: !0,
            unmountOnExit: !0
        }
    }), ed = en(er.Trigger, "trigger", {
        forwardAsChild: !0
    }), ec = en(er.ContextTrigger, "contextTrigger", {
        forwardAsChild: !0
    }), ep = en(er.Positioner, "positioner", {
        forwardAsChild: !0
    }), em = en(er.Separator, "separator", {
        forwardAsChild: !0
    }), eh = en(er.Content, "content", {
        forwardAsChild: !0
    }), eg = en(er.ArrowTip, "arrowTip", {
        forwardAsChild: !0
    }), ev = en(er.Arrow, "arrow", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, r.jsx)(eg, {})
        }
    }), ef = en(er.Indicator, "indicator", {
        forwardAsChild: !0
    }), eC = en(er.ItemGroup, "itemGroup", {
        forwardAsChild: !0
    }), ex = en(er.ItemGroupLabel, "itemGroupLabel", {
        forwardAsChild: !0
    }), ey = en(er.Item, "item", {
        forwardAsChild: !0
    }), e_ = en(er.TriggerItem, "item", {
        forwardAsChild: !0
    }), eb = en(er.ItemText, "itemText", {
        forwardAsChild: !0
    }), eP = en("kbd", "itemCommand"), eI = en(er.ItemIndicator, "itemIndicator", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, r.jsx)(ea.CheckIcon, {
                boxSize: "4"
            })
        }
    }), eS = en(er.CheckboxItem, "item", {
        forwardAsChild: !0
    }), ew = en(er.RadioItemGroup, "itemGroup", {
        forwardAsChild: !0
    }), eE = en(er.RadioItem, "item", {
        forwardAsChild: !0
    }), eT = er.Context, eR = er.ItemContext;
    e.s(["Arrow", () => ev, "ArrowTip", () => eg, "CheckboxItem", () => eS, "Content", () => eh, "Context", () => eT, "ContextTrigger", () => ec, "Indicator", () => ef, "Item", () => ey, "ItemCommand", () => eP, "ItemContext", () => eR, "ItemGroup", () => eC, "ItemGroupLabel", () => ex, "ItemIndicator", () => eI, "ItemText", () => eb, "Positioner", () => ep, "RadioItem", () => eE, "RadioItemGroup", () => ew, "Root", () => eu, "RootPropsProvider", () => es, "RootProvider", () => el, "Separator", () => em, "Trigger", () => ed, "TriggerItem", () => e_], 471139);
    var eA = e.i(471139);
    e.s(["Menu", 0, eA], 647017)
}, 656488, e => {
    "use strict";
    var r = e.i(251570);

    function t(e, t) {
        let [a, i] = (0, r.useState)(e);
        return (0, r.useEffect)(() => {
            let r = setTimeout(() => {
                i(e)
            }, t);
            return () => {
                clearTimeout(r)
            }
        }, [e, t]), a
    }
    e.s(["useDebounce", () => t])
}, 634378, e => {
    "use strict";
    var r = e.i(483632);
    e.s([], 960896), e.i(960896);
    let [t, a] = (0, e.i(483591).createContext)({
        name: "SwitchContext",
        hookName: "useSwitchContext",
        providerName: "<SwitchProvider />"
    }), i = e => e.children(a());
    var n = e.i(30500),
        o = e.i(251570),
        s = e.i(173614);
    let l = (0, o.forwardRef)((e, t) => {
        let i = a(),
            o = (0, n.mergeProps)(i.getControlProps(), e);
        return (0, r.jsx)(s.ark.span, { ...o,
            ref: t
        })
    });
    l.displayName = "SwitchControl";
    var u = e.i(416574);
    let d = (0, o.forwardRef)((e, t) => {
        let i = a(),
            o = (0, n.mergeProps)(i.getHiddenInputProps(), e),
            l = (0, u.useFieldContext)();
        return (0, r.jsx)(s.ark.input, {
            "aria-describedby": null == l ? void 0 : l.ariaDescribedby,
            ...o,
            ref: t
        })
    });
    d.displayName = "SwitchHiddenInput";
    let c = (0, o.forwardRef)((e, t) => {
        let i = a(),
            o = (0, n.mergeProps)(i.getLabelProps(), e);
        return (0, r.jsx)(s.ark.span, { ...o,
            ref: t
        })
    });
    c.displayName = "SwitchLabel";
    var p = e.i(341061),
        m = e.i(501829),
        h = e.i(727618),
        g = e.i(520036),
        v = e.i(904849);
    let f = (0, p.createSplitProps)(),
        C = (0, o.forwardRef)((e, a) => {
            let [i, l] = f(e, ["checked", "defaultChecked", "disabled", "form", "id", "ids", "invalid", "label", "name", "onCheckedChange", "readOnly", "required", "value"]), d = (e => {
                let r = (0, o.useId)(),
                    {
                        getRootNode: t
                    } = (0, g.useEnvironmentContext)(),
                    {
                        dir: a
                    } = (0, v.useLocaleContext)(),
                    i = (0, u.useFieldContext)(),
                    n = {
                        id: r,
                        ids: {
                            label: null == i ? void 0 : i.ids.label,
                            hiddenInput: null == i ? void 0 : i.ids.control
                        },
                        dir: a,
                        disabled: null == i ? void 0 : i.disabled,
                        readOnly: null == i ? void 0 : i.readOnly,
                        invalid: null == i ? void 0 : i.invalid,
                        required: null == i ? void 0 : i.required,
                        getRootNode: t,
                        ...e
                    },
                    s = (0, m.useMachine)(h.machine, n);
                return h.connect(s, m.normalizeProps)
            })(i), c = (0, n.mergeProps)(d.getRootProps(), l);
            return (0, r.jsx)(t, {
                value: d,
                children: (0, r.jsx)(s.ark.label, { ...c,
                    ref: a
                })
            })
        });
    C.displayName = "SwitchRoot";
    let x = (0, p.createSplitProps)(),
        y = (0, o.forwardRef)((e, a) => {
            let [{
                value: i
            }, o] = x(e, ["value"]), l = (0, n.mergeProps)(i.getRootProps(), o);
            return (0, r.jsx)(t, {
                value: i,
                children: (0, r.jsx)(s.ark.label, { ...l,
                    ref: a
                })
            })
        });
    y.displayName = "SwitchRootProvider";
    let _ = (0, o.forwardRef)((e, t) => {
        let i = a(),
            o = (0, n.mergeProps)(i.getThumbProps(), e);
        return (0, r.jsx)(s.ark.span, { ...o,
            ref: t
        })
    });
    _.displayName = "SwitchThumb", e.s(["Context", () => i, "Control", () => l, "HiddenInput", () => d, "Label", () => c, "Root", () => C, "RootProvider", () => y, "Thumb", () => _], 402905);
    var b = e.i(402905),
        b = b,
        P = e.i(664288),
        I = e.i(489198),
        S = e.i(170905);
    let {
        withProvider: w,
        withContext: E,
        useStyles: T,
        PropsProvider: R
    } = (0, P.createSlotRecipeContext)({
        key: "switch"
    }), A = w(b.RootProvider, "root", {
        forwardAsChild: !0
    }), k = w(b.Root, "root", {
        forwardAsChild: !0
    }), F = E(b.Label, "label", {
        forwardAsChild: !0
    }), M = E(b.Thumb, "thumb", {
        forwardAsChild: !0
    }), j = E(b.Control, "control", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, r.jsx)(M, {})
        }
    }), N = (0, o.forwardRef)(function(e, t) {
        let i = a(),
            n = T(),
            {
                fallback: o,
                children: s,
                unstyled: l,
                ...u
            } = e;
        return (0, r.jsx)(I.chakra.span, {
            ref: t,
            "data-checked": (0, S.dataAttr)(i.checked),
            ...u,
            css: [l ? void 0 : n.indicator, e.css],
            children: i.checked ? s : o
        })
    }), U = (0, o.forwardRef)(function(e, t) {
        let i = a(),
            {
                fallback: n,
                children: o,
                ...s
            } = e;
        return (0, r.jsx)(I.chakra.span, {
            ref: t,
            "data-checked": (0, S.dataAttr)(i.checked),
            ...s,
            children: i.checked ? o : n
        })
    }), O = b.Context, G = b.HiddenInput;
    e.s(["SwitchContext", () => O, "SwitchControl", () => j, "SwitchHiddenInput", () => G, "SwitchIndicator", () => N, "SwitchLabel", () => F, "SwitchPropsProvider", () => R, "SwitchRoot", () => k, "SwitchRootProvider", () => A, "SwitchThumb", () => M, "SwitchThumbIndicator", () => U], 634378)
}, 370442, e => {
    "use strict";
    e.s([], 193499), e.i(193499);
    var r = e.i(634378);
    e.s(["Context", () => r.SwitchContext, "Control", () => r.SwitchControl, "HiddenInput", () => r.SwitchHiddenInput, "Indicator", () => r.SwitchIndicator, "Label", () => r.SwitchLabel, "PropsProvider", () => r.SwitchPropsProvider, "Root", () => r.SwitchRoot, "RootProvider", () => r.SwitchRootProvider, "Thumb", () => r.SwitchThumb, "ThumbIndicator", () => r.SwitchThumbIndicator], 661102);
    var t = e.i(661102);
    e.s(["Switch", 0, t], 370442)
}, 814025, e => {
    "use strict";
    var r = e.i(840171),
        t = e.i(816941),
        a = e.i(940948),
        i = e.i(391265),
        n = e.i(649725),
        o = e.i(334863),
        s = e.i(813753),
        l = e.i(836271);
    let u = {
            all: ["user-features"],
            lists: () => [...u.all, "list"],
            list: e => [...u.lists(), e],
            userFeatures: e => [...u.all, "user", e],
            userActiveFeatures: e => [...u.all, "user", e, "active"],
            userSummary: e => [...u.all, "user", e, "summary"],
            details: () => [...u.all, "detail"],
            detail: e => [...u.details(), e],
            userFeature: e => [...u.all, "feature", e]
        },
        d = async () => {
            let e = await n.default.get("/user-features/my-features-keys");
            return e.data.data || e.data
        },
        c = async e => {
            let r = await n.default.get("/admin/user-features/user/".concat(e));
            return r.data.data || r.data
        },
        p = async e => {
            let r = await n.default.get("/admin/user-features/user/".concat(e, "/summary"));
            return r.data.data || r.data
        },
        m = async e => {
            let r = await n.default.post("/admin/user-features", e);
            return r.data.data || r.data
        },
        h = async (e, r) => {
            let t = await n.default.patch("/admin/user-features/".concat(e), r);
            return t.data.data || t.data
        },
        g = async e => {
            let r = await n.default.patch("/admin/user-features/".concat(e, "/toggle"));
            return r.data.data || r.data
        },
        v = async e => {
            await n.default.delete("/admin/user-features/".concat(e))
        },
        f = async (e, r) => {
            let t = await n.default.post("/admin/user-features/user/".concat(e, "/add-plan-features"), r);
            return t.data.data || t.data
        };
    e.s(["useAddPlanFeaturesToUser", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, r.useMutation)({
            mutationFn: e => {
                let {
                    userId: r,
                    data: t
                } = e;
                return f(r, t)
            },
            onSuccess: (r, t) => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(t.userId)
                }), o.toaster.create({
                    title: "Thành công",
                    description: "Đã thêm ".concat(r.length, " tính năng từ plan cho user"),
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                o.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi thêm tính năng từ plan cho user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useCreateUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, r.useMutation)({
            mutationFn: m,
            onSuccess: r => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(r.userId)
                }), o.toaster.create({
                    title: "Thành công",
                    description: "Thêm tính năng cho user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: e => {
                var r;
                let t = (null == (r = e.response) ? void 0 : r.status) === 409 ? "User đã có tính năng này. Vui lòng kiểm tra lại." : "Có lỗi xảy ra khi thêm tính năng cho user";
                o.toaster.create({
                    title: "Lỗi",
                    description: t,
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useDeleteUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, r.useMutation)({
            mutationFn: v,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: u.lists()
                }), o.toaster.create({
                    title: "Thành công",
                    description: "Xóa tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                o.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi xóa tính năng user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useGetAllUserFeatures", 0, () => {
        let e = (0, i.useSelector)(s.selectAuth);
        return (0, t.useQuery)({
            queryKey: ["user-features", "all-keys"],
            queryFn: () => d(),
            staleTime: 3e5,
            retry: !1,
            enabled: (0, l.isAuthenticated)(e)
        })
    }, "useGetUserFeatures", 0, e => (0, t.useQuery)({
        queryKey: u.userFeatures(e),
        queryFn: () => c(e),
        enabled: !!e,
        staleTime: 3e5,
        retry: !1
    }), "useGetUserFeaturesSummary", 0, e => (0, t.useQuery)({
        queryKey: u.userSummary(e),
        queryFn: () => p(e),
        enabled: !!e,
        staleTime: 3e5
    }), "useToggleUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, r.useMutation)({
            mutationFn: g,
            onSuccess: r => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(r.userId)
                }), o.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật trạng thái tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                o.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi cập nhật trạng thái tính năng user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useUpdateUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, r.useMutation)({
            mutationFn: e => {
                let {
                    id: r,
                    data: t
                } = e;
                return h(r, t)
            },
            onSuccess: r => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(r.userId)
                }), o.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: e => {
                var r;
                let t = (null == (r = e.response) ? void 0 : r.status) === 409 ? "User đã có tính năng này. Vui lòng kiểm tra lại." : "Có lỗi xảy ra khi cập nhật tính năng user";
                o.toaster.create({
                    title: "Lỗi",
                    description: t,
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }])
}, 952667, e => {
    "use strict";
    var r = e.i(483632),
        t = e.i(564668),
        a = e.i(536072),
        i = e.i(215669),
        n = e.i(878262),
        o = e.i(51715),
        s = e.i(791089),
        l = e.i(118190),
        u = e.i(251570);
    e.i(308972);
    var d = e.i(445979),
        c = e.i(569210),
        p = e.i(649760),
        m = e.i(441985),
        h = e.i(618110),
        g = e.i(819060),
        v = e.i(788318),
        f = e.i(676525),
        C = e.i(79663),
        x = e.i(397709),
        y = e.i(10027),
        _ = e.i(76e3),
        b = e.i(940948);
    let P = {
        basic: {
            borderColor: {
                base: "gray.300",
                _dark: "gray.600"
            },
            badgeColor: {
                base: "gray.500",
                _dark: "gray.400"
            },
            highlightBorder: {
                base: "gray.400",
                _dark: "gray.500"
            },
            highlightShadow: "none",
            highlightGlow: "none"
        },
        pro: {
            borderColor: {
                base: "blue.400",
                _dark: "blue.500"
            },
            badgeColor: {
                base: "blue.500",
                _dark: "blue.400"
            },
            highlightBorder: {
                base: "blue.500",
                _dark: "blue.400"
            },
            highlightShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            highlightGlow: "0 0 30px rgba(59, 130, 246, 0.5)"
        },
        vip: {
            borderColor: {
                base: "yellow.500",
                _dark: "yellow.400"
            },
            badgeColor: {
                base: "yellow.500",
                _dark: "yellow.400"
            },
            highlightBorder: {
                base: "yellow.400",
                _dark: "yellow.500"
            },
            highlightShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
            highlightGlow: "0 0 30px rgba(245, 158, 11, 0.5)"
        }
    };
    e.s(["default", 0, e => {
        let {
            isOpen: I,
            onClose: S,
            featureKey: w,
            featureName: E,
            zIndex: T,
            hideFeaturePurchase: R = !1
        } = e, {
            t: A
        } = (0, d.useTranslation)(), k = (0, b.useQueryClient)(), [F, M] = (0, u.useState)("upgrade"), [j, N] = (0, u.useState)(!1), [U, O] = (0, u.useState)(null), [G, L] = (0, u.useState)(!1), [D, B] = (0, u.useState)(!1), [q, K] = (0, u.useState)(null), {
            data: Q,
            isLoading: V
        } = (0, y.useGetPublicPlans)(), {
            data: z
        } = (0, C.useGetCurrentSubscription)(), {
            data: H
        } = (0, x.useGetAvailableFeatures)(), {
            formatTimeTo: W
        } = (0, _.useDiscountCountdown)(), Y = (0, u.useMemo)(() => {
            if (!H) return new Set;
            let e = Array.isArray(w) ? w : [w],
                r = new Set;
            return ["basic", "pro", "vip"].forEach(t => {
                let a = H[t] || [];
                e.some(e => a.some(r => r.key === e)) && r.add(t)
            }), r
        }, [H, w]), X = e => e.toLocaleString("vi-VN") + "đ", Z = e => {
            O(e), N(!0)
        }, J = {
            basic: {
                borderColor: "gray.300",
                badgeColor: "gray.500",
                buttonColor: "gray.500",
                features: [A("pricing.features_list.basic_designer"), A("pricing.features_list.public_time_6m"), A("pricing.features_list.photos_basic"), A("pricing.features_list.features_basic"), A("pricing.features_list.unlimited_invites")]
            },
            pro: {
                isPopular: !0,
                borderColor: "blue.500",
                badgeColor: "blue.500",
                buttonColor: "blue.500",
                features: [A("pricing.features_list.advanced_designer"), A("pricing.features_list.public_time_2y"), A("pricing.features_list.photos_advanced"), A("pricing.features_list.features_advanced"), A("pricing.features_list.use_pro")]
            },
            vip: {
                borderColor: "#F59E0B",
                badgeColor: "#F59E0B",
                buttonColor: "#F59E0B",
                showVipLogo: !0,
                features: [A("pricing.features_list.comprehensive_designer"), A("pricing.features_list.public_time_lifetime"), A("pricing.features_list.photos_max"), A("pricing.features_list.features_unlock_all"), A("pricing.features_list.use_vip")]
            }
        }, $ = (null == Q ? void 0 : Q.map(e => {
            var r, t, a;
            let i, n = J[e.tier],
                o = null != (r = e.isCurrentPlan) ? r : (i = e.tier, (null == z ? void 0 : z.tier) === i && (null == z ? void 0 : z.status) === "active"),
                s = null != (t = e.canPurchase) && t,
                l = o && null != (a = e.canAddDesignRequest) && a,
                u = Y.has(e.tier),
                d = e.originalPriceCents ? X(e.originalPriceCents) : void 0,
                c = !!(e.originalPriceCents && e.priceCents < e.originalPriceCents),
                p = c && e.originalPriceCents ? Math.round((e.originalPriceCents - e.priceCents) / e.originalPriceCents * 100) : void 0,
                m = c ? W(e.discountEndsAt) : null;
            return {
                plan: e.tier,
                price: "basic" === e.tier ? "Free" : X(e.priceCents),
                isCurrent: o,
                isDisabled: !(s || l),
                apiPlan: e,
                canAddDesignOnly: l,
                originalPrice: d,
                discountPercent: p,
                countdown: null != m ? m : void 0,
                hasFeature: u,
                ...n
            }
        })) || [];
        return (0, r.jsxs)(n.Portal, {
            children: [(0, r.jsx)(p.default, {
                isOpen: I,
                onClose: S,
                title: A("common:featureUnlockModal.title", "Mở khóa tính năng"),
                maxWidth: "1100px",
                maxHeight: "80vh",
                zIndex: T,
                children: (0, r.jsxs)(l.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: [(0, r.jsxs)(i.HStack, {
                        gap: 2,
                        justify: "center",
                        flexWrap: "wrap",
                        children: [(0, r.jsxs)(f.default, {
                            variant: "upgrade" === F ? "rose" : "outline",
                            size: "sm",
                            onClick: () => M("upgrade"),
                            children: [(0, r.jsx)(c.FaCrown, {}), (0, r.jsx)(s.Text, {
                                display: {
                                    base: "none",
                                    sm: "inline"
                                },
                                ml: 1,
                                children: A("common:featureUnlockModal.tabUpgrade", "Nâng cấp gói")
                            }), (0, r.jsx)(s.Text, {
                                display: {
                                    base: "inline",
                                    sm: "none"
                                },
                                ml: 1,
                                children: A("common:featureUnlockModal.tabUpgradeShort", "Nâng cấp")
                            })]
                        }), !R && (0, r.jsxs)(f.default, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => L(!0),
                            children: [(0, r.jsx)(c.FaShoppingCart, {}), (0, r.jsx)(s.Text, {
                                display: {
                                    base: "none",
                                    sm: "inline"
                                },
                                ml: 1,
                                children: A("common:featureUnlockModal.tabBuyFeature", "Mua riêng tính năng")
                            }), (0, r.jsx)(s.Text, {
                                display: {
                                    base: "inline",
                                    sm: "none"
                                },
                                ml: 1,
                                children: A("common:featureUnlockModal.tabBuyFeatureShort", "Mua riêng")
                            })]
                        })]
                    }), "upgrade" === F && (0, r.jsxs)(t.Box, {
                        children: [(0, r.jsx)(s.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.500",
                                _dark: "gray.400"
                            },
                            textAlign: "center",
                            mb: 4,
                            children: A("common:featureUnlockModal.upgradeDescription", "Chọn gói phù hợp để mở khóa nhiều tính năng")
                        }), V ? (0, r.jsx)(t.Box, {
                            textAlign: "center",
                            py: 8,
                            children: (0, r.jsx)(o.Spinner, {
                                size: "lg"
                            })
                        }) : (0, r.jsx)(a.Grid, {
                            templateColumns: {
                                base: "1fr",
                                md: "repeat(3, 1fr)"
                            },
                            gap: 4,
                            alignItems: "stretch",
                            children: $.map(e => {
                                let a = P[e.plan],
                                    i = e.hasFeature,
                                    n = $.some(e => e.hasFeature) && !i;
                                return (0, r.jsxs)(t.Box, {
                                    h: "full",
                                    position: "relative",
                                    borderRadius: "2xl",
                                    boxShadow: i ? a.highlightShadow : "none",
                                    transition: "all 0.3s ease",
                                    opacity: n ? .5 : 1,
                                    transform: i ? "scale(1.02)" : "scale(1)",
                                    filter: n ? "grayscale(30%)" : "none",
                                    _hover: {
                                        boxShadow: i ? a.highlightGlow : "sm",
                                        opacity: 1,
                                        filter: "none",
                                        transform: i ? "scale(1.04)" : "scale(1.02)"
                                    },
                                    children: [i && (0, r.jsxs)(t.Box, {
                                        position: "absolute",
                                        top: -3,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        zIndex: 10,
                                        bg: "vip" === e.plan ? "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" : "pro" === e.plan ? "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)" : {
                                            base: "gray.500",
                                            _dark: "gray.400"
                                        },
                                        color: "white",
                                        px: 3,
                                        py: 1,
                                        borderRadius: "full",
                                        fontSize: "xs",
                                        fontWeight: "semibold",
                                        boxShadow: "vip" === e.plan ? "0 2px 8px rgba(245, 158, 11, 0.4)" : "pro" === e.plan ? "0 2px 8px rgba(59, 130, 246, 0.4)" : "sm",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        children: ["vip" === e.plan ? (0, r.jsx)(c.FaCrown, {
                                            size: 10
                                        }) : "pro" === e.plan ? (0, r.jsx)(c.FaStar, {
                                            size: 10
                                        }) : null, A("common:featureUnlockModal.hasFeature", "Có tính năng này")]
                                    }), (0, r.jsx)(v.default, { ...e,
                                        onSelect: () => {
                                            var r, t;
                                            return r = e.plan, t = e.apiPlan, void(e.isDisabled || "basic" !== r && Z(t))
                                        },
                                        onViewDetails: () => {
                                            K(e.plan), B(!0)
                                        }
                                    })]
                                }, e.plan)
                            })
                        })]
                    })]
                })
            }), (0, r.jsx)(g.default, {
                isOpen: j,
                onClose: () => N(!1),
                selectedPlan: U,
                zIndex: T ? T + 1 : void 0
            }), (0, r.jsx)(m.default, {
                isOpen: G,
                onClose: () => L(!1),
                onFeaturePurchase: e => {
                    k.invalidateQueries({
                        queryKey: ["user-features", "all-keys"]
                    }), S()
                },
                initialSelectedFeatures: Array.isArray(w) ? w : [w],
                zIndex: T ? T + 1 : void 0
            }), (0, r.jsx)(h.default, {
                isOpen: D,
                onClose: () => B(!1),
                plan: q,
                onBuyFeatures: () => {
                    B(!1), L(!0)
                },
                onUpgrade: () => {
                    if (q) {
                        let e = $.find(e => e.plan === q);
                        e && (B(!1), Z(e.apiPlan))
                    }
                },
                zIndex: T ? T + 1 : void 0
            })]
        })
    }])
}, 469503, e => {
    "use strict";
    e.s(["FEATURE_ANALYTICS", 0, "analytics", "FEATURE_BACKGROUND_MUSIC_SETTINGS_VIP", 0, "background_music_settings_vip", "FEATURE_CHANGE_TEMPLATE", 0, "change_template", "FEATURE_COUNTUP_TIMER", 0, "countup_timer", "FEATURE_CUSTOM_COLORS_FONTS", 0, "custom_colors_fonts", "FEATURE_CUSTOM_COLORS_FONT_ADVANCE", 0, "custom_colors_font_advance", "FEATURE_CUSTOM_DOMAIN", 0, "custom_domain", "FEATURE_CUSTOM_QRCODE_STYLE", 0, "custom_qrcode_style", "FEATURE_CUSTOM_VISUAL_EFFECTS", 0, "custom_visual_effects", "FEATURE_CUSTOM_VISUAL_EFFECTS_ADVANCE", 0, "custom_visual_effects_advance", "FEATURE_ELEMENT_HTML_BLOCK_BASIC", 0, "element_html_block_basic", "FEATURE_EMAIL_REMINDERS", 0, "email_reminders", "FEATURE_LAYOUT_BLOCK_REORDER", 0, "layout_block_reorder", "FEATURE_LAYOUT_BLOCK_REORDER_BASIC", 0, "layout_block_reorder_basic", "FEATURE_MAP_BASIC", 0, "map_basic", "FEATURE_OPENING_EFFECT", 0, "opening_effect", "FEATURE_PERSONALIZED_INVITES", 0, "personalized_invites", "FEATURE_PERSONALIZED_INVITES_SEO", 0, "personalized_invites_seo", "FEATURE_PHOTOBOOK", 0, "photobook", "FEATURE_POPUP_BASIC", 0, "popup_basic", "FEATURE_REMOVE_MEWEDDING_LOGO", 0, "remove_mewedding_logo", "FEATURE_RSVP_GUEST_MANAGEMENT", 0, "rsvp_guest_management", "FEATURE_SEO_SETTINGS", 0, "seo_settings", "FEATURE_SEO_SETTINGS_VIP", 0, "seo_settings_vip", "FEATURE_UPLOAD_WEDDING_VIDEO", 0, "upload_wedding_video", "FEATURE_WEDDING_REMINDERS", 0, "wedding_reminders", "FEATURE_WISHES_MANAGEMENT", 0, "wishes_management"])
}, 254481, e => {
    "use strict";
    var r = e.i(814025),
        t = e.i(251570),
        a = e.i(391265),
        i = e.i(813753),
        n = e.i(836271);

    function o() {
        var e;
        let o = (0, a.useSelector)(i.selectAuth),
            {
                data: s = [],
                isLoading: l,
                error: u
            } = (0, r.useGetAllUserFeatures)(),
            d = (0, t.useMemo)(() => e => {
                var r;
                return !!(0, n.isFeatureLockBypassRole)(null == o || null == (r = o.user) ? void 0 : r.role) || s.includes(e)
            }, [null == o || null == (e = o.user) ? void 0 : e.role, s]);
        return {
            userFeatures: s,
            isLoading: l,
            error: u,
            hasFeature: d
        }
    }

    function s(e) {
        let {
            hasFeature: r
        } = o();
        return (0, t.useMemo)(() => e.reduce((e, t) => (e[t] = r(t), e), {}), [e, r])
    }

    function l(e) {
        let {
            hasFeature: r
        } = o();
        return r(e)
    }
    e.s(["useFeature", () => l, "useFeatures", () => s])
}]);

//# debugId=61664b65-b2c3-4596-3ebe-2bc86acb4aa5
//# sourceMappingURL=2fa4bb029c607584.js.map