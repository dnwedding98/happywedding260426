;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "62977601-edeb-0a52-2a76-b48af7012f1a")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 833288, 279511, 635398, e => {
    "use strict";
    var t = e.i(841158),
        n = new WeakMap,
        o = new WeakMap,
        i = {},
        r = 0,
        s = e => e && (e.host || s(e.parentNode)),
        a = new Set(["script", "output", "status", "next-route-announcer"]),
        l = function(e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (Array.isArray(e) ? e[0] : e).ownerDocument.body,
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "data-aria-hidden",
                d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (l) return ((e, l) => {
                let {
                    parentNode: c,
                    markerName: d,
                    controlAttribute: u,
                    followControlledElements: p = !0
                } = l, v = (Array.isArray(e) ? e : [e]).map(e => {
                    if (c.contains(e)) return e;
                    let t = s(e);
                    return t && c.contains(t) ? t : (console.error("[zag-js > ariaHidden] target", e, "in not contained inside", c, ". Doing nothing"), null)
                }).filter(e => !!e);
                i[d] || (i[d] = new WeakMap);
                let h = i[d],
                    g = [],
                    f = new Set,
                    b = new Set(v),
                    y = e => {
                        !e || f.has(e) || (f.add(e), y(e.parentNode))
                    };
                v.forEach(e => {
                    y(e), p && (0, t.isHTMLElement)(e) && (0, t.findControlledElements)(e, e => {
                        y(e)
                    })
                });
                let m = e => {
                    !e || b.has(e) || Array.prototype.forEach.call(e.children, e => {
                        if (f.has(e)) m(e);
                        else try {
                            if (a.has(e.localName) || "status" === e.role || e.hasAttribute("aria-live") || e.matches("[data-live-announcer]")) return;
                            let t = e.getAttribute(u),
                                i = "true" === t,
                                r = (n.get(e) || 0) + 1,
                                s = (h.get(e) || 0) + 1;
                            n.set(e, r), h.set(e, s), g.push(e), 1 === r && i && o.set(e, !0), 1 === s && e.setAttribute(d, ""), i || e.setAttribute(u, "true")
                        } catch (t) {
                            console.error("[zag-js > ariaHidden] cannot operate on ", e, t)
                        }
                    })
                };
                return m(c), f.clear(), r++, () => {
                    g.forEach(e => {
                        let t = n.get(e) - 1,
                            i = h.get(e) - 1;
                        n.set(e, t), h.set(e, i), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), i || e.removeAttribute(d)
                    }), --r || (n = new WeakMap, n = new WeakMap, o = new WeakMap, i = {})
                }
            })(e, {
                parentNode: l,
                markerName: c,
                controlAttribute: "aria-hidden",
                followControlledElements: d
            })
        };

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                defer: n = !0
            } = t,
            o = [];
        return o.push((n ? e => {
            let t = requestAnimationFrame(() => e());
            return () => cancelAnimationFrame(t)
        } : e => e())(() => {
            let t = ("function" == typeof e ? e() : e).filter(Boolean);
            0 !== t.length && o.push(l(t))
        })), () => {
            o.forEach(e => null == e ? void 0 : e())
        }
    }
    e.s(["ariaHidden", () => c], 833288);
    var d = Object.defineProperty,
        u = (e, t, n) => {
            let o;
            return (o = "symbol" != typeof t ? t + "" : t) in e ? d(e, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[o] = n
        },
        p = {
            activateTrap(e, t) {
                if (e.length > 0) {
                    let n = e[e.length - 1];
                    n !== t && n.pause()
                }
                let n = e.indexOf(t); - 1 === n || e.splice(n, 1), e.push(t)
            },
            deactivateTrap(e, t) {
                let n = e.indexOf(t); - 1 !== n && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause()
            }
        },
        v = [],
        h = class {
            addPortalContainer(e) {
                let t = e.parentElement;
                t && !this.portalContainers.has(t) && (this.portalContainers.add(t), this.state.active && !this.state.paused && this.observePortalContainer(t))
            }
            observePortalContainer(e) {
                var t;
                null == (t = this._mutationObserver) || t.observe(e, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["aria-controls", "aria-expanded"]
                })
            }
            updatePortalContainers() {
                this.config.followControlledElements && this.state.containers.forEach(e => {
                    (0, t.getControlledElements)(e).forEach(e => {
                        this.addPortalContainer(e)
                    })
                })
            }
            get active() {
                return this.state.active
            }
            get paused() {
                return this.state.paused
            }
            findContainerIndex(e, t) {
                let n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
                return this.state.containerGroups.findIndex(t => {
                    let {
                        container: o,
                        tabbableNodes: i
                    } = t;
                    return o.contains(e) || (null == n ? void 0 : n.includes(o)) || i.find(t => t === e) || this.isControlledElement(o, e)
                })
            }
            isControlledElement(e, n) {
                return !!this.config.followControlledElements && (0, t.isControlledElement)(e, n)
            }
            updateTabbableNodes() {
                if (this.state.containerGroups = this.state.containers.map(e => {
                        let n = (0, t.getTabbables)(e, {
                                getShadowRoot: this.config.getShadowRoot
                            }),
                            o = (0, t.getFocusables)(e, {
                                getShadowRoot: this.config.getShadowRoot
                            }),
                            i = n[0],
                            r = n[n.length - 1],
                            s = !1;
                        for (let e = 0; e < n.length; e++)
                            if ((0, t.getTabIndex)(n[e]) > 0) {
                                s = !0;
                                break
                            }
                        return {
                            container: e,
                            tabbableNodes: n,
                            focusableNodes: o,
                            posTabIndexesFound: s,
                            firstTabbableNode: i,
                            lastTabbableNode: r,
                            firstDomTabbableNode: i,
                            lastDomTabbableNode: r,
                            nextTabbableNode: function(e) {
                                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                    r = n.indexOf(e);
                                if (r >= 0) return n[r + (i ? 1 : -1)];
                                let s = o.indexOf(e);
                                if (!(s < 0)) {
                                    if (i) {
                                        for (let e = s + 1; e < o.length; e++)
                                            if ((0, t.isTabbable)(o[e])) return o[e]
                                    } else
                                        for (let e = s - 1; e >= 0; e--)
                                            if ((0, t.isTabbable)(o[e])) return o[e]
                                }
                            }
                        }
                    }), this.state.tabbableGroups = this.state.containerGroups.filter(e => e.tabbableNodes.length > 0), this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (this.state.containerGroups.find(e => e.posTabIndexesFound) && this.state.containerGroups.length > 1) throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            }
            addListeners() {
                if (this.state.active) return p.activateTrap(this.trapStack, this), this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? y(() => {
                    this.tryFocus(this.getInitialFocusNode())
                }) : this.tryFocus(this.getInitialFocusNode()), this.listenerCleanups.push((0, t.addDomEvent)(this.doc, "focusin", this.handleFocus, !0), (0, t.addDomEvent)(this.doc, "mousedown", this.handlePointerDown, {
                    capture: !0,
                    passive: !1
                }), (0, t.addDomEvent)(this.doc, "touchstart", this.handlePointerDown, {
                    capture: !0,
                    passive: !1
                }), (0, t.addDomEvent)(this.doc, "click", this.handleClick, {
                    capture: !0,
                    passive: !1
                }), (0, t.addDomEvent)(this.doc, "keydown", this.handleTabKey, {
                    capture: !0,
                    passive: !1
                }), (0, t.addDomEvent)(this.doc, "keydown", this.handleEscapeKey)), this
            }
            removeListeners() {
                if (this.state.active) return this.listenerCleanups.forEach(e => e()), this.listenerCleanups = [], this
            }
            activate(e) {
                if (this.state.active) return this;
                let n = this.getOption(e, "onActivate"),
                    o = this.getOption(e, "onPostActivate"),
                    i = this.getOption(e, "checkCanFocusTrap");
                i || this.updateTabbableNodes(), this.state.active = !0, this.state.paused = !1, this.state.nodeFocusedBeforeActivation = (0, t.getActiveElement)(this.doc), null == n || n();
                let r = () => {
                    i && this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), null == o || o()
                };
                return i ? i(this.state.containers.concat()).then(r, r) : r(), this
            }
            constructor(e, n) {
                var o = this;
                u(this, "trapStack"), u(this, "config"), u(this, "doc"), u(this, "state", {
                    containers: [],
                    containerGroups: [],
                    tabbableGroups: [],
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1,
                    delayInitialFocusTimer: void 0,
                    recentNavEvent: void 0
                }), u(this, "portalContainers", new Set), u(this, "listenerCleanups", []), u(this, "handleFocus", e => {
                    let n = (0, t.getEventTarget)(e),
                        o = this.findContainerIndex(n, e) >= 0;
                    if (o || (0, t.isDocument)(n)) o && (this.state.mostRecentlyFocusedNode = n);
                    else {
                        let n;
                        e.stopImmediatePropagation();
                        let o = !0;
                        if (this.state.mostRecentlyFocusedNode)
                            if ((0, t.getTabIndex)(this.state.mostRecentlyFocusedNode) > 0) {
                                let e = this.findContainerIndex(this.state.mostRecentlyFocusedNode),
                                    {
                                        tabbableNodes: t
                                    } = this.state.containerGroups[e];
                                if (t.length > 0) {
                                    let e = t.findIndex(e => e === this.state.mostRecentlyFocusedNode);
                                    e >= 0 && (this.config.isKeyForward(this.state.recentNavEvent) ? e + 1 < t.length && (n = t[e + 1], o = !1) : e - 1 >= 0 && (n = t[e - 1], o = !1))
                                }
                            } else this.state.containerGroups.some(e => e.tabbableNodes.some(e => (0, t.getTabIndex)(e) > 0)) || (o = !1);
                        else o = !1;
                        o && (n = this.findNextNavNode({
                            target: this.state.mostRecentlyFocusedNode,
                            isBackward: this.config.isKeyBackward(this.state.recentNavEvent)
                        })), n ? this.tryFocus(n) : this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode())
                    }
                    this.state.recentNavEvent = void 0
                }), u(this, "handlePointerDown", e => {
                    let n = (0, t.getEventTarget)(e);
                    this.findContainerIndex(n, e) >= 0 || (f(this.config.clickOutsideDeactivates, e) ? this.deactivate({
                        returnFocus: this.config.returnFocusOnDeactivate
                    }) : f(this.config.allowOutsideClick, e) || e.preventDefault())
                }), u(this, "handleClick", e => {
                    let n = (0, t.getEventTarget)(e);
                    this.findContainerIndex(n, e) >= 0 || f(this.config.clickOutsideDeactivates, e) || f(this.config.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                }), u(this, "handleTabKey", e => {
                    if (this.config.isKeyForward(e) || this.config.isKeyBackward(e)) {
                        this.state.recentNavEvent = e;
                        let t = this.config.isKeyBackward(e),
                            n = this.findNextNavNode({
                                event: e,
                                isBackward: t
                            });
                        n && (g(e) && e.preventDefault(), this.tryFocus(n))
                    }
                }), u(this, "handleEscapeKey", e => {
                    b(e) && !1 !== f(this.config.escapeDeactivates, e) && (e.preventDefault(), this.deactivate())
                }), u(this, "_mutationObserver"), u(this, "setupMutationObserver", () => {
                    let e = this.doc.defaultView || window;
                    this._mutationObserver = new e.MutationObserver(e => {
                        e.some(e => Array.from(e.removedNodes).some(e => e === this.state.mostRecentlyFocusedNode)) && this.tryFocus(this.getInitialFocusNode()), e.some(e => "attributes" === e.type && ("aria-controls" === e.attributeName || "aria-expanded" === e.attributeName) || "childList" === e.type && e.addedNodes.length > 0 && Array.from(e.addedNodes).some(e => e.nodeType === Node.ELEMENT_NODE && (!!(0, t.hasControllerElements)(e) || !(!e.id || this.state.containers.some(t => t.contains(e))) && (0, t.isControlledByExpandedController)(e)))) && this.state.active && !this.state.paused && (this.updateTabbableNodes(), this.updatePortalContainers())
                    })
                }), u(this, "updateObservedNodes", () => {
                    var e;
                    null == (e = this._mutationObserver) || e.disconnect(), this.state.active && !this.state.paused && (this.state.containers.map(e => {
                        var t;
                        null == (t = this._mutationObserver) || t.observe(e, {
                            subtree: !0,
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["aria-controls", "aria-expanded"]
                        })
                    }), this.portalContainers.forEach(e => {
                        this.observePortalContainer(e)
                    }))
                }), u(this, "getInitialFocusNode", () => {
                    let e = this.getNodeForOption("initialFocus", {
                        hasFallback: !0
                    });
                    if (!1 === e) return !1;
                    if (void 0 === e || e && !(0, t.isFocusable)(e)) {
                        let n = (0, t.getActiveElement)(this.doc);
                        if (n && this.findContainerIndex(n) >= 0) e = n;
                        else {
                            let t = this.state.tabbableGroups[0];
                            e = t && t.firstTabbableNode || this.getNodeForOption("fallbackFocus")
                        }
                    } else null === e && (e = this.getNodeForOption("fallbackFocus"));
                    if (!e) throw Error("Your focus-trap needs to have at least one focusable element");
                    return e.isConnected || (e = this.getNodeForOption("fallbackFocus")), e
                }), u(this, "tryFocus", e => {
                    if (!1 !== e && e !== (0, t.getActiveElement)(this.doc)) {
                        if (!e || !e.focus) return void this.tryFocus(this.getInitialFocusNode());
                        e.focus({
                            preventScroll: !!this.config.preventScroll
                        }), this.state.mostRecentlyFocusedNode = e, m(e) && e.select()
                    }
                }), u(this, "deactivate", e => {
                    if (!this.state.active) return this;
                    let t = {
                        onDeactivate: this.config.onDeactivate,
                        onPostDeactivate: this.config.onPostDeactivate,
                        checkCanReturnFocus: this.config.checkCanReturnFocus,
                        ...e
                    };
                    clearTimeout(this.state.delayInitialFocusTimer), this.state.delayInitialFocusTimer = void 0, this.removeListeners(), this.state.active = !1, this.state.paused = !1, this.updateObservedNodes(), p.deactivateTrap(this.trapStack, this), this.portalContainers.clear();
                    let n = this.getOption(t, "onDeactivate"),
                        o = this.getOption(t, "onPostDeactivate"),
                        i = this.getOption(t, "checkCanReturnFocus"),
                        r = this.getOption(t, "returnFocus", "returnFocusOnDeactivate");
                    null == n || n();
                    let s = () => {
                        y(() => {
                            if (r) {
                                let e = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
                                this.tryFocus(e)
                            }
                            null == o || o()
                        })
                    };
                    return r && i ? i(this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation)).then(s, s) : s(), this
                }), u(this, "pause", e => {
                    if (this.state.paused || !this.state.active) return this;
                    let t = this.getOption(e, "onPause"),
                        n = this.getOption(e, "onPostPause");
                    return this.state.paused = !0, null == t || t(), this.removeListeners(), this.updateObservedNodes(), null == n || n(), this
                }), u(this, "unpause", e => {
                    if (!this.state.paused || !this.state.active) return this;
                    let t = this.getOption(e, "onUnpause"),
                        n = this.getOption(e, "onPostUnpause");
                    return this.state.paused = !1, null == t || t(), this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), null == n || n(), this
                }), u(this, "updateContainerElements", e => (this.state.containers = Array.isArray(e) ? e.filter(Boolean) : [e].filter(Boolean), this.state.active && this.updateTabbableNodes(), this.updateObservedNodes(), this)), u(this, "getReturnFocusNode", e => {
                    let t = this.getNodeForOption("setReturnFocus", {
                        params: [e]
                    });
                    return t || !1 !== t && e
                }), u(this, "getOption", (e, t, n) => e && void 0 !== e[t] ? e[t] : this.config[n || t]), u(this, "getNodeForOption", function(e) {
                    let {
                        hasFallback: t = !1,
                        params: n = []
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = o.config[e];
                    if ("function" == typeof i && (i = i(...n)), !0 === i && (i = void 0), !i) {
                        if (void 0 === i || !1 === i) return i;
                        throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                    }
                    let r = i;
                    if ("string" == typeof i) {
                        try {
                            r = o.doc.querySelector(i)
                        } catch (t) {
                            throw Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                        }
                        if (!r && !t) throw Error("`".concat(e, "` as selector refers to no known node"))
                    }
                    return r
                }), u(this, "findNextNavNode", e => {
                    let {
                        event: n,
                        isBackward: o = !1
                    } = e, i = e.target || (0, t.getEventTarget)(n);
                    this.updateTabbableNodes();
                    let r = null;
                    if (this.state.tabbableGroups.length > 0) {
                        let e = this.findContainerIndex(i, n),
                            s = e >= 0 ? this.state.containerGroups[e] : void 0;
                        if (e < 0) r = o ? this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode : this.state.tabbableGroups[0].firstTabbableNode;
                        else if (o) {
                            let o = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    firstTabbableNode: t
                                } = e;
                                return i === t
                            });
                            if (o < 0 && ((null == s ? void 0 : s.container) === i || (0, t.isFocusable)(i) && !(0, t.isTabbable)(i) && !(null == s ? void 0 : s.nextTabbableNode(i, !1))) && (o = e), o >= 0) {
                                let e = 0 === o ? this.state.tabbableGroups.length - 1 : o - 1,
                                    n = this.state.tabbableGroups[e];
                                r = (0, t.getTabIndex)(i) >= 0 ? n.lastTabbableNode : n.lastDomTabbableNode
                            } else g(n) || (r = null == s ? void 0 : s.nextTabbableNode(i, !1))
                        } else {
                            let o = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    lastTabbableNode: t
                                } = e;
                                return i === t
                            });
                            if (o < 0 && ((null == s ? void 0 : s.container) === i || (0, t.isFocusable)(i) && !(0, t.isTabbable)(i) && !(null == s ? void 0 : s.nextTabbableNode(i))) && (o = e), o >= 0) {
                                let e = o === this.state.tabbableGroups.length - 1 ? 0 : o + 1,
                                    n = this.state.tabbableGroups[e];
                                r = (0, t.getTabIndex)(i) >= 0 ? n.firstTabbableNode : n.firstDomTabbableNode
                            } else g(n) || (r = null == s ? void 0 : s.nextTabbableNode(i))
                        }
                    } else r = this.getNodeForOption("fallbackFocus");
                    return r
                }), this.trapStack = n.trapStack || v;
                const i = {
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0,
                    followControlledElements: !0,
                    isKeyForward: e => g(e) && !e.shiftKey,
                    isKeyBackward: e => g(e) && e.shiftKey,
                    ...n
                };
                this.doc = i.document || (0, t.getDocument)(Array.isArray(e) ? e[0] : e), this.config = i, this.updateContainerElements(e), this.setupMutationObserver()
            }
        },
        g = e => "Tab" === e.key,
        f = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return "function" == typeof e ? e(...n) : e
        },
        b = e => !e.isComposing && "Escape" === e.key,
        y = e => setTimeout(e, 0),
        m = e => "input" === e.localName && "select" in e && "function" == typeof e.select;

    function O(e) {
        let n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = (0, t.raf)(() => {
                let i = "function" == typeof e ? e() : e;
                if (i) {
                    n = new h(i, {
                        escapeDeactivates: !1,
                        allowOutsideClick: !0,
                        preventScroll: !0,
                        returnFocusOnDeactivate: !0,
                        delayInitialFocus: !1,
                        fallbackFocus: i,
                        ...o,
                        document: (0, t.getDocument)(i)
                    });
                    try {
                        n.activate()
                    } catch {}
                }
            });
        return function() {
            null == n || n.deactivate(), i()
        }
    }
    e.s(["trapFocus", () => O], 279511);
    var E = "data-scroll-lock";

    function k(e) {
        let n = (0, t.getComputedStyle)(e),
            o = null == n ? void 0 : n.scrollbarGutter;
        return "stable" === o || (null == o ? void 0 : o.startsWith("stable ")) === !0
    }

    function C(e) {
        var n;
        let o, i = null != e ? e : document,
            r = null != (n = i.defaultView) ? n : window,
            {
                documentElement: s,
                body: a
            } = i;
        if (a.hasAttribute(E)) return;
        let l = k(s) || k(a),
            c = r.innerWidth - s.clientWidth;
        a.setAttribute(E, "");
        let d = Math.round(s.getBoundingClientRect().left) + s.scrollLeft ? "paddingLeft" : "paddingRight",
            u = [(0, t.setStyleProperty)(s, "--scrollbar-width", "".concat(c, "px")), (0, t.isIos)() ? (() => {
                var e, n;
                let {
                    scrollX: o,
                    scrollY: i,
                    visualViewport: s
                } = r, u = null != (e = null == s ? void 0 : s.offsetLeft) ? e : 0, p = null != (n = null == s ? void 0 : s.offsetTop) ? n : 0, v = {
                    position: "fixed",
                    overflow: "hidden",
                    top: "".concat(-(i - Math.floor(p)), "px"),
                    left: "".concat(-(o - Math.floor(u)), "px"),
                    right: "0"
                };
                !l && c > 0 && (v[d] = "".concat(c, "px"));
                let h = (0, t.setStyle)(a, v);
                return () => {
                    null == h || h(), r.scrollTo({
                        left: o,
                        top: i,
                        behavior: "instant"
                    })
                }
            })() : (o = {
                overflow: "hidden"
            }, !l && c > 0 && (o[d] = "".concat(c, "px")), (0, t.setStyle)(a, o))];
        return () => {
            u.forEach(e => null == e ? void 0 : e()), a.removeAttribute(E)
        }
    }
    e.s(["preventBodyScroll", () => C], 635398)
}, 943517, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(833288),
        o = e.i(30500),
        i = e.i(143713),
        r = e.i(841158),
        s = e.i(279511),
        a = e.i(635398),
        l = e.i(593006),
        c = e.i(409078),
        d = (0, t.createAnatomy)("dialog").parts("trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"),
        u = d.build(),
        p = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "dialog:".concat(e.id, ":positioner")
        },
        v = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.backdrop) ? n : "dialog:".concat(e.id, ":backdrop")
        },
        h = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.content) ? n : "dialog:".concat(e.id, ":content")
        },
        g = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "dialog:".concat(e.id, ":trigger")
        },
        f = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.title) ? n : "dialog:".concat(e.id, ":title")
        },
        b = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.description) ? n : "dialog:".concat(e.id, ":description")
        },
        y = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.closeTrigger) ? n : "dialog:".concat(e.id, ":close")
        },
        m = e => e.getById(h(e));

    function O(e, t) {
        let {
            state: n,
            send: o,
            context: i,
            prop: r,
            scope: s
        } = e, a = r("aria-label"), l = n.matches("open");
        return {
            open: l,
            setOpen(e) {
                n.matches("open") !== e && o({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            getTriggerProps: () => t.button({ ...u.trigger.attrs,
                dir: r("dir"),
                id: g(s),
                "aria-haspopup": "dialog",
                type: "button",
                "aria-expanded": l,
                "data-state": l ? "open" : "closed",
                "aria-controls": h(s),
                onClick(e) {
                    e.defaultPrevented || o({
                        type: "TOGGLE"
                    })
                }
            }),
            getBackdropProps: () => t.element({ ...u.backdrop.attrs,
                dir: r("dir"),
                hidden: !l,
                id: v(s),
                "data-state": l ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({ ...u.positioner.attrs,
                dir: r("dir"),
                id: p(s),
                style: {
                    pointerEvents: l ? void 0 : "none"
                }
            }),
            getContentProps() {
                let e = i.get("rendered");
                return t.element({ ...u.content.attrs,
                    dir: r("dir"),
                    role: r("role"),
                    hidden: !l,
                    id: h(s),
                    tabIndex: -1,
                    "data-state": l ? "open" : "closed",
                    "aria-modal": !0,
                    "aria-label": a || void 0,
                    "aria-labelledby": a || !e.title ? void 0 : f(s),
                    "aria-describedby": e.description ? b(s) : void 0
                })
            },
            getTitleProps: () => t.element({ ...u.title.attrs,
                dir: r("dir"),
                id: f(s)
            }),
            getDescriptionProps: () => t.element({ ...u.description.attrs,
                dir: r("dir"),
                id: b(s)
            }),
            getCloseTriggerProps: () => t.button({ ...u.closeTrigger.attrs,
                dir: r("dir"),
                id: y(s),
                type: "button",
                onClick(e) {
                    e.defaultPrevented || (e.stopPropagation(), o({
                        type: "CLOSE"
                    }))
                }
            })
        }
    }
    var E = (0, o.createMachine)({
            props(e) {
                let {
                    props: t,
                    scope: n
                } = e, o = "alertdialog" === t.role, i = o ? () => n.getById(y(n)) : void 0, r = "boolean" != typeof t.modal || t.modal;
                return {
                    role: "dialog",
                    modal: r,
                    trapFocus: r,
                    preventScroll: r,
                    closeOnInteractOutside: !o,
                    closeOnEscape: !0,
                    restoreFocus: !0,
                    initialFocusEl: i,
                    ...t
                }
            },
            initialState(e) {
                let {
                    prop: t
                } = e;
                return t("open") || t("defaultOpen") ? "open" : "closed"
            },
            context(e) {
                let {
                    bindable: t
                } = e;
                return {
                    rendered: t(() => ({
                        defaultValue: {
                            title: !0,
                            description: !0
                        }
                    }))
                }
            },
            watch(e) {
                let {
                    track: t,
                    action: n,
                    prop: o
                } = e;
                t([() => o("open")], () => {
                    n(["toggleVisibility"])
                })
            },
            states: {
                open: {
                    entry: ["checkRenderedElements", "syncZIndex"],
                    effects: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"],
                    on: {
                        "CONTROLLED.CLOSE": {
                            target: "closed"
                        },
                        CLOSE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose"]
                        }],
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose"]
                        }]
                    }
                },
                closed: {
                    on: {
                        "CONTROLLED.OPEN": {
                            target: "open"
                        },
                        OPEN: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen"]
                        }],
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen"]
                        }]
                    }
                }
            },
            implementations: {
                guards: {
                    isOpenControlled: e => {
                        let {
                            prop: t
                        } = e;
                        return void 0 != t("open")
                    }
                },
                effects: {
                    trackDismissableElement(e) {
                        let {
                            scope: t,
                            send: n,
                            prop: o
                        } = e;
                        return (0, i.trackDismissableElement)(() => m(t), {
                            type: "dialog",
                            defer: !0,
                            pointerBlocking: o("modal"),
                            exclude: [t.getById(g(t))],
                            onInteractOutside(e) {
                                var t;
                                null == (t = o("onInteractOutside")) || t(e), o("closeOnInteractOutside") || e.preventDefault()
                            },
                            persistentElements: o("persistentElements"),
                            onFocusOutside: o("onFocusOutside"),
                            onPointerDownOutside: o("onPointerDownOutside"),
                            onRequestDismiss: o("onRequestDismiss"),
                            onEscapeKeyDown(e) {
                                var t;
                                null == (t = o("onEscapeKeyDown")) || t(e), o("closeOnEscape") || e.preventDefault()
                            },
                            onDismiss() {
                                n({
                                    type: "CLOSE",
                                    src: "interact-outside"
                                })
                            }
                        })
                    },
                    preventScroll(e) {
                        let {
                            scope: t,
                            prop: n
                        } = e;
                        if (n("preventScroll")) return (0, a.preventBodyScroll)(t.getDoc())
                    },
                    trapFocus(e) {
                        let {
                            scope: t,
                            prop: n
                        } = e;
                        if (n("trapFocus")) return (0, s.trapFocus)(() => m(t), {
                            preventScroll: !0,
                            returnFocusOnDeactivate: !!n("restoreFocus"),
                            initialFocus: n("initialFocusEl"),
                            setReturnFocus: e => {
                                var t, o;
                                return null != (o = null == (t = n("finalFocusEl")) ? void 0 : t()) ? o : e
                            },
                            getShadowRoot: !0
                        })
                    },
                    hideContentBelow(e) {
                        let {
                            scope: t,
                            prop: o
                        } = e;
                        if (o("modal")) return (0, n.ariaHidden)(() => [m(t)], {
                            defer: !0
                        })
                    }
                },
                actions: {
                    checkRenderedElements(e) {
                        let {
                            context: t,
                            scope: n
                        } = e;
                        (0, r.raf)(() => {
                            t.set("rendered", {
                                title: !!n.getById(f(n)),
                                description: !!n.getById(b(n))
                            })
                        })
                    },
                    syncZIndex(e) {
                        let {
                            scope: t
                        } = e;
                        (0, r.raf)(() => {
                            let e = m(t);
                            if (!e) return;
                            let n = (0, r.getComputedStyle)(e);
                            [t.getById(p(t)), t.getById(v(t))].forEach(e => {
                                null == e || e.style.setProperty("--z-index", n.zIndex), null == e || e.style.setProperty("--layer-index", n.getPropertyValue("--layer-index"))
                            })
                        })
                    },
                    invokeOnClose(e) {
                        var t;
                        let {
                            prop: n
                        } = e;
                        null == (t = n("onOpenChange")) || t({
                            open: !1
                        })
                    },
                    invokeOnOpen(e) {
                        var t;
                        let {
                            prop: n
                        } = e;
                        null == (t = n("onOpenChange")) || t({
                            open: !0
                        })
                    },
                    toggleVisibility(e) {
                        let {
                            prop: t,
                            send: n,
                            event: o
                        } = e;
                        n({
                            type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: o
                        })
                    }
                }
            }
        }),
        k = (0, l.createProps)()(["aria-label", "closeOnEscape", "closeOnInteractOutside", "dir", "finalFocusEl", "getRootNode", "getRootNode", "id", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "defaultOpen", "open", "persistentElements", "preventScroll", "restoreFocus", "role", "trapFocus"]);
    (0, c.createSplitProps)(k), e.s(["anatomy", () => d, "connect", () => O, "machine", () => E])
}, 212483, (e, t, n) => {
    "use strict";
    var o = e.r(251570),
        i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        r = o.useSyncExternalStore,
        s = o.useRef,
        a = o.useEffect,
        l = o.useMemo,
        c = o.useDebugValue;
    n.useSyncExternalStoreWithSelector = function(e, t, n, o, d) {
        var u = s(null);
        if (null === u.current) {
            var p = {
                hasValue: !1,
                value: null
            };
            u.current = p
        } else p = u.current;
        var v = r(e, (u = l(function() {
            function e(e) {
                if (!a) {
                    if (a = !0, r = e, e = o(e), void 0 !== d && p.hasValue) {
                        var t = p.value;
                        if (d(t, e)) return s = t
                    }
                    return s = e
                }
                if (t = s, i(r, e)) return t;
                var n = o(e);
                return void 0 !== d && d(t, n) ? (r = e, t) : (r = e, s = n)
            }
            var r, s, a = !1,
                l = void 0 === n ? null : n;
            return [function() {
                return e(t())
            }, null === l ? void 0 : function() {
                return e(l())
            }]
        }, [t, n, o, d]))[0], u[1]);
        return a(function() {
            p.hasValue = !0, p.value = v
        }, [v]), c(v), v
    }
}, 129852, (e, t, n) => {
    "use strict";
    t.exports = e.r(212483)
}, 391265, e => {
    "use strict";
    var t = e.i(251570),
        n = e.i(129852),
        o = {
            notify() {},
            get: () => []
        },
        i = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        r = "undefined" != typeof navigator && "ReactNative" === navigator.product,
        s = i || r ? t.useLayoutEffect : t.useEffect;

    function a(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    function l(e, t) {
        if (a(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        let n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (let o = 0; o < n.length; o++)
            if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !a(e[n[o]], t[n[o]])) return !1;
        return !0
    }
    var c = Symbol.for("react-redux-context"),
        d = "undefined" != typeof globalThis ? globalThis : {},
        u = function() {
            var e;
            if (!t.createContext) return {};
            let n = null != (e = d[c]) ? e : d[c] = new Map,
                o = n.get(t.createContext);
            return o || (o = t.createContext(null), n.set(t.createContext, o)), o
        }(),
        p = function(e) {
            let {
                children: n,
                context: i,
                serverState: r,
                store: a
            } = e, l = t.useMemo(() => {
                let e = function(e, t) {
                    let n, i = o,
                        r = 0,
                        s = !1;

                    function a() {
                        d.onStateChange && d.onStateChange()
                    }

                    function l() {
                        if (r++, !n) {
                            let t, o;
                            n = e.subscribe(a), t = null, o = null, i = {
                                clear() {
                                    t = null, o = null
                                },
                                notify() {
                                    let e = t;
                                    for (; e;) e.callback(), e = e.next
                                },
                                get() {
                                    let e = [],
                                        n = t;
                                    for (; n;) e.push(n), n = n.next;
                                    return e
                                },
                                subscribe(e) {
                                    let n = !0,
                                        i = o = {
                                            callback: e,
                                            next: null,
                                            prev: o
                                        };
                                    return i.prev ? i.prev.next = i : t = i,
                                        function() {
                                            n && null !== t && (n = !1, i.next ? i.next.prev = i.prev : o = i.prev, i.prev ? i.prev.next = i.next : t = i.next)
                                        }
                                }
                            }
                        }
                    }

                    function c() {
                        r--, n && 0 === r && (n(), n = void 0, i.clear(), i = o)
                    }
                    let d = {
                        addNestedSub: function(e) {
                            l();
                            let t = i.subscribe(e),
                                n = !1;
                            return () => {
                                n || (n = !0, t(), c())
                            }
                        },
                        notifyNestedSubs: function() {
                            i.notify()
                        },
                        handleChangeWrapper: a,
                        isSubscribed: function() {
                            return s
                        },
                        trySubscribe: function() {
                            s || (s = !0, l())
                        },
                        tryUnsubscribe: function() {
                            s && (s = !1, c())
                        },
                        getListeners: () => i
                    };
                    return d
                }(a);
                return {
                    store: a,
                    subscription: e,
                    getServerState: r ? () => r : void 0
                }
            }, [a, r]), c = t.useMemo(() => a.getState(), [a]);
            return s(() => {
                let {
                    subscription: e
                } = l;
                return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), c !== a.getState() && e.notifyNestedSubs(), () => {
                    e.tryUnsubscribe(), e.onStateChange = void 0
                }
            }, [l, c]), t.createElement((i || u).Provider, {
                value: l
            }, n)
        };

    function v() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
        return function() {
            return t.useContext(e)
        }
    }
    var h = v();

    function g() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = e === u ? h : v(e),
            n = () => {
                let {
                    store: e
                } = t();
                return e
            };
        return Object.assign(n, {
            withTypes: () => n
        }), n
    }
    var f = g(),
        b = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                t = e === u ? f : g(e),
                n = () => t().dispatch;
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }(),
        y = (e, t) => e === t,
        m = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                o = e === u ? h : v(e),
                i = function(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            equalityFn: r = y
                        } = "function" == typeof i ? {
                            equalityFn: i
                        } : i,
                        {
                            store: s,
                            subscription: a,
                            getServerState: l
                        } = o();
                    t.useRef(!0);
                    let c = t.useCallback({
                            [e.name]: t => e(t)
                        }[e.name], [e]),
                        d = (0, n.useSyncExternalStoreWithSelector)(a.addNestedSub, s.getState, l || s.getState, c, r);
                    return t.useDebugValue(d), d
                };
            return Object.assign(i, {
                withTypes: () => i
            }), i
        }();
    e.s(["Provider", () => p, "shallowEqual", () => l, "useDispatch", () => b, "useSelector", () => m])
}, 833707, (e, t, n) => {
    t.exports = e.r(306682)
}, 309966, e => {
    "use strict";
    var t = e.i(841158),
        n = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        o = null,
        i = new Set,
        r = new Map,
        s = !1,
        a = !1,
        l = {
            Tab: !0,
            Escape: !0
        };

    function c(e, t) {
        for (let n of i) n(e, t)
    }

    function d(e) {
        s = !0, e.metaKey || !(0, t.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (o = "keyboard", c("keyboard", e))
    }

    function u(e) {
        o = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (s = !0, c("pointer", e))
    }

    function p(e) {
        (0, t.isVirtualClick)(e) && (s = !0, o = "virtual")
    }

    function v(e) {
        let n = (0, t.getEventTarget)(e);
        n !== (0, t.getWindow)(n) && n !== (0, t.getDocument)(n) && (s || a || (o = "virtual", c("virtual", e)), s = !1, a = !1)
    }

    function h() {
        s = !1, a = !0
    }

    function g() {
        return o
    }

    function f() {
        return "keyboard" === o
    }

    function b() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isTextInput: a,
                autoFocus: g,
                onChange: b,
                root: y
            } = e;
        ! function(e) {
            if ("undefined" == typeof window || r.get((0, t.getWindow)(e))) return;
            let n = (0, t.getWindow)(e),
                i = (0, t.getDocument)(e),
                a = n.HTMLElement.prototype.focus;
            try {
                Object.defineProperty(n.HTMLElement.prototype, "focus", {
                    configurable: !0,
                    value: function() {
                        o = "virtual", c("virtual", null), s = !0, a.apply(this, arguments)
                    }
                })
            } catch {}
            i.addEventListener("keydown", d, !0), i.addEventListener("keyup", d, !0), i.addEventListener("click", p, !0), n.addEventListener("focus", v, !0), n.addEventListener("blur", h, !1), void 0 !== n.PointerEvent ? (i.addEventListener("pointerdown", u, !0), i.addEventListener("pointermove", u, !0), i.addEventListener("pointerup", u, !0)) : (i.addEventListener("mousedown", u, !0), i.addEventListener("mousemove", u, !0), i.addEventListener("mouseup", u, !0)), n.addEventListener("beforeunload", () => {
                ((e, n) => {
                    let o = (0, t.getWindow)(e),
                        i = (0, t.getDocument)(e),
                        s = r.get(o);
                    if (s) {
                        try {
                            Object.defineProperty(o.HTMLElement.prototype, "focus", {
                                configurable: !0,
                                value: s.focus
                            })
                        } catch {}
                        i.removeEventListener("keydown", d, !0), i.removeEventListener("keyup", d, !0), i.removeEventListener("click", p, !0), o.removeEventListener("focus", v, !0), o.removeEventListener("blur", h, !1), void 0 !== o.PointerEvent ? (i.removeEventListener("pointerdown", u, !0), i.removeEventListener("pointermove", u, !0), i.removeEventListener("pointerup", u, !0)) : (i.removeEventListener("mousedown", u, !0), i.removeEventListener("mousemove", u, !0), i.removeEventListener("mouseup", u, !0)), r.delete(o)
                    }
                })(e)
            }, {
                once: !0
            }), r.set(n, {
                focus: a
            })
        }(y), null == b || b({
            isFocusVisible: g || f(),
            modality: o
        });
        let m = (e, o) => {
            var i;
            let r, s;
            i = !!a, r = o ? (0, t.getEventTarget)(o) : null, s = (0, t.getWindow)(r), (i = i || r instanceof s.HTMLInputElement && !n.has(null == r ? void 0 : r.type) || r instanceof s.HTMLTextAreaElement || r instanceof s.HTMLElement && r.isContentEditable) && "keyboard" === e && o instanceof s.KeyboardEvent && !Reflect.has(l, o.key) || null == b || b({
                isFocusVisible: f(),
                modality: e
            })
        };
        return i.add(m), () => {
            i.delete(m)
        }
    }
    e.s(["getInteractionModality", () => g, "isFocusVisible", () => f, "trackFocusVisible", () => b])
}, 458943, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        o = e.i(309966),
        i = e.i(541356),
        r = e.i(409078),
        s = e.i(30500),
        a = e.i(593006),
        l = (0, t.createAnatomy)("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content"),
        c = l.build(),
        d = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "tooltip:".concat(e.id, ":trigger")
        },
        u = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "tooltip:".concat(e.id, ":popper")
        },
        p = e => e.getById(d(e)),
        v = e => e.getById(u(e)),
        h = (0, r.createStore)({
            id: null
        });

    function g(e, t) {
        var r, s;
        let {
            state: a,
            context: l,
            send: p,
            scope: v,
            prop: g,
            event: f
        } = e, b = g("id"), y = !!g("aria-label"), m = a.matches("open", "closing"), O = d(v), E = null != (s = null == (r = v.ids) ? void 0 : r.content) ? s : "tooltip:".concat(v.id, ":content"), k = g("disabled"), C = (0, i.getPlacementStyles)({ ...g("positioning"),
            placement: l.get("currentPlacement")
        });
        return {
            open: m,
            setOpen(e) {
                a.matches("open", "closing") !== e && p({
                    type: e ? "open" : "close"
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                p({
                    type: "positioning.set",
                    options: e
                })
            },
            getTriggerProps: () => t.button({ ...c.trigger.attrs,
                id: O,
                dir: g("dir"),
                "data-expanded": (0, n.dataAttr)(m),
                "data-state": m ? "open" : "closed",
                "aria-describedby": m ? E : void 0,
                onClick(e) {
                    e.defaultPrevented || k || g("closeOnClick") && p({
                        type: "close",
                        src: "trigger.click"
                    })
                },
                onFocus(e) {
                    queueMicrotask(() => {
                        e.defaultPrevented || k || "trigger.pointerdown" === f.src || (0, o.isFocusVisible)() && p({
                            type: "open",
                            src: "trigger.focus"
                        })
                    })
                },
                onBlur(e) {
                    e.defaultPrevented || k || b === h.get("id") && p({
                        type: "close",
                        src: "trigger.blur"
                    })
                },
                onPointerDown(e) {
                    e.defaultPrevented || k || !(0, n.isLeftClick)(e) || g("closeOnPointerDown") && b === h.get("id") && p({
                        type: "close",
                        src: "trigger.pointerdown"
                    })
                },
                onPointerMove(e) {
                    e.defaultPrevented || k || "touch" !== e.pointerType && p({
                        type: "pointer.move"
                    })
                },
                onPointerLeave() {
                    k || p({
                        type: "pointer.leave"
                    })
                },
                onPointerCancel() {
                    k || p({
                        type: "pointer.leave"
                    })
                }
            }),
            getArrowProps: () => {
                var e, n;
                return t.element({
                    id: null != (n = null == (e = v.ids) ? void 0 : e.arrow) ? n : "tooltip:".concat(v.id, ":arrow"),
                    ...c.arrow.attrs,
                    dir: g("dir"),
                    style: C.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...c.arrowTip.attrs,
                dir: g("dir"),
                style: C.arrowTip
            }),
            getPositionerProps: () => t.element({
                id: u(v),
                ...c.positioner.attrs,
                dir: g("dir"),
                style: C.floating
            }),
            getContentProps: () => t.element({ ...c.content.attrs,
                dir: g("dir"),
                hidden: !m,
                "data-state": m ? "open" : "closed",
                role: y ? void 0 : "tooltip",
                id: y ? void 0 : E,
                "data-placement": l.get("currentPlacement"),
                onPointerEnter() {
                    p({
                        type: "content.pointer.move"
                    })
                },
                onPointerLeave() {
                    p({
                        type: "content.pointer.leave"
                    })
                },
                style: {
                    pointerEvents: g("interactive") ? "auto" : "none"
                }
            })
        }
    }
    var {
        and: f,
        not: b
    } = (0, s.createGuards)(), y = (0, s.createMachine)({
        initialState: e => {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "closed"
        },
        props(e) {
            var t, n;
            let {
                props: o
            } = e, i = null == (t = o.closeOnClick) || t, r = null != (n = o.closeOnPointerDown) ? n : i;
            return {
                id: "x",
                openDelay: 400,
                closeDelay: 150,
                closeOnEscape: !0,
                interactive: !1,
                closeOnScroll: !0,
                disabled: !1,
                ...o,
                closeOnPointerDown: r,
                closeOnClick: i,
                positioning: {
                    placement: "bottom",
                    ...o.positioning
                }
            }
        },
        effects: ["trackFocusVisible", "trackStore"],
        context: e => {
            let {
                bindable: t
            } = e;
            return {
                currentPlacement: t(() => ({
                    defaultValue: void 0
                })),
                hasPointerMoveOpened: t(() => ({
                    defaultValue: !1
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                action: n,
                prop: o
            } = e;
            t([() => o("disabled")], () => {
                n(["closeIfDisabled"])
            }), t([() => o("open")], () => {
                n(["toggleVisibility"])
            })
        },
        states: {
            closed: {
                entry: ["clearGlobalId"],
                on: {
                    "controlled.open": {
                        target: "open"
                    },
                    open: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    "pointer.leave": {
                        actions: ["clearPointerMoveOpened"]
                    },
                    "pointer.move": [{
                        guard: f("noVisibleTooltip", b("hasPointerMoveOpened")),
                        target: "opening"
                    }, {
                        guard: b("hasPointerMoveOpened"),
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }]
                }
            },
            opening: {
                effects: ["trackScroll", "trackPointerlockChange", "waitForOpenDelay"],
                on: {
                    "after.openDelay": [{
                        guard: "isOpenControlled",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }],
                    "controlled.open": {
                        target: "open"
                    },
                    "controlled.close": {
                        target: "closed"
                    },
                    open: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "open",
                        actions: ["invokeOnOpen"]
                    }],
                    "pointer.leave": [{
                        guard: "isOpenControlled",
                        actions: ["clearPointerMoveOpened", "invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }],
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose", "toggleVisibility"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }]
                }
            },
            open: {
                effects: ["trackEscapeKey", "trackScroll", "trackPointerlockChange", "trackPositioning"],
                entry: ["setGlobalId"],
                on: {
                    "controlled.close": {
                        target: "closed"
                    },
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "pointer.leave": [{
                        guard: "isVisible",
                        target: "closing",
                        actions: ["clearPointerMoveOpened"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["clearPointerMoveOpened", "invokeOnClose"]
                    }],
                    "content.pointer.leave": {
                        guard: "isInteractive",
                        target: "closing"
                    },
                    "positioning.set": {
                        actions: ["reposition"]
                    }
                }
            },
            closing: {
                effects: ["trackPositioning", "waitForCloseDelay"],
                on: {
                    "after.closeDelay": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "controlled.close": {
                        target: "closed"
                    },
                    "controlled.open": {
                        target: "open"
                    },
                    close: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "closed",
                        actions: ["invokeOnClose"]
                    }],
                    "pointer.move": [{
                        guard: "isOpenControlled",
                        actions: ["setPointerMoveOpened", "invokeOnOpen", "toggleVisibility"]
                    }, {
                        target: "open",
                        actions: ["setPointerMoveOpened", "invokeOnOpen"]
                    }],
                    "content.pointer.move": {
                        guard: "isInteractive",
                        target: "open"
                    },
                    "positioning.set": {
                        actions: ["reposition"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                noVisibleTooltip: () => null === h.get("id"),
                isVisible: e => {
                    let {
                        prop: t
                    } = e;
                    return t("id") === h.get("id")
                },
                isInteractive: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("interactive")
                },
                hasPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("hasPointerMoveOpened")
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return void 0 !== t("open")
                }
            },
            actions: {
                setGlobalId: e => {
                    let {
                        prop: t
                    } = e;
                    h.set("id", t("id"))
                },
                clearGlobalId: e => {
                    let {
                        prop: t
                    } = e;
                    t("id") === h.get("id") && h.set("id", null)
                },
                invokeOnOpen: e => {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !0
                    })
                },
                invokeOnClose: e => {
                    var t;
                    let {
                        prop: n
                    } = e;
                    null == (t = n("onOpenChange")) || t({
                        open: !1
                    })
                },
                closeIfDisabled: e => {
                    let {
                        prop: t,
                        send: n
                    } = e;
                    t("disabled") && n({
                        type: "close",
                        src: "disabled.change"
                    })
                },
                reposition: e => {
                    let {
                        context: t,
                        event: n,
                        prop: o,
                        scope: r
                    } = e;
                    if ("positioning.set" === n.type) return (0, i.getPlacement)(p(r), () => v(r), { ...o("positioning"),
                        ...n.options,
                        defer: !0,
                        listeners: !1,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                toggleVisibility: e => {
                    let {
                        prop: t,
                        event: n,
                        send: o
                    } = e;
                    queueMicrotask(() => {
                        o({
                            type: t("open") ? "controlled.open" : "controlled.close",
                            previousEvent: n
                        })
                    })
                },
                setPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    t.set("hasPointerMoveOpened", !0)
                },
                clearPointerMoveOpened: e => {
                    let {
                        context: t
                    } = e;
                    t.set("hasPointerMoveOpened", !1)
                }
            },
            effects: {
                trackFocusVisible: e => {
                    var t;
                    let {
                        scope: n
                    } = e;
                    return (0, o.trackFocusVisible)({
                        root: null == (t = n.getRootNode) ? void 0 : t.call(n)
                    })
                },
                trackPositioning: e => {
                    let {
                        context: t,
                        prop: n,
                        scope: o
                    } = e;
                    return t.get("currentPlacement") || t.set("currentPlacement", n("positioning").placement), (0, i.getPlacement)(p(o), () => v(o), { ...n("positioning"),
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                trackPointerlockChange: e => {
                    let {
                        send: t,
                        scope: o
                    } = e, i = o.getDoc();
                    return (0, n.addDomEvent)(i, "pointerlockchange", () => t({
                        type: "close",
                        src: "pointerlock:change"
                    }), !1)
                },
                trackScroll: e => {
                    let {
                        send: t,
                        prop: o,
                        scope: i
                    } = e;
                    if (!o("closeOnScroll")) return;
                    let r = p(i);
                    if (!r) return;
                    let s = (0, n.getOverflowAncestors)(r).map(e => (0, n.addDomEvent)(e, "scroll", () => {
                        t({
                            type: "close",
                            src: "scroll"
                        })
                    }, {
                        passive: !0,
                        capture: !0
                    }));
                    return () => {
                        s.forEach(e => null == e ? void 0 : e())
                    }
                },
                trackStore: e => {
                    let t, {
                        prop: n,
                        send: o
                    } = e;
                    return queueMicrotask(() => {
                        t = h.subscribe(() => {
                            h.get("id") !== n("id") && o({
                                type: "close",
                                src: "id.change"
                            })
                        })
                    }), () => null == t ? void 0 : t()
                },
                trackEscapeKey: e => {
                    let {
                        send: t,
                        prop: o
                    } = e;
                    if (o("closeOnEscape")) return (0, n.addDomEvent)(document, "keydown", e => {
                        (0, n.isComposingEvent)(e) || "Escape" === e.key && (e.stopPropagation(), t({
                            type: "close",
                            src: "keydown.escape"
                        }))
                    }, !0)
                },
                waitForOpenDelay: e => {
                    let {
                        send: t,
                        prop: n
                    } = e, o = setTimeout(() => {
                        t({
                            type: "after.openDelay"
                        })
                    }, n("openDelay"));
                    return () => clearTimeout(o)
                },
                waitForCloseDelay: e => {
                    let {
                        send: t,
                        prop: n
                    } = e, o = setTimeout(() => {
                        t({
                            type: "after.closeDelay"
                        })
                    }, n("closeDelay"));
                    return () => clearTimeout(o)
                }
            }
        }
    }), m = (0, a.createProps)()(["aria-label", "closeDelay", "closeOnEscape", "closeOnPointerDown", "closeOnScroll", "closeOnClick", "dir", "disabled", "getRootNode", "id", "ids", "interactive", "onOpenChange", "defaultOpen", "open", "openDelay", "positioning"]);
    (0, r.createSplitProps)(m), e.s(["anatomy", () => l, "connect", () => g, "machine", () => y])
}, 476659, e => {
    "use strict";
    e.s(["isStorageAvailable", 0, e => {
        try {
            let t = window[e],
                n = "__storage_test__";
            return t.setItem(n, "test"), t.removeItem(n), !0
        } catch (e) {
            return !1
        }
    }, "safeLocalStorage", 0, {
        getItem: e => {
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return null
            }
        },
        setItem: (e, t) => {
            try {
                localStorage.setItem(e, t)
            } catch (e) {}
        },
        removeItem: e => {
            try {
                localStorage.removeItem(e)
            } catch (e) {}
        }
    }])
}]);

//# debugId=62977601-edeb-0a52-2a76-b48af7012f1a
//# sourceMappingURL=844ee3fdc96e3b1b.js.map