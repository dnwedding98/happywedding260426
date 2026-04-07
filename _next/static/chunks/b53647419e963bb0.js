;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "282949a3-2c49-98bf-1125-40a4e5c459fd")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 839972, t => {
    "use strict";
    let e = globalThis;
    t.s(["GLOBAL_OBJ", () => e])
}, 607160, t => {
    "use strict";
    let e = Object.prototype.toString;

    function n(t) {
        switch (e.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return h(t, Error)
        }
    }

    function r(t, n) {
        return e.call(t) === "[object ".concat(n, "]")
    }

    function i(t) {
        return r(t, "ErrorEvent")
    }

    function a(t) {
        return r(t, "DOMError")
    }

    function s(t) {
        return r(t, "DOMException")
    }

    function o(t) {
        return r(t, "String")
    }

    function c(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
    }

    function l(t) {
        return null === t || c(t) || "object" != typeof t && "function" != typeof t
    }

    function u(t) {
        return r(t, "Object")
    }

    function p(t) {
        return "undefined" != typeof Event && h(t, Event)
    }

    function d(t) {
        return "undefined" != typeof Element && h(t, Element)
    }

    function _(t) {
        return r(t, "RegExp")
    }

    function g(t) {
        return !!((null == t ? void 0 : t.then) && "function" == typeof t.then)
    }

    function f(t) {
        return u(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function h(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function m(t) {
        return !!("object" == typeof t && null !== t && (t.__isVue || t._isVue || t.__v_isVNode))
    }

    function S(t) {
        return "undefined" != typeof Request && h(t, Request)
    }
    t.s(["isDOMError", () => a, "isDOMException", () => s, "isElement", () => d, "isError", () => n, "isErrorEvent", () => i, "isEvent", () => p, "isInstanceOf", () => h, "isParameterizedString", () => c, "isPlainObject", () => u, "isPrimitive", () => l, "isRegExp", () => _, "isRequest", () => S, "isString", () => o, "isSyntheticEvent", () => f, "isThenable", () => g, "isVueViewModel", () => m])
}, 781371, t => {
    "use strict";
    let e = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    t.s(["DEBUG_BUILD", () => e])
}, 858663, t => {
    "use strict";
    var e = t.i(607160);
    let n = t.i(839972).GLOBAL_OBJ;

    function r(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t) return "<unknown>";
        try {
            let i, a = t,
                s = [],
                o = 0,
                c = 0,
                l = Array.isArray(r) ? r : r.keyAttrs,
                u = !Array.isArray(r) && r.maxStringLength || 80;
            for (; a && o++ < 5 && (i = function(t, r) {
                    let i = [];
                    if (!(null == t ? void 0 : t.tagName)) return "";
                    if (n.HTMLElement && t instanceof HTMLElement && t.dataset) {
                        if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                        if (t.dataset.sentryElement) return t.dataset.sentryElement
                    }
                    i.push(t.tagName.toLowerCase());
                    let a = (null == r ? void 0 : r.length) ? r.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                    if (null == a ? void 0 : a.length) a.forEach(t => {
                        i.push("[".concat(t[0], '="').concat(t[1], '"]'))
                    });
                    else {
                        t.id && i.push("#".concat(t.id));
                        let n = t.className;
                        if (n && (0, e.isString)(n))
                            for (let t of n.split(/\s+/)) i.push(".".concat(t))
                    }
                    for (let e of ["aria-label", "type", "name", "title", "alt"]) {
                        let n = t.getAttribute(e);
                        n && i.push("[".concat(e, '="').concat(n, '"]'))
                    }
                    return i.join("")
                }(a, l), "html" !== i && (!(o > 1) || !(c + 3 * s.length + i.length >= u)));) s.push(i), c += i.length, a = a.parentNode;
            return s.reverse().join(" > ")
        } catch {
            return "<unknown>"
        }
    }

    function i() {
        try {
            return n.document.location.href
        } catch {
            return ""
        }
    }

    function a(t) {
        if (!n.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5 && e; t++) {
            if (e instanceof HTMLElement) {
                if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                if (e.dataset.sentryElement) return e.dataset.sentryElement
            }
            e = e.parentNode
        }
        return null
    }
    t.s(["getComponentName", () => a, "getLocationHref", () => i, "htmlTreeAsString", () => r])
}, 830106, t => {
    "use strict";
    t.s(["SDK_VERSION", () => "10.40.0"])
}, 978125, t => {
    "use strict";
    var e = t.i(830106),
        n = t.i(839972);

    function r() {
        return i(n.GLOBAL_OBJ), n.GLOBAL_OBJ
    }

    function i(t) {
        let n = t.__SENTRY__ = t.__SENTRY__ || {};
        return n.version = n.version || e.SDK_VERSION, n[e.SDK_VERSION] = n[e.SDK_VERSION] || {}
    }

    function a(t, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.GLOBAL_OBJ,
            a = i.__SENTRY__ = i.__SENTRY__ || {},
            s = a[e.SDK_VERSION] = a[e.SDK_VERSION] || {};
        return s[t] || (s[t] = r())
    }
    t.s(["getGlobalSingleton", () => a, "getMainCarrier", () => r, "getSentryCarrier", () => i])
}, 924196, 294341, t => {
    "use strict";
    var e = t.i(781371),
        n = t.i(858663),
        r = t.i(978125),
        i = t.i(839972);
    let a = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        s = {};

    function o(t) {
        if (!("console" in i.GLOBAL_OBJ)) return t();
        let e = i.GLOBAL_OBJ.console,
            n = {},
            r = Object.keys(s);
        r.forEach(t => {
            let r = s[t];
            n[t] = e[t], e[t] = r
        });
        try {
            return t()
        } finally {
            r.forEach(t => {
                e[t] = n[t]
            })
        }
    }

    function c() {
        return u().enabled
    }

    function l(t) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
        e.DEBUG_BUILD && c() && o(() => {
            i.GLOBAL_OBJ.console[t]("".concat("Sentry Logger ", "[").concat(t, "]:"), ...r)
        })
    }

    function u() {
        return e.DEBUG_BUILD ? (0, r.getGlobalSingleton)("loggerSettings", () => ({
            enabled: !1
        })) : {
            enabled: !1
        }
    }
    let p = {
        enable: function() {
            u().enabled = !0
        },
        disable: function() {
            u().enabled = !1
        },
        isEnabled: c,
        log: function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            l("log", ...e)
        },
        warn: function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            l("warn", ...e)
        },
        error: function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            l("error", ...e)
        }
    };
    t.s(["CONSOLE_LEVELS", () => a, "consoleSandbox", () => o, "debug", () => p, "originalConsoleMethods", () => s], 294341);
    var d = t.i(607160);

    function _(t, n, r) {
        if (!(n in t)) return;
        let i = t[n];
        if ("function" != typeof i) return;
        let a = r(i);
        "function" == typeof a && f(a, i);
        try {
            t[n] = a
        } catch {
            e.DEBUG_BUILD && p.log('Failed to replace method "'.concat(n, '" in object'), t)
        }
    }

    function g(t, n, r) {
        try {
            Object.defineProperty(t, n, {
                value: r,
                writable: !0,
                configurable: !0
            })
        } catch {
            e.DEBUG_BUILD && p.log('Failed to add non-enumerable property "'.concat(n, '" to object'), t)
        }
    }

    function f(t, e) {
        try {
            let n = e.prototype || {};
            t.prototype = e.prototype = n, g(t, "__sentry_original__", e)
        } catch {}
    }

    function h(t) {
        return t.__sentry_original__
    }

    function m(t) {
        if ((0, d.isError)(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...v(t)
        };
        if (!(0, d.isEvent)(t)) return t; {
            let e = {
                type: t.type,
                target: S(t.target),
                currentTarget: S(t.currentTarget),
                ...v(t)
            };
            return "undefined" != typeof CustomEvent && (0, d.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
        }
    }

    function S(t) {
        try {
            return (0, d.isElement)(t) ? (0, n.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function v(t) {
        if ("object" != typeof t || null === t) return {}; {
            let e = {};
            for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
    }

    function E(t) {
        let e = Object.keys(m(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
    }
    t.s(["addNonEnumerableProperty", () => g, "convertToPlainObject", () => m, "extractExceptionKeysForMessage", () => E, "fill", () => _, "getOriginalFunction", () => h, "markFunctionWrapped", () => f], 924196)
}, 507698, t => {
    "use strict";
    let e = /\(error: (.*)\)/,
        n = /captureMessage|captureException/;

    function r() {
        for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        let s = r.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return function(t) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = [],
                c = t.split("\n");
            for (let t = r; t < c.length; t++) {
                let n = c[t];
                n.length > 1024 && (n = n.slice(0, 1024));
                let r = e.test(n) ? n.replace(e, "$1") : n;
                if (!r.match(/\S*Error: /)) {
                    for (let t of s) {
                        let e = t(r);
                        if (e) {
                            o.push(e);
                            break
                        }
                    }
                    if (o.length >= 50 + i) break
                }
            }
            var l = o.slice(i);
            if (!l.length) return [];
            let u = Array.from(l);
            return /sentryWrapped/.test(a(u).function || "") && u.pop(), u.reverse(), n.test(a(u).function || "") && (u.pop(), n.test(a(u).function || "") && u.pop()), u.slice(0, 50).map(t => ({ ...t,
                filename: t.filename || a(u).filename,
                function: t.function || "?"
            }))
        }
    }

    function i(t) {
        return Array.isArray(t) ? r(...t) : t
    }

    function a(t) {
        return t[t.length - 1] || {}
    }
    let s = "<anonymous>";

    function o(t) {
        try {
            if (!t || "function" != typeof t) return s;
            return t.name || s
        } catch {
            return s
        }
    }

    function c(t) {
        let e = t.exception;
        if (e) {
            let t = [];
            try {
                return e.values.forEach(e => {
                    e.stacktrace.frames && t.push(...e.stacktrace.frames)
                }), t
            } catch {}
        }
    }

    function l(t) {
        return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
    }

    function u(t) {
        let e = (null == t ? void 0 : t.startsWith("file://")) ? t.slice(7) : t;
        return (null == e ? void 0 : e.match(/\/[A-Z]:/)) && (e = e.slice(1)), e
    }
    t.s(["UNKNOWN_FUNCTION", () => "?", "createStackParser", () => r, "getFramesFromEvent", () => c, "getFunctionName", () => o, "getVueInternalName", () => l, "normalizeStackTracePath", () => u, "stackParserFromStackParserOptions", () => i])
}, 350088, t => {
    "use strict";
    var e = t.i(607160),
        n = t.i(924196),
        r = t.i(507698);

    function i(i) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Infinity;
        try {
            return function i(a, s) {
                let o, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Infinity,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Infinity,
                    u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (o = new WeakSet, [function(t) {
                        return !!o.has(t) || (o.add(t), !1)
                    }, function(t) {
                        o.delete(t)
                    }]),
                    [p, d] = u;
                if (null == s || ["boolean", "string"].includes(typeof s) || "number" == typeof s && Number.isFinite(s)) return s;
                let _ = function(n, i) {
                    try {
                        var a;
                        let s;
                        if ("domain" === n && i && "object" == typeof i && i._events) return "[Domain]";
                        if ("domainEmitter" === n) return "[DomainEmitter]";
                        if (i === t.g) return "[Global]";
                        if ("undefined" != typeof window && i === window) return "[Window]";
                        if ("undefined" != typeof document && i === document) return "[Document]";
                        if ((0, e.isVueViewModel)(i)) return (0, r.getVueInternalName)(i);
                        if ((0, e.isSyntheticEvent)(i)) return "[SyntheticEvent]";
                        if ("number" == typeof i && !Number.isFinite(i)) return "[".concat(i, "]");
                        if ("function" == typeof i) return "[Function: ".concat((0, r.getFunctionName)(i), "]");
                        if ("symbol" == typeof i) return "[".concat(String(i), "]");
                        if ("bigint" == typeof i) return "[BigInt: ".concat(String(i), "]");
                        let o = (a = i, s = Object.getPrototypeOf(a), (null == s ? void 0 : s.constructor) ? s.constructor.name : "null prototype");
                        if (/^HTML(\w*)Element$/.test(o)) return "[HTMLElement: ".concat(o, "]");
                        return "[object ".concat(o, "]")
                    } catch (t) {
                        return "**non-serializable** (".concat(t, ")")
                    }
                }(a, s);
                if (!_.startsWith("[object ")) return _;
                if (s.__sentry_skip_normalization__) return s;
                let g = "number" == typeof s.__sentry_override_normalization_depth__ ? s.__sentry_override_normalization_depth__ : c;
                if (0 === g) return _.replace("object ", "");
                if (p(s)) return "[Circular ~]";
                if (s && "function" == typeof s.toJSON) try {
                    let t = s.toJSON();
                    return i("", t, g - 1, l, u)
                } catch {}
                let f = Array.isArray(s) ? [] : {},
                    h = 0,
                    m = (0, n.convertToPlainObject)(s);
                for (let t in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
                    if (h >= l) {
                        f[t] = "[MaxProperties ~]";
                        break
                    }
                    let e = m[t];
                    f[t] = i(t, e, g - 1, l, u), h++
                }
                return d(s), f
            }("", i, a, s)
        } catch (t) {
            return {
                ERROR: "**non-serializable** (".concat(t, ")")
            }
        }
    }
    t.s(["normalize", () => i, "normalizeToSize", () => function t(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
            a = i(e, n);
        return ~-encodeURI(JSON.stringify(a)).split(/%..|./).length > r ? t(e, n - 1, r) : a
    }])
}, 414547, t => {
    "use strict";
    let e;
    var n = t.i(839972);

    function r(t) {
        if (void 0 !== e) return e ? e(t) : t();
        let r = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
            i = n.GLOBAL_OBJ;
        return r in i && "function" == typeof i[r] ? (e = i[r])(t) : (e = null, t())
    }

    function i() {
        return r(() => Math.random())
    }

    function a() {
        return r(() => Date.now())
    }
    t.s(["safeDateNow", () => a, "safeMathRandom", () => i, "withRandomSafeContext", () => r])
}, 121621, t => {
    "use strict";
    let e;
    var n = t.i(414547),
        r = t.i(839972);

    function i() {
        return (0, n.safeDateNow)() / 1e3
    }

    function a() {
        return (null != e ? e : e = function() {
            let {
                performance: t
            } = r.GLOBAL_OBJ;
            if (!(null == t ? void 0 : t.now) || !t.timeOrigin) return i;
            let e = t.timeOrigin;
            return () => (e + (0, n.withRandomSafeContext)(() => t.now())) / 1e3
        }())()
    }
    let s = null;

    function o() {
        return null === s && (s = function() {
            var t;
            let {
                performance: e
            } = r.GLOBAL_OBJ;
            if (!(null == e ? void 0 : e.now)) return;
            let i = (0, n.withRandomSafeContext)(() => e.now()),
                a = (0, n.safeDateNow)(),
                s = e.timeOrigin;
            if ("number" == typeof s && 3e5 > Math.abs(s + i - a)) return s;
            let o = null == (t = e.timing) ? void 0 : t.navigationStart;
            return "number" == typeof o && 3e5 > Math.abs(o + i - a) ? o : a - i
        }()), s
    }
    t.s(["browserPerformanceTimeOrigin", () => o, "dateTimestampInSeconds", () => i, "timestampInSeconds", () => a])
}, 3323, 131265, t => {
    "use strict";
    let e;
    var n = t.i(924196),
        r = t.i(414547),
        i = t.i(607160),
        a = t.i(507698);

    function s(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "string" != typeof t || 0 === e || t.length <= e ? t : "".concat(t.slice(0, e), "...")
    }

    function o(t, e) {
        let n = t,
            r = n.length;
        if (r <= 150) return n;
        e > r && (e = r);
        let i = Math.max(e - 60, 0);
        i < 5 && (i = 0);
        let a = Math.min(i + 140, r);
        return a > r - 5 && (a = r), a === r && (i = Math.max(a - 140, 0)), n = n.slice(i, a), i > 0 && (n = "'{snip} ".concat(n)), a < r && (n += " {snip}"), n
    }

    function c(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            try {
                (0, i.isVueViewModel)(r) ? n.push((0, a.getVueInternalName)(r)): n.push(String(r))
            } catch {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function l(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !!(0, i.isString)(t) && ((0, i.isRegExp)(e) ? e.test(t) : !!(0, i.isString)(e) && (n ? t === e : t.includes(e)))
    }

    function u(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e.some(e => l(t, e, n))
    }
    t.s(["isMatchingPattern", () => l, "safeJoin", () => c, "snipLine", () => o, "stringMatchesSomePattern", () => u, "truncate", () => s], 131265);
    var p = t.i(839972);

    function d() {
        let t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (t = p.GLOBAL_OBJ).crypto || t.msCrypto;
        try {
            if (null == n ? void 0 : n.randomUUID) return (0, r.withRandomSafeContext)(() => n.randomUUID()).replace(/-/g, "")
        } catch {}
        return e || (e = "10000000100040008000100000000000"), e.replace(/[018]/g, t => (t ^ (15 & 16 * (0, r.safeMathRandom)()) >> t / 4).toString(16))
    }

    function _(t) {
        var e, n;
        return null == (n = t.exception) || null == (e = n.values) ? void 0 : e[0]
    }

    function g(t) {
        let {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        let r = _(t);
        return r ? r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }

    function f(t, e, n) {
        let r = t.exception = t.exception || {},
            i = r.values = r.values || [],
            a = i[0] = i[0] || {};
        a.value || (a.value = e || ""), a.type || (a.type = n || "Error")
    }

    function h(t, e) {
        let n = _(t);
        if (!n) return;
        let r = n.mechanism;
        if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...e
            }, e && "data" in e) {
            let t = { ...null == r ? void 0 : r.data,
                ...e.data
            };
            n.mechanism.data = t
        }
    }

    function m(t) {
        if (function(t) {
                try {
                    return t.__sentry_captured__
                } catch {}
            }(t)) return !0;
        try {
            (0, n.addNonEnumerableProperty)(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }
    t.s(["addExceptionMechanism", () => h, "addExceptionTypeValue", () => f, "checkOrSetAlreadyCaught", () => m, "getEventDescription", () => g, "uuid4", () => d], 3323)
}, 274638, 254603, 680732, 178032, 474381, 190055, 972106, 736928, 19, 823824, 43023, 94806, 348425, 708005, 614076, 723538, 571542, 869323, 182449, 977151, 380508, 117330, t => {
    "use strict";
    var e = t.i(978125),
        n = t.i(781371),
        r = t.i(3323),
        i = t.i(121621);

    function a(t) {
        let e = (0, i.timestampInSeconds)(),
            n = {
                sid: (0, r.uuid4)(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => {
                    var t;
                    return t = n, {
                        sid: "".concat(t.sid),
                        init: t.init,
                        started: new Date(1e3 * t.started).toISOString(),
                        timestamp: new Date(1e3 * t.timestamp).toISOString(),
                        status: t.status,
                        errors: t.errors,
                        did: "number" == typeof t.did || "string" == typeof t.did ? "".concat(t.did) : void 0,
                        duration: t.duration,
                        abnormal_mechanism: t.abnormal_mechanism,
                        attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent
                        }
                    }
                }
            };
        return t && s(n, t), n
    }

    function s(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, i.timestampInSeconds)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.uuid4)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = "".concat(e.did)), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
            let e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function o(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : "ok" === t.status && (n = {
            status: "exited"
        }), s(t, n)
    }
    t.s(["closeSession", () => o, "makeSession", () => a, "updateSession", () => s], 254603);
    var c = t.i(294341),
        l = t.i(607160);

    function u(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        if (!e || "object" != typeof e || n <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        let r = { ...t
        };
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = u(r[t], e[t], n - 1));
        return r
    }

    function p() {
        return (0, r.uuid4)()
    }

    function d() {
        return (0, r.uuid4)().substring(16)
    }
    t.s(["merge", () => u], 680732), t.s(["generateSpanId", () => d, "generateTraceId", () => p], 178032);
    var _ = t.i(414547),
        g = t.i(924196);
    let f = "_sentrySpan";

    function h(t, e) {
        e ? (0, g.addNonEnumerableProperty)(t, f, e) : delete t[f]
    }

    function m(t) {
        return t[f]
    }
    t.s(["_getSpanForScope", () => m, "_setSpanForScope", () => h], 474381);
    var S = t.i(131265);
    class v {
        clone() {
            let t = new v;
            return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags
            }, t._attributes = { ...this._attributes
            }, t._extra = { ...this._extra
            }, t._contexts = { ...this._contexts
            }, this._contexts.flags && (t._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
            }, t._propagationContext = { ...this._propagationContext
            }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, h(t, this[f]), t
        }
        setClient(t) {
            this._client = t
        }
        setLastEventId(t) {
            this._lastEventId = t
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && s(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setConversationId(t) {
            return this._conversationId = t || void 0, this._notifyScopeListeners(), this
        }
        setTags(t) {
            return this._tags = { ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
            return this.setTags({
                [t]: e
            })
        }
        setAttributes(t) {
            return this._attributes = { ...this._attributes,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setAttribute(t, e) {
            return this.setAttributes({
                [t]: e
            })
        }
        removeAttribute(t) {
            return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this
        }
        setExtras(t) {
            return this._extra = { ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, e) {
            return this._extra = { ...this._extra,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, e) {
            return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            let e = "function" == typeof t ? t(this) : t,
                {
                    tags: n,
                    attributes: r,
                    extra: i,
                    user: a,
                    contexts: s,
                    level: o,
                    fingerprint: c = [],
                    propagationContext: u,
                    conversationId: p
                } = (e instanceof v ? e.getScopeData() : (0, l.isPlainObject)(e) ? t : void 0) || {};
            return this._tags = { ...this._tags,
                ...n
            }, this._attributes = { ...this._attributes,
                ...r
            }, this._extra = { ...this._extra,
                ...i
            }, this._contexts = { ...this._contexts,
                ...s
            }, a && Object.keys(a).length && (this._user = a), o && (this._level = o), c.length && (this._fingerprint = c), u && (this._propagationContext = u), p && (this._conversationId = p), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, h(this, void 0), this._attachments = [], this.setPropagationContext({
                traceId: p(),
                sampleRand: (0, _.safeMathRandom)()
            }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(t, e) {
            let n = "number" == typeof e ? e : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: (0, i.dateTimestampInSeconds)(),
                ...t,
                message: t.message ? (0, S.truncate)(t.message, 2048) : t.message
            };
            if (this._breadcrumbs.push(r), this._breadcrumbs.length > n) {
                var a;
                this._breadcrumbs = this._breadcrumbs.slice(-n), null == (a = this._client) || a.recordDroppedEvent("buffer_overflow", "log_item")
            }
            return this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                attributes: this._attributes,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                span: this[f],
                conversationId: this._conversationId
            }
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = u(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, e) {
            let i = (null == e ? void 0 : e.event_id) || (0, r.uuid4)();
            if (!this._client) return n.DEBUG_BUILD && c.debug.warn("No client configured on scope - will not capture exception!"), i;
            let a = Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: a,
                ...e,
                event_id: i
            }, this), i
        }
        captureMessage(t, e, i) {
            var a;
            let s = (null == i ? void 0 : i.event_id) || (0, r.uuid4)();
            if (!this._client) return n.DEBUG_BUILD && c.debug.warn("No client configured on scope - will not capture message!"), s;
            let o = null != (a = null == i ? void 0 : i.syntheticException) ? a : Error(t);
            return this._client.captureMessage(t, e, {
                originalException: t,
                syntheticException: o,
                ...i,
                event_id: s
            }, this), s
        }
        captureEvent(t, e) {
            let i = t.event_id || (null == e ? void 0 : e.event_id) || (0, r.uuid4)();
            return this._client ? this._client.captureEvent(t, { ...e,
                event_id: i
            }, this) : n.DEBUG_BUILD && c.debug.warn("No client configured on scope - will not capture event!"), i
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                traceId: p(),
                sampleRand: (0, _.safeMathRandom)()
            }
        }
    }
    t.s(["Scope", () => v], 190055);
    class E {
        withScope(t) {
            let e, n = this._pushScope();
            try {
                e = t(n)
            } catch (t) {
                throw this._popScope(), t
            }
            return (0, l.isThenable)(e) ? e.then(t => (this._popScope(), t), t => {
                throw this._popScope(), t
            }) : (this._popScope(), e)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        _pushScope() {
            let t = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: t
            }), t
        }
        _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop()
        }
        constructor(t, e) {
            let n, r;
            n = t || new v, r = e || new v, this._stack = [{
                scope: n
            }], this._isolationScope = r
        }
    }

    function y() {
        let t = (0, e.getMainCarrier)(),
            n = (0, e.getSentryCarrier)(t);
        return n.stack = n.stack || new E((0, e.getGlobalSingleton)("defaultCurrentScope", () => new v), (0, e.getGlobalSingleton)("defaultIsolationScope", () => new v))
    }

    function T(t) {
        return y().withScope(t)
    }

    function b(t, e) {
        let n = y();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)))
    }

    function I(t) {
        return y().withScope(() => t(y().getIsolationScope()))
    }

    function A(t) {
        let n = (0, e.getSentryCarrier)(t);
        return n.acs ? n.acs : {
            withIsolationScope: I,
            withScope: T,
            withSetScope: b,
            withSetIsolationScope: (t, e) => I(e),
            getCurrentScope: () => y().getScope(),
            getIsolationScope: () => y().getIsolationScope()
        }
    }

    function N() {
        return A((0, e.getMainCarrier)()).getCurrentScope()
    }

    function C() {
        return A((0, e.getMainCarrier)()).getIsolationScope()
    }

    function x() {
        return (0, e.getGlobalSingleton)("globalScope", () => new v)
    }

    function R() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = A((0, e.getMainCarrier)());
        if (2 === n.length) {
            let [t, e] = n;
            return t ? i.withSetScope(t, e) : i.withScope(e)
        }
        return i.withScope(n[0])
    }

    function O() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let i = A((0, e.getMainCarrier)());
        if (2 === n.length) {
            let [t, e] = n;
            return t ? i.withSetIsolationScope(t, e) : i.withIsolationScope(e)
        }
        return i.withIsolationScope(n[0])
    }

    function D() {
        return N().getClient()
    }

    function M(t) {
        let {
            traceId: e,
            parentSpanId: n,
            propagationSpanId: r
        } = t.getPropagationContext(), i = {
            trace_id: e,
            span_id: r || d()
        };
        return n && (i.parent_span_id = n), i
    }
    t.s(["getAsyncContextStrategy", () => A], 972106), t.s(["getClient", () => D, "getCurrentScope", () => N, "getGlobalScope", () => x, "getIsolationScope", () => C, "getTraceContextFromScope", () => M, "withIsolationScope", () => O, "withScope", () => R], 274638);
    let k = "sentry.source",
        U = "sentry.sample_rate",
        L = "sentry.previous_trace_sample_rate",
        w = "sentry.op",
        B = "sentry.origin";
    t.s(["GEN_AI_CONVERSATION_ID_ATTRIBUTE", () => "gen_ai.conversation.id", "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME", () => "sentry.exclusive_time", "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD", () => "http.request.method", "SEMANTIC_ATTRIBUTE_PROFILE_ID", () => "sentry.profile_id", "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME", () => "sentry.custom_span_name", "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON", () => "sentry.idle_span_finish_reason", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT", () => "sentry.measurement_unit", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE", () => "sentry.measurement_value", "SEMANTIC_ATTRIBUTE_SENTRY_OP", () => w, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", () => B, "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE", () => L, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", () => U, "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", () => k, "SEMANTIC_ATTRIBUTE_URL_FULL", () => "url.full", "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE", () => "sentry.link.type"], 736928);
    let P = "sentry-",
        G = /^sentry-/;

    function j(t) {
        let e = J(t);
        if (!e) return;
        let n = Object.entries(e).reduce((t, e) => {
            let [n, r] = e;
            return n.match(G) && (t[n.slice(P.length)] = r), t
        }, {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function F(t) {
        if (t) {
            var e = Object.entries(t).reduce((t, e) => {
                let [n, r] = e;
                return r && (t["".concat(P).concat(n)] = r), t
            }, {});
            return 0 !== Object.keys(e).length ? Object.entries(e).reduce((t, e, r) => {
                let [i, a] = e, s = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(a)), o = 0 === r ? s : "".concat(t, ",").concat(s);
                return o.length > 8192 ? (n.DEBUG_BUILD && c.debug.warn("Not adding key: ".concat(i, " with val: ").concat(a, " to baggage header due to exceeding baggage size limits.")), t) : o
            }, "") : void 0
        }
    }

    function J(t) {
        if (t && ((0, l.isString)(t) || Array.isArray(t))) return Array.isArray(t) ? t.reduce((t, e) => (Object.entries(Y(e)).forEach(e => {
            let [n, r] = e;
            t[n] = r
        }), t), {}) : Y(t)
    }

    function Y(t) {
        return t.split(",").map(t => {
            let e = t.indexOf("=");
            return -1 === e ? [] : [t.slice(0, e), t.slice(e + 1)].map(t => {
                try {
                    return decodeURIComponent(t.trim())
                } catch {
                    return
                }
            })
        }).reduce((t, e) => {
            let [n, r] = e;
            return n && r && (t[n] = r), t
        }, {})
    }

    function V(t, e) {
        var n, r, i, a;
        let s, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
        try {
            s = t()
        } catch (t) {
            throw e(t), o(), t
        }
        return n = s, r = e, i = o, a = c, (0, l.isThenable)(n) ? n.then(t => (i(), a(t), t), t => {
            throw r(t), i(), t
        }) : (i(), a(n), n)
    }

    function z(t) {
        var e;
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let n = t || (null == (e = D()) ? void 0 : e.getOptions());
        return !!n && (null != n.tracesSampleRate || !!n.tracesSampler)
    }

    function H(t) {
        if ("boolean" == typeof t) return Number(t);
        let e = "string" == typeof t ? parseFloat(t) : t;
        if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e
    }

    function K(t, e) {
        t.setAttribute("http.response.status_code", e);
        let n = function(t) {
            if (t < 400 && t >= 100) return {
                code: 1
            };
            if (t >= 400 && t < 500) switch (t) {
                case 401:
                    return {
                        code: 2,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: 2,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: 2,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: 2,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: 2,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: 2,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: 2,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: 2,
                        message: "invalid_argument"
                    }
            }
            if (t >= 500 && t < 600) switch (t) {
                case 501:
                    return {
                        code: 2,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: 2,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: 2,
                        message: "deadline_exceeded"
                    }
            }
            return {
                code: 2,
                message: "internal_error"
            }
        }(e);
        "unknown_error" !== n.message && t.setStatus(n)
    }
    t.s(["SENTRY_BAGGAGE_KEY_PREFIX", () => P, "baggageHeaderToDynamicSamplingContext", () => j, "dynamicSamplingContextToSentryBaggageHeader", () => F, "parseBaggageHeader", () => J], 19), t.s(["handleCallbackErrors", () => V], 823824), t.s(["hasSpansEnabled", () => z], 43023), t.s(["parseSampleRate", () => H], 94806), t.s(["SPAN_STATUS_ERROR", () => 2, "SPAN_STATUS_OK", () => 1, "SPAN_STATUS_UNSET", () => 0, "setHttpStatus", () => K], 348425);
    var W = t.i(839972);
    let q = "_sentryScope",
        X = "_sentryIsolationScope";

    function $(t, e, n) {
        t && ((0, g.addNonEnumerableProperty)(t, X, function(t) {
            try {
                let e = W.GLOBAL_OBJ.WeakRef;
                if ("function" == typeof e) return new e(t)
            } catch {}
            return t
        }(n)), (0, g.addNonEnumerableProperty)(t, q, e))
    }

    function Q(t) {
        return {
            scope: t[q],
            isolationScope: function(t) {
                if (t) {
                    if ("object" == typeof t && "deref" in t && "function" == typeof t.deref) try {
                        return t.deref()
                    } catch {
                        return
                    }
                    return t
                }
            }(t[X])
        }
    }
    t.s(["getCapturedScopesOnSpan", () => Q, "setCapturedScopesOnSpan", () => $], 708005);
    let Z = /^o(\d+)\./,
        tt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

    function te(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                host: n,
                path: r,
                pass: i,
                port: a,
                projectId: s,
                protocol: o,
                publicKey: c
            } = t;
        return "".concat(o, "://").concat(c).concat(e && i ? ":".concat(i) : "") + "@".concat(n).concat(a ? ":".concat(a) : "", "/").concat(r ? "".concat(r, "/") : r).concat(s)
    }

    function tn(t) {
        let e = tt.exec(t);
        if (!e) return void(0, c.consoleSandbox)(() => {
            console.error("Invalid Sentry Dsn: ".concat(t))
        });
        let [n, r, i = "", a = "", s = "", o = ""] = e.slice(1), l = "", u = o, p = u.split("/");
        if (p.length > 1 && (l = p.slice(0, -1).join("/"), u = p.pop()), u) {
            let t = u.match(/^\d+/);
            t && (u = t[0])
        }
        return tr({
            host: a,
            pass: i,
            path: l,
            projectId: u,
            port: s,
            protocol: n,
            publicKey: r
        })
    }

    function tr(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function ti(t) {
        let e, n = t.getOptions(),
            {
                host: r
            } = t.getDsn() || {};
        if (n.orgId) e = String(n.orgId);
        else {
            let t;
            r && (e = null == (t = r.match(Z)) ? void 0 : t[1])
        }
        return e
    }

    function ta(t) {
        let e = "string" == typeof t ? tn(t) : tr(t);
        if (e && function(t) {
                if (!n.DEBUG_BUILD) return !0;
                let {
                    port: e,
                    projectId: r,
                    protocol: i
                } = t;
                return !["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (c.debug.error("Invalid Sentry Dsn: ".concat(e, " missing")), !0)) && (r.match(/^\d+$/) ? "http" !== i && "https" !== i ? (c.debug.error("Invalid Sentry Dsn: Invalid protocol ".concat(i)), !1) : !(e && isNaN(parseInt(e, 10))) || (c.debug.error("Invalid Sentry Dsn: Invalid port ".concat(e)), !1) : (c.debug.error("Invalid Sentry Dsn: Invalid projectId ".concat(r)), !1))
            }(e)) return e
    }
    t.s(["dsnFromString", () => tn, "dsnToString", () => te, "extractOrgIdFromClient", () => ti, "makeDsn", () => ta], 614076);
    let ts = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function to(t, e) {
        let n = function(t) {
                let e;
                if (!t) return;
                let n = t.match(ts);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }(t),
            r = j(e);
        if (!(null == n ? void 0 : n.traceId)) return {
            traceId: p(),
            sampleRand: (0, _.safeMathRandom)()
        };
        let i = function(t, e) {
            let n = H(null == e ? void 0 : e.sample_rand);
            if (void 0 !== n) return n;
            let r = H(null == e ? void 0 : e.sample_rate);
            return r && (null == t ? void 0 : t.parentSampled) !== void 0 ? t.parentSampled ? (0, _.safeMathRandom)() * r : r + (0, _.safeMathRandom)() * (1 - r) : (0, _.safeMathRandom)()
        }(n, r);
        r && (r.sample_rand = i.toString());
        let {
            traceId: a,
            parentSpanId: s,
            parentSampled: o
        } = n;
        return {
            traceId: a,
            parentSpanId: s,
            sampled: o,
            dsc: r || {},
            sampleRand: i
        }
    }

    function tc() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p(),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
    }

    function tl() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p(),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
            n = arguments.length > 2 ? arguments[2] : void 0;
        return "00-".concat(t, "-").concat(e, "-").concat(n ? "01" : "00")
    }

    function tu(t, e) {
        let n = ti(t);
        return e && n && e !== n ? (c.debug.log("Won't continue trace because org IDs don't match (incoming baggage: ".concat(e, ", SDK options: ").concat(n, ")")), !1) : !t.getOptions().strictTraceContinuation || (!e || !!n) && (!!e || !n) || (c.debug.log("Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ".concat(e, ", Sentry client: ").concat(n, ")")), !1)
    }
    t.s(["TRACEPARENT_REGEXP", () => ts, "generateSentryTraceHeader", () => tc, "generateTraceparentHeader", () => tl, "propagationContextFromHeaders", () => to, "shouldContinueTrace", () => tu], 723538);
    let tp = !1;

    function td(t) {
        let {
            spanId: e,
            traceId: n
        } = t.spanContext(), {
            data: r,
            op: i,
            parent_span_id: a,
            status: s,
            origin: o,
            links: c
        } = tv(t);
        return {
            parent_span_id: a,
            span_id: e,
            trace_id: n,
            data: r,
            op: i,
            status: s,
            origin: o,
            links: c
        }
    }

    function t_(t) {
        let {
            spanId: e,
            traceId: n,
            isRemote: r
        } = t.spanContext(), i = r ? e : tv(t).parent_span_id, a = Q(t).scope;
        return {
            parent_span_id: i,
            span_id: r ? (null == a ? void 0 : a.getPropagationContext().propagationSpanId) || d() : e,
            trace_id: n
        }
    }

    function tg(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return tc(e, n, tE(t))
    }

    function tf(t) {
        let {
            traceId: e,
            spanId: n
        } = t.spanContext();
        return tl(e, n, tE(t))
    }

    function th(t) {
        return t && t.length > 0 ? t.map(t => {
            let {
                context: {
                    spanId: e,
                    traceId: n,
                    traceFlags: r,
                    ...i
                },
                attributes: a
            } = t;
            return {
                span_id: e,
                trace_id: n,
                sampled: 1 === r,
                attributes: a,
                ...i
            }
        }) : void 0
    }

    function tm(t) {
        return "number" == typeof t ? tS(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? tS(t.getTime()) : (0, i.timestampInSeconds)()
    }

    function tS(t) {
        return t > 0x2540be3ff ? t / 1e3 : t
    }

    function tv(t) {
        var e, n;
        if ("function" == typeof t.getSpanJSON) return t.getSpanJSON();
        let {
            spanId: r,
            traceId: i
        } = t.spanContext();
        if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
            let {
                attributes: e,
                startTime: a,
                name: s,
                endTime: o,
                status: c,
                links: l
            } = t;
            return {
                span_id: r,
                trace_id: i,
                data: e,
                description: s,
                parent_span_id: "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? null == (n = t.parentSpanContext) ? void 0 : n.spanId : void 0,
                start_timestamp: tm(a),
                timestamp: tm(o) || void 0,
                status: ty(c),
                op: e[w],
                origin: e[B],
                links: th(l)
            }
        }
        return {
            span_id: r,
            trace_id: i,
            start_timestamp: 0,
            data: {}
        }
    }

    function tE(t) {
        let {
            traceFlags: e
        } = t.spanContext();
        return 1 === e
    }

    function ty(t) {
        if (t && 0 !== t.code) return 1 === t.code ? "ok" : t.message || "internal_error"
    }
    let tT = "_sentryChildSpans",
        tb = "_sentryRootSpan";

    function tI(t, e) {
        let n = t[tb] || t;
        (0, g.addNonEnumerableProperty)(e, tb, n), t[tT] ? t[tT].add(e) : (0, g.addNonEnumerableProperty)(t, tT, new Set([e]))
    }

    function tA(t, e) {
        t[tT] && t[tT].delete(e)
    }

    function tN(t) {
        let e = new Set;
        return ! function t(n) {
            if (!e.has(n) && tE(n))
                for (let r of (e.add(n), n[tT] ? Array.from(n[tT]) : [])) t(r)
        }(t), Array.from(e)
    }

    function tC(t) {
        return t[tb] || t
    }

    function tx() {
        let t = A((0, e.getMainCarrier)());
        return t.getActiveSpan ? t.getActiveSpan() : N()[f]
    }

    function tR() {
        tp || ((0, c.consoleSandbox)(() => {
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
        }), tp = !0)
    }
    t.s(["TRACE_FLAG_NONE", () => 0, "TRACE_FLAG_SAMPLED", () => 1, "addChildSpanToSpan", () => tI, "convertSpanLinksForEnvelope", () => th, "getActiveSpan", () => tx, "getRootSpan", () => tC, "getSpanDescendants", () => tN, "getStatusMessage", () => ty, "removeChildSpanFromSpan", () => tA, "showSpanDropWarning", () => tR, "spanIsSampled", () => tE, "spanTimeInputToSeconds", () => tm, "spanToJSON", () => tv, "spanToTraceContext", () => t_, "spanToTraceHeader", () => tg, "spanToTraceparentHeader", () => tf, "spanToTransactionTraceContext", () => td], 571542);
    let tO = "production";
    t.s(["DEFAULT_ENVIRONMENT", () => tO], 869323);
    let tD = "_frozenDsc";

    function tM(t, e) {
        (0, g.addNonEnumerableProperty)(t, tD, e)
    }

    function tk(t, e) {
        let n = e.getOptions(),
            {
                publicKey: r
            } = e.getDsn() || {},
            i = {
                environment: n.environment || tO,
                release: n.release,
                public_key: r,
                trace_id: t,
                org_id: ti(e)
            };
        return e.emit("createDsc", i), i
    }

    function tU(t, e) {
        let n = e.getPropagationContext();
        return n.dsc || tk(n.traceId, t)
    }

    function tL(t) {
        var e, n, r, i;
        let a = D();
        if (!a) return {};
        let s = tC(t),
            o = tv(s),
            c = o.data,
            l = s.spanContext().traceState,
            u = null != (n = null != (e = null == l ? void 0 : l.get("sentry.sample_rate")) ? e : c[U]) ? n : c[L];

        function p(t) {
            return ("number" == typeof u || "string" == typeof u) && (t.sample_rate = "".concat(u)), t
        }
        let d = s[tD];
        if (d) return p(d);
        let _ = null == l ? void 0 : l.get("sentry.dsc"),
            g = _ && j(_);
        if (g) return p(g);
        let f = tk(t.spanContext().traceId, a),
            h = c[k],
            m = o.description;
        return "url" !== h && m && (f.transaction = m), z() && (f.sampled = String(tE(s)), f.sample_rand = null != (i = null == l ? void 0 : l.get("sentry.sample_rand")) ? i : null == (r = Q(s).scope) ? void 0 : r.getPropagationContext().sampleRand.toString()), p(f), a.emit("createDsc", f, s), f
    }

    function tw(t) {
        if (!n.DEBUG_BUILD) return;
        let {
            description: e = "< unknown name >",
            op: r = "< unknown op >",
            parent_span_id: i
        } = tv(t), {
            spanId: a
        } = t.spanContext(), s = tE(t), o = tC(t), l = o === t, u = "[Tracing] Starting ".concat(s ? "sampled" : "unsampled", " ").concat(l ? "root " : "", "span"), p = ["op: ".concat(r), "name: ".concat(e), "ID: ".concat(a)];
        if (i && p.push("parent ID: ".concat(i)), !l) {
            let {
                op: t,
                description: e
            } = tv(o);
            p.push("root ID: ".concat(o.spanContext().spanId)), t && p.push("root op: ".concat(t)), e && p.push("root description: ".concat(e))
        }
        c.debug.log("".concat(u, "\n  ").concat(p.join("\n  ")))
    }

    function tB(t) {
        if (!n.DEBUG_BUILD) return;
        let {
            description: e = "< unknown name >",
            op: r = "< unknown op >"
        } = tv(t), {
            spanId: i
        } = t.spanContext(), a = tC(t) === t, s = '[Tracing] Finishing "'.concat(r, '" ').concat(a ? "root " : "", 'span "').concat(e, '" with ID ').concat(i);
        c.debug.log(s)
    }

    function tP(t, e, r) {
        let i, a;
        if (!z(t)) return [!1];
        "function" == typeof t.tracesSampler ? (i = t.tracesSampler({ ...e,
            inheritOrSampleWith: t => "number" == typeof e.parentSampleRate ? e.parentSampleRate : "boolean" == typeof e.parentSampled ? Number(e.parentSampled) : t
        }), a = !0) : void 0 !== e.parentSampled ? i = e.parentSampled : void 0 !== t.tracesSampleRate && (i = t.tracesSampleRate, a = !0);
        let s = H(i);
        if (void 0 === s) return n.DEBUG_BUILD && c.debug.warn("[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(i), " of type ").concat(JSON.stringify(typeof i), ".")), [!1];
        if (!s) return n.DEBUG_BUILD && c.debug.log("[Tracing] Discarding transaction because ".concat("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, s, a];
        let o = r < s;
        return !o && n.DEBUG_BUILD && c.debug.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(Number(i), ")")), [o, s, a]
    }
    t.s(["freezeDscOnSpan", () => tM, "getDynamicSamplingContextFromScope", () => tU, "getDynamicSamplingContextFromSpan", () => tL], 182449), t.s(["logSpanEnd", () => tB, "logSpanStart", () => tw], 977151), t.s(["sampleSpan", () => tP], 380508);
    class tG {
        spanContext() {
            return {
                spanId: this._spanId,
                traceId: this._traceId,
                traceFlags: 0
            }
        }
        end(t) {}
        setAttribute(t, e) {
            return this
        }
        setAttributes(t) {
            return this
        }
        setStatus(t) {
            return this
        }
        updateName(t) {
            return this
        }
        isRecording() {
            return !1
        }
        addEvent(t, e, n) {
            return this
        }
        addLink(t) {
            return this
        }
        addLinks(t) {
            return this
        }
        recordException(t, e) {}
        constructor(t = {}) {
            this._traceId = t.traceId || p(), this._spanId = t.spanId || d()
        }
    }
    t.s(["SentryNonRecordingSpan", () => tG], 117330)
}, 561885, 552278, 348303, 955871, 85432, 51079, 169331, 782446, 877912, 907312, t => {
    "use strict";
    let e, n, r, i;
    var a = t.i(274638),
        s = t.i(781371),
        o = t.i(254603),
        c = t.i(972106),
        l = t.i(978125),
        u = t.i(736928);
    t.i(19);
    var p = t.i(294341),
        d = t.i(823824),
        _ = t.i(43023),
        g = t.i(94806),
        f = t.i(178032),
        h = t.i(414547),
        m = t.i(474381),
        S = t.i(571542);
    t.i(723538);
    var v = t.i(182449),
        E = t.i(977151),
        y = t.i(380508),
        T = t.i(117330),
        b = t.i(614076),
        I = t.i(350088),
        A = t.i(839972);

    function N(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return [t, e]
    }

    function C(t, e) {
        let [n, r] = t;
        return [n, [...r, e]]
    }

    function x(t, e) {
        for (let n of t[1]) {
            let t = n[0].type;
            if (e(n, t)) return !0
        }
        return !1
    }

    function R(t, e) {
        return x(t, (t, n) => e.includes(n))
    }

    function O(t) {
        let e = (0, l.getSentryCarrier)(A.GLOBAL_OBJ);
        return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t)
    }

    function D(t) {
        let [e, n] = t, r = JSON.stringify(e);

        function i(t) {
            "string" == typeof r ? r = "string" == typeof t ? r + t : [O(r), t] : r.push("string" == typeof t ? O(t) : t)
        }
        for (let t of n) {
            let [e, n] = t;
            if (i("\n".concat(JSON.stringify(e), "\n")), "string" == typeof n || n instanceof Uint8Array) i(n);
            else {
                let t;
                try {
                    t = JSON.stringify(n)
                } catch {
                    t = JSON.stringify((0, I.normalize)(n))
                }
                i(t)
            }
        }
        return "string" == typeof r ? r : function(t) {
            let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                n = 0;
            for (let r of t) e.set(r, n), n += r.length;
            return e
        }(r)
    }

    function M(t) {
        return [{
            type: "span"
        }, t]
    }

    function k(t) {
        let e = "string" == typeof t.data ? O(t.data) : t.data;
        return [{
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }, e]
    }
    let U = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        raw_security: "security",
        log: "log_item",
        metric: "metric",
        trace_metric: "metric"
    };

    function L(t) {
        return U[t]
    }

    function w(t) {
        if (!(null == t ? void 0 : t.sdk)) return;
        let {
            name: e,
            version: n
        } = t.sdk;
        return {
            name: e,
            version: n
        }
    }

    function B(t, e, n, r) {
        var i;
        let a = null == (i = t.sdkProcessingMetadata) ? void 0 : i.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && r && {
                dsn: (0, b.dsnToString)(r)
            },
            ...a && {
                trace: a
            }
        }
    }
    t.s(["addItemToEnvelope", () => C, "createAttachmentEnvelopeItem", () => k, "createEnvelope", () => N, "createEventEnvelopeHeaders", () => B, "createSpanEnvelopeItem", () => M, "envelopeContainsItemType", () => R, "envelopeItemTypeToDataCategory", () => L, "forEachEnvelopeItem", () => x, "getSdkMetadataForEnvelopeHeader", () => w, "serializeEnvelope", () => D], 552278);
    var P = t.i(131265);

    function G(t) {
        p.debug.log("Ignoring span ".concat(t.op, " - ").concat(t.description, " because it matches `ignoreSpans`."))
    }

    function j(t, e) {
        if (!(null == e ? void 0 : e.length) || !t.description) return !1;
        for (let r of e) {
            var n;
            if ("string" == typeof(n = r) || n instanceof RegExp) {
                if ((0, P.isMatchingPattern)(t.description, r)) return s.DEBUG_BUILD && G(t), !0;
                continue
            }
            if (!r.name && !r.op) continue;
            let e = !r.name || (0, P.isMatchingPattern)(t.description, r.name),
                i = !r.op || t.op && (0, P.isMatchingPattern)(t.op, r.op);
            if (e && i) return s.DEBUG_BUILD && G(t), !0
        }
        return !1
    }

    function F(t, e) {
        let n = e.parent_span_id,
            r = e.span_id;
        if (n)
            for (let e of t) e.parent_span_id === r && (e.parent_span_id = n)
    }

    function J(t, e, n, r) {
        let i = w(n);
        return N({
            sent_at: new Date().toISOString(),
            ...i && {
                sdk: i
            },
            ...!!r && e && {
                dsn: (0, b.dsnToString)(e)
            }
        }, ["aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()]])
    }

    function Y(t, e, n, r) {
        let i = w(n),
            a = t.type && "replay_event" !== t.type ? t.type : "event";
        ! function(t, e) {
            var n, r, i, a;
            if (!e) return;
            let s = t.sdk || {};
            t.sdk = { ...s,
                name: s.name || e.name,
                version: s.version || e.version,
                integrations: [...(null == (n = t.sdk) ? void 0 : n.integrations) || [], ...e.integrations || []],
                packages: [...(null == (r = t.sdk) ? void 0 : r.packages) || [], ...e.packages || []],
                settings: (null == (i = t.sdk) ? void 0 : i.settings) || e.settings ? { ...null == (a = t.sdk) ? void 0 : a.settings,
                    ...e.settings
                } : void 0
            }
        }(t, null == n ? void 0 : n.sdk);
        let s = B(t, i, r, e);
        return delete t.sdkProcessingMetadata, N(s, [
            [{
                type: a
            }, t]
        ])
    }

    function V(t, e) {
        let n = (0, v.getDynamicSamplingContextFromSpan)(t[0]),
            r = null == e ? void 0 : e.getDsn(),
            i = null == e ? void 0 : e.getOptions().tunnel,
            a = {
                sent_at: new Date().toISOString(),
                ...!!n.trace_id && !!n.public_key && {
                    trace: n
                },
                ...!!i && r && {
                    dsn: (0, b.dsnToString)(r)
                }
            },
            {
                beforeSendSpan: s,
                ignoreSpans: o
            } = (null == e ? void 0 : e.getOptions()) || {},
            c = (null == o ? void 0 : o.length) ? t.filter(t => !j((0, S.spanToJSON)(t), o)) : t,
            l = t.length - c.length;
        l && (null == e || e.recordDroppedEvent("before_send", "span", l));
        let u = s ? t => {
                let e = (0, S.spanToJSON)(t),
                    n = s(e);
                return n || ((0, S.showSpanDropWarning)(), e)
            } : S.spanToJSON,
            p = [];
        for (let t of c) {
            let e = u(t);
            e && p.push(M(e))
        }
        return N(a, p)
    }
    t.s(["reparentChildSpans", () => F, "shouldIgnoreSpan", () => j], 348303), t.s(["createEventEnvelope", () => Y, "createSessionEnvelope", () => J, "createSpanEnvelope", () => V], 955871);
    var z = t.i(121621);

    function H(t, e, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, S.getActiveSpan)(),
            i = r && (0, S.getRootSpan)(r);
        i && (s.DEBUG_BUILD && p.debug.log("[Measurement] Setting measurement on root span: ".concat(t, " = ").concat(e, " ").concat(n)), i.addEvent(t, {
            [u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e,
            [u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n
        }))
    }

    function K(t) {
        if (!t || 0 === t.length) return;
        let e = {};
        return t.forEach(t => {
            let n = t.attributes || {},
                r = n[u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
                i = n[u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
            "string" == typeof r && "number" == typeof i && (e[t.name] = {
                value: i,
                unit: r
            })
        }), e
    }
    t.s(["setMeasurement", () => H, "timedEventsToMeasurements", () => K], 85432);
    var W = t.i(708005);
    class q {
        addLink(t) {
            return this._links ? this._links.push(t) : this._links = [t], this
        }
        addLinks(t) {
            return this._links ? this._links.push(...t) : this._links = t, this
        }
        recordException(t, e) {}
        spanContext() {
            let {
                _spanId: t,
                _traceId: e,
                _sampled: n
            } = this;
            return {
                spanId: t,
                traceId: e,
                traceFlags: n ? S.TRACE_FLAG_SAMPLED : S.TRACE_FLAG_NONE
            }
        }
        setAttribute(t, e) {
            return void 0 === e ? delete this._attributes[t] : this._attributes[t] = e, this
        }
        setAttributes(t) {
            return Object.keys(t).forEach(e => this.setAttribute(e, t[e])), this
        }
        updateStartTime(t) {
            this._startTime = (0, S.spanTimeInputToSeconds)(t)
        }
        setStatus(t) {
            return this._status = t, this
        }
        updateName(t) {
            return this._name = t, this.setAttribute(u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), this
        }
        end(t) {
            this._endTime || (this._endTime = (0, S.spanTimeInputToSeconds)(t), (0, E.logSpanEnd)(this), this._onSpanEnded())
        }
        getSpanJSON() {
            return {
                data: this._attributes,
                description: this._name,
                op: this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_OP],
                parent_span_id: this._parentSpanId,
                span_id: this._spanId,
                start_timestamp: this._startTime,
                status: (0, S.getStatusMessage)(this._status),
                timestamp: this._endTime,
                trace_id: this._traceId,
                origin: this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
                profile_id: this._attributes[u.SEMANTIC_ATTRIBUTE_PROFILE_ID],
                exclusive_time: this._attributes[u.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
                measurements: K(this._events),
                is_segment: this._isStandaloneSpan && (0, S.getRootSpan)(this) === this || void 0,
                segment_id: this._isStandaloneSpan ? (0, S.getRootSpan)(this).spanContext().spanId : void 0,
                links: (0, S.convertSpanLinksForEnvelope)(this._links)
            }
        }
        isRecording() {
            return !this._endTime && !!this._sampled
        }
        addEvent(t, e, n) {
            s.DEBUG_BUILD && p.debug.log("[Tracing] Adding an event to span:", t);
            let r = X(e) ? e : n || (0, z.timestampInSeconds)(),
                i = X(e) ? {} : e || {},
                a = {
                    name: t,
                    time: (0, S.spanTimeInputToSeconds)(r),
                    attributes: i
                };
            return this._events.push(a), this
        }
        isStandaloneSpan() {
            return !!this._isStandaloneSpan
        }
        _onSpanEnded() {
            let t = (0, a.getClient)();
            if (t && t.emit("spanEnd", this), !(this._isStandaloneSpan || this === (0, S.getRootSpan)(this))) return;
            if (this._isStandaloneSpan) return void(this._sampled ? function(t) {
                let e = (0, a.getClient)();
                if (!e) return;
                let n = t[1];
                n && 0 !== n.length ? e.sendEnvelope(t) : e.recordDroppedEvent("before_send", "span")
            }(V([this], t)) : (s.DEBUG_BUILD && p.debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t && t.recordDroppedEvent("sample_rate", "span")));
            let e = this._convertSpanToTransaction();
            e && ((0, W.getCapturedScopesOnSpan)(this).scope || (0, a.getCurrentScope)()).captureEvent(e)
        }
        _convertSpanToTransaction() {
            var t;
            if (!$((0, S.spanToJSON)(this))) return;
            this._name || (s.DEBUG_BUILD && p.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
            let {
                scope: e,
                isolationScope: n
            } = (0, W.getCapturedScopesOnSpan)(this), r = null == e || null == (t = e.getScopeData().sdkProcessingMetadata) ? void 0 : t.normalizedRequest;
            if (!0 !== this._sampled) return;
            let i = (0, S.getSpanDescendants)(this).filter(t => {
                    var e;
                    return t !== this && !((e = t) instanceof q && e.isStandaloneSpan())
                }).map(t => (0, S.spanToJSON)(t)).filter($),
                a = this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
            delete this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME], i.forEach(t => {
                delete t.data[u.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]
            });
            let o = {
                    contexts: {
                        trace: (0, S.spanToTransactionTraceContext)(this)
                    },
                    spans: i.length > 1e3 ? i.sort((t, e) => t.start_timestamp - e.start_timestamp).slice(0, 1e3) : i,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        capturedSpanScope: e,
                        capturedSpanIsolationScope: n,
                        dynamicSamplingContext: (0, v.getDynamicSamplingContextFromSpan)(this)
                    },
                    request: r,
                    ...a && {
                        transaction_info: {
                            source: a
                        }
                    }
                },
                c = K(this._events);
            return c && Object.keys(c).length && (s.DEBUG_BUILD && p.debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(c, void 0, 2)), o.measurements = c), o
        }
        constructor(t = {}) {
            this._traceId = t.traceId || (0, f.generateTraceId)(), this._spanId = t.spanId || (0, f.generateSpanId)(), this._startTime = t.startTimestamp || (0, z.timestampInSeconds)(), this._links = t.links, this._attributes = {}, this.setAttributes({
                [u.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
                [u.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t.op,
                ...t.attributes
            }), this._name = t.name, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.endTimestamp && (this._endTime = t.endTimestamp), this._events = [], this._isStandaloneSpan = t.isStandalone, this._endTime && this._onSpanEnded()
        }
    }

    function X(t) {
        return t && "number" == typeof t || t instanceof Date || Array.isArray(t)
    }

    function $(t) {
        return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
    }
    t.s(["SentrySpan", () => q], 51079);
    var Q = t.i(348425);
    let Z = "__SENTRY_SUPPRESS_TRACING__";

    function tt(t, e) {
        let n = ts();
        if (n.startSpan) return n.startSpan(t, e);
        let r = ta(t),
            {
                forceTransaction: i,
                parentSpan: s,
                scope: o
            } = t,
            c = null == o ? void 0 : o.clone();
        return (0, a.withScope)(c, () => {
            var n;
            return (void 0 !== (n = s) ? t => tn(n, t) : t => t())(() => {
                let n = (0, a.getCurrentScope)(),
                    o = tc(n, s),
                    c = t.onlyIfParent && !o ? new T.SentryNonRecordingSpan : ti({
                        parentSpan: o,
                        spanArguments: r,
                        forceTransaction: i,
                        scope: n
                    });
                return (0, m._setSpanForScope)(n, c), (0, d.handleCallbackErrors)(() => e(c), () => {
                    let {
                        status: t
                    } = (0, S.spanToJSON)(c);
                    c.isRecording() && (!t || "ok" === t) && c.setStatus({
                        code: Q.SPAN_STATUS_ERROR,
                        message: "internal_error"
                    })
                }, () => {
                    c.end()
                })
            })
        })
    }

    function te(t) {
        let e = ts();
        if (e.startInactiveSpan) return e.startInactiveSpan(t);
        let n = ta(t),
            {
                forceTransaction: r,
                parentSpan: i
            } = t;
        return (t.scope ? e => (0, a.withScope)(t.scope, e) : void 0 !== i ? t => tn(i, t) : t => t())(() => {
            let e = (0, a.getCurrentScope)(),
                s = tc(e, i);
            return t.onlyIfParent && !s ? new T.SentryNonRecordingSpan : ti({
                parentSpan: s,
                spanArguments: n,
                forceTransaction: r,
                scope: e
            })
        })
    }

    function tn(t, e) {
        let n = ts();
        return n.withActiveSpan ? n.withActiveSpan(t, e) : (0, a.withScope)(n => ((0, m._setSpanForScope)(n, t || void 0), e(n)))
    }

    function tr(t) {
        return (0, a.withScope)(e => (e.setPropagationContext({
            traceId: (0, f.generateTraceId)(),
            sampleRand: (0, h.safeMathRandom)()
        }), s.DEBUG_BUILD && p.debug.log("Starting a new trace with id ".concat(e.getPropagationContext().traceId)), tn(null, t)))
    }

    function ti(t) {
        let e, {
            parentSpan: n,
            spanArguments: r,
            forceTransaction: i,
            scope: s
        } = t;
        if (!(0, _.hasSpansEnabled)()) {
            let t = new T.SentryNonRecordingSpan;
            if (i || !n) {
                let e = {
                    sampled: "false",
                    sample_rate: "0",
                    transaction: r.name,
                    ...(0, v.getDynamicSamplingContextFromSpan)(t)
                };
                (0, v.freezeDscOnSpan)(t, e)
            }
            return t
        }
        let o = (0, a.getIsolationScope)();
        if (n && !i) e = function(t, e, n) {
            let {
                spanId: r,
                traceId: i
            } = t.spanContext(), s = !e.getScopeData().sdkProcessingMetadata[Z] && (0, S.spanIsSampled)(t), o = s ? new q({ ...n,
                parentSpanId: r,
                traceId: i,
                sampled: s
            }) : new T.SentryNonRecordingSpan({
                traceId: i
            });
            (0, S.addChildSpanToSpan)(t, o);
            let c = (0, a.getClient)();
            return c && (c.emit("spanStart", o), n.endTimestamp && c.emit("spanEnd", o)), o
        }(n, s, r), (0, S.addChildSpanToSpan)(n, e);
        else if (n) {
            let t = (0, v.getDynamicSamplingContextFromSpan)(n),
                {
                    traceId: i,
                    spanId: a
                } = n.spanContext(),
                o = (0, S.spanIsSampled)(n);
            e = to({
                traceId: i,
                parentSpanId: a,
                ...r
            }, s, o), (0, v.freezeDscOnSpan)(e, t)
        } else {
            let {
                traceId: t,
                dsc: n,
                parentSpanId: i,
                sampled: a
            } = { ...o.getPropagationContext(),
                ...s.getPropagationContext()
            };
            e = to({
                traceId: t,
                parentSpanId: i,
                ...r
            }, s, a), n && (0, v.freezeDscOnSpan)(e, n)
        }
        return (0, E.logSpanStart)(e), (0, W.setCapturedScopesOnSpan)(e, s, o), e
    }

    function ta(t) {
        let e = {
            isStandalone: (t.experimental || {}).standalone,
            ...t
        };
        if (t.startTime) {
            let n = { ...e
            };
            return n.startTimestamp = (0, S.spanTimeInputToSeconds)(t.startTime), delete n.startTime, n
        }
        return e
    }

    function ts() {
        let t = (0, l.getMainCarrier)();
        return (0, c.getAsyncContextStrategy)(t)
    }

    function to(t, e, n) {
        var r, i;
        let o = (0, a.getClient)(),
            c = (null == o ? void 0 : o.getOptions()) || {},
            {
                name: l = ""
            } = t,
            d = {
                spanAttributes: { ...t.attributes
                },
                spanName: l,
                parentSampled: n
            };
        null == o || o.emit("beforeSampling", d, {
            decision: !1
        });
        let _ = null != (i = d.parentSampled) ? i : n,
            f = d.spanAttributes,
            h = e.getPropagationContext(),
            [m, S, v] = e.getScopeData().sdkProcessingMetadata[Z] ? [!1] : (0, y.sampleSpan)(c, {
                name: l,
                parentSampled: _,
                attributes: f,
                parentSampleRate: (0, g.parseSampleRate)(null == (r = h.dsc) ? void 0 : r.sample_rate)
            }, h.sampleRand),
            E = new q({ ...t,
                attributes: {
                    [u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
                    [u.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: void 0 !== S && v ? S : void 0,
                    ...f
                },
                sampled: m
            });
        return !m && o && (s.DEBUG_BUILD && p.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), o.recordDroppedEvent("sample_rate", "transaction")), o && o.emit("spanStart", E), E
    }

    function tc(t, e) {
        if (e) return e;
        if (null === e) return;
        let n = (0, m._getSpanForScope)(t);
        if (!n) return;
        let r = (0, a.getClient)();
        return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, S.getRootSpan)(n) : n
    }
    t.s(["startInactiveSpan", () => te, "startNewTrace", () => tr, "startSpan", () => tt, "withActiveSpan", () => tn], 169331);
    var tl = t.i(607160),
        tu = t.i(3323),
        tp = t.i(869323);

    function td(t) {
        return new tg(e => {
            e(t)
        })
    }

    function t_(t) {
        return new tg((e, n) => {
            n(t)
        })
    }
    class tg {
        then(t, e) {
            return new tg((n, r) => {
                this._handlers.push([!1, e => {
                    if (t) try {
                        n(t(e))
                    } catch (t) {
                        r(t)
                    } else n(e)
                }, t => {
                    if (e) try {
                        n(e(t))
                    } catch (t) {
                        r(t)
                    } else r(t)
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(t => t, t)
        } finally(t) {
            return new tg((e, n) => {
                let r, i;
                return this.then(e => {
                    i = !1, r = e, t && t()
                }, e => {
                    i = !0, r = e, t && t()
                }).then(() => {
                    i ? n(r) : e(r)
                })
            })
        }
        _executeHandlers() {
            if (0 === this._state) return;
            let t = this._handlers.slice();
            this._handlers = [], t.forEach(t => {
                t[0] || (1 === this._state && t[1](this._value), 2 === this._state && t[2](this._value), t[0] = !0)
            })
        }
        _runExecutor(t) {
            let e = (t, e) => {
                    if (0 === this._state) {
                        if ((0, tl.isThenable)(e)) return void e.then(n, r);
                        this._state = t, this._value = e, this._executeHandlers()
                    }
                },
                n = t => {
                    e(1, t)
                },
                r = t => {
                    e(2, t)
                };
            try {
                t(n, r)
            } catch (t) {
                r(t)
            }
        }
        constructor(t) {
            this._state = 0, this._handlers = [], this._runExecutor(t)
        }
    }
    t.s(["rejectedSyncPromise", () => t_, "resolvedSyncPromise", () => td], 782446);
    var tf = t.i(190055);
    t.i(507698);
    var th = t.i(680732);

    function tm(t, e) {
        var n, r, i, a, s, o, c, l;
        let u, p, d, {
            fingerprint: _,
            span: g,
            breadcrumbs: f,
            sdkProcessingMetadata: h
        } = e;
        (function(t, e) {
            let {
                extra: n,
                tags: r,
                user: i,
                contexts: a,
                level: s,
                transactionName: o
            } = e;
            Object.keys(n).length && (t.extra = { ...n,
                ...t.extra
            }), Object.keys(r).length && (t.tags = { ...r,
                ...t.tags
            }), Object.keys(i).length && (t.user = { ...i,
                ...t.user
            }), Object.keys(a).length && (t.contexts = { ...a,
                ...t.contexts
            }), s && (t.level = s), o && "transaction" !== t.type && (t.transaction = o)
        })(t, e), g && (n = t, r = g, n.contexts = {
            trace: (0, S.spanToTraceContext)(r),
            ...n.contexts
        }, n.sdkProcessingMetadata = {
            dynamicSamplingContext: (0, v.getDynamicSamplingContextFromSpan)(r),
            ...n.sdkProcessingMetadata
        }, u = (0, S.getRootSpan)(r), (p = (0, S.spanToJSON)(u).description) && !n.transaction && "transaction" === n.type && (n.transaction = p)), i = t, a = _, i.fingerprint = i.fingerprint ? Array.isArray(i.fingerprint) ? i.fingerprint : [i.fingerprint] : [], a && (i.fingerprint = i.fingerprint.concat(a)), i.fingerprint.length || delete i.fingerprint, s = t, o = f, d = [...s.breadcrumbs || [], ...o], s.breadcrumbs = d.length ? d : void 0, c = t, l = h, c.sdkProcessingMetadata = { ...c.sdkProcessingMetadata,
            ...l
        }
    }

    function tS(t, e) {
        let {
            extra: n,
            tags: r,
            attributes: i,
            user: a,
            contexts: s,
            level: o,
            sdkProcessingMetadata: c,
            breadcrumbs: l,
            fingerprint: u,
            eventProcessors: p,
            attachments: d,
            propagationContext: _,
            transactionName: g,
            span: f
        } = e;
        tv(t, "extra", n), tv(t, "tags", r), tv(t, "attributes", i), tv(t, "user", a), tv(t, "contexts", s), t.sdkProcessingMetadata = (0, th.merge)(t.sdkProcessingMetadata, c, 2), o && (t.level = o), g && (t.transactionName = g), f && (t.span = f), l.length && (t.breadcrumbs = [...t.breadcrumbs, ...l]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), p.length && (t.eventProcessors = [...t.eventProcessors, ...p]), d.length && (t.attachments = [...t.attachments, ...d]), t.propagationContext = { ...t.propagationContext,
            ..._
        }
    }

    function tv(t, e, n) {
        t[e] = (0, th.merge)(t[e], n, 1)
    }

    function tE(t, e) {
        let n = (0, a.getGlobalScope)().getScopeData();
        return t && tS(n, t.getScopeData()), e && tS(n, e.getScopeData()), n
    }

    function ty(t, a, o, c, l, u) {
        var d, _, g, f, h;
        let m, {
                normalizeDepth: S = 3,
                normalizeMaxBreadth: v = 1e3
            } = t,
            E = { ...a,
                event_id: a.event_id || o.event_id || (0, tu.uuid4)(),
                timestamp: a.timestamp || (0, z.dateTimestampInSeconds)()
            },
            y = o.integrations || t.integrations.map(t => t.name);
        (function(t, e) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: a
            } = e;
            t.environment = t.environment || n || tp.DEFAULT_ENVIRONMENT, !t.release && r && (t.release = r), !t.dist && i && (t.dist = i);
            let s = t.request;
            if ((null == s ? void 0 : s.url) && a && (s.url = (0, P.truncate)(s.url, a)), a) {
                var o, c;
                null == (c = t.exception) || null == (o = c.values) || o.forEach(t => {
                    t.value && (t.value = (0, P.truncate)(t.value, a))
                })
            }
        })(E, t), d = E, (_ = y).length > 0 && (d.sdk = d.sdk || {}, d.sdk.integrations = [...d.sdk.integrations || [], ..._]), l && l.emit("applyFrameMetadata", a), void 0 === a.type && (g = E, m = function(t) {
            let a = A.GLOBAL_OBJ._sentryDebugIds,
                s = A.GLOBAL_OBJ._debugIds;
            if (!a && !s) return {};
            let o = a ? Object.keys(a) : [],
                c = s ? Object.keys(s) : [];
            if (i && o.length === n && c.length === r) return i;
            n = o.length, r = c.length, i = {}, e || (e = {});
            let l = (n, r) => {
                for (let a of n) {
                    let n = r[a],
                        s = null == e ? void 0 : e[a];
                    if (s && i && n) i[s[0]] = n, e && (e[a] = [s[0], n]);
                    else if (n) {
                        let r = t(a);
                        for (let t = r.length - 1; t >= 0; t--) {
                            let s = r[t],
                                o = null == s ? void 0 : s.filename;
                            if (o && i && e) {
                                i[o] = n, e[a] = [o, n];
                                break
                            }
                        }
                    }
                }
            };
            return a && l(o, a), s && l(c, s), i
        }(t.stackParser), null == (h = g.exception) || null == (f = h.values) || f.forEach(t => {
            var e, n;
            null == (n = t.stacktrace) || null == (e = n.frames) || e.forEach(t => {
                t.filename && (t.debug_id = m[t.filename])
            })
        }));
        let T = function(t, e) {
            if (!e) return t;
            let n = t ? t.clone() : new tf.Scope;
            return n.update(e), n
        }(c, o.captureContext);
        o.mechanism && (0, tu.addExceptionMechanism)(E, o.mechanism);
        let b = l ? l.getEventProcessors() : [],
            N = tE(u, T),
            C = [...o.attachments || [], ...N.attachments];
        C.length && (o.attachments = C), tm(E, N);
        let x = [...b, ...N.eventProcessors];
        return (o.data && !0 === o.data.__sentry__ ? td(E) : function(t, e, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            try {
                let i = function t(e, n, r, i) {
                    let a = r[i];
                    if (!e || !a) return e;
                    let o = a({ ...e
                    }, n);
                    return (s.DEBUG_BUILD && null === o && p.debug.log('Event processor "'.concat(a.id || "?", '" dropped event')), (0, tl.isThenable)(o)) ? o.then(e => t(e, n, r, i + 1)) : t(o, n, r, i + 1)
                }(e, n, t, r);
                return (0, tl.isThenable)(i) ? i : td(i)
            } catch (t) {
                return t_(t)
            }
        }(x, E, o)).then(t => (t && function(t) {
            var e, n;
            let r = {};
            if (null == (n = t.exception) || null == (e = n.values) || e.forEach(t => {
                    var e, n;
                    null == (n = t.stacktrace) || null == (e = n.frames) || e.forEach(t => {
                        t.debug_id && (t.abs_path ? r[t.abs_path] = t.debug_id : t.filename && (r[t.filename] = t.debug_id), delete t.debug_id)
                    })
                }), 0 === Object.keys(r).length) return;
            t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
            let i = t.debug_meta.images;
            Object.entries(r).forEach(t => {
                let [e, n] = t;
                i.push({
                    type: "sourcemap",
                    code_file: e,
                    debug_id: n
                })
            })
        }(t), "number" == typeof S && S > 0) ? function(t, e, n) {
            var r, i;
            if (!t) return null;
            let a = { ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({ ...t,
                        ...t.data && {
                            data: (0, I.normalize)(t.data, e, n)
                        }
                    }))
                },
                ...t.user && {
                    user: (0, I.normalize)(t.user, e, n)
                },
                ...t.contexts && {
                    contexts: (0, I.normalize)(t.contexts, e, n)
                },
                ...t.extra && {
                    extra: (0, I.normalize)(t.extra, e, n)
                }
            };
            return (null == (r = t.contexts) ? void 0 : r.trace) && a.contexts && (a.contexts.trace = t.contexts.trace, t.contexts.trace.data && (a.contexts.trace.data = (0, I.normalize)(t.contexts.trace.data, e, n))), t.spans && (a.spans = t.spans.map(t => ({ ...t,
                ...t.data && {
                    data: (0, I.normalize)(t.data, e, n)
                }
            }))), (null == (i = t.contexts) ? void 0 : i.flags) && a.contexts && (a.contexts.flags = (0, I.normalize)(t.contexts.flags, 3, n)), a
        }(t, S, v) : t)
    }

    function tT(t) {
        if (t) {
            var e;
            return (e = t) instanceof tf.Scope || "function" == typeof e || Object.keys(t).some(t => tb.includes(t)) ? {
                captureContext: t
            } : t
        }
    }
    t.s(["applyScopeDataToEvent", () => tm, "getCombinedScopeData", () => tE], 877912);
    let tb = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

    function tI(t, e) {
        return (0, a.getCurrentScope)().captureException(t, tT(e))
    }

    function tA(t, e) {
        return (0, a.getCurrentScope)().captureEvent(t, e)
    }

    function tN(t, e) {
        (0, a.getIsolationScope)().setContext(t, e)
    }

    function tC() {
        let t = (0, a.getClient)();
        return (null == t ? void 0 : t.getOptions().enabled) !== !1 && !!(null == t ? void 0 : t.getTransport())
    }

    function tx(t) {
        (0, a.getIsolationScope)().addEventProcessor(t)
    }

    function tR(t) {
        let e = (0, a.getIsolationScope)(),
            {
                user: n
            } = tE(e, (0, a.getCurrentScope)()),
            {
                userAgent: r
            } = A.GLOBAL_OBJ.navigator || {},
            i = (0, o.makeSession)({
                user: n,
                ...r && {
                    userAgent: r
                },
                ...t
            }),
            s = e.getSession();
        return (null == s ? void 0 : s.status) === "ok" && (0, o.updateSession)(s, {
            status: "exited"
        }), tO(), e.setSession(i), i
    }

    function tO() {
        let t = (0, a.getIsolationScope)(),
            e = (0, a.getCurrentScope)().getSession() || t.getSession();
        e && (0, o.closeSession)(e), tD(), t.setSession()
    }

    function tD() {
        let t = (0, a.getIsolationScope)(),
            e = (0, a.getClient)(),
            n = t.getSession();
        n && e && e.captureSession(n)
    }

    function tM() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        t ? tO() : tD()
    }
    t.s(["parseEventHintOrCaptureContext", () => tT, "prepareEvent", () => ty], 907312), t.s(["addEventProcessor", () => tx, "captureEvent", () => tA, "captureException", () => tI, "captureSession", () => tM, "isEnabled", () => tC, "setContext", () => tN, "startSession", () => tR], 561885)
}]);

//# debugId=282949a3-2c49-98bf-1125-40a4e5c459fd
//# sourceMappingURL=6f8447954262faf8.js.map