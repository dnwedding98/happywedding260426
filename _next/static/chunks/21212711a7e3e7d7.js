;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "e7f48c4a-963f-23a6-b13d-9728858cc7d1")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 923990, e => {
    "use strict";
    var r, a = e.i(816941),
        t = e.i(840171),
        o = e.i(940948),
        i = e.i(649725),
        s = ((r = {}).IMAGE = "image", r.VIDEO = "video", r.DOCUMENT = "document", r.AUDIO = "audio", r.FONT = "font", r.ICON = "icon", r.OTHER = "other", r);
    let l = async () => (await i.storageApiClient.post("/files/preview-token")).data.data.token,
        n = async (e, r) => {
            try {
                let a = new FormData;
                a.append("file", e);
                let t = "/files/upload";
                if (r) {
                    let e = await l();
                    t = "/files/upload?previewToken=".concat(encodeURIComponent(e))
                }
                let o = await i.storageApiClient.post(t, a, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                if (!1 === o.data.success) throw Error(o.data.message || "Upload failed");
                return o.data.data
            } catch (e) {
                var a, t;
                throw Error((null == (t = e.response) || null == (a = t.data) ? void 0 : a.message) || e.message || "Upload failed")
            }
        },
        d = async (e, r) => {
            try {
                let a = new FormData;
                a.append("file", e);
                let t = r ? "/files/upload?tag=".concat(encodeURIComponent(r)) : "/files/upload",
                    o = await i.storageApiClient.post(t, a, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                if (!1 === o.data.success) throw Error(o.data.message || "Upload failed");
                return o.data.data
            } catch (e) {
                var a, t;
                throw Error((null == (t = e.response) || null == (a = t.data) ? void 0 : a.message) || e.message || "Upload failed")
            }
        },
        c = async function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "horizontal";
            try {
                let a = new FormData;
                a.append("file", e);
                let t = await i.storageApiClient.post("/files/gate-opening?direction=".concat(r), a, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                if (!1 === t.data.success) throw Error(t.data.message || "Upload failed");
                return t.data.data
            } catch (e) {
                var a, t;
                throw Error((null == (t = e.response) || null == (a = t.data) ? void 0 : a.message) || e.message || "Upload failed")
            }
        };
    e.s(["FILE_TYPE_MIME_MAP", 0, {
        image: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/bmp", "image/tiff"],
        video: ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-ms-wmv", "video/webm", "video/ogg", "video/3gpp"],
        document: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/plain", "text/csv"],
        audio: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/midi", "audio/webm", "audio/aac"],
        font: ["font/ttf", "font/otf", "font/woff", "font/woff2"],
        icon: ["image/svg+xml"],
        other: []
    }, "FileType", () => s, "getFileUrl", 0, e => (e.filePath.startsWith("http://") || e.filePath.startsWith("https://"), e.filePath), "uploadFile", 0, n, "uploadFileWithTag", 0, d, "uploadGateOpeningImage", 0, c, "useBatchDeleteFiles", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: async e => {
                let {
                    fileIds: r
                } = e;
                await i.storageApiClient.delete("/files/batch", {
                    data: {
                        fileIds: r
                    }
                })
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: ["files"]
                }), e.invalidateQueries({
                    queryKey: ["fonts"]
                })
            }
        })
    }, "useGetAllTags", 0, () => (0, a.useQuery)({
        queryKey: ["files", "tags"],
        queryFn: async () => (await i.storageApiClient.get("/files/tags/all")).data.data
    }), "useGetFiles", 0, function(e, r) {
        var t;
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 50,
            l = arguments.length > 4 ? arguments[4] : void 0;
        return (0, a.useQuery)({
            queryKey: ["files", e, r, o, s],
            queryFn: async () => (await i.storageApiClient.get("/files", {
                params: {
                    type: e,
                    tags: r,
                    page: o,
                    limit: s
                }
            })).data.data,
            enabled: null == (t = null == l ? void 0 : l.enabled) || t
        })
    }, "useGetFonts", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
        return (0, a.useQuery)({
            queryKey: ["fonts", e, r],
            queryFn: async () => (await i.storageApiClient.get("/files", {
                params: {
                    type: "font",
                    page: e,
                    limit: r
                }
            })).data.data
        })
    }])
}, 423398, e => {
    "use strict";
    var r = e.i(483632),
        a = e.i(676525),
        t = e.i(343207),
        o = e.i(564668),
        i = e.i(478062),
        s = e.i(494114),
        l = e.i(536072),
        n = e.i(907493),
        d = e.i(51715),
        c = e.i(791089),
        g = e.i(643736),
        h = e.i(118190),
        x = e.i(251570);
    e.i(308972);
    var u = e.i(445979),
        p = e.i(84723),
        b = e.i(649760),
        m = e.i(334863),
        y = e.i(79663),
        f = e.i(201975),
        j = e.i(297272),
        S = e.i(419703),
        k = e.i(555481),
        _ = e.i(533681),
        T = e.i(870566),
        w = e.i(162234),
        v = e.i(789757),
        C = e.i(215669),
        z = e.i(119887),
        F = e.i(165341),
        W = e.i(389868),
        B = e.i(940948),
        M = e.i(241277);
    let R = ("number" == typeof T.zIndex.settingsModal ? T.zIndex.settingsModal : 500008) + 20;

    function E(e) {
        var t, i;
        let {
            isOpen: l,
            onClose: n,
            package: d,
            currentLimit: T
        } = e, {
            t: E
        } = (0, u.useTranslation)(), P = (0, B.useQueryClient)(), [A, I] = (0, x.useState)(!1), [L, O] = (0, x.useState)(""), [N, U] = (0, x.useState)(null), [D, V] = (0, x.useState)(null), [G, q] = (0, x.useState)(_.DEFAULT_BILLING_PAYMENT_METHOD), [Q, H] = (0, x.useState)(!1), K = null != (i = (0, g.useBreakpointValue)({
            base: !1,
            lg: !0
        })) && i, Y = (0, y.useCreatePhotoStorageOrder)(), Z = (0, f.useSyncOrderPaymentStatus)(), J = (0, j.usePaymentNotifications)(), X = (null == D ? void 0 : D.paymentMethod) || G, $ = (0, _.isZaloPayPaymentMethod)(X) || (0, _.isZaloPayProvider)(null == D ? void 0 : D.provider), {
            data: ee
        } = (0, f.useGetOrderDetails)(N, {
            enablePolling: !$
        }), er = (0, _.isZaloPayPaymentMethod)(X) && K, ea = !!N && $ && (Q || er), {
            isSyncing: et,
            isAutoSyncing: eo,
            syncNow: ei,
            startAutoSync: es,
            stopAutoSync: el
        } = (0, M.useOrderPaymentSync)({
            orderId: N,
            enabled: ea,
            status: null == ee ? void 0 : ee.status,
            onSync: async e => {
                await Z.mutateAsync(e)
            }
        }), en = e => new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
        }).format(e), ed = (0, x.useRef)(null);
        (0, x.useEffect)(() => {
            l ? (O(""), U(null), V(null), I(!1), q(_.DEFAULT_BILLING_PAYMENT_METHOD), H(!1), ed.current = null) : el()
        }, [l, el]), (0, x.useEffect)(() => {
            if (!Q || !$ || !N) return;
            let e = () => {
                    es()
                },
                r = () => {
                    "visible" === document.visibilityState && es()
                };
            return window.addEventListener("focus", e), document.addEventListener("visibilitychange", r), () => {
                window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", r)
            }
        }, [N, Q, $, es]), (0, x.useEffect)(() => {
            N && er && es()
        }, [N, er, es]), (0, x.useEffect)(() => {
            let e = null == ee ? void 0 : ee.status;
            e && ed.current !== e && ("paid" === e ? (ed.current = e, P.invalidateQueries({
                queryKey: ["photoStorage", "myStorage"]
            }), P.invalidateQueries({
                queryKey: ["photoStorage", "mySubscriptions"]
            }), J.showPaymentSuccess(), n()) : "failed" === e ? (ed.current = e, J.showPaymentFailed(), I(!1)) : "canceled" === e && (ed.current = e, J.showPaymentFailed(E("photoStorage.purchaseModal.orderCanceled")), I(!1)))
        }, [null == ee ? void 0 : ee.status, P, n, J, E]);
        let ec = async () => {
            I(!0);
            try {
                let e = {
                        catalogId: d.id,
                        paymentMethod: G,
                        ...L.trim() && {
                            promotionCode: L.trim()
                        }
                    },
                    r = await Y.mutateAsync(e);
                U(r.orderId), V(r), J.showOrderCreated()
            } catch (a) {
                var e, r;
                m.toaster.create({
                    title: E("photoStorage.messages.purchaseError"),
                    description: (null == (r = a.response) || null == (e = r.data) ? void 0 : e.message) || "Có lỗi xảy ra khi tạo đơn hàng",
                    type: "error"
                }), I(!1)
            }
        };
        return (0, r.jsx)(b.ModalBasic, {
            isOpen: l,
            onClose: n,
            title: E("photoStorage.purchaseModal.title"),
            maxWidth: "500px",
            zIndex: R,
            children: (0, r.jsxs)(h.VStack, {
                gap: 4,
                align: "stretch",
                py: 2,
                children: [!D && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o.Box, {
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
                        children: [(0, r.jsxs)(s.Flex, {
                            gap: 2,
                            align: "center",
                            mb: 2,
                            children: [(0, r.jsx)(o.Box, {
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
                                children: (0, r.jsx)(p.FiPackage, {
                                    size: 20
                                })
                            }), (0, r.jsxs)(o.Box, {
                                flex: 1,
                                children: [(0, r.jsx)(c.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: d.description
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: d.name
                                })]
                            })]
                        }), (0, r.jsxs)(W.Stack, {
                            gap: 1.5,
                            children: [(0, r.jsxs)(s.Flex, {
                                justify: "space-between",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: E("photoStorage.purchaseModal.photoCount")
                                }), (0, r.jsxs)(c.Text, {
                                    fontWeight: "semibold",
                                    fontSize: "sm",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: [d.photoCount, " ", E("photoStorage.purchaseModal.photos")]
                                })]
                            }), (0, r.jsxs)(s.Flex, {
                                justify: "space-between",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: E("photoStorage.purchaseModal.price")
                                }), (0, r.jsx)(c.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "green.600",
                                        _dark: "green.400"
                                    },
                                    children: en(d.priceCents)
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)(o.Box, {
                        children: [(0, r.jsx)(c.Text, {
                            fontSize: "xs",
                            fontWeight: "medium",
                            mb: 2,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: "Dung lượng sau khi mua:"
                        }), (0, r.jsxs)(s.Flex, {
                            align: "center",
                            gap: 3,
                            justify: "center",
                            children: [(0, r.jsxs)(o.Box, {
                                textAlign: "center",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: T
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "2xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.500"
                                    },
                                    children: E("photoStorage.purchaseModal.currentLimit")
                                })]
                            }), (0, r.jsx)(p.FiArrowRight, {
                                size: 20,
                                color: "var(--chakra-colors-blue-500)"
                            }), (0, r.jsxs)(o.Box, {
                                textAlign: "center",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    color: {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    },
                                    children: T + d.photoCount
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "2xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.500"
                                    },
                                    children: E("photoStorage.purchaseModal.afterPurchase")
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)(o.Box, {
                        children: [(0, r.jsx)(c.Text, {
                            fontSize: "xs",
                            fontWeight: "medium",
                            mb: 1.5,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: "Mã khuyến mãi (tùy chọn)"
                        }), (0, r.jsx)(F.Input, {
                            placeholder: "Nhập mã khuyến mãi",
                            value: L,
                            onChange: e => O(e.target.value),
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
                    }), (0, r.jsxs)(w.Alert.Root, {
                        status: "info",
                        variant: "subtle",
                        size: "sm",
                        children: [(0, r.jsx)(w.Alert.Indicator, {
                            children: (0, r.jsx)(p.FiAlertCircle, {})
                        }), (0, r.jsx)(w.Alert.Content, {
                            children: (0, r.jsx)(c.Text, {
                                fontSize: "xs",
                                children: E("photoStorage.purchaseModal.note")
                            })
                        })]
                    }), (0, r.jsx)(o.Box, {
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
                        children: (0, r.jsxs)(s.Flex, {
                            justify: "space-between",
                            align: "center",
                            children: [(0, r.jsx)(c.Text, {
                                fontSize: "sm",
                                fontWeight: "semibold",
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                children: E("photoStorage.purchaseModal.total")
                            }), (0, r.jsx)(c.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: en(d.priceCents)
                            })]
                        })
                    }), (0, r.jsx)(S.default, {
                        value: G,
                        onChange: q,
                        disabled: A
                    })]
                }), N && D && (0, r.jsxs)(h.VStack, {
                    gap: 6,
                    textAlign: "center",
                    w: "full",
                    children: [ee && (0, r.jsxs)(v.Badge, {
                        size: "lg",
                        colorScheme: "paid" === ee.status ? "green" : "failed" === ee.status || "canceled" === ee.status ? "red" : "blue",
                        px: 4,
                        py: 1,
                        borderRadius: "full",
                        children: ["paid" === ee.status && E("pricing.purchaseModal.status.paid"), "requires_payment" === ee.status && E("pricing.purchaseModal.status.requiresPayment"), "created" === ee.status && E("pricing.purchaseModal.status.created"), "failed" === ee.status && E("pricing.purchaseModal.status.failed"), "canceled" === ee.status && E("pricing.purchaseModal.status.canceled")]
                    }), (null == ee ? void 0 : ee.status) === "paid" ? (0, r.jsxs)(h.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, r.jsx)(o.Box, {
                            className: "text-5xl",
                            children: "🎉"
                        }), (0, r.jsxs)(h.VStack, {
                            gap: 2,
                            children: [(0, r.jsx)(c.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: E("pricing.purchaseModal.paymentSuccess")
                            }), (0, r.jsx)(c.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: "Dung lượng lưu trữ đã được cập nhật"
                            })]
                        })]
                    }) : (null == ee ? void 0 : ee.status) === "failed" || (null == ee ? void 0 : ee.status) === "canceled" ? (0, r.jsxs)(h.VStack, {
                        gap: 4,
                        py: 8,
                        children: [(0, r.jsx)(o.Box, {
                            className: "text-5xl",
                            children: "❌"
                        }), (0, r.jsxs)(h.VStack, {
                            gap: 2,
                            children: [(0, r.jsx)(c.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "red.600",
                                    _dark: "red.400"
                                },
                                children: E("pricing.purchaseModal.paymentFailed")
                            }), (0, r.jsx)(c.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: E("pricing.purchaseModal.paymentFailedDesc")
                            })]
                        })]
                    }) : $ ? (0, r.jsx)(h.VStack, {
                        gap: 4,
                        w: "full",
                        children: (0, r.jsx)(o.Box, {
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
                            children: (0, r.jsx)(k.default, {
                                paymentMethod: X,
                                paymentUrl: D.paymentUrl,
                                isSyncing: et,
                                isAutoSyncing: eo,
                                hasOpenedPaymentLink: Q,
                                canSync: !!N,
                                onOpenPaymentLink: () => {
                                    (null == D ? void 0 : D.paymentUrl) && (window.open(D.paymentUrl, "_blank", "noopener,noreferrer"), H(!0))
                                },
                                onSyncNow: () => void ei(),
                                onCopyError: e => J.showOrderError(e)
                            })
                        })
                    }) : (0, r.jsxs)(h.VStack, {
                        gap: 6,
                        w: "full",
                        children: [(0, r.jsx)(o.Box, {
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
                            children: (0, r.jsxs)(h.VStack, {
                                gap: 4,
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: E("pricing.purchaseModal.scanQR")
                                }), (0, r.jsx)(o.Box, {
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
                                    children: D.qrImgUrl ? (0, r.jsx)(z.Image, {
                                        src: D.qrImgUrl,
                                        alt: "QR Code Payment",
                                        boxSize: "200px",
                                        objectFit: "contain"
                                    }) : (0, r.jsx)(s.Flex, {
                                        w: "200px",
                                        h: "200px",
                                        align: "center",
                                        justify: "center",
                                        bg: {
                                            base: "gray.50",
                                            _dark: "gray.700"
                                        },
                                        borderRadius: "md",
                                        children: (0, r.jsx)(c.Text, {
                                            color: {
                                                base: "gray.500",
                                                _dark: "gray.400"
                                            },
                                            fontSize: "sm",
                                            children: E("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    children: E("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), D.bank && D.accountNumber && (0, r.jsx)(o.Box, {
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
                            children: (0, r.jsxs)(h.VStack, {
                                gap: 3,
                                align: "stretch",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    mb: 1,
                                    children: E("pricing.purchaseModal.bankTransferInfo")
                                }), (0, r.jsxs)(C.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.bank")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.900",
                                            _dark: "gray.100"
                                        },
                                        children: D.bank
                                    })]
                                }), (0, r.jsxs)(C.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.accountNumber")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        fontFamily: "mono",
                                        children: D.accountNumber
                                    })]
                                }), D.transferDescription && (0, r.jsxs)(C.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.content")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        fontFamily: "mono",
                                        children: D.transferDescription
                                    })]
                                }), (0, r.jsxs)(C.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.total")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "rose.500",
                                            _dark: "rose.400"
                                        },
                                        children: en((null == (t = D.summary) ? void 0 : t.total) || D.amountCents)
                                    })]
                                })]
                            })
                        })]
                    })]
                }), !D && (0, r.jsxs)(s.Flex, {
                    justify: "flex-end",
                    gap: 2,
                    pt: 2,
                    children: [(0, r.jsx)(a.default, {
                        variant: "outline",
                        onClick: n,
                        disabled: A,
                        size: "sm",
                        children: E("photoStorage.purchaseModal.cancel")
                    }), (0, r.jsx)(a.default, {
                        variant: "fill",
                        onClick: ec,
                        disabled: A,
                        size: "sm",
                        children: A ? E("photoStorage.purchaseModal.processing") : E("photoStorage.purchaseModal.confirm")
                    })]
                })]
            })
        })
    }
    e.s(["default", 0, () => {
        var e;
        let {
            t: b
        } = (0, u.useTranslation)(), m = null != (e = (0, g.useBreakpointValue)({
            base: !0,
            md: !1
        })) && e, [y, f] = (0, x.useState)(!1), [j, S] = (0, x.useState)(null), {
            data: k,
            isLoading: _
        } = (0, t.useGetMyStorage)(), {
            data: T,
            isLoading: w
        } = (0, t.useGetPhotoStoragePackages)();
        return _ || w ? (0, r.jsx)(s.Flex, {
            justify: "center",
            align: "center",
            minH: "300px",
            children: (0, r.jsx)(d.Spinner, {
                size: "lg",
                color: "blue.500"
            })
        }) : (0, r.jsxs)(o.Box, {
            children: [(0, r.jsxs)(h.VStack, {
                gap: {
                    base: 4,
                    md: 6
                },
                align: "stretch",
                children: [k && (0, r.jsx)(i.Card.Root, {
                    bg: {
                        base: "blue.50",
                        _dark: "blue.900/20"
                    },
                    borderColor: {
                        base: "blue.200",
                        _dark: "blue.700"
                    },
                    borderWidth: "1px",
                    children: (0, r.jsx)(i.Card.Body, {
                        p: {
                            base: 3,
                            md: 4
                        },
                        children: m ? (0, r.jsxs)(h.VStack, {
                            align: "stretch",
                            gap: 2.5,
                            children: [(0, r.jsxs)(s.Flex, {
                                justify: "space-between",
                                align: "center",
                                children: [(0, r.jsxs)(o.Box, {
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: b("photoStorage.myStorage.tier")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "lg",
                                        fontWeight: "bold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        textTransform: "uppercase",
                                        children: k.tier
                                    })]
                                }), (0, r.jsxs)(o.Box, {
                                    textAlign: "right",
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: b("photoStorage.myStorage.remaining")
                                    }), (0, r.jsxs)(c.Text, {
                                        fontSize: "lg",
                                        fontWeight: "bold",
                                        color: {
                                            base: k.remaining > 10 ? "teal.600" : "red.600",
                                            _dark: k.remaining > 10 ? "teal.400" : "red.400"
                                        },
                                        children: [k.remaining, " ", (0, r.jsx)(c.Text, {
                                            as: "span",
                                            fontSize: "xs",
                                            fontWeight: "normal",
                                            children: b("photoStorage.myStorage.photos")
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)(l.Grid, {
                                templateColumns: "repeat(3, minmax(0, 1fr))",
                                gap: 2,
                                children: [(0, r.jsxs)(o.Box, {
                                    p: 2,
                                    borderRadius: "md",
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderWidth: "1px",
                                    borderColor: {
                                        base: "blue.100",
                                        _dark: "blue.800"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "10px",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        mb: .5,
                                        children: b("photoStorage.myStorage.totalLimit")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        children: k.totalLimit
                                    })]
                                }), (0, r.jsxs)(o.Box, {
                                    p: 2,
                                    borderRadius: "md",
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderWidth: "1px",
                                    borderColor: {
                                        base: "blue.100",
                                        _dark: "blue.800"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "10px",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        mb: .5,
                                        children: b("photoStorage.myStorage.currentCount")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "orange.600",
                                            _dark: "orange.400"
                                        },
                                        children: k.currentCount
                                    })]
                                }), (0, r.jsxs)(o.Box, {
                                    p: 2,
                                    borderRadius: "md",
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderWidth: "1px",
                                    borderColor: {
                                        base: "blue.100",
                                        _dark: "blue.800"
                                    },
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "10px",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        mb: .5,
                                        children: b("photoStorage.myStorage.purchasedPhotos")
                                    }), (0, r.jsxs)(c.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "green.600",
                                            _dark: "green.400"
                                        },
                                        children: ["+", k.purchasedPhotos]
                                    })]
                                })]
                            }), (0, r.jsxs)(c.Text, {
                                fontSize: "xs",
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: [b("photoStorage.myStorage.defaultLimit"), ": ", k.defaultLimit, " ", b("photoStorage.myStorage.photos")]
                            })]
                        }) : (0, r.jsxs)(l.Grid, {
                            templateColumns: {
                                base: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(3, minmax(0, 1fr))"
                            },
                            gap: {
                                base: 2.5,
                                md: 3
                            },
                            children: [(0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.tier")
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    },
                                    textTransform: "uppercase",
                                    children: k.tier
                                })]
                            }), (0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.defaultLimit")
                                }), (0, r.jsxs)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: [k.defaultLimit, " ", (0, r.jsx)(c.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        fontWeight: "normal",
                                        children: b("photoStorage.myStorage.photos")
                                    })]
                                })]
                            }), (0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.purchasedPhotos")
                                }), (0, r.jsxs)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "green.600",
                                        _dark: "green.400"
                                    },
                                    children: ["+", k.purchasedPhotos, " ", (0, r.jsx)(c.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        fontWeight: "normal",
                                        children: b("photoStorage.myStorage.photos")
                                    })]
                                })]
                            }), (0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.totalLimit")
                                }), (0, r.jsxs)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "purple.600",
                                        _dark: "purple.400"
                                    },
                                    children: [k.totalLimit, " ", (0, r.jsx)(c.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        fontWeight: "normal",
                                        children: b("photoStorage.myStorage.photos")
                                    })]
                                })]
                            }), (0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.currentCount")
                                }), (0, r.jsxs)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: "orange.600",
                                        _dark: "orange.400"
                                    },
                                    children: [k.currentCount, " ", (0, r.jsx)(c.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        fontWeight: "normal",
                                        children: b("photoStorage.myStorage.photos")
                                    })]
                                })]
                            }), (0, r.jsxs)(o.Box, {
                                p: 3,
                                borderRadius: "md",
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderWidth: "1px",
                                borderColor: {
                                    base: "blue.100",
                                    _dark: "blue.800"
                                },
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    mb: 1,
                                    children: b("photoStorage.myStorage.remaining")
                                }), (0, r.jsxs)(c.Text, {
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    color: {
                                        base: k.remaining > 10 ? "teal.600" : "red.600",
                                        _dark: k.remaining > 10 ? "teal.400" : "red.400"
                                    },
                                    children: [k.remaining, " ", (0, r.jsx)(c.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        fontWeight: "normal",
                                        children: b("photoStorage.myStorage.photos")
                                    })]
                                })]
                            })]
                        })
                    })
                }), (0, r.jsx)(n.Separator, {
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.700"
                    }
                }), (0, r.jsxs)(o.Box, {
                    children: [(0, r.jsx)(c.Text, {
                        fontSize: "sm",
                        fontWeight: "semibold",
                        mb: 1,
                        color: {
                            base: "gray.900",
                            _dark: "gray.100"
                        },
                        children: b("photoStorage.packages.title")
                    }), (0, r.jsx)(c.Text, {
                        fontSize: "xs",
                        mb: 3,
                        color: {
                            base: "gray.500",
                            _dark: "gray.400"
                        },
                        children: b("photoStorage.packages.description")
                    }), T && T.length > 0 ? (0, r.jsx)(l.Grid, {
                        templateColumns: {
                            base: "repeat(2, minmax(0, 1fr))",
                            md: "repeat(2, 1fr)"
                        },
                        gap: {
                            base: 2.5,
                            md: 4
                        },
                        children: T.map((e, t) => (0, r.jsx)(i.Card.Root, {
                            borderWidth: "1px",
                            borderColor: {
                                base: 0 === t ? "blue.500" : "gray.200",
                                _dark: 0 === t ? "blue.500" : "gray.700"
                            },
                            bg: {
                                base: "white",
                                _dark: "gray.800"
                            },
                            position: "relative",
                            overflow: "hidden",
                            _hover: {
                                transform: "translateY(-2px)",
                                shadow: "md"
                            },
                            transition: "all 0.2s",
                            children: (0, r.jsx)(i.Card.Body, {
                                p: {
                                    base: 2.5,
                                    md: 4
                                },
                                children: (0, r.jsxs)(h.VStack, {
                                    gap: {
                                        base: 2,
                                        md: 3
                                    },
                                    align: "stretch",
                                    children: [(0, r.jsxs)(s.Flex, {
                                        align: "center",
                                        gap: {
                                            base: 2,
                                            md: 3
                                        },
                                        children: [(0, r.jsx)(s.Flex, {
                                            justify: "center",
                                            align: "center",
                                            w: {
                                                base: "32px",
                                                md: "40px"
                                            },
                                            h: {
                                                base: "32px",
                                                md: "40px"
                                            },
                                            borderRadius: "full",
                                            bg: {
                                                base: "blue.100",
                                                _dark: "blue.900/30"
                                            },
                                            color: {
                                                base: "blue.600",
                                                _dark: "blue.400"
                                            },
                                            children: (0, r.jsx)(p.FiPackage, {
                                                size: 16
                                            })
                                        }), (0, r.jsxs)(o.Box, {
                                            flex: 1,
                                            children: [(0, r.jsx)(c.Text, {
                                                fontSize: {
                                                    base: "sm",
                                                    md: "md"
                                                },
                                                fontWeight: "bold",
                                                color: {
                                                    base: "gray.900",
                                                    _dark: "gray.100"
                                                },
                                                lineHeight: "1.2",
                                                children: e.description
                                            }), (0, r.jsxs)(c.Text, {
                                                fontSize: "xs",
                                                color: {
                                                    base: "gray.500",
                                                    _dark: "gray.500"
                                                },
                                                display: {
                                                    base: "none",
                                                    md: "block"
                                                },
                                                children: [e.photoCount, " ", b("photoStorage.packages.photoCount")]
                                            })]
                                        })]
                                    }), (0, r.jsxs)(s.Flex, {
                                        align: "baseline",
                                        gap: 2,
                                        children: [(0, r.jsx)(c.Text, {
                                            fontSize: {
                                                base: "md",
                                                md: "xl"
                                            },
                                            fontWeight: "bold",
                                            color: {
                                                base: "green.600",
                                                _dark: "green.400"
                                            },
                                            children: e.priceCents.toLocaleString("vi-VN")
                                        }), (0, r.jsx)(c.Text, {
                                            fontSize: "xs",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: b("photoStorage.packages.vnd")
                                        })]
                                    }), (0, r.jsxs)(h.VStack, {
                                        gap: 1,
                                        align: "stretch",
                                        fontSize: "xs",
                                        display: {
                                            base: "none",
                                            md: "flex"
                                        },
                                        children: [(0, r.jsxs)(s.Flex, {
                                            gap: 2,
                                            align: "center",
                                            children: [(0, r.jsx)(p.FiCheck, {
                                                size: 14,
                                                color: "green"
                                            }), (0, r.jsx)(c.Text, {
                                                color: {
                                                    base: "gray.700",
                                                    _dark: "gray.300"
                                                },
                                                children: "Lưu trữ vĩnh viễn"
                                            })]
                                        }), (0, r.jsxs)(s.Flex, {
                                            gap: 2,
                                            align: "center",
                                            children: [(0, r.jsx)(p.FiCheck, {
                                                size: 14,
                                                color: "green"
                                            }), (0, r.jsx)(c.Text, {
                                                color: {
                                                    base: "gray.700",
                                                    _dark: "gray.300"
                                                },
                                                children: "Cộng dồn với gói hiện tại"
                                            })]
                                        })]
                                    }), (0, r.jsx)(c.Text, {
                                        display: {
                                            base: "block",
                                            md: "none"
                                        },
                                        fontSize: "11px",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        lineClamp: 1,
                                        children: "Lưu trữ vĩnh viễn • Cộng dồn"
                                    }), (0, r.jsx)(o.Box, {
                                        width: "full",
                                        children: (0, r.jsx)(a.default, {
                                            variant: "fill",
                                            onClick: () => {
                                                S(e), f(!0)
                                            },
                                            icon: (0, r.jsx)(p.FiShoppingCart, {}),
                                            size: "sm",
                                            className: "w-full !h-10",
                                            children: b("photoStorage.packages.purchase")
                                        })
                                    })]
                                })
                            })
                        }, e.id))
                    }) : (0, r.jsx)(i.Card.Root, {
                        children: (0, r.jsx)(i.Card.Body, {
                            p: 4,
                            children: (0, r.jsx)(c.Text, {
                                textAlign: "center",
                                fontSize: "sm",
                                color: {
                                    base: "gray.500",
                                    _dark: "gray.500"
                                },
                                children: b("photoStorage.packages.noPackages")
                            })
                        })
                    })]
                })]
            }), j && (0, r.jsx)(E, {
                isOpen: y,
                onClose: () => {
                    f(!1), S(null)
                },
                package: j,
                currentLimit: (null == k ? void 0 : k.totalLimit) || 0
            })]
        })
    }], 423398)
}, 545282, e => {
    "use strict";
    e.s(["getFileName", 0, e => {
        let r = e.split(".").slice(0, -1).join("."),
            a = e.split(".").slice(-1)[0];
        return r.length > 12 ? r.slice(0, 12) + "..." + a : r + "." + a
    }])
}, 939356, e => {
    "use strict";
    var r = e.i(483632),
        a = e.i(923990),
        t = e.i(523789),
        o = e.i(545282),
        i = e.i(564668),
        s = e.i(299846),
        l = e.i(494114),
        n = e.i(536072),
        d = e.i(119887),
        c = e.i(165341),
        g = e.i(51715),
        h = e.i(791089),
        x = e.i(251570);
    e.i(308972);
    var u = e.i(445979),
        p = e.i(84723),
        b = e.i(598877),
        m = e.i(649760),
        y = e.i(423398),
        f = e.i(940948),
        j = e.i(343207);
    let S = e => {
            let {
                children: a,
                isSelected: t,
                onClick: o
            } = e;
            return (0, r.jsx)(i.Box, {
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "full",
                bg: t ? "blue.500" : "gray.100",
                color: t ? "white" : "gray.800",
                px: 3,
                py: 1,
                fontSize: "sm",
                cursor: "pointer",
                onClick: o,
                mr: 2,
                mb: 2,
                children: a
            })
        },
        k = e => {
            let {
                value: a
            } = e;
            return (0, r.jsx)(i.Box, {
                w: "100%",
                h: "8px",
                bg: "gray.100",
                borderRadius: "full",
                overflow: "hidden",
                children: (0, r.jsx)(i.Box, {
                    h: "100%",
                    w: "".concat(a, "%"),
                    bg: "blue.500",
                    transition: "width 0.3s ease-in-out"
                })
            })
        };
    e.s(["default", 0, e => {
        var _;
        let T, w, v, {
                isOpen: C,
                onClose: z,
                onSelect: F,
                allowMultiple: W = !1,
                initialSelectedFiles: B = [],
                fileTypes: M = ["image/jpeg", "image/png", "image/gif", "image/webp"],
                title: R = "Select Files"
            } = e,
            {
                t: E
            } = (0, u.useTranslation)(),
            P = (0, f.useQueryClient)(),
            [A, I] = (0, x.useState)(B),
            [L, O] = (0, x.useState)(""),
            [N, U] = (0, x.useState)(""),
            [D, V] = (0, x.useState)({}),
            [G, q] = (0, x.useState)(!1),
            [Q, H] = (0, x.useState)("browse"),
            [K, Y] = (0, x.useState)(!1),
            [Z, J] = (0, x.useState)(1),
            [X, $] = (0, x.useState)([]),
            ee = (() => {
                if (0 === M.length) return;
                let e = M[0];
                return e.startsWith("image/") ? a.FileType.IMAGE : e.startsWith("video/") ? a.FileType.VIDEO : e.startsWith("audio/") ? a.FileType.AUDIO : a.FileType.OTHER
            })(),
            {
                data: er,
                isLoading: ea,
                error: et,
                refetch: eo
            } = (0, a.useGetFiles)(ee || a.FileType.OTHER, N || void 0, Z, 50),
            ei = Array.isArray(null == er ? void 0 : er.data) ? er.data : [],
            es = Z < ((null == er || null == (_ = er.meta) ? void 0 : _.totalPages) || 1),
            {
                data: el = [],
                isLoading: en
            } = (0, a.useGetAllTags)();
        (0, x.useEffect)(() => {
            ei && ei.length > 0 ? 1 === Z ? $(ei) : $(e => {
                let r = new Set(e.map(e => e.id));
                return [...e, ...ei.filter(e => !r.has(e.id))]
            }) : 1 === Z && ei && 0 === ei.length && $(e => e.length > 0 ? [] : e)
        }, [ei, Z]);
        let ed = (0, x.useRef)(C);
        (0, x.useEffect)(() => {
            let e = ed.current;
            ed.current = C, C && !e && (J(1), H("browse"), V({}), eo())
        }, [C, eo]);
        let ec = (0, x.useRef)(N);
        (0, x.useEffect)(() => {
            let e = ec.current;
            ec.current = N, C && e !== N && J(1)
        }, [N, C]);
        let eg = e => {
                N === e ? U("") : U(e)
            },
            eh = async e => {
                let r = e.target.files;
                if (!r || 0 === r.length) return;
                q(!0), V({});
                let t = Array.from(r).map(async e => {
                    if (!M.includes(e.type)) return null;
                    try {
                        V(r => ({ ...r,
                            [e.name]: 0
                        }));
                        let r = await (0, a.uploadFileWithTag)(e, N || void 0);
                        return V(r => ({ ...r,
                            [e.name]: 100
                        })), r
                    } catch (r) {
                        return V(r => {
                            let a = { ...r
                            };
                            return delete a[e.name], a
                        }), null
                    }
                });
                (await Promise.all(t)).filter(Boolean).length > 0 && (await eo(), P.invalidateQueries({
                    queryKey: j.PHOTO_STORAGE_QUERY_KEYS.myStorage()
                }), H("browse"), setTimeout(() => {
                    V({})
                }, 1e3)), q(!1), e.target && (e.target.value = "")
            },
            ex = X.filter(e => !L || e.originalName.toLowerCase().includes(L.toLowerCase()));
        return (0, r.jsx)(m.default, {
            isOpen: C,
            onClose: z,
            title: R,
            maxWidth: "900px",
            maxHeight: "80vh",
            children: (0, r.jsxs)(i.Box, {
                children: [(0, r.jsxs)(l.Flex, {
                    mb: 4,
                    gap: 2,
                    children: [(0, r.jsx)(s.Button, {
                        variant: "browse" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => H("browse"),
                        size: "sm",
                        children: E("fileSelect.tabs.browse")
                    }), (0, r.jsx)(s.Button, {
                        variant: "upload" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => H("upload"),
                        size: "sm",
                        children: E("fileSelect.tabs.upload")
                    }), (0, r.jsx)(s.Button, {
                        variant: "storage" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => H("storage"),
                        size: "sm",
                        children: (0, r.jsxs)(l.Flex, {
                            align: "center",
                            gap: 1.5,
                            children: [(0, r.jsx)(p.FiPackage, {}), E("fileSelect.tabs.storage")]
                        })
                    })]
                }), "browse" === Q && (0, r.jsxs)(i.Box, {
                    children: [(0, r.jsx)(l.Flex, {
                        gap: 4,
                        flexWrap: "wrap",
                        mb: 4,
                        children: (0, r.jsxs)(i.Box, {
                            position: "relative",
                            flex: "1",
                            children: [(0, r.jsx)(i.Box, {
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 1,
                                pointerEvents: "none",
                                children: (0, r.jsx)(p.FiSearch, {
                                    color: "gray"
                                })
                            }), (0, r.jsx)(c.Input, {
                                type: "text",
                                placeholder: E("fileSelect.search.placeholder"),
                                value: L,
                                onChange: e => O(e.target.value),
                                pl: "35px",
                                bg: {
                                    base: "white",
                                    _dark: "gray.700"
                                },
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                color: {
                                    base: "gray.900",
                                    _dark: "white"
                                },
                                _placeholder: {
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    }
                                }
                            })]
                        })
                    }), el.length > 0 && (0, r.jsxs)(i.Box, {
                        mb: 4,
                        children: [(0, r.jsx)(h.Text, {
                            fontSize: "sm",
                            mb: 2,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: E("fileSelect.groups.label")
                        }), (0, r.jsx)(i.Box, {
                            mb: 2,
                            children: (0, r.jsx)(c.Input, {
                                type: "text",
                                placeholder: E("fileSelect.search.groupPlaceholder"),
                                value: L,
                                onChange: e => O(e.target.value),
                                bg: {
                                    base: "white",
                                    _dark: "gray.700"
                                },
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                color: {
                                    base: "gray.900",
                                    _dark: "white"
                                },
                                _placeholder: {
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    }
                                }
                            })
                        }), (0, r.jsx)(l.Flex, {
                            gap: 2,
                            flexWrap: "wrap",
                            children: (T = el.filter(e => e.toLowerCase().includes(L.toLowerCase())), w = K ? T : T.slice(0, 10), v = T.length > 10, (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(S, {
                                    isSelected: "" === N,
                                    onClick: () => U(""),
                                    children: E("fileSelect.groups.all") || "All"
                                }), w.map(e => (0, r.jsx)(S, {
                                    isSelected: N === e,
                                    onClick: () => eg(e),
                                    children: e
                                }, e)), v && !L && (0, r.jsx)(i.Box, {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    borderRadius: "full",
                                    bg: "gray.200",
                                    color: "gray.800",
                                    px: 3,
                                    py: 1,
                                    fontSize: "sm",
                                    fontWeight: "medium",
                                    cursor: "pointer",
                                    onClick: () => Y(!K),
                                    mr: 2,
                                    mb: 2,
                                    _hover: {
                                        bg: "gray.300"
                                    },
                                    children: K ? E("fileSelect.groups.showLess") : E("fileSelect.groups.showMore", {
                                        count: T.length - 10
                                    })
                                })]
                            }))
                        })]
                    }), ea && 0 === X.length ? (0, r.jsx)(l.Flex, {
                        justify: "center",
                        align: "center",
                        h: "300px",
                        children: (0, r.jsx)(g.Spinner, {
                            size: "xl"
                        })
                    }) : (0, r.jsx)(i.Box, {
                        id: "file-scroll-container",
                        className: "max-h-[350px] overflow-y-auto",
                        children: ex.length > 0 ? (0, r.jsx)(b.default, {
                            dataLength: ex.length,
                            next: () => {
                                !ea && es && J(e => e + 1)
                            },
                            hasMore: es,
                            loader: (0, r.jsx)(l.Flex, {
                                justify: "center",
                                py: 4,
                                children: (0, r.jsx)(g.Spinner, {
                                    size: "md"
                                })
                            }),
                            endMessage: ex.length > 0 ? (0, r.jsx)(h.Text, {
                                textAlign: "center",
                                py: 4,
                                color: {
                                    base: "gray.500",
                                    _dark: "gray.400"
                                },
                                fontSize: "sm",
                                children: E("fileSelect.messages.endOfFiles")
                            }) : null,
                            scrollableTarget: "file-scroll-container",
                            scrollThreshold: .9,
                            children: (0, r.jsx)(n.Grid, {
                                templateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                                gap: 4,
                                mt: 4,
                                children: ex.map(e => (0, r.jsxs)(i.Box, {
                                    borderWidth: A.some(r => r.id === e.id) ? "3px" : "1px",
                                    borderColor: A.some(r => r.id === e.id) ? "blue.500" : {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    borderRadius: "md",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    onClick: () => {
                                        W ? A.some(r => r.id === e.id) ? I(A.filter(r => r.id !== e.id)) : I([...A, e]) : I([e])
                                    },
                                    position: "relative",
                                    bg: {
                                        base: "white",
                                        _dark: "gray.700"
                                    },
                                    children: [(0, r.jsx)(d.Image, {
                                        src: (0, t.getImageUrlWithSize)(e.filePath, "preview"),
                                        alt: e.fileName,
                                        objectFit: "cover",
                                        h: "60px",
                                        w: "100%",
                                        loading: "lazy"
                                    }), (0, r.jsx)(i.Box, {
                                        p: 2,
                                        children: (0, r.jsx)(h.Text, {
                                            fontSize: "xs",
                                            maxLines: 1,
                                            color: {
                                                base: "gray.900",
                                                _dark: "white"
                                            },
                                            children: (0, o.getFileName)(e.originalName)
                                        })
                                    }), A.some(r => r.id === e.id) && (0, r.jsx)(i.Box, {
                                        position: "absolute",
                                        top: 2,
                                        right: 2,
                                        bg: "blue.500",
                                        color: "white",
                                        borderRadius: "full",
                                        w: "20px",
                                        h: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: (0, r.jsx)(p.FiCheck, {
                                            size: 12
                                        })
                                    })]
                                }, e.id))
                            })
                        }) : (0, r.jsx)(l.Flex, {
                            justify: "center",
                            align: "center",
                            h: "300px",
                            children: (0, r.jsx)(h.Text, {
                                color: {
                                    base: "gray.500",
                                    _dark: "gray.400"
                                },
                                children: E("fileSelect.messages.noFiles")
                            })
                        })
                    })]
                }), "upload" === Q && (0, r.jsxs)(i.Box, {
                    children: [(0, r.jsxs)(l.Flex, {
                        direction: "column",
                        align: "center",
                        justify: "center",
                        h: "300px",
                        border: "2px dashed",
                        borderColor: "gray.300",
                        borderRadius: "md",
                        p: 6,
                        position: "relative",
                        children: [(0, r.jsx)(p.FiUpload, {
                            size: 40,
                            color: "gray"
                        }), (0, r.jsx)(h.Text, {
                            mt: 4,
                            mb: 6,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: E("fileSelect.upload.dragDrop")
                        }), (0, r.jsx)(c.Input, {
                            type: "file",
                            multiple: !0,
                            accept: M.join(","),
                            onChange: eh,
                            opacity: "0",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                            disabled: G
                        }), (0, r.jsx)(s.Button, {
                            colorScheme: "blue",
                            disabled: G,
                            pointerEvents: G ? "none" : "auto",
                            children: E("fileSelect.upload.selectFiles")
                        })]
                    }), Object.keys(D).length > 0 && (0, r.jsxs)(i.Box, {
                        mt: 4,
                        children: [(0, r.jsx)(h.Text, {
                            mb: 2,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: E("fileSelect.upload.progress")
                        }), Object.entries(D).map(e => {
                            let [a, t] = e;
                            return (0, r.jsxs)(i.Box, {
                                mb: 2,
                                children: [(0, r.jsxs)(l.Flex, {
                                    justify: "space-between",
                                    children: [(0, r.jsx)(h.Text, {
                                        fontSize: "sm",
                                        maxLines: 1,
                                        children: a
                                    }), (0, r.jsxs)(h.Text, {
                                        fontSize: "sm",
                                        children: [t, "%"]
                                    })]
                                }), (0, r.jsx)(k, {
                                    value: t
                                })]
                            }, a)
                        })]
                    }), (0, r.jsxs)(i.Box, {
                        mt: 4,
                        children: [(0, r.jsx)(h.Text, {
                            fontSize: "sm",
                            mb: 2,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: E("fileSelect.upload.addTags")
                        }), (0, r.jsxs)(l.Flex, {
                            gap: 2,
                            flexWrap: "wrap",
                            children: [el.map(e => (0, r.jsx)(S, {
                                isSelected: N === e,
                                onClick: () => eg(e),
                                children: e
                            }, e)), (0, r.jsx)(i.Box, {
                                maxW: "150px",
                                children: (0, r.jsx)(c.Input, {
                                    size: "sm",
                                    placeholder: E("fileSelect.upload.addNewTag"),
                                    onKeyDown: e => {
                                        if ("Enter" === e.key && e.currentTarget.value) {
                                            let r = e.currentTarget.value.trim();
                                            r && N !== r && U(r), e.currentTarget.value = ""
                                        }
                                    }
                                })
                            })]
                        })]
                    })]
                }), "storage" === Q && (0, r.jsx)(y.default, {}), (0, r.jsxs)(l.Flex, {
                    justify: "space-between",
                    w: "100%",
                    mt: 4,
                    pt: 4,
                    borderTopWidth: "1px",
                    borderColor: "gray.200",
                    children: [(0, r.jsx)(i.Box, {
                        children: A.length > 0 && (0, r.jsx)(h.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: E("fileSelect.footer.selected", {
                                count: A.length
                            })
                        })
                    }), (0, r.jsxs)(l.Flex, {
                        gap: 2,
                        children: [(0, r.jsx)(s.Button, {
                            variant: "ghost",
                            onClick: z,
                            children: E("fileSelect.footer.cancel")
                        }), (0, r.jsx)(s.Button, {
                            colorScheme: "blue",
                            onClick: () => {
                                F(A), z()
                            },
                            disabled: 0 === A.length,
                            children: E("fileSelect.footer.select")
                        })]
                    })]
                })]
            })
        })
    }])
}]);

//# debugId=e7f48c4a-963f-23a6-b13d-9728858cc7d1
//# sourceMappingURL=3c2de9e70bbdcfb0.js.map