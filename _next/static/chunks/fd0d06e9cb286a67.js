;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a451ff75-04cd-4894-0722-441754b0089b")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 833288, 279511, 635398, e => {
    "use strict";
    var t = e.i(841158),
        o = new WeakMap,
        n = new WeakMap,
        i = {},
        s = 0,
        r = e => e && (e.host || r(e.parentNode)),
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
                } = l, h = (Array.isArray(e) ? e : [e]).map(e => {
                    if (c.contains(e)) return e;
                    let t = r(e);
                    return t && c.contains(t) ? t : (console.error("[zag-js > ariaHidden] target", e, "in not contained inside", c, ". Doing nothing"), null)
                }).filter(e => !!e);
                i[d] || (i[d] = new WeakMap);
                let v = i[d],
                    g = [],
                    b = new Set,
                    f = new Set(h),
                    m = e => {
                        !e || b.has(e) || (b.add(e), m(e.parentNode))
                    };
                h.forEach(e => {
                    m(e), p && (0, t.isHTMLElement)(e) && (0, t.findControlledElements)(e, e => {
                        m(e)
                    })
                });
                let y = e => {
                    !e || f.has(e) || Array.prototype.forEach.call(e.children, e => {
                        if (b.has(e)) y(e);
                        else try {
                            if (a.has(e.localName) || "status" === e.role || e.hasAttribute("aria-live") || e.matches("[data-live-announcer]")) return;
                            let t = e.getAttribute(u),
                                i = "true" === t,
                                s = (o.get(e) || 0) + 1,
                                r = (v.get(e) || 0) + 1;
                            o.set(e, s), v.set(e, r), g.push(e), 1 === s && i && n.set(e, !0), 1 === r && e.setAttribute(d, ""), i || e.setAttribute(u, "true")
                        } catch (t) {
                            console.error("[zag-js > ariaHidden] cannot operate on ", e, t)
                        }
                    })
                };
                return y(c), b.clear(), s++, () => {
                    g.forEach(e => {
                        let t = o.get(e) - 1,
                            i = v.get(e) - 1;
                        o.set(e, t), v.set(e, i), t || (n.has(e) || e.removeAttribute(u), n.delete(e)), i || e.removeAttribute(d)
                    }), --s || (o = new WeakMap, o = new WeakMap, n = new WeakMap, i = {})
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
                defer: o = !0
            } = t,
            n = [];
        return n.push((o ? e => {
            let t = requestAnimationFrame(() => e());
            return () => cancelAnimationFrame(t)
        } : e => e())(() => {
            let t = ("function" == typeof e ? e() : e).filter(Boolean);
            0 !== t.length && n.push(l(t))
        })), () => {
            n.forEach(e => null == e ? void 0 : e())
        }
    }
    e.s(["ariaHidden", () => c], 833288);
    var d = Object.defineProperty,
        u = (e, t, o) => {
            let n;
            return (n = "symbol" != typeof t ? t + "" : t) in e ? d(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o
            }) : e[n] = o
        },
        p = {
            activateTrap(e, t) {
                if (e.length > 0) {
                    let o = e[e.length - 1];
                    o !== t && o.pause()
                }
                let o = e.indexOf(t); - 1 === o || e.splice(o, 1), e.push(t)
            },
            deactivateTrap(e, t) {
                let o = e.indexOf(t); - 1 !== o && e.splice(o, 1), e.length > 0 && e[e.length - 1].unpause()
            }
        },
        h = [],
        v = class {
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
                let o = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
                return this.state.containerGroups.findIndex(t => {
                    let {
                        container: n,
                        tabbableNodes: i
                    } = t;
                    return n.contains(e) || (null == o ? void 0 : o.includes(n)) || i.find(t => t === e) || this.isControlledElement(n, e)
                })
            }
            isControlledElement(e, o) {
                return !!this.config.followControlledElements && (0, t.isControlledElement)(e, o)
            }
            updateTabbableNodes() {
                if (this.state.containerGroups = this.state.containers.map(e => {
                        let o = (0, t.getTabbables)(e, {
                                getShadowRoot: this.config.getShadowRoot
                            }),
                            n = (0, t.getFocusables)(e, {
                                getShadowRoot: this.config.getShadowRoot
                            }),
                            i = o[0],
                            s = o[o.length - 1],
                            r = !1;
                        for (let e = 0; e < o.length; e++)
                            if ((0, t.getTabIndex)(o[e]) > 0) {
                                r = !0;
                                break
                            }
                        return {
                            container: e,
                            tabbableNodes: o,
                            focusableNodes: n,
                            posTabIndexesFound: r,
                            firstTabbableNode: i,
                            lastTabbableNode: s,
                            firstDomTabbableNode: i,
                            lastDomTabbableNode: s,
                            nextTabbableNode: function(e) {
                                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                    s = o.indexOf(e);
                                if (s >= 0) return o[s + (i ? 1 : -1)];
                                let r = n.indexOf(e);
                                if (!(r < 0)) {
                                    if (i) {
                                        for (let e = r + 1; e < n.length; e++)
                                            if ((0, t.isTabbable)(n[e])) return n[e]
                                    } else
                                        for (let e = r - 1; e >= 0; e--)
                                            if ((0, t.isTabbable)(n[e])) return n[e]
                                }
                            }
                        }
                    }), this.state.tabbableGroups = this.state.containerGroups.filter(e => e.tabbableNodes.length > 0), this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (this.state.containerGroups.find(e => e.posTabIndexesFound) && this.state.containerGroups.length > 1) throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            }
            addListeners() {
                if (this.state.active) return p.activateTrap(this.trapStack, this), this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? m(() => {
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
                let o = this.getOption(e, "onActivate"),
                    n = this.getOption(e, "onPostActivate"),
                    i = this.getOption(e, "checkCanFocusTrap");
                i || this.updateTabbableNodes(), this.state.active = !0, this.state.paused = !1, this.state.nodeFocusedBeforeActivation = (0, t.getActiveElement)(this.doc), null == o || o();
                let s = () => {
                    i && this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), null == n || n()
                };
                return i ? i(this.state.containers.concat()).then(s, s) : s(), this
            }
            constructor(e, o) {
                var n = this;
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
                    let o = (0, t.getEventTarget)(e),
                        n = this.findContainerIndex(o, e) >= 0;
                    if (n || (0, t.isDocument)(o)) n && (this.state.mostRecentlyFocusedNode = o);
                    else {
                        let o;
                        e.stopImmediatePropagation();
                        let n = !0;
                        if (this.state.mostRecentlyFocusedNode)
                            if ((0, t.getTabIndex)(this.state.mostRecentlyFocusedNode) > 0) {
                                let e = this.findContainerIndex(this.state.mostRecentlyFocusedNode),
                                    {
                                        tabbableNodes: t
                                    } = this.state.containerGroups[e];
                                if (t.length > 0) {
                                    let e = t.findIndex(e => e === this.state.mostRecentlyFocusedNode);
                                    e >= 0 && (this.config.isKeyForward(this.state.recentNavEvent) ? e + 1 < t.length && (o = t[e + 1], n = !1) : e - 1 >= 0 && (o = t[e - 1], n = !1))
                                }
                            } else this.state.containerGroups.some(e => e.tabbableNodes.some(e => (0, t.getTabIndex)(e) > 0)) || (n = !1);
                        else n = !1;
                        n && (o = this.findNextNavNode({
                            target: this.state.mostRecentlyFocusedNode,
                            isBackward: this.config.isKeyBackward(this.state.recentNavEvent)
                        })), o ? this.tryFocus(o) : this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode())
                    }
                    this.state.recentNavEvent = void 0
                }), u(this, "handlePointerDown", e => {
                    let o = (0, t.getEventTarget)(e);
                    this.findContainerIndex(o, e) >= 0 || (b(this.config.clickOutsideDeactivates, e) ? this.deactivate({
                        returnFocus: this.config.returnFocusOnDeactivate
                    }) : b(this.config.allowOutsideClick, e) || e.preventDefault())
                }), u(this, "handleClick", e => {
                    let o = (0, t.getEventTarget)(e);
                    this.findContainerIndex(o, e) >= 0 || b(this.config.clickOutsideDeactivates, e) || b(this.config.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                }), u(this, "handleTabKey", e => {
                    if (this.config.isKeyForward(e) || this.config.isKeyBackward(e)) {
                        this.state.recentNavEvent = e;
                        let t = this.config.isKeyBackward(e),
                            o = this.findNextNavNode({
                                event: e,
                                isBackward: t
                            });
                        o && (g(e) && e.preventDefault(), this.tryFocus(o))
                    }
                }), u(this, "handleEscapeKey", e => {
                    f(e) && !1 !== b(this.config.escapeDeactivates, e) && (e.preventDefault(), this.deactivate())
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
                        let o = (0, t.getActiveElement)(this.doc);
                        if (o && this.findContainerIndex(o) >= 0) e = o;
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
                        }), this.state.mostRecentlyFocusedNode = e, y(e) && e.select()
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
                    let o = this.getOption(t, "onDeactivate"),
                        n = this.getOption(t, "onPostDeactivate"),
                        i = this.getOption(t, "checkCanReturnFocus"),
                        s = this.getOption(t, "returnFocus", "returnFocusOnDeactivate");
                    null == o || o();
                    let r = () => {
                        m(() => {
                            if (s) {
                                let e = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
                                this.tryFocus(e)
                            }
                            null == n || n()
                        })
                    };
                    return s && i ? i(this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation)).then(r, r) : r(), this
                }), u(this, "pause", e => {
                    if (this.state.paused || !this.state.active) return this;
                    let t = this.getOption(e, "onPause"),
                        o = this.getOption(e, "onPostPause");
                    return this.state.paused = !0, null == t || t(), this.removeListeners(), this.updateObservedNodes(), null == o || o(), this
                }), u(this, "unpause", e => {
                    if (!this.state.paused || !this.state.active) return this;
                    let t = this.getOption(e, "onUnpause"),
                        o = this.getOption(e, "onPostUnpause");
                    return this.state.paused = !1, null == t || t(), this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), null == o || o(), this
                }), u(this, "updateContainerElements", e => (this.state.containers = Array.isArray(e) ? e.filter(Boolean) : [e].filter(Boolean), this.state.active && this.updateTabbableNodes(), this.updateObservedNodes(), this)), u(this, "getReturnFocusNode", e => {
                    let t = this.getNodeForOption("setReturnFocus", {
                        params: [e]
                    });
                    return t || !1 !== t && e
                }), u(this, "getOption", (e, t, o) => e && void 0 !== e[t] ? e[t] : this.config[o || t]), u(this, "getNodeForOption", function(e) {
                    let {
                        hasFallback: t = !1,
                        params: o = []
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = n.config[e];
                    if ("function" == typeof i && (i = i(...o)), !0 === i && (i = void 0), !i) {
                        if (void 0 === i || !1 === i) return i;
                        throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                    }
                    let s = i;
                    if ("string" == typeof i) {
                        try {
                            s = n.doc.querySelector(i)
                        } catch (t) {
                            throw Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                        }
                        if (!s && !t) throw Error("`".concat(e, "` as selector refers to no known node"))
                    }
                    return s
                }), u(this, "findNextNavNode", e => {
                    let {
                        event: o,
                        isBackward: n = !1
                    } = e, i = e.target || (0, t.getEventTarget)(o);
                    this.updateTabbableNodes();
                    let s = null;
                    if (this.state.tabbableGroups.length > 0) {
                        let e = this.findContainerIndex(i, o),
                            r = e >= 0 ? this.state.containerGroups[e] : void 0;
                        if (e < 0) s = n ? this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode : this.state.tabbableGroups[0].firstTabbableNode;
                        else if (n) {
                            let n = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    firstTabbableNode: t
                                } = e;
                                return i === t
                            });
                            if (n < 0 && ((null == r ? void 0 : r.container) === i || (0, t.isFocusable)(i) && !(0, t.isTabbable)(i) && !(null == r ? void 0 : r.nextTabbableNode(i, !1))) && (n = e), n >= 0) {
                                let e = 0 === n ? this.state.tabbableGroups.length - 1 : n - 1,
                                    o = this.state.tabbableGroups[e];
                                s = (0, t.getTabIndex)(i) >= 0 ? o.lastTabbableNode : o.lastDomTabbableNode
                            } else g(o) || (s = null == r ? void 0 : r.nextTabbableNode(i, !1))
                        } else {
                            let n = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    lastTabbableNode: t
                                } = e;
                                return i === t
                            });
                            if (n < 0 && ((null == r ? void 0 : r.container) === i || (0, t.isFocusable)(i) && !(0, t.isTabbable)(i) && !(null == r ? void 0 : r.nextTabbableNode(i))) && (n = e), n >= 0) {
                                let e = n === this.state.tabbableGroups.length - 1 ? 0 : n + 1,
                                    o = this.state.tabbableGroups[e];
                                s = (0, t.getTabIndex)(i) >= 0 ? o.firstTabbableNode : o.firstDomTabbableNode
                            } else g(o) || (s = null == r ? void 0 : r.nextTabbableNode(i))
                        }
                    } else s = this.getNodeForOption("fallbackFocus");
                    return s
                }), this.trapStack = o.trapStack || h;
                const i = {
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0,
                    followControlledElements: !0,
                    isKeyForward: e => g(e) && !e.shiftKey,
                    isKeyBackward: e => g(e) && e.shiftKey,
                    ...o
                };
                this.doc = i.document || (0, t.getDocument)(Array.isArray(e) ? e[0] : e), this.config = i, this.updateContainerElements(e), this.setupMutationObserver()
            }
        },
        g = e => "Tab" === e.key,
        b = function(e) {
            for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
            return "function" == typeof e ? e(...o) : e
        },
        f = e => !e.isComposing && "Escape" === e.key,
        m = e => setTimeout(e, 0),
        y = e => "input" === e.localName && "select" in e && "function" == typeof e.select;

    function O(e) {
        let o, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = (0, t.raf)(() => {
                let i = "function" == typeof e ? e() : e;
                if (i) {
                    o = new v(i, {
                        escapeDeactivates: !1,
                        allowOutsideClick: !0,
                        preventScroll: !0,
                        returnFocusOnDeactivate: !0,
                        delayInitialFocus: !1,
                        fallbackFocus: i,
                        ...n,
                        document: (0, t.getDocument)(i)
                    });
                    try {
                        o.activate()
                    } catch {}
                }
            });
        return function() {
            null == o || o.deactivate(), i()
        }
    }
    e.s(["trapFocus", () => O], 279511);
    var E = "data-scroll-lock";

    function k(e) {
        let o = (0, t.getComputedStyle)(e),
            n = null == o ? void 0 : o.scrollbarGutter;
        return "stable" === n || (null == n ? void 0 : n.startsWith("stable ")) === !0
    }

    function C(e) {
        var o;
        let n, i = null != e ? e : document,
            s = null != (o = i.defaultView) ? o : window,
            {
                documentElement: r,
                body: a
            } = i;
        if (a.hasAttribute(E)) return;
        let l = k(r) || k(a),
            c = s.innerWidth - r.clientWidth;
        a.setAttribute(E, "");
        let d = Math.round(r.getBoundingClientRect().left) + r.scrollLeft ? "paddingLeft" : "paddingRight",
            u = [(0, t.setStyleProperty)(r, "--scrollbar-width", "".concat(c, "px")), (0, t.isIos)() ? (() => {
                var e, o;
                let {
                    scrollX: n,
                    scrollY: i,
                    visualViewport: r
                } = s, u = null != (e = null == r ? void 0 : r.offsetLeft) ? e : 0, p = null != (o = null == r ? void 0 : r.offsetTop) ? o : 0, h = {
                    position: "fixed",
                    overflow: "hidden",
                    top: "".concat(-(i - Math.floor(p)), "px"),
                    left: "".concat(-(n - Math.floor(u)), "px"),
                    right: "0"
                };
                !l && c > 0 && (h[d] = "".concat(c, "px"));
                let v = (0, t.setStyle)(a, h);
                return () => {
                    null == v || v(), s.scrollTo({
                        left: n,
                        top: i,
                        behavior: "instant"
                    })
                }
            })() : (n = {
                overflow: "hidden"
            }, !l && c > 0 && (n[d] = "".concat(c, "px")), (0, t.setStyle)(a, n))];
        return () => {
            u.forEach(e => null == e ? void 0 : e()), a.removeAttribute(E)
        }
    }
    e.s(["preventBodyScroll", () => C], 635398)
}, 943517, e => {
    "use strict";
    var t = e.i(360706),
        o = e.i(833288),
        n = e.i(30500),
        i = e.i(143713),
        s = e.i(841158),
        r = e.i(279511),
        a = e.i(635398),
        l = e.i(593006),
        c = e.i(409078),
        d = (0, t.createAnatomy)("dialog").parts("trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"),
        u = d.build(),
        p = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.positioner) ? o : "dialog:".concat(e.id, ":positioner")
        },
        h = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.backdrop) ? o : "dialog:".concat(e.id, ":backdrop")
        },
        v = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.content) ? o : "dialog:".concat(e.id, ":content")
        },
        g = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.trigger) ? o : "dialog:".concat(e.id, ":trigger")
        },
        b = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.title) ? o : "dialog:".concat(e.id, ":title")
        },
        f = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.description) ? o : "dialog:".concat(e.id, ":description")
        },
        m = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.closeTrigger) ? o : "dialog:".concat(e.id, ":close")
        },
        y = e => e.getById(v(e));

    function O(e, t) {
        let {
            state: o,
            send: n,
            context: i,
            prop: s,
            scope: r
        } = e, a = s("aria-label"), l = o.matches("open");
        return {
            open: l,
            setOpen(e) {
                o.matches("open") !== e && n({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            getTriggerProps: () => t.button({ ...u.trigger.attrs,
                dir: s("dir"),
                id: g(r),
                "aria-haspopup": "dialog",
                type: "button",
                "aria-expanded": l,
                "data-state": l ? "open" : "closed",
                "aria-controls": v(r),
                onClick(e) {
                    e.defaultPrevented || n({
                        type: "TOGGLE"
                    })
                }
            }),
            getBackdropProps: () => t.element({ ...u.backdrop.attrs,
                dir: s("dir"),
                hidden: !l,
                id: h(r),
                "data-state": l ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({ ...u.positioner.attrs,
                dir: s("dir"),
                id: p(r),
                style: {
                    pointerEvents: l ? void 0 : "none"
                }
            }),
            getContentProps() {
                let e = i.get("rendered");
                return t.element({ ...u.content.attrs,
                    dir: s("dir"),
                    role: s("role"),
                    hidden: !l,
                    id: v(r),
                    tabIndex: -1,
                    "data-state": l ? "open" : "closed",
                    "aria-modal": !0,
                    "aria-label": a || void 0,
                    "aria-labelledby": a || !e.title ? void 0 : b(r),
                    "aria-describedby": e.description ? f(r) : void 0
                })
            },
            getTitleProps: () => t.element({ ...u.title.attrs,
                dir: s("dir"),
                id: b(r)
            }),
            getDescriptionProps: () => t.element({ ...u.description.attrs,
                dir: s("dir"),
                id: f(r)
            }),
            getCloseTriggerProps: () => t.button({ ...u.closeTrigger.attrs,
                dir: s("dir"),
                id: m(r),
                type: "button",
                onClick(e) {
                    e.defaultPrevented || (e.stopPropagation(), n({
                        type: "CLOSE"
                    }))
                }
            })
        }
    }
    var E = (0, n.createMachine)({
            props(e) {
                let {
                    props: t,
                    scope: o
                } = e, n = "alertdialog" === t.role, i = n ? () => o.getById(m(o)) : void 0, s = "boolean" != typeof t.modal || t.modal;
                return {
                    role: "dialog",
                    modal: s,
                    trapFocus: s,
                    preventScroll: s,
                    closeOnInteractOutside: !n,
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
                    action: o,
                    prop: n
                } = e;
                t([() => n("open")], () => {
                    o(["toggleVisibility"])
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
                            send: o,
                            prop: n
                        } = e;
                        return (0, i.trackDismissableElement)(() => y(t), {
                            type: "dialog",
                            defer: !0,
                            pointerBlocking: n("modal"),
                            exclude: [t.getById(g(t))],
                            onInteractOutside(e) {
                                var t;
                                null == (t = n("onInteractOutside")) || t(e), n("closeOnInteractOutside") || e.preventDefault()
                            },
                            persistentElements: n("persistentElements"),
                            onFocusOutside: n("onFocusOutside"),
                            onPointerDownOutside: n("onPointerDownOutside"),
                            onRequestDismiss: n("onRequestDismiss"),
                            onEscapeKeyDown(e) {
                                var t;
                                null == (t = n("onEscapeKeyDown")) || t(e), n("closeOnEscape") || e.preventDefault()
                            },
                            onDismiss() {
                                o({
                                    type: "CLOSE",
                                    src: "interact-outside"
                                })
                            }
                        })
                    },
                    preventScroll(e) {
                        let {
                            scope: t,
                            prop: o
                        } = e;
                        if (o("preventScroll")) return (0, a.preventBodyScroll)(t.getDoc())
                    },
                    trapFocus(e) {
                        let {
                            scope: t,
                            prop: o
                        } = e;
                        if (o("trapFocus")) return (0, r.trapFocus)(() => y(t), {
                            preventScroll: !0,
                            returnFocusOnDeactivate: !!o("restoreFocus"),
                            initialFocus: o("initialFocusEl"),
                            setReturnFocus: e => {
                                var t, n;
                                return null != (n = null == (t = o("finalFocusEl")) ? void 0 : t()) ? n : e
                            },
                            getShadowRoot: !0
                        })
                    },
                    hideContentBelow(e) {
                        let {
                            scope: t,
                            prop: n
                        } = e;
                        if (n("modal")) return (0, o.ariaHidden)(() => [y(t)], {
                            defer: !0
                        })
                    }
                },
                actions: {
                    checkRenderedElements(e) {
                        let {
                            context: t,
                            scope: o
                        } = e;
                        (0, s.raf)(() => {
                            t.set("rendered", {
                                title: !!o.getById(b(o)),
                                description: !!o.getById(f(o))
                            })
                        })
                    },
                    syncZIndex(e) {
                        let {
                            scope: t
                        } = e;
                        (0, s.raf)(() => {
                            let e = y(t);
                            if (!e) return;
                            let o = (0, s.getComputedStyle)(e);
                            [t.getById(p(t)), t.getById(h(t))].forEach(e => {
                                null == e || e.style.setProperty("--z-index", o.zIndex), null == e || e.style.setProperty("--layer-index", o.getPropertyValue("--layer-index"))
                            })
                        })
                    },
                    invokeOnClose(e) {
                        var t;
                        let {
                            prop: o
                        } = e;
                        null == (t = o("onOpenChange")) || t({
                            open: !1
                        })
                    },
                    invokeOnOpen(e) {
                        var t;
                        let {
                            prop: o
                        } = e;
                        null == (t = o("onOpenChange")) || t({
                            open: !0
                        })
                    },
                    toggleVisibility(e) {
                        let {
                            prop: t,
                            send: o,
                            event: n
                        } = e;
                        o({
                            type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: n
                        })
                    }
                }
            }
        }),
        k = (0, l.createProps)()(["aria-label", "closeOnEscape", "closeOnInteractOutside", "dir", "finalFocusEl", "getRootNode", "getRootNode", "id", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "defaultOpen", "open", "persistentElements", "preventScroll", "restoreFocus", "role", "trapFocus"]);
    (0, c.createSplitProps)(k), e.s(["anatomy", () => d, "connect", () => O, "machine", () => E])
}, 833707, (e, t, o) => {
    t.exports = e.r(306682)
}, 309966, e => {
    "use strict";
    var t = e.i(841158),
        o = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        n = null,
        i = new Set,
        s = new Map,
        r = !1,
        a = !1,
        l = {
            Tab: !0,
            Escape: !0
        };

    function c(e, t) {
        for (let o of i) o(e, t)
    }

    function d(e) {
        r = !0, e.metaKey || !(0, t.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (n = "keyboard", c("keyboard", e))
    }

    function u(e) {
        n = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (r = !0, c("pointer", e))
    }

    function p(e) {
        (0, t.isVirtualClick)(e) && (r = !0, n = "virtual")
    }

    function h(e) {
        let o = (0, t.getEventTarget)(e);
        o !== (0, t.getWindow)(o) && o !== (0, t.getDocument)(o) && (r || a || (n = "virtual", c("virtual", e)), r = !1, a = !1)
    }

    function v() {
        r = !1, a = !0
    }

    function g() {
        return n
    }

    function b() {
        return "keyboard" === n
    }

    function f() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isTextInput: a,
                autoFocus: g,
                onChange: f,
                root: m
            } = e;
        ! function(e) {
            if ("undefined" == typeof window || s.get((0, t.getWindow)(e))) return;
            let o = (0, t.getWindow)(e),
                i = (0, t.getDocument)(e),
                a = o.HTMLElement.prototype.focus;
            try {
                Object.defineProperty(o.HTMLElement.prototype, "focus", {
                    configurable: !0,
                    value: function() {
                        n = "virtual", c("virtual", null), r = !0, a.apply(this, arguments)
                    }
                })
            } catch {}
            i.addEventListener("keydown", d, !0), i.addEventListener("keyup", d, !0), i.addEventListener("click", p, !0), o.addEventListener("focus", h, !0), o.addEventListener("blur", v, !1), void 0 !== o.PointerEvent ? (i.addEventListener("pointerdown", u, !0), i.addEventListener("pointermove", u, !0), i.addEventListener("pointerup", u, !0)) : (i.addEventListener("mousedown", u, !0), i.addEventListener("mousemove", u, !0), i.addEventListener("mouseup", u, !0)), o.addEventListener("beforeunload", () => {
                ((e, o) => {
                    let n = (0, t.getWindow)(e),
                        i = (0, t.getDocument)(e),
                        r = s.get(n);
                    if (r) {
                        try {
                            Object.defineProperty(n.HTMLElement.prototype, "focus", {
                                configurable: !0,
                                value: r.focus
                            })
                        } catch {}
                        i.removeEventListener("keydown", d, !0), i.removeEventListener("keyup", d, !0), i.removeEventListener("click", p, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", v, !1), void 0 !== n.PointerEvent ? (i.removeEventListener("pointerdown", u, !0), i.removeEventListener("pointermove", u, !0), i.removeEventListener("pointerup", u, !0)) : (i.removeEventListener("mousedown", u, !0), i.removeEventListener("mousemove", u, !0), i.removeEventListener("mouseup", u, !0)), s.delete(n)
                    }
                })(e)
            }, {
                once: !0
            }), s.set(o, {
                focus: a
            })
        }(m), null == f || f({
            isFocusVisible: g || b(),
            modality: n
        });
        let y = (e, n) => {
            var i;
            let s, r;
            i = !!a, s = n ? (0, t.getEventTarget)(n) : null, r = (0, t.getWindow)(s), (i = i || s instanceof r.HTMLInputElement && !o.has(null == s ? void 0 : s.type) || s instanceof r.HTMLTextAreaElement || s instanceof r.HTMLElement && s.isContentEditable) && "keyboard" === e && n instanceof r.KeyboardEvent && !Reflect.has(l, n.key) || null == f || f({
                isFocusVisible: b(),
                modality: e
            })
        };
        return i.add(y), () => {
            i.delete(y)
        }
    }
    e.s(["getInteractionModality", () => g, "isFocusVisible", () => b, "trackFocusVisible", () => f])
}, 476659, e => {
    "use strict";
    e.s(["isStorageAvailable", 0, e => {
        try {
            let t = window[e],
                o = "__storage_test__";
            return t.setItem(o, "test"), t.removeItem(o), !0
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
}, 458943, e => {
    "use strict";
    var t = e.i(360706),
        o = e.i(841158),
        n = e.i(309966),
        i = e.i(541356),
        s = e.i(409078),
        r = e.i(30500),
        a = e.i(593006),
        l = (0, t.createAnatomy)("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content"),
        c = l.build(),
        d = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.trigger) ? o : "tooltip:".concat(e.id, ":trigger")
        },
        u = e => {
            var t, o;
            return null != (o = null == (t = e.ids) ? void 0 : t.positioner) ? o : "tooltip:".concat(e.id, ":popper")
        },
        p = e => e.getById(d(e)),
        h = e => e.getById(u(e)),
        v = (0, s.createStore)({
            id: null
        });

    function g(e, t) {
        var s, r;
        let {
            state: a,
            context: l,
            send: p,
            scope: h,
            prop: g,
            event: b
        } = e, f = g("id"), m = !!g("aria-label"), y = a.matches("open", "closing"), O = d(h), E = null != (r = null == (s = h.ids) ? void 0 : s.content) ? r : "tooltip:".concat(h.id, ":content"), k = g("disabled"), C = (0, i.getPlacementStyles)({ ...g("positioning"),
            placement: l.get("currentPlacement")
        });
        return {
            open: y,
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
                "data-expanded": (0, o.dataAttr)(y),
                "data-state": y ? "open" : "closed",
                "aria-describedby": y ? E : void 0,
                onClick(e) {
                    e.defaultPrevented || k || g("closeOnClick") && p({
                        type: "close",
                        src: "trigger.click"
                    })
                },
                onFocus(e) {
                    queueMicrotask(() => {
                        e.defaultPrevented || k || "trigger.pointerdown" === b.src || (0, n.isFocusVisible)() && p({
                            type: "open",
                            src: "trigger.focus"
                        })
                    })
                },
                onBlur(e) {
                    e.defaultPrevented || k || f === v.get("id") && p({
                        type: "close",
                        src: "trigger.blur"
                    })
                },
                onPointerDown(e) {
                    e.defaultPrevented || k || !(0, o.isLeftClick)(e) || g("closeOnPointerDown") && f === v.get("id") && p({
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
                var e, o;
                return t.element({
                    id: null != (o = null == (e = h.ids) ? void 0 : e.arrow) ? o : "tooltip:".concat(h.id, ":arrow"),
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
                id: u(h),
                ...c.positioner.attrs,
                dir: g("dir"),
                style: C.floating
            }),
            getContentProps: () => t.element({ ...c.content.attrs,
                dir: g("dir"),
                hidden: !y,
                "data-state": y ? "open" : "closed",
                role: m ? void 0 : "tooltip",
                id: m ? void 0 : E,
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
        and: b,
        not: f
    } = (0, r.createGuards)(), m = (0, r.createMachine)({
        initialState: e => {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "open" : "closed"
        },
        props(e) {
            var t, o;
            let {
                props: n
            } = e, i = null == (t = n.closeOnClick) || t, s = null != (o = n.closeOnPointerDown) ? o : i;
            return {
                id: "x",
                openDelay: 400,
                closeDelay: 150,
                closeOnEscape: !0,
                interactive: !1,
                closeOnScroll: !0,
                disabled: !1,
                ...n,
                closeOnPointerDown: s,
                closeOnClick: i,
                positioning: {
                    placement: "bottom",
                    ...n.positioning
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
                action: o,
                prop: n
            } = e;
            t([() => n("disabled")], () => {
                o(["closeIfDisabled"])
            }), t([() => n("open")], () => {
                o(["toggleVisibility"])
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
                        guard: b("noVisibleTooltip", f("hasPointerMoveOpened")),
                        target: "opening"
                    }, {
                        guard: f("hasPointerMoveOpened"),
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
                noVisibleTooltip: () => null === v.get("id"),
                isVisible: e => {
                    let {
                        prop: t
                    } = e;
                    return t("id") === v.get("id")
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
                    v.set("id", t("id"))
                },
                clearGlobalId: e => {
                    let {
                        prop: t
                    } = e;
                    t("id") === v.get("id") && v.set("id", null)
                },
                invokeOnOpen: e => {
                    var t;
                    let {
                        prop: o
                    } = e;
                    null == (t = o("onOpenChange")) || t({
                        open: !0
                    })
                },
                invokeOnClose: e => {
                    var t;
                    let {
                        prop: o
                    } = e;
                    null == (t = o("onOpenChange")) || t({
                        open: !1
                    })
                },
                closeIfDisabled: e => {
                    let {
                        prop: t,
                        send: o
                    } = e;
                    t("disabled") && o({
                        type: "close",
                        src: "disabled.change"
                    })
                },
                reposition: e => {
                    let {
                        context: t,
                        event: o,
                        prop: n,
                        scope: s
                    } = e;
                    if ("positioning.set" === o.type) return (0, i.getPlacement)(p(s), () => h(s), { ...n("positioning"),
                        ...o.options,
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
                        event: o,
                        send: n
                    } = e;
                    queueMicrotask(() => {
                        n({
                            type: t("open") ? "controlled.open" : "controlled.close",
                            previousEvent: o
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
                        scope: o
                    } = e;
                    return (0, n.trackFocusVisible)({
                        root: null == (t = o.getRootNode) ? void 0 : t.call(o)
                    })
                },
                trackPositioning: e => {
                    let {
                        context: t,
                        prop: o,
                        scope: n
                    } = e;
                    return t.get("currentPlacement") || t.set("currentPlacement", o("positioning").placement), (0, i.getPlacement)(p(n), () => h(n), { ...o("positioning"),
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                trackPointerlockChange: e => {
                    let {
                        send: t,
                        scope: n
                    } = e, i = n.getDoc();
                    return (0, o.addDomEvent)(i, "pointerlockchange", () => t({
                        type: "close",
                        src: "pointerlock:change"
                    }), !1)
                },
                trackScroll: e => {
                    let {
                        send: t,
                        prop: n,
                        scope: i
                    } = e;
                    if (!n("closeOnScroll")) return;
                    let s = p(i);
                    if (!s) return;
                    let r = (0, o.getOverflowAncestors)(s).map(e => (0, o.addDomEvent)(e, "scroll", () => {
                        t({
                            type: "close",
                            src: "scroll"
                        })
                    }, {
                        passive: !0,
                        capture: !0
                    }));
                    return () => {
                        r.forEach(e => null == e ? void 0 : e())
                    }
                },
                trackStore: e => {
                    let t, {
                        prop: o,
                        send: n
                    } = e;
                    return queueMicrotask(() => {
                        t = v.subscribe(() => {
                            v.get("id") !== o("id") && n({
                                type: "close",
                                src: "id.change"
                            })
                        })
                    }), () => null == t ? void 0 : t()
                },
                trackEscapeKey: e => {
                    let {
                        send: t,
                        prop: n
                    } = e;
                    if (n("closeOnEscape")) return (0, o.addDomEvent)(document, "keydown", e => {
                        (0, o.isComposingEvent)(e) || "Escape" === e.key && (e.stopPropagation(), t({
                            type: "close",
                            src: "keydown.escape"
                        }))
                    }, !0)
                },
                waitForOpenDelay: e => {
                    let {
                        send: t,
                        prop: o
                    } = e, n = setTimeout(() => {
                        t({
                            type: "after.openDelay"
                        })
                    }, o("openDelay"));
                    return () => clearTimeout(n)
                },
                waitForCloseDelay: e => {
                    let {
                        send: t,
                        prop: o
                    } = e, n = setTimeout(() => {
                        t({
                            type: "after.closeDelay"
                        })
                    }, o("closeDelay"));
                    return () => clearTimeout(n)
                }
            }
        }
    }), y = (0, a.createProps)()(["aria-label", "closeDelay", "closeOnEscape", "closeOnPointerDown", "closeOnScroll", "closeOnClick", "dir", "disabled", "getRootNode", "id", "ids", "interactive", "onOpenChange", "defaultOpen", "open", "openDelay", "positioning"]);
    (0, s.createSplitProps)(y), e.s(["anatomy", () => l, "connect", () => g, "machine", () => m])
}]);

//# debugId=a451ff75-04cd-4894-0722-441754b0089b
//# sourceMappingURL=2d538cc8ccf1185b.js.map