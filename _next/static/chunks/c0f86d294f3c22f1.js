;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "ca479f8b-627a-b353-1a1b-c08df21dd6ed")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 667357, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(251570);

    function o(e, t) {
        let r = (0, n.useRef)(null),
            o = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (r.current = i(e, n)), t && (o.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 523902, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(251570),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        a = o ? () => {} : n.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        if (o) {
            var l;
            null == t || null == (l = t.mountedInstances) || l.add(e.children), s()
        }
        return i(() => {
            var r;
            return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                var r;
                null == t || null == (r = t.mountedInstances) || r.delete(e.children)
            }
        }), i(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 428565, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return c
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(481258),
        a = e.r(744066),
        s = e.r(483632),
        l = a._(e.r(251570)),
        d = i._(e.r(523902)),
        u = e.r(627734);

    function c() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(681821);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function g(e) {
        let t, r, n, o;
        return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, n = new Set, o = {}, e => {
            let i = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = o[r] || new Set;
                                ("name" !== r || !a) && n.has(t) ? i = !1 : (n.add(t), o[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return l.default.cloneElement(e, {
                key: r
            })
        })
    }
    let m = function(e) {
        let {
            children: t
        } = e, r = (0, l.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(d.default, {
            reduceComponentsToState: g,
            headManager: r,
            children: t
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 969294, (e, t, r) => {
    "use strict";

    function n(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a
        } = e, s = n ? 40 * n : t, l = o ? 40 * o : r, d = s && l ? "viewBox='0 0 ".concat(s, " ").concat(l, "'") : "";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' ".concat(d, "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(20, "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='").concat(20, "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='").concat(d ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none", "' style='filter: url(%23b);' href='").concat(i, "'/%3E%3C/svg%3E")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 626161, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 298232, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return d
        }
    }), e.r(681821);
    let n = e.r(825),
        o = e.r(969294),
        i = e.r(626161),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function d(e, t) {
        var r, d;
        let u, c, f, {
                src: p,
                sizes: g,
                unoptimized: m = !1,
                priority: h = !1,
                preload: v = !1,
                loading: b,
                className: y,
                quality: P,
                width: w,
                height: x,
                fill: _ = !1,
                style: C,
                overrideSrc: j,
                onLoad: R,
                onLoadingComplete: E,
                placeholder: S = "empty",
                blurDataURL: O,
                fetchPriority: T,
                decoding: A = "async",
                layout: I,
                objectFit: k,
                objectPosition: z,
                lazyBoundary: M,
                lazyRoot: D,
                ...N
            } = e,
            {
                imgConf: L,
                showAltText: B,
                blurComplete: F,
                defaultLoader: U
            } = t,
            q = L || i.imageConfigDefault;
        if ("allSizes" in q) u = q;
        else {
            let e = [...q.deviceSizes, ...q.imageSizes].sort((e, t) => e - t),
                t = q.deviceSizes.sort((e, t) => e - t),
                n = null == (r = q.qualities) ? void 0 : r.sort((e, t) => e - t);
            u = { ...q,
                allSizes: e,
                deviceSizes: t,
                qualities: n
            }
        }
        if (void 0 === U) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let W = N.loader || U;
        delete N.loader, delete N.srcSet;
        let G = "__next_img_default" in W;
        if (G) {
            if ("custom" === u.loader) throw Object.defineProperty(Error('Image with src "'.concat(p, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = W;
            W = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (I) {
            "fill" === I && (_ = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[I];
            e && (C = { ...C,
                ...e
            });
            let t = {
                responsive: "100vw",
                fill: "100vw"
            }[I];
            t && !g && (g = t)
        }
        let V = "",
            X = l(w),
            H = l(x);
        if ((d = p) && "object" == typeof d && (s(d) || void 0 !== d.src)) {
            let e = s(p) ? p.default : p;
            if (!e.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e))), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!e.height || !e.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e))), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (c = e.blurWidth, f = e.blurHeight, O = O || e.blurDataURL, V = e.src, !_)
                if (X || H) {
                    if (X && !H) {
                        let t = X / e.width;
                        H = Math.round(e.height * t)
                    } else if (!X && H) {
                        let t = H / e.height;
                        X = Math.round(e.width * t)
                    }
                } else X = e.width, H = e.height
        }
        let Y = !h && !v && ("lazy" === b || void 0 === b);
        (!(p = "string" == typeof p ? p : V) || p.startsWith("data:") || p.startsWith("blob:")) && (m = !0, Y = !1), u.unoptimized && (m = !0), G && !u.dangerouslyAllowSVG && p.split("?", 1)[0].endsWith(".svg") && (m = !0);
        let $ = l(P),
            J = Object.assign(_ ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: k,
                objectPosition: z
            } : {}, B ? {} : {
                color: "transparent"
            }, C),
            K = F || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,'.concat((0, o.getImageBlurSvg)({
                widthInt: X,
                heightInt: H,
                blurWidth: c,
                blurHeight: f,
                blurDataURL: O || "",
                objectFit: J.objectFit
            }), '")') : 'url("'.concat(S, '")'),
            Q = a.includes(J.objectFit) ? "fill" === J.objectFit ? "100% 100%" : "cover" : J.objectFit,
            Z = K ? {
                backgroundSize: Q,
                backgroundPosition: J.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K
            } : {},
            ee = function(e) {
                let {
                    config: t,
                    src: r,
                    unoptimized: o,
                    width: i,
                    quality: a,
                    sizes: s,
                    loader: l
                } = e;
                if (o) {
                    let e = (0, n.getDeploymentId)();
                    if (r.startsWith("/") && !r.startsWith("//") && e) {
                        let t = r.includes("?") ? "&" : "?";
                        r = "".concat(r).concat(t, "dpl=").concat(e)
                    }
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: d,
                    kind: u
                } = function(e, t, r) {
                    let {
                        deviceSizes: n,
                        allSizes: o
                    } = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g,
                            t = [];
                        for (let n; n = e.exec(r);) t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, i, s), c = d.length - 1;
                return {
                    sizes: s || "w" !== u ? s : "100vw",
                    srcSet: d.map((e, n) => "".concat(l({
                        config: t,
                        src: r,
                        quality: a,
                        width: e
                    }), " ").concat("w" === u ? e : n + 1).concat(u)).join(", "),
                    src: l({
                        config: t,
                        src: r,
                        quality: a,
                        width: d[c]
                    })
                }
            }({
                config: u,
                src: p,
                unoptimized: m,
                width: X,
                quality: $,
                sizes: g,
                loader: W
            }),
            et = Y ? "lazy" : b;
        return {
            props: { ...N,
                loading: et,
                fetchPriority: T,
                width: X,
                height: H,
                decoding: A,
                className: y,
                style: { ...J,
                    ...Z
                },
                sizes: ee.sizes,
                srcSet: ee.srcSet,
                src: j || ee.src
            },
            meta: {
                unoptimized: m,
                preload: v || h,
                placeholder: S,
                fill: _
            }
        }
    }
}, 24437, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(481258)._(e.r(251570)),
        o = e.r(626161),
        i = n.default.createContext(o.imageConfigDefault)
}, 653541, (e, t, r) => {
    "use strict";

    function n(e, t) {
        var r;
        let n = e || 75;
        return (null == t || null == (r = t.qualities) ? void 0 : r.length) ? t.qualities.reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e, 0) : n
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 867227, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(653541),
        o = e.r(825);

    function i(e) {
        var t;
        let {
            config: r,
            src: i,
            width: a,
            quality: s
        } = e;
        if (i.startsWith("/") && i.includes("?") && (null == (t = r.localPatterns) ? void 0 : t.length) === 1 && "**" === r.localPatterns[0].pathname && "" === r.localPatterns[0].search) throw Object.defineProperty(Error('Image with src "'.concat(i, '" is using a query string which is not configured in images.localPatterns.') + "\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let l = (0, n.findClosestQuality)(s, r),
            d = (0, o.getDeploymentId)();
        return "".concat(r.path, "?url=").concat(encodeURIComponent(i), "&w=").concat(a, "&q=").concat(l).concat(i.startsWith("/") && d ? "&dpl=".concat(d) : "")
    }
    i.__next_img_default = !0;
    let a = i
}, 673842, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return P
        }
    });
    let n = e.r(481258),
        o = e.r(744066),
        i = e.r(483632),
        a = o._(e.r(251570)),
        s = n._(e.r(453325)),
        l = n._(e.r(428565)),
        d = e.r(298232),
        u = e.r(626161),
        c = e.r(24437);
    e.r(681821);
    let f = e.r(404192),
        p = n._(e.r(867227)),
        g = e.r(667357),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, n, o, i, a) {
        let s = null == e ? void 0 : e.src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && o(!0), null == r ? void 0 : r.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        o = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => o,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            o = !0, t.stopPropagation()
                        }
                    })
                }(null == n ? void 0 : n.current) && n.current(e)
            }
        }))
    }

    function v(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: s,
            width: l,
            decoding: d,
            className: u,
            style: c,
            fetchPriority: f,
            placeholder: p,
            loading: m,
            unoptimized: b,
            fill: y,
            onLoadRef: P,
            onLoadingCompleteRef: w,
            setBlurComplete: x,
            setShowAltText: _,
            sizesInput: C,
            onLoad: j,
            onError: R,
            ...E
        } = e, S = (0, a.useCallback)(e => {
            e && (R && (e.src = e.src), e.complete && h(e, p, P, w, x, b, C))
        }, [r, p, P, w, x, R, b, C]), O = (0, g.useMergedRef)(t, S);
        return (0, i.jsx)("img", { ...E,
            ...v(f),
            loading: m,
            width: l,
            height: s,
            decoding: d,
            "data-nimg": y ? "fill" : "1",
            className: u,
            style: c,
            sizes: o,
            srcSet: n,
            src: r,
            ref: O,
            onLoad: e => {
                h(e.currentTarget, p, P, w, x, b, C)
            },
            onError: e => {
                _(!0), "empty" !== p && x(!0), R && R(e)
            }
        })
    });

    function y(e) {
        let {
            isAppRouter: t,
            imgAttributes: r
        } = e, n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...v(r.fetchPriority)
        };
        return t && s.default.preload ? (s.default.preload(r.src, n), null) : (0, i.jsx)(l.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...n
            }, "__nimg-" + r.src + r.srcSet + r.sizes)
        })
    }
    let P = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(f.RouterContext),
            n = (0, a.useContext)(c.ImageConfigContext),
            o = (0, a.useMemo)(() => {
                var e;
                let t = m || n || u.imageConfigDefault,
                    r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                    o = t.deviceSizes.sort((e, t) => e - t),
                    i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                return { ...t,
                    allSizes: r,
                    deviceSizes: o,
                    qualities: i,
                    localPatterns: "undefined" == typeof window ? null == n ? void 0 : n.localPatterns : t.localPatterns
                }
            }, [n]),
            {
                onLoad: s,
                onLoadingComplete: l
            } = e,
            g = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
            g.current = s
        }, [s]);
        let h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            h.current = l
        }, [l]);
        let [v, P] = (0, a.useState)(!1), [w, x] = (0, a.useState)(!1), {
            props: _,
            meta: C
        } = (0, d.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: w
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b, { ..._,
                unoptimized: C.unoptimized,
                placeholder: C.placeholder,
                fill: C.fill,
                onLoadRef: g,
                onLoadingCompleteRef: h,
                setBlurComplete: P,
                setShowAltText: x,
                sizesInput: e.sizes,
                ref: t
            }), C.preload ? (0, i.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: _
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 518435, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return u
        },
        getImageProps: function() {
            return d
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(481258),
        a = e.r(298232),
        s = e.r(673842),
        l = i._(e.r(867227));

    function d(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let u = s.Image
}, 870493, (e, t, r) => {
    t.exports = e.r(518435)
}, 451075, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(728231),
        n = e.i(476659),
        o = e.i(564668),
        i = e.i(109697),
        a = e.i(870493);
    e.i(308972);
    var s = e.i(445979);
    e.s(["LanguageSwitcher", 0, () => {
        let {
            i18n: e
        } = (0, s.useTranslation)(), l = "vi" == ((e.resolvedLanguage || e.language || "vi").toLowerCase().startsWith("en") ? "en" : "vi");
        return (0, t.jsx)(r.Tooltip, {
            content: "".concat(l ? "English" : "Tiếng Việt"),
            positioning: {
                placement: "bottom"
            },
            children: (0, t.jsxs)(i.IconButton, {
                onClick: t => {
                    let r = l ? "en" : "vi";
                    if (!document.startViewTransition) {
                        e.changeLanguage(r), n.safeLocalStorage.setItem("language", r);
                        return
                    }
                    let o = document.createElement("div");
                    o.style.cssText = "\n            position: fixed;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100vh;\n            background: linear-gradient(\n                90deg,\n                transparent 0%,\n                rgba(102, 126, 234, 0.6) 20%,\n                rgba(118, 75, 162, 0.8) 50%,\n                rgba(240, 147, 251, 0.6) 80%,\n                transparent 100%\n            );\n            box-shadow: 0 0 80px rgba(118, 75, 162, 0.9);\n            pointer-events: none;\n            z-index: 9999;\n            transition: left 0.5s ease-in-out;\n        ", document.body.appendChild(o), requestAnimationFrame(() => {
                        o.style.left = "100%"
                    }), document.startViewTransition(() => {
                        e.changeLanguage(r), n.safeLocalStorage.setItem("language", r)
                    }).ready.then(() => {
                        document.documentElement.animate({
                            clipPath: ["inset(0 100% 0 0)", "inset(0 0 0 0)"]
                        }, {
                            duration: 500,
                            easing: "ease-in-out",
                            pseudoElement: "::view-transition-new(root)"
                        })
                    }), setTimeout(() => {
                        o.remove()
                    }, 600)
                },
                variant: "ghost",
                "aria-label": "Change language",
                size: "md",
                position: "relative",
                overflow: "hidden",
                borderRadius: "full",
                _hover: {
                    transform: "scale(1.1)",
                    boxShadow: l ? "0 0 20px rgba(255, 107, 107, 0.6)" : "0 0 20px rgba(65, 88, 208, 0.6)"
                },
                _active: {
                    transform: "scale(0.95)"
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                p: 2,
                children: [(0, t.jsx)(o.Box, {
                    position: "relative",
                    w: "20px",
                    h: "20px",
                    css: {
                        animation: "flagRotate 0.5s ease-in-out",
                        "@keyframes flagRotate": {
                            "0%": {
                                transform: "rotateY(0deg) scale(1)"
                            },
                            "50%": {
                                transform: "rotateY(90deg) scale(1.2)"
                            },
                            "100%": {
                                transform: "rotateY(0deg) scale(1)"
                            }
                        }
                    },
                    children: (0, t.jsx)(a.default, {
                        src: l ? "/images/vietnam.png" : "/images/english.png",
                        alt: l ? "Tiếng Việt" : "English",
                        width: 20,
                        height: 20,
                        style: {
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "2px solid rgba(255, 255, 255, 0.8)"
                        }
                    })
                }), (0, t.jsx)(o.Box, {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: .3,
                    css: {
                        background: l ? "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.9) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.7) 0%, transparent 50%)" : "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.8) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 50%)",
                        animation: "langTwinkle 2.5s ease-in-out infinite",
                        "@keyframes langTwinkle": {
                            "0%, 100%": {
                                opacity: .3
                            },
                            "50%": {
                                opacity: .7
                            }
                        }
                    }
                }), (0, t.jsx)(o.Box, {
                    position: "absolute",
                    inset: "-2px",
                    pointerEvents: "none",
                    borderRadius: "full",
                    border: "2px solid",
                    borderColor: "whiteAlpha.400",
                    css: {
                        animation: "ringRotate 3s linear infinite",
                        "@keyframes ringRotate": {
                            "0%": {
                                transform: "rotate(0deg)",
                                opacity: .4
                            },
                            "50%": {
                                opacity: .8
                            },
                            "100%": {
                                transform: "rotate(360deg)",
                                opacity: .4
                            }
                        }
                    }
                })]
            })
        })
    }])
}, 196377, e => {
    "use strict";
    e.s([], 482846), e.i(482846);
    var t = e.i(483632);
    e.s([], 567996), e.i(567996);
    var r = e.i(30500),
        n = e.i(251570),
        o = e.i(173614);
    let [i, a] = (0, e.i(483591).createContext)({
        name: "PopoverContext",
        hookName: "usePopoverContext",
        providerName: "<PopoverProvider />"
    }), s = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, r.mergeProps)(i.getAnchorProps(), e);
        return (0, t.jsx)(o.ark.div, { ...s,
            ref: n
        })
    });
    s.displayName = "PopoverAnchor";
    let l = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, r.mergeProps)(i.getArrowProps(), e);
        return (0, t.jsx)(o.ark.div, { ...s,
            ref: n
        })
    });
    l.displayName = "PopoverArrow";
    let d = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, r.mergeProps)(i.getArrowTipProps(), e);
        return (0, t.jsx)(o.ark.div, { ...s,
            ref: n
        })
    });
    d.displayName = "PopoverArrowTip";
    let u = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, r.mergeProps)(i.getCloseTriggerProps(), e);
        return (0, t.jsx)(o.ark.button, { ...s,
            ref: n
        })
    });
    u.displayName = "PopoverCloseTrigger";
    var c = e.i(517913),
        f = e.i(139197);
    let p = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, f.usePresenceContext)(),
            l = (0, r.mergeProps)(i.getContentProps(), s.getPresenceProps(), e);
        return s.unmounted ? null : (0, t.jsx)(o.ark.div, { ...l,
            ref: (0, c.composeRefs)(s.ref, n)
        })
    });
    p.displayName = "PopoverContent";
    let g = e => e.children(a()),
        m = (0, n.forwardRef)((e, n) => {
            let i = a(),
                s = (0, r.mergeProps)(i.getDescriptionProps(), e);
            return (0, t.jsx)(o.ark.div, { ...s,
                ref: n
            })
        });
    m.displayName = "PopoverDescription";
    let h = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, r.mergeProps)(i.getIndicatorProps(), e);
        return (0, t.jsx)(o.ark.div, { ...s,
            ref: n
        })
    });
    h.displayName = "PopoverIndicator";
    let v = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, f.usePresenceContext)(),
            l = (0, r.mergeProps)(i.getPositionerProps(), e);
        return s.unmounted ? null : (0, t.jsx)(o.ark.div, { ...l,
            ref: n
        })
    });
    v.displayName = "PopoverPositioner";
    var b = e.i(185676),
        y = e.i(358765),
        P = e.i(358537),
        w = e.i(501829),
        x = e.i(520036),
        _ = e.i(904849);
    let C = e => {
            let [o, {
                children: a,
                ...s
            }] = (0, b.splitPresenceProps)(e), l = (e => {
                let t = (0, n.useId)(),
                    {
                        getRootNode: r
                    } = (0, x.useEnvironmentContext)(),
                    {
                        dir: o
                    } = (0, _.useLocaleContext)(),
                    i = {
                        id: t,
                        dir: o,
                        getRootNode: r,
                        ...e
                    },
                    a = (0, w.useMachine)(P.machine, i);
                return P.connect(a, w.normalizeProps)
            })(s), d = (0, y.usePresence)((0, r.mergeProps)({
                present: l.open
            }, o));
            return (0, t.jsx)(i, {
                value: l,
                children: (0, t.jsx)(f.PresenceProvider, {
                    value: d,
                    children: a
                })
            })
        },
        j = e => {
            let [n, {
                value: o,
                children: a
            }] = (0, b.splitPresenceProps)(e), s = (0, y.usePresence)((0, r.mergeProps)({
                present: o.open
            }, n));
            return (0, t.jsx)(i, {
                value: o,
                children: (0, t.jsx)(f.PresenceProvider, {
                    value: s,
                    children: a
                })
            })
        },
        R = (0, n.forwardRef)((e, n) => {
            let i = a(),
                s = (0, r.mergeProps)(i.getTitleProps(), e);
            return (0, t.jsx)(o.ark.div, { ...s,
                ref: n
            })
        });
    R.displayName = "PopoverTitle";
    let E = (0, n.forwardRef)((e, n) => {
        let i = a(),
            s = (0, f.usePresenceContext)(),
            l = (0, r.mergeProps)({ ...i.getTriggerProps(),
                "aria-controls": s.unmounted ? void 0 : i.getTriggerProps()["aria-controls"]
            }, e);
        return (0, t.jsx)(o.ark.button, { ...l,
            ref: n
        })
    });
    E.displayName = "PopoverTrigger", e.s(["Anchor", () => s, "Arrow", () => l, "ArrowTip", () => d, "CloseTrigger", () => u, "Content", () => p, "Context", () => g, "Description", () => m, "Indicator", () => h, "Positioner", () => v, "Root", () => C, "RootProvider", () => j, "Title", () => R, "Trigger", () => E], 421658);
    var S = e.i(421658),
        S = S;
    let {
        withRootProvider: O,
        withContext: T,
        useStyles: A,
        PropsProvider: I
    } = (0, e.i(664288).createSlotRecipeContext)({
        key: "popover"
    }), k = O(S.RootProvider), z = O(S.Root), M = T(S.Trigger, "trigger", {
        forwardAsChild: !0
    }), D = T(S.Positioner, "positioner", {
        forwardAsChild: !0
    }), N = T(S.Content, "content", {
        forwardAsChild: !0
    }), L = T(S.ArrowTip, "arrowTip", {
        forwardAsChild: !0
    }), B = T(S.Arrow, "arrow", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, t.jsx)(L, {})
        }
    }), F = T(S.CloseTrigger, "closeTrigger", {
        forwardAsChild: !0
    });
    T(S.Indicator, "indicator", {
        forwardAsChild: !0
    });
    let U = T(S.Title, "title", {
            forwardAsChild: !0
        }),
        q = T(S.Description, "description", {
            forwardAsChild: !0
        }),
        W = T("footer", "footer"),
        G = T("header", "header"),
        V = T("div", "body"),
        X = T(S.Anchor, void 0, {
            forwardAsChild: !0
        }),
        H = S.Context;
    e.s(["Anchor", () => X, "Arrow", () => B, "ArrowTip", () => L, "Body", () => V, "CloseTrigger", () => F, "Content", () => N, "Context", () => H, "Description", () => q, "Footer", () => W, "Header", () => G, "Positioner", () => D, "PropsProvider", () => I, "Root", () => z, "RootProvider", () => k, "Title", () => U, "Trigger", () => M, "usePopoverStyles", () => A], 146891);
    var Y = e.i(146891);
    e.s(["Popover", 0, Y], 196377)
}]);

//# debugId=ca479f8b-627a-b353-1a1b-c08df21dd6ed
//# sourceMappingURL=debd08b9f95028b8.js.map