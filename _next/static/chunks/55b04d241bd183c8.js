;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "6f91c096-d4ec-3a34-1cf3-1b8bff2abd55")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 728231, 210262, e => {
    "use strict";
    var t = e.i(483632);
    e.s([], 816992), e.i(816992), e.s([], 446612), e.i(446612);
    var r = e.i(30500),
        n = e.i(251570),
        i = e.i(173614);
    let [a, s] = (0, e.i(483591).createContext)({
        name: "TooltipContext",
        hookName: "useTooltipContext",
        providerName: "<TooltipProvider />"
    }), o = (0, n.forwardRef)((e, n) => {
        let a = s(),
            o = (0, r.mergeProps)(a.getArrowProps(), e);
        return (0, t.jsx)(i.ark.div, { ...o,
            ref: n
        })
    });
    o.displayName = "TooltipArrow";
    let l = (0, n.forwardRef)((e, n) => {
        let a = s(),
            o = (0, r.mergeProps)(a.getArrowTipProps(), e);
        return (0, t.jsx)(i.ark.div, { ...o,
            ref: n
        })
    });
    l.displayName = "TooltipArrowTip";
    var u = e.i(517913),
        c = e.i(139197);
    let d = (0, n.forwardRef)((e, n) => {
        let a = s(),
            o = (0, c.usePresenceContext)(),
            l = (0, r.mergeProps)(a.getContentProps(), o.getPresenceProps(), e);
        return o.unmounted ? null : (0, t.jsx)(i.ark.div, { ...l,
            ref: (0, u.composeRefs)(o.ref, n)
        })
    });
    d.displayName = "TooltipContent";
    let p = e => e.children(s()),
        m = (0, n.forwardRef)((e, n) => {
            let a = s(),
                o = (0, r.mergeProps)(a.getPositionerProps(), e);
            return (0, c.usePresenceContext)().unmounted ? null : (0, t.jsx)(i.ark.div, { ...o,
                ref: n
            })
        });
    m.displayName = "TooltipPositioner";
    var f = e.i(185676),
        g = e.i(358765),
        h = e.i(501829),
        v = e.i(458943),
        x = e.i(520036),
        w = e.i(904849);
    let y = e => {
            let [i, {
                children: s,
                ...o
            }] = (0, f.splitPresenceProps)(e), l = (e => {
                let t = (0, n.useId)(),
                    {
                        getRootNode: r
                    } = (0, x.useEnvironmentContext)(),
                    {
                        dir: i
                    } = (0, w.useLocaleContext)(),
                    a = {
                        id: t,
                        dir: i,
                        getRootNode: r,
                        ...e
                    },
                    s = (0, h.useMachine)(v.machine, a);
                return v.connect(s, h.normalizeProps)
            })(o), u = (0, g.usePresence)((0, r.mergeProps)({
                present: l.open
            }, i));
            return (0, t.jsx)(a, {
                value: l,
                children: (0, t.jsx)(c.PresenceProvider, {
                    value: u,
                    children: s
                })
            })
        },
        C = e => {
            let [n, {
                value: i,
                children: s
            }] = (0, f.splitPresenceProps)(e), o = (0, g.usePresence)((0, r.mergeProps)({
                present: i.open
            }, n));
            return (0, t.jsx)(a, {
                value: i,
                children: (0, t.jsx)(c.PresenceProvider, {
                    value: o,
                    children: s
                })
            })
        },
        P = (0, n.forwardRef)((e, n) => {
            let a = s(),
                o = (0, r.mergeProps)(a.getTriggerProps(), e);
            return (0, t.jsx)(i.ark.button, { ...o,
                ref: n
            })
        });
    P.displayName = "TooltipTrigger", e.s(["Arrow", () => o, "ArrowTip", () => l, "Content", () => d, "Context", () => p, "Positioner", () => m, "Root", () => y, "RootProvider", () => C, "Trigger", () => P], 573111);
    var N = e.i(573111),
        N = N;
    let {
        withRootProvider: b,
        withContext: $,
        useStyles: A,
        PropsProvider: T
    } = (0, e.i(664288).createSlotRecipeContext)({
        key: "tooltip"
    }), M = b(N.RootProvider), S = b(N.Root, {
        defaultProps: {
            lazyMount: !0,
            unmountOnExit: !0
        }
    }), k = $(N.Trigger, "trigger", {
        forwardAsChild: !0
    }), D = $(N.Positioner, "positioner", {
        forwardAsChild: !0
    }), O = $(N.Content, "content", {
        forwardAsChild: !0
    }), R = $(N.ArrowTip, "arrowTip", {
        forwardAsChild: !0
    }), E = $(N.Arrow, "arrow", {
        forwardAsChild: !0,
        defaultProps: {
            children: (0, t.jsx)(R, {})
        }
    }), j = N.Context;
    e.s(["Arrow", () => E, "ArrowTip", () => R, "Content", () => O, "Context", () => j, "Positioner", () => D, "PropsProvider", () => T, "Root", () => S, "RootProvider", () => M, "Trigger", () => k], 313623);
    var I = e.i(313623);
    e.s(["Tooltip", 0, I], 210262);
    var I = I,
        _ = e.i(878262);
    let L = n.forwardRef(function(e, r) {
        let {
            showArrow: i,
            children: a,
            disabled: s,
            portalled: o = !0,
            content: l,
            contentProps: u,
            portalRef: c,
            openOnClick: d = !1,
            ...p
        } = e, [m, f] = n.useState(!1);
        return s ? a : d ? (0, t.jsxs)(I.Root, { ...p,
            open: m,
            onOpenChange: e => f(e.open),
            openDelay: 0,
            closeDelay: 100,
            children: [(0, t.jsx)(I.Trigger, {
                asChild: !0,
                onClick: () => f(!m),
                children: a
            }), (0, t.jsx)(_.Portal, {
                disabled: !o,
                container: c,
                children: (0, t.jsx)(I.Positioner, {
                    children: (0, t.jsxs)(I.Content, {
                        ref: r,
                        ...u,
                        children: [i && (0, t.jsx)(I.Arrow, {
                            children: (0, t.jsx)(I.ArrowTip, {})
                        }), l]
                    })
                })
            })]
        }) : (0, t.jsxs)(I.Root, { ...p,
            openDelay: 100,
            closeDelay: 100,
            children: [(0, t.jsx)(I.Trigger, {
                asChild: !0,
                children: a
            }), (0, t.jsx)(_.Portal, {
                disabled: !o,
                container: c,
                children: (0, t.jsx)(I.Positioner, {
                    children: (0, t.jsxs)(I.Content, {
                        ref: r,
                        ...u,
                        children: [i && (0, t.jsx)(I.Arrow, {
                            children: (0, t.jsx)(I.ArrowTip, {})
                        }), l]
                    })
                })
            })]
        })
    });
    e.s(["Tooltip", 0, L], 728231)
}, 453151, e => {
    "use strict";
    e.s(["PUBLIC_LANDING_ACCENT", 0, {
        color: "rose.600",
        badgeBg: {
            base: "rose.50",
            _dark: "rose.900/30"
        },
        badgeBorder: {
            base: "rose.100",
            _dark: "rose.800"
        }
    }, "PUBLIC_LANDING_CONTAINER_MAX", 0, "7xl", "PUBLIC_LANDING_FONT_BODY", 0, "'Noto Sans', 'Be Vietnam Pro', sans-serif", "PUBLIC_LANDING_FONT_HEADING", 0, "'Be Vietnam Pro', 'Noto Sans', sans-serif", "PUBLIC_LANDING_SECTION_PY", 0, {
        base: 14,
        lg: 20
    }, "PUBLIC_LANDING_SURFACE", 0, {
        bg: {
            base: "white",
            _dark: "gray.800"
        },
        borderColor: {
            base: "gray.200",
            _dark: "gray.700"
        },
        shadow: "0 14px 35px rgba(15, 23, 42, 0.08)"
    }])
}, 585458, (e, t, r) => {
    e.e, t.exports = function() {
        "use strict";
        var e = "millisecond",
            t = "second",
            r = "minute",
            n = "hour",
            i = "week",
            a = "month",
            s = "quarter",
            o = "year",
            l = "date",
            u = "Invalid Date",
            c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            p = function(e, t, r) {
                var n = String(e);
                return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
            },
            m = "en",
            f = {};
        f[m] = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(e) {
                var t = ["th", "st", "nd", "rd"],
                    r = e % 100;
                return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]"
            }
        };
        var g = "$isDayjsObject",
            h = function(e) {
                return e instanceof y || !(!e || !e[g])
            },
            v = function e(t, r, n) {
                var i;
                if (!t) return m;
                if ("string" == typeof t) {
                    var a = t.toLowerCase();
                    f[a] && (i = a), r && (f[a] = r, i = a);
                    var s = t.split("-");
                    if (!i && s.length > 1) return e(s[0])
                } else {
                    var o = t.name;
                    f[o] = t, i = o
                }
                return !n && i && (m = i), i || !n && m
            },
            x = function(e, t) {
                if (h(e)) return e.clone();
                var r = "object" == typeof t ? t : {};
                return r.date = e, r.args = arguments, new y(r)
            },
            w = {
                s: p,
                z: function(e) {
                    var t = -e.utcOffset(),
                        r = Math.abs(t);
                    return (t <= 0 ? "+" : "-") + p(Math.floor(r / 60), 2, "0") + ":" + p(r % 60, 2, "0")
                },
                m: function e(t, r) {
                    if (t.date() < r.date()) return -e(r, t);
                    var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                        i = t.clone().add(n, a),
                        s = r - i < 0,
                        o = t.clone().add(n + (s ? -1 : 1), a);
                    return +(-(n + (r - i) / (s ? i - o : o - i)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(u) {
                    return ({
                        M: a,
                        y: o,
                        w: i,
                        d: "day",
                        D: l,
                        h: n,
                        m: r,
                        s: t,
                        ms: e,
                        Q: s
                    })[u] || String(u || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            };
        w.l = v, w.i = h, w.w = function(e, t) {
            return x(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset
            })
        };
        var y = function() {
                function p(e) {
                    this.$L = v(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[g] = !0
                }
                var m = p.prototype;
                return m.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date,
                            r = e.utc;
                        if (null === t) return new Date(NaN);
                        if (w.u(t)) return new Date;
                        if (t instanceof Date) return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var n = t.match(c);
                            if (n) {
                                var i = n[2] - 1 || 0,
                                    a = (n[7] || "0").substring(0, 3);
                                return r ? new Date(Date.UTC(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, a)) : new Date(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, a)
                            }
                        }
                        return new Date(t)
                    }(e), this.init()
                }, m.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                }, m.$utils = function() {
                    return w
                }, m.isValid = function() {
                    return this.$d.toString() !== u
                }, m.isSame = function(e, t) {
                    var r = x(e);
                    return this.startOf(t) <= r && r <= this.endOf(t)
                }, m.isAfter = function(e, t) {
                    return x(e) < this.startOf(t)
                }, m.isBefore = function(e, t) {
                    return this.endOf(t) < x(e)
                }, m.$g = function(e, t, r) {
                    return w.u(e) ? this[t] : this.set(r, e)
                }, m.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, m.valueOf = function() {
                    return this.$d.getTime()
                }, m.startOf = function(e, s) {
                    var u = this,
                        c = !!w.u(s) || s,
                        d = w.p(e),
                        p = function(e, t) {
                            var r = w.w(u.$u ? Date.UTC(u.$y, t, e) : new Date(u.$y, t, e), u);
                            return c ? r : r.endOf("day")
                        },
                        m = function(e, t) {
                            return w.w(u.toDate()[e].apply(u.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), u)
                        },
                        f = this.$W,
                        g = this.$M,
                        h = this.$D,
                        v = "set" + (this.$u ? "UTC" : "");
                    switch (d) {
                        case o:
                            return c ? p(1, 0) : p(31, 11);
                        case a:
                            return c ? p(1, g) : p(0, g + 1);
                        case i:
                            var x = this.$locale().weekStart || 0,
                                y = (f < x ? f + 7 : f) - x;
                            return p(c ? h - y : h + (6 - y), g);
                        case "day":
                        case l:
                            return m(v + "Hours", 0);
                        case n:
                            return m(v + "Minutes", 1);
                        case r:
                            return m(v + "Seconds", 2);
                        case t:
                            return m(v + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, m.endOf = function(e) {
                    return this.startOf(e, !1)
                }, m.$set = function(i, s) {
                    var u, c = w.p(i),
                        d = "set" + (this.$u ? "UTC" : ""),
                        p = ((u = {}).day = d + "Date", u[l] = d + "Date", u[a] = d + "Month", u[o] = d + "FullYear", u[n] = d + "Hours", u[r] = d + "Minutes", u[t] = d + "Seconds", u[e] = d + "Milliseconds", u)[c],
                        m = "day" === c ? this.$D + (s - this.$W) : s;
                    if (c === a || c === o) {
                        var f = this.clone().set(l, 1);
                        f.$d[p](m), f.init(), this.$d = f.set(l, Math.min(this.$D, f.daysInMonth())).$d
                    } else p && this.$d[p](m);
                    return this.init(), this
                }, m.set = function(e, t) {
                    return this.clone().$set(e, t)
                }, m.get = function(e) {
                    return this[w.p(e)]()
                }, m.add = function(e, s) {
                    var l, u = this;
                    e = Number(e);
                    var c = w.p(s),
                        d = function(t) {
                            var r = x(u);
                            return w.w(r.date(r.date() + Math.round(t * e)), u)
                        };
                    if (c === a) return this.set(a, this.$M + e);
                    if (c === o) return this.set(o, this.$y + e);
                    if ("day" === c) return d(1);
                    if (c === i) return d(7);
                    var p = ((l = {})[r] = 6e4, l[n] = 36e5, l[t] = 1e3, l)[c] || 1,
                        m = this.$d.getTime() + e * p;
                    return w.w(m, this)
                }, m.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }, m.format = function(e) {
                    var t = this,
                        r = this.$locale();
                    if (!this.isValid()) return r.invalidDate || u;
                    var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                        i = w.z(this),
                        a = this.$H,
                        s = this.$m,
                        o = this.$M,
                        l = r.weekdays,
                        c = r.months,
                        p = r.meridiem,
                        m = function(e, r, i, a) {
                            return e && (e[r] || e(t, n)) || i[r].slice(0, a)
                        },
                        f = function(e) {
                            return w.s(a % 12 || 12, e, "0")
                        },
                        g = p || function(e, t, r) {
                            var n = e < 12 ? "AM" : "PM";
                            return r ? n.toLowerCase() : n
                        };
                    return n.replace(d, function(e, n) {
                        return n || function(e) {
                            switch (e) {
                                case "YY":
                                    return String(t.$y).slice(-2);
                                case "YYYY":
                                    return w.s(t.$y, 4, "0");
                                case "M":
                                    return o + 1;
                                case "MM":
                                    return w.s(o + 1, 2, "0");
                                case "MMM":
                                    return m(r.monthsShort, o, c, 3);
                                case "MMMM":
                                    return m(c, o);
                                case "D":
                                    return t.$D;
                                case "DD":
                                    return w.s(t.$D, 2, "0");
                                case "d":
                                    return String(t.$W);
                                case "dd":
                                    return m(r.weekdaysMin, t.$W, l, 2);
                                case "ddd":
                                    return m(r.weekdaysShort, t.$W, l, 3);
                                case "dddd":
                                    return l[t.$W];
                                case "H":
                                    return String(a);
                                case "HH":
                                    return w.s(a, 2, "0");
                                case "h":
                                    return f(1);
                                case "hh":
                                    return f(2);
                                case "a":
                                    return g(a, s, !0);
                                case "A":
                                    return g(a, s, !1);
                                case "m":
                                    return String(s);
                                case "mm":
                                    return w.s(s, 2, "0");
                                case "s":
                                    return String(t.$s);
                                case "ss":
                                    return w.s(t.$s, 2, "0");
                                case "SSS":
                                    return w.s(t.$ms, 3, "0");
                                case "Z":
                                    return i
                            }
                            return null
                        }(e) || i.replace(":", "")
                    })
                }, m.utcOffset = function() {
                    return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                }, m.diff = function(e, l, u) {
                    var c, d = this,
                        p = w.p(l),
                        m = x(e),
                        f = (m.utcOffset() - this.utcOffset()) * 6e4,
                        g = this - m,
                        h = function() {
                            return w.m(d, m)
                        };
                    switch (p) {
                        case o:
                            c = h() / 12;
                            break;
                        case a:
                            c = h();
                            break;
                        case s:
                            c = h() / 3;
                            break;
                        case i:
                            c = (g - f) / 6048e5;
                            break;
                        case "day":
                            c = (g - f) / 864e5;
                            break;
                        case n:
                            c = g / 36e5;
                            break;
                        case r:
                            c = g / 6e4;
                            break;
                        case t:
                            c = g / 1e3;
                            break;
                        default:
                            c = g
                    }
                    return u ? c : w.a(c)
                }, m.daysInMonth = function() {
                    return this.endOf(a).$D
                }, m.$locale = function() {
                    return f[this.$L]
                }, m.locale = function(e, t) {
                    if (!e) return this.$L;
                    var r = this.clone(),
                        n = v(e, t, !0);
                    return n && (r.$L = n), r
                }, m.clone = function() {
                    return w.w(this.$d, this)
                }, m.toDate = function() {
                    return new Date(this.valueOf())
                }, m.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, m.toISOString = function() {
                    return this.$d.toISOString()
                }, m.toString = function() {
                    return this.$d.toUTCString()
                }, p
            }(),
            C = y.prototype;
        return x.prototype = C, [
            ["$ms", e],
            ["$s", t],
            ["$m", r],
            ["$H", n],
            ["$W", "day"],
            ["$M", a],
            ["$y", o],
            ["$D", l]
        ].forEach(function(e) {
            C[e[1]] = function(t) {
                return this.$g(t, e[0], e[1])
            }
        }), x.extend = function(e, t) {
            return e.$i || (e(t, y, x), e.$i = !0), x
        }, x.locale = v, x.isDayjs = h, x.unix = function(e) {
            return x(1e3 * e)
        }, x.en = f[m], x.Ls = f, x.p = {}, x
    }()
}, 781042, e => {
    "use strict";
    var t = e.i(739383);
    let {
        withContext: r,
        PropsProvider: n
    } = (0, e.i(285281).createRecipeContext)({
        key: "textarea"
    }), i = r(t.Field.Textarea);
    i.displayName = "Textarea", e.s(["Textarea", () => i])
}, 345070, e => {
    "use strict";
    var t = e.i(251570);

    function r(e) {
        var r;
        let n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                sync: a = !1
            } = i,
            s = (r = e, (n = (0, t.useRef)(r)).current = r, n);
        return (0, t.useCallback)(function() {
            for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return a ? queueMicrotask(() => {
                var e;
                return null == (e = s.current) ? void 0 : e.call(s, ...r)
            }) : null == (e = s.current) ? void 0 : e.call(s, ...r)
        }, [a, s])
    }
    e.s(["useEvent", () => r])
}, 139197, e => {
    "use strict";
    let [t, r] = (0, e.i(483591).createContext)({
        name: "PresenceContext",
        hookName: "usePresenceContext",
        providerName: "<PresenceProvider />"
    });
    e.s(["PresenceProvider", () => t, "usePresenceContext", () => r])
}, 358765, e => {
    "use strict";
    var t = e.i(30500),
        r = e.i(841158),
        n = e.i(593006),
        i = (0, t.createMachine)({
            props(e) {
                let {
                    props: t
                } = e;
                return { ...t,
                    present: !!t.present
                }
            },
            initialState(e) {
                let {
                    prop: t
                } = e;
                return t("present") ? "mounted" : "unmounted"
            },
            refs: () => ({
                node: null,
                styles: null
            }),
            context(e) {
                let {
                    bindable: t
                } = e;
                return {
                    unmountAnimationName: t(() => ({
                        defaultValue: null
                    })),
                    prevAnimationName: t(() => ({
                        defaultValue: null
                    })),
                    present: t(() => ({
                        defaultValue: !1
                    })),
                    initial: t(() => ({
                        sync: !0,
                        defaultValue: !1
                    }))
                }
            },
            exit: ["clearInitial", "cleanupNode"],
            watch(e) {
                let {
                    track: t,
                    prop: r,
                    send: n
                } = e;
                t([() => r("present")], () => {
                    n({
                        type: "PRESENCE.CHANGED"
                    })
                })
            },
            on: {
                "NODE.SET": {
                    actions: ["setupNode"]
                },
                "PRESENCE.CHANGED": {
                    actions: ["setInitial", "syncPresence"]
                }
            },
            states: {
                mounted: {
                    on: {
                        UNMOUNT: {
                            target: "unmounted",
                            actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
                        },
                        "UNMOUNT.SUSPEND": {
                            target: "unmountSuspended"
                        }
                    }
                },
                unmountSuspended: {
                    effects: ["trackAnimationEvents"],
                    on: {
                        MOUNT: {
                            target: "mounted",
                            actions: ["setPrevAnimationName"]
                        },
                        UNMOUNT: {
                            target: "unmounted",
                            actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
                        }
                    }
                },
                unmounted: {
                    on: {
                        MOUNT: {
                            target: "mounted",
                            actions: ["setPrevAnimationName"]
                        }
                    }
                }
            },
            implementations: {
                actions: {
                    setInitial: e => {
                        let {
                            context: t
                        } = e;
                        t.get("initial") || queueMicrotask(() => {
                            t.set("initial", !0)
                        })
                    },
                    clearInitial: e => {
                        let {
                            context: t
                        } = e;
                        t.set("initial", !1)
                    },
                    invokeOnExitComplete: e => {
                        var t;
                        let {
                            prop: n,
                            refs: i
                        } = e;
                        null == (t = n("onExitComplete")) || t();
                        let a = i.get("node");
                        if (!a) return;
                        let s = new((0, r.getWindow)(a)).CustomEvent("exitcomplete", {
                            bubbles: !1
                        });
                        a.dispatchEvent(s)
                    },
                    setupNode: e => {
                        let {
                            refs: t,
                            event: n
                        } = e;
                        t.get("node") !== n.node && (t.set("node", n.node), t.set("styles", (0, r.getComputedStyle)(n.node)))
                    },
                    cleanupNode: e => {
                        let {
                            refs: t
                        } = e;
                        t.set("node", null), t.set("styles", null)
                    },
                    syncPresence: e => {
                        let {
                            context: t,
                            refs: n,
                            send: i,
                            prop: s
                        } = e, o = s("present");
                        if (o) return i({
                            type: "MOUNT",
                            src: "presence.changed"
                        });
                        let l = n.get("node");
                        if (!o && (null == l ? void 0 : l.ownerDocument.visibilityState) === "hidden") return i({
                            type: "UNMOUNT",
                            src: "visibilitychange"
                        });
                        (0, r.raf)(() => {
                            var e, r;
                            let s = a(n.get("styles"));
                            t.set("unmountAnimationName", s), "none" === s || s === t.get("prevAnimationName") || (null == (e = n.get("styles")) ? void 0 : e.display) === "none" || (null == (r = n.get("styles")) ? void 0 : r.animationDuration) === "0s" ? i({
                                type: "UNMOUNT",
                                src: "presence.changed"
                            }) : i({
                                type: "UNMOUNT.SUSPEND"
                            })
                        })
                    },
                    setPrevAnimationName: e => {
                        let {
                            context: t,
                            refs: n
                        } = e;
                        (0, r.raf)(() => {
                            t.set("prevAnimationName", a(n.get("styles")))
                        })
                    },
                    clearPrevAnimationName: e => {
                        let {
                            context: t
                        } = e;
                        t.set("prevAnimationName", null)
                    }
                },
                effects: {
                    trackAnimationEvents: e => {
                        let {
                            context: t,
                            refs: n,
                            send: i,
                            prop: s
                        } = e, o = n.get("node");
                        if (!o) return;
                        let l = e => {
                                var r, i, s;
                                (null != (s = null == (i = e.composedPath) || null == (r = i.call(e)) ? void 0 : r[0]) ? s : e.target) === o && t.set("prevAnimationName", a(n.get("styles")))
                            },
                            u = e => {
                                let l = a(n.get("styles"));
                                (0, r.getEventTarget)(e) !== o || l !== t.get("unmountAnimationName") || s("present") || i({
                                    type: "UNMOUNT",
                                    src: "animationend"
                                })
                            },
                            c = e => {
                                (0, r.getEventTarget)(e) !== o || s("present") || i({
                                    type: "UNMOUNT",
                                    src: "animationcancel"
                                })
                            };
                        o.addEventListener("animationstart", l), o.addEventListener("animationcancel", c), o.addEventListener("animationend", u);
                        let d = (0, r.setStyle)(o, {
                            animationFillMode: "forwards"
                        });
                        return () => {
                            o.removeEventListener("animationstart", l), o.removeEventListener("animationcancel", c), o.removeEventListener("animationend", u), (0, r.nextTick)(() => d())
                        }
                    }
                }
            }
        });

    function a(e) {
        return (null == e ? void 0 : e.animationName) || "none"
    }(0, n.createProps)()(["onExitComplete", "present", "immediate"]);
    var s = e.i(501829),
        o = e.i(251570),
        l = e.i(345070);
    let u = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                lazyMount: t,
                unmountOnExit: r,
                present: n,
                skipAnimationOnMount: a = !1,
                ...u
            } = e,
            c = (0, o.useRef)(!1),
            d = { ...u,
                present: n,
                onExitComplete: (0, l.useEvent)(e.onExitComplete)
            },
            p = function(e, t) {
                let {
                    state: r,
                    send: n,
                    context: i
                } = e, a = r.matches("mounted", "unmountSuspended");
                return {
                    skip: !i.get("initial"),
                    present: a,
                    setNode(e) {
                        e && n({
                            type: "NODE.SET",
                            node: e
                        })
                    },
                    unmount() {
                        n({
                            type: "UNMOUNT"
                        })
                    }
                }
            }((0, s.useMachine)(i, d), s.normalizeProps);
        p.present && (c.current = !0);
        let m = !p.present && !c.current && t || r && !p.present && c.current;
        return {
            ref: p.setNode,
            getPresenceProps: () => ({
                "data-state": p.skip && a ? void 0 : n ? "open" : "closed",
                hidden: !p.present
            }),
            present: p.present,
            unmounted: m
        }
    };
    e.s(["usePresence", () => u], 358765)
}, 185676, e => {
    "use strict";
    var t = e.i(341061);
    let r = e => (0, t.createSplitProps)()(e, ["immediate", "lazyMount", "onExitComplete", "present", "skipAnimationOnMount", "unmountOnExit"]);
    e.s(["splitPresenceProps", () => r])
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
        r = (e, r) => (t[e] || []).includes(r),
        n = new Set(["admin", "super_admin", "mod", "mod-template", "mod-accountant"]),
        i = new Set(["mod", "mod-template"]),
        a = new Set(["admin", "super_admin", "mod", "mod-template"]),
        s = e => e ? r(e, "templates.view") ? "/admin" : r(e, "orders.view") ? "/admin/orders" : r(e, "bill-export.view") ? "/admin/bill-export" : "/" : "/";
    e.s(["canAccessAdmin", 0, e => !!e && !!e.user && n.has(e.user.role), "canAccessAgent", 0, e => !!e && !!e.user && "agent" === e.user.role, "getAdminLandingPath", 0, e => {
        var t;
        return s(null == e || null == (t = e.user) ? void 0 : t.role)
    }, "getAdminLandingPathForRole", 0, s, "hasAdminPermission", 0, (e, t) => !!e && !!e.user && r(e.user.role, t), "isAdmin", 0, e => !!e && !!e.user && n.has(e.user.role), "isAuthenticated", 0, e => !!(e && e.accessToken && e.user), "isFeatureLockBypassRole", 0, e => !!e && a.has(e), "isTemplateModeratorRole", 0, e => !!e && i.has(e)], 836271)
}, 197258, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        n = e.i(285281),
        i = e.i(489198),
        a = e.i(87065);
    let {
        useRecipeResult: s,
        PropsProvider: o
    } = (0, n.createRecipeContext)({
        key: "icon"
    }), l = r.forwardRef(function(e, r) {
        let {
            styles: n,
            className: o,
            props: l
        } = s({
            asChild: !e.as,
            ...e
        });
        return (0, t.jsx)(i.chakra.svg, {
            ref: r,
            focusable: !1,
            "aria-hidden": "true",
            ...l,
            css: [n, e.css],
            className: (0, a.cx)(o, e.className)
        })
    });
    l.displayName = "Icon", e.s(["Icon", () => l])
}, 986530, 321981, e => {
    "use strict";
    var t = e.i(483632);
    e.s([], 86721), e.i(86721);
    var r = e.i(739383),
        n = e.i(416574),
        i = e.i(251570),
        a = e.i(664288),
        s = e.i(489198),
        o = e.i(87065),
        l = e.i(197258);
    let {
        withProvider: u,
        withContext: c,
        useStyles: d,
        useClassNames: p,
        PropsProvider: m
    } = (0, a.createSlotRecipeContext)({
        key: "field"
    }), f = u(r.Field.Root, "root", {
        forwardAsChild: !0
    }), g = c(r.Field.Label, "label", {
        forwardAsChild: !0
    }), h = c(r.Field.HelperText, "helperText", {
        forwardAsChild: !0
    }), v = c(r.Field.ErrorText, "errorText", {
        forwardAsChild: !0
    }), x = function(e) {
        let {
            viewBox: r = "0 0 24 24",
            d: n,
            displayName: a,
            defaultProps: s = {}
        } = e, o = i.Children.toArray(e.path), u = (0, i.forwardRef)((e, i) => (0, t.jsx)(l.Icon, {
            ref: i,
            asChild: !1,
            viewBox: r,
            ...s,
            ...e,
            children: o.length ? o : (0, t.jsx)("path", {
                fill: "currentColor",
                d: n
            })
        }));
        return u.displayName = a, u
    }({
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }), w = (0, i.forwardRef)(function(e, r) {
        let {
            fallback: i,
            children: a = "*",
            ...l
        } = e, u = (0, n.useFieldContext)(), c = p(), m = d();
        return (null == u ? void 0 : u.required) ? (0, t.jsx)(s.chakra.span, {
            ref: r,
            "aria-hidden": "true",
            ...l,
            className: (0, o.cx)(c.requiredIndicator, e.className),
            css: [m.requiredIndicator, e.css],
            children: a
        }) : i
    });
    e.s(["ErrorIcon", () => x, "ErrorText", () => v, "HelperText", () => h, "Label", () => g, "PropsProvider", () => m, "RequiredIndicator", () => w, "Root", () => f], 523523);
    var y = e.i(523523);
    e.s(["Field", 0, y], 321981);
    var y = y;
    let C = i.forwardRef(function(e, r) {
        let {
            label: n,
            children: i,
            helperText: a,
            errorText: s,
            optionalText: o,
            ...l
        } = e;
        return (0, t.jsxs)(y.Root, {
            ref: r,
            ...l,
            children: [n && (0, t.jsxs)(y.Label, {
                children: [n, (0, t.jsx)(y.RequiredIndicator, {
                    fallback: o
                })]
            }), i, a && (0, t.jsx)(y.HelperText, {
                children: a
            }), s && (0, t.jsx)(y.ErrorText, {
                children: s
            })]
        })
    });
    e.s(["Field", 0, C], 986530)
}, 812141, e => {
    "use strict";
    var t = e.i(483591),
        r = e.i(341061);
    let [n, i] = (0, t.createContext)({
        name: "RenderStrategyContext",
        hookName: "useRenderStrategyContext",
        providerName: "<RenderStrategyPropsProvider />"
    }), a = e => (0, r.createSplitProps)()(e, ["lazyMount", "unmountOnExit"]);
    e.s(["RenderStrategyPropsProvider", () => n, "splitRenderStrategyProps", () => a, "useRenderStrategyPropsContext", () => i])
}, 474894, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(109697),
        n = e.i(251570),
        i = e.i(901407);
    let a = n.forwardRef(function(e, n) {
        var a;
        return (0, t.jsx)(r.IconButton, {
            variant: "ghost",
            "aria-label": "Close",
            ref: n,
            ...e,
            children: null != (a = e.children) ? a : (0, t.jsx)(i.LuX, {})
        })
    });
    e.s(["CloseButton", 0, a])
}, 101208, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        n = e.i(165341),
        i = e.i(564668),
        a = e.i(109697),
        s = e.i(897716);
    let o = e => {
            if (!e) return "";
            let t = e.split("-");
            if (3 !== t.length) return "";
            let [r, n, i] = t;
            return "".concat(i, "/").concat(n, "/").concat(r)
        },
        l = (e, t, r) => {
            let n = parseInt(e, 10),
                i = parseInt(t, 10),
                a = parseInt(r, 10);
            if (isNaN(n) || isNaN(i) || isNaN(a) || i < 1 || i > 12 || n < 1 || n > 31 || a < 1900 || a > 2100) return !1;
            let s = new Date(a, i - 1, n);
            return s.getFullYear() === a && s.getMonth() === i - 1 && s.getDate() === n
        };
    e.s(["DateInput", 0, e => {
        let {
            value: u = "",
            onChange: c,
            placeholder: d = "dd/mm/yyyy",
            showCalendarIcon: p = !0,
            size: m = "sm",
            ...f
        } = e, [g, h] = (0, r.useState)(() => o(u)), v = (0, r.useRef)(null), x = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            let e = o(u);
            e !== g && u && h(e)
        }, [u]);
        let w = (0, r.useCallback)(e => {
                let t = e.target.value;
                if (!t) {
                    h(""), null == c || c("");
                    return
                }
                let r = (e => {
                    let t = e.replace(/\D/g, ""),
                        r = "";
                    for (let e = 0; e < t.length && e < 8; e++)(2 === e || 4 === e) && (r += "/"), r += t[e];
                    return r
                })(t);
                h(r);
                let n = r.replace(/\D/g, "");
                if (8 === n.length) {
                    let e = n.slice(0, 2),
                        t = n.slice(2, 4),
                        r = n.slice(4, 8);
                    if (l(e, t, r)) {
                        let n = "".concat(r, "-").concat(t, "-").concat(e);
                        null == c || c(n)
                    }
                }
            }, [c]),
            y = (0, r.useCallback)(e => {
                let t = e.target.value;
                t && (h(o(t)), null == c || c(t))
            }, [c]),
            C = (0, r.useCallback)(() => {
                var e, t;
                null == (t = v.current) || null == (e = t.showPicker) || e.call(t)
            }, []),
            P = (0, r.useCallback)(() => {
                let e = g.replace(/\D/g, "");
                if (8 === e.length) {
                    let t = e.slice(0, 2),
                        r = e.slice(2, 4),
                        n = e.slice(4, 8);
                    if (l(t, r, n)) {
                        let e = "".concat(n, "-").concat(r, "-").concat(t);
                        null == c || c(e)
                    } else h(o(u))
                } else e.length > 0 && h(o(u))
            }, [g, u, c]);
        return (0, t.jsxs)(i.Box, {
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 1,
            ...f,
            children: [(0, t.jsx)(n.Input, {
                ref: x,
                type: "text",
                inputMode: "numeric",
                value: g,
                onChange: w,
                onBlur: P,
                placeholder: d,
                size: m,
                flex: 1,
                maxLength: 10
            }), (0, t.jsx)("input", {
                ref: v,
                type: "date",
                value: u,
                onChange: y,
                style: {
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                    pointerEvents: "none"
                },
                tabIndex: -1
            }), p && (0, t.jsx)(a.IconButton, {
                "aria-label": "Open calendar",
                size: "xs",
                variant: "ghost",
                onClick: C,
                children: (0, t.jsx)(s.MdCalendarToday, {})
            })]
        })
    }])
}, 930907, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(251570),
        n = e.i(13484),
        i = e.i(875111),
        a = e.i(536072);
    let s = (0, r.forwardRef)(function(e, r) {
        var s, o, l;
        let {
            columns: u,
            minChildWidth: c,
            ...d
        } = e, p = (0, n.useChakraContext)(), m = c ? (s = c, o = p, (0, i.mapObject)(s, e => {
            let t = o.tokens.getVar("sizes.".concat(e), "number" == typeof e ? "".concat(e, "px") : e);
            return null === e ? null : "repeat(auto-fit, minmax(".concat(t, ", 1fr))")
        })) : (l = u, (0, i.mapObject)(l, e => null === e ? null : "repeat(".concat(e, ", minmax(0, 1fr))")));
        return (0, t.jsx)(a.Grid, {
            ref: r,
            templateColumns: m,
            ...d
        })
    });
    s.displayName = "SimpleGrid", e.s(["SimpleGrid", () => s])
}, 742758, e => {
    "use strict";
    let {
        withContext: t,
        PropsProvider: r
    } = (0, e.i(285281).createRecipeContext)({
        key: "link"
    }), n = t("a");
    n.displayName = "Link", e.s(["Link", () => n])
}, 226943, e => {
    "use strict";
    let [t, r] = (0, e.i(483591).createContext)({
        name: "CollapsibleContext",
        hookName: "useCollapsibleContext",
        providerName: "<CollapsibleProvider />"
    });
    e.s(["CollapsibleProvider", () => t, "useCollapsibleContext", () => r])
}, 814636, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(30500),
        n = e.i(251570),
        i = e.i(173614),
        a = e.i(226943);
    let s = (0, n.forwardRef)((e, n) => {
        let s = (0, a.useCollapsibleContext)();
        if (s.isUnmounted) return null;
        let o = (0, r.mergeProps)(s.getContentProps(), e);
        return (0, t.jsx)(i.ark.div, { ...o,
            ref: n
        })
    });
    s.displayName = "CollapsibleContent", e.s(["CollapsibleContent", () => s])
}, 45515, 902121, e => {
    "use strict";
    var t = e.i(341061);
    let r = e => (0, t.createSplitProps)()(e, ["collapsedHeight", "collapsedWidth", "defaultOpen", "disabled", "id", "ids", "lazyMount", "onExitComplete", "onOpenChange", "open", "unmountOnExit"]);
    e.s(["splitCollapsibleProps", () => r], 45515);
    var n = e.i(301594),
        i = e.i(501829),
        a = e.i(251570),
        s = e.i(520036),
        o = e.i(904849);
    let l = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                lazyMount: t,
                unmountOnExit: r,
                ...l
            } = e,
            u = (0, a.useId)(),
            c = (0, a.useRef)(!1),
            {
                dir: d
            } = (0, o.useLocaleContext)(),
            {
                getRootNode: p
            } = (0, s.useEnvironmentContext)(),
            m = {
                id: u,
                dir: d,
                getRootNode: p,
                ...l
            },
            f = (0, i.useMachine)(n.machine, m),
            g = n.connect(f, i.normalizeProps);
        g.visible && (c.current = !0);
        let h = !g.visible && !c.current && t || r && !g.visible && c.current;
        return { ...g,
            isUnmounted: h
        }
    };
    e.s(["useCollapsible", () => l], 902121)
}, 404405, e => {
    "use strict";
    var t = e.i(483632),
        r = e.i(30500),
        n = e.i(251570),
        i = e.i(173614),
        a = e.i(45515),
        s = e.i(902121),
        o = e.i(226943);
    let l = (0, n.forwardRef)((e, n) => {
        let [l, u] = (0, a.splitCollapsibleProps)(e), c = (0, s.useCollapsible)(l), d = (0, r.mergeProps)(c.getRootProps(), u);
        return (0, t.jsx)(o.CollapsibleProvider, {
            value: c,
            children: (0, t.jsx)(i.ark.div, { ...d,
                ref: n
            })
        })
    });
    l.displayName = "CollapsibleRoot", e.s(["CollapsibleRoot", () => l])
}]);

//# debugId=6f91c096-d4ec-3a34-1cf3-1b8bff2abd55
//# sourceMappingURL=215db6e50a6b8552.js.map