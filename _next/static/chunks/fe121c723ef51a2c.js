;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "7f5eb3e7-e0e0-871a-b1ba-e117f70e7eea")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 627734, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(481258)._(e.r(251570)).default.createContext({})
}, 404192, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(481258)._(e.r(251570)).default.createContext(null)
}, 64481, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return b
        },
        MiddlewareNotFoundError: function() {
            return O
        },
        MissingStaticPage: function() {
            return v
        },
        NormalizeError: function() {
            return m
        },
        PageNotFoundError: function() {
            return _
        },
        SP: function() {
            return g
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return s
        },
        isAbsoluteUrl: function() {
            return u
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return y
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return j
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return function() {
            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
            return r || (r = !0, t = e(...o)), t
        }
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = e => l.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return "".concat(e, "//").concat(t).concat(r ? ":" + r : "")
    }

    function s() {
        let {
            href: e
        } = window.location, t = c();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?".concat(t.slice(1).join("?")) : "")
    }
    async function y(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await y(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error('"'.concat(f(e), '.getInitialProps()" should resolve to an object. But found "').concat(n, '" instead.')), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let g = "undefined" != typeof performance,
        h = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class b extends Error {}
    class m extends Error {}
    class _ extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: ".concat(e)
        }
    }
    class v extends Error {
        constructor(e, t) {
            super(), this.message = "Failed to load static file for page: ".concat(e, " ").concat(t)
        }
    }
    class O extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function j(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 570984, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return u
        },
        searchParamsToUrlQuery: function() {
            return i
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function i(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function a(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function l(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, a(e));
            else t.set(r, a(n));
        return t
    }

    function u(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        for (let t of r) {
            for (let r of t.keys()) e.delete(r);
            for (let [r, n] of t.entries()) e.append(r, n)
        }
        return e
    }
}, 400446, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(744066)._(e.r(570984)),
        a = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", l = e.hash || "", u = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? "[".concat(r, "]") : r), e.port && (c += ":" + e.port)), u && "object" == typeof u && (u = String(i.urlQueryToSearchParams(u)));
        let s = e.search || u && "?".concat(u) || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== c ? (c = "//" + (c || ""), o && "/" !== o[0] && (o = "/" + o)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), s && "?" !== s[0] && (s = "?" + s), o = o.replace(/[?#]/g, encodeURIComponent), s = s.replace("#", "%23"), "".concat(n).concat(c).concat(o).concat(s).concat(l)
    }
    let u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return l(e)
    }
}, 915868, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(64481),
        o = e.r(997106);

    function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 390714, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 306720, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(483632),
        o = e.r(384093),
        i = {
            fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        a = {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "28px",
            margin: "0 8px"
        },
        l = function(e) {
            let {
                error: t
            } = e, r = null == t ? void 0 : t.digest;
            return (0, n.jsxs)("html", {
                id: "__next_error__",
                children: [(0, n.jsx)("head", {}), (0, n.jsxs)("body", {
                    children: [(0, n.jsx)(o.HandleISRError, {
                        error: t
                    }), (0, n.jsx)("div", {
                        style: i,
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("h2", {
                                style: a,
                                children: ["Application error: a ", r ? "server" : "client", "-side exception has occurred while loading ", window.location.hostname, " (see the", " ", r ? "server logs" : "browser console", " for more information)."]
                            }), r ? (0, n.jsx)("p", {
                                style: a,
                                children: "Digest: ".concat(r)
                            }) : null]
                        })
                    })]
                })]
            })
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 502295, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "setAttributesFromProps", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        },
        o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

    function i(e) {
        return ["async", "defer", "noModule"].includes(e)
    }

    function a(e, t) {
        for (let [r, a] of Object.entries(t)) {
            if (!t.hasOwnProperty(r) || o.includes(r) || void 0 === a) continue;
            let l = n[r] || r.toLowerCase();
            "SCRIPT" === e.tagName && i(l) ? e[l] = !!a : e.setAttribute(l, String(a)), (!1 === a || "SCRIPT" === e.tagName && i(l) && (!a || "false" === a)) && (e.setAttribute(l, ""), e.removeAttribute(l))
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 541292, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return a
        },
        requestIdleCallback: function() {
            return i
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        a = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 657048, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return _
        },
        handleClientScriptLoad: function() {
            return h
        },
        initScriptLoader: function() {
            return b
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(481258),
        a = e.r(744066),
        l = e.r(483632),
        u = i._(e.r(453325)),
        c = a._(e.r(251570)),
        s = e.r(627734),
        f = e.r(502295),
        d = e.r(541292),
        p = new Map,
        y = new Set,
        g = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: o = null,
                dangerouslySetInnerHTML: i,
                children: a = "",
                strategy: l = "afterInteractive",
                onError: c,
                stylesheets: s
            } = e, d = r || t;
            if (d && y.has(d)) return;
            if (p.has(t)) {
                y.add(d), p.get(t).then(n, c);
                return
            }
            let g = () => {
                    o && o(), y.add(d)
                },
                h = document.createElement("script"),
                b = new Promise((e, t) => {
                    h.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), g()
                    }), h.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    c && c(e)
                });
            i ? (h.innerHTML = i.__html || "", g()) : a ? (h.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", g()) : t && (h.src = t, p.set(t, b)), (0, f.setAttributesFromProps)(h, e), "worker" === l && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", l), s && (e => {
                if (u.default.preinit) return e.forEach(e => {
                    u.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("undefined" != typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(s), document.body.appendChild(h)
        };

    function h(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => g(e))
        }) : g(e)
    }

    function b(e) {
        e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            y.add(t)
        })
    }

    function m(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: o = null,
            strategy: i = "afterInteractive",
            onError: a,
            stylesheets: f,
            ...p
        } = e, {
            updateScripts: h,
            scripts: b,
            getIsSsr: m,
            appDir: _,
            nonce: v
        } = (0, c.useContext)(s.HeadManagerContext);
        v = p.nonce || v;
        let O = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
            let e = t || r;
            O.current || (o && e && y.has(e) && o(), O.current = !0)
        }, [o, t, r]);
        let j = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
                if (!j.current) {
                    if ("afterInteractive" === i) g(e);
                    else "lazyOnload" === i && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => g(e)) : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => g(e))
                    }));
                    j.current = !0
                }
            }, [e, i]), ("beforeInteractive" === i || "worker" === i) && (h ? (b[i] = (b[i] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: o,
                onError: a,
                ...p,
                nonce: v
            }]), h(b)) : m && m() ? y.add(t || r) : m && !m() && g({ ...e,
                nonce: v
            })), _) {
            if (f && f.forEach(e => {
                    u.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === i)
                if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([0, { ...p,
                            id: t
                        }]), ")")
                    }
                });
                else return u.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: v,
                    crossOrigin: p.crossOrigin
                } : {
                    as: "script",
                    nonce: v,
                    crossOrigin: p.crossOrigin
                }), (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([r, { ...p,
                            id: t
                        }]), ")")
                    }
                });
            "afterInteractive" === i && r && u.default.preload(r, p.integrity ? {
                as: "script",
                integrity: p.integrity,
                nonce: v,
                crossOrigin: p.crossOrigin
            } : {
                as: "script",
                nonce: v,
                crossOrigin: p.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(m, "__nextScript", {
        value: !0
    });
    let _ = m;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}]);

//# debugId=7f5eb3e7-e0e0-871a-b1ba-e117f70e7eea
//# sourceMappingURL=731397dd45ab07ba.js.map