;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "6a7751ad-25e6-cd36-e183-6c8ac506a78b")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 676525, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(469562),
        o = e.i(494114);
    let n = r.default.forwardRef((e, r) => {
        let {
            variant: n = "fill",
            size: l = "large",
            children: i,
            icon: s,
            onClick: d,
            disabled: c = !1,
            className: u = "",
            type: h = "button",
            colorScheme: g,
            loading: p,
            customBg: b,
            customHoverBg: y,
            customTextColor: f,
            customBorderRadius: m,
            ...v
        } = e, {
            colorMode: x
        } = (0, a.useColorMode)(), w = "dark" === x, S = {};
        return b && (S.backgroundColor = b), f && (S.color = f), m && (S.borderRadius = m), (0, t.jsxs)("button", {
            ref: r,
            className: "".concat("relative cursor-pointer rounded-xl inline-flex items-center justify-center font-inter transition-colors", " ").concat({
                small: "px-4 py-1 text-sm font-normal rounded-lg",
                large: "px-6 py-2 text-xs sm:text-base font-medium rounded-xl",
                sm: "px-3 py-1.5  sm:text-xs font-normal rounded-lg"
            }[l], " ").concat(b ? "" : (w ? {
                fill: "bg-rose-600 text-white hover:bg-rose-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                outline: "bg-transparent outline outline-1 outline-offset-[-1px] outline-gray-600 text-gray-200 hover:bg-gray-700 disabled:outline-gray-700 disabled:text-gray-600 disabled:hover:bg-transparent",
                yellow: "bg-yellow-600 text-white hover:bg-yellow-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                ghost: "bg-transparent text-gray-200 hover:bg-gray-700 disabled:text-gray-600 disabled:hover:bg-transparent",
                purple: "bg-purple-700 text-white hover:bg-purple-800 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                rose: "bg-rose-500 text-white hover:bg-rose-600 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                black: "bg-gray-800 text-white hover:bg-gray-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                gold: "bg-[#d4ab05] text-white hover:bg-[#c09a04] disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700",
                gradient: "bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-500 disabled:hover:shadow-md disabled:hover:translate-y-0",
                blue: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:hover:bg-gray-700"
            } : {
                fill: "bg-rose-500 text-white hover:bg-rose-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                outline: "bg-transparent outline outline-1 outline-offset-[-1px] outline-gray-300 text-gray-700 hover:bg-gray-50 disabled:outline-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent",
                yellow: "bg-yellow-500 text-white hover:bg-yellow-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                ghost: "bg-transparent text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-transparent",
                purple: "bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                rose: "bg-rose-400 text-white hover:bg-rose-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                black: "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                gold: "bg-[#e7bb06] text-white hover:bg-[#d4ab05] disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
                gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-500 disabled:hover:shadow-md disabled:hover:translate-y-0",
                blue: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300"
            })[n], " ").concat(u, " ").concat(c ? "opacity-50 cursor-not-allowed" : ""),
            onClick: c ? void 0 : d,
            disabled: c,
            type: h,
            style: S,
            onMouseEnter: e => {
                !c && y && (e.currentTarget.style.backgroundColor = y)
            },
            onMouseLeave: e => {
                !c && b && (e.currentTarget.style.backgroundColor = b)
            },
            ...v,
            children: [s && (0, t.jsx)("span", {
                className: "".concat({
                    small: "w-4 h-4 mr-2",
                    large: "w-3.5 h-4 mr-3",
                    sm: "w-3 h-3 mr-1.5"
                }[l], " ").concat((w ? {
                    fill: "text-white",
                    outline: "text-gray-200",
                    yellow: "text-white",
                    ghost: "text-gray-200",
                    purple: "text-white",
                    rose: "text-white",
                    black: "text-white",
                    gold: "text-white",
                    gradient: "text-white",
                    blue: "text-white"
                } : {
                    fill: "text-white",
                    outline: "text-gray-700",
                    yellow: "text-white",
                    ghost: "text-gray-700",
                    purple: "text-white",
                    rose: "text-white",
                    black: "text-white",
                    gold: "text-white",
                    gradient: "text-white",
                    blue: "text-white"
                })[n], " flex items - center justify - center"),
                children: s
            }), (0, t.jsxs)("span", {
                className: "text-center",
                children: ["      ", (0, t.jsx)(o.Flex, {
                    alignItems: "center",
                    gap: 2,
                    children: i
                })]
            })]
        })
    });
    n.displayName = "Button", e.s(["default", 0, n])
}, 119887, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(489198),
        o = e.i(87065);
    let n = (0, r.forwardRef)(function(e, r) {
        let {
            align: n,
            fit: l = "cover",
            ...i
        } = e;
        return (0, t.jsx)(a.chakra.img, {
            ref: r,
            objectFit: l,
            objectPosition: n,
            className: (0, o.cx)("chakra-image", e.className),
            ...i
        })
    });
    n.displayName = "Image", e.s(["Image", () => n])
}, 742758, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "link"
    }), a = t("a");
    a.displayName = "Link", e.s(["Link", () => a])
}, 240938, e => {
    "use strict";
    var t = e.i(251570);

    function r(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            a = (0, t.useRef)(() => {
                throw Error("Cannot call an event handler while rendering.")
            });
        return (0, t.useInsertionEffect)(() => {
            a.current = e
        }), (0, t.useCallback)(function() {
            for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            return null == (e = a.current) ? void 0 : e.call(a, ...r)
        }, r)
    }
    e.s(["useCallbackRef", () => r])
}, 643736, e => {
    "use strict";
    var t = e.i(13484),
        r = e.i(251570),
        a = e.i(240938);

    function o(e, o) {
        let n = (0, t.useChakraContext)().normalizeValue(e),
            l = function() {
                var e, o;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n.fallback || (n.fallback = "base");
                let l = (0, t.useChakraContext)(),
                    i = !1,
                    s = l.breakpoints.values.map(e => {
                        let {
                            min: t,
                            name: r
                        } = e, a = {
                            breakpoint: r,
                            query: "(min-width: ".concat(t, ")"),
                            fallback: !i
                        };
                        return r === n.fallback && (i = !0), a
                    }).filter(e => {
                        var t;
                        let {
                            breakpoint: r
                        } = e;
                        return !!(null == (t = n.breakpoints) ? void 0 : t.includes(r))
                    }),
                    d = s.map(e => {
                        let {
                            fallback: t
                        } = e;
                        return t
                    }),
                    c = (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                fallback: o = [],
                                ssr: n = !0,
                                getWindow: l
                            } = t,
                            i = (0, a.useCallbackRef)(l),
                            s = Array.isArray(e) ? e : [e],
                            d = null == o ? void 0 : o.filter(e => null != e),
                            [c, u] = (0, r.useState)(() => s.map((e, t) => {
                                if (!n) {
                                    var r;
                                    let {
                                        media: t,
                                        matches: a
                                    } = (null != (r = null == l ? void 0 : l()) ? r : window).matchMedia(e);
                                    return {
                                        media: t,
                                        matches: a
                                    }
                                }
                                return {
                                    media: e,
                                    matches: !!d[t]
                                }
                            }));
                        return (0, r.useEffect)(() => {
                            var e;
                            let t = null != (e = i()) ? e : window;
                            u(e => {
                                let r = s.map(e => {
                                    let {
                                        media: r,
                                        matches: a
                                    } = t.matchMedia(e);
                                    return {
                                        media: r,
                                        matches: a
                                    }
                                });
                                return e.every((e, t) => e.matches === r[t].matches && e.media === r[t].media) ? e : r
                            });
                            let r = s.map(e => t.matchMedia(e)),
                                a = e => {
                                    u(t => t.slice().map(t => t.media === e.media ? { ...t,
                                        matches: e.matches
                                    } : t))
                                },
                                o = r.map(e => (function(e, t) {
                                    try {
                                        return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                                    } catch (r) {
                                        return e.addListener(t), () => e.removeListener(t)
                                    }
                                })(e, a));
                            return () => o.forEach(e => e())
                        }, [i]), c.map(e => e.matches)
                    })(s.map(e => e.query), {
                        fallback: d,
                        ssr: n.ssr
                    }).lastIndexOf(!0);
                return null != (o = null == (e = s[c]) ? void 0 : e.breakpoint) ? o : n.fallback
            }({
                breakpoints: Object.keys(n),
                ...o
            });
        return n[l]
    }
    e.s(["useBreakpointValue", () => o], 643736)
}, 201975, 297272, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        o = e.i(649725);
    let n = () => "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
        l = async e => {
            let t = await o.default.post("/billing/page-plan/orders", e, {
                headers: {
                    "Idempotency-Key": n()
                }
            });
            return t.data.data || t.data
        },
        i = async e => {
            let t = await o.default.post("/billing/feature-purchase/orders", e, {
                headers: {
                    "Idempotency-Key": n()
                }
            });
            return t.data.data || t.data
        },
        s = async e => {
            let t = await o.default.get("/billing/orders/".concat(e));
            return t.data.data || t.data
        },
        d = async e => {
            let t = await o.default.post("/billing/orders/".concat(e, "/payment-status/sync"));
            return t.data.data || t.data
        };
    e.s(["getOrderErrorMessage", 0, e => {
        var t, r, a, o, n, l, i, s, d, c, u, h, g, p, b;
        let y = (null == e || null == (r = e.response) || null == (t = r.data) ? void 0 : t.errorCode) || (null == e || null == (n = e.response) || null == (o = n.data) || null == (a = o.data) ? void 0 : a.errorCode),
            f = (null == e || null == (i = e.response) || null == (l = i.data) ? void 0 : l.message) || (null == e || null == (c = e.response) || null == (d = c.data) || null == (s = d.data) ? void 0 : s.message);
        return "PROMOTION_INVALID" === y ? "Mã giảm giá không hợp lệ" : "PROMOTION_NOT_FOUND" === y ? "Mã giảm giá không tồn tại" : "PROMOTION_EXPIRED" === y ? "Mã giảm giá đã hết hạn" : "PROMOTION_NOT_STARTED" === y ? "Mã giảm giá chưa đến thời gian áp dụng" : "PROMOTION_MAX_REDEMPTIONS_REACHED" === y ? "Mã giảm giá đã hết lượt sử dụng" : "PROMOTION_USER_LIMIT_REACHED" === y ? "Bạn đã vượt quá số lần sử dụng mã này" : "PROMOTION_MIN_SUBTOTAL_NOT_MET" === y ? "Đơn hàng chưa đạt giá trị tối thiểu để áp dụng mã" : "PROMOTION_NOT_APPLICABLE" === y ? "Mã giảm giá không áp dụng cho đơn hàng này" : (null == e || null == (u = e.response) ? void 0 : u.status) === 404 ? "Plan not found. Please refresh and try again." : (null == e || null == (h = e.response) ? void 0 : h.status) === 400 ? f || "Invalid request. Please check your input." : (null == e || null == (g = e.response) ? void 0 : g.status) === 409 ? "Duplicate order detected. Please check your existing orders." : (null == e || null == (p = e.response) ? void 0 : p.status) === 401 ? "Authentication required. Please log in again." : (null == e || null == (b = e.response) ? void 0 : b.status) === 403 ? "Permission denied. Please check your account status." : f || (null == e ? void 0 : e.message) || "An unexpected error occurred. Please try again."
    }, "useCreateFeatureOrder", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: i,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: ["user-features"]
                }), e.invalidateQueries({
                    queryKey: ["billing-features"]
                })
            }
        })
    }, "useCreatePagePlanOrder", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: l,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: ["currentSubscription"]
                }), e.invalidateQueries({
                    queryKey: ["plans"]
                })
            }
        })
    }, "useGetOrderDetails", 0, (e, t) => {
        let {
            enablePolling: a = !0,
            pollIntervalMs: o = 2e3
        } = t || {};
        return (0, r.useQuery)({
            queryKey: ["orderDetails", e],
            queryFn: () => e ? s(e) : Promise.reject("No order ID"),
            enabled: !!e,
            refetchInterval: e => {
                if (!a) return !1;
                let t = e.state.data;
                return (null == t ? void 0 : t.status) !== "paid" && (null == t ? void 0 : t.status) !== "failed" && (null == t ? void 0 : t.status) !== "canceled" && o
            }
        })
    }, "useSyncOrderPaymentStatus", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: d,
            onSuccess: t => {
                (null == t ? void 0 : t.id) && (e.setQueryData(["orderDetails", t.id], t), e.invalidateQueries({
                    queryKey: ["orderDetails", t.id]
                }))
            }
        })
    }], 201975);
    var c = e.i(334863);
    e.i(308972);
    var u = e.i(445979);
    e.s(["usePaymentNotifications", 0, () => {
        let {
            t: e
        } = (0, u.useTranslation)();
        return {
            showOrderCreated: () => {
                queueMicrotask(() => {
                    c.toaster.create({
                        title: e("pageSlot.notifications.orderCreated.title"),
                        description: e("pageSlot.notifications.orderCreated.description"),
                        type: "info",
                        duration: 5e3
                    })
                })
            },
            showPaymentSuccess: () => {
                queueMicrotask(() => {
                    c.toaster.create({
                        title: e("pageSlot.notifications.paymentSuccess.title"),
                        description: e("pageSlot.notifications.paymentSuccess.description"),
                        type: "success",
                        duration: 5e3
                    })
                })
            },
            showPaymentFailed: t => {
                queueMicrotask(() => {
                    c.toaster.create({
                        title: e("pageSlot.notifications.paymentFailed.title"),
                        description: t || e("pageSlot.notifications.paymentFailed.description"),
                        type: "error",
                        duration: 7e3
                    })
                })
            },
            showOrderError: t => {
                queueMicrotask(() => {
                    c.toaster.create({
                        title: e("pageSlot.notifications.orderError.title"),
                        description: t,
                        type: "error",
                        duration: 7e3
                    })
                })
            }
        }
    }], 297272)
}, 419703, 533681, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(789757),
        a = e.i(564668),
        o = e.i(791089),
        n = e.i(118190),
        l = e.i(215669),
        i = e.i(119887);
    let s = [{
        value: "sepay_qr",
        label: "Chuyển khoản ngân hàng",
        description: "Quét mã QR và chuyển khoản ngân hàng",
        iconSrc: "/vietqr.png"
    }, {
        value: "zalopay_wallet",
        label: "Zalopay",
        description: "Mở ứng dụng Zalopay để thanh toán",
        iconSrc: "/zalopay.png"
    }];
    e.s(["BILLING_PAYMENT_METHOD_OPTIONS", 0, s, "DEFAULT_BILLING_PAYMENT_METHOD", 0, "sepay_qr", "isZaloPayPaymentMethod", 0, e => "zalopay_wallet" === e || "zalopay_visa" === e, "isZaloPayProvider", 0, e => !!e && "zalopay" === e.toLowerCase()], 533681), e.s(["default", 0, e => {
        let {
            value: d,
            onChange: c,
            disabled: u = !1
        } = e;
        return (0, t.jsxs)(a.Box, {
            borderRadius: "lg",
            p: 4,
            borderWidth: "1px",
            borderColor: {
                base: "gray.200",
                _dark: "gray.600"
            },
            bg: {
                base: "gray.50",
                _dark: "gray.900"
            },
            children: [(0, t.jsx)(o.Text, {
                fontSize: "sm",
                fontWeight: "bold",
                mb: 3,
                color: {
                    base: "gray.800",
                    _dark: "gray.200"
                },
                children: "Phương thức thanh toán"
            }), (0, t.jsx)(n.VStack, {
                align: "stretch",
                gap: 2,
                children: s.map(e => {
                    let s = d === e.value;
                    return (0, t.jsx)(a.Box, {
                        as: "button",
                        onClick: () => {
                            u || c(e.value)
                        },
                        "aria-disabled": u,
                        textAlign: "left",
                        w: "full",
                        p: 3,
                        borderRadius: "md",
                        borderWidth: "1px",
                        borderColor: s ? "blue.500" : {
                            base: "gray.200",
                            _dark: "gray.700"
                        },
                        bg: s ? {
                            base: "blue.50",
                            _dark: "blue.900/20"
                        } : {
                            base: "white",
                            _dark: "gray.800"
                        },
                        cursor: u ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        _hover: u ? {} : {
                            borderColor: s ? "blue.600" : {
                                base: "gray.300",
                                _dark: "gray.500"
                            },
                            boxShadow: "sm"
                        },
                        children: (0, t.jsxs)(l.HStack, {
                            align: "start",
                            justify: "space-between",
                            gap: 3,
                            children: [(0, t.jsxs)(l.HStack, {
                                align: "start",
                                gap: 3,
                                flex: 1,
                                children: [(0, t.jsx)(a.Box, {
                                    w: "38px",
                                    h: "38px",
                                    borderRadius: "md",
                                    bg: {
                                        base: "gray.50",
                                        _dark: "gray.700"
                                    },
                                    borderWidth: "1px",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    mt: "1px",
                                    children: (0, t.jsx)(i.Image, {
                                        src: e.iconSrc,
                                        alt: e.label,
                                        maxW: "24px",
                                        maxH: "24px",
                                        objectFit: "contain"
                                    })
                                }), (0, t.jsxs)(n.VStack, {
                                    align: "start",
                                    gap: .5,
                                    flex: 1,
                                    children: [(0, t.jsxs)(l.HStack, {
                                        gap: 2,
                                        children: [(0, t.jsx)(a.Box, {
                                            mt: "4px",
                                            w: "10px",
                                            h: "10px",
                                            borderRadius: "full",
                                            bg: s ? "blue.500" : {
                                                base: "gray.300",
                                                _dark: "gray.500"
                                            }
                                        }), (0, t.jsx)(o.Text, {
                                            fontSize: "sm",
                                            fontWeight: "bold",
                                            color: {
                                                base: "gray.800",
                                                _dark: "gray.100"
                                            },
                                            children: e.label
                                        })]
                                    }), (0, t.jsx)(o.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: e.description
                                    })]
                                })]
                            }), "sepay_qr" === e.value && (0, t.jsx)(r.Badge, {
                                colorScheme: s ? "blue" : "gray",
                                size: "sm",
                                children: "Mặc định"
                            })]
                        })
                    }, e.value)
                })
            })]
        })
    }], 419703)
}, 555481, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(564668),
        o = e.i(494114),
        n = e.i(215669),
        l = e.i(119887),
        i = e.i(742758),
        s = e.i(791089),
        d = e.i(118190),
        c = e.i(643736),
        u = e.i(676525);
    e.s(["default", 0, e => {
        var h;
        let {
            paymentMethod: g,
            paymentUrl: p,
            isSyncing: b,
            isAutoSyncing: y,
            hasOpenedPaymentLink: f,
            canSync: m,
            onOpenPaymentLink: v,
            onSyncNow: x,
            onCopyError: w
        } = e, S = null != (h = (0, c.useBreakpointValue)({
            base: !1,
            lg: !0
        })) && h, [k, T] = (0, r.useState)(!1), _ = (0, r.useRef)(null), E = p ? "https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=".concat(encodeURIComponent(p)) : null;
        (0, r.useEffect)(() => () => {
            _.current && (clearTimeout(_.current), _.current = null)
        }, []);
        let C = async () => {
            if (p) try {
                var e;
                if ("undefined" != typeof navigator && (null == (e = navigator.clipboard) ? void 0 : e.writeText) && window.isSecureContext) await navigator.clipboard.writeText(p);
                else if ("undefined" != typeof document) {
                    let e = document.createElement("textarea");
                    e.value = p, e.style.position = "fixed", e.style.opacity = "0", e.style.pointerEvents = "none", document.body.appendChild(e), e.focus(), e.select();
                    let t = document.execCommand("copy");
                    if (document.body.removeChild(e), !t) throw Error("execCommand copy failed")
                }
                T(!0), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
                    T(!1)
                }, 2e3)
            } catch (e) {
                null == w || w("Không thể sao chép liên kết thanh toán. Vui lòng thử lại.")
            }
        };
        return (0, t.jsxs)(d.VStack, {
            gap: 3,
            align: "stretch",
            children: [(0, t.jsx)(s.Text, {
                fontSize: "md",
                fontWeight: "bold",
                color: {
                    base: "gray.700",
                    _dark: "gray.200"
                },
                children: "Thanh toán qua Zalopay"
            }), ("zalopay_wallet" === g || "zalopay_visa" === g) && S ? (0, t.jsxs)(a.Box, {
                display: {
                    base: "flex",
                    md: "grid"
                },
                flexDirection: "column",
                gridTemplateColumns: {
                    base: "1fr",
                    md: "minmax(220px, 290px) 1fr"
                },
                alignItems: "start",
                gap: 4,
                children: [(0, t.jsxs)(d.VStack, {
                    gap: 3,
                    p: 3,
                    borderRadius: "lg",
                    borderWidth: "1px",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.600"
                    },
                    bg: {
                        base: "white",
                        _dark: "gray.800"
                    },
                    children: [E ? (0, t.jsx)(l.Image, {
                        src: E,
                        alt: "QR Zalopay Wallet",
                        boxSize: {
                            base: "220px",
                            md: "260px"
                        },
                        objectFit: "contain"
                    }) : (0, t.jsx)(o.Flex, {
                        w: {
                            base: "220px",
                            md: "260px"
                        },
                        h: {
                            base: "220px",
                            md: "260px"
                        },
                        align: "center",
                        justify: "center",
                        bg: "gray.50",
                        borderRadius: "md",
                        children: (0, t.jsx)(s.Text, {
                            color: "gray.500",
                            fontSize: "sm",
                            children: "Thiếu liên kết thanh toán để tạo QR"
                        })
                    }), (0, t.jsx)(s.Text, {
                        fontSize: "xs",
                        color: {
                            base: "gray.500",
                            _dark: "gray.400"
                        },
                        textAlign: "center",
                        children: "Mở Zalopay trên điện thoại để quét mã."
                    })]
                }), (0, t.jsxs)(d.VStack, {
                    align: "stretch",
                    gap: 3,
                    children: [(0, t.jsxs)(a.Box, {
                        p: 3,
                        borderRadius: "lg",
                        borderWidth: "1px",
                        borderColor: "blue.200",
                        bg: "blue.50",
                        children: [(0, t.jsx)(s.Text, {
                            fontSize: "sm",
                            fontWeight: "bold",
                            color: "blue.700",
                            children: "Quét QR bằng Zalopay trên điện thoại"
                        }), (0, t.jsx)(s.Text, {
                            fontSize: "xs",
                            color: "blue.600",
                            mt: 1,
                            children: 'Sau khi thanh toán xong, bấm "Kiểm tra lại" để cập nhật trạng thái.'
                        })]
                    }), (0, t.jsxs)(n.HStack, {
                        gap: 2,
                        align: "stretch",
                        children: [(0, t.jsx)(u.default, {
                            variant: "outline",
                            size: "large",
                            onClick: v,
                            disabled: !p,
                            className: "w-full",
                            children: "Mở link thanh toán"
                        }), (0, t.jsx)(u.default, {
                            variant: "outline",
                            size: "large",
                            onClick: () => void C(),
                            disabled: !p,
                            className: "w-full",
                            children: k ? "Đã sao chép" : "Sao chép link"
                        })]
                    }), (0, t.jsx)(u.default, {
                        variant: "rose",
                        size: "large",
                        onClick: x,
                        disabled: b || !m,
                        className: "w-full",
                        children: b ? "Đang kiểm tra..." : "Kiểm tra lại"
                    }), y && (0, t.jsx)(s.Text, {
                        fontSize: "xs",
                        color: {
                            base: "gray.500",
                            _dark: "gray.400"
                        },
                        children: "Hệ thống đang tự động đồng bộ trạng thái thanh toán."
                    })]
                })]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(s.Text, {
                    fontSize: "sm",
                    color: {
                        base: "gray.600",
                        _dark: "gray.400"
                    },
                    children: "Mở liên kết thanh toán trên Zalopay, sau đó quay lại tab này để đồng bộ trạng thái."
                }), (0, t.jsx)(u.default, {
                    variant: "rose",
                    size: "large",
                    onClick: v,
                    disabled: !p,
                    className: "w-full",
                    children: "Mở Zalopay để thanh toán"
                }), (0, t.jsxs)(n.HStack, {
                    gap: 2,
                    align: "stretch",
                    children: [(0, t.jsx)(u.default, {
                        variant: "outline",
                        size: "large",
                        onClick: () => void C(),
                        disabled: !p,
                        className: "w-full",
                        children: k ? "Đã sao chép" : "Sao chép link"
                    }), (0, t.jsx)(u.default, {
                        variant: "outline",
                        size: "large",
                        onClick: x,
                        disabled: b || !m,
                        className: "w-full",
                        children: b ? "Đang kiểm tra..." : "Kiểm tra lại"
                    })]
                }), p && (0, t.jsx)(i.Link, {
                    href: p,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    fontSize: "xs",
                    color: "blue.500",
                    wordBreak: "break-all",
                    children: p
                }), (y || f) && (0, t.jsx)(s.Text, {
                    fontSize: "xs",
                    color: {
                        base: "gray.500",
                        _dark: "gray.400"
                    },
                    children: "Hệ thống đang tự động đồng bộ sau khi bạn quay lại từ cổng thanh toán."
                })]
            })]
        })
    }])
}, 241277, e => {
    "use strict";
    var t = e.i(251570);
    let r = new Set(["paid", "failed", "canceled"]),
        a = e => !!e && r.has(e.toLowerCase());
    e.s(["useOrderPaymentSync", 0, e => {
        let {
            orderId: r,
            enabled: o,
            status: n,
            onSync: l,
            intervalMs: i = 4e3,
            maxDurationMs: s = 18e4
        } = e, [d, c] = (0, t.useState)(!1), [u, h] = (0, t.useState)(!1), g = (0, t.useRef)(n), p = (0, t.useRef)(null), b = (0, t.useRef)(0), y = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
            g.current = n
        }, [n]);
        let f = (0, t.useCallback)(() => {
                p.current && (clearInterval(p.current), p.current = null), h(!1)
            }, []),
            m = (0, t.useCallback)(async () => {
                if (!(!o || !r || y.current || a(g.current))) {
                    y.current = !0, c(!0);
                    try {
                        await l(r)
                    } catch (e) {} finally {
                        y.current = !1, c(!1)
                    }
                }
            }, [o, l, r]),
            v = (0, t.useCallback)(async () => {
                !o || !r || a(g.current) || (await m(), f(), b.current = Date.now(), h(!0), p.current = setInterval(() => {
                    Date.now() - b.current >= s || a(g.current) ? f() : m()
                }, i))
            }, [o, i, s, r, f, m]);
        return (0, t.useEffect)(() => {
            a(n) && f()
        }, [n, f]), (0, t.useEffect)(() => () => {
            f()
        }, [f]), {
            isSyncing: d,
            isAutoSyncing: u,
            syncNow: m,
            startAutoSync: v,
            stopAutoSync: f
        }
    }])
}, 79663, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(649725),
        o = e.i(391265),
        n = e.i(813753);
    let l = {
            currentSubscription: ["billing", "currentSubscription"]
        },
        i = async () => {
            let e = await a.default.get("/pages/subscription");
            return e.data.data.subscription || e.data.subscription
        },
        s = async e => {
            let t = await a.default.post("/billing/photo-storage/orders", e);
            return t.data.data || t.data
        };
    e.s(["BILLING_QUERY_KEYS", 0, l, "useCreatePhotoStorageOrder", 0, () => (0, t.useMutation)({
        mutationFn: s
    }), "useGetCurrentSubscription", 0, () => {
        let e = (0, o.useSelector)(n.selectAuth);
        return (0, r.useQuery)({
            queryKey: l.currentSubscription,
            queryFn: i,
            staleTime: 3e5,
            enabled: !!(null == e ? void 0 : e.user)
        })
    }])
}, 478062, e => {
    "use strict";
    e.s([], 814188), e.i(814188);
    let {
        withProvider: t,
        withContext: r,
        useStyles: a,
        PropsProvider: o
    } = (0, e.i(664288).createSlotRecipeContext)({
        key: "card"
    }), n = t("div", "root"), l = r("div", "body"), i = r("div", "header"), s = r("div", "footer"), d = r("h3", "title"), c = r("p", "description");
    e.s(["Body", () => l, "Description", () => c, "Footer", () => s, "Header", () => i, "PropsProvider", () => o, "Root", () => n, "Title", () => d], 362719);
    var u = e.i(362719);
    e.s(["Card", 0, u], 478062)
}, 162234, e => {
    "use strict";
    e.s([], 786692), e.i(786692);
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(820512),
        o = e.i(664288),
        n = e.i(489198),
        l = e.i(613291);
    let [i, s] = (0, a.createContext)({
        name: "AlertStatusContext",
        hookName: "useAlertStatusContext",
        providerName: "<Alert />"
    }), {
        withProvider: d,
        withContext: c,
        useStyles: u,
        PropsProvider: h
    } = (0, o.createSlotRecipeContext)({
        key: "alert"
    }), g = d("div", "root", {
        forwardAsChild: !0,
        wrapElement: (e, r) => (0, t.jsx)(i, {
            value: {
                status: r.status || "info"
            },
            children: e
        })
    }), p = c("div", "title"), b = c("div", "description"), y = c("div", "content"), f = {
        info: l.InfoIcon,
        warning: l.WarningIcon,
        success: l.CheckCircleIcon,
        error: l.WarningIcon,
        neutral: l.InfoIcon
    }, m = (0, r.forwardRef)(function(e, a) {
        let o = s(),
            l = u(),
            i = "string" == typeof o.status ? f[o.status] : r.Fragment,
            {
                children: d = (0, t.jsx)(i, {}),
                ...c
            } = e;
        return (0, t.jsx)(n.chakra.span, {
            ref: a,
            ...c,
            css: [l.indicator, e.css],
            children: d
        })
    });
    e.s(["Content", () => y, "Description", () => b, "Indicator", () => m, "Root", () => g, "RootPropsProvider", () => h, "Title", () => p], 784220);
    var v = e.i(784220);
    e.s(["Alert", 0, v], 162234)
}, 598877, e => {
    "use strict";
    var t = e.i(251570),
        r = function(e, t) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        },
        a = function() {
            return (a = Object.assign || function(e) {
                for (var t, r = 1, a = arguments.length; r < a; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        o = "Pixel",
        n = "Percent",
        l = {
            unit: n,
            value: .8
        };

    function i(e) {
        return "number" == typeof e ? {
            unit: n,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: o,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: n,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), l) : (console.warn("scrollThreshold should be string or number"), l)
    }
    var s = function(e) {
        function n() {
            this.constructor = l
        }

        function l(t) {
            var r = e.call(this, t) || this;
            return r.lastScrollTop = 0, r.actionTriggered = !1, r.startY = 0, r.currentY = 0, r.dragging = !1, r.maxPullDownDistance = 0, r.getScrollableTarget = function() {
                return r.props.scrollableTarget instanceof HTMLElement ? r.props.scrollableTarget : "string" == typeof r.props.scrollableTarget ? document.getElementById(r.props.scrollableTarget) : (null === r.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
            }, r.onStart = function(e) {
                !r.lastScrollTop && (r.dragging = !0, e instanceof MouseEvent ? r.startY = e.pageY : e instanceof TouchEvent && (r.startY = e.touches[0].pageY), r.currentY = r.startY, r._infScroll && (r._infScroll.style.willChange = "transform", r._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
            }, r.onMove = function(e) {
                !r.dragging || (e instanceof MouseEvent ? r.currentY = e.pageY : e instanceof TouchEvent && (r.currentY = e.touches[0].pageY), r.currentY < r.startY || (r.currentY - r.startY >= Number(r.props.pullDownToRefreshThreshold) && r.setState({
                    pullToRefreshThresholdBreached: !0
                }), !(r.currentY - r.startY > 1.5 * r.maxPullDownDistance) && r._infScroll && (r._infScroll.style.overflow = "visible", r._infScroll.style.transform = "translate3d(0px, " + (r.currentY - r.startY) + "px, 0px)")))
            }, r.onEnd = function() {
                r.startY = 0, r.currentY = 0, r.dragging = !1, r.state.pullToRefreshThresholdBreached && (r.props.refreshFunction && r.props.refreshFunction(), r.setState({
                    pullToRefreshThresholdBreached: !1
                })), requestAnimationFrame(function() {
                    r._infScroll && (r._infScroll.style.overflow = "auto", r._infScroll.style.transform = "none", r._infScroll.style.willChange = "unset")
                })
            }, r.onScrollListener = function(e) {
                "function" == typeof r.props.onScroll && setTimeout(function() {
                    return r.props.onScroll && r.props.onScroll(e)
                }, 0);
                var t = r.props.height || r._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                r.actionTriggered || ((r.props.inverse ? r.isElementAtTop(t, r.props.scrollThreshold) : r.isElementAtBottom(t, r.props.scrollThreshold)) && r.props.hasMore && (r.actionTriggered = !0, r.setState({
                    showLoader: !0
                }), r.props.next && r.props.next()), r.lastScrollTop = t.scrollTop)
            }, r.state = {
                showLoader: !1,
                pullToRefreshThresholdBreached: !1,
                prevDataLength: t.dataLength
            }, r.throttledOnScrollListener = (function(e, t, r, a) {
                var o, n = !1,
                    l = 0;

                function i() {
                    o && clearTimeout(o)
                }

                function s() {
                    var s = this,
                        d = Date.now() - l,
                        c = arguments;

                    function u() {
                        l = Date.now(), r.apply(s, c)
                    }
                    n || (a && !o && u(), i(), void 0 === a && d > e ? u() : !0 !== t && (o = setTimeout(a ? function() {
                        o = void 0
                    } : u, void 0 === a ? e - d : e)))
                }
                return "boolean" != typeof t && (a = r, r = t, t = void 0), s.cancel = function() {
                    i(), n = !0
                }, s
            })(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
        }
        return r(l, e), l.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n), l.prototype.componentDidMount = function() {
            if (void 0 === this.props.dataLength) throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
            if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
        }, l.prototype.componentWillUnmount = function() {
            this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
        }, l.prototype.componentDidUpdate = function(e) {
            this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                showLoader: !1
            }))
        }, l.getDerivedStateFromProps = function(e, t) {
            return e.dataLength !== t.prevDataLength ? a(a({}, t), {
                prevDataLength: e.dataLength
            }) : null
        }, l.prototype.isElementAtTop = function(e, t) {
            void 0 === t && (t = .8);
            var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                a = i(t);
            return a.unit === o ? e.scrollTop <= a.value + r - e.scrollHeight + 1 : e.scrollTop <= a.value / 100 + r - e.scrollHeight + 1
        }, l.prototype.isElementAtBottom = function(e, t) {
            void 0 === t && (t = .8);
            var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                a = i(t);
            return a.unit === o ? e.scrollTop + r >= e.scrollHeight - a.value : e.scrollTop + r >= a.value / 100 * e.scrollHeight
        }, l.prototype.render = function() {
            var e = this,
                r = a({
                    height: this.props.height || "auto",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch"
                }, this.props.style),
                o = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                n = this.props.pullDownToRefresh && this.props.height ? {
                    overflow: "auto"
                } : {};
            return t.default.createElement("div", {
                style: n,
                className: "infinite-scroll-component__outerdiv"
            }, t.default.createElement("div", {
                className: "infinite-scroll-component " + (this.props.className || ""),
                ref: function(t) {
                    return e._infScroll = t
                },
                style: r
            }, this.props.pullDownToRefresh && t.default.createElement("div", {
                style: {
                    position: "relative"
                },
                ref: function(t) {
                    return e._pullDown = t
                }
            }, t.default.createElement("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: -1 * this.maxPullDownDistance
                }
            }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !o && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
        }, l
    }(t.Component);
    e.s(["default", 0, s])
}]);

//# debugId=6a7751ad-25e6-cd36-e183-6c8ac506a78b
//# sourceMappingURL=8ac513957fb70b10.js.map