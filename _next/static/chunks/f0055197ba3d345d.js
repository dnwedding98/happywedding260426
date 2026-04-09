;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "2454c64d-f997-5f07-256e-8588de141ea1")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 634378, e => {
    "use strict";
    var t = e.i(483632);
    e.s([], 960896), e.i(960896);
    let [r, a] = (0, e.i(483591).createContext)({
        name: "SwitchContext",
        hookName: "useSwitchContext",
        providerName: "<SwitchProvider />"
    }), i = e => e.children(a());
    var n = e.i(30500),
        s = e.i(251570),
        l = e.i(173614);
    let o = (0, s.forwardRef)((e, r) => {
        let i = a(),
            s = (0, n.mergeProps)(i.getControlProps(), e);
        return (0, t.jsx)(l.ark.span, { ...s,
            ref: r
        })
    });
    o.displayName = "SwitchControl";
    var u = e.i(416574);
    let d = (0, s.forwardRef)((e, r) => {
        let i = a(),
            s = (0, n.mergeProps)(i.getHiddenInputProps(), e),
            o = (0, u.useFieldContext)();
        return (0, t.jsx)(l.ark.input, {
            "aria-describedby": null == o ? void 0 : o.ariaDescribedby,
            ...s,
            ref: r
        })
    });
    d.displayName = "SwitchHiddenInput";
    let c = (0, s.forwardRef)((e, r) => {
        let i = a(),
            s = (0, n.mergeProps)(i.getLabelProps(), e);
        return (0, t.jsx)(l.ark.span, { ...s,
            ref: r
        })
    });
    c.displayName = "SwitchLabel";
    var p = e.i(341061),
        h = e.i(501829),
        g = e.i(727618),
        m = e.i(520036),
        y = e.i(904849);
    let f = (0, p.createSplitProps)(),
        b = (0, s.forwardRef)((e, a) => {
            let [i, o] = f(e, ["checked", "defaultChecked", "disabled", "form", "id", "ids", "invalid", "label", "name", "onCheckedChange", "readOnly", "required", "value"]), d = (e => {
                let t = (0, s.useId)(),
                    {
                        getRootNode: r
                    } = (0, m.useEnvironmentContext)(),
                    {
                        dir: a
                    } = (0, y.useLocaleContext)(),
                    i = (0, u.useFieldContext)(),
                    n = {
                        id: t,
                        ids: {
                            label: null == i ? void 0 : i.ids.label,
                            hiddenInput: null == i ? void 0 : i.ids.control
                        },
                        dir: a,
                        disabled: null == i ? void 0 : i.disabled,
                        readOnly: null == i ? void 0 : i.readOnly,
                        invalid: null == i ? void 0 : i.invalid,
                        required: null == i ? void 0 : i.required,
                        getRootNode: r,
                        ...e
                    },
                    l = (0, h.useMachine)(g.machine, n);
                return g.connect(l, h.normalizeProps)
            })(i), c = (0, n.mergeProps)(d.getRootProps(), o);
            return (0, t.jsx)(r, {
                value: d,
                children: (0, t.jsx)(l.ark.label, { ...c,
                    ref: a
                })
            })
        });
    b.displayName = "SwitchRoot";
    let v = (0, p.createSplitProps)(),
        _ = (0, s.forwardRef)((e, a) => {
            let [{
                value: i
            }, s] = v(e, ["value"]), o = (0, n.mergeProps)(i.getRootProps(), s);
            return (0, t.jsx)(r, {
                value: i,
                children: (0, t.jsx)(l.ark.label, { ...o,
                    ref: a
                })
            })
        });
    _.displayName = "SwitchRootProvider";
    let S = (0, s.forwardRef)((e, r) => {
        let i = a(),
            s = (0, n.mergeProps)(i.getThumbProps(), e);
        return (0, t.jsx)(l.ark.span, { ...s,
            ref: r
        })
    });
    S.displayName = "SwitchThumb", e.s(["Context", () => i, "Control", () => o, "HiddenInput", () => d, "Label", () => c, "Root", () => b, "RootProvider", () => _, "Thumb", () => S], 402905);
    var C = e.i(402905),
        C = C,
        E = e.i(664288),
        x = e.i(489198),
        w = e.i(170905);
    let {
        withProvider: T,
        withContext: F,
        useStyles: P,
        PropsProvider: k
    } = (0, E.createSlotRecipeContext)({
        key: "switch"
    }), A = T(C.RootProvider, "root", {
        forwardAsChild: !0
    }), U = T(C.Root, "root", {
        forwardAsChild: !0
    }), R = F(C.Label, "label", {
        forwardAsChild: !0
    }), I = F(C.Thumb, "thumb", {
        forwardAsChild: !0
    }), O = F(C.Control, "control", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, t.jsx)(I, {})
        }
    }), M = (0, s.forwardRef)(function(e, r) {
        let i = a(),
            n = P(),
            {
                fallback: s,
                children: l,
                unstyled: o,
                ...u
            } = e;
        return (0, t.jsx)(x.chakra.span, {
            ref: r,
            "data-checked": (0, w.dataAttr)(i.checked),
            ...u,
            css: [o ? void 0 : n.indicator, e.css],
            children: i.checked ? l : s
        })
    }), j = (0, s.forwardRef)(function(e, r) {
        let i = a(),
            {
                fallback: n,
                children: s,
                ...l
            } = e;
        return (0, t.jsx)(x.chakra.span, {
            ref: r,
            "data-checked": (0, w.dataAttr)(i.checked),
            ...l,
            children: i.checked ? s : n
        })
    }), N = C.Context, L = C.HiddenInput;
    e.s(["SwitchContext", () => N, "SwitchControl", () => O, "SwitchHiddenInput", () => L, "SwitchIndicator", () => M, "SwitchLabel", () => R, "SwitchPropsProvider", () => k, "SwitchRoot", () => U, "SwitchRootProvider", () => A, "SwitchThumb", () => I, "SwitchThumbIndicator", () => j], 634378)
}, 370442, e => {
    "use strict";
    e.s([], 193499), e.i(193499);
    var t = e.i(634378);
    e.s(["Context", () => t.SwitchContext, "Control", () => t.SwitchControl, "HiddenInput", () => t.SwitchHiddenInput, "Indicator", () => t.SwitchIndicator, "Label", () => t.SwitchLabel, "PropsProvider", () => t.SwitchPropsProvider, "Root", () => t.SwitchRoot, "RootProvider", () => t.SwitchRootProvider, "Thumb", () => t.SwitchThumb, "ThumbIndicator", () => t.SwitchThumbIndicator], 661102);
    var r = e.i(661102);
    e.s(["Switch", 0, r], 370442)
}, 907493, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        a = e.i(285281),
        i = e.i(489198),
        n = e.i(87065),
        s = e.i(855404),
        l = e.i(792506);
    let {
        useRecipeResult: o,
        PropsProvider: u
    } = (0, a.createRecipeContext)({
        key: "separator"
    }), d = (0, r.forwardRef)(function(e, r) {
        let {
            styles: a,
            className: u,
            props: d
        } = o(e), c = e.orientation || "horizontal";
        return (0, t.jsx)(i.chakra.span, {
            ref: r,
            role: (0, s.isString)(c) ? "separator" : "presentation",
            "aria-orientation": (0, s.isString)(c) ? c : void 0,
            ...(0, l.omit)(d, ["orientation"]),
            className: (0, n.cx)(u, e.className),
            css: [a, e.css]
        })
    });
    d.displayName = "Separator", e.s(["Separator", () => d])
}, 523789, e => {
    "use strict";
    let t = /^(.+)-(full|medium|preview)\.webp$/i,
        r = /^(.+)-(full|medium|preview|favicon)(\.[a-z0-9]+)([?#].*)?$/i,
        a = /^(\d+(?:\.\d+)?)(px)?$/i,
        i = e => {
            if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : null;
            if ("string" != typeof e) return null;
            let t = e.trim().toLowerCase();
            if (!t || "auto" === t || t.includes("%") || t.includes("calc(")) return null;
            let r = t.match(a);
            if (!r) return null;
            let i = Number.parseFloat(r[1]);
            return Number.isFinite(i) && i > 0 ? i : null
        },
        n = function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "full";
            if (!e) return e;
            let a = e.match(t);
            if (a) {
                let e = a[1];
                return "".concat(e).concat("full" === r ? "-full" : "medium" === r ? "-medium" : "-preview", ".webp")
            }
            return e.match(/^(.+)\.webp$/i), e
        },
        s = async e => {
            if (e.startsWith("data:")) return e;
            try {
                let t = await fetch(e, {
                    mode: "cors",
                    credentials: "omit"
                });
                if (!t.ok) throw Error("Failed to fetch image: ".concat(t.statusText));
                let r = await t.blob();
                return new Promise((e, t) => {
                    let a = new FileReader;
                    a.onloadend = () => {
                        e(a.result)
                    }, a.onerror = t, a.readAsDataURL(r)
                })
            } catch (t) {
                return e
            }
        };
    e.s(["getImageUrlWithSize", 0, n, "loadImageWithCORS", 0, s, "resolveFaviconUrl", 0, e => {
        if (!e) return e;
        let t = e.match(r);
        if (t) {
            let [, r, a, i, n = ""] = t;
            return "favicon" === a.toLowerCase() ? e : "".concat(r, "-preview").concat(i).concat(n)
        }
        return n(e, "preview")
    }, "resolvePublicImageUrl", 0, (e, t) => {
        let r, a;
        if (!e) return e;
        let s = t.forceFull ? "full" : t.isThumbnail100 ? "preview" : t.isMobile ? (r = i(t.elementWidth), a = i(t.elementHeight), null === r || null === a ? "full" : r * a <= 16e4 ? "medium" : "full") : "full";
        return "full" === s ? n(e, "full") : n(e, s)
    }, "toSettingsPreviewUrl", 0, e => n(e, "preview")])
}, 343207, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        i = e.i(649725),
        n = e.i(334863);
    let s = {
            all: ["photoStorage"],
            packages: () => [...s.all, "packages"],
            myStorage: () => [...s.all, "myStorage"],
            mySubscriptions: (e, t) => [...s.all, "mySubscriptions", e, t],
            adminPackages: () => [...s.all, "admin", "packages"],
            adminSubscriptions: (e, t) => [...s.all, "admin", "subscriptions", e, t]
        },
        l = async () => (await i.default.get("/photo-storage/packages")).data.data,
        o = async () => (await i.default.get("/photo-storage/my-storage")).data.data,
        u = async () => (await i.default.get("/admin/photo-storage/catalog")).data.data,
        d = async e => (await i.default.post("/admin/photo-storage/catalog", e)).data.data,
        c = async (e, t) => (await i.default.put("/admin/photo-storage/catalog/".concat(e), t)).data.data,
        p = async e => {
            await i.default.delete("/admin/photo-storage/catalog/".concat(e))
        };
    e.s(["PHOTO_STORAGE_QUERY_KEYS", 0, s, "useCreatePhotoStoragePackage", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: d,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: s.adminPackages()
                }), e.invalidateQueries({
                    queryKey: s.packages()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Tạo gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t, r, a, i;
                let s = (null == (t = e.response) ? void 0 : t.status) === 400 && (null == (i = e.response) || null == (a = i.data) || null == (r = a.message) ? void 0 : r.includes("đã tồn tại")) ? "Tên gói đã tồn tại. Vui lòng chọn tên khác." : "Có lỗi xảy ra khi tạo gói lưu trữ";
                n.toaster.create({
                    title: "Lỗi",
                    description: s,
                    type: "error"
                })
            }
        })
    }, "useDeletePhotoStoragePackage", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: p,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: s.adminPackages()
                }), e.invalidateQueries({
                    queryKey: s.packages()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Xóa gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: () => {
                n.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi xóa gói lưu trữ",
                    type: "error"
                })
            }
        })
    }, "useGetAllPhotoStoragePackages", 0, () => (0, r.useQuery)({
        queryKey: s.adminPackages(),
        queryFn: u,
        staleTime: 3e5
    }), "useGetMyStorage", 0, () => (0, r.useQuery)({
        queryKey: s.myStorage(),
        queryFn: o,
        staleTime: 6e4
    }), "useGetPhotoStoragePackages", 0, () => (0, r.useQuery)({
        queryKey: s.packages(),
        queryFn: l,
        staleTime: 3e5
    }), "useUpdatePhotoStoragePackage", 0, () => {
        let e = (0, a.useQueryClient)();
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
                    queryKey: s.adminPackages()
                }), e.invalidateQueries({
                    queryKey: s.packages()
                }), n.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật gói lưu trữ thành công",
                    type: "success"
                })
            },
            onError: e => {
                var t, r, a, i;
                let s = (null == (t = e.response) ? void 0 : t.status) === 400 && (null == (i = e.response) || null == (a = i.data) || null == (r = a.message) ? void 0 : r.includes("đã tồn tại")) ? "Tên gói đã tồn tại. Vui lòng chọn tên khác." : "Có lỗi xảy ra khi cập nhật gói lưu trữ";
                n.toaster.create({
                    title: "Lỗi",
                    description: s,
                    type: "error"
                })
            }
        })
    }])
}, 814025, e => {
    "use strict";
    var t = e.i(840171),
        r = e.i(816941),
        a = e.i(940948),
        i = e.i(391265),
        n = e.i(649725),
        s = e.i(334863),
        l = e.i(813753),
        o = e.i(836271);
    let u = {
            all: ["user-features"],
            lists: () => [...u.all, "list"],
            list: e => [...u.lists(), e],
            userFeatures: e => [...u.all, "user", e],
            userActiveFeatures: e => [...u.all, "user", e, "active"],
            userSummary: e => [...u.all, "user", e, "summary"],
            details: () => [...u.all, "detail"],
            detail: e => [...u.details(), e],
            userFeature: e => [...u.all, "feature", e]
        },
        d = async () => {
            let e = await n.default.get("/user-features/my-features-keys");
            return e.data.data || e.data
        },
        c = async e => {
            let t = await n.default.get("/admin/user-features/user/".concat(e));
            return t.data.data || t.data
        },
        p = async e => {
            let t = await n.default.get("/admin/user-features/user/".concat(e, "/summary"));
            return t.data.data || t.data
        },
        h = async e => {
            let t = await n.default.post("/admin/user-features", e);
            return t.data.data || t.data
        },
        g = async (e, t) => {
            let r = await n.default.patch("/admin/user-features/".concat(e), t);
            return r.data.data || r.data
        },
        m = async e => {
            let t = await n.default.patch("/admin/user-features/".concat(e, "/toggle"));
            return t.data.data || t.data
        },
        y = async e => {
            await n.default.delete("/admin/user-features/".concat(e))
        },
        f = async (e, t) => {
            let r = await n.default.post("/admin/user-features/user/".concat(e, "/add-plan-features"), t);
            return r.data.data || r.data
        };
    e.s(["useAddPlanFeaturesToUser", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    userId: t,
                    data: r
                } = e;
                return f(t, r)
            },
            onSuccess: (t, r) => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(r.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(r.userId)
                }), s.toaster.create({
                    title: "Thành công",
                    description: "Đã thêm ".concat(t.length, " tính năng từ plan cho user"),
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                s.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi thêm tính năng từ plan cho user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useCreateUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: h,
            onSuccess: t => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(t.userId)
                }), s.toaster.create({
                    title: "Thành công",
                    description: "Thêm tính năng cho user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: e => {
                var t;
                let r = (null == (t = e.response) ? void 0 : t.status) === 409 ? "User đã có tính năng này. Vui lòng kiểm tra lại." : "Có lỗi xảy ra khi thêm tính năng cho user";
                s.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useDeleteUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: y,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: u.lists()
                }), s.toaster.create({
                    title: "Thành công",
                    description: "Xóa tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                s.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi xóa tính năng user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useGetAllUserFeatures", 0, () => {
        let e = (0, i.useSelector)(l.selectAuth);
        return (0, r.useQuery)({
            queryKey: ["user-features", "all-keys"],
            queryFn: () => d(),
            staleTime: 3e5,
            retry: !1,
            enabled: (0, o.isAuthenticated)(e)
        })
    }, "useGetUserFeatures", 0, e => (0, r.useQuery)({
        queryKey: u.userFeatures(e),
        queryFn: () => c(e),
        enabled: !!e,
        staleTime: 3e5,
        retry: !1
    }), "useGetUserFeaturesSummary", 0, e => (0, r.useQuery)({
        queryKey: u.userSummary(e),
        queryFn: () => p(e),
        enabled: !!e,
        staleTime: 3e5
    }), "useToggleUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: m,
            onSuccess: t => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(t.userId)
                }), s.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật trạng thái tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: () => {
                s.toaster.create({
                    title: "Lỗi",
                    description: "Có lỗi xảy ra khi cập nhật trạng thái tính năng user",
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }, "useUpdateUserFeature", 0, () => {
        let e = (0, a.useQueryClient)();
        return (0, t.useMutation)({
            mutationFn: e => {
                let {
                    id: t,
                    data: r
                } = e;
                return g(t, r)
            },
            onSuccess: t => {
                e.invalidateQueries({
                    queryKey: u.userFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userActiveFeatures(t.userId)
                }), e.invalidateQueries({
                    queryKey: u.userSummary(t.userId)
                }), s.toaster.create({
                    title: "Thành công",
                    description: "Cập nhật tính năng user thành công",
                    type: "success",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            },
            onError: e => {
                var t;
                let r = (null == (t = e.response) ? void 0 : t.status) === 409 ? "User đã có tính năng này. Vui lòng kiểm tra lại." : "Có lỗi xảy ra khi cập nhật tính năng user";
                s.toaster.create({
                    title: "Lỗi",
                    description: r,
                    type: "error",
                    duration: 3e3,
                    meta: {
                        closable: !0
                    }
                })
            }
        })
    }])
}, 952667, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(564668),
        a = e.i(536072),
        i = e.i(215669),
        n = e.i(878262),
        s = e.i(51715),
        l = e.i(791089),
        o = e.i(118190),
        u = e.i(251570);
    e.i(308972);
    var d = e.i(445979),
        c = e.i(569210),
        p = e.i(649760),
        h = e.i(441985),
        g = e.i(618110),
        m = e.i(819060),
        y = e.i(788318),
        f = e.i(126537),
        b = e.i(676525),
        v = e.i(79663),
        _ = e.i(397709),
        S = e.i(10027),
        C = e.i(76e3),
        E = e.i(940948);
    let x = {
        basic: {
            borderColor: {
                base: "gray.300",
                _dark: "gray.600"
            },
            badgeColor: {
                base: "gray.500",
                _dark: "gray.400"
            },
            highlightBorder: {
                base: "gray.400",
                _dark: "gray.500"
            },
            highlightShadow: "none",
            highlightGlow: "none"
        },
        pro: {
            borderColor: {
                base: "blue.400",
                _dark: "blue.500"
            },
            badgeColor: {
                base: "blue.500",
                _dark: "blue.400"
            },
            highlightBorder: {
                base: "blue.500",
                _dark: "blue.400"
            },
            highlightShadow: "0 6px 16px rgba(59, 130, 246, 0.16)",
            highlightGlow: "0 8px 18px rgba(59, 130, 246, 0.22)"
        },
        vip: {
            borderColor: {
                base: "yellow.500",
                _dark: "yellow.400"
            },
            badgeColor: {
                base: "yellow.500",
                _dark: "yellow.400"
            },
            highlightBorder: {
                base: "yellow.400",
                _dark: "yellow.500"
            },
            highlightShadow: "0 6px 16px rgba(245, 158, 11, 0.18)",
            highlightGlow: "0 8px 18px rgba(245, 158, 11, 0.24)"
        }
    };
    e.s(["default", 0, e => {
        var w, T, F, P, k, A;
        let {
            isOpen: U,
            onClose: R,
            featureKey: I,
            zIndex: O,
            hideFeaturePurchase: M = !1
        } = e, {
            t: j
        } = (0, d.useTranslation)(), N = (0, E.useQueryClient)(), [L, Q] = (0, u.useState)("upgrade"), [q, K] = (0, u.useState)(!1), [D, G] = (0, u.useState)(null), [B, V] = (0, u.useState)(!1), [z, H] = (0, u.useState)(!1), [W, Y] = (0, u.useState)(null), [$, X] = (0, u.useState)(null), {
            data: Z,
            isLoading: J
        } = (0, S.useGetPublicPlans)(), {
            data: ee
        } = (0, v.useGetCurrentSubscription)(), {
            data: et
        } = (0, _.useGetAvailableFeatures)(), {
            formatTimeTo: er
        } = (0, C.useDiscountCountdown)(), ea = (0, u.useMemo)(() => {
            if (!et) return new Set;
            let e = Array.isArray(I) ? I : [I],
                t = new Set;
            return ["basic", "pro", "vip"].forEach(r => {
                let a = et[r] || [];
                e.some(e => a.some(t => t.key === e)) && t.add(r)
            }), t
        }, [et, I]), ei = e => e.toLocaleString("vi-VN") + "đ", en = e => {
            G(e), K(!0)
        }, es = (e, t, r) => {
            r || "basic" !== e && en(t)
        }, el = e => {
            Y(e), H(!0)
        }, eo = {
            basic: {
                borderColor: "gray.300",
                badgeColor: "gray.500",
                buttonColor: "gray.500",
                features: [j("pricing.features_list.basic_designer"), j("pricing.features_list.public_time_6m"), j("pricing.features_list.photos_basic"), j("pricing.features_list.features_basic"), j("pricing.features_list.unlimited_invites")]
            },
            pro: {
                isPopular: !0,
                borderColor: "blue.500",
                badgeColor: "blue.500",
                buttonColor: "blue.500",
                features: [j("pricing.features_list.advanced_designer"), j("pricing.features_list.public_time_2y"), j("pricing.features_list.photos_advanced"), j("pricing.features_list.features_advanced"), j("pricing.features_list.use_pro")]
            },
            vip: {
                borderColor: "#F59E0B",
                badgeColor: "#F59E0B",
                buttonColor: "#F59E0B",
                showVipLogo: !0,
                features: [j("pricing.features_list.comprehensive_designer"), j("pricing.features_list.public_time_lifetime"), j("pricing.features_list.photos_max"), j("pricing.features_list.features_unlock_all"), j("pricing.features_list.use_vip")]
            }
        }, eu = {
            basic: 0,
            pro: 1,
            vip: 2
        }, ed = (null == ee ? void 0 : ee.status) === "active" && (null == ee ? void 0 : ee.tier) ? ee.tier.toLowerCase() : null, ec = (null == Z ? void 0 : Z.map(e => {
            var t, r, a, i, n, s, l, o;
            let u, d = eo[e.tier],
                c = null != (n = e.isCurrentPlan) ? n : (u = e.tier, (null == ee ? void 0 : ee.tier) === u && (null == ee ? void 0 : ee.status) === "active"),
                p = null != (s = e.canPurchase) && s,
                h = c && null != (l = e.canAddDesignRequest) && l,
                g = ea.has(e.tier),
                m = e.originalPriceCents ? ei(e.originalPriceCents) : void 0,
                y = !!(e.originalPriceCents && e.priceCents < e.originalPriceCents),
                f = y && e.originalPriceCents ? Math.round((e.originalPriceCents - e.priceCents) / e.originalPriceCents * 100) : void 0,
                b = y ? er(e.discountEndsAt) : null,
                v = "number" == typeof e.adjustedPriceCents ? e.adjustedPriceCents : void 0,
                _ = (null == (t = e.upgradeInfo) ? void 0 : t.isUpgrade) && "number" == typeof e.upgradeInfo.fromPriceCents ? Math.max(e.priceCents - e.upgradeInfo.fromPriceCents, 0) : void 0,
                S = null != v ? v : _;
            if (void 0 === S && ed && eu[ed] < eu[e.tier]) {
                let t = null == Z || null == (o = Z.find(e => e.tier === ed)) ? void 0 : o.priceCents;
                if ("number" == typeof t) {
                    let r = Math.max(e.priceCents - t, 0);
                    r > 0 && r < e.priceCents && (S = r)
                }
            }
            "number" == typeof S && S >= e.priceCents && (S = void 0);
            let C = "number" == typeof S ? Math.max(e.priceCents - S, 0) : void 0,
                E = !!(void 0 !== S && ((null == (r = e.upgradeInfo) ? void 0 : r.isUpgrade) || ed && eu[ed] < eu[e.tier]));
            return {
                plan: e.tier,
                price: "basic" === e.tier ? "Free" : ei(e.priceCents),
                mobilePrice: "number" == typeof S ? ei(S) : "basic" === e.tier ? "Free" : ei(e.priceCents),
                adjustedPrice: "number" == typeof S ? ei(S) : void 0,
                savings: "number" == typeof C && C > 0 ? ei(C) : void 0,
                isUpgrade: !!(null == (a = e.upgradeInfo) ? void 0 : a.isUpgrade),
                isUpgradeOffer: E,
                upgradeFromTier: (null == (i = e.upgradeInfo) ? void 0 : i.fromTier) || ed || void 0,
                isCurrent: c,
                isDisabled: !(p || h),
                apiPlan: e,
                canAddDesignOnly: h,
                originalPrice: m,
                discountPercent: f,
                countdown: null != b ? b : void 0,
                hasFeature: g,
                ...d
            }
        })) || [], ep = ec.some(e => e.hasFeature), eh = ["basic", "pro", "vip"], eg = [...ec].sort((e, t) => eh.indexOf(e.plan) - eh.indexOf(t.plan)), em = null != (k = null != (P = null == (w = eg.find(e => e.isUpgradeOffer)) ? void 0 : w.plan) ? P : null == (T = eg.find(e => "pro" === e.plan)) ? void 0 : T.plan) ? k : null == (F = eg[0]) ? void 0 : F.plan, ey = $ && eg.some(e => e.plan === $) ? $ : em, ef = null != (A = eg.find(e => e.plan === ey)) ? A : eg[0];
        return (0, t.jsxs)(n.Portal, {
            children: [(0, t.jsx)(p.default, {
                isOpen: U,
                onClose: R,
                title: j("common:featureUnlockModal.title", "Mở khóa tính năng"),
                maxWidth: "1100px",
                maxHeight: "80vh",
                zIndex: O,
                children: (0, t.jsxs)(o.VStack, {
                    gap: 4,
                    align: "stretch",
                    children: [(0, t.jsxs)(i.HStack, {
                        gap: 2,
                        justify: "center",
                        flexWrap: "wrap",
                        children: [(0, t.jsxs)(b.default, {
                            variant: "upgrade" === L ? "rose" : "outline",
                            size: "sm",
                            onClick: () => Q("upgrade"),
                            children: [(0, t.jsx)(c.FaCrown, {}), (0, t.jsx)(l.Text, {
                                display: {
                                    base: "none",
                                    sm: "inline"
                                },
                                ml: 1,
                                children: j("common:featureUnlockModal.tabUpgrade", "Nâng cấp gói")
                            }), (0, t.jsx)(l.Text, {
                                display: {
                                    base: "inline",
                                    sm: "none"
                                },
                                ml: 1,
                                children: j("common:featureUnlockModal.tabUpgradeShort", "Nâng cấp")
                            })]
                        }), !M && (0, t.jsxs)(b.default, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => V(!0),
                            children: [(0, t.jsx)(c.FaShoppingCart, {}), (0, t.jsx)(l.Text, {
                                display: {
                                    base: "none",
                                    sm: "inline"
                                },
                                ml: 1,
                                children: j("common:featureUnlockModal.tabBuyFeature", "Mua riêng tính năng")
                            }), (0, t.jsx)(l.Text, {
                                display: {
                                    base: "inline",
                                    sm: "none"
                                },
                                ml: 1,
                                children: j("common:featureUnlockModal.tabBuyFeatureShort", "Mua riêng")
                            })]
                        })]
                    }), "upgrade" === L && (0, t.jsxs)(r.Box, {
                        children: [(0, t.jsx)(l.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.500",
                                _dark: "gray.400"
                            },
                            textAlign: "center",
                            mb: 4,
                            children: j("common:featureUnlockModal.upgradeDescription", "Chọn gói phù hợp để mở khóa nhiều tính năng")
                        }), J ? (0, t.jsx)(r.Box, {
                            textAlign: "center",
                            py: 8,
                            children: (0, t.jsx)(s.Spinner, {
                                size: "lg"
                            })
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)(o.VStack, {
                                display: {
                                    base: "flex",
                                    md: "none"
                                },
                                gap: 3,
                                w: "full",
                                align: "stretch",
                                children: [(0, t.jsx)(r.Box, {
                                    bg: {
                                        base: "gray.50",
                                        _dark: "gray.800"
                                    },
                                    border: "1px solid",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.700"
                                    },
                                    borderRadius: "xl",
                                    p: 2,
                                    children: (0, t.jsx)(a.Grid, {
                                        templateColumns: "repeat(3, minmax(0, 1fr))",
                                        gap: 2,
                                        children: eg.map(e => {
                                            let r = (null == ef ? void 0 : ef.plan) === e.plan;
                                            return (0, t.jsx)(f.default, {
                                                plan: e.plan,
                                                price: e.mobilePrice,
                                                isCurrent: e.isCurrent,
                                                isUpgradeOffer: e.isUpgradeOffer,
                                                isActive: r,
                                                onSelect: () => X(e.plan)
                                            }, "mobile-upgrade-".concat(e.plan))
                                        })
                                    })
                                }), (0, t.jsx)(l.Text, {
                                    fontSize: "xs",
                                    color: {
                                        base: "gray.500",
                                        _dark: "gray.400"
                                    },
                                    textAlign: "center",
                                    children: j("pricing.upsell.mobileQuickSwitch")
                                }), ef && (0, t.jsx)(y.default, { ...ef,
                                    density: "mobile-detail",
                                    featurePreviewCount: 3,
                                    expandableFeatures: !0,
                                    onSelect: () => es(ef.plan, ef.apiPlan, ef.isDisabled),
                                    onViewDetails: () => el(ef.plan)
                                }, "mobile-detail-".concat(ef.plan))]
                            }), (0, t.jsx)(a.Grid, {
                                display: {
                                    base: "none",
                                    md: "grid"
                                },
                                templateColumns: "repeat(3, 1fr)",
                                gap: 4,
                                alignItems: "stretch",
                                children: eg.map(e => {
                                    let a = x[e.plan],
                                        i = e.hasFeature;
                                    return (0, t.jsx)(r.Box, {
                                        h: "full",
                                        display: "flex",
                                        position: "relative",
                                        borderRadius: "2xl",
                                        border: "1px solid",
                                        borderColor: i ? a.highlightBorder : "transparent",
                                        boxShadow: i ? a.highlightShadow : "none",
                                        transition: "all 0.25s ease",
                                        opacity: ep && !i ? .94 : 1,
                                        _hover: {
                                            boxShadow: i ? a.highlightGlow : "md",
                                            opacity: 1
                                        },
                                        children: (0, t.jsx)(y.default, { ...e,
                                            density: "desktop-compact",
                                            expandableFeatures: !0,
                                            featurePreviewCount: 4,
                                            showUpgradeDetailsBox: !1,
                                            onSelect: () => es(e.plan, e.apiPlan, e.isDisabled),
                                            onViewDetails: () => el(e.plan)
                                        })
                                    }, e.plan)
                                })
                            })]
                        })]
                    })]
                })
            }), (0, t.jsx)(m.default, {
                isOpen: q,
                onClose: () => K(!1),
                selectedPlan: D,
                zIndex: O ? O + 1 : void 0
            }), (0, t.jsx)(h.default, {
                isOpen: B,
                onClose: () => V(!1),
                onFeaturePurchase: e => {
                    N.invalidateQueries({
                        queryKey: ["user-features", "all-keys"]
                    }), R()
                },
                initialSelectedFeatures: Array.isArray(I) ? I : [I],
                zIndex: O ? O + 1 : void 0
            }), (0, t.jsx)(g.default, {
                isOpen: z,
                onClose: () => H(!1),
                plan: W,
                onBuyFeatures: () => {
                    H(!1), V(!0)
                },
                onUpgrade: () => {
                    if (W) {
                        let e = ec.find(e => e.plan === W);
                        e && (H(!1), en(e.apiPlan))
                    }
                },
                zIndex: O ? O + 1 : void 0
            })]
        })
    }])
}, 469503, e => {
    "use strict";
    e.s(["FEATURE_ANALYTICS", 0, "analytics", "FEATURE_BACKGROUND_MUSIC_SETTINGS_VIP", 0, "background_music_settings_vip", "FEATURE_CHANGE_TEMPLATE", 0, "change_template", "FEATURE_COUNTUP_TIMER", 0, "countup_timer", "FEATURE_CUSTOM_COLORS_FONTS", 0, "custom_colors_fonts", "FEATURE_CUSTOM_COLORS_FONT_ADVANCE", 0, "custom_colors_font_advance", "FEATURE_CUSTOM_DOMAIN", 0, "custom_domain", "FEATURE_CUSTOM_QRCODE_STYLE", 0, "custom_qrcode_style", "FEATURE_CUSTOM_VISUAL_EFFECTS", 0, "custom_visual_effects", "FEATURE_CUSTOM_VISUAL_EFFECTS_ADVANCE", 0, "custom_visual_effects_advance", "FEATURE_ELEMENT_HTML_BLOCK_BASIC", 0, "element_html_block_basic", "FEATURE_EMAIL_REMINDERS", 0, "email_reminders", "FEATURE_LAYOUT_BLOCK_REORDER_BASIC", 0, "layout_block_reorder_basic", "FEATURE_MAP_BASIC", 0, "map_basic", "FEATURE_OPENING_EFFECT", 0, "opening_effect", "FEATURE_PERSONALIZED_INVITES", 0, "personalized_invites", "FEATURE_PERSONALIZED_INVITES_SEO", 0, "personalized_invites_seo", "FEATURE_PHOTOBOOK", 0, "photobook", "FEATURE_POPUP_BASIC", 0, "popup_basic", "FEATURE_REMOVE_MEWEDDING_LOGO", 0, "remove_mewedding_logo", "FEATURE_RSVP_GUEST_MANAGEMENT", 0, "rsvp_guest_management", "FEATURE_SEO_SETTINGS", 0, "seo_settings", "FEATURE_SEO_SETTINGS_VIP", 0, "seo_settings_vip", "FEATURE_UPLOAD_WEDDING_VIDEO", 0, "upload_wedding_video", "FEATURE_WEDDING_REMINDERS", 0, "wedding_reminders", "FEATURE_WISHES_MANAGEMENT", 0, "wishes_management"])
}, 254481, e => {
    "use strict";
    var t = e.i(814025),
        r = e.i(251570),
        a = e.i(391265),
        i = e.i(813753),
        n = e.i(836271);

    function s() {
        var e;
        let s = (0, a.useSelector)(i.selectAuth),
            {
                data: l = [],
                isLoading: o,
                error: u
            } = (0, t.useGetAllUserFeatures)(),
            d = (0, r.useMemo)(() => e => {
                var t;
                return !!(0, n.isFeatureLockBypassRole)(null == s || null == (t = s.user) ? void 0 : t.role) || l.includes(e)
            }, [null == s || null == (e = s.user) ? void 0 : e.role, l]);
        return {
            userFeatures: l,
            isLoading: o,
            error: u,
            hasFeature: d
        }
    }

    function l(e) {
        let {
            hasFeature: t
        } = s();
        return (0, r.useMemo)(() => e.reduce((e, r) => (e[r] = t(r), e), {}), [e, t])
    }

    function o(e) {
        let {
            hasFeature: t
        } = s();
        return t(e)
    }
    e.s(["useFeature", () => o, "useFeatures", () => l])
}]);

//# debugId=2454c64d-f997-5f07-256e-8588de141ea1
//# sourceMappingURL=7cc5696e7d9f0c23.js.map