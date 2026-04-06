;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "8bb8ecfe-45b4-9d9c-4cd4-8dfea0fc0f14")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 240938, e => {
    "use strict";
    var t = e.i(251570);

    function r(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            o = (0, t.useRef)(() => {
                throw Error("Cannot call an event handler while rendering.")
            });
        return (0, t.useInsertionEffect)(() => {
            o.current = e
        }), (0, t.useCallback)(function() {
            for (var e, t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
            return null == (e = o.current) ? void 0 : e.call(o, ...r)
        }, r)
    }
    e.s(["useCallbackRef", () => r])
}, 643736, e => {
    "use strict";
    var t = e.i(13484),
        r = e.i(251570),
        o = e.i(240938);

    function a(e, a) {
        let i = (0, t.useChakraContext)().normalizeValue(e),
            n = function() {
                var e, a;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i.fallback || (i.fallback = "base");
                let n = (0, t.useChakraContext)(),
                    l = !1,
                    s = n.breakpoints.values.map(e => {
                        let {
                            min: t,
                            name: r
                        } = e, o = {
                            breakpoint: r,
                            query: "(min-width: ".concat(t, ")"),
                            fallback: !l
                        };
                        return r === i.fallback && (l = !0), o
                    }).filter(e => {
                        var t;
                        let {
                            breakpoint: r
                        } = e;
                        return !!(null == (t = i.breakpoints) ? void 0 : t.includes(r))
                    }),
                    d = s.map(e => {
                        let {
                            fallback: t
                        } = e;
                        return t
                    }),
                    u = (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                fallback: a = [],
                                ssr: i = !0,
                                getWindow: n
                            } = t,
                            l = (0, o.useCallbackRef)(n),
                            s = Array.isArray(e) ? e : [e],
                            d = null == a ? void 0 : a.filter(e => null != e),
                            [u, c] = (0, r.useState)(() => s.map((e, t) => {
                                if (!i) {
                                    var r;
                                    let {
                                        media: t,
                                        matches: o
                                    } = (null != (r = null == n ? void 0 : n()) ? r : window).matchMedia(e);
                                    return {
                                        media: t,
                                        matches: o
                                    }
                                }
                                return {
                                    media: e,
                                    matches: !!d[t]
                                }
                            }));
                        return (0, r.useEffect)(() => {
                            var e;
                            let t = null != (e = l()) ? e : window;
                            c(e => {
                                let r = s.map(e => {
                                    let {
                                        media: r,
                                        matches: o
                                    } = t.matchMedia(e);
                                    return {
                                        media: r,
                                        matches: o
                                    }
                                });
                                return e.every((e, t) => e.matches === r[t].matches && e.media === r[t].media) ? e : r
                            });
                            let r = s.map(e => t.matchMedia(e)),
                                o = e => {
                                    c(t => t.slice().map(t => t.media === e.media ? { ...t,
                                        matches: e.matches
                                    } : t))
                                },
                                a = r.map(e => (function(e, t) {
                                    try {
                                        return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                                    } catch (r) {
                                        return e.addListener(t), () => e.removeListener(t)
                                    }
                                })(e, o));
                            return () => a.forEach(e => e())
                        }, [l]), u.map(e => e.matches)
                    })(s.map(e => e.query), {
                        fallback: d,
                        ssr: i.ssr
                    }).lastIndexOf(!0);
                return null != (a = null == (e = s[u]) ? void 0 : e.breakpoint) ? a : i.fallback
            }({
                breakpoints: Object.keys(i),
                ...a
            });
        return i[n]
    }
    e.s(["useBreakpointValue", () => a], 643736)
}, 907493, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        o = e.i(285281),
        a = e.i(489198),
        i = e.i(87065),
        n = e.i(855404),
        l = e.i(792506);
    let {
        useRecipeResult: s,
        PropsProvider: d
    } = (0, o.createRecipeContext)({
        key: "separator"
    }), u = (0, r.forwardRef)(function(e, r) {
        let {
            styles: o,
            className: d,
            props: u
        } = s(e), c = e.orientation || "horizontal";
        return (0, t.jsx)(a.chakra.span, {
            ref: r,
            role: (0, n.isString)(c) ? "separator" : "presentation",
            "aria-orientation": (0, n.isString)(c) ? c : void 0,
            ...(0, l.omit)(u, ["orientation"]),
            className: (0, i.cx)(d, e.className),
            css: [o, e.css]
        })
    });
    u.displayName = "Separator", e.s(["Separator", () => u])
}, 523789, e => {
    "use strict";
    let t = /^(.+)-(full|medium|preview)\.webp$/i,
        r = /^(.+)-(full|medium|preview|favicon)(\.[a-z0-9]+)([?#].*)?$/i,
        o = /^(\d+(?:\.\d+)?)(px)?$/i,
        a = e => {
            if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : null;
            if ("string" != typeof e) return null;
            let t = e.trim().toLowerCase();
            if (!t || "auto" === t || t.includes("%") || t.includes("calc(")) return null;
            let r = t.match(o);
            if (!r) return null;
            let a = Number.parseFloat(r[1]);
            return Number.isFinite(a) && a > 0 ? a : null
        },
        i = function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "full";
            if (!e) return e;
            let o = e.match(t);
            if (o) {
                let e = o[1];
                return "".concat(e).concat("full" === r ? "-full" : "medium" === r ? "-medium" : "-preview", ".webp")
            }
            return e.match(/^(.+)\.webp$/i), e
        },
        n = async e => {
            if (e.startsWith("data:")) return e;
            try {
                let t = await fetch(e, {
                    mode: "cors",
                    credentials: "omit"
                });
                if (!t.ok) throw Error("Failed to fetch image: ".concat(t.statusText));
                let r = await t.blob();
                return new Promise((e, t) => {
                    let o = new FileReader;
                    o.onloadend = () => {
                        e(o.result)
                    }, o.onerror = t, o.readAsDataURL(r)
                })
            } catch (t) {
                return e
            }
        };
    e.s(["getImageUrlWithSize", 0, i, "loadImageWithCORS", 0, n, "resolveFaviconUrl", 0, e => {
        if (!e) return e;
        let t = e.match(r);
        if (t) {
            let [, r, o, a, i = ""] = t;
            return "favicon" === o.toLowerCase() ? e : "".concat(r, "-preview").concat(a).concat(i)
        }
        return i(e, "preview")
    }, "resolvePublicImageUrl", 0, (e, t) => {
        let r, o;
        if (!e) return e;
        let n = t.forceFull ? "full" : t.isThumbnail100 ? "preview" : t.isMobile ? (r = a(t.elementWidth), o = a(t.elementHeight), null === r || null === o ? "full" : r * o <= 16e4 ? "medium" : "full") : "full";
        return "full" === n ? i(e, "full") : i(e, n)
    }, "toSettingsPreviewUrl", 0, e => i(e, "preview")])
}, 343207, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        o = e.i(940948),
        a = e.i(649725),
        i = e.i(334863);
    let n = {
            all: ["photoStorage"],
            packages: () => [...n.all, "packages"],
            myStorage: () => [...n.all, "myStorage"],
            mySubscriptions: (e, t) => [...n.all, "mySubscriptions", e, t],
            adminPackages: () => [...n.all, "admin", "packages"],
            adminSubscriptions: (e, t) => [...n.all, "admin", "subscriptions", e, t]
        },
        l = async () => (await a.default.get("/photo-storage/packages")).data.data,
        s = async () => (await a.default.get("/photo-storage/my-storage")).data.data,
        d = async () => (await a.default.get("/admin/photo-storage/catalog")).data.data,
        u = async e => (await a.default.post("/admin/photo-storage/catalog", e)).data.data,
        c = async (e, t) => (await a.default.put("/admin/photo-storage/catalog/".concat(e), t)).data.data,
        g = async e => {
            await a.default.delete("/admin/photo-storage/catalog/".concat(e))
        };
    e.s(["PHOTO_STORAGE_QUERY_KEYS", 0, n, "useCreatePhotoStoragePackage", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: u,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: n.adminPackages()
                }), e.invalidateQueries({
                    queryKey: n.packages()
                }), i.toaster.create({
                    title: "Thành công",
                    description: "Tạo gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t, r, o, a;
                let n = (null == (t = e.response) ? void 0 : t.status) === 400 && (null == (a = e.response) || null == (o = a.data) || null == (r = o.message) ? void 0 : r.includes("đã tồn tại")) ? "Tên gói đã tồn tại. Vui lòng chọn tên khác." : "Có lỗi xảy ra khi tạo gói lưu trữ";
                i.toaster.create({
                    title: "Lỗi",
                    description: n,
                    type: "error"
                })
            }
        })
    }, "useDeletePhotoStoragePackage", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: g,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: n.adminPackages()
                }), e.invalidateQueries({
                    queryKey: n.packages()
                }), i.toaster.create({
                    title: "Thành công",
                    description: "Xóa gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: () => {
                i.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi xóa gói lưu trữ",
                    type: "error"
                })
            }
        })
    }, "useGetAllPhotoStoragePackages", 0, () => (0, r.useQuery)({
        queryKey: n.adminPackages(),
        queryFn: d,
        staleTime: 3e5
    }), "useGetMyStorage", 0, () => (0, r.useQuery)({
        queryKey: n.myStorage(),
        queryFn: s,
        staleTime: 6e4
    }), "useGetPhotoStoragePackages", 0, () => (0, r.useQuery)({
        queryKey: n.packages(),
        queryFn: l,
        staleTime: 3e5
    }), "useUpdatePhotoStoragePackage", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    id: t,
                    data: r
                } = e;
                return c(t, r)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: n.adminPackages()
                }), e.invalidateQueries({
                    queryKey: n.packages()
                }), i.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t, r, o, a;
                let n = (null == (t = e.response) ? void 0 : t.status) === 400 && (null == (a = e.response) || null == (o = a.data) || null == (r = o.message) ? void 0 : r.includes("đã tồn tại")) ? "Tên gói đã tồn tại. Vui lòng chọn tên khác." : "Có lỗi xảy ra khi cập nhật gói lưu trữ";
                i.toaster.create({
                    title: "Lỗi",
                    description: n,
                    type: "error"
                })
            }
        })
    }])
}, 676525, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        o = e.i(469562),
        a = e.i(494114);
    let i = r.default.forwardRef((e, r) => {
        let {
            variant: i = "fill",
            size: n = "large",
            children: l,
            icon: s,
            onClick: d,
            disabled: u = !1,
            className: c = "",
            type: g = "button",
            colorScheme: p,
            loading: h,
            customBg: b,
            customHoverBg: m,
            customTextColor: y,
            customBorderRadius: f,
            ...v
        } = e, {
            colorMode: x
        } = (0, o.useColorMode)(), w = "dark" === x, S = {};
        return b && (S.backgroundColor = b), y && (S.color = y), f && (S.borderRadius = f), (0, t.jsxs)("button", {
            ref: r,
            className: "".concat("relative cursor-pointer rounded-xl inline-flex items-center justify-center font-inter transition-colors", " ").concat({
                small: "px-4 py-1 text-sm font-normal rounded-lg",
                large: "px-6 py-2 text-xs sm:text-base font-medium rounded-xl",
                sm: "px-3 py-1.5  sm:text-xs font-normal rounded-lg"
            }[n], " ").concat(b ? "" : (w ? {
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
            })[i], " ").concat(c, " ").concat(u ? "opacity-50 cursor-not-allowed" : ""),
            onClick: u ? void 0 : d,
            disabled: u,
            type: g,
            style: S,
            onMouseEnter: e => {
                !u && m && (e.currentTarget.style.backgroundColor = m)
            },
            onMouseLeave: e => {
                !u && b && (e.currentTarget.style.backgroundColor = b)
            },
            ...v,
            children: [s && (0, t.jsx)("span", {
                className: "".concat({
                    small: "w-4 h-4 mr-2",
                    large: "w-3.5 h-4 mr-3",
                    sm: "w-3 h-3 mr-1.5"
                }[n], " ").concat((w ? {
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
                })[i], " flex items - center justify - center"),
                children: s
            }), (0, t.jsxs)("span", {
                className: "text-center",
                children: ["      ", (0, t.jsx)(a.Flex, {
                    alignItems: "center",
                    gap: 2,
                    children: l
                })]
            })]
        })
    });
    i.displayName = "Button", e.s(["default", 0, i])
}, 536072, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        o = e.i(489198);
    let a = (0, r.forwardRef)(function(e, r) {
        let {
            templateAreas: a,
            column: i,
            row: n,
            autoFlow: l,
            autoRows: s,
            templateRows: d,
            autoColumns: u,
            templateColumns: c,
            inline: g,
            ...p
        } = e;
        return (0, t.jsx)(o.chakra.div, { ...p,
            ref: r,
            css: [{
                display: g ? "inline-grid" : "grid",
                gridTemplateAreas: a,
                gridAutoColumns: u,
                gridColumn: i,
                gridRow: n,
                gridAutoFlow: l,
                gridAutoRows: s,
                gridTemplateRows: d,
                gridTemplateColumns: c
            }, e.css]
        })
    });
    a.displayName = "Grid", e.s(["Grid", () => a])
}, 649760, 870566, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(564668),
        o = e.i(791089),
        a = e.i(494114),
        i = e.i(878262);
    let n = {
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
            r = 20 - e;
        return t ? n.sectionBase + r : n.sectionContent + r
    }, "zIndex", 0, n], 870566);
    let l = e => {
        let {
            isOpen: l,
            title: s,
            onClose: d,
            children: u,
            zIndex: c = n.modal,
            maxWidth: g = "380px",
            maxHeight: p = "80vh",
            minHeight: h = "auto",
            overflowVisible: b = !1,
            showCloseButton: m = !0,
            closeOnOverlayClick: y = !0,
            mobileSheet: f = !1
        } = e;
        if (!l) return null;
        let v = "string" == typeof g ? g : "600px";
        return (0, t.jsx)(i.Portal, {
            children: (0, t.jsx)(r.Box, {
                position: "fixed",
                inset: "0",
                display: "flex",
                alignItems: f ? {
                    base: "flex-end",
                    md: "center"
                } : "center",
                justifyContent: "center",
                bg: "blackAlpha.560",
                backdropFilter: "blur(4px)",
                zIndex: c,
                onClick: e => {
                    y && e.target === e.currentTarget && d()
                },
                children: (0, t.jsxs)(r.Box, {
                    className: "animate-fade-in",
                    bg: {
                        base: "white",
                        _dark: "gray.900"
                    },
                    color: {
                        base: "gray.900",
                        _dark: "white"
                    },
                    borderRadius: f ? {
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
                    maxWidth: f ? {
                        base: "100%",
                        md: "90%"
                    } : "90%",
                    p: f ? {
                        base: 3,
                        md: 5
                    } : 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    px: f ? {
                        base: 3,
                        md: 6
                    } : 6,
                    width: f ? {
                        base: "100%",
                        md: v
                    } : g,
                    maxHeight: b ? void 0 : p,
                    minHeight: h,
                    overflowY: b ? "visible" : "auto",
                    overflowX: b ? "visible" : "hidden",
                    overflow: b ? "visible" : void 0,
                    pb: f ? "calc(env(safe-area-inset-bottom, 0px) + 8px)" : void 0,
                    children: [f && (0, t.jsx)(r.Box, {
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
                    }), (s || m) && (0, t.jsxs)(a.Flex, {
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
                        pt: f ? {
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
                        children: [(0, t.jsx)(o.Text, {
                            fontSize: {
                                base: "2xl",
                                md: "lg"
                            },
                            fontWeight: "semibold",
                            pr: 3,
                            lineHeight: "1.2",
                            children: s
                        }), m && (0, t.jsx)(r.Box, {
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
                    }), u]
                })
            })
        })
    };
    e.s(["ModalBasic", 0, l, "default", 0, l], 649760)
}, 119887, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        o = e.i(489198),
        a = e.i(87065);
    let i = (0, r.forwardRef)(function(e, r) {
        let {
            align: i,
            fit: n = "cover",
            ...l
        } = e;
        return (0, t.jsx)(o.chakra.img, {
            ref: r,
            objectFit: n,
            objectPosition: i,
            className: (0, a.cx)("chakra-image", e.className),
            ...l
        })
    });
    i.displayName = "Image", e.s(["Image", () => i])
}, 201975, 297272, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        o = e.i(940948),
        a = e.i(649725);
    let i = () => "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
        n = async e => {
            let t = await a.default.post("/billing/page-plan/orders", e, {
                headers: {
                    "Idempotency-Key": i()
                }
            });
            return t.data.data || t.data
        },
        l = async e => {
            let t = await a.default.post("/billing/feature-purchase/orders", e, {
                headers: {
                    "Idempotency-Key": i()
                }
            });
            return t.data.data || t.data
        },
        s = async e => {
            let t = await a.default.get("/billing/orders/".concat(e));
            return t.data.data || t.data
        };
    e.s(["getOrderErrorMessage", 0, e => {
        var t, r, o, a, i, n, l, s, d, u;
        let c = (null == e || null == (r = e.response) || null == (t = r.data) ? void 0 : t.errorCode) || (null == e || null == (i = e.response) || null == (a = i.data) || null == (o = a.data) ? void 0 : o.errorCode);
        return "PROMOTION_INVALID" === c ? "Mã giảm giá không hợp lệ" : "PROMOTION_NOT_FOUND" === c ? "Mã giảm giá không tồn tại" : "PROMOTION_EXPIRED" === c ? "Mã giảm giá đã hết hạn" : "PROMOTION_NOT_STARTED" === c ? "Mã giảm giá chưa đến thời gian áp dụng" : "PROMOTION_MAX_REDEMPTIONS_REACHED" === c ? "Mã giảm giá đã hết lượt sử dụng" : "PROMOTION_USER_LIMIT_REACHED" === c ? "Bạn đã vượt quá số lần sử dụng mã này" : "PROMOTION_MIN_SUBTOTAL_NOT_MET" === c ? "Đơn hàng chưa đạt giá trị tối thiểu để áp dụng mã" : "PROMOTION_NOT_APPLICABLE" === c ? "Mã giảm giá không áp dụng cho đơn hàng này" : (null == e || null == (n = e.response) ? void 0 : n.status) === 404 ? "Plan not found. Please refresh and try again." : (null == e || null == (l = e.response) ? void 0 : l.status) === 400 ? "Invalid request. Please check your input." : (null == e || null == (s = e.response) ? void 0 : s.status) === 409 ? "Duplicate order detected. Please check your existing orders." : (null == e || null == (d = e.response) ? void 0 : d.status) === 401 ? "Authentication required. Please log in again." : (null == e || null == (u = e.response) ? void 0 : u.status) === 403 ? "Permission denied. Please check your account status." : (null == e ? void 0 : e.message) || "An unexpected error occurred. Please try again."
    }, "useCreateFeatureOrder", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: l,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: ["user-features"]
                }), e.invalidateQueries({
                    queryKey: ["billing-features"]
                })
            }
        })
    }, "useCreatePagePlanOrder", 0, () => {
        let e = (0, o.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: n,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: ["currentSubscription"]
                }), e.invalidateQueries({
                    queryKey: ["plans"]
                })
            }
        })
    }, "useGetOrderDetails", 0, e => (0, r.useQuery)({
        queryKey: ["orderDetails", e],
        queryFn: () => e ? s(e) : Promise.reject("No order ID"),
        enabled: !!e,
        refetchInterval: e => {
            let t = e.state.data;
            return (null == t ? void 0 : t.status) !== "paid" && (null == t ? void 0 : t.status) !== "failed" && (null == t ? void 0 : t.status) !== "canceled" && 2e3
        }
    })], 201975);
    var d = e.i(334863);
    e.i(308972);
    var u = e.i(445979);
    e.s(["usePaymentNotifications", 0, () => {
        let {
            t: e
        } = (0, u.useTranslation)();
        return {
            showOrderCreated: () => {
                queueMicrotask(() => {
                    d.toaster.create({
                        title: e("pageSlot.notifications.orderCreated.title"),
                        description: e("pageSlot.notifications.orderCreated.description"),
                        type: "info",
                        duration: 5e3
                    })
                })
            },
            showPaymentSuccess: () => {
                queueMicrotask(() => {
                    d.toaster.create({
                        title: e("pageSlot.notifications.paymentSuccess.title"),
                        description: e("pageSlot.notifications.paymentSuccess.description"),
                        type: "success",
                        duration: 5e3
                    })
                })
            },
            showPaymentFailed: t => {
                queueMicrotask(() => {
                    d.toaster.create({
                        title: e("pageSlot.notifications.paymentFailed.title"),
                        description: t || e("pageSlot.notifications.paymentFailed.description"),
                        type: "error",
                        duration: 7e3
                    })
                })
            },
            showOrderError: t => {
                queueMicrotask(() => {
                    d.toaster.create({
                        title: e("pageSlot.notifications.orderError.title"),
                        description: t,
                        type: "error",
                        duration: 7e3
                    })
                })
            }
        }
    }], 297272)
}, 79663, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        o = e.i(649725),
        a = e.i(391265),
        i = e.i(813753);
    let n = {
            currentSubscription: ["billing", "currentSubscription"]
        },
        l = async () => {
            let e = await o.default.get("/pages/subscription");
            return e.data.data.subscription || e.data.subscription
        },
        s = async e => {
            let t = await o.default.post("/billing/photo-storage/orders", e);
            return t.data.data || t.data
        };
    e.s(["BILLING_QUERY_KEYS", 0, n, "useCreatePhotoStorageOrder", 0, () => (0, t.useMutation)({
        mutationFn: s
    }), "useGetCurrentSubscription", 0, () => {
        let e = (0, a.useSelector)(i.selectAuth);
        return (0, r.useQuery)({
            queryKey: n.currentSubscription,
            queryFn: l,
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
        useStyles: o,
        PropsProvider: a
    } = (0, e.i(664288).createSlotRecipeContext)({
        key: "card"
    }), i = t("div", "root"), n = r("div", "body"), l = r("div", "header"), s = r("div", "footer"), d = r("h3", "title"), u = r("p", "description");
    e.s(["Body", () => n, "Description", () => u, "Footer", () => s, "Header", () => l, "PropsProvider", () => a, "Root", () => i, "Title", () => d], 362719);
    var c = e.i(362719);
    e.s(["Card", 0, c], 478062)
}, 162234, e => {
    "use strict";
    e.s([], 786692), e.i(786692);
    var t = e.i(483632),
        r = e.i(251570),
        o = e.i(820512),
        a = e.i(664288),
        i = e.i(489198),
        n = e.i(613291);
    let [l, s] = (0, o.createContext)({
        name: "AlertStatusContext",
        hookName: "useAlertStatusContext",
        providerName: "<Alert />"
    }), {
        withProvider: d,
        withContext: u,
        useStyles: c,
        PropsProvider: g
    } = (0, a.createSlotRecipeContext)({
        key: "alert"
    }), p = d("div", "root", {
        forwardAsChild: !0,
        wrapElement: (e, r) => (0, t.jsx)(l, {
            value: {
                status: r.status || "info"
            },
            children: e
        })
    }), h = u("div", "title"), b = u("div", "description"), m = u("div", "content"), y = {
        info: n.InfoIcon,
        warning: n.WarningIcon,
        success: n.CheckCircleIcon,
        error: n.WarningIcon,
        neutral: n.InfoIcon
    }, f = (0, r.forwardRef)(function(e, o) {
        let a = s(),
            n = c(),
            l = "string" == typeof a.status ? y[a.status] : r.Fragment,
            {
                children: d = (0, t.jsx)(l, {}),
                ...u
            } = e;
        return (0, t.jsx)(i.chakra.span, {
            ref: o,
            ...u,
            css: [n.indicator, e.css],
            children: d
        })
    });
    e.s(["Content", () => m, "Description", () => b, "Indicator", () => f, "Root", () => p, "RootPropsProvider", () => g, "Title", () => h], 784220);
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
        o = function() {
            return (o = Object.assign || function(e) {
                for (var t, r = 1, o = arguments.length; r < o; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        },
        a = "Pixel",
        i = "Percent",
        n = {
            unit: i,
            value: .8
        };

    function l(e) {
        return "number" == typeof e ? {
            unit: i,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: a,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: i,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), n) : (console.warn("scrollThreshold should be string or number"), n)
    }
    var s = function(e) {
        function i() {
            this.constructor = n
        }

        function n(t) {
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
            }, r.throttledOnScrollListener = (function(e, t, r, o) {
                var a, i = !1,
                    n = 0;

                function l() {
                    a && clearTimeout(a)
                }

                function s() {
                    var s = this,
                        d = Date.now() - n,
                        u = arguments;

                    function c() {
                        n = Date.now(), r.apply(s, u)
                    }
                    i || (o && !a && c(), l(), void 0 === o && d > e ? c() : !0 !== t && (a = setTimeout(o ? function() {
                        a = void 0
                    } : c, void 0 === o ? e - d : e)))
                }
                return "boolean" != typeof t && (o = r, r = t, t = void 0), s.cancel = function() {
                    l(), i = !0
                }, s
            })(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
        }
        return r(n, e), n.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i), n.prototype.componentDidMount = function() {
            if (void 0 === this.props.dataLength) throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
            if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
        }, n.prototype.componentWillUnmount = function() {
            this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
        }, n.prototype.componentDidUpdate = function(e) {
            this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                showLoader: !1
            }))
        }, n.getDerivedStateFromProps = function(e, t) {
            return e.dataLength !== t.prevDataLength ? o(o({}, t), {
                prevDataLength: e.dataLength
            }) : null
        }, n.prototype.isElementAtTop = function(e, t) {
            void 0 === t && (t = .8);
            var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                o = l(t);
            return o.unit === a ? e.scrollTop <= o.value + r - e.scrollHeight + 1 : e.scrollTop <= o.value / 100 + r - e.scrollHeight + 1
        }, n.prototype.isElementAtBottom = function(e, t) {
            void 0 === t && (t = .8);
            var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                o = l(t);
            return o.unit === a ? e.scrollTop + r >= e.scrollHeight - o.value : e.scrollTop + r >= o.value / 100 * e.scrollHeight
        }, n.prototype.render = function() {
            var e = this,
                r = o({
                    height: this.props.height || "auto",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch"
                }, this.props.style),
                a = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                i = this.props.pullDownToRefresh && this.props.height ? {
                    overflow: "auto"
                } : {};
            return t.default.createElement("div", {
                style: i,
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
            }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !a && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
        }, n
    }(t.Component);
    e.s(["default", 0, s])
}]);

//# debugId=8bb8ecfe-45b4-9d9c-4cd4-8dfea0fc0f14
//# sourceMappingURL=43681359140790d8.js.map