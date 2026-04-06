;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "af3727a0-2169-ad1b-1642-60808d48e84d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 796782, t => {
    "use strict";
    var e = t.i(483632);
    t.i(307017);
    var r = t.i(647017),
        i = t.i(878262),
        n = t.i(251570);
    t.i(901407);
    let o = n.forwardRef(function(t, n) {
        let {
            portalled: o = !0,
            portalRef: a,
            ...s
        } = t;
        return (0, e.jsx)(i.Portal, {
            disabled: !o,
            container: a,
            children: (0, e.jsx)(r.Menu.Positioner, {
                children: (0, e.jsx)(r.Menu.Content, {
                    ref: n,
                    ...s
                })
            })
        })
    });
    r.Menu.RadioItemGroup, r.Menu.ContextTrigger;
    let a = r.Menu.Root;
    r.Menu.Separator;
    let s = r.Menu.Item;
    r.Menu.ItemText, r.Menu.ItemCommand;
    let c = r.Menu.Trigger;
    t.s(["MenuContent", 0, o, "MenuItem", 0, s, "MenuRoot", 0, a, "MenuTrigger", 0, c])
}, 840265, (t, e, r) => {
    var i = t.i(971447);
    t.e, e.exports = (() => {
        var t = {
                873: (t, e) => {
                    var r, i, n = function() {
                        var t, e, r = function(t, e) {
                            var r = t,
                                i = a[e],
                                n = null,
                                o = 0,
                                c = null,
                                w = [],
                                m = {},
                                _ = function(t, e) {
                                    n = function(t) {
                                        for (var e = Array(t), r = 0; r < t; r += 1) {
                                            e[r] = Array(t);
                                            for (var i = 0; i < t; i += 1) e[r][i] = null
                                        }
                                        return e
                                    }(o = 4 * r + 17), x(0, 0), x(o - 7, 0), x(0, o - 7), b(), y(), S(t, e), r >= 7 && C(t), null == c && (c = k(r, i, w)), j(c, e)
                                },
                                x = function(t, e) {
                                    for (var r = -1; r <= 7; r += 1)
                                        if (!(t + r <= -1 || o <= t + r))
                                            for (var i = -1; i <= 7; i += 1) e + i <= -1 || o <= e + i || (n[t + r][e + i] = 0 <= r && r <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= i && i <= 4)
                                },
                                y = function() {
                                    for (var t = 8; t < o - 8; t += 1) null == n[t][6] && (n[t][6] = t % 2 == 0);
                                    for (var e = 8; e < o - 8; e += 1) null == n[6][e] && (n[6][e] = e % 2 == 0)
                                },
                                b = function() {
                                    for (var t = s.getPatternPosition(r), e = 0; e < t.length; e += 1)
                                        for (var i = 0; i < t.length; i += 1) {
                                            var o = t[e],
                                                a = t[i];
                                            if (null == n[o][a])
                                                for (var c = -2; c <= 2; c += 1)
                                                    for (var d = -2; d <= 2; d += 1) n[o + c][a + d] = -2 == c || 2 == c || -2 == d || 2 == d || 0 == c && 0 == d
                                        }
                                },
                                C = function(t) {
                                    for (var e = s.getBCHTypeNumber(r), i = 0; i < 18; i += 1) {
                                        var a = !t && 1 == (e >> i & 1);
                                        n[Math.floor(i / 3)][i % 3 + o - 8 - 3] = a
                                    }
                                    for (i = 0; i < 18; i += 1) a = !t && 1 == (e >> i & 1), n[i % 3 + o - 8 - 3][Math.floor(i / 3)] = a
                                },
                                S = function(t, e) {
                                    for (var r = i << 3 | e, a = s.getBCHTypeInfo(r), c = 0; c < 15; c += 1) {
                                        var d = !t && 1 == (a >> c & 1);
                                        c < 6 ? n[c][8] = d : c < 8 ? n[c + 1][8] = d : n[o - 15 + c][8] = d
                                    }
                                    for (c = 0; c < 15; c += 1) d = !t && 1 == (a >> c & 1), c < 8 ? n[8][o - c - 1] = d : c < 9 ? n[8][15 - c - 1 + 1] = d : n[8][15 - c - 1] = d;
                                    n[o - 8][8] = !t
                                },
                                j = function(t, e) {
                                    for (var r = -1, i = o - 1, a = 7, c = 0, d = s.getMaskFunction(e), l = o - 1; l > 0; l -= 2)
                                        for (6 == l && (l -= 1);;) {
                                            for (var h = 0; h < 2; h += 1)
                                                if (null == n[i][l - h]) {
                                                    var u = !1;
                                                    c < t.length && (u = 1 == (t[c] >>> a & 1)), d(i, l - h) && (u = !u), n[i][l - h] = u, -1 == (a -= 1) && (c += 1, a = 7)
                                                }
                                            if ((i += r) < 0 || o <= i) {
                                                i -= r, r = -r;
                                                break
                                            }
                                        }
                                },
                                k = function(t, e, r) {
                                    for (var i = l.getRSBlocks(t, e), n = h(), o = 0; o < r.length; o += 1) {
                                        var a = r[o];
                                        n.put(a.getMode(), 4), n.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(n)
                                    }
                                    var c = 0;
                                    for (o = 0; o < i.length; o += 1) c += i[o].dataCount;
                                    if (n.getLengthInBits() > 8 * c) throw "code length overflow. (" + n.getLengthInBits() + ">" + 8 * c + ")";
                                    for (n.getLengthInBits() + 4 <= 8 * c && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(!1);
                                    for (; !(n.getLengthInBits() >= 8 * c || (n.put(236, 8), n.getLengthInBits() >= 8 * c));) n.put(17, 8);
                                    return function(t, e) {
                                        for (var r = 0, i = 0, n = 0, o = Array(e.length), a = Array(e.length), c = 0; c < e.length; c += 1) {
                                            var l = e[c].dataCount,
                                                h = e[c].totalCount - l;
                                            i = Math.max(i, l), n = Math.max(n, h), o[c] = Array(l);
                                            for (var u = 0; u < o[c].length; u += 1) o[c][u] = 255 & t.getBuffer()[u + r];
                                            r += l;
                                            var g = s.getErrorCorrectPolynomial(h),
                                                p = d(o[c], g.getLength() - 1).mod(g);
                                            for (a[c] = Array(g.getLength() - 1), u = 0; u < a[c].length; u += 1) {
                                                var f = u + p.getLength() - a[c].length;
                                                a[c][u] = f >= 0 ? p.getAt(f) : 0
                                            }
                                        }
                                        var w = 0;
                                        for (u = 0; u < e.length; u += 1) w += e[u].totalCount;
                                        var m = Array(w),
                                            v = 0;
                                        for (u = 0; u < i; u += 1)
                                            for (c = 0; c < e.length; c += 1) u < o[c].length && (m[v] = o[c][u], v += 1);
                                        for (u = 0; u < n; u += 1)
                                            for (c = 0; c < e.length; c += 1) u < a[c].length && (m[v] = a[c][u], v += 1);
                                        return m
                                    }(n, i)
                                };
                            m.addData = function(t, e) {
                                var r = null;
                                switch (e = e || "Byte") {
                                    case "Numeric":
                                        r = u(t);
                                        break;
                                    case "Alphanumeric":
                                        r = g(t);
                                        break;
                                    case "Byte":
                                        r = p(t);
                                        break;
                                    case "Kanji":
                                        r = f(t);
                                        break;
                                    default:
                                        throw "mode:" + e
                                }
                                w.push(r), c = null
                            }, m.isDark = function(t, e) {
                                if (t < 0 || o <= t || e < 0 || o <= e) throw t + "," + e;
                                return n[t][e]
                            }, m.getModuleCount = function() {
                                return o
                            }, m.make = function() {
                                if (r < 1) {
                                    for (var t = 1; t < 40; t++) {
                                        for (var e = l.getRSBlocks(t, i), n = h(), o = 0; o < w.length; o++) {
                                            var a = w[o];
                                            n.put(a.getMode(), 4), n.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(n)
                                        }
                                        var c = 0;
                                        for (o = 0; o < e.length; o++) c += e[o].dataCount;
                                        if (n.getLengthInBits() <= 8 * c) break
                                    }
                                    r = t
                                }
                                _(!1, function() {
                                    for (var t = 0, e = 0, r = 0; r < 8; r += 1) {
                                        _(!0, r);
                                        var i = s.getLostPoint(m);
                                        (0 == r || t > i) && (t = i, e = r)
                                    }
                                    return e
                                }())
                            }, m.createTableTag = function(t, e) {
                                t = t || 2;
                                var r = "";
                                r += '<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' + (e = void 0 === e ? 4 * t : e) + 'px;"><tbody>';
                                for (var i = 0; i < m.getModuleCount(); i += 1) {
                                    r += "<tr>";
                                    for (var n = 0; n < m.getModuleCount(); n += 1) r += '<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' + t + "px; height: " + t + "px; background-color: " + (m.isDark(i, n) ? "#000000" : "#ffffff") + ';"/>';
                                    r += "</tr>"
                                }
                                return (r += "</tbody>") + "</table>"
                            }, m.createSvgTag = function(t, e, r, i) {
                                var n = {};
                                "object" == typeof arguments[0] && (t = (n = arguments[0]).cellSize, e = n.margin, r = n.alt, i = n.title), t = t || 2, e = void 0 === e ? 4 * t : e, (r = "string" == typeof r ? {
                                    text: r
                                } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-description" : null, (i = "string" == typeof i ? {
                                    text: i
                                } : i || {}).text = i.text || null, i.id = i.text ? i.id || "qrcode-title" : null;
                                var o, a, s, c, d = m.getModuleCount() * t + 2 * e,
                                    l = "";
                                for (c = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", l += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', l += n.scalable ? "" : ' width="' + d + 'px" height="' + d + 'px"', l += ' viewBox="0 0 ' + d + " " + d + '" ', l += ' preserveAspectRatio="xMinYMin meet"', l += i.text || r.text ? ' role="img" aria-labelledby="' + O([i.id, r.id].join(" ").trim()) + '"' : "", l += ">", l += i.text ? '<title id="' + O(i.id) + '">' + O(i.text) + "</title>" : "", l += r.text ? '<description id="' + O(r.id) + '">' + O(r.text) + "</description>" : "", l += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', l += '<path d="', a = 0; a < m.getModuleCount(); a += 1)
                                    for (s = a * t + e, o = 0; o < m.getModuleCount(); o += 1) m.isDark(a, o) && (l += "M" + (o * t + e) + "," + s + c);
                                return (l += '" stroke="transparent" fill="black"/>') + "</svg>"
                            }, m.createDataURL = function(t, e) {
                                t = t || 2, e = void 0 === e ? 4 * t : e;
                                var r = m.getModuleCount() * t + 2 * e,
                                    i = e,
                                    n = r - e;
                                return v(r, r, function(e, r) {
                                    if (i <= e && e < n && i <= r && r < n) {
                                        var o = Math.floor((e - i) / t),
                                            a = Math.floor((r - i) / t);
                                        return +!m.isDark(a, o)
                                    }
                                    return 1
                                })
                            }, m.createImgTag = function(t, e, r) {
                                t = t || 2, e = void 0 === e ? 4 * t : e;
                                var i = m.getModuleCount() * t + 2 * e,
                                    n = "";
                                return n += "<img", n += ' src="', n += m.createDataURL(t, e), n += '"', n += ' width="', n += i, n += '"', n += ' height="', n += i, n += '"', r && (n += ' alt="', n += O(r), n += '"'), n + "/>"
                            };
                            var O = function(t) {
                                for (var e = "", r = 0; r < t.length; r += 1) {
                                    var i = t.charAt(r);
                                    switch (i) {
                                        case "<":
                                            e += "&lt;";
                                            break;
                                        case ">":
                                            e += "&gt;";
                                            break;
                                        case "&":
                                            e += "&amp;";
                                            break;
                                        case '"':
                                            e += "&quot;";
                                            break;
                                        default:
                                            e += i
                                    }
                                }
                                return e
                            };
                            return m.createASCII = function(t, e) {
                                if ((t = t || 1) < 2) return function(t) {
                                    t = void 0 === t ? 2 : t;
                                    var e, r, i, n, o, a = +m.getModuleCount() + 2 * t,
                                        s = t,
                                        c = a - t,
                                        d = {
                                            "██": "█",
                                            "█ ": "▀",
                                            " █": "▄",
                                            "  ": " "
                                        },
                                        l = {
                                            "██": "▀",
                                            "█ ": "▀",
                                            " █": " ",
                                            "  ": " "
                                        },
                                        h = "";
                                    for (e = 0; e < a; e += 2) {
                                        for (i = Math.floor((e - s) / 1), n = Math.floor((e + 1 - s) / 1), r = 0; r < a; r += 1) o = "█", s <= r && r < c && s <= e && e < c && m.isDark(i, Math.floor((r - s) / 1)) && (o = " "), s <= r && r < c && s <= e + 1 && e + 1 < c && m.isDark(n, Math.floor((r - s) / 1)) ? o += " " : o += "█", h += t < 1 && e + 1 >= c ? l[o] : d[o];
                                        h += "\n"
                                    }
                                    return a % 2 && t > 0 ? h.substring(0, h.length - a - 1) + Array(a + 1).join("▀") : h.substring(0, h.length - 1)
                                }(e);
                                t -= 1, e = void 0 === e ? 2 * t : e;
                                var r, i, n, o, a = m.getModuleCount() * t + 2 * e,
                                    s = e,
                                    c = a - e,
                                    d = Array(t + 1).join("██"),
                                    l = Array(t + 1).join("  "),
                                    h = "",
                                    u = "";
                                for (r = 0; r < a; r += 1) {
                                    for (n = Math.floor((r - s) / t), u = "", i = 0; i < a; i += 1) o = 1, s <= i && i < c && s <= r && r < c && m.isDark(n, Math.floor((i - s) / t)) && (o = 0), u += o ? d : l;
                                    for (n = 0; n < t; n += 1) h += u + "\n"
                                }
                                return h.substring(0, h.length - 1)
                            }, m.renderTo2dContext = function(t, e) {
                                e = e || 2;
                                for (var r = m.getModuleCount(), i = 0; i < r; i++)
                                    for (var n = 0; n < r; n++) t.fillStyle = m.isDark(i, n) ? "black" : "white", t.fillRect(i * e, n * e, e, e)
                            }, m
                        };
                        r.stringToBytes = (r.stringToBytesFuncs = {
                            default: function(t) {
                                for (var e = [], r = 0; r < t.length; r += 1) {
                                    var i = t.charCodeAt(r);
                                    e.push(255 & i)
                                }
                                return e
                            }
                        }).default, r.createStringToBytes = function(t, e) {
                            var r = function() {
                                for (var r = m(t), i = function() {
                                        var t = r.read();
                                        if (-1 == t) throw "eof";
                                        return t
                                    }, n = 0, o = {};;) {
                                    var a = r.read();
                                    if (-1 == a) break;
                                    var s = i(),
                                        c = i() << 8 | i();
                                    o[String.fromCharCode(a << 8 | s)] = c, n += 1
                                }
                                if (n != e) throw n + " != " + e;
                                return o
                            }();
                            return function(t) {
                                for (var e = [], i = 0; i < t.length; i += 1) {
                                    var n = t.charCodeAt(i);
                                    if (n < 128) e.push(n);
                                    else {
                                        var o = r[t.charAt(i)];
                                        "number" == typeof o ? (255 & o) == o ? e.push(o) : (e.push(o >>> 8), e.push(255 & o)) : e.push(63)
                                    }
                                }
                                return e
                            }
                        };
                        var i, n, o, a = {
                                L: 1,
                                M: 0,
                                Q: 3,
                                H: 2
                            },
                            s = (i = [
                                [],
                                [6, 18],
                                [6, 22],
                                [6, 26],
                                [6, 30],
                                [6, 34],
                                [6, 22, 38],
                                [6, 24, 42],
                                [6, 26, 46],
                                [6, 28, 50],
                                [6, 30, 54],
                                [6, 32, 58],
                                [6, 34, 62],
                                [6, 26, 46, 66],
                                [6, 26, 48, 70],
                                [6, 26, 50, 74],
                                [6, 30, 54, 78],
                                [6, 30, 56, 82],
                                [6, 30, 58, 86],
                                [6, 34, 62, 90],
                                [6, 28, 50, 72, 94],
                                [6, 26, 50, 74, 98],
                                [6, 30, 54, 78, 102],
                                [6, 28, 54, 80, 106],
                                [6, 32, 58, 84, 110],
                                [6, 30, 58, 86, 114],
                                [6, 34, 62, 90, 118],
                                [6, 26, 50, 74, 98, 122],
                                [6, 30, 54, 78, 102, 126],
                                [6, 26, 52, 78, 104, 130],
                                [6, 30, 56, 82, 108, 134],
                                [6, 34, 60, 86, 112, 138],
                                [6, 30, 58, 86, 114, 142],
                                [6, 34, 62, 90, 118, 146],
                                [6, 30, 54, 78, 102, 126, 150],
                                [6, 24, 50, 76, 102, 128, 154],
                                [6, 28, 54, 80, 106, 132, 158],
                                [6, 32, 58, 84, 110, 136, 162],
                                [6, 26, 54, 82, 110, 138, 166],
                                [6, 30, 58, 86, 114, 142, 170]
                            ], o = function(t) {
                                for (var e = 0; 0 != t;) e += 1, t >>>= 1;
                                return e
                            }, (n = {}).getBCHTypeInfo = function(t) {
                                for (var e = t << 10; o(e) - o(1335) >= 0;) e ^= 1335 << o(e) - o(1335);
                                return 21522 ^ (t << 10 | e)
                            }, n.getBCHTypeNumber = function(t) {
                                for (var e = t << 12; o(e) - o(7973) >= 0;) e ^= 7973 << o(e) - o(7973);
                                return t << 12 | e
                            }, n.getPatternPosition = function(t) {
                                return i[t - 1]
                            }, n.getMaskFunction = function(t) {
                                switch (t) {
                                    case 0:
                                        return function(t, e) {
                                            return (t + e) % 2 == 0
                                        };
                                    case 1:
                                        return function(t, e) {
                                            return t % 2 == 0
                                        };
                                    case 2:
                                        return function(t, e) {
                                            return e % 3 == 0
                                        };
                                    case 3:
                                        return function(t, e) {
                                            return (t + e) % 3 == 0
                                        };
                                    case 4:
                                        return function(t, e) {
                                            return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0
                                        };
                                    case 5:
                                        return function(t, e) {
                                            return t * e % 2 + t * e % 3 == 0
                                        };
                                    case 6:
                                        return function(t, e) {
                                            return (t * e % 2 + t * e % 3) % 2 == 0
                                        };
                                    case 7:
                                        return function(t, e) {
                                            return (t * e % 3 + (t + e) % 2) % 2 == 0
                                        };
                                    default:
                                        throw "bad maskPattern:" + t
                                }
                            }, n.getErrorCorrectPolynomial = function(t) {
                                for (var e = d([1], 0), r = 0; r < t; r += 1) e = e.multiply(d([1, c.gexp(r)], 0));
                                return e
                            }, n.getLengthInBits = function(t, e) {
                                if (1 <= e && e < 10) switch (t) {
                                    case 1:
                                        return 10;
                                    case 2:
                                        return 9;
                                    case 4:
                                    case 8:
                                        return 8;
                                    default:
                                        throw "mode:" + t
                                }
                                if (e < 27) switch (t) {
                                    case 1:
                                        return 12;
                                    case 2:
                                        return 11;
                                    case 4:
                                        return 16;
                                    case 8:
                                        return 10;
                                    default:
                                        throw "mode:" + t
                                }
                                if (!(e < 41)) throw "type:" + e;
                                switch (t) {
                                    case 1:
                                        return 14;
                                    case 2:
                                        return 13;
                                    case 4:
                                        return 16;
                                    case 8:
                                        return 12;
                                    default:
                                        throw "mode:" + t
                                }
                            }, n.getLostPoint = function(t) {
                                for (var e = t.getModuleCount(), r = 0, i = 0; i < e; i += 1)
                                    for (var n = 0; n < e; n += 1) {
                                        for (var o = 0, a = t.isDark(i, n), s = -1; s <= 1; s += 1)
                                            if (!(i + s < 0 || e <= i + s))
                                                for (var c = -1; c <= 1; c += 1) n + c < 0 || e <= n + c || 0 == s && 0 == c || a == t.isDark(i + s, n + c) && (o += 1);
                                        o > 5 && (r += 3 + o - 5)
                                    }
                                for (i = 0; i < e - 1; i += 1)
                                    for (n = 0; n < e - 1; n += 1) {
                                        var d = 0;
                                        t.isDark(i, n) && (d += 1), t.isDark(i + 1, n) && (d += 1), t.isDark(i, n + 1) && (d += 1), t.isDark(i + 1, n + 1) && (d += 1), 0 != d && 4 != d || (r += 3)
                                    }
                                for (i = 0; i < e; i += 1)
                                    for (n = 0; n < e - 6; n += 1) t.isDark(i, n) && !t.isDark(i, n + 1) && t.isDark(i, n + 2) && t.isDark(i, n + 3) && t.isDark(i, n + 4) && !t.isDark(i, n + 5) && t.isDark(i, n + 6) && (r += 40);
                                for (n = 0; n < e; n += 1)
                                    for (i = 0; i < e - 6; i += 1) t.isDark(i, n) && !t.isDark(i + 1, n) && t.isDark(i + 2, n) && t.isDark(i + 3, n) && t.isDark(i + 4, n) && !t.isDark(i + 5, n) && t.isDark(i + 6, n) && (r += 40);
                                var l = 0;
                                for (n = 0; n < e; n += 1)
                                    for (i = 0; i < e; i += 1) t.isDark(i, n) && (l += 1);
                                return r + Math.abs(100 * l / e / e - 50) / 5 * 10
                            }, n),
                            c = function() {
                                for (var t = Array(256), e = Array(256), r = 0; r < 8; r += 1) t[r] = 1 << r;
                                for (r = 8; r < 256; r += 1) t[r] = t[r - 4] ^ t[r - 5] ^ t[r - 6] ^ t[r - 8];
                                for (r = 0; r < 255; r += 1) e[t[r]] = r;
                                return {
                                    glog: function(t) {
                                        if (t < 1) throw "glog(" + t + ")";
                                        return e[t]
                                    },
                                    gexp: function(e) {
                                        for (; e < 0;) e += 255;
                                        for (; e >= 256;) e -= 255;
                                        return t[e]
                                    }
                                }
                            }();

                        function d(t, e) {
                            if (void 0 === t.length) throw t.length + "/" + e;
                            var r = function() {
                                    for (var r = 0; r < t.length && 0 == t[r];) r += 1;
                                    for (var i = Array(t.length - r + e), n = 0; n < t.length - r; n += 1) i[n] = t[n + r];
                                    return i
                                }(),
                                i = {
                                    getAt: function(t) {
                                        return r[t]
                                    },
                                    getLength: function() {
                                        return r.length
                                    },
                                    multiply: function(t) {
                                        for (var e = Array(i.getLength() + t.getLength() - 1), r = 0; r < i.getLength(); r += 1)
                                            for (var n = 0; n < t.getLength(); n += 1) e[r + n] ^= c.gexp(c.glog(i.getAt(r)) + c.glog(t.getAt(n)));
                                        return d(e, 0)
                                    },
                                    mod: function(t) {
                                        if (i.getLength() - t.getLength() < 0) return i;
                                        for (var e = c.glog(i.getAt(0)) - c.glog(t.getAt(0)), r = Array(i.getLength()), n = 0; n < i.getLength(); n += 1) r[n] = i.getAt(n);
                                        for (n = 0; n < t.getLength(); n += 1) r[n] ^= c.gexp(c.glog(t.getAt(n)) + e);
                                        return d(r, 0).mod(t)
                                    }
                                };
                            return i
                        }
                        var l = (t = [
                                [1, 26, 19],
                                [1, 26, 16],
                                [1, 26, 13],
                                [1, 26, 9],
                                [1, 44, 34],
                                [1, 44, 28],
                                [1, 44, 22],
                                [1, 44, 16],
                                [1, 70, 55],
                                [1, 70, 44],
                                [2, 35, 17],
                                [2, 35, 13],
                                [1, 100, 80],
                                [2, 50, 32],
                                [2, 50, 24],
                                [4, 25, 9],
                                [1, 134, 108],
                                [2, 67, 43],
                                [2, 33, 15, 2, 34, 16],
                                [2, 33, 11, 2, 34, 12],
                                [2, 86, 68],
                                [4, 43, 27],
                                [4, 43, 19],
                                [4, 43, 15],
                                [2, 98, 78],
                                [4, 49, 31],
                                [2, 32, 14, 4, 33, 15],
                                [4, 39, 13, 1, 40, 14],
                                [2, 121, 97],
                                [2, 60, 38, 2, 61, 39],
                                [4, 40, 18, 2, 41, 19],
                                [4, 40, 14, 2, 41, 15],
                                [2, 146, 116],
                                [3, 58, 36, 2, 59, 37],
                                [4, 36, 16, 4, 37, 17],
                                [4, 36, 12, 4, 37, 13],
                                [2, 86, 68, 2, 87, 69],
                                [4, 69, 43, 1, 70, 44],
                                [6, 43, 19, 2, 44, 20],
                                [6, 43, 15, 2, 44, 16],
                                [4, 101, 81],
                                [1, 80, 50, 4, 81, 51],
                                [4, 50, 22, 4, 51, 23],
                                [3, 36, 12, 8, 37, 13],
                                [2, 116, 92, 2, 117, 93],
                                [6, 58, 36, 2, 59, 37],
                                [4, 46, 20, 6, 47, 21],
                                [7, 42, 14, 4, 43, 15],
                                [4, 133, 107],
                                [8, 59, 37, 1, 60, 38],
                                [8, 44, 20, 4, 45, 21],
                                [12, 33, 11, 4, 34, 12],
                                [3, 145, 115, 1, 146, 116],
                                [4, 64, 40, 5, 65, 41],
                                [11, 36, 16, 5, 37, 17],
                                [11, 36, 12, 5, 37, 13],
                                [5, 109, 87, 1, 110, 88],
                                [5, 65, 41, 5, 66, 42],
                                [5, 54, 24, 7, 55, 25],
                                [11, 36, 12, 7, 37, 13],
                                [5, 122, 98, 1, 123, 99],
                                [7, 73, 45, 3, 74, 46],
                                [15, 43, 19, 2, 44, 20],
                                [3, 45, 15, 13, 46, 16],
                                [1, 135, 107, 5, 136, 108],
                                [10, 74, 46, 1, 75, 47],
                                [1, 50, 22, 15, 51, 23],
                                [2, 42, 14, 17, 43, 15],
                                [5, 150, 120, 1, 151, 121],
                                [9, 69, 43, 4, 70, 44],
                                [17, 50, 22, 1, 51, 23],
                                [2, 42, 14, 19, 43, 15],
                                [3, 141, 113, 4, 142, 114],
                                [3, 70, 44, 11, 71, 45],
                                [17, 47, 21, 4, 48, 22],
                                [9, 39, 13, 16, 40, 14],
                                [3, 135, 107, 5, 136, 108],
                                [3, 67, 41, 13, 68, 42],
                                [15, 54, 24, 5, 55, 25],
                                [15, 43, 15, 10, 44, 16],
                                [4, 144, 116, 4, 145, 117],
                                [17, 68, 42],
                                [17, 50, 22, 6, 51, 23],
                                [19, 46, 16, 6, 47, 17],
                                [2, 139, 111, 7, 140, 112],
                                [17, 74, 46],
                                [7, 54, 24, 16, 55, 25],
                                [34, 37, 13],
                                [4, 151, 121, 5, 152, 122],
                                [4, 75, 47, 14, 76, 48],
                                [11, 54, 24, 14, 55, 25],
                                [16, 45, 15, 14, 46, 16],
                                [6, 147, 117, 4, 148, 118],
                                [6, 73, 45, 14, 74, 46],
                                [11, 54, 24, 16, 55, 25],
                                [30, 46, 16, 2, 47, 17],
                                [8, 132, 106, 4, 133, 107],
                                [8, 75, 47, 13, 76, 48],
                                [7, 54, 24, 22, 55, 25],
                                [22, 45, 15, 13, 46, 16],
                                [10, 142, 114, 2, 143, 115],
                                [19, 74, 46, 4, 75, 47],
                                [28, 50, 22, 6, 51, 23],
                                [33, 46, 16, 4, 47, 17],
                                [8, 152, 122, 4, 153, 123],
                                [22, 73, 45, 3, 74, 46],
                                [8, 53, 23, 26, 54, 24],
                                [12, 45, 15, 28, 46, 16],
                                [3, 147, 117, 10, 148, 118],
                                [3, 73, 45, 23, 74, 46],
                                [4, 54, 24, 31, 55, 25],
                                [11, 45, 15, 31, 46, 16],
                                [7, 146, 116, 7, 147, 117],
                                [21, 73, 45, 7, 74, 46],
                                [1, 53, 23, 37, 54, 24],
                                [19, 45, 15, 26, 46, 16],
                                [5, 145, 115, 10, 146, 116],
                                [19, 75, 47, 10, 76, 48],
                                [15, 54, 24, 25, 55, 25],
                                [23, 45, 15, 25, 46, 16],
                                [13, 145, 115, 3, 146, 116],
                                [2, 74, 46, 29, 75, 47],
                                [42, 54, 24, 1, 55, 25],
                                [23, 45, 15, 28, 46, 16],
                                [17, 145, 115],
                                [10, 74, 46, 23, 75, 47],
                                [10, 54, 24, 35, 55, 25],
                                [19, 45, 15, 35, 46, 16],
                                [17, 145, 115, 1, 146, 116],
                                [14, 74, 46, 21, 75, 47],
                                [29, 54, 24, 19, 55, 25],
                                [11, 45, 15, 46, 46, 16],
                                [13, 145, 115, 6, 146, 116],
                                [14, 74, 46, 23, 75, 47],
                                [44, 54, 24, 7, 55, 25],
                                [59, 46, 16, 1, 47, 17],
                                [12, 151, 121, 7, 152, 122],
                                [12, 75, 47, 26, 76, 48],
                                [39, 54, 24, 14, 55, 25],
                                [22, 45, 15, 41, 46, 16],
                                [6, 151, 121, 14, 152, 122],
                                [6, 75, 47, 34, 76, 48],
                                [46, 54, 24, 10, 55, 25],
                                [2, 45, 15, 64, 46, 16],
                                [17, 152, 122, 4, 153, 123],
                                [29, 74, 46, 14, 75, 47],
                                [49, 54, 24, 10, 55, 25],
                                [24, 45, 15, 46, 46, 16],
                                [4, 152, 122, 18, 153, 123],
                                [13, 74, 46, 32, 75, 47],
                                [48, 54, 24, 14, 55, 25],
                                [42, 45, 15, 32, 46, 16],
                                [20, 147, 117, 4, 148, 118],
                                [40, 75, 47, 7, 76, 48],
                                [43, 54, 24, 22, 55, 25],
                                [10, 45, 15, 67, 46, 16],
                                [19, 148, 118, 6, 149, 119],
                                [18, 75, 47, 31, 76, 48],
                                [34, 54, 24, 34, 55, 25],
                                [20, 45, 15, 61, 46, 16]
                            ], e = function(t, e) {
                                var r = {};
                                return r.totalCount = t, r.dataCount = e, r
                            }, {
                                getRSBlocks: function(r, i) {
                                    var n = function(e, r) {
                                        switch (r) {
                                            case a.L:
                                                return t[4 * (e - 1) + 0];
                                            case a.M:
                                                return t[4 * (e - 1) + 1];
                                            case a.Q:
                                                return t[4 * (e - 1) + 2];
                                            case a.H:
                                                return t[4 * (e - 1) + 3];
                                            default:
                                                return
                                        }
                                    }(r, i);
                                    if (void 0 === n) throw "bad rs block @ typeNumber:" + r + "/errorCorrectionLevel:" + i;
                                    for (var o = n.length / 3, s = [], c = 0; c < o; c += 1)
                                        for (var d = n[3 * c + 0], l = n[3 * c + 1], h = n[3 * c + 2], u = 0; u < d; u += 1) s.push(e(l, h));
                                    return s
                                }
                            }),
                            h = function() {
                                var t = [],
                                    e = 0,
                                    r = {
                                        getBuffer: function() {
                                            return t
                                        },
                                        getAt: function(e) {
                                            return 1 == (t[Math.floor(e / 8)] >>> 7 - e % 8 & 1)
                                        },
                                        put: function(t, e) {
                                            for (var i = 0; i < e; i += 1) r.putBit(1 == (t >>> e - i - 1 & 1))
                                        },
                                        getLengthInBits: function() {
                                            return e
                                        },
                                        putBit: function(r) {
                                            var i = Math.floor(e / 8);
                                            t.length <= i && t.push(0), r && (t[i] |= 128 >>> e % 8), e += 1
                                        }
                                    };
                                return r
                            },
                            u = function(t) {
                                var e = function(t) {
                                        for (var e = 0, i = 0; i < t.length; i += 1) e = 10 * e + r(t.charAt(i));
                                        return e
                                    },
                                    r = function(t) {
                                        if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
                                        throw "illegal char :" + t
                                    };
                                return {
                                    getMode: function() {
                                        return 1
                                    },
                                    getLength: function(e) {
                                        return t.length
                                    },
                                    write: function(r) {
                                        for (var i = 0; i + 2 < t.length;) r.put(e(t.substring(i, i + 3)), 10), i += 3;
                                        i < t.length && (t.length - i == 1 ? r.put(e(t.substring(i, i + 1)), 4) : t.length - i == 2 && r.put(e(t.substring(i, i + 2)), 7))
                                    }
                                }
                            },
                            g = function(t) {
                                var e = function(t) {
                                    if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
                                    if ("A" <= t && t <= "Z") return t.charCodeAt(0) - 65 + 10;
                                    switch (t) {
                                        case " ":
                                            return 36;
                                        case "$":
                                            return 37;
                                        case "%":
                                            return 38;
                                        case "*":
                                            return 39;
                                        case "+":
                                            return 40;
                                        case "-":
                                            return 41;
                                        case ".":
                                            return 42;
                                        case "/":
                                            return 43;
                                        case ":":
                                            return 44;
                                        default:
                                            throw "illegal char :" + t
                                    }
                                };
                                return {
                                    getMode: function() {
                                        return 2
                                    },
                                    getLength: function(e) {
                                        return t.length
                                    },
                                    write: function(r) {
                                        for (var i = 0; i + 1 < t.length;) r.put(45 * e(t.charAt(i)) + e(t.charAt(i + 1)), 11), i += 2;
                                        i < t.length && r.put(e(t.charAt(i)), 6)
                                    }
                                }
                            },
                            p = function(t) {
                                var e = r.stringToBytes(t);
                                return {
                                    getMode: function() {
                                        return 4
                                    },
                                    getLength: function(t) {
                                        return e.length
                                    },
                                    write: function(t) {
                                        for (var r = 0; r < e.length; r += 1) t.put(e[r], 8)
                                    }
                                }
                            },
                            f = function(t) {
                                var e = r.stringToBytesFuncs.SJIS;
                                if (!e) throw "sjis not supported.";
                                var i = e("友");
                                if (2 != i.length || 38726 != (i[0] << 8 | i[1])) throw "sjis not supported.";
                                var n = e(t);
                                return {
                                    getMode: function() {
                                        return 8
                                    },
                                    getLength: function(t) {
                                        return ~~(n.length / 2)
                                    },
                                    write: function(t) {
                                        for (var e = 0; e + 1 < n.length;) {
                                            var r = (255 & n[e]) << 8 | 255 & n[e + 1];
                                            if (33088 <= r && r <= 40956) r -= 33088;
                                            else {
                                                if (!(57408 <= r && r <= 60351)) throw "illegal char at " + (e + 1) + "/" + r;
                                                r -= 49472
                                            }
                                            r = 192 * (r >>> 8 & 255) + (255 & r), t.put(r, 13), e += 2
                                        }
                                        if (e < n.length) throw "illegal char at " + (e + 1)
                                    }
                                }
                            },
                            w = function() {
                                var t = [],
                                    e = {
                                        writeByte: function(e) {
                                            t.push(255 & e)
                                        },
                                        writeShort: function(t) {
                                            e.writeByte(t), e.writeByte(t >>> 8)
                                        },
                                        writeBytes: function(t, r, i) {
                                            r = r || 0, i = i || t.length;
                                            for (var n = 0; n < i; n += 1) e.writeByte(t[n + r])
                                        },
                                        writeString: function(t) {
                                            for (var r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r))
                                        },
                                        toByteArray: function() {
                                            return t
                                        },
                                        toString: function() {
                                            var e = "";
                                            e += "[";
                                            for (var r = 0; r < t.length; r += 1) r > 0 && (e += ","), e += t[r];
                                            return e + "]"
                                        }
                                    };
                                return e
                            },
                            m = function(t) {
                                var e = 0,
                                    r = 0,
                                    i = 0,
                                    n = function(t) {
                                        if (65 <= t && t <= 90) return t - 65;
                                        if (97 <= t && t <= 122) return t - 97 + 26;
                                        if (48 <= t && t <= 57) return t - 48 + 52;
                                        if (43 == t) return 62;
                                        if (47 == t) return 63;
                                        throw "c:" + t
                                    };
                                return {
                                    read: function() {
                                        for (; i < 8;) {
                                            if (e >= t.length) {
                                                if (0 == i) return -1;
                                                throw "unexpected end of file./" + i
                                            }
                                            var o = t.charAt(e);
                                            if (e += 1, "=" == o) return i = 0, -1;
                                            o.match(/^\s$/) || (r = r << 6 | n(o.charCodeAt(0)), i += 6)
                                        }
                                        var a = r >>> i - 8 & 255;
                                        return i -= 8, a
                                    }
                                }
                            },
                            v = function(t, e, r) {
                                for (var i, n, o, a, s, c, d, l, h, u, g = (i = Array(t * e), n = function(t) {
                                        for (var e = 1 << t, r = 1 + (1 << t), n = t + 1, a = o(), s = 0; s < e; s += 1) a.add(String.fromCharCode(s));
                                        a.add(String.fromCharCode(e)), a.add(String.fromCharCode(r));
                                        var c, d, l = w(),
                                            h = (c = 0, d = 0, {
                                                write: function(t, e) {
                                                    if (t >>> e != 0) throw "length over";
                                                    for (; c + e >= 8;) l.writeByte(255 & (t << c | d)), e -= 8 - c, t >>>= 8 - c, d = 0, c = 0;
                                                    d |= t << c, c += e
                                                },
                                                flush: function() {
                                                    c > 0 && l.writeByte(d)
                                                }
                                            });
                                        h.write(e, n);
                                        var u = 0,
                                            g = String.fromCharCode(i[0]);
                                        for (u += 1; u < i.length;) {
                                            var p = String.fromCharCode(i[u]);
                                            u += 1, a.contains(g + p) ? g += p : (h.write(a.indexOf(g), n), 4095 > a.size() && (a.size() == 1 << n && (n += 1), a.add(g + p)), g = p)
                                        }
                                        return h.write(a.indexOf(g), n), h.write(r, n), h.flush(), l.toByteArray()
                                    }, o = function() {
                                        var t = {},
                                            e = 0,
                                            r = {
                                                add: function(i) {
                                                    if (r.contains(i)) throw "dup key:" + i;
                                                    t[i] = e, e += 1
                                                },
                                                size: function() {
                                                    return e
                                                },
                                                indexOf: function(e) {
                                                    return t[e]
                                                },
                                                contains: function(e) {
                                                    return void 0 !== t[e]
                                                }
                                            };
                                        return r
                                    }, {
                                        setPixel: function(e, r, n) {
                                            i[r * t + e] = n
                                        },
                                        write: function(r) {
                                            r.writeString("GIF87a"), r.writeShort(t), r.writeShort(e), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(t), r.writeShort(e), r.writeByte(0);
                                            var i = n(2);
                                            r.writeByte(2);
                                            for (var o = 0; i.length - o > 255;) r.writeByte(255), r.writeBytes(i, o, 255), o += 255;
                                            r.writeByte(i.length - o), r.writeBytes(i, o, i.length - o), r.writeByte(0), r.writeString(";")
                                        }
                                    }), p = 0; p < e; p += 1)
                                    for (var f = 0; f < t; f += 1) g.setPixel(f, p, r(f, p));
                                var m = w();
                                g.write(m);
                                for (var v = (a = 0, s = 0, c = 0, d = "", l = {}, h = function(t) {
                                        d += String.fromCharCode(u(63 & t))
                                    }, u = function(t) {
                                        if (t < 0);
                                        else {
                                            if (t < 26) return 65 + t;
                                            if (t < 52) return t - 26 + 97;
                                            if (t < 62) return t - 52 + 48;
                                            if (62 == t) return 43;
                                            if (63 == t) return 47
                                        }
                                        throw "n:" + t
                                    }, l.writeByte = function(t) {
                                        for (a = a << 8 | 255 & t, s += 8, c += 1; s >= 6;) h(a >>> s - 6), s -= 6
                                    }, l.flush = function() {
                                        if (s > 0 && (h(a << 6 - s), a = 0, s = 0), c % 3 != 0)
                                            for (var t = 3 - c % 3, e = 0; e < t; e += 1) d += "="
                                    }, l.toString = function() {
                                        return d
                                    }, l), _ = m.toByteArray(), x = 0; x < _.length; x += 1) v.writeByte(_[x]);
                                return v.flush(), "data:image/gif;base64," + v
                            };
                        return r
                    }();
                    n.stringToBytesFuncs["UTF-8"] = function(t) {
                        for (var e = [], r = 0; r < t.length; r++) {
                            var i = t.charCodeAt(r);
                            i < 128 ? e.push(i) : i < 2048 ? e.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || i >= 57344 ? e.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (r++, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), e.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
                        }
                        return e
                    }, void 0 === (i = "function" == typeof(r = function() {
                        return n
                    }) ? r.apply(e, []) : r) || (t.exports = i)
                }
            },
            e = {};

        function r(i) {
            var n = e[i];
            if (void 0 !== n) return n.exports;
            var o = e[i] = {
                exports: {}
            };
            return t[i](o, o.exports, r), o.exports
        }
        r.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return r.d(e, {
                a: e
            }), e
        }, r.d = (t, e) => {
            for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
        }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        var n = {};
        return (() => {
            "use strict";
            r.d(n, {
                default: () => O
            });
            let t = t => !!t && "object" == typeof t && !Array.isArray(t);

            function e(r) {
                for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                if (!n.length) return r;
                let a = n.shift();
                return void 0 !== a && t(r) && t(a) ? (r = Object.assign({}, r), Object.keys(a).forEach(i => {
                    let n = r[i],
                        o = a[i];
                    Array.isArray(n) && Array.isArray(o) ? r[i] = o : t(n) && t(o) ? r[i] = e(Object.assign({}, n), o) : r[i] = o
                }), e(r, ...n)) : r
            }

            function o(t, e) {
                let r = document.createElement("a");
                r.download = e, r.href = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
            }
            let a = {
                L: .07,
                M: .15,
                Q: .25,
                H: .3
            };
            class s {
                draw(t, e, r, i) {
                    let n;
                    switch (this._type) {
                        case "dots":
                            n = this._drawDot;
                            break;
                        case "classy":
                            n = this._drawClassy;
                            break;
                        case "classy-rounded":
                            n = this._drawClassyRounded;
                            break;
                        case "rounded":
                            n = this._drawRounded;
                            break;
                        case "extra-rounded":
                            n = this._drawExtraRounded;
                            break;
                        default:
                            n = this._drawSquare
                    }
                    n.call(this, {
                        x: t,
                        y: e,
                        size: r,
                        getNeighbor: i
                    })
                }
                _rotateFigure(t) {
                    var e;
                    let {
                        x: r,
                        y: i,
                        size: n,
                        rotation: o = 0,
                        draw: a
                    } = t;
                    a(), null == (e = this._element) || e.setAttribute("transform", "rotate(".concat(180 * o / Math.PI, ",").concat(r + n / 2, ",").concat(i + n / 2, ")"))
                }
                _basicDot(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + e / 2)), this._element.setAttribute("cy", String(i + e / 2)), this._element.setAttribute("r", String(e / 2))
                        }
                    }))
                }
                _basicSquare(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(i)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e))
                        }
                    }))
                }
                _basicSideRounded(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i, "v ").concat(e, "h ") + e / 2 + "a ".concat(e / 2, " ").concat(e / 2, ", 0, 0, 0, 0 ").concat(-e))
                        }
                    }))
                }
                _basicCornerRounded(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i, "v ").concat(e, "h ").concat(e, "v ") + -e / 2 + "a ".concat(e / 2, " ").concat(e / 2, ", 0, 0, 0, ").concat(-e / 2, " ").concat(-e / 2))
                        }
                    }))
                }
                _basicCornerExtraRounded(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i, "v ").concat(e, "h ").concat(e, "a ").concat(e, " ").concat(e, ", 0, 0, 0, ").concat(-e, " ").concat(-e))
                        }
                    }))
                }
                _basicCornersRounded(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i, "v ") + e / 2 + "a ".concat(e / 2, " ").concat(e / 2, ", 0, 0, 0, ").concat(e / 2, " ").concat(e / 2, "h ") + e / 2 + "v " + -e / 2 + "a ".concat(e / 2, " ").concat(e / 2, ", 0, 0, 0, ").concat(-e / 2, " ").concat(-e / 2))
                        }
                    }))
                }
                _drawDot(t) {
                    let {
                        x: e,
                        y: r,
                        size: i
                    } = t;
                    this._basicDot({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    })
                }
                _drawSquare(t) {
                    let {
                        x: e,
                        y: r,
                        size: i
                    } = t;
                    this._basicSquare({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    })
                }
                _drawRounded(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        getNeighbor: n
                    } = t, o = n ? +n(-1, 0) : 0, a = n ? +n(1, 0) : 0, s = n ? +n(0, -1) : 0, c = n ? +n(0, 1) : 0, d = o + a + s + c;
                    if (0 !== d)
                        if (d > 2 || o && a || s && c) this._basicSquare({
                            x: e,
                            y: r,
                            size: i,
                            rotation: 0
                        });
                        else {
                            if (2 === d) {
                                let t = 0;
                                return o && s ? t = Math.PI / 2 : s && a ? t = Math.PI : a && c && (t = -Math.PI / 2), void this._basicCornerRounded({
                                    x: e,
                                    y: r,
                                    size: i,
                                    rotation: t
                                })
                            }
                            if (1 === d) {
                                let t = 0;
                                return s ? t = Math.PI / 2 : a ? t = Math.PI : c && (t = -Math.PI / 2), void this._basicSideRounded({
                                    x: e,
                                    y: r,
                                    size: i,
                                    rotation: t
                                })
                            }
                        }
                    else this._basicDot({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    })
                }
                _drawExtraRounded(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        getNeighbor: n
                    } = t, o = n ? +n(-1, 0) : 0, a = n ? +n(1, 0) : 0, s = n ? +n(0, -1) : 0, c = n ? +n(0, 1) : 0, d = o + a + s + c;
                    if (0 !== d)
                        if (d > 2 || o && a || s && c) this._basicSquare({
                            x: e,
                            y: r,
                            size: i,
                            rotation: 0
                        });
                        else {
                            if (2 === d) {
                                let t = 0;
                                return o && s ? t = Math.PI / 2 : s && a ? t = Math.PI : a && c && (t = -Math.PI / 2), void this._basicCornerExtraRounded({
                                    x: e,
                                    y: r,
                                    size: i,
                                    rotation: t
                                })
                            }
                            if (1 === d) {
                                let t = 0;
                                return s ? t = Math.PI / 2 : a ? t = Math.PI : c && (t = -Math.PI / 2), void this._basicSideRounded({
                                    x: e,
                                    y: r,
                                    size: i,
                                    rotation: t
                                })
                            }
                        }
                    else this._basicDot({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    })
                }
                _drawClassy(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        getNeighbor: n
                    } = t, o = n ? +n(-1, 0) : 0, a = n ? +n(1, 0) : 0, s = n ? +n(0, -1) : 0, c = n ? +n(0, 1) : 0;
                    0 !== o + a + s + c ? o || s ? a || c ? this._basicSquare({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    }) : this._basicCornerRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: Math.PI / 2
                    }) : this._basicCornerRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: -Math.PI / 2
                    }) : this._basicCornersRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: Math.PI / 2
                    })
                }
                _drawClassyRounded(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        getNeighbor: n
                    } = t, o = n ? +n(-1, 0) : 0, a = n ? +n(1, 0) : 0, s = n ? +n(0, -1) : 0, c = n ? +n(0, 1) : 0;
                    0 !== o + a + s + c ? o || s ? a || c ? this._basicSquare({
                        x: e,
                        y: r,
                        size: i,
                        rotation: 0
                    }) : this._basicCornerExtraRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: Math.PI / 2
                    }) : this._basicCornerExtraRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: -Math.PI / 2
                    }) : this._basicCornersRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: Math.PI / 2
                    })
                }
                constructor({
                    svg: t,
                    type: e,
                    window: r
                }) {
                    this._svg = t, this._type = e, this._window = r
                }
            }
            let c = {
                    dot: "dot",
                    square: "square",
                    extraRounded: "extra-rounded"
                },
                d = Object.values(c);
            class l {
                draw(t, e, r, i) {
                    let n;
                    switch (this._type) {
                        case c.square:
                            n = this._drawSquare;
                            break;
                        case c.extraRounded:
                            n = this._drawExtraRounded;
                            break;
                        default:
                            n = this._drawDot
                    }
                    n.call(this, {
                        x: t,
                        y: e,
                        size: r,
                        rotation: i
                    })
                }
                _rotateFigure(t) {
                    var e;
                    let {
                        x: r,
                        y: i,
                        size: n,
                        rotation: o = 0,
                        draw: a
                    } = t;
                    a(), null == (e = this._element) || e.setAttribute("transform", "rotate(".concat(180 * o / Math.PI, ",").concat(r + n / 2, ",").concat(i + n / 2, ")"))
                }
                _basicDot(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t, n = e / 7;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", "M ".concat(r + e / 2, " ").concat(i, "a ").concat(e / 2, " ").concat(e / 2, " 0 1 0 0.1 0zm 0 ").concat(n, "a ").concat(e / 2 - n, " ").concat(e / 2 - n, " 0 1 1 -0.1 0Z"))
                        }
                    }))
                }
                _basicSquare(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t, n = e / 7;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i, "v ").concat(e, "h ").concat(e, "v ") + -e + "z" + "M ".concat(r + n, " ").concat(i + n, "h ") + (e - 2 * n) + "v " + (e - 2 * n) + "h " + (2 * n - e) + "z")
                        }
                    }))
                }
                _basicExtraRounded(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t, n = e / 7;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", "M ".concat(r, " ").concat(i + 2.5 * n, "v ") + 2 * n + "a ".concat(2.5 * n, " ").concat(2.5 * n, ", 0, 0, 0, ").concat(2.5 * n, " ").concat(2.5 * n, "h ") + 2 * n + "a ".concat(2.5 * n, " ").concat(2.5 * n, ", 0, 0, 0, ").concat(2.5 * n, " ").concat(-(2.5 * n), "v ") + -2 * n + "a ".concat(2.5 * n, " ").concat(2.5 * n, ", 0, 0, 0, ").concat(-(2.5 * n), " ").concat(-(2.5 * n), "h ") + -2 * n + "a ".concat(2.5 * n, " ").concat(2.5 * n, ", 0, 0, 0, ").concat(-(2.5 * n), " ").concat(2.5 * n) + "M ".concat(r + 2.5 * n, " ").concat(i + n, "h ") + 2 * n + "a ".concat(1.5 * n, " ").concat(1.5 * n, ", 0, 0, 1, ").concat(1.5 * n, " ").concat(1.5 * n, "v ") + 2 * n + "a ".concat(1.5 * n, " ").concat(1.5 * n, ", 0, 0, 1, ").concat(-(1.5 * n), " ").concat(1.5 * n, "h ") + -2 * n + "a ".concat(1.5 * n, " ").concat(1.5 * n, ", 0, 0, 1, ").concat(-(1.5 * n), " ").concat(-(1.5 * n), "v ") + -2 * n + "a ".concat(1.5 * n, " ").concat(1.5 * n, ", 0, 0, 1, ").concat(1.5 * n, " ").concat(-(1.5 * n)))
                        }
                    }))
                }
                _drawDot(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    } = t;
                    this._basicDot({
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    })
                }
                _drawSquare(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    } = t;
                    this._basicSquare({
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    })
                }
                _drawExtraRounded(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    } = t;
                    this._basicExtraRounded({
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    })
                }
                constructor({
                    svg: t,
                    type: e,
                    window: r
                }) {
                    this._svg = t, this._type = e, this._window = r
                }
            }
            let h = {
                    dot: "dot",
                    square: "square"
                },
                u = Object.values(h);
            class g {
                draw(t, e, r, i) {
                    (this._type === h.square ? this._drawSquare : this._drawDot).call(this, {
                        x: t,
                        y: e,
                        size: r,
                        rotation: i
                    })
                }
                _rotateFigure(t) {
                    var e;
                    let {
                        x: r,
                        y: i,
                        size: n,
                        rotation: o = 0,
                        draw: a
                    } = t;
                    a(), null == (e = this._element) || e.setAttribute("transform", "rotate(".concat(180 * o / Math.PI, ",").concat(r + n / 2, ",").concat(i + n / 2, ")"))
                }
                _basicDot(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + e / 2)), this._element.setAttribute("cy", String(i + e / 2)), this._element.setAttribute("r", String(e / 2))
                        }
                    }))
                }
                _basicSquare(t) {
                    let {
                        size: e,
                        x: r,
                        y: i
                    } = t;
                    this._rotateFigure(Object.assign(Object.assign({}, t), {
                        draw: () => {
                            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(i)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e))
                        }
                    }))
                }
                _drawDot(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    } = t;
                    this._basicDot({
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    })
                }
                _drawSquare(t) {
                    let {
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    } = t;
                    this._basicSquare({
                        x: e,
                        y: r,
                        size: i,
                        rotation: n
                    })
                }
                constructor({
                    svg: t,
                    type: e,
                    window: r
                }) {
                    this._svg = t, this._type = e, this._window = r
                }
            }
            let p = "circle",
                f = [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                w = [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]
                ];
            class m {
                get width() {
                    return this._options.width
                }
                get height() {
                    return this._options.height
                }
                getElement() {
                    return this._element
                }
                async drawQR(t) {
                    let e = t.getModuleCount(),
                        r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin,
                        i = this._options.shape === p ? r / Math.sqrt(2) : r,
                        n = this._roundSize(i / e),
                        o = {
                            hideXDots: 0,
                            hideYDots: 0,
                            width: 0,
                            height: 0
                        };
                    if (this._qr = t, this._options.image) {
                        if (await this.loadImage(), !this._image) return;
                        let {
                            imageOptions: t,
                            qrOptions: r
                        } = this._options, i = Math.floor(t.imageSize * a[r.errorCorrectionLevel] * e * e);
                        o = function(t) {
                            let {
                                originalHeight: e,
                                originalWidth: r,
                                maxHiddenDots: i,
                                maxHiddenAxisDots: n,
                                dotSize: o
                            } = t, a = {
                                x: 0,
                                y: 0
                            }, s = {
                                x: 0,
                                y: 0
                            };
                            if (e <= 0 || r <= 0 || i <= 0 || o <= 0) return {
                                height: 0,
                                width: 0,
                                hideYDots: 0,
                                hideXDots: 0
                            };
                            let c = e / r;
                            return a.x = Math.floor(Math.sqrt(i / c)), a.x <= 0 && (a.x = 1), n && n < a.x && (a.x = n), a.x % 2 == 0 && a.x--, s.x = a.x * o, a.y = 1 + 2 * Math.ceil((a.x * c - 1) / 2), s.y = Math.round(s.x * c), (a.y * a.x > i || n && n < a.y) && (n && n < a.y ? (a.y = n, a.y % 2 == 0 && a.x--) : a.y -= 2, s.y = a.y * o, a.x = 1 + 2 * Math.ceil((a.y / c - 1) / 2), s.x = Math.round(s.y / c)), {
                                height: s.y,
                                width: s.x,
                                hideYDots: a.y,
                                hideXDots: a.x
                            }
                        }({
                            originalWidth: this._image.width,
                            originalHeight: this._image.height,
                            maxHiddenDots: i,
                            maxHiddenAxisDots: e - 14,
                            dotSize: n
                        })
                    }
                    this.drawBackground(), this.drawDots((t, r) => {
                        var i, n, a, s, c, d;
                        return !(this._options.imageOptions.hideBackgroundDots && t >= (e - o.hideYDots) / 2 && t < (e + o.hideYDots) / 2 && r >= (e - o.hideXDots) / 2 && r < (e + o.hideXDots) / 2 || (null == (i = f[t]) ? void 0 : i[r]) || (null == (n = f[t - e + 7]) ? void 0 : n[r]) || (null == (a = f[t]) ? void 0 : a[r - e + 7]) || (null == (s = w[t]) ? void 0 : s[r]) || (null == (c = w[t - e + 7]) ? void 0 : c[r]) || (null == (d = w[t]) ? void 0 : d[r - e + 7]))
                    }), this.drawCorners(), this._options.image && await this.drawImage({
                        width: o.width,
                        height: o.height,
                        count: e,
                        dotSize: n
                    })
                }
                drawBackground() {
                    var t, e, r;
                    let i = this._element,
                        n = this._options;
                    if (i) {
                        let i = null == (t = n.backgroundOptions) ? void 0 : t.gradient,
                            o = null == (e = n.backgroundOptions) ? void 0 : e.color,
                            a = n.height,
                            s = n.width;
                        if (i || o) {
                            let t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color-".concat(this._instanceId)), this._defs.appendChild(this._backgroundClipPath), (null == (r = n.backgroundOptions) ? void 0 : r.round) && (a = s = Math.min(n.width, n.height), t.setAttribute("rx", String(a / 2 * n.backgroundOptions.round))), t.setAttribute("x", String(this._roundSize((n.width - s) / 2))), t.setAttribute("y", String(this._roundSize((n.height - a) / 2))), t.setAttribute("width", String(s)), t.setAttribute("height", String(a)), this._backgroundClipPath.appendChild(t), this._createColor({
                                options: i,
                                color: o,
                                additionalRotation: 0,
                                x: 0,
                                y: 0,
                                height: n.height,
                                width: n.width,
                                name: "background-color-".concat(this._instanceId)
                            })
                        }
                    }
                }
                drawDots(t) {
                    var e, r;
                    if (!this._qr) throw "QR code is not defined";
                    let i = this._options,
                        n = this._qr.getModuleCount();
                    if (n > i.width || n > i.height) throw "The canvas is too small.";
                    let o = Math.min(i.width, i.height) - 2 * i.margin,
                        a = i.shape === p ? o / Math.sqrt(2) : o,
                        c = this._roundSize(a / n),
                        d = this._roundSize((i.width - n * c) / 2),
                        l = this._roundSize((i.height - n * c) / 2),
                        h = new s({
                            svg: this._element,
                            type: i.dotsOptions.type,
                            window: this._window
                        });
                    this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color-".concat(this._instanceId)), this._defs.appendChild(this._dotsClipPath), this._createColor({
                        options: null == (e = i.dotsOptions) ? void 0 : e.gradient,
                        color: i.dotsOptions.color,
                        additionalRotation: 0,
                        x: 0,
                        y: 0,
                        height: i.height,
                        width: i.width,
                        name: "dot-color-".concat(this._instanceId)
                    });
                    for (let e = 0; e < n; e++)
                        for (let i = 0; i < n; i++) t && !t(e, i) || (null == (r = this._qr) ? void 0 : r.isDark(e, i)) && (h.draw(d + i * c, l + e * c, c, (r, o) => !(i + r < 0 || e + o < 0 || i + r >= n || e + o >= n) && !(t && !t(e + o, i + r)) && !!this._qr && this._qr.isDark(e + o, i + r)), h._element && this._dotsClipPath && this._dotsClipPath.appendChild(h._element));
                    if (i.shape === p) {
                        let t = this._roundSize((o / c - n) / 2),
                            e = n + 2 * t,
                            r = d - t * c,
                            i = l - t * c,
                            a = [],
                            s = this._roundSize(e / 2);
                        for (let r = 0; r < e; r++) {
                            a[r] = [];
                            for (let i = 0; i < e; i++) r >= t - 1 && r <= e - t && i >= t - 1 && i <= e - t || Math.sqrt((r - s) * (r - s) + (i - s) * (i - s)) > s ? a[r][i] = 0 : a[r][i] = +!!this._qr.isDark(i - 2 * t < 0 ? i : i >= n ? i - 2 * t : i - t, r - 2 * t < 0 ? r : r >= n ? r - 2 * t : r - t)
                        }
                        for (let t = 0; t < e; t++)
                            for (let n = 0; n < e; n++) a[t][n] && (h.draw(r + n * c, i + t * c, c, (e, r) => {
                                var i;
                                return !!(null == (i = a[t + r]) ? void 0 : i[n + e])
                            }), h._element && this._dotsClipPath && this._dotsClipPath.appendChild(h._element))
                    }
                }
                drawCorners() {
                    if (!this._qr) throw "QR code is not defined";
                    let t = this._element,
                        e = this._options;
                    if (!t) throw "Element code is not defined";
                    let r = this._qr.getModuleCount(),
                        i = Math.min(e.width, e.height) - 2 * e.margin,
                        n = e.shape === p ? i / Math.sqrt(2) : i,
                        o = this._roundSize(n / r),
                        a = 7 * o,
                        c = 3 * o,
                        h = this._roundSize((e.width - r * o) / 2),
                        m = this._roundSize((e.height - r * o) / 2);
                    [
                        [0, 0, 0],
                        [1, 0, Math.PI / 2],
                        [0, 1, -Math.PI / 2]
                    ].forEach(t => {
                        var i, n, p, v, _, x, y, b, C, S, j, k, O, M;
                        let [q, z, A] = t, D = h + q * o * (r - 7), B = m + z * o * (r - 7), I = this._dotsClipPath, T = this._dotsClipPath;
                        if (((null == (i = e.cornersSquareOptions) ? void 0 : i.gradient) || (null == (n = e.cornersSquareOptions) ? void 0 : n.color)) && ((I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-".concat(q, "-").concat(z, "-").concat(this._instanceId)), this._defs.appendChild(I), this._cornersSquareClipPath = this._cornersDotClipPath = T = I, this._createColor({
                                options: null == (p = e.cornersSquareOptions) ? void 0 : p.gradient,
                                color: null == (v = e.cornersSquareOptions) ? void 0 : v.color,
                                additionalRotation: A,
                                x: D,
                                y: B,
                                height: a,
                                width: a,
                                name: "corners-square-color-".concat(q, "-").concat(z, "-").concat(this._instanceId)
                            })), (null == (_ = e.cornersSquareOptions) ? void 0 : _.type) && d.includes(e.cornersSquareOptions.type)) {
                            let t = new l({
                                svg: this._element,
                                type: e.cornersSquareOptions.type,
                                window: this._window
                            });
                            t.draw(D, B, a, A), t._element && I && I.appendChild(t._element)
                        } else {
                            let t = new s({
                                svg: this._element,
                                type: (null == (x = e.cornersSquareOptions) ? void 0 : x.type) || e.dotsOptions.type,
                                window: this._window
                            });
                            for (let e = 0; e < f.length; e++)
                                for (let r = 0; r < f[e].length; r++)(null == (y = f[e]) ? void 0 : y[r]) && (t.draw(D + r * o, B + e * o, o, (t, i) => {
                                    var n;
                                    return !!(null == (n = f[e + i]) ? void 0 : n[r + t])
                                }), t._element && I && I.appendChild(t._element))
                        }
                        if (((null == (b = e.cornersDotOptions) ? void 0 : b.gradient) || (null == (C = e.cornersDotOptions) ? void 0 : C.color)) && ((T = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-".concat(q, "-").concat(z, "-").concat(this._instanceId)), this._defs.appendChild(T), this._cornersDotClipPath = T, this._createColor({
                                options: null == (S = e.cornersDotOptions) ? void 0 : S.gradient,
                                color: null == (j = e.cornersDotOptions) ? void 0 : j.color,
                                additionalRotation: A,
                                x: D + 2 * o,
                                y: B + 2 * o,
                                height: c,
                                width: c,
                                name: "corners-dot-color-".concat(q, "-").concat(z, "-").concat(this._instanceId)
                            })), (null == (k = e.cornersDotOptions) ? void 0 : k.type) && u.includes(e.cornersDotOptions.type)) {
                            let t = new g({
                                svg: this._element,
                                type: e.cornersDotOptions.type,
                                window: this._window
                            });
                            t.draw(D + 2 * o, B + 2 * o, c, A), t._element && T && T.appendChild(t._element)
                        } else {
                            let t = new s({
                                svg: this._element,
                                type: (null == (O = e.cornersDotOptions) ? void 0 : O.type) || e.dotsOptions.type,
                                window: this._window
                            });
                            for (let e = 0; e < w.length; e++)
                                for (let r = 0; r < w[e].length; r++)(null == (M = w[e]) ? void 0 : M[r]) && (t.draw(D + r * o, B + e * o, o, (t, i) => {
                                    var n;
                                    return !!(null == (n = w[e + i]) ? void 0 : n[r + t])
                                }), t._element && T && T.appendChild(t._element))
                        }
                    })
                }
                loadImage() {
                    return new Promise((t, e) => {
                        var r;
                        let i = this._options;
                        if (!i.image) return e("Image is not defined");
                        if (null == (r = i.nodeCanvas) ? void 0 : r.loadImage) i.nodeCanvas.loadImage(i.image).then(e => {
                            var r, n;
                            if (this._image = e, this._options.imageOptions.saveAsBlob) {
                                let t = null == (r = i.nodeCanvas) ? void 0 : r.createCanvas(this._image.width, this._image.height);
                                null == (n = null == t ? void 0 : t.getContext("2d")) || n.drawImage(e, 0, 0), this._imageUri = null == t ? void 0 : t.toDataURL()
                            }
                            t()
                        }).catch(e);
                        else {
                            let e = new this._window.Image;
                            "string" == typeof i.imageOptions.crossOrigin && (e.crossOrigin = i.imageOptions.crossOrigin), this._image = e, e.onload = async () => {
                                this._options.imageOptions.saveAsBlob && (this._imageUri = await async function(t, e) {
                                    return new Promise(r => {
                                        let i = new e.XMLHttpRequest;
                                        i.onload = function() {
                                            let t = new e.FileReader;
                                            t.onloadend = function() {
                                                r(t.result)
                                            }, t.readAsDataURL(i.response)
                                        }, i.open("GET", t), i.responseType = "blob", i.send()
                                    })
                                }(i.image || "", this._window)), t()
                            }, e.src = i.image
                        }
                    })
                }
                async drawImage(t) {
                    let {
                        width: e,
                        height: r,
                        count: i,
                        dotSize: n
                    } = t, o = this._options, a = this._roundSize((o.width - i * n) / 2), s = this._roundSize((o.height - i * n) / 2), c = a + this._roundSize(o.imageOptions.margin + (i * n - e) / 2), d = s + this._roundSize(o.imageOptions.margin + (i * n - r) / 2), l = e - 2 * o.imageOptions.margin, h = r - 2 * o.imageOptions.margin, u = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
                    u.setAttribute("href", this._imageUri || ""), u.setAttribute("xlink:href", this._imageUri || ""), u.setAttribute("x", String(c)), u.setAttribute("y", String(d)), u.setAttribute("width", "".concat(l, "px")), u.setAttribute("height", "".concat(h, "px")), this._element.appendChild(u)
                }
                _createColor(t) {
                    let {
                        options: e,
                        color: r,
                        additionalRotation: i,
                        x: n,
                        y: o,
                        height: a,
                        width: s,
                        name: c
                    } = t, d = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    if (d.setAttribute("x", String(n)), d.setAttribute("y", String(o)), d.setAttribute("height", String(a)), d.setAttribute("width", String(s)), d.setAttribute("clip-path", "url('#clip-path-".concat(c, "')")), e) {
                        let t;
                        if ("radial" === e.type)(t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", c), t.setAttribute("gradientUnits", "userSpaceOnUse"), t.setAttribute("fx", String(n + s / 2)), t.setAttribute("fy", String(o + a / 2)), t.setAttribute("cx", String(n + s / 2)), t.setAttribute("cy", String(o + a / 2)), t.setAttribute("r", String((s > a ? s : a) / 2));
                        else {
                            let r = ((e.rotation || 0) + i) % (2 * Math.PI),
                                d = (r + 2 * Math.PI) % (2 * Math.PI),
                                l = n + s / 2,
                                h = o + a / 2,
                                u = n + s / 2,
                                g = o + a / 2;
                            d >= 0 && d <= .25 * Math.PI || d > 1.75 * Math.PI && d <= 2 * Math.PI ? (l -= s / 2, h -= a / 2 * Math.tan(r), u += s / 2, g += a / 2 * Math.tan(r)) : d > .25 * Math.PI && d <= .75 * Math.PI ? (h -= a / 2, l -= s / 2 / Math.tan(r), g += a / 2, u += s / 2 / Math.tan(r)) : d > .75 * Math.PI && d <= 1.25 * Math.PI ? (l += s / 2, h += a / 2 * Math.tan(r), u -= s / 2, g -= a / 2 * Math.tan(r)) : d > 1.25 * Math.PI && d <= 1.75 * Math.PI && (h += a / 2, l += s / 2 / Math.tan(r), g -= a / 2, u -= s / 2 / Math.tan(r)), (t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", c), t.setAttribute("gradientUnits", "userSpaceOnUse"), t.setAttribute("x1", String(Math.round(l))), t.setAttribute("y1", String(Math.round(h))), t.setAttribute("x2", String(Math.round(u))), t.setAttribute("y2", String(Math.round(g)))
                        }
                        e.colorStops.forEach(e => {
                            let {
                                offset: r,
                                color: i
                            } = e, n = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                            n.setAttribute("offset", 100 * r + "%"), n.setAttribute("stop-color", i), t.appendChild(n)
                        }), d.setAttribute("fill", "url('#".concat(c, "')")), this._defs.appendChild(t)
                    } else r && d.setAttribute("fill", r);
                    this._element.appendChild(d)
                }
                constructor(t, e) {
                    this._roundSize = t => this._options.dotsOptions.roundSize ? Math.floor(t) : t, this._window = e, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t.width)), this._element.setAttribute("height", String(t.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), t.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", "0 0 ".concat(t.width, " ").concat(t.height)), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = t.image, this._instanceId = m.instanceCount++, this._options = t
                }
            }
            m.instanceCount = 0;
            let v = "canvas",
                _ = {};
            for (let t = 0; t <= 40; t++) _[t] = t;
            let x = {
                type: v,
                shape: "square",
                width: 300,
                height: 300,
                data: "",
                margin: 0,
                qrOptions: {
                    typeNumber: _[0],
                    mode: void 0,
                    errorCorrectionLevel: "Q"
                },
                imageOptions: {
                    saveAsBlob: !0,
                    hideBackgroundDots: !0,
                    imageSize: .4,
                    crossOrigin: void 0,
                    margin: 0
                },
                dotsOptions: {
                    type: "square",
                    color: "#000",
                    roundSize: !0
                },
                backgroundOptions: {
                    round: 0,
                    color: "#fff"
                }
            };

            function y(t) {
                let e = Object.assign({}, t);
                if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
                return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(t => Object.assign(Object.assign({}, t), {
                    offset: Number(t.offset)
                })), e
            }

            function b(t) {
                let e = Object.assign({}, t);
                return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), {
                    hideBackgroundDots: !!e.imageOptions.hideBackgroundDots,
                    imageSize: Number(e.imageOptions.imageSize),
                    margin: Number(e.imageOptions.margin)
                }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = y(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = y(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = y(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = y(e.backgroundOptions.gradient))), e
            }
            var C = r(873),
                S = r.n(C);

            function j(t) {
                if (!t) throw Error("Extension must be defined");
                "." === t[0] && (t = t.substring(1));
                let e = {
                    bmp: "image/bmp",
                    gif: "image/gif",
                    ico: "image/vnd.microsoft.icon",
                    jpeg: "image/jpeg",
                    jpg: "image/jpeg",
                    png: "image/png",
                    svg: "image/svg+xml",
                    tif: "image/tiff",
                    tiff: "image/tiff",
                    webp: "image/webp",
                    pdf: "application/pdf"
                }[t.toLowerCase()];
                if (!e) throw Error('Extension "'.concat(t, '" is not supported'));
                return e
            }
            class k {
                static _clearContainer(t) {
                    t && (t.innerHTML = "")
                }
                _setupSvg() {
                    if (!this._qr) return;
                    let t = new m(this._options, this._window);
                    this._svg = t.getElement(), this._svgDrawingPromise = t.drawQR(this._qr).then(() => {
                        var e;
                        this._svg && (null == (e = this._extension) || e.call(this, t.getElement(), this._options))
                    })
                }
                _setupCanvas() {
                    var t, e;
                    this._qr && ((null == (t = this._options.nodeCanvas) ? void 0 : t.createCanvas) ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = null == (e = this._svgDrawingPromise) ? void 0 : e.then(() => {
                        var t;
                        if (!this._svg) return;
                        let e = this._svg,
                            r = btoa((new this._window.XMLSerializer).serializeToString(e)),
                            i = "data:".concat(j("svg"), ";base64,").concat(r);
                        if (null == (t = this._options.nodeCanvas) ? void 0 : t.loadImage) return this._options.nodeCanvas.loadImage(i).then(t => {
                            var e, r;
                            t.width = this._options.width, t.height = this._options.height, null == (r = null == (e = this._nodeCanvas) ? void 0 : e.getContext("2d")) || r.drawImage(t, 0, 0)
                        }); {
                            let t = new this._window.Image;
                            return new Promise(e => {
                                t.onload = () => {
                                    var r, i;
                                    null == (i = null == (r = this._domCanvas) ? void 0 : r.getContext("2d")) || i.drawImage(t, 0, 0), e()
                                }, t.src = i
                            })
                        }
                    }))
                }
                async _getElement() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "png";
                    if (!this._qr) throw "QR code is empty";
                    return "svg" === t.toLowerCase() ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas)
                }
                update(t) {
                    k._clearContainer(this._container), this._options = t ? b(e(this._options, t)) : this._options, this._options.data && (this._qr = S()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t) {
                        switch (!0) {
                            case /^[0-9]*$/.test(t):
                                return "Numeric";
                            case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                                return "Alphanumeric";
                            default:
                                return "Byte"
                        }
                    }(this._options.data)), this._qr.make(), this._options.type === v ? this._setupCanvas() : this._setupSvg(), this.append(this._container))
                }
                append(t) {
                    if (t) {
                        if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                        this._options.type === v ? this._domCanvas && t.appendChild(this._domCanvas) : this._svg && t.appendChild(this._svg), this._container = t
                    }
                }
                applyExtension(t) {
                    if (!t) throw "Extension function should be defined.";
                    this._extension = t, this.update()
                }
                deleteExtension() {
                    this._extension = void 0, this.update()
                }
                async getRawData() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "png";
                    if (!this._qr) throw "QR code is empty";
                    let e = await this._getElement(t),
                        r = j(t);
                    if (!e) return null;
                    if ("svg" === t.toLowerCase()) {
                        let t = '<?xml version="1.0" standalone="no"?>\r\n'.concat((new this._window.XMLSerializer).serializeToString(e));
                        return "undefined" == typeof Blob || this._options.jsdom ? i.Buffer.from(t) : new Blob([t], {
                            type: r
                        })
                    }
                    return new Promise(t => {
                        if ("toBuffer" in e)
                            if ("image/png" === r) t(e.toBuffer(r));
                            else if ("image/jpeg" === r) t(e.toBuffer(r));
                        else {
                            if ("application/pdf" !== r) throw Error("Unsupported extension");
                            t(e.toBuffer(r))
                        } else "toBlob" in e && e.toBlob(t, r, 1)
                    })
                }
                async download(t) {
                    if (!this._qr) throw "QR code is empty";
                    if ("undefined" == typeof Blob) throw "Cannot download in Node.js, call getRawData instead.";
                    let e = "png",
                        r = "qr";
                    "string" == typeof t ? (e = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t && null !== t && (t.name && (r = t.name), t.extension && (e = t.extension));
                    let i = await this._getElement(e);
                    if (i)
                        if ("svg" === e.toLowerCase()) {
                            let t = (new XMLSerializer).serializeToString(i);
                            t = '<?xml version="1.0" standalone="no"?>\r\n' + t, o("data:".concat(j(e), ";charset=utf-8,").concat(encodeURIComponent(t)), "".concat(r, ".svg"))
                        } else o(i.toDataURL(j(e)), "".concat(r, ".").concat(e))
                }
                constructor(t) {
                    (null == t ? void 0 : t.jsdom) ? this._window = new t.jsdom("", {
                        resources: "usable"
                    }).window: this._window = window, this._options = t ? b(e(x, t)) : x, this.update()
                }
            }
            let O = k
        })(), n.default
    })()
}, 905725, 273671, t => {
    "use strict";
    var e = t.i(483632),
        r = t.i(334863),
        i = t.i(469503),
        n = t.i(254481),
        o = t.i(840265);
    let a = {
        dotColor: "#000000",
        backgroundColor: "#FFFFFF",
        cornerSquareColor: "#000000",
        cornerDotColor: "#000000",
        dotType: "rounded",
        cornerSquareType: "extra-rounded",
        cornerDotType: "dot",
        margin: 10,
        dotSize: 1,
        imageUrl: "",
        imageSize: .4,
        hideBackgroundDots: !0,
        errorCorrectionLevel: "M"
    };
    t.s(["defaultQRSettings", 0, a, "loadQRSettings", 0, () => {
        try {
            let t = localStorage.getItem("qrCodeSettings");
            if (t) {
                let e = JSON.parse(t);
                return { ...a,
                    ...e
                }
            }
        } catch (t) {}
        return a
    }], 273671);
    var s = t.i(564668),
        c = t.i(299846),
        d = t.i(215669),
        l = t.i(119887),
        h = t.i(165341),
        u = t.i(878262),
        g = t.i(791089),
        p = t.i(118190),
        f = t.i(251570);
    t.i(308972);
    var w = t.i(445979),
        m = t.i(569210),
        v = t.i(649760),
        _ = t.i(952667),
        x = t.i(939356);
    t.s(["QRCodeModal", 0, t => {
        let {
            isOpen: y,
            onClose: b,
            shareUrl: C,
            title: S,
            description: j,
            downloadFileName: k = "qr-code.png",
            qrSettings: O = a
        } = t, {
            t: M
        } = (0, w.useTranslation)(), q = (0, f.useRef)(null), [z, A] = (0, f.useState)(!1), [D, B] = (0, f.useState)(O), [I, T] = (0, f.useState)(!1), [P, R] = (0, f.useState)(""), [E, L] = (0, f.useState)(!1), {
            [i.FEATURE_CUSTOM_QRCODE_STYLE]: U
        } = (0, n.useFeatures)([i.FEATURE_CUSTOM_QRCODE_STYLE]), [N, F] = (0, f.useState)(() => {
            var t, e, r;
            let i = { ...a,
                    ...O,
                    imageUrl: O.imageUrl || "",
                    hideBackgroundDots: null == (t = O.hideBackgroundDots) || t,
                    imageSize: null != (e = O.imageSize) ? e : .4,
                    margin: null != (r = O.margin) ? r : 10
                },
                n = i.imageUrl && i.imageUrl.trim(),
                s = {
                    width: 256,
                    height: 256,
                    data: C,
                    margin: i.margin,
                    qrOptions: {
                        typeNumber: 0,
                        mode: "Byte",
                        errorCorrectionLevel: i.errorCorrectionLevel
                    },
                    dotsOptions: {
                        color: i.dotColor,
                        type: i.dotType
                    },
                    backgroundOptions: {
                        color: i.backgroundColor
                    },
                    cornersSquareOptions: {
                        color: i.cornerSquareColor,
                        type: i.cornerSquareType
                    },
                    cornersDotOptions: {
                        color: i.cornerDotColor,
                        type: i.cornerDotType
                    }
                };
            return n && (s.image = i.imageUrl, s.imageOptions = {
                hideBackgroundDots: i.hideBackgroundDots,
                imageSize: i.imageSize,
                margin: 0,
                crossOrigin: "anonymous"
            }), new o.default(s)
        });
        (0, f.useEffect)(() => {
            B(O)
        }, [O]), (0, f.useEffect)(() => {
            let t = async t => {
                if (!t || !t.trim()) return void R("");
                try {
                    let e = t + (t.includes("?") ? "&" : "?") + "_t=" + Date.now(),
                        r = new window.Image;
                    r.crossOrigin = "anonymous", await new Promise((t, i) => {
                        r.onload = () => {
                            try {
                                let e = document.createElement("canvas");
                                e.width = r.width, e.height = r.height;
                                let n = e.getContext("2d");
                                if (!n) return void i(Error("Failed to get canvas context"));
                                n.drawImage(r, 0, 0), e.toBlob(e => {
                                    if (e) {
                                        let r = URL.createObjectURL(e);
                                        R(r), t()
                                    } else i(Error("Failed to create blob from canvas"))
                                }, "image/png")
                            } catch (t) {
                                i(t)
                            }
                        }, r.onerror = t => {
                            i(Error("Image load failed - check CORS configuration"))
                        }, r.src = e
                    })
                } catch (t) {
                    R("")
                }
            };
            return D.imageUrl ? t(D.imageUrl) : R(""), () => {
                P && P.startsWith("blob:") && URL.revokeObjectURL(P)
            }
        }, [D.imageUrl]), (0, f.useEffect)(() => {
            if (y) {
                let t = setTimeout(() => {
                    q.current && (q.current.firstChild && q.current.removeChild(q.current.firstChild), N.append(q.current))
                }, 50);
                return () => clearTimeout(t)
            }
        }, [y, N]), (0, f.useEffect)(() => {
            if (!N || !y) return;
            let t = setTimeout(() => {
                var t, e, r;
                let i = { ...a,
                        ...D,
                        imageUrl: D.imageUrl || "",
                        hideBackgroundDots: null == (t = D.hideBackgroundDots) || t,
                        imageSize: null != (e = D.imageSize) ? e : .4,
                        margin: null != (r = D.margin) ? r : 10
                    },
                    n = P || i.imageUrl && i.imageUrl.trim(),
                    o = {
                        data: C,
                        margin: i.margin,
                        qrOptions: {
                            typeNumber: 0,
                            mode: "Byte",
                            errorCorrectionLevel: i.errorCorrectionLevel
                        },
                        dotsOptions: {
                            color: i.dotColor,
                            type: i.dotType
                        },
                        backgroundOptions: {
                            color: i.backgroundColor
                        },
                        cornersSquareOptions: {
                            color: i.cornerSquareColor,
                            type: i.cornerSquareType
                        },
                        cornersDotOptions: {
                            color: i.cornerDotColor,
                            type: i.cornerDotType
                        }
                    };
                n && (o.image = P || i.imageUrl, o.imageOptions = {
                    hideBackgroundDots: i.hideBackgroundDots,
                    imageSize: i.imageSize,
                    margin: 0,
                    crossOrigin: "anonymous"
                }), N.update(o)
            }, 100);
            return () => clearTimeout(t)
        }, [N, C, D, y, P]);
        let H = async () => {
                try {
                    await navigator.clipboard.writeText(C), r.toaster.create({
                        title: M("qrCode.messages.copySuccess"),
                        description: M("qrCode.messages.copyDescription"),
                        type: "success",
                        duration: 2e3
                    })
                } catch (t) {
                    r.toaster.create({
                        title: M("qrCode.messages.copyError"),
                        description: M("qrCode.messages.copyErrorDescription"),
                        type: "error",
                        duration: 2e3
                    })
                }
            },
            Q = (t, e) => {
                B(r => ({ ...r,
                    [t]: e
                }))
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(v.default, {
                isOpen: y,
                onClose: b,
                title: S,
                maxWidth: "600px",
                maxHeight: "80vh",
                children: (0, e.jsxs)(p.VStack, {
                    gap: 4,
                    align: "center",
                    children: [(0, e.jsx)("div", {
                        ref: q,
                        style: {
                            width: "256px",
                            height: "256px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }), (0, e.jsx)(g.Text, {
                        fontSize: "sm",
                        color: {
                            base: "gray.600",
                            _dark: "gray.400"
                        },
                        textAlign: "center",
                        children: j || M("qrCode.description")
                    }), (0, e.jsx)(g.Text, {
                        fontSize: "xs",
                        color: {
                            base: "gray.500",
                            _dark: "gray.400"
                        },
                        textAlign: "center",
                        wordBreak: "break-all",
                        children: C
                    }), (0, e.jsx)(c.Button, {
                        size: "sm",
                        variant: "outline",
                        onClick: () => {
                            U ? A(!z) : L(!0)
                        },
                        children: (0, e.jsxs)(d.HStack, {
                            gap: 2,
                            children: [(0, e.jsx)(m.FaCog, {
                                size: 14
                            }), (0, e.jsx)(g.Text, {
                                children: z ? M("qrCode.settings.hide") : M("qrCode.settings.show")
                            }), !U && (0, e.jsx)(m.FaCrown, {
                                color: "#F59E0B",
                                size: 14
                            })]
                        })
                    }), z && U && (0, e.jsx)(s.Box, {
                        w: "100%",
                        p: 4,
                        children: (0, e.jsxs)(p.VStack, {
                            gap: 4,
                            align: "stretch",
                            children: [(0, e.jsx)(g.Text, {
                                fontWeight: "bold",
                                fontSize: "sm",
                                color: {
                                    base: "gray.900",
                                    _dark: "white"
                                },
                                children: M("qrCode.settings.title")
                            }), (0, e.jsxs)(d.HStack, {
                                gap: 4,
                                children: [(0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.dotColor")
                                    }), (0, e.jsx)(h.Input, {
                                        type: "color",
                                        value: D.dotColor,
                                        onChange: t => Q("dotColor", t.target.value),
                                        size: "sm"
                                    })]
                                }), (0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.backgroundColor")
                                    }), (0, e.jsx)(h.Input, {
                                        type: "color",
                                        value: D.backgroundColor,
                                        onChange: t => Q("backgroundColor", t.target.value),
                                        size: "sm"
                                    })]
                                })]
                            }), (0, e.jsxs)(d.HStack, {
                                gap: 4,
                                children: [(0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.cornerSquareColor")
                                    }), (0, e.jsx)(h.Input, {
                                        type: "color",
                                        value: D.cornerSquareColor,
                                        onChange: t => Q("cornerSquareColor", t.target.value),
                                        size: "sm"
                                    })]
                                }), (0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.cornerDotColor")
                                    }), (0, e.jsx)(h.Input, {
                                        type: "color",
                                        value: D.cornerDotColor,
                                        onChange: t => Q("cornerDotColor", t.target.value),
                                        size: "sm"
                                    })]
                                })]
                            }), (0, e.jsxs)(d.HStack, {
                                gap: 4,
                                children: [(0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.dotType")
                                    }), (0, e.jsxs)("select", {
                                        value: D.dotType,
                                        onChange: t => Q("dotType", t.target.value),
                                        style: {
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #e2e8f0",
                                            borderRadius: "6px",
                                            fontSize: "14px"
                                        },
                                        children: [(0, e.jsx)("option", {
                                            value: "square",
                                            children: M("qrCode.dotTypes.square")
                                        }), (0, e.jsx)("option", {
                                            value: "rounded",
                                            children: M("qrCode.dotTypes.rounded")
                                        }), (0, e.jsx)("option", {
                                            value: "extra-rounded",
                                            children: M("qrCode.dotTypes.extraRounded")
                                        }), (0, e.jsx)("option", {
                                            value: "classy",
                                            children: M("qrCode.dotTypes.classy")
                                        }), (0, e.jsx)("option", {
                                            value: "classy-rounded",
                                            children: M("qrCode.dotTypes.classyRounded")
                                        })]
                                    })]
                                }), (0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.cornerSquareType")
                                    }), (0, e.jsxs)("select", {
                                        value: D.cornerSquareType,
                                        onChange: t => Q("cornerSquareType", t.target.value),
                                        style: {
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #e2e8f0",
                                            borderRadius: "6px",
                                            fontSize: "14px"
                                        },
                                        children: [(0, e.jsx)("option", {
                                            value: "square",
                                            children: M("qrCode.cornerTypes.square")
                                        }), (0, e.jsx)("option", {
                                            value: "extra-rounded",
                                            children: M("qrCode.cornerTypes.extraRounded")
                                        })]
                                    })]
                                })]
                            }), (0, e.jsxs)(d.HStack, {
                                gap: 4,
                                children: [(0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.cornerDotType")
                                    }), (0, e.jsxs)("select", {
                                        value: D.cornerDotType,
                                        onChange: t => Q("cornerDotType", t.target.value),
                                        style: {
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #e2e8f0",
                                            borderRadius: "6px",
                                            fontSize: "14px"
                                        },
                                        children: [(0, e.jsx)("option", {
                                            value: "square",
                                            children: M("qrCode.cornerTypes.square")
                                        }), (0, e.jsx)("option", {
                                            value: "dot",
                                            children: M("qrCode.cornerTypes.dot")
                                        })]
                                    })]
                                }), (0, e.jsxs)(s.Box, {
                                    flex: 1,
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.errorCorrectionLevel")
                                    }), (0, e.jsxs)("select", {
                                        value: D.errorCorrectionLevel,
                                        onChange: t => Q("errorCorrectionLevel", t.target.value),
                                        style: {
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #e2e8f0",
                                            borderRadius: "6px",
                                            fontSize: "14px"
                                        },
                                        children: [(0, e.jsx)("option", {
                                            value: "L",
                                            children: M("qrCode.errorLevels.L")
                                        }), (0, e.jsx)("option", {
                                            value: "M",
                                            children: M("qrCode.errorLevels.M")
                                        }), (0, e.jsx)("option", {
                                            value: "Q",
                                            children: M("qrCode.errorLevels.Q")
                                        }), (0, e.jsx)("option", {
                                            value: "H",
                                            children: M("qrCode.errorLevels.H")
                                        })]
                                    })]
                                })]
                            }), (0, e.jsxs)(s.Box, {
                                children: [(0, e.jsx)(g.Text, {
                                    fontSize: "xs",
                                    mb: 1,
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: M("qrCode.settings.margin")
                                }), (0, e.jsx)(h.Input, {
                                    type: "number",
                                    value: D.margin,
                                    onChange: t => Q("margin", parseInt(t.target.value) || 10),
                                    size: "sm"
                                })]
                            }), (0, e.jsxs)(s.Box, {
                                children: [(0, e.jsx)(g.Text, {
                                    fontSize: "xs",
                                    mb: 1,
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: M("qrCode.settings.centerImage")
                                }), (0, e.jsxs)(p.VStack, {
                                    gap: 2,
                                    children: [(0, e.jsx)(c.Button, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: () => T(!0),
                                        children: (0, e.jsxs)(d.HStack, {
                                            gap: 2,
                                            children: [(0, e.jsx)(m.FaImage, {
                                                size: 14
                                            }), (0, e.jsx)(g.Text, {
                                                children: M("qrCode.settings.selectImage")
                                            })]
                                        })
                                    }), D.imageUrl && (0, e.jsxs)(s.Box, {
                                        children: [(0, e.jsx)(g.Text, {
                                            fontSize: "xs",
                                            mb: 2,
                                            color: {
                                                base: "gray.700",
                                                _dark: "gray.300"
                                            },
                                            children: M("qrCode.settings.preview")
                                        }), (0, e.jsx)(l.Image, {
                                            src: D.imageUrl,
                                            alt: "Preview",
                                            maxW: "100px",
                                            maxH: "100px",
                                            objectFit: "contain"
                                        }), (0, e.jsx)(c.Button, {
                                            size: "xs",
                                            variant: "ghost",
                                            colorScheme: "red",
                                            onClick: () => B(t => ({ ...t,
                                                imageUrl: ""
                                            })),
                                            mt: 1,
                                            children: M("qrCode.settings.deleteImage")
                                        })]
                                    })]
                                })]
                            }), D.imageUrl && (0, e.jsxs)(p.VStack, {
                                gap: 2,
                                children: [(0, e.jsxs)(s.Box, {
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.imageSize")
                                    }), (0, e.jsx)(h.Input, {
                                        type: "number",
                                        value: D.imageSize,
                                        onChange: t => Q("imageSize", parseFloat(t.target.value) || .4),
                                        min: .1,
                                        max: .8,
                                        step: .1,
                                        size: "sm"
                                    })]
                                }), (0, e.jsxs)(s.Box, {
                                    children: [(0, e.jsx)(g.Text, {
                                        fontSize: "xs",
                                        mb: 1,
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.hideBackgroundDots")
                                    }), (0, e.jsx)("input", {
                                        type: "checkbox",
                                        checked: D.hideBackgroundDots,
                                        onChange: t => Q("hideBackgroundDots", t.target.checked),
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }), (0, e.jsx)(g.Text, {
                                        as: "span",
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        children: M("qrCode.settings.hideBackgroundDots")
                                    })]
                                })]
                            })]
                        })
                    }), (0, e.jsxs)(d.HStack, {
                        gap: 3,
                        children: [(0, e.jsx)(c.Button, {
                            size: "sm",
                            colorScheme: "blue",
                            onClick: H,
                            children: (0, e.jsxs)(d.HStack, {
                                gap: 2,
                                children: [(0, e.jsx)(m.FaCopy, {
                                    size: 14
                                }), (0, e.jsx)(g.Text, {
                                    children: M("qrCode.actions.copyLink")
                                })]
                            })
                        }), (0, e.jsx)(c.Button, {
                            size: "sm",
                            colorScheme: "green",
                            onClick: () => {
                                if (N) try {
                                    N.download({
                                        extension: "png",
                                        name: k.replace(".png", "")
                                    }), r.toaster.create({
                                        title: M("qrCode.messages.downloadSuccess"),
                                        description: M("qrCode.messages.downloadDescription"),
                                        type: "success",
                                        duration: 2e3
                                    })
                                } catch (t) {
                                    r.toaster.create({
                                        title: M("qrCode.messages.downloadError"),
                                        description: M("qrCode.messages.downloadErrorDescription"),
                                        type: "error",
                                        duration: 2e3
                                    })
                                }
                            },
                            children: (0, e.jsxs)(d.HStack, {
                                gap: 2,
                                children: [(0, e.jsx)(m.FaDownload, {
                                    size: 14
                                }), (0, e.jsx)(g.Text, {
                                    children: M("qrCode.actions.downloadQR")
                                })]
                            })
                        })]
                    })]
                })
            }), (0, e.jsx)(x.default, {
                isOpen: I,
                onClose: () => T(!1),
                onSelect: t => {
                    if (t.length > 0) {
                        let e = t[0];
                        B(t => ({ ...t,
                            imageUrl: e.filePath
                        })), T(!1)
                    }
                },
                allowMultiple: !1,
                fileTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"],
                title: "Chọn hình ảnh cho QR Code"
            }), (0, e.jsx)(u.Portal, {
                children: (0, e.jsx)(_.default, {
                    isOpen: E,
                    onClose: () => L(!1),
                    featureKey: i.FEATURE_CUSTOM_QRCODE_STYLE,
                    featureName: M("qrCode.settings.customStyleFeature", "Tùy chỉnh kiểu QR Code")
                })
            })]
        })
    }], 905725)
}]);

//# debugId=af3727a0-2169-ad1b-1642-60808d48e84d
//# sourceMappingURL=718376c9c8dd1f98.js.map