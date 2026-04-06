;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "2250c5d6-293d-1d2c-3495-1762f27bd5db")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 564668, e => {
    "use strict";
    let t = (0, e.i(489198).chakra)("div");
    t.displayName = "Box", e.s(["Box", () => t])
}, 109697, e => {
    "use strict";
    var t = e.i(483632),
        n = e.i(251570),
        r = e.i(299846);
    let o = (0, n.forwardRef)(function(e, n) {
        return (0, t.jsx)(r.Button, {
            px: "0",
            py: "0",
            _icon: {
                fontSize: "1.2em"
            },
            ref: n,
            ...e
        })
    });
    o.displayName = "IconButton", e.s(["IconButton", () => o])
}, 955343, e => {
    "use strict";
    var t = e.i(251570),
        n = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        },
        r = t.default.createContext && t.default.createContext(n),
        o = ["attr", "size", "title"];

    function i() {
        return (i = Object.assign.bind()).apply(this, arguments)
    }

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], (o = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(o)) in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function s(e) {
        return n => t.default.createElement(u, i({
            attr: a({}, e.attr)
        }, n), function e(n) {
            return n && n.map((n, r) => t.default.createElement(n.tag, a({
                key: r
            }, n.attr), e(n.child)))
        }(e.child))
    }

    function u(e) {
        var l = n => {
            var r, {
                    attr: l,
                    size: s,
                    title: u
                } = e,
                c = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n = {};
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                if (t.indexOf(r) >= 0) continue;
                                n[r] = e[r]
                            }
                        return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }(e, o),
                f = s || n.size || "1em";
            return n.className && (r = n.className), e.className && (r = (r ? r + " " : "") + e.className), t.default.createElement("svg", i({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, n.attr, l, c, {
                className: r,
                style: a(a({
                    color: e.color || n.color
                }, n.style), e.style),
                height: f,
                width: f,
                xmlns: "http://www.w3.org/2000/svg"
            }), u && t.default.createElement("title", null, u), e.children)
        };
        return void 0 !== r ? t.default.createElement(r.Consumer, null, e => l(e)) : l(n)
    }
    e.s(["GenIcon", () => s], 955343)
}, 360706, e => {
    "use strict";
    var t = function(e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return {
                parts: function() {
                    for (var n = arguments.length, i = Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                    if (r(o)) return t(e, i);
                    throw Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")
                },
                extendWith: function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return t(e, [...o, ...r])
                },
                omit: function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return t(e, o.filter(e => !r.includes(e)))
                },
                rename: e => t(e, o),
                keys: () => o,
                build: () => [...new Set(o)].reduce((t, r) => Object.assign(t, {
                    [r]: {
                        selector: ['&[data-scope="'.concat(n(e), '"][data-part="').concat(n(r), '"]'), '& [data-scope="'.concat(n(e), '"][data-part="').concat(n(r), '"]')].join(", "),
                        attrs: {
                            "data-scope": n(e),
                            "data-part": n(r)
                        }
                    }
                }), {})
            }
        },
        n = e => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),
        r = e => 0 === e.length;
    e.s(["createAnatomy", () => t])
}, 409078, e => {
    "use strict";
    let t;
    var n, r = Object.defineProperty,
        o = e => {
            throw TypeError(e)
        },
        i = (e, t, n) => {
            let o;
            return (o = "symbol" != typeof t ? t + "" : t) in e ? r(e, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[o] = n
        },
        l = (e, t, n) => (t.has(e) || o("Cannot read from private field"), t.get(e));

    function a(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e]
    }
    var s = e => e[0],
        u = e => e[e.length - 1],
        c = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.concat(n)
        },
        f = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.filter(e => !n.includes(e))
        },
        d = (e, t) => e.filter((e, n) => n !== t),
        h = e => Array.from(new Set(e)),
        p = (e, t) => {
            let n = new Set(t);
            return e.filter(e => !n.has(e))
        },
        m = (e, t) => -1 !== e.indexOf(t) ? f(e, t) : c(e, t);

    function y(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                step: r = 1,
                loop: o = !0
            } = n,
            i = t + r,
            l = e.length,
            a = l - 1;
        return -1 === t ? r > 0 ? 0 : a : i < 0 ? o ? a : 0 : i >= l ? o ? 0 : t > l ? l : t : i
    }

    function g(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e[y(e, t, n)]
    }

    function v(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                step: r = 1,
                loop: o = !0
            } = n;
        return y(e, t, {
            step: -r,
            loop: o
        })
    }

    function b(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e[v(e, t, n)]
    }

    function w(e, t) {
        return e.reduce((e, n, r) => {
            var o;
            return r % t == 0 ? e.push([n]) : null == (o = u(e)) || o.push(n), e
        }, [])
    }

    function E(e, t) {
        return e.reduce((e, n) => {
            let [r, o] = e;
            return t(n) ? r.push(n) : o.push(n), [r, o]
        }, [
            [],
            []
        ])
    }
    var A = e => (null == e ? void 0 : e.constructor.name) === "Array",
        O = (e, t) => {
            if (Object.is(e, t)) return !0;
            if (null == e && null != t || null != e && null == t) return !1;
            if ("function" == typeof(null == e ? void 0 : e.isEqual) && "function" == typeof(null == t ? void 0 : t.isEqual)) return e.isEqual(t);
            if ("function" == typeof e && "function" == typeof t) return e.toString() === t.toString();
            if (A(e) && A(t)) return ((e, t) => {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                    if (!O(e[n], t[n])) return !1;
                return !0
            })(Array.from(e), Array.from(t));
            if ("object" != typeof e || "object" != typeof t) return !1;
            let n = Object.keys(null != t ? t : Object.create(null)),
                r = n.length;
            for (let t = 0; t < r; t++)
                if (!Reflect.has(e, n[t])) return !1;
            for (let o = 0; o < r; o++) {
                let r = n[o];
                if (!O(e[r], t[r])) return !1
            }
            return !0
        },
        S = e => Array.isArray(e),
        T = e => !0 === e || !1 === e,
        x = e => null != e && "object" == typeof e,
        R = e => x(e) && !S(e),
        P = e => "number" == typeof e && !Number.isNaN(e),
        k = e => "string" == typeof e,
        j = e => "function" == typeof e,
        L = e => null == e,
        N = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        C = Function.prototype.toString,
        B = C.call(Object),
        D = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            let o = "function" == typeof e ? e(...n) : e;
            return null != o ? o : void 0
        },
        M = e => e,
        F = e => e(),
        U = () => {},
        I = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                t.forEach(function(e) {
                    null == e || e(...n)
                })
            }
        },
        _ = (t = 0, () => (t++, t.toString(36)));

    function q(e, t) {
        for (var n, r, o = arguments.length, i = Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) i[l - 2] = arguments[l];
        if (e in t) {
            let n = t[e];
            return j(n) ? n(...i) : n
        }
        let a = Error("No matching key: ".concat(JSON.stringify(e), " in ").concat(JSON.stringify(Object.keys(t))));
        throw null == (n = (r = Error).captureStackTrace) || n.call(r, a, q), a
    }
    var z = (e, t) => {
        try {
            return e()
        } catch (e) {
            if (e instanceof Error) {
                var n, r;
                null == (n = (r = Error).captureStackTrace) || n.call(r, e, z)
            }
            return null == t ? void 0 : t()
        }
    };

    function V(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = 0,
            r = null;
        return function() {
            for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            let a = Date.now(),
                s = a - n;
            s >= t ? (r && (clearTimeout(r), r = null), e(...i), n = a) : r || (r = setTimeout(() => {
                e(...i), n = Date.now(), r = null
            }, t - s))
        }
    }
    var {
        floor: W,
        abs: K,
        round: H,
        min: J,
        max: X,
        pow: $,
        sign: G
    } = Math, Y = e => Number.isNaN(e) ? 0 : e, Z = (e, t) => (e % t + t) % t, Q = (e, t) => (e % t + t) % t, ee = (e, t) => Y(e) >= t, et = (e, t) => Y(e) <= t, en = (e, t, n) => {
        let r = Y(e);
        return (null == t || r >= t) && (null == n || r <= n)
    }, er = (e, t, n) => J(X(Y(e), t), n), eo = (e, t, n) => (Y(e) - t) / (n - t), ei = (e, t, n, r) => {
        let o;
        return er((o = e * (n - t) + t, H((Y(o) - t) / r) * r + t), t, n)
    }, el = (e, t) => {
        let n = e,
            r = t.toString(),
            o = r.indexOf("."),
            i = o >= 0 ? r.length - o : 0;
        if (i > 0) {
            let e = $(10, i);
            n = H(n * e) / e
        }
        return n
    }, ea = (e, t) => "number" == typeof t ? W(e * t + .5) / t : H(e), es = (e, t, n, r) => {
        let o = null != t ? Number(t) : 0,
            i = Number(n),
            l = (e - o) % r,
            a = 2 * K(l) >= r ? e + G(l) * (r - K(l)) : e - l;
        if (a = el(a, r), !Number.isNaN(o) && a < o) a = o;
        else if (!Number.isNaN(i) && a > i) {
            let e = W((i - o) / r),
                t = o + e * r;
            a = e <= 0 || t < o ? i : t
        }
        return el(a, r)
    }, eu = (e, t, n) => e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];

    function ec(e, t) {
        let n, r, o, i, l = (n = t.values, r = t.min, 0 === e ? r : n[e - 1]),
            a = (o = t.values, i = t.max, e === o.length - 1 ? i : o[e + 1]),
            s = t.values.slice();
        return function(n) {
            let r = es(n, l, a, t.step);
            return (s = eu(s, e, n))[e] = r, s
        }
    }

    function ef(e, t) {
        let n = t.values[e] + t.step;
        return ec(e, t)(n)
    }

    function ed(e, t) {
        let n = t.values[e] - t.step;
        return ec(e, t)(n)
    }
    var eh = (e, t, n, r) => e.map((o, i) => ({
            min: 0 === i ? t : e[i - 1] + r,
            max: i === e.length - 1 ? n : e[i + 1] - r,
            value: o
        })),
        ep = (e, t) => {
            let [n, r] = e, [o, i] = t;
            return e => n === r || o === i ? o : o + (i - o) / (r - n) * (e - n)
        },
        em = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, t);
            return H(e * r) / r
        },
        ey = e => {
            if (!Number.isFinite(e)) return 0;
            let t = 1,
                n = 0;
            for (; Math.round(e * t) / t !== e;) t *= 10, n += 1;
            return n
        },
        eg = (e, t, n) => {
            let r = "+" === t ? e + n : e - n;
            if (e % 1 != 0 || n % 1 != 0) {
                let o = 10 ** Math.max(ey(e), ey(n));
                e = Math.round(e * o), n = Math.round(n * o), r = ("+" === t ? e + n : e - n) / o
            }
            return r
        },
        ev = (e, t) => eg(Y(e), "+", t),
        eb = (e, t) => eg(Y(e), "-", t),
        ew = e => "number" == typeof e ? "".concat(e, "px") : e;

    function eE(e, t) {
        let n = {};
        for (let r of t) {
            let t = e[r];
            void 0 !== t && (n[r] = t)
        }
        return n
    }
    var eA = e => function(t) {
        let n = {},
            r = {},
            o = new Set(e);
        for (let e of Reflect.ownKeys(t)) o.has(e) ? r[e] = t[e] : n[e] = t[e];
        return [r, n]
    };

    function eO(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
            n = { ...e
            },
            r = new Set,
            o = () => {
                r.forEach(e => e())
            };
        return {
            subscribe: e => (r.add(e), () => r.delete(e)),
            get: e => n[e],
            set: (e, r) => {
                t(n[e], r) || (n[e] = r, o())
            },
            update: e => {
                let r = !1;
                for (let o in e) {
                    let i = e[o];
                    void 0 === i || t(n[o], i) || (n[o] = i, r = !0)
                }
                r && o()
            },
            snapshot: () => ({ ...n
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
                null !== this.pausedAtMs ? (this.context.startMs += e - this.pausedAtMs, this.pausedAtMs = null) : this.context.startMs = e, this.frameId = requestAnimationFrame(l(this, n))
            }), i(this, "pause", () => {
                null !== this.frameId && (this.cancelFrame(), this.pausedAtMs = performance.now())
            }), i(this, "stop", () => {
                null !== this.frameId && (this.cancelFrame(), this.pausedAtMs = null)
            }), ((e, t, n) => t.has(e) ? o("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n))(this, n, e => {
                (this.context.now = e, this.context.deltaMs = e - this.context.startMs, !1 === this.onTick(this.context)) ? this.stop(): this.frameId = requestAnimationFrame(l(this, n))
            }), this.context = {
                now: 0,
                startMs: performance.now(),
                deltaMs: 0
            }
        }
    };

    function eT(e, t) {
        let n = new eS(n => {
            let {
                deltaMs: r
            } = n;
            if (r >= t) return e(), !1
        });
        return n.start(), () => n.stop()
    }

    function ex() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        1 === t.length ? t[0] : t[1], 2 !== t.length || t[0]
    }

    function eR() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        1 === t.length ? t[0] : t[1], 2 !== t.length || t[0]
    }

    function eP(e, t) {
        if (null == e) throw Error(t())
    }

    function ek(e, t, n) {
        let r = [];
        for (let n of t) null == e[n] && r.push(n);
        if (r.length > 0) throw Error("[zag-js".concat(n ? " > ".concat(n) : "", "] missing required props: ").concat(r.join(", ")))
    }
    n = new WeakMap, e.s(["add", () => c, "addOrRemove", () => m, "callAll", () => I, "cast", () => M, "chunk", () => w, "clampValue", () => er, "compact", () => function e(t) {
        if (!(e => {
                if (!x(e) || "[object Object]" != Object.prototype.toString.call(e) || (e => "object" == typeof e && null !== e && "$$typeof" in e && "props" in e || "object" == typeof e && null !== e && "__v_isVNode" in e)(e)) return !1;
                let t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                let n = N(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && C.call(n) == B
            })(t) || void 0 === t) return t;
        let n = Reflect.ownKeys(t).filter(e => "string" == typeof e),
            r = {};
        for (let o of n) {
            let n = t[o];
            void 0 !== n && (r[o] = e(n))
        }
        return r
    }, "createSplitProps", () => eA, "createStore", () => eO, "decrementValue", () => eb, "diff", () => p, "ensure", () => eP, "ensureProps", () => ek, "first", () => s, "flatArray", () => function e(t) {
        return t.reduce((t, n) => Array.isArray(n) ? t.concat(e(n)) : t.concat(n), [])
    }, "getNextStepValue", () => ef, "getPercentValue", () => ei, "getPreviousStepValue", () => ed, "getValuePercent", () => eo, "getValueRanges", () => eh, "getValueTransformer", () => ep, "hasProp", () => N, "identity", () => F, "incrementValue", () => ev, "invariant", () => eR, "isArray", () => S, "isBoolean", () => T, "isEqual", () => O, "isFunction", () => j, "isNull", () => L, "isNumber", () => P, "isObject", () => R, "isString", () => k, "isValueAtMax", () => ee, "isValueAtMin", () => et, "isValueWithinRange", () => en, "last", () => u, "match", () => q, "mod", () => Z, "next", () => g, "nextIndex", () => y, "noop", () => U, "partition", () => E, "pick", () => eE, "prev", () => b, "prevIndex", () => v, "remove", () => f, "removeAt", () => d, "roundToDpr", () => ea, "runIfFn", () => D, "setRafTimeout", () => eT, "setValueAtIndex", () => eu, "snapValueToStep", () => es, "throttle", () => V, "toArray", () => a, "toFixedNumber", () => em, "toPx", () => ew, "tryCatch", () => z, "uniq", () => h, "uuid", () => _, "warn", () => ex, "wrap", () => Q])
}, 841158, e => {
    "use strict";
    let t, n, r, o;
    var i, l = Object.defineProperty,
        a = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? l(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n
        };

    function s(e) {
        if (!e) return !1;
        try {
            return 0 === e.selectionStart && 0 === e.selectionEnd
        } catch {
            return "" === e.value
        }
    }

    function u(e) {
        var t, n;
        if (!e) return;
        let r = null != (t = e.selectionStart) ? t : 0;
        0 !== Math.abs((null != (n = e.selectionEnd) ? n : 0) - r) || 0 === r && e.setSelectionRange(e.value.length, e.value.length)
    }
    var c = e => Math.max(0, Math.min(1, e)),
        f = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return e => t.reduce((e, t) => t(e), e)
        },
        d = () => void 0,
        h = e => "object" == typeof e && null !== e,
        p = e => e ? "" : void 0,
        m = e => e ? "true" : void 0,
        y = e => h(e) && 1 === e.nodeType && "string" == typeof e.nodeName,
        g = e => h(e) && 9 === e.nodeType,
        v = e => y(e) ? e.localName || "" : "#document",
        b = e => h(e) && void 0 !== e.nodeType && 11 === e.nodeType && "host" in e,
        w = e => !!(null == e ? void 0 : e.matches("a[href]"));

    function E(e) {
        return !!e && R(e.getRootNode()) === e
    }
    var A = /(textarea|select)/;

    function O(e) {
        if (null == e || !y(e)) return !1;
        try {
            return y(e) && "input" === e.localName && null != e.selectionStart || A.test(e.localName) || e.isContentEditable || "true" === e.getAttribute("contenteditable") || "" === e.getAttribute("contenteditable")
        } catch {
            return !1
        }
    }

    function S(e, t) {
        var n;
        if (!e || !t || !y(e) || !y(t)) return !1;
        let r = null == (n = t.getRootNode) ? void 0 : n.call(t);
        if (e === t || e.contains(t)) return !0;
        if (r && b(r)) {
            let n = t;
            for (; n;) {
                if (e === n) return !0;
                n = n.parentNode || n.host
            }
        }
        return !1
    }

    function T(e) {
        var t;
        return g(e) ? e : h(e) && e === e.window ? e.document : null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
    }

    function x(e) {
        var t, n, r;
        return b(e) ? x(e.host) : g(e) ? null != (n = e.defaultView) ? n : window : y(e) && null != (r = null == (t = e.ownerDocument) ? void 0 : t.defaultView) ? r : window
    }

    function R(e) {
        let t = e.activeElement;
        for (; null == t ? void 0 : t.shadowRoot;) {
            let e = t.shadowRoot.activeElement;
            if (e && e !== t) t = e;
            else break
        }
        return t
    }

    function P(e) {
        var t;
        let n;
        try {
            if (n = e.getRootNode({
                    composed: !0
                }), g(n) || b(n)) return n
        } catch {}
        return null != (t = e.ownerDocument) ? t : document
    }
    var k = new WeakMap;

    function j(e) {
        return k.has(e) || k.set(e, x(e).getComputedStyle(e)), k.get(e)
    }
    var L = new Set(["menu", "listbox", "dialog", "grid", "tree", "region"]),
        N = e => L.has(e),
        C = e => {
            var t;
            return (null == (t = e.getAttribute("aria-controls")) ? void 0 : t.split(" ")) || []
        };

    function B(e, t) {
        let n = new Set,
            r = P(e),
            o = e => {
                for (let i of e.querySelectorAll("[aria-controls]"))
                    if ("true" === i.getAttribute("aria-expanded"))
                        for (let e of C(i)) {
                            if (!e || n.has(e)) continue;
                            n.add(e);
                            let i = r.getElementById(e);
                            if (i) {
                                let e = i.getAttribute("role"),
                                    n = "true" === i.getAttribute("aria-modal");
                                if (e && N(e) && !n && (i === t || i.contains(t) || o(i))) return !0
                            }
                        }
                return !1
            };
        return o(e)
    }

    function D(e, t) {
        let n = P(e),
            r = new Set,
            o = e => {
                for (let i of e.querySelectorAll("[aria-controls]"))
                    if ("true" === i.getAttribute("aria-expanded"))
                        for (let e of C(i)) {
                            if (!e || r.has(e)) continue;
                            r.add(e);
                            let i = n.getElementById(e);
                            if (i) {
                                let e = i.getAttribute("role"),
                                    n = "true" === i.getAttribute("aria-modal");
                                e && L.has(e) && !n && (t(i), o(i))
                            }
                        }
            };
        o(e)
    }

    function M(e) {
        let t = new Set;
        return D(e, n => {
            e.contains(n) || t.add(n)
        }), Array.from(t)
    }

    function F(e) {
        var t;
        return !!e.hasAttribute("aria-controls") && "true" === e.getAttribute("aria-expanded") || !!(null == (t = e.querySelector) ? void 0 : t.call(e, '[aria-controls][aria-expanded="true"]'))
    }

    function U(e) {
        let t;
        if (!e.id) return !1;
        let n = P(e),
            r = CSS.escape(e.id),
            o = '[aria-controls~="'.concat(r, '"][aria-expanded="true"], [aria-controls="').concat(r, '"][aria-expanded="true"]');
        return !!(n.querySelector(o) && (t = e.getAttribute("role")) && L.has(t))
    }

    function I(e, t) {
        let {
            type: n,
            quality: r = .92,
            background: o
        } = t;
        if (!e) throw Error("[zag-js > getDataUrl]: Could not find the svg element");
        let i = x(e),
            l = i.document,
            a = e.getBoundingClientRect(),
            s = e.cloneNode(!0);
        s.hasAttribute("viewBox") || s.setAttribute("viewBox", "0 0 ".concat(a.width, " ").concat(a.height));
        let u = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + new i.XMLSerializer().serializeToString(s));
        if ("image/svg+xml" === n) return Promise.resolve(u).then(e => (s.remove(), e));
        let c = i.devicePixelRatio || 1,
            f = l.createElement("canvas"),
            d = new i.Image;
        d.src = u, f.width = a.width * c, f.height = a.height * c;
        let h = f.getContext("2d");
        return ("image/jpeg" === n || o) && (h.fillStyle = o || "white", h.fillRect(0, 0, f.width, f.height)), new Promise(e => {
            d.onload = () => {
                null == h || h.drawImage(d, 0, 0, f.width, f.height), e(f.toDataURL(n, r)), s.remove()
            }
        })
    }
    var _ = e => {
            var t;
            let n;
            return "undefined" != typeof document && e.test(null != (t = null == (n = navigator.userAgentData) ? void 0 : n.platform) ? t : navigator.platform)
        },
        q = e => {
            let t;
            return "undefined" != typeof document && e.test((t = navigator.userAgentData) && Array.isArray(t.brands) ? t.brands.map(e => {
                let {
                    brand: t,
                    version: n
                } = e;
                return "".concat(t, "/").concat(n)
            }).join(" ") : navigator.userAgent)
        },
        z = () => "undefined" != typeof document && !!navigator.maxTouchPoints,
        V = () => _(/^iPhone/i) || _(/^iPad/i) || K() && navigator.maxTouchPoints > 1,
        W = () => K() || V(),
        K = () => _(/^Mac/i),
        H = () => {
            let e;
            return W() && (e = /apple/i, "undefined" != typeof document && e.test(navigator.vendor))
        };

    function J(e) {
        let {
            selectionStart: t,
            selectionEnd: n,
            value: r
        } = e.currentTarget, o = e.data;
        return r.slice(0, t) + (null != o ? o : "") + r.slice(n)
    }

    function X(e) {
        var t, n, r, o, i;
        let l = null != (i = null == (n = e.composedPath) ? void 0 : n.call(e)) ? i : null == (o = e.nativeEvent) || null == (r = o.composedPath) ? void 0 : r.call(o);
        return null != (t = null == l ? void 0 : l[0]) ? t : e.target
    }

    function $(e) {
        let t = e.currentTarget;
        if (!t || !t.matches("a[href], button[type='submit'], input[type='submit']")) return !1;
        let n = 1 === e.button,
            r = Z(e);
        return n || r
    }

    function G(e) {
        let t = e.currentTarget;
        if (!t) return !1;
        let n = t.localName;
        return !!e.altKey && ("a" === n || "button" === n && "submit" === t.type || "input" === n && "submit" === t.type)
    }

    function Y(e) {
        return ea(e).isComposing || 229 === e.keyCode
    }

    function Z(e) {
        return K() ? e.metaKey : e.ctrlKey
    }

    function Q(e) {
        return 1 === e.key.length && !e.ctrlKey && !e.metaKey
    }

    function ee(e) {
        return "" === e.pointerType && !!e.isTrusted || (q(/Android/i) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }
    var et = e => 0 === e.button,
        en = e => 2 === e.button || K() && e.ctrlKey && 0 === e.button,
        er = e => e.ctrlKey || e.altKey || e.metaKey,
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
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                dir: r = "ltr",
                orientation: o = "horizontal"
            } = n,
            i = e.key;
        return i = null != (t = eo[i]) ? t : i, "rtl" === r && "horizontal" === o && i in ei && (i = ei[i]), i
    }

    function ea(e) {
        var t;
        return null != (t = e.nativeEvent) ? t : e
    }
    var es = new Set(["PageUp", "PageDown"]),
        eu = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);

    function ec(e) {
        return e.ctrlKey || e.metaKey ? .1 : es.has(e.key) || e.shiftKey && eu.has(e.key) ? 10 : 1
    }

    function ef(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "client",
            n = "touches" in e && e.touches.length > 0 ? e.touches[0] || e.changedTouches[0] : e;
        return {
            x: n["".concat(t, "X")],
            y: n["".concat(t, "Y")]
        }
    }
    var ed = (e, t, n, r) => {
        let o = "function" == typeof e ? e() : e;
        return null == o || o.addEventListener(t, n, r), () => {
            null == o || o.removeEventListener(t, n, r)
        }
    };

    function eh(e, t) {
        var n;
        let {
            type: r = "HTMLInputElement",
            property: o = "value"
        } = t;
        return null != (n = Object.getOwnPropertyDescriptor(x(e)[r].prototype, o)) ? n : {}
    }

    function ep(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "value";
        if (!e) return;
        let o = "input" === e.localName ? "HTMLInputElement" : "textarea" === e.localName ? "HTMLTextAreaElement" : "select" === e.localName ? "HTMLSelectElement" : void 0;
        o && (null == (n = eh(e, {
            type: o,
            property: r
        }).set) || n.call(e, t)), e.setAttribute(r, t)
    }

    function em(e, t) {
        var n;
        e && (null == (n = eh(e, {
            type: "HTMLInputElement",
            property: "checked"
        }).set) || n.call(e, t), t ? e.setAttribute("checked", "") : e.removeAttribute("checked"))
    }

    function ey(e, t) {
        let {
            value: n,
            bubbles: r = !0
        } = t;
        if (!e) return;
        let o = x(e);
        e instanceof o.HTMLInputElement && (ep(e, "".concat(n)), e.dispatchEvent(new o.Event("input", {
            bubbles: r
        })))
    }

    function eg(e, t) {
        let {
            checked: n,
            bubbles: r = !0
        } = t;
        if (!e) return;
        let o = x(e);
        e instanceof o.HTMLInputElement && (em(e, n), e.dispatchEvent(new o.Event("click", {
            bubbles: r
        })))
    }

    function ev(e, t) {
        if (!e) return;
        let {
            onFieldsetDisabledChange: n,
            onFormReset: r
        } = t, o = [function(e, t) {
            if (!e) return;
            let n = e.matches("textarea, input, select, button") ? e.form : e.closest("form"),
                r = e => {
                    e.defaultPrevented || t()
                };
            return null == n || n.addEventListener("reset", r, {
                passive: !0
            }), () => null == n ? void 0 : n.removeEventListener("reset", r)
        }(e, r), function(e, t) {
            let n = null == e ? void 0 : e.closest("fieldset");
            if (!n) return;
            t(n.disabled);
            let r = new(x(n)).MutationObserver(() => t(n.disabled));
            return r.observe(n, {
                attributes: !0,
                attributeFilter: ["disabled"]
            }), () => r.disconnect()
        }(e, n)];
        return () => o.forEach(e => null == e ? void 0 : e())
    }
    var eb = e => y(e) && "IFRAME" === e.tagName,
        ew = /^(audio|video|details)$/;

    function eE(e) {
        let t = e.getAttribute("tabindex");
        return t ? parseInt(t, 10) : NaN
    }

    function eA(e, t, n) {
        let r = [...e],
            o = [...e],
            i = new Set,
            l = new Map;
        e.forEach((e, t) => l.set(e, t));
        let a = 0;
        for (; a < o.length;) {
            let e = o[a++];
            if (!e || i.has(e)) continue;
            i.add(e);
            let s = function(e, t) {
                if (!t) return null;
                if (!0 === t) return e.shadowRoot || null;
                let n = t(e);
                return (!0 === n ? e.shadowRoot : n) || null
            }(e, t);
            if (s) {
                let t = Array.from(s.querySelectorAll(eO)).filter(n),
                    i = l.get(e);
                if (void 0 !== i) {
                    let e = i + 1;
                    r.splice(e, 0, ...t), t.forEach((t, n) => {
                        l.set(t, e + n)
                    });
                    for (let n = e + t.length; n < r.length; n++) l.set(r[n], n)
                } else {
                    let e = r.length;
                    r.push(...t), t.forEach((t, n) => {
                        l.set(t, e + n)
                    })
                }
                o.push(...t)
            }
        }
        return r
    }
    var eO = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",
        eS = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return [];
            let {
                includeContainer: n = !1,
                getShadowRoot: r
            } = t, o = Array.from(e.querySelectorAll(eO));
            (!0 == n || "if-empty" == n && 0 === o.length) && y(e) && eT(e) && o.unshift(e);
            let i = [];
            for (let e of o)
                if (eT(e)) {
                    if (eb(e) && e.contentDocument) {
                        let t = e.contentDocument.body;
                        i.push(...eS(t, {
                            getShadowRoot: r
                        }));
                        continue
                    }
                    i.push(e)
                }
            return r ? eA(i, r, eT) : i
        };

    function eT(e) {
        return !(!y(e) || e.closest("[inert]")) && e.matches(eO) && !!y(e) && (e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0)
    }

    function ex(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return [];
        let {
            includeContainer: n,
            getShadowRoot: r
        } = t, o = Array.from(e.querySelectorAll(eO));
        n && eR(e) && o.unshift(e);
        let i = [];
        for (let e of o)
            if (eR(e)) {
                if (eb(e) && e.contentDocument) {
                    let t = e.contentDocument.body;
                    i.push(...ex(t, {
                        getShadowRoot: r
                    }));
                    continue
                }
                i.push(e)
            }
        if (r) {
            let e = eA(i, r, eR);
            return !e.length && n ? o : e
        }
        return !i.length && n ? o : i
    }

    function eR(e) {
        return !!y(e) && !!(e.tabIndex > 0) || eT(e) && !(0 > eE(e))
    }

    function eP(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = ex(e, t);
        return [n[0] || null, n[n.length - 1] || null]
    }

    function ek(e) {
        return e.tabIndex < 0 && (ew.test(e.localName) || O(e)) && Number.isNaN(eE(e)) ? 0 : e.tabIndex
    }

    function ej(e) {
        let {
            root: t,
            getInitialEl: n,
            filter: r,
            enabled: o = !0
        } = e;
        if (!o) return;
        let i = null;
        if ((i = "function" == typeof n ? n() : n) || (i = null == t ? void 0 : t.querySelector("[data-autofocus],[autofocus]")), !i) {
            let e = ex(t);
            i = r ? e.filter(r)[0] : e[0]
        }
        return i || t || void 0
    }

    function eL(e) {
        let t = e.currentTarget;
        if (!t) return !1;
        let [n, r] = eP(t);
        return !(E(n) && e.shiftKey || E(r) && !e.shiftKey) && (!!n || !!r)
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
            a(this, "id", null), a(this, "fn_cleanup"), a(this, "cleanup", () => {
                this.cancel()
            })
        }
    };

    function eC(e) {
        let t = eN.create();
        return t.request(e), t.cleanup
    }

    function eB(e) {
        let t = new Set;

        function n(e) {
            let n = globalThis.requestAnimationFrame(e);
            t.add(() => globalThis.cancelAnimationFrame(n))
        }
        return n(() => n(e)),
            function() {
                t.forEach(e => e())
            }
    }

    function eD(e, t) {
        let {
            defer: n
        } = t, r = [];
        return r.push((n ? eC : e => e())(() => {
            let n = "function" == typeof e ? e() : e;
            r.push(function(e, t) {
                if (!e) return;
                let {
                    attributes: n,
                    callback: r
                } = t, o = new(e.ownerDocument.defaultView || window).MutationObserver(e => {
                    for (let t of e) "attributes" === t.type && t.attributeName && n.includes(t.attributeName) && r(t)
                });
                return o.observe(e, {
                    attributes: !0,
                    attributeFilter: n
                }), () => o.disconnect()
            }(n, t))
        })), () => {
            r.forEach(e => null == e ? void 0 : e())
        }
    }

    function eM(e, t) {
        let {
            defer: n
        } = t, r = [];
        return r.push((n ? eC : e => e())(() => {
            let n = "function" == typeof e ? e() : e;
            r.push(function(e, t) {
                let {
                    callback: n
                } = t;
                if (!e) return;
                let r = new(e.ownerDocument.defaultView || window).MutationObserver(n);
                return r.observe(e, {
                    childList: !0,
                    subtree: !0
                }), () => r.disconnect()
            }(n, t))
        })), () => {
            r.forEach(e => null == e ? void 0 : e())
        }
    }

    function eF(e) {
        let t = () => {
            let t = x(e);
            e.dispatchEvent(new t.MouseEvent("click"))
        };
        if (q(/Firefox/i)) {
            let n, r;
            n = eC(() => {
                e.removeEventListener("keyup", r, !0), t()
            }), r = () => {
                n(), t()
            }, e.addEventListener("keyup", r, {
                once: !0,
                capture: !0
            })
        } else queueMicrotask(t)
    }

    function eU(e) {
        let t = function(e) {
            if ("html" === v(e)) return e;
            let t = e.assignedSlot || e.parentNode || b(e) && e.host || T(e).documentElement;
            return b(t) ? t.host : t
        }(e);
        return ["html", "body", "#document"].includes(v(t)) ? T(t).body : y(t) && eq(t) ? t : eU(t)
    }
    var eI = /auto|scroll|overlay|hidden|clip/,
        e_ = new Set(["inline", "contents"]);

    function eq(e) {
        let {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: o
        } = x(e).getComputedStyle(e);
        return eI.test(t + r + n) && !e_.has(o)
    }

    function ez(e, t) {
        let {
            rootEl: n,
            ...r
        } = t || {};
        e && n && eq(n) && (n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth) && e.scrollIntoView(r)
    }

    function eV(e, t) {
        let {
            left: n,
            top: r,
            width: o,
            height: i
        } = t.getBoundingClientRect(), l = {
            x: e.x - n,
            y: e.y - r
        }, a = {
            x: c(l.x / o),
            y: c(l.y / i)
        };
        return {
            offset: l,
            percent: a,
            getPercentValue: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        dir: t = "ltr",
                        orientation: n = "horizontal",
                        inverted: r
                    } = e,
                    o = "object" == typeof r ? r.x : r,
                    i = "object" == typeof r ? r.y : r;
                return "horizontal" === n ? "rtl" === t || o ? 1 - a.x : a.x : i ? 1 - a.y : a.y
            }
        }
    }

    function eW(e, t) {
        let n = e.body;
        if (!("pointerLockElement" in e || "mozPointerLockElement" in e)) return;
        try {
            n.requestPointerLock()
        } catch {}
        let r = [ed(e, "pointerlockchange", function() {
            null == t || t(!!e.pointerLockElement)
        }, !1), ed(e, "pointerlockerror", function(n) {
            e.pointerLockElement && (null == t || t(!1)), console.error("PointerLock error occurred:", n), e.exitPointerLock()
        }, !1)];
        return () => {
            r.forEach(e => e()), e.exitPointerLock()
        }
    }
    var eK = "default",
        eH = "",
        eJ = new WeakMap;

    function eX() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                defer: t,
                target: n,
                ...r
            } = e,
            o = [];
        return o.push((t ? eC : e => e())(() => {
            let e = "function" == typeof n ? n() : n;
            o.push(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        target: t,
                        doc: n
                    } = e,
                    r = null != n ? n : document,
                    o = r.documentElement;
                return V() ? ("default" === eK && (eH = o.style.webkitUserSelect, o.style.webkitUserSelect = "none"), eK = "disabled") : t && (eJ.set(t, t.style.userSelect), t.style.userSelect = "none"), () => (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            target: t,
                            doc: n
                        } = e,
                        r = (null != n ? n : document).documentElement;
                    if (V()) {
                        if ("disabled" !== eK) return;
                        eK = "restoring", setTimeout(() => {
                            eB(() => {
                                "restoring" === eK && ("none" === r.style.webkitUserSelect && (r.style.webkitUserSelect = eH || ""), eH = "", eK = "default")
                            })
                        }, 300)
                    } else if (t && eJ.has(t)) {
                        let e = eJ.get(t);
                        "none" === t.style.userSelect && (t.style.userSelect = null != e ? e : ""), "" === t.getAttribute("style") && t.removeAttribute("style"), eJ.delete(t)
                    }
                })({
                    target: t,
                    doc: r
                })
            }({ ...r,
                target: e
            }))
        })), () => {
            o.forEach(e => null == e ? void 0 : e())
        }
    }

    function e$(e, t) {
        let {
            onPointerMove: n,
            onPointerUp: r
        } = t, o = e => {
            r({
                point: ef(e),
                event: e
            })
        }, i = [ed(e, "pointermove", e => {
            let t = ef(e);
            if (!(Math.sqrt(t.x ** 2 + t.y ** 2) < ("touch" === e.pointerType ? 10 : 5))) {
                if ("mouse" === e.pointerType && 0 === e.buttons) return void o(e);
                n({
                    point: t,
                    event: e
                })
            }
        }, !1), ed(e, "pointerup", o, !1), ed(e, "pointercancel", o, !1), ed(e, "contextmenu", o, !1), eX({
            doc: e
        })];
        return () => {
            i.forEach(e => e())
        }
    }

    function eG(e) {
        let {
            pointerNode: t,
            keyboardNode: n = t,
            onPress: r,
            onPressStart: o,
            onPressEnd: i,
            isValidKey: l = e => "Enter" === e.key
        } = e;
        if (!t) return d;
        let a = x(t),
            s = d,
            u = d,
            c = d,
            h = e => ({
                point: ef(e),
                event: e
            });

        function p(e) {
            null == o || o(h(e))
        }

        function m(e) {
            null == i || i(h(e))
        }
        let y = ed(t, "pointerdown", e => {
            u(), u = f(ed(a, "pointerup", e => {
                S(t, X(e)) ? null == r || r(h(e)) : null == i || i(h(e))
            }, {
                passive: !r,
                once: !0
            }), ed(a, "pointercancel", m, {
                passive: !i,
                once: !0
            })), E(n) && "mouse" === e.pointerType && e.preventDefault(), p(e)
        }, {
            passive: !o
        });
        return s = f(y, ed(n, "focus", function() {
            c = f(ed(n, "keydown", e => {
                l(e) && (u(), u = ed(n, "keyup", e => {
                    if (!l(e)) return;
                    let t = h(new a.PointerEvent("pointerup"));
                    null == r || r(t), null == i || i(t)
                }), p(new a.PointerEvent("pointerdown")))
            }), ed(n, "blur", () => {
                m(new a.PointerEvent("pointercancel"))
            }))
        })), () => {
            s(), u(), c()
        }
    }

    function eY(e, t) {
        let {
            defer: n,
            triggerElement: r,
            ...o
        } = t, i = [];
        return i.push((n ? eC : e => e())(() => {
            let t = "function" == typeof e ? e() : e,
                n = "function" == typeof r ? r() : r;
            i.push(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        triggerElement: n,
                        onFocus: r,
                        onFocusEnter: o,
                        getShadowRoot: i
                    } = t,
                    l = (null == e ? void 0 : e.ownerDocument) || document,
                    a = l.body;
                return ed(l, "keydown", function(t) {
                    if ("Tab" !== t.key) return;
                    let l = null,
                        [s, u] = eP(e, {
                            includeContainer: !0,
                            getShadowRoot: i
                        }),
                        c = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                {
                                    current: n,
                                    getShadowRoot: r
                                } = t,
                                o = ex(e, {
                                    getShadowRoot: r
                                }),
                                i = (null == e ? void 0 : e.ownerDocument) || document,
                                l = null != n ? n : R(i);
                            if (!l) return null;
                            let a = o.indexOf(l);
                            return o[a + 1] || null
                        }(a, {
                            current: n,
                            getShadowRoot: i
                        }),
                        f = !s && !u;
                    t.shiftKey && E(c) ? (null == o || o(), l = u) : t.shiftKey && (E(s) || f) ? l = n : !t.shiftKey && E(n) ? (null == o || o(), l = s) : !t.shiftKey && (E(u) || f) && (l = c), l && (t.preventDefault(), "function" == typeof r ? r(l) : l.focus())
                }, !0)
            }(t, {
                triggerElement: n,
                ...o
            }))
        })), () => {
            i.forEach(e => null == e ? void 0 : e())
        }
    }

    function eZ(e, t) {
        var n;
        return Array.from(null != (n = null == e ? void 0 : e.querySelectorAll(t)) ? n : [])
    }

    function eQ(e, t) {
        var n;
        return null != (n = null == e ? void 0 : e.querySelector(t)) ? n : null
    }
    var e0 = e => e.id;

    function e1(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e0;
        return e.find(e => n(e) === t)
    }

    function e2(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e0,
            r = e1(e, t, n);
        return r ? e.indexOf(r) : -1
    }

    function e4(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = e2(e, t);
        return r = n ? (r + 1) % e.length : Math.min(r + 1, e.length - 1), e[r]
    }

    function e5(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = e2(e, t);
        return -1 === r ? n ? e[e.length - 1] : null : (r = n ? (r - 1 + e.length) % e.length : Math.max(0, r - 1), e[r])
    }
    var e3 = (i = {
        box: "border-box"
    }, n = new WeakMap, r = new WeakMap, o = e => t || (t = new e.ResizeObserver(e => {
        for (let t of e) {
            r.set(t.target, t);
            let e = n.get(t.target);
            if (e)
                for (let n of e) n(t)
        }
    })), {
        observe: (e, t) => {
            let r = n.get(e) || new Set;
            r.add(t), n.set(e, r);
            let l = x(e);
            return o(l).observe(e, i), () => {
                let r = n.get(e);
                r && (r.delete(t), 0 === r.size && (n.delete(e), o(l).unobserve(e)))
            }
        },
        unobserve: e => {
            n.delete(e), null == t || t.unobserve(e)
        }
    });

    function e6(e, t, n) {
        let r = e.getAttribute(t),
            o = null != r;
        return e.setAttribute(t, n), () => {
            o ? e.setAttribute(t, r) : e.removeAttribute(t)
        }
    }

    function e8(e, t) {
        if (!e) return d;
        let n = Object.keys(t).reduce((t, n) => (t[n] = e.style.getPropertyValue(n), t), {});
        return Object.assign(e.style, t), () => {
            Object.assign(e.style, n), 0 === e.style.length && e.removeAttribute("style")
        }
    }

    function e7(e, t, n) {
        if (!e) return d;
        let r = e.style.getPropertyValue(t);
        return e.style.setProperty(t, n), () => {
            e.style.setProperty(t, r), 0 === e.style.length && e.removeAttribute("style")
        }
    }
    var e9 = Object.assign(function(e, t) {
            let {
                state: n,
                activeId: r,
                key: o,
                timeout: i = 350,
                itemToId: l
            } = t, a = n.keysSoFar + o, s = a.length > 1 && Array.from(a).every(e => e === a[0]) ? a[0] : a, u = function(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e0,
                    o = n ? e2(e, n, r) : -1,
                    i = n ? e.map((t, n) => e[(Math.max(o, 0) + n) % e.length]) : e;
                return 1 === t.length && (i = i.filter(e => r(e) !== n)), i.find(e => {
                    var n, r, o;
                    let i;
                    return i = (null != (o = null != (r = null == (n = e.dataset) ? void 0 : n.valuetext) ? r : e.textContent) ? o : "").split("").map(e => {
                        let t = e.charCodeAt(0);
                        return t > 0 && t < 128 ? e : t >= 128 && t <= 255 ? "/x".concat(t.toString(16)).replace("/", "\\") : ""
                    }).join("").trim(), i.trim().toLowerCase().startsWith(t.toLowerCase())
                })
            }(e.slice(), s, r, l);

            function c() {
                clearTimeout(n.timer), n.timer = -1
            }
            return ! function e(t) {
                n.keysSoFar = t, c(), "" !== t && (n.timer = +setTimeout(() => {
                    e(""), c()
                }, i))
            }(a), u
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
            timeout: n,
            rootNode: r
        } = t, o = x(r), i = T(r), l = new o.AbortController;
        return function(e, t, n) {
            let {
                signal: r
            } = t;
            return [new Promise((t, o) => {
                let i = setTimeout(() => {
                    o(Error("Timeout of ".concat(n, "ms exceeded")))
                }, n);
                r.addEventListener("abort", () => {
                    clearTimeout(i), o(Error("Promise aborted"))
                }), e.then(e => {
                    r.aborted || (clearTimeout(i), t(e))
                }).catch(e => {
                    r.aborted || (clearTimeout(i), o(e))
                })
            }), () => t.abort()]
        }(new Promise(t => {
            let n = e();
            if (n) return void t(n);
            let r = new o.MutationObserver(() => {
                let n = e();
                n && n.isConnected && (r.disconnect(), t(n))
            });
            r.observe(i.body, {
                childList: !0,
                subtree: !0
            })
        }), l, n)
    }
    e.s(["AnimationFrame", () => eN, "MAX_Z_INDEX", () => 0x7fffffff, "addDomEvent", () => ed, "ariaAttr", () => m, "clickIfLink", () => eF, "contains", () => S, "dataAttr", () => p, "disableTextSelection", () => eX, "dispatchInputCheckedEvent", () => eg, "dispatchInputValueEvent", () => ey, "findControlledElements", () => D, "getActiveElement", () => R, "getBeforeInputValue", () => J, "getByTypeahead", () => e9, "getComputedStyle", () => j, "getControlledElements", () => M, "getDataUrl", () => I, "getDocument", () => T, "getEventKey", () => el, "getEventPoint", () => ef, "getEventStep", () => ec, "getEventTarget", () => X, "getFocusables", () => eS, "getInitialFocus", () => ej, "getNativeEvent", () => ea, "getNearestOverflowAncestor", () => eU, "getOverflowAncestors", () => function e(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = eU(t),
            o = r === t.ownerDocument.body,
            i = x(r);
        return o ? n.concat(i, i.visualViewport || [], eq(r) ? r : []) : n.concat(r, e(r, []))
    }, "getRelativePoint", () => eV, "getTabIndex", () => ek, "getTabbables", () => ex, "getWindow", () => x, "hasControllerElements", () => F, "indexOfId", () => e2, "isActiveElement", () => E, "isAnchorElement", () => w, "isApple", () => W, "isCaretAtStart", () => s, "isComposingEvent", () => Y, "isContextMenuEvent", () => en, "isControlledByExpandedController", () => U, "isControlledElement", () => B, "isCtrlOrMetaKey", () => Z, "isDocument", () => g, "isDownloadingEvent", () => G, "isEditableElement", () => O, "isFocusable", () => eT, "isHTMLElement", () => y, "isIos", () => V, "isLeftClick", () => et, "isMac", () => K, "isModifierKey", () => er, "isOpeningInNewTab", () => $, "isPrintableKey", () => Q, "isSafari", () => H, "isShadowRoot", () => b, "isTabbable", () => eR, "isTouchDevice", () => z, "isValidTabEvent", () => eL, "isVirtualClick", () => ee, "itemById", () => e1, "nextById", () => e4, "nextTick", () => eB, "observeAttributes", () => eD, "observeChildren", () => eM, "prevById", () => e5, "proxyTabFocus", () => eY, "query", () => eQ, "queryAll", () => eZ, "raf", () => eC, "requestPointerLock", () => eW, "resizeObserverBorderBox", () => e3, "scrollIntoView", () => ez, "setAttribute", () => e6, "setCaretToEnd", () => u, "setElementChecked", () => em, "setElementValue", () => ep, "setStyle", () => e8, "setStyleProperty", () => e7, "trackFormControl", () => ev, "trackPointerMove", () => e$, "trackPress", () => eG, "visuallyHiddenStyle", () => te, "waitForElement", () => tt])
}, 30500, e => {
    "use strict";
    var t, n = e.i(409078),
        r = e.i(841158),
        o = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.map(e => {
                var t;
                return null == e || null == (t = e.trim) ? void 0 : t.call(e)
            }).filter(Boolean).join(" ")
        },
        i = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,
        l = e => {
            let t, n = {};
            for (; t = i.exec(e);) n[t[1]] = t[2];
            return n
        },
        a = (e, t) => {
            if ((0, n.isString)(e)) {
                if ((0, n.isString)(t)) return "".concat(e, ";").concat(t);
                e = l(e)
            } else(0, n.isString)(t) && (t = l(t));
            return Object.assign({}, null != e ? e : {}, null != t ? t : {})
        };

    function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        let i = {};
        for (let e of t)
            if (e) {
                for (let t in i) {
                    if (t.startsWith("on") && "function" == typeof i[t] && "function" == typeof e[t]) {
                        i[t] = (0, n.callAll)(e[t], i[t]);
                        continue
                    }
                    if ("className" === t || "class" === t) {
                        i[t] = o(i[t], e[t]);
                        continue
                    }
                    if ("style" === t) {
                        i[t] = a(i[t], e[t]);
                        continue
                    }
                    i[t] = void 0 !== e[t] ? e[t] : i[t]
                }
                for (let t in e) void 0 === i[t] && (i[t] = e[t]);
                for (let t of Object.getOwnPropertySymbols(e)) i[t] = e[t]
            }
        return i
    }

    function u(e, t, r) {
        let o, i = [];
        return l => {
            var a;
            let s = e(l);
            return (s.length !== i.length || s.some((e, t) => !(0, n.isEqual)(i[t], e))) && (i = s, o = t(s, l), null == r || null == (a = r.onChange) || a.call(r, o)), o
        }
    }

    function c() {
        return {
            and: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.every(t => e.guard(t))
                }
            },
            or: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
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
            guards: c(),
            createMachine: e => e,
            choose: e => function(t) {
                var n;
                let {
                    choose: r
                } = t;
                return null == (n = r(e)) ? void 0 : n.actions
            }
        }
    }
    var h = ((t = h || {}).NotStarted = "Not Started", t.Started = "Started", t.Stopped = "Stopped", t);

    function p(e) {
        let t = () => {
                var t, n;
                return null != (n = null == (t = e.getRootNode) ? void 0 : t.call(e)) ? n : document
            },
            n = () => (0, r.getDocument)(t());
        return { ...e,
            getRootNode: t,
            getDoc: n,
            getWin: () => {
                var e;
                return null != (e = n().defaultView) ? e : window
            },
            getActiveElement: () => (0, r.getActiveElement)(t()),
            isActiveElement: r.isActiveElement,
            getById: e => t().getElementById(e)
        }
    }
    e.s(["INIT_STATE", () => "__init__", "MachineStatus", () => h, "createGuards", () => c, "createMachine", () => f, "createScope", () => p, "memo", () => u, "mergeProps", () => s, "setup", () => d])
}, 143713, 17603, e => {
    "use strict";
    var t, n = e.i(841158),
        r = e.i(409078),
        o = "pointerdown.outside",
        i = "focus.outside";

    function l(e, t) {
        if (!t || !("clientY" in e)) return !1;
        let n = t.scrollHeight > t.clientHeight,
            r = n && e.clientX > t.offsetLeft + t.clientWidth,
            o = t.scrollWidth > t.clientWidth,
            i = o && e.clientY > t.offsetTop + t.clientHeight,
            l = {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.clientWidth + 16 * !!n,
                height: t.clientHeight + 16 * !!o
            },
            a = {
                x: e.clientX,
                y: e.clientY
            };
        return l.y <= a.y && a.y <= l.y + l.height && l.x <= a.x && a.x <= l.x + l.width && (r || i)
    }

    function a(e, t) {
        let {
            defer: a
        } = t, u = a ? n.raf : e => e(), c = [];
        return c.push(u(() => {
            let a = "function" == typeof e ? e() : e;
            c.push(function(e, t) {
                let a, u, {
                    exclude: c,
                    onFocusOutside: f,
                    onPointerDownOutside: d,
                    onInteractOutside: h,
                    defer: p,
                    followControlledElements: m = !0
                } = t;
                if (!e) return;
                let y = (0, n.getDocument)(e),
                    g = (0, n.getWindow)(e),
                    v = a = {
                        each(e) {
                            var t;
                            for (let n = 0; n < (null == (t = g.frames) ? void 0 : t.length); n += 1) {
                                let t = g.frames[n];
                                t && e(t)
                            }
                        },
                        addEventListener: (e, t, n) => (a.each(r => {
                            try {
                                r.document.addEventListener(e, t, n)
                            } catch {}
                        }), () => {
                            try {
                                a.removeEventListener(e, t, n)
                            } catch {}
                        }),
                        removeEventListener(e, t, n) {
                            a.each(r => {
                                try {
                                    r.document.removeEventListener(e, t, n)
                                } catch {}
                            })
                        }
                    },
                    b = (u = null != g.frameElement ? g.parent : null, {
                        addEventListener: (e, t, n) => {
                            try {
                                null == u || u.addEventListener(e, t, n)
                            } catch {}
                            return () => {
                                try {
                                    null == u || u.removeEventListener(e, t, n)
                                } catch {}
                            }
                        },
                        removeEventListener: (e, t, n) => {
                            try {
                                null == u || u.removeEventListener(e, t, n)
                            } catch {}
                        }
                    });

                function w(t, r) {
                    if (!(0, n.isHTMLElement)(r) || !r.isConnected || (0, n.contains)(e, r) || function(e, t) {
                            if (!("clientY" in t) || !e) return !1;
                            let n = e.getBoundingClientRect();
                            return 0 !== n.width && 0 !== n.height && n.top <= t.clientY && t.clientY <= n.top + n.height && n.left <= t.clientX && t.clientX <= n.left + n.width
                        }(e, t) || m && (0, n.isControlledElement)(e, r)) return !1;
                    let o = y.querySelector('[aria-controls="'.concat(e.id, '"]'));
                    return !(o && l(t, (0, n.getNearestOverflowAncestor)(o))) && !l(t, (0, n.getNearestOverflowAncestor)(e)) && !(null == c ? void 0 : c(r))
                }
                let E = new Set,
                    A = (0, n.isShadowRoot)(null == e ? void 0 : e.getRootNode());

                function O(t) {
                    function i(i) {
                        var l, a;
                        let u = p && !(0, n.isTouchDevice)() ? n.raf : e => e(),
                            c = null != i ? i : t,
                            f = null != (a = null == c || null == (l = c.composedPath) ? void 0 : l.call(c)) ? a : [null == c ? void 0 : c.target];
                        u(() => {
                            let i = A ? f[0] : (0, n.getEventTarget)(t);
                            if (e && w(t, i)) {
                                if (d || h) {
                                    let t = (0, r.callAll)(d, h);
                                    e.addEventListener(o, t, {
                                        once: !0
                                    })
                                }
                                s(e, o, {
                                    bubbles: !1,
                                    cancelable: !0,
                                    detail: {
                                        originalEvent: c,
                                        contextmenu: (0, n.isContextMenuEvent)(c),
                                        focusable: function(e) {
                                            for (let t of e)
                                                if ((0, n.isHTMLElement)(t) && (0, n.isFocusable)(t)) return !0;
                                            return !1
                                        }(f),
                                        target: i
                                    }
                                })
                            }
                        })
                    }
                    "touch" === t.pointerType ? (E.forEach(e => e()), E.add((0, n.addDomEvent)(y, "click", i, {
                        once: !0
                    })), E.add(b.addEventListener("click", i, {
                        once: !0
                    })), E.add(v.addEventListener("click", i, {
                        once: !0
                    }))) : i()
                }
                let S = new Set,
                    T = setTimeout(() => {
                        S.add((0, n.addDomEvent)(y, "pointerdown", O, !0)), S.add(b.addEventListener("pointerdown", O, !0)), S.add(v.addEventListener("pointerdown", O, !0))
                    }, 0);

                function x(t) {
                    (p ? n.raf : e => e())(() => {
                        var o, l;
                        let a = null != (l = null == t || null == (o = t.composedPath) ? void 0 : o.call(t)) ? l : [null == t ? void 0 : t.target],
                            u = A ? a[0] : (0, n.getEventTarget)(t);
                        if (e && w(t, u)) {
                            if (f || h) {
                                let t = (0, r.callAll)(f, h);
                                e.addEventListener(i, t, {
                                    once: !0
                                })
                            }
                            s(e, i, {
                                bubbles: !1,
                                cancelable: !0,
                                detail: {
                                    originalEvent: t,
                                    contextmenu: !1,
                                    focusable: (0, n.isFocusable)(u),
                                    target: u
                                }
                            })
                        }
                    })
                }
                return (0, n.isTouchDevice)() || (S.add((0, n.addDomEvent)(y, "focusin", x, !0)), S.add(b.addEventListener("focusin", x, !0)), S.add(v.addEventListener("focusin", x, !0))), () => {
                    clearTimeout(T), E.forEach(e => e()), S.forEach(e => e())
                }
            }(a, t))
        })), () => {
            c.forEach(e => null == e ? void 0 : e())
        }
    }

    function s(e, t, n) {
        let r = new(e.ownerDocument.defaultView || window).CustomEvent(t, n);
        return e.dispatchEvent(r)
    }
    e.s(["trackInteractOutside", () => a], 17603);
    var u = "layer:request-dismiss",
        c = {
            layers: [],
            branches: [],
            count() {
                return this.layers.length
            },
            pointerBlockingLayers() {
                return this.layers.filter(e => e.pointerBlocking)
            },
            topMostPointerBlockingLayer() {
                return [...this.pointerBlockingLayers()].slice(-1)[0]
            },
            hasPointerBlockingLayer() {
                return this.pointerBlockingLayers().length > 0
            },
            isBelowPointerBlockingLayer(e) {
                var t;
                return this.indexOf(e) < (this.topMostPointerBlockingLayer() ? this.indexOf(null == (t = this.topMostPointerBlockingLayer()) ? void 0 : t.node) : -1)
            },
            isTopMost(e) {
                let t = this.layers[this.count() - 1];
                return (null == t ? void 0 : t.node) === e
            },
            getNestedLayers(e) {
                return Array.from(this.layers).slice(this.indexOf(e) + 1)
            },
            getLayersByType(e) {
                return this.layers.filter(t => t.type === e)
            },
            getNestedLayersByType(e, t) {
                let n = this.indexOf(e);
                return -1 === n ? [] : this.layers.slice(n + 1).filter(e => e.type === t)
            },
            getParentLayerOfType(e, t) {
                let n = this.indexOf(e);
                if (!(n <= 0)) return this.layers.slice(0, n).reverse().find(e => e.type === t)
            },
            countNestedLayersOfType(e, t) {
                return this.getNestedLayersByType(e, t).length
            },
            isInNestedLayer(e, t) {
                return this.getNestedLayers(e).some(e => (0, n.contains)(e.node, t))
            },
            isInBranch(e) {
                return Array.from(this.branches).some(t => (0, n.contains)(t, e))
            },
            add(e) {
                this.layers.push(e), this.syncLayers()
            },
            addBranch(e) {
                this.branches.push(e)
            },
            remove(e) {
                let t = this.indexOf(e);
                t < 0 || (t < this.count() - 1 && this.getNestedLayers(e).forEach(t => c.dismiss(t.node, e)), this.layers.splice(t, 1), this.syncLayers())
            },
            removeBranch(e) {
                let t = this.branches.indexOf(e);
                t >= 0 && this.branches.splice(t, 1)
            },
            syncLayers() {
                this.layers.forEach((e, t) => {
                    e.node.style.setProperty("--layer-index", "".concat(t)), e.node.removeAttribute("data-nested"), e.node.removeAttribute("data-has-nested"), this.getParentLayerOfType(e.node, e.type) && e.node.setAttribute("data-nested", e.type);
                    let n = this.countNestedLayersOfType(e.node, e.type);
                    n > 0 && e.node.setAttribute("data-has-nested", e.type), e.node.style.setProperty("--nested-layer-count", "".concat(n))
                })
            },
            indexOf(e) {
                return this.layers.findIndex(t => t.node === e)
            },
            dismiss(e, t) {
                var n, r, o, i, l, a;
                let s, c = this.indexOf(e);
                if (-1 === c) return;
                let f = this.layers[c];
                n = e, r = u, o = e => {
                    var t;
                    null == (t = f.requestDismiss) || t.call(f, e), e.defaultPrevented || null == f || f.dismiss()
                }, n.addEventListener(r, o, {
                    once: !0
                }), i = e, l = u, a = {
                    originalLayer: e,
                    targetLayer: t,
                    originalIndex: c,
                    targetIndex: t ? this.indexOf(t) : -1
                }, s = new(i.ownerDocument.defaultView || window).CustomEvent(l, {
                    cancelable: !0,
                    bubbles: !0,
                    detail: a
                }), i.dispatchEvent(s), this.syncLayers()
            },
            clear() {
                this.remove(this.layers[0].node)
            }
        };

    function f() {
        c.layers.forEach(e => {
            let {
                node: t
            } = e;
            t.style.pointerEvents = c.isBelowPointerBlockingLayer(t) ? "none" : "auto"
        })
    }

    function d(e, o) {
        let {
            defer: i
        } = o, l = i ? n.raf : e => e(), s = [];
        return s.push(l(() => {
            let i = (0, r.isFunction)(e) ? e() : e;
            s.push(function(e, o) {
                var i, l;
                let s, u, {
                    warnOnMissingNode: d = !0
                } = o;
                if (d && !e) return void(0, r.warn)("[@zag-js/dismissable] node is `null` or `undefined`");
                if (!e) return;
                let {
                    onDismiss: h,
                    onRequestDismiss: p,
                    pointerBlocking: m,
                    exclude: y,
                    debug: g,
                    type: v = "dialog"
                } = o;
                c.add({
                    dismiss: h,
                    node: e,
                    type: v,
                    pointerBlocking: m,
                    requestDismiss: p
                }), f();
                let b = [m ? (i = o.persistentElements, s = (0, n.getDocument)(e), u = [], c.hasPointerBlockingLayer() && !s.body.hasAttribute("data-inert") && (t = document.body.style.pointerEvents, queueMicrotask(() => {
                    s.body.style.pointerEvents = "none", s.body.setAttribute("data-inert", "")
                })), null == i || i.forEach(e => {
                    let [t, r] = (0, n.waitForElement)(() => {
                        let t = e();
                        return (0, n.isHTMLElement)(t) ? t : null
                    }, {
                        timeout: 1e3
                    });
                    t.then(e => u.push((0, n.setStyle)(e, {
                        pointerEvents: "auto"
                    }))), u.push(r)
                }), () => {
                    c.hasPointerBlockingLayer() || (queueMicrotask(() => {
                        s.body.style.pointerEvents = t, s.body.removeAttribute("data-inert"), 0 === s.body.style.length && s.body.removeAttribute("style")
                    }), u.forEach(e => e()))
                }) : void 0, (l = function(t) {
                    var n;
                    c.isTopMost(e) && (null == (n = o.onEscapeKeyDown) || n.call(o, t), !t.defaultPrevented && h && (t.preventDefault(), h()))
                }, (0, n.addDomEvent)((0, n.getDocument)(e), "keydown", e => {
                    "Escape" !== e.key || e.isComposing || null == l || l(e)
                }, {
                    capture: !0
                })), a(e, {
                    exclude: function(t) {
                        var r;
                        if (!e) return !1;
                        let i = "function" == typeof y ? y() : y,
                            l = Array.isArray(i) ? i : [i],
                            a = null == (r = o.persistentElements) ? void 0 : r.map(e => e()).filter(n.isHTMLElement);
                        return a && l.push(...a), l.some(e => (0, n.contains)(e, t)) || c.isInNestedLayer(e, t)
                    },
                    onFocusOutside: function(e) {
                        var t, r;
                        let i = (0, n.getEventTarget)(e.detail.originalEvent);
                        c.isInBranch(i) || (null == (t = o.onFocusOutside) || t.call(o, e), null == (r = o.onInteractOutside) || r.call(o, e), e.defaultPrevented || (g && console.log("onFocusOutside:", e.detail.originalEvent), null == h || h()))
                    },
                    onPointerDownOutside: function(t) {
                        var r, i;
                        let l = (0, n.getEventTarget)(t.detail.originalEvent);
                        c.isBelowPointerBlockingLayer(e) || c.isInBranch(l) || (null == (r = o.onPointerDownOutside) || r.call(o, t), null == (i = o.onInteractOutside) || i.call(o, t), t.defaultPrevented || (g && console.log("onPointerDownOutside:", t.detail.originalEvent), null == h || h()))
                    },
                    defer: o.defer
                })];
                return () => {
                    c.remove(e), f(), e.style.pointerEvents = "", b.forEach(e => null == e ? void 0 : e())
                }
            }(i, o))
        })), () => {
            s.forEach(e => null == e ? void 0 : e())
        }
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                defer: o
            } = t,
            i = o ? n.raf : e => e(),
            l = [];
        return l.push(i(() => {
            let t = (0, r.isFunction)(e) ? e() : e;
            t ? (c.addBranch(t), l.push(() => {
                c.removeBranch(t)
            })) : (0, r.warn)("[@zag-js/dismissable] branch node is `null` or `undefined`")
        })), () => {
            l.forEach(e => null == e ? void 0 : e())
        }
    }
    e.s(["trackDismissableBranch", () => h, "trackDismissableElement", () => d], 143713)
}, 593006, e => {
    "use strict";

    function t(e) {
        return new Proxy({}, {
            get: (t, n) => "style" === n ? t => e({
                style: t
            }).style : e
        })
    }
    var n = () => e => Array.from(new Set(e));
    e.s(["createNormalizer", () => t, "createProps", () => n])
}, 649725, 31368, e => {
    "use strict";
    let t, n, r, o, i;
    var l, a, s, u, c = e.i(556464);

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    let {
        toString: d
    } = Object.prototype, {
        getPrototypeOf: h
    } = Object, {
        iterator: p,
        toStringTag: m
    } = Symbol, y = (n = Object.create(null), e => {
        let t = d.call(e);
        return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
    }), g = e => (e = e.toLowerCase(), t => y(t) === e), v = e => t => typeof t === e, {
        isArray: b
    } = Array, w = v("undefined");

    function E(e) {
        return null !== e && !w(e) && null !== e.constructor && !w(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    let A = g("ArrayBuffer"),
        O = v("string"),
        S = v("function"),
        T = v("number"),
        x = e => null !== e && "object" == typeof e,
        R = e => {
            if ("object" !== y(e)) return !1;
            let t = h(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(m in e) && !(p in e)
        },
        P = g("Date"),
        k = g("File"),
        j = g("Blob"),
        L = g("FileList"),
        N = g("URLSearchParams"),
        [C, B, D, M] = ["ReadableStream", "Request", "Response", "Headers"].map(g);

    function F(e, t) {
        let n, r, {
            allOwnKeys: o = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != e)
            if ("object" != typeof e && (e = [e]), b(e))
                for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else {
                let r;
                if (E(e)) return;
                let i = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
                    l = i.length;
                for (n = 0; n < l; n++) r = i[n], t.call(null, e[r], r, e)
            }
    }

    function U(e, t) {
        let n;
        if (E(e)) return null;
        t = t.toLowerCase();
        let r = Object.keys(e),
            o = r.length;
        for (; o-- > 0;)
            if (t === (n = r[o]).toLowerCase()) return n;
        return null
    }
    let I = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : e.g,
        _ = e => !w(e) && e !== I,
        q = (r = "undefined" != typeof Uint8Array && h(Uint8Array), e => r && e instanceof r),
        z = g("HTMLFormElement"),
        V = (e => {
            let {
                hasOwnProperty: t
            } = e;
            return (e, n) => t.call(e, n)
        })(Object.prototype),
        W = g("RegExp"),
        K = (e, t) => {
            let n = Object.getOwnPropertyDescriptors(e),
                r = {};
            F(n, (n, o) => {
                let i;
                !1 !== (i = t(n, o, e)) && (r[o] = i || n)
            }), Object.defineProperties(e, r)
        },
        H = g("AsyncFunction"),
        J = (l = "function" == typeof setImmediate, a = S(I.postMessage), l ? setImmediate : a ? (s = "axios@".concat(Math.random()), u = [], I.addEventListener("message", e => {
            let {
                source: t,
                data: n
            } = e;
            t === I && n === s && u.length && u.shift()()
        }, !1), e => {
            u.push(e), I.postMessage(s, "*")
        }) : e => setTimeout(e)),
        X = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(I) : void 0 !== c.default && c.default.nextTick || J,
        $ = {
            isArray: b,
            isArrayBuffer: A,
            isBuffer: E,
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || S(e.append) && ("formdata" === (t = y(e)) || "object" === t && S(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && A(e.buffer)
            },
            isString: O,
            isNumber: T,
            isBoolean: e => !0 === e || !1 === e,
            isObject: x,
            isPlainObject: R,
            isEmptyObject: e => {
                if (!x(e) || E(e)) return !1;
                try {
                    return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                } catch (e) {
                    return !1
                }
            },
            isReadableStream: C,
            isRequest: B,
            isResponse: D,
            isHeaders: M,
            isUndefined: w,
            isDate: P,
            isFile: k,
            isBlob: j,
            isRegExp: W,
            isFunction: S,
            isStream: e => x(e) && S(e.pipe),
            isURLSearchParams: N,
            isTypedArray: q,
            isFileList: L,
            forEach: F,
            merge: function e() {
                let {
                    caseless: t,
                    skipUndefined: n
                } = _(this) && this || {}, r = {}, o = (o, i) => {
                    let l = t && U(r, i) || i;
                    R(r[l]) && R(o) ? r[l] = e(r[l], o) : R(o) ? r[l] = e({}, o) : b(o) ? r[l] = o.slice() : n && w(o) || (r[l] = o)
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && F(arguments[e], o);
                return r
            },
            extend: function(e, t, n) {
                let {
                    allOwnKeys: r
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return F(t, (t, r) => {
                    n && S(t) ? e[r] = f(t, n) : e[r] = t
                }, {
                    allOwnKeys: r
                }), e
            },
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
                e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, n, r) => {
                let o, i, l, a = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;) l = o[i], (!r || r(l, e, t)) && !a[l] && (t[l] = e[l], a[l] = !0);
                    e = !1 !== n && h(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype) return t
            },
            kindOf: y,
            kindOfTest: g,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                let r = e.indexOf(t, n);
                return -1 !== r && r === n
            },
            toArray: e => {
                if (!e) return null;
                if (b(e)) return e;
                let t = e.length;
                if (!T(t)) return null;
                let n = Array(t);
                for (; t-- > 0;) n[t] = e[t];
                return n
            },
            forEachEntry: (e, t) => {
                let n, r = (e && e[p]).call(e);
                for (;
                    (n = r.next()) && !n.done;) {
                    let r = n.value;
                    t.call(e, r[0], r[1])
                }
            },
            matchAll: (e, t) => {
                let n, r = [];
                for (; null !== (n = e.exec(t));) r.push(n);
                return r
            },
            isHTMLForm: z,
            hasOwnProperty: V,
            hasOwnProp: V,
            reduceDescriptors: K,
            freezeMethods: e => {
                K(e, (t, n) => {
                    if (S(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    if (S(e[n])) {
                        if (t.enumerable = !1, "writable" in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + n + "'")
                        })
                    }
                })
            },
            toObjectSet: (e, t) => {
                let n = {};
                return (b(e) ? e : String(e).split(t)).forEach(e => {
                    n[e] = !0
                }), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
                return t.toUpperCase() + n
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: U,
            global: I,
            isContextDefined: _,
            isSpecCompliantForm: function(e) {
                return !!(e && S(e.append) && "FormData" === e[m] && e[p])
            },
            toJSONObject: e => {
                let t = Array(10),
                    n = (e, r) => {
                        if (x(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (E(e)) return e;
                            if (!("toJSON" in e)) {
                                t[r] = e;
                                let o = b(e) ? [] : {};
                                return F(e, (e, t) => {
                                    let i = n(e, r + 1);
                                    w(i) || (o[t] = i)
                                }), t[r] = void 0, o
                            }
                        }
                        return e
                    };
                return n(e, 0)
            },
            isAsyncFn: H,
            isThenable: e => e && (x(e) || S(e)) && S(e.then) && S(e.catch),
            setImmediate: J,
            asap: X,
            isIterable: e => null != e && S(e[p])
        };
    var G = e.i(971447);

    function Y(e, t, n, r, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null)
    }
    $.inherits(Y, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: $.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    let Z = Y.prototype,
        Q = {};

    function ee(e) {
        return $.isPlainObject(e) || $.isArray(e)
    }

    function et(e) {
        return $.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function en(e, t, n) {
        return e ? e.concat(t).map(function(e, t) {
            return e = et(e), !n && t ? "[" + e + "]" : e
        }).join(n ? "." : "") : t
    }["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        Q[e] = {
            value: e
        }
    }), Object.defineProperties(Y, Q), Object.defineProperty(Z, "isAxiosError", {
        value: !0
    }), Y.from = (e, t, n, r, o, i) => {
        let l = Object.create(Z);
        $.toFlatObject(e, l, function(e) {
            return e !== Error.prototype
        }, e => "isAxiosError" !== e);
        let a = e && e.message ? e.message : "Error",
            s = null == t && e ? e.code : t;
        return Y.call(l, a, s, n, r, o), e && null == l.cause && Object.defineProperty(l, "cause", {
            value: e,
            configurable: !0
        }), l.name = e && e.name || "Error", i && Object.assign(l, i), l
    };
    let er = $.toFlatObject($, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        }),
        eo = function(e, t, n) {
            if (!$.isObject(e)) throw TypeError("target must be an object");
            t = t || new FormData;
            let r = (n = $.toFlatObject(n, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !$.isUndefined(t[e])
                })).metaTokens,
                o = n.visitor || u,
                i = n.dots,
                l = n.indexes,
                a = (n.Blob || "undefined" != typeof Blob && Blob) && $.isSpecCompliantForm(t);
            if (!$.isFunction(o)) throw TypeError("visitor must be a function");

            function s(e) {
                if (null === e) return "";
                if ($.isDate(e)) return e.toISOString();
                if ($.isBoolean(e)) return e.toString();
                if (!a && $.isBlob(e)) throw new Y("Blob is not supported. Use a Buffer instead.");
                return $.isArrayBuffer(e) || $.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : G.Buffer.from(e) : e
            }

            function u(e, n, o) {
                let a = e;
                if (e && !o && "object" == typeof e)
                    if ($.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var u;
                        if ($.isArray(e) && (u = e, $.isArray(u) && !u.some(ee)) || ($.isFileList(e) || $.endsWith(n, "[]")) && (a = $.toArray(e))) return n = et(n), a.forEach(function(e, r) {
                            $.isUndefined(e) || null === e || t.append(!0 === l ? en([n], r, i) : null === l ? n : n + "[]", s(e))
                        }), !1
                    }
                return !!ee(e) || (t.append(en(o, n, i), s(e)), !1)
            }
            let c = [],
                f = Object.assign(er, {
                    defaultVisitor: u,
                    convertValue: s,
                    isVisitable: ee
                });
            if (!$.isObject(e)) throw TypeError("data must be an object");
            return ! function e(n, r) {
                if (!$.isUndefined(n)) {
                    if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                    c.push(n), $.forEach(n, function(n, i) {
                        !0 === (!($.isUndefined(n) || null === n) && o.call(t, n, $.isString(i) ? i.trim() : i, r, f)) && e(n, r ? r.concat(i) : [i])
                    }), c.pop()
                }
            }(e), t
        };

    function ei(e) {
        let t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e]
        })
    }

    function el(e, t) {
        this._pairs = [], e && eo(e, this, t)
    }
    let ea = el.prototype;

    function es(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
    }

    function eu(e, t, n) {
        let r;
        if (!t) return e;
        let o = n && n.encode || es;
        $.isFunction(n) && (n = {
            serialize: n
        });
        let i = n && n.serialize;
        if (r = i ? i(t, n) : $.isURLSearchParams(t) ? t.toString() : new el(t, n).toString(o)) {
            let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    }
    ea.append = function(e, t) {
        this._pairs.push([e, t])
    }, ea.toString = function(e) {
        let t = e ? function(t) {
            return e.call(this, t, ei)
        } : ei;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1])
        }, "").join("&")
    };
    let ec = class {
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                $.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
            constructor() {
                this.handlers = []
            }
        },
        ef = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        ed = "undefined" != typeof URLSearchParams ? URLSearchParams : el,
        eh = "undefined" != typeof FormData ? FormData : null,
        ep = "undefined" != typeof Blob ? Blob : null,
        em = "undefined" != typeof window && "undefined" != typeof document,
        ey = "object" == typeof navigator && navigator || void 0,
        eg = em && (!ey || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(ey.product)),
        ev = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        eb = em && window.location.href || "http://localhost";
    e.s(["hasBrowserEnv", () => em, "hasStandardBrowserEnv", () => eg, "hasStandardBrowserWebWorkerEnv", () => ev, "navigator", () => ey, "origin", () => eb], 52597);
    let ew = { ...e.i(52597),
            isBrowser: !0,
            classes: {
                URLSearchParams: ed,
                FormData: eh,
                Blob: ep
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        eE = function(e) {
            if ($.isFormData(e) && $.isFunction(e.entries)) {
                let t = {};
                return $.forEachEntry(e, (e, n) => {
                    ! function e(t, n, r, o) {
                        let i = t[o++];
                        if ("__proto__" === i) return !0;
                        let l = Number.isFinite(+i),
                            a = o >= t.length;
                        return (i = !i && $.isArray(r) ? r.length : i, a) ? $.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n : (r[i] && $.isObject(r[i]) || (r[i] = []), e(t, n, r[i], o) && $.isArray(r[i]) && (r[i] = function(e) {
                            let t, n, r = {},
                                o = Object.keys(e),
                                i = o.length;
                            for (t = 0; t < i; t++) r[n = o[t]] = e[n];
                            return r
                        }(r[i]))), !l
                    }($.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), n, t, 0)
                }), t
            }
            return null
        },
        eA = {
            transitional: ef,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let n, r = t.getContentType() || "",
                    o = r.indexOf("application/json") > -1,
                    i = $.isObject(e);
                if (i && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e)) return o ? JSON.stringify(eE(e)) : e;
                if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e) || $.isReadableStream(e)) return e;
                if ($.isArrayBufferView(e)) return e.buffer;
                if ($.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (i) {
                    if (r.indexOf("application/x-www-form-urlencoded") > -1) {
                        var l, a;
                        return (l = e, a = this.formSerializer, eo(l, new ew.classes.URLSearchParams, {
                            visitor: function(e, t, n, r) {
                                return ew.isNode && $.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                            },
                            ...a
                        })).toString()
                    }
                    if ((n = $.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return eo(n ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (i || o) {
                    t.setContentType("application/json", !1);
                    var s = e;
                    if ($.isString(s)) try {
                        return (0, JSON.parse)(s), $.trim(s)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(s)
                }
                return e
            }],
            transformResponse: [function(e) {
                let t = this.transitional || eA.transitional,
                    n = t && t.forcedJSONParsing,
                    r = "json" === this.responseType;
                if ($.isResponse(e) || $.isReadableStream(e)) return e;
                if (e && $.isString(e) && (n && !this.responseType || r)) {
                    let n = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e, this.parseReviver)
                    } catch (e) {
                        if (!n && r) {
                            if ("SyntaxError" === e.name) throw Y.from(e, Y.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: ew.classes.FormData,
                Blob: ew.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
    $.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        eA.headers[e] = {}
    });
    let eO = $.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        eS = Symbol("internals");

    function eT(e) {
        return e && String(e).trim().toLowerCase()
    }

    function ex(e) {
        return !1 === e || null == e ? e : $.isArray(e) ? e.map(ex) : String(e)
    }

    function eR(e, t, n, r, o) {
        if ($.isFunction(r)) return r.call(this, t, n);
        if (o && (t = n), $.isString(t)) {
            if ($.isString(r)) return -1 !== t.indexOf(r);
            if ($.isRegExp(r)) return r.test(t)
        }
    }
    class eP {
        set(e, t, n) {
            let r = this;

            function o(e, t, n) {
                let o = eT(t);
                if (!o) throw Error("header name must be a non-empty string");
                let i = $.findKey(r, o);
                i && void 0 !== r[i] && !0 !== n && (void 0 !== n || !1 === r[i]) || (r[i || t] = ex(e))
            }
            let i = (e, t) => $.forEach(e, (e, n) => o(e, n, t));
            if ($.isPlainObject(e) || e instanceof this.constructor) i(e, t);
            else {
                let r;
                if ($.isString(e) && (e = e.trim()) && (r = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim()))) {
                    var l;
                    let n, r, o, a;
                    i((a = {}, (l = e) && l.split("\n").forEach(function(e) {
                        o = e.indexOf(":"), n = e.substring(0, o).trim().toLowerCase(), r = e.substring(o + 1).trim(), !n || a[n] && eO[n] || ("set-cookie" === n ? a[n] ? a[n].push(r) : a[n] = [r] : a[n] = a[n] ? a[n] + ", " + r : r)
                    }), a), t)
                } else if ($.isObject(e) && $.isIterable(e)) {
                    let n = {},
                        r, o;
                    for (let t of e) {
                        if (!$.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                        n[o = t[0]] = (r = n[o]) ? $.isArray(r) ? [...r, t[1]] : [r, t[1]] : t[1]
                    }
                    i(n, t)
                } else null != e && o(t, e, n)
            }
            return this
        }
        get(e, t) {
            if (e = eT(e)) {
                let n = $.findKey(this, e);
                if (n) {
                    let e = this[n];
                    if (!t) return e;
                    if (!0 === t) {
                        let t, n = Object.create(null),
                            r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        for (; t = r.exec(e);) n[t[1]] = t[2];
                        return n
                    }
                    if ($.isFunction(t)) return t.call(this, e, n);
                    if ($.isRegExp(t)) return t.exec(e);
                    throw TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = eT(e)) {
                let n = $.findKey(this, e);
                return !!(n && void 0 !== this[n] && (!t || eR(this, this[n], n, t)))
            }
            return !1
        }
        delete(e, t) {
            let n = this,
                r = !1;

            function o(e) {
                if (e = eT(e)) {
                    let o = $.findKey(n, e);
                    o && (!t || eR(n, n[o], o, t)) && (delete n[o], r = !0)
                }
            }
            return $.isArray(e) ? e.forEach(o) : o(e), r
        }
        clear(e) {
            let t = Object.keys(this),
                n = t.length,
                r = !1;
            for (; n--;) {
                let o = t[n];
                (!e || eR(this, this[o], o, e, !0)) && (delete this[o], r = !0)
            }
            return r
        }
        normalize(e) {
            let t = this,
                n = {};
            return $.forEach(this, (r, o) => {
                let i = $.findKey(n, o);
                if (i) {
                    t[i] = ex(r), delete t[o];
                    return
                }
                let l = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n) : String(o).trim();
                l !== o && delete t[o], t[l] = ex(r), n[l] = !0
            }), this
        }
        concat() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.constructor.concat(this, ...t)
        }
        toJSON(e) {
            let t = Object.create(null);
            return $.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && $.isArray(n) ? n.join(", ") : n)
            }), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(e => {
                let [t, n] = e;
                return t + ": " + n
            }).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            let o = new this(e);
            return n.forEach(e => o.set(e)), o
        }
        static accessor(e) {
            let t = (this[eS] = this[eS] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function r(e) {
                let r = eT(e);
                if (!t[r]) {
                    let o;
                    o = $.toCamelCase(" " + e), ["get", "set", "has"].forEach(t => {
                        Object.defineProperty(n, t + o, {
                            value: function(n, r, o) {
                                return this[t].call(this, e, n, r, o)
                            },
                            configurable: !0
                        })
                    }), t[r] = !0
                }
            }
            return $.isArray(e) ? e.forEach(r) : r(e), this
        }
        constructor(e) {
            e && this.set(e)
        }
    }

    function ek(e, t) {
        let n = this || eA,
            r = t || n,
            o = eP.from(r.headers),
            i = r.data;
        return $.forEach(e, function(e) {
            i = e.call(n, i, o.normalize(), t ? t.status : void 0)
        }), o.normalize(), i
    }

    function ej(e) {
        return !!(e && e.__CANCEL__)
    }

    function eL(e, t, n) {
        Y.call(this, null == e ? "canceled" : e, Y.ERR_CANCELED, t, n), this.name = "CanceledError"
    }

    function eN(e, t, n) {
        let r = n.config.validateStatus;
        !n.status || !r || r(n.status) ? e(n) : t(new Y("Request failed with status code " + n.status, [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
    }
    eP.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(eP.prototype, (e, t) => {
        let {
            value: n
        } = e, r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => n,
            set(e) {
                this[r] = e
            }
        }
    }), $.freezeMethods(eP), $.inherits(eL, Y, {
        __CANCEL__: !0
    });
    let eC = function(e, t) {
            let n, r = Array(e = e || 10),
                o = Array(e),
                i = 0,
                l = 0;
            return t = void 0 !== t ? t : 1e3,
                function(a) {
                    let s = Date.now(),
                        u = o[l];
                    n || (n = s), r[i] = a, o[i] = s;
                    let c = l,
                        f = 0;
                    for (; c !== i;) f += r[c++], c %= e;
                    if ((i = (i + 1) % e) === l && (l = (l + 1) % e), s - n < t) return;
                    let d = u && s - u;
                    return d ? Math.round(1e3 * f / d) : void 0
                }
        },
        eB = function(e, t) {
            let n, r, o = 0,
                i = 1e3 / t,
                l = function(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    o = i, n = null, r && (clearTimeout(r), r = null), e(...t)
                };
            return [function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                let s = Date.now(),
                    u = s - o;
                u >= i ? l(t, s) : (n = t, r || (r = setTimeout(() => {
                    r = null, l(n)
                }, i - u)))
            }, () => n && l(n)]
        },
        eD = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                r = 0,
                o = eC(50, 250);
            return eB(n => {
                let i = n.loaded,
                    l = n.lengthComputable ? n.total : void 0,
                    a = i - r,
                    s = o(a);
                r = i, e({
                    loaded: i,
                    total: l,
                    progress: l ? i / l : void 0,
                    bytes: a,
                    rate: s || void 0,
                    estimated: s && l && i <= l ? (l - i) / s : void 0,
                    event: n,
                    lengthComputable: null != l,
                    [t ? "download" : "upload"]: !0
                })
            }, n)
        },
        eM = (e, t) => {
            let n = null != e;
            return [r => t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        },
        eF = e => function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return $.asap(() => e(...n))
        },
        eU = ew.hasStandardBrowserEnv ? (o = new URL(ew.origin), i = ew.navigator && /(msie|trident)/i.test(ew.navigator.userAgent), e => (e = new URL(e, ew.origin), o.protocol === e.protocol && o.host === e.host && (i || o.port === e.port))) : () => !0,
        eI = ew.hasStandardBrowserEnv ? {
            write(e, t, n, r, o, i, l) {
                if ("undefined" == typeof document) return;
                let a = ["".concat(e, "=").concat(encodeURIComponent(t))];
                $.isNumber(n) && a.push("expires=".concat(new Date(n).toUTCString())), $.isString(r) && a.push("path=".concat(r)), $.isString(o) && a.push("domain=".concat(o)), !0 === i && a.push("secure"), $.isString(l) && a.push("SameSite=".concat(l)), document.cookie = a.join("; ")
            },
            read(e) {
                if ("undefined" == typeof document) return null;
                let t = document.cookie.match(RegExp("(?:^|; )" + e + "=([^;]*)"));
                return t ? decodeURIComponent(t[1]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5, "/")
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function e_(e, t, n) {
        let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (r || !1 == n) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
    }
    let eq = e => e instanceof eP ? { ...e
    } : e;

    function ez(e, t) {
        t = t || {};
        let n = {};

        function r(e, t, n, r) {
            return $.isPlainObject(e) && $.isPlainObject(t) ? $.merge.call({
                caseless: r
            }, e, t) : $.isPlainObject(t) ? $.merge({}, t) : $.isArray(t) ? t.slice() : t
        }

        function o(e, t, n, o) {
            return $.isUndefined(t) ? $.isUndefined(e) ? void 0 : r(void 0, e, n, o) : r(e, t, n, o)
        }

        function i(e, t) {
            if (!$.isUndefined(t)) return r(void 0, t)
        }

        function l(e, t) {
            return $.isUndefined(t) ? $.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
        }

        function a(n, o, i) {
            return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0
        }
        let s = {
            url: i,
            method: i,
            data: i,
            baseURL: l,
            transformRequest: l,
            transformResponse: l,
            paramsSerializer: l,
            timeout: l,
            timeoutMessage: l,
            withCredentials: l,
            withXSRFToken: l,
            adapter: l,
            responseType: l,
            xsrfCookieName: l,
            xsrfHeaderName: l,
            onUploadProgress: l,
            onDownloadProgress: l,
            decompress: l,
            maxContentLength: l,
            maxBodyLength: l,
            beforeRedirect: l,
            transport: l,
            httpAgent: l,
            httpsAgent: l,
            cancelToken: l,
            socketPath: l,
            responseEncoding: l,
            validateStatus: a,
            headers: (e, t, n) => o(eq(e), eq(t), n, !0)
        };
        return $.forEach(Object.keys({ ...e,
            ...t
        }), function(r) {
            let i = s[r] || o,
                l = i(e[r], t[r], r);
            $.isUndefined(l) && i !== a || (n[r] = l)
        }), n
    }
    let eV = e => {
            let t = ez({}, e),
                {
                    data: n,
                    withXSRFToken: r,
                    xsrfHeaderName: o,
                    xsrfCookieName: i,
                    headers: l,
                    auth: a
                } = t;
            if (t.headers = l = eP.from(l), t.url = eu(e_(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && l.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))), $.isFormData(n)) {
                if (ew.hasStandardBrowserEnv || ew.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
                else if ($.isFunction(n.getHeaders)) {
                    let e = n.getHeaders(),
                        t = ["content-type", "content-length"];
                    Object.entries(e).forEach(e => {
                        let [n, r] = e;
                        t.includes(n.toLowerCase()) && l.set(n, r)
                    })
                }
            }
            if (ew.hasStandardBrowserEnv && (r && $.isFunction(r) && (r = r(t)), r || !1 !== r && eU(t.url))) {
                let e = o && i && eI.read(i);
                e && l.set(o, e)
            }
            return t
        },
        eW = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, n) {
                var r;
                let o, i, l, a, s, u, c = eV(e),
                    f = c.data,
                    d = eP.from(c.headers).normalize(),
                    {
                        responseType: h,
                        onUploadProgress: p,
                        onDownloadProgress: m
                    } = c;

                function y() {
                    a && a(), s && s(), c.cancelToken && c.cancelToken.unsubscribe(o), c.signal && c.signal.removeEventListener("abort", o)
                }
                let g = new XMLHttpRequest;

                function v() {
                    if (!g) return;
                    let r = eP.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
                    eN(function(e) {
                        t(e), y()
                    }, function(e) {
                        n(e), y()
                    }, {
                        data: h && "text" !== h && "json" !== h ? g.response : g.responseText,
                        status: g.status,
                        statusText: g.statusText,
                        headers: r,
                        config: e,
                        request: g
                    }), g = null
                }
                g.open(c.method.toUpperCase(), c.url, !0), g.timeout = c.timeout, "onloadend" in g ? g.onloadend = v : g.onreadystatechange = function() {
                    !g || 4 !== g.readyState || (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(v)
                }, g.onabort = function() {
                    g && (n(new Y("Request aborted", Y.ECONNABORTED, e, g)), g = null)
                }, g.onerror = function(t) {
                    let r = new Y(t && t.message ? t.message : "Network Error", Y.ERR_NETWORK, e, g);
                    r.event = t || null, n(r), g = null
                }, g.ontimeout = function() {
                    let t = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded",
                        r = c.transitional || ef;
                    c.timeoutErrorMessage && (t = c.timeoutErrorMessage), n(new Y(t, r.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, e, g)), g = null
                }, void 0 === f && d.setContentType(null), "setRequestHeader" in g && $.forEach(d.toJSON(), function(e, t) {
                    g.setRequestHeader(t, e)
                }), $.isUndefined(c.withCredentials) || (g.withCredentials = !!c.withCredentials), h && "json" !== h && (g.responseType = c.responseType), m && ([l, s] = eD(m, !0), g.addEventListener("progress", l)), p && g.upload && ([i, a] = eD(p), g.upload.addEventListener("progress", i), g.upload.addEventListener("loadend", a)), (c.cancelToken || c.signal) && (o = t => {
                    g && (n(!t || t.type ? new eL(null, e, g) : t), g.abort(), g = null)
                }, c.cancelToken && c.cancelToken.subscribe(o), c.signal && (c.signal.aborted ? o() : c.signal.addEventListener("abort", o)));
                let b = (r = c.url, (u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r)) && u[1] || "");
                b && -1 === ew.protocols.indexOf(b) ? n(new Y("Unsupported protocol " + b + ":", Y.ERR_BAD_REQUEST, e)) : g.send(f || null)
            })
        },
        eK = function*(e, t) {
            let n, r = e.byteLength;
            if (!t || r < t) return void(yield e);
            let o = 0;
            for (; o < r;) n = o + t, yield e.slice(o, n), o = n
        },
        eH = async function*(e, t) {
            for await (let n of eJ(e)) yield* eK(n, t)
        },
        eJ = async function*(e) {
            if (e[Symbol.asyncIterator]) return void(yield* e);
            let t = e.getReader();
            try {
                for (;;) {
                    let {
                        done: e,
                        value: n
                    } = await t.read();
                    if (e) break;
                    yield n
                }
            } finally {
                await t.cancel()
            }
        },
        eX = (e, t, n, r) => {
            let o, i = eH(e, t),
                l = 0,
                a = e => {
                    !o && (o = !0, r && r(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        let {
                            done: t,
                            value: r
                        } = await i.next();
                        if (t) {
                            a(), e.close();
                            return
                        }
                        let o = r.byteLength;
                        if (n) {
                            let e = l += o;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (e) {
                        throw a(e), e
                    }
                },
                cancel: e => (a(e), i.return())
            }, {
                highWaterMark: 2
            })
        },
        {
            isFunction: e$
        } = $,
        eG = (e => {
            let {
                Request: t,
                Response: n
            } = e;
            return {
                Request: t,
                Response: n
            }
        })($.global),
        {
            ReadableStream: eY,
            TextEncoder: eZ
        } = $.global,
        eQ = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            try {
                return !!e(...n)
            } catch (e) {
                return !1
            }
        },
        e0 = e => {
            let t, {
                    fetch: n,
                    Request: r,
                    Response: o
                } = e = $.merge.call({
                    skipUndefined: !0
                }, eG, e),
                i = n ? e$(n) : "function" == typeof fetch,
                l = e$(r),
                a = e$(o);
            if (!i) return !1;
            let s = i && e$(eY),
                u = i && ("function" == typeof eZ ? (t = new eZ, e => t.encode(e)) : async e => new Uint8Array(await new r(e).arrayBuffer())),
                c = l && s && eQ(() => {
                    let e = !1,
                        t = new r(ew.origin, {
                            body: new eY,
                            method: "POST",
                            get duplex() {
                                return e = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return e && !t
                }),
                f = a && s && eQ(() => $.isReadableStream(new o("").body)),
                d = {
                    stream: f && (e => e.body)
                };
            i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                d[e] || (d[e] = (t, n) => {
                    let r = t && t[e];
                    if (r) return r.call(t);
                    throw new Y("Response type '".concat(e, "' is not supported"), Y.ERR_NOT_SUPPORT, n)
                })
            });
            let h = async e => {
                    if (null == e) return 0;
                    if ($.isBlob(e)) return e.size;
                    if ($.isSpecCompliantForm(e)) {
                        let t = new r(ew.origin, {
                            method: "POST",
                            body: e
                        });
                        return (await t.arrayBuffer()).byteLength
                    }
                    return $.isArrayBufferView(e) || $.isArrayBuffer(e) ? e.byteLength : ($.isURLSearchParams(e) && (e += ""), $.isString(e)) ? (await u(e)).byteLength : void 0
                },
                p = async (e, t) => {
                    let n = $.toFiniteNumber(e.getContentLength());
                    return null == n ? h(t) : n
                };
            return async e => {
                let t, {
                        url: i,
                        method: a,
                        data: s,
                        signal: u,
                        cancelToken: h,
                        timeout: m,
                        onDownloadProgress: y,
                        onUploadProgress: g,
                        responseType: v,
                        headers: b,
                        withCredentials: w = "same-origin",
                        fetchOptions: E
                    } = eV(e),
                    A = n || fetch;
                v = v ? (v + "").toLowerCase() : "text";
                let O = ((e, t) => {
                        let {
                            length: n
                        } = e = e ? e.filter(Boolean) : [];
                        if (t || n) {
                            let n, r = new AbortController,
                                o = function(e) {
                                    if (!n) {
                                        n = !0, l();
                                        let t = e instanceof Error ? e : this.reason;
                                        r.abort(t instanceof Y ? t : new eL(t instanceof Error ? t.message : t))
                                    }
                                },
                                i = t && setTimeout(() => {
                                    i = null, o(new Y("timeout ".concat(t, " of ms exceeded"), Y.ETIMEDOUT))
                                }, t),
                                l = () => {
                                    e && (i && clearTimeout(i), i = null, e.forEach(e => {
                                        e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
                                    }), e = null)
                                };
                            e.forEach(e => e.addEventListener("abort", o));
                            let {
                                signal: a
                            } = r;
                            return a.unsubscribe = () => $.asap(l), a
                        }
                    })([u, h && h.toAbortSignal()], m),
                    S = null,
                    T = O && O.unsubscribe && (() => {
                        O.unsubscribe()
                    });
                try {
                    if (g && c && "get" !== a && "head" !== a && 0 !== (t = await p(b, s))) {
                        let e, n = new r(i, {
                            method: "POST",
                            body: s,
                            duplex: "half"
                        });
                        if ($.isFormData(s) && (e = n.headers.get("content-type")) && b.setContentType(e), n.body) {
                            let [e, r] = eM(t, eD(eF(g)));
                            s = eX(n.body, 65536, e, r)
                        }
                    }
                    $.isString(w) || (w = w ? "include" : "omit");
                    let n = l && "credentials" in r.prototype,
                        u = { ...E,
                            signal: O,
                            method: a.toUpperCase(),
                            headers: b.normalize().toJSON(),
                            body: s,
                            duplex: "half",
                            credentials: n ? w : void 0
                        };
                    S = l && new r(i, u);
                    let h = await (l ? A(S, E) : A(i, u)),
                        m = f && ("stream" === v || "response" === v);
                    if (f && (y || m && T)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = h[t]
                        });
                        let t = $.toFiniteNumber(h.headers.get("content-length")),
                            [n, r] = y && eM(t, eD(eF(y), !0)) || [];
                        h = new o(eX(h.body, 65536, n, () => {
                            r && r(), T && T()
                        }), e)
                    }
                    v = v || "text";
                    let x = await d[$.findKey(d, v) || "text"](h, e);
                    return !m && T && T(), await new Promise((t, n) => {
                        eN(t, n, {
                            data: x,
                            headers: eP.from(h.headers),
                            status: h.status,
                            statusText: h.statusText,
                            config: e,
                            request: S
                        })
                    })
                } catch (t) {
                    if (T && T(), t && "TypeError" === t.name && /Load failed|fetch/i.test(t.message)) throw Object.assign(new Y("Network Error", Y.ERR_NETWORK, e, S), {
                        cause: t.cause || t
                    });
                    throw Y.from(t, t && t.code, e, S)
                }
            }
        },
        e1 = new Map,
        e2 = e => {
            let t = e && e.env || {},
                {
                    fetch: n,
                    Request: r,
                    Response: o
                } = t,
                i = [r, o, n],
                l = i.length,
                a, s, u = e1;
            for (; l--;) a = i[l], void 0 === (s = u.get(a)) && u.set(a, s = l ? new Map : e0(t)), u = s;
            return s
        };
    e2();
    let e4 = {
        http: null,
        xhr: eW,
        fetch: {
            get: e2
        }
    };
    $.forEach(e4, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    let e5 = e => "- ".concat(e),
        e3 = e => $.isFunction(e) || null === e || !1 === e,
        e6 = function(e, t) {
            let n, r, {
                    length: o
                } = e = $.isArray(e) ? e : [e],
                i = {};
            for (let l = 0; l < o; l++) {
                let o;
                if (r = n = e[l], !e3(n) && void 0 === (r = e4[(o = String(n)).toLowerCase()])) throw new Y("Unknown adapter '".concat(o, "'"));
                if (r && ($.isFunction(r) || (r = r.get(t)))) break;
                i[o || "#" + l] = r
            }
            if (!r) {
                let e = Object.entries(i).map(e => {
                    let [t, n] = e;
                    return "adapter ".concat(t, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build")
                });
                throw new Y("There is no suitable adapter to dispatch the request " + (o ? e.length > 1 ? "since :\n" + e.map(e5).join("\n") : " " + e5(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
            }
            return r
        };

    function e8(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new eL(null, e)
    }

    function e7(e) {
        return e8(e), e.headers = eP.from(e.headers), e.data = ek.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), e6(e.adapter || eA.adapter, e)(e).then(function(t) {
            return e8(e), t.data = ek.call(e, e.transformResponse, t), t.headers = eP.from(t.headers), t
        }, function(t) {
            return !ej(t) && (e8(e), t && t.response && (t.response.data = ek.call(e, e.transformResponse, t.response), t.response.headers = eP.from(t.response.headers))), Promise.reject(t)
        })
    }
    let e9 = "1.13.2",
        te = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        te[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    let tt = {};
    te.transitional = function(e, t, n) {
        function r(e, t) {
            return "[Axios v" + e9 + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, o, i) => {
            if (!1 === e) throw new Y(r(o, " has been removed" + (t ? " in " + t : "")), Y.ERR_DEPRECATED);
            return t && !tt[o] && (tt[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, i)
        }
    }, te.spelling = function(e) {
        return (t, n) => (console.warn("".concat(n, " is likely a misspelling of ").concat(e)), !0)
    };
    let tn = function(e, t, n) {
        if ("object" != typeof e) throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
        let r = Object.keys(e),
            o = r.length;
        for (; o-- > 0;) {
            let i = r[o],
                l = t[i];
            if (l) {
                let t = e[i],
                    n = void 0 === t || l(t, i, e);
                if (!0 !== n) throw new Y("option " + i + " must be " + n, Y.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (!0 !== n) throw new Y("Unknown option " + i, Y.ERR_BAD_OPTION)
        }
    };
    class tr {
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (e) {
                if (e instanceof Error) {
                    let t = {};
                    Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                    let n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                    try {
                        e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n
                    } catch (e) {}
                }
                throw e
            }
        }
        _request(e, t) {
            let n, r;
            "string" == typeof e ? (t = t || {}).url = e : t = e || {};
            let {
                transitional: o,
                paramsSerializer: i,
                headers: l
            } = t = ez(this.defaults, t);
            void 0 !== o && tn(o, {
                silentJSONParsing: te.transitional(te.boolean),
                forcedJSONParsing: te.transitional(te.boolean),
                clarifyTimeoutError: te.transitional(te.boolean)
            }, !1), null != i && ($.isFunction(i) ? t.paramsSerializer = {
                serialize: i
            } : tn(i, {
                encode: te.function,
                serialize: te.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), tn(t, {
                baseUrl: te.spelling("baseURL"),
                withXsrfToken: te.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let a = l && $.merge(l.common, l[t.method]);
            l && $.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                delete l[e]
            }), t.headers = eP.concat(a, l);
            let s = [],
                u = !0;
            this.interceptors.request.forEach(function(e) {
                ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (u = u && e.synchronous, s.unshift(e.fulfilled, e.rejected))
            });
            let c = [];
            this.interceptors.response.forEach(function(e) {
                c.push(e.fulfilled, e.rejected)
            });
            let f = 0;
            if (!u) {
                let e = [e7.bind(this), void 0];
                for (e.unshift(...s), e.push(...c), r = e.length, n = Promise.resolve(t); f < r;) n = n.then(e[f++], e[f++]);
                return n
            }
            r = s.length;
            let d = t;
            for (; f < r;) {
                let e = s[f++],
                    t = s[f++];
                try {
                    d = e(d)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                n = e7.call(this, d)
            } catch (e) {
                return Promise.reject(e)
            }
            for (f = 0, r = c.length; f < r;) n = n.then(c[f++], c[f++]);
            return n
        }
        getUri(e) {
            return eu(e_((e = ez(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new ec,
                response: new ec
            }
        }
    }
    $.forEach(["delete", "get", "head", "options"], function(e) {
        tr.prototype[e] = function(t, n) {
            return this.request(ez(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    }), $.forEach(["post", "put", "patch"], function(e) {
        function t(t) {
            return function(n, r, o) {
                return this.request(ez(o || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: r
                }))
            }
        }
        tr.prototype[e] = t(), tr.prototype[e + "Form"] = t(!0)
    });
    class to {
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            let e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new to(function(t) {
                    e = t
                }),
                cancel: e
            }
        }
        constructor(e) {
            let t;
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            this.promise = new Promise(function(e) {
                t = e
            });
            const n = this;
            this.promise.then(e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0;) n._listeners[t](e);
                n._listeners = null
            }), this.promise.then = e => {
                let t, r = new Promise(e => {
                    n.subscribe(e), t = e
                }).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t)
                }, r
            }, e(function(e, r, o) {
                n.reason || (n.reason = new eL(e, r, o), t(n.reason))
            })
        }
    }
    let ti = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
    };
    Object.entries(ti).forEach(e => {
        let [t, n] = e;
        ti[n] = t
    });
    let tl = function e(t) {
        let n = new tr(t),
            r = f(tr.prototype.request, n);
        return $.extend(r, tr.prototype, n, {
            allOwnKeys: !0
        }), $.extend(r, n, null, {
            allOwnKeys: !0
        }), r.create = function(n) {
            return e(ez(t, n))
        }, r
    }(eA);
    tl.Axios = tr, tl.CanceledError = eL, tl.CancelToken = to, tl.isCancel = ej, tl.VERSION = e9, tl.toFormData = eo, tl.AxiosError = Y, tl.Cancel = tl.CanceledError, tl.all = function(e) {
        return Promise.all(e)
    }, tl.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, tl.isAxiosError = function(e) {
        return $.isObject(e) && !0 === e.isAxiosError
    }, tl.mergeConfig = ez, tl.AxiosHeaders = eP, tl.formToJSON = e => eE($.isHTMLForm(e) ? new FormData(e) : e), tl.getAdapter = e6, tl.HttpStatusCode = ti, tl.default = tl, e.s(["default", 0, tl], 31368);
    var ta = e.i(813753);
    let ts = "https://api.mehappy.vn/api",
        tu = tl.create({
            baseURL: ts,
            headers: {
                "Content-Type": "application/json"
            }
        }),
        tc = tl.create({
            baseURL: "https://storage.mehappy.vn",
            headers: {
                "Content-Type": "application/json"
            }
        }),
        tf = !1,
        td = null,
        th = async () => tf && td ? td : (tf = !0, td = (async () => {
            try {
                var e, n;
                let r = t.getState(),
                    o = null == (n = r.auth) || null == (e = n.auth) ? void 0 : e.refreshToken;
                if (!o) throw t.dispatch((0, ta.signOut)()), Error("No refresh token available");
                let i = await tl.post("".concat(ts, "/auth/refresh"), {
                    refreshToken: o
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    timeout: 1e4
                });
                if (i.data && i.data.success && i.data.data) {
                    let e = i.data.data;
                    return t.dispatch((0, ta.signIn)({ ...r.auth.auth,
                        accessToken: e.accessToken,
                        refreshToken: e.refreshToken
                    })), e
                }
                throw t.dispatch((0, ta.signOut)()), Error("Invalid refresh token response")
            } catch (e) {
                throw t.dispatch((0, ta.signOut)()), e
            } finally {
                tf = !1, td = null
            }
        })()),
        tp = async () => {
            if (tf && td) try {
                await td
            } catch (e) {}
        };
    tu.interceptors.request.use(e => {
        var n, r;
        if (!t) return e;
        let o = null == (r = t.getState().auth) || null == (n = r.auth) ? void 0 : n.accessToken;
        return o && (e.headers.Authorization = "Bearer ".concat(o)), e
    }, e => Promise.reject(e)), tu.interceptors.response.use(e => {
        if (e.data && e.data.hasOwnProperty("status_code") && e.data.hasOwnProperty("data") && e.data.hasOwnProperty("success") && !e.data.success) return Promise.reject({
            message: e.data.message || "Unknown error occurred",
            code: e.data.status_code,
            response: e
        });
        return e
    }, async e => {
        var n, r, o, i, l;
        let a = e.config;
        if (!t) return Promise.reject(e);
        let s = (null == a || null == (n = a.url) ? void 0 : n.includes("/auth/login")) || (null == a || null == (r = a.url) ? void 0 : r.includes("/auth/register")) || (null == a || null == (o = a.url) ? void 0 : o.includes("/auth/refresh")) || (null == a || null == (i = a.url) ? void 0 : i.includes("/auth/verify"));
        if ((null == (l = e.response) ? void 0 : l.status) === 401 && !a._retry && !s) {
            a._retry = !0;
            try {
                let e = await th();
                return a.headers.Authorization = "Bearer ".concat(e.accessToken), tl(a)
            } catch (e) {
                return Promise.reject(e)
            }
        }
        return Promise.reject(e)
    }), tc.interceptors.request.use(e => {
        var n, r;
        if (!t) return e;
        let o = null == (r = t.getState().auth) || null == (n = r.auth) ? void 0 : n.accessToken;
        return o && (e.headers.Authorization = "Bearer ".concat(o)), e
    }, e => Promise.reject(e)), tc.interceptors.response.use(e => {
        if (e.data && e.data.hasOwnProperty("status_code") && e.data.hasOwnProperty("data") && e.data.hasOwnProperty("success") && !e.data.success) return Promise.reject({
            message: e.data.message || "Unknown error occurred",
            code: e.data.status_code,
            response: e
        });
        return e
    }, async e => {
        var n, r, o, i, l;
        let a = e.config;
        if (!t) return Promise.reject(e);
        let s = (null == a || null == (n = a.url) ? void 0 : n.includes("/auth/login")) || (null == a || null == (r = a.url) ? void 0 : r.includes("/auth/register")) || (null == a || null == (o = a.url) ? void 0 : o.includes("/auth/refresh")) || (null == a || null == (i = a.url) ? void 0 : i.includes("/auth/verify"));
        if ((null == (l = e.response) ? void 0 : l.status) === 401 && !a._retry && !s) {
            a._retry = !0;
            try {
                let e = await th();
                return a.headers.Authorization = "Bearer ".concat(e.accessToken), tl(a)
            } catch (e) {
                return Promise.reject(e)
            }
        }
        return Promise.reject(e)
    }), e.s(["default", 0, tu, "domain", 0, ts, "injectStore", 0, e => {
        t = e
    }, "oauthGoogleUrl", 0, "https://api.mehappy.vn/api/auth/google", "storageApiClient", () => tc, "waitForAuth", 0, tp], 649725)
}]);

//# debugId=2250c5d6-293d-1d2c-3495-1762f27bd5db
//# sourceMappingURL=595747c940fbe39c.js.map