;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f2d8caf0-2132-a3cd-31a9-9874d9bab88a")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 299846, 170905, 440291, 307017, t => {
    "use strict";
    var e = t.i(483632),
        r = t.i(251570),
        i = t.i(476379),
        n = t.i(285281),
        s = t.i(489198);
    let o = t => t ? "" : void 0;
    t.s(["dataAttr", () => o], 170905);
    var a = t.i(87065);
    let u = (0, s.chakra)("span");
    u.displayName = "Span", t.s(["Span", () => u], 440291);
    var l = t.i(51715);
    let h = (0, s.chakra)("div", {
        base: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        variants: {
            axis: {
                horizontal: {
                    insetStart: "50%",
                    translate: "-50%",
                    _rtl: {
                        translate: "50%"
                    }
                },
                vertical: {
                    top: "50%",
                    translate: "0 -50%"
                },
                both: {
                    insetStart: "50%",
                    top: "50%",
                    translate: "-50% -50%",
                    _rtl: {
                        translate: "50% -50%"
                    }
                }
            }
        },
        defaultVariants: {
            axis: "both"
        }
    });
    h.displayName = "AbsoluteCenter", t.s(["AbsoluteCenter", () => h], 307017);
    let f = r.forwardRef(function(t, r) {
        let {
            spinner: i = (0, e.jsx)(l.Spinner, {
                size: "inherit",
                borderWidth: "0.125em",
                color: "inherit"
            }),
            spinnerPlacement: n = "start",
            children: s,
            text: o,
            visible: a = !0,
            ...f
        } = t;
        return a ? o ? (0, e.jsxs)(u, {
            ref: r,
            display: "contents",
            ...f,
            children: ["start" === n && i, o, "end" === n && i]
        }) : i ? (0, e.jsxs)(u, {
            ref: r,
            display: "contents",
            ...f,
            children: [(0, e.jsx)(h, {
                display: "inline-flex",
                children: i
            }), (0, e.jsx)(u, {
                visibility: "hidden",
                display: "contents",
                children: s
            })]
        }) : (0, e.jsx)(u, {
            ref: r,
            display: "contents",
            ...f,
            children: s
        }) : s
    });
    f.displayName = "Loader";
    let {
        useRecipeResult: c,
        PropsProvider: p,
        usePropsContext: d
    } = (0, n.createRecipeContext)({
        key: "button"
    }), y = (0, r.forwardRef)(function(t, n) {
        let u = d(),
            l = (0, r.useMemo)(() => (0, i.mergeProps)(u, t), [u, t]),
            h = c(l),
            {
                loading: p,
                loadingText: y,
                children: v,
                spinner: g,
                spinnerPlacement: b,
                ...m
            } = h.props;
        return (0, e.jsx)(s.chakra.button, {
            type: "button",
            ref: n,
            ...m,
            "data-loading": o(p),
            disabled: p || m.disabled,
            className: (0, a.cx)(h.className, l.className),
            css: [h.styles, l.css],
            children: !l.asChild && p ? (0, e.jsx)(f, {
                spinner: g,
                text: y,
                spinnerPlacement: b,
                children: v
            }) : v
        })
    });
    y.displayName = "Button", t.s(["Button", () => y], 299846)
}, 389868, 875111, t => {
    "use strict";
    var e = t.i(483632),
        r = t.i(251570),
        i = t.i(489198),
        n = t.i(87065),
        s = t.i(855404);
    let o = t => null != t;

    function a(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                stop: i,
                getKey: n
            } = r;
        return function t(r) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if ((0, s.isObject)(r) || Array.isArray(r)) {
                let s = {};
                for (let [l, h] of Object.entries(r)) {
                    var u;
                    let f = null != (u = null == n ? void 0 : n(l, h)) ? u : l,
                        c = [...a, f];
                    if (null == i ? void 0 : i(r, c)) return e(r, a);
                    let p = t(h, c);
                    o(p) && (s[f] = p)
                }
                return s
            }
            return e(r, a)
        }(t)
    }

    function u(t, e) {
        return Array.isArray(t) ? t.map(t => o(t) ? e(t) : t) : (0, s.isObject)(t) ? a(t, t => e(t)) : o(t) ? e(t) : t
    }
    t.s(["mapObject", () => u, "walkObject", () => a], 875111);
    let l = (0, r.forwardRef)(function(t, s) {
        let {
            direction: o = "column",
            align: a,
            justify: l,
            gap: h = "0.5rem",
            wrap: f,
            children: c,
            separator: p,
            className: d,
            ...y
        } = t, v = (0, r.useMemo)(() => (function(t) {
            let {
                gap: e,
                direction: r
            } = t, i = {
                column: {
                    marginY: e,
                    marginX: 0,
                    borderInlineStartWidth: 0,
                    borderTopWidth: "1px"
                },
                "column-reverse": {
                    marginY: e,
                    marginX: 0,
                    borderInlineStartWidth: 0,
                    borderTopWidth: "1px"
                },
                row: {
                    marginX: e,
                    marginY: 0,
                    borderInlineStartWidth: "1px",
                    borderTopWidth: 0
                },
                "row-reverse": {
                    marginX: e,
                    marginY: 0,
                    borderInlineStartWidth: "1px",
                    borderTopWidth: 0
                }
            };
            return {
                "&": u(r, t => i[t])
            }
        })({
            gap: h,
            direction: o
        }), [h, o]), g = (0, r.useMemo)(() => (0, r.isValidElement)(p) ? r.Children.toArray(c).filter(t => (0, r.isValidElement)(t)).map((t, i, n) => {
            let s = void 0 !== t.key ? t.key : i,
                o = (0, r.cloneElement)(p, {
                    css: [v, p.props.css]
                });
            return (0, e.jsxs)(r.Fragment, {
                children: [t, i === n.length - 1 ? null : o]
            }, s)
        }) : c, [c, p, v]);
        return (0, e.jsx)(i.chakra.div, {
            ref: s,
            display: "flex",
            alignItems: a,
            justifyContent: l,
            flexDirection: o,
            flexWrap: f,
            gap: p ? void 0 : h,
            className: (0, n.cx)("chakra-stack", d),
            ...y,
            children: g
        })
    });
    l.displayName = "Stack", t.s(["Stack", () => l], 389868)
}, 971447, (t, e, r) => {
    var i = {
            675: function(t, e) {
                "use strict";
                e.byteLength = function(t) {
                    var e = u(t),
                        r = e[0],
                        i = e[1];
                    return (r + i) * 3 / 4 - i
                }, e.toByteArray = function(t) {
                    var e, r, s = u(t),
                        o = s[0],
                        a = s[1],
                        l = new n((o + a) * 3 / 4 - a),
                        h = 0,
                        f = a > 0 ? o - 4 : o;
                    for (r = 0; r < f; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], l[h++] = e >> 16 & 255, l[h++] = e >> 8 & 255, l[h++] = 255 & e;
                    return 2 === a && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, l[h++] = 255 & e), 1 === a && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, l[h++] = e >> 8 & 255, l[h++] = 255 & e), l
                }, e.fromByteArray = function(t) {
                    for (var e, i = t.length, n = i % 3, s = [], o = 0, a = i - n; o < a; o += 16383) s.push(function(t, e, i) {
                        for (var n, s = [], o = e; o < i; o += 3) n = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), s.push(r[n >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
                        return s.join("")
                    }(t, o, o + 16383 > a ? a : o + 16383));
                    return 1 === n ? s.push(r[(e = t[i - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === n && s.push(r[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), s.join("")
                };
                for (var r = [], i = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) r[o] = s[o], i[s.charCodeAt(o)] = o;

                function u(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("="); - 1 === r && (r = e);
                    var i = r === e ? 0 : 4 - r % 4;
                    return [r, i]
                }
                i[45] = 62, i[95] = 63
            },
            72: function(t, e, r) {
                "use strict";
                var i = r(675),
                    n = r(783),
                    s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function o(t) {
                    if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                    var e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, a.prototype), e
                }

                function a(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                        return h(t)
                    }
                    return u(t, e, r)
                }

                function u(t, e, r) {
                    if ("string" == typeof t) {
                        var i = t,
                            n = e;
                        if (("string" != typeof n || "" === n) && (n = "utf8"), !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        var s = 0 | p(i, n),
                            u = o(s),
                            l = u.write(i, n);
                        return l !== s && (u = u.slice(0, l)), u
                    }
                    if (ArrayBuffer.isView(t)) return f(t);
                    if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (B(t, ArrayBuffer) || t && B(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (B(t, SharedArrayBuffer) || t && B(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                        var i;
                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(i = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), a.prototype), i
                    }(t, e, r);
                    if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var h = t.valueOf && t.valueOf();
                    if (null != h && h !== t) return a.from(h, e, r);
                    var d = function(t) {
                        if (a.isBuffer(t)) {
                            var e = 0 | c(t.length),
                                r = o(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                            return t != t
                        }(t.length) ? o(0) : f(t) : "Buffer" === t.type && Array.isArray(t.data) ? f(t.data) : void 0
                    }(t);
                    if (d) return d;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function l(t) {
                    if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                    if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function h(t) {
                    return l(t), o(t < 0 ? 0 : 0 | c(t))
                }

                function f(t) {
                    for (var e = t.length < 0 ? 0 : 0 | c(t.length), r = o(e), i = 0; i < e; i += 1) r[i] = 255 & t[i];
                    return r
                }
                e.Buffer = a, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), a.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 0x7fffffff, a.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1),
                            e = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                    } catch (t) {
                        return !1
                    }
                }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(a.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.byteOffset
                    }
                }), a.poolSize = 8192, a.from = function(t, e, r) {
                    return u(t, e, r)
                }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t, e, r) {
                    return (l(t), t <= 0) ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
                }, a.allocUnsafe = function(t) {
                    return h(t)
                }, a.allocUnsafeSlow = function(t) {
                    return h(t)
                };

                function c(t) {
                    if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | t
                }

                function p(t, e) {
                    if (a.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || B(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var r = t.length,
                        i = arguments.length > 2 && !0 === arguments[2];
                    if (!i && 0 === r) return 0;
                    for (var n = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return x(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return O(t).length;
                        default:
                            if (n) return i ? -1 : x(t).length;
                            e = ("" + e).toLowerCase(), n = !0
                    }
                }

                function d(t, e, r) {
                    var n, s, o, a = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return function(t, e, r) {
                                var i = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
                                for (var n = "", s = e; s < r; ++s) n += M[t[s]];
                                return n
                            }(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, e, r);
                        case "ascii":
                            return function(t, e, r) {
                                var i = "";
                                r = Math.min(t.length, r);
                                for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
                                return i
                            }(this, e, r);
                        case "latin1":
                        case "binary":
                            return function(t, e, r) {
                                var i = "";
                                r = Math.min(t.length, r);
                                for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
                                return i
                            }(this, e, r);
                        case "base64":
                            return n = this, s = e, o = r, 0 === s && o === n.length ? i.fromByteArray(n) : i.fromByteArray(n.slice(s, o));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(t, e, r) {
                                for (var i = t.slice(e, r), n = "", s = 0; s < i.length; s += 2) n += String.fromCharCode(i[s] + 256 * i[s + 1]);
                                return n
                            }(this, e, r);
                        default:
                            if (a) throw TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), a = !0
                    }
                }

                function y(t, e, r) {
                    var i = t[e];
                    t[e] = t[r], t[r] = i
                }

                function v(t, e, r, i, n) {
                    var s;
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (i = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (s = r *= 1) != s && (r = n ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                        if (n) return -1;
                        else r = t.length - 1;
                    else if (r < 0)
                        if (!n) return -1;
                        else r = 0;
                    if ("string" == typeof e && (e = a.from(e, i)), a.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, r, i, n);
                    if ("number" == typeof e) {
                        if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (n) return Uint8Array.prototype.indexOf.call(t, e, r);
                            else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                        return g(t, [e], r, i, n)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function g(t, e, r, i, n) {
                    var s, o = 1,
                        a = t.length,
                        u = e.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        o = 2, a /= 2, u /= 2, r /= 2
                    }

                    function l(t, e) {
                        return 1 === o ? t[e] : t.readUInt16BE(e * o)
                    }
                    if (n) {
                        var h = -1;
                        for (s = r; s < a; s++)
                            if (l(t, s) === l(e, -1 === h ? 0 : s - h)) {
                                if (-1 === h && (h = s), s - h + 1 === u) return h * o
                            } else -1 !== h && (s -= s - h), h = -1
                    } else
                        for (r + u > a && (r = a - u), s = r; s >= 0; s--) {
                            for (var f = !0, c = 0; c < u; c++)
                                if (l(t, s + c) !== l(e, c)) {
                                    f = !1;
                                    break
                                }
                            if (f) return s
                        }
                    return -1
                }
                a.isBuffer = function(t) {
                    return null != t && !0 === t._isBuffer && t !== a.prototype
                }, a.compare = function(t, e) {
                    if (B(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), B(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === e) return 0;
                    for (var r = t.length, i = e.length, n = 0, s = Math.min(r, i); n < s; ++n)
                        if (t[n] !== e[n]) {
                            r = t[n], i = e[n];
                            break
                        }
                    return r < i ? -1 : +(i < r)
                }, a.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(t, e) {
                    if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return a.alloc(0);
                    if (void 0 === e)
                        for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                    var r, i = a.allocUnsafe(e),
                        n = 0;
                    for (r = 0; r < t.length; ++r) {
                        var s = t[r];
                        if (B(s, Uint8Array) && (s = a.from(s)), !a.isBuffer(s)) throw TypeError('"list" argument must be an Array of Buffers');
                        s.copy(i, n), n += s.length
                    }
                    return i
                }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                    return this
                }, a.prototype.toString = function() {
                    var t = this.length;
                    return 0 === t ? "" : 0 == arguments.length ? b(this, 0, t) : d.apply(this, arguments)
                }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
                    if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                    return this === t || 0 === a.compare(this, t)
                }, a.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, s && (a.prototype[s] = a.prototype.inspect), a.prototype.compare = function(t, e, r, i, n) {
                    if (B(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), e < 0 || r > t.length || i < 0 || n > this.length) throw RangeError("out of range index");
                    if (i >= n && e >= r) return 0;
                    if (i >= n) return -1;
                    if (e >= r) return 1;
                    if (e >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === t) return 0;
                    for (var s = n - i, o = r - e, u = Math.min(s, o), l = this.slice(i, n), h = t.slice(e, r), f = 0; f < u; ++f)
                        if (l[f] !== h[f]) {
                            s = l[f], o = h[f];
                            break
                        }
                    return s < o ? -1 : +(o < s)
                }, a.prototype.includes = function(t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, a.prototype.indexOf = function(t, e, r) {
                    return v(this, t, e, r, !0)
                }, a.prototype.lastIndexOf = function(t, e, r) {
                    return v(this, t, e, r, !1)
                };

                function b(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var i = [], n = e; n < r;) {
                        var s, o, a, u, l = t[n],
                            h = null,
                            f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                        if (n + f <= r) switch (f) {
                            case 1:
                                l < 128 && (h = l);
                                break;
                            case 2:
                                (192 & (s = t[n + 1])) == 128 && (u = (31 & l) << 6 | 63 & s) > 127 && (h = u);
                                break;
                            case 3:
                                s = t[n + 1], o = t[n + 2], (192 & s) == 128 && (192 & o) == 128 && (u = (15 & l) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (h = u);
                                break;
                            case 4:
                                s = t[n + 1], o = t[n + 2], a = t[n + 3], (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (u = (15 & l) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u)
                        }
                        null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), n += f
                    }
                    var c = i,
                        p = c.length;
                    if (p <= 4096) return String.fromCharCode.apply(String, c);
                    for (var d = "", y = 0; y < p;) d += String.fromCharCode.apply(String, c.slice(y, y += 4096));
                    return d
                }

                function m(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                    if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(t, e, r, i, n, s) {
                    if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (e > n || e < s) throw RangeError('"value" argument is out of bounds');
                    if (r + i > t.length) throw RangeError("Index out of range")
                }

                function _(t, e, r, i, n, s) {
                    if (r + i > t.length || r < 0) throw RangeError("Index out of range")
                }

                function E(t, e, r, i, s) {
                    return e *= 1, r >>>= 0, s || _(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(t, e, r, i, 23, 4), r + 4
                }

                function S(t, e, r, i, s) {
                    return e *= 1, r >>>= 0, s || _(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(t, e, r, i, 52, 8), r + 8
                }
                a.prototype.write = function(t, e, r, i) {
                    if (void 0 === e) i = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) i = e, r = this.length, e = 0;
                    else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var n, s, o, a, u, l, h, f, c = this.length - e;
                    if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var p = !1;;) switch (i) {
                        case "hex":
                            return function(t, e, r, i) {
                                r = Number(r) || 0;
                                var n = t.length - r;
                                i ? (i = Number(i)) > n && (i = n) : i = n;
                                var s = e.length;
                                i > s / 2 && (i = s / 2);
                                for (var o = 0; o < i; ++o) {
                                    var a, u = parseInt(e.substr(2 * o, 2), 16);
                                    if ((a = u) != a) break;
                                    t[r + o] = u
                                }
                                return o
                            }(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return n = e, s = r, C(x(t, this.length - n), this, n, s);
                        case "ascii":
                            return o = e, a = r, C(T(t), this, o, a);
                        case "latin1":
                        case "binary":
                            return function(t, e, r, i) {
                                return C(T(e), t, r, i)
                            }(this, t, e, r);
                        case "base64":
                            return u = e, l = r, C(O(t), this, u, l);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return h = e, f = r, C(function(t, e) {
                                for (var r, i, n = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = (r = t.charCodeAt(s)) >> 8, n.push(r % 256), n.push(i);
                                return n
                            }(t, this.length - h), this, h, f);
                        default:
                            if (p) throw TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), p = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, a.prototype.slice = function(t, e) {
                    var r = this.length;
                    t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    var i = this.subarray(t, e);
                    return Object.setPrototypeOf(i, a.prototype), i
                }, a.prototype.readUIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256);) i += this[t + s] * n;
                    return i
                }, a.prototype.readUIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var i = this[t + --e], n = 1; e > 0 && (n *= 256);) i += this[t + --e] * n;
                    return i
                }, a.prototype.readUInt8 = function(t, e) {
                    return t >>>= 0, e || m(t, 1, this.length), this[t]
                }, a.prototype.readUInt16LE = function(t, e) {
                    return t >>>= 0, e || m(t, 2, this.length), this[t] | this[t + 1] << 8
                }, a.prototype.readUInt16BE = function(t, e) {
                    return t >>>= 0, e || m(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, a.prototype.readUInt32LE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
                }, a.prototype.readUInt32BE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, a.prototype.readIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256);) i += this[t + s] * n;
                    return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i
                }, a.prototype.readIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || m(t, e, this.length);
                    for (var i = e, n = 1, s = this[t + --i]; i > 0 && (n *= 256);) s += this[t + --i] * n;
                    return s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s
                }, a.prototype.readInt8 = function(t, e) {
                    return (t >>>= 0, e || m(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                }, a.prototype.readInt16LE = function(t, e) {
                    t >>>= 0, e || m(t, 2, this.length);
                    var r = this[t] | this[t + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, a.prototype.readInt16BE = function(t, e) {
                    t >>>= 0, e || m(t, 2, this.length);
                    var r = this[t + 1] | this[t] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, a.prototype.readInt32LE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, a.prototype.readInt32BE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, a.prototype.readFloatLE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), n.read(this, t, !0, 23, 4)
                }, a.prototype.readFloatBE = function(t, e) {
                    return t >>>= 0, e || m(t, 4, this.length), n.read(this, t, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(t, e) {
                    return t >>>= 0, e || m(t, 8, this.length), n.read(this, t, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(t, e) {
                    return t >>>= 0, e || m(t, 8, this.length), n.read(this, t, !1, 52, 8)
                }, a.prototype.writeUIntLE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, n, 0)
                    }
                    var s = 1,
                        o = 0;
                    for (this[e] = 255 & t; ++o < r && (s *= 256);) this[e + o] = t / s & 255;
                    return e + r
                }, a.prototype.writeUIntBE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, n, 0)
                    }
                    var s = r - 1,
                        o = 1;
                    for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
                    return e + r
                }, a.prototype.writeUInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, a.prototype.writeUInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, a.prototype.writeUInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, a.prototype.writeUInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, a.prototype.writeUInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, a.prototype.writeIntLE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, n - 1, -n)
                    }
                    var s = 0,
                        o = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++s < r && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                    return e + r
                }, a.prototype.writeIntBE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, n - 1, -n)
                    }
                    var s = r - 1,
                        o = 1,
                        a = 0;
                    for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                    return e + r
                }, a.prototype.writeInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, a.prototype.writeInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, a.prototype.writeInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, a.prototype.writeInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, a.prototype.writeInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, a.prototype.writeFloatLE = function(t, e, r) {
                    return E(this, t, e, !0, r)
                }, a.prototype.writeFloatBE = function(t, e, r) {
                    return E(this, t, e, !1, r)
                }, a.prototype.writeDoubleLE = function(t, e, r) {
                    return S(this, t, e, !0, r)
                }, a.prototype.writeDoubleBE = function(t, e, r) {
                    return S(this, t, e, !1, r)
                }, a.prototype.copy = function(t, e, r, i) {
                    if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (i < 0) throw RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                    var n = i - r;
                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, i);
                    else if (this === t && r < e && e < i)
                        for (var s = n - 1; s >= 0; --s) t[s + e] = this[s + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, i), e);
                    return n
                }, a.prototype.fill = function(t, e, r, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                        if ("string" == typeof i && !a.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        if (1 === t.length) {
                            var n, s = t.charCodeAt(0);
                            ("utf8" === i && s < 128 || "latin1" === i) && (t = s)
                        }
                    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                    if (r <= e) return this;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (n = e; n < r; ++n) this[n] = t;
                    else {
                        var o = a.isBuffer(t) ? t : a.from(t, i),
                            u = o.length;
                        if (0 === u) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (n = 0; n < r - e; ++n) this[n + e] = o[n % u]
                    }
                    return this
                };
                var A = /[^+/0-9A-Za-z-_]/g;

                function x(t, e) {
                    e = e || 1 / 0;
                    for (var r, i = t.length, n = null, s = [], o = 0; o < i; ++o) {
                        if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                            if (!n) {
                                if (r > 56319 || o + 1 === i) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                n = r;
                                continue
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && s.push(239, 191, 189), n = r;
                                continue
                            }
                            r = (n - 55296 << 10 | r - 56320) + 65536
                        } else n && (e -= 3) > -1 && s.push(239, 191, 189);
                        if (n = null, r < 128) {
                            if ((e -= 1) < 0) break;
                            s.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            s.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((e -= 4) < 0) break;
                            s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return s
                }

                function T(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }

                function O(t) {
                    return i.toByteArray(function(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(A, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function C(t, e, r, i) {
                    for (var n = 0; n < i && !(n + r >= e.length) && !(n >= t.length); ++n) e[n + r] = t[n];
                    return n
                }

                function B(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }
                var M = function() {
                    for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                        for (var i = 16 * r, n = 0; n < 16; ++n) e[i + n] = t[r] + t[n];
                    return e
                }()
            },
            783: function(t, e) {
                e.read = function(t, e, r, i, n) {
                    var s, o, a = 8 * n - i - 1,
                        u = (1 << a) - 1,
                        l = u >> 1,
                        h = -7,
                        f = r ? n - 1 : 0,
                        c = r ? -1 : 1,
                        p = t[e + f];
                    for (f += c, s = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; s = 256 * s + t[e + f], f += c, h -= 8);
                    for (o = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; o = 256 * o + t[e + f], f += c, h -= 8);
                    if (0 === s) s = 1 - l;
                    else {
                        if (s === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
                        o += Math.pow(2, i), s -= l
                    }
                    return (p ? -1 : 1) * o * Math.pow(2, s - i)
                }, e.write = function(t, e, r, i, n, s) {
                    var o, a, u, l = 8 * s - n - 1,
                        h = (1 << l) - 1,
                        f = h >> 1,
                        c = 5960464477539062e-23 * (23 === n),
                        p = i ? 0 : s - 1,
                        d = i ? 1 : -1,
                        y = +(e < 0 || 0 === e && 1 / e < 0);
                    for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = +!!isNaN(e), o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + f >= 1 ? e += c / u : e += c * Math.pow(2, 1 - f), e * u >= 2 && (o++, u /= 2), o + f >= h ? (a = 0, o = h) : o + f >= 1 ? (a = (e * u - 1) * Math.pow(2, n), o += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, n), o = 0)); n >= 8; t[r + p] = 255 & a, p += d, a /= 256, n -= 8);
                    for (o = o << n | a, l += n; l > 0; t[r + p] = 255 & o, p += d, o /= 256, l -= 8);
                    t[r + p - d] |= 128 * y
                }
            }
        },
        n = {};

    function s(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var r = n[t] = {
                exports: {}
            },
            o = !0;
        try {
            i[t](r, r.exports, s), o = !1
        } finally {
            o && delete n[t]
        }
        return r.exports
    }
    s.ab = "/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_6d9e40018215248210ec78c841d5abba/node_modules/next/dist/compiled/buffer/", e.exports = s(72)
}, 376054, 303069, 463075, 136927, 550475, t => {
    "use strict";

    function e(t, e, r) {
        if (!e.has(t)) throw TypeError("attempted to " + r + " private field on non-instance");
        return e.get(t)
    }

    function r(t, r) {
        var i = e(t, r, "get");
        return i.get ? i.get.call(t) : i.value
    }

    function i(t, e) {
        if (e.has(t)) throw TypeError("Cannot initialize the same private elements twice on an object")
    }

    function n(t, e, r) {
        i(t, e), e.set(t, r)
    }

    function s(t, r, i) {
        var n = e(t, r, "set");
        if (n.set) n.set.call(t, i);
        else {
            if (!n.writable) throw TypeError("attempted to set read only private field");
            n.value = i
        }
        return i
    }
    t.s(["_", () => e], 303069), t.s(["_", () => r], 376054), t.s(["_", () => i], 463075), t.s(["_", () => n], 136927), t.s(["_", () => s], 550475)
}, 457765, t => {
    "use strict";
    var e, r, i = t.i(376054),
        n = t.i(136927),
        s = t.i(550475),
        o = {
            setTimeout: (t, e) => setTimeout(t, e),
            clearTimeout: t => clearTimeout(t),
            setInterval: (t, e) => setInterval(t, e),
            clearInterval: t => clearInterval(t)
        },
        a = new(e = new WeakMap, r = new WeakMap, class {
            setTimeoutProvider(t) {
                (0, s._)(this, e, t)
            }
            setTimeout(t, r) {
                return (0, i._)(this, e).setTimeout(t, r)
            }
            clearTimeout(t) {
                (0, i._)(this, e).clearTimeout(t)
            }
            setInterval(t, r) {
                return (0, i._)(this, e).setInterval(t, r)
            }
            clearInterval(t) {
                (0, i._)(this, e).clearInterval(t)
            }
            constructor() {
                (0, n._)(this, e, {
                    writable: !0,
                    value: o
                }), (0, n._)(this, r, {
                    writable: !0,
                    value: !1
                })
            }
        });

    function u(t) {
        setTimeout(t, 0)
    }
    t.s(["systemSetTimeoutZero", () => u, "timeoutManager", () => a])
}, 879994, t => {
    "use strict";
    var e = t.i(457765),
        r = "undefined" == typeof window || "Deno" in globalThis;

    function i() {}

    function n(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function s(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0
    }

    function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0)
    }

    function a(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function u(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function l(t, e) {
        let {
            type: r = "all",
            exact: i,
            fetchStatus: n,
            predicate: s,
            queryKey: o,
            stale: a
        } = t;
        if (o) {
            if (i) {
                if (e.queryHash !== f(o, e.options)) return !1
            } else if (!p(e.queryKey, o)) return !1
        }
        if ("all" !== r) {
            let t = e.isActive();
            if ("active" === r && !t || "inactive" === r && t) return !1
        }
        return ("boolean" != typeof a || e.isStale() === a) && (!n || n === e.state.fetchStatus) && (!s || !!s(e))
    }

    function h(t, e) {
        let {
            exact: r,
            status: i,
            predicate: n,
            mutationKey: s
        } = t;
        if (s) {
            if (!e.options.mutationKey) return !1;
            if (r) {
                if (c(e.options.mutationKey) !== c(s)) return !1
            } else if (!p(e.options.mutationKey, s)) return !1
        }
        return (!i || e.state.status === i) && (!n || !!n(e))
    }

    function f(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || c)(t)
    }

    function c(t) {
        return JSON.stringify(t, (t, e) => g(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
    }

    function p(t, e) {
        return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && Object.keys(e).every(r => p(t[r], e[r]))
    }
    var d = Object.prototype.hasOwnProperty;

    function y(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let r in t)
            if (t[r] !== e[r]) return !1;
        return !0
    }

    function v(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length
    }

    function g(t) {
        if (!b(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!b(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype
    }

    function b(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function m(t) {
        return new Promise(r => {
            e.timeoutManager.setTimeout(r, t)
        })
    }

    function w(t, e, r) {
        return "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? function t(e, r) {
            if (e === r) return e;
            let i = v(e) && v(r);
            if (!i && !(g(e) && g(r))) return r;
            let n = (i ? e : Object.keys(e)).length,
                s = i ? r : Object.keys(r),
                o = s.length,
                a = i ? Array(o) : {},
                u = 0;
            for (let l = 0; l < o; l++) {
                let o = i ? l : s[l],
                    h = e[o],
                    f = r[o];
                if (h === f) {
                    a[o] = h, (i ? l < n : d.call(e, o)) && u++;
                    continue
                }
                if (null === h || null === f || "object" != typeof h || "object" != typeof f) {
                    a[o] = f;
                    continue
                }
                let c = t(h, f);
                a[o] = c, c === h && u++
            }
            return n === o && u === n ? e : a
        }(t, e) : e
    }

    function _(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = [...t, e];
        return r && i.length > r ? i.slice(1) : i
    }

    function E(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = [e, ...t];
        return r && i.length > r ? i.slice(0, -1) : i
    }
    var S = Symbol();

    function A(t, e) {
        return !t.queryFn && (null == e ? void 0 : e.initialPromise) ? () => e.initialPromise : t.queryFn && t.queryFn !== S ? t.queryFn : () => Promise.reject(Error("Missing queryFn: '".concat(t.queryHash, "'")))
    }

    function x(t, e) {
        return "function" == typeof t ? t(...e) : !!t
    }
    t.s(["addToEnd", () => _, "addToStart", () => E, "ensureQueryFn", () => A, "functionalUpdate", () => n, "hashKey", () => c, "hashQueryKeyByOptions", () => f, "isServer", () => r, "isValidTimeout", () => s, "matchMutation", () => h, "matchQuery", () => l, "noop", () => i, "partialMatchKey", () => p, "replaceData", () => w, "resolveEnabled", () => u, "resolveStaleTime", () => a, "shallowEqualObjects", () => y, "shouldThrowError", () => x, "skipToken", () => S, "sleep", () => m, "timeUntilStale", () => o])
}, 42297, 474754, t => {
    "use strict";

    function e(t, e, r) {
        if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
        return r
    }
    t.s(["_", () => e], 42297);
    var r = t.i(463075);

    function i(t, e) {
        (0, r._)(t, e), e.add(t)
    }
    t.s(["_", () => i], 474754)
}, 318459, t => {
    "use strict";
    let e, r, i, n, s, o;
    var a = t.i(457765).systemSetTimeoutZero,
        u = (e = [], r = 0, i = t => {
            t()
        }, n = t => {
            t()
        }, s = a, {
            batch: t => {
                let o;
                r++;
                try {
                    o = t()
                } finally {
                    let t;
                    --r || (t = e, e = [], t.length && s(() => {
                        n(() => {
                            t.forEach(t => {
                                i(t)
                            })
                        })
                    }))
                }
                return o
            },
            batchCalls: t => function() {
                for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                o(() => {
                    t(...r)
                })
            },
            schedule: o = t => {
                r ? e.push(t) : s(() => {
                    i(t)
                })
            },
            setNotifyFunction: t => {
                i = t
            },
            setBatchNotifyFunction: t => {
                n = t
            },
            setScheduler: t => {
                s = t
            }
        });
    t.s(["notifyManager", () => u])
}, 423216, t => {
    "use strict";
    var e = class {
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
    };
    t.s(["Subscribable", () => e])
}, 708347, t => {
    "use strict";
    var e, r, i, n = t.i(376054),
        s = t.i(136927),
        o = t.i(550475),
        a = t.i(423216),
        u = t.i(879994),
        l = new(e = new WeakMap, r = new WeakMap, i = new WeakMap, class extends a.Subscribable {
            onSubscribe() {
                (0, n._)(this, r) || this.setEventListener((0, n._)(this, i))
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || (null == (t = (0, n._)(this, r)) || t.call(this), (0, o._)(this, r, void 0))
            }
            setEventListener(t) {
                var e;
                (0, o._)(this, i, t), null == (e = (0, n._)(this, r)) || e.call(this), (0, o._)(this, r, t(t => {
                    "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                }))
            }
            setFocused(t) {
                (0, n._)(this, e) !== t && ((0, o._)(this, e, t), this.onFocus())
            }
            onFocus() {
                let t = this.isFocused();
                this.listeners.forEach(e => {
                    e(t)
                })
            }
            isFocused() {
                var t;
                return "boolean" == typeof(0, n._)(this, e) ? (0, n._)(this, e) : (null == (t = globalThis.document) ? void 0 : t.visibilityState) !== "hidden"
            }
            constructor() {
                super(), (0, s._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, s._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, s._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, i, t => {
                    if (!u.isServer && window.addEventListener) {
                        let e = () => t();
                        return window.addEventListener("visibilitychange", e, !1), () => {
                            window.removeEventListener("visibilitychange", e)
                        }
                    }
                })
            }
        });
    t.s(["focusManager", () => l])
}, 371622, 964463, 159337, t => {
    "use strict";
    var e, r, i, n = t.i(708347),
        s = t.i(376054),
        o = t.i(136927),
        a = t.i(550475),
        u = t.i(423216),
        l = t.i(879994),
        h = new(e = new WeakMap, r = new WeakMap, i = new WeakMap, class extends u.Subscribable {
            onSubscribe() {
                (0, s._)(this, r) || this.setEventListener((0, s._)(this, i))
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || (null == (t = (0, s._)(this, r)) || t.call(this), (0, a._)(this, r, void 0))
            }
            setEventListener(t) {
                var e;
                (0, a._)(this, i, t), null == (e = (0, s._)(this, r)) || e.call(this), (0, a._)(this, r, t(this.setOnline.bind(this)))
            }
            setOnline(t) {
                (0, s._)(this, e) !== t && ((0, a._)(this, e, t), this.listeners.forEach(e => {
                    e(t)
                }))
            }
            isOnline() {
                return (0, s._)(this, e)
            }
            constructor() {
                super(), (0, o._)(this, e, {
                    writable: !0,
                    value: !0
                }), (0, o._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, o._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, i, t => {
                    if (!l.isServer && window.addEventListener) {
                        let e = () => t(!0),
                            r = () => t(!1);
                        return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                            window.removeEventListener("online", e), window.removeEventListener("offline", r)
                        }
                    }
                })
            }
        });

    function f() {
        let t, e, r = new Promise((r, i) => {
            t = r, e = i
        });

        function i(t) {
            Object.assign(r, t), delete r.resolve, delete r.reject
        }
        return r.status = "pending", r.catch(() => {}), r.resolve = e => {
            i({
                status: "fulfilled",
                value: e
            }), t(e)
        }, r.reject = t => {
            i({
                status: "rejected",
                reason: t
            }), e(t)
        }, r
    }

    function c(t) {
        return Math.min(1e3 * 2 ** t, 3e4)
    }

    function p(t) {
        return (null != t ? t : "online") !== "online" || h.isOnline()
    }
    t.s(["onlineManager", () => h], 964463), t.s(["pendingThenable", () => f], 159337);
    var d = class extends Error {
        constructor(t) {
            super("CancelledError"), this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
        }
    };

    function y(t) {
        let e, r = !1,
            i = 0,
            s = f(),
            o = () => n.focusManager.isFocused() && ("always" === t.networkMode || h.isOnline()) && t.canRun(),
            a = () => p(t.networkMode) && t.canRun(),
            u = t => {
                "pending" === s.status && (null == e || e(), s.resolve(t))
            },
            y = t => {
                "pending" === s.status && (null == e || e(), s.reject(t))
            },
            v = () => new Promise(r => {
                var i;
                e = t => {
                    ("pending" !== s.status || o()) && r(t)
                }, null == (i = t.onPause) || i.call(t)
            }).then(() => {
                if (e = void 0, "pending" === s.status) {
                    var r;
                    null == (r = t.onContinue) || r.call(t)
                }
            }),
            g = () => {
                let e;
                if ("pending" !== s.status) return;
                let n = 0 === i ? t.initialPromise : void 0;
                try {
                    e = null != n ? n : t.fn()
                } catch (t) {
                    e = Promise.reject(t)
                }
                Promise.resolve(e).then(u).catch(e => {
                    var n, a, u;
                    if ("pending" !== s.status) return;
                    let h = null != (a = t.retry) ? a : 3 * !l.isServer,
                        f = null != (u = t.retryDelay) ? u : c,
                        p = "function" == typeof f ? f(i, e) : f,
                        d = !0 === h || "number" == typeof h && i < h || "function" == typeof h && h(i, e);
                    r || !d ? y(e) : (i++, null == (n = t.onFail) || n.call(t, i, e), (0, l.sleep)(p).then(() => o() ? void 0 : v()).then(() => {
                        r ? y(e) : g()
                    }))
                })
            };
        return {
            promise: s,
            status: () => s.status,
            cancel: e => {
                if ("pending" === s.status) {
                    var r;
                    let i = new d(e);
                    y(i), null == (r = t.onCancel) || r.call(t, i)
                }
            },
            continue: () => (null == e || e(), s),
            cancelRetry: () => {
                r = !0
            },
            continueRetry: () => {
                r = !1
            },
            canStart: a,
            start: () => (a() ? g() : v().then(g), s)
        }
    }
    t.s(["CancelledError", () => d, "canFetch", () => p, "createRetryer", () => y], 371622)
}, 556683, t => {
    "use strict";
    var e, r = t.i(376054),
        i = t.i(136927),
        n = t.i(550475),
        s = t.i(457765),
        o = t.i(879994),
        a = (e = new WeakMap, class {
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, o.isValidTimeout)(this.gcTime) && (0, n._)(this, e, s.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(t) {
                this.gcTime = Math.max(this.gcTime || 0, null != t ? t : o.isServer ? 1 / 0 : 3e5)
            }
            clearGcTimeout() {
                (0, r._)(this, e) && (s.timeoutManager.clearTimeout((0, r._)(this, e)), (0, n._)(this, e, void 0))
            }
            constructor() {
                (0, i._)(this, e, {
                    writable: !0,
                    value: void 0
                })
            }
        });
    t.s(["Removable", () => a])
}, 87147, t => {
    "use strict";
    var e, r, i, n, s, o, a, u, l = t.i(376054),
        h = t.i(136927),
        f = t.i(550475),
        c = t.i(42297),
        p = t.i(474754),
        d = t.i(879994),
        y = t.i(318459),
        v = t.i(371622),
        g = t.i(556683),
        b = (e = new WeakMap, r = new WeakMap, i = new WeakMap, n = new WeakMap, s = new WeakMap, o = new WeakMap, a = new WeakMap, u = new WeakSet, class extends g.Removable {
            get meta() {
                return this.options.meta
            }
            get promise() {
                var t;
                return null == (t = (0, l._)(this, s)) ? void 0 : t.promise
            }
            setOptions(t) {
                if (this.options = { ...(0, l._)(this, o),
                        ...t
                    }, this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                    let t = _(this.options);
                    void 0 !== t.data && (this.setState(w(t.data, t.dataUpdatedAt)), (0, f._)(this, e, t))
                }
            }
            optionalRemove() {
                this.observers.length || "idle" !== this.state.fetchStatus || (0, l._)(this, i).remove(this)
            }
            setData(t, e) {
                let r = (0, d.replaceData)(this.state.data, t, this.options);
                return (0, c._)(this, u, E).call(this, {
                    data: r,
                    type: "success",
                    dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                    manual: null == e ? void 0 : e.manual
                }), r
            }
            setState(t, e) {
                (0, c._)(this, u, E).call(this, {
                    type: "setState",
                    state: t,
                    setStateOptions: e
                })
            }
            cancel(t) {
                var e, r;
                let i = null == (e = (0, l._)(this, s)) ? void 0 : e.promise;
                return null == (r = (0, l._)(this, s)) || r.cancel(t), i ? i.then(d.noop).catch(d.noop) : Promise.resolve()
            }
            destroy() {
                super.destroy(), this.cancel({
                    silent: !0
                })
            }
            reset() {
                this.destroy(), this.setState((0, l._)(this, e))
            }
            isActive() {
                return this.observers.some(t => !1 !== (0, d.resolveEnabled)(t.options.enabled, this))
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === d.skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            }
            isStatic() {
                return this.getObserversCount() > 0 && this.observers.some(t => "static" === (0, d.resolveStaleTime)(t.options.staleTime, this))
            }
            isStale() {
                return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
            }
            isStaleByTime() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return void 0 === this.state.data || "static" !== t && (!!this.state.isInvalidated || !(0, d.timeUntilStale)(this.state.dataUpdatedAt, t))
            }
            onFocus() {
                var t;
                let e = this.observers.find(t => t.shouldFetchOnWindowFocus());
                null == e || e.refetch({
                    cancelRefetch: !1
                }), null == (t = (0, l._)(this, s)) || t.continue()
            }
            onOnline() {
                var t;
                let e = this.observers.find(t => t.shouldFetchOnReconnect());
                null == e || e.refetch({
                    cancelRefetch: !1
                }), null == (t = (0, l._)(this, s)) || t.continue()
            }
            addObserver(t) {
                this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), (0, l._)(this, i).notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
            }
            removeObserver(t) {
                this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || ((0, l._)(this, s) && ((0, l._)(this, a) ? (0, l._)(this, s).cancel({
                    revert: !0
                }) : (0, l._)(this, s).cancelRetry()), this.scheduleGc()), (0, l._)(this, i).notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
            }
            getObserversCount() {
                return this.observers.length
            }
            invalidate() {
                this.state.isInvalidated || (0, c._)(this, u, E).call(this, {
                    type: "invalidate"
                })
            }
            async fetch(t, e) {
                var o, h, p, y, g, b, m, w, _, S, A, x;
                let T;
                if ("idle" !== this.state.fetchStatus && (null == (o = (0, l._)(this, s)) ? void 0 : o.status()) !== "rejected") {
                    if (void 0 !== this.state.data && (null == e ? void 0 : e.cancelRefetch)) this.cancel({
                        silent: !0
                    });
                    else if ((0, l._)(this, s)) return (0, l._)(this, s).continueRetry(), (0, l._)(this, s).promise
                }
                if (t && this.setOptions(t), !this.options.queryFn) {
                    let t = this.observers.find(t => t.options.queryFn);
                    t && this.setOptions(t.options)
                }
                let O = new AbortController,
                    C = t => {
                        Object.defineProperty(t, "signal", {
                            enumerable: !0,
                            get: () => ((0, f._)(this, a, !0), O.signal)
                        })
                    },
                    B = () => {
                        let t, r = (0, d.ensureQueryFn)(this.options, e),
                            i = (C(t = {
                                client: (0, l._)(this, n),
                                queryKey: this.queryKey,
                                meta: this.meta
                            }), t);
                        return ((0, f._)(this, a, !1), this.options.persister) ? this.options.persister(r, i, this) : r(i)
                    },
                    M = (C(T = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: (0, l._)(this, n),
                        state: this.state,
                        fetchFn: B
                    }), T);
                null == (h = this.options.behavior) || h.onFetch(M, this), (0, f._)(this, r, this.state), ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (p = M.fetchOptions) ? void 0 : p.meta)) && (0, c._)(this, u, E).call(this, {
                    type: "fetch",
                    meta: null == (y = M.fetchOptions) ? void 0 : y.meta
                }), (0, f._)(this, s, (0, v.createRetryer)({
                    initialPromise: null == e ? void 0 : e.initialPromise,
                    fn: M.fetchFn,
                    onCancel: t => {
                        t instanceof v.CancelledError && t.revert && this.setState({ ...(0, l._)(this, r),
                            fetchStatus: "idle"
                        }), O.abort()
                    },
                    onFail: (t, e) => {
                        (0, c._)(this, u, E).call(this, {
                            type: "failed",
                            failureCount: t,
                            error: e
                        })
                    },
                    onPause: () => {
                        (0, c._)(this, u, E).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        (0, c._)(this, u, E).call(this, {
                            type: "continue"
                        })
                    },
                    retry: M.options.retry,
                    retryDelay: M.options.retryDelay,
                    networkMode: M.options.networkMode,
                    canRun: () => !0
                }));
                try {
                    let t = await (0, l._)(this, s).start();
                    if (void 0 === t) throw Error("".concat(this.queryHash, " data is undefined"));
                    return this.setData(t), null == (g = (b = (0, l._)(this, i).config).onSuccess) || g.call(b, t, this), null == (m = (w = (0, l._)(this, i).config).onSettled) || m.call(w, t, this.state.error, this), t
                } catch (t) {
                    if (t instanceof v.CancelledError) {
                        if (t.silent) return (0, l._)(this, s).promise;
                        else if (t.revert) {
                            if (void 0 === this.state.data) throw t;
                            return this.state.data
                        }
                    }
                    throw (0, c._)(this, u, E).call(this, {
                        type: "error",
                        error: t
                    }), null == (_ = (S = (0, l._)(this, i).config).onError) || _.call(S, t, this), null == (A = (x = (0, l._)(this, i).config).onSettled) || A.call(x, this.state.data, t, this), t
                } finally {
                    this.scheduleGc()
                }
            }
            constructor(t) {
                var c;
                super(), (0, p._)(this, u), (0, h._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, s, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, o, {
                    writable: !0,
                    value: void 0
                }), (0, h._)(this, a, {
                    writable: !0,
                    value: void 0
                }), (0, f._)(this, a, !1), (0, f._)(this, o, t.defaultOptions), this.setOptions(t.options), this.observers = [], (0, f._)(this, n, t.client), (0, f._)(this, i, (0, l._)(this, n).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, (0, f._)(this, e, _(this.options)), this.state = null != (c = t.state) ? c : (0, l._)(this, e), this.scheduleGc()
            }
        });

    function m(t, e) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: (0, v.canFetch)(e.networkMode) ? "fetching" : "paused",
            ...void 0 === t && {
                error: null,
                status: "pending"
            }
        }
    }

    function w(t, e) {
        return {
            data: t,
            dataUpdatedAt: null != e ? e : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function _(t) {
        let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
            r = void 0 !== e,
            i = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
        return {
            data: e,
            dataUpdateCount: 0,
            dataUpdatedAt: r ? null != i ? i : Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: r ? "success" : "pending",
            fetchStatus: "idle"
        }
    }

    function E(t) {
        let e = e => {
            switch (t.type) {
                case "failed":
                    return { ...e,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...e,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...e,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    var i;
                    return { ...e,
                        ...m(e.data, this.options),
                        fetchMeta: null != (i = t.meta) ? i : null
                    };
                case "success":
                    let n = { ...e,
                        ...w(t.data, t.dataUpdatedAt),
                        dataUpdateCount: e.dataUpdateCount + 1,
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return (0, f._)(this, r, t.manual ? n : void 0), n;
                case "error":
                    let s = t.error;
                    return { ...e,
                        error: s,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        fetchFailureReason: s,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...e,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...e,
                        ...t.state
                    }
            }
        };
        this.state = e(this.state), y.notifyManager.batch(() => {
            this.observers.forEach(t => {
                t.onQueryUpdate()
            }), (0, l._)(this, i).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }
    t.s(["Query", () => b, "fetchState", () => m])
}, 614988, t => {
    "use strict";
    var e, r, i, n, s, o = t.i(376054),
        a = t.i(136927),
        u = t.i(550475),
        l = t.i(42297),
        h = t.i(474754),
        f = t.i(318459),
        c = t.i(556683),
        p = t.i(371622),
        d = (e = new WeakMap, r = new WeakMap, i = new WeakMap, n = new WeakMap, s = new WeakSet, class extends c.Removable {
            setOptions(t) {
                this.options = t, this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(t) {
                (0, o._)(this, r).includes(t) || ((0, o._)(this, r).push(t), this.clearGcTimeout(), (0, o._)(this, i).notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: t
                }))
            }
            removeObserver(t) {
                (0, u._)(this, r, (0, o._)(this, r).filter(e => e !== t)), this.scheduleGc(), (0, o._)(this, i).notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: t
                })
            }
            optionalRemove() {
                (0, o._)(this, r).length || ("pending" === this.state.status ? this.scheduleGc() : (0, o._)(this, i).remove(this))
            }
            continue () {
                var t, e;
                return null != (e = null == (t = (0, o._)(this, n)) ? void 0 : t.continue()) ? e : this.execute(this.state.variables)
            }
            async execute(t) {
                var r, a, h, f, c, d, y, g, b, m, w, _, E, S, A, x, T, O, C, B, M;
                let U = () => {
                        (0, l._)(this, s, v).call(this, {
                            type: "continue"
                        })
                    },
                    R = {
                        client: (0, o._)(this, e),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (0, u._)(this, n, (0, p.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t, R) : Promise.reject(Error("No mutationFn found")),
                    onFail: (t, e) => {
                        (0, l._)(this, s, v).call(this, {
                            type: "failed",
                            failureCount: t,
                            error: e
                        })
                    },
                    onPause: () => {
                        (0, l._)(this, s, v).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: U,
                    retry: null != (r = this.options.retry) ? r : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => (0, o._)(this, i).canRun(this)
                }));
                let k = "pending" === this.state.status,
                    j = !(0, o._)(this, n).canStart();
                try {
                    if (k) U();
                    else {
                        (0, l._)(this, s, v).call(this, {
                            type: "pending",
                            variables: t,
                            isPaused: j
                        }), await (null == (m = (w = (0, o._)(this, i).config).onMutate) ? void 0 : m.call(w, t, this, R));
                        let e = await (null == (_ = (E = this.options).onMutate) ? void 0 : _.call(E, t, R));
                        e !== this.state.context && (0, l._)(this, s, v).call(this, {
                            type: "pending",
                            context: e,
                            variables: t,
                            isPaused: j
                        })
                    }
                    let e = await (0, o._)(this, n).start();
                    return await (null == (a = (h = (0, o._)(this, i).config).onSuccess) ? void 0 : a.call(h, e, t, this.state.context, this, R)), await (null == (f = (c = this.options).onSuccess) ? void 0 : f.call(c, e, t, this.state.context, R)), await (null == (d = (y = (0, o._)(this, i).config).onSettled) ? void 0 : d.call(y, e, null, this.state.variables, this.state.context, this, R)), await (null == (g = (b = this.options).onSettled) ? void 0 : g.call(b, e, null, t, this.state.context, R)), (0, l._)(this, s, v).call(this, {
                        type: "success",
                        data: e
                    }), e
                } catch (e) {
                    try {
                        throw await (null == (S = (A = (0, o._)(this, i).config).onError) ? void 0 : S.call(A, e, t, this.state.context, this, R)), await (null == (x = (T = this.options).onError) ? void 0 : x.call(T, e, t, this.state.context, R)), await (null == (O = (C = (0, o._)(this, i).config).onSettled) ? void 0 : O.call(C, void 0, e, this.state.variables, this.state.context, this, R)), await (null == (B = (M = this.options).onSettled) ? void 0 : B.call(M, void 0, e, t, this.state.context, R)), e
                    } finally {
                        (0, l._)(this, s, v).call(this, {
                            type: "error",
                            error: e
                        })
                    }
                } finally {
                    (0, o._)(this, i).runNext(this)
                }
            }
            constructor(t) {
                super(), (0, h._)(this, s), (0, a._)(this, e, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, r, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, i, {
                    writable: !0,
                    value: void 0
                }), (0, a._)(this, n, {
                    writable: !0,
                    value: void 0
                }), (0, u._)(this, e, t.client), this.mutationId = t.mutationId, (0, u._)(this, i, t.mutationCache), (0, u._)(this, r, []), this.state = t.state || y(), this.setOptions(t.options), this.scheduleGc()
            }
        });

    function y() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        }
    }

    function v(t) {
        this.state = (e => {
            switch (t.type) {
                case "failed":
                    return { ...e,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...e,
                        isPaused: !0
                    };
                case "continue":
                    return { ...e,
                        isPaused: !1
                    };
                case "pending":
                    return { ...e,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...e,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...e,
                        data: void 0,
                        error: t.error,
                        failureCount: e.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        })(this.state), f.notifyManager.batch(() => {
            (0, o._)(this, r).forEach(e => {
                e.onMutationUpdate(t)
            }), (0, o._)(this, i).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }
    t.s(["Mutation", () => d, "getDefaultState", () => y])
}, 940948, t => {
    "use strict";
    var e = t.i(251570),
        r = t.i(483632),
        i = e.createContext(void 0),
        n = t => {
            let r = e.useContext(i);
            if (t) return t;
            if (!r) throw Error("No QueryClient set, use QueryClientProvider to set one");
            return r
        },
        s = t => {
            let {
                client: n,
                children: s
            } = t;
            return e.useEffect(() => (n.mount(), () => {
                n.unmount()
            }), [n]), (0, r.jsx)(i.Provider, {
                value: n,
                children: s
            })
        };
    t.s(["QueryClientProvider", () => s, "useQueryClient", () => n])
}]);

//# debugId=f2d8caf0-2132-a3cd-31a9-9874d9bab88a
//# sourceMappingURL=70309192c14f80a7.js.map