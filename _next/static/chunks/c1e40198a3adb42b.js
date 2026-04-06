;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "709f6b20-478c-3921-41e6-c124596d5c24")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 454131, e => {
    "use strict";
    var r = e.i(483632),
        t = e.i(196377),
        o = e.i(878262);
    e.i(474894);
    let a = e.i(251570).forwardRef(function(e, a) {
        let {
            portalled: i = !0,
            portalRef: s,
            ...n
        } = e;
        return (0, r.jsx)(o.Portal, {
            disabled: !i,
            container: s,
            children: (0, r.jsx)(t.Popover.Positioner, {
                children: (0, r.jsx)(t.Popover.Content, {
                    ref: a,
                    ...n
                })
            })
        })
    });
    t.Popover.Title, t.Popover.Description, t.Popover.Footer, t.Popover.Header;
    let i = t.Popover.Root,
        s = t.Popover.Body,
        n = t.Popover.Trigger;
    var l = e.i(564668),
        d = e.i(215669),
        c = e.i(791089),
        g = e.i(118190);
    e.i(308972);
    var h = e.i(445979),
        b = e.i(955343);

    function p(e) {
        return (0, b.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    fill: "none",
                    strokeWidth: "2",
                    d: "M18.0003,20.9998 C16.3453,20.9998 15.0003,19.6538 15.0003,17.9998 C15.0003,16.3458 16.3453,14.9998 18.0003,14.9998 C19.6543,14.9998 21.0003,16.3458 21.0003,17.9998 C21.0003,19.6538 19.6543,20.9998 18.0003,20.9998 L18.0003,20.9998 Z M24.0003,17.9998 L21.0003,17.9998 L24.0003,17.9998 Z M20.1213,20.1218 L22.2423,22.2428 L20.1213,20.1218 Z M18.0003,23.9998 L18.0003,20.9998 L18.0003,23.9998 Z M13.7573,22.2428 L15.8783,20.1208 L13.7573,22.2428 Z M12.0003,17.9998 L15.0003,17.9998 L12.0003,17.9998 Z M15.8783,15.8788 L13.7573,13.7578 L15.8783,15.8788 Z M18.0003,14.9998 L18.0003,11.9998 L18.0003,14.9998 Z M20.1213,15.8788 L22.2423,13.7578 L20.1213,15.8788 Z M12.5,12.5 C11.2660678,11.4458897 9.77508483,11 8,11 C4.13400675,11 1,13.0294373 1,18 L1,23 L11,23 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z"
                },
                child: []
            }]
        })(e)
    }
    var y = e.i(469562),
        u = e.i(451075);

    function x() {
        let {
            t: e
        } = (0, h.useTranslation)();
        return (0, r.jsxs)(i, {
            positioning: {
                placement: "bottom-end"
            },
            children: [(0, r.jsx)(n, {
                asChild: !0,
                children: (0, r.jsx)(l.Box, {
                    as: "button",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    w: "9",
                    h: "9",
                    borderRadius: "full",
                    bg: {
                        base: "gray.50",
                        _dark: "gray.800"
                    },
                    borderWidth: "1px",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    color: {
                        base: "gray.600",
                        _dark: "gray.300"
                    },
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    _hover: {
                        bg: {
                            base: "gray.100",
                            _dark: "gray.700"
                        },
                        borderColor: {
                            base: "gray.300",
                            _dark: "gray.600"
                        },
                        color: {
                            base: "gray.700",
                            _dark: "gray.200"
                        },
                        transform: "translateY(-1px)",
                        shadow: "sm"
                    },
                    "aria-label": "System Settings",
                    children: (0, r.jsx)(p, {
                        size: 16
                    })
                })
            }), (0, r.jsx)(a, {
                width: "200px",
                bg: {
                    base: "white/80",
                    _dark: "gray.800/80"
                },
                backdropFilter: "blur(10px)",
                children: (0, r.jsx)(s, {
                    children: (0, r.jsxs)(g.VStack, {
                        gap: 4,
                        align: "stretch",
                        children: [(0, r.jsxs)(d.HStack, {
                            justify: "space-between",
                            children: [(0, r.jsx)(c.Text, {
                                fontSize: "sm",
                                fontWeight: "medium",
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                children: e("systemSettings.theme")
                            }), (0, r.jsx)(y.ColorModeButton, {})]
                        }), (0, r.jsxs)(d.HStack, {
                            justify: "space-between",
                            children: [(0, r.jsx)(c.Text, {
                                fontSize: "sm",
                                fontWeight: "medium",
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                children: e("systemSettings.language")
                            }), (0, r.jsx)(u.LanguageSwitcher, {})]
                        })]
                    })
                })
            })]
        })
    }
    e.s(["SystemSettingPopover", () => x], 454131)
}]);

//# debugId=709f6b20-478c-3921-41e6-c124596d5c24
//# sourceMappingURL=c2a0c66d06ec5c54.js.map