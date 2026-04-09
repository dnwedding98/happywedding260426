;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "9085e3a1-8f0c-2268-03d4-81a8406ba23c")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 177848, e => {
    "use strict";
    let t = "https://api.mehappy.vn/api",
        n = "".concat(t, "/analytics/collect"),
        o = "".concat(t, "/analytics/identify"),
        r = "mh_anon_id",
        a = "mh.analytics.session",
        i = "mh.analytics.attribution",
        c = "mh.analytics.identify.bound",
        u = "true",
        l = {},
        d = !1,
        m = [],
        s = !1,
        f = 1e3,
        p = null,
        g = null,
        w = null,
        h = [],
        y = Date.now(),
        v = Date.now(),
        k = 0,
        b = "",
        S = 0,
        T = 0,
        I = !1,
        C = 0,
        M = 5e3,
        D = null,
        A = ["google.", "bing.com", "search.yahoo.com", "duckduckgo.com", "yandex.", "baidu.com", "ecosia.org", "coccoc.com"],
        U = {
            direct: "direct",
            facebook: "facebook",
            fb: "facebook",
            "facebook.com": "facebook",
            tiktok: "tiktok",
            "tik-tok": "tiktok",
            "tiktok.com": "tiktok",
            google: "google",
            "google.com": "google",
            referral: "referral",
            organic: "organic",
            other: "other"
        },
        _ = () => "undefined" != typeof document && ("string" != typeof u || !["0", "false", "off", "no"].includes(u.trim().toLowerCase())),
        K = e => {
            if (!e) return null;
            try {
                return JSON.parse(e)
            } catch {
                return null
            }
        },
        O = e => {
            if ("undefined" == typeof document) return null;
            try {
                return window.localStorage.getItem(e)
            } catch {
                return null
            }
        },
        L = (e, t) => {
            if ("undefined" != typeof document) try {
                window.localStorage.setItem(e, t)
            } catch {}
        },
        B = e => {
            var t;
            return "undefined" != typeof document && (null == (t = window.crypto) ? void 0 : t.randomUUID) ? "".concat(e, "_").concat(window.crypto.randomUUID()) : "".concat(e, "_").concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 10))
        },
        R = () => {
            let e = (e => {
                if ("undefined" == typeof document) return null;
                let t = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                    n = document.cookie.match(new RegExp("(?:^|; )".concat(t, "=([^;]*)")));
                return n ? decodeURIComponent(n[1]) : null
            })(r);
            if (e) return e;
            let t = B("anon");
            return ((e, t, n) => {
                if ("undefined" == typeof document) return;
                let o = "https:" === window.location.protocol ? "; Secure" : "";
                document.cookie = "".concat(e, "=").concat(encodeURIComponent(t), "; max-age=").concat(n, "; path=/; SameSite=Lax").concat(o)
            })(r, t, 31536e3), t
        },
        j = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "other";
            if (!e) return t;
            let n = e.trim().toLowerCase();
            return n ? U[n] ? U[n] : n.includes("facebook") ? "facebook" : n.includes("tiktok") ? "tiktok" : n.includes("google") ? "google" : "other" : t
        },
        N = e => {
            let t = {
                landingUrl: e.landingUrl,
                referrer: e.referrer,
                source: j(e.source, "direct"),
                utmSource: e.utmSource,
                utmMedium: e.utmMedium,
                utmCampaign: e.utmCampaign,
                utmTerm: e.utmTerm,
                utmContent: e.utmContent,
                campaignKey: ""
            };
            return t.campaignKey = x(t), t
        },
        x = e => [e.utmSource || "", e.utmMedium || "", e.utmCampaign || "", e.utmTerm || "", e.utmContent || ""].join("|"),
        P = e => {
            L(a, JSON.stringify(e))
        },
        J = e => {
            m.push(e), m.length >= 20 && Y()
        },
        E = () => {
            F(!0, !0)
        },
        z = () => {
            var e;
            return null == (e = l.getAccessToken) ? void 0 : e.call(l)
        },
        q = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = "".concat(e).concat(t).toLowerCase();
            return n.includes("/product-affiliates") ? "affiliate" : n.includes("/video") ? "video" : n.includes("/invite") || n.includes("pagetype=card") ? "inviter" : n.includes("/wedding") ? "wedding" : "other"
        },
        W = function(e) {
            var t, n, o;
            let r, a, c, u, d, m, s, f, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                g = arguments.length > 2 ? arguments[2] : void 0,
                w = F(!1, !1),
                h = g || w.sessionId,
                y = (d = (() => {
                    if ("undefined" == typeof document) return {
                        campaignKey: ""
                    };
                    let e = new URLSearchParams(window.location.search),
                        t = document.referrer || void 0,
                        n = e.get("utm_source") || void 0,
                        o = e.get("utm_medium") || void 0,
                        r = e.get("utm_campaign") || void 0,
                        a = e.get("utm_term") || void 0,
                        i = e.get("utm_content") || void 0,
                        c = {
                            landingUrl: window.location.href,
                            referrer: t,
                            source: ((e, t) => {
                                let n;
                                if (t) return j(t, "other");
                                let o = (e => {
                                    if (e) try {
                                        return new URL(e).hostname
                                    } catch {
                                        return
                                    }
                                })(e);
                                if (!o) return "direct";
                                if ("undefined" == typeof document) return "referral";
                                let r = window.location.hostname.toLowerCase(),
                                    a = o.toLowerCase();
                                return a === r ? "direct" : (n = a.toLowerCase(), A.some(e => n.includes(e))) ? "organic" : "referral"
                            })(t, n),
                            utmSource: n,
                            utmMedium: o,
                            utmCampaign: r,
                            utmTerm: a,
                            utmContent: i,
                            campaignKey: ""
                        };
                    return c.campaignKey = x(c), c
                })(), (s = (m = K(O(i))) ? N(m) : null) && (n = s, r = j((o = d).source, "direct"), a = j(n.source, "direct"), c = o.campaignKey.length > 0, u = n.campaignKey.length > 0, (!c || o.campaignKey === n.campaignKey) && (!c && u && "direct" === r && "direct" !== a || (r !== a ? "direct" === r && "direct" !== a : o.campaignKey === n.campaignKey))) ? s : (L(i, JSON.stringify(N(d))), d)),
                v = "undefined" != typeof document ? window.location.pathname : "/",
                k = "undefined" != typeof document ? window.location.search : "",
                b = null == (t = l.getUserRole) ? void 0 : t.call(l);
            return {
                eventId: p.eventId || B("evt"),
                eventName: e,
                eventTime: new Date().toISOString(),
                anonymousId: p.anonymousId || R(),
                sessionId: h,
                platform: p.platform || q(v, k),
                flowType: p.flowType || ((f = v.toLowerCase()).startsWith("/admin") ? "admin" : f.startsWith("/agent") ? "agent" : f.includes("/builder") || f.includes("/template/builder") ? "mod_design" : f.includes("/design-requests") ? "design_support" : "mod" === b || "mod-template" === b ? "mod_design" : "user"),
                source: j(p.source, j(y.source, "direct")),
                referrer: p.referrer || y.referrer,
                landingUrl: p.landingUrl || y.landingUrl,
                utmSource: p.utmSource || y.utmSource,
                utmMedium: p.utmMedium || y.utmMedium,
                utmCampaign: p.utmCampaign || y.utmCampaign,
                utmTerm: p.utmTerm || y.utmTerm,
                utmContent: p.utmContent || y.utmContent,
                pageId: p.pageId,
                orderId: p.orderId,
                videoOrderId: p.videoOrderId,
                engagementSeconds: p.engagementSeconds,
                metadata: p.metadata || {}
            }
        },
        $ = () => {
            let e = Date.now();
            return {
                sessionId: B("sess"),
                lastActivityAt: e,
                createdAt: e
            }
        },
        V = e => {
            let t = $();
            return P(t), y = t.lastActivityAt, J(W("session_start", {
                metadata: {
                    reason: e
                }
            }, t.sessionId)), t
        },
        F = (e, t) => {
            let n = Date.now(),
                o = K(O(a));
            if (!o) {
                if (e) return V("new_session");
                let t = $();
                return P(t), y = t.lastActivityAt, t
            }
            if (n - o.lastActivityAt > 18e5) {
                if (!e && !t) return o;
                if (e) return ee("idle_timeout"), V("idle_timeout");
                let n = $();
                return P(n), y = n.lastActivityAt, n
            }
            if (t) {
                let e = { ...o,
                    lastActivityAt: n
                };
                return P(e), y = n, e
            }
            return o
        },
        G = async (e, t) => {
            let o = JSON.stringify({
                events: e
            });
            if (t && "undefined" != typeof document && navigator.sendBeacon) {
                let e = new Blob([o], {
                    type: "application/json"
                });
                return navigator.sendBeacon(n, e)
            }
            let r = z(),
                a = await fetch(n, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...r ? {
                            Authorization: "Bearer ".concat(r)
                        } : {}
                    },
                    body: o,
                    keepalive: !0,
                    credentials: "omit"
                });
            return !!a.ok && "number" == typeof(await a.json()).received
        },
        H = () => {
            w || 0 === m.length || (w = setTimeout(() => {
                w = null, Y()
            }, f), f = Math.min(2 * f, 3e4))
        },
        Q = () => {
            M = 5e3, D && (clearTimeout(D), D = null)
        },
        X = e => {
            "undefined" == typeof document || D || (D = setTimeout(() => {
                D = null, ec(e)
            }, M), M = Math.min(2 * M, 6e4))
        },
        Y = async e => {
            if ("undefined" == typeof document || 0 === m.length) return;
            let t = !!(null == e ? void 0 : e.useBeacon);
            if (s && !t) return;
            if (t) {
                let e = [...m];
                m = [], await G(e, !0) || (m = [...e, ...m]);
                return
            }
            s = !0;
            let n = m.splice(0, Math.min(20, m.length));
            try {
                if (!await G(n, !1)) {
                    m = [...n, ...m], H();
                    return
                }
                f = 1e3, w && (clearTimeout(w), w = null), m.length > 0 && Y()
            } catch {
                m = [...n, ...m], H()
            } finally {
                s = !1
            }
        },
        Z = (e, t, n, o) => {
            e.addEventListener(t, n, o), h.push({
                target: e,
                event: t,
                handler: n,
                options: o
            })
        },
        ee = e => {
            let t = Date.now();
            if (t - T < 2e3) return;
            T = t;
            let n = Math.floor(k);
            k = 0, J(W("session_end", {
                engagementSeconds: n > 0 ? n : void 0,
                metadata: {
                    reason: e
                }
            }))
        },
        et = () => {
            if ("undefined" == typeof document || "visible" !== document.visibilityState) return;
            let e = Date.now(),
                t = Math.max(0, Math.floor((e - v) / 1e3));
            if (v = e, t <= 0 || !(e - y <= 6e4)) return;
            let n = Math.floor(k += t);
            n <= 0 || (k = 0, ei(n))
        },
        en = () => {
            if ("undefined" == typeof document) return;
            let e = Date.now(),
                t = Math.max(0, Math.floor((e - v) / 1e3));
            v = e, t > 0 && e - y <= 6e4 && (k += t);
            let n = Math.floor(k);
            n > 0 && (k = 0, J(W("heartbeat", {
                engagementSeconds: n
            })))
        },
        eo = e => {
            en(), ee(e), Y({
                useBeacon: !0
            })
        },
        er = () => {
            if ("undefined" != typeof document && _() && !d) {
                let e;
                d = !0, R(), F(!0, !0), Z(window, "click", e = () => E(), {
                    passive: !0
                }), Z(window, "keydown", e, {
                    passive: !0
                }), Z(window, "scroll", e, {
                    passive: !0
                }), Z(window, "mousemove", e, {
                    passive: !0
                }), Z(window, "touchstart", e, {
                    passive: !0
                }), Z(document, "visibilitychange", () => {
                    "hidden" === document.visibilityState ? (en(), Y({
                        useBeacon: !0
                    })) : (v = Date.now(), E())
                }), Z(window, "pagehide", () => {
                    eo("pagehide")
                }), Z(window, "beforeunload", () => {
                    eo("beforeunload")
                }), p = setInterval(() => {
                    Y()
                }, 5e3), v = Date.now(), g = setInterval(et, 15e3)
            }
        },
        ea = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("undefined" == typeof document || !_()) return;
            er();
            let n = "heartbeat" !== e && "session_end" !== e;
            F(n, n), J(W(e, t))
        },
        ei = e => {
            e <= 0 || ea("heartbeat", {
                engagementSeconds: e
            })
        },
        ec = async e => {
            var t;
            if ("undefined" == typeof document || !_()) return !1;
            er();
            let n = e || (null == (t = l.getUserId) ? void 0 : t.call(l)),
                r = z();
            if (!r) return !1;
            let a = Date.now();
            if (I || a - C < 5e3) return !1;
            C = a;
            let i = R(),
                u = "".concat(i, ":").concat(null != n ? n : "jwt");
            if (O(c) === u) return Q(), !0;
            I = !0;
            try {
                if (!(await fetch(o, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(r)
                        },
                        body: JSON.stringify({
                            anonymousId: i
                        }),
                        credentials: "omit"
                    })).ok) return X(e), !1;
                return L(c, u), Q(), !0
            } catch {
                return X(e), !1
            } finally {
                I = !1
            }
        };
    e.s(["bindAnonymousToUser", 0, ec, "configureAnalyticsTracker", 0, e => {
        l = { ...l,
            ...e
        }
    }, "initializeAnalyticsTracker", 0, er, "shutdownAnalyticsTracker", 0, () => {
        "undefined" == typeof document || d && (d = !1, p && (clearInterval(p), p = null), g && (clearInterval(g), g = null), w && (clearTimeout(w), w = null), D && (clearTimeout(D), D = null), h.forEach(e => {
            let {
                target: t,
                event: n,
                handler: o,
                options: r
            } = e;
            t.removeEventListener(n, o, r)
        }), h = [], en(), ee("shutdown"), Y({
            useBeacon: !0
        }))
    }, "trackAffiliateClick", 0, e => {
        ea("affiliate_click", {
            platform: "affiliate",
            metadata: {
                productId: e.productId,
                productName: e.productName,
                fallbackUrl: e.fallbackUrl
            }
        })
    }, "trackPageView", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document) return;
        let t = "".concat(window.location.pathname).concat(window.location.search),
            n = Date.now();
        b === t && n - S < 800 || (b = t, S = n, ea("page_view", { ...e,
            metadata: {
                path: window.location.pathname,
                query: window.location.search,
                ...e.metadata || {}
            }
        }))
    }])
}, 920861, e => {
    "use strict";
    let t = (0, e.i(633008).createSlice)({
            name: "drawer",
            initialState: {
                openMenuDrawer: !1
            },
            reducers: {
                openMenuDrawer: e => {
                    e.openMenuDrawer = !0
                },
                closeMenuDrawer: e => {
                    e.openMenuDrawer = !1
                }
            }
        }),
        {
            openMenuDrawer: n,
            closeMenuDrawer: o
        } = t.actions,
        r = t.reducer;
    e.s(["closeMenuDrawer", 0, o, "default", 0, r, "openMenuDrawer", 0, n, "selectOpenMenuDrawer", 0, e => e.drawer.openMenuDrawer])
}]);

//# debugId=9085e3a1-8f0c-2268-03d4-81a8406ba23c
//# sourceMappingURL=d4c30c0f5627359c.js.map