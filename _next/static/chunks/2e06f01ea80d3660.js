;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "5680508c-f6b7-d750-ad2a-bb04ef97e55c")
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
        f = e.i(79663),
        y = e.i(201975),
        j = e.i(297272),
        S = e.i(870566),
        k = e.i(162234),
        _ = e.i(789757),
        T = e.i(215669),
        w = e.i(119887),
        C = e.i(165341),
        v = e.i(389868),
        z = e.i(940948);
    let F = ("number" == typeof S.zIndex.settingsModal ? S.zIndex.settingsModal : 500008) + 20;

    function W(e) {
        var t;
        let {
            isOpen: i,
            onClose: l,
            package: n,
            currentLimit: d
        } = e, {
            t: g
        } = (0, u.useTranslation)(), S = (0, z.useQueryClient)(), [W, B] = (0, x.useState)(!1), [R, M] = (0, x.useState)(""), [A, I] = (0, x.useState)(null), [P, E] = (0, x.useState)(null), L = (0, f.useCreatePhotoStorageOrder)(), {
            data: O
        } = (0, y.useGetOrderDetails)(A), N = (0, j.usePaymentNotifications)(), U = e => new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
        }).format(e), V = (0, x.useRef)(null);
        (0, x.useEffect)(() => {
            i && (M(""), I(null), E(null), B(!1), V.current = null)
        }, [i]), (0, x.useEffect)(() => {
            let e = null == O ? void 0 : O.status;
            e && V.current !== e && ("paid" === e ? (V.current = e, S.invalidateQueries({
                queryKey: ["photoStorage", "myStorage"]
            }), S.invalidateQueries({
                queryKey: ["photoStorage", "mySubscriptions"]
            }), N.showPaymentSuccess(), l()) : "failed" === e ? (V.current = e, N.showPaymentFailed(), B(!1)) : "canceled" === e && (V.current = e, N.showPaymentFailed(g("photoStorage.purchaseModal.orderCanceled")), B(!1)))
        }, [null == O ? void 0 : O.status, S, l, N, g]);
        let D = async () => {
            B(!0);
            try {
                let e = {
                        catalogId: n.id,
                        ...R.trim() && {
                            promotionCode: R.trim()
                        }
                    },
                    r = await L.mutateAsync(e);
                I(r.orderId), E(r), N.showOrderCreated()
            } catch (a) {
                var e, r;
                m.toaster.create({
                    title: g("photoStorage.messages.purchaseError"),
                    description: (null == (r = a.response) || null == (e = r.data) ? void 0 : e.message) || "Có lỗi xảy ra khi tạo đơn hàng",
                    type: "error"
                }), B(!1)
            }
        };
        return (0, r.jsx)(b.ModalBasic, {
            isOpen: i,
            onClose: l,
            title: g("photoStorage.purchaseModal.title"),
            maxWidth: "500px",
            zIndex: F,
            children: (0, r.jsxs)(h.VStack, {
                gap: 4,
                align: "stretch",
                py: 2,
                children: [!P && (0, r.jsxs)(r.Fragment, {
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
                                    children: n.description
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: n.name
                                })]
                            })]
                        }), (0, r.jsxs)(v.Stack, {
                            gap: 1.5,
                            children: [(0, r.jsxs)(s.Flex, {
                                justify: "space-between",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: g("photoStorage.purchaseModal.photoCount")
                                }), (0, r.jsxs)(c.Text, {
                                    fontWeight: "semibold",
                                    fontSize: "sm",
                                    color: {
                                        base: "gray.900",
                                        _dark: "gray.100"
                                    },
                                    children: [n.photoCount, " ", g("photoStorage.purchaseModal.photos")]
                                })]
                            }), (0, r.jsxs)(s.Flex, {
                                justify: "space-between",
                                children: [(0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.600",
                                        _dark: "gray.400"
                                    },
                                    children: g("photoStorage.purchaseModal.price")
                                }), (0, r.jsx)(c.Text, {
                                    fontWeight: "bold",
                                    fontSize: "md",
                                    color: {
                                        base: "green.600",
                                        _dark: "green.400"
                                    },
                                    children: U(n.priceCents)
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
                                    children: d
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "2xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.500"
                                    },
                                    children: g("photoStorage.purchaseModal.currentLimit")
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
                                    children: d + n.photoCount
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "2xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.500"
                                    },
                                    children: g("photoStorage.purchaseModal.afterPurchase")
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
                        }), (0, r.jsx)(C.Input, {
                            placeholder: "Nhập mã khuyến mãi",
                            value: R,
                            onChange: e => M(e.target.value),
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
                    }), (0, r.jsxs)(k.Alert.Root, {
                        status: "info",
                        variant: "subtle",
                        size: "sm",
                        children: [(0, r.jsx)(k.Alert.Indicator, {
                            children: (0, r.jsx)(p.FiAlertCircle, {})
                        }), (0, r.jsx)(k.Alert.Content, {
                            children: (0, r.jsx)(c.Text, {
                                fontSize: "xs",
                                children: g("photoStorage.purchaseModal.note")
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
                                children: g("photoStorage.purchaseModal.total")
                            }), (0, r.jsx)(c.Text, {
                                fontSize: "xl",
                                fontWeight: "bold",
                                color: {
                                    base: "green.600",
                                    _dark: "green.400"
                                },
                                children: U(n.priceCents)
                            })]
                        })
                    })]
                }), A && P && (0, r.jsxs)(h.VStack, {
                    gap: 6,
                    textAlign: "center",
                    w: "full",
                    children: [O && (0, r.jsxs)(_.Badge, {
                        size: "lg",
                        colorScheme: "paid" === O.status ? "green" : "failed" === O.status || "canceled" === O.status ? "red" : "blue",
                        px: 4,
                        py: 1,
                        borderRadius: "full",
                        children: ["paid" === O.status && g("pricing.purchaseModal.status.paid"), "requires_payment" === O.status && g("pricing.purchaseModal.status.requiresPayment"), "created" === O.status && g("pricing.purchaseModal.status.created"), "failed" === O.status && g("pricing.purchaseModal.status.failed"), "canceled" === O.status && g("pricing.purchaseModal.status.canceled")]
                    }), (null == O ? void 0 : O.status) === "paid" ? (0, r.jsxs)(h.VStack, {
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
                                children: g("pricing.purchaseModal.paymentSuccess")
                            }), (0, r.jsx)(c.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: "Dung lượng lưu trữ đã được cập nhật"
                            })]
                        })]
                    }) : (null == O ? void 0 : O.status) === "failed" || (null == O ? void 0 : O.status) === "canceled" ? (0, r.jsxs)(h.VStack, {
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
                                children: g("pricing.purchaseModal.paymentFailed")
                            }), (0, r.jsx)(c.Text, {
                                color: {
                                    base: "gray.600",
                                    _dark: "gray.400"
                                },
                                children: g("pricing.purchaseModal.paymentFailedDesc")
                            })]
                        })]
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
                                    children: g("pricing.purchaseModal.scanQR")
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
                                    children: P.qrImgUrl ? (0, r.jsx)(w.Image, {
                                        src: P.qrImgUrl,
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
                                            children: g("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    children: g("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), P.bank && P.accountNumber && (0, r.jsx)(o.Box, {
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
                                    children: g("pricing.purchaseModal.bankTransferInfo")
                                }), (0, r.jsxs)(T.HStack, {
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
                                        children: g("pricing.purchaseModal.bank")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.900",
                                            _dark: "gray.100"
                                        },
                                        children: P.bank
                                    })]
                                }), (0, r.jsxs)(T.HStack, {
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
                                        children: g("pricing.purchaseModal.accountNumber")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        fontFamily: "mono",
                                        children: P.accountNumber
                                    })]
                                }), P.transferDescription && (0, r.jsxs)(T.HStack, {
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
                                        children: g("pricing.purchaseModal.content")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "purple.600",
                                            _dark: "purple.400"
                                        },
                                        fontFamily: "mono",
                                        children: P.transferDescription
                                    })]
                                }), (0, r.jsxs)(T.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, r.jsx)(c.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: g("pricing.purchaseModal.total")
                                    }), (0, r.jsx)(c.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "rose.500",
                                            _dark: "rose.400"
                                        },
                                        children: U((null == (t = P.summary) ? void 0 : t.total) || P.amountCents)
                                    })]
                                })]
                            })
                        })]
                    })]
                }), !P && (0, r.jsxs)(s.Flex, {
                    justify: "flex-end",
                    gap: 2,
                    pt: 2,
                    children: [(0, r.jsx)(a.default, {
                        variant: "outline",
                        onClick: l,
                        disabled: W,
                        size: "sm",
                        children: g("photoStorage.purchaseModal.cancel")
                    }), (0, r.jsx)(a.default, {
                        variant: "fill",
                        onClick: D,
                        disabled: W,
                        size: "sm",
                        children: W ? g("photoStorage.purchaseModal.processing") : g("photoStorage.purchaseModal.confirm")
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
        })) && e, [f, y] = (0, x.useState)(!1), [j, S] = (0, x.useState)(null), {
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
                                                S(e), y(!0)
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
            }), j && (0, r.jsx)(W, {
                isOpen: f,
                onClose: () => {
                    y(!1), S(null)
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
        f = e.i(423398),
        y = e.i(940948),
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
        let T, w, C, {
                isOpen: v,
                onClose: z,
                onSelect: F,
                allowMultiple: W = !1,
                initialSelectedFiles: B = [],
                fileTypes: R = ["image/jpeg", "image/png", "image/gif", "image/webp"],
                title: M = "Select Files"
            } = e,
            {
                t: A
            } = (0, u.useTranslation)(),
            I = (0, y.useQueryClient)(),
            [P, E] = (0, x.useState)(B),
            [L, O] = (0, x.useState)(""),
            [N, U] = (0, x.useState)(""),
            [V, D] = (0, x.useState)({}),
            [q, G] = (0, x.useState)(!1),
            [Q, K] = (0, x.useState)("browse"),
            [H, Y] = (0, x.useState)(!1),
            [J, X] = (0, x.useState)(1),
            [Z, $] = (0, x.useState)([]),
            ee = (() => {
                if (0 === R.length) return;
                let e = R[0];
                return e.startsWith("image/") ? a.FileType.IMAGE : e.startsWith("video/") ? a.FileType.VIDEO : e.startsWith("audio/") ? a.FileType.AUDIO : a.FileType.OTHER
            })(),
            {
                data: er,
                isLoading: ea,
                error: et,
                refetch: eo
            } = (0, a.useGetFiles)(ee || a.FileType.OTHER, N || void 0, J, 50),
            ei = Array.isArray(null == er ? void 0 : er.data) ? er.data : [],
            es = J < ((null == er || null == (_ = er.meta) ? void 0 : _.totalPages) || 1),
            {
                data: el = [],
                isLoading: en
            } = (0, a.useGetAllTags)();
        (0, x.useEffect)(() => {
            ei && ei.length > 0 ? 1 === J ? $(ei) : $(e => {
                let r = new Set(e.map(e => e.id));
                return [...e, ...ei.filter(e => !r.has(e.id))]
            }) : 1 === J && ei && 0 === ei.length && $(e => e.length > 0 ? [] : e)
        }, [ei, J]);
        let ed = (0, x.useRef)(v);
        (0, x.useEffect)(() => {
            let e = ed.current;
            ed.current = v, v && !e && (X(1), K("browse"), D({}), eo())
        }, [v, eo]);
        let ec = (0, x.useRef)(N);
        (0, x.useEffect)(() => {
            let e = ec.current;
            ec.current = N, v && e !== N && X(1)
        }, [N, v]);
        let eg = e => {
                N === e ? U("") : U(e)
            },
            eh = async e => {
                let r = e.target.files;
                if (!r || 0 === r.length) return;
                G(!0), D({});
                let t = Array.from(r).map(async e => {
                    if (!R.includes(e.type)) return null;
                    try {
                        D(r => ({ ...r,
                            [e.name]: 0
                        }));
                        let r = await (0, a.uploadFileWithTag)(e, N || void 0);
                        return D(r => ({ ...r,
                            [e.name]: 100
                        })), r
                    } catch (r) {
                        return D(r => {
                            let a = { ...r
                            };
                            return delete a[e.name], a
                        }), null
                    }
                });
                (await Promise.all(t)).filter(Boolean).length > 0 && (await eo(), I.invalidateQueries({
                    queryKey: j.PHOTO_STORAGE_QUERY_KEYS.myStorage()
                }), K("browse"), setTimeout(() => {
                    D({})
                }, 1e3)), G(!1), e.target && (e.target.value = "")
            },
            ex = Z.filter(e => !L || e.originalName.toLowerCase().includes(L.toLowerCase()));
        return (0, r.jsx)(m.default, {
            isOpen: v,
            onClose: z,
            title: M,
            maxWidth: "900px",
            maxHeight: "80vh",
            children: (0, r.jsxs)(i.Box, {
                children: [(0, r.jsxs)(l.Flex, {
                    mb: 4,
                    gap: 2,
                    children: [(0, r.jsx)(s.Button, {
                        variant: "browse" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => K("browse"),
                        size: "sm",
                        children: A("fileSelect.tabs.browse")
                    }), (0, r.jsx)(s.Button, {
                        variant: "upload" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => K("upload"),
                        size: "sm",
                        children: A("fileSelect.tabs.upload")
                    }), (0, r.jsx)(s.Button, {
                        variant: "storage" === Q ? "solid" : "outline",
                        colorScheme: "blue",
                        onClick: () => K("storage"),
                        size: "sm",
                        children: (0, r.jsxs)(l.Flex, {
                            align: "center",
                            gap: 1.5,
                            children: [(0, r.jsx)(p.FiPackage, {}), A("fileSelect.tabs.storage")]
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
                                placeholder: A("fileSelect.search.placeholder"),
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
                            children: A("fileSelect.groups.label")
                        }), (0, r.jsx)(i.Box, {
                            mb: 2,
                            children: (0, r.jsx)(c.Input, {
                                type: "text",
                                placeholder: A("fileSelect.search.groupPlaceholder"),
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
                            children: (T = el.filter(e => e.toLowerCase().includes(L.toLowerCase())), w = H ? T : T.slice(0, 10), C = T.length > 10, (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(S, {
                                    isSelected: "" === N,
                                    onClick: () => U(""),
                                    children: A("fileSelect.groups.all") || "All"
                                }), w.map(e => (0, r.jsx)(S, {
                                    isSelected: N === e,
                                    onClick: () => eg(e),
                                    children: e
                                }, e)), C && !L && (0, r.jsx)(i.Box, {
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
                                    onClick: () => Y(!H),
                                    mr: 2,
                                    mb: 2,
                                    _hover: {
                                        bg: "gray.300"
                                    },
                                    children: H ? A("fileSelect.groups.showLess") : A("fileSelect.groups.showMore", {
                                        count: T.length - 10
                                    })
                                })]
                            }))
                        })]
                    }), ea && 0 === Z.length ? (0, r.jsx)(l.Flex, {
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
                                !ea && es && X(e => e + 1)
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
                                children: A("fileSelect.messages.endOfFiles")
                            }) : null,
                            scrollableTarget: "file-scroll-container",
                            scrollThreshold: .9,
                            children: (0, r.jsx)(n.Grid, {
                                templateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                                gap: 4,
                                mt: 4,
                                children: ex.map(e => (0, r.jsxs)(i.Box, {
                                    borderWidth: P.some(r => r.id === e.id) ? "3px" : "1px",
                                    borderColor: P.some(r => r.id === e.id) ? "blue.500" : {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    borderRadius: "md",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    onClick: () => {
                                        W ? P.some(r => r.id === e.id) ? E(P.filter(r => r.id !== e.id)) : E([...P, e]) : E([e])
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
                                    }), P.some(r => r.id === e.id) && (0, r.jsx)(i.Box, {
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
                                children: A("fileSelect.messages.noFiles")
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
                            children: A("fileSelect.upload.dragDrop")
                        }), (0, r.jsx)(c.Input, {
                            type: "file",
                            multiple: !0,
                            accept: R.join(","),
                            onChange: eh,
                            opacity: "0",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                            disabled: q
                        }), (0, r.jsx)(s.Button, {
                            colorScheme: "blue",
                            disabled: q,
                            pointerEvents: q ? "none" : "auto",
                            children: A("fileSelect.upload.selectFiles")
                        })]
                    }), Object.keys(V).length > 0 && (0, r.jsxs)(i.Box, {
                        mt: 4,
                        children: [(0, r.jsx)(h.Text, {
                            mb: 2,
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: A("fileSelect.upload.progress")
                        }), Object.entries(V).map(e => {
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
                            children: A("fileSelect.upload.addTags")
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
                                    placeholder: A("fileSelect.upload.addNewTag"),
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
                }), "storage" === Q && (0, r.jsx)(f.default, {}), (0, r.jsxs)(l.Flex, {
                    justify: "space-between",
                    w: "100%",
                    mt: 4,
                    pt: 4,
                    borderTopWidth: "1px",
                    borderColor: "gray.200",
                    children: [(0, r.jsx)(i.Box, {
                        children: P.length > 0 && (0, r.jsx)(h.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.700",
                                _dark: "gray.300"
                            },
                            children: A("fileSelect.footer.selected", {
                                count: P.length
                            })
                        })
                    }), (0, r.jsxs)(l.Flex, {
                        gap: 2,
                        children: [(0, r.jsx)(s.Button, {
                            variant: "ghost",
                            onClick: z,
                            children: A("fileSelect.footer.cancel")
                        }), (0, r.jsx)(s.Button, {
                            colorScheme: "blue",
                            onClick: () => {
                                F(P), z()
                            },
                            disabled: 0 === P.length,
                            children: A("fileSelect.footer.select")
                        })]
                    })]
                })]
            })
        })
    }])
}]);

//# debugId=5680508c-f6b7-d750-ad2a-bb04ef97e55c
//# sourceMappingURL=1abb134305065727.js.map