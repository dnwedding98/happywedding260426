;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "132c6d92-4dc9-3305-07ce-a6bef3793f23")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 412909, e => {
    "use strict";
    var a = e.i(649725),
        r = e.i(334863),
        t = e.i(495839),
        s = e.i(840171),
        o = e.i(816941),
        l = e.i(940948);
    let i = {
            all: ["pageSlots"],
            packages: () => [...i.all, "packages"],
            adminPackages: () => [...i.all, "admin", "packages"],
            package: e => [...i.all, "package", e]
        },
        n = async () => (await a.default.get("/page-slot-catalog/packages")).data.data,
        d = async e => (await a.default.post("/billing/page-slots/orders", e)).data.data,
        c = async () => (await a.default.get("/admin/page-slot-catalog")).data.data,
        g = async e => (await a.default.post("/admin/page-slot-catalog", e)).data.data,
        u = async (e, r) => (await a.default.put("/admin/page-slot-catalog/".concat(e), r)).data.data,
        p = async e => {
            await a.default.delete("/admin/page-slot-catalog/".concat(e))
        };
    e.s(["useCreatePageSlotOrder", 0, () => (0, s.useMutation)({
        mutationFn: d,
        onSuccess: () => {
            r.toaster.create({
                title: t.default.t("pageSlot.messages.purchaseSuccess"),
                description: t.default.t("pageSlot.purchaseModal.note"),
                type: "success"
            })
        },
        onError: e => {
            var a, s;
            r.toaster.create({
                title: t.default.t("pageSlot.messages.purchaseError"),
                description: (null == (s = e.response) || null == (a = s.data) ? void 0 : a.message) || t.default.t("pageSlot.messages.purchaseError"),
                type: "error"
            })
        }
    }), "useCreatePageSlotPackage", 0, () => {
        let e = (0, l.useQueryClient)();
        return (0, s.useMutation)({
            mutationFn: g,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: i.adminPackages()
                }), e.invalidateQueries({
                    queryKey: i.packages()
                }), r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.createSuccess"),
                    description: t.default.t("adminPageSlot.messages.createSuccess"),
                    type: "success"
                })
            },
            onError: e => {
                var a, s;
                r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.createError"),
                    description: (null == (s = e.response) || null == (a = s.data) ? void 0 : a.message) || t.default.t("adminPageSlot.messages.createError"),
                    type: "error"
                })
            }
        })
    }, "useDeletePageSlotPackage", 0, () => {
        let e = (0, l.useQueryClient)();
        return (0, s.useMutation)({
            mutationFn: p,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: i.adminPackages()
                }), e.invalidateQueries({
                    queryKey: i.packages()
                }), r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.deleteSuccess"),
                    description: t.default.t("adminPageSlot.messages.deleteSuccess"),
                    type: "success"
                })
            },
            onError: e => {
                var a, s;
                r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.deleteError"),
                    description: (null == (s = e.response) || null == (a = s.data) ? void 0 : a.message) || t.default.t("adminPageSlot.messages.deleteError"),
                    type: "error"
                })
            }
        })
    }, "useGetAllPageSlotPackages", 0, () => (0, o.useQuery)({
        queryKey: i.adminPackages(),
        queryFn: c,
        staleTime: 6e4
    }), "useGetPageSlotPackages", 0, () => (0, o.useQuery)({
        queryKey: i.packages(),
        queryFn: n,
        staleTime: 3e5
    }), "useUpdatePageSlotPackage", 0, () => {
        let e = (0, l.useQueryClient)();
        return (0, s.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: r
                } = e;
                return u(a, r)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: i.adminPackages()
                }), e.invalidateQueries({
                    queryKey: i.packages()
                }), r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.updateSuccess"),
                    description: t.default.t("adminPageSlot.messages.updateSuccess"),
                    type: "success"
                })
            },
            onError: e => {
                var a, s;
                r.toaster.create({
                    title: t.default.t("adminPageSlot.messages.updateError"),
                    description: (null == (s = e.response) || null == (a = s.data) ? void 0 : a.message) || t.default.t("adminPageSlot.messages.updateError"),
                    type: "error"
                })
            }
        })
    }])
}, 681456, 857405, e => {
    "use strict";
    let a = ".mehappy.info",
        r = /^[a-z0-9-]+$/,
        t = e => e.trim().toLowerCase();
    e.s(["SYSTEM_DOMAIN_SUFFIX", 0, a, "getSystemFullDomain", 0, e => "".concat(t(e)).concat(a), "normalizeSystemSubdomain", 0, t, "validateSystemSubdomain", 0, e => {
        let a = t(e);
        return a ? r.test(a) ? a.length < 3 ? "tooShort" : null : "invalid" : "required"
    }], 681456);
    var s = e.i(483632),
        o = e.i(676525),
        l = e.i(412909),
        i = e.i(789757),
        n = e.i(564668),
        d = e.i(478062),
        c = e.i(494114),
        g = e.i(536072),
        u = e.i(51715),
        p = e.i(791089),
        x = e.i(118190),
        m = e.i(251570);
    e.i(308972);
    var h = e.i(445979),
        b = e.i(84723),
        y = e.i(649760),
        S = e.i(334863),
        f = e.i(201975),
        k = e.i(297272),
        j = e.i(419703),
        v = e.i(555481),
        C = e.i(533681),
        _ = e.i(162234),
        P = e.i(215669),
        T = e.i(119887),
        M = e.i(165341),
        z = e.i(389868),
        w = e.i(643736),
        F = e.i(940948),
        W = e.i(241277);

    function B(e) {
        var a, r;
        let {
            isOpen: t,
            onClose: d,
            package: g
        } = e, {
            t: u
        } = (0, h.useTranslation)(), B = (0, F.useQueryClient)(), [A, E] = (0, m.useState)(!1), [R, I] = (0, m.useState)(""), [V, N] = (0, m.useState)(null), [D, q] = (0, m.useState)(null), [L, O] = (0, m.useState)(C.DEFAULT_BILLING_PAYMENT_METHOD), [H, U] = (0, m.useState)(!1), Q = null != (r = (0, w.useBreakpointValue)({
            base: !1,
            lg: !0
        })) && r, K = (0, l.useCreatePageSlotOrder)(), G = (0, f.useSyncOrderPaymentStatus)(), Y = (0, k.usePaymentNotifications)(), X = (null == D ? void 0 : D.paymentMethod) || L, Z = (0, C.isZaloPayPaymentMethod)(X) || (0, C.isZaloPayProvider)(null == D ? void 0 : D.provider), {
            data: $
        } = (0, f.useGetOrderDetails)(V, {
            enablePolling: !Z
        }), J = (0, C.isZaloPayPaymentMethod)(X) && Q, ee = !!V && Z && (H || J), {
            isSyncing: ea,
            isAutoSyncing: er,
            syncNow: et,
            startAutoSync: es,
            stopAutoSync: eo
        } = (0, W.useOrderPaymentSync)({
            orderId: V,
            enabled: ee,
            status: null == $ ? void 0 : $.status,
            onSync: async e => {
                await G.mutateAsync(e)
            }
        }), el = (0, m.useRef)(null);
        (0, m.useEffect)(() => {
            t ? (I(""), N(null), q(null), E(!1), O(C.DEFAULT_BILLING_PAYMENT_METHOD), U(!1), el.current = null) : eo()
        }, [t, eo]), (0, m.useEffect)(() => {
            if (!H || !Z || !V) return;
            let e = () => {
                    es()
                },
                a = () => {
                    "visible" === document.visibilityState && es()
                };
            return window.addEventListener("focus", e), document.addEventListener("visibilitychange", a), () => {
                window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", a)
            }
        }, [V, H, Z, es]), (0, m.useEffect)(() => {
            V && J && es()
        }, [V, J, es]), (0, m.useEffect)(() => {
            let e = null == $ ? void 0 : $.status;
            e && el.current !== e && ("paid" === e ? (el.current = e, Y.showPaymentSuccess(), d()) : "failed" === e ? (el.current = e, Y.showPaymentFailed(), E(!1)) : "canceled" === e && (el.current = e, Y.showPaymentFailed(u("pageSlot.purchaseModal.orderCanceled")), E(!1)))
        }, [null == $ ? void 0 : $.status, B, d, Y, u]);
        let ei = async () => {
            E(!0);
            try {
                let e = {
                        catalogId: g.id,
                        paymentMethod: L,
                        ...R.trim() && {
                            promotionCode: R.trim()
                        }
                    },
                    a = await K.mutateAsync(e);
                N(a.orderId), q(a), Y.showOrderCreated()
            } catch (e) {
                queueMicrotask(() => {
                    var a, r;
                    S.toaster.create({
                        title: u("pageSlot.messages.purchaseError"),
                        description: (null == (r = e.response) || null == (a = r.data) ? void 0 : a.message) || "Có lỗi xảy ra khi tạo đơn hàng",
                        type: "error"
                    })
                }), E(!1)
            }
        };
        return (0, s.jsx)(y.ModalBasic, {
            isOpen: t,
            onClose: d,
            title: u("pageSlot.purchaseModal.title"),
            maxWidth: "500px",
            children: (0, s.jsxs)(x.VStack, {
                gap: 4,
                align: "stretch",
                py: 2,
                children: [!D && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(n.Box, {
                        p: 3,
                        borderRadius: "md",
                        bg: {
                            base: "blue.50",
                            _dark: "blue.900/20"
                        },
                        borderWidth: "1px",
                        borderColor: {
                            base: "blue.200",
                            _dark: "blue.700"
                        },
                        children: [(0, s.jsxs)(c.Flex, {
                            gap: 2,
                            align: "center",
                            mb: 2,
                            children: [(0, s.jsx)(n.Box, {
                                p: 2,
                                borderRadius: "md",
                                bg: {
                                    base: "blue.100",
                                    _dark: "blue.900/40"
                                },
                                color: {
                                    base: "blue.600",
                                    _dark: "blue.400"
                                },
                                children: (0, s.jsx)(b.FiPackage, {
                                    size: 20
                                })
                            }), (0, s.jsxs)(n.Box, {
                                flex: 1,
                                children: [(0, s.jsx)(p.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: g.description
                                }), (0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: g.name
                                })]
                            })]
                        }), (0, s.jsxs)(z.Stack, {
                            gap: 1.5,
                            children: [(0, s.jsxs)(c.Flex, {
                                justify: "space-between",
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: u("pageSlot.purchaseModal.slotCount")
                                }), (0, s.jsxs)(p.Text, {
                                    fontWeight: "semibold",
                                    fontSize: "sm",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: [g.slotCount, " ", u("pageSlot.purchaseModal.slots")]
                                })]
                            }), (0, s.jsxs)(c.Flex, {
                                justify: "space-between",
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: u("pageSlot.purchaseModal.price")
                                }), (0, s.jsxs)(p.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "green.600",
                                        _dark: "green.400"
                                    },
                                    children: [g.priceCents.toLocaleString("vi-VN"), " ", u("pageSlot.purchaseModal.vnd")]
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)(n.Box, {
                        children: [(0, s.jsx)(p.Text, {
                            fontSize: "xs",
                            fontWeight: "medium",
                            mb: 1.5,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: u("pageSlot.purchaseModal.promotionCode")
                        }), (0, s.jsx)(M.Input, {
                            placeholder: u("pageSlot.purchaseModal.promotionCodePlaceholder"),
                            value: R,
                            onChange: e => I(e.target.value),
                            size: "sm",
                            bg: {
                                base: "white",
                                _dark: "gray.700"
                            },
                            borderColor: {
                                base: "gray.300",
                                _dark: "gray.600"
                            }
                        })]
                    }), (0, s.jsxs)(_.Alert.Root, {
                        status: "info",
                        variant: "subtle",
                        size: "sm",
                        children: [(0, s.jsx)(_.Alert.Indicator, {
                            children: (0, s.jsx)(b.FiAlertCircle, {})
                        }), (0, s.jsx)(_.Alert.Content, {
                            children: (0, s.jsx)(p.Text, {
                                fontSize: "xs",
                                children: u("pageSlot.purchaseModal.note")
                            })
                        })]
                    }), (0, s.jsx)(n.Box, {
                        p: 3,
                        borderRadius: "md",
                        bg: {
                            base: "gray.50",
                            _dark: "gray.800"
                        },
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.700"
                        },
                        children: (0, s.jsxs)(c.Flex, {
                            justify: "space-between",
                            align: "center",
                            children: [(0, s.jsx)(p.Text, {
                                fontSize: "sm",
                                fontWeight: "semibold",
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                children: u("pageSlot.purchaseModal.total")
                            }), (0, s.jsxs)(p.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: [g.priceCents.toLocaleString("vi-VN"), " ", u("pageSlot.purchaseModal.vnd")]
                            })]
                        })
                    }), (0, s.jsx)(j.default, {
                        value: L,
                        onChange: O,
                        disabled: A
                    })]
                }), V && D && (0, s.jsxs)(x.VStack, {
                    gap: 6,
                    textAlign: "center",
                    w: "full",
                    children: [$ && (0, s.jsxs)(i.Badge, {
                        size: "lg",
                        colorScheme: "paid" === $.status ? "green" : "failed" === $.status || "canceled" === $.status ? "red" : "blue",
                        px: 4,
                        py: 1,
                        borderRadius: "full",
                        children: ["paid" === $.status && u("pricing.purchaseModal.status.paid"), "requires_payment" === $.status && u("pricing.purchaseModal.status.requiresPayment"), "created" === $.status && u("pricing.purchaseModal.status.created"), "failed" === $.status && u("pricing.purchaseModal.status.failed"), "canceled" === $.status && u("pricing.purchaseModal.status.canceled")]
                    }), (null == $ ? void 0 : $.status) === "paid" ? (0, s.jsxs)(x.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, s.jsx)(n.Box, {
                            className: "text-5xl",
                            children: "🎉"
                        }), (0, s.jsxs)(x.VStack, {
                            gap: 2,
                            children: [(0, s.jsx)(p.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: u("pricing.purchaseModal.paymentSuccess")
                            }), (0, s.jsx)(p.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: u("pageSlot.messages.paymentSuccess")
                            })]
                        })]
                    }) : (null == $ ? void 0 : $.status) === "failed" || (null == $ ? void 0 : $.status) === "canceled" ? (0, s.jsxs)(x.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, s.jsx)(n.Box, {
                            className: "text-5xl",
                            children: "❌"
                        }), (0, s.jsxs)(x.VStack, {
                            gap: 2,
                            children: [(0, s.jsx)(p.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "red.600",
                                    _dark: "red.400"
                                },
                                children: u("pricing.purchaseModal.paymentFailed")
                            }), (0, s.jsx)(p.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: u("pricing.purchaseModal.paymentFailedDesc")
                            })]
                        })]
                    }) : Z ? (0, s.jsx)(x.VStack, {
                        gap: 4,
                        w: "full",
                        children: (0, s.jsx)(n.Box, {
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
                            children: (0, s.jsx)(v.default, {
                                paymentMethod: X,
                                paymentUrl: D.paymentUrl,
                                isSyncing: ea,
                                isAutoSyncing: er,
                                hasOpenedPaymentLink: H,
                                canSync: !!V,
                                onOpenPaymentLink: () => {
                                    (null == D ? void 0 : D.paymentUrl) && (window.open(D.paymentUrl, "_blank", "noopener,noreferrer"), U(!0))
                                },
                                onSyncNow: () => void et(),
                                onCopyError: e => Y.showOrderError(e)
                            })
                        })
                    }) : (0, s.jsxs)(x.VStack, {
                        gap: 6,
                        w: "full",
                        children: [(0, s.jsx)(n.Box, {
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
                            children: (0, s.jsxs)(x.VStack, {
                                gap: 4,
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: u("pageSlot.paymentModal.scanQR")
                                }), (0, s.jsx)(n.Box, {
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
                                    children: D.qrImgUrl ? (0, s.jsx)(T.Image, {
                                        src: D.qrImgUrl,
                                        alt: "QR Code Payment",
                                        boxSize: "200px",
                                        objectFit: "contain"
                                    }) : (0, s.jsx)(c.Flex, {
                                        w: "200px",
                                        h: "200px",
                                        align: "center",
                                        justify: "center",
                                        bg: {
                                            base: "gray.50",
                                            _dark: "gray.700"
                                        },
                                        borderRadius: "md",
                                        children: (0, s.jsx)(p.Text, {
                                            color: {
                                                base: "gray.500",
                                                _dark: "gray.400"
                                            },
                                            fontSize: "sm",
                                            children: u("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    children: u("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), D.bank && D.accountNumber && (0, s.jsx)(n.Box, {
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
                            children: (0, s.jsxs)(x.VStack, {
                                gap: 3,
                                align: "stretch",
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    mb: 1,
                                    children: u("pageSlot.paymentModal.bankInfo")
                                }), (0, s.jsxs)(P.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: u("pageSlot.paymentModal.bank")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.900",
                                            _dark: "gray.100"
                                        },
                                        children: D.bank
                                    })]
                                }), (0, s.jsxs)(P.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: u("pageSlot.paymentModal.accountNumber")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        fontFamily: "mono",
                                        children: D.accountNumber
                                    })]
                                }), D.transferDescription && (0, s.jsxs)(P.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: u("pageSlot.paymentModal.transferDescription")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        fontFamily: "mono",
                                        children: D.transferDescription
                                    })]
                                }), (0, s.jsxs)(P.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: u("pageSlot.paymentModal.amount")
                                    }), (0, s.jsxs)(p.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "rose.500",
                                            _dark: "rose.400"
                                        },
                                        children: [((null == (a = D.summary) ? void 0 : a.total) || g.priceCents).toLocaleString("vi-VN"), " ", u("pageSlot.paymentModal.vnd")]
                                    })]
                                })]
                            })
                        })]
                    })]
                }), !D && (0, s.jsxs)(c.Flex, {
                    justify: "flex-end",
                    gap: 2,
                    pt: 2,
                    children: [(0, s.jsx)(o.default, {
                        variant: "outline",
                        onClick: d,
                        disabled: A,
                        size: "sm",
                        children: u("pageSlot.purchaseModal.cancel")
                    }), (0, s.jsx)(o.default, {
                        variant: "fill",
                        onClick: ei,
                        disabled: A,
                        size: "sm",
                        children: A ? u("pageSlot.purchaseModal.processing") : u("pageSlot.purchaseModal.confirm")
                    })]
                })]
            })
        })
    }

    function A(e) {
        let {
            isOpen: a,
            onClose: r
        } = e, {
            t
        } = (0, h.useTranslation)(), {
            data: S = [],
            isLoading: f
        } = (0, l.useGetPageSlotPackages)(), [k, j] = (0, m.useState)(null), [v, C] = (0, m.useState)(!1);
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(y.default, {
                isOpen: a,
                onClose: r,
                title: t("pageSlot.packages.title"),
                maxWidth: "900px",
                children: (0, s.jsxs)(x.VStack, {
                    gap: 4,
                    align: "stretch",
                    py: 2,
                    children: [(0, s.jsx)(p.Text, {
                        fontSize: "sm",
                        color: {
                            base: "gray.600",
                            _dark: "gray.400"
                        },
                        children: t("pageSlot.packages.description")
                    }), f ? (0, s.jsx)(c.Flex, {
                        justify: "center",
                        py: 8,
                        children: (0, s.jsx)(u.Spinner, {
                            size: "lg",
                            color: "blue.500"
                        })
                    }) : 0 === S.length ? (0, s.jsx)(n.Box, {
                        p: 8,
                        textAlign: "center",
                        bg: {
                            base: "gray.50",
                            _dark: "gray.800"
                        },
                        borderRadius: "md",
                        children: (0, s.jsx)(p.Text, {
                            color: {
                                base: "gray.500",
                                _dark: "gray.400"
                            },
                            children: t("pageSlot.packages.noPackages")
                        })
                    }) : (0, s.jsx)(g.Grid, {
                        templateColumns: {
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)"
                        },
                        gap: 4,
                        children: S.map((e, a) => (0, s.jsxs)(d.Card.Root, {
                            borderWidth: "2px",
                            borderColor: 0 === a ? {
                                base: "blue.500",
                                _dark: "blue.400"
                            } : {
                                base: "gray.200",
                                _dark: "gray.700"
                            },
                            bg: {
                                base: "white",
                                _dark: "gray.800"
                            },
                            position: "relative",
                            overflow: "hidden",
                            _hover: {
                                borderColor: {
                                    base: "blue.400",
                                    _dark: "blue.500"
                                },
                                shadow: "md"
                            },
                            transition: "all 0.2s",
                            children: [0 === a && (0, s.jsx)(i.Badge, {
                                position: "absolute",
                                top: 2,
                                right: 2,
                                colorScheme: "blue",
                                fontSize: "xs",
                                px: 2,
                                py: 1,
                                children: t("pageSlot.packages.popular")
                            }), (0, s.jsx)(d.Card.Body, {
                                p: 4,
                                children: (0, s.jsxs)(x.VStack, {
                                    gap: 3,
                                    align: "stretch",
                                    children: [(0, s.jsxs)(c.Flex, {
                                        align: "center",
                                        gap: 2,
                                        children: [(0, s.jsx)(n.Box, {
                                            p: 2,
                                            borderRadius: "md",
                                            bg: {
                                                base: "blue.50",
                                                _dark: "blue.900/20"
                                            },
                                            color: {
                                                base: "blue.600",
                                                _dark: "blue.400"
                                            },
                                            children: (0, s.jsx)(b.FiPackage, {
                                                size: 20
                                            })
                                        }), (0, s.jsx)(n.Box, {
                                            flex: 1,
                                            children: (0, s.jsx)(p.Text, {
                                                fontWeight: "bold",
                                                fontSize: "md",
                                                color: {
                                                    base: "gray.900",
                                                    _dark: "gray.100"
                                                },
                                                children: e.name
                                            })
                                        })]
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        minH: "32px",
                                        children: e.description
                                    }), (0, s.jsxs)(n.Box, {
                                        p: 2,
                                        borderRadius: "md",
                                        bg: {
                                            base: "gray.50",
                                            _dark: "gray.700"
                                        },
                                        textAlign: "center",
                                        children: [(0, s.jsx)(p.Text, {
                                            fontSize: "2xl",
                                            fontWeight: "bold",
                                            color: {
                                                base: "blue.600",
                                                _dark: "blue.400"
                                            },
                                            children: e.slotCount
                                        }), (0, s.jsx)(p.Text, {
                                            fontSize: "xs",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: t("pageSlot.packages.slotCount")
                                        })]
                                    }), (0, s.jsxs)(n.Box, {
                                        textAlign: "center",
                                        py: 2,
                                        children: [(0, s.jsx)(p.Text, {
                                            fontSize: "2xl",
                                            fontWeight: "bold",
                                            color: {
                                                base: "green.600",
                                                _dark: "green.400"
                                            },
                                            children: e.priceCents.toLocaleString("vi-VN")
                                        }), (0, s.jsx)(p.Text, {
                                            fontSize: "xs",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: t("pageSlot.packages.vnd")
                                        })]
                                    }), (0, s.jsx)(o.default, {
                                        variant: 0 === a ? "fill" : "outline",
                                        onClick: () => {
                                            j(e), C(!0)
                                        },
                                        icon: (0, s.jsx)(b.FiShoppingCart, {}),
                                        size: "sm",
                                        className: "w-full",
                                        children: t("pageSlot.packages.purchase")
                                    })]
                                })
                            })]
                        }, e.id))
                    }), (0, s.jsx)(c.Flex, {
                        justify: "flex-end",
                        pt: 2,
                        children: (0, s.jsx)(o.default, {
                            variant: "outline",
                            onClick: r,
                            size: "sm",
                            children: t("pageSlot.error.close")
                        })
                    })]
                })
            }), k && (0, s.jsx)(B, {
                isOpen: v,
                onClose: () => {
                    C(!1), j(null)
                },
                package: k
            })]
        })
    }
    e.s(["default", () => A], 857405)
}, 450249, e => {
    "use strict";
    var a = e.i(483632),
        r = e.i(649760),
        t = e.i(676525),
        s = e.i(101208),
        o = e.i(469562),
        l = e.i(986530),
        i = e.i(334863),
        n = e.i(79663),
        d = e.i(642139),
        c = e.i(564668),
        g = e.i(494114),
        u = e.i(215669),
        p = e.i(165341),
        x = e.i(878262),
        m = e.i(51715),
        h = e.i(791089),
        b = e.i(118190),
        y = e.i(833707),
        S = e.i(251570);
    e.i(308972);
    var f = e.i(445979),
        k = e.i(569210),
        j = e.i(84723),
        v = e.i(681456),
        C = e.i(857405);
    let _ = {
        free: 0,
        basic: 1,
        pro: 2,
        vip: 3
    };
    e.s(["default", 0, e => {
        let {
            isOpen: P,
            onClose: T,
            templateId: M,
            templateTier: z,
            pageType: w = d.PageType.NORMAL,
            category: F,
            onSubmitOverride: W,
            isSubmittingOverride: B = !1,
            submitLabel: A,
            showTierWarning: E = !0
        } = e, {
            t: R
        } = (0, f.useTranslation)(), I = (0, y.useRouter)(), V = R("page.createPage.defaults.title", "Đám cưới Tên chú rể & Tên cô dâu"), [N, D] = (0, S.useState)({
            title: V,
            templateId: M || 0,
            type: w,
            category: F,
            domain: "",
            eventAt: new Date
        }), [q, L] = (0, S.useState)(null), [O, H] = (0, S.useState)(""), [U, Q] = (0, S.useState)(!1), [K, G] = (0, S.useState)(null), [Y, X] = (0, S.useState)(!1), Z = (0, S.useRef)(0), [$, J] = (0, S.useState)(!1), [ee, ea] = (0, S.useState)(""), er = (0, d.useCreatePage)(), {
            data: et
        } = (0, n.useGetCurrentSubscription)(), es = (null == et ? void 0 : et.tier) || "basic", eo = z || (null == q ? void 0 : q.tier) || "free", el = (0, o.useColorModeValue)("gray.50", "gray.800"), ei = (0, o.useColorModeValue)("gray.200", "gray.700"), en = (0, o.useColorModeValue)("white", "gray.900"), ed = (0, o.useColorModeValue)("gray.300", "gray.600"), ec = (0, o.useColorModeValue)("pink.300", "pink.500"), eg = (0, o.useColorModeValue)("gray.700", "gray.200"), eu = (0, o.useColorModeValue)("gray.500", "gray.400"), ep = (0, o.useColorModeValue)("gray.600", "gray.300"), ex = (0, S.useMemo)(() => !!N.templateId && (_[es] || 0) < (_[eo] || 0), [es, eo, N.templateId]);
        (0, S.useEffect)(() => {
            D(e => ({ ...e,
                templateId: M || 0,
                type: w,
                category: F
            }))
        }, [M, w, F]);
        let em = (0, S.useMemo)(() => (0, v.normalizeSystemSubdomain)(O), [O]),
            eh = (0, S.useMemo)(() => (0, v.validateSystemSubdomain)(O), [O]),
            eb = (0, S.useMemo)(() => {
                switch (eh) {
                    case "required":
                        return R("page.createPage.errors.domainRequired");
                    case "invalid":
                        return R("page.createPage.errors.domainInvalid");
                    case "tooShort":
                        return R("page.createPage.errors.domainTooShort");
                    default:
                        return ""
                }
            }, [eh, R]),
            ey = U || !!em,
            eS = (0, S.useMemo)(() => {
                let e;
                return (e = O.trim().toLowerCase()) ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, 63) : ""
            }, [O]),
            ef = "invalid" === eh && !!eS && eS !== em;
        (0, S.useEffect)(() => {
            Z.current += 1;
            let e = Z.current;
            if (eh) {
                G(null), X(!1);
                return
            }
            let a = setTimeout(async () => {
                X(!0);
                try {
                    let a = await (0, d.checkDomainAvailability)((0, v.getSystemFullDomain)(em));
                    e === Z.current && G(a)
                } catch {
                    e === Z.current && G({
                        available: !1,
                        message: R("domain.errors.checkFailed")
                    })
                } finally {
                    e === Z.current && X(!1)
                }
            }, 500);
            return () => clearTimeout(a)
        }, [eh, em, R]);
        let ek = (e, a) => {
                D(r => ({ ...r,
                    [e]: a
                }))
            },
            ej = (0, S.useMemo)(() => !(N.eventAt instanceof Date) || Number.isNaN(N.eventAt.getTime()) ? "" : N.eventAt.toISOString().split("T")[0], [N.eventAt]),
            ev = (0, S.useMemo)(() => N.eventAt instanceof Date && !Number.isNaN(N.eventAt.getTime()), [N.eventAt]),
            eC = B || er.isPending,
            e_ = (0, S.useMemo)(() => !!(!eC && N.title.trim() && N.templateId && ev && !eh && !Y && (null == K ? void 0 : K.available)), [eC, N.title, N.templateId, ev, eh, Y, null == K ? void 0 : K.available]),
            eP = !eh && !!K,
            eT = ey && !!(eh && eb),
            eM = async () => {
                if (!N.title.trim()) return void i.toaster.error({
                    title: R("page.createPage.errors.titleRequired"),
                    description: R("page.createPage.errors.titleRequired")
                });
                if (!N.templateId || 0 === N.templateId) return;
                if (!ev) return void i.toaster.error({
                    title: R("page.createPage.errors.eventDateRequired"),
                    description: R("page.createPage.errors.eventDateRequired")
                });
                let e = (0, v.validateSystemSubdomain)(O);
                if (e) {
                    Q(!0), (e => {
                        switch (e) {
                            case "required":
                                i.toaster.error({
                                    title: R("page.createPage.errors.domainRequired"),
                                    description: R("page.createPage.errors.domainRequired")
                                });
                                return;
                            case "invalid":
                                i.toaster.error({
                                    title: R("page.createPage.errors.domainInvalid"),
                                    description: R("page.createPage.errors.domainInvalid")
                                });
                                return;
                            case "tooShort":
                                i.toaster.error({
                                    title: R("page.createPage.errors.domainTooShort"),
                                    description: R("page.createPage.errors.domainTooShort")
                                });
                                return;
                            default:
                                return
                        }
                    })(e);
                    return
                }
                if (Y) return void i.toaster.error({
                    title: R("page.createPage.errors.domainChecking"),
                    description: R("page.createPage.errors.domainChecking")
                });
                if (!(null == K ? void 0 : K.available)) return void i.toaster.error({
                    title: R("page.createPage.errors.domainNotAvailable"),
                    description: (null == K ? void 0 : K.message) || R("page.createPage.errors.domainNotAvailable")
                });
                let a = (0, v.getSystemFullDomain)(O),
                    r = { ...N,
                        title: N.title.trim(),
                        domain: a,
                        eventAt: N.eventAt
                    };
                try {
                    if (W) {
                        await W(r), T(), ez();
                        return
                    }
                    let e = await er.mutateAsync(r);
                    I.push("/builder/" + e.id.toString()), T(), ez()
                } catch (a) {
                    var t, s;
                    if (W) return;
                    let e = (null == a || null == (s = a.response) || null == (t = s.data) ? void 0 : t.message) || R("errors.somethingWentWrong");
                    if (e.toLowerCase().includes("slot") || e.toLowerCase().includes("trang")) return void ea(e);
                    i.toaster.create({
                        title: "Error",
                        description: e,
                        type: "error"
                    })
                }
            },
            ez = () => {
                D({
                    title: V,
                    templateId: M || 0,
                    type: w,
                    category: F,
                    domain: "",
                    eventAt: new Date
                }), L(null), G(null), H(""), Q(!1), X(!1), Z.current += 1
            },
            ew = () => {
                ez(), T()
            };
        return (0, a.jsxs)(x.Portal, {
            children: [(0, a.jsxs)(r.ModalBasic, {
                isOpen: P,
                title: R("page.createPage.title"),
                onClose: ew,
                maxWidth: "620px",
                maxHeight: {
                    base: "88vh",
                    md: "82vh"
                },
                children: [(0, a.jsxs)(b.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: [E && ex && (0, a.jsx)(c.Box, {
                        p: 4,
                        bg: {
                            base: "orange.50",
                            _dark: "orange.900/20"
                        },
                        borderLeftWidth: 4,
                        borderLeftColor: "orange.500",
                        borderRadius: "lg",
                        borderWidth: "1px",
                        borderColor: {
                            base: "orange.200",
                            _dark: "orange.800"
                        },
                        children: (0, a.jsxs)(b.VStack, {
                            align: "stretch",
                            gap: 3,
                            children: [(0, a.jsxs)(u.HStack, {
                                gap: 2,
                                children: [(0, a.jsx)(k.FaExclamationTriangle, {
                                    color: "#f97316",
                                    size: 18
                                }), (0, a.jsx)(h.Text, {
                                    fontWeight: "semibold",
                                    color: {
                                        base: "orange.800",
                                        _dark: "orange.200"
                                    },
                                    fontSize: "sm",
                                    children: R("page.createPage.tierWarning.title")
                                })]
                            }), (0, a.jsx)(h.Text, {
                                fontSize: "sm",
                                color: {
                                    base: "orange.700",
                                    _dark: "orange.300"
                                },
                                children: R("page.createPage.tierWarning.description", {
                                    templateTier: eo.toUpperCase(),
                                    userTier: es.toUpperCase()
                                })
                            }), (0, a.jsx)(u.HStack, {
                                gap: 2,
                                children: (0, a.jsxs)(t.default, {
                                    size: "sm",
                                    variant: "fill",
                                    onClick: () => I.push("/wedding/manager?tab=upgrade"),
                                    children: [(0, a.jsx)(k.FaCrown, {
                                        size: 14
                                    }), R("page.createPage.tierWarning.upgradeButton")]
                                })
                            })]
                        })
                    }), ee && (0, a.jsx)(c.Box, {
                        p: 4,
                        bg: {
                            base: "red.50",
                            _dark: "red.900/20"
                        },
                        borderLeftWidth: 4,
                        borderLeftColor: "red.500",
                        borderRadius: "lg",
                        borderWidth: "1px",
                        borderColor: {
                            base: "red.200",
                            _dark: "red.800"
                        },
                        children: (0, a.jsxs)(b.VStack, {
                            align: "stretch",
                            gap: 3,
                            children: [(0, a.jsxs)(u.HStack, {
                                gap: 2,
                                children: [(0, a.jsx)(k.FaExclamationTriangle, {
                                    color: "#ef4444",
                                    size: 18
                                }), (0, a.jsx)(h.Text, {
                                    fontWeight: "semibold",
                                    color: {
                                        base: "red.800",
                                        _dark: "red.200"
                                    },
                                    fontSize: "sm",
                                    children: R("pageSlot.error.title")
                                })]
                            }), (0, a.jsx)(h.Text, {
                                fontSize: "sm",
                                color: {
                                    base: "red.700",
                                    _dark: "red.300"
                                },
                                children: ee
                            }), (0, a.jsxs)(u.HStack, {
                                gap: 2,
                                children: [(0, a.jsx)(t.default, {
                                    size: "sm",
                                    variant: "fill",
                                    onClick: () => J(!0),
                                    icon: (0, a.jsx)(j.FiShoppingCart, {}),
                                    children: R("pageSlot.error.buyMore")
                                }), (0, a.jsx)(t.default, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => ea(""),
                                    children: R("pageSlot.error.close")
                                })]
                            })]
                        })
                    }), (0, a.jsxs)(b.VStack, {
                        gap: 4,
                        align: "stretch",
                        p: {
                            base: 3,
                            md: 4
                        },
                        borderWidth: "1px",
                        borderColor: ei,
                        borderRadius: "xl",
                        bg: el,
                        children: [(0, a.jsx)(l.Field, {
                            label: R("page.createPage.fields.title"),
                            required: !0,
                            children: (0, a.jsx)(p.Input, {
                                value: N.title,
                                onChange: e => ek("title", e.target.value),
                                placeholder: R("page.createPage.placeholders.title"),
                                bg: en,
                                borderColor: ed,
                                _hover: {
                                    borderColor: ec
                                },
                                _focus: {
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 0 1px var(--chakra-colors-pink-500)"
                                }
                            })
                        }), (0, a.jsx)(l.Field, {
                            label: R("page.createPage.fields.eventDate"),
                            required: !0,
                            children: (0, a.jsx)(s.DateInput, {
                                value: ej,
                                onChange: e => ek("eventAt", e ? new Date(e) : ""),
                                bg: en,
                                borderColor: ed
                            })
                        }), (0, a.jsxs)(c.Box, {
                            children: [(0, a.jsxs)(h.Text, {
                                fontSize: "sm",
                                fontWeight: "semibold",
                                mb: 2,
                                color: eg,
                                children: [R("page.createPage.fields.domain"), " ", (0, a.jsx)(h.Text, {
                                    as: "span",
                                    color: "red.500",
                                    children: "*"
                                })]
                            }), (0, a.jsxs)(g.Flex, {
                                gap: 2,
                                align: "center",
                                flexWrap: {
                                    base: "wrap",
                                    sm: "nowrap"
                                },
                                children: [(0, a.jsx)(p.Input, {
                                    placeholder: R("page.createPage.placeholders.subdomain"),
                                    value: O,
                                    onChange: e => {
                                        H(e.target.value.toLowerCase()), Q(!0)
                                    },
                                    onBlur: () => Q(!0),
                                    flex: 1,
                                    minW: {
                                        base: "100%",
                                        sm: "180px"
                                    },
                                    bg: en,
                                    borderColor: ed,
                                    _hover: {
                                        borderColor: ec
                                    },
                                    _focus: {
                                        borderColor: "pink.500",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-500)"
                                    }
                                }), (0, a.jsx)(c.Box, {
                                    px: 3,
                                    py: 2,
                                    borderRadius: "md",
                                    bg: en,
                                    borderWidth: "1px",
                                    borderColor: ed,
                                    children: (0, a.jsx)(h.Text, {
                                        color: ep,
                                        fontSize: "sm",
                                        whiteSpace: "nowrap",
                                        children: v.SYSTEM_DOMAIN_SUFFIX
                                    })
                                }), Y && (0, a.jsx)(m.Spinner, {
                                    size: "sm",
                                    color: "pink.500"
                                })]
                            }), (0, a.jsx)(h.Text, {
                                fontSize: "xs",
                                color: eu,
                                mt: 1.5,
                                children: R("page.createPage.helper.subdomain")
                            }), (0, a.jsx)(h.Text, {
                                fontSize: "xs",
                                color: {
                                    base: "blue.600",
                                    _dark: "blue.300"
                                },
                                mt: 1,
                                children: R("page.createPage.helper.customDomainHint", "Bạn có thể cài đặt tên miền riêng (ví dụ: yourname.com) sau khi tạo trang trong phần Cài đặt.")
                            }), eT && (0, a.jsx)(c.Box, {
                                mt: 3,
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "red.50",
                                    _dark: "red.900/20"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "red.200",
                                    _dark: "red.700"
                                },
                                children: (0, a.jsxs)(u.HStack, {
                                    gap: 2,
                                    align: "flex-start",
                                    children: [(0, a.jsx)(c.Box, {
                                        pt: "2px",
                                        children: (0, a.jsx)(k.FaTimes, {
                                            color: "#dc2626",
                                            size: 13
                                        })
                                    }), (0, a.jsx)(h.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "red.700",
                                            _dark: "red.300"
                                        },
                                        children: eb
                                    })]
                                })
                            }), ef && (0, a.jsx)(c.Box, {
                                mt: 2,
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "blue.50",
                                    _dark: "blue.900/20"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.200",
                                    _dark: "blue.700"
                                },
                                children: (0, a.jsxs)(b.VStack, {
                                    align: "stretch",
                                    gap: 2,
                                    children: [(0, a.jsx)(h.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "blue.700",
                                            _dark: "blue.300"
                                        },
                                        children: R("page.createPage.suggestion.message", {
                                            domain: "".concat(eS).concat(v.SYSTEM_DOMAIN_SUFFIX)
                                        })
                                    }), (0, a.jsx)(u.HStack, {
                                        justify: "flex-end",
                                        children: (0, a.jsx)(t.default, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => {
                                                H(eS), Q(!0)
                                            },
                                            children: R("page.createPage.suggestion.apply")
                                        })
                                    })]
                                })
                            }), eP && (0, a.jsx)(c.Box, {
                                mt: 3,
                                p: 3,
                                borderRadius: "md",
                                bg: (null == K ? void 0 : K.available) ? {
                                    base: "green.50",
                                    _dark: "green.900/20"
                                } : {
                                    base: "red.50",
                                    _dark: "red.900/20"
                                },
                                borderWidth: "1px",
                                borderColor: (null == K ? void 0 : K.available) ? {
                                    base: "green.200",
                                    _dark: "green.700"
                                } : {
                                    base: "red.200",
                                    _dark: "red.700"
                                },
                                children: (0, a.jsxs)(u.HStack, {
                                    gap: 2,
                                    children: [(null == K ? void 0 : K.available) ? (0, a.jsx)(k.FaCheck, {
                                        color: "#16a34a",
                                        size: 14
                                    }) : (0, a.jsx)(k.FaTimes, {
                                        color: "#dc2626",
                                        size: 14
                                    }), (0, a.jsx)(h.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: (null == K ? void 0 : K.available) ? {
                                            base: "green.700",
                                            _dark: "green.300"
                                        } : {
                                            base: "red.700",
                                            _dark: "red.300"
                                        },
                                        children: null == K ? void 0 : K.message
                                    })]
                                })
                            })]
                        })]
                    })]
                }), (0, a.jsxs)(u.HStack, {
                    justify: "flex-end",
                    mt: 6,
                    gap: 3,
                    children: [(0, a.jsx)(t.default, {
                        variant: "ghost",
                        onClick: ew,
                        children: R("page.createPage.actions.cancel")
                    }), (0, a.jsx)(t.default, {
                        variant: "fill",
                        onClick: eM,
                        disabled: !e_,
                        children: eC ? R("page.createPage.actions.creating") : A || R("page.createPage.actions.create")
                    })]
                })]
            }), (0, a.jsx)(C.default, {
                isOpen: $,
                onClose: () => {
                    J(!1), ea("")
                }
            })]
        })
    }])
}]);

//# debugId=132c6d92-4dc9-3305-07ce-a6bef3793f23
//# sourceMappingURL=73ffe5ae5dce87b5.js.map