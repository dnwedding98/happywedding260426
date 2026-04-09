;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f0d6bc4c-8433-eac6-7b7a-da19be37d2f5")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 188364, e => {
    "use strict";
    e.s([], 311435), e.i(311435);
    var t = e.i(483632);
    e.s([], 556922), e.i(556922);
    var r = e.i(483591);
    let [a, i] = (0, r.createContext)({
        name: "CheckboxContext",
        hookName: "useCheckboxContext",
        providerName: "<CheckboxProvider />"
    }), n = e => e.children(i());
    var l = e.i(30500),
        s = e.i(251570),
        o = e.i(173614);
    let d = (0, s.forwardRef)((e, r) => {
        let a = i(),
            n = (0, l.mergeProps)(a.getControlProps(), e);
        return (0, t.jsx)(o.ark.div, { ...n,
            ref: r
        })
    });
    d.displayName = "CheckboxControl";
    var c = e.i(341061),
        u = e.i(131825),
        p = e.i(345070);
    let [h, g] = (0, r.createContext)({
        name: "CheckboxGroupContext",
        hookName: "useCheckboxGroupContext",
        providerName: "<CheckboxGroupProvider />",
        strict: !1
    }), y = (0, c.createSplitProps)(), x = (0, s.forwardRef)((e, r) => {
        let [a, i] = y(e, ["defaultValue", "value", "onValueChange", "disabled", "invalid", "readOnly", "name"]), n = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                {
                    defaultValue: t,
                    value: r,
                    onValueChange: a,
                    disabled: i,
                    readOnly: n,
                    name: l,
                    invalid: o
                } = e,
                d = !(i || n),
                [c, u] = function(e) {
                    let {
                        value: t,
                        onChange: r,
                        defaultValue: a
                    } = e, [i, n] = (0, s.useState)(a), l = void 0 !== t;
                    return [l ? t : i, (0, s.useCallback)(e => (l || n(e), null == r ? void 0 : r(e)), [l, r])]
                }({
                    value: r,
                    defaultValue: t || [],
                    onChange: (0, p.useEvent)(a, {
                        sync: !0
                    })
                }),
                h = e => c.some(t => String(t) === String(e)),
                g = e => {
                    h(e) ? x(e) : y(e)
                },
                y = e => {
                    !d || h(e) || u(c.concat(e))
                },
                x = e => {
                    d && u(c.filter(t => String(t) !== String(e)))
                };
            return {
                isChecked: h,
                value: c,
                name: l,
                disabled: !!i,
                readOnly: !!n,
                invalid: !!o,
                setValue: u,
                addValue: y,
                toggleValue: g,
                getItemProps: e => ({
                    checked: null != e.value ? h(e.value) : void 0,
                    onCheckedChange() {
                        null != e.value && g(e.value)
                    },
                    name: l,
                    disabled: i,
                    readOnly: n,
                    invalid: o
                })
            }
        }(a);
        return (0, t.jsx)(h, {
            value: n,
            children: (0, t.jsx)(o.ark.div, {
                ref: r,
                role: "group",
                ...i,
                ...u.checkboxAnatomy.build().group.attrs
            })
        })
    });
    x.displayName = "CheckboxGroup";
    let b = (0, c.createSplitProps)(),
        m = (0, s.forwardRef)((e, r) => {
            let [a, i] = b(e, ["value"]);
            return (0, t.jsx)(h, {
                value: a.value,
                children: (0, t.jsx)(o.ark.div, {
                    ref: r,
                    role: "group",
                    ...i,
                    ...u.checkboxAnatomy.build().group.attrs
                })
            })
        });
    m.displayName = "CheckboxGroupProvider";
    var f = e.i(416574);
    let v = (0, s.forwardRef)((e, r) => {
        let a = i(),
            n = (0, l.mergeProps)(a.getHiddenInputProps(), e),
            s = (0, f.useFieldContext)();
        return (0, t.jsx)(o.ark.input, {
            "aria-describedby": null == s ? void 0 : s.ariaDescribedby,
            ...n,
            ref: r
        })
    });
    v.displayName = "CheckboxHiddenInput";
    let k = (0, s.forwardRef)((e, r) => {
        let {
            indeterminate: a,
            ...n
        } = e, s = i(), d = (0, l.mergeProps)(s.getIndicatorProps(), n), c = a ? s.indeterminate : s.checked;
        return (0, t.jsx)(o.ark.div, { ...d,
            hidden: !c,
            ref: r
        })
    });
    k.displayName = "CheckboxIndicator";
    let C = (0, s.forwardRef)((e, r) => {
        let a = i(),
            n = (0, l.mergeProps)(a.getLabelProps(), e);
        return (0, t.jsx)(o.ark.span, { ...n,
            ref: r
        })
    });
    C.displayName = "CheckboxLabel";
    var j = e.i(872706),
        S = e.i(501829),
        P = e.i(520036),
        w = e.i(904849);
    let T = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = g(),
                r = (0, f.useFieldContext)(),
                a = (0, s.useMemo)(() => {
                    var r;
                    return (0, l.mergeProps)(e, null != (r = null == t ? void 0 : t.getItemProps({
                        value: e.value
                    })) ? r : {})
                }, [e, t]),
                i = (0, s.useId)(),
                {
                    getRootNode: n
                } = (0, P.useEnvironmentContext)(),
                {
                    dir: o
                } = (0, w.useLocaleContext)(),
                d = {
                    id: i,
                    ids: {
                        label: null == r ? void 0 : r.ids.label,
                        hiddenInput: null == r ? void 0 : r.ids.control
                    },
                    dir: o,
                    disabled: null == r ? void 0 : r.disabled,
                    readOnly: null == r ? void 0 : r.readOnly,
                    invalid: null == r ? void 0 : r.invalid,
                    required: null == r ? void 0 : r.required,
                    getRootNode: n,
                    ...a
                },
                c = (0, S.useMachine)(j.machine, d);
            return j.connect(c, S.normalizeProps)
        },
        _ = (0, c.createSplitProps)(),
        M = (0, s.forwardRef)((e, r) => {
            let [i, n] = _(e, ["checked", "defaultChecked", "disabled", "form", "id", "ids", "invalid", "name", "onCheckedChange", "readOnly", "required", "value"]), s = T(i), d = (0, l.mergeProps)(s.getRootProps(), n);
            return (0, t.jsx)(a, {
                value: s,
                children: (0, t.jsx)(o.ark.label, { ...d,
                    ref: r
                })
            })
        });
    M.displayName = "CheckboxRoot";
    let R = (0, c.createSplitProps)(),
        F = (0, s.forwardRef)((e, r) => {
            let [{
                value: i
            }, n] = R(e, ["value"]), s = (0, l.mergeProps)(i.getRootProps(), n);
            return (0, t.jsx)(a, {
                value: i,
                children: (0, t.jsx)(o.ark.label, { ...s,
                    ref: r
                })
            })
        });
    F.displayName = "CheckboxRootProvider", e.s(["Context", () => n, "Control", () => d, "Group", () => x, "GroupProvider", () => m, "HiddenInput", () => v, "Indicator", () => k, "Label", () => C, "Root", () => M, "RootProvider", () => F], 897970);
    var q = e.i(897970),
        q = q,
        A = e.i(664288),
        I = e.i(489198),
        Q = e.i(198994),
        L = e.i(948788),
        E = e.i(170905);
    let z = (0, s.forwardRef)(function(e, r) {
        let a = (0, L.useRecipe)({
                key: "checkmark",
                recipe: e.recipe
            }),
            [i, n] = a.splitVariantProps(e),
            {
                checked: l,
                indeterminate: s,
                disabled: o,
                unstyled: d,
                children: c,
                ...u
            } = n,
            p = d ? Q.EMPTY_STYLES : a(i);
        return (0, t.jsx)(I.chakra.svg, {
            ref: r,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "data-state": s ? "indeterminate" : l ? "checked" : "unchecked",
            "data-disabled": (0, E.dataAttr)(o),
            css: [p, e.css],
            ...u,
            children: s ? (0, t.jsx)("path", {
                d: "M5 12h14"
            }) : l ? (0, t.jsx)("polyline", {
                points: "20 6 9 17 4 12"
            }) : null
        })
    });
    z.displayName = "Checkmark";
    let {
        withProvider: N,
        withContext: B,
        useStyles: V,
        PropsProvider: K
    } = (0, A.createSlotRecipeContext)({
        key: "checkbox"
    }), O = N(q.RootProvider, "root", {
        forwardAsChild: !0
    }), W = N(q.Root, "root", {
        forwardAsChild: !0
    }), G = B(q.Label, "label", {
        forwardAsChild: !0
    }), U = (0, s.forwardRef)(function(e, r) {
        let {
            checked: a,
            indeterminate: n,
            ...l
        } = e, s = i(), o = V();
        return a && s.checked ? (0, t.jsx)(I.chakra.svg, {
            ref: r,
            asChild: !0,
            ...l,
            css: [o.indicator, e.css],
            children: a
        }) : n && s.indeterminate ? (0, t.jsx)(I.chakra.svg, {
            ref: r,
            asChild: !0,
            ...l,
            css: [o.indicator, e.css],
            children: n
        }) : (0, t.jsx)(z, {
            ref: r,
            checked: s.checked,
            indeterminate: s.indeterminate,
            disabled: s.disabled,
            unstyled: !0,
            ...l,
            css: [o.indicator, e.css]
        })
    }), H = B(q.Control, "control", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, t.jsx)(U, {})
        }
    }), D = (0, I.chakra)(q.Group, {
        base: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5"
        }
    }, {
        forwardAsChild: !0
    }), Y = q.Context, Z = q.HiddenInput;
    e.s(["Context", () => Y, "Control", () => H, "Group", () => D, "HiddenInput", () => Z, "Indicator", () => U, "Label", () => G, "PropsProvider", () => K, "Root", () => W, "RootProvider", () => O], 302623);
    var J = e.i(302623);
    e.s(["Checkbox", 0, J], 188364)
}, 625959, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(188364);
    let a = e.i(251570).forwardRef(function(e, a) {
        let {
            icon: i,
            children: n,
            inputProps: l,
            rootRef: s,
            ...o
        } = e;
        return (0, t.jsxs)(r.Checkbox.Root, {
            ref: s,
            ...o,
            children: [(0, t.jsx)(r.Checkbox.HiddenInput, {
                ref: a,
                ...l
            }), (0, t.jsx)(r.Checkbox.Control, {
                children: i || (0, t.jsx)(r.Checkbox.Indicator, {})
            }), null != n && (0, t.jsx)(r.Checkbox.Label, {
                children: n
            })]
        })
    });
    e.s(["Checkbox", 0, a])
}, 397709, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        i = e.i(649725),
        n = e.i(334863),
        l = e.i(391265),
        s = e.i(813753);
    let o = {
            all: ["plan-features"],
            lists: () => [...o.all, "list"],
            list: e => [...o.lists(), e],
            active: () => [...o.all, "active"],
            available: () => ["billing-features", "available"],
            details: () => [...o.all, "detail"],
            detail: e => [...o.details(), e]
        },
        d = async () => {
            let e = await i.default.get("/admin/plan-features");
            return e.data.data || e.data
        },
        c = async () => {
            let e = await i.default.get("/admin/plan-features/active");
            return e.data.data || e.data
        },
        u = async () => {
            let e = await i.default.get("/billing/features/available");
            return e.data.data || e.data
        },
        p = async (e, t) => {
            let r = await i.default.patch("/admin/plan-features/".concat(e), t);
            return r.data.data || r.data
        },
        h = async e => {
            let t = await i.default.patch("/admin/plan-features/".concat(e, "/toggle-active"));
            return t.data.data || t.data
        },
        g = async e => {
            await i.default.delete("/admin/plan-features/".concat(e))
        };
    e.s(["useDeletePlanFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: g,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: o.lists()
                }), e.invalidateQueries({
                    queryKey: o.active()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Xóa tính năng thành công",
                    type: "success"
                })
            },
            onError: () => {
                n.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi xóa tính năng",
                    type: "error"
                })
            }
        })
    }, "useGetActivePlanFeatures", 0, () => (0, r.useQuery)({
        queryKey: o.active(),
        queryFn: c,
        staleTime: 3e5
    }), "useGetAvailableFeatures", 0, () => {
        let e = (0, l.useSelector)(s.selectAuth);
        return (0, r.useQuery)({
            queryKey: o.available(),
            queryFn: u,
            staleTime: 3e5,
            enabled: !!(null == e ? void 0 : e.user)
        })
    }, "useGetPlanFeatures", 0, () => (0, r.useQuery)({
        queryKey: o.list(),
        queryFn: d,
        staleTime: 3e5
    }), "useTogglePlanFeatureActive", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: h,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: o.lists()
                }), e.invalidateQueries({
                    queryKey: o.active()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật trạng thái tính năng thành công",
                    type: "success"
                })
            },
            onError: () => {
                n.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi cập nhật trạng thái tính năng",
                    type: "error"
                })
            }
        })
    }, "useUpdatePlanFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    id: t,
                    data: r
                } = e;
                return p(t, r)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: o.lists()
                }), e.invalidateQueries({
                    queryKey: o.active()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật tính năng thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t;
                let r = (null == (t = e.response) ? void 0 : t.status) === 409 ? "Tính năng này đã tồn tại. Vui lòng kiểm tra lại key." : "Có lỗi xảy ra khi cập nhật tính năng";
                n.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error"
                })
            }
        })
    }])
}, 441985, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(564668),
        i = e.i(791089),
        n = e.i(118190),
        l = e.i(215669),
        s = e.i(789757),
        o = e.i(494114),
        d = e.i(119887),
        c = e.i(878262),
        u = e.i(643736),
        p = e.i(676525),
        h = e.i(625959),
        g = e.i(649760),
        y = e.i(397709),
        x = e.i(201975),
        b = e.i(297272),
        m = e.i(940948);
    e.i(308972);
    var f = e.i(445979),
        v = e.i(419703),
        k = e.i(555481),
        C = e.i(533681),
        j = e.i(241277);
    e.s(["default", 0, e => {
        var S;
        let {
            isOpen: P,
            onClose: w,
            onFeaturePurchase: T,
            tier: _,
            initialSelectedFeatures: M = [],
            zIndex: R
        } = e, {
            t: F
        } = (0, f.useTranslation)(), [q, A] = (0, r.useState)(M), [I, Q] = (0, r.useState)([]), [L, E] = (0, r.useState)(null), [z, N] = (0, r.useState)(null), [B, V] = (0, r.useState)(!1), [K, O] = (0, r.useState)(null), [W, G] = (0, r.useState)(C.DEFAULT_BILLING_PAYMENT_METHOD), [U, H] = (0, r.useState)(!1), D = null != (S = (0, u.useBreakpointValue)({
            base: !1,
            lg: !0
        })) && S, Y = (0, m.useQueryClient)(), {
            data: Z,
            isLoading: J
        } = (0, y.useGetAvailableFeatures)(), X = (0, x.useCreateFeatureOrder)(), $ = (0, x.useSyncOrderPaymentStatus)(), ee = (0, b.usePaymentNotifications)(), et = (null == z ? void 0 : z.paymentMethod) || W, er = (0, C.isZaloPayPaymentMethod)(et) || (0, C.isZaloPayProvider)(null == z ? void 0 : z.provider), {
            data: ea
        } = (0, x.useGetOrderDetails)(L, {
            enablePolling: !er
        }), ei = (0, C.isZaloPayPaymentMethod)(et) && D, en = !!L && er && (U || ei), {
            isSyncing: el,
            isAutoSyncing: es,
            syncNow: eo,
            startAutoSync: ed,
            stopAutoSync: ec
        } = (0, j.useOrderPaymentSync)({
            orderId: L,
            enabled: en,
            status: null == ea ? void 0 : ea.status,
            onSync: async e => {
                await $.mutateAsync(e)
            }
        });
        (0, r.useEffect)(() => {
            if (Z) {
                let e = [...Z.basic || [], ...Z.pro || [], ...Z.vip || []].map(e => ({ ...e,
                    isSelected: M.includes(e.key)
                }));
                M.length > 0 && e.sort((e, t) => {
                    let r = M.includes(e.key),
                        a = M.includes(t.key);
                    return r && !a ? -1 : !r && a ? 1 : 0
                }), Q(e)
            }
        }, [Z, _]);
        let eu = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            P ? (A(M), Q(e => {
                let t = e.map(e => ({ ...e,
                    isSelected: M.includes(e.key)
                }));
                return M.length > 0 && t.sort((e, t) => {
                    let r = M.includes(e.key),
                        a = M.includes(t.key);
                    return r && !a ? -1 : !r && a ? 1 : 0
                }), t
            }), E(null), N(null), V(!1), G(C.DEFAULT_BILLING_PAYMENT_METHOD), H(!1), eu.current = null) : ec()
        }, [P, JSON.stringify(M), ec]), (0, r.useEffect)(() => {
            if (!U || !er || !L) return;
            let e = () => {
                    ed()
                },
                t = () => {
                    "visible" === document.visibilityState && ed()
                };
            return window.addEventListener("focus", e), document.addEventListener("visibilitychange", t), () => {
                window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", t)
            }
        }, [L, U, er, ed]), (0, r.useEffect)(() => {
            L && ei && ed()
        }, [L, ei, ed]), (0, r.useEffect)(() => {
            let e = null == ea ? void 0 : ea.status;
            e && eu.current !== e && ("paid" === e ? (eu.current = e, Y.invalidateQueries({
                queryKey: ["user-features", "all-keys"]
            }), Y.invalidateQueries({
                queryKey: ["billing-features"]
            }), ee.showPaymentSuccess(), null == T || T(q), w()) : "failed" === e ? (eu.current = e, ee.showPaymentFailed(), V(!1)) : "canceled" === e && (eu.current = e, ee.showPaymentFailed(F("pricing.featurePurchaseModal.orderCanceled")), V(!1)))
        }, [null == ea ? void 0 : ea.status, Y, T, q, w, ee, F]);
        let ep = e => {
                A(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e]), Q(t => t.map(t => t.key === e ? { ...t,
                    isSelected: !t.isSelected
                } : t))
            },
            eh = async () => {
                if (0 !== q.length) try {
                    V(!0);
                    let e = await X.mutateAsync({
                        features: q.map(e => ({
                            featureKey: e,
                            duration: "lifetime"
                        })),
                        paymentMethod: W,
                        metadata: {
                            source: "web_app"
                        }
                    });
                    E(e.orderId), N(e), ee.showOrderCreated()
                } catch (e) {
                    ee.showOrderError(F("pricing.featurePurchaseModal.createOrderError")), V(!1)
                }
            },
            eg = e => new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            }).format(e),
            ey = q.reduce((e, t) => {
                let r = I.find(e => e.key === t);
                return e + ((null == r ? void 0 : r.priceCents) || 0)
            }, 0),
            ex = I.filter(e => !e.userHasFeature);
        return J ? (0, t.jsx)(g.default, {
            isOpen: P,
            onClose: w,
            title: _ ? F("pricing.featurePurchaseModal.titleWithTier", {
                tier: _.toUpperCase()
            }) : F("pricing.featurePurchaseModal.title"),
            maxWidth: "600px",
            maxHeight: "80vh",
            zIndex: R,
            children: (0, t.jsx)(a.Box, {
                textAlign: "center",
                py: 8,
                children: (0, t.jsx)(i.Text, {
                    color: {
                        base: "gray.700",
                        _dark: "gray.300"
                    },
                    children: F("pricing.featurePurchaseModal.loading")
                })
            })
        }) : (0, t.jsx)(g.default, {
            isOpen: P,
            onClose: w,
            title: _ ? F("pricing.featurePurchaseModal.titleWithTier", {
                tier: _.toUpperCase()
            }) : F("pricing.featurePurchaseModal.title"),
            maxWidth: "600px",
            maxHeight: "80vh",
            zIndex: R,
            children: (0, t.jsxs)(n.VStack, {
                gap: 4,
                align: "stretch",
                className: "w-full",
                children: [!z && (0, t.jsxs)(a.Box, {
                    p: 4,
                    children: [(0, t.jsx)(i.Text, {
                        fontSize: "md",
                        fontWeight: "bold",
                        mb: 3,
                        textAlign: "center",
                        color: {
                            base: "gray.800",
                            _dark: "gray.200"
                        },
                        children: F("pricing.featurePurchaseModal.availableFeatures")
                    }), 0 === ex.length ? (0, t.jsx)(a.Box, {
                        p: 4,
                        borderRadius: "md",
                        textAlign: "center",
                        border: "1px solid",
                        borderColor: {
                            base: "gray.100",
                            _dark: "gray.700"
                        },
                        children: (0, t.jsx)(i.Text, {
                            color: {
                                base: "gray.600",
                                _dark: "gray.400"
                            },
                            children: F("pricing.featurePurchaseModal.allOwned")
                        })
                    }) : (0, t.jsx)(n.VStack, {
                        gap: 2,
                        align: "stretch",
                        maxHeight: "40vh",
                        overflowY: "auto",
                        pr: 1,
                        children: ex.map(e => (0, t.jsx)(a.Box, {
                            bg: e.isSelected ? {
                                base: "blue.50/80",
                                _dark: "blue.900/20"
                            } : {
                                base: "white/80",
                                _dark: "gray.900/80"
                            },
                            borderRadius: "lg",
                            p: 3,
                            boxShadow: "sm",
                            border: "2px solid",
                            borderColor: e.isSelected ? {
                                base: "blue.500",
                                _dark: "blue.400"
                            } : "transparent",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            onClick: () => ep(e.key),
                            _hover: {
                                borderColor: {
                                    base: "blue.300",
                                    _dark: "blue.500"
                                }
                            },
                            children: (0, t.jsxs)(l.HStack, {
                                justify: "space-between",
                                align: "start",
                                children: [(0, t.jsxs)(l.HStack, {
                                    gap: 3,
                                    align: "start",
                                    flex: 1,
                                    children: [(0, t.jsx)(h.Checkbox, {
                                        checked: e.isSelected,
                                        onCheckedChange: () => ep(e.key),
                                        className: "mt-1",
                                        onClick: e => e.stopPropagation()
                                    }), (0, t.jsxs)(n.VStack, {
                                        align: "start",
                                        gap: 2,
                                        flex: 1,
                                        children: [(0, t.jsx)(i.Text, {
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.800",
                                                _dark: "gray.200"
                                            },
                                            children: e.description
                                        }), e.previewUrl && (0, t.jsx)(a.Box, {
                                            borderRadius: "md",
                                            overflow: "hidden",
                                            border: "1px solid",
                                            borderColor: {
                                                base: "gray.200",
                                                _dark: "gray.600"
                                            },
                                            maxW: "80px",
                                            cursor: "pointer",
                                            onClick: t => {
                                                t.stopPropagation(), O({
                                                    url: e.previewUrl,
                                                    type: e.typePreview || "image"
                                                })
                                            },
                                            _hover: {
                                                borderColor: "blue.400",
                                                boxShadow: "sm"
                                            },
                                            transition: "all 0.2s",
                                            children: "video" === e.typePreview ? (0, t.jsxs)(a.Box, {
                                                position: "relative",
                                                children: [(0, t.jsx)("video", {
                                                    src: e.previewUrl,
                                                    style: {
                                                        width: "100%",
                                                        height: "60px",
                                                        objectFit: "cover"
                                                    }
                                                }), (0, t.jsx)(a.Box, {
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    bg: "blackAlpha.600",
                                                    borderRadius: "full",
                                                    p: 1,
                                                    children: (0, t.jsx)(i.Text, {
                                                        color: "white",
                                                        fontSize: "xs",
                                                        children: "▶"
                                                    })
                                                })]
                                            }) : (0, t.jsx)(d.Image, {
                                                src: e.previewUrl,
                                                alt: e.description,
                                                objectFit: "cover",
                                                w: "100%",
                                                h: "60px"
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)(n.VStack, {
                                    align: "end",
                                    gap: 0,
                                    children: [e.originalPriceCents && (0, t.jsx)(i.Text, {
                                        as: "s",
                                        color: {
                                            base: "gray.400",
                                            _dark: "gray.500"
                                        },
                                        fontSize: "xs",
                                        children: eg(e.originalPriceCents)
                                    }), (0, t.jsx)(s.Badge, {
                                        colorScheme: "green",
                                        variant: "solid",
                                        px: 2,
                                        py: 1,
                                        borderRadius: "md",
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        children: eg(e.priceCents)
                                    })]
                                })]
                            })
                        }, e.key))
                    })]
                }), !z && (0, t.jsx)(v.default, {
                    value: W,
                    onChange: G,
                    disabled: B
                }), q.length > 0 && !L && (0, t.jsxs)(a.Box, {
                    borderRadius: "lg",
                    p: 4,
                    children: [(0, t.jsx)(i.Text, {
                        fontSize: "md",
                        fontWeight: "bold",
                        mb: 2,
                        textAlign: "center",
                        color: {
                            base: "gray.800",
                            _dark: "gray.200"
                        },
                        children: F("pricing.purchaseModal.orderSummary")
                    }), (0, t.jsx)(a.Box, {
                        bg: {
                            base: "white/80",
                            _dark: "gray.900/80"
                        },
                        borderRadius: "lg",
                        p: 3,
                        boxShadow: "sm",
                        children: (0, t.jsxs)(n.VStack, {
                            gap: 2,
                            align: "stretch",
                            children: [(0, t.jsxs)(o.Flex, {
                                justify: "space-between",
                                align: "center",
                                py: 2,
                                px: 3,
                                children: [(0, t.jsxs)(i.Text, {
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.800",
                                        _dark: "gray.200"
                                    },
                                    children: [F("pricing.featurePurchaseModal.total"), ":"]
                                }), (0, t.jsx)(i.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    },
                                    children: eg(ey)
                                })]
                            }), (0, t.jsx)(i.Text, {
                                fontSize: "sm",
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                textAlign: "center",
                                children: F("pricing.featurePurchaseModal.selectedCount", {
                                    count: q.length
                                })
                            })]
                        })
                    })]
                }), L && z && (0, t.jsxs)(n.VStack, {
                    gap: 6,
                    textAlign: "center",
                    w: "full",
                    children: [ea && (0, t.jsxs)(s.Badge, {
                        size: "lg",
                        colorScheme: "paid" === ea.status ? "green" : "failed" === ea.status || "canceled" === ea.status ? "red" : "blue",
                        px: 4,
                        py: 1,
                        borderRadius: "full",
                        children: ["paid" === ea.status && F("pricing.purchaseModal.status.paid"), "requires_payment" === ea.status && F("pricing.purchaseModal.status.requiresPayment"), "created" === ea.status && F("pricing.purchaseModal.status.created"), "failed" === ea.status && F("pricing.purchaseModal.status.failed"), "canceled" === ea.status && F("pricing.purchaseModal.status.canceled")]
                    }), (null == ea ? void 0 : ea.status) === "paid" ? (0, t.jsxs)(n.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, t.jsx)(a.Box, {
                            className: "text-5xl",
                            children: "🎉"
                        }), (0, t.jsxs)(n.VStack, {
                            gap: 2,
                            children: [(0, t.jsx)(i.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: F("pricing.purchaseModal.paymentSuccess")
                            }), (0, t.jsx)(i.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: F("pricing.featurePurchaseModal.noteContent")
                            })]
                        })]
                    }) : (null == ea ? void 0 : ea.status) === "failed" || (null == ea ? void 0 : ea.status) === "canceled" ? (0, t.jsxs)(n.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, t.jsx)(a.Box, {
                            className: "text-5xl",
                            children: "❌"
                        }), (0, t.jsxs)(n.VStack, {
                            gap: 2,
                            children: [(0, t.jsx)(i.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "red.600",
                                    _dark: "red.400"
                                },
                                children: F("pricing.purchaseModal.paymentFailed")
                            }), (0, t.jsx)(i.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: F("pricing.purchaseModal.paymentFailedDesc")
                            })]
                        })]
                    }) : er ? (0, t.jsx)(n.VStack, {
                        gap: 4,
                        w: "full",
                        children: (0, t.jsx)(a.Box, {
                            p: 5,
                            bg: {
                                base: "white",
                                _dark: "gray.900"
                            },
                            borderRadius: "xl",
                            boxShadow: "sm",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            w: "full",
                            children: (0, t.jsx)(k.default, {
                                paymentMethod: et,
                                paymentUrl: z.paymentUrl,
                                isSyncing: el,
                                isAutoSyncing: es,
                                hasOpenedPaymentLink: U,
                                canSync: !!L,
                                onOpenPaymentLink: () => {
                                    (null == z ? void 0 : z.paymentUrl) && (window.open(z.paymentUrl, "_blank", "noopener,noreferrer"), H(!0))
                                },
                                onSyncNow: () => void eo(),
                                onCopyError: e => ee.showOrderError(e)
                            })
                        })
                    }) : (0, t.jsxs)(n.VStack, {
                        gap: 6,
                        w: "full",
                        children: [(0, t.jsx)(a.Box, {
                            p: 6,
                            bg: {
                                base: "white",
                                _dark: "gray.900"
                            },
                            borderRadius: "xl",
                            boxShadow: "sm",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.100",
                                _dark: "gray.700"
                            },
                            w: "full",
                            children: (0, t.jsxs)(n.VStack, {
                                gap: 4,
                                children: [(0, t.jsx)(i.Text, {
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: F("pricing.purchaseModal.scanQR")
                                }), (0, t.jsx)(a.Box, {
                                    p: 2,
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderRadius: "lg",
                                    boxShadow: "md",
                                    border: "1px solid",
                                    borderColor: {
                                        base: "gray.100",
                                        _dark: "gray.600"
                                    },
                                    children: z.qrImgUrl ? (0, t.jsx)(d.Image, {
                                        src: z.qrImgUrl,
                                        alt: "QR Code Payment",
                                        boxSize: "200px",
                                        objectFit: "contain"
                                    }) : (0, t.jsx)(o.Flex, {
                                        w: "200px",
                                        h: "200px",
                                        align: "center",
                                        justify: "center",
                                        bg: {
                                            base: "gray.50",
                                            _dark: "gray.700"
                                        },
                                        borderRadius: "md",
                                        children: (0, t.jsx)(i.Text, {
                                            color: {
                                                base: "gray.500",
                                                _dark: "gray.400"
                                            },
                                            fontSize: "sm",
                                            children: F("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, t.jsx)(i.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    children: F("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), z.bank && z.accountNumber && (0, t.jsx)(a.Box, {
                            w: "full",
                            bg: {
                                base: "gray.50",
                                _dark: "gray.800"
                            },
                            p: 4,
                            borderRadius: "xl",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.700"
                            },
                            children: (0, t.jsxs)(n.VStack, {
                                gap: 3,
                                align: "stretch",
                                children: [(0, t.jsx)(i.Text, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    mb: 1,
                                    children: F("pricing.purchaseModal.bankTransferInfo")
                                }), (0, t.jsxs)(l.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: F("pricing.purchaseModal.bank")
                                    }), (0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.900",
                                            _dark: "gray.100"
                                        },
                                        children: z.bank
                                    })]
                                }), (0, t.jsxs)(l.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: F("pricing.purchaseModal.accountNumber")
                                    }), (0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        fontFamily: "mono",
                                        children: z.accountNumber
                                    })]
                                }), z.transferDescription && (0, t.jsxs)(l.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: F("pricing.purchaseModal.content")
                                    }), (0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        fontFamily: "mono",
                                        children: z.transferDescription
                                    })]
                                }), (0, t.jsxs)(l.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, t.jsx)(i.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: F("pricing.purchaseModal.total")
                                    }), (0, t.jsx)(i.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "rose.500",
                                            _dark: "rose.400"
                                        },
                                        children: eg(z.summary.total)
                                    })]
                                })]
                            })
                        })]
                    })]
                }), !z && (0, t.jsxs)(a.Box, {
                    p: 4,
                    children: [(0, t.jsx)(i.Text, {
                        fontSize: "md",
                        fontWeight: "bold",
                        mb: 2,
                        textAlign: "center",
                        color: {
                            base: "gray.800",
                            _dark: "gray.200"
                        },
                        children: F("pricing.purchaseModal.confirmOrder")
                    }), (0, t.jsx)(n.VStack, {
                        gap: 3,
                        children: (0, t.jsx)(p.default, {
                            variant: "rose",
                            size: "large",
                            onClick: eh,
                            disabled: 0 === q.length || B,
                            className: "w-full h-10 text-sm font-bold",
                            children: B ? F("pricing.featurePurchaseModal.processing") : "".concat(F("pricing.featurePurchaseModal.buy"), " ").concat(q.length > 0 ? "(".concat(q.length, ")") : "")
                        })
                    })]
                }), !z && (0, t.jsx)(a.Box, {
                    p: 3,
                    children: (0, t.jsxs)(i.Text, {
                        fontSize: "xs",
                        color: {
                            base: "yellow.800",
                            _dark: "yellow.300"
                        },
                        textAlign: "center",
                        children: [(0, t.jsxs)("strong", {
                            children: [F("pricing.featurePurchaseModal.note"), ":"]
                        }), " ", F("pricing.featurePurchaseModal.noteContent")]
                    })
                }), K && (0, t.jsx)(c.Portal, {
                    children: (0, t.jsx)(g.default, {
                        isOpen: !0,
                        onClose: () => O(null),
                        title: "Preview",
                        maxWidth: "800px",
                        children: (0, t.jsx)(a.Box, {
                            textAlign: "center",
                            children: "video" === K.type ? (0, t.jsx)("video", {
                                src: K.url,
                                controls: !0,
                                autoPlay: !0,
                                style: {
                                    width: "100%",
                                    maxHeight: "600px"
                                }
                            }) : (0, t.jsx)(d.Image, {
                                src: K.url,
                                alt: "Preview",
                                maxW: "100%",
                                maxH: "600px",
                                objectFit: "contain",
                                margin: "0 auto"
                            })
                        })
                    })
                })]
            })
        })
    }])
}, 10027, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        i = e.i(649725),
        n = e.i(334863);
    let l = {
            all: ["plans"],
            lists: () => [...l.all, "list"],
            list: e => [...l.lists(), e],
            details: () => [...l.all, "detail"],
            detail: e => [...l.details(), e]
        },
        s = async () => {
            let e = await i.default.get("/admin/billing/catalog/plan");
            return e.data.data || e.data
        },
        o = async () => {
            let e = await i.default.get("/billing/catalog/plan");
            return e.data.data || e.data
        },
        d = async e => {
            let t = await i.default.post("/admin/billing/catalog/plan", e);
            return t.data.data || t.data
        },
        c = async (e, t) => {
            let r = await i.default.patch("/admin/billing/catalog/plan/".concat(e), t);
            return r.data.data || r.data
        },
        u = async e => {
            let t = await i.default.patch("/admin/billing/catalog/plan/".concat(e, "/toggle-active"));
            return t.data.data || t.data
        };
    e.s(["useCreatePlan", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: d,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: l.lists()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Tạo gói thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t;
                let r = (null == (t = e.response) ? void 0 : t.status) === 409 ? "Gói này đã tồn tại. Vui lòng kiểm tra lại tier và period." : "Có lỗi xảy ra khi tạo gói";
                n.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error"
                })
            }
        })
    }, "useGetPlans", 0, () => (0, r.useQuery)({
        queryKey: l.list(),
        queryFn: s,
        staleTime: 3e5
    }), "useGetPublicPlans", 0, () => (0, r.useQuery)({
        queryKey: ["plans", "public"],
        queryFn: async () => (await (0, i.waitForAuth)(), o()),
        staleTime: 3e5
    }), "useToggleActive", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: u,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: l.lists()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật trạng thái gói thành công",
                    type: "success"
                })
            },
            onError: () => {
                n.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi cập nhật trạng thái gói",
                    type: "error"
                })
            }
        })
    }, "useUpdatePlan", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    id: t,
                    data: r
                } = e;
                return c(t, r)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: l.lists()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật gói thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t;
                let r = (null == (t = e.response) ? void 0 : t.status) === 409 ? "Gói này đã tồn tại. Vui lòng kiểm tra lại tier và period." : "Có lỗi xảy ra khi cập nhật gói";
                n.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error"
                })
            }
        })
    }])
}, 951629, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        i = e.i(649725),
        n = e.i(334863),
        l = e.i(251570),
        s = e.i(31368);
    let o = e => {
            var t;
            if (!s.default.isAxiosError(e)) return;
            let r = null == (t = e.response) ? void 0 : t.data;
            if (r && "object" == typeof r && "message" in r) {
                let e = r.message;
                if ("string" == typeof e) return e
            }
        },
        d = {
            all: ["promotions"],
            lists: () => [...d.all, "list"],
            list: e => [...d.lists(), e],
            publicList: () => [...d.all, "public-list"],
            details: () => [...d.all, "detail"],
            detail: e => [...d.details(), e],
            redemptions: e => [...d.all, "redemptions", e]
        },
        c = async () => {
            let e = await i.default.get("/admin/promotions");
            return e.data.data || e.data
        },
        u = async () => {
            let e = await i.default.get("/promotions/public");
            return e.data.data || e.data
        },
        p = async e => {
            let t = await i.default.post("/admin/promotions", e);
            return t.data.data || t.data
        },
        h = async (e, t) => {
            let r = await i.default.patch("/admin/promotions/".concat(e), t);
            return r.data.data || r.data
        },
        g = async e => {
            let t = await i.default.get("/admin/promotions/".concat(e, "/redemptions"));
            return t.data.data || t.data
        },
        y = async e => {
            let t = new URLSearchParams;
            return t.append("code", e.code.toUpperCase()), e.catalogId && t.append("catalogId", e.catalogId.toString()), e.pageId && t.append("pageId", e.pageId.toString()), e.designRequested && t.append("designRequested", "true"), "number" == typeof e.subtotalCents && t.append("subtotalCents", e.subtotalCents.toString()), (await i.default.get("/billing/promotions/validate?".concat(t))).data
        },
        x = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, r.useQuery)({
                queryKey: ["validatePromotion", e],
                queryFn: () => e ? y(e) : Promise.reject("No params"),
                enabled: t && !!(null == e ? void 0 : e.code),
                staleTime: 3e4,
                retry: 1,
                refetchOnWindowFocus: !1
            })
        };
    e.s(["useCreatePromotion", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: p,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: d.lists()
                }), e.invalidateQueries({
                    queryKey: d.publicList()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Tạo mã giảm giá thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t;
                let r = s.default.isAxiosError(e) && (null == (t = e.response) ? void 0 : t.status) === 409 ? "Mã giảm giá này đã tồn tại. Vui lòng sử dụng mã khác." : o(e) || "Có lỗi xảy ra khi tạo mã giảm giá";
                n.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error"
                })
            }
        })
    }, "useDebouncedPromotionValidation", 0, function(e, t, r, a) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
            [n, s] = (0, l.useState)(e);
        return (0, l.useEffect)(() => {
            let t = setTimeout(() => {
                s(e)
            }, i);
            return () => clearTimeout(t)
        }, [e, i]), x(n.trim() ? {
            code: n,
            catalogId: t,
            designRequested: r,
            subtotalCents: a
        } : null, !!n.trim())
    }, "useGetPromotionRedemptions", 0, e => (0, r.useQuery)({
        queryKey: d.redemptions(e),
        queryFn: () => g(e),
        enabled: !!e,
        staleTime: 3e5
    }), "useGetPromotions", 0, () => (0, r.useQuery)({
        queryKey: d.list(),
        queryFn: c,
        staleTime: 3e5
    }), "useGetPublicPromotions", 0, () => (0, r.useQuery)({
        queryKey: d.publicList(),
        queryFn: u,
        staleTime: 6e4
    }), "useUpdatePromotion", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    id: t,
                    data: r
                } = e;
                return h(t, r)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: d.lists()
                }), e.invalidateQueries({
                    queryKey: d.details()
                }), e.invalidateQueries({
                    queryKey: d.publicList()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật mã giảm giá thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t;
                let r = s.default.isAxiosError(e) && (null == (t = e.response) ? void 0 : t.status) === 409 ? "Mã giảm giá này đã tồn tại. Vui lòng sử dụng mã khác." : o(e) || "Có lỗi xảy ra khi cập nhật mã giảm giá";
                n.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error"
                })
            }
        })
    }])
}]);

//# debugId=f0d6bc4c-8433-eac6-7b7a-da19be37d2f5
//# sourceMappingURL=a5a8f06fc7301ab5.js.map