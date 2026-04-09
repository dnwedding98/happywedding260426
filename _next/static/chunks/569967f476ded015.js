;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "2d26c4da-741e-3749-d912-0d62f0a59753")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 564668, e => {
    "use strict";
    let t = (0, e.i(489198).chakra)("div");
    t.displayName = "Box", e.s(["Box", () => t])
}, 955343, e => {
    "use strict";
    var t = e.i(251570),
        r = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        },
        n = t.default.createContext && t.default.createContext(r),
        o = ["attr", "size", "title"];

    function i() {
        return (i = Object.assign.bind()).apply(this, arguments)
    }

    function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(r), !0).forEach(function(t) {
                var n, o, i;
                n = e, o = t, i = r[t], (o = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(o)) in n ? Object.defineProperty(n, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function a(e) {
        return r => t.default.createElement(c, i({
            attr: u({}, e.attr)
        }, r), function e(r) {
            return r && r.map((r, n) => t.default.createElement(r.tag, u({
                key: n
            }, r.attr), e(r.child)))
        }(e.child))
    }

    function c(e) {
        var l = r => {
            var n, {
                    attr: l,
                    size: a,
                    title: c
                } = e,
                s = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }(e, o),
                f = a || r.size || "1em";
            return r.className && (n = r.className), e.className && (n = (n ? n + " " : "") + e.className), t.default.createElement("svg", i({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, r.attr, l, s, {
                className: n,
                style: u(u({
                    color: e.color || r.color
                }, r.style), e.style),
                height: f,
                width: f,
                xmlns: "http://www.w3.org/2000/svg"
            }), c && t.default.createElement("title", null, c), e.children)
        };
        return void 0 !== n ? t.default.createElement(n.Consumer, null, e => l(e)) : l(r)
    }
    e.s(["GenIcon", () => a], 955343)
}, 360706, e => {
    "use strict";
    var t = function(e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return {
                parts: function() {
                    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                    if (n(o)) return t(e, i);
                    throw Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")
                },
                extendWith: function() {
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t(e, [...o, ...n])
                },
                omit: function() {
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t(e, o.filter(e => !n.includes(e)))
                },
                rename: e => t(e, o),
                keys: () => o,
                build: () => [...new Set(o)].reduce((t, n) => Object.assign(t, {
                    [n]: {
                        selector: ['&[data-scope="'.concat(r(e), '"][data-part="').concat(r(n), '"]'), '& [data-scope="'.concat(r(e), '"][data-part="').concat(r(n), '"]')].join(", "),
                        attrs: {
                            "data-scope": r(e),
                            "data-part": r(n)
                        }
                    }
                }), {})
            }
        },
        r = e => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),
        n = e => 0 === e.length;
    e.s(["createAnatomy", () => t])
}, 409078, e => {
    "use strict";
    let t;
    var r, n = Object.defineProperty,
        o = e => {
            throw TypeError(e)
        },
        i = (e, t, r) => {
            let o;
            return (o = "symbol" != typeof t ? t + "" : t) in e ? n(e, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[o] = r
        },
        l = (e, t, r) => (t.has(e) || o("Cannot read from private field"), t.get(e));

    function u(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e]
    }
    var a = e => e[0],
        c = e => e[e.length - 1],
        s = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.concat(r)
        },
        f = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.filter(e => !r.includes(e))
        },
        d = (e, t) => e.filter((e, r) => r !== t),
        p = e => Array.from(new Set(e)),
        h = (e, t) => {
            let r = new Set(t);
            return e.filter(e => !r.has(e))
        },
        y = (e, t) => -1 !== e.indexOf(t) ? f(e, t) : s(e, t);

    function v(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                step: n = 1,
                loop: o = !0
            } = r,
            i = t + n,
            l = e.length,
            u = l - 1;
        return -1 === t ? n > 0 ? 0 : u : i < 0 ? o ? u : 0 : i >= l ? o ? 0 : t > l ? l : t : i
    }

    function g(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e[v(e, t, r)]
    }

    function m(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                step: n = 1,
                loop: o = !0
            } = r;
        return v(e, t, {
            step: -n,
            loop: o
        })
    }

    function b(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e[m(e, t, r)]
    }

    function w(e, t) {
        return e.reduce((e, r, n) => {
            var o;
            return n % t == 0 ? e.push([r]) : null == (o = c(e)) || o.push(r), e
        }, [])
    }

    function E(e, t) {
        return e.reduce((e, r) => {
            let [n, o] = e;
            return t(r) ? n.push(r) : o.push(r), [n, o]
        }, [
            [],
            []
        ])
    }
    var A = e => (null == e ? void 0 : e.constructor.name) === "Array",
        _ = (e, t) => {
            if (Object.is(e, t)) return !0;
            if (null == e && null != t || null != e && null == t) return !1;
            if ("function" == typeof(null == e ? void 0 : e.isEqual) && "function" == typeof(null == t ? void 0 : t.isEqual)) return e.isEqual(t);
            if ("function" == typeof e && "function" == typeof t) return e.toString() === t.toString();
            if (A(e) && A(t)) return ((e, t) => {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (!_(e[r], t[r])) return !1;
                return !0
            })(Array.from(e), Array.from(t));
            if ("object" != typeof e || "object" != typeof t) return !1;
            let r = Object.keys(null != t ? t : Object.create(null)),
                n = r.length;
            for (let t = 0; t < n; t++)
                if (!Reflect.has(e, r[t])) return !1;
            for (let o = 0; o < n; o++) {
                let n = r[o];
                if (!_(e[n], t[n])) return !1
            }
            return !0
        },
        S = e => Array.isArray(e),
        O = e => !0 === e || !1 === e,
        x = e => null != e && "object" == typeof e,
        P = e => x(e) && !S(e),
        j = e => "number" == typeof e && !Number.isNaN(e),
        T = e => "string" == typeof e,
        k = e => "function" == typeof e,
        M = e => null == e,
        N = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        C = Function.prototype.toString,
        I = C.call(Object),
        R = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            let o = "function" == typeof e ? e(...r) : e;
            return null != o ? o : void 0
        },
        D = e => e,
        L = e => e(),
        F = () => {},
        z = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function() {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                t.forEach(function(e) {
                    null == e || e(...r)
                })
            }
        },
        K = (t = 0, () => (t++, t.toString(36)));

    function V(e, t) {
        for (var r, n, o = arguments.length, i = Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) i[l - 2] = arguments[l];
        if (e in t) {
            let r = t[e];
            return k(r) ? r(...i) : r
        }
        let u = Error("No matching key: ".concat(JSON.stringify(e), " in ").concat(JSON.stringify(Object.keys(t))));
        throw null == (r = (n = Error).captureStackTrace) || r.call(n, u, V), u
    }
    var q = (e, t) => {
        try {
            return e()
        } catch (e) {
            if (e instanceof Error) {
                var r, n;
                null == (r = (n = Error).captureStackTrace) || r.call(n, e, q)
            }
            return null == t ? void 0 : t()
        }
    };

    function W(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = 0,
            n = null;
        return function() {
            for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            let u = Date.now(),
                a = u - r;
            a >= t ? (n && (clearTimeout(n), n = null), e(...i), r = u) : n || (n = setTimeout(() => {
                e(...i), r = Date.now(), n = null
            }, t - a))
        }
    }
    var {
        floor: B,
        abs: U,
        round: H,
        min: X,
        max: $,
        pow: Z,
        sign: J
    } = Math, G = e => Number.isNaN(e) ? 0 : e, Y = (e, t) => (e % t + t) % t, Q = (e, t) => (e % t + t) % t, ee = (e, t) => G(e) >= t, et = (e, t) => G(e) <= t, er = (e, t, r) => {
        let n = G(e);
        return (null == t || n >= t) && (null == r || n <= r)
    }, en = (e, t, r) => X($(G(e), t), r), eo = (e, t, r) => (G(e) - t) / (r - t), ei = (e, t, r, n) => {
        let o;
        return en((o = e * (r - t) + t, H((G(o) - t) / n) * n + t), t, r)
    }, el = (e, t) => {
        let r = e,
            n = t.toString(),
            o = n.indexOf("."),
            i = o >= 0 ? n.length - o : 0;
        if (i > 0) {
            let e = Z(10, i);
            r = H(r * e) / e
        }
        return r
    }, eu = (e, t) => "number" == typeof t ? B(e * t + .5) / t : H(e), ea = (e, t, r, n) => {
        let o = null != t ? Number(t) : 0,
            i = Number(r),
            l = (e - o) % n,
            u = 2 * U(l) >= n ? e + J(l) * (n - U(l)) : e - l;
        if (u = el(u, n), !Number.isNaN(o) && u < o) u = o;
        else if (!Number.isNaN(i) && u > i) {
            let e = B((i - o) / n),
                t = o + e * n;
            u = e <= 0 || t < o ? i : t
        }
        return el(u, n)
    }, ec = (e, t, r) => e[t] === r ? e : [...e.slice(0, t), r, ...e.slice(t + 1)];

    function es(e, t) {
        let r, n, o, i, l = (r = t.values, n = t.min, 0 === e ? n : r[e - 1]),
            u = (o = t.values, i = t.max, e === o.length - 1 ? i : o[e + 1]),
            a = t.values.slice();
        return function(r) {
            let n = ea(r, l, u, t.step);
            return (a = ec(a, e, r))[e] = n, a
        }
    }

    function ef(e, t) {
        let r = t.values[e] + t.step;
        return es(e, t)(r)
    }

    function ed(e, t) {
        let r = t.values[e] - t.step;
        return es(e, t)(r)
    }
    var ep = (e, t, r, n) => e.map((o, i) => ({
            min: 0 === i ? t : e[i - 1] + n,
            max: i === e.length - 1 ? r : e[i + 1] - n,
            value: o
        })),
        eh = (e, t) => {
            let [r, n] = e, [o, i] = t;
            return e => r === n || o === i ? o : o + (i - o) / (n - r) * (e - r)
        },
        ey = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                n = Math.pow(r, t);
            return H(e * n) / n
        },
        ev = e => {
            if (!Number.isFinite(e)) return 0;
            let t = 1,
                r = 0;
            for (; Math.round(e * t) / t !== e;) t *= 10, r += 1;
            return r
        },
        eg = (e, t, r) => {
            let n = "+" === t ? e + r : e - r;
            if (e % 1 != 0 || r % 1 != 0) {
                let o = 10 ** Math.max(ev(e), ev(r));
                e = Math.round(e * o), r = Math.round(r * o), n = ("+" === t ? e + r : e - r) / o
            }
            return n
        },
        em = (e, t) => eg(G(e), "+", t),
        eb = (e, t) => eg(G(e), "-", t),
        ew = e => "number" == typeof e ? "".concat(e, "px") : e;

    function eE(e, t) {
        let r = {};
        for (let n of t) {
            let t = e[n];
            void 0 !== t && (r[n] = t)
        }
        return r
    }
    var eA = e => function(t) {
        let r = {},
            n = {},
            o = new Set(e);
        for (let e of Reflect.ownKeys(t)) o.has(e) ? n[e] = t[e] : r[e] = t[e];
        return [n, r]
    };

    function e_(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
            r = { ...e
            },
            n = new Set,
            o = () => {
                n.forEach(e => e())
            };
        return {
            subscribe: e => (n.add(e), () => n.delete(e)),
            get: e => r[e],
            set: (e, n) => {
                t(r[e], n) || (r[e] = n, o())
            },
            update: e => {
                let n = !1;
                for (let o in e) {
                    let i = e[o];
                    void 0 === i || t(r[o], i) || (r[o] = i, n = !0)
                }
                n && o()
            },
            snapshot: () => ({ ...r
            })
        }
    }
    var eS = class {
        get elapsedMs() {
            return null !== this.pausedAtMs ? this.pausedAtMs - this.context.startMs : performance.now() - this.context.startMs
        }
        constructor(e) {
            this.onTick = e, i(this, "frameId", null), i(this, "pausedAtMs", null), i(this, "context"), i(this, "cancelFrame", () => {
                null !== this.frameId && (cancelAnimationFrame(this.frameId), this.frameId = null)
            }), i(this, "setStartMs", e => {
                this.context.startMs = e
            }), i(this, "start", () => {
                if (null !== this.frameId) return;
                let e = performance.now();
                null !== this.pausedAtMs ? (this.context.startMs += e - this.pausedAtMs, this.pausedAtMs = null) : this.context.startMs = e, this.frameId = requestAnimationFrame(l(this, r))
            }), i(this, "pause", () => {
                null !== this.frameId && (this.cancelFrame(), this.pausedAtMs = performance.now())
            }), i(this, "stop", () => {
                null !== this.frameId && (this.cancelFrame(), this.pausedAtMs = null)
            }), ((e, t, r) => t.has(e) ? o("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r))(this, r, e => {
                (this.context.now = e, this.context.deltaMs = e - this.context.startMs, !1 === this.onTick(this.context)) ? this.stop(): this.frameId = requestAnimationFrame(l(this, r))
            }), this.context = {
                now: 0,
                startMs: performance.now(),
                deltaMs: 0
            }
        }
    };

    function eO(e, t) {
        let r = new eS(r => {
            let {
                deltaMs: n
            } = r;
            if (n >= t) return e(), !1
        });
        return r.start(), () => r.stop()
    }

    function ex() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        1 === t.length ? t[0] : t[1], 2 !== t.length || t[0]
    }

    function eP() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        1 === t.length ? t[0] : t[1], 2 !== t.length || t[0]
    }

    function ej(e, t) {
        if (null == e) throw Error(t())
    }

    function eT(e, t, r) {
        let n = [];
        for (let r of t) null == e[r] && n.push(r);
        if (n.length > 0) throw Error("[zag-js".concat(r ? " > ".concat(r) : "", "] missing required props: ").concat(n.join(", ")))
    }
    r = new WeakMap, e.s(["add", () => s, "addOrRemove", () => y, "callAll", () => z, "cast", () => D, "chunk", () => w, "clampValue", () => en, "compact", () => function e(t) {
        if (!(e => {
                if (!x(e) || "[object Object]" != Object.prototype.toString.call(e) || (e => "object" == typeof e && null !== e && "$$typeof" in e && "props" in e || "object" == typeof e && null !== e && "__v_isVNode" in e)(e)) return !1;
                let t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                let r = N(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && C.call(r) == I
            })(t) || void 0 === t) return t;
        let r = Reflect.ownKeys(t).filter(e => "string" == typeof e),
            n = {};
        for (let o of r) {
            let r = t[o];
            void 0 !== r && (n[o] = e(r))
        }
        return n
    }, "createSplitProps", () => eA, "createStore", () => e_, "decrementValue", () => eb, "diff", () => h, "ensure", () => ej, "ensureProps", () => eT, "first", () => a, "flatArray", () => function e(t) {
        return t.reduce((t, r) => Array.isArray(r) ? t.concat(e(r)) : t.concat(r), [])
    }, "getNextStepValue", () => ef, "getPercentValue", () => ei, "getPreviousStepValue", () => ed, "getValuePercent", () => eo, "getValueRanges", () => ep, "getValueTransformer", () => eh, "hasProp", () => N, "identity", () => L, "incrementValue", () => em, "invariant", () => eP, "isArray", () => S, "isBoolean", () => O, "isEqual", () => _, "isFunction", () => k, "isNull", () => M, "isNumber", () => j, "isObject", () => P, "isString", () => T, "isValueAtMax", () => ee, "isValueAtMin", () => et, "isValueWithinRange", () => er, "last", () => c, "match", () => V, "mod", () => Y, "next", () => g, "nextIndex", () => v, "noop", () => F, "partition", () => E, "pick", () => eE, "prev", () => b, "prevIndex", () => m, "remove", () => f, "removeAt", () => d, "roundToDpr", () => eu, "runIfFn", () => R, "setRafTimeout", () => eO, "setValueAtIndex", () => ec, "snapValueToStep", () => ea, "throttle", () => W, "toArray", () => u, "toFixedNumber", () => ey, "toPx", () => ew, "tryCatch", () => q, "uniq", () => p, "uuid", () => K, "warn", () => ex, "wrap", () => Q])
}, 841158, e => {
    "use strict";
    let t, r, n, o;
    var i, l = Object.defineProperty,
        u = (e, t, r) => {
            let n;
            return (n = "symbol" != typeof t ? t + "" : t) in e ? l(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[n] = r
        };

    function a(e) {
        if (!e) return !1;
        try {
            return 0 === e.selectionStart && 0 === e.selectionEnd
        } catch {
            return "" === e.value
        }
    }

    function c(e) {
        var t, r;
        if (!e) return;
        let n = null != (t = e.selectionStart) ? t : 0;
        0 !== Math.abs((null != (r = e.selectionEnd) ? r : 0) - n) || 0 === n && e.setSelectionRange(e.value.length, e.value.length)
    }
    var s = e => Math.max(0, Math.min(1, e)),
        f = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return e => t.reduce((e, t) => t(e), e)
        },
        d = () => void 0,
        p = e => "object" == typeof e && null !== e,
        h = e => e ? "" : void 0,
        y = e => e ? "true" : void 0,
        v = e => p(e) && 1 === e.nodeType && "string" == typeof e.nodeName,
        g = e => p(e) && 9 === e.nodeType,
        m = e => v(e) ? e.localName || "" : "#document",
        b = e => p(e) && void 0 !== e.nodeType && 11 === e.nodeType && "host" in e,
        w = e => !!(null == e ? void 0 : e.matches("a[href]"));

    function E(e) {
        return !!e && P(e.getRootNode()) === e
    }
    var A = /(textarea|select)/;

    function _(e) {
        if (null == e || !v(e)) return !1;
        try {
            return v(e) && "input" === e.localName && null != e.selectionStart || A.test(e.localName) || e.isContentEditable || "true" === e.getAttribute("contenteditable") || "" === e.getAttribute("contenteditable")
        } catch {
            return !1
        }
    }

    function S(e, t) {
        var r;
        if (!e || !t || !v(e) || !v(t)) return !1;
        let n = null == (r = t.getRootNode) ? void 0 : r.call(t);
        if (e === t || e.contains(t)) return !0;
        if (n && b(n)) {
            let r = t;
            for (; r;) {
                if (e === r) return !0;
                r = r.parentNode || r.host
            }
        }
        return !1
    }

    function O(e) {
        var t;
        return g(e) ? e : p(e) && e === e.window ? e.document : null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
    }

    function x(e) {
        var t, r, n;
        return b(e) ? x(e.host) : g(e) ? null != (r = e.defaultView) ? r : window : v(e) && null != (n = null == (t = e.ownerDocument) ? void 0 : t.defaultView) ? n : window
    }

    function P(e) {
        let t = e.activeElement;
        for (; null == t ? void 0 : t.shadowRoot;) {
            let e = t.shadowRoot.activeElement;
            if (e && e !== t) t = e;
            else break
        }
        return t
    }

    function j(e) {
        var t;
        let r;
        try {
            if (r = e.getRootNode({
                    composed: !0
                }), g(r) || b(r)) return r
        } catch {}
        return null != (t = e.ownerDocument) ? t : document
    }
    var T = new WeakMap;

    function k(e) {
        return T.has(e) || T.set(e, x(e).getComputedStyle(e)), T.get(e)
    }
    var M = new Set(["menu", "listbox", "dialog", "grid", "tree", "region"]),
        N = e => M.has(e),
        C = e => {
            var t;
            return (null == (t = e.getAttribute("aria-controls")) ? void 0 : t.split(" ")) || []
        };

    function I(e, t) {
        let r = new Set,
            n = j(e),
            o = e => {
                for (let i of e.querySelectorAll("[aria-controls]"))
                    if ("true" === i.getAttribute("aria-expanded"))
                        for (let e of C(i)) {
                            if (!e || r.has(e)) continue;
                            r.add(e);
                            let i = n.getElementById(e);
                            if (i) {
                                let e = i.getAttribute("role"),
                                    r = "true" === i.getAttribute("aria-modal");
                                if (e && N(e) && !r && (i === t || i.contains(t) || o(i))) return !0
                            }
                        }
                return !1
            };
        return o(e)
    }

    function R(e, t) {
        let r = j(e),
            n = new Set,
            o = e => {
                for (let i of e.querySelectorAll("[aria-controls]"))
                    if ("true" === i.getAttribute("aria-expanded"))
                        for (let e of C(i)) {
                            if (!e || n.has(e)) continue;
                            n.add(e);
                            let i = r.getElementById(e);
                            if (i) {
                                let e = i.getAttribute("role"),
                                    r = "true" === i.getAttribute("aria-modal");
                                e && M.has(e) && !r && (t(i), o(i))
                            }
                        }
            };
        o(e)
    }

    function D(e) {
        let t = new Set;
        return R(e, r => {
            e.contains(r) || t.add(r)
        }), Array.from(t)
    }

    function L(e) {
        var t;
        return !!e.hasAttribute("aria-controls") && "true" === e.getAttribute("aria-expanded") || !!(null == (t = e.querySelector) ? void 0 : t.call(e, '[aria-controls][aria-expanded="true"]'))
    }

    function F(e) {
        let t;
        if (!e.id) return !1;
        let r = j(e),
            n = CSS.escape(e.id),
            o = '[aria-controls~="'.concat(n, '"][aria-expanded="true"], [aria-controls="').concat(n, '"][aria-expanded="true"]');
        return !!(r.querySelector(o) && (t = e.getAttribute("role")) && M.has(t))
    }

    function z(e, t) {
        let {
            type: r,
            quality: n = .92,
            background: o
        } = t;
        if (!e) throw Error("[zag-js > getDataUrl]: Could not find the svg element");
        let i = x(e),
            l = i.document,
            u = e.getBoundingClientRect(),
            a = e.cloneNode(!0);
        a.hasAttribute("viewBox") || a.setAttribute("viewBox", "0 0 ".concat(u.width, " ").concat(u.height));
        let c = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + new i.XMLSerializer().serializeToString(a));
        if ("image/svg+xml" === r) return Promise.resolve(c).then(e => (a.remove(), e));
        let s = i.devicePixelRatio || 1,
            f = l.createElement("canvas"),
            d = new i.Image;
        d.src = c, f.width = u.width * s, f.height = u.height * s;
        let p = f.getContext("2d");
        return ("image/jpeg" === r || o) && (p.fillStyle = o || "white", p.fillRect(0, 0, f.width, f.height)), new Promise(e => {
            d.onload = () => {
                null == p || p.drawImage(d, 0, 0, f.width, f.height), e(f.toDataURL(r, n)), a.remove()
            }
        })
    }
    var K = e => {
            var t;
            let r;
            return "undefined" != typeof document && e.test(null != (t = null == (r = navigator.userAgentData) ? void 0 : r.platform) ? t : navigator.platform)
        },
        V = e => {
            let t;
            return "undefined" != typeof document && e.test((t = navigator.userAgentData) && Array.isArray(t.brands) ? t.brands.map(e => {
                let {
                    brand: t,
                    version: r
                } = e;
                return "".concat(t, "/").concat(r)
            }).join(" ") : navigator.userAgent)
        },
        q = () => "undefined" != typeof document && !!navigator.maxTouchPoints,
        W = () => K(/^iPhone/i) || K(/^iPad/i) || U() && navigator.maxTouchPoints > 1,
        B = () => U() || W(),
        U = () => K(/^Mac/i),
        H = () => {
            let e;
            return B() && (e = /apple/i, "undefined" != typeof document && e.test(navigator.vendor))
        };

    function X(e) {
        let {
            selectionStart: t,
            selectionEnd: r,
            value: n
        } = e.currentTarget, o = e.data;
        return n.slice(0, t) + (null != o ? o : "") + n.slice(r)
    }

    function $(e) {
        var t, r, n, o, i;
        let l = null != (i = null == (r = e.composedPath) ? void 0 : r.call(e)) ? i : null == (o = e.nativeEvent) || null == (n = o.composedPath) ? void 0 : n.call(o);
        return null != (t = null == l ? void 0 : l[0]) ? t : e.target
    }

    function Z(e) {
        let t = e.currentTarget;
        if (!t || !t.matches("a[href], button[type='submit'], input[type='submit']")) return !1;
        let r = 1 === e.button,
            n = Y(e);
        return r || n
    }

    function J(e) {
        let t = e.currentTarget;
        if (!t) return !1;
        let r = t.localName;
        return !!e.altKey && ("a" === r || "button" === r && "submit" === t.type || "input" === r && "submit" === t.type)
    }

    function G(e) {
        return eu(e).isComposing || 229 === e.keyCode
    }

    function Y(e) {
        return U() ? e.metaKey : e.ctrlKey
    }

    function Q(e) {
        return 1 === e.key.length && !e.ctrlKey && !e.metaKey
    }

    function ee(e) {
        return "" === e.pointerType && !!e.isTrusted || (V(/Android/i) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }
    var et = e => 0 === e.button,
        er = e => 2 === e.button || U() && e.ctrlKey && 0 === e.button,
        en = e => e.ctrlKey || e.altKey || e.metaKey,
        eo = {
            Up: "ArrowUp",
            Down: "ArrowDown",
            Esc: "Escape",
            " ": "Space",
            ",": "Comma",
            Left: "ArrowLeft",
            Right: "ArrowRight"
        },
        ei = {
            ArrowLeft: "ArrowRight",
            ArrowRight: "ArrowLeft"
        };

    function el(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                dir: n = "ltr",
                orientation: o = "horizontal"
            } = r,
            i = e.key;
        return i = null != (t = eo[i]) ? t : i, "rtl" === n && "horizontal" === o && i in ei && (i = ei[i]), i
    }

    function eu(e) {
        var t;
        return null != (t = e.nativeEvent) ? t : e
    }
    var ea = new Set(["PageUp", "PageDown"]),
        ec = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);

    function es(e) {
        return e.ctrlKey || e.metaKey ? .1 : ea.has(e.key) || e.shiftKey && ec.has(e.key) ? 10 : 1
    }

    function ef(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "client",
            r = "touches" in e && e.touches.length > 0 ? e.touches[0] || e.changedTouches[0] : e;
        return {
            x: r["".concat(t, "X")],
            y: r["".concat(t, "Y")]
        }
    }
    var ed = (e, t, r, n) => {
        let o = "function" == typeof e ? e() : e;
        return null == o || o.addEventListener(t, r, n), () => {
            null == o || o.removeEventListener(t, r, n)
        }
    };

    function ep(e, t) {
        var r;
        let {
            type: n = "HTMLInputElement",
            property: o = "value"
        } = t;
        return null != (r = Object.getOwnPropertyDescriptor(x(e)[n].prototype, o)) ? r : {}
    }

    function eh(e, t) {
        var r;
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "value";
        if (!e) return;
        let o = "input" === e.localName ? "HTMLInputElement" : "textarea" === e.localName ? "HTMLTextAreaElement" : "select" === e.localName ? "HTMLSelectElement" : void 0;
        o && (null == (r = ep(e, {
            type: o,
            property: n
        }).set) || r.call(e, t)), e.setAttribute(n, t)
    }

    function ey(e, t) {
        var r;
        e && (null == (r = ep(e, {
            type: "HTMLInputElement",
            property: "checked"
        }).set) || r.call(e, t), t ? e.setAttribute("checked", "") : e.removeAttribute("checked"))
    }

    function ev(e, t) {
        let {
            value: r,
            bubbles: n = !0
        } = t;
        if (!e) return;
        let o = x(e);
        e instanceof o.HTMLInputElement && (eh(e, "".concat(r)), e.dispatchEvent(new o.Event("input", {
            bubbles: n
        })))
    }

    function eg(e, t) {
        let {
            checked: r,
            bubbles: n = !0
        } = t;
        if (!e) return;
        let o = x(e);
        e instanceof o.HTMLInputElement && (ey(e, r), e.dispatchEvent(new o.Event("click", {
            bubbles: n
        })))
    }

    function em(e, t) {
        if (!e) return;
        let {
            onFieldsetDisabledChange: r,
            onFormReset: n
        } = t, o = [function(e, t) {
            if (!e) return;
            let r = e.matches("textarea, input, select, button") ? e.form : e.closest("form"),
                n = e => {
                    e.defaultPrevented || t()
                };
            return null == r || r.addEventListener("reset", n, {
                passive: !0
            }), () => null == r ? void 0 : r.removeEventListener("reset", n)
        }(e, n), function(e, t) {
            let r = null == e ? void 0 : e.closest("fieldset");
            if (!r) return;
            t(r.disabled);
            let n = new(x(r)).MutationObserver(() => t(r.disabled));
            return n.observe(r, {
                attributes: !0,
                attributeFilter: ["disabled"]
            }), () => n.disconnect()
        }(e, r)];
        return () => o.forEach(e => null == e ? void 0 : e())
    }
    var eb = e => v(e) && "IFRAME" === e.tagName,
        ew = /^(audio|video|details)$/;

    function eE(e) {
        let t = e.getAttribute("tabindex");
        return t ? parseInt(t, 10) : NaN
    }

    function eA(e, t, r) {
        let n = [...e],
            o = [...e],
            i = new Set,
            l = new Map;
        e.forEach((e, t) => l.set(e, t));
        let u = 0;
        for (; u < o.length;) {
            let e = o[u++];
            if (!e || i.has(e)) continue;
            i.add(e);
            let a = function(e, t) {
                if (!t) return null;
                if (!0 === t) return e.shadowRoot || null;
                let r = t(e);
                return (!0 === r ? e.shadowRoot : r) || null
            }(e, t);
            if (a) {
                let t = Array.from(a.querySelectorAll(e_)).filter(r),
                    i = l.get(e);
                if (void 0 !== i) {
                    let e = i + 1;
                    n.splice(e, 0, ...t), t.forEach((t, r) => {
                        l.set(t, e + r)
                    });
                    for (let r = e + t.length; r < n.length; r++) l.set(n[r], r)
                } else {
                    let e = n.length;
                    n.push(...t), t.forEach((t, r) => {
                        l.set(t, e + r)
                    })
                }
                o.push(...t)
            }
        }
        return n
    }
    var e_ = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",
        eS = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return [];
            let {
                includeContainer: r = !1,
                getShadowRoot: n
            } = t, o = Array.from(e.querySelectorAll(e_));
            (!0 == r || "if-empty" == r && 0 === o.length) && v(e) && eO(e) && o.unshift(e);
            let i = [];
            for (let e of o)
                if (eO(e)) {
                    if (eb(e) && e.contentDocument) {
                        let t = e.contentDocument.body;
                        i.push(...eS(t, {
                            getShadowRoot: n
                        }));
                        continue
                    }
                    i.push(e)
                }
            return n ? eA(i, n, eO) : i
        };

    function eO(e) {
        return !(!v(e) || e.closest("[inert]")) && e.matches(e_) && !!v(e) && (e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0)
    }

    function ex(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return [];
        let {
            includeContainer: r,
            getShadowRoot: n
        } = t, o = Array.from(e.querySelectorAll(e_));
        r && eP(e) && o.unshift(e);
        let i = [];
        for (let e of o)
            if (eP(e)) {
                if (eb(e) && e.contentDocument) {
                    let t = e.contentDocument.body;
                    i.push(...ex(t, {
                        getShadowRoot: n
                    }));
                    continue
                }
                i.push(e)
            }
        if (n) {
            let e = eA(i, n, eP);
            return !e.length && r ? o : e
        }
        return !i.length && r ? o : i
    }

    function eP(e) {
        return !!v(e) && !!(e.tabIndex > 0) || eO(e) && !(0 > eE(e))
    }

    function ej(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = ex(e, t);
        return [r[0] || null, r[r.length - 1] || null]
    }

    function eT(e) {
        return e.tabIndex < 0 && (ew.test(e.localName) || _(e)) && Number.isNaN(eE(e)) ? 0 : e.tabIndex
    }

    function ek(e) {
        let {
            root: t,
            getInitialEl: r,
            filter: n,
            enabled: o = !0
        } = e;
        if (!o) return;
        let i = null;
        if ((i = "function" == typeof r ? r() : r) || (i = null == t ? void 0 : t.querySelector("[data-autofocus],[autofocus]")), !i) {
            let e = ex(t);
            i = n ? e.filter(n)[0] : e[0]
        }
        return i || t || void 0
    }

    function eM(e) {
        let t = e.currentTarget;
        if (!t) return !1;
        let [r, n] = ej(t);
        return !(E(r) && e.shiftKey || E(n) && !e.shiftKey) && (!!r || !!n)
    }
    var eN = class e {
        static create() {
            return new e
        }
        request(e) {
            this.cancel(), this.id = globalThis.requestAnimationFrame(() => {
                this.id = null, this.fn_cleanup = null == e ? void 0 : e()
            })
        }
        cancel() {
            var e;
            null !== this.id && (globalThis.cancelAnimationFrame(this.id), this.id = null), null == (e = this.fn_cleanup) || e.call(this), this.fn_cleanup = void 0
        }
        isActive() {
            return null !== this.id
        }
        constructor() {
            u(this, "id", null), u(this, "fn_cleanup"), u(this, "cleanup", () => {
                this.cancel()
            })
        }
    };

    function eC(e) {
        let t = eN.create();
        return t.request(e), t.cleanup
    }

    function eI(e) {
        let t = new Set;

        function r(e) {
            let r = globalThis.requestAnimationFrame(e);
            t.add(() => globalThis.cancelAnimationFrame(r))
        }
        return r(() => r(e)),
            function() {
                t.forEach(e => e())
            }
    }

    function eR(e, t) {
        let {
            defer: r
        } = t, n = [];
        return n.push((r ? eC : e => e())(() => {
            let r = "function" == typeof e ? e() : e;
            n.push(function(e, t) {
                if (!e) return;
                let {
                    attributes: r,
                    callback: n
                } = t, o = new(e.ownerDocument.defaultView || window).MutationObserver(e => {
                    for (let t of e) "attributes" === t.type && t.attributeName && r.includes(t.attributeName) && n(t)
                });
                return o.observe(e, {
                    attributes: !0,
                    attributeFilter: r
                }), () => o.disconnect()
            }(r, t))
        })), () => {
            n.forEach(e => null == e ? void 0 : e())
        }
    }

    function eD(e, t) {
        let {
            defer: r
        } = t, n = [];
        return n.push((r ? eC : e => e())(() => {
            let r = "function" == typeof e ? e() : e;
            n.push(function(e, t) {
                let {
                    callback: r
                } = t;
                if (!e) return;
                let n = new(e.ownerDocument.defaultView || window).MutationObserver(r);
                return n.observe(e, {
                    childList: !0,
                    subtree: !0
                }), () => n.disconnect()
            }(r, t))
        })), () => {
            n.forEach(e => null == e ? void 0 : e())
        }
    }

    function eL(e) {
        let t = () => {
            let t = x(e);
            e.dispatchEvent(new t.MouseEvent("click"))
        };
        if (V(/Firefox/i)) {
            let r, n;
            r = eC(() => {
                e.removeEventListener("keyup", n, !0), t()
            }), n = () => {
                r(), t()
            }, e.addEventListener("keyup", n, {
                once: !0,
                capture: !0
            })
        } else queueMicrotask(t)
    }

    function eF(e) {
        let t = function(e) {
            if ("html" === m(e)) return e;
            let t = e.assignedSlot || e.parentNode || b(e) && e.host || O(e).documentElement;
            return b(t) ? t.host : t
        }(e);
        return ["html", "body", "#document"].includes(m(t)) ? O(t).body : v(t) && eV(t) ? t : eF(t)
    }
    var ez = /auto|scroll|overlay|hidden|clip/,
        eK = new Set(["inline", "contents"]);

    function eV(e) {
        let {
            overflow: t,
            overflowX: r,
            overflowY: n,
            display: o
        } = x(e).getComputedStyle(e);
        return ez.test(t + n + r) && !eK.has(o)
    }

    function eq(e, t) {
        let {
            rootEl: r,
            ...n
        } = t || {};
        e && r && eV(r) && (r.scrollHeight > r.clientHeight || r.scrollWidth > r.clientWidth) && e.scrollIntoView(n)
    }

    function eW(e, t) {
        let {
            left: r,
            top: n,
            width: o,
            height: i
        } = t.getBoundingClientRect(), l = {
            x: e.x - r,
            y: e.y - n
        }, u = {
            x: s(l.x / o),
            y: s(l.y / i)
        };
        return {
            offset: l,
            percent: u,
            getPercentValue: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        dir: t = "ltr",
                        orientation: r = "horizontal",
                        inverted: n
                    } = e,
                    o = "object" == typeof n ? n.x : n,
                    i = "object" == typeof n ? n.y : n;
                return "horizontal" === r ? "rtl" === t || o ? 1 - u.x : u.x : i ? 1 - u.y : u.y
            }
        }
    }

    function eB(e, t) {
        let r = e.body;
        if (!("pointerLockElement" in e || "mozPointerLockElement" in e)) return;
        try {
            r.requestPointerLock()
        } catch {}
        let n = [ed(e, "pointerlockchange", function() {
            null == t || t(!!e.pointerLockElement)
        }, !1), ed(e, "pointerlockerror", function(r) {
            e.pointerLockElement && (null == t || t(!1)), console.error("PointerLock error occurred:", r), e.exitPointerLock()
        }, !1)];
        return () => {
            n.forEach(e => e()), e.exitPointerLock()
        }
    }
    var eU = "default",
        eH = "",
        eX = new WeakMap;

    function e$() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                defer: t,
                target: r,
                ...n
            } = e,
            o = [];
        return o.push((t ? eC : e => e())(() => {
            let e = "function" == typeof r ? r() : r;
            o.push(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        target: t,
                        doc: r
                    } = e,
                    n = null != r ? r : document,
                    o = n.documentElement;
                return W() ? ("default" === eU && (eH = o.style.webkitUserSelect, o.style.webkitUserSelect = "none"), eU = "disabled") : t && (eX.set(t, t.style.userSelect), t.style.userSelect = "none"), () => (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            target: t,
                            doc: r
                        } = e,
                        n = (null != r ? r : document).documentElement;
                    if (W()) {
                        if ("disabled" !== eU) return;
                        eU = "restoring", setTimeout(() => {
                            eI(() => {
                                "restoring" === eU && ("none" === n.style.webkitUserSelect && (n.style.webkitUserSelect = eH || ""), eH = "", eU = "default")
                            })
                        }, 300)
                    } else if (t && eX.has(t)) {
                        let e = eX.get(t);
                        "none" === t.style.userSelect && (t.style.userSelect = null != e ? e : ""), "" === t.getAttribute("style") && t.removeAttribute("style"), eX.delete(t)
                    }
                })({
                    target: t,
                    doc: n
                })
            }({ ...n,
                target: e
            }))
        })), () => {
            o.forEach(e => null == e ? void 0 : e())
        }
    }

    function eZ(e, t) {
        let {
            onPointerMove: r,
            onPointerUp: n
        } = t, o = e => {
            n({
                point: ef(e),
                event: e
            })
        }, i = [ed(e, "pointermove", e => {
            let t = ef(e);
            if (!(Math.sqrt(t.x ** 2 + t.y ** 2) < ("touch" === e.pointerType ? 10 : 5))) {
                if ("mouse" === e.pointerType && 0 === e.buttons) return void o(e);
                r({
                    point: t,
                    event: e
                })
            }
        }, !1), ed(e, "pointerup", o, !1), ed(e, "pointercancel", o, !1), ed(e, "contextmenu", o, !1), e$({
            doc: e
        })];
        return () => {
            i.forEach(e => e())
        }
    }

    function eJ(e) {
        let {
            pointerNode: t,
            keyboardNode: r = t,
            onPress: n,
            onPressStart: o,
            onPressEnd: i,
            isValidKey: l = e => "Enter" === e.key
        } = e;
        if (!t) return d;
        let u = x(t),
            a = d,
            c = d,
            s = d,
            p = e => ({
                point: ef(e),
                event: e
            });

        function h(e) {
            null == o || o(p(e))
        }

        function y(e) {
            null == i || i(p(e))
        }
        let v = ed(t, "pointerdown", e => {
            c(), c = f(ed(u, "pointerup", e => {
                S(t, $(e)) ? null == n || n(p(e)) : null == i || i(p(e))
            }, {
                passive: !n,
                once: !0
            }), ed(u, "pointercancel", y, {
                passive: !i,
                once: !0
            })), E(r) && "mouse" === e.pointerType && e.preventDefault(), h(e)
        }, {
            passive: !o
        });
        return a = f(v, ed(r, "focus", function() {
            s = f(ed(r, "keydown", e => {
                l(e) && (c(), c = ed(r, "keyup", e => {
                    if (!l(e)) return;
                    let t = p(new u.PointerEvent("pointerup"));
                    null == n || n(t), null == i || i(t)
                }), h(new u.PointerEvent("pointerdown")))
            }), ed(r, "blur", () => {
                y(new u.PointerEvent("pointercancel"))
            }))
        })), () => {
            a(), c(), s()
        }
    }

    function eG(e, t) {
        let {
            defer: r,
            triggerElement: n,
            ...o
        } = t, i = [];
        return i.push((r ? eC : e => e())(() => {
            let t = "function" == typeof e ? e() : e,
                r = "function" == typeof n ? n() : n;
            i.push(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        triggerElement: r,
                        onFocus: n,
                        onFocusEnter: o,
                        getShadowRoot: i
                    } = t,
                    l = (null == e ? void 0 : e.ownerDocument) || document,
                    u = l.body;
                return ed(l, "keydown", function(t) {
                    if ("Tab" !== t.key) return;
                    let l = null,
                        [a, c] = ej(e, {
                            includeContainer: !0,
                            getShadowRoot: i
                        }),
                        s = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                {
                                    current: r,
                                    getShadowRoot: n
                                } = t,
                                o = ex(e, {
                                    getShadowRoot: n
                                }),
                                i = (null == e ? void 0 : e.ownerDocument) || document,
                                l = null != r ? r : P(i);
                            if (!l) return null;
                            let u = o.indexOf(l);
                            return o[u + 1] || null
                        }(u, {
                            current: r,
                            getShadowRoot: i
                        }),
                        f = !a && !c;
                    t.shiftKey && E(s) ? (null == o || o(), l = c) : t.shiftKey && (E(a) || f) ? l = r : !t.shiftKey && E(r) ? (null == o || o(), l = a) : !t.shiftKey && (E(c) || f) && (l = s), l && (t.preventDefault(), "function" == typeof n ? n(l) : l.focus())
                }, !0)
            }(t, {
                triggerElement: r,
                ...o
            }))
        })), () => {
            i.forEach(e => null == e ? void 0 : e())
        }
    }

    function eY(e, t) {
        var r;
        return Array.from(null != (r = null == e ? void 0 : e.querySelectorAll(t)) ? r : [])
    }

    function eQ(e, t) {
        var r;
        return null != (r = null == e ? void 0 : e.querySelector(t)) ? r : null
    }
    var e0 = e => e.id;

    function e1(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e0;
        return e.find(e => r(e) === t)
    }

    function e2(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e0,
            n = e1(e, t, r);
        return n ? e.indexOf(n) : -1
    }

    function e3(e, t) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            n = e2(e, t);
        return n = r ? (n + 1) % e.length : Math.min(n + 1, e.length - 1), e[n]
    }

    function e6(e, t) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            n = e2(e, t);
        return -1 === n ? r ? e[e.length - 1] : null : (n = r ? (n - 1 + e.length) % e.length : Math.max(0, n - 1), e[n])
    }
    var e8 = (i = {
        box: "border-box"
    }, r = new WeakMap, n = new WeakMap, o = e => t || (t = new e.ResizeObserver(e => {
        for (let t of e) {
            n.set(t.target, t);
            let e = r.get(t.target);
            if (e)
                for (let r of e) r(t)
        }
    })), {
        observe: (e, t) => {
            let n = r.get(e) || new Set;
            n.add(t), r.set(e, n);
            let l = x(e);
            return o(l).observe(e, i), () => {
                let n = r.get(e);
                n && (n.delete(t), 0 === n.size && (r.delete(e), o(l).unobserve(e)))
            }
        },
        unobserve: e => {
            r.delete(e), null == t || t.unobserve(e)
        }
    });

    function e5(e, t, r) {
        let n = e.getAttribute(t),
            o = null != n;
        return e.setAttribute(t, r), () => {
            o ? e.setAttribute(t, n) : e.removeAttribute(t)
        }
    }

    function e4(e, t) {
        if (!e) return d;
        let r = Object.keys(t).reduce((t, r) => (t[r] = e.style.getPropertyValue(r), t), {});
        return Object.assign(e.style, t), () => {
            Object.assign(e.style, r), 0 === e.style.length && e.removeAttribute("style")
        }
    }

    function e7(e, t, r) {
        if (!e) return d;
        let n = e.style.getPropertyValue(t);
        return e.style.setProperty(t, r), () => {
            e.style.setProperty(t, n), 0 === e.style.length && e.removeAttribute("style")
        }
    }
    var e9 = Object.assign(function(e, t) {
            let {
                state: r,
                activeId: n,
                key: o,
                timeout: i = 350,
                itemToId: l
            } = t, u = r.keysSoFar + o, a = u.length > 1 && Array.from(u).every(e => e === u[0]) ? u[0] : u, c = function(e, t, r) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e0,
                    o = r ? e2(e, r, n) : -1,
                    i = r ? e.map((t, r) => e[(Math.max(o, 0) + r) % e.length]) : e;
                return 1 === t.length && (i = i.filter(e => n(e) !== r)), i.find(e => {
                    var r, n, o;
                    let i;
                    return i = (null != (o = null != (n = null == (r = e.dataset) ? void 0 : r.valuetext) ? n : e.textContent) ? o : "").split("").map(e => {
                        let t = e.charCodeAt(0);
                        return t > 0 && t < 128 ? e : t >= 128 && t <= 255 ? "/x".concat(t.toString(16)).replace("/", "\\") : ""
                    }).join("").trim(), i.trim().toLowerCase().startsWith(t.toLowerCase())
                })
            }(e.slice(), a, n, l);

            function s() {
                clearTimeout(r.timer), r.timer = -1
            }
            return ! function e(t) {
                r.keysSoFar = t, s(), "" !== t && (r.timer = +setTimeout(() => {
                    e(""), s()
                }, i))
            }(u), c
        }, {
            defaultOptions: {
                keysSoFar: "",
                timer: -1
            },
            isValidEvent: function(e) {
                return 1 === e.key.length && !e.ctrlKey && !e.metaKey
            }
        }),
        te = {
            border: "0",
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: "0",
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap",
            wordWrap: "normal"
        };

    function tt(e, t) {
        let {
            timeout: r,
            rootNode: n
        } = t, o = x(n), i = O(n), l = new o.AbortController;
        return function(e, t, r) {
            let {
                signal: n
            } = t;
            return [new Promise((t, o) => {
                let i = setTimeout(() => {
                    o(Error("Timeout of ".concat(r, "ms exceeded")))
                }, r);
                n.addEventListener("abort", () => {
                    clearTimeout(i), o(Error("Promise aborted"))
                }), e.then(e => {
                    n.aborted || (clearTimeout(i), t(e))
                }).catch(e => {
                    n.aborted || (clearTimeout(i), o(e))
                })
            }), () => t.abort()]
        }(new Promise(t => {
            let r = e();
            if (r) return void t(r);
            let n = new o.MutationObserver(() => {
                let r = e();
                r && r.isConnected && (n.disconnect(), t(r))
            });
            n.observe(i.body, {
                childList: !0,
                subtree: !0
            })
        }), l, r)
    }
    e.s(["AnimationFrame", () => eN, "MAX_Z_INDEX", () => 0x7fffffff, "addDomEvent", () => ed, "ariaAttr", () => y, "clickIfLink", () => eL, "contains", () => S, "dataAttr", () => h, "disableTextSelection", () => e$, "dispatchInputCheckedEvent", () => eg, "dispatchInputValueEvent", () => ev, "findControlledElements", () => R, "getActiveElement", () => P, "getBeforeInputValue", () => X, "getByTypeahead", () => e9, "getComputedStyle", () => k, "getControlledElements", () => D, "getDataUrl", () => z, "getDocument", () => O, "getEventKey", () => el, "getEventPoint", () => ef, "getEventStep", () => es, "getEventTarget", () => $, "getFocusables", () => eS, "getInitialFocus", () => ek, "getNativeEvent", () => eu, "getNearestOverflowAncestor", () => eF, "getOverflowAncestors", () => function e(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = eF(t),
            o = n === t.ownerDocument.body,
            i = x(n);
        return o ? r.concat(i, i.visualViewport || [], eV(n) ? n : []) : r.concat(n, e(n, []))
    }, "getRelativePoint", () => eW, "getTabIndex", () => eT, "getTabbables", () => ex, "getWindow", () => x, "hasControllerElements", () => L, "indexOfId", () => e2, "isActiveElement", () => E, "isAnchorElement", () => w, "isApple", () => B, "isCaretAtStart", () => a, "isComposingEvent", () => G, "isContextMenuEvent", () => er, "isControlledByExpandedController", () => F, "isControlledElement", () => I, "isCtrlOrMetaKey", () => Y, "isDocument", () => g, "isDownloadingEvent", () => J, "isEditableElement", () => _, "isFocusable", () => eO, "isHTMLElement", () => v, "isIos", () => W, "isLeftClick", () => et, "isMac", () => U, "isModifierKey", () => en, "isOpeningInNewTab", () => Z, "isPrintableKey", () => Q, "isSafari", () => H, "isShadowRoot", () => b, "isTabbable", () => eP, "isTouchDevice", () => q, "isValidTabEvent", () => eM, "isVirtualClick", () => ee, "itemById", () => e1, "nextById", () => e3, "nextTick", () => eI, "observeAttributes", () => eR, "observeChildren", () => eD, "prevById", () => e6, "proxyTabFocus", () => eG, "query", () => eQ, "queryAll", () => eY, "raf", () => eC, "requestPointerLock", () => eB, "resizeObserverBorderBox", () => e8, "scrollIntoView", () => eq, "setAttribute", () => e5, "setCaretToEnd", () => c, "setElementChecked", () => ey, "setElementValue", () => eh, "setStyle", () => e4, "setStyleProperty", () => e7, "trackFormControl", () => em, "trackPointerMove", () => eZ, "trackPress", () => eJ, "visuallyHiddenStyle", () => te, "waitForElement", () => tt])
}, 30500, e => {
    "use strict";
    var t, r = e.i(409078),
        n = e.i(841158),
        o = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.map(e => {
                var t;
                return null == e || null == (t = e.trim) ? void 0 : t.call(e)
            }).filter(Boolean).join(" ")
        },
        i = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,
        l = e => {
            let t, r = {};
            for (; t = i.exec(e);) r[t[1]] = t[2];
            return r
        },
        u = (e, t) => {
            if ((0, r.isString)(e)) {
                if ((0, r.isString)(t)) return "".concat(e, ";").concat(t);
                e = l(e)
            } else(0, r.isString)(t) && (t = l(t));
            return Object.assign({}, null != e ? e : {}, null != t ? t : {})
        };

    function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = {};
        for (let e of t)
            if (e) {
                for (let t in i) {
                    if (t.startsWith("on") && "function" == typeof i[t] && "function" == typeof e[t]) {
                        i[t] = (0, r.callAll)(e[t], i[t]);
                        continue
                    }
                    if ("className" === t || "class" === t) {
                        i[t] = o(i[t], e[t]);
                        continue
                    }
                    if ("style" === t) {
                        i[t] = u(i[t], e[t]);
                        continue
                    }
                    i[t] = void 0 !== e[t] ? e[t] : i[t]
                }
                for (let t in e) void 0 === i[t] && (i[t] = e[t]);
                for (let t of Object.getOwnPropertySymbols(e)) i[t] = e[t]
            }
        return i
    }

    function c(e, t, n) {
        let o, i = [];
        return l => {
            var u;
            let a = e(l);
            return (a.length !== i.length || a.some((e, t) => !(0, r.isEqual)(i[t], e))) && (i = a, o = t(a, l), null == n || null == (u = n.onChange) || u.call(n, o)), o
        }
    }

    function s() {
        return {
            and: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function(e) {
                    return t.every(t => e.guard(t))
                }
            },
            or: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function(e) {
                    return t.some(t => e.guard(t))
                }
            },
            not: e => function(t) {
                return !t.guard(e)
            }
        }
    }

    function f(e) {
        return e
    }

    function d() {
        return {
            guards: s(),
            createMachine: e => e,
            choose: e => function(t) {
                var r;
                let {
                    choose: n
                } = t;
                return null == (r = n(e)) ? void 0 : r.actions
            }
        }
    }
    var p = ((t = p || {}).NotStarted = "Not Started", t.Started = "Started", t.Stopped = "Stopped", t);

    function h(e) {
        let t = () => {
                var t, r;
                return null != (r = null == (t = e.getRootNode) ? void 0 : t.call(e)) ? r : document
            },
            r = () => (0, n.getDocument)(t());
        return { ...e,
            getRootNode: t,
            getDoc: r,
            getWin: () => {
                var e;
                return null != (e = r().defaultView) ? e : window
            },
            getActiveElement: () => (0, n.getActiveElement)(t()),
            isActiveElement: n.isActiveElement,
            getById: e => t().getElementById(e)
        }
    }
    e.s(["INIT_STATE", () => "__init__", "MachineStatus", () => p, "createGuards", () => s, "createMachine", () => f, "createScope", () => h, "memo", () => c, "mergeProps", () => a, "setup", () => d])
}, 813753, 868275, 466679, 668886, 606581, 633008, e => {
    "use strict";

    function t(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e.i(556464), e.s(["_", () => t], 868275);
    var r, n, o = Symbol.for("immer-nothing"),
        i = Symbol.for("immer-draftable"),
        l = Symbol.for("immer-state");

    function u(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        throw Error("[Immer] minified error nr: ".concat(e, ". Full error at: https://bit.ly/3cXEKWf"))
    }
    var a = Object.getPrototypeOf;

    function c(e) {
        return !!e && !!e[l]
    }

    function s(e) {
        var t;
        return !!e && (p(e) || Array.isArray(e) || !!e[i] || !!(null == (t = e.constructor) ? void 0 : t[i]) || b(e) || w(e))
    }
    var f = Object.prototype.constructor.toString(),
        d = new WeakMap;

    function p(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        if (null === t || t === Object.prototype) return !0;
        let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        if (r === Object) return !0;
        if ("function" != typeof r) return !1;
        let n = d.get(r);
        return void 0 === n && (n = Function.toString.call(r), d.set(r, n)), n === f
    }

    function h(e) {
        return c(e) || u(15, e), e[l].base_
    }

    function y(e, t) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        0 === v(e) ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach(r => {
            t(r, e[r], e)
        }) : e.forEach((r, n) => t(n, r, e))
    }

    function v(e) {
        let t = e[l];
        return t ? t.type_ : Array.isArray(e) ? 1 : b(e) ? 2 : 3 * !!w(e)
    }

    function g(e, t) {
        return 2 === v(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
    }

    function m(e, t, r) {
        let n = v(e);
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
    }

    function b(e) {
        return e instanceof Map
    }

    function w(e) {
        return e instanceof Set
    }

    function E(e) {
        return e.copy_ || e.base_
    }

    function A(e, t) {
        if (b(e)) return new Map(e);
        if (w(e)) return new Set(e);
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        let r = p(e);
        if (!0 !== t && ("class_only" !== t || r)) {
            let t = a(e);
            return null !== t && r ? { ...e
            } : Object.assign(Object.create(t), e)
        } {
            let t = Object.getOwnPropertyDescriptors(e);
            delete t[l];
            let r = Reflect.ownKeys(t);
            for (let n = 0; n < r.length; n++) {
                let o = r[n],
                    i = t[o];
                !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: i.enumerable,
                    value: e[o]
                })
            }
            return Object.create(a(e), t)
        }
    }

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return O(e) || c(e) || !s(e) || (v(e) > 1 && Object.defineProperties(e, {
            set: S,
            add: S,
            clear: S,
            delete: S
        }), Object.freeze(e), t && Object.values(e).forEach(e => _(e, !0))), e
    }
    var S = {
        value: function() {
            u(2)
        }
    };

    function O(e) {
        return null === e || "object" != typeof e || Object.isFrozen(e)
    }
    var x = {};

    function P(e) {
        let t = x[e];
        return t || u(0, e), t
    }

    function j(e, t) {
        t && (P("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
    }

    function T(e) {
        k(e), e.drafts_.forEach(N), e.drafts_ = null
    }

    function k(e) {
        e === n && (n = e.parent_)
    }

    function M(e) {
        return n = {
            drafts_: [],
            parent_: n,
            immer_: e,
            canAutoFreeze_: !0,
            unfinalizedDrafts_: 0
        }
    }

    function N(e) {
        let t = e[l];
        0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
    }

    function C(e, t) {
        t.unfinalizedDrafts_ = t.drafts_.length;
        let r = t.drafts_[0];
        return void 0 !== e && e !== r ? (r[l].modified_ && (T(t), u(4)), s(e) && (e = I(t, e), t.parent_ || D(t, e)), t.patches_ && P("Patches").generateReplacementPatches_(r[l].base_, e, t.patches_, t.inversePatches_)) : e = I(t, r, []), T(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== o ? e : void 0
    }

    function I(e, t, r) {
        if (O(t)) return t;
        let n = e.immer_.shouldUseStrictIteration(),
            o = t[l];
        if (!o) return y(t, (n, i) => R(e, o, t, n, i, r), n), t;
        if (o.scope_ !== e) return t;
        if (!o.modified_) return D(e, o.base_, !0), o.base_;
        if (!o.finalized_) {
            o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
            let t = o.copy_,
                i = t,
                l = !1;
            3 === o.type_ && (i = new Set(t), t.clear(), l = !0), y(i, (n, i) => R(e, o, t, n, i, r, l), n), D(e, t, !1), r && e.patches_ && P("Patches").generatePatches_(o, r, e.patches_, e.inversePatches_)
        }
        return o.copy_
    }

    function R(e, t, r, n, o, i, l) {
        if (null == o || "object" != typeof o && !l) return;
        let u = O(o);
        if (!u || l) {
            if (c(o)) {
                let l = I(e, o, i && t && 3 !== t.type_ && !g(t.assigned_, n) ? i.concat(n) : void 0);
                if (m(r, n, l), !c(l)) return;
                e.canAutoFreeze_ = !1
            } else l && r.add(o);
            if (s(o) && !u) {
                if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === o && u) return;
                I(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof n && (b(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && D(e, o)
            }
        }
    }

    function D(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && _(t, r)
    }
    var L = {
            get(e, t) {
                if (t === l) return e;
                let r = E(e);
                if (!g(r, t)) {
                    var n, o;
                    let i;
                    return n = e, (i = K(r, t)) ? "value" in i ? i.value : null == (o = i.get) ? void 0 : o.call(n.draft_) : void 0
                }
                let i = r[t];
                return e.finalized_ || !s(i) ? i : i === z(e.base_, t) ? (q(e), e.copy_[t] = W(i, e)) : i
            },
            has: (e, t) => t in E(e),
            ownKeys: e => Reflect.ownKeys(E(e)),
            set(e, t, r) {
                let n = K(E(e), t);
                if (null == n ? void 0 : n.set) return n.set.call(e.draft_, r), !0;
                if (!e.modified_) {
                    let n = z(E(e), t),
                        o = null == n ? void 0 : n[l];
                    if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                    if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || g(e.base_, t))) return !0;
                    q(e), V(e)
                }
                return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0)
            },
            deleteProperty: (e, t) => (void 0 !== z(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, q(e), V(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
            getOwnPropertyDescriptor(e, t) {
                let r = E(e),
                    n = Reflect.getOwnPropertyDescriptor(r, t);
                return n ? {
                    writable: !0,
                    configurable: 1 !== e.type_ || "length" !== t,
                    enumerable: n.enumerable,
                    value: r[t]
                } : n
            },
            defineProperty() {
                u(11)
            },
            getPrototypeOf: e => a(e.base_),
            setPrototypeOf() {
                u(12)
            }
        },
        F = {};

    function z(e, t) {
        let r = e[l];
        return (r ? E(r) : e)[t]
    }

    function K(e, t) {
        if (!(t in e)) return;
        let r = a(e);
        for (; r;) {
            let e = Object.getOwnPropertyDescriptor(r, t);
            if (e) return e;
            r = a(r)
        }
    }

    function V(e) {
        !e.modified_ && (e.modified_ = !0, e.parent_ && V(e.parent_))
    }

    function q(e) {
        e.copy_ || (e.copy_ = A(e.base_, e.scope_.immer_.useStrictShallowCopy_))
    }

    function W(e, t) {
        let r = b(e) ? P("MapSet").proxyMap_(e, t) : w(e) ? P("MapSet").proxySet_(e, t) : function(e, t) {
            let r = Array.isArray(e),
                o = {
                    type_: +!!r,
                    scope_: t ? t.scope_ : n,
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1
                },
                i = o,
                l = L;
            r && (i = [o], l = F);
            let {
                revoke: u,
                proxy: a
            } = Proxy.revocable(i, l);
            return o.draft_ = a, o.revoke_ = u, a
        }(e, t);
        return (t ? t.scope_ : n).drafts_.push(r), r
    }

    function B(e) {
        return c(e) || u(10, e),
            function e(t) {
                let r;
                if (!s(t) || O(t)) return t;
                let n = t[l],
                    o = !0;
                if (n) {
                    if (!n.modified_) return n.base_;
                    n.finalized_ = !0, r = A(t, n.scope_.immer_.useStrictShallowCopy_), o = n.scope_.immer_.shouldUseStrictIteration()
                } else r = A(t, !0);
                return y(r, (t, n) => {
                    m(r, t, e(n))
                }, o), n && (n.finalized_ = !1), r
            }(e)
    }
    y(L, (e, t) => {
        F[e] = function() {
            return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
    }), F.deleteProperty = function(e, t) {
        return F.set.call(this, e, t, void 0)
    }, F.set = function(e, t, r) {
        return L.set.call(this, e[0], t, r, e[0])
    };
    var U = new class {
            createDraft(e) {
                s(e) || u(8), c(e) && (e = B(e));
                let t = M(this),
                    r = W(e, void 0);
                return r[l].isManual_ = !0, k(t), r
            }
            finishDraft(e, t) {
                let r = e && e[l];
                r && r.isManual_ || u(9);
                let {
                    scope_: n
                } = r;
                return j(n, t), C(void 0, n)
            }
            setAutoFreeze(e) {
                this.autoFreeze_ = e
            }
            setUseStrictShallowCopy(e) {
                this.useStrictShallowCopy_ = e
            }
            setUseStrictIteration(e) {
                this.useStrictIteration_ = e
            }
            shouldUseStrictIteration() {
                return this.useStrictIteration_
            }
            applyPatches(e, t) {
                let r;
                for (r = t.length - 1; r >= 0; r--) {
                    let n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                let n = P("Patches").applyPatches_;
                return c(e) ? n(e, t) : this.produce(e, e => n(e, t))
            }
            constructor(e) {
                this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (e, t, r) => {
                    let n;
                    if ("function" == typeof e && "function" != typeof t) {
                        let r = t;
                        t = e;
                        let n = this;
                        return function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                            for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) i[l - 1] = arguments[l];
                            return n.produce(e, e => t.call(this, e, ...i))
                        }
                    }
                    if ("function" != typeof t && u(6), void 0 !== r && "function" != typeof r && u(7), s(e)) {
                        let o = M(this),
                            i = W(e, void 0),
                            l = !0;
                        try {
                            n = t(i), l = !1
                        } finally {
                            l ? T(o) : k(o)
                        }
                        return j(o, r), C(n, o)
                    }
                    if (e && "object" == typeof e) u(1, e);
                    else {
                        if (void 0 === (n = t(e)) && (n = e), n === o && (n = void 0), this.autoFreeze_ && _(n, !0), r) {
                            let t = [],
                                o = [];
                            P("Patches").generateReplacementPatches_(e, n, t, o), r(t, o)
                        }
                        return n
                    }
                }, this.produceWithPatches = (e, t) => {
                    let r, n;
                    if ("function" == typeof e) {
                        var o = this;
                        return function(t) {
                            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                            return o.produceWithPatches(t, t => e(t, ...n))
                        }
                    }
                    return [this.produce(e, t, (e, t) => {
                        r = e, n = t
                    }), r, n]
                }, "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof(null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), "boolean" == typeof(null == e ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration)
            }
        },
        H = U.produce,
        X = U.setUseStrictIteration.bind(U);

    function $(e) {
        return e
    }
    e.s(["castDraft", () => $, "current", () => B, "freeze", () => _, "isDraft", () => c, "isDraftable", () => s, "original", () => h, "produce", () => H, "setUseStrictIteration", () => X], 466679);
    var Z = Symbol("NOT_FOUND"),
        J = e => Array.isArray(e) ? e : [e],
        G = 0,
        Y = class {
            get value() {
                return this._value
            }
            set value(e) {
                this.value !== e && (this._value = e, this.revision = ++G)
            }
            constructor(e, r = Q) {
                t(this, "revision", G), t(this, "_value", void 0), t(this, "_lastValue", void 0), t(this, "_isEqual", Q), this._value = this._lastValue = e, this._isEqual = r
            }
        };

    function Q(e, t) {
        return e === t
    }

    function ee(e) {
        return e instanceof Y || console.warn("Not a valid cell! ", e), e.value
    }
    var et = (e, t) => !1;

    function er() {
        return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q;
            return new Y(e, t)
        }(null, et)
    }
    var en = e => {
        let t = e.collectionTag;
        null === t && (t = e.collectionTag = er()), ee(t)
    };
    Symbol();
    var eo = 0,
        ei = Object.getPrototypeOf({}),
        el = class {
            constructor(e) {
                t(this, "proxy", new Proxy(this, eu)), t(this, "tag", er()), t(this, "tags", {}), t(this, "children", {}), t(this, "collectionTag", null), t(this, "id", eo++), this.value = e, this.value = e, this.tag.value = e
            }
        },
        eu = {
            get: (e, t) => (function() {
                let {
                    value: r
                } = e, n = Reflect.get(r, t);
                if ("symbol" == typeof t || t in ei) return n;
                if ("object" == typeof n && null !== n) {
                    var o;
                    let r = e.children[t];
                    return void 0 === r && (r = e.children[t] = Array.isArray(o = n) ? new ea(o) : new el(o)), r.tag && ee(r.tag), r.proxy
                } {
                    let r = e.tags[t];
                    return void 0 === r && ((r = e.tags[t] = er()).value = n), ee(r), n
                }
            })(),
            ownKeys: e => (en(e), Reflect.ownKeys(e.value)),
            getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
            has: (e, t) => Reflect.has(e.value, t)
        },
        ea = class {
            constructor(e) {
                t(this, "proxy", new Proxy([this], ec)), t(this, "tag", er()), t(this, "tags", {}), t(this, "children", {}), t(this, "collectionTag", null), t(this, "id", eo++), this.value = e, this.value = e, this.tag.value = e
            }
        },
        ec = {
            get(e, t) {
                let [r] = e;
                return "length" === t && en(r), eu.get(r, t)
            },
            ownKeys(e) {
                let [t] = e;
                return eu.ownKeys(t)
            },
            getOwnPropertyDescriptor(e, t) {
                let [r] = e;
                return eu.getOwnPropertyDescriptor(r, t)
            },
            has(e, t) {
                let [r] = e;
                return eu.has(r, t)
            }
        },
        es = (e, t) => e === t;

    function ef(e, t) {
        let r, {
                equalityCheck: n = es,
                maxSize: o = 1,
                resultEqualityCheck: i
            } = "object" == typeof t ? t : {
                equalityCheck: t
            },
            l = function(e, t) {
                if (null === e || null === t || e.length !== t.length) return !1;
                let {
                    length: r
                } = e;
                for (let o = 0; o < r; o++)
                    if (!n(e[o], t[o])) return !1;
                return !0
            },
            u = 0,
            a = o <= 1 ? {
                get: e => r && l(r.key, e) ? r.value : Z,
                put(e, t) {
                    r = {
                        key: e,
                        value: t
                    }
                },
                getEntries: () => r ? [r] : [],
                clear() {
                    r = void 0
                }
            } : function(e, t) {
                let r = [];

                function n(e) {
                    let n = r.findIndex(r => t(e, r.key));
                    if (n > -1) {
                        let e = r[n];
                        return n > 0 && (r.splice(n, 1), r.unshift(e)), e.value
                    }
                    return Z
                }
                return {
                    get: n,
                    put: function(t, o) {
                        n(t) === Z && (r.unshift({
                            key: t,
                            value: o
                        }), r.length > e && r.pop())
                    },
                    getEntries: function() {
                        return r
                    },
                    clear: function() {
                        r = []
                    }
                }
            }(o, l);

        function c() {
            let t = a.get(arguments);
            if (t === Z) {
                if (t = e.apply(null, arguments), u++, i) {
                    let e = a.getEntries().find(e => i(e.value, t));
                    e && (t = e.value, 0 !== u && u--)
                }
                a.put(arguments, t)
            }
            return t
        }
        return c.clearCache = () => {
            a.clear(), c.resetResultsCount()
        }, c.resultsCount = () => u, c.resetResultsCount = () => {
            u = 0
        }, c
    }
    var ed = "undefined" != typeof WeakRef ? WeakRef : class {
        deref() {
            return this.value
        }
        constructor(e) {
            this.value = e
        }
    };

    function ep() {
        return {
            s: 0,
            v: void 0,
            o: null,
            p: null
        }
    }

    function eh(e) {
        let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = ep(),
            {
                resultEqualityCheck: o
            } = r,
            i = 0;

        function l() {
            let r, l = n,
                {
                    length: u
                } = arguments;
            for (let e = 0; e < u; e++) {
                let t = arguments[e];
                if ("function" == typeof t || "object" == typeof t && null !== t) {
                    let e = l.o;
                    null === e && (l.o = e = new WeakMap);
                    let r = e.get(t);
                    void 0 === r ? (l = ep(), e.set(t, l)) : l = r
                } else {
                    let e = l.p;
                    null === e && (l.p = e = new Map);
                    let r = e.get(t);
                    void 0 === r ? (l = ep(), e.set(t, l)) : l = r
                }
            }
            let a = l;
            if (1 === l.s) r = l.v;
            else if (r = e.apply(null, arguments), i++, o) {
                var c, s;
                let e = null != (s = null == t || null == (c = t.deref) ? void 0 : c.call(t)) ? s : t;
                null != e && o(e, r) && (r = e, 0 !== i && i--), t = "object" == typeof r && null !== r || "function" == typeof r ? new ed(r) : r
            }
            return a.s = 1, a.v = r, r
        }
        return l.clearCache = () => {
            n = ep(), l.resetResultsCount()
        }, l.resultsCount = () => i, l.resetResultsCount = () => {
            i = 0
        }, l
    }

    function ey(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        let o = "function" == typeof e ? {
                memoize: e,
                memoizeOptions: r
            } : e,
            i = function() {
                let e, t;
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                let l = 0,
                    u = 0,
                    a = {},
                    c = n.pop();
                "object" == typeof c && (a = c, c = n.pop()),
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "expected a function, instead received ".concat(typeof e);
                        if ("function" != typeof e) throw TypeError(t)
                    }(c, "createSelector expects an output function after the inputs, but received: [".concat(typeof c, "]"));
                let {
                    memoize: s,
                    memoizeOptions: f = [],
                    argsMemoize: d = eh,
                    argsMemoizeOptions: p = [],
                    devModeChecks: h = {}
                } = { ...o,
                    ...a
                }, y = J(f), v = J(p), g = (! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "expected all items to be functions, instead received the following types: ";
                    if (!e.every(e => "function" == typeof e)) {
                        let r = e.map(e => "function" == typeof e ? "function ".concat(e.name || "unnamed", "()") : typeof e).join(", ");
                        throw TypeError("".concat(t, "[").concat(r, "]"))
                    }
                }(t = Array.isArray(n[0]) ? n[0] : n, "createSelector expects all input-selectors to be functions, but received the following types: "), t), m = s(function() {
                    return l++, c.apply(null, arguments)
                }, ...y);
                return Object.assign(d(function() {
                    u++;
                    let t = function(e, t) {
                        let r = [],
                            {
                                length: n
                            } = e;
                        for (let o = 0; o < n; o++) r.push(e[o].apply(null, t));
                        return r
                    }(g, arguments);
                    return e = m.apply(null, t)
                }, ...v), {
                    resultFunc: c,
                    memoizedResultFunc: m,
                    dependencies: g,
                    dependencyRecomputations: () => u,
                    resetDependencyRecomputations: () => {
                        u = 0
                    },
                    lastResult: () => e,
                    recomputations: () => l,
                    resetRecomputations: () => {
                        l = 0
                    },
                    memoize: s,
                    argsMemoize: d
                })
            };
        return Object.assign(i, {
            withTypes: () => i
        }), i
    }
    var ev = ey(eh),
        eg = Object.assign(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev;
            ! function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "expected an object, instead received ".concat(typeof e);
                if ("object" != typeof e) throw TypeError(t)
            }(e, "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));
            let r = Object.keys(e);
            return t(r.map(t => e[t]), function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.reduce((e, t, n) => (e[r[n]] = t, e), {})
            })
        }, {
            withTypes: () => eg
        });

    function em(e) {
        return "Minified Redux error #".concat(e, "; visit https://redux.js.org/Errors?code=").concat(e, " for the full message or use the non-minified dev environment for full errors. ")
    }
    e.s(["createSelector", () => ev, "createSelectorCreator", () => ey, "lruMemoize", () => ef, "weakMapMemoize", () => eh], 668886);
    var eb = "function" == typeof Symbol && Symbol.observable || "@@observable",
        ew = () => Math.random().toString(36).substring(7).split("").join("."),
        eE = {
            INIT: "@@redux/INIT".concat(ew()),
            REPLACE: "@@redux/REPLACE".concat(ew()),
            PROBE_UNKNOWN_ACTION: () => "@@redux/PROBE_UNKNOWN_ACTION".concat(ew())
        };

    function eA(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = e;
        for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
    }

    function e_(e, t, r) {
        if ("function" != typeof e) throw Error(em(2));
        if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw Error(em(0));
        if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
            if ("function" != typeof r) throw Error(em(1));
            return r(e_)(e, t)
        }
        let n = e,
            o = t,
            i = new Map,
            l = i,
            u = 0,
            a = !1;

        function c() {
            l === i && (l = new Map, i.forEach((e, t) => {
                l.set(t, e)
            }))
        }

        function s() {
            if (a) throw Error(em(3));
            return o
        }

        function f(e) {
            if ("function" != typeof e) throw Error(em(4));
            if (a) throw Error(em(5));
            let t = !0;
            c();
            let r = u++;
            return l.set(r, e),
                function() {
                    if (t) {
                        if (a) throw Error(em(6));
                        t = !1, c(), l.delete(r), i = null
                    }
                }
        }

        function d(e) {
            if (!eA(e)) throw Error(em(7));
            if (void 0 === e.type) throw Error(em(8));
            if ("string" != typeof e.type) throw Error(em(17));
            if (a) throw Error(em(9));
            try {
                a = !0, o = n(o, e)
            } finally {
                a = !1
            }
            return (i = l).forEach(e => {
                e()
            }), e
        }
        return d({
            type: eE.INIT
        }), {
            dispatch: d,
            subscribe: f,
            getState: s,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw Error(em(10));
                n = e, d({
                    type: eE.REPLACE
                })
            },
            [eb]: function() {
                return {
                    subscribe(e) {
                        if ("object" != typeof e || null === e) throw Error(em(11));

                        function t() {
                            e.next && e.next(s())
                        }
                        return t(), {
                            unsubscribe: f(t)
                        }
                    },
                    [eb]() {
                        return this
                    }
                }
            }
        }
    }

    function eS(e) {
        let t, r = Object.keys(e),
            n = {};
        for (let t = 0; t < r.length; t++) {
            let o = r[t];
            "function" == typeof e[o] && (n[o] = e[o])
        }
        let o = Object.keys(n);
        try {
            Object.keys(n).forEach(e => {
                let t = n[e];
                if (void 0 === t(void 0, {
                        type: eE.INIT
                    })) throw Error(em(12));
                if (void 0 === t(void 0, {
                        type: eE.PROBE_UNKNOWN_ACTION()
                    })) throw Error(em(13))
            })
        } catch (e) {
            t = e
        }
        return function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0;
            if (t) throw t;
            let i = !1,
                l = {};
            for (let t = 0; t < o.length; t++) {
                let u = o[t],
                    a = n[u],
                    c = e[u],
                    s = a(c, r);
                if (void 0 === s) throw r && r.type, Error(em(14));
                l[u] = s, i = i || s !== c
            }
            return (i = i || o.length !== Object.keys(e).length) ? l : e
        }
    }

    function eO() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? e => e : 1 === t.length ? t[0] : t.reduce((e, t) => function() {
            for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return e(t(...n))
        })
    }

    function ex() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return e => (r, n) => {
            let o = e(r, n),
                i = () => {
                    throw Error(em(15))
                },
                l = {
                    getState: o.getState,
                    dispatch: function(e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        return i(e, ...r)
                    }
                };
            return i = eO(...t.map(e => e(l)))(o.dispatch), { ...o,
                dispatch: i
            }
        }
    }

    function eP(e) {
        return eA(e) && "type" in e && "string" == typeof e.type
    }

    function ej(e) {
        return t => {
            let {
                dispatch: r,
                getState: n
            } = t;
            return t => o => "function" == typeof o ? o(r, n, e) : t(o)
        }
    }
    e.s(["applyMiddleware", () => ex, "combineReducers", () => eS, "compose", () => eO, "createStore", () => e_, "isAction", () => eP, "isPlainObject", () => eA], 606581);
    var eT = ej(),
        ek = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (0 != arguments.length) return "object" == typeof arguments[0] ? eO : eO.apply(null, arguments)
        };

    function eM(e, t) {
        function r() {
            for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            if (t) {
                let r = t(...n);
                if (!r) throw Error(tp(0));
                return {
                    type: e,
                    payload: r.payload,
                    ..."meta" in r && {
                        meta: r.meta
                    },
                    ..."error" in r && {
                        error: r.error
                    }
                }
            }
            return {
                type: e,
                payload: n[0]
            }
        }
        return r.toString = () => "".concat(e), r.type = e, r.match = t => eP(t) && t.type === e, r
    }
    "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
    var eN = class e extends Array {
        static get[Symbol.species]() {
            return e
        }
        concat() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return super.concat.apply(this, t)
        }
        prepend() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return 1 === r.length && Array.isArray(r[0]) ? new e(...r[0].concat(this)) : new e(...r.concat(this))
        }
        constructor(...t) {
            super(...t), Object.setPrototypeOf(this, e.prototype)
        }
    };

    function eC(e) {
        return s(e) ? H(e, () => {}) : e
    }

    function eI(e, t, r) {
        return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t)
    }
    var eR = "RTK_autoBatch",
        eD = () => e => ({
            payload: e,
            meta: {
                [eR]: !0
            }
        }),
        eL = e => t => {
            setTimeout(t, e)
        },
        eF = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                type: "raf"
            };
            return t => function() {
                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                let i = t(...n),
                    l = !0,
                    u = !1,
                    a = !1,
                    c = new Set,
                    s = "tick" === e.type ? queueMicrotask : "raf" === e.type ? "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : eL(10) : "callback" === e.type ? e.queueNotification : eL(e.timeout),
                    f = () => {
                        a = !1, u && (u = !1, c.forEach(e => e()))
                    };
                return Object.assign({}, i, {
                    subscribe(e) {
                        let t = i.subscribe(() => l && e());
                        return c.add(e), () => {
                            t(), c.delete(e)
                        }
                    },
                    dispatch(e) {
                        try {
                            var t;
                            return (u = !(l = !(null == e || null == (t = e.meta) ? void 0 : t[eR]))) && !a && (a = !0, s(f)), i.dispatch(e)
                        } finally {
                            l = !0
                        }
                    }
                })
            }
        };

    function ez(e) {
        let t, r, n, o = function(e) {
                let {
                    thunk: t = !0,
                    immutableCheck: r = !0,
                    serializableCheck: n = !0,
                    actionCreatorCheck: o = !0
                } = null != e ? e : {}, i = new eN;
                return t && ("boolean" == typeof t ? i.push(eT) : i.push(ej(t.extraArgument))), i
            },
            {
                reducer: i,
                middleware: l,
                devTools: u = !0,
                duplicateMiddlewareCheck: a = !0,
                preloadedState: c,
                enhancers: s
            } = e || {};
        if ("function" == typeof i) t = i;
        else if (eA(i)) t = eS(i);
        else throw Error(tp(1));
        r = "function" == typeof l ? l(o) : o();
        let f = eO;
        u && (f = ek({
            trace: !1,
            ..."object" == typeof u && u
        }));
        let d = (n = ex(...r), function(e) {
            let {
                autoBatch: t = !0
            } = null != e ? e : {}, r = new eN(n);
            return t && r.push(eF("object" == typeof t ? t : void 0)), r
        });
        return e_(t, c, f(..."function" == typeof s ? s(d) : d()))
    }

    function eK(e) {
        let t, r = {},
            n = [],
            o = {
                addCase(e, t) {
                    let n = "string" == typeof e ? e : e.type;
                    if (!n) throw Error(tp(28));
                    if (n in r) throw Error(tp(29));
                    return r[n] = t, o
                },
                addAsyncThunk: (e, t) => (t.pending && (r[e.pending.type] = t.pending), t.rejected && (r[e.rejected.type] = t.rejected), t.fulfilled && (r[e.fulfilled.type] = t.fulfilled), t.settled && n.push({
                    matcher: e.settled,
                    reducer: t.settled
                }), o),
                addMatcher: (e, t) => (n.push({
                    matcher: e,
                    reducer: t
                }), o),
                addDefaultCase: e => (t = e, o)
            };
        return e(o), [r, n, t]
    }
    X(!1);
    var eV = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
                t = "",
                r = e;
            for (; r--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
            return t
        },
        eq = Symbol.for("rtk-slice-createasyncthunk"),
        eW = ((r = eW || {}).reducer = "reducer", r.reducerWithPrepare = "reducerWithPrepare", r.asyncThunk = "asyncThunk", r),
        eB = function() {
            var e;
            let {
                creators: t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = null == t || null == (e = t.asyncThunk) ? void 0 : e[eq];
            return function(e) {
                let t, {
                    name: n,
                    reducerPath: o = n
                } = e;
                if (!n) throw Error(tp(11));
                let i = ("function" == typeof e.reducers ? e.reducers(function() {
                        function e(e, t) {
                            return {
                                _reducerDefinitionType: "asyncThunk",
                                payloadCreator: e,
                                ...t
                            }
                        }
                        return e.withTypes = () => e, {
                            reducer: e => Object.assign({
                                [e.name]() {
                                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                    return e(...r)
                                }
                            }[e.name], {
                                _reducerDefinitionType: "reducer"
                            }),
                            preparedReducer: (e, t) => ({
                                _reducerDefinitionType: "reducerWithPrepare",
                                prepare: e,
                                reducer: t
                            }),
                            asyncThunk: e
                        }
                    }()) : e.reducers) || {},
                    l = Object.keys(i),
                    u = {},
                    a = {},
                    f = {},
                    d = [],
                    p = {
                        addCase(e, t) {
                            let r = "string" == typeof e ? e : e.type;
                            if (!r) throw Error(tp(12));
                            if (r in a) throw Error(tp(13));
                            return a[r] = t, p
                        },
                        addMatcher: (e, t) => (d.push({
                            matcher: e,
                            reducer: t
                        }), p),
                        exposeAction: (e, t) => (f[e] = t, p),
                        exposeCaseReducer: (e, t) => (u[e] = t, p)
                    };

                function h() {
                    let [t = {}, r = [], n] = "function" == typeof e.extraReducers ? eK(e.extraReducers) : [e.extraReducers], o = { ...t,
                        ...a
                    };
                    return function(e, t) {
                        let r, [n, o, i] = eK(t);
                        if ("function" == typeof e) r = () => eC(e());
                        else {
                            let t = eC(e);
                            r = () => t
                        }

                        function l() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                l = [n[t.type], ...o.filter(e => {
                                    let {
                                        matcher: r
                                    } = e;
                                    return r(t)
                                }).map(e => {
                                    let {
                                        reducer: t
                                    } = e;
                                    return t
                                })];
                            return 0 === l.filter(e => !!e).length && (l = [i]), l.reduce((e, r) => {
                                if (r)
                                    if (c(e)) {
                                        let n = r(e, t);
                                        return void 0 === n ? e : n
                                    } else {
                                        if (s(e)) return H(e, e => r(e, t));
                                        let n = r(e, t);
                                        if (void 0 === n) {
                                            if (null === e) return e;
                                            throw Error("A case reducer on a non-draftable value must not return undefined")
                                        }
                                        return n
                                    }
                                return e
                            }, e)
                        }
                        return l.getInitialState = r, l
                    }(e.initialState, e => {
                        for (let t in o) e.addCase(t, o[t]);
                        for (let t of d) e.addMatcher(t.matcher, t.reducer);
                        for (let t of r) e.addMatcher(t.matcher, t.reducer);
                        n && e.addDefaultCase(n)
                    })
                }
                l.forEach(t => {
                    let o = i[t],
                        l = {
                            reducerName: t,
                            type: "".concat(n, "/").concat(t),
                            createNotation: "function" == typeof e.reducers
                        };
                    "asyncThunk" === o._reducerDefinitionType ? function(e, t, r, n) {
                        let {
                            type: o,
                            reducerName: i
                        } = e;
                        if (!n) throw Error(tp(18));
                        let {
                            payloadCreator: l,
                            fulfilled: u,
                            pending: a,
                            rejected: c,
                            settled: s,
                            options: f
                        } = t, d = n(o, l, f);
                        r.exposeAction(i, d), u && r.addCase(d.fulfilled, u), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), s && r.addMatcher(d.settled, s), r.exposeCaseReducer(i, {
                            fulfilled: u || eU,
                            pending: a || eU,
                            rejected: c || eU,
                            settled: s || eU
                        })
                    }(l, o, p, r) : function(e, t, r) {
                        let n, o, {
                            type: i,
                            reducerName: l,
                            createNotation: u
                        } = e;
                        if ("reducer" in t) {
                            if (u && "reducerWithPrepare" !== t._reducerDefinitionType) throw Error(tp(17));
                            n = t.reducer, o = t.prepare
                        } else n = t;
                        r.addCase(i, n).exposeCaseReducer(l, n).exposeAction(l, o ? eM(i, o) : eM(i))
                    }(l, o, p)
                });
                let y = e => e,
                    v = new Map,
                    g = new WeakMap;

                function m(e, r) {
                    return t || (t = h()), t(e, r)
                }

                function b() {
                    return t || (t = h()), t.getInitialState()
                }

                function w(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

                    function n(e) {
                        let o = e[t];
                        return void 0 === o && r && (o = eI(g, n, b)), o
                    }

                    function o() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                            n = eI(v, r, () => new WeakMap);
                        return eI(n, t, () => {
                            var n;
                            let o = {};
                            for (let [i, l] of Object.entries(null != (n = e.selectors) ? n : {})) o[i] = function(e, t, r, n) {
                                function o(o) {
                                    for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) l[u - 1] = arguments[u];
                                    let a = t(o);
                                    return void 0 === a && n && (a = r()), e(a, ...l)
                                }
                                return o.unwrapped = e, o
                            }(l, t, () => eI(g, t, b), r);
                            return o
                        })
                    }
                    return {
                        reducerPath: t,
                        getSelectors: o,
                        get selectors() {
                            return o(n)
                        },
                        selectSlice: n
                    }
                }
                let E = {
                    name: n,
                    reducer: m,
                    actions: f,
                    caseReducers: u,
                    getInitialState: b,
                    ...w(o),
                    injectInto(e) {
                        let {
                            reducerPath: t,
                            ...r
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : o;
                        return e.inject({
                            reducerPath: n,
                            reducer: m
                        }, r), { ...E,
                            ...w(n, !0)
                        }
                    }
                };
                return E
            }
        }();

    function eU() {}
    var eH = "listener",
        eX = "completed",
        e$ = "cancelled",
        eZ = "task-".concat(e$),
        eJ = "task-".concat(eX),
        eG = "".concat(eH, "-").concat(e$),
        eY = "".concat(eH, "-").concat(eX),
        eQ = class {
            constructor(e) {
                t(this, "name", "TaskAbortError"), t(this, "message", void 0), this.code = e, this.message = "".concat("task", " ").concat(e$, " (reason: ").concat(e, ")")
            }
        },
        e0 = (e, t) => {
            if ("function" != typeof e) throw TypeError(tp(32))
        },
        e1 = () => {},
        e2 = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1;
            return e.catch(t), e
        },
        e3 = (e, t) => (e.addEventListener("abort", t, {
            once: !0
        }), () => e.removeEventListener("abort", t)),
        e6 = (e, t) => {
            let r = e.signal;
            r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
                enumerable: !0,
                value: t,
                configurable: !0,
                writable: !0
            }), e.abort(t))
        },
        e8 = e => {
            if (e.aborted) {
                let {
                    reason: t
                } = e;
                throw new eQ(t)
            }
        };

    function e5(e, t) {
        let r = e1;
        return new Promise((n, o) => {
            let i = () => o(new eQ(e.reason));
            e.aborted ? i() : (r = e3(e, i), t.finally(() => r()).then(n, o))
        }).finally(() => {
            r = e1
        })
    }
    var e4 = async (e, t) => {
            try {
                await Promise.resolve();
                let t = await e();
                return {
                    status: "ok",
                    value: t
                }
            } catch (e) {
                return {
                    status: e instanceof eQ ? "cancelled" : "rejected",
                    error: e
                }
            } finally {
                null == t || t()
            }
        },
        e7 = e => t => e2(e5(e, t).then(t => (e8(e), t))),
        e9 = e => {
            let t = e7(e);
            return e => t(new Promise(t => setTimeout(t, e)))
        },
        {
            assign: te
        } = Object,
        tt = {},
        tr = "listenerMiddleware",
        tn = e => {
            let {
                type: t,
                actionCreator: r,
                matcher: n,
                predicate: o,
                effect: i
            } = e;
            if (t) o = eM(t).match;
            else if (r) t = r.type, o = r.match;
            else if (n) o = n;
            else if (o);
            else throw Error(tp(21));
            return e0(i, "options.listener"), {
                predicate: o,
                type: t,
                effect: i
            }
        },
        to = te(e => {
            let {
                type: t,
                predicate: r,
                effect: n
            } = tn(e);
            return {
                id: eV(),
                effect: n,
                type: t,
                predicate: r,
                pending: new Set,
                unsubscribe: () => {
                    throw Error(tp(22))
                }
            }
        }, {
            withTypes: () => to
        }),
        ti = (e, t) => {
            let {
                type: r,
                effect: n,
                predicate: o
            } = tn(t);
            return Array.from(e.values()).find(e => ("string" == typeof r ? e.type === r : e.predicate === o) && e.effect === n)
        },
        tl = e => {
            e.pending.forEach(e => {
                e6(e, eG)
            })
        },
        tu = (e, t, r) => {
            try {
                e(t, r)
            } catch (e) {
                setTimeout(() => {
                    throw e
                }, 0)
            }
        },
        ta = te(eM("".concat(tr, "/add")), {
            withTypes: () => ta
        }),
        tc = eM("".concat(tr, "/removeAll")),
        ts = te(eM("".concat(tr, "/remove")), {
            withTypes: () => ts
        }),
        tf = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            console.error("".concat(tr, "/error"), ...t)
        },
        td = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = new Map,
                r = new Map,
                {
                    extra: n,
                    onError: o = tf
                } = e;
            e0(o, "onError");
            let i = e => {
                var r, n;
                return (n = null != (r = ti(t, e)) ? r : to(e)).unsubscribe = () => t.delete(n.id), t.set(n.id, n), e => {
                    n.unsubscribe(), (null == e ? void 0 : e.cancelActive) && tl(n)
                }
            };
            te(i, {
                withTypes: () => i
            });
            let l = e => {
                let r = ti(t, e);
                return r && (r.unsubscribe(), e.cancelActive && tl(r)), !!r
            };
            te(l, {
                withTypes: () => l
            });
            let u = async (e, l, u, a) => {
                    var c, s, f, d;
                    let p, h = new AbortController,
                        y = (c = h.signal, p = async (e, t) => {
                            e8(c);
                            let r = () => {},
                                n = [new Promise((t, n) => {
                                    let o = i({
                                        predicate: e,
                                        effect: (e, r) => {
                                            r.unsubscribe(), t([e, r.getState(), r.getOriginalState()])
                                        }
                                    });
                                    r = () => {
                                        o(), n()
                                    }
                                })];
                            null != t && n.push(new Promise(e => setTimeout(e, t, null)));
                            try {
                                let e = await e5(c, Promise.race(n));
                                return e8(c), e
                            } finally {
                                r()
                            }
                        }, (e, t) => e2(p(e, t))),
                        v = [];
                    try {
                        let o;
                        e.pending.add(h), o = null != (s = r.get(e)) ? s : 0, r.set(e, o + 1), await Promise.resolve(e.effect(l, te({}, u, {
                            getOriginalState: a,
                            condition: (e, t) => y(e, t).then(Boolean),
                            take: y,
                            delay: e9(h.signal),
                            pause: e7(h.signal),
                            extra: n,
                            signal: h.signal,
                            fork: (f = h.signal, (e, t) => {
                                e0(e, "taskExecutor");
                                let r = new AbortController;
                                e3(f, () => e6(r, f.reason));
                                let n = e4(async () => {
                                    e8(f), e8(r.signal);
                                    let t = await e({
                                        pause: e7(r.signal),
                                        delay: e9(r.signal),
                                        signal: r.signal
                                    });
                                    return e8(r.signal), t
                                }, () => e6(r, eJ));
                                return (null == t ? void 0 : t.autoJoin) && v.push(n.catch(e1)), {
                                    result: e7(f)(n),
                                    cancel() {
                                        e6(r, eZ)
                                    }
                                }
                            }),
                            unsubscribe: e.unsubscribe,
                            subscribe: () => {
                                t.set(e.id, e)
                            },
                            cancelActiveListeners: () => {
                                e.pending.forEach((e, t, r) => {
                                    e !== h && (e6(e, eG), r.delete(e))
                                })
                            },
                            cancel: () => {
                                e6(h, eG), e.pending.delete(h)
                            },
                            throwIfCancelled: () => {
                                e8(h.signal)
                            }
                        })))
                    } catch (e) {
                        e instanceof eQ || tu(o, e, {
                            raisedBy: "effect"
                        })
                    } finally {
                        let t;
                        await Promise.all(v), e6(h, eY), 1 === (t = null != (d = r.get(e)) ? d : 1) ? r.delete(e) : r.set(e, t - 1), e.pending.delete(h)
                    }
                },
                a = () => {
                    for (let e of r.keys()) tl(e);
                    t.clear()
                };
            return {
                middleware: e => r => n => {
                    let c;
                    if (!eP(n)) return r(n);
                    if (ta.match(n)) return i(n.payload);
                    if (tc.match(n)) return void a();
                    if (ts.match(n)) return l(n.payload);
                    let s = e.getState(),
                        f = () => {
                            if (s === tt) throw Error(tp(23));
                            return s
                        };
                    try {
                        if (c = r(n), t.size > 0) {
                            let r = e.getState();
                            for (let i of Array.from(t.values())) {
                                let t = !1;
                                try {
                                    t = i.predicate(n, r, s)
                                } catch (e) {
                                    t = !1, tu(o, e, {
                                        raisedBy: "predicate"
                                    })
                                }
                                t && u(i, n, e, f)
                            }
                        }
                    } finally {
                        s = tt
                    }
                    return c
                },
                startListening: i,
                stopListening: l,
                clearListeners: a
            }
        };

    function tp(e) {
        return "Minified Redux Toolkit error #".concat(e, "; visit https://redux-toolkit.js.org/Errors?code=").concat(e, " for the full message or use the non-minified dev environment for full errors. ")
    }
    Symbol.for("rtk-state-proxy-original"), e.s(["autoBatchEnhancer", () => eF, "configureStore", () => ez, "createAction", () => eM, "createListenerMiddleware", () => td, "createSlice", () => eB, "prepareAutoBatched", () => eD], 633008);
    let th = eB({
            name: "auth",
            initialState: {
                auth: null,
                loading: !1,
                error: null
            },
            reducers: {
                signIn: (e, t) => {
                    e.auth = { ...e.auth,
                        ...t.payload
                    }
                },
                signOut: e => {
                    e.auth = null
                },
                setWallet: (e, t) => ({ ...e,
                    wallet: t.payload
                }),
                setLoading: (e, t) => {
                    e.loading = t.payload
                },
                setNonce: (e, t) => ({ ...e,
                    signMessage: t.payload
                })
            }
        }),
        {
            signIn: ty,
            signOut: tv,
            setWallet: tg,
            setNonce: tm
        } = th.actions,
        tb = th.reducer;
    e.s(["default", 0, tb, "selectAuth", 0, e => e.auth.auth, "signIn", 0, ty, "signOut", 0, tv], 813753)
}]);

//# debugId=2d26c4da-741e-3749-d912-0d62f0a59753
//# sourceMappingURL=79c0e2ed522cd32c.js.map