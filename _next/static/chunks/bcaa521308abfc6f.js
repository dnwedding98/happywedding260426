;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "57ef4975-4abe-1034-1490-6aa63bf1ce99")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 688526, 219847, 80541, e => {
    "use strict";
    e.s([], 637277), e.i(637277);
    var a = e.i(483632);
    e.s([], 590526), e.i(590526);
    let [r, t] = (0, e.i(483591).createContext)({
        name: "AvatarContext",
        hookName: "useAvatarContext",
        providerName: "<AvatarProvider />"
    }), s = e => e.children(t());
    var o = e.i(30500),
        i = e.i(251570),
        n = e.i(173614);
    let l = (0, i.forwardRef)((e, r) => {
        let s = t(),
            i = (0, o.mergeProps)(s.getFallbackProps(), e);
        return (0, a.jsx)(n.ark.span, { ...i,
            ref: r
        })
    });
    l.displayName = "AvatarFallback";
    let c = (0, i.forwardRef)((e, r) => {
        let s = t(),
            i = (0, o.mergeProps)(s.getImageProps(), e);
        return (0, a.jsx)(n.ark.img, { ...i,
            ref: r
        })
    });
    c.displayName = "AvatarImage";
    var d = e.i(341061),
        u = e.i(895315),
        h = e.i(501829),
        g = e.i(520036),
        p = e.i(904849);
    let m = (0, d.createSplitProps)(),
        x = (0, i.forwardRef)((e, t) => {
            let [s, l] = m(e, ["id", "ids", "onStatusChange"]), c = (e => {
                let a = (0, i.useId)(),
                    {
                        getRootNode: r
                    } = (0, g.useEnvironmentContext)(),
                    {
                        dir: t
                    } = (0, p.useLocaleContext)(),
                    s = {
                        id: a,
                        dir: t,
                        getRootNode: r,
                        ...e
                    },
                    o = (0, h.useMachine)(u.machine, s);
                return u.connect(o, h.normalizeProps)
            })(s), d = (0, o.mergeProps)(c.getRootProps(), l);
            return (0, a.jsx)(r, {
                value: c,
                children: (0, a.jsx)(n.ark.div, { ...d,
                    ref: t
                })
            })
        });
    x.displayName = "AvatarRoot";
    let b = (0, d.createSplitProps)(),
        f = (0, i.forwardRef)((e, t) => {
            let [{
                value: s
            }, i] = b(e, ["value"]), l = (0, o.mergeProps)(s.getRootProps(), i);
            return (0, a.jsx)(r, {
                value: s,
                children: (0, a.jsx)(n.ark.div, { ...l,
                    ref: t
                })
            })
        });
    f.displayName = "AvatarRootProvider", e.s(["Context", () => s, "Fallback", () => l, "Image", () => c, "Root", () => x, "RootProvider", () => f], 325021);
    var y = e.i(325021),
        y = y,
        w = e.i(664288),
        j = e.i(489198),
        v = e.i(179878),
        k = e.i(87065),
        P = e.i(155575);
    let {
        withProvider: C,
        withContext: S,
        useStyles: N,
        useClassNames: T,
        PropsProvider: R
    } = (0, w.createSlotRecipeContext)({
        key: "avatar"
    }), _ = C(y.RootProvider, "root", {
        forwardAsChild: !0
    }), E = C(y.Root, "root", {
        forwardAsChild: !0
    }), z = (0, j.chakra)(y.Fallback, {}, {
        forwardAsChild: !0
    }), W = (0, i.forwardRef)(function(e, r) {
        let t, s, o, i = N(),
            n = T(),
            {
                name: l,
                ...c
            } = e;
        return (0, a.jsx)(z, {
            ref: r,
            ...c,
            className: (0, k.cx)(e.className, n.fallback),
            css: [i.fallback, e.css],
            children: e.children || e.asChild ? e.children : e.name ? (s = null != (t = e.name.trim().split(" "))[0] ? t[0] : "", o = t.length > 1 ? t[t.length - 1] : "", s && o ? "".concat(s.charAt(0)).concat(o.charAt(0)) : s.charAt(0)) : (0, a.jsx)(A, {})
        })
    }), q = S(y.Image, "image", {
        forwardAsChild: !0,
        defaultProps: {
            draggable: "false",
            referrerPolicy: "no-referrer"
        }
    }), A = (0, i.forwardRef)(function(e, r) {
        return (0, a.jsx)(j.chakra.svg, {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 24 24",
            height: "1.2em",
            width: "1.2em",
            ref: r,
            ...e,
            children: (0, a.jsx)("path", {
                d: "M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            })
        })
    }), F = y.Context;
    (0, i.forwardRef)(function(e, r) {
        let t = (0, v.useSlotRecipe)({
                key: "avatar"
            }),
            [s, o] = (0, i.useMemo)(() => t.splitVariantProps(e), [e, t]);
        return (0, a.jsx)(R, {
            value: s,
            children: (0, a.jsx)(P.Group, {
                gap: "0",
                spaceX: "-3",
                ref: r,
                ...o
            })
        })
    }), e.s(["Context", () => F, "Fallback", () => W, "Icon", () => A, "Image", () => q, "PropsProvider", () => R, "Root", () => E, "RootProvider", () => _], 660467);
    var I = e.i(660467);
    e.s(["Avatar", 0, I], 688526);
    var B = e.i(649760),
        D = e.i(334863),
        H = e.i(789757),
        M = e.i(564668),
        V = e.i(299846),
        O = e.i(215669),
        L = e.i(165341),
        U = e.i(51715),
        Q = e.i(791089),
        G = e.i(781042),
        K = e.i(118190),
        Z = e.i(101208),
        X = e.i(84723),
        Y = e.i(413308);
    e.i(308972);
    var $ = e.i(445979);
    e.s(["default", 0, e => {
        let {
            isOpen: r,
            onClose: t
        } = e, {
            t: s
        } = (0, $.useTranslation)(), [o, n] = (0, i.useState)({
            fullName: "",
            gender: "",
            birthDate: "",
            address: "",
            country: "",
            province: "",
            phoneNumber: "",
            cccd: ""
        }), [l, c] = (0, i.useState)({}), {
            data: d,
            isLoading: u
        } = (0, Y.useGetAgentApplication)(), h = (0, Y.useApplyForAgent)(), g = (e, a) => {
            n(r => ({ ...r,
                [e]: a
            })), l[e] && c(a => ({ ...a,
                [e]: ""
            }))
        }, p = async e => {
            let a;
            if (e.preventDefault(), a = {}, o.fullName.trim() || (a.fullName = s("agent.application.validation.fullName")), o.address.trim() || (a.address = s("agent.application.validation.address")), o.country.trim() || (a.country = s("agent.application.validation.country")), o.province.trim() || (a.province = s("agent.application.validation.province")), o.phoneNumber.trim() || (a.phoneNumber = s("agent.application.validation.phoneNumber")), o.cccd.trim() || (a.cccd = s("agent.application.validation.cccd")), c(a), 0 === Object.keys(a).length) try {
                let e = {
                    fullName: o.fullName,
                    gender: o.gender || void 0,
                    birthDate: o.birthDate || void 0,
                    address: o.address,
                    country: o.country,
                    province: o.province,
                    phoneNumber: o.phoneNumber,
                    cccd: o.cccd
                };
                await h.mutateAsync(e), D.toaster.create({
                    title: s("agent.application.successTitle"),
                    description: s("agent.application.successDesc"),
                    type: "success"
                }), t()
            } catch (e) {
                var r, i;
                D.toaster.create({
                    title: s("agent.application.errorTitle"),
                    description: (null == (i = e.response) || null == (r = i.data) ? void 0 : r.message) || s("agent.application.errorDesc"),
                    type: "error"
                })
            }
        };
        if (u) return (0, a.jsx)(B.default, {
            isOpen: r,
            onClose: t,
            title: s("header.loading"),
            maxWidth: "600px",
            children: (0, a.jsx)(M.Box, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                h: "64",
                children: (0, a.jsx)(U.Spinner, {
                    size: "xl",
                    color: "blue.500"
                })
            })
        });
        if (d) {
            let e;
            return (0, a.jsxs)(B.default, {
                isOpen: r,
                onClose: t,
                title: s("agent.application.statusTitle"),
                maxWidth: "600px",
                children: [(0, a.jsx)(O.HStack, {
                    justify: "space-between",
                    align: "center",
                    mb: 4,
                    children: (0, a.jsx)(H.Badge, {
                        colorScheme: (e => {
                            switch (e) {
                                case "pending":
                                    return "orange";
                                case "approved":
                                    return "green";
                                case "rejected":
                                    return "red";
                                default:
                                    return "gray"
                            }
                        })(d.status),
                        size: "lg",
                        children: (e = d.status, s("agent.application.status.".concat(e)))
                    })
                }), (0, a.jsxs)(K.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: [(0, a.jsxs)(M.Box, {
                        children: [(0, a.jsx)(Q.Text, {
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: {
                                base: "gray.600",
                                _dark: "gray.400"
                            },
                            mb: 2,
                            children: s("agent.application.info.title")
                        }), (0, a.jsxs)(K.VStack, {
                            gap: 2,
                            align: "stretch",
                            children: [(0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.fullName"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.fullName
                                })]
                            }), d.gender && (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.gender"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: s("agent.application.".concat(d.gender))
                                })]
                            }), d.birthDate && (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.birthDate"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: new Date(d.birthDate).toLocaleDateString("vi-VN")
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.address"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.address
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.country"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.country
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.province"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.province
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.phoneNumber"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.phoneNumber
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    fontWeight: "medium",
                                    children: [s("agent.application.cccd"), ":"]
                                }), (0, a.jsx)(Q.Text, {
                                    children: d.cccd
                                })]
                            }), d.createdAt && (0, a.jsxs)(O.HStack, {
                                children: [(0, a.jsx)(Q.Text, {
                                    fontWeight: "medium",
                                    children: s("agent.application.info.sentAt")
                                }), (0, a.jsx)(Q.Text, {
                                    children: new Date(d.createdAt).toLocaleDateString("vi-VN")
                                })]
                            })]
                        })]
                    }), d.adminNote && (0, a.jsxs)(M.Box, {
                        mt: 4,
                        p: 3,
                        bg: {
                            base: "gray.100",
                            _dark: "gray.700"
                        },
                        borderRadius: "md",
                        children: [(0, a.jsx)(Q.Text, {
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: {
                                base: "gray.600",
                                _dark: "gray.400"
                            },
                            mb: 2,
                            children: s("agent.application.info.adminNote")
                        }), (0, a.jsx)(Q.Text, {
                            fontSize: "sm",
                            bg: {
                                base: "gray.50",
                                _dark: "gray.800"
                            },
                            p: 3,
                            borderRadius: "lg",
                            children: d.adminNote
                        })]
                    })]
                })]
            })
        }
        return (0, a.jsx)(B.default, {
            isOpen: r,
            onClose: t,
            title: s("agent.application.modalTitle"),
            maxWidth: "600px",
            children: (0, a.jsxs)("form", {
                onSubmit: p,
                children: [(0, a.jsx)(K.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: (0, a.jsxs)(M.Box, {
                        children: [(0, a.jsx)(Q.Text, {
                            fontSize: "lg",
                            fontWeight: "semibold",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            mb: 3,
                            children: s("agent.application.personalInfo")
                        }), (0, a.jsxs)(K.VStack, {
                            gap: 3,
                            align: "stretch",
                            children: [(0, a.jsxs)(M.Box, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    as: "label",
                                    display: "block",
                                    fontSize: "sm",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    mb: 1,
                                    children: [(0, a.jsx)(X.FiUser, {
                                        className: "inline mr-2"
                                    }), s("agent.application.fullName"), " *"]
                                }), (0, a.jsx)(L.Input, {
                                    value: o.fullName,
                                    onChange: e => g("fullName", e.target.value),
                                    placeholder: s("agent.application.fullNamePlaceholder"),
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderColor: {
                                        base: "gray.300",
                                        _dark: "gray.600"
                                    }
                                }), l.fullName && (0, a.jsx)(Q.Text, {
                                    color: "red.500",
                                    fontSize: "sm",
                                    mt: 1,
                                    children: l.fullName
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                gap: 3,
                                children: [(0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiUser, {
                                            className: "inline mr-2"
                                        }), s("agent.application.gender")]
                                    }), (0, a.jsxs)(j.chakra.select, {
                                        value: o.gender,
                                        onChange: e => g("gender", e.target.value),
                                        width: "full",
                                        px: 3,
                                        py: 2,
                                        borderWidth: "1px",
                                        borderColor: {
                                            base: "gray.300",
                                            _dark: "gray.600"
                                        },
                                        borderRadius: "md",
                                        bg: {
                                            base: "white",
                                            _dark: "gray.800"
                                        },
                                        color: {
                                            base: "gray.900",
                                            _dark: "white"
                                        },
                                        _focus: {
                                            outline: "none",
                                            ring: 2,
                                            ringColor: "blue.500"
                                        },
                                        children: [(0, a.jsx)("option", {
                                            value: "",
                                            children: s("agent.application.selectGender")
                                        }), (0, a.jsx)("option", {
                                            value: "male",
                                            children: s("agent.application.male")
                                        }), (0, a.jsx)("option", {
                                            value: "female",
                                            children: s("agent.application.female")
                                        }), (0, a.jsx)("option", {
                                            value: "other",
                                            children: s("agent.application.other")
                                        })]
                                    })]
                                }), (0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiCalendar, {
                                            className: "inline mr-2"
                                        }), s("agent.application.birthDate")]
                                    }), (0, a.jsx)(Z.DateInput, {
                                        value: o.birthDate,
                                        onChange: e => g("birthDate", e)
                                    })]
                                })]
                            }), (0, a.jsxs)(M.Box, {
                                children: [(0, a.jsxs)(Q.Text, {
                                    as: "label",
                                    display: "block",
                                    fontSize: "sm",
                                    fontWeight: "medium",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    mb: 1,
                                    children: [(0, a.jsx)(X.FiMapPin, {
                                        className: "inline mr-2"
                                    }), s("agent.application.address"), " *"]
                                }), (0, a.jsx)(G.Textarea, {
                                    value: o.address,
                                    onChange: e => g("address", e.target.value),
                                    placeholder: s("agent.application.addressPlaceholder"),
                                    rows: 2,
                                    bg: {
                                        base: "white",
                                        _dark: "gray.800"
                                    },
                                    borderColor: {
                                        base: "gray.300",
                                        _dark: "gray.600"
                                    }
                                }), l.address && (0, a.jsx)(Q.Text, {
                                    color: "red.500",
                                    fontSize: "sm",
                                    mt: 1,
                                    children: l.address
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                gap: 3,
                                children: [(0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiMapPin, {
                                            className: "inline mr-2"
                                        }), s("agent.application.country"), " *"]
                                    }), (0, a.jsx)(L.Input, {
                                        value: o.country,
                                        onChange: e => g("country", e.target.value),
                                        placeholder: s("agent.application.countryPlaceholder"),
                                        bg: {
                                            base: "white",
                                            _dark: "gray.800"
                                        },
                                        borderColor: {
                                            base: "gray.300",
                                            _dark: "gray.600"
                                        }
                                    }), l.country && (0, a.jsx)(Q.Text, {
                                        color: "red.500",
                                        fontSize: "sm",
                                        mt: 1,
                                        children: l.country
                                    })]
                                }), (0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiMapPin, {
                                            className: "inline mr-2"
                                        }), s("agent.application.province"), " *"]
                                    }), (0, a.jsx)(L.Input, {
                                        value: o.province,
                                        onChange: e => g("province", e.target.value),
                                        placeholder: s("agent.application.provincePlaceholder"),
                                        bg: {
                                            base: "white",
                                            _dark: "gray.800"
                                        },
                                        borderColor: {
                                            base: "gray.300",
                                            _dark: "gray.600"
                                        }
                                    }), l.province && (0, a.jsx)(Q.Text, {
                                        color: "red.500",
                                        fontSize: "sm",
                                        mt: 1,
                                        children: l.province
                                    })]
                                })]
                            }), (0, a.jsxs)(O.HStack, {
                                gap: 3,
                                children: [(0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiPhone, {
                                            className: "inline mr-2"
                                        }), s("agent.application.phoneNumber"), " *"]
                                    }), (0, a.jsx)(L.Input, {
                                        value: o.phoneNumber,
                                        onChange: e => g("phoneNumber", e.target.value),
                                        placeholder: s("agent.application.phoneNumberPlaceholder"),
                                        bg: {
                                            base: "white",
                                            _dark: "gray.800"
                                        },
                                        borderColor: {
                                            base: "gray.300",
                                            _dark: "gray.600"
                                        }
                                    }), l.phoneNumber && (0, a.jsx)(Q.Text, {
                                        color: "red.500",
                                        fontSize: "sm",
                                        mt: 1,
                                        children: l.phoneNumber
                                    })]
                                }), (0, a.jsxs)(M.Box, {
                                    flex: 1,
                                    children: [(0, a.jsxs)(Q.Text, {
                                        as: "label",
                                        display: "block",
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        mb: 1,
                                        children: [(0, a.jsx)(X.FiCreditCard, {
                                            className: "inline mr-2"
                                        }), s("agent.application.cccd"), " *"]
                                    }), (0, a.jsx)(L.Input, {
                                        value: o.cccd,
                                        onChange: e => g("cccd", e.target.value),
                                        placeholder: s("agent.application.cccdPlaceholder"),
                                        bg: {
                                            base: "white",
                                            _dark: "gray.800"
                                        },
                                        borderColor: {
                                            base: "gray.300",
                                            _dark: "gray.600"
                                        }
                                    }), l.cccd && (0, a.jsx)(Q.Text, {
                                        color: "red.500",
                                        fontSize: "sm",
                                        mt: 1,
                                        children: l.cccd
                                    })]
                                })]
                            })]
                        })]
                    })
                }), (0, a.jsxs)(O.HStack, {
                    gap: 3,
                    justify: "flex-end",
                    mt: 6,
                    children: [(0, a.jsx)(V.Button, {
                        onClick: t,
                        variant: "outline",
                        children: s("agent.application.cancel")
                    }), (0, a.jsx)(V.Button, {
                        type: "submit",
                        colorScheme: "blue",
                        loading: h.isPending,
                        children: s("agent.application.submit")
                    })]
                })]
            })
        })
    }], 219847);
    var J = e.i(536072),
        ee = e.i(197258),
        ea = e.i(71839);
    let er = {
            taxCode: "",
            companyName: "",
            companyAddress: "",
            email: "",
            buyerName: "",
            phoneNumber: "",
            citizenIdNumber: "",
            note: ""
        },
        et = ["taxCode", "companyName", "companyAddress", "email", "buyerName", "phoneNumber", "citizenIdNumber"];
    e.s(["default", 0, e => {
        let {
            isOpen: r,
            onClose: t
        } = e, {
            t: s
        } = (0, $.useTranslation)(), [o, n] = (0, i.useState)(er), [l, c] = (0, i.useState)({}), d = (0, ea.useCreateBillExportRequest)(), {
            data: u,
            refetch: h
        } = (0, ea.useGetBillExportRequests)(), g = e => s("account.billExportRequest.fields.".concat(e)), p = (e, a) => {
            n(r => ({ ...r,
                [e]: a
            })), l[e] && c(a => ({ ...a,
                [e]: void 0
            }))
        }, m = async () => {
            let e, a;
            if (e = {}, et.forEach(a => {
                    o[a].trim() || (e[a] = s("account.billExportRequest.requiredField", {
                        field: g(a)
                    }))
                }), (a = o.email.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) && (e.email = s("account.billExportRequest.invalidEmail")), c(e), 0 !== Object.keys(e).length) return void D.toaster.create({
                title: s("account.billExportRequest.errorTitle"),
                description: s("account.billExportRequest.validationError"),
                type: "error"
            });
            try {
                await d.mutateAsync({
                    taxCode: o.taxCode.trim(),
                    companyName: o.companyName.trim(),
                    companyAddress: o.companyAddress.trim(),
                    email: o.email.trim(),
                    buyerName: o.buyerName.trim(),
                    phoneNumber: o.phoneNumber.trim(),
                    citizenIdNumber: o.citizenIdNumber.trim(),
                    note: o.note.trim() || void 0
                }), D.toaster.create({
                    title: s("account.billExportRequest.successTitle"),
                    description: s("account.billExportRequest.successDesc"),
                    type: "success"
                }), n(er), c({}), t(), h()
            } catch (e) {
                D.toaster.create({
                    title: s("account.billExportRequest.errorTitle"),
                    description: e instanceof Error ? e.message : s("account.billExportRequest.defaultError"),
                    type: "error"
                })
            }
        }, x = null == u ? void 0 : u.requests.find(e => "pending" === e.status), b = (e, r) => {
            let t = "bill-export-".concat(e);
            return (0, a.jsxs)(M.Box, {
                gridColumn: (null == r ? void 0 : r.fullWidth) ? {
                    base: "auto",
                    md: "span 2"
                } : void 0,
                children: [(0, a.jsxs)("label", {
                    htmlFor: t,
                    style: {
                        display: "block",
                        marginBottom: "4px",
                        fontSize: "0.875rem",
                        fontWeight: 500
                    },
                    children: [g(e), " ", (0, a.jsx)("span", {
                        style: {
                            color: "#E53E3E"
                        },
                        children: "*"
                    })]
                }), (0, a.jsx)(L.Input, {
                    id: t,
                    type: (null == r ? void 0 : r.type) || "text",
                    value: o[e],
                    onChange: a => p(e, a.target.value),
                    placeholder: s("account.billExportRequest.placeholders.".concat(e)),
                    bg: {
                        base: "white",
                        _dark: "gray.800"
                    },
                    borderColor: l[e] ? "red.400" : void 0,
                    "aria-invalid": !!l[e]
                }), l[e] && (0, a.jsx)(Q.Text, {
                    fontSize: "xs",
                    color: "red.500",
                    mt: 1,
                    children: l[e]
                })]
            }, e)
        };
        return (0, a.jsx)(B.default, {
            isOpen: r,
            onClose: t,
            title: s("account.billExportRequest.modalTitle"),
            maxWidth: "720px",
            maxHeight: {
                base: "92vh",
                md: "85vh"
            },
            mobileSheet: !0,
            children: (0, a.jsxs)(K.VStack, {
                gap: {
                    base: 4,
                    md: 5
                },
                align: "stretch",
                children: [(null == u ? void 0 : u.requests) && u.requests.length > 0 && (0, a.jsxs)(M.Box, {
                    borderWidth: "1px",
                    borderRadius: "xl",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    p: {
                        base: 3,
                        md: 4
                    },
                    bg: {
                        base: "gray.50",
                        _dark: "gray.800"
                    },
                    children: [(0, a.jsx)(Q.Text, {
                        fontWeight: "bold",
                        fontSize: {
                            base: "md",
                            md: "lg"
                        },
                        mb: 3,
                        children: s("account.billExportRequest.yourRequests")
                    }), (0, a.jsx)(K.VStack, {
                        gap: 2,
                        align: "stretch",
                        maxH: {
                            base: "180px",
                            md: "220px"
                        },
                        overflowY: "auto",
                        children: u.requests.map(e => {
                            let r;
                            return (0, a.jsx)(M.Box, {
                                borderWidth: "1px",
                                borderRadius: "lg",
                                p: {
                                    base: 2.5,
                                    md: 3
                                },
                                bg: {
                                    base: "white",
                                    _dark: "gray.700"
                                },
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                children: (0, a.jsxs)(O.HStack, {
                                    justify: "space-between",
                                    align: "start",
                                    gap: 3,
                                    children: [(0, a.jsxs)(K.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, a.jsxs)(O.HStack, {
                                            gap: 2,
                                            flexWrap: "wrap",
                                            children: [(0, a.jsxs)(Q.Text, {
                                                fontWeight: "semibold",
                                                fontSize: "sm",
                                                children: ["#", e.id]
                                            }), (0, a.jsx)(H.Badge, {
                                                colorScheme: (e => {
                                                    switch (e) {
                                                        case "pending":
                                                            return "orange";
                                                        case "processing":
                                                            return "blue";
                                                        case "completed":
                                                            return "green";
                                                        case "failed":
                                                            return "red";
                                                        default:
                                                            return "gray"
                                                    }
                                                })(e.status),
                                                variant: "subtle",
                                                px: 2,
                                                py: 1,
                                                borderRadius: "full",
                                                children: (r = e.status, s("account.billExportRequest.status.".concat(r)))
                                            })]
                                        }), (0, a.jsx)(Q.Text, {
                                            fontSize: "xs",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: s("account.billExportRequest.createdAt", {
                                                date: new Date(e.requestedAt).toLocaleDateString("vi-VN", {
                                                    year: "numeric",
                                                    month: "2-digit",
                                                    day: "2-digit",
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            })
                                        }), (e.companyName || e.taxCode) && (0, a.jsxs)(Q.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.700",
                                                _dark: "gray.300"
                                            },
                                            children: [e.companyName || "-", " ", e.taxCode ? "(".concat(e.taxCode, ")") : ""]
                                        }), (e.buyerName || e.phoneNumber) && (0, a.jsxs)(Q.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.700",
                                                _dark: "gray.300"
                                            },
                                            children: [e.buyerName || "-", " ", e.phoneNumber ? "• ".concat(e.phoneNumber) : ""]
                                        }), e.note && (0, a.jsxs)(Q.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.700",
                                                _dark: "gray.300"
                                            },
                                            children: [s("account.billExportRequest.noteOptional"), ": ", e.note]
                                        }), e.adminNotes && (0, a.jsx)(Q.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "blue.700",
                                                _dark: "blue.300"
                                            },
                                            children: s("account.billExportRequest.adminNote", {
                                                note: e.adminNotes
                                            })
                                        }), e.errorMessage && (0, a.jsx)(Q.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "red.700",
                                                _dark: "red.300"
                                            },
                                            children: s("account.billExportRequest.error", {
                                                error: e.errorMessage
                                            })
                                        })]
                                    }), "completed" === e.status && e.fileUrl && (0, a.jsxs)(V.Button, {
                                        size: {
                                            base: "xs",
                                            md: "sm"
                                        },
                                        colorScheme: "green",
                                        variant: "outline",
                                        onClick: () => window.open(e.fileUrl, "_blank"),
                                        children: [(0, a.jsx)(ee.Icon, {
                                            as: X.FiDownload,
                                            boxSize: 4,
                                            mr: 1
                                        }), s("account.billExportRequest.download")]
                                    })]
                                })
                            }, e.id)
                        })
                    })]
                }), x ? (0, a.jsxs)(M.Box, {
                    bg: {
                        base: "orange.50",
                        _dark: "orange.900/20"
                    },
                    borderWidth: "1px",
                    borderColor: {
                        base: "orange.200",
                        _dark: "orange.800"
                    },
                    borderRadius: "lg",
                    p: 4,
                    children: [(0, a.jsxs)(O.HStack, {
                        gap: 2,
                        mb: 2,
                        children: [(0, a.jsx)(ee.Icon, {
                            as: X.FiFileText,
                            color: {
                                base: "orange.600",
                                _dark: "orange.300"
                            }
                        }), (0, a.jsx)(Q.Text, {
                            fontWeight: "semibold",
                            color: {
                                base: "orange.800",
                                _dark: "orange.200"
                            },
                            children: s("account.billExportRequest.pendingMessage")
                        })]
                    }), (0, a.jsx)(Q.Text, {
                        fontSize: "sm",
                        color: {
                            base: "orange.700",
                            _dark: "orange.300"
                        },
                        children: s("account.billExportRequest.pendingDesc")
                    })]
                }) : (0, a.jsxs)(M.Box, {
                    borderWidth: "1px",
                    borderRadius: "xl",
                    borderColor: {
                        base: "blue.200",
                        _dark: "blue.700"
                    },
                    bg: {
                        base: "blue.50",
                        _dark: "blue.900/10"
                    },
                    p: {
                        base: 3,
                        md: 4
                    },
                    children: [(0, a.jsx)(Q.Text, {
                        fontWeight: "bold",
                        fontSize: {
                            base: "md",
                            md: "lg"
                        },
                        mb: 1,
                        children: s("account.billExportRequest.createNew")
                    }), (0, a.jsx)(Q.Text, {
                        fontSize: "sm",
                        color: {
                            base: "gray.600",
                            _dark: "gray.400"
                        },
                        mb: 3,
                        children: s("account.billExportRequest.formDescription")
                    }), (0, a.jsxs)(K.VStack, {
                        gap: 3,
                        align: "stretch",
                        children: [(0, a.jsx)(Q.Text, {
                            fontSize: "xs",
                            color: {
                                base: "gray.500",
                                _dark: "gray.400"
                            },
                            children: s("account.billExportRequest.requiredLegend")
                        }), (0, a.jsxs)(J.Grid, {
                            templateColumns: {
                                base: "1fr",
                                md: "1fr 1fr"
                            },
                            gap: 3,
                            children: [b("taxCode"), b("companyName"), b("companyAddress", {
                                fullWidth: !0
                            }), b("email", {
                                type: "email"
                            }), b("buyerName"), b("phoneNumber"), b("citizenIdNumber")]
                        }), (0, a.jsxs)(M.Box, {
                            children: [(0, a.jsx)("label", {
                                htmlFor: "bill-export-note",
                                style: {
                                    display: "block",
                                    marginBottom: "4px",
                                    fontSize: "0.875rem",
                                    fontWeight: 500
                                },
                                children: s("account.billExportRequest.noteOptional")
                            }), (0, a.jsx)(G.Textarea, {
                                id: "bill-export-note",
                                placeholder: s("account.billExportRequest.placeholders.note"),
                                value: o.note,
                                onChange: e => p("note", e.target.value),
                                maxLength: 500,
                                rows: 3,
                                bg: {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                _placeholder: {
                                    color: "gray.500"
                                }
                            }), (0, a.jsx)(Q.Text, {
                                fontSize: "xs",
                                color: "gray.500",
                                mt: 1,
                                children: s("account.billExportRequest.charCount", {
                                    count: o.note.length
                                })
                            })]
                        }), (0, a.jsxs)(O.HStack, {
                            gap: 2,
                            width: "full",
                            flexDirection: {
                                base: "column-reverse",
                                md: "row"
                            },
                            align: "stretch",
                            children: [(0, a.jsx)(V.Button, {
                                variant: "outline",
                                onClick: t,
                                width: {
                                    base: "full",
                                    md: "auto"
                                },
                                flex: {
                                    base: "none",
                                    md: 1
                                },
                                minW: 0,
                                children: s("account.billExportRequest.cancel")
                            }), (0, a.jsxs)(V.Button, {
                                colorScheme: "blue",
                                onClick: m,
                                loading: d.isPending,
                                width: {
                                    base: "full",
                                    md: "auto"
                                },
                                flex: {
                                    base: "none",
                                    md: 1
                                },
                                minW: 0,
                                children: [(0, a.jsx)(ee.Icon, {
                                    as: X.FiFileText,
                                    boxSize: 4,
                                    mr: 2
                                }), s("account.billExportRequest.submit")]
                            })]
                        })]
                    })]
                }), (0, a.jsx)(M.Box, {
                    bg: {
                        base: "blue.50",
                        _dark: "blue.900/20"
                    },
                    borderWidth: "1px",
                    borderColor: {
                        base: "blue.200",
                        _dark: "blue.800"
                    },
                    borderRadius: "lg",
                    p: 4,
                    children: (0, a.jsx)(Q.Text, {
                        fontSize: "sm",
                        color: {
                            base: "blue.800",
                            _dark: "blue.200"
                        },
                        children: s("account.billExportRequest.noteInfo")
                    })
                })]
            })
        })
    }], 80541)
}, 22797, e => {
    "use strict";
    var a = e.i(836271),
        r = e.i(600923),
        t = e.i(840171),
        s = e.i(940948),
        o = e.i(833707),
        i = e.i(391265),
        n = e.i(649725),
        l = e.i(177848),
        c = e.i(813753);
    e.s(["useChangePassword", 0, () => (0, t.useMutation)({
        mutationFn: async e => (await n.default.post("/auth/change-password", e)).data
    }), "useForgotPassword", 0, () => (0, t.useMutation)({
        mutationFn: async e => (await n.default.post("/auth/forgot-password", e)).data
    }), "useGetMe", 0, () => {
        let e = (0, i.useDispatch)();
        return (0, t.useMutation)({
            mutationFn: async () => {
                let a = (await n.default.get("/auth/me")).data.data;
                e((0, c.signIn)({
                    user: a
                }))
            }
        })
    }, "useLogin", 0, () => {
        let e = (0, s.useQueryClient)(),
            r = (0, o.useRouter)(),
            d = (0, i.useDispatch)();
        return (0, t.useMutation)({
            mutationFn: async e => (await n.default.post("/auth/login", e)).data.data,
            onSuccess: t => {
                var s;
                let o, i, n;
                e.invalidateQueries({
                    queryKey: ["auth"]
                }), d((0, c.signIn)(t)), (0, l.bindAnonymousToUser)(null == (s = t.user) ? void 0 : s.id);
                let u = (o = new URLSearchParams(window.location.search).get("redirect"), i = sessionStorage.getItem("returnUrl"), !(!(n = o || i) || !n.startsWith("/") || n.startsWith("//")) ? n : null);
                setTimeout(() => {
                    u ? (sessionStorage.removeItem("returnUrl"), r.push(u)) : (0, a.canAccessAdmin)(t) ? r.push((0, a.getAdminLandingPathForRole)(t.user.role)) : "agent" === t.user.role ? r.push("/agent") : r.push("/wedding/manager")
                }, 1e3)
            }
        })
    }, "useLogout", 0, () => {
        let e = (0, s.useQueryClient)(),
            a = (0, i.useDispatch)();
        return (0, t.useMutation)({
            mutationFn: async () => {
                try {
                    await n.default.post("/auth/logout")
                } catch (e) {}
            },
            onSuccess: () => {
                e.invalidateQueries(), e.clear(), e.resetQueries(), a((0, c.signOut)())
            },
            onError: () => {
                e.invalidateQueries(), e.clear(), a((0, c.signOut)())
            }
        })
    }, "useRegister", 0, () => {
        let e = (0, s.useQueryClient)(),
            a = (0, i.useDispatch)();
        return (0, t.useMutation)({
            mutationFn: async e => {
                let a = e.referralCode || (0, r.getReferralCodeFromCookie)(),
                    t = { ...e,
                        ...a && {
                            referralCode: a
                        }
                    };
                return (await n.default.post("/auth/register", t)).data.data
            },
            onSuccess: t => {
                var s;
                e.invalidateQueries({
                    queryKey: ["auth"]
                }), a((0, c.signIn)(t)), (0, l.bindAnonymousToUser)(null == (s = t.user) ? void 0 : s.id), (0, r.removeReferralCodeCookie)()
            }
        })
    }, "useResendVerification", 0, () => (0, t.useMutation)({
        mutationFn: async e => (await n.default.post("/auth/resend-verification", e)).data
    }), "useResetPassword", 0, () => (0, t.useMutation)({
        mutationFn: async e => (await n.default.post("/auth/reset-password", e)).data
    })])
}, 332386, e => {
    "use strict";
    var a = e.i(483632),
        r = e.i(494114),
        t = e.i(165341),
        s = e.i(118190),
        o = e.i(251570);
    e.i(308972);
    var i = e.i(445979),
        n = e.i(391265),
        l = e.i(676525),
        c = e.i(649760),
        d = e.i(986530),
        u = e.i(334863),
        h = e.i(22797),
        g = e.i(813753);
    e.s(["default", 0, e => {
        var p;
        let {
            isOpen: m,
            onClose: x
        } = e, {
            t: b
        } = (0, i.useTranslation)(), f = (0, n.useSelector)(g.selectAuth), y = (null == f || null == (p = f.user) ? void 0 : p.isInitPassword) || !1, w = (0, h.useChangePassword)(), j = (0, h.useGetMe)(), [v, k] = (0, o.useState)({
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        }), [P, C] = (0, o.useState)({
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        }), S = (e, a) => {
            k(r => ({ ...r,
                [e]: a
            })), C(a => ({ ...a,
                [e]: ""
            }))
        }, N = async () => {
            let e;
            if (e = {
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                }, y || v.oldPassword || (e.oldPassword = b("account.changePassword.errors.oldPasswordRequired")), v.newPassword ? v.newPassword.length < 6 && (e.newPassword = b("account.changePassword.errors.newPasswordMinLength")) : e.newPassword = b("account.changePassword.errors.newPasswordRequired"), v.confirmPassword ? v.newPassword !== v.confirmPassword && (e.confirmPassword = b("account.changePassword.errors.passwordsNotMatch")) : e.confirmPassword = b("account.changePassword.errors.confirmPasswordRequired"), C(e), !Object.values(e).some(e => e)) try {
                await w.mutateAsync({
                    oldPassword: y ? "" : v.oldPassword,
                    newPassword: v.newPassword
                }), u.toaster.create({
                    title: b("account.changePassword.success"),
                    description: b("account.changePassword.successDesc"),
                    type: "success"
                }), await j.mutateAsync(), k({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                }), C({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                }), x()
            } catch (e) {
                var a, r;
                u.toaster.create({
                    title: b("account.changePassword.error"),
                    description: (null == e || null == (r = e.response) || null == (a = r.data) ? void 0 : a.message) || b("account.changePassword.errorDesc"),
                    type: "error"
                })
            }
        }, T = () => {
            k({
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            }), C({
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            }), x()
        };
        return (0, a.jsx)(c.default, {
            isOpen: m,
            onClose: T,
            title: b("account.changePassword.title"),
            maxWidth: "500px",
            children: (0, a.jsxs)(s.VStack, {
                gap: 4,
                align: "stretch",
                children: [!y && (0, a.jsx)(d.Field, {
                    label: b("account.changePassword.oldPassword"),
                    invalid: !!P.oldPassword,
                    errorText: P.oldPassword,
                    children: (0, a.jsx)(t.Input, {
                        type: "password",
                        placeholder: b("account.changePassword.oldPasswordPlaceholder"),
                        value: v.oldPassword,
                        onChange: e => S("oldPassword", e.target.value),
                        bg: {
                            base: "#F5EEED",
                            _dark: "gray.700"
                        },
                        color: {
                            base: "inherit",
                            _dark: "white"
                        },
                        borderRadius: "xl",
                        _focus: {
                            borderColor: "red.500"
                        }
                    })
                }), (0, a.jsx)(d.Field, {
                    label: b("account.changePassword.newPassword"),
                    invalid: !!P.newPassword,
                    errorText: P.newPassword,
                    children: (0, a.jsx)(t.Input, {
                        type: "password",
                        placeholder: b("account.changePassword.newPasswordPlaceholder"),
                        value: v.newPassword,
                        onChange: e => S("newPassword", e.target.value),
                        bg: {
                            base: "#F5EEED",
                            _dark: "gray.700"
                        },
                        color: {
                            base: "inherit",
                            _dark: "white"
                        },
                        borderRadius: "xl",
                        _focus: {
                            borderColor: "red.500"
                        }
                    })
                }), (0, a.jsx)(d.Field, {
                    label: b("account.changePassword.confirmPassword"),
                    invalid: !!P.confirmPassword,
                    errorText: P.confirmPassword,
                    children: (0, a.jsx)(t.Input, {
                        type: "password",
                        placeholder: b("account.changePassword.confirmPasswordPlaceholder"),
                        value: v.confirmPassword,
                        onChange: e => S("confirmPassword", e.target.value),
                        bg: {
                            base: "#F5EEED",
                            _dark: "gray.700"
                        },
                        color: {
                            base: "inherit",
                            _dark: "white"
                        },
                        borderRadius: "xl",
                        _focus: {
                            borderColor: "red.500"
                        }
                    })
                }), (0, a.jsxs)(r.Flex, {
                    justify: "flex-end",
                    gap: 3,
                    mt: 4,
                    children: [(0, a.jsx)(l.default, {
                        variant: "outline",
                        onClick: T,
                        children: b("account.changePassword.cancel")
                    }), (0, a.jsx)(l.default, {
                        onClick: N,
                        loading: w.isPending,
                        children: b("account.changePassword.submit")
                    })]
                })]
            })
        })
    }])
}]);

//# debugId=57ef4975-4abe-1034-1490-6aa63bf1ce99
//# sourceMappingURL=507c3595e853985c.js.map