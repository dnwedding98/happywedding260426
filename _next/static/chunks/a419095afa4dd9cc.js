;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "c0e98364-36d7-7bda-571e-accc9b522d15")
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
        h = e.i(251570);
    e.i(308972);
    var m = e.i(445979),
        b = e.i(84723),
        y = e.i(649760),
        S = e.i(334863),
        f = e.i(201975),
        k = e.i(297272),
        j = e.i(162234),
        v = e.i(215669),
        C = e.i(119887),
        _ = e.i(165341),
        P = e.i(389868),
        T = e.i(940948);

    function z(e) {
        var a;
        let {
            isOpen: r,
            onClose: t,
            package: d
        } = e, {
            t: g
        } = (0, m.useTranslation)(), u = (0, T.useQueryClient)(), [z, M] = (0, h.useState)(!1), [w, F] = (0, h.useState)(""), [W, B] = (0, h.useState)(null), [R, A] = (0, h.useState)(null), I = (0, l.useCreatePageSlotOrder)(), {
            data: V
        } = (0, f.useGetOrderDetails)(W), q = (0, k.usePaymentNotifications)(), D = (0, h.useRef)(null);
        (0, h.useEffect)(() => {
            r && (F(""), B(null), A(null), M(!1), D.current = null)
        }, [r]), (0, h.useEffect)(() => {
            let e = null == V ? void 0 : V.status;
            e && D.current !== e && ("paid" === e ? (D.current = e, q.showPaymentSuccess(), t()) : "failed" === e ? (D.current = e, q.showPaymentFailed(), M(!1)) : "canceled" === e && (D.current = e, q.showPaymentFailed(g("pageSlot.purchaseModal.orderCanceled")), M(!1)))
        }, [null == V ? void 0 : V.status, u, t, q, g]);
        let N = async () => {
            M(!0);
            try {
                let e = {
                        catalogId: d.id,
                        ...w.trim() && {
                            promotionCode: w.trim()
                        }
                    },
                    a = await I.mutateAsync(e);
                B(a.orderId), A(a), q.showOrderCreated()
            } catch (e) {
                queueMicrotask(() => {
                    var a, r;
                    S.toaster.create({
                        title: g("pageSlot.messages.purchaseError"),
                        description: (null == (r = e.response) || null == (a = r.data) ? void 0 : a.message) || "Có lỗi xảy ra khi tạo đơn hàng",
                        type: "error"
                    })
                }), M(!1)
            }
        };
        return (0, s.jsx)(y.ModalBasic, {
            isOpen: r,
            onClose: t,
            title: g("pageSlot.purchaseModal.title"),
            maxWidth: "500px",
            children: (0, s.jsxs)(x.VStack, {
                gap: 4,
                align: "stretch",
                py: 2,
                children: [!R && (0, s.jsxs)(s.Fragment, {
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
                                    children: d.description
                                }), (0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: d.name
                                })]
                            })]
                        }), (0, s.jsxs)(P.Stack, {
                            gap: 1.5,
                            children: [(0, s.jsxs)(c.Flex, {
                                justify: "space-between",
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: g("pageSlot.purchaseModal.slotCount")
                                }), (0, s.jsxs)(p.Text, {
                                    fontWeight: "semibold",
                                    fontSize: "sm",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: [d.slotCount, " ", g("pageSlot.purchaseModal.slots")]
                                })]
                            }), (0, s.jsxs)(c.Flex, {
                                justify: "space-between",
                                children: [(0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: g("pageSlot.purchaseModal.price")
                                }), (0, s.jsxs)(p.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "green.600",
                                        _dark: "green.400"
                                    },
                                    children: [d.priceCents.toLocaleString("vi-VN"), " ", g("pageSlot.purchaseModal.vnd")]
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
                            children: g("pageSlot.purchaseModal.promotionCode")
                        }), (0, s.jsx)(_.Input, {
                            placeholder: g("pageSlot.purchaseModal.promotionCodePlaceholder"),
                            value: w,
                            onChange: e => F(e.target.value),
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
                    }), (0, s.jsxs)(j.Alert.Root, {
                        status: "info",
                        variant: "subtle",
                        size: "sm",
                        children: [(0, s.jsx)(j.Alert.Indicator, {
                            children: (0, s.jsx)(b.FiAlertCircle, {})
                        }), (0, s.jsx)(j.Alert.Content, {
                            children: (0, s.jsx)(p.Text, {
                                fontSize: "xs",
                                children: g("pageSlot.purchaseModal.note")
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
                                children: g("pageSlot.purchaseModal.total")
                            }), (0, s.jsxs)(p.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: [d.priceCents.toLocaleString("vi-VN"), " ", g("pageSlot.purchaseModal.vnd")]
                            })]
                        })
                    })]
                }), W && R && (0, s.jsxs)(x.VStack, {
                    gap: 6,
                    textAlign: "center",
                    w: "full",
                    children: [V && (0, s.jsxs)(i.Badge, {
                        size: "lg",
                        colorScheme: "paid" === V.status ? "green" : "failed" === V.status || "canceled" === V.status ? "red" : "blue",
                        px: 4,
                        py: 1,
                        borderRadius: "full",
                        children: ["paid" === V.status && g("pricing.purchaseModal.status.paid"), "requires_payment" === V.status && g("pricing.purchaseModal.status.requiresPayment"), "created" === V.status && g("pricing.purchaseModal.status.created"), "failed" === V.status && g("pricing.purchaseModal.status.failed"), "canceled" === V.status && g("pricing.purchaseModal.status.canceled")]
                    }), (null == V ? void 0 : V.status) === "paid" ? (0, s.jsxs)(x.VStack, {
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
                                children: g("pricing.purchaseModal.paymentSuccess")
                            }), (0, s.jsx)(p.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: g("pageSlot.messages.paymentSuccess")
                            })]
                        })]
                    }) : (null == V ? void 0 : V.status) === "failed" || (null == V ? void 0 : V.status) === "canceled" ? (0, s.jsxs)(x.VStack, {
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
                                children: g("pricing.purchaseModal.paymentFailed")
                            }), (0, s.jsx)(p.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: g("pricing.purchaseModal.paymentFailedDesc")
                            })]
                        })]
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
                                    children: g("pageSlot.paymentModal.scanQR")
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
                                    children: R.qrImgUrl ? (0, s.jsx)(C.Image, {
                                        src: R.qrImgUrl,
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
                                            children: g("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, s.jsx)(p.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    children: g("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), R.bank && R.accountNumber && (0, s.jsx)(n.Box, {
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
                                    children: g("pageSlot.paymentModal.bankInfo")
                                }), (0, s.jsxs)(v.HStack, {
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
                                        children: g("pageSlot.paymentModal.bank")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.900",
                                            _dark: "gray.100"
                                        },
                                        children: R.bank
                                    })]
                                }), (0, s.jsxs)(v.HStack, {
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
                                        children: g("pageSlot.paymentModal.accountNumber")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        fontFamily: "mono",
                                        children: R.accountNumber
                                    })]
                                }), R.transferDescription && (0, s.jsxs)(v.HStack, {
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
                                        children: g("pageSlot.paymentModal.transferDescription")
                                    }), (0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        fontFamily: "mono",
                                        children: R.transferDescription
                                    })]
                                }), (0, s.jsxs)(v.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, s.jsx)(p.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: g("pageSlot.paymentModal.amount")
                                    }), (0, s.jsxs)(p.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "rose.500",
                                            _dark: "rose.400"
                                        },
                                        children: [((null == (a = R.summary) ? void 0 : a.total) || d.priceCents).toLocaleString("vi-VN"), " ", g("pageSlot.paymentModal.vnd")]
                                    })]
                                })]
                            })
                        })]
                    })]
                }), !R && (0, s.jsxs)(c.Flex, {
                    justify: "flex-end",
                    gap: 2,
                    pt: 2,
                    children: [(0, s.jsx)(o.default, {
                        variant: "outline",
                        onClick: t,
                        disabled: z,
                        size: "sm",
                        children: g("pageSlot.purchaseModal.cancel")
                    }), (0, s.jsx)(o.default, {
                        variant: "fill",
                        onClick: N,
                        disabled: z,
                        size: "sm",
                        children: z ? g("pageSlot.purchaseModal.processing") : g("pageSlot.purchaseModal.confirm")
                    })]
                })]
            })
        })
    }

    function M(e) {
        let {
            isOpen: a,
            onClose: r
        } = e, {
            t
        } = (0, m.useTranslation)(), {
            data: S = [],
            isLoading: f
        } = (0, l.useGetPageSlotPackages)(), [k, j] = (0, h.useState)(null), [v, C] = (0, h.useState)(!1);
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
            }), k && (0, s.jsx)(z, {
                isOpen: v,
                onClose: () => {
                    C(!1), j(null)
                },
                package: k
            })]
        })
    }
    e.s(["default", () => M], 857405)
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
        h = e.i(51715),
        m = e.i(791089),
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
            templateId: z,
            templateTier: M,
            pageType: w = d.PageType.NORMAL,
            category: F,
            onSubmitOverride: W,
            isSubmittingOverride: B = !1,
            submitLabel: R,
            showTierWarning: A = !0
        } = e, {
            t: I
        } = (0, f.useTranslation)(), V = (0, y.useRouter)(), q = I("page.createPage.defaults.title", "Đám cưới Tên chú rể & Tên cô dâu"), [D, N] = (0, S.useState)({
            title: q,
            templateId: z || 0,
            type: w,
            category: F,
            domain: "",
            eventAt: new Date
        }), [E, O] = (0, S.useState)(null), [H, Q] = (0, S.useState)(""), [L, U] = (0, S.useState)(!1), [K, G] = (0, S.useState)(null), [X, Y] = (0, S.useState)(!1), $ = (0, S.useRef)(0), [J, Z] = (0, S.useState)(!1), [ee, ea] = (0, S.useState)(""), er = (0, d.useCreatePage)(), {
            data: et
        } = (0, n.useGetCurrentSubscription)(), es = (null == et ? void 0 : et.tier) || "basic", eo = M || (null == E ? void 0 : E.tier) || "free", el = (0, o.useColorModeValue)("gray.50", "gray.800"), ei = (0, o.useColorModeValue)("gray.200", "gray.700"), en = (0, o.useColorModeValue)("white", "gray.900"), ed = (0, o.useColorModeValue)("gray.300", "gray.600"), ec = (0, o.useColorModeValue)("pink.300", "pink.500"), eg = (0, o.useColorModeValue)("gray.700", "gray.200"), eu = (0, o.useColorModeValue)("gray.500", "gray.400"), ep = (0, o.useColorModeValue)("gray.600", "gray.300"), ex = (0, S.useMemo)(() => !!D.templateId && (_[es] || 0) < (_[eo] || 0), [es, eo, D.templateId]);
        (0, S.useEffect)(() => {
            N(e => ({ ...e,
                templateId: z || 0,
                type: w,
                category: F
            }))
        }, [z, w, F]);
        let eh = (0, S.useMemo)(() => (0, v.normalizeSystemSubdomain)(H), [H]),
            em = (0, S.useMemo)(() => (0, v.validateSystemSubdomain)(H), [H]),
            eb = (0, S.useMemo)(() => {
                switch (em) {
                    case "required":
                        return I("page.createPage.errors.domainRequired");
                    case "invalid":
                        return I("page.createPage.errors.domainInvalid");
                    case "tooShort":
                        return I("page.createPage.errors.domainTooShort");
                    default:
                        return ""
                }
            }, [em, I]),
            ey = L || !!eh,
            eS = (0, S.useMemo)(() => {
                let e;
                return (e = H.trim().toLowerCase()) ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, 63) : ""
            }, [H]),
            ef = "invalid" === em && !!eS && eS !== eh;
        (0, S.useEffect)(() => {
            $.current += 1;
            let e = $.current;
            if (em) {
                G(null), Y(!1);
                return
            }
            let a = setTimeout(async () => {
                Y(!0);
                try {
                    let a = await (0, d.checkDomainAvailability)((0, v.getSystemFullDomain)(eh));
                    e === $.current && G(a)
                } catch {
                    e === $.current && G({
                        available: !1,
                        message: I("domain.errors.checkFailed")
                    })
                } finally {
                    e === $.current && Y(!1)
                }
            }, 500);
            return () => clearTimeout(a)
        }, [em, eh, I]);
        let ek = (e, a) => {
                N(r => ({ ...r,
                    [e]: a
                }))
            },
            ej = (0, S.useMemo)(() => !(D.eventAt instanceof Date) || Number.isNaN(D.eventAt.getTime()) ? "" : D.eventAt.toISOString().split("T")[0], [D.eventAt]),
            ev = (0, S.useMemo)(() => D.eventAt instanceof Date && !Number.isNaN(D.eventAt.getTime()), [D.eventAt]),
            eC = B || er.isPending,
            e_ = (0, S.useMemo)(() => !!(!eC && D.title.trim() && D.templateId && ev && !em && !X && (null == K ? void 0 : K.available)), [eC, D.title, D.templateId, ev, em, X, null == K ? void 0 : K.available]),
            eP = !em && !!K,
            eT = ey && !!(em && eb),
            ez = async () => {
                if (!D.title.trim()) return void i.toaster.error({
                    title: I("page.createPage.errors.titleRequired"),
                    description: I("page.createPage.errors.titleRequired")
                });
                if (!D.templateId || 0 === D.templateId) return;
                if (!ev) return void i.toaster.error({
                    title: I("page.createPage.errors.eventDateRequired"),
                    description: I("page.createPage.errors.eventDateRequired")
                });
                let e = (0, v.validateSystemSubdomain)(H);
                if (e) {
                    U(!0), (e => {
                        switch (e) {
                            case "required":
                                i.toaster.error({
                                    title: I("page.createPage.errors.domainRequired"),
                                    description: I("page.createPage.errors.domainRequired")
                                });
                                return;
                            case "invalid":
                                i.toaster.error({
                                    title: I("page.createPage.errors.domainInvalid"),
                                    description: I("page.createPage.errors.domainInvalid")
                                });
                                return;
                            case "tooShort":
                                i.toaster.error({
                                    title: I("page.createPage.errors.domainTooShort"),
                                    description: I("page.createPage.errors.domainTooShort")
                                });
                                return;
                            default:
                                return
                        }
                    })(e);
                    return
                }
                if (X) return void i.toaster.error({
                    title: I("page.createPage.errors.domainChecking"),
                    description: I("page.createPage.errors.domainChecking")
                });
                if (!(null == K ? void 0 : K.available)) return void i.toaster.error({
                    title: I("page.createPage.errors.domainNotAvailable"),
                    description: (null == K ? void 0 : K.message) || I("page.createPage.errors.domainNotAvailable")
                });
                let a = (0, v.getSystemFullDomain)(H),
                    r = { ...D,
                        title: D.title.trim(),
                        domain: a,
                        eventAt: D.eventAt
                    };
                try {
                    if (W) {
                        await W(r), T(), eM();
                        return
                    }
                    let e = await er.mutateAsync(r);
                    V.push("/builder/" + e.id.toString()), T(), eM()
                } catch (a) {
                    var t, s;
                    if (W) return;
                    let e = (null == a || null == (s = a.response) || null == (t = s.data) ? void 0 : t.message) || I("errors.somethingWentWrong");
                    if (e.toLowerCase().includes("slot") || e.toLowerCase().includes("trang")) return void ea(e);
                    i.toaster.create({
                        title: "Error",
                        description: e,
                        type: "error"
                    })
                }
            },
            eM = () => {
                N({
                    title: q,
                    templateId: z || 0,
                    type: w,
                    category: F,
                    domain: "",
                    eventAt: new Date
                }), O(null), G(null), Q(""), U(!1), Y(!1), $.current += 1
            },
            ew = () => {
                eM(), T()
            };
        return (0, a.jsxs)(x.Portal, {
            children: [(0, a.jsxs)(r.ModalBasic, {
                isOpen: P,
                title: I("page.createPage.title"),
                onClose: ew,
                maxWidth: "620px",
                maxHeight: {
                    base: "88vh",
                    md: "82vh"
                },
                children: [(0, a.jsxs)(b.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: [A && ex && (0, a.jsx)(c.Box, {
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
                                }), (0, a.jsx)(m.Text, {
                                    fontWeight: "semibold",
                                    color: {
                                        base: "orange.800",
                                        _dark: "orange.200"
                                    },
                                    fontSize: "sm",
                                    children: I("page.createPage.tierWarning.title")
                                })]
                            }), (0, a.jsx)(m.Text, {
                                fontSize: "sm",
                                color: {
                                    base: "orange.700",
                                    _dark: "orange.300"
                                },
                                children: I("page.createPage.tierWarning.description", {
                                    templateTier: eo.toUpperCase(),
                                    userTier: es.toUpperCase()
                                })
                            }), (0, a.jsx)(u.HStack, {
                                gap: 2,
                                children: (0, a.jsxs)(t.default, {
                                    size: "sm",
                                    variant: "fill",
                                    onClick: () => V.push("/wedding/manager?tab=upgrade"),
                                    children: [(0, a.jsx)(k.FaCrown, {
                                        size: 14
                                    }), I("page.createPage.tierWarning.upgradeButton")]
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
                                }), (0, a.jsx)(m.Text, {
                                    fontWeight: "semibold",
                                    color: {
                                        base: "red.800",
                                        _dark: "red.200"
                                    },
                                    fontSize: "sm",
                                    children: I("pageSlot.error.title")
                                })]
                            }), (0, a.jsx)(m.Text, {
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
                                    onClick: () => Z(!0),
                                    icon: (0, a.jsx)(j.FiShoppingCart, {}),
                                    children: I("pageSlot.error.buyMore")
                                }), (0, a.jsx)(t.default, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => ea(""),
                                    children: I("pageSlot.error.close")
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
                            label: I("page.createPage.fields.title"),
                            required: !0,
                            children: (0, a.jsx)(p.Input, {
                                value: D.title,
                                onChange: e => ek("title", e.target.value),
                                placeholder: I("page.createPage.placeholders.title"),
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
                            label: I("page.createPage.fields.eventDate"),
                            required: !0,
                            children: (0, a.jsx)(s.DateInput, {
                                value: ej,
                                onChange: e => ek("eventAt", e ? new Date(e) : ""),
                                bg: en,
                                borderColor: ed
                            })
                        }), (0, a.jsxs)(c.Box, {
                            children: [(0, a.jsxs)(m.Text, {
                                fontSize: "sm",
                                fontWeight: "semibold",
                                mb: 2,
                                color: eg,
                                children: [I("page.createPage.fields.domain"), " ", (0, a.jsx)(m.Text, {
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
                                    placeholder: I("page.createPage.placeholders.subdomain"),
                                    value: H,
                                    onChange: e => {
                                        Q(e.target.value.toLowerCase()), U(!0)
                                    },
                                    onBlur: () => U(!0),
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
                                    children: (0, a.jsx)(m.Text, {
                                        color: ep,
                                        fontSize: "sm",
                                        whiteSpace: "nowrap",
                                        children: v.SYSTEM_DOMAIN_SUFFIX
                                    })
                                }), X && (0, a.jsx)(h.Spinner, {
                                    size: "sm",
                                    color: "pink.500"
                                })]
                            }), (0, a.jsx)(m.Text, {
                                fontSize: "xs",
                                color: eu,
                                mt: 1.5,
                                children: I("page.createPage.helper.subdomain")
                            }), (0, a.jsx)(m.Text, {
                                fontSize: "xs",
                                color: {
                                    base: "blue.600",
                                    _dark: "blue.300"
                                },
                                mt: 1,
                                children: I("page.createPage.helper.customDomainHint", "Bạn có thể cài đặt tên miền riêng (ví dụ: yourname.com) sau khi tạo trang trong phần Cài đặt.")
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
                                    }), (0, a.jsx)(m.Text, {
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
                                    children: [(0, a.jsx)(m.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "blue.700",
                                            _dark: "blue.300"
                                        },
                                        children: I("page.createPage.suggestion.message", {
                                            domain: "".concat(eS).concat(v.SYSTEM_DOMAIN_SUFFIX)
                                        })
                                    }), (0, a.jsx)(u.HStack, {
                                        justify: "flex-end",
                                        children: (0, a.jsx)(t.default, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => {
                                                Q(eS), U(!0)
                                            },
                                            children: I("page.createPage.suggestion.apply")
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
                                    }), (0, a.jsx)(m.Text, {
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
                        children: I("page.createPage.actions.cancel")
                    }), (0, a.jsx)(t.default, {
                        variant: "fill",
                        onClick: ez,
                        disabled: !e_,
                        children: eC ? I("page.createPage.actions.creating") : R || I("page.createPage.actions.create")
                    })]
                })]
            }), (0, a.jsx)(C.default, {
                isOpen: J,
                onClose: () => {
                    Z(!1), ea("")
                }
            })]
        })
    }])
}]);

//# debugId=c0e98364-36d7-7bda-571e-accc9b522d15
//# sourceMappingURL=18676ba9ff92000b.js.map