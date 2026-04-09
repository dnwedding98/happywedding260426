;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9c9e13e2-162a-5634-ab55-bd84db4cfc1b")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 930907, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        o = e.i(13484),
        l = e.i(875111),
        n = e.i(536072);
    let s = (0, i.forwardRef)(function(e, i) {
        var s, a, r;
        let {
            columns: d,
            minChildWidth: u,
            ...c
        } = e, p = (0, o.useChakraContext)(), m = u ? (s = u, a = p, (0, l.mapObject)(s, e => {
            let t = a.tokens.getVar("sizes.".concat(e), "number" == typeof e ? "".concat(e, "px") : e);
            return null === e ? null : "repeat(auto-fit, minmax(".concat(t, ", 1fr))")
        })) : (r = d, (0, l.mapObject)(r, e => null === e ? null : "repeat(".concat(e, ", minmax(0, 1fr))")));
        return (0, t.jsx)(n.Grid, {
            ref: i,
            templateColumns: m,
            ...c
        })
    });
    s.displayName = "SimpleGrid", e.s(["SimpleGrid", () => s])
}, 690797, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: i
    } = (0, e.i(285281).createRecipeContext)({
        key: "container"
    }), o = t("div");
    o.displayName = "Container", e.s(["Container", () => o])
}, 183949, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(833707);

    function o(e) {
        let {
            customName: o,
            customLink: l,
            hideText: n
        } = e, s = (0, i.useRouter)();
        return (0, t.jsxs)("div", {
            onClick: () => s.push(l || "/"),
            className: "h-[60px] flex gap-2 justify-center items-center cursor-pointer relative z-10000",
            children: [(0, t.jsx)("img", {
                src: "/logo.png",
                className: "w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
            }), (0, t.jsx)("p", {
                className: n ? "hidden" : "font-bold leading-[1.6] text-[rgb(251,65,65)] text-base sm:text-[25px] ",
                style: {
                    fontFamily: o ? '"Quicksand", sans-serif' : '"Dancing Script", cursive'
                },
                children: o || "meWedding"
            })]
        })
    }
    e.s(["LogoBrandingMeWedding", () => o])
}, 562793, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(251570),
        o = e.i(564668),
        l = e.i(494114),
        n = e.i(215669),
        s = e.i(791089),
        a = e.i(878262),
        r = e.i(897716),
        d = e.i(469562);
    e.i(308972);
    var u = e.i(445979),
        c = e.i(974373),
        p = e.i(602105);
    e.s(["ThemePreviewSelector", 0, e => {
        var m;
        let {
            theme: g,
            onThemeChange: b
        } = e, {
            i18n: x
        } = (0, u.useTranslation)("common");
        x.language;
        let [h, f] = (0, i.useState)(!1), v = (0, i.useRef)(null), j = (0, i.useRef)(null), {
            pageContent: y,
            setPageContent: k
        } = (0, c.useViewport)(), w = (0, i.useMemo)(() => {
            var e, t, i;
            return (null == g || null == (e = g.availablePalettes) ? void 0 : e.length) ? g.availablePalettes : (null == y || null == (i = y.theme) || null == (t = i.availablePalettes) ? void 0 : t.length) ? y.theme.availablePalettes : p.PREDEFINED_PALETTES
        }, [null == g ? void 0 : g.availablePalettes, null == y || null == (m = y.theme) ? void 0 : m.availablePalettes]), [S, C] = (0, i.useState)(() => {
            var e;
            return (null == g ? void 0 : g.selectedPaletteId) || (null == y || null == (e = y.theme) ? void 0 : e.selectedPaletteId) || p.DEFAULT_PALETTE.id
        }), P = (0, d.useColorModeValue)("gray.100", "gray.800"), M = (0, d.useColorModeValue)("gray.200", "gray.700"), B = (0, d.useColorModeValue)("white", "gray.800"), T = (0, d.useColorModeValue)("gray.200", "gray.600"), E = (0, d.useColorModeValue)("blue.50", "blue.900"), R = (0, d.useColorModeValue)("gray.50", "gray.700");
        (0, i.useEffect)(() => {
            let e = e => {
                v.current && !v.current.contains(e.target) && j.current && !j.current.contains(e.target) && f(!1)
            };
            return h && document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [h]);
        let I = w.find(e => e.id === S) || p.DEFAULT_PALETTE;
        if (w.length <= 1) return null;
        let L = (() => {
            if (!v.current) return {
                top: 0,
                left: 0
            };
            let e = v.current.getBoundingClientRect();
            return {
                top: e.bottom + 8,
                left: e.left
            }
        })();
        return (0, t.jsxs)(o.Box, {
            ref: v,
            position: "relative",
            children: [(0, t.jsxs)(l.Flex, {
                as: "button",
                onClick: () => f(!h),
                align: "center",
                gap: 1,
                px: 2,
                py: 1.5,
                bg: P,
                borderRadius: "full",
                cursor: "pointer",
                transition: "all 0.2s ease",
                _hover: {
                    bg: M
                },
                children: [(0, t.jsx)(r.MdPalette, {
                    size: 16
                }), (0, t.jsxs)(n.HStack, {
                    gap: .5,
                    children: [(0, t.jsx)(o.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: I.colors.primary,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    }), (0, t.jsx)(o.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: I.colors.secondary,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    }), (0, t.jsx)(o.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: I.colors.accent,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    })]
                })]
            }), h && (0, t.jsx)(a.Portal, {
                children: (0, t.jsx)(o.Box, {
                    ref: j,
                    position: "fixed",
                    top: "".concat(L.top, "px"),
                    left: "".concat(L.left, "px"),
                    transform: "translateX(-50%)",
                    bg: B,
                    borderRadius: "xl",
                    boxShadow: "lg",
                    border: "1px solid",
                    borderColor: T,
                    py: 2,
                    minW: "200px",
                    zIndex: 99999,
                    children: w.map(e => {
                        let i = S === e.id;
                        return (0, t.jsxs)(l.Flex, {
                            align: "center",
                            justify: "space-between",
                            px: 3,
                            py: 2,
                            cursor: "pointer",
                            bg: i ? E : "transparent",
                            _hover: {
                                bg: i ? E : R
                            },
                            transition: "background 0.15s",
                            onClick: () => {
                                var t;
                                C(t = e.id), f(!1), k(e => ({ ...e,
                                    theme: { ...null == e ? void 0 : e.theme,
                                        availablePalettes: w,
                                        selectedPaletteId: t
                                    }
                                })), null == b || b(t)
                            },
                            children: [(0, t.jsxs)(n.HStack, {
                                gap: 2,
                                children: [(0, t.jsx)(n.HStack, {
                                    gap: .5,
                                    children: Object.keys(e.colors).slice(0, 4).map(i => (0, t.jsx)(o.Box, {
                                        w: "14px",
                                        h: "14px",
                                        borderRadius: "sm",
                                        bg: e.colors[i],
                                        border: "1px solid",
                                        borderColor: T
                                    }, i))
                                }), (0, t.jsx)(s.Text, {
                                    fontSize: "sm",
                                    fontWeight: i ? "semibold" : "normal",
                                    children: e.name
                                })]
                            }), i && (0, t.jsx)(o.Box, {
                                color: "blue.500",
                                children: (0, t.jsx)(r.MdCheck, {
                                    size: 16
                                })
                            })]
                        }, e.id)
                    })
                })
            })]
        })
    }])
}, 854338, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(833707);

    function o(e) {
        let {
            customName: o,
            customLink: l,
            hideText: n
        } = e, s = (0, i.useRouter)();
        return (0, t.jsxs)("div", {
            onClick: () => s.push(l || "/invite"),
            className: "h-[60px] flex gap-2 justify-center items-center cursor-pointer relative z-10000",
            children: [(0, t.jsx)("img", {
                src: "/logo.png",
                className: "w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
            }), (0, t.jsx)("p", {
                className: n ? "hidden" : "font-bold leading-[1.6] text-[rgb(255,92,92)] text-base sm:text-[25px] ",
                style: {
                    fontFamily: o ? '"Quicksand", sans-serif' : '"Dancing Script", cursive'
                },
                children: o || "meInvite"
            })]
        })
    }
    e.s(["LogoBrandingMeInvite", () => o])
}, 191556, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(58180),
        o = e.i(938367),
        l = e.i(334863),
        n = e.i(251570);
    e.i(772436);
    var s = e.i(801508),
        a = e.i(435183),
        r = e.i(851112),
        d = e.i(833707);
    let u = e => {
        let {
            content: i,
            mobileContent: o,
            effects: l,
            audioSettings: u,
            notificationSettings: c,
            customHtmlSettings: p,
            customEffects: m,
            openingEffect: g,
            viewportSettings: b,
            templateId: x,
            fontMap: h,
            isLogo: f,
            isCard: v,
            header: j,
            theme: y
        } = e, k = (0, d.useSearchParams)(), w = (0, n.useMemo)(() => (null == b ? void 0 : b.mobileOnly) === !0, [b]), S = (0, n.useMemo)(() => {
            let e, t, i;
            if (w) return "mobile";
            let o = null == k ? void 0 : k.get("platform");
            return "mobile" === o || "desktop" === o ? o : (e = navigator.userAgent || navigator.vendor || window.opera, t = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e.toLowerCase()), i = window.innerWidth <= 768, t || i) ? "mobile" : "desktop"
        }, [k, w]), C = (0, n.useMemo)(() => "mobile" === S && o || i, [S, i, o]), P = (0, n.useMemo)(() => "mobile" === S ? o || i : o, [S, i, o]), M = (0, n.useMemo)(() => b ? { ...b,
            mobileOnly: w || "mobile" === S
        } : b, [b, S, w]);
        return (0, t.jsx)(r.ViewportSettingsProvider, {
            templateData: {
                pageSettings: M
            },
            children: (0, t.jsx)(a.TemplateWishProvider, {
                templateId: x,
                children: (0, t.jsx)(s.ViewOnlyViewport, {
                    id: null == x ? void 0 : x.toString(),
                    content: C,
                    mobileContent: P,
                    isLogo: f,
                    isCard: v,
                    effects: l,
                    audioSettings: u,
                    notificationSettings: c,
                    customHtmlSettings: p,
                    customEffects: m,
                    openingEffect: g,
                    fontMap: h,
                    header: j,
                    initialPlatform: S,
                    theme: y
                }, "viewport-".concat(S))
            })
        })
    };
    var c = e.i(642139),
        p = e.i(985467),
        m = e.i(824736),
        g = e.i(773237),
        b = e.i(564668),
        x = e.i(690797),
        h = e.i(494114),
        f = e.i(215669);
    e.i(308972);
    var v = e.i(445979),
        j = e.i(577270),
        y = e.i(391265),
        k = e.i(450249),
        w = e.i(253985),
        S = e.i(234397),
        C = e.i(676525),
        P = e.i(469562),
        M = e.i(854338),
        B = e.i(183949),
        T = e.i(454131),
        E = e.i(813753),
        R = e.i(562793);
    let I = e => {
        var i;
        let {
            templateId: o,
            viewportSettings: l,
            category: s,
            type: a,
            templateTier: u,
            templateSeoSettings: p,
            theme: m
        } = e, [g, I] = n.default.useState(!1), L = (0, y.useSelector)(E.selectAuth), _ = L && (null == L || null == (i = L.user) ? void 0 : i.email), V = (0, d.useRouter)(), z = (0, d.usePathname)(), A = (0, d.useSearchParams)(), {
            t: N
        } = (0, v.useTranslation)(), D = (0, P.useColorModeValue)("white", "gray.900"), F = (0, P.useColorModeValue)("gray.200", "gray.800"), O = (0, n.useMemo)(() => {
            let e = null == A ? void 0 : A.get("platform");
            return "mobile" === e || "desktop" === e ? e : "desktop"
        }, [A]), H = () => {
            if (!_) {
                sessionStorage.setItem("returnUrl", window.location.pathname), V.push("/auth/login");
                return
            }
            I(!0)
        }, U = e => {
            if (O === e) return;
            let t = new URLSearchParams(null == A ? void 0 : A.toString());
            "desktop" === e ? t.delete("platform") : t.set("platform", e);
            let i = t.toString() ? "".concat(z, "?").concat(t.toString()) : z;
            V.push(i)
        }, W = l && (0, r.isMobileOnly)(l);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(b.Box, {
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                zIndex: 99999,
                bg: D,
                borderBottom: "1px",
                borderColor: F,
                shadow: "sm",
                children: (0, t.jsx)(x.Container, {
                    px: {
                        base: 3,
                        md: 12
                    },
                    children: (0, t.jsxs)(b.Box, {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: {
                            base: "56px",
                            md: "60px"
                        },
                        position: "relative",
                        children: [a === c.PageType.CARD ? (0, t.jsx)(M.LogoBrandingMeInvite, {
                            customLink: "/invite/manager"
                        }) : (0, t.jsx)(B.LogoBrandingMeWedding, {
                            customLink: "/wedding/manager"
                        }), (0, t.jsxs)(b.Box, {
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            children: [(0, t.jsx)(b.Box, {
                                display: {
                                    base: "block",
                                    md: "none"
                                },
                                children: (0, t.jsx)(S.default, {
                                    tier: "free" === u ? "basic" : u,
                                    size: "sm"
                                })
                            }), (0, t.jsx)(b.Box, {
                                display: {
                                    base: "none",
                                    md: "block"
                                },
                                children: (0, t.jsx)(S.default, {
                                    tier: "free" === u ? "basic" : u
                                })
                            })]
                        }), (0, t.jsxs)(f.HStack, {
                            gap: {
                                base: 1,
                                md: 3
                            },
                            children: [!W && (0, t.jsxs)(h.Flex, {
                                gap: 1,
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                bg: {
                                    base: "gray.100",
                                    _dark: "gray.800"
                                },
                                p: 1,
                                borderRadius: "full",
                                children: [(0, t.jsx)(b.Box, {
                                    as: "button",
                                    onClick: () => U("desktop"),
                                    title: N("editorViewportHeader.desktopEdit") || "Desktop View",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    w: "8",
                                    h: "8",
                                    borderRadius: "full",
                                    bg: "desktop" === O ? {
                                        base: "white",
                                        _dark: "gray.700"
                                    } : "transparent",
                                    color: "desktop" === O ? {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    } : {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    boxShadow: "desktop" === O ? "sm" : "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    _hover: {
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        bg: "desktop" === O ? {
                                            base: "white",
                                            _dark: "gray.700"
                                        } : {
                                            base: "gray.200",
                                            _dark: "gray.700"
                                        }
                                    },
                                    children: (0, t.jsx)(j.CiDesktop, {
                                        size: 18
                                    })
                                }), (0, t.jsx)(b.Box, {
                                    as: "button",
                                    onClick: () => U("mobile"),
                                    title: N("editorViewportHeader.mobileEdit") || "Mobile View",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    w: "8",
                                    h: "8",
                                    borderRadius: "full",
                                    bg: "mobile" === O ? {
                                        base: "white",
                                        _dark: "gray.700"
                                    } : "transparent",
                                    color: "mobile" === O ? {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    } : {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    boxShadow: "mobile" === O ? "sm" : "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    _hover: {
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        bg: "mobile" === O ? {
                                            base: "white",
                                            _dark: "gray.700"
                                        } : {
                                            base: "gray.200",
                                            _dark: "gray.700"
                                        }
                                    },
                                    children: (0, t.jsx)(j.CiMobile4, {
                                        size: 18
                                    })
                                })]
                            }), m && m.availablePalettes && m.availablePalettes.length > 1 && (0, t.jsx)(R.ThemePreviewSelector, {
                                theme: m
                            }), (0, t.jsx)(T.SystemSettingPopover, {}), (0, t.jsx)(b.Box, {
                                display: {
                                    base: "block",
                                    md: "none"
                                },
                                children: (0, t.jsx)(C.default, {
                                    onClick: H,
                                    size: "sm",
                                    children: N("account.buttons.create")
                                })
                            }), (0, t.jsx)(b.Box, {
                                display: {
                                    base: "none",
                                    md: "block"
                                },
                                children: (0, t.jsx)(C.default, {
                                    onClick: H,
                                    size: "large",
                                    children: N("account.buttons.createInvitation")
                                })
                            }), _ ? (0, t.jsx)(w.default, {}) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(b.Box, {
                                    display: {
                                        base: "block",
                                        md: "none"
                                    },
                                    children: (0, t.jsx)(C.default, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: () => {
                                            sessionStorage.setItem("returnUrl", window.location.pathname), V.push("/auth/login")
                                        },
                                        children: N("account.buttons.login")
                                    })
                                }), (0, t.jsx)(b.Box, {
                                    display: {
                                        base: "none",
                                        md: "block"
                                    },
                                    children: (0, t.jsx)(C.default, {
                                        variant: "outline",
                                        colorScheme: "gray",
                                        size: "large",
                                        onClick: () => {
                                            sessionStorage.setItem("returnUrl", window.location.pathname), V.push("/auth/login")
                                        },
                                        children: N("account.buttons.login")
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }), (0, t.jsx)(k.default, {
                isOpen: g,
                onClose: () => {
                    I(!1)
                },
                templateId: o,
                templateTier: u,
                pageType: a,
                category: s,
                templateSeoSettings: p
            })]
        })
    };

    function L() {
        let e = (0, d.useParams)(),
            n = null == e ? void 0 : e.id,
            s = n ? parseInt(n, 10) : NaN,
            a = !isNaN(s) && s > 0,
            {
                data: r,
                isLoading: b,
                error: x
            } = (0, p.useGetTemplate)(a ? s : 0);
        return (a || (0, d.notFound)(), !x && (b || r) || (0, d.notFound)(), b) ? (0, t.jsx)(i.EditorLoadingScreen, {}) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u, {
                content: (null == r ? void 0 : r.content) ? g.default.decompress(g.default.decodeBase64(r.content)) : void 0,
                mobileContent: (null == r ? void 0 : r.contentMobile) ? g.default.decompress(g.default.decodeBase64(r.contentMobile)) : void 0,
                effects: null == r ? void 0 : r.effects,
                audioSettings: null == r ? void 0 : r.audioSettings,
                notificationSettings: null == r ? void 0 : r.notificationSettings,
                customHtmlSettings: null == r ? void 0 : r.customHtml,
                customEffects: null == r ? void 0 : r.customEffects,
                openingEffect: null == r ? void 0 : r.openingEffect,
                viewportSettings: null == r ? void 0 : r.pageSettings,
                templateId: s,
                fontMap: null == r ? void 0 : r.fontMap,
                isLogo: null == r ? void 0 : r.isLogo,
                isCard: null == r ? void 0 : r.isCard,
                theme: null == r ? void 0 : r.theme,
                header: (0, t.jsx)(I, {
                    templateId: s,
                    templateTier: (null == r ? void 0 : r.tier) || "basic",
                    viewportSettings: null == r ? void 0 : r.pageSettings,
                    category: (null == r ? void 0 : r.category) || m.TemplateCategory.WEDDING,
                    type: (null == r ? void 0 : r.isCard) ? c.PageType.CARD : (null == r ? void 0 : r.isLogo) ? c.PageType.LOGO : c.PageType.NORMAL,
                    theme: null == r ? void 0 : r.theme,
                    templateSeoSettings: null == r ? void 0 : r.seoSettings
                })
            }), (0, t.jsx)(o.default, {}), (0, t.jsx)(l.Toaster, {})]
        })
    }
    e.s(["default", () => L], 191556)
}, 580574, e => {
    e.v(t => Promise.all(["static/chunks/af87ae2bdecac961.js"].map(t => e.l(t))).then(() => t(585017)))
}, 432302, e => {
    e.v(t => Promise.all(["static/chunks/eb2f23418b1642b4.js"].map(t => e.l(t))).then(() => t(924659)))
}]);

//# debugId=9c9e13e2-162a-5634-ab55-bd84db4cfc1b
//# sourceMappingURL=0ca8a87a8f72724b.js.map