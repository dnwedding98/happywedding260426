;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "22dabb45-a0f5-e91b-76da-6535c59a7aab")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 541356, 422957, t => {
    "use strict";
    let e = ["top", "right", "bottom", "left"],
        n = Math.min,
        i = Math.max,
        r = Math.round,
        o = Math.floor,
        l = t => ({
            x: t,
            y: t
        }),
        a = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        f = {
            start: "end",
            end: "start"
        };

    function c(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function s(t) {
        return t.split("-")[0]
    }

    function u(t) {
        return t.split("-")[1]
    }

    function d(t) {
        return "x" === t ? "y" : "x"
    }

    function p(t) {
        return "y" === t ? "height" : "width"
    }
    let h = new Set(["top", "bottom"]);

    function g(t) {
        return h.has(s(t)) ? "y" : "x"
    }

    function m(t) {
        return t.replace(/start|end/g, t => f[t])
    }
    let v = ["left", "right"],
        y = ["right", "left"],
        w = ["top", "bottom"],
        x = ["bottom", "top"];

    function b(t) {
        return t.replace(/left|right|bottom|top/g, t => a[t])
    }

    function R(t) {
        return "number" != typeof t ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        } : {
            top: t,
            right: t,
            bottom: t,
            left: t
        }
    }

    function A(t) {
        let {
            x: e,
            y: n,
            width: i,
            height: r
        } = t;
        return {
            width: i,
            height: r,
            top: n,
            left: e,
            right: e + i,
            bottom: n + r,
            x: e,
            y: n
        }
    }

    function P(t, e, n) {
        let i, {
                reference: r,
                floating: o
            } = t,
            l = g(e),
            a = d(g(e)),
            f = p(a),
            c = s(e),
            h = "y" === l,
            m = r.x + r.width / 2 - o.width / 2,
            v = r.y + r.height / 2 - o.height / 2,
            y = r[f] / 2 - o[f] / 2;
        switch (c) {
            case "top":
                i = {
                    x: m,
                    y: r.y - o.height
                };
                break;
            case "bottom":
                i = {
                    x: m,
                    y: r.y + r.height
                };
                break;
            case "right":
                i = {
                    x: r.x + r.width,
                    y: v
                };
                break;
            case "left":
                i = {
                    x: r.x - o.width,
                    y: v
                };
                break;
            default:
                i = {
                    x: r.x,
                    y: r.y
                }
        }
        switch (u(e)) {
            case "start":
                i[a] -= y * (n && h ? -1 : 1);
                break;
            case "end":
                i[a] += y * (n && h ? -1 : 1)
        }
        return i
    }
    let T = async (t, e, n) => {
        let {
            placement: i = "bottom",
            strategy: r = "absolute",
            middleware: o = [],
            platform: l
        } = n, a = o.filter(Boolean), f = await (null == l.isRTL ? void 0 : l.isRTL(e)), c = await l.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }), {
            x: s,
            y: u
        } = P(c, i, f), d = i, p = {}, h = 0;
        for (let n = 0; n < a.length; n++) {
            let {
                name: o,
                fn: g
            } = a[n], {
                x: m,
                y: v,
                data: y,
                reset: w
            } = await g({
                x: s,
                y: u,
                initialPlacement: i,
                placement: d,
                strategy: r,
                middlewareData: p,
                rects: c,
                platform: l,
                elements: {
                    reference: t,
                    floating: e
                }
            });
            s = null != m ? m : s, u = null != v ? v : u, p = { ...p,
                [o]: { ...p[o],
                    ...y
                }
            }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (c = !0 === w.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
            }) : w.rects), {
                x: s,
                y: u
            } = P(c, d, f)), n = -1)
        }
        return {
            x: s,
            y: u,
            placement: d,
            strategy: r,
            middlewareData: p
        }
    };
    async function S(t, e) {
        var n;
        void 0 === e && (e = {});
        let {
            x: i,
            y: r,
            platform: o,
            rects: l,
            elements: a,
            strategy: f
        } = t, {
            boundary: s = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0
        } = c(e, t), g = R(h), m = a[p ? "floating" === d ? "reference" : "floating" : d], v = A(await o.getClippingRect({
            element: null == (n = await (null == o.isElement ? void 0 : o.isElement(m))) || n ? m : m.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
            boundary: s,
            rootBoundary: u,
            strategy: f
        })), y = "floating" === d ? {
            x: i,
            y: r,
            width: l.floating.width,
            height: l.floating.height
        } : l.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), x = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
            x: 1,
            y: 1
        }, b = A(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: w,
            strategy: f
        }) : y);
        return {
            top: (v.top - b.top + g.top) / x.y,
            bottom: (b.bottom - v.bottom + g.bottom) / x.y,
            left: (v.left - b.left + g.left) / x.x,
            right: (b.right - v.right + g.right) / x.x
        }
    }

    function L(t, e) {
        return {
            top: t.top - e.height,
            right: t.right - e.width,
            bottom: t.bottom - e.height,
            left: t.left - e.width
        }
    }

    function O(t) {
        return e.some(e => t[e] >= 0)
    }
    let E = new Set(["left", "top"]);
    async function C(t, e) {
        let {
            placement: n,
            platform: i,
            elements: r
        } = t, o = await (null == i.isRTL ? void 0 : i.isRTL(r.floating)), l = s(n), a = u(n), f = "y" === g(n), d = E.has(l) ? -1 : 1, p = o && f ? -1 : 1, h = c(e, t), {
            mainAxis: m,
            crossAxis: v,
            alignmentAxis: y
        } = "number" == typeof h ? {
            mainAxis: h,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: h.mainAxis || 0,
            crossAxis: h.crossAxis || 0,
            alignmentAxis: h.alignmentAxis
        };
        return a && "number" == typeof y && (v = "end" === a ? -1 * y : y), f ? {
            x: v * p,
            y: m * d
        } : {
            x: m * d,
            y: v * p
        }
    }

    function D() {
        return "undefined" != typeof window
    }

    function H(t) {
        return M(t) ? (t.nodeName || "").toLowerCase() : "#document"
    }

    function z(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
    }

    function W(t) {
        var e;
        return null == (e = (M(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
    }

    function M(t) {
        return !!D() && (t instanceof Node || t instanceof z(t).Node)
    }

    function F(t) {
        return !!D() && (t instanceof Element || t instanceof z(t).Element)
    }

    function k(t) {
        return !!D() && (t instanceof HTMLElement || t instanceof z(t).HTMLElement)
    }

    function B(t) {
        return !!D() && "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof z(t).ShadowRoot)
    }
    let V = new Set(["inline", "contents"]);

    function N(t) {
        let {
            overflow: e,
            overflowX: n,
            overflowY: i,
            display: r
        } = G(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !V.has(r)
    }
    let I = new Set(["table", "td", "th"]),
        j = [":popover-open", ":modal"];

    function _(t) {
        return j.some(e => {
            try {
                return t.matches(e)
            } catch (t) {
                return !1
            }
        })
    }
    let q = ["transform", "translate", "scale", "rotate", "perspective"],
        U = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        K = ["paint", "layout", "strict", "content"];

    function J(t) {
        let e = X(),
            n = F(t) ? G(t) : t;
        return q.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || U.some(t => (n.willChange || "").includes(t)) || K.some(t => (n.contain || "").includes(t))
    }

    function X() {
        return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
    }
    let Y = new Set(["html", "body", "#document"]);

    function $(t) {
        return Y.has(H(t))
    }

    function G(t) {
        return z(t).getComputedStyle(t)
    }

    function Q(t) {
        return F(t) ? {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        } : {
            scrollLeft: t.scrollX,
            scrollTop: t.scrollY
        }
    }

    function Z(t) {
        if ("html" === H(t)) return t;
        let e = t.assignedSlot || t.parentNode || B(t) && t.host || W(t);
        return B(e) ? e.host : e
    }

    function tt(t, e, n) {
        var i;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        let r = function t(e) {
                let n = Z(e);
                return $(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : k(n) && N(n) ? n : t(n)
            }(t),
            o = r === (null == (i = t.ownerDocument) ? void 0 : i.body),
            l = z(r);
        if (o) {
            let t = te(l);
            return e.concat(l, l.visualViewport || [], N(r) ? r : [], t && n ? tt(t) : [])
        }
        return e.concat(r, tt(r, [], n))
    }

    function te(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
    }

    function tn(t) {
        let e = G(t),
            n = parseFloat(e.width) || 0,
            i = parseFloat(e.height) || 0,
            o = k(t),
            l = o ? t.offsetWidth : n,
            a = o ? t.offsetHeight : i,
            f = r(n) !== l || r(i) !== a;
        return f && (n = l, i = a), {
            width: n,
            height: i,
            $: f
        }
    }

    function ti(t) {
        return F(t) ? t : t.contextElement
    }

    function tr(t) {
        let e = ti(t);
        if (!k(e)) return l(1);
        let n = e.getBoundingClientRect(),
            {
                width: i,
                height: o,
                $: a
            } = tn(e),
            f = (a ? r(n.width) : n.width) / i,
            c = (a ? r(n.height) : n.height) / o;
        return f && Number.isFinite(f) || (f = 1), c && Number.isFinite(c) || (c = 1), {
            x: f,
            y: c
        }
    }
    let to = l(0);

    function tl(t) {
        let e = z(t);
        return X() && e.visualViewport ? {
            x: e.visualViewport.offsetLeft,
            y: e.visualViewport.offsetTop
        } : to
    }

    function ta(t, e, n, i) {
        var r;
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        let o = t.getBoundingClientRect(),
            a = ti(t),
            f = l(1);
        e && (i ? F(i) && (f = tr(i)) : f = tr(t));
        let c = (void 0 === (r = n) && (r = !1), i && (!r || i === z(a)) && r) ? tl(a) : l(0),
            s = (o.left + c.x) / f.x,
            u = (o.top + c.y) / f.y,
            d = o.width / f.x,
            p = o.height / f.y;
        if (a) {
            let t = z(a),
                e = i && F(i) ? z(i) : i,
                n = t,
                r = te(n);
            for (; r && i && e !== n;) {
                let t = tr(r),
                    e = r.getBoundingClientRect(),
                    i = G(r),
                    o = e.left + (r.clientLeft + parseFloat(i.paddingLeft)) * t.x,
                    l = e.top + (r.clientTop + parseFloat(i.paddingTop)) * t.y;
                s *= t.x, u *= t.y, d *= t.x, p *= t.y, s += o, u += l, r = te(n = z(r))
            }
        }
        return A({
            width: d,
            height: p,
            x: s,
            y: u
        })
    }

    function tf(t, e) {
        let n = Q(t).scrollLeft;
        return e ? e.left + n : ta(W(t)).left + n
    }

    function tc(t, e) {
        let n = t.getBoundingClientRect();
        return {
            x: n.left + e.scrollLeft - tf(t, n),
            y: n.top + e.scrollTop
        }
    }
    let ts = new Set(["absolute", "fixed"]);

    function tu(t, e, n) {
        var r;
        let o;
        if ("viewport" === e) o = function(t, e) {
            let n = z(t),
                i = W(t),
                r = n.visualViewport,
                o = i.clientWidth,
                l = i.clientHeight,
                a = 0,
                f = 0;
            if (r) {
                o = r.width, l = r.height;
                let t = X();
                (!t || t && "fixed" === e) && (a = r.offsetLeft, f = r.offsetTop)
            }
            let c = tf(i);
            if (c <= 0) {
                let t = i.ownerDocument,
                    e = t.body,
                    n = getComputedStyle(e),
                    r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                    l = Math.abs(i.clientWidth - e.clientWidth - r);
                l <= 25 && (o -= l)
            } else c <= 25 && (o += c);
            return {
                width: o,
                height: l,
                x: a,
                y: f
            }
        }(t, n);
        else if ("document" === e) {
            let e, n, l, a, f, c, s;
            r = W(t), e = W(r), n = Q(r), l = r.ownerDocument.body, a = i(e.scrollWidth, e.clientWidth, l.scrollWidth, l.clientWidth), f = i(e.scrollHeight, e.clientHeight, l.scrollHeight, l.clientHeight), c = -n.scrollLeft + tf(r), s = -n.scrollTop, "rtl" === G(l).direction && (c += i(e.clientWidth, l.clientWidth) - a), o = {
                width: a,
                height: f,
                x: c,
                y: s
            }
        } else if (F(e)) {
            let t, i, r, a, f, c;
            i = (t = ta(e, !0, "fixed" === n)).top + e.clientTop, r = t.left + e.clientLeft, a = k(e) ? tr(e) : l(1), f = e.clientWidth * a.x, c = e.clientHeight * a.y, o = {
                width: f,
                height: c,
                x: r * a.x,
                y: i * a.y
            }
        } else {
            let n = tl(t);
            o = {
                x: e.x - n.x,
                y: e.y - n.y,
                width: e.width,
                height: e.height
            }
        }
        return A(o)
    }

    function td(t) {
        return "static" === G(t).position
    }

    function tp(t, e) {
        if (!k(t) || "fixed" === G(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return W(t) === n && (n = n.ownerDocument.body), n
    }

    function th(t, e) {
        var n;
        let i = z(t);
        if (_(t)) return i;
        if (!k(t)) {
            let e = Z(t);
            for (; e && !$(e);) {
                if (F(e) && !td(e)) return e;
                e = Z(e)
            }
            return i
        }
        let r = tp(t, e);
        for (; r && (n = r, I.has(H(n))) && td(r);) r = tp(r, e);
        return r && $(r) && td(r) && !J(r) ? i : r || function(t) {
            let e = Z(t);
            for (; k(e) && !$(e);) {
                if (J(e)) return e;
                if (_(e)) break;
                e = Z(e)
            }
            return null
        }(t) || i
    }
    let tg = async function(t) {
            let e = this.getOffsetParent || th,
                n = this.getDimensions,
                i = await n(t.floating);
            return {
                reference: function(t, e, n) {
                    let i = k(e),
                        r = W(e),
                        o = "fixed" === n,
                        a = ta(t, !0, o, e),
                        f = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = l(0);
                    if (i || !i && !o)
                        if (("body" !== H(e) || N(r)) && (f = Q(e)), i) {
                            let t = ta(e, !0, o, e);
                            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
                        } else r && (c.x = tf(r));
                    o && !i && r && (c.x = tf(r));
                    let s = !r || i || o ? l(0) : tc(r, f);
                    return {
                        x: a.left + f.scrollLeft - c.x - s.x,
                        y: a.top + f.scrollTop - c.y - s.y,
                        width: a.width,
                        height: a.height
                    }
                }(t.reference, await e(t.floating), t.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: i.width,
                    height: i.height
                }
            }
        },
        tm = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                let {
                    elements: e,
                    rect: n,
                    offsetParent: i,
                    strategy: r
                } = t, o = "fixed" === r, a = W(i), f = !!e && _(e.floating);
                if (i === a || f && o) return n;
                let c = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    s = l(1),
                    u = l(0),
                    d = k(i);
                if ((d || !d && !o) && (("body" !== H(i) || N(a)) && (c = Q(i)), k(i))) {
                    let t = ta(i);
                    s = tr(i), u.x = t.x + i.clientLeft, u.y = t.y + i.clientTop
                }
                let p = !a || d || o ? l(0) : tc(a, c);
                return {
                    width: n.width * s.x,
                    height: n.height * s.y,
                    x: n.x * s.x - c.scrollLeft * s.x + u.x + p.x,
                    y: n.y * s.y - c.scrollTop * s.y + u.y + p.y
                }
            },
            getDocumentElement: W,
            getClippingRect: function(t) {
                let {
                    element: e,
                    boundary: r,
                    rootBoundary: o,
                    strategy: l
                } = t, a = [..."clippingAncestors" === r ? _(e) ? [] : function(t, e) {
                    let n = e.get(t);
                    if (n) return n;
                    let i = tt(t, [], !1).filter(t => F(t) && "body" !== H(t)),
                        r = null,
                        o = "fixed" === G(t).position,
                        l = o ? Z(t) : t;
                    for (; F(l) && !$(l);) {
                        let e = G(l),
                            n = J(l);
                        n || "fixed" !== e.position || (r = null), (o ? !n && !r : !n && "static" === e.position && !!r && ts.has(r.position) || N(l) && !n && function t(e, n) {
                            let i = Z(e);
                            return !(i === n || !F(i) || $(i)) && ("fixed" === G(i).position || t(i, n))
                        }(t, l)) ? i = i.filter(t => t !== l) : r = e, l = Z(l)
                    }
                    return e.set(t, i), i
                }(e, this._c) : [].concat(r), o], f = a[0], c = a.reduce((t, r) => {
                    let o = tu(e, r, l);
                    return t.top = i(o.top, t.top), t.right = n(o.right, t.right), t.bottom = n(o.bottom, t.bottom), t.left = i(o.left, t.left), t
                }, tu(e, f, l));
                return {
                    width: c.right - c.left,
                    height: c.bottom - c.top,
                    x: c.left,
                    y: c.top
                }
            },
            getOffsetParent: th,
            getElementRects: tg,
            getClientRects: function(t) {
                return Array.from(t.getClientRects())
            },
            getDimensions: function(t) {
                let {
                    width: e,
                    height: n
                } = tn(t);
                return {
                    width: e,
                    height: n
                }
            },
            getScale: tr,
            isElement: F,
            isRTL: function(t) {
                return "rtl" === G(t).direction
            }
        };

    function tv(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
    }

    function ty(t, e, r, l) {
        let a;
        void 0 === l && (l = {});
        let {
            ancestorScroll: f = !0,
            ancestorResize: c = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: u = "function" == typeof IntersectionObserver,
            animationFrame: d = !1
        } = l, p = ti(t), h = f || c ? [...p ? tt(p) : [], ...tt(e)] : [];
        h.forEach(t => {
            f && t.addEventListener("scroll", r, {
                passive: !0
            }), c && t.addEventListener("resize", r)
        });
        let g = p && u ? function(t, e) {
                let r, l = null,
                    a = W(t);

                function f() {
                    var t;
                    clearTimeout(r), null == (t = l) || t.disconnect(), l = null
                }
                return ! function c(s, u) {
                    void 0 === s && (s = !1), void 0 === u && (u = 1), f();
                    let d = t.getBoundingClientRect(),
                        {
                            left: p,
                            top: h,
                            width: g,
                            height: m
                        } = d;
                    if (s || e(), !g || !m) return;
                    let v = {
                            rootMargin: -o(h) + "px " + -o(a.clientWidth - (p + g)) + "px " + -o(a.clientHeight - (h + m)) + "px " + -o(p) + "px",
                            threshold: i(0, n(1, u)) || 1
                        },
                        y = !0;

                    function w(e) {
                        let n = e[0].intersectionRatio;
                        if (n !== u) {
                            if (!y) return c();
                            n ? c(!1, n) : r = setTimeout(() => {
                                c(!1, 1e-7)
                            }, 1e3)
                        }
                        1 !== n || tv(d, t.getBoundingClientRect()) || c(), y = !1
                    }
                    try {
                        l = new IntersectionObserver(w, { ...v,
                            root: a.ownerDocument
                        })
                    } catch (t) {
                        l = new IntersectionObserver(w, v)
                    }
                    l.observe(t)
                }(!0), f
            }(p, r) : null,
            m = -1,
            v = null;
        s && (v = new ResizeObserver(t => {
            let [n] = t;
            n && n.target === p && v && (v.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                var t;
                null == (t = v) || t.observe(e)
            })), r()
        }), p && !d && v.observe(p), v.observe(e));
        let y = d ? ta(t) : null;
        return d && function e() {
            let n = ta(t);
            y && !tv(y, n) && r(), y = n, a = requestAnimationFrame(e)
        }(), r(), () => {
            var t;
            h.forEach(t => {
                f && t.removeEventListener("scroll", r), c && t.removeEventListener("resize", r)
            }), null == g || g(), null == (t = v) || t.disconnect(), v = null, d && cancelAnimationFrame(a)
        }
    }
    let tw = function(t) {
            return void 0 === t && (t = 0), {
                name: "offset",
                options: t,
                async fn(e) {
                    var n, i;
                    let {
                        x: r,
                        y: o,
                        placement: l,
                        middlewareData: a
                    } = e, f = await C(e, t);
                    return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (i = a.arrow) && i.alignmentOffset ? {} : {
                        x: r + f.x,
                        y: o + f.y,
                        data: { ...f,
                            placement: l
                        }
                    }
                }
            }
        },
        tx = function(t) {
            return void 0 === t && (t = {}), {
                name: "shift",
                options: t,
                async fn(e) {
                    let {
                        x: r,
                        y: o,
                        placement: l
                    } = e, {
                        mainAxis: a = !0,
                        crossAxis: f = !1,
                        limiter: u = {
                            fn: t => {
                                let {
                                    x: e,
                                    y: n
                                } = t;
                                return {
                                    x: e,
                                    y: n
                                }
                            }
                        },
                        ...p
                    } = c(t, e), h = {
                        x: r,
                        y: o
                    }, m = await S(e, p), v = g(s(l)), y = d(v), w = h[y], x = h[v];
                    if (a) {
                        let t = "y" === y ? "top" : "left",
                            e = "y" === y ? "bottom" : "right",
                            r = w + m[t],
                            o = w - m[e];
                        w = i(r, n(w, o))
                    }
                    if (f) {
                        let t = "y" === v ? "top" : "left",
                            e = "y" === v ? "bottom" : "right",
                            r = x + m[t],
                            o = x - m[e];
                        x = i(r, n(x, o))
                    }
                    let b = u.fn({ ...e,
                        [y]: w,
                        [v]: x
                    });
                    return { ...b,
                        data: {
                            x: b.x - r,
                            y: b.y - o,
                            enabled: {
                                [y]: a,
                                [v]: f
                            }
                        }
                    }
                }
            }
        },
        tb = function(t) {
            return void 0 === t && (t = {}), {
                name: "flip",
                options: t,
                async fn(e) {
                    var n, i, r, o, l, a, f, h;
                    let R, A, P, {
                            placement: T,
                            middlewareData: L,
                            rects: O,
                            initialPlacement: E,
                            platform: C,
                            elements: D
                        } = e,
                        {
                            mainAxis: H = !0,
                            crossAxis: z = !0,
                            fallbackPlacements: W,
                            fallbackStrategy: M = "bestFit",
                            fallbackAxisSideDirection: F = "none",
                            flipAlignment: k = !0,
                            ...B
                        } = c(t, e);
                    if (null != (n = L.arrow) && n.alignmentOffset) return {};
                    let V = s(T),
                        N = g(E),
                        I = s(E) === E,
                        j = await (null == C.isRTL ? void 0 : C.isRTL(D.floating)),
                        _ = W || (I || !k ? [b(E)] : (R = b(E), [m(E), R, m(R)])),
                        q = "none" !== F;
                    !W && q && _.push(...(A = u(E), P = function(t, e, n) {
                        switch (t) {
                            case "top":
                            case "bottom":
                                if (n) return e ? y : v;
                                return e ? v : y;
                            case "left":
                            case "right":
                                return e ? w : x;
                            default:
                                return []
                        }
                    }(s(E), "start" === F, j), A && (P = P.map(t => t + "-" + A), k && (P = P.concat(P.map(m)))), P));
                    let U = [E, ..._],
                        K = await S(e, B),
                        J = [],
                        X = (null == (i = L.flip) ? void 0 : i.overflows) || [];
                    if (H && J.push(K[V]), z) {
                        let t, e, n, i, r = (a = T, f = O, void 0 === (h = j) && (h = !1), t = u(a), n = p(e = d(g(a))), i = "x" === e ? t === (h ? "end" : "start") ? "right" : "left" : "start" === t ? "bottom" : "top", f.reference[n] > f.floating[n] && (i = b(i)), [i, b(i)]);
                        J.push(K[r[0]], K[r[1]])
                    }
                    if (X = [...X, {
                            placement: T,
                            overflows: J
                        }], !J.every(t => t <= 0)) {
                        let t = ((null == (r = L.flip) ? void 0 : r.index) || 0) + 1,
                            e = U[t];
                        if (e && ("alignment" !== z || N === g(e) || X.every(t => g(t.placement) !== N || t.overflows[0] > 0))) return {
                            data: {
                                index: t,
                                overflows: X
                            },
                            reset: {
                                placement: e
                            }
                        };
                        let n = null == (o = X.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : o.placement;
                        if (!n) switch (M) {
                            case "bestFit":
                                {
                                    let t = null == (l = X.filter(t => {
                                        if (q) {
                                            let e = g(t.placement);
                                            return e === N || "y" === e
                                        }
                                        return !0
                                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : l[0];t && (n = t);
                                    break
                                }
                            case "initialPlacement":
                                n = E
                        }
                        if (T !== n) return {
                            reset: {
                                placement: n
                            }
                        }
                    }
                    return {}
                }
            }
        },
        tR = function(t) {
            return void 0 === t && (t = {}), {
                name: "size",
                options: t,
                async fn(e) {
                    var r, o;
                    let l, a, {
                            placement: f,
                            rects: d,
                            platform: p,
                            elements: h
                        } = e,
                        {
                            apply: m = () => {},
                            ...v
                        } = c(t, e),
                        y = await S(e, v),
                        w = s(f),
                        x = u(f),
                        b = "y" === g(f),
                        {
                            width: R,
                            height: A
                        } = d.floating;
                    "top" === w || "bottom" === w ? (l = w, a = x === (await (null == p.isRTL ? void 0 : p.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (a = w, l = "end" === x ? "top" : "bottom");
                    let P = A - y.top - y.bottom,
                        T = R - y.left - y.right,
                        L = n(A - y[l], P),
                        O = n(R - y[a], T),
                        E = !e.middlewareData.shift,
                        C = L,
                        D = O;
                    if (null != (r = e.middlewareData.shift) && r.enabled.x && (D = T), null != (o = e.middlewareData.shift) && o.enabled.y && (C = P), E && !x) {
                        let t = i(y.left, 0),
                            e = i(y.right, 0),
                            n = i(y.top, 0),
                            r = i(y.bottom, 0);
                        b ? D = R - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : C = A - 2 * (0 !== n || 0 !== r ? n + r : i(y.top, y.bottom))
                    }
                    await m({ ...e,
                        availableWidth: D,
                        availableHeight: C
                    });
                    let H = await p.getDimensions(h.floating);
                    return R !== H.width || A !== H.height ? {
                        reset: {
                            rects: !0
                        }
                    } : {}
                }
            }
        },
        tA = function(t) {
            return void 0 === t && (t = {}), {
                name: "hide",
                options: t,
                async fn(e) {
                    let {
                        rects: n
                    } = e, {
                        strategy: i = "referenceHidden",
                        ...r
                    } = c(t, e);
                    switch (i) {
                        case "referenceHidden":
                            {
                                let t = L(await S(e, { ...r,
                                    elementContext: "reference"
                                }), n.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: t,
                                        referenceHidden: O(t)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let t = L(await S(e, { ...r,
                                    altBoundary: !0
                                }), n.floating);
                                return {
                                    data: {
                                        escapedOffsets: t,
                                        escaped: O(t)
                                    }
                                }
                            }
                        default:
                            return {}
                    }
                }
            }
        },
        tP = t => ({
            name: "arrow",
            options: t,
            async fn(e) {
                let {
                    x: r,
                    y: o,
                    placement: l,
                    rects: a,
                    platform: f,
                    elements: s,
                    middlewareData: h
                } = e, {
                    element: m,
                    padding: v = 0
                } = c(t, e) || {};
                if (null == m) return {};
                let y = R(v),
                    w = {
                        x: r,
                        y: o
                    },
                    x = d(g(l)),
                    b = p(x),
                    A = await f.getDimensions(m),
                    P = "y" === x,
                    T = P ? "clientHeight" : "clientWidth",
                    S = a.reference[b] + a.reference[x] - w[x] - a.floating[b],
                    L = w[x] - a.reference[x],
                    O = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(m)),
                    E = O ? O[T] : 0;
                E && await (null == f.isElement ? void 0 : f.isElement(O)) || (E = s.floating[T] || a.floating[b]);
                let C = E / 2 - A[b] / 2 - 1,
                    D = n(y[P ? "top" : "left"], C),
                    H = n(y[P ? "bottom" : "right"], C),
                    z = E - A[b] - H,
                    W = E / 2 - A[b] / 2 + (S / 2 - L / 2),
                    M = i(D, n(W, z)),
                    F = !h.arrow && null != u(l) && W !== M && a.reference[b] / 2 - (W < D ? D : H) - A[b] / 2 < 0,
                    k = F ? W < D ? W - D : W - z : 0;
                return {
                    [x]: w[x] + k,
                    data: {
                        [x]: M,
                        centerOffset: W - M - k,
                        ...F && {
                            alignmentOffset: k
                        }
                    },
                    reset: F
                }
            }
        }),
        tT = function(t) {
            return void 0 === t && (t = {}), {
                options: t,
                fn(e) {
                    let {
                        x: n,
                        y: i,
                        placement: r,
                        rects: o,
                        middlewareData: l
                    } = e, {
                        offset: a = 0,
                        mainAxis: f = !0,
                        crossAxis: u = !0
                    } = c(t, e), p = {
                        x: n,
                        y: i
                    }, h = g(r), m = d(h), v = p[m], y = p[h], w = c(a, e), x = "number" == typeof w ? {
                        mainAxis: w,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...w
                    };
                    if (f) {
                        let t = "y" === m ? "height" : "width",
                            e = o.reference[m] - o.floating[t] + x.mainAxis,
                            n = o.reference[m] + o.reference[t] - x.mainAxis;
                        v < e ? v = e : v > n && (v = n)
                    }
                    if (u) {
                        var b, R;
                        let t = "y" === m ? "width" : "height",
                            e = E.has(s(r)),
                            n = o.reference[h] - o.floating[t] + (e && (null == (b = l.offset) ? void 0 : b[h]) || 0) + (e ? 0 : x.crossAxis),
                            i = o.reference[h] + o.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[h]) || 0) - (e ? x.crossAxis : 0);
                        y < n ? y = n : y > i && (y = i)
                    }
                    return {
                        [m]: v,
                        [h]: y
                    }
                }
            }
        },
        tS = (t, e, n) => {
            let i = new Map,
                r = {
                    platform: tm,
                    ...n
                },
                o = { ...r.platform,
                    _c: i
                };
            return T(t, e, { ...r,
                platform: o
            })
        };
    t.s(["arrow", () => tP, "autoUpdate", () => ty, "computePosition", () => tS, "flip", () => tb, "hide", () => tA, "limitShift", () => tT, "offset", () => tw, "shift", () => tx, "size", () => tR], 422957);
    var tL = t.i(841158),
        tO = t.i(409078);

    function tE() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if ("function" == typeof DOMRect) return new DOMRect(t, e, n, i);
        let r = {
            x: t,
            y: e,
            width: n,
            height: i,
            top: e,
            right: t + n,
            bottom: e + i,
            left: t
        };
        return { ...r,
            toJSON: () => r
        }
    }
    var tC = t => ({
            variable: t,
            reference: "var(".concat(t, ")")
        }),
        tD = {
            arrowSize: tC("--arrow-size"),
            arrowSizeHalf: tC("--arrow-size-half"),
            arrowBg: tC("--arrow-background"),
            transformOrigin: tC("--transform-origin"),
            arrowOffset: tC("--arrow-offset")
        },
        tH = {
            name: "rects",
            fn(t) {
                let {
                    rects: e
                } = t;
                return {
                    data: e
                }
            }
        };

    function tz(t) {
        return t.split("-")[0]
    }
    var tW = {
        strategy: "absolute",
        placement: "bottom",
        listeners: !0,
        gutter: 8,
        flip: !0,
        slide: !0,
        overlap: !1,
        sameWidth: !1,
        fitViewport: !1,
        overflowPadding: 8,
        arrowPadding: 4
    };

    function tM(t, e) {
        let n = t.devicePixelRatio || 1;
        return Math.round(e * n) / n
    }

    function tF(t) {
        return "function" == typeof t ? t() : "clipping-ancestors" === t ? "clippingAncestors" : t
    }

    function tk(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                defer: i,
                ...r
            } = n,
            o = i ? tL.raf : t => t(),
            l = [];
        return l.push(o(() => {
            let n = "function" == typeof t ? t() : t,
                i = "function" == typeof e ? e() : e;
            l.push(function(t, e) {
                var n, i, r, o;
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (n = l.getAnchorRect, {
                        contextElement: (0, tL.isHTMLElement)(t) ? t : void 0,
                        getBoundingClientRect: () => {
                            let e = null == n ? void 0 : n(t);
                            return e || !t ? function(t) {
                                if (!t) return tE();
                                let {
                                    x: e,
                                    y: n,
                                    width: i,
                                    height: r
                                } = t;
                                return tE(e, n, i, r)
                            }(e) : t.getBoundingClientRect()
                        }
                    });
                if (!e || !a) return;
                let f = Object.assign({}, tW, l),
                    c = e.querySelector("[data-part=arrow]"),
                    s = [function(t, e) {
                        var n;
                        if (!(0, tO.isNull)(null != (n = e.offset) ? n : e.gutter)) return tw(n => {
                            var i, r, o, l;
                            let {
                                placement: a
                            } = n, f = ((null == t ? void 0 : t.clientHeight) || 0) / 2, c = null != (o = null == (i = e.offset) ? void 0 : i.mainAxis) ? o : e.gutter, {
                                hasAlign: s
                            } = function(t) {
                                let [e, n] = t.split("-");
                                return {
                                    side: e,
                                    align: n,
                                    hasAlign: null != n
                                }
                            }(a), u = s ? void 0 : e.shift, d = null != (l = null == (r = e.offset) ? void 0 : r.crossAxis) ? l : u;
                            return (0, tO.compact)({
                                crossAxis: d,
                                mainAxis: "number" == typeof c ? c + f : null != c ? c : f,
                                alignmentAxis: e.shift
                            })
                        })
                    }(c, f), function(t) {
                        if (!t.flip) return;
                        let e = tF(t.boundary);
                        return tb({ ...e ? {
                                boundary: e
                            } : void 0,
                            padding: t.overflowPadding,
                            fallbackPlacements: !0 === t.flip ? void 0 : t.flip
                        })
                    }(f), function(t) {
                        if (!t.slide && !t.overlap) return;
                        let e = tF(t.boundary);
                        return tx({ ...e ? {
                                boundary: e
                            } : void 0,
                            mainAxis: t.slide,
                            crossAxis: t.overlap,
                            padding: t.overflowPadding,
                            limiter: tT()
                        })
                    }(f), (i = e.ownerDocument, tP({
                        element: c || i.createElement("div"),
                        padding: f.arrowPadding
                    })), (t => {
                        if (t) return {
                            name: "shiftArrow",
                            fn(e) {
                                let {
                                    placement: n,
                                    middlewareData: i
                                } = e;
                                if (!i.arrow) return {};
                                let {
                                    x: r,
                                    y: o
                                } = i.arrow, l = n.split("-")[0];
                                return Object.assign(t.style, {
                                    left: null != r ? "".concat(r, "px") : "",
                                    top: null != o ? "".concat(o, "px") : "",
                                    [l]: "calc(100% + ".concat(tD.arrowOffset.reference, ")")
                                }), {}
                            }
                        }
                    })(c), (r = {
                        gutter: f.gutter,
                        offset: f.offset,
                        overlap: f.overlap
                    }, {
                        name: "transformOrigin",
                        fn(t) {
                            var e, n, i, o, l;
                            let {
                                elements: a,
                                middlewareData: f,
                                placement: s,
                                rects: u,
                                y: d
                            } = t, p = s.split("-")[0], h = (null == (e = f.arrow) ? void 0 : e.x) || 0, g = (null == (n = f.arrow) ? void 0 : n.y) || 0, m = (null == c ? void 0 : c.clientWidth) || 0, v = (null == c ? void 0 : c.clientHeight) || 0, y = h + m / 2, w = g + v / 2, x = Math.abs((null == (i = f.shift) ? void 0 : i.y) || 0), b = u.reference.height / 2, R = v / 2, A = null != (l = null == (o = r.offset) ? void 0 : o.mainAxis) ? l : r.gutter, P = "number" == typeof A ? A + R : null != A ? A : R, T = x > P, S = {
                                top: "".concat(y, "px calc(100% + ").concat(P, "px)"),
                                bottom: "".concat(y, "px ").concat(-P, "px"),
                                left: "calc(100% + ".concat(P, "px) ").concat(w, "px"),
                                right: "".concat(-P, "px ").concat(w, "px")
                            }[p], L = "".concat(y, "px ").concat(u.reference.y + b - d, "px"), O = !!r.overlap && "y" == ("top" === p || "bottom" === p ? "y" : "x") && T;
                            return a.floating.style.setProperty(tD.transformOrigin.variable, O ? L : S), {
                                data: {
                                    transformOrigin: O ? L : S
                                }
                            }
                        }
                    }), tR({
                        padding: f.overflowPadding,
                        apply(t) {
                            let {
                                elements: e,
                                rects: n,
                                availableHeight: i,
                                availableWidth: r
                            } = t, o = e.floating, l = Math.round(n.reference.width), a = Math.round(n.reference.height);
                            r = Math.floor(r), i = Math.floor(i), o.style.setProperty("--reference-width", "".concat(l, "px")), o.style.setProperty("--reference-height", "".concat(a, "px")), o.style.setProperty("--available-width", "".concat(r, "px")), o.style.setProperty("--available-height", "".concat(i, "px"))
                        }
                    }), function(t) {
                        var e;
                        if (t.hideWhenDetached) return tA({
                            strategy: "referenceHidden",
                            boundary: null != (e = tF(t.boundary)) ? e : "clippingAncestors"
                        })
                    }(f), tH],
                    {
                        placement: u,
                        strategy: d,
                        onComplete: p,
                        onPositioned: h
                    } = f,
                    g = async () => {
                        if (!a || !e) return;
                        let t = await tS(a, e, {
                            placement: u,
                            middleware: s,
                            strategy: d
                        });
                        null == p || p(t), null == h || h({
                            placed: !0
                        });
                        let n = (0, tL.getWindow)(e),
                            i = tM(n, t.x),
                            r = tM(n, t.y);
                        if (e.style.setProperty("--x", "".concat(i, "px")), e.style.setProperty("--y", "".concat(r, "px")), f.hideWhenDetached) {
                            var o;
                            (null == (o = t.middlewareData.hide) ? void 0 : o.referenceHidden) ? (e.style.setProperty("visibility", "hidden"), e.style.setProperty("pointer-events", "none")) : (e.style.removeProperty("visibility"), e.style.removeProperty("pointer-events"))
                        }
                        let l = e.firstElementChild;
                        if (l) {
                            let t = (0, tL.getComputedStyle)(l);
                            e.style.setProperty("--z-index", t.zIndex)
                        }
                    },
                    m = async () => {
                        l.updatePosition ? (await l.updatePosition({
                            updatePosition: g,
                            floatingElement: e
                        }), null == h || h({
                            placed: !0
                        })) : await g()
                    },
                    v = (o = f.listeners) ? !0 === o ? {
                        ancestorResize: !0,
                        ancestorScroll: !0,
                        elementResize: !0,
                        layoutShift: !0
                    } : o : {},
                    y = f.listeners ? ty(a, e, m, v) : tO.noop;
                return m(), () => {
                    null == y || y(), null == h || h({
                        placed: !1
                    })
                }
            }(n, i, r))
        })), () => {
            l.forEach(t => null == t ? void 0 : t())
        }
    }
    var tB = {
        bottom: "rotate(45deg)",
        left: "rotate(135deg)",
        top: "rotate(225deg)",
        right: "rotate(315deg)"
    };

    function tV() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                placement: e,
                sameWidth: n,
                fitViewport: i,
                strategy: r = "absolute"
            } = t;
        return {
            arrow: {
                position: "absolute",
                width: tD.arrowSize.reference,
                height: tD.arrowSize.reference,
                [tD.arrowSizeHalf.variable]: "calc(".concat(tD.arrowSize.reference, " / 2)"),
                [tD.arrowOffset.variable]: "calc(".concat(tD.arrowSizeHalf.reference, " * -1)")
            },
            arrowTip: {
                transform: e ? tB[e.split("-")[0]] : void 0,
                background: tD.arrowBg.reference,
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "inherit"
            },
            floating: {
                position: r,
                isolation: "isolate",
                minWidth: n ? void 0 : "max-content",
                width: n ? "var(--reference-width)" : void 0,
                maxWidth: i ? "var(--available-width)" : void 0,
                maxHeight: i ? "var(--available-height)" : void 0,
                pointerEvents: e ? void 0 : "none",
                top: "0px",
                left: "0px",
                transform: e ? "translate3d(var(--x), var(--y), 0)" : "translate3d(0, -100vh, 0)",
                zIndex: "var(--z-index)"
            }
        }
    }
    t.s(["getPlacement", () => tk, "getPlacementSide", () => tz, "getPlacementStyles", () => tV], 541356)
}]);

//# debugId=22dabb45-a0f5-e91b-76da-6535c59a7aab
//# sourceMappingURL=bced2b9877139bfa.js.map