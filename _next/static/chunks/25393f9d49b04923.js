;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "375c0c1b-2017-f933-9a48-8247c23f4673")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 649760, 870566, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(564668),
        a = e.i(791089),
        r = e.i(494114),
        s = e.i(878262);
    let o = {
        behind: -1,
        base: 0,
        content: 1,
        contentOverlay: 2,
        ui: 10,
        overlay: 50,
        videoOverlay: 1,
        videoControls: 2,
        popupContent: 10,
        sectionBase: 3,
        sectionContent: 4,
        renderNode: 99,
        quickActions: 999,
        quickActionsBackground: 998,
        quickActionsMain: 9999,
        quickActionsItem: 999,
        quickActionsSubItem: 998,
        popupMain: 9999,
        dropboxMain: 9999,
        selection: 1e3,
        selectionControls: 1001,
        groupControls: 1e3,
        pinning: 1e3,
        pinningManager: 1e3,
        sectionsControls: 1e3,
        editor: 9999,
        editorOverlay: 9998,
        renderNodeHighlight: 9999,
        selectionBox: 9999,
        smartAlignment: 9999,
        audioPlayer: 9999,
        lightBox: 9999,
        lightBoxContent: 1e4,
        dropbox: 9999,
        dropboxOverlay: 9998,
        viewport: 9999,
        htmlEditor: 9999,
        modalBackground: 1e4,
        modal: 1e4,
        audioPlayerControls: 1e4,
        albumModal: 9999,
        albumModalContent: 1e4,
        albumModalItem: 10002,
        albumModalSelected: 10003,
        albumSection: 1e4,
        albumSectionNavigation: 10,
        albumSectionCSS: 2,
        fileManagement: 1e4,
        groupActions: 1e4,
        headerControls: 99999,
        resizer: 4600,
        modalOverlay: 10001,
        quickActionsPopup: 10001,
        quickActionsCSS: 10001,
        viewTemplateOverlay: 10001,
        tooltipContent: 10001,
        viewportOverlay: 1001,
        modalContent: 10002,
        modalTopLevel: 10003,
        colorPicker: 999999,
        imagePicker: 999999,
        assetSave: 999999,
        nodeControls: 1e6,
        iconPicker: 1e6,
        elementIdEdit: 1e6,
        fileSelect: 1e6,
        assetSaveContent: 1e6,
        calendarProvider: 1e6,
        dragging: 1e7,
        nodeControl: 5e5,
        seoSettings: 5e5,
        audioSettings: 500001,
        notificationSettings: 500002,
        viewportSettings: 500003,
        customHtmlSettings: 500004,
        customEffects: 500005,
        particleEffects: 500006,
        overlayHidden: 500007,
        settingsModal: 500008,
        collaborationModal: 500009,
        openingEffect: 500010,
        fontSelect: 9999999,
        layerPopup: 9999999,
        viewportContext: 9999999,
        elementsPopup: 0x989685,
        guideElementPopup: 0x989686,
        fontSelectOverlay: 1e7,
        fileSelectOverlay: 0x989681,
        tooltip: 0x989681,
        modalConfirm: 0x989689,
        viewTemplateParticles: 1e4,
        viewTemplateAudioPlayer: 10001,
        popover: "popover",
        styledFontSelector: "10"
    };
    e.s(["calculateSectionZIndex", 0, function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = 20 - e;
        return t ? o.sectionBase + i : o.sectionContent + i
    }, "zIndex", 0, o], 870566);
    let n = e => {
        let {
            isOpen: n,
            title: l,
            onClose: d,
            children: c,
            zIndex: g = o.modal,
            maxWidth: u = "380px",
            maxHeight: p = "80vh",
            minHeight: m = "auto",
            overflowVisible: h = !1,
            showCloseButton: v = !0,
            closeOnOverlayClick: f = !0,
            mobileSheet: b = !1
        } = e;
        if (!n) return null;
        let x = "string" == typeof u ? u : "600px";
        return (0, t.jsx)(s.Portal, {
            children: (0, t.jsx)(i.Box, {
                position: "fixed",
                inset: "0",
                display: "flex",
                alignItems: b ? {
                    base: "flex-end",
                    md: "center"
                } : "center",
                justifyContent: "center",
                bg: "blackAlpha.560",
                backdropFilter: "blur(4px)",
                zIndex: g,
                onClick: e => {
                    f && e.target === e.currentTarget && d()
                },
                children: (0, t.jsxs)(i.Box, {
                    className: "animate-fade-in",
                    bg: {
                        base: "white",
                        _dark: "gray.900"
                    },
                    color: {
                        base: "gray.900",
                        _dark: "white"
                    },
                    borderRadius: b ? {
                        base: "22px 22px 0 0",
                        md: "xl"
                    } : "xl",
                    border: "1px solid",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    boxShadow: {
                        base: "0 -12px 34px rgba(15, 23, 42, 0.16)",
                        md: "0 24px 48px rgba(15, 23, 42, 0.24)"
                    },
                    maxWidth: b ? {
                        base: "100%",
                        md: "90%"
                    } : "90%",
                    p: b ? {
                        base: 3,
                        md: 5
                    } : 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    px: b ? {
                        base: 3,
                        md: 6
                    } : 6,
                    width: b ? {
                        base: "100%",
                        md: x
                    } : u,
                    maxHeight: h ? void 0 : p,
                    minHeight: m,
                    overflowY: h ? "visible" : "auto",
                    overflowX: h ? "visible" : "hidden",
                    overflow: h ? "visible" : void 0,
                    pb: b ? "calc(env(safe-area-inset-bottom, 0px) + 8px)" : void 0,
                    children: [b && (0, t.jsx)(i.Box, {
                        w: "44px",
                        h: "4px",
                        display: {
                            base: "block",
                            md: "none"
                        },
                        borderRadius: "full",
                        bg: {
                            base: "gray.300",
                            _dark: "gray.600"
                        },
                        mx: "auto",
                        mt: 1,
                        mb: 1
                    }), (l || v) && (0, t.jsxs)(r.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        bg: {
                            base: "white",
                            _dark: "gray.900"
                        },
                        pb: {
                            base: 3,
                            md: 2
                        },
                        pt: b ? {
                            base: 1,
                            md: 0
                        } : 0,
                        borderBottom: {
                            base: "1px solid",
                            md: "0"
                        },
                        borderColor: {
                            base: "gray.100",
                            _dark: "gray.700"
                        },
                        children: [(0, t.jsx)(a.Text, {
                            fontSize: {
                                base: "2xl",
                                md: "lg"
                            },
                            fontWeight: "semibold",
                            pr: 3,
                            lineHeight: "1.2",
                            children: l
                        }), v && (0, t.jsx)(i.Box, {
                            as: "button",
                            onClick: d,
                            w: "36px",
                            h: "36px",
                            borderRadius: "full",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            color: {
                                base: "gray.500",
                                _dark: "gray.300"
                            },
                            bg: {
                                base: "gray.50",
                                _dark: "gray.800"
                            },
                            _hover: {
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.100"
                                },
                                borderColor: {
                                    base: "gray.300",
                                    _dark: "gray.500"
                                },
                                bg: {
                                    base: "gray.100",
                                    _dark: "gray.700"
                                }
                            },
                            fontSize: "2xl",
                            lineHeight: 1,
                            transition: "all 0.2s",
                            children: "×"
                        })]
                    }), c]
                })
            })
        })
    };
    e.s(["ModalBasic", 0, n, "default", 0, n], 649760)
}, 613291, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(489198);
    let a = e => (0, t.jsx)(i.chakra.svg, {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...e,
            children: (0, t.jsx)("path", {
                d: "M20 6 9 17l-5-5"
            })
        }),
        r = e => (0, t.jsx)(i.chakra.svg, {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...e,
            children: (0, t.jsx)("path", {
                d: "m6 9 6 6 6-6"
            })
        }),
        s = e => (0, t.jsx)(i.chakra.svg, {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, t.jsx)("path", {
                d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
            })
        }),
        o = e => (0, t.jsx)(i.chakra.svg, {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, t.jsx)("path", {
                d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
            })
        }),
        n = e => (0, t.jsx)(i.chakra.svg, {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0",
            ...e,
            children: (0, t.jsx)("path", {
                d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
            })
        }),
        l = e => (0, t.jsx)(i.chakra.svg, {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
            })
        }),
        d = e => (0, t.jsxs)(i.chakra.svg, {
            stroke: "currentColor",
            fill: "none",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...e,
            children: [(0, t.jsx)("path", {
                d: "m2 22 1-1h3l9-9"
            }), (0, t.jsx)("path", {
                d: "M3 21v-3l9-9"
            }), (0, t.jsx)("path", {
                d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
            })]
        });
    e.s(["CheckCircleIcon", () => s, "CheckIcon", () => a, "ChevronDownIcon", () => r, "CloseIcon", () => l, "InfoIcon", () => n, "PipetteIcon", () => d, "WarningIcon", () => o])
}, 334863, e => {
    "use strict";
    var t = e.i(483632),
        i = e.i(501829),
        a = e.i(30500),
        r = e.i(841158),
        s = e.i(360706),
        o = e.i(143713),
        n = e.i(409078),
        l = (0, s.createAnatomy)("toast").parts("group", "root", "title", "description", "actionTrigger", "closeTrigger").build(),
        d = (e, t) => e.getById("toast-group:".concat(t)),
        c = e => e.getById("toast:".concat(e.id)),
        g = e => "toast:".concat(e.id, ":title"),
        u = e => "toast:".concat(e.id, ":description"),
        p = {
            info: 5e3,
            error: 5e3,
            success: 2e3,
            loading: 1 / 0,
            DEFAULT: 5e3
        };

    function m(e, t) {
        var i;
        return null != (i = null != e ? e : p[t]) ? i : p.DEFAULT
    }
    var {
        guards: h,
        createMachine: v
    } = (0, a.setup)(), {
        and: f
    } = h, b = v({
        props(e) {
            let {
                props: t
            } = e;
            return {
                dir: "ltr",
                id: (0, n.uuid)(),
                ...t,
                store: t.store
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("store").attrs.overlap ? "overlap" : "stack"
        },
        refs: () => ({
            lastFocusedEl: null,
            isFocusWithin: !1,
            isPointerWithin: !1,
            ignoreMouseTimer: r.AnimationFrame.create(),
            dismissableCleanup: void 0
        }),
        context(e) {
            let {
                bindable: t
            } = e;
            return {
                toasts: t(() => ({
                    defaultValue: [],
                    sync: !0,
                    hash: e => e.map(e => e.id).join(",")
                })),
                heights: t(() => ({
                    defaultValue: [],
                    sync: !0
                }))
            }
        },
        computed: {
            count: e => {
                let {
                    context: t
                } = e;
                return t.get("toasts").length
            },
            overlap: e => {
                let {
                    prop: t
                } = e;
                return t("store").attrs.overlap
            },
            placement: e => {
                let {
                    prop: t
                } = e;
                return t("store").attrs.placement
            }
        },
        effects: ["subscribeToStore", "trackDocumentVisibility", "trackHotKeyPress"],
        watch(e) {
            let {
                track: t,
                context: i,
                action: a
            } = e;
            t([() => i.hash("toasts")], () => {
                queueMicrotask(() => {
                    a(["collapsedIfEmpty", "setDismissableBranch"])
                })
            })
        },
        exit: ["clearDismissableBranch", "clearLastFocusedEl", "clearMouseEventTimer"],
        on: {
            "DOC.HOTKEY": {
                actions: ["focusRegionEl"]
            },
            "REGION.BLUR": [{
                guard: f("isOverlapping", "isPointerOut"),
                target: "overlap",
                actions: ["collapseToasts", "resumeToasts", "restoreFocusIfPointerOut"]
            }, {
                guard: "isPointerOut",
                target: "stack",
                actions: ["resumeToasts", "restoreFocusIfPointerOut"]
            }, {
                actions: ["clearFocusWithin"]
            }],
            "TOAST.REMOVE": {
                actions: ["removeToast", "removeHeight", "ignoreMouseEventsTemporarily"]
            },
            "TOAST.PAUSE": {
                actions: ["pauseToasts"]
            }
        },
        states: {
            stack: {
                on: {
                    "REGION.POINTER_LEAVE": [{
                        guard: "isOverlapping",
                        target: "overlap",
                        actions: ["clearPointerWithin", "resumeToasts", "collapseToasts"]
                    }, {
                        actions: ["clearPointerWithin", "resumeToasts"]
                    }],
                    "REGION.OVERLAP": {
                        target: "overlap",
                        actions: ["collapseToasts"]
                    },
                    "REGION.FOCUS": {
                        actions: ["setLastFocusedEl", "pauseToasts"]
                    },
                    "REGION.POINTER_ENTER": {
                        actions: ["setPointerWithin", "pauseToasts"]
                    }
                }
            },
            overlap: {
                on: {
                    "REGION.STACK": {
                        target: "stack",
                        actions: ["expandToasts"]
                    },
                    "REGION.POINTER_ENTER": {
                        target: "stack",
                        actions: ["setPointerWithin", "pauseToasts", "expandToasts"]
                    },
                    "REGION.FOCUS": {
                        target: "stack",
                        actions: ["setLastFocusedEl", "pauseToasts", "expandToasts"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                isOverlapping: e => {
                    let {
                        computed: t
                    } = e;
                    return t("overlap")
                },
                isPointerOut: e => {
                    let {
                        refs: t
                    } = e;
                    return !t.get("isPointerWithin")
                }
            },
            effects: {
                subscribeToStore(e) {
                    let {
                        context: t,
                        prop: i
                    } = e;
                    return i("store").subscribe(e => {
                        e.dismiss ? t.set("toasts", t => t.filter(t => t.id !== e.id)) : t.set("toasts", t => {
                            let i = t.findIndex(t => t.id === e.id);
                            return -1 !== i ? [...t.slice(0, i), { ...t[i],
                                ...e
                            }, ...t.slice(i + 1)] : [e, ...t]
                        })
                    })
                },
                trackHotKeyPress(e) {
                    let {
                        prop: t,
                        send: i
                    } = e;
                    return (0, r.addDomEvent)(document, "keydown", e => {
                        let {
                            hotkey: a
                        } = t("store").attrs;
                        a.every(t => e[t] || e.code === t) && i({
                            type: "DOC.HOTKEY"
                        })
                    }, {
                        capture: !0
                    })
                },
                trackDocumentVisibility(e) {
                    let {
                        prop: t,
                        send: i,
                        scope: a
                    } = e, {
                        pauseOnPageIdle: s
                    } = t("store").attrs;
                    if (!s) return;
                    let o = a.getDoc();
                    return (0, r.addDomEvent)(o, "visibilitychange", () => {
                        i({
                            type: "hidden" === o.visibilityState ? "PAUSE_ALL" : "RESUME_ALL"
                        })
                    })
                }
            },
            actions: {
                setDismissableBranch(e) {
                    let {
                        refs: t,
                        context: i,
                        computed: a,
                        scope: r
                    } = e, s = i.get("toasts"), n = a("placement"), l = s.length > 0;
                    if (!l) {
                        var c;
                        null == (c = t.get("dismissableCleanup")) || c();
                        return
                    }
                    if (l && t.get("dismissableCleanup")) return;
                    let g = (0, o.trackDismissableBranch)(() => d(r, n), {
                        defer: !0
                    });
                    t.set("dismissableCleanup", g)
                },
                clearDismissableBranch(e) {
                    var t;
                    let {
                        refs: i
                    } = e;
                    null == (t = i.get("dismissableCleanup")) || t()
                },
                focusRegionEl(e) {
                    let {
                        scope: t,
                        computed: i
                    } = e;
                    queueMicrotask(() => {
                        var e;
                        null == (e = d(t, i("placement"))) || e.focus()
                    })
                },
                pauseToasts(e) {
                    let {
                        prop: t
                    } = e;
                    t("store").pause()
                },
                resumeToasts(e) {
                    let {
                        prop: t
                    } = e;
                    t("store").resume()
                },
                expandToasts(e) {
                    let {
                        prop: t
                    } = e;
                    t("store").expand()
                },
                collapseToasts(e) {
                    let {
                        prop: t
                    } = e;
                    t("store").collapse()
                },
                removeToast(e) {
                    let {
                        prop: t,
                        event: i
                    } = e;
                    t("store").remove(i.id)
                },
                removeHeight(e) {
                    let {
                        event: t,
                        context: i
                    } = e;
                    (null == t ? void 0 : t.id) != null && queueMicrotask(() => {
                        i.set("heights", e => e.filter(e => e.id !== t.id))
                    })
                },
                collapsedIfEmpty(e) {
                    let {
                        send: t,
                        computed: i
                    } = e;
                    !i("overlap") || i("count") > 1 || t({
                        type: "REGION.OVERLAP"
                    })
                },
                setLastFocusedEl(e) {
                    let {
                        refs: t,
                        event: i
                    } = e;
                    !t.get("isFocusWithin") && i.target && (t.set("isFocusWithin", !0), t.set("lastFocusedEl", i.target))
                },
                restoreFocusIfPointerOut(e) {
                    var t;
                    let {
                        refs: i
                    } = e;
                    !i.get("lastFocusedEl") || i.get("isPointerWithin") || (null == (t = i.get("lastFocusedEl")) || t.focus({
                        preventScroll: !0
                    }), i.set("lastFocusedEl", null), i.set("isFocusWithin", !1))
                },
                setPointerWithin(e) {
                    let {
                        refs: t
                    } = e;
                    t.set("isPointerWithin", !0)
                },
                clearPointerWithin(e) {
                    let {
                        refs: t
                    } = e;
                    if (t.set("isPointerWithin", !1), t.get("lastFocusedEl") && !t.get("isFocusWithin")) {
                        var i;
                        null == (i = t.get("lastFocusedEl")) || i.focus({
                            preventScroll: !0
                        }), t.set("lastFocusedEl", null)
                    }
                },
                clearFocusWithin(e) {
                    let {
                        refs: t
                    } = e;
                    t.set("isFocusWithin", !1)
                },
                clearLastFocusedEl(e) {
                    var t;
                    let {
                        refs: i
                    } = e;
                    i.get("lastFocusedEl") && (null == (t = i.get("lastFocusedEl")) || t.focus({
                        preventScroll: !0
                    }), i.set("lastFocusedEl", null), i.set("isFocusWithin", !1))
                },
                ignoreMouseEventsTemporarily(e) {
                    let {
                        refs: t
                    } = e;
                    t.get("ignoreMouseTimer").request()
                },
                clearMouseEventTimer(e) {
                    let {
                        refs: t
                    } = e;
                    t.get("ignoreMouseTimer").cancel()
                }
            }
        }
    }), {
        not: x
    } = (0, a.createGuards)(), y = (0, a.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return (0, n.ensureProps)(t, ["id", "type", "parent", "removeDelay"], "toast"), {
                closable: !0,
                ...t,
                duration: m(t.duration, t.type)
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return "loading" === t("type") || t("duration") === 1 / 0 ? "visible:persist" : "visible"
        },
        context(e) {
            let {
                prop: t,
                bindable: i
            } = e;
            return {
                remainingTime: i(() => ({
                    defaultValue: m(t("duration"), t("type"))
                })),
                createdAt: i(() => ({
                    defaultValue: Date.now()
                })),
                mounted: i(() => ({
                    defaultValue: !1
                })),
                initialHeight: i(() => ({
                    defaultValue: 0
                }))
            }
        },
        refs: () => ({
            closeTimerStartTime: Date.now(),
            lastCloseStartTimerStartTime: 0
        }),
        computed: {
            zIndex: e => {
                let {
                    prop: t
                } = e, i = t("parent").context.get("toasts"), a = i.findIndex(e => e.id === t("id"));
                return i.length - a
            },
            height: e => {
                var t;
                let {
                    prop: i
                } = e, a = i("parent").context.get("heights").find(e => e.id === i("id"));
                return null != (t = null == a ? void 0 : a.height) ? t : 0
            },
            heightIndex: e => {
                let {
                    prop: t
                } = e;
                return t("parent").context.get("heights").findIndex(e => e.id === t("id"))
            },
            frontmost: e => {
                let {
                    prop: t
                } = e;
                return 0 === t("index")
            },
            heightBefore: e => {
                let {
                    prop: t
                } = e, i = t("parent").context.get("heights"), a = i.findIndex(e => e.id === t("id"));
                return i.reduce((e, t, i) => i >= a ? e : e + t.height, 0)
            },
            shouldPersist: e => {
                let {
                    prop: t
                } = e;
                return "loading" === t("type") || t("duration") === 1 / 0
            }
        },
        watch(e) {
            let {
                track: t,
                prop: i,
                send: a
            } = e;
            t([() => i("message")], () => {
                let e = i("message");
                e && a({
                    type: e,
                    src: "programmatic"
                })
            }), t([() => i("type"), () => i("duration")], () => {
                a({
                    type: "UPDATE"
                })
            })
        },
        on: {
            UPDATE: [{
                guard: "shouldPersist",
                target: "visible:persist",
                actions: ["resetCloseTimer"]
            }, {
                target: "visible:updating",
                actions: ["resetCloseTimer"]
            }],
            MEASURE: {
                actions: ["measureHeight"]
            }
        },
        entry: ["setMounted", "measureHeight", "invokeOnVisible"],
        effects: ["trackHeight"],
        states: {
            "visible:updating": {
                tags: ["visible", "updating"],
                effects: ["waitForNextTick"],
                on: {
                    SHOW: {
                        target: "visible"
                    }
                }
            },
            "visible:persist": {
                tags: ["visible", "paused"],
                on: {
                    RESUME: {
                        guard: x("isLoadingType"),
                        target: "visible",
                        actions: ["setCloseTimer"]
                    },
                    DISMISS: {
                        target: "dismissing"
                    }
                }
            },
            visible: {
                tags: ["visible"],
                effects: ["waitForDuration"],
                on: {
                    DISMISS: {
                        target: "dismissing"
                    },
                    PAUSE: {
                        target: "visible:persist",
                        actions: ["syncRemainingTime"]
                    }
                }
            },
            dismissing: {
                entry: ["invokeOnDismiss"],
                effects: ["waitForRemoveDelay"],
                on: {
                    REMOVE: {
                        target: "unmounted",
                        actions: ["notifyParentToRemove"]
                    }
                }
            },
            unmounted: {
                entry: ["invokeOnUnmount"]
            }
        },
        implementations: {
            effects: {
                waitForRemoveDelay(e) {
                    let {
                        prop: t,
                        send: i
                    } = e;
                    return (0, n.setRafTimeout)(() => {
                        i({
                            type: "REMOVE",
                            src: "timer"
                        })
                    }, t("removeDelay"))
                },
                waitForDuration(e) {
                    let {
                        send: t,
                        context: i,
                        computed: a
                    } = e;
                    if (!a("shouldPersist")) return (0, n.setRafTimeout)(() => {
                        t({
                            type: "DISMISS",
                            src: "timer"
                        })
                    }, i.get("remainingTime"))
                },
                waitForNextTick(e) {
                    let {
                        send: t
                    } = e;
                    return (0, n.setRafTimeout)(() => {
                        t({
                            type: "SHOW",
                            src: "timer"
                        })
                    }, 0)
                },
                trackHeight(e) {
                    let t, {
                        scope: i,
                        prop: a
                    } = e;
                    return (0, r.raf)(() => {
                        let e = c(i);
                        if (!e) return;
                        let r = new(i.getWin()).MutationObserver(() => {
                            let t = e.style.height;
                            e.style.height = "auto";
                            let i = e.getBoundingClientRect().height;
                            e.style.height = t;
                            let r = {
                                id: a("id"),
                                height: i
                            };
                            T(a("parent"), r)
                        });
                        r.observe(e, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        }), t = () => r.disconnect()
                    }), () => null == t ? void 0 : t()
                }
            },
            guards: {
                isLoadingType: e => {
                    let {
                        prop: t
                    } = e;
                    return "loading" === t("type")
                },
                shouldPersist: e => {
                    let {
                        computed: t
                    } = e;
                    return t("shouldPersist")
                }
            },
            actions: {
                setMounted(e) {
                    let {
                        context: t
                    } = e;
                    (0, r.raf)(() => {
                        t.set("mounted", !0)
                    })
                },
                measureHeight(e) {
                    let {
                        scope: t,
                        prop: i,
                        context: a
                    } = e;
                    queueMicrotask(() => {
                        let e = c(t);
                        if (!e) return;
                        let r = e.style.height;
                        e.style.height = "auto";
                        let s = e.getBoundingClientRect().height;
                        e.style.height = r, a.set("initialHeight", s);
                        let o = {
                            id: i("id"),
                            height: s
                        };
                        T(i("parent"), o)
                    })
                },
                setCloseTimer(e) {
                    let {
                        refs: t
                    } = e;
                    t.set("closeTimerStartTime", Date.now())
                },
                resetCloseTimer(e) {
                    let {
                        context: t,
                        refs: i,
                        prop: a
                    } = e;
                    i.set("closeTimerStartTime", Date.now()), t.set("remainingTime", m(a("duration"), a("type")))
                },
                syncRemainingTime(e) {
                    let {
                        context: t,
                        refs: i
                    } = e;
                    t.set("remainingTime", e => {
                        let t = i.get("closeTimerStartTime"),
                            a = Date.now() - t;
                        return i.set("lastCloseStartTimerStartTime", Date.now()), e - a
                    })
                },
                notifyParentToRemove(e) {
                    let {
                        prop: t
                    } = e;
                    t("parent").send({
                        type: "TOAST.REMOVE",
                        id: t("id")
                    })
                },
                invokeOnDismiss(e) {
                    var t;
                    let {
                        prop: i,
                        event: a
                    } = e;
                    null == (t = i("onStatusChange")) || t({
                        status: "dismissing",
                        src: a.src
                    })
                },
                invokeOnUnmount(e) {
                    var t;
                    let {
                        prop: i
                    } = e;
                    null == (t = i("onStatusChange")) || t({
                        status: "unmounted"
                    })
                },
                invokeOnVisible(e) {
                    var t;
                    let {
                        prop: i
                    } = e;
                    null == (t = i("onStatusChange")) || t({
                        status: "visible"
                    })
                }
            }
        }
    });

    function T(e, t) {
        let {
            id: i,
            height: a
        } = t;
        e.context.set("heights", e => e.find(e => e.id === i) ? e.map(e => e.id === i ? { ...e,
            height: a
        } : e) : [{
            id: i,
            height: a
        }, ...e])
    }
    var C = function(e, t) {
            let {
                context: i,
                prop: a,
                send: s,
                refs: o,
                computed: n
            } = e;
            return {
                getCount: () => i.get("toasts").length,
                getToasts: () => i.get("toasts"),
                getGroupProps() {
                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            label: d = "Notifications"
                        } = i,
                        {
                            hotkey: c
                        } = a("store").attrs,
                        g = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
                        u = n("placement"),
                        [p, m = "center"] = u.split("-");
                    return t.element({ ...l.group.attrs,
                        dir: a("dir"),
                        tabIndex: -1,
                        "aria-label": "".concat(u, " ").concat(d, " ").concat(g),
                        id: "toast-group:".concat(u),
                        "data-placement": u,
                        "data-side": p,
                        "data-align": m,
                        "aria-live": "polite",
                        role: "region",
                        style: function(e, t) {
                            var i;
                            let {
                                prop: a,
                                computed: s,
                                context: o
                            } = e, {
                                offsets: n,
                                gap: l
                            } = a("store").attrs, d = o.get("heights"), c = "string" == typeof n ? {
                                left: n,
                                right: n,
                                bottom: n,
                                top: n
                            } : n, g = "rtl" === a("dir"), u = t.replace("-start", g ? "-right" : "-left").replace("-end", g ? "-left" : "-right"), p = u.includes("right"), m = u.includes("left"), h = {
                                position: "fixed",
                                pointerEvents: s("count") > 0 ? void 0 : "none",
                                display: "flex",
                                flexDirection: "column",
                                "--gap": "".concat(l, "px"),
                                "--first-height": "".concat((null == (i = d[0]) ? void 0 : i.height) || 0, "px"),
                                "--viewport-offset-left": c.left,
                                "--viewport-offset-right": c.right,
                                "--viewport-offset-top": c.top,
                                "--viewport-offset-bottom": c.bottom,
                                zIndex: r.MAX_Z_INDEX
                            }, v = "center";
                            if (p && (v = "flex-end"), m && (v = "flex-start"), h.alignItems = v, u.includes("top")) {
                                let e = c.top;
                                h.top = "max(env(safe-area-inset-top, 0px), ".concat(e, ")")
                            }
                            if (u.includes("bottom")) {
                                let e = c.bottom;
                                h.bottom = "max(env(safe-area-inset-bottom, 0px), ".concat(e, ")")
                            }
                            if (!u.includes("left")) {
                                let e = c.right;
                                h.insetInlineEnd = "calc(env(safe-area-inset-right, 0px) + ".concat(e, ")")
                            }
                            if (!u.includes("right")) {
                                let e = c.left;
                                h.insetInlineStart = "calc(env(safe-area-inset-left, 0px) + ".concat(e, ")")
                            }
                            return h
                        }(e, u),
                        onMouseEnter() {
                            o.get("ignoreMouseTimer").isActive() || s({
                                type: "REGION.POINTER_ENTER",
                                placement: u
                            })
                        },
                        onMouseMove() {
                            o.get("ignoreMouseTimer").isActive() || s({
                                type: "REGION.POINTER_ENTER",
                                placement: u
                            })
                        },
                        onMouseLeave() {
                            o.get("ignoreMouseTimer").isActive() || s({
                                type: "REGION.POINTER_LEAVE",
                                placement: u
                            })
                        },
                        onFocus(e) {
                            s({
                                type: "REGION.FOCUS",
                                target: e.relatedTarget
                            })
                        },
                        onBlur(e) {
                            o.get("isFocusWithin") && !(0, r.contains)(e.currentTarget, e.relatedTarget) && queueMicrotask(() => s({
                                type: "REGION.BLUR"
                            }))
                        }
                    })
                },
                subscribe: e => a("store").subscribe(() => e(i.get("toasts")))
            }
        },
        k = e.i(251570),
        w = e.i(520036),
        E = e.i(904849),
        S = e.i(173614);
    let [P, I] = (0, e.i(483591).createContext)({
        name: "ToastContext",
        hookName: "useToastContext",
        providerName: "<ToastProvider />"
    }), R = (0, k.forwardRef)((e, r) => {
        let {
            toaster: s,
            children: o,
            ...n
        } = e, l = (0, E.useLocaleContext)(), d = (0, w.useEnvironmentContext)(), c = (0, i.useMachine)(b, {
            store: s,
            id: (0, k.useId)(),
            dir: null == l ? void 0 : l.dir,
            getRootNode: null == d ? void 0 : d.getRootNode
        }), g = C(c, i.normalizeProps), u = (0, a.mergeProps)(g.getGroupProps(), n);
        return (0, t.jsx)(S.ark.div, { ...u,
            ref: r,
            children: g.getToasts().map((e, i) => (0, t.jsx)(O, {
                value: e,
                parent: c,
                index: i,
                children: e => o(e)
            }, e.id))
        })
    });
    R.displayName = "Toaster";
    let O = e => {
        let a = (0, w.useEnvironmentContext)(),
            s = { ...e.value,
                parent: e.parent,
                index: e.index,
                getRootNode: a.getRootNode
            },
            o = function(e, t) {
                let {
                    state: i,
                    send: a,
                    prop: s,
                    scope: o,
                    context: n,
                    computed: d
                } = e, c = i.hasTag("visible"), p = i.hasTag("paused"), m = n.get("mounted"), h = d("frontmost"), v = s("parent").computed("placement"), f = s("type"), b = s("stacked"), x = s("title"), y = s("description"), T = s("action"), [C, k = "center"] = v.split("-");
                return {
                    type: f,
                    title: x,
                    description: y,
                    placement: v,
                    visible: c,
                    paused: p,
                    closable: !!s("closable"),
                    pause() {
                        a({
                            type: "PAUSE"
                        })
                    },
                    resume() {
                        a({
                            type: "RESUME"
                        })
                    },
                    dismiss() {
                        a({
                            type: "DISMISS",
                            src: "programmatic"
                        })
                    },
                    getRootProps: () => t.element({ ...l.root.attrs,
                        dir: s("dir"),
                        id: "toast:".concat(o.id),
                        "data-state": c ? "open" : "closed",
                        "data-type": f,
                        "data-placement": v,
                        "data-align": k,
                        "data-side": C,
                        "data-mounted": (0, r.dataAttr)(m),
                        "data-paused": (0, r.dataAttr)(p),
                        "data-first": (0, r.dataAttr)(h),
                        "data-sibling": (0, r.dataAttr)(!h),
                        "data-stack": (0, r.dataAttr)(b),
                        "data-overlap": (0, r.dataAttr)(!b),
                        role: "status",
                        "aria-atomic": "true",
                        "aria-describedby": y ? u(o) : void 0,
                        "aria-labelledby": x ? g(o) : void 0,
                        tabIndex: 0,
                        style: function(e, t) {
                            let {
                                prop: i,
                                context: a,
                                computed: r
                            } = e, s = i("parent"), o = s.computed("placement"), {
                                gap: n
                            } = s.prop("store").attrs, [l] = o.split("-"), d = a.get("mounted"), c = a.get("remainingTime"), g = r("height"), u = r("frontmost"), p = !u, m = !i("stacked"), h = i("stacked"), v = "loading" === i("type") ? Number.MAX_SAFE_INTEGER : c, f = r("heightIndex") * n + r("heightBefore"), b = {
                                position: "absolute",
                                pointerEvents: "auto",
                                "--opacity": "0",
                                "--remove-delay": "".concat(i("removeDelay"), "ms"),
                                "--duration": "".concat(v, "ms"),
                                "--initial-height": "".concat(g, "px"),
                                "--offset": "".concat(f, "px"),
                                "--index": i("index"),
                                "--z-index": r("zIndex"),
                                "--lift-amount": "calc(var(--lift) * var(--gap))",
                                "--y": "100%",
                                "--x": "0"
                            };
                            return "top" === l ? Object.assign(b, {
                                top: "0",
                                "--sign": "-1",
                                "--y": "-100%",
                                "--lift": "1"
                            }) : "bottom" === l && Object.assign(b, {
                                bottom: "0",
                                "--sign": "1",
                                "--y": "100%",
                                "--lift": "-1"
                            }), d && (Object.assign(b, {
                                "--y": "0",
                                "--opacity": "1"
                            }), h && Object.assign(b, {
                                "--y": "calc(var(--lift) * var(--offset))",
                                "--height": "var(--initial-height)"
                            })), t || Object.assign(b, {
                                "--opacity": "0",
                                pointerEvents: "none"
                            }), p && m && (Object.assign(b, {
                                "--base-scale": "var(--index) * 0.05 + 1",
                                "--y": "calc(var(--lift-amount) * var(--index))",
                                "--scale": "calc(-1 * var(--base-scale))",
                                "--height": "var(--first-height)"
                            }), t || Object.assign(b, {
                                "--y": "calc(var(--sign) * 40%)"
                            })), p && h && !t && Object.assign(b, {
                                "--y": "calc(var(--lift) * var(--offset) + var(--lift) * -100%)"
                            }), u && !t && Object.assign(b, {
                                "--y": "calc(var(--lift) * -100%)"
                            }), b
                        }(e, c),
                        onKeyDown(e) {
                            e.defaultPrevented || "Escape" == e.key && (a({
                                type: "DISMISS",
                                src: "keyboard"
                            }), e.preventDefault())
                        }
                    }),
                    getGhostBeforeProps: () => t.element({
                        "data-ghost": "before",
                        style: function(e, t) {
                            let {
                                computed: i
                            } = e, a = {
                                position: "absolute",
                                inset: "0",
                                scale: "1 2",
                                pointerEvents: t ? "none" : "auto"
                            };
                            return i("frontmost") && !t && Object.assign(a, {
                                height: "calc(var(--initial-height) + 80%)"
                            }), a
                        }(e, c)
                    }),
                    getGhostAfterProps: () => t.element({
                        "data-ghost": "after",
                        style: {
                            position: "absolute",
                            left: "0",
                            height: "calc(var(--gap) + 2px)",
                            bottom: "100%",
                            width: "100%"
                        }
                    }),
                    getTitleProps: () => t.element({ ...l.title.attrs,
                        id: g(o)
                    }),
                    getDescriptionProps: () => t.element({ ...l.description.attrs,
                        id: u(o)
                    }),
                    getActionTriggerProps: () => t.button({ ...l.actionTrigger.attrs,
                        type: "button",
                        onClick(e) {
                            var t;
                            e.defaultPrevented || (null == T || null == (t = T.onClick) || t.call(T), a({
                                type: "DISMISS",
                                src: "user"
                            }))
                        }
                    }),
                    getCloseTriggerProps: () => t.button({
                        id: "toast".concat(o.id, ":close"),
                        ...l.closeTrigger.attrs,
                        type: "button",
                        "aria-label": "Dismiss notification",
                        onClick(e) {
                            e.defaultPrevented || a({
                                type: "DISMISS",
                                src: "user"
                            })
                        }
                    })
                }
            }((0, i.useMachine)(y, { ...s
            }), i.normalizeProps);
        return (0, t.jsx)(P, {
            value: o,
            children: e.children(e.value)
        })
    };
    O.displayName = "ToastActor", e.s([], 805590), e.i(805590);
    let M = (0, k.forwardRef)((e, i) => {
        let r = I(),
            s = (0, a.mergeProps)(r.getActionTriggerProps(), e);
        return (0, t.jsx)(S.ark.button, { ...s,
            ref: i
        })
    });
    M.displayName = "ToastActionTrigger";
    let A = (0, k.forwardRef)((e, i) => {
        let r = I(),
            s = (0, a.mergeProps)(r.getCloseTriggerProps(), e);
        return (0, t.jsx)(S.ark.button, { ...s,
            ref: i
        })
    });
    A.displayName = "ToastCloseTrigger";
    let j = e => e.children(I()),
        B = (0, k.forwardRef)((e, i) => {
            let r = I(),
                s = (0, a.mergeProps)(r.getDescriptionProps(), e);
            return (0, t.jsx)(S.ark.div, { ...s,
                ref: i
            })
        });
    B.displayName = "ToastDescription";
    let D = (0, k.forwardRef)((e, i) => {
        let r = I(),
            s = (0, a.mergeProps)(r.getRootProps(), e);
        return (0, t.jsxs)("div", { ...s,
            ref: i,
            children: [(0, t.jsx)("div", { ...r.getGhostBeforeProps()
            }), e.children, (0, t.jsx)("div", { ...r.getGhostAfterProps()
            })]
        })
    });
    D.displayName = "ToastRoot";
    let F = (0, k.forwardRef)((e, i) => {
        let r = I(),
            s = (0, a.mergeProps)(r.getTitleProps(), e);
        return (0, t.jsx)(S.ark.div, { ...s,
            ref: i
        })
    });
    F.displayName = "ToastTitle", e.s(["ActionTrigger", () => M, "CloseTrigger", () => A, "Context", () => j, "Description", () => B, "Root", () => D, "Title", () => F], 992944);
    var L = e.i(992944),
        L = L,
        N = e.i(664288),
        W = e.i(489198),
        H = e.i(613291);
    let {
        withProvider: V,
        withContext: _,
        useStyles: U
    } = (0, N.createSlotRecipeContext)({
        key: "toast"
    }), G = (0, W.chakra)(R, {}, {
        forwardAsChild: !0
    }), q = V(L.Root, "root", {
        forwardAsChild: !0
    }), z = _(L.CloseTrigger, "closeTrigger", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, t.jsx)(H.CloseIcon, {})
        }
    }), Z = _(L.Title, "title", {
        forwardAsChild: !0
    }), K = _(L.Description, "description", {
        forwardAsChild: !0
    }), X = _(L.ActionTrigger, "actionTrigger", {
        forwardAsChild: !0
    }), Y = {
        warning: H.WarningIcon,
        success: H.CheckCircleIcon,
        error: H.WarningIcon
    }, J = (0, k.forwardRef)(function(e, i) {
        let {
            unstyled: a,
            ...r
        } = e, s = I(), o = U(), n = Y[s.type];
        return n ? (0, t.jsx)(n, {
            ref: i,
            ...r,
            css: [a ? void 0 : o.indicator, e.css]
        }) : null
    });
    var Q = e.i(878262),
        $ = e.i(51715),
        ee = e.i(389868);
    e.s([], 448718), e.i(448718), e.s(["ActionTrigger", () => X, "CloseTrigger", () => z, "Description", () => K, "Indicator", () => J, "Root", () => q, "Title", () => Z], 307568);
    var et = e.i(307568),
        et = et,
        ei = e.i(469562);
    let ea = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {
                placement: "bottom",
                overlap: !1,
                max: 24,
                gap: 16,
                offsets: "1rem",
                hotkey: ["altKey", "KeyT"],
                removeDelay: 200,
                pauseOnPageIdle: !0,
                ...(0, n.compact)(e)
            },
            i = [],
            a = [],
            r = new Set,
            s = [],
            o = e => (i.forEach(t => t(e)), e),
            l = e => {
                var i, l;
                let d = null != (i = e.id) ? i : "toast:".concat((0, n.uuid)()),
                    c = a.find(e => e.id === d);
                return (r.has(d) && r.delete(d), c) ? a = a.map(t => t.id === d ? o({ ...t,
                    ...e,
                    id: d
                }) : t) : (l = {
                    id: d,
                    duration: t.duration,
                    removeDelay: t.removeDelay,
                    type: "info",
                    ...e,
                    stacked: !t.overlap,
                    gap: t.gap
                }, a.length >= t.max ? s.push(l) : (o(l), a.unshift(l))), d
            },
            d = e => {
                if (r.add(e), e)
                    for (i.forEach(t => t({
                            id: e,
                            dismiss: !0
                        })), a = a.filter(t => t.id !== e); s.length > 0 && a.length < t.max;) {
                        let e = s.shift();
                        e && (o(e), a.unshift(e))
                    } else a.forEach(e => {
                        i.forEach(t => t({
                            id: e.id,
                            dismiss: !0
                        }))
                    }), a = [], s = [];
                return e
            };
        return {
            attrs: t,
            subscribe: e => (i.push(e), () => {
                let t = i.indexOf(e);
                i.splice(t, 1)
            }),
            create: l,
            update: (e, t) => l({
                id: e,
                ...t
            }),
            remove: d,
            dismiss: e => {
                a = null != e ? a.map(t => t.id === e ? o({ ...t,
                    message: "DISMISS"
                }) : t) : a.map(e => o({ ...e,
                    message: "DISMISS"
                }))
            },
            error: e => l({ ...e,
                type: "error"
            }),
            success: e => l({ ...e,
                type: "success"
            }),
            info: e => l({ ...e,
                type: "info"
            }),
            warning: e => l({ ...e,
                type: "warning"
            }),
            loading: e => l({ ...e,
                type: "loading"
            }),
            getVisibleToasts: () => a.filter(e => !r.has(e.id)),
            getCount: () => a.length,
            promise: function(e, t) {
                let i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t || !t.loading) return void(0, n.warn)("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");
                let r = l({ ...a,
                        ...t.loading,
                        promise: e,
                        type: "loading"
                    }),
                    s = !0,
                    o = (0, n.runIfFn)(e).then(async e => {
                        let o;
                        if (i = ["resolve", e], (o = e) && "object" == typeof o && "ok" in o && "boolean" == typeof o.ok && "status" in o && "number" == typeof o.status && !e.ok) {
                            s = !1;
                            let i = (0, n.runIfFn)(t.error, "HTTP Error! status: ".concat(e.status));
                            l({ ...a,
                                ...i,
                                id: r,
                                type: "error"
                            })
                        } else if (void 0 !== t.success) {
                            s = !1;
                            let i = (0, n.runIfFn)(t.success, e);
                            l({ ...a,
                                ...i,
                                id: r,
                                type: "success"
                            })
                        }
                    }).catch(async e => {
                        if (i = ["reject", e], void 0 !== t.error) {
                            s = !1;
                            let i = (0, n.runIfFn)(t.error, e);
                            l({ ...a,
                                ...i,
                                id: r,
                                type: "error"
                            })
                        }
                    }).finally(() => {
                        var e;
                        s && d(r), null == (e = t.finally) || e.call(t)
                    });
                return {
                    id: r,
                    unwrap: () => new Promise((e, t) => o.then(() => "reject" === i[0] ? t(i[1]) : e(i[1])).catch(t))
                }
            },
            pause: e => {
                a = null != e ? a.map(t => t.id === e ? o({ ...t,
                    message: "PAUSE"
                }) : t) : a.map(e => o({ ...e,
                    message: "PAUSE"
                }))
            },
            resume: e => {
                a = null != e ? a.map(t => t.id === e ? o({ ...t,
                    message: "RESUME"
                }) : t) : a.map(e => o({ ...e,
                    message: "RESUME"
                }))
            },
            isVisible: e => !r.has(e) && !!a.find(t => t.id === e),
            isDismissed: e => r.has(e),
            expand: () => {
                a = a.map(e => o({ ...e,
                    stacked: !0
                }))
            },
            collapse: () => {
                a = a.map(e => o({ ...e,
                    stacked: !1
                }))
            }
        }
    }({
        placement: "bottom-end",
        pauseOnPageIdle: !0
    });
    e.s(["Toaster", 0, () => {
        let e = (0, ei.useColorModeValue)("gray.800", "white"),
            i = (0, ei.useColorModeValue)("gray.600", "gray.300"),
            a = (0, ei.useColorModeValue)("gray.500", "gray.400");
        return (0, t.jsx)(Q.Portal, {
            children: (0, t.jsx)(G, {
                toaster: ea,
                insetInline: {
                    mdDown: "4"
                },
                children: r => {
                    let s = r.type || "info",
                        o = {
                            success: {
                                lightBg: "rgba(240, 253, 244, 0.7)",
                                darkBg: "rgba(20, 83, 45, 0.6)",
                                lightBorder: "rgba(134, 239, 172, 0.5)",
                                darkBorder: "rgba(74, 222, 128, 0.3)",
                                iconColor: "green.500"
                            },
                            error: {
                                lightBg: "rgba(254, 242, 242, 0.7)",
                                darkBg: "rgba(127, 29, 29, 0.6)",
                                lightBorder: "rgba(252, 165, 165, 0.5)",
                                darkBorder: "rgba(248, 113, 113, 0.3)",
                                iconColor: "red.500"
                            },
                            warning: {
                                lightBg: "rgba(255, 251, 235, 0.7)",
                                darkBg: "rgba(120, 53, 15, 0.6)",
                                lightBorder: "rgba(252, 211, 77, 0.5)",
                                darkBorder: "rgba(245, 158, 11, 0.3)",
                                iconColor: "orange.500"
                            },
                            info: {
                                lightBg: "rgba(239, 246, 255, 0.7)",
                                darkBg: "rgba(30, 58, 138, 0.6)",
                                lightBorder: "rgba(147, 197, 253, 0.5)",
                                darkBorder: "rgba(96, 165, 250, 0.3)",
                                iconColor: "blue.500"
                            },
                            loading: {
                                lightBg: "rgba(255, 255, 255, 0.7)",
                                darkBg: "rgba(24, 24, 27, 0.6)",
                                lightBorder: "rgba(228, 228, 231, 0.5)",
                                darkBorder: "rgba(82, 82, 91, 0.3)",
                                iconColor: "blue.500"
                            }
                        },
                        n = o[s] || o.info;
                    return (0, t.jsxs)(et.Root, {
                        width: {
                            md: "sm"
                        },
                        bg: {
                            base: n.lightBg,
                            _dark: n.darkBg
                        },
                        backdropFilter: "blur(12px)",
                        border: "1px solid",
                        borderColor: {
                            base: n.lightBorder,
                            _dark: n.darkBorder
                        },
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                        borderRadius: "xl",
                        p: 4,
                        transition: "all 0.2s",
                        children: ["loading" === r.type ? (0, t.jsx)($.Spinner, {
                            size: "sm",
                            color: n.iconColor
                        }) : (0, t.jsx)(et.Indicator, {
                            color: n.iconColor
                        }), (0, t.jsxs)(ee.Stack, {
                            gap: "1",
                            flex: "1",
                            maxWidth: "100%",
                            children: [r.title && (0, t.jsx)(et.Title, {
                                fontWeight: "semibold",
                                color: e,
                                children: r.title
                            }), r.description && (0, t.jsx)(et.Description, {
                                color: i,
                                children: r.description
                            })]
                        }), r.action && (0, t.jsx)(et.ActionTrigger, {
                            children: r.action.label
                        }), r.closable && (0, t.jsx)(et.CloseTrigger, {
                            color: a
                        })]
                    })
                }
            })
        })
    }, "toaster", 0, ea], 334863)
}, 836271, e => {
    "use strict";
    let t = {
            super_admin: ["templates.view", "templates.create", "templates.edit", "templates.delete", "templates.permissions.view", "templates.permissions.manage", "templates.publish", "pages.view", "pages.create", "pages.edit", "pages.delete", "audio.view", "audio.manage", "feedback.view", "feedback.manage", "notifications.view", "notifications.manage", "videos.view", "videos.manage", "orders.view", "orders.manage", "billing.view", "billing.manage", "plans.view", "plans.manage", "promotions.view", "promotions.manage", "design-requests.view", "design-requests.manage", "referrals.view", "referrals.manage", "product-affiliates.view", "product-affiliates.manage", "agents.view", "agents.manage", "bill-export.view", "bill-export.manage", "admin-templates.view", "admin-templates.manage", "users.view", "users.manage", "moderators.view", "moderators.manage", "blogs.view", "blogs.manage", "plan-templates.view", "plan-templates.manage"],
            admin: ["templates.view", "templates.create", "templates.edit", "templates.delete", "templates.permissions.view", "templates.permissions.manage", "templates.publish", "pages.view", "pages.create", "pages.edit", "pages.delete", "audio.view", "audio.manage", "feedback.view", "feedback.manage", "notifications.view", "notifications.manage", "videos.view", "videos.manage", "orders.view", "orders.manage", "billing.view", "billing.manage", "plans.view", "plans.manage", "promotions.view", "promotions.manage", "design-requests.view", "design-requests.manage", "referrals.view", "referrals.manage", "product-affiliates.view", "product-affiliates.manage", "agents.view", "agents.manage", "bill-export.view", "bill-export.manage", "admin-templates.view", "admin-templates.manage", "users.view", "users.manage", "moderators.view", "moderators.manage", "blogs.view", "blogs.manage", "plan-templates.view", "plan-templates.manage"],
            mod: ["templates.view", "templates.edit", "pages.view", "pages.manage", "design-requests.view", "design-requests.manage"],
            "mod-template": ["templates.view", "templates.edit"],
            "mod-accountant": ["orders.view", "bill-export.view", "bill-export.manage"],
            agent: [],
            user: []
        },
        i = (e, i) => (t[e] || []).includes(i),
        a = new Set(["admin", "super_admin", "mod", "mod-template", "mod-accountant"]),
        r = new Set(["mod", "mod-template"]),
        s = new Set(["admin", "super_admin", "mod", "mod-template"]),
        o = e => e ? i(e, "templates.view") ? "/admin" : i(e, "orders.view") ? "/admin/orders" : i(e, "bill-export.view") ? "/admin/bill-export" : "/" : "/";
    e.s(["canAccessAdmin", 0, e => !!e && !!e.user && a.has(e.user.role), "canAccessAgent", 0, e => !!e && !!e.user && "agent" === e.user.role, "getAdminLandingPath", 0, e => {
        var t;
        return o(null == e || null == (t = e.user) ? void 0 : t.role)
    }, "getAdminLandingPathForRole", 0, o, "hasAdminPermission", 0, (e, t) => !!e && !!e.user && i(e.user.role, t), "isAdmin", 0, e => !!e && !!e.user && a.has(e.user.role), "isAuthenticated", 0, e => !!(e && e.accessToken && e.user), "isFeatureLockBypassRole", 0, e => !!e && s.has(e), "isTemplateModeratorRole", 0, e => !!e && r.has(e)], 836271)
}]);

//# debugId=375c0c1b-2017-f933-9a48-8247c23f4673
//# sourceMappingURL=1372f28bdb47fbac.js.map