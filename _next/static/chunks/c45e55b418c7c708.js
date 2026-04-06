;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "da47f154-4b9c-c581-fdb8-ddfb6013286d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 938367, e => {
    "use strict";
    var t = e.i(230840),
        n = e.i(483632),
        i = e.i(564668),
        o = e.i(811779),
        l = e.i(119887),
        r = e.i(878262),
        a = e.i(791089),
        s = e.i(184600),
        d = e.i(251570),
        u = e.i(972004),
        c = e.i(569210),
        p = e.i(901407),
        m = e.i(476659);

    function g() {
        let e = (0, t._)(["\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"]);
        return g = function() {
            return e
        }, e
    }

    function h() {
        let e = (0, t._)(["\n  0% { transform: scale(1) rotate(0deg); }\n  20% { transform: scale(1.1) rotate(2deg); }\n  40% { transform: scale(0.95) rotate(-2deg); }\n  60% { transform: scale(1.05) rotate(1deg); }\n  80% { transform: scale(0.97) rotate(-1deg); }\n  100% { transform: scale(1) rotate(0deg); }\n"]);
        return h = function() {
            return e
        }, e
    }

    function x() {
        let e = (0, t._)(["\n  0% { transform: translateX(0); opacity: 1; }\n  100% { transform: translateX(-100%); opacity: 0; }\n"]);
        return x = function() {
            return e
        }, e
    }

    function b() {
        let e = (0, t._)(["\n  0% { transform: translateX(100%); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n"]);
        return b = function() {
            return e
        }, e
    }

    function f() {
        let e = (0, t._)(["\n  0% { transform: translateX(100%); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n"]);
        return f = function() {
            return e
        }, e
    }
    let w = (0, s.keyframes)(g()),
        v = (0, s.keyframes)(h()),
        y = (0, s.keyframes)(x()),
        j = (0, s.keyframes)(b()),
        k = (0, s.keyframes)(f()),
        S = "mehappy:floating-widget",
        C = ["zalo", "messenger", "phone", "email", "whatsapp"],
        z = () => ({
            hiddenUntil: 0,
            position: null
        }),
        B = () => {
            try {
                let e = m.safeLocalStorage.getItem(S);
                if (!e) return z();
                let t = JSON.parse(e);
                return {
                    hiddenUntil: "number" == typeof t.hiddenUntil ? t.hiddenUntil : 0,
                    position: t.position && "number" == typeof t.position.x && "number" == typeof t.position.y ? t.position : null
                }
            } catch {
                return z()
            }
        },
        E = e => {
            m.safeLocalStorage.setItem(S, JSON.stringify(e))
        },
        P = (e, t, n) => Math.min(Math.max(e, t), n),
        I = (e, t, n, i) => ({
            x: P(e.x, 12, window.innerWidth - t - 12),
            y: P(e.y, 12, window.innerHeight - n - (12 + (window.innerWidth < 768 ? "manager-safe" === i ? 132 : 96 : 0)))
        }),
        M = (e, t, n) => {
            let i = window.innerWidth < 768 ? "manager-safe" === n ? 132 : 96 : 0,
                o = "manager-safe" === n && window.innerWidth < 768 ? Math.max(18, Math.round(.02 * window.innerHeight)) : Math.max(24, Math.round(.05 * window.innerHeight));
            return {
                x: window.innerWidth - e - 12,
                y: window.innerHeight - t - o - i
            }
        };

    function T(e) {
        var t, s, m, g, h, x, b, f, S, z, T, _, L, R, F, U, W, D, A, V, H, N, O, X, Y;
        let G, Z, q, {
                contactPhone: J = "0848753999",
                contactZalo: K = "https://zalo.me/3304755126989386670",
                contactFacebook: Q = "mehappy.vn",
                contactEmail: $ = "meweddingg@gmail.com",
                contactWhatsApp: ee = "",
                mobileDockMode: et = "default",
                chatWidgetConfig: en = null,
                chatTextOverrides: ei = null
            } = e,
            eo = "manager-safe" === et && window.innerWidth < 768,
            el = B(),
            er = eo ? M(64, 140, et) : el.position || M(64, 140, et),
            [ea, es] = (0, d.useState)(!0),
            [ed, eu] = (0, d.useState)(!1),
            [ec, ep] = (0, d.useState)(!0),
            [em, eg] = (0, d.useState)(!1),
            [eh, ex] = (0, d.useState)(0 === el.hiddenUntil),
            [eb, ef] = (0, d.useState)(!1),
            [ew, ev] = (0, d.useState)(er),
            [ey, ej] = (0, d.useState)(null),
            ek = (0, d.useRef)(null),
            eS = (0, d.useRef)(null),
            eC = (0, d.useRef)(null),
            ez = (0, d.useRef)(null),
            eB = (0, d.useRef)(null);
        (0, d.useEffect)(() => {
            let e = setInterval(() => {
                eu(!0), setTimeout(() => {
                    ep(!1), es(e => !e), setTimeout(() => {
                        ep(!0), eu(!1)
                    }, 10)
                }, 300)
            }, 3e3);
            return () => clearInterval(e)
        }, []), (0, d.useEffect)(() => {
            let e = Date.now(),
                t = B();
            return t.hiddenUntil > e ? (window.setTimeout(() => ex(!1), 0), eC.current = window.setTimeout(() => {
                ex(!0);
                let e = eo ? M(64, 140, et) : t.position;
                ev(e), E({
                    hiddenUntil: 0,
                    position: e
                })
            }, t.hiddenUntil - e)) : (window.setTimeout(() => ex(!0), 0), 0 !== t.hiddenUntil && E({
                hiddenUntil: 0,
                position: eo ? M(64, 140, et) : t.position
            })), () => {
                eC.current && window.clearTimeout(eC.current)
            }
        }, [eo, et]), (0, d.useEffect)(() => {
            ez.current = ew
        }, [ew]), (0, d.useEffect)(() => {
            if (!eh || !ew || !ek.current) return;
            let e = ek.current.getBoundingClientRect(),
                t = I(ew, e.width, e.height, et);
            (t.x !== ew.x || t.y !== ew.y) && ev(t)
        }, [eh, et, ew]), (0, d.useEffect)(() => {
            if (!eh || !ew || !ek.current) return;
            let e = () => {
                if (!ek.current) return;
                let e = ek.current.getBoundingClientRect(),
                    t = eo ? M(e.width, e.height, et) : I(ew, e.width, e.height, et);
                ev(t), E({
                    hiddenUntil: 0,
                    position: t
                })
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [eo, eh, et, ew]), (0, d.useEffect)(() => {
            let e = e => {
                let t = e.target;
                eS.current && !eS.current.contains(t) && ek.current && !ek.current.contains(t) && eg(!1)
            };
            return em && document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [em]), (0, d.useEffect)(() => {
            if (!em || !ek.current || !ew) return;
            let e = () => {
                    var e, t;
                    if (!ek.current) return;
                    let n = ek.current.getBoundingClientRect(),
                        i = (null == (e = eS.current) ? void 0 : e.offsetWidth) || (window.innerWidth < 768 ? 200 : 270),
                        o = (null == (t = eS.current) ? void 0 : t.offsetHeight) || 170,
                        l = n.right - i;
                    l = P(l, 12, window.innerWidth - i - 12);
                    let r = n.top - o - 10;
                    r < 12 && (r = P(n.bottom + 10, 12, window.innerHeight - o - 12)), ej({
                        x: l,
                        y: r
                    })
                },
                t = window.requestAnimationFrame(e);
            return window.addEventListener("resize", e), () => {
                window.cancelAnimationFrame(t), window.removeEventListener("resize", e)
            }
        }, [em, ew]);
        let eE = (Z = (G = (null == en ? void 0 : en.channelOrder) || C).filter((e, t) => C.includes(e) && G.indexOf(e) === t), q = C.filter(e => !Z.includes(e)), [...Z, ...q]),
            eP = (null == en || null == (s = en.channels) || null == (t = s.phone) ? void 0 : t.value) || J || "0848753999",
            eI = (null == en || null == (g = en.channels) || null == (m = g.zalo) ? void 0 : m.value) || K || "https://zalo.me/3304755126989386670",
            eM = (null == en || null == (x = en.channels) || null == (h = x.messenger) ? void 0 : h.value) || Q || "mehappy.vn",
            eT = (null == en || null == (f = en.channels) || null == (b = f.email) ? void 0 : b.value) || $ || "meweddingg@gmail.com",
            e_ = (e => {
                if (!e) return null;
                let t = e.trim();
                if (!t) return null;
                if (/^https?:\/\//i.test(t)) return t;
                let n = t.replace(/[^\d]/g, "");
                return n ? "https://wa.me/".concat(n) : null
            })((null == en || null == (z = en.channels) || null == (S = z.whatsapp) ? void 0 : S.value) || ee),
            eL = {};
        if ((null == (H = null == en || null == (_ = en.channels) || null == (T = _.phone) ? void 0 : T.enabled) || H) && eP && (eL.phone = {
                key: "phone",
                icon: (0, n.jsx)(u.FcPhone, {
                    size: 20
                }),
                title: (null == ei ? void 0 : ei.phone) || eP,
                onClick: () => window.open("tel:".concat(eP), "_blank")
            }), (null == (N = null == en || null == (R = en.channels) || null == (L = R.zalo) ? void 0 : L.enabled) || N) && eI) {
            let e = eI.startsWith("http") ? eI : "https://zalo.me/".concat(eI);
            eL.zalo = {
                key: "zalo",
                icon: (0, n.jsx)(l.Image, {
                    src: "/zalo.svg",
                    alt: "Zalo",
                    boxSize: {
                        base: "20px",
                        md: "22px"
                    },
                    objectFit: "contain"
                }),
                title: (null == ei ? void 0 : ei.zalo) || "Chat Zalo",
                onClick: () => window.open(e, "_blank")
            }
        }
        if ((null == (O = null == en || null == (U = en.channels) || null == (F = U.messenger) ? void 0 : F.enabled) || O) && eM) {
            let e = eM.startsWith("http") ? eM : "https://www.messenger.com/t/".concat(eM);
            eL.messenger = {
                key: "messenger",
                icon: (0, n.jsx)(l.Image, {
                    src: "/messenger.svg",
                    alt: "Messenger",
                    boxSize: {
                        base: "24px",
                        md: "26px"
                    },
                    transform: "scale(2)",
                    objectFit: "contain"
                }),
                title: (null == ei ? void 0 : ei.messenger) || "Chat Facebook",
                onClick: () => window.open(e, "_blank")
            }
        }(null == (X = null == en || null == (D = en.channels) || null == (W = D.email) ? void 0 : W.enabled) || X) && eT && (eL.email = {
            key: "email",
            icon: (0, n.jsx)(l.Image, {
                src: "/icons/gmail.png",
                alt: "Email",
                boxSize: {
                    base: "20px",
                    md: "22px"
                },
                objectFit: "contain"
            }),
            title: (null == ei ? void 0 : ei.email) || eT,
            onClick: () => window.open("mailto:".concat(eT), "_blank")
        }), null != (Y = null == en || null == (V = en.channels) || null == (A = V.whatsapp) ? void 0 : A.enabled) && Y && e_ && (eL.whatsapp = {
            key: "whatsapp",
            icon: (0, n.jsx)(c.FaWhatsapp, {
                size: 20,
                color: "#25D366"
            }),
            title: (null == ei ? void 0 : ei.whatsapp) || "Chat WhatsApp",
            onClick: () => window.open(e_, "_blank")
        });
        let eR = eE.map(e => eL[e]).filter(Boolean);
        (0, d.useEffect)(() => {
            0 === eR.length && em && eg(!1)
        }, [eR.length, em]);
        let eF = [];
        eL.messenger && eF.push("messenger"), eL.zalo && eF.push("zalo"), eL.whatsapp && eF.push("whatsapp"), 0 === eF.length && eF.push("messenger", "zalo");
        let eU = eF[0],
            eW = eF[1] || eF[0],
            eD = ea ? eU : eW;
        return eh && ew ? (0, n.jsxs)(r.Portal, {
            children: [(0, n.jsxs)(i.Box, {
                ref: ek,
                position: "fixed",
                top: "".concat(ew.y, "px"),
                left: "".concat(ew.x, "px"),
                rounded: "md",
                p: {
                    base: .5,
                    md: 1
                },
                bg: {
                    base: "white",
                    _dark: "gray.800"
                },
                border: "1px solid",
                borderColor: "blue.400",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: {
                    base: 1,
                    md: 2
                },
                w: "fit-content",
                animation: "".concat(w, " 2s ease-in-out infinite"),
                boxShadow: {
                    base: "sm",
                    md: "md"
                },
                zIndex: 9999,
                children: [(0, n.jsxs)(i.Box, {
                    w: "full",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1,
                    children: [(0, n.jsx)(i.Box, {
                        display: "flex",
                        alignItems: "center",
                        cursor: eb ? "grabbing" : "grab",
                        onPointerDown: e => {
                            if (!ew || !ek.current) return;
                            e.preventDefault(), e.stopPropagation(), eB.current = {
                                startX: e.clientX,
                                startY: e.clientY,
                                originX: ew.x,
                                originY: ew.y
                            }, ef(!0), eg(!1);
                            let t = e => {
                                    if (!eB.current || !ek.current) return;
                                    let t = e.clientX - eB.current.startX,
                                        n = e.clientY - eB.current.startY,
                                        i = ek.current.getBoundingClientRect();
                                    ev(I({
                                        x: eB.current.originX + t,
                                        y: eB.current.originY + n
                                    }, i.width, i.height, et))
                                },
                                n = () => {
                                    let e = ez.current;
                                    ef(!1), eB.current = null, window.removeEventListener("pointermove", t), window.removeEventListener("pointerup", n), e && (eo || E({
                                        hiddenUntil: B().hiddenUntil,
                                        position: e
                                    }))
                                };
                            window.addEventListener("pointermove", t), window.addEventListener("pointerup", n)
                        },
                        userSelect: "none",
                        touchAction: "none",
                        children: (0, n.jsx)(i.Box, {
                            bg: "white",
                            borderRadius: "full",
                            p: 1,
                            boxShadow: "sm",
                            border: "1px solid",
                            borderColor: "gray.200",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, n.jsx)(p.LuGripVertical, {
                                size: 14
                            })
                        })
                    }), (0, n.jsx)(i.Box, {
                        as: "button",
                        onClick: () => {
                            var e, t, n;
                            eg(!1);
                            let i = null == (e = ek.current) ? void 0 : e.getBoundingClientRect(),
                                o = M(null != (t = null == i ? void 0 : i.width) ? t : 64, null != (n = null == i ? void 0 : i.height) ? n : 140, et);
                            ev(o), ez.current = o, ex(!1), E({
                                hiddenUntil: Date.now() + 12e4,
                                position: o
                            }), eC.current && window.clearTimeout(eC.current), eC.current = window.setTimeout(() => {
                                ex(!0), E({
                                    hiddenUntil: 0,
                                    position: o
                                })
                            }, 12e4)
                        },
                        cursor: "pointer",
                        p: .5,
                        borderRadius: "sm",
                        _hover: {
                            bg: {
                                base: "gray.100",
                                _dark: "gray.700"
                            }
                        },
                        "aria-label": "Hide floating widget",
                        children: (0, n.jsx)(p.LuX, {
                            size: 14
                        })
                    })]
                }), (0, n.jsx)(i.Box, {
                    animation: "".concat(v, " 1.5s ease-in-out infinite"),
                    children: (0, n.jsx)(l.Image, {
                        src: "/icon-question.png",
                        alt: "Support",
                        boxSize: {
                            base: "35px",
                            md: "50px"
                        }
                    })
                }), (0, n.jsx)(o.Circle, {
                    size: {
                        base: "32px",
                        md: "40px"
                    },
                    bg: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    overflow: "hidden",
                    position: "relative",
                    onClick: () => {
                        eR.length > 0 && eg(e => !e)
                    },
                    cursor: eR.length > 0 ? "pointer" : "not-allowed",
                    children: ec && (0, n.jsx)(i.Box, {
                        animation: ed ? "".concat(y, " 0.3s ease") : "".concat(j, " 0.3s ease"),
                        position: "absolute",
                        children: "whatsapp" === eD ? (0, n.jsx)(c.FaWhatsapp, {
                            size: 24,
                            color: "#25D366"
                        }) : "zalo" === eD ? (0, n.jsx)(l.Image, {
                            src: "/zalo.svg",
                            alt: "Zalo",
                            boxSize: {
                                base: "22px",
                                md: "24px"
                            },
                            objectFit: "contain"
                        }) : (0, n.jsx)(l.Image, {
                            src: "/messenger.svg",
                            alt: "Messenger",
                            boxSize: {
                                base: "26px",
                                md: "28px"
                            },
                            transform: "scale(2)",
                            objectFit: "contain"
                        })
                    }, eD)
                })]
            }), em && ey && (0, n.jsx)(i.Box, {
                ref: eS,
                position: "fixed",
                top: "".concat(ey.y, "px"),
                left: "".concat(ey.x, "px"),
                bg: {
                    base: "white",
                    _dark: "gray.800"
                },
                boxShadow: "lg",
                borderRadius: "md",
                p: {
                    base: 2,
                    md: 4
                },
                zIndex: 9999,
                w: {
                    base: "200px",
                    md: "270px"
                },
                animation: "".concat(k, " 0.3s ease forwards"),
                children: eR.map((e, t) => {
                    let {
                        key: l,
                        icon: r,
                        title: s,
                        onClick: d
                    } = e;
                    return (0, n.jsxs)(i.Box, {
                        display: "flex",
                        alignItems: "center",
                        gap: {
                            base: 2,
                            md: 3
                        },
                        mt: t > 0 ? {
                            base: 2,
                            md: 4
                        } : 0,
                        onClick: d,
                        cursor: "pointer",
                        children: [(0, n.jsx)(o.Circle, {
                            size: {
                                base: "32px",
                                md: "40px"
                            },
                            bg: {
                                base: "gray.200",
                                _dark: "gray.700"
                            },
                            overflow: "hidden",
                            position: "relative",
                            children: (0, n.jsx)(i.Box, {
                                animation: "".concat(v, " 1.5s ease-in-out infinite"),
                                children: r
                            })
                        }), (0, n.jsx)(a.Text, {
                            fontWeight: "bold",
                            fontSize: {
                                base: "12px",
                                md: "14px"
                            },
                            color: {
                                base: "gray.900",
                                _dark: "white"
                            },
                            children: s
                        })]
                    }, "floating-channel-".concat(l, "-").concat(t))
                })
            })]
        }) : null
    }
    e.s(["default", () => T])
}, 690797, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: n
    } = (0, e.i(285281).createRecipeContext)({
        key: "container"
    }), i = t("div");
    i.displayName = "Container", e.s(["Container", () => i])
}, 183949, e => {
    "use strict";
    var t = e.i(483632),
        n = e.i(833707);

    function i(e) {
        let {
            customName: i,
            customLink: o,
            hideText: l
        } = e, r = (0, n.useRouter)();
        return (0, t.jsxs)("div", {
            onClick: () => r.push(o || "/"),
            className: "h-[60px] flex gap-2 justify-center items-center cursor-pointer relative z-10000",
            children: [(0, t.jsx)("img", {
                src: "/logo.png",
                className: "w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
            }), (0, t.jsx)("p", {
                className: l ? "hidden" : "font-bold leading-[1.6] text-[rgb(251,65,65)] text-base sm:text-[25px] ",
                style: {
                    fontFamily: i ? '"Quicksand", sans-serif' : '"Dancing Script", cursive'
                },
                children: i || "meWedding"
            })]
        })
    }
    e.s(["LogoBrandingMeWedding", () => i])
}, 562793, e => {
    "use strict";
    var t = e.i(483632),
        n = e.i(251570),
        i = e.i(564668),
        o = e.i(494114),
        l = e.i(215669),
        r = e.i(791089),
        a = e.i(878262),
        s = e.i(897716),
        d = e.i(469562);
    e.i(308972);
    var u = e.i(445979),
        c = e.i(974373),
        p = e.i(602105);
    e.s(["ThemePreviewSelector", 0, e => {
        var m;
        let {
            theme: g,
            onThemeChange: h
        } = e, {
            i18n: x
        } = (0, u.useTranslation)("common");
        x.language;
        let [b, f] = (0, n.useState)(!1), w = (0, n.useRef)(null), v = (0, n.useRef)(null), {
            pageContent: y,
            setPageContent: j
        } = (0, c.useViewport)(), k = (0, n.useMemo)(() => {
            var e, t, n;
            return (null == g || null == (e = g.availablePalettes) ? void 0 : e.length) ? g.availablePalettes : (null == y || null == (n = y.theme) || null == (t = n.availablePalettes) ? void 0 : t.length) ? y.theme.availablePalettes : p.PREDEFINED_PALETTES
        }, [null == g ? void 0 : g.availablePalettes, null == y || null == (m = y.theme) ? void 0 : m.availablePalettes]), [S, C] = (0, n.useState)(() => {
            var e;
            return (null == g ? void 0 : g.selectedPaletteId) || (null == y || null == (e = y.theme) ? void 0 : e.selectedPaletteId) || p.DEFAULT_PALETTE.id
        }), z = (0, d.useColorModeValue)("gray.100", "gray.800"), B = (0, d.useColorModeValue)("gray.200", "gray.700"), E = (0, d.useColorModeValue)("white", "gray.800"), P = (0, d.useColorModeValue)("gray.200", "gray.600"), I = (0, d.useColorModeValue)("blue.50", "blue.900"), M = (0, d.useColorModeValue)("gray.50", "gray.700");
        (0, n.useEffect)(() => {
            let e = e => {
                w.current && !w.current.contains(e.target) && v.current && !v.current.contains(e.target) && f(!1)
            };
            return b && document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [b]);
        let T = k.find(e => e.id === S) || p.DEFAULT_PALETTE;
        if (k.length <= 1) return null;
        let _ = (() => {
            if (!w.current) return {
                top: 0,
                left: 0
            };
            let e = w.current.getBoundingClientRect();
            return {
                top: e.bottom + 8,
                left: e.left
            }
        })();
        return (0, t.jsxs)(i.Box, {
            ref: w,
            position: "relative",
            children: [(0, t.jsxs)(o.Flex, {
                as: "button",
                onClick: () => f(!b),
                align: "center",
                gap: 1,
                px: 2,
                py: 1.5,
                bg: z,
                borderRadius: "full",
                cursor: "pointer",
                transition: "all 0.2s ease",
                _hover: {
                    bg: B
                },
                children: [(0, t.jsx)(s.MdPalette, {
                    size: 16
                }), (0, t.jsxs)(l.HStack, {
                    gap: .5,
                    children: [(0, t.jsx)(i.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: T.colors.primary,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    }), (0, t.jsx)(i.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: T.colors.secondary,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    }), (0, t.jsx)(i.Box, {
                        w: "12px",
                        h: "12px",
                        borderRadius: "sm",
                        bg: T.colors.accent,
                        border: "1px solid",
                        borderColor: "whiteAlpha.500"
                    })]
                })]
            }), b && (0, t.jsx)(a.Portal, {
                children: (0, t.jsx)(i.Box, {
                    ref: v,
                    position: "fixed",
                    top: "".concat(_.top, "px"),
                    left: "".concat(_.left, "px"),
                    transform: "translateX(-50%)",
                    bg: E,
                    borderRadius: "xl",
                    boxShadow: "lg",
                    border: "1px solid",
                    borderColor: P,
                    py: 2,
                    minW: "200px",
                    zIndex: 99999,
                    children: k.map(e => {
                        let n = S === e.id;
                        return (0, t.jsxs)(o.Flex, {
                            align: "center",
                            justify: "space-between",
                            px: 3,
                            py: 2,
                            cursor: "pointer",
                            bg: n ? I : "transparent",
                            _hover: {
                                bg: n ? I : M
                            },
                            transition: "background 0.15s",
                            onClick: () => {
                                var t;
                                C(t = e.id), f(!1), j(e => ({ ...e,
                                    theme: { ...null == e ? void 0 : e.theme,
                                        availablePalettes: k,
                                        selectedPaletteId: t
                                    }
                                })), null == h || h(t)
                            },
                            children: [(0, t.jsxs)(l.HStack, {
                                gap: 2,
                                children: [(0, t.jsx)(l.HStack, {
                                    gap: .5,
                                    children: Object.keys(e.colors).slice(0, 4).map(n => (0, t.jsx)(i.Box, {
                                        w: "14px",
                                        h: "14px",
                                        borderRadius: "sm",
                                        bg: e.colors[n],
                                        border: "1px solid",
                                        borderColor: P
                                    }, n))
                                }), (0, t.jsx)(r.Text, {
                                    fontSize: "sm",
                                    fontWeight: n ? "semibold" : "normal",
                                    children: e.name
                                })]
                            }), n && (0, t.jsx)(i.Box, {
                                color: "blue.500",
                                children: (0, t.jsx)(s.MdCheck, {
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
        n = e.i(833707);

    function i(e) {
        let {
            customName: i,
            customLink: o,
            hideText: l
        } = e, r = (0, n.useRouter)();
        return (0, t.jsxs)("div", {
            onClick: () => r.push(o || "/invite"),
            className: "h-[60px] flex gap-2 justify-center items-center cursor-pointer relative z-10000",
            children: [(0, t.jsx)("img", {
                src: "/logo.png",
                className: "w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
            }), (0, t.jsx)("p", {
                className: l ? "hidden" : "font-bold leading-[1.6] text-[rgb(255,92,92)] text-base sm:text-[25px] ",
                style: {
                    fontFamily: i ? '"Quicksand", sans-serif' : '"Dancing Script", cursive'
                },
                children: i || "meInvite"
            })]
        })
    }
    e.s(["LogoBrandingMeInvite", () => i])
}, 191556, e => {
    "use strict";
    var t = e.i(483632),
        n = e.i(58180),
        i = e.i(938367),
        o = e.i(334863),
        l = e.i(251570);
    e.i(772436);
    var r = e.i(801508),
        a = e.i(435183),
        s = e.i(851112),
        d = e.i(833707);
    let u = e => {
        let {
            content: n,
            mobileContent: i,
            effects: o,
            audioSettings: u,
            notificationSettings: c,
            customHtmlSettings: p,
            customEffects: m,
            openingEffect: g,
            viewportSettings: h,
            templateId: x,
            fontMap: b,
            isLogo: f,
            isCard: w,
            header: v,
            theme: y
        } = e, j = (0, d.useSearchParams)(), k = (0, l.useMemo)(() => (null == h ? void 0 : h.mobileOnly) === !0, [h]), S = (0, l.useMemo)(() => {
            let e, t, n;
            if (k) return "mobile";
            let i = null == j ? void 0 : j.get("platform");
            return "mobile" === i || "desktop" === i ? i : (e = navigator.userAgent || navigator.vendor || window.opera, t = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e.toLowerCase()), n = window.innerWidth <= 768, t || n) ? "mobile" : "desktop"
        }, [j, k]), C = (0, l.useMemo)(() => "mobile" === S && i || n, [S, n, i]), z = (0, l.useMemo)(() => "mobile" === S ? i || n : i, [S, n, i]), B = (0, l.useMemo)(() => h ? { ...h,
            mobileOnly: k || "mobile" === S
        } : h, [h, S, k]);
        return (0, t.jsx)(s.ViewportSettingsProvider, {
            templateData: {
                pageSettings: B
            },
            children: (0, t.jsx)(a.TemplateWishProvider, {
                templateId: x,
                children: (0, t.jsx)(r.ViewOnlyViewport, {
                    id: null == x ? void 0 : x.toString(),
                    content: C,
                    mobileContent: z,
                    isLogo: f,
                    isCard: w,
                    effects: o,
                    audioSettings: u,
                    notificationSettings: c,
                    customHtmlSettings: p,
                    customEffects: m,
                    openingEffect: g,
                    fontMap: b,
                    header: v,
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
        h = e.i(564668),
        x = e.i(690797),
        b = e.i(494114),
        f = e.i(215669);
    e.i(308972);
    var w = e.i(445979),
        v = e.i(577270),
        y = e.i(391265),
        j = e.i(450249),
        k = e.i(253985),
        S = e.i(234397),
        C = e.i(676525),
        z = e.i(469562),
        B = e.i(854338),
        E = e.i(183949),
        P = e.i(454131),
        I = e.i(813753),
        M = e.i(562793);
    let T = e => {
        var n;
        let {
            templateId: i,
            viewportSettings: o,
            category: r,
            type: a,
            templateTier: u,
            templateSeoSettings: p,
            theme: m
        } = e, [g, T] = l.default.useState(!1), _ = (0, y.useSelector)(I.selectAuth), L = _ && (null == _ || null == (n = _.user) ? void 0 : n.email), R = (0, d.useRouter)(), F = (0, d.usePathname)(), U = (0, d.useSearchParams)(), {
            t: W
        } = (0, w.useTranslation)(), D = (0, z.useColorModeValue)("white", "gray.900"), A = (0, z.useColorModeValue)("gray.200", "gray.800"), V = (0, l.useMemo)(() => {
            let e = null == U ? void 0 : U.get("platform");
            return "mobile" === e || "desktop" === e ? e : "desktop"
        }, [U]), H = () => {
            if (!L) {
                sessionStorage.setItem("returnUrl", window.location.pathname), R.push("/auth/login");
                return
            }
            T(!0)
        }, N = e => {
            if (V === e) return;
            let t = new URLSearchParams(null == U ? void 0 : U.toString());
            "desktop" === e ? t.delete("platform") : t.set("platform", e);
            let n = t.toString() ? "".concat(F, "?").concat(t.toString()) : F;
            R.push(n)
        }, O = o && (0, s.isMobileOnly)(o);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(h.Box, {
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                zIndex: 99999,
                bg: D,
                borderBottom: "1px",
                borderColor: A,
                shadow: "sm",
                children: (0, t.jsx)(x.Container, {
                    px: {
                        base: 3,
                        md: 12
                    },
                    children: (0, t.jsxs)(h.Box, {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: {
                            base: "56px",
                            md: "60px"
                        },
                        position: "relative",
                        children: [a === c.PageType.CARD ? (0, t.jsx)(B.LogoBrandingMeInvite, {
                            customLink: "/invite/manager"
                        }) : (0, t.jsx)(E.LogoBrandingMeWedding, {
                            customLink: "/wedding/manager"
                        }), (0, t.jsxs)(h.Box, {
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            children: [(0, t.jsx)(h.Box, {
                                display: {
                                    base: "block",
                                    md: "none"
                                },
                                children: (0, t.jsx)(S.default, {
                                    tier: "free" === u ? "basic" : u,
                                    size: "sm"
                                })
                            }), (0, t.jsx)(h.Box, {
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
                            children: [!O && (0, t.jsxs)(b.Flex, {
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
                                children: [(0, t.jsx)(h.Box, {
                                    as: "button",
                                    onClick: () => N("desktop"),
                                    title: W("editorViewportHeader.desktopEdit") || "Desktop View",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    w: "8",
                                    h: "8",
                                    borderRadius: "full",
                                    bg: "desktop" === V ? {
                                        base: "white",
                                        _dark: "gray.700"
                                    } : "transparent",
                                    color: "desktop" === V ? {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    } : {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    boxShadow: "desktop" === V ? "sm" : "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    _hover: {
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        bg: "desktop" === V ? {
                                            base: "white",
                                            _dark: "gray.700"
                                        } : {
                                            base: "gray.200",
                                            _dark: "gray.700"
                                        }
                                    },
                                    children: (0, t.jsx)(v.CiDesktop, {
                                        size: 18
                                    })
                                }), (0, t.jsx)(h.Box, {
                                    as: "button",
                                    onClick: () => N("mobile"),
                                    title: W("editorViewportHeader.mobileEdit") || "Mobile View",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    w: "8",
                                    h: "8",
                                    borderRadius: "full",
                                    bg: "mobile" === V ? {
                                        base: "white",
                                        _dark: "gray.700"
                                    } : "transparent",
                                    color: "mobile" === V ? {
                                        base: "blue.600",
                                        _dark: "blue.400"
                                    } : {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    boxShadow: "mobile" === V ? "sm" : "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    _hover: {
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.400"
                                        },
                                        bg: "mobile" === V ? {
                                            base: "white",
                                            _dark: "gray.700"
                                        } : {
                                            base: "gray.200",
                                            _dark: "gray.700"
                                        }
                                    },
                                    children: (0, t.jsx)(v.CiMobile4, {
                                        size: 18
                                    })
                                })]
                            }), m && m.availablePalettes && m.availablePalettes.length > 1 && (0, t.jsx)(M.ThemePreviewSelector, {
                                theme: m
                            }), (0, t.jsx)(P.SystemSettingPopover, {}), (0, t.jsx)(h.Box, {
                                display: {
                                    base: "block",
                                    md: "none"
                                },
                                children: (0, t.jsx)(C.default, {
                                    onClick: H,
                                    size: "sm",
                                    children: W("account.buttons.create")
                                })
                            }), (0, t.jsx)(h.Box, {
                                display: {
                                    base: "none",
                                    md: "block"
                                },
                                children: (0, t.jsx)(C.default, {
                                    onClick: H,
                                    size: "large",
                                    children: W("account.buttons.createInvitation")
                                })
                            }), L ? (0, t.jsx)(k.default, {}) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(h.Box, {
                                    display: {
                                        base: "block",
                                        md: "none"
                                    },
                                    children: (0, t.jsx)(C.default, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: () => {
                                            sessionStorage.setItem("returnUrl", window.location.pathname), R.push("/auth/login")
                                        },
                                        children: W("account.buttons.login")
                                    })
                                }), (0, t.jsx)(h.Box, {
                                    display: {
                                        base: "none",
                                        md: "block"
                                    },
                                    children: (0, t.jsx)(C.default, {
                                        variant: "outline",
                                        colorScheme: "gray",
                                        size: "large",
                                        onClick: () => {
                                            sessionStorage.setItem("returnUrl", window.location.pathname), R.push("/auth/login")
                                        },
                                        children: W("account.buttons.login")
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }), (0, t.jsx)(j.default, {
                isOpen: g,
                onClose: () => {
                    T(!1)
                },
                templateId: i,
                templateTier: u,
                pageType: a,
                category: r,
                templateSeoSettings: p
            })]
        })
    };

    function _() {
        let e = (0, d.useParams)(),
            l = null == e ? void 0 : e.id,
            r = l ? parseInt(l, 10) : NaN,
            a = !isNaN(r) && r > 0,
            {
                data: s,
                isLoading: h,
                error: x
            } = (0, p.useGetTemplate)(a ? r : 0);
        return (a || (0, d.notFound)(), !x && (h || s) || (0, d.notFound)(), h) ? (0, t.jsx)(n.EditorLoadingScreen, {}) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u, {
                content: (null == s ? void 0 : s.content) ? g.default.decompress(g.default.decodeBase64(s.content)) : void 0,
                mobileContent: (null == s ? void 0 : s.contentMobile) ? g.default.decompress(g.default.decodeBase64(s.contentMobile)) : void 0,
                effects: null == s ? void 0 : s.effects,
                audioSettings: null == s ? void 0 : s.audioSettings,
                notificationSettings: null == s ? void 0 : s.notificationSettings,
                customHtmlSettings: null == s ? void 0 : s.customHtml,
                customEffects: null == s ? void 0 : s.customEffects,
                openingEffect: null == s ? void 0 : s.openingEffect,
                viewportSettings: null == s ? void 0 : s.pageSettings,
                templateId: r,
                fontMap: null == s ? void 0 : s.fontMap,
                isLogo: null == s ? void 0 : s.isLogo,
                isCard: null == s ? void 0 : s.isCard,
                theme: null == s ? void 0 : s.theme,
                header: (0, t.jsx)(T, {
                    templateId: r,
                    templateTier: (null == s ? void 0 : s.tier) || "basic",
                    viewportSettings: null == s ? void 0 : s.pageSettings,
                    category: (null == s ? void 0 : s.category) || m.TemplateCategory.WEDDING,
                    type: (null == s ? void 0 : s.isCard) ? c.PageType.CARD : (null == s ? void 0 : s.isLogo) ? c.PageType.LOGO : c.PageType.NORMAL,
                    theme: null == s ? void 0 : s.theme,
                    templateSeoSettings: null == s ? void 0 : s.seoSettings
                })
            }), (0, t.jsx)(i.default, {}), (0, t.jsx)(o.Toaster, {})]
        })
    }
    e.s(["default", () => _], 191556)
}, 580574, e => {
    e.v(t => Promise.all(["static/chunks/af87ae2bdecac961.js"].map(t => e.l(t))).then(() => t(585017)))
}, 432302, e => {
    e.v(t => Promise.all(["static/chunks/eb2f23418b1642b4.js"].map(t => e.l(t))).then(() => t(924659)))
}]);

//# debugId=da47f154-4b9c-c581-fdb8-ddfb6013286d
//# sourceMappingURL=aa64f0d40b4de371.js.map