;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "10d2c3e4-201e-3c88-0f73-36dbecc66f25")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 557799, (e, t, n) => {
    t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
}, 107983, (e, t, n) => {
    "use strict";
    var i = e.r(251570),
        a = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = i.useState,
        r = i.useEffect,
        o = i.useLayoutEffect,
        l = i.useDebugValue;

    function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !a(e, n)
        } catch (e) {
            return !0
        }
    }
    var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var n = t(),
            i = s({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            a = i[0].inst,
            u = i[1];
        return o(function() {
            a.value = n, a.getSnapshot = t, c(a) && u({
                inst: a
            })
        }, [e, n, t]), r(function() {
            return c(a) && u({
                inst: a
            }), e(function() {
                c(a) && u({
                    inst: a
                })
            })
        }, [e]), l(n), n
    };
    n.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : u
}, 33347, (e, t, n) => {
    "use strict";
    t.exports = e.r(107983)
}, 308972, 495839, 175868, 758303, 445979, 386926, e => {
    "use strict";
    let t;
    var n = e.i(251570);
    let i = e => "string" == typeof e,
        a = () => {
            let e, t, n = new Promise((n, i) => {
                e = n, t = i
            });
            return n.resolve = e, n.reject = t, n
        },
        s = e => null == e ? "" : "" + e,
        r = /###/g,
        o = e => e && e.indexOf("###") > -1 ? e.replace(r, ".") : e,
        l = e => !e || i(e),
        c = (e, t, n) => {
            let a = i(t) ? t.split(".") : t,
                s = 0;
            for (; s < a.length - 1;) {
                if (l(e)) return {};
                let t = o(a[s]);
                !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++s
            }
            return l(e) ? {} : {
                obj: e,
                k: o(a[s])
            }
        },
        u = (e, t, n) => {
            let {
                obj: i,
                k: a
            } = c(e, t, Object);
            if (void 0 !== i || 1 === t.length) {
                i[a] = n;
                return
            }
            let s = t[t.length - 1],
                r = t.slice(0, t.length - 1),
                o = c(e, r, Object);
            for (; void 0 === o.obj && r.length;) s = "".concat(r[r.length - 1], ".").concat(s), (null == (o = c(e, r = r.slice(0, r.length - 1), Object)) ? void 0 : o.obj) && void 0 !== o.obj["".concat(o.k, ".").concat(s)] && (o.obj = void 0);
            o.obj["".concat(o.k, ".").concat(s)] = n
        },
        h = (e, t) => {
            let {
                obj: n,
                k: i
            } = c(e, t);
            if (n && Object.prototype.hasOwnProperty.call(n, i)) return n[i]
        },
        p = (e, t, n) => {
            for (let a in t) "__proto__" !== a && "constructor" !== a && (a in e ? i(e[a]) || e[a] instanceof String || i(t[a]) || t[a] instanceof String ? n && (e[a] = t[a]) : p(e[a], t[a], n) : e[a] = t[a]);
            return e
        };
    var d = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    let g = e => i(e) ? e.replace(/[&<>"'\/]/g, e => d[e]) : e,
        f = [" ", ",", "?", "!", ";"],
        m = new class {
            getRegExp(e) {
                let t = this.regExpMap.get(e);
                if (void 0 !== t) return t;
                let n = new RegExp(e);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
            }
            constructor(e) {
                this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
            }
        }(20),
        v = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (!e) return;
            if (e[t]) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) return;
                return e[t]
            }
            let i = t.split(n),
                a = e;
            for (let e = 0; e < i.length;) {
                let t;
                if (!a || "object" != typeof a) return;
                let s = "";
                for (let r = e; r < i.length; ++r)
                    if (r !== e && (s += n), s += i[r], void 0 !== (t = a[s])) {
                        if (["string", "number", "boolean"].indexOf(typeof t) > -1 && r < i.length - 1) continue;
                        e += r - e + 1;
                        break
                    }
                a = t
            }
            return a
        },
        y = e => null == e ? void 0 : e.replace("_", "-"),
        b = {
            type: "logger",
            log(e) {
                this.output("log", e)
            },
            warn(e) {
                this.output("warn", e)
            },
            error(e) {
                this.output("error", e)
            },
            output(e, t) {
                var n, i, a;
                null == (a = console) || null == (i = a[e]) || null == (n = i.apply) || n.call(i, console, t)
            }
        };
    class x {
        init(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.prefix = t.prefix || "i18next:", this.logger = e || b, this.options = t, this.debug = t.debug
        }
        log() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.forward(t, "log", "", !0)
        }
        warn() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.forward(t, "warn", "", !0)
        }
        error() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.forward(t, "error", "")
        }
        deprecate() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
        }
        forward(e, t, n, a) {
            return a && !this.debug ? null : (i(e[0]) && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
        }
        create(e) {
            return new x(this.logger, { ...{
                    prefix: "".concat(this.prefix, ":").concat(e, ":")
                },
                ...this.options
            })
        }
        clone(e) {
            return (e = e || this.options).prefix = e.prefix || this.prefix, new x(this.logger, e)
        }
        constructor(e, t = {}) {
            this.init(e, t)
        }
    }
    var O = new x;
    class S {
        on(e, t) {
            return e.split(" ").forEach(e => {
                this.observers[e] || (this.observers[e] = new Map);
                let n = this.observers[e].get(t) || 0;
                this.observers[e].set(t, n + 1)
            }), this
        }
        off(e, t) {
            if (this.observers[e]) {
                if (!t) return void delete this.observers[e];
                this.observers[e].delete(t)
            }
        }
        emit(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            this.observers[e] && Array.from(this.observers[e].entries()).forEach(e => {
                let [t, i] = e;
                for (let e = 0; e < i; e++) t(...n)
            }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(t => {
                let [i, a] = t;
                for (let t = 0; t < a; t++) i.apply(i, [e, ...n])
            })
        }
        constructor() {
            this.observers = {}
        }
    }
    class k extends S {
        addNamespaces(e) {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
        }
        removeNamespaces(e) {
            let t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1)
        }
        getResource(e, t, n) {
            var a, s;
            let r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                l = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                c = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
            e.indexOf(".") > -1 ? r = e.split(".") : (r = [e, t], n && (Array.isArray(n) ? r.push(...n) : i(n) && l ? r.push(...n.split(l)) : r.push(n)));
            let u = h(this.data, r);
            return (!u && !t && !n && e.indexOf(".") > -1 && (e = r[0], t = r[1], n = r.slice(2).join(".")), !u && c && i(n)) ? v(null == (s = this.data) || null == (a = s[e]) ? void 0 : a[t], n, l) : u
        }
        addResource(e, t, n, i) {
            let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                },
                s = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator,
                r = [e, t];
            n && (r = r.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (r = e.split("."), i = t, t = r[1]), this.addNamespaces(t), u(this.data, r, i), a.silent || this.emit("added", e, t, n, i)
        }
        addResources(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                silent: !1
            };
            for (let a in n)(i(n[a]) || Array.isArray(n[a])) && this.addResource(e, t, a, n[a], {
                silent: !0
            });
            a.silent || this.emit("added", e, t, n)
        }
        addResourceBundle(e, t, n, i, a) {
            let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1,
                    skipCopy: !1
                },
                r = [e, t];
            e.indexOf(".") > -1 && (r = e.split("."), i = n, n = t, t = r[1]), this.addNamespaces(t);
            let o = h(this.data, r) || {};
            s.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? p(o, n, a) : o = { ...o,
                ...n
            }, u(this.data, r, o), s.silent || this.emit("added", e, t, n)
        }
        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
        }
        hasResourceBundle(e, t) {
            return void 0 !== this.getResource(e, t)
        }
        getResourceBundle(e, t) {
            return t || (t = this.options.defaultNS), this.getResource(e, t)
        }
        getDataByLanguage(e) {
            return this.data[e]
        }
        hasLanguageSomeTranslations(e) {
            let t = this.getDataByLanguage(e);
            return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
        }
        toJSON() {
            return this.data
        }
        constructor(e, t = {
            ns: ["translation"],
            defaultNS: "translation"
        }) {
            super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
        }
    }
    var L = {
        processors: {},
        addPostProcessor(e) {
            this.processors[e.name] = e
        },
        handle(e, t, n, i, a) {
            return e.forEach(e => {
                var s, r;
                t = null != (r = null == (s = this.processors[e]) ? void 0 : s.process(t, n, i, a)) ? r : t
            }), t
        }
    };
    let w = Symbol("i18next/PATH_KEY");

    function N(e, t) {
        var n;
        let i, a, s, {
            [w]: r
        } = e((a = [], (s = Object.create(null)).get = (e, t) => {
            var n;
            return (null == i || null == (n = i.revoke) || n.call(i), t === w) ? a : (a.push(t), (i = Proxy.revocable(e, s)).proxy)
        }, Proxy.revocable(Object.create(null), s).proxy));
        return r.join(null != (n = null == t ? void 0 : t.keySeparator) ? n : ".")
    }
    let R = {},
        E = e => !i(e) && "boolean" != typeof e && "number" != typeof e;
    class C extends S {
        changeLanguage(e) {
            e && (this.language = e)
        }
        exists(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                },
                n = { ...t
                };
            if (null == e) return !1;
            let i = this.resolve(e, n);
            if ((null == i ? void 0 : i.res) === void 0) return !1;
            let a = E(i.res);
            return !1 !== n.returnObjects || !a
        }
        extractFromKey(e, t) {
            let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
            void 0 === n && (n = ":");
            let a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                s = t.ns || this.options.defaultNS || [],
                r = n && e.indexOf(n) > -1,
                o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !((e, t, n) => {
                    t = t || "", n = n || "";
                    let i = f.filter(e => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                    if (0 === i.length) return !0;
                    let a = m.getRegExp("(".concat(i.map(e => "?" === e ? "\\?" : e).join("|"), ")")),
                        s = !a.test(e);
                    if (!s) {
                        let t = e.indexOf(n);
                        t > 0 && !a.test(e.substring(0, t)) && (s = !0)
                    }
                    return s
                })(e, n, a);
            if (r && !o) {
                let t = e.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return {
                    key: e,
                    namespaces: i(s) ? [s] : s
                };
                let r = e.split(n);
                (n !== a || n === a && this.options.ns.indexOf(r[0]) > -1) && (s = r.shift()), e = r.join(a)
            }
            return {
                key: e,
                namespaces: i(s) ? [s] : s
            }
        }
        translate(e, t, n) {
            let a = "object" == typeof t ? { ...t
            } : t;
            if ("object" != typeof a && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof a && (a = { ...a
                }), a || (a = {}), null == e) return "";
            "function" == typeof e && (e = N(e, { ...this.options,
                ...a
            })), Array.isArray(e) || (e = [String(e)]);
            let s = void 0 !== a.returnDetails ? a.returnDetails : this.options.returnDetails,
                r = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator,
                {
                    key: o,
                    namespaces: l
                } = this.extractFromKey(e[e.length - 1], a),
                c = l[l.length - 1],
                u = void 0 !== a.nsSeparator ? a.nsSeparator : this.options.nsSeparator;
            void 0 === u && (u = ":");
            let h = a.lng || this.language,
                p = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if ((null == h ? void 0 : h.toLowerCase()) === "cimode") return p ? s ? {
                res: "".concat(c).concat(u).concat(o),
                usedKey: o,
                exactUsedKey: o,
                usedLng: h,
                usedNS: c,
                usedParams: this.getUsedParamsDetails(a)
            } : "".concat(c).concat(u).concat(o) : s ? {
                res: o,
                usedKey: o,
                exactUsedKey: o,
                usedLng: h,
                usedNS: c,
                usedParams: this.getUsedParamsDetails(a)
            } : o;
            let d = this.resolve(e, a),
                g = null == d ? void 0 : d.res,
                f = (null == d ? void 0 : d.usedKey) || o,
                m = (null == d ? void 0 : d.exactUsedKey) || o,
                v = void 0 !== a.joinArrays ? a.joinArrays : this.options.joinArrays,
                y = !this.i18nFormat || this.i18nFormat.handleAsObject,
                b = void 0 !== a.count && !i(a.count),
                x = C.hasDefaultValue(a),
                O = b ? this.pluralResolver.getSuffix(h, a.count, a) : "",
                S = a.ordinal && b ? this.pluralResolver.getSuffix(h, a.count, {
                    ordinal: !1
                }) : "",
                k = b && !a.ordinal && 0 === a.count,
                L = k && a["defaultValue".concat(this.options.pluralSeparator, "zero")] || a["defaultValue".concat(O)] || a["defaultValue".concat(S)] || a.defaultValue,
                w = g;
            y && !g && x && (w = L);
            let R = E(w),
                j = Object.prototype.toString.apply(w);
            if (y && w && R && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(j) && !(i(v) && Array.isArray(w))) {
                if (!a.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, w, { ...a,
                        ns: l
                    }) : "key '".concat(o, " (").concat(this.language, ")' returned an object instead of string.");
                    return s ? (d.res = e, d.usedParams = this.getUsedParamsDetails(a), d) : e
                }
                if (r) {
                    let e = Array.isArray(w),
                        t = e ? [] : {},
                        n = e ? m : f;
                    for (let e in w)
                        if (Object.prototype.hasOwnProperty.call(w, e)) {
                            let i = "".concat(n).concat(r).concat(e);
                            x && !g ? t[e] = this.translate(i, { ...a,
                                defaultValue: E(L) ? L[e] : void 0,
                                ...{
                                    joinArrays: !1,
                                    ns: l
                                }
                            }) : t[e] = this.translate(i, { ...a,
                                joinArrays: !1,
                                ns: l
                            }), t[e] === i && (t[e] = w[e])
                        }
                    g = t
                }
            } else if (y && i(v) && Array.isArray(g))(g = g.join(v)) && (g = this.extendTranslation(g, e, a, n));
            else {
                let t = !1,
                    i = !1;
                !this.isValidLookup(g) && x && (t = !0, g = L), this.isValidLookup(g) || (i = !0, g = o);
                let s = (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? void 0 : g,
                    l = x && L !== g && this.options.updateMissing;
                if (i || t || l) {
                    if (this.logger.log(l ? "updateKey" : "missingKey", h, c, o, l ? L : g), r) {
                        let e = this.resolve(o, { ...a,
                            keySeparator: !1
                        });
                        e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    let e = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let n = 0; n < t.length; n++) e.push(t[n]);
                    else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(a.lng || this.language) : e.push(a.lng || this.language);
                    let n = (e, t, n) => {
                        var i;
                        let r = x && n !== g ? n : s;
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(e, c, t, r, l, a) : (null == (i = this.backendConnector) ? void 0 : i.saveMissing) && this.backendConnector.saveMissing(e, c, t, r, l, a), this.emit("missingKey", e, c, t, g)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && b ? e.forEach(e => {
                        let t = this.pluralResolver.getSuffixes(e, a);
                        k && a["defaultValue".concat(this.options.pluralSeparator, "zero")] && 0 > t.indexOf("".concat(this.options.pluralSeparator, "zero")) && t.push("".concat(this.options.pluralSeparator, "zero")), t.forEach(t => {
                            n([e], o + t, a["defaultValue".concat(t)] || L)
                        })
                    }) : n(e, o, L))
                }
                g = this.extendTranslation(g, e, a, d, n), i && g === o && this.options.appendNamespaceToMissingKey && (g = "".concat(c).concat(u).concat(o)), (i || t) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(c).concat(u).concat(o) : o, t ? g : void 0, a))
            }
            return s ? (d.res = g, d.usedParams = this.getUsedParamsDetails(a), d) : g
        }
        extendTranslation(e, t, n, a, s) {
            var r;
            if (null == (r = this.i18nFormat) ? void 0 : r.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
                ...n
            }, n.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
                resolved: a
            });
            else if (!n.skipInterpolation) {
                let r;
                var o, l = this;
                n.interpolation && this.interpolator.init({ ...n,
                    ...{
                        interpolation: { ...this.options.interpolation,
                            ...n.interpolation
                        }
                    }
                });
                let c = i(e) && ((null == n || null == (o = n.interpolation) ? void 0 : o.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                if (c) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    r = t && t.length
                }
                let u = n.replace && !i(n.replace) ? n.replace : n;
                if (this.options.interpolation.defaultVariables && (u = { ...this.options.interpolation.defaultVariables,
                        ...u
                    }), e = this.interpolator.interpolate(e, u, n.lng || this.language || a.usedLng, n), c) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    r < (t && t.length) && (n.nest = !1)
                }!n.lng && a && a.res && (n.lng = this.language || a.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, function() {
                    for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                    return (null == s ? void 0 : s[0]) !== i[0] || n.context ? l.translate(...i, t) : (l.logger.warn("It seems you are nesting recursively key: ".concat(i[0], " in key: ").concat(t[0])), null)
                }, n)), n.interpolation && this.interpolator.reset()
            }
            let c = n.postProcess || this.options.postProcess,
                u = i(c) ? [c] : c;
            return null != e && (null == u ? void 0 : u.length) && !1 !== n.applyPostProcessor && (e = L.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: { ...a,
                    usedParams: this.getUsedParamsDetails(n)
                },
                ...n
            } : n, this)), e
        }
        resolve(e) {
            let t, n, a, s, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return i(e) && (e = [e]), e.forEach(e => {
                if (this.isValidLookup(t)) return;
                let l = this.extractFromKey(e, o),
                    c = l.key;
                n = c;
                let u = l.namespaces;
                this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                let h = void 0 !== o.count && !i(o.count),
                    p = h && !o.ordinal && 0 === o.count,
                    d = void 0 !== o.context && (i(o.context) || "number" == typeof o.context) && "" !== o.context,
                    g = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
                u.forEach(e => {
                    var i, l;
                    this.isValidLookup(t) || (r = e, R["".concat(g[0], "-").concat(e)] || null == (i = this.utils) || !i.hasLoadedNamespace || (null == (l = this.utils) ? void 0 : l.hasLoadedNamespace(r)) || (R["".concat(g[0], "-").concat(e)] = !0, this.logger.warn('key "'.concat(n, '" for languages "').concat(g.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(n => {
                        var i;
                        let r;
                        if (this.isValidLookup(t)) return;
                        s = n;
                        let l = [c];
                        if (null == (i = this.i18nFormat) ? void 0 : i.addLookupKeys) this.i18nFormat.addLookupKeys(l, c, n, e, o);
                        else {
                            let e;
                            h && (e = this.pluralResolver.getSuffix(n, o.count, o));
                            let t = "".concat(this.options.pluralSeparator, "zero"),
                                i = "".concat(this.options.pluralSeparator, "ordinal").concat(this.options.pluralSeparator);
                            if (h && (o.ordinal && 0 === e.indexOf(i) && l.push(c + e.replace(i, this.options.pluralSeparator)), l.push(c + e), p && l.push(c + t)), d) {
                                let n = "".concat(c).concat(this.options.contextSeparator || "_").concat(o.context);
                                l.push(n), h && (o.ordinal && 0 === e.indexOf(i) && l.push(n + e.replace(i, this.options.pluralSeparator)), l.push(n + e), p && l.push(n + t))
                            }
                        }
                        for (; r = l.pop();) this.isValidLookup(t) || (a = r, t = this.getResource(n, e, r, o))
                    }))
                })
            }), {
                res: t,
                usedKey: n,
                exactUsedKey: a,
                usedLng: s,
                usedNS: r
            }
        }
        isValidLookup(e) {
            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
        }
        getResource(e, t, n) {
            var i;
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (null == (i = this.i18nFormat) ? void 0 : i.getResource) ? this.i18nFormat.getResource(e, t, n, a) : this.resourceStore.getResource(e, t, n, a)
        }
        getUsedParamsDetails() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.replace && !i(e.replace),
                n = t ? e.replace : e;
            if (t && void 0 !== e.count && (n.count = e.count), this.options.interpolation.defaultVariables && (n = { ...this.options.interpolation.defaultVariables,
                    ...n
                }), !t)
                for (let e of (n = { ...n
                    }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete n[e];
            return n
        }
        static hasDefaultValue(e) {
            let t = "defaultValue";
            for (let n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
            return !1
        }
        constructor(e, t = {}) {
            super(), ((e, t, n) => {
                e.forEach(e => {
                    t[e] && (n[e] = t[e])
                })
            })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = O.create("translator")
        }
    }
    class j {
        getScriptPartFromCode(e) {
            if (!(e = y(e)) || 0 > e.indexOf("-")) return null;
            let t = e.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
        }
        getLanguagePartFromCode(e) {
            if (!(e = y(e)) || 0 > e.indexOf("-")) return e;
            let t = e.split("-");
            return this.formatLanguageCode(t[0])
        }
        formatLanguageCode(e) {
            if (i(e) && e.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(e)[0]
                } catch (e) {}
                return (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t) ? t : this.options.lowerCaseLng ? e.toLowerCase() : e
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
        }
        isSupportedCode(e) {
            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
        }
        getBestMatchFromCodes(e) {
            let t;
            return e ? (e.forEach(e => {
                if (t) return;
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
            }), !t && this.options.supportedLngs && e.forEach(e => {
                if (t) return;
                let n = this.getScriptPartFromCode(e);
                if (this.isSupportedCode(n)) return t = n;
                let i = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(i)) return t = i;
                t = this.options.supportedLngs.find(e => {
                    if (e === i || !(0 > e.indexOf("-") && 0 > i.indexOf("-")) && (e.indexOf("-") > 0 && 0 > i.indexOf("-") && e.substring(0, e.indexOf("-")) === i || 0 === e.indexOf(i) && i.length > 1)) return e
                })
            }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
        }
        getFallbackCodes(e, t) {
            if (!e) return [];
            if ("function" == typeof e && (e = e(t)), i(e) && (e = [e]), Array.isArray(e)) return e;
            if (!t) return e.default || [];
            let n = e[t];
            return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
        }
        toResolveHierarchy(e, t) {
            let n = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                a = [],
                s = e => {
                    e && (this.isSupportedCode(e) ? a.push(e) : this.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                };
            return i(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(e))) : i(e) && s(this.formatLanguageCode(e)), n.forEach(e => {
                0 > a.indexOf(e) && s(this.formatLanguageCode(e))
            }), a
        }
        constructor(e) {
            this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = O.create("languageUtils")
        }
    }
    let P = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        },
        A = {
            select: e => 1 === e ? "one" : "other",
            resolvedOptions: () => ({
                pluralCategories: ["one", "other"]
            })
        };
    class I {
        addRule(e, t) {
            this.rules[e] = t
        }
        clearCache() {
            this.pluralRulesCache = {}
        }
        getRule(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = y("dev" === e ? "en" : e),
                a = n.ordinal ? "ordinal" : "cardinal",
                s = JSON.stringify({
                    cleanedCode: i,
                    type: a
                });
            if (s in this.pluralRulesCache) return this.pluralRulesCache[s];
            try {
                t = new Intl.PluralRules(i, {
                    type: a
                })
            } catch (a) {
                if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), A;
                if (!e.match(/-|_/)) return A;
                let i = this.languageUtils.getLanguagePartFromCode(e);
                t = this.getRule(i, n)
            }
            return this.pluralRulesCache[s] = t, t
        }
        needsPlural(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this.getRule(e, t);
            return n || (n = this.getRule("dev", t)), (null == n ? void 0 : n.resolvedOptions().pluralCategories.length) > 1
        }
        getPluralFormsOfKey(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.getSuffixes(e, n).map(e => "".concat(t).concat(e))
        }
        getSuffixes(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this.getRule(e, t);
            return (n || (n = this.getRule("dev", t)), n) ? n.resolvedOptions().pluralCategories.sort((e, t) => P[e] - P[t]).map(e => "".concat(this.options.prepend).concat(t.ordinal ? "ordinal".concat(this.options.prepend) : "").concat(e)) : []
        }
        getSuffix(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = this.getRule(e, n);
            return i ? "".concat(this.options.prepend).concat(n.ordinal ? "ordinal".concat(this.options.prepend) : "").concat(i.select(t)) : (this.logger.warn("no plural rule found for: ".concat(e)), this.getSuffix("dev", t, n))
        }
        constructor(e, t = {}) {
            this.languageUtils = e, this.options = t, this.logger = O.create("pluralResolver"), this.pluralRulesCache = {}
        }
    }
    let T = function(e, t, n) {
        let a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
            o = void 0 !== (a = h(e, n)) ? a : h(t, n);
        return !o && r && i(n) && void 0 === (o = v(e, n, s)) && (o = v(t, n, s)), o
    };
    class F {
        init() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.interpolation || (e.interpolation = {
                escapeValue: !0
            });
            let {
                escape: t,
                escapeValue: n,
                useRawValueToEscape: i,
                prefix: a,
                prefixEscaped: s,
                suffix: r,
                suffixEscaped: o,
                formatSeparator: l,
                unescapeSuffix: c,
                unescapePrefix: u,
                nestingPrefix: h,
                nestingPrefixEscaped: p,
                nestingSuffix: d,
                nestingSuffixEscaped: f,
                nestingOptionsSeparator: m,
                maxReplaces: v,
                alwaysFormat: y
            } = e.interpolation;
            this.escape = void 0 !== t ? t : g, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== i && i, this.prefix = a ? a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : s || "{{", this.suffix = r ? r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : o || "}}", this.formatSeparator = l || ",", this.unescapePrefix = c ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = h ? h.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : p || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingSuffix = d ? d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = void 0 !== y && y, this.resetRegExp()
        }
        reset() {
            this.options && this.init(this.options)
        }
        resetRegExp() {
            let e = (e, t) => (null == e ? void 0 : e.source) === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
            this.regexp = e(this.regexp, "".concat(this.prefix, "(.+?)").concat(this.suffix)), this.regexpUnescape = e(this.regexpUnescape, "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix)), this.nestingRegexp = e(this.nestingRegexp, "".concat(this.nestingPrefix, "((?:[^()\"']+|\"[^\"]*\"|'[^']*'|\\((?:[^()]|\"[^\"]*\"|'[^']*')*\\))*?)").concat(this.nestingSuffix))
        }
        interpolate(e, t, n, a) {
            var r;
            let o, l, c, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                h = e => {
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let i = T(t, u, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(i, void 0, n, { ...a,
                            ...t,
                            interpolationkey: e
                        }) : i
                    }
                    let i = e.split(this.formatSeparator),
                        s = i.shift().trim(),
                        r = i.join(this.formatSeparator).trim();
                    return this.format(T(t, u, s, this.options.keySeparator, this.options.ignoreJSONStructure), r, n, { ...a,
                        ...t,
                        interpolationkey: s
                    })
                };
            this.resetRegExp();
            let p = (null == a ? void 0 : a.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                d = (null == a || null == (r = a.interpolation) ? void 0 : r.skipOnVariables) !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            return [{
                regex: this.regexpUnescape,
                safeValue: e => e.replace(/\$/g, "$$$$")
            }, {
                regex: this.regexp,
                safeValue: e => this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$")
            }].forEach(t => {
                for (c = 0; o = t.regex.exec(e);) {
                    let n = o[1].trim();
                    if (void 0 === (l = h(n)))
                        if ("function" == typeof p) {
                            let t = p(e, o, a);
                            l = i(t) ? t : ""
                        } else if (a && Object.prototype.hasOwnProperty.call(a, n)) l = "";
                    else if (d) {
                        l = o[0];
                        continue
                    } else this.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)), l = "";
                    else i(l) || this.useRawValueToEscape || (l = s(l));
                    let r = t.safeValue(l);
                    if (e = e.replace(o[0], r), d ? (t.regex.lastIndex += l.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, ++c >= this.maxReplaces) break
                }
            }), e
        }
        nest(e, t) {
            let n, a, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                l = (e, t) => {
                    var n;
                    let i = this.nestingOptionsSeparator;
                    if (0 > e.indexOf(i)) return e;
                    let a = e.split(new RegExp("".concat(i, "[ ]*{"))),
                        s = "{".concat(a[1]);
                    e = a[0];
                    let o = (s = this.interpolate(s, r)).match(/'/g),
                        l = s.match(/"/g);
                    ((null != (n = null == o ? void 0 : o.length) ? n : 0) % 2 != 0 || l) && l.length % 2 == 0 || (s = s.replace(/'/g, '"'));
                    try {
                        r = JSON.parse(s), t && (r = { ...t,
                            ...r
                        })
                    } catch (t) {
                        return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(i).concat(s)
                    }
                    return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, e
                };
            for (; n = this.nestingRegexp.exec(e);) {
                let c = [];
                (r = (r = { ...o
                }).replace && !i(r.replace) ? r.replace : r).applyPostProcessor = !1, delete r.defaultValue;
                let u = /{.*}/.test(n[1]) ? n[1].lastIndexOf("}") + 1 : n[1].indexOf(this.formatSeparator);
                if (-1 !== u && (c = n[1].slice(u).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), n[1] = n[1].slice(0, u)), (a = t(l.call(this, n[1].trim(), r), r)) && n[0] === e && !i(a)) return a;
                i(a) || (a = s(a)), a || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), a = ""), c.length && (a = c.reduce((e, t) => this.format(e, t, o.lng, { ...o,
                    interpolationkey: n[1].trim()
                }), a.trim())), e = e.replace(n[0], a), this.regexp.lastIndex = 0
            }
            return e
        }
        constructor(e = {}) {
            var t;
            this.logger = O.create("interpolator"), this.options = e, this.format = (null == e || null == (t = e.interpolation) ? void 0 : t.format) || (e => e), this.init(e)
        }
    }
    let V = e => {
            let t = {};
            return (n, i, a) => {
                let s = a;
                a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (s = { ...s,
                    [a.interpolationkey]: void 0
                });
                let r = i + JSON.stringify(s),
                    o = t[r];
                return o || (o = e(y(i), a), t[r] = o), o(n)
            }
        },
        D = e => (t, n, i) => e(y(n), i)(t);
    class U {
        init(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                interpolation: {}
            };
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let n = t.cacheInBuiltFormats ? V : D;
            this.formats = {
                number: n((e, t) => {
                    let n = new Intl.NumberFormat(e, { ...t
                    });
                    return e => n.format(e)
                }),
                currency: n((e, t) => {
                    let n = new Intl.NumberFormat(e, { ...t,
                        style: "currency"
                    });
                    return e => n.format(e)
                }),
                datetime: n((e, t) => {
                    let n = new Intl.DateTimeFormat(e, { ...t
                    });
                    return e => n.format(e)
                }),
                relativetime: n((e, t) => {
                    let n = new Intl.RelativeTimeFormat(e, { ...t
                    });
                    return e => n.format(e, t.range || "day")
                }),
                list: n((e, t) => {
                    let n = new Intl.ListFormat(e, { ...t
                    });
                    return e => n.format(e)
                })
            }
        }
        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t
        }
        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = V(t)
        }
        format(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = t.split(this.formatSeparator);
            if (a.length > 1 && a[0].indexOf("(") > 1 && 0 > a[0].indexOf(")") && a.find(e => e.indexOf(")") > -1)) {
                let e = a.findIndex(e => e.indexOf(")") > -1);
                a[0] = [a[0], ...a.splice(1, e)].join(this.formatSeparator)
            }
            return a.reduce((e, t) => {
                let {
                    formatName: a,
                    formatOptions: s
                } = (e => {
                    let t = e.toLowerCase().trim(),
                        n = {};
                    if (e.indexOf("(") > -1) {
                        let i = e.split("(");
                        t = i[0].toLowerCase().trim();
                        let a = i[1].substring(0, i[1].length - 1);
                        "currency" === t && 0 > a.indexOf(":") ? n.currency || (n.currency = a.trim()) : "relativetime" === t && 0 > a.indexOf(":") ? n.range || (n.range = a.trim()) : a.split(";").forEach(e => {
                            if (e) {
                                let [t, ...i] = e.split(":"), a = i.join(":").trim().replace(/^'+|'+$/g, ""), s = t.trim();
                                n[s] || (n[s] = a), "false" === a && (n[s] = !1), "true" === a && (n[s] = !0), isNaN(a) || (n[s] = parseInt(a, 10))
                            }
                        })
                    }
                    return {
                        formatName: t,
                        formatOptions: n
                    }
                })(t);
                if (this.formats[a]) {
                    let t = e;
                    try {
                        var r;
                        let o = (null == i || null == (r = i.formatParams) ? void 0 : r[i.interpolationkey]) || {},
                            l = o.locale || o.lng || i.locale || i.lng || n;
                        t = this.formats[a](e, l, { ...s,
                            ...i,
                            ...o
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    return t
                }
                return this.logger.warn("there was no format function for ".concat(a)), e
            }, e)
        }
        constructor(e = {}) {
            this.logger = O.create("formatter"), this.options = e, this.init(e)
        }
    }
    class K extends S {
        queueLoad(e, t, n, i) {
            let a = {},
                s = {},
                r = {},
                o = {};
            return e.forEach(e => {
                let i = !0;
                t.forEach(t => {
                    let r = "".concat(e, "|").concat(t);
                    !n.reload && this.store.hasResourceBundle(e, t) ? this.state[r] = 2 : this.state[r] < 0 || (1 === this.state[r] ? void 0 === s[r] && (s[r] = !0) : (this.state[r] = 1, i = !1, void 0 === s[r] && (s[r] = !0), void 0 === a[r] && (a[r] = !0), void 0 === o[t] && (o[t] = !0)))
                }), i || (r[e] = !0)
            }), (Object.keys(a).length || Object.keys(s).length) && this.queue.push({
                pending: s,
                pendingCount: Object.keys(s).length,
                loaded: {},
                errors: [],
                callback: i
            }), {
                toLoad: Object.keys(a),
                pending: Object.keys(s),
                toLoadLanguages: Object.keys(r),
                toLoadNamespaces: Object.keys(o)
            }
        }
        loaded(e, t, n) {
            let i = e.split("|"),
                a = i[0],
                s = i[1];
            t && this.emit("failedLoading", a, s, t), !t && n && this.store.addResourceBundle(a, s, n, void 0, void 0, {
                skipCopy: !0
            }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
            let r = {};
            this.queue.forEach(n => {
                ((e, t, n, i) => {
                    let {
                        obj: a,
                        k: s
                    } = c(e, t, Object);
                    a[s] = a[s] || [], a[s].push(n)
                })(n.loaded, [a], s), void 0 !== n.pending[e] && (delete n.pending[e], n.pendingCount--), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                    r[e] || (r[e] = {});
                    let t = n.loaded[e];
                    t.length && t.forEach(t => {
                        void 0 === r[e][t] && (r[e][t] = !0)
                    })
                }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
            }), this.emit("loaded", r), this.queue = this.queue.filter(e => !e.done)
        }
        read(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                s = arguments.length > 5 ? arguments[5] : void 0;
            if (!e.length) return s(null, {});
            if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: n,
                tried: i,
                wait: a,
                callback: s
            });
            this.readingCalls++;
            let r = (r, o) => {
                    if (this.readingCalls--, this.waitingReads.length > 0) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                    }
                    r && o && i < this.maxRetries ? setTimeout(() => {
                        this.read.call(this, e, t, n, i + 1, 2 * a, s)
                    }, a) : s(r, o)
                },
                o = this.backend[n].bind(this.backend);
            if (2 === o.length) {
                try {
                    let n = o(e, t);
                    n && "function" == typeof n.then ? n.then(e => r(null, e)).catch(r) : r(null, n)
                } catch (e) {
                    r(e)
                }
                return
            }
            return o(e, t, r)
        }
        prepareLoading(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
            i(e) && (e = this.languageUtils.toResolveHierarchy(e)), i(t) && (t = [t]);
            let s = this.queueLoad(e, t, n, a);
            if (!s.toLoad.length) return s.pending.length || a(), null;
            s.toLoad.forEach(e => {
                this.loadOne(e)
            })
        }
        load(e, t, n) {
            this.prepareLoading(e, t, {}, n)
        }
        reload(e, t, n) {
            this.prepareLoading(e, t, {
                reload: !0
            }, n)
        }
        loadOne(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = e.split("|"),
                i = n[0],
                a = n[1];
            this.read(i, a, "read", void 0, void 0, (n, s) => {
                n && this.logger.warn("".concat(t, "loading namespace ").concat(a, " for language ").concat(i, " failed"), n), !n && s && this.logger.log("".concat(t, "loaded namespace ").concat(a, " for language ").concat(i), s), this.loaded(e, n, s)
            })
        }
        saveMissing(e, t, n, i, a) {
            var s, r, o, l, c;
            let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                h = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
            if ((null == (r = this.services) || null == (s = r.utils) ? void 0 : s.hasLoadedNamespace) && !(null == (l = this.services) || null == (o = l.utils) ? void 0 : o.hasLoadedNamespace(t))) return void this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            if (null != n && "" !== n) {
                if (null == (c = this.backend) ? void 0 : c.create) {
                    let s = { ...u,
                            isUpdate: a
                        },
                        r = this.backend.create.bind(this.backend);
                    if (r.length < 6) try {
                        let a;
                        (a = 5 === r.length ? r(e, t, n, i, s) : r(e, t, n, i)) && "function" == typeof a.then ? a.then(e => h(null, e)).catch(h) : h(null, a)
                    } catch (e) {
                        h(e)
                    } else r(e, t, n, i, h, s)
                }
                e && e[0] && this.store.addResource(e[0], t, n, i)
            }
        }
        constructor(e, t, n, i = {}) {
            var a, s;
            super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = O.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], null == (s = this.backend) || null == (a = s.init) || a.call(s, n, i.backend, i)
        }
    }
    let M = () => ({
            debug: !1,
            initAsync: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !1,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: e => {
                let t = {};
                if ("object" == typeof e[1] && (t = e[1]), i(e[1]) && (t.defaultValue = e[1]), i(e[2]) && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                    let n = e[3] || e[2];
                    Object.keys(n).forEach(e => {
                        t[e] = n[e]
                    })
                }
                return t
            },
            interpolation: {
                escapeValue: !0,
                format: e => e,
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            },
            cacheInBuiltFormats: !0
        }),
        $ = e => {
            var t, n;
            return i(e.ns) && (e.ns = [e.ns]), i(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), i(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), (null == (n = e.supportedLngs) || null == (t = n.indexOf) ? void 0 : t.call(n, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e
        },
        _ = () => {};
    class z extends S {
        init() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            this.isInitializing = !0, "function" == typeof e && (t = e, e = {}), null == e.defaultNS && e.ns && (i(e.ns) ? e.defaultNS = e.ns : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
            let n = M();
            this.options = { ...n,
                ...this.options,
                ...$(e)
            }, this.options.interpolation = { ...n.interpolation,
                ...this.options.interpolation
            }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
            let s = e => e ? "function" == typeof e ? new e : e : null;
            if (!this.options.isClone) {
                let e;
                var r = this;
                this.modules.logger ? O.init(s(this.modules.logger), this.options) : O.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : U;
                let t = new j(this.options);
                this.store = new k(this.options.resources, this.options);
                let i = this.services;
                i.logger = O, i.resourceStore = this.store, i.languageUtils = t, i.pluralResolver = new I(t, {
                    prepend: this.options.pluralSeparator,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), e && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (i.formatter = s(e), i.formatter.init && i.formatter.init(i, this.options), this.options.interpolation.format = i.formatter.format.bind(i.formatter)), i.interpolator = new F(this.options), i.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                }, i.backendConnector = new K(s(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    r.emit(e, ...n)
                }), this.modules.languageDetector && (i.languageDetector = s(this.modules.languageDetector), i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = s(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new C(this.services, this.options), this.translator.on("*", function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    r.emit(e, ...n)
                }), this.modules.external.forEach(e => {
                    e.init && e.init(this)
                })
            }
            if (this.format = this.options.interpolation.format, t || (t = _), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
            }
            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                var t = this;
                this[e] = function() {
                    for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return t.store[e](...i)
                }
            }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                var t = this;
                this[e] = function() {
                    for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return t.store[e](...i), t
                }
            });
            let o = a(),
                l = () => {
                    let e = (e, n) => {
                        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(n), t(e, n)
                    };
                    if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e)
                };
            return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), o
        }
        loadResources(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                n = t,
                a = i(e) ? e : this.language;
            if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                var s, r;
                if ((null == a ? void 0 : a.toLowerCase()) === "cimode" && (!this.options.preload || 0 === this.options.preload.length)) return n();
                let e = [],
                    t = t => {
                        t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                            "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                        })
                    };
                a ? t(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), null == (r = this.options.preload) || null == (s = r.forEach) || s.call(r, e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                    e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
                })
            } else n(null)
        }
        reloadResources(e, t, n) {
            let i = a();
            return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = _), this.services.backendConnector.reload(e, t, e => {
                i.resolve(), n(e)
            }), i
        }
        use(e) {
            if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && L.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
        }
        setResolvedLanguage(e) {
            if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
                for (let e = 0; e < this.languages.length; e++) {
                    let t = this.languages[e];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break
                    }
                }!this.resolvedLanguage && 0 > this.languages.indexOf(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
            }
        }
        changeLanguage(e, t) {
            this.isLanguageChangingTo = e;
            let n = a();
            this.emit("languageChanging", e);
            let s = e => {
                    this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                },
                r = (i, a) => {
                    var r = this;
                    a ? this.isLanguageChangingTo === e && (s(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return r.t(...t)
                    }), t && t(i, function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return r.t(...t)
                    })
                },
                o = t => {
                    e || t || !this.services.languageDetector || (t = []);
                    let n = i(t) ? t : t && t[0],
                        a = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(i(t) ? [t] : t);
                    if (a) {
                        var o, l;
                        this.language || s(a), this.translator.language || this.translator.changeLanguage(a), null == (l = this.services.languageDetector) || null == (o = l.cacheUserLanguage) || o.call(l, a)
                    }
                    this.loadResources(a, e => {
                        r(e, a)
                    })
                };
            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), n
        }
        getFixedT(e, t, n) {
            var a = this;
            let s = function(e, t) {
                let i, r;
                for (var o = arguments.length, l = Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) l[c - 2] = arguments[c];
                (i = "object" != typeof t ? a.options.overloadTranslationOptionHandler([e, t].concat(l)) : { ...t
                }).lng = i.lng || s.lng, i.lngs = i.lngs || s.lngs, i.ns = i.ns || s.ns, "" !== i.keyPrefix && (i.keyPrefix = i.keyPrefix || n || s.keyPrefix);
                let u = a.options.keySeparator || ".";
                return i.keyPrefix && Array.isArray(e) ? r = e.map(e => ("function" == typeof e && (e = N(e, { ...a.options,
                    ...t
                })), "".concat(i.keyPrefix).concat(u).concat(e))) : ("function" == typeof e && (e = N(e, { ...a.options,
                    ...t
                })), r = i.keyPrefix ? "".concat(i.keyPrefix).concat(u).concat(e) : e), a.t(r, i)
            };
            return i(e) ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = n, s
        }
        t() {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return null == (e = this.translator) ? void 0 : e.translate(...n)
        }
        exists() {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return null == (e = this.translator) ? void 0 : e.exists(...n)
        }
        setDefaultNamespace(e) {
            this.options.defaultNS = e
        }
        hasLoadedNamespace(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            let n = t.lng || this.resolvedLanguage || this.languages[0],
                i = !!this.options && this.options.fallbackLng,
                a = this.languages[this.languages.length - 1];
            if ("cimode" === n.toLowerCase()) return !0;
            let s = (e, t) => {
                let n = this.services.backendConnector.state["".concat(e, "|").concat(t)];
                return -1 === n || 0 === n || 2 === n
            };
            if (t.precheck) {
                let e = t.precheck(this, s);
                if (void 0 !== e) return e
            }
            return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, e) && (!i || s(a, e)))
        }
        loadNamespaces(e, t) {
            let n = a();
            return this.options.ns ? (i(e) && (e = [e]), e.forEach(e => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
            }), this.loadResources(e => {
                n.resolve(), t && t(e)
            }), n) : (t && t(), Promise.resolve())
        }
        loadLanguages(e, t) {
            let n = a();
            i(e) && (e = [e]);
            let s = this.options.preload || [],
                r = e.filter(e => 0 > s.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
            return r.length ? (this.options.preload = s.concat(r), this.loadResources(e => {
                n.resolve(), t && t(e)
            }), n) : (t && t(), Promise.resolve())
        }
        dir(e) {
            var t, n;
            if (e || (e = this.resolvedLanguage || ((null == (t = this.languages) ? void 0 : t.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
            try {
                let t = new Intl.Locale(e);
                if (t && t.getTextInfo) {
                    let e = t.getTextInfo();
                    if (e && e.direction) return e.direction
                }
            } catch (e) {}
            let i = (null == (n = this.services) ? void 0 : n.languageUtils) || new j(M());
            return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
        }
        static createInstance() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = new z(e, t);
            return n.createInstance = z.createInstance, n
        }
        cloneInstance() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                n = e.forkResourceStore;
            n && delete e.forkResourceStore;
            let i = { ...this.options,
                    ...e,
                    isClone: !0
                },
                a = new z(i);
            return (void 0 !== e.debug || void 0 !== e.prefix) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                a[e] = this[e]
            }), a.services = { ...this.services
            }, a.services.utils = {
                hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
            }, n && (a.store = new k(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t]
            }, e[t] = Object.keys(e[t]).reduce((n, i) => (n[i] = { ...e[t][i]
            }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), a.translator = new C(a.services, i), a.translator.on("*", function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                a.emit(e, ...n)
            }), a.init(i, t), a.translator.options = i, a.translator.backendConnector.services.utils = {
                hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
            }, a
        }
        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
            }
        }
        constructor(e = {}, t) {
            if (super(), this.options = $(e), this.services = {}, this.logger = O, this.modules = {
                    external: []
                }, (e => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    })
                })(this), t && !this.isInitialized && !e.isClone) {
                if (!this.options.initAsync) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t)
                }, 0)
            }
        }
    }
    let B = z.createInstance();
    B.createInstance, B.dir, B.init, B.loadResources, B.reloadResources, B.use, B.changeLanguage, B.getFixedT, B.t, B.exists, B.setDefaultNamespace, B.hasLoadedNamespace, B.loadNamespaces, B.loadLanguages, e.s(["default", () => B, "keyFromSelector", () => N], 495839);
    var H = e.i(557799),
        q = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

    function J(e) {
        var t = {
                type: "tag",
                name: "",
                voidElement: !1,
                attrs: {},
                children: []
            },
            n = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (n && (t.name = n[1], (H.default[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
            var i = e.indexOf("-->");
            return {
                type: "comment",
                comment: -1 !== i ? e.slice(4, i) : ""
            }
        }
        for (var a = new RegExp(q), s = null; null !== (s = a.exec(e));)
            if (s[0].trim())
                if (s[1]) {
                    var r = s[1].trim(),
                        o = [r, ""];
                    r.indexOf("=") > -1 && (o = r.split("=")), t.attrs[o[0]] = o[1], a.lastIndex--
                } else s[2] && (t.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
        return t
    }
    var W = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        Y = /^\s*$/,
        G = Object.create(null);
    let Z = function(e, t) {
            t || (t = {}), t.components || (t.components = G);
            var n, i = [],
                a = [],
                s = -1,
                r = !1;
            if (0 !== e.indexOf("<")) {
                var o = e.indexOf("<");
                i.push({
                    type: "text",
                    content: -1 === o ? e : e.substring(0, o)
                })
            }
            return e.replace(W, function(o, l) {
                if (r) {
                    if (o !== "</" + n.name + ">") return;
                    r = !1
                }
                var c, u = "/" !== o.charAt(1),
                    h = o.startsWith("<!--"),
                    p = l + o.length,
                    d = e.charAt(p);
                if (h) {
                    var g = J(o);
                    return s < 0 ? i.push(g) : (c = a[s]).children.push(g), i
                }
                if (u && (s++, "tag" === (n = J(o)).type && t.components[n.name] && (n.type = "component", r = !0), n.voidElement || r || !d || "<" === d || n.children.push({
                        type: "text",
                        content: e.slice(p, e.indexOf("<", p))
                    }), 0 === s && i.push(n), (c = a[s - 1]) && c.children.push(n), a[s] = n), (!u || n.voidElement) && (s > -1 && (n.voidElement || n.name === o.slice(2, -1)) && (n = -1 == --s ? i : a[s]), !r && "<" !== d && d)) {
                    c = -1 === s ? i : a[s].children;
                    var f = e.indexOf("<", p),
                        m = e.slice(p, -1 === f ? void 0 : f);
                    Y.test(m) && (m = " "), (f > -1 && s + c.length >= 0 || " " !== m) && c.push({
                        type: "text",
                        content: m
                    })
                }
            }), i
        },
        Q = (e, t, n, i) => {
            var a, s, r, o, l;
            let c = [n, {
                code: t,
                ...i || {}
            }];
            if (null == e || null == (s = e.services) || null == (a = s.logger) ? void 0 : a.forward) return e.services.logger.forward(c, "warn", "react-i18next::", !0);
            es(c[0]) && (c[0] = "react-i18next:: ".concat(c[0])), (null == e || null == (o = e.services) || null == (r = o.logger) ? void 0 : r.warn) ? e.services.logger.warn(...c) : (null == (l = console) ? void 0 : l.warn) && console.warn(...c)
        },
        X = {},
        ee = (e, t, n, i) => {
            es(n) && X[n] || (es(n) && (X[n] = new Date), Q(e, t, n, i))
        },
        et = (e, t) => () => {
            if (e.isInitialized) t();
            else {
                let n = () => {
                    setTimeout(() => {
                        e.off("initialized", n)
                    }, 0), t()
                };
                e.on("initialized", n)
            }
        },
        en = (e, t, n) => {
            e.loadNamespaces(t, et(e, n))
        },
        ei = (e, t, n, i) => {
            if (es(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return en(e, n, i);
            n.forEach(t => {
                0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
            }), e.loadLanguages(t, et(e, i))
        },
        ea = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                lng: n.lng,
                precheck: (t, i) => {
                    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) return !1
                }
            }) : (ee(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
                languages: t.languages
            }), !0)
        },
        es = e => "string" == typeof e,
        er = e => "object" == typeof e && null !== e,
        eo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        el = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "©",
            "&#169;": "©",
            "&reg;": "®",
            "&#174;": "®",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        },
        ec = e => el[e],
        eu = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e => e.replace(eo, ec)
        },
        eh = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            eu = { ...eu,
                ...e
            }
        },
        ep = (e, t) => {
            var n, i;
            if (!e) return !1;
            let a = null != (i = null == (n = e.props) ? void 0 : n.children) ? i : e.children;
            return t ? a.length > 0 : !!a
        },
        ed = e => {
            var t, n, i;
            if (!e) return [];
            let a = null != (i = null == (t = e.props) ? void 0 : t.children) ? i : e.children;
            return (null == (n = e.props) ? void 0 : n.i18nIsDynamicList) ? eg(a) : a
        },
        eg = e => Array.isArray(e) ? e : [e],
        ef = (e, t, i, a) => {
            var s;
            if (!e) return "";
            let r = "",
                o = eg(e),
                l = (null == t ? void 0 : t.transSupportBasicHtmlNodes) && null != (s = t.transKeepBasicHtmlNodesFor) ? s : [];
            return o.forEach((e, s) => {
                if (es(e)) {
                    r += "".concat(e);
                    return
                }
                if ((0, n.isValidElement)(e)) {
                    let {
                        props: n,
                        type: o
                    } = e, c = Object.keys(n).length, u = l.indexOf(o) > -1, h = n.children;
                    if (!h && u && !c) {
                        r += "<".concat(o, "/>");
                        return
                    }
                    if (!h && (!u || c) || n.i18nIsDynamicList) {
                        r += "<".concat(s, "></").concat(s, ">");
                        return
                    }
                    if (u && 1 === c && es(h)) {
                        r += "<".concat(o, ">").concat(h, "</").concat(o, ">");
                        return
                    }
                    let p = ef(h, t, i, a);
                    r += "<".concat(s, ">").concat(p, "</").concat(s, ">");
                    return
                }
                if (null === e) return void Q(i, "TRANS_NULL_VALUE", "Passed in a null value as child", {
                    i18nKey: a
                });
                if (er(e)) {
                    let {
                        format: t,
                        ...n
                    } = e, s = Object.keys(n);
                    if (1 === s.length) {
                        let e = t ? "".concat(s[0], ", ").concat(t) : s[0];
                        r += "{{".concat(e, "}}");
                        return
                    }
                    Q(i, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
                        i18nKey: a,
                        child: e
                    });
                    return
                }
                Q(i, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
                    i18nKey: a,
                    child: e
                })
            }), r
        },
        em = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return e;
            let i = [...t, ...Object.keys(n)],
                a = "",
                s = 0;
            for (; s < e.length;)
                if ("<" === e[s]) {
                    let t = !1,
                        n = e.slice(s).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9-]*)>/);
                    if (n) {
                        let e = n[1];
                        (/^\d+$/.test(e) || i.includes(e)) && (t = !0, a += n[0], s += n[0].length)
                    }
                    if (!t) {
                        let n = e.slice(s).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
                        if (n) {
                            let e = n[1];
                            (/^\d+$/.test(e) || i.includes(e)) && (t = !0, a += n[0], s += n[0].length)
                        }
                    }
                    t || (a += "&lt;", s += 1)
                } else a += e[s], s += 1;
            return a
        },
        ev = (e, t, i) => {
            let a = e.key || t,
                s = (0, n.cloneElement)(e, {
                    key: a
                });
            return !s.props || !s.props.children || 0 > i.indexOf("".concat(t, "/>")) && 0 > i.indexOf("".concat(t, " />")) ? s : (0, n.createElement)(function() {
                return (0, n.createElement)(n.Fragment, null, s)
            }, {
                key: a
            })
        };
    e.s(["initReactI18next", 0, {
        type: "3rdParty",
        init(e) {
            eh(e.options.react), t = e
        }
    }], 175868);
    let ey = (0, n.createContext)();
    class eb {
        addUsedNamespaces(e) {
            e.forEach(e => {
                this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
            })
        }
        getUsedNamespaces() {
            return Object.keys(this.usedNamespaces)
        }
        constructor() {
            this.usedNamespaces = {}
        }
    }

    function ex(e) {
        var i;
        let {
            children: a,
            count: s,
            parent: r,
            i18nKey: o,
            context: l,
            tOptions: c = {},
            values: u,
            defaults: h,
            components: p,
            ns: d,
            i18n: g,
            t: f,
            shouldUnescape: m,
            ...v
        } = e, {
            i18n: y,
            defaultNS: b
        } = (0, n.useContext)(ey) || {}, x = g || y || t, O = f || (null == x ? void 0 : x.t.bind(x));
        return function(e) {
            var i, a, s, r, o, l;
            let {
                children: c,
                count: u,
                parent: h,
                i18nKey: p,
                context: d,
                tOptions: g = {},
                values: f,
                defaults: m,
                components: v,
                ns: y,
                i18n: b,
                t: x,
                shouldUnescape: O,
                ...S
            } = e, k = b || t;
            if (!k) return ee(k, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
                i18nKey: p
            }), c;
            let L = x || k.t.bind(k) || (e => e),
                w = { ...eu,
                    ...null == (i = k.options) ? void 0 : i.react
                },
                R = y || L.ns || (null == (a = k.options) ? void 0 : a.defaultNS);
            R = es(R) ? [R] : R || ["translation"];
            let E = ef(c, w, k, p),
                C = m || (null == g ? void 0 : g.defaultValue) || E || w.transEmptyNodeValue || ("function" == typeof p ? N(p) : p),
                {
                    hashTransKey: j
                } = w,
                P = p || (j ? j(E || C) : E || C);
            (null == (r = k.options) || null == (s = r.interpolation) ? void 0 : s.defaultVariables) && (f = f && Object.keys(f).length > 0 ? { ...f,
                ...k.options.interpolation.defaultVariables
            } : { ...k.options.interpolation.defaultVariables
            });
            let A = !f && (void 0 === u || (null == (l = k.options) || null == (o = l.interpolation) ? void 0 : o.alwaysFormat)) && c ? {
                    interpolation: { ...g.interpolation,
                        prefix: "#$?",
                        suffix: "?$#"
                    }
                } : g.interpolation,
                I = { ...g,
                    context: d || g.context,
                    count: u,
                    ...f,
                    ...A,
                    defaultValue: C,
                    ns: R
                },
                T = P ? L(P, I) : C;
            T === P && C && (T = C);
            let F = ((e, t, n, i) => {
                    if (!e) return null;
                    if (Array.isArray(e)) return e.map((e, n) => ev(e, n, t));
                    if (er(e)) {
                        let n;
                        return n = {}, Object.keys(e).forEach(i => {
                            Object.assign(n, {
                                [i]: ev(e[i], i, t)
                            })
                        }), n
                    }
                    return ee(n, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
                        i18nKey: i
                    }), null
                })(v, T, k, p),
                V = F || c,
                D = null;
            !(!er(F) || Array.isArray(F)) && Object.keys(F).reduce((e, t) => e && Number.isNaN(Number.parseFloat(t)), !0) && (D = F, V = c);
            let U = ((e, t, i, a, s, r, o) => {
                    if ("" === i) return [];
                    let l = s.transKeepBasicHtmlNodesFor || [],
                        c = i && new RegExp(l.map(e => "<".concat(e)).join("|")).test(i);
                    if (!e && !t && !c && !o) return [i];
                    let u = null != t ? t : {},
                        h = e => {
                            eg(e).forEach(e => {
                                es(e) || (ep(e) ? h(ed(e)) : er(e) && !(0, n.isValidElement)(e) && Object.assign(u, e))
                            })
                        };
                    h(e);
                    let p = em(i, l, u),
                        d = Z("<0>".concat(p, "</0>")),
                        g = { ...u,
                            ...r
                        },
                        f = (e, t, i) => {
                            var a;
                            let s = ed(e),
                                r = v(s, t.children, i);
                            return Array.isArray(s) && s.every(n.isValidElement) && 0 === r.length || (null == (a = e.props) ? void 0 : a.i18nIsDynamicList) ? s : r
                        },
                        m = (e, t, i, a, s) => {
                            e.dummy ? (e.children = t, i.push((0, n.cloneElement)(e, {
                                key: a
                            }, s ? void 0 : t))) : i.push(...n.Children.map([e], e => {
                                let i = "data-i18n-is-dynamic-list",
                                    r = {
                                        key: a,
                                        [i]: void 0
                                    };
                                return e && e.props && Object.keys(e.props).forEach(t => {
                                    "ref" !== t && "children" !== t && "i18nIsDynamicList" !== t && t !== i && (r[t] = e.props[t])
                                }), (0, n.cloneElement)(e, r, s ? null : t)
                            }))
                        },
                        v = (e, i, r) => {
                            let u = eg(e);
                            return eg(i).reduce((e, i, h) => {
                                var p, d, y, b;
                                let x = (null == (d = i.children) || null == (p = d[0]) ? void 0 : p.content) && a.services.interpolator.interpolate(i.children[0].content, g, a.language);
                                if ("tag" === i.type) {
                                    let o, p = u[parseInt(i.name, 10)];
                                    !p && t && (p = t[i.name]), 1 !== r.length || p || (p = r[0][i.name]), p || (p = {});
                                    let d = 0 !== Object.keys(i.attrs).length ? (y = {
                                            props: i.attrs
                                        }, (o = { ...b = p
                                        }).props = Object.assign(y.props, b.props), o) : p,
                                        O = (0, n.isValidElement)(d),
                                        S = O && ep(i, !0) && !i.voidElement,
                                        k = c && er(d) && d.dummy && !O,
                                        L = er(t) && Object.hasOwnProperty.call(t, i.name);
                                    if (es(d)) {
                                        let t = a.services.interpolator.interpolate(d, g, a.language);
                                        e.push(t)
                                    } else if (ep(d) || S) {
                                        let t = f(d, i, r);
                                        m(d, t, e, h)
                                    } else if (k) m(d, v(u, i.children, r), e, h);
                                    else if (Number.isNaN(parseFloat(i.name)))
                                        if (L) {
                                            let t = f(d, i, r);
                                            m(d, t, e, h, i.voidElement)
                                        } else if (s.transSupportBasicHtmlNodes && l.indexOf(i.name) > -1)
                                        if (i.voidElement) e.push((0, n.createElement)(i.name, {
                                            key: "".concat(i.name, "-").concat(h)
                                        }));
                                        else {
                                            let t = v(u, i.children, r);
                                            e.push((0, n.createElement)(i.name, {
                                                key: "".concat(i.name, "-").concat(h)
                                            }, t))
                                        }
                                    else if (i.voidElement) e.push("<".concat(i.name, " />"));
                                    else {
                                        let t = v(u, i.children, r);
                                        e.push("<".concat(i.name, ">").concat(t, "</").concat(i.name, ">"))
                                    } else if (er(d) && !O) {
                                        let t = i.children[0] ? x : null;
                                        t && e.push(t)
                                    } else m(d, x, e, h, 1 !== i.children.length || !x)
                                } else if ("text" === i.type) {
                                    let t = s.transWrapTextNodes,
                                        r = o ? s.unescape(a.services.interpolator.interpolate(i.content, g, a.language)) : a.services.interpolator.interpolate(i.content, g, a.language);
                                    t ? e.push((0, n.createElement)(t, {
                                        key: "".concat(i.name, "-").concat(h)
                                    }, r)) : e.push(r)
                                }
                                return e
                            }, [])
                        };
                    return ed(v([{
                        dummy: !0,
                        children: e || []
                    }], d, eg(e || []))[0])
                })(V, D, T, k, w, I, O),
                K = null != h ? h : w.defaultTransParent;
            return K ? (0, n.createElement)(K, S, U) : U
        }({
            children: a,
            count: s,
            parent: r,
            i18nKey: o,
            context: l,
            tOptions: c,
            values: u,
            defaults: h,
            components: p,
            ns: d || (null == O ? void 0 : O.ns) || b || (null == x || null == (i = x.options) ? void 0 : i.defaultNS),
            i18n: x,
            t: f,
            shouldUnescape: m,
            ...v
        })
    }
    e.s(["Trans", () => ex], 758303);
    let eO = {
            "&nbsp;": " ",
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&copy;": "©",
            "&reg;": "®",
            "&trade;": "™",
            "&hellip;": "…",
            "&ndash;": "–",
            "&mdash;": "—",
            "&lsquo;": "‘",
            "&rsquo;": "’",
            "&sbquo;": "‚",
            "&ldquo;": "“",
            "&rdquo;": "”",
            "&bdquo;": "„",
            "&dagger;": "†",
            "&Dagger;": "‡",
            "&bull;": "•",
            "&prime;": "′",
            "&Prime;": "″",
            "&lsaquo;": "‹",
            "&rsaquo;": "›",
            "&sect;": "§",
            "&para;": "¶",
            "&middot;": "·",
            "&ensp;": " ",
            "&emsp;": " ",
            "&thinsp;": " ",
            "&euro;": "€",
            "&pound;": "£",
            "&yen;": "¥",
            "&cent;": "¢",
            "&curren;": "¤",
            "&times;": "×",
            "&divide;": "÷",
            "&minus;": "−",
            "&plusmn;": "±",
            "&ne;": "≠",
            "&le;": "≤",
            "&ge;": "≥",
            "&asymp;": "≈",
            "&equiv;": "≡",
            "&infin;": "∞",
            "&int;": "∫",
            "&sum;": "∑",
            "&prod;": "∏",
            "&radic;": "√",
            "&part;": "∂",
            "&permil;": "‰",
            "&deg;": "°",
            "&micro;": "µ",
            "&larr;": "←",
            "&uarr;": "↑",
            "&rarr;": "→",
            "&darr;": "↓",
            "&harr;": "↔",
            "&crarr;": "↵",
            "&lArr;": "⇐",
            "&uArr;": "⇑",
            "&rArr;": "⇒",
            "&dArr;": "⇓",
            "&hArr;": "⇔",
            "&alpha;": "α",
            "&beta;": "β",
            "&gamma;": "γ",
            "&delta;": "δ",
            "&epsilon;": "ε",
            "&zeta;": "ζ",
            "&eta;": "η",
            "&theta;": "θ",
            "&iota;": "ι",
            "&kappa;": "κ",
            "&lambda;": "λ",
            "&mu;": "μ",
            "&nu;": "ν",
            "&xi;": "ξ",
            "&omicron;": "ο",
            "&pi;": "π",
            "&rho;": "ρ",
            "&sigma;": "σ",
            "&tau;": "τ",
            "&upsilon;": "υ",
            "&phi;": "φ",
            "&chi;": "χ",
            "&psi;": "ψ",
            "&omega;": "ω",
            "&Alpha;": "Α",
            "&Beta;": "Β",
            "&Gamma;": "Γ",
            "&Delta;": "Δ",
            "&Epsilon;": "Ε",
            "&Zeta;": "Ζ",
            "&Eta;": "Η",
            "&Theta;": "Θ",
            "&Iota;": "Ι",
            "&Kappa;": "Κ",
            "&Lambda;": "Λ",
            "&Mu;": "Μ",
            "&Nu;": "Ν",
            "&Xi;": "Ξ",
            "&Omicron;": "Ο",
            "&Pi;": "Π",
            "&Rho;": "Ρ",
            "&Sigma;": "Σ",
            "&Tau;": "Τ",
            "&Upsilon;": "Υ",
            "&Phi;": "Φ",
            "&Chi;": "Χ",
            "&Psi;": "Ψ",
            "&Omega;": "Ω",
            "&Agrave;": "À",
            "&Aacute;": "Á",
            "&Acirc;": "Â",
            "&Atilde;": "Ã",
            "&Auml;": "Ä",
            "&Aring;": "Å",
            "&AElig;": "Æ",
            "&Ccedil;": "Ç",
            "&Egrave;": "È",
            "&Eacute;": "É",
            "&Ecirc;": "Ê",
            "&Euml;": "Ë",
            "&Igrave;": "Ì",
            "&Iacute;": "Í",
            "&Icirc;": "Î",
            "&Iuml;": "Ï",
            "&ETH;": "Ð",
            "&Ntilde;": "Ñ",
            "&Ograve;": "Ò",
            "&Oacute;": "Ó",
            "&Ocirc;": "Ô",
            "&Otilde;": "Õ",
            "&Ouml;": "Ö",
            "&Oslash;": "Ø",
            "&Ugrave;": "Ù",
            "&Uacute;": "Ú",
            "&Ucirc;": "Û",
            "&Uuml;": "Ü",
            "&Yacute;": "Ý",
            "&THORN;": "Þ",
            "&szlig;": "ß",
            "&agrave;": "à",
            "&aacute;": "á",
            "&acirc;": "â",
            "&atilde;": "ã",
            "&auml;": "ä",
            "&aring;": "å",
            "&aelig;": "æ",
            "&ccedil;": "ç",
            "&egrave;": "è",
            "&eacute;": "é",
            "&ecirc;": "ê",
            "&euml;": "ë",
            "&igrave;": "ì",
            "&iacute;": "í",
            "&icirc;": "î",
            "&iuml;": "ï",
            "&eth;": "ð",
            "&ntilde;": "ñ",
            "&ograve;": "ò",
            "&oacute;": "ó",
            "&ocirc;": "ô",
            "&otilde;": "õ",
            "&ouml;": "ö",
            "&oslash;": "ø",
            "&ugrave;": "ù",
            "&uacute;": "ú",
            "&ucirc;": "û",
            "&uuml;": "ü",
            "&yacute;": "ý",
            "&thorn;": "þ",
            "&yuml;": "ÿ",
            "&iexcl;": "¡",
            "&iquest;": "¿",
            "&fnof;": "ƒ",
            "&circ;": "ˆ",
            "&tilde;": "˜",
            "&OElig;": "Œ",
            "&oelig;": "œ",
            "&Scaron;": "Š",
            "&scaron;": "š",
            "&Yuml;": "Ÿ",
            "&ordf;": "ª",
            "&ordm;": "º",
            "&macr;": "¯",
            "&acute;": "´",
            "&cedil;": "¸",
            "&sup1;": "¹",
            "&sup2;": "²",
            "&sup3;": "³",
            "&frac14;": "¼",
            "&frac12;": "½",
            "&frac34;": "¾",
            "&spades;": "♠",
            "&clubs;": "♣",
            "&hearts;": "♥",
            "&diams;": "♦",
            "&loz;": "◊",
            "&oline;": "‾",
            "&frasl;": "⁄",
            "&weierp;": "℘",
            "&image;": "ℑ",
            "&real;": "ℜ",
            "&alefsym;": "ℵ"
        },
        eS = RegExp(Object.keys(eO).map(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
    var ek = e.i(33347);
    let eL = {
            t: (e, t) => es(t) ? t : er(t) && es(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
            ready: !1
        },
        ew = () => () => {};

    function eN(e) {
        let {
            i18n: t,
            defaultNS: i,
            children: a
        } = e, s = (0, n.useMemo)(() => ({
            i18n: t,
            defaultNS: i
        }), [t, i]);
        return (0, n.createElement)(ey.Provider, {
            value: s
        }, a)
    }
    e.s(["useTranslation", 0, function(e) {
        var i, a, s;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                i18n: o
            } = r,
            {
                i18n: l,
                defaultNS: c
            } = (0, n.useContext)(ey) || {},
            u = o || l || t;
        u && !u.reportNamespaces && (u.reportNamespaces = new eb), u || ee(u, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        let h = (0, n.useMemo)(() => {
                var e;
                return { ...eu,
                    ...null == u || null == (e = u.options) ? void 0 : e.react,
                    ...r
                }
            }, [u, r]),
            {
                useSuspense: p,
                keyPrefix: d
            } = h,
            g = e || c || (null == u || null == (i = u.options) ? void 0 : i.defaultNS),
            f = es(g) ? [g] : g || ["translation"],
            m = (0, n.useMemo)(() => f, f);
        null == u || null == (s = u.reportNamespaces) || null == (a = s.addUsedNamespaces) || a.call(s, m);
        let v = (0, n.useRef)(0),
            y = (0, n.useCallback)(e => {
                if (!u) return ew;
                let {
                    bindI18n: t,
                    bindI18nStore: n
                } = h, i = () => {
                    v.current += 1, e()
                };
                return t && u.on(t, i), n && u.store.on(n, i), () => {
                    t && t.split(" ").forEach(e => u.off(e, i)), n && n.split(" ").forEach(e => u.store.off(e, i))
                }
            }, [u, h]),
            b = (0, n.useRef)(),
            x = (0, n.useCallback)(() => {
                if (!u) return eL;
                let e = !!(u.isInitialized || u.initializedStoreOnce) && m.every(e => ea(e, u, h)),
                    t = r.lng || u.language,
                    n = v.current,
                    i = b.current;
                if (i && i.ready === e && i.lng === t && i.keyPrefix === d && i.revision === n) return i;
                let a = {
                    t: u.getFixedT(t, "fallback" === h.nsMode ? m : m[0], d),
                    ready: e,
                    lng: t,
                    keyPrefix: d,
                    revision: n
                };
                return b.current = a, a
            }, [u, m, d, h, r.lng]),
            [O, S] = (0, n.useState)(0),
            {
                t: k,
                ready: L
            } = (0, ek.useSyncExternalStore)(y, x, x);
        (0, n.useEffect)(() => {
            if (u && !L && !p) {
                let e = () => S(e => e + 1);
                r.lng ? ei(u, r.lng, m, e) : en(u, m, e)
            }
        }, [u, r.lng, m, L, p, O]);
        let w = u || {},
            N = (0, n.useRef)(null),
            R = (0, n.useRef)(),
            E = e => {
                let t = Object.getOwnPropertyDescriptors(e);
                t.__original && delete t.__original;
                let n = Object.create(Object.getPrototypeOf(e), t);
                if (!Object.prototype.hasOwnProperty.call(n, "__original")) try {
                    Object.defineProperty(n, "__original", {
                        value: e,
                        writable: !1,
                        enumerable: !1,
                        configurable: !1
                    })
                } catch (e) {}
                return n
            },
            C = (0, n.useMemo)(() => {
                let e = null == w ? void 0 : w.language,
                    t = w;
                N.current && N.current.__original === w ? R.current !== e ? (N.current = t = E(w), R.current = e) : t = N.current : (N.current = t = E(w), R.current = e);
                let n = [k, t, L];
                return n.t = k, n.i18n = t, n.ready = L, n
            }, [k, w, L, w.resolvedLanguage, w.language, w.languages]);
        if (u && p && !L) throw new Promise(e => {
            let t = () => e();
            r.lng ? ei(u, r.lng, m, t) : en(u, m, t)
        });
        return C
    }], 445979), e.s(["I18nextProvider", () => eN], 386926), e.s([], 308972)
}]);

//# debugId=10d2c3e4-201e-3c88-0f73-36dbecc66f25
//# sourceMappingURL=0095a859b10720e5.js.map