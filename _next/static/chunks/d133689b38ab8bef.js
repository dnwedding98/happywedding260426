;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "6bbd5c6a-a49f-da5f-ee21-ea16db4a0272")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 303250, 703144, e => {
    "use strict";
    var t = e.i(360706),
        l = e.i(409078),
        i = Object.defineProperty,
        n = (e, t, l) => {
            let n;
            return (n = "symbol" != typeof t ? t + "" : t) in e ? i(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l
            }) : e[n] = l
        },
        r = {
            itemToValue: e => "string" == typeof e ? e : (0, l.isObject)(e) && (0, l.hasProp)(e, "value") ? e.value : "",
            itemToString: e => "string" == typeof e ? e : (0, l.isObject)(e) && (0, l.hasProp)(e, "label") ? e.label : r.itemToValue(e),
            isItemDisabled: e => !!((0, l.isObject)(e) && (0, l.hasProp)(e, "disabled")) && !!e.disabled
        },
        s = class e {
            get size() {
                return this.items.length
            }
            get firstValue() {
                let e = 0;
                for (; this.getItemDisabled(this.at(e));) e++;
                return this.getItemValue(this.at(e))
            }
            get lastValue() {
                let e = this.size - 1;
                for (; this.getItemDisabled(this.at(e));) e--;
                return this.getItemValue(this.at(e))
            }*[Symbol.iterator]() {
                yield* this.items
            }
            constructor(t) {
                var i = this;
                this.options = t, n(this, "items"), n(this, "indexMap", null), n(this, "copy", t => new e({ ...this.options,
                    items: null != t ? t : [...this.items]
                })), n(this, "isEqual", e => (0, l.isEqual)(this.items, e.items)), n(this, "setItems", e => this.copy(e)), n(this, "getValues", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.items,
                        t = [];
                    for (let l of e) {
                        let e = i.getItemValue(l);
                        null != e && t.push(e)
                    }
                    return t
                }), n(this, "find", e => {
                    if (null == e) return null;
                    let t = this.indexOf(e);
                    return -1 !== t ? this.at(t) : null
                }), n(this, "findMany", e => {
                    let t = [];
                    for (let l of e) {
                        let e = this.find(l);
                        null != e && t.push(e)
                    }
                    return t
                }), n(this, "at", e => {
                    if (!this.options.groupBy && !this.options.groupSort) {
                        var t;
                        return null != (t = this.items[e]) ? t : null
                    }
                    let l = 0;
                    for (let [, t] of this.group())
                        for (let i of t) {
                            if (l === e) return i;
                            l++
                        }
                    return null
                }), n(this, "sortFn", (e, t) => {
                    let l = this.indexOf(e),
                        i = this.indexOf(t);
                    return (null != l ? l : 0) - (null != i ? i : 0)
                }), n(this, "sort", e => [...e].sort(this.sortFn.bind(this))), n(this, "getItemValue", e => {
                    var t, l, i;
                    return null == e ? null : null != (i = null == (t = (l = this.options).itemToValue) ? void 0 : t.call(l, e)) ? i : r.itemToValue(e)
                }), n(this, "getItemDisabled", e => {
                    var t, l, i;
                    return null != e && (null != (i = null == (t = (l = this.options).isItemDisabled) ? void 0 : t.call(l, e)) ? i : r.isItemDisabled(e))
                }), n(this, "stringifyItem", e => {
                    var t, l, i;
                    return null == e ? null : null != (i = null == (t = (l = this.options).itemToString) ? void 0 : t.call(l, e)) ? i : r.itemToString(e)
                }), n(this, "stringify", e => null == e ? null : this.stringifyItem(this.find(e))), n(this, "stringifyItems", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ", ",
                        l = [];
                    for (let t of e) {
                        let e = i.stringifyItem(t);
                        null != e && l.push(e)
                    }
                    return l.join(t)
                }), n(this, "stringifyMany", (e, t) => this.stringifyItems(this.findMany(e), t)), n(this, "has", e => -1 !== this.indexOf(e)), n(this, "hasItem", e => null != e && this.has(this.getItemValue(e))), n(this, "group", () => {
                    let {
                        groupBy: e,
                        groupSort: t
                    } = this.options;
                    if (!e) return [
                        ["", [...this.items]]
                    ];
                    let l = new Map;
                    this.items.forEach((t, i) => {
                        let n = e(t, i);
                        l.has(n) || l.set(n, []), l.get(n).push(t)
                    });
                    let i = Array.from(l.entries());
                    return t && i.sort((e, l) => {
                        let [i] = e, [n] = l;
                        if ("function" == typeof t) return t(i, n);
                        if (Array.isArray(t)) {
                            let e = t.indexOf(i),
                                l = t.indexOf(n);
                            return -1 === e ? 1 : -1 === l ? -1 : e - l
                        }
                        return "asc" === t ? i.localeCompare(n) : "desc" === t ? n.localeCompare(i) : 0
                    }), i
                }), n(this, "getNextValue", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = i.indexOf(e);
                    if (-1 === n) return null;
                    for (n = l ? Math.min(n + t, i.size - 1) : n + t; n <= i.size && i.getItemDisabled(i.at(n));) n++;
                    return i.getItemValue(i.at(n))
                }), n(this, "getPreviousValue", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = i.indexOf(e);
                    if (-1 === n) return null;
                    for (n = l ? Math.max(n - t, 0) : n - t; n >= 0 && i.getItemDisabled(i.at(n));) n--;
                    return i.getItemValue(i.at(n))
                }), n(this, "indexOf", e => {
                    var t;
                    if (null == e) return -1;
                    if (!this.options.groupBy && !this.options.groupSort) return this.items.findIndex(t => this.getItemValue(t) === e);
                    if (!this.indexMap) {
                        this.indexMap = new Map;
                        let e = 0;
                        for (let [, t] of this.group())
                            for (let l of t) {
                                let t = this.getItemValue(l);
                                null != t && this.indexMap.set(t, e), e++
                            }
                    }
                    return null != (t = this.indexMap.get(e)) ? t : -1
                }), n(this, "getByText", (e, t) => {
                    let l = null != t ? this.indexOf(t) : -1,
                        i = 1 === e.length;
                    for (let n = 0; n < this.items.length; n++) {
                        let r = this.items[(l + n + 1) % this.items.length];
                        if ((!i || this.getItemValue(r) !== t) && !this.getItemDisabled(r) && o(this.stringifyItem(r), e)) return r
                    }
                }), n(this, "search", (e, t) => {
                    let {
                        state: l,
                        currentValue: i,
                        timeout: n = 350
                    } = t, r = l.keysSoFar + e, s = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r, o = this.getByText(s, i), a = this.getItemValue(o);

                    function d() {
                        clearTimeout(l.timer), l.timer = -1
                    }
                    return ! function e(t) {
                        l.keysSoFar = t, d(), "" !== t && (l.timer = +setTimeout(() => {
                            e(""), d()
                        }, n))
                    }(r), a
                }), n(this, "update", (e, t) => {
                    let l = this.indexOf(e);
                    return -1 === l ? this : this.copy([...this.items.slice(0, l), t, ...this.items.slice(l + 1)])
                }), n(this, "upsert", function(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "append",
                        n = i.indexOf(e);
                    return -1 === n ? ("append" === l ? i.append : i.prepend)(t) : i.copy([...i.items.slice(0, n), t, ...i.items.slice(n + 1)])
                }), n(this, "insert", function(e) {
                    for (var t = arguments.length, l = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) l[n - 1] = arguments[n];
                    return i.copy(a(i.items, e, ...l))
                }), n(this, "insertBefore", function(e) {
                    for (var t = arguments.length, l = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) l[n - 1] = arguments[n];
                    let r = i.indexOf(e);
                    if (-1 === r)
                        if (0 !== i.items.length) return i;
                        else r = 0;
                    return i.copy(a(i.items, r, ...l))
                }), n(this, "insertAfter", function(e) {
                    for (var t = arguments.length, l = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) l[n - 1] = arguments[n];
                    let r = i.indexOf(e);
                    if (-1 === r)
                        if (0 !== i.items.length) return i;
                        else r = 0;
                    return i.copy(a(i.items, r + 1, ...l))
                }), n(this, "prepend", function() {
                    for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                    return i.copy(a(i.items, 0, ...t))
                }), n(this, "append", function() {
                    for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                    return i.copy(a(i.items, i.items.length, ...t))
                }), n(this, "filter", e => {
                    let t = this.items.filter((t, l) => e(this.stringifyItem(t), l, t));
                    return this.copy(t)
                }), n(this, "remove", function() {
                    for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                    let n = t.map(e => "string" == typeof e ? e : i.getItemValue(e));
                    return i.copy(i.items.filter(e => {
                        let t = i.getItemValue(e);
                        return null != t && !n.includes(t)
                    }))
                }), n(this, "move", (e, t) => {
                    let l = this.indexOf(e);
                    return -1 === l ? this : this.copy(d(this.items, [l], t))
                }), n(this, "moveBefore", function(e) {
                    for (var t = arguments.length, l = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) l[n - 1] = arguments[n];
                    let r = i.items.findIndex(t => i.getItemValue(t) === e);
                    if (-1 === r) return i;
                    let s = l.map(e => i.items.findIndex(t => i.getItemValue(t) === e)).sort((e, t) => e - t);
                    return i.copy(d(i.items, s, r))
                }), n(this, "moveAfter", function(e) {
                    for (var t = arguments.length, l = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) l[n - 1] = arguments[n];
                    let r = i.items.findIndex(t => i.getItemValue(t) === e);
                    if (-1 === r) return i;
                    let s = l.map(e => i.items.findIndex(t => i.getItemValue(t) === e)).sort((e, t) => e - t);
                    return i.copy(d(i.items, s, r + 1))
                }), n(this, "reorder", (e, t) => this.copy(d(this.items, [e], t))), n(this, "compareValue", (e, t) => {
                    let l = this.indexOf(e),
                        i = this.indexOf(t);
                    return l < i ? -1 : +(l > i)
                }), n(this, "range", (e, t) => {
                    let l = [],
                        i = e;
                    for (; null != i;) {
                        if (this.find(i) && l.push(i), i === t) return l;
                        i = this.getNextValue(i)
                    }
                    return []
                }), n(this, "getValueRange", (e, t) => e && t ? 0 >= this.compareValue(e, t) ? this.range(e, t) : this.range(t, e) : []), n(this, "toString", () => {
                    let e = "";
                    for (let t of this.items) e += [this.getItemValue(t), this.stringifyItem(t), this.getItemDisabled(t)].filter(Boolean).join(":") + ",";
                    return e
                }), n(this, "toJSON", () => ({
                    size: this.size,
                    first: this.firstValue,
                    last: this.lastValue
                })), this.items = [...t.items]
            }
        },
        o = (e, t) => !!(null == e ? void 0 : e.toLowerCase().startsWith(t.toLowerCase()));

    function a(e, t) {
        for (var l = arguments.length, i = Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) i[n - 2] = arguments[n];
        return [...e.slice(0, t), ...i, ...e.slice(t)]
    }

    function d(e, t, l) {
        let i = (t = [...t].sort((e, t) => e - t)).map(t => e[t]);
        for (let l = t.length - 1; l >= 0; l--) e = [...e.slice(0, t[l]), ...e.slice(t[l] + 1)];
        return l = Math.max(0, l - t.filter(e => e < l).length), [...e.slice(0, l), ...i, ...e.slice(l)]
    }
    var u = class extends s {
        constructor(e) {
            var t;
            const {
                columnCount: i
            } = e;
            super(e), t = this, n(this, "columnCount"), n(this, "rows", null), n(this, "getRows", () => (this.rows || (this.rows = (0, l.chunk)([...this.items], this.columnCount)), this.rows)), n(this, "getRowCount", () => Math.ceil(this.items.length / this.columnCount)), n(this, "getCellIndex", (e, t) => e * this.columnCount + t), n(this, "getCell", (e, t) => this.at(this.getCellIndex(e, t))), n(this, "getValueCell", e => {
                let t = this.indexOf(e);
                return -1 === t ? null : {
                    row: Math.floor(t / this.columnCount),
                    column: t % this.columnCount
                }
            }), n(this, "getLastEnabledColumnIndex", e => {
                for (let t = this.columnCount - 1; t >= 0; t--) {
                    let l = this.getCell(e, t);
                    if (l && !this.getItemDisabled(l)) return t
                }
                return null
            }), n(this, "getFirstEnabledColumnIndex", e => {
                for (let t = 0; t < this.columnCount; t++) {
                    let l = this.getCell(e, t);
                    if (l && !this.getItemDisabled(l)) return t
                }
                return null
            }), n(this, "getPreviousRowValue", function(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.getValueCell(e);
                if (null === n) return null;
                let r = t.getRows(),
                    s = r.length,
                    o = n.row,
                    a = n.column;
                for (let e = 1; e <= s; e++) {
                    o = (0, l.prevIndex)(r, o, {
                        loop: i
                    });
                    let e = r[o];
                    if (!e) continue;
                    if (!e[a]) {
                        let e = t.getLastEnabledColumnIndex(o);
                        null != e && (a = e)
                    }
                    let n = t.getCell(o, a);
                    if (!t.getItemDisabled(n)) return t.getItemValue(n)
                }
                return t.firstValue
            }), n(this, "getNextRowValue", function(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.getValueCell(e);
                if (null === n) return null;
                let r = t.getRows(),
                    s = r.length,
                    o = n.row,
                    a = n.column;
                for (let e = 1; e <= s; e++) {
                    o = (0, l.nextIndex)(r, o, {
                        loop: i
                    });
                    let e = r[o];
                    if (!e) continue;
                    if (!e[a]) {
                        let e = t.getLastEnabledColumnIndex(o);
                        null != e && (a = e)
                    }
                    let n = t.getCell(o, a);
                    if (!t.getItemDisabled(n)) return t.getItemValue(n)
                }
                return t.lastValue
            }), this.columnCount = i
        }
    };

    function h(e) {
        return (0, l.hasProp)(e, "columnCount") && (0, l.hasProp)(e, "getRows")
    }
    var c = class e extends Set {
        constructor(t = []) {
            super(t), n(this, "selectionMode", "single"), n(this, "deselectable", !0), n(this, "copy", () => {
                let t = new e([...this]);
                return this.sync(t)
            }), n(this, "sync", e => (e.selectionMode = this.selectionMode, e.deselectable = this.deselectable, e)), n(this, "isEmpty", () => 0 === this.size), n(this, "isSelected", e => "none" !== this.selectionMode && null != e && this.has(e)), n(this, "canSelect", (e, t) => "none" !== this.selectionMode || !e.getItemDisabled(e.find(t))), n(this, "firstSelectedValue", e => {
                let t = null;
                for (let l of this)(!t || 0 > e.compareValue(l, t)) && (t = l);
                return t
            }), n(this, "lastSelectedValue", e => {
                let t = null;
                for (let l of this)(!t || e.compareValue(l, t) > 0) && (t = l);
                return t
            }), n(this, "extendSelection", (e, t, l) => {
                if ("none" === this.selectionMode) return this;
                if ("single" === this.selectionMode) return this.replaceSelection(e, l);
                let i = this.copy(),
                    n = Array.from(this).pop();
                for (let r of e.getValueRange(t, null != n ? n : l)) i.delete(r);
                for (let n of e.getValueRange(l, t)) this.canSelect(e, n) && i.add(n);
                return i
            }), n(this, "toggleSelection", (e, t) => {
                if ("none" === this.selectionMode) return this;
                if ("single" === this.selectionMode && !this.isSelected(t)) return this.replaceSelection(e, t);
                let l = this.copy();
                return l.has(t) ? l.delete(t) : l.canSelect(e, t) && l.add(t), l
            }), n(this, "replaceSelection", (t, l) => {
                if ("none" === this.selectionMode || null == l || !this.canSelect(t, l)) return this;
                let i = new e([l]);
                return this.sync(i)
            }), n(this, "setSelection", t => {
                if ("none" === this.selectionMode) return this;
                let l = new e;
                for (let e of t)
                    if (null != e && (l.add(e), "single" === this.selectionMode)) break;
                return this.sync(l)
            }), n(this, "clearSelection", () => {
                let e = this.copy();
                return e.deselectable && e.size > 0 && e.clear(), e
            }), n(this, "select", (e, t, l) => {
                if ("none" === this.selectionMode) return this;
                if ("single" === this.selectionMode)
                    if (this.isSelected(t) && this.deselectable) return this.toggleSelection(e, t);
                    else return this.replaceSelection(e, t);
                return "multiple" === this.selectionMode || l ? this.toggleSelection(e, t) : this.replaceSelection(e, t)
            }), n(this, "deselect", e => {
                let t = this.copy();
                return t.delete(e), t
            }), n(this, "isEqual", e => (0, l.isEqual)(Array.from(this), Array.from(e)))
        }
    };

    function g(e, t, l) {
        for (let i = 0; i < t.length; i++) e = l.getChildren(e, t.slice(i + 1))[t[i]];
        return e
    }

    function p(e, t) {
        for (let l = 0; l < Math.min(e.length, t.length); l++) {
            if (e[l] < t[l]) return -1;
            if (e[l] > t[l]) return 1
        }
        return e.length - t.length
    }

    function m(e, t) {
        let l;
        return T(e, {
            onEnter: (e, i) => {
                if (t.predicate(e, i)) return l = [...i], "stop"
            },
            getChildren: t.getChildren
        }), l
    }

    function f() {
        return {
            type: "replace"
        }
    }

    function v(e) {
        return [e.slice(0, -1), e[e.length - 1]]
    }

    function I(e, t) {
        var l;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map,
            [n, r] = v(e);
        for (let e = n.length - 1; e >= 0; e--) {
            let t = n.slice(0, e).join();
            (null == (l = i.get(t)) ? void 0 : l.type) !== "remove" && i.set(t, f())
        }
        let s = i.get(n.join());
        return (null == s ? void 0 : s.type) === "remove" ? i.set(n.join(), {
            type: "removeThenInsert",
            removeIndexes: s.indexes,
            insertIndex: r,
            insertNodes: t
        }) : i.set(n.join(), {
            type: "insert",
            index: r,
            nodes: t
        }), i
    }

    function E(e) {
        let t = new Map,
            l = new Map;
        for (let t of e) {
            var i;
            let e = t.slice(0, -1).join(),
                n = null != (i = l.get(e)) ? i : [];
            n.push(t[t.length - 1]), l.set(e, n.sort((e, t) => e - t))
        }
        for (let l of e)
            for (let e = l.length - 2; e >= 0; e--) {
                let i = l.slice(0, e).join();
                t.has(i) || t.set(i, f())
            }
        for (let [e, i] of l) t.set(e, {
            type: "remove",
            indexes: i
        });
        return t
    }

    function C(e, t, l) {
        var i, n;
        let r;
        return i = e, n = { ...l,
            getChildren: (e, i) => {
                let n = i.join(),
                    r = t.get(n);
                switch (null == r ? void 0 : r.type) {
                    case "replace":
                    case "remove":
                    case "removeThenInsert":
                    case "insert":
                        return l.getChildren(e, i);
                    default:
                        return []
                }
            },
            transform: (e, i, n) => {
                let r = n.join(),
                    s = t.get(r);
                switch (null == s ? void 0 : s.type) {
                    case "remove":
                        return l.create(e, i.filter((e, t) => !s.indexes.includes(t)), n);
                    case "removeThenInsert":
                        let o = i.filter((e, t) => !s.removeIndexes.includes(t)),
                            a = s.removeIndexes.reduce((e, t) => t < e ? e - 1 : e, s.insertIndex);
                        return l.create(e, y(o, a, 0, ...s.insertNodes), n);
                    case "insert":
                        return l.create(e, y(i, s.index, 0, ...s.nodes), n);
                    case "replace":
                        return l.create(e, i, n);
                    default:
                        return e
                }
            }
        }, r = {}, T(i, { ...n,
            onLeave: (e, t) => {
                var l, i;
                let s = [0, ...t],
                    o = s.join(),
                    a = n.transform(e, null != (l = r[o]) ? l : [], t),
                    d = s.slice(0, -1).join(),
                    u = null != (i = r[d]) ? i : [];
                u.push(a), r[d] = u
            }
        }), r[""][0]
    }

    function y(e, t, l) {
        for (var i = arguments.length, n = Array(i > 3 ? i - 3 : 0), r = 3; r < i; r++) n[r - 3] = arguments[r];
        return [...e.slice(0, t), ...n, ...e.slice(t + l)]
    }

    function T(e, t) {
        let {
            onEnter: l,
            onLeave: i,
            getChildren: n
        } = t, r = [], s = [{
            node: e
        }], o = t.reuseIndexPath ? () => r : () => r.slice();
        for (; s.length > 0;) {
            let e = s[s.length - 1];
            if (void 0 === e.state) {
                let t = null == l ? void 0 : l(e.node, o());
                if ("stop" === t) return;
                e.state = "skip" === t ? -1 : 0
            }
            let t = e.children || n(e.node, o());
            if (e.children || (e.children = t), -1 !== e.state) {
                if (e.state < t.length) {
                    let l = e.state;
                    r.push(l), s.push({
                        node: t[l]
                    }), e.state = l + 1;
                    continue
                }
                if ("stop" === (null == i ? void 0 : i(e.node, o()))) return
            }
            r.pop(), s.pop()
        }
    }
    var N = class e {
        constructor(t) {
            var i = this;
            this.options = t, n(this, "rootNode"), n(this, "isEqual", e => (0, l.isEqual)(this.rootNode, e.rootNode)), n(this, "getNodeChildren", e => {
                var t, l, i, n;
                return null != (n = null != (i = null == (t = (l = this.options).nodeToChildren) ? void 0 : t.call(l, e)) ? i : V.nodeToChildren(e)) ? n : []
            }), n(this, "resolveIndexPath", e => "string" == typeof e ? this.getIndexPath(e) : e), n(this, "resolveNode", e => {
                let t = this.resolveIndexPath(e);
                return t ? this.at(t) : void 0
            }), n(this, "getNodeChildrenCount", e => {
                var t, l, i;
                return null != (i = null == (t = (l = this.options).nodeToChildrenCount) ? void 0 : t.call(l, e)) ? i : V.nodeToChildrenCount(e)
            }), n(this, "getNodeValue", e => {
                var t, l, i;
                return null != (i = null == (t = (l = this.options).nodeToValue) ? void 0 : t.call(l, e)) ? i : V.nodeToValue(e)
            }), n(this, "getNodeDisabled", e => {
                var t, l, i;
                return null != (i = null == (t = (l = this.options).isNodeDisabled) ? void 0 : t.call(l, e)) ? i : V.isNodeDisabled(e)
            }), n(this, "stringify", e => {
                let t = this.findNode(e);
                return t ? this.stringifyNode(t) : null
            }), n(this, "stringifyNode", e => {
                var t, l, i;
                return null != (i = null == (t = (l = this.options).nodeToString) ? void 0 : t.call(l, e)) ? i : V.nodeToString(e)
            }), n(this, "getFirstNode", function() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.rootNode;
                return T(t, {
                    getChildren: i.getNodeChildren,
                    onEnter: (t, l) => {
                        if (!e && l.length > 0 && !i.getNodeDisabled(t)) return e = t, "stop"
                    }
                }), e
            }), n(this, "getLastNode", function() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.rootNode,
                    l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return T(t, {
                    getChildren: i.getNodeChildren,
                    onEnter: (n, r) => {
                        var s;
                        if (!i.isSameNode(n, t)) {
                            if (null == (s = l.skip) ? void 0 : s.call(l, {
                                    value: i.getNodeValue(n),
                                    node: n,
                                    indexPath: r
                                })) return "skip";
                            r.length > 0 && !i.getNodeDisabled(n) && (e = n)
                        }
                    }
                }), e
            }), n(this, "at", e => g(this.rootNode, e, {
                getChildren: this.getNodeChildren
            })), n(this, "findNode", function(e) {
                var t;
                let l, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.rootNode;
                return T(n, { ...t = {
                        getChildren: i.getNodeChildren,
                        predicate: t => i.getNodeValue(t) === e
                    },
                    onEnter: (e, i) => {
                        if (t.predicate(e, i)) return l = e, "stop"
                    }
                }), l
            }), n(this, "findNodes", function(e) {
                var t;
                let l, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.rootNode,
                    r = new Set(e.filter(e => null != e));
                return t = {
                    getChildren: i.getNodeChildren,
                    predicate: e => r.has(i.getNodeValue(e))
                }, l = [], T(n, {
                    onEnter: (e, i) => {
                        t.predicate(e, i) && l.push(e)
                    },
                    getChildren: t.getChildren
                }), l
            }), n(this, "sort", e => e.reduce((e, t) => {
                let l = this.getIndexPath(t);
                return l && e.push({
                    value: t,
                    indexPath: l
                }), e
            }, []).sort((e, t) => p(e.indexPath, t.indexPath)).map(e => {
                let {
                    value: t
                } = e;
                return t
            })), n(this, "getIndexPath", e => m(this.rootNode, {
                getChildren: this.getNodeChildren,
                predicate: t => this.getNodeValue(t) === e
            })), n(this, "getValue", e => {
                let t = this.at(e);
                return t ? this.getNodeValue(t) : void 0
            }), n(this, "getValuePath", e => {
                if (!e) return [];
                let t = [],
                    l = [...e];
                for (; l.length > 0;) {
                    let e = this.at(l);
                    e && t.unshift(this.getNodeValue(e)), l.pop()
                }
                return t
            }), n(this, "getDepth", e => {
                var t;
                let l = m(this.rootNode, {
                    getChildren: this.getNodeChildren,
                    predicate: t => this.getNodeValue(t) === e
                });
                return null != (t = null == l ? void 0 : l.length) ? t : 0
            }), n(this, "isSameNode", (e, t) => this.getNodeValue(e) === this.getNodeValue(t)), n(this, "isRootNode", e => this.isSameNode(e, this.rootNode)), n(this, "contains", (e, t) => !!e && !!t && t.slice(0, e.length).every((l, i) => e[i] === t[i])), n(this, "getNextNode", function(e) {
                let t, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = !1;
                return T(i.rootNode, {
                    getChildren: i.getNodeChildren,
                    onEnter: (r, s) => {
                        var o;
                        if (i.isRootNode(r)) return;
                        let a = i.getNodeValue(r);
                        return (null == (o = l.skip) ? void 0 : o.call(l, {
                            value: a,
                            node: r,
                            indexPath: s
                        })) ? (a === e && (n = !0), "skip") : n && !i.getNodeDisabled(r) ? (t = r, "stop") : void(a === e && (n = !0))
                    }
                }), t
            }), n(this, "getPreviousNode", function(e) {
                let t, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = !1;
                return T(i.rootNode, {
                    getChildren: i.getNodeChildren,
                    onEnter: (r, s) => {
                        var o;
                        if (i.isRootNode(r)) return;
                        let a = i.getNodeValue(r);
                        return (null == (o = l.skip) ? void 0 : o.call(l, {
                            value: a,
                            node: r,
                            indexPath: s
                        })) ? "skip" : a === e ? (n = !0, "stop") : void(!i.getNodeDisabled(r) && (t = r))
                    }
                }), n ? t : void 0
            }), n(this, "getParentNodes", e => {
                var t;
                let l = null == (t = this.resolveIndexPath(e)) ? void 0 : t.slice();
                if (!l) return [];
                let i = [];
                for (; l.length > 0;) {
                    l.pop();
                    let e = this.at(l);
                    e && !this.isRootNode(e) && i.unshift(e)
                }
                return i
            }), n(this, "getDescendantNodes", (e, t) => {
                let l = this.resolveNode(e);
                if (!l) return [];
                let i = [];
                return T(l, {
                    getChildren: this.getNodeChildren,
                    onEnter: (e, l) => {
                        0 === l.length || !(null == t ? void 0 : t.withBranch) && this.isBranchNode(e) || i.push(e)
                    }
                }), i
            }), n(this, "getDescendantValues", (e, t) => this.getDescendantNodes(e, t).map(e => this.getNodeValue(e))), n(this, "getParentIndexPath", e => e.slice(0, -1)), n(this, "getParentNode", e => {
                let t = this.resolveIndexPath(e);
                return t ? this.at(this.getParentIndexPath(t)) : void 0
            }), n(this, "visit", e => {
                let {
                    skip: t,
                    ...l
                } = e;
                T(this.rootNode, { ...l,
                    getChildren: this.getNodeChildren,
                    onEnter: (e, i) => {
                        var n;
                        if (!this.isRootNode(e)) return (null == t ? void 0 : t({
                            value: this.getNodeValue(e),
                            node: e,
                            indexPath: i
                        })) ? "skip" : null == (n = l.onEnter) ? void 0 : n.call(l, e, i)
                    }
                })
            }), n(this, "getPreviousSibling", e => {
                let t = this.getParentNode(e);
                if (!t) return;
                let l = this.getNodeChildren(t),
                    i = e[e.length - 1];
                for (; --i >= 0;) {
                    let e = l[i];
                    if (!this.getNodeDisabled(e)) return e
                }
            }), n(this, "getNextSibling", e => {
                let t = this.getParentNode(e);
                if (!t) return;
                let l = this.getNodeChildren(t),
                    i = e[e.length - 1];
                for (; ++i < l.length;) {
                    let e = l[i];
                    if (!this.getNodeDisabled(e)) return e
                }
            }), n(this, "getSiblingNodes", e => {
                let t = this.getParentNode(e);
                return t ? this.getNodeChildren(t) : []
            }), n(this, "getValues", function() {
                var e, t;
                let l, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.rootNode;
                return (e = {
                    getChildren: i.getNodeChildren,
                    transform: e => [i.getNodeValue(e)]
                }, l = (t = { ...e,
                    initialResult: [],
                    nextResult: (t, l, i) => (t.push(...e.transform(l, i)), t)
                }).initialResult, T(n, { ...t,
                    onEnter: (e, i) => {
                        l = t.nextResult(l, e, i)
                    }
                }), l).slice(1)
            }), n(this, "isValidDepth", (e, t) => null == t || ("function" == typeof t ? t(e.length) : e.length === t)), n(this, "isBranchNode", e => this.getNodeChildren(e).length > 0 || null != this.getNodeChildrenCount(e)), n(this, "getBranchValues", function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.rootNode,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = [];
                return T(e, {
                    getChildren: i.getNodeChildren,
                    onEnter: (e, n) => {
                        var r;
                        if (0 === n.length) return;
                        let s = i.getNodeValue(e);
                        if (null == (r = t.skip) ? void 0 : r.call(t, {
                                value: s,
                                node: e,
                                indexPath: n
                            })) return "skip";
                        i.isBranchNode(e) && i.isValidDepth(n, t.depth) && l.push(i.getNodeValue(e))
                    }
                }), l
            }), n(this, "flatten", function() {
                var e;
                let t, l, n, r, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.rootNode;
                return e = {
                    getChildren: i.getNodeChildren
                }, t = [], l = 0, n = new Map, r = new Map, T(s, {
                    getChildren: e.getChildren,
                    onEnter: (i, s) => {
                        n.has(i) || n.set(i, l++);
                        let o = e.getChildren(i, s);
                        o.forEach(e => {
                            r.has(e) || r.set(e, i), n.has(e) || n.set(e, l++)
                        });
                        let a = o.length > 0 ? o.map(e => n.get(e)) : void 0,
                            d = r.get(i),
                            u = d ? n.get(d) : void 0,
                            h = n.get(i);
                        t.push({ ...i,
                            _children: a,
                            _parent: u,
                            _index: h
                        })
                    }
                }), t
            }), n(this, "_create", (e, t) => this.getNodeChildren(e).length > 0 || t.length > 0 ? { ...e,
                children: t
            } : { ...e
            }), n(this, "_insert", (e, t, l) => this.copy(function(e, t) {
                let {
                    nodes: l,
                    at: i
                } = t;
                if (0 === i.length) throw Error("Can't insert nodes at the root");
                return C(e, I(i, l), t)
            }(e, {
                at: t,
                nodes: l,
                getChildren: this.getNodeChildren,
                create: this._create
            }))), n(this, "copy", t => new e({ ...this.options,
                rootNode: t
            })), n(this, "_replace", (e, t, l) => {
                var i;
                return this.copy(0 === (i = {
                    at: t,
                    node: l,
                    getChildren: this.getNodeChildren,
                    create: this._create
                }).at.length ? i.node : C(e, function(e, t) {
                    let l = new Map,
                        [i, n] = v(e);
                    for (let e = i.length - 1; e >= 0; e--) {
                        let t = i.slice(0, e).join();
                        l.set(t, f())
                    }
                    return l.set(i.join(), {
                        type: "removeThenInsert",
                        removeIndexes: [n],
                        insertIndex: n,
                        insertNodes: [t]
                    }), l
                }(i.at, i.node), i))
            }), n(this, "_move", (e, t, l) => this.copy(function(e, t) {
                if (0 === t.indexPaths.length) return e;
                for (let e of t.indexPaths)
                    if (0 === e.length) throw Error("Can't move the root node");
                if (0 === t.to.length) throw Error("Can't move nodes to the root");
                let l = function(e) {
                        let t = e.sort(p),
                            l = [],
                            i = new Set;
                        for (let e of t) {
                            let t = e.join();
                            i.has(t) || (i.add(t), l.push(e))
                        }
                        return l
                    }(t.indexPaths),
                    i = l.map(l => g(e, l, t));
                return C(e, I(t.to, i, E(l)), t)
            }(e, {
                indexPaths: t,
                to: l,
                getChildren: this.getNodeChildren,
                create: this._create
            }))), n(this, "_remove", (e, t) => this.copy(function(e, t) {
                if (0 === t.indexPaths.length) return e;
                for (let e of t.indexPaths)
                    if (0 === e.length) throw Error("Can't remove the root node");
                return C(e, E(t.indexPaths), t)
            }(e, {
                indexPaths: t,
                getChildren: this.getNodeChildren,
                create: this._create
            }))), n(this, "replace", (e, t) => this._replace(this.rootNode, e, t)), n(this, "remove", e => this._remove(this.rootNode, e)), n(this, "insertBefore", (e, t) => this.getParentNode(e) ? this._insert(this.rootNode, e, t) : void 0), n(this, "insertAfter", (e, t) => {
                if (!this.getParentNode(e)) return;
                let l = [...e.slice(0, -1), e[e.length - 1] + 1];
                return this._insert(this.rootNode, l, t)
            }), n(this, "move", (e, t) => this._move(this.rootNode, e, t)), n(this, "filter", e => {
                let t = function(e, t) {
                    let {
                        predicate: l,
                        create: i,
                        getChildren: n
                    } = t, r = (e, t) => {
                        let s = n(e, t),
                            o = [];
                        s.forEach((e, l) => {
                            let i = r(e, [...t, l]);
                            i && o.push(i)
                        });
                        let a = 0 === t.length,
                            d = l(e, t),
                            u = o.length > 0;
                        return a || d || u ? i(e, o, t) : null
                    };
                    return r(e, []) || i(e, [], [])
                }(this.rootNode, {
                    predicate: e,
                    getChildren: this.getNodeChildren,
                    create: this._create
                });
                return this.copy(t)
            }), n(this, "toJSON", () => this.getValues(this.rootNode)), this.rootNode = t.rootNode
        }
    };

    function O(e) {
        let t = {
            label: "",
            value: "ROOT",
            children: []
        };
        return e.forEach(e => {
            let l = e.split("/"),
                i = t;
            l.forEach((e, t) => {
                var n;
                let r = null == (n = i.children) ? void 0 : n.find(t => t.label === e);
                r || (r = {
                    value: l.slice(0, t + 1).join("/"),
                    label: e
                }, i.children || (i.children = []), i.children.push(r)), i = r
            })
        }), new N({
            rootNode: t
        })
    }
    var V = {
        nodeToValue: e => "string" == typeof e ? e : (0, l.isObject)(e) && (0, l.hasProp)(e, "value") ? e.value : "",
        nodeToString: e => "string" == typeof e ? e : (0, l.isObject)(e) && (0, l.hasProp)(e, "label") ? e.label : V.nodeToValue(e),
        isNodeDisabled: e => !!((0, l.isObject)(e) && (0, l.hasProp)(e, "disabled")) && !!e.disabled,
        nodeToChildren: e => e.children,
        nodeToChildrenCount(e) {
            if ((0, l.isObject)(e) && (0, l.hasProp)(e, "childrenCount")) return e.childrenCount
        }
    };
    e.s(["GridCollection", () => u, "ListCollection", () => s, "Selection", () => c, "TreeCollection", () => N, "filePathToTree", () => O, "isGridCollection", () => h], 703144);
    var b = e.i(841158),
        R = e.i(541356),
        S = e.i(30500),
        P = e.i(143713),
        x = e.i(593006),
        A = (0, t.createAnatomy)("select").parts("label", "positioner", "trigger", "indicator", "clearTrigger", "item", "itemText", "itemIndicator", "itemGroup", "itemGroupLabel", "list", "content", "root", "control", "valueText"),
        G = A.build(),
        L = e => new s(e);
    L.empty = () => new s({
        items: []
    });
    var D = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.content) ? l : "select:".concat(e.id, ":content")
        },
        k = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.trigger) ? l : "select:".concat(e.id, ":trigger")
        },
        F = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.clearTrigger) ? l : "select:".concat(e.id, ":clear-trigger")
        },
        w = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.label) ? l : "select:".concat(e.id, ":label")
        },
        M = (e, t) => {
            var l, i, n;
            return null != (n = null == (i = e.ids) || null == (l = i.item) ? void 0 : l.call(i, t)) ? n : "select:".concat(e.id, ":option:").concat(t)
        },
        H = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.hiddenSelect) ? l : "select:".concat(e.id, ":select")
        },
        _ = e => {
            var t, l;
            return null != (l = null == (t = e.ids) ? void 0 : t.positioner) ? l : "select:".concat(e.id, ":positioner")
        },
        B = (e, t) => {
            var l, i, n;
            return null != (n = null == (i = e.ids) || null == (l = i.itemGroupLabel) ? void 0 : l.call(i, t)) ? n : "select:".concat(e.id, ":optgroup-label:").concat(t)
        },
        j = e => e.getById(H(e)),
        U = e => e.getById(D(e)),
        W = e => e.getById(k(e)),
        K = e => e.getById(_(e)),
        q = (e, t) => null == t ? null : e.getById(M(e, t));

    function z(e, t) {
        let {
            context: i,
            prop: n,
            scope: r,
            state: s,
            computed: o,
            send: a
        } = e, d = n("disabled") || i.get("fieldsetDisabled"), u = !!n("invalid"), h = !!n("required"), c = !!n("readOnly"), g = n("composite"), p = n("collection"), m = s.hasTag("open"), f = s.matches("focused"), v = i.get("highlightedValue"), I = i.get("highlightedItem"), E = i.get("selectedItems"), C = i.get("currentPlacement"), y = o("isTypingAhead"), T = o("isInteractive"), N = v ? M(r, v) : void 0;

        function O(e) {
            let t = p.getItemDisabled(e.item),
                n = p.getItemValue(e.item);
            return (0, l.ensure)(n, () => "[zag-js] No value found for item ".concat(JSON.stringify(e.item))), {
                value: n,
                disabled: !!(d || t),
                highlighted: v === n,
                selected: i.get("value").includes(n)
            }
        }
        let V = (0, R.getPlacementStyles)({ ...n("positioning"),
            placement: C
        });
        return {
            open: m,
            focused: f,
            empty: 0 === i.get("value").length,
            highlightedItem: I,
            highlightedValue: v,
            selectedItems: E,
            hasSelectedItems: o("hasSelectedItems"),
            value: i.get("value"),
            valueAsString: o("valueAsString"),
            collection: p,
            multiple: !!n("multiple"),
            disabled: !!d,
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a({
                    type: "POSITIONING.SET",
                    options: e
                })
            },
            focus() {
                var e;
                null == (e = W(r)) || e.focus({
                    preventScroll: !0
                })
            },
            setOpen(e) {
                s.hasTag("open") !== e && a({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            selectValue(e) {
                a({
                    type: "ITEM.SELECT",
                    value: e
                })
            },
            setValue(e) {
                a({
                    type: "VALUE.SET",
                    value: e
                })
            },
            selectAll() {
                a({
                    type: "VALUE.SET",
                    value: p.getValues()
                })
            },
            setHighlightValue(e) {
                a({
                    type: "HIGHLIGHTED_VALUE.SET",
                    value: e
                })
            },
            clearHighlightValue() {
                a({
                    type: "HIGHLIGHTED_VALUE.CLEAR"
                })
            },
            clearValue(e) {
                e ? a({
                    type: "ITEM.CLEAR",
                    value: e
                }) : a({
                    type: "VALUE.CLEAR"
                })
            },
            getItemState: O,
            getRootProps: () => {
                var e, l;
                return t.element({ ...G.root.attrs,
                    dir: n("dir"),
                    id: null != (l = null == (e = r.ids) ? void 0 : e.root) ? l : "select:".concat(r.id),
                    "data-invalid": (0, b.dataAttr)(u),
                    "data-readonly": (0, b.dataAttr)(c)
                })
            },
            getLabelProps: () => t.label({
                dir: n("dir"),
                id: w(r),
                ...G.label.attrs,
                "data-disabled": (0, b.dataAttr)(d),
                "data-invalid": (0, b.dataAttr)(u),
                "data-readonly": (0, b.dataAttr)(c),
                "data-required": (0, b.dataAttr)(h),
                htmlFor: H(r),
                onClick(e) {
                    var t;
                    e.defaultPrevented || d || null == (t = W(r)) || t.focus({
                        preventScroll: !0
                    })
                }
            }),
            getControlProps: () => {
                var e, l;
                return t.element({ ...G.control.attrs,
                    dir: n("dir"),
                    id: null != (l = null == (e = r.ids) ? void 0 : e.control) ? l : "select:".concat(r.id, ":control"),
                    "data-state": m ? "open" : "closed",
                    "data-focus": (0, b.dataAttr)(f),
                    "data-disabled": (0, b.dataAttr)(d),
                    "data-invalid": (0, b.dataAttr)(u)
                })
            },
            getValueTextProps: () => t.element({ ...G.valueText.attrs,
                dir: n("dir"),
                "data-disabled": (0, b.dataAttr)(d),
                "data-invalid": (0, b.dataAttr)(u),
                "data-focus": (0, b.dataAttr)(f)
            }),
            getTriggerProps: () => t.button({
                id: k(r),
                disabled: d,
                dir: n("dir"),
                type: "button",
                role: "combobox",
                "aria-controls": D(r),
                "aria-expanded": m,
                "aria-haspopup": "listbox",
                "data-state": m ? "open" : "closed",
                "aria-invalid": u,
                "aria-required": h,
                "aria-labelledby": w(r),
                ...G.trigger.attrs,
                "data-disabled": (0, b.dataAttr)(d),
                "data-invalid": (0, b.dataAttr)(u),
                "data-readonly": (0, b.dataAttr)(c),
                "data-placement": C,
                "data-placeholder-shown": (0, b.dataAttr)(!o("hasSelectedItems")),
                onClick(e) {
                    !T || e.defaultPrevented || a({
                        type: "TRIGGER.CLICK"
                    })
                },
                onFocus() {
                    a({
                        type: "TRIGGER.FOCUS"
                    })
                },
                onBlur() {
                    a({
                        type: "TRIGGER.BLUR"
                    })
                },
                onKeyDown(e) {
                    if (e.defaultPrevented || !T) return;
                    let t = {
                        ArrowUp() {
                            a({
                                type: "TRIGGER.ARROW_UP"
                            })
                        },
                        ArrowDown(e) {
                            a({
                                type: e.altKey ? "OPEN" : "TRIGGER.ARROW_DOWN"
                            })
                        },
                        ArrowLeft() {
                            a({
                                type: "TRIGGER.ARROW_LEFT"
                            })
                        },
                        ArrowRight() {
                            a({
                                type: "TRIGGER.ARROW_RIGHT"
                            })
                        },
                        Home() {
                            a({
                                type: "TRIGGER.HOME"
                            })
                        },
                        End() {
                            a({
                                type: "TRIGGER.END"
                            })
                        },
                        Enter() {
                            a({
                                type: "TRIGGER.ENTER"
                            })
                        },
                        Space(e) {
                            y ? a({
                                type: "TRIGGER.TYPEAHEAD",
                                key: e.key
                            }) : a({
                                type: "TRIGGER.ENTER"
                            })
                        }
                    }[(0, b.getEventKey)(e, {
                        dir: n("dir"),
                        orientation: "vertical"
                    })];
                    if (t) {
                        t(e), e.preventDefault();
                        return
                    }
                    b.getByTypeahead.isValidEvent(e) && (a({
                        type: "TRIGGER.TYPEAHEAD",
                        key: e.key
                    }), e.preventDefault())
                }
            }),
            getIndicatorProps: () => t.element({ ...G.indicator.attrs,
                dir: n("dir"),
                "aria-hidden": !0,
                "data-state": m ? "open" : "closed",
                "data-disabled": (0, b.dataAttr)(d),
                "data-invalid": (0, b.dataAttr)(u),
                "data-readonly": (0, b.dataAttr)(c)
            }),
            getItemProps(l) {
                let i = O(l);
                return t.element({
                    id: M(r, i.value),
                    role: "option",
                    ...G.item.attrs,
                    dir: n("dir"),
                    "data-value": i.value,
                    "aria-selected": i.selected,
                    "data-state": i.selected ? "checked" : "unchecked",
                    "data-highlighted": (0, b.dataAttr)(i.highlighted),
                    "data-disabled": (0, b.dataAttr)(i.disabled),
                    "aria-disabled": (0, b.ariaAttr)(i.disabled),
                    onPointerMove(e) {
                        i.disabled || "mouse" !== e.pointerType || i.value !== v && a({
                            type: "ITEM.POINTER_MOVE",
                            value: i.value
                        })
                    },
                    onClick(e) {
                        e.defaultPrevented || i.disabled || a({
                            type: "ITEM.CLICK",
                            src: "pointerup",
                            value: i.value
                        })
                    },
                    onPointerLeave(t) {
                        var n;
                        i.disabled || l.persistFocus || "mouse" !== t.pointerType || (null == (n = e.event.previous()) ? void 0 : n.type.includes("POINTER")) && a({
                            type: "ITEM.POINTER_LEAVE"
                        })
                    }
                })
            },
            getItemTextProps(e) {
                let l = O(e);
                return t.element({ ...G.itemText.attrs,
                    "data-state": l.selected ? "checked" : "unchecked",
                    "data-disabled": (0, b.dataAttr)(l.disabled),
                    "data-highlighted": (0, b.dataAttr)(l.highlighted)
                })
            },
            getItemIndicatorProps(e) {
                let l = O(e);
                return t.element({
                    "aria-hidden": !0,
                    ...G.itemIndicator.attrs,
                    "data-state": l.selected ? "checked" : "unchecked",
                    hidden: !l.selected
                })
            },
            getItemGroupLabelProps(e) {
                let {
                    htmlFor: l
                } = e;
                return t.element({ ...G.itemGroupLabel.attrs,
                    id: B(r, l),
                    dir: n("dir"),
                    role: "presentation"
                })
            },
            getItemGroupProps(e) {
                var l, i, s;
                let {
                    id: o
                } = e;
                return t.element({ ...G.itemGroup.attrs,
                    "data-disabled": (0, b.dataAttr)(d),
                    id: null != (s = null == (i = r.ids) || null == (l = i.itemGroup) ? void 0 : l.call(i, o)) ? s : "select:".concat(r.id, ":optgroup:").concat(o),
                    "aria-labelledby": B(r, o),
                    role: "group",
                    dir: n("dir")
                })
            },
            getClearTriggerProps: () => t.button({ ...G.clearTrigger.attrs,
                id: F(r),
                type: "button",
                "aria-label": "Clear value",
                "data-invalid": (0, b.dataAttr)(u),
                disabled: d,
                hidden: !o("hasSelectedItems"),
                dir: n("dir"),
                onClick(e) {
                    e.defaultPrevented || a({
                        type: "CLEAR.CLICK"
                    })
                }
            }),
            getHiddenSelectProps() {
                let e = i.get("value"),
                    l = n("multiple") ? e : null == e ? void 0 : e[0];
                return t.select({
                    name: n("name"),
                    form: n("form"),
                    disabled: d,
                    multiple: n("multiple"),
                    required: n("required"),
                    "aria-hidden": !0,
                    id: H(r),
                    defaultValue: l,
                    style: b.visuallyHiddenStyle,
                    tabIndex: -1,
                    onFocus() {
                        var e;
                        null == (e = W(r)) || e.focus({
                            preventScroll: !0
                        })
                    },
                    "aria-labelledby": w(r)
                })
            },
            getPositionerProps: () => t.element({ ...G.positioner.attrs,
                dir: n("dir"),
                id: _(r),
                style: V.floating
            }),
            getContentProps: () => t.element({
                hidden: !m,
                dir: n("dir"),
                id: D(r),
                role: g ? "listbox" : "dialog",
                ...G.content.attrs,
                "data-state": m ? "open" : "closed",
                "data-placement": C,
                "data-activedescendant": N,
                "aria-activedescendant": g ? N : void 0,
                "aria-multiselectable": !!n("multiple") && !!g || void 0,
                "aria-labelledby": w(r),
                tabIndex: 0,
                onKeyDown(e) {
                    if (!T || !(0, b.contains)(e.currentTarget, (0, b.getEventTarget)(e))) return;
                    if ("Tab" === e.key && !(0, b.isValidTabEvent)(e)) return void e.preventDefault();
                    let t = {
                            ArrowUp() {
                                a({
                                    type: "CONTENT.ARROW_UP"
                                })
                            },
                            ArrowDown() {
                                a({
                                    type: "CONTENT.ARROW_DOWN"
                                })
                            },
                            Home() {
                                a({
                                    type: "CONTENT.HOME"
                                })
                            },
                            End() {
                                a({
                                    type: "CONTENT.END"
                                })
                            },
                            Enter() {
                                a({
                                    type: "ITEM.CLICK",
                                    src: "keydown.enter"
                                })
                            },
                            Space(e) {
                                if (y) a({
                                    type: "CONTENT.TYPEAHEAD",
                                    key: e.key
                                });
                                else {
                                    var l;
                                    null == (l = t.Enter) || l.call(t, e)
                                }
                            }
                        },
                        l = t[(0, b.getEventKey)(e)];
                    if (l) {
                        l(e), e.preventDefault();
                        return
                    }
                    let i = (0, b.getEventTarget)(e);
                    !(0, b.isEditableElement)(i) && b.getByTypeahead.isValidEvent(e) && (a({
                        type: "CONTENT.TYPEAHEAD",
                        key: e.key
                    }), e.preventDefault())
                }
            }),
            getListProps: () => t.element({ ...G.list.attrs,
                tabIndex: 0,
                role: g ? void 0 : "listbox",
                "aria-labelledby": k(r),
                "aria-activedescendant": g ? void 0 : N,
                "aria-multiselectable": !!(!g && n("multiple")) || void 0
            })
        }
    }
    var {
        and: Y,
        not: J,
        or: Q
    } = (0, S.createGuards)(), X = (0, S.createMachine)({
        props(e) {
            var t;
            let {
                props: l
            } = e;
            return {
                loopFocus: !1,
                closeOnSelect: !l.multiple,
                composite: !0,
                defaultValue: [],
                ...l,
                collection: null != (t = l.collection) ? t : L.empty(),
                positioning: {
                    placement: "bottom-start",
                    gutter: 8,
                    ...l.positioning
                }
            }
        },
        context(e) {
            let {
                prop: t,
                bindable: i
            } = e;
            return {
                value: i(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    isEqual: l.isEqual,
                    onChange(e) {
                        var l;
                        let i = t("collection").findMany(e);
                        return null == (l = t("onValueChange")) ? void 0 : l({
                            value: e,
                            items: i
                        })
                    }
                })),
                highlightedValue: i(() => ({
                    defaultValue: t("defaultHighlightedValue") || null,
                    value: t("highlightedValue"),
                    onChange(e) {
                        var l;
                        null == (l = t("onHighlightChange")) || l({
                            highlightedValue: e,
                            highlightedItem: t("collection").find(e),
                            highlightedIndex: t("collection").indexOf(e)
                        })
                    }
                })),
                currentPlacement: i(() => ({
                    defaultValue: void 0
                })),
                fieldsetDisabled: i(() => ({
                    defaultValue: !1
                })),
                highlightedItem: i(() => ({
                    defaultValue: null
                })),
                selectedItems: i(() => {
                    var e, l;
                    let i = null != (l = null != (e = t("value")) ? e : t("defaultValue")) ? l : [];
                    return {
                        defaultValue: t("collection").findMany(i)
                    }
                })
            }
        },
        refs: () => ({
            typeahead: { ...b.getByTypeahead.defaultOptions
            }
        }),
        computed: {
            hasSelectedItems: e => {
                let {
                    context: t
                } = e;
                return t.get("value").length > 0
            },
            isTypingAhead: e => {
                let {
                    refs: t
                } = e;
                return "" !== t.get("typeahead").keysSoFar
            },
            isDisabled: e => {
                let {
                    prop: t,
                    context: l
                } = e;
                return !!t("disabled") || !!l.get("fieldsetDisabled")
            },
            isInteractive: e => {
                let {
                    prop: t
                } = e;
                return !(t("disabled") || t("readOnly"))
            },
            valueAsString: e => {
                let {
                    context: t,
                    prop: l
                } = e;
                return l("collection").stringifyItems(t.get("selectedItems"))
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "idle"
        },
        entry: ["syncSelectElement"],
        watch(e) {
            let {
                context: t,
                prop: l,
                track: i,
                action: n
            } = e;
            i([() => t.get("value").toString()], () => {
                n(["syncSelectedItems", "syncSelectElement", "dispatchChangeEvent"])
            }), i([() => l("open")], () => {
                n(["toggleVisibility"])
            }), i([() => t.get("highlightedValue")], () => {
                n(["syncHighlightedItem"])
            }), i([() => l("collection").toString()], () => {
                n(["syncCollection"])
            })
        },
        on: {
            "HIGHLIGHTED_VALUE.SET": {
                actions: ["setHighlightedItem"]
            },
            "HIGHLIGHTED_VALUE.CLEAR": {
                actions: ["clearHighlightedItem"]
            },
            "ITEM.SELECT": {
                actions: ["selectItem"]
            },
            "ITEM.CLEAR": {
                actions: ["clearItem"]
            },
            "VALUE.SET": {
                actions: ["setSelectedItems"]
            },
            "VALUE.CLEAR": {
                actions: ["clearSelectedItems"]
            },
            "CLEAR.CLICK": {
                actions: ["clearSelectedItems", "focusTriggerEl"]
            }
        },
        effects: ["trackFormControlState"],
        states: {
            idle: {
                tags: ["closed"],
                on: {
                    "CONTROLLED.OPEN": [{
                        guard: "isTriggerClickEvent",
                        target: "open",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus"]
                    }],
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen", "setInitialFocus", "highlightFirstSelectedItem"]
                    }],
                    "TRIGGER.FOCUS": {
                        target: "focused"
                    },
                    OPEN: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen"]
                    }]
                }
            },
            focused: {
                tags: ["closed"],
                on: {
                    "CONTROLLED.OPEN": [{
                        guard: "isTriggerClickEvent",
                        target: "open",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem"]
                    }, {
                        guard: "isTriggerArrowUpEvent",
                        target: "open",
                        actions: ["setInitialFocus", "highlightComputedLastItem"]
                    }, {
                        guard: Q("isTriggerArrowDownEvent", "isTriggerEnterEvent"),
                        target: "open",
                        actions: ["setInitialFocus", "highlightComputedFirstItem"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus"]
                    }],
                    OPEN: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen"]
                    }],
                    "TRIGGER.BLUR": {
                        target: "idle"
                    },
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen", "highlightFirstSelectedItem"]
                    }],
                    "TRIGGER.ENTER": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedFirstItem"]
                    }],
                    "TRIGGER.ARROW_UP": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedLastItem"]
                    }],
                    "TRIGGER.ARROW_DOWN": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedFirstItem"]
                    }],
                    "TRIGGER.ARROW_LEFT": [{
                        guard: Y(J("multiple"), "hasSelectedItems"),
                        actions: ["selectPreviousItem"]
                    }, {
                        guard: J("multiple"),
                        actions: ["selectLastItem"]
                    }],
                    "TRIGGER.ARROW_RIGHT": [{
                        guard: Y(J("multiple"), "hasSelectedItems"),
                        actions: ["selectNextItem"]
                    }, {
                        guard: J("multiple"),
                        actions: ["selectFirstItem"]
                    }],
                    "TRIGGER.HOME": {
                        guard: J("multiple"),
                        actions: ["selectFirstItem"]
                    },
                    "TRIGGER.END": {
                        guard: J("multiple"),
                        actions: ["selectLastItem"]
                    },
                    "TRIGGER.TYPEAHEAD": {
                        guard: J("multiple"),
                        actions: ["selectMatchingItem"]
                    }
                }
            },
            open: {
                tags: ["open"],
                exit: ["scrollContentToTop"],
                effects: ["trackDismissableElement", "computePlacement", "scrollToHighlightedItem"],
                on: {
                    "CONTROLLED.CLOSE": [{
                        guard: "restoreFocus",
                        target: "focused",
                        actions: ["focusTriggerEl", "clearHighlightedItem"]
                    }, {
                        target: "idle",
                        actions: ["clearHighlightedItem"]
                    }],
                    CLOSE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        guard: "restoreFocus",
                        target: "focused",
                        actions: ["invokeOnClose", "focusTriggerEl", "clearHighlightedItem"]
                    }, {
                        target: "idle",
                        actions: ["invokeOnClose", "clearHighlightedItem"]
                    }],
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose", "clearHighlightedItem"]
                    }],
                    "ITEM.CLICK": [{
                        guard: Y("closeOnSelect", "isOpenControlled"),
                        actions: ["selectHighlightedItem", "invokeOnClose"]
                    }, {
                        guard: "closeOnSelect",
                        target: "focused",
                        actions: ["selectHighlightedItem", "invokeOnClose", "focusTriggerEl", "clearHighlightedItem"]
                    }, {
                        actions: ["selectHighlightedItem"]
                    }],
                    "CONTENT.HOME": {
                        actions: ["highlightFirstItem"]
                    },
                    "CONTENT.END": {
                        actions: ["highlightLastItem"]
                    },
                    "CONTENT.ARROW_DOWN": [{
                        guard: Y("hasHighlightedItem", "loop", "isLastItemHighlighted"),
                        actions: ["highlightFirstItem"]
                    }, {
                        guard: "hasHighlightedItem",
                        actions: ["highlightNextItem"]
                    }, {
                        actions: ["highlightFirstItem"]
                    }],
                    "CONTENT.ARROW_UP": [{
                        guard: Y("hasHighlightedItem", "loop", "isFirstItemHighlighted"),
                        actions: ["highlightLastItem"]
                    }, {
                        guard: "hasHighlightedItem",
                        actions: ["highlightPreviousItem"]
                    }, {
                        actions: ["highlightLastItem"]
                    }],
                    "CONTENT.TYPEAHEAD": {
                        actions: ["highlightMatchingItem"]
                    },
                    "ITEM.POINTER_MOVE": {
                        actions: ["highlightItem"]
                    },
                    "ITEM.POINTER_LEAVE": {
                        actions: ["clearHighlightedItem"]
                    },
                    "POSITIONING.SET": {
                        actions: ["reposition"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                loop: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("loopFocus")
                },
                multiple: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("multiple")
                },
                hasSelectedItems: e => {
                    let {
                        computed: t
                    } = e;
                    return !!t("hasSelectedItems")
                },
                hasHighlightedItem: e => {
                    let {
                        context: t
                    } = e;
                    return null != t.get("highlightedValue")
                },
                isFirstItemHighlighted: e => {
                    let {
                        context: t,
                        prop: l
                    } = e;
                    return t.get("highlightedValue") === l("collection").firstValue
                },
                isLastItemHighlighted: e => {
                    let {
                        context: t,
                        prop: l
                    } = e;
                    return t.get("highlightedValue") === l("collection").lastValue
                },
                closeOnSelect: e => {
                    var t;
                    let {
                        prop: l,
                        event: i
                    } = e;
                    return !!(null != (t = i.closeOnSelect) ? t : l("closeOnSelect"))
                },
                restoreFocus: e => {
                    let {
                        event: t
                    } = e;
                    return Z(t)
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return void 0 !== t("open")
                },
                isTriggerClickEvent: e => {
                    var t;
                    let {
                        event: l
                    } = e;
                    return (null == (t = l.previousEvent) ? void 0 : t.type) === "TRIGGER.CLICK"
                },
                isTriggerEnterEvent: e => {
                    var t;
                    let {
                        event: l
                    } = e;
                    return (null == (t = l.previousEvent) ? void 0 : t.type) === "TRIGGER.ENTER"
                },
                isTriggerArrowUpEvent: e => {
                    var t;
                    let {
                        event: l
                    } = e;
                    return (null == (t = l.previousEvent) ? void 0 : t.type) === "TRIGGER.ARROW_UP"
                },
                isTriggerArrowDownEvent: e => {
                    var t;
                    let {
                        event: l
                    } = e;
                    return (null == (t = l.previousEvent) ? void 0 : t.type) === "TRIGGER.ARROW_DOWN"
                }
            },
            effects: {
                trackFormControlState(e) {
                    let {
                        context: t,
                        scope: l
                    } = e;
                    return (0, b.trackFormControl)(j(l), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            let e = t.initial("value");
                            t.set("value", e)
                        }
                    })
                },
                trackDismissableElement(e) {
                    let {
                        scope: t,
                        send: l,
                        prop: i
                    } = e, n = !0;
                    return (0, P.trackDismissableElement)(() => U(t), {
                        type: "listbox",
                        defer: !0,
                        exclude: [W(t), t.getById(F(t))],
                        onFocusOutside: i("onFocusOutside"),
                        onPointerDownOutside: i("onPointerDownOutside"),
                        onInteractOutside(e) {
                            var t;
                            null == (t = i("onInteractOutside")) || t(e), n = !(e.detail.focusable || e.detail.contextmenu)
                        },
                        onDismiss() {
                            l({
                                type: "CLOSE",
                                src: "interact-outside",
                                restoreFocus: n
                            })
                        }
                    })
                },
                computePlacement(e) {
                    let {
                        context: t,
                        prop: l,
                        scope: i
                    } = e, n = l("positioning");
                    return t.set("currentPlacement", n.placement), (0, R.getPlacement)(() => W(i), () => K(i), {
                        defer: !0,
                        ...n,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                scrollToHighlightedItem(e) {
                    let {
                        context: t,
                        prop: l,
                        scope: i,
                        event: n
                    } = e, r = e => {
                        let r = t.get("highlightedValue");
                        if (null == r || n.current().type.includes("POINTER")) return;
                        let s = U(i),
                            o = l("scrollToIndexFn");
                        if (o) {
                            let t = l("collection").indexOf(r);
                            null == o || o({
                                index: t,
                                immediate: e,
                                getElement: () => q(i, r)
                            });
                            return
                        }
                        let a = q(i, r);
                        (0, b.scrollIntoView)(a, {
                            rootEl: s,
                            block: "nearest"
                        })
                    };
                    return (0, b.raf)(() => r(!0)), (0, b.observeAttributes)(() => U(i), {
                        defer: !0,
                        attributes: ["data-activedescendant"],
                        callback() {
                            r(!1)
                        }
                    })
                }
            },
            actions: {
                reposition(e) {
                    let {
                        context: t,
                        prop: l,
                        scope: i,
                        event: n
                    } = e;
                    (0, R.getPlacement)(W(i), () => K(i), { ...l("positioning"),
                        ...n.options,
                        defer: !0,
                        listeners: !1,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                toggleVisibility(e) {
                    let {
                        send: t,
                        prop: l,
                        event: i
                    } = e;
                    t({
                        type: l("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                        previousEvent: i
                    })
                },
                highlightPreviousItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = t.get("highlightedValue");
                    if (null == i) return;
                    let n = l("collection").getPreviousValue(i, 1, l("loopFocus"));
                    null != n && t.set("highlightedValue", n)
                },
                highlightNextItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = t.get("highlightedValue");
                    if (null == i) return;
                    let n = l("collection").getNextValue(i, 1, l("loopFocus"));
                    null != n && t.set("highlightedValue", n)
                },
                highlightFirstItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection").firstValue;
                    t.set("highlightedValue", i)
                },
                highlightLastItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection").lastValue;
                    t.set("highlightedValue", i)
                },
                setInitialFocus(e) {
                    let {
                        scope: t
                    } = e;
                    (0, b.raf)(() => {
                        let e = (0, b.getInitialFocus)({
                            root: U(t)
                        });
                        null == e || e.focus({
                            preventScroll: !0
                        })
                    })
                },
                focusTriggerEl(e) {
                    let {
                        event: t,
                        scope: l
                    } = e;
                    Z(t) && (0, b.raf)(() => {
                        let e = W(l);
                        null == e || e.focus({
                            preventScroll: !0
                        })
                    })
                },
                selectHighlightedItem(e) {
                    var t, i;
                    let {
                        context: n,
                        prop: r,
                        event: s
                    } = e, o = null != (i = s.value) ? i : n.get("highlightedValue");
                    null != o && r("collection").has(o) && (null == (t = r("onSelect")) || t({
                        value: o
                    }), o = r("deselectable") && !r("multiple") && n.get("value").includes(o) ? null : o, n.set("value", e => null == o ? [] : r("multiple") ? (0, l.addOrRemove)(e, o) : [o]))
                },
                highlightComputedFirstItem(e) {
                    let {
                        context: t,
                        prop: l,
                        computed: i
                    } = e, n = l("collection"), r = i("hasSelectedItems") ? n.sort(t.get("value"))[0] : n.firstValue;
                    t.set("highlightedValue", r)
                },
                highlightComputedLastItem(e) {
                    let {
                        context: t,
                        prop: l,
                        computed: i
                    } = e, n = l("collection"), r = i("hasSelectedItems") ? n.sort(t.get("value"))[0] : n.lastValue;
                    t.set("highlightedValue", r)
                },
                highlightFirstSelectedItem(e) {
                    let {
                        context: t,
                        prop: l,
                        computed: i
                    } = e;
                    if (!i("hasSelectedItems")) return;
                    let n = l("collection").sort(t.get("value"))[0];
                    t.set("highlightedValue", n)
                },
                highlightItem(e) {
                    let {
                        context: t,
                        event: l
                    } = e;
                    t.set("highlightedValue", l.value)
                },
                highlightMatchingItem(e) {
                    let {
                        context: t,
                        prop: l,
                        event: i,
                        refs: n
                    } = e, r = l("collection").search(i.key, {
                        state: n.get("typeahead"),
                        currentValue: t.get("highlightedValue")
                    });
                    null != r && t.set("highlightedValue", r)
                },
                setHighlightedItem(e) {
                    let {
                        context: t,
                        event: l
                    } = e;
                    t.set("highlightedValue", l.value)
                },
                clearHighlightedItem(e) {
                    let {
                        context: t
                    } = e;
                    t.set("highlightedValue", null)
                },
                selectItem(e) {
                    var t;
                    let {
                        context: i,
                        prop: n,
                        event: r
                    } = e;
                    null == (t = n("onSelect")) || t({
                        value: r.value
                    });
                    let s = n("deselectable") && !n("multiple") && i.get("value").includes(r.value) ? null : r.value;
                    i.set("value", e => null == s ? [] : n("multiple") ? (0, l.addOrRemove)(e, s) : [s])
                },
                clearItem(e) {
                    let {
                        context: t,
                        event: l
                    } = e;
                    t.set("value", e => e.filter(e => e !== l.value))
                },
                setSelectedItems(e) {
                    let {
                        context: t,
                        event: l
                    } = e;
                    t.set("value", l.value)
                },
                clearSelectedItems(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", [])
                },
                selectPreviousItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, [i] = t.get("value"), n = l("collection").getPreviousValue(i);
                    n && t.set("value", [n])
                },
                selectNextItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, [i] = t.get("value"), n = l("collection").getNextValue(i);
                    n && t.set("value", [n])
                },
                selectFirstItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection").firstValue;
                    i && t.set("value", [i])
                },
                selectLastItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection").lastValue;
                    i && t.set("value", [i])
                },
                selectMatchingItem(e) {
                    let {
                        context: t,
                        prop: l,
                        event: i,
                        refs: n
                    } = e, r = l("collection").search(i.key, {
                        state: n.get("typeahead"),
                        currentValue: t.get("value")[0]
                    });
                    null != r && t.set("value", [r])
                },
                scrollContentToTop(e) {
                    var t, l;
                    let {
                        prop: i,
                        scope: n
                    } = e;
                    if (i("scrollToIndexFn")) {
                        let e = i("collection").firstValue;
                        null == (t = i("scrollToIndexFn")) || t({
                            index: 0,
                            immediate: !0,
                            getElement: () => q(n, e)
                        })
                    } else null == (l = U(n)) || l.scrollTo(0, 0)
                },
                invokeOnOpen(e) {
                    var t;
                    let {
                        prop: l,
                        context: i
                    } = e;
                    null == (t = l("onOpenChange")) || t({
                        open: !0,
                        value: i.get("value")
                    })
                },
                invokeOnClose(e) {
                    var t;
                    let {
                        prop: l,
                        context: i
                    } = e;
                    null == (t = l("onOpenChange")) || t({
                        open: !1,
                        value: i.get("value")
                    })
                },
                syncSelectElement(e) {
                    let {
                        context: t,
                        prop: l,
                        scope: i
                    } = e, n = j(i);
                    if (n) {
                        if (0 === t.get("value").length && !l("multiple")) {
                            n.selectedIndex = -1;
                            return
                        }
                        for (let e of n.options) e.selected = t.get("value").includes(e.value)
                    }
                },
                syncCollection(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection"), n = i.find(t.get("highlightedValue"));
                    n && t.set("highlightedItem", n);
                    let r = i.findMany(t.get("value"));
                    t.set("selectedItems", r)
                },
                syncSelectedItems(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection"), n = t.get("selectedItems"), r = t.get("value").map(e => n.find(t => i.getItemValue(t) === e) || i.find(e));
                    t.set("selectedItems", r)
                },
                syncHighlightedItem(e) {
                    let {
                        context: t,
                        prop: l
                    } = e, i = l("collection"), n = t.get("highlightedValue"), r = n ? i.find(n) : null;
                    t.set("highlightedItem", r)
                },
                dispatchChangeEvent(e) {
                    let {
                        scope: t
                    } = e;
                    queueMicrotask(() => {
                        let e = j(t);
                        if (!e) return;
                        let l = new(t.getWin()).Event("change", {
                            bubbles: !0,
                            composed: !0
                        });
                        e.dispatchEvent(l)
                    })
                }
            }
        }
    });

    function Z(e) {
        var t, l;
        let i = null != (l = e.restoreFocus) ? l : null == (t = e.previousEvent) ? void 0 : t.restoreFocus;
        return null == i || !!i
    }
    var $ = (0, x.createProps)()(["closeOnSelect", "collection", "composite", "defaultHighlightedValue", "defaultOpen", "defaultValue", "deselectable", "dir", "disabled", "form", "getRootNode", "highlightedValue", "id", "ids", "invalid", "loopFocus", "multiple", "name", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "onValueChange", "open", "positioning", "readOnly", "required", "scrollToIndexFn", "value"]);
    (0, l.createSplitProps)($);
    var ee = (0, x.createProps)()(["item", "persistFocus"]);
    (0, l.createSplitProps)(ee);
    var et = (0, x.createProps)()(["id"]);
    (0, l.createSplitProps)(et);
    var el = (0, x.createProps)()(["htmlFor"]);
    (0, l.createSplitProps)(el), e.s(["anatomy", () => A, "connect", () => z, "machine", () => X], 303250)
}]);

//# debugId=6bbd5c6a-a49f-da5f-ee21-ea16db4a0272
//# sourceMappingURL=61591956e94b8fd5.js.map