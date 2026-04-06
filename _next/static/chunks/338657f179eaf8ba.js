;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f317ecb3-69e6-7b55-6bfa-58234393f8d5")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 230840, e => {
    "use strict";

    function t(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    e.s(["_", () => t])
}, 833288, 279511, 635398, e => {
    "use strict";
    var t = e.i(841158),
        n = new WeakMap,
        i = new WeakMap,
        o = {},
        a = 0,
        r = e => e && (e.host || r(e.parentNode)),
        s = new Set(["script", "output", "status", "next-route-announcer"]),
        l = function(e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (Array.isArray(e) ? e[0] : e).ownerDocument.body,
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "data-aria-hidden",
                c = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (l) return ((e, l) => {
                let {
                    parentNode: d,
                    markerName: c,
                    controlAttribute: u,
                    followControlledElements: p = !0
                } = l, g = (Array.isArray(e) ? e : [e]).map(e => {
                    if (d.contains(e)) return e;
                    let t = r(e);
                    return t && d.contains(t) ? t : (console.error("[zag-js > ariaHidden] target", e, "in not contained inside", d, ". Doing nothing"), null)
                }).filter(e => !!e);
                o[c] || (o[c] = new WeakMap);
                let h = o[c],
                    v = [],
                    m = new Set,
                    f = new Set(g),
                    b = e => {
                        !e || m.has(e) || (m.add(e), b(e.parentNode))
                    };
                g.forEach(e => {
                    b(e), p && (0, t.isHTMLElement)(e) && (0, t.findControlledElements)(e, e => {
                        b(e)
                    })
                });
                let O = e => {
                    !e || f.has(e) || Array.prototype.forEach.call(e.children, e => {
                        if (m.has(e)) O(e);
                        else try {
                            if (s.has(e.localName) || "status" === e.role || e.hasAttribute("aria-live") || e.matches("[data-live-announcer]")) return;
                            let t = e.getAttribute(u),
                                o = "true" === t,
                                a = (n.get(e) || 0) + 1,
                                r = (h.get(e) || 0) + 1;
                            n.set(e, a), h.set(e, r), v.push(e), 1 === a && o && i.set(e, !0), 1 === r && e.setAttribute(c, ""), o || e.setAttribute(u, "true")
                        } catch (t) {
                            console.error("[zag-js > ariaHidden] cannot operate on ", e, t)
                        }
                    })
                };
                return O(d), m.clear(), a++, () => {
                    v.forEach(e => {
                        let t = n.get(e) - 1,
                            o = h.get(e) - 1;
                        n.set(e, t), h.set(e, o), t || (i.has(e) || e.removeAttribute(u), i.delete(e)), o || e.removeAttribute(c)
                    }), --a || (n = new WeakMap, n = new WeakMap, i = new WeakMap, o = {})
                }
            })(e, {
                parentNode: l,
                markerName: d,
                controlAttribute: "aria-hidden",
                followControlledElements: c
            })
        };

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                defer: n = !0
            } = t,
            i = [];
        return i.push((n ? e => {
            let t = requestAnimationFrame(() => e());
            return () => cancelAnimationFrame(t)
        } : e => e())(() => {
            let t = ("function" == typeof e ? e() : e).filter(Boolean);
            0 !== t.length && i.push(l(t))
        })), () => {
            i.forEach(e => null == e ? void 0 : e())
        }
    }
    e.s(["ariaHidden", () => d], 833288);
    var c = Object.defineProperty,
        u = (e, t, n) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? c(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[i] = n
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
        g = [],
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
                        container: i,
                        tabbableNodes: o
                    } = t;
                    return i.contains(e) || (null == n ? void 0 : n.includes(i)) || o.find(t => t === e) || this.isControlledElement(i, e)
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
                            i = (0, t.getFocusables)(e, {
                                getShadowRoot: this.config.getShadowRoot
                            }),
                            o = n[0],
                            a = n[n.length - 1],
                            r = !1;
                        for (let e = 0; e < n.length; e++)
                            if ((0, t.getTabIndex)(n[e]) > 0) {
                                r = !0;
                                break
                            }
                        return {
                            container: e,
                            tabbableNodes: n,
                            focusableNodes: i,
                            posTabIndexesFound: r,
                            firstTabbableNode: o,
                            lastTabbableNode: a,
                            firstDomTabbableNode: o,
                            lastDomTabbableNode: a,
                            nextTabbableNode: function(e) {
                                let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                    a = n.indexOf(e);
                                if (a >= 0) return n[a + (o ? 1 : -1)];
                                let r = i.indexOf(e);
                                if (!(r < 0)) {
                                    if (o) {
                                        for (let e = r + 1; e < i.length; e++)
                                            if ((0, t.isTabbable)(i[e])) return i[e]
                                    } else
                                        for (let e = r - 1; e >= 0; e--)
                                            if ((0, t.isTabbable)(i[e])) return i[e]
                                }
                            }
                        }
                    }), this.state.tabbableGroups = this.state.containerGroups.filter(e => e.tabbableNodes.length > 0), this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (this.state.containerGroups.find(e => e.posTabIndexesFound) && this.state.containerGroups.length > 1) throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            }
            addListeners() {
                if (this.state.active) return p.activateTrap(this.trapStack, this), this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? b(() => {
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
                    i = this.getOption(e, "onPostActivate"),
                    o = this.getOption(e, "checkCanFocusTrap");
                o || this.updateTabbableNodes(), this.state.active = !0, this.state.paused = !1, this.state.nodeFocusedBeforeActivation = (0, t.getActiveElement)(this.doc), null == n || n();
                let a = () => {
                    o && this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), null == i || i()
                };
                return o ? o(this.state.containers.concat()).then(a, a) : a(), this
            }
            constructor(e, n) {
                var i = this;
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
                        i = this.findContainerIndex(n, e) >= 0;
                    if (i || (0, t.isDocument)(n)) i && (this.state.mostRecentlyFocusedNode = n);
                    else {
                        let n;
                        e.stopImmediatePropagation();
                        let i = !0;
                        if (this.state.mostRecentlyFocusedNode)
                            if ((0, t.getTabIndex)(this.state.mostRecentlyFocusedNode) > 0) {
                                let e = this.findContainerIndex(this.state.mostRecentlyFocusedNode),
                                    {
                                        tabbableNodes: t
                                    } = this.state.containerGroups[e];
                                if (t.length > 0) {
                                    let e = t.findIndex(e => e === this.state.mostRecentlyFocusedNode);
                                    e >= 0 && (this.config.isKeyForward(this.state.recentNavEvent) ? e + 1 < t.length && (n = t[e + 1], i = !1) : e - 1 >= 0 && (n = t[e - 1], i = !1))
                                }
                            } else this.state.containerGroups.some(e => e.tabbableNodes.some(e => (0, t.getTabIndex)(e) > 0)) || (i = !1);
                        else i = !1;
                        i && (n = this.findNextNavNode({
                            target: this.state.mostRecentlyFocusedNode,
                            isBackward: this.config.isKeyBackward(this.state.recentNavEvent)
                        })), n ? this.tryFocus(n) : this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode())
                    }
                    this.state.recentNavEvent = void 0
                }), u(this, "handlePointerDown", e => {
                    let n = (0, t.getEventTarget)(e);
                    this.findContainerIndex(n, e) >= 0 || (m(this.config.clickOutsideDeactivates, e) ? this.deactivate({
                        returnFocus: this.config.returnFocusOnDeactivate
                    }) : m(this.config.allowOutsideClick, e) || e.preventDefault())
                }), u(this, "handleClick", e => {
                    let n = (0, t.getEventTarget)(e);
                    this.findContainerIndex(n, e) >= 0 || m(this.config.clickOutsideDeactivates, e) || m(this.config.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                }), u(this, "handleTabKey", e => {
                    if (this.config.isKeyForward(e) || this.config.isKeyBackward(e)) {
                        this.state.recentNavEvent = e;
                        let t = this.config.isKeyBackward(e),
                            n = this.findNextNavNode({
                                event: e,
                                isBackward: t
                            });
                        n && (v(e) && e.preventDefault(), this.tryFocus(n))
                    }
                }), u(this, "handleEscapeKey", e => {
                    f(e) && !1 !== m(this.config.escapeDeactivates, e) && (e.preventDefault(), this.deactivate())
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
                        }), this.state.mostRecentlyFocusedNode = e, O(e) && e.select()
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
                        i = this.getOption(t, "onPostDeactivate"),
                        o = this.getOption(t, "checkCanReturnFocus"),
                        a = this.getOption(t, "returnFocus", "returnFocusOnDeactivate");
                    null == n || n();
                    let r = () => {
                        b(() => {
                            if (a) {
                                let e = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
                                this.tryFocus(e)
                            }
                            null == i || i()
                        })
                    };
                    return a && o ? o(this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation)).then(r, r) : r(), this
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
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = i.config[e];
                    if ("function" == typeof o && (o = o(...n)), !0 === o && (o = void 0), !o) {
                        if (void 0 === o || !1 === o) return o;
                        throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                    }
                    let a = o;
                    if ("string" == typeof o) {
                        try {
                            a = i.doc.querySelector(o)
                        } catch (t) {
                            throw Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                        }
                        if (!a && !t) throw Error("`".concat(e, "` as selector refers to no known node"))
                    }
                    return a
                }), u(this, "findNextNavNode", e => {
                    let {
                        event: n,
                        isBackward: i = !1
                    } = e, o = e.target || (0, t.getEventTarget)(n);
                    this.updateTabbableNodes();
                    let a = null;
                    if (this.state.tabbableGroups.length > 0) {
                        let e = this.findContainerIndex(o, n),
                            r = e >= 0 ? this.state.containerGroups[e] : void 0;
                        if (e < 0) a = i ? this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode : this.state.tabbableGroups[0].firstTabbableNode;
                        else if (i) {
                            let i = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    firstTabbableNode: t
                                } = e;
                                return o === t
                            });
                            if (i < 0 && ((null == r ? void 0 : r.container) === o || (0, t.isFocusable)(o) && !(0, t.isTabbable)(o) && !(null == r ? void 0 : r.nextTabbableNode(o, !1))) && (i = e), i >= 0) {
                                let e = 0 === i ? this.state.tabbableGroups.length - 1 : i - 1,
                                    n = this.state.tabbableGroups[e];
                                a = (0, t.getTabIndex)(o) >= 0 ? n.lastTabbableNode : n.lastDomTabbableNode
                            } else v(n) || (a = null == r ? void 0 : r.nextTabbableNode(o, !1))
                        } else {
                            let i = this.state.tabbableGroups.findIndex(e => {
                                let {
                                    lastTabbableNode: t
                                } = e;
                                return o === t
                            });
                            if (i < 0 && ((null == r ? void 0 : r.container) === o || (0, t.isFocusable)(o) && !(0, t.isTabbable)(o) && !(null == r ? void 0 : r.nextTabbableNode(o))) && (i = e), i >= 0) {
                                let e = i === this.state.tabbableGroups.length - 1 ? 0 : i + 1,
                                    n = this.state.tabbableGroups[e];
                                a = (0, t.getTabIndex)(o) >= 0 ? n.firstTabbableNode : n.firstDomTabbableNode
                            } else v(n) || (a = null == r ? void 0 : r.nextTabbableNode(o))
                        }
                    } else a = this.getNodeForOption("fallbackFocus");
                    return a
                }), this.trapStack = n.trapStack || g;
                const o = {
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0,
                    followControlledElements: !0,
                    isKeyForward: e => v(e) && !e.shiftKey,
                    isKeyBackward: e => v(e) && e.shiftKey,
                    ...n
                };
                this.doc = o.document || (0, t.getDocument)(Array.isArray(e) ? e[0] : e), this.config = o, this.updateContainerElements(e), this.setupMutationObserver()
            }
        },
        v = e => "Tab" === e.key,
        m = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return "function" == typeof e ? e(...n) : e
        },
        f = e => !e.isComposing && "Escape" === e.key,
        b = e => setTimeout(e, 0),
        O = e => "input" === e.localName && "select" in e && "function" == typeof e.select;

    function y(e) {
        let n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = (0, t.raf)(() => {
                let o = "function" == typeof e ? e() : e;
                if (o) {
                    n = new h(o, {
                        escapeDeactivates: !1,
                        allowOutsideClick: !0,
                        preventScroll: !0,
                        returnFocusOnDeactivate: !0,
                        delayInitialFocus: !1,
                        fallbackFocus: o,
                        ...i,
                        document: (0, t.getDocument)(o)
                    });
                    try {
                        n.activate()
                    } catch {}
                }
            });
        return function() {
            null == n || n.deactivate(), o()
        }
    }
    e.s(["trapFocus", () => y], 279511);
    var E = "data-scroll-lock";

    function C(e) {
        let n = (0, t.getComputedStyle)(e),
            i = null == n ? void 0 : n.scrollbarGutter;
        return "stable" === i || (null == i ? void 0 : i.startsWith("stable ")) === !0
    }

    function T(e) {
        var n;
        let i, o = null != e ? e : document,
            a = null != (n = o.defaultView) ? n : window,
            {
                documentElement: r,
                body: s
            } = o;
        if (s.hasAttribute(E)) return;
        let l = C(r) || C(s),
            d = a.innerWidth - r.clientWidth;
        s.setAttribute(E, "");
        let c = Math.round(r.getBoundingClientRect().left) + r.scrollLeft ? "paddingLeft" : "paddingRight",
            u = [(0, t.setStyleProperty)(r, "--scrollbar-width", "".concat(d, "px")), (0, t.isIos)() ? (() => {
                var e, n;
                let {
                    scrollX: i,
                    scrollY: o,
                    visualViewport: r
                } = a, u = null != (e = null == r ? void 0 : r.offsetLeft) ? e : 0, p = null != (n = null == r ? void 0 : r.offsetTop) ? n : 0, g = {
                    position: "fixed",
                    overflow: "hidden",
                    top: "".concat(-(o - Math.floor(p)), "px"),
                    left: "".concat(-(i - Math.floor(u)), "px"),
                    right: "0"
                };
                !l && d > 0 && (g[c] = "".concat(d, "px"));
                let h = (0, t.setStyle)(s, g);
                return () => {
                    null == h || h(), a.scrollTo({
                        left: i,
                        top: o,
                        behavior: "instant"
                    })
                }
            })() : (i = {
                overflow: "hidden"
            }, !l && d > 0 && (i[c] = "".concat(d, "px")), (0, t.setStyle)(s, i))];
        return () => {
            u.forEach(e => null == e ? void 0 : e()), s.removeAttribute(E)
        }
    }
    e.s(["preventBodyScroll", () => T], 635398)
}, 943517, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(833288),
        i = e.i(30500),
        o = e.i(143713),
        a = e.i(841158),
        r = e.i(279511),
        s = e.i(635398),
        l = e.i(593006),
        d = e.i(409078),
        c = (0, t.createAnatomy)("dialog").parts("trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"),
        u = c.build(),
        p = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "dialog:".concat(e.id, ":positioner")
        },
        g = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.backdrop) ? n : "dialog:".concat(e.id, ":backdrop")
        },
        h = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.content) ? n : "dialog:".concat(e.id, ":content")
        },
        v = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "dialog:".concat(e.id, ":trigger")
        },
        m = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.title) ? n : "dialog:".concat(e.id, ":title")
        },
        f = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.description) ? n : "dialog:".concat(e.id, ":description")
        },
        b = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.closeTrigger) ? n : "dialog:".concat(e.id, ":close")
        },
        O = e => e.getById(h(e));

    function y(e, t) {
        let {
            state: n,
            send: i,
            context: o,
            prop: a,
            scope: r
        } = e, s = a("aria-label"), l = n.matches("open");
        return {
            open: l,
            setOpen(e) {
                n.matches("open") !== e && i({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            getTriggerProps: () => t.button({ ...u.trigger.attrs,
                dir: a("dir"),
                id: v(r),
                "aria-haspopup": "dialog",
                type: "button",
                "aria-expanded": l,
                "data-state": l ? "open" : "closed",
                "aria-controls": h(r),
                onClick(e) {
                    e.defaultPrevented || i({
                        type: "TOGGLE"
                    })
                }
            }),
            getBackdropProps: () => t.element({ ...u.backdrop.attrs,
                dir: a("dir"),
                hidden: !l,
                id: g(r),
                "data-state": l ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({ ...u.positioner.attrs,
                dir: a("dir"),
                id: p(r),
                style: {
                    pointerEvents: l ? void 0 : "none"
                }
            }),
            getContentProps() {
                let e = o.get("rendered");
                return t.element({ ...u.content.attrs,
                    dir: a("dir"),
                    role: a("role"),
                    hidden: !l,
                    id: h(r),
                    tabIndex: -1,
                    "data-state": l ? "open" : "closed",
                    "aria-modal": !0,
                    "aria-label": s || void 0,
                    "aria-labelledby": s || !e.title ? void 0 : m(r),
                    "aria-describedby": e.description ? f(r) : void 0
                })
            },
            getTitleProps: () => t.element({ ...u.title.attrs,
                dir: a("dir"),
                id: m(r)
            }),
            getDescriptionProps: () => t.element({ ...u.description.attrs,
                dir: a("dir"),
                id: f(r)
            }),
            getCloseTriggerProps: () => t.button({ ...u.closeTrigger.attrs,
                dir: a("dir"),
                id: b(r),
                type: "button",
                onClick(e) {
                    e.defaultPrevented || (e.stopPropagation(), i({
                        type: "CLOSE"
                    }))
                }
            })
        }
    }
    var E = (0, i.createMachine)({
            props(e) {
                let {
                    props: t,
                    scope: n
                } = e, i = "alertdialog" === t.role, o = i ? () => n.getById(b(n)) : void 0, a = "boolean" != typeof t.modal || t.modal;
                return {
                    role: "dialog",
                    modal: a,
                    trapFocus: a,
                    preventScroll: a,
                    closeOnInteractOutside: !i,
                    closeOnEscape: !0,
                    restoreFocus: !0,
                    initialFocusEl: o,
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
                    prop: i
                } = e;
                t([() => i("open")], () => {
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
                            prop: i
                        } = e;
                        return (0, o.trackDismissableElement)(() => O(t), {
                            type: "dialog",
                            defer: !0,
                            pointerBlocking: i("modal"),
                            exclude: [t.getById(v(t))],
                            onInteractOutside(e) {
                                var t;
                                null == (t = i("onInteractOutside")) || t(e), i("closeOnInteractOutside") || e.preventDefault()
                            },
                            persistentElements: i("persistentElements"),
                            onFocusOutside: i("onFocusOutside"),
                            onPointerDownOutside: i("onPointerDownOutside"),
                            onRequestDismiss: i("onRequestDismiss"),
                            onEscapeKeyDown(e) {
                                var t;
                                null == (t = i("onEscapeKeyDown")) || t(e), i("closeOnEscape") || e.preventDefault()
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
                        if (n("preventScroll")) return (0, s.preventBodyScroll)(t.getDoc())
                    },
                    trapFocus(e) {
                        let {
                            scope: t,
                            prop: n
                        } = e;
                        if (n("trapFocus")) return (0, r.trapFocus)(() => O(t), {
                            preventScroll: !0,
                            returnFocusOnDeactivate: !!n("restoreFocus"),
                            initialFocus: n("initialFocusEl"),
                            setReturnFocus: e => {
                                var t, i;
                                return null != (i = null == (t = n("finalFocusEl")) ? void 0 : t()) ? i : e
                            },
                            getShadowRoot: !0
                        })
                    },
                    hideContentBelow(e) {
                        let {
                            scope: t,
                            prop: i
                        } = e;
                        if (i("modal")) return (0, n.ariaHidden)(() => [O(t)], {
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
                        (0, a.raf)(() => {
                            t.set("rendered", {
                                title: !!n.getById(m(n)),
                                description: !!n.getById(f(n))
                            })
                        })
                    },
                    syncZIndex(e) {
                        let {
                            scope: t
                        } = e;
                        (0, a.raf)(() => {
                            let e = O(t);
                            if (!e) return;
                            let n = (0, a.getComputedStyle)(e);
                            [t.getById(p(t)), t.getById(g(t))].forEach(e => {
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
                            event: i
                        } = e;
                        n({
                            type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: i
                        })
                    }
                }
            }
        }),
        C = (0, l.createProps)()(["aria-label", "closeOnEscape", "closeOnInteractOutside", "dir", "finalFocusEl", "getRootNode", "getRootNode", "id", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "defaultOpen", "open", "persistentElements", "preventScroll", "restoreFocus", "role", "trapFocus"]);
    (0, d.createSplitProps)(C), e.s(["anatomy", () => c, "connect", () => y, "machine", () => E])
}, 358537, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(541356),
        o = e.i(833288),
        a = e.i(30500),
        r = e.i(143713),
        s = e.i(279511),
        l = e.i(635398),
        d = e.i(593006),
        c = e.i(409078),
        u = (0, t.createAnatomy)("popover").parts("arrow", "arrowTip", "anchor", "trigger", "indicator", "positioner", "content", "title", "description", "closeTrigger"),
        p = u.build(),
        g = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.anchor) ? n : "popover:".concat(e.id, ":anchor")
        },
        h = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.trigger) ? n : "popover:".concat(e.id, ":trigger")
        },
        v = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.content) ? n : "popover:".concat(e.id, ":content")
        },
        m = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.positioner) ? n : "popover:".concat(e.id, ":popper")
        },
        f = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.title) ? n : "popover:".concat(e.id, ":title")
        },
        b = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.description) ? n : "popover:".concat(e.id, ":desc")
        },
        O = e => e.getById(g(e)),
        y = e => e.getById(h(e)),
        E = e => e.getById(v(e)),
        C = e => e.getById(m(e));

    function T(e, t) {
        let {
            state: o,
            context: a,
            send: r,
            computed: s,
            prop: l,
            scope: d
        } = e, c = o.matches("open"), u = a.get("currentPlacement"), O = s("currentPortalled"), y = a.get("renderedElements"), E = (0, i.getPlacementStyles)({ ...l("positioning"),
            placement: u
        });
        return {
            portalled: O,
            open: c,
            setOpen(e) {
                o.matches("open") !== e && r({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            reposition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r({
                    type: "POSITIONING.SET",
                    options: e
                })
            },
            getArrowProps: () => {
                var e, n;
                return t.element({
                    id: null != (n = null == (e = d.ids) ? void 0 : e.arrow) ? n : "popover:".concat(d.id, ":arrow"),
                    ...p.arrow.attrs,
                    dir: l("dir"),
                    style: E.arrow
                })
            },
            getArrowTipProps: () => t.element({ ...p.arrowTip.attrs,
                dir: l("dir"),
                style: E.arrowTip
            }),
            getAnchorProps: () => t.element({ ...p.anchor.attrs,
                dir: l("dir"),
                id: g(d)
            }),
            getTriggerProps: () => t.button({ ...p.trigger.attrs,
                dir: l("dir"),
                type: "button",
                "data-placement": u,
                id: h(d),
                "aria-haspopup": "dialog",
                "aria-expanded": c,
                "data-state": c ? "open" : "closed",
                "aria-controls": v(d),
                onPointerDown(e) {
                    (0, n.isLeftClick)(e) && (0, n.isSafari)() && e.currentTarget.focus()
                },
                onClick(e) {
                    e.defaultPrevented || r({
                        type: "TOGGLE"
                    })
                },
                onBlur(e) {
                    r({
                        type: "TRIGGER_BLUR",
                        target: e.relatedTarget
                    })
                }
            }),
            getIndicatorProps: () => t.element({ ...p.indicator.attrs,
                dir: l("dir"),
                "data-state": c ? "open" : "closed"
            }),
            getPositionerProps: () => t.element({
                id: m(d),
                ...p.positioner.attrs,
                dir: l("dir"),
                style: E.floating
            }),
            getContentProps: () => t.element({ ...p.content.attrs,
                dir: l("dir"),
                id: v(d),
                tabIndex: -1,
                role: "dialog",
                "aria-modal": (0, n.ariaAttr)(l("modal")),
                hidden: !c,
                "data-state": c ? "open" : "closed",
                "data-expanded": (0, n.dataAttr)(c),
                "aria-labelledby": y.title ? f(d) : void 0,
                "aria-describedby": y.description ? b(d) : void 0,
                "data-placement": u
            }),
            getTitleProps: () => t.element({ ...p.title.attrs,
                id: f(d),
                dir: l("dir")
            }),
            getDescriptionProps: () => t.element({ ...p.description.attrs,
                id: b(d),
                dir: l("dir")
            }),
            getCloseTriggerProps: () => {
                var e, n;
                return t.button({ ...p.closeTrigger.attrs,
                    dir: l("dir"),
                    id: null != (n = null == (e = d.ids) ? void 0 : e.closeTrigger) ? n : "popover:".concat(d.id, ":close"),
                    type: "button",
                    "aria-label": "close",
                    onClick(e) {
                        e.defaultPrevented || (e.stopPropagation(), r({
                            type: "CLOSE"
                        }))
                    }
                })
            }
        }
    }
    var F = (0, a.createMachine)({
            props(e) {
                let {
                    props: t
                } = e;
                return {
                    closeOnInteractOutside: !0,
                    closeOnEscape: !0,
                    autoFocus: !0,
                    modal: !1,
                    portalled: !0,
                    ...t,
                    positioning: {
                        placement: "bottom",
                        ...t.positioning
                    }
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
                    currentPlacement: t(() => ({
                        defaultValue: void 0
                    })),
                    renderedElements: t(() => ({
                        defaultValue: {
                            title: !0,
                            description: !0
                        }
                    }))
                }
            },
            computed: {
                currentPortalled: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("modal") || !!t("portalled")
                }
            },
            watch(e) {
                let {
                    track: t,
                    prop: n,
                    action: i
                } = e;
                t([() => n("open")], () => {
                    i(["toggleVisibility"])
                })
            },
            entry: ["checkRenderedElements"],
            states: {
                closed: {
                    on: {
                        "CONTROLLED.OPEN": {
                            target: "open",
                            actions: ["setInitialFocus"]
                        },
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        OPEN: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }]
                    }
                },
                open: {
                    effects: ["trapFocus", "preventScroll", "hideContentBelow", "trackPositioning", "trackDismissableElement", "proxyTabFocus"],
                    on: {
                        "CONTROLLED.CLOSE": {
                            target: "closed",
                            actions: ["setFinalFocus"]
                        },
                        CLOSE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose", "setFinalFocus"]
                        }],
                        TOGGLE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closed",
                            actions: ["invokeOnClose"]
                        }],
                        "POSITIONING.SET": {
                            actions: ["reposition"]
                        }
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
                    trackPositioning(e) {
                        var t;
                        let {
                            context: n,
                            prop: o,
                            scope: a
                        } = e;
                        n.set("currentPlacement", o("positioning").placement);
                        let r = null != (t = O(a)) ? t : y(a);
                        return (0, i.getPlacement)(r, () => C(a), { ...o("positioning"),
                            defer: !0,
                            onComplete(e) {
                                n.set("currentPlacement", e.placement)
                            }
                        })
                    },
                    trackDismissableElement(e) {
                        let {
                            send: t,
                            prop: n,
                            scope: i
                        } = e, o = !0;
                        return (0, r.trackDismissableElement)(() => E(i), {
                            type: "popover",
                            pointerBlocking: n("modal"),
                            exclude: y(i),
                            defer: !0,
                            onEscapeKeyDown(e) {
                                var t;
                                null == (t = n("onEscapeKeyDown")) || t(e), n("closeOnEscape") || e.preventDefault()
                            },
                            onInteractOutside(e) {
                                var t;
                                null == (t = n("onInteractOutside")) || t(e), !e.defaultPrevented && (o = !(e.detail.focusable || e.detail.contextmenu), n("closeOnInteractOutside") || e.preventDefault())
                            },
                            onPointerDownOutside: n("onPointerDownOutside"),
                            onFocusOutside: n("onFocusOutside"),
                            persistentElements: n("persistentElements"),
                            onRequestDismiss: n("onRequestDismiss"),
                            onDismiss() {
                                t({
                                    type: "CLOSE",
                                    src: "interact-outside",
                                    restoreFocus: o
                                })
                            }
                        })
                    },
                    proxyTabFocus(e) {
                        let {
                            prop: t,
                            scope: i
                        } = e;
                        if (!t("modal") && t("portalled")) return (0, n.proxyTabFocus)(() => E(i), {
                            triggerElement: y(i),
                            defer: !0,
                            getShadowRoot: !0,
                            onFocus(e) {
                                e.focus({
                                    preventScroll: !0
                                })
                            }
                        })
                    },
                    hideContentBelow(e) {
                        let {
                            prop: t,
                            scope: n
                        } = e;
                        if (t("modal")) return (0, o.ariaHidden)(() => [E(n), y(n)], {
                            defer: !0
                        })
                    },
                    preventScroll(e) {
                        let {
                            prop: t,
                            scope: n
                        } = e;
                        if (t("modal")) return (0, l.preventBodyScroll)(n.getDoc())
                    },
                    trapFocus(e) {
                        let {
                            prop: t,
                            scope: i
                        } = e;
                        if (t("modal")) return (0, s.trapFocus)(() => E(i), {
                            initialFocus: () => (0, n.getInitialFocus)({
                                root: E(i),
                                getInitialEl: t("initialFocusEl"),
                                enabled: t("autoFocus")
                            }),
                            getShadowRoot: !0
                        })
                    }
                },
                actions: {
                    reposition(e) {
                        var t;
                        let {
                            event: n,
                            prop: o,
                            scope: a,
                            context: r
                        } = e, s = null != (t = O(a)) ? t : y(a);
                        (0, i.getPlacement)(s, () => C(a), { ...o("positioning"),
                            ...n.options,
                            defer: !0,
                            listeners: !1,
                            onComplete(e) {
                                r.set("currentPlacement", e.placement)
                            }
                        })
                    },
                    checkRenderedElements(e) {
                        let {
                            context: t,
                            scope: i
                        } = e;
                        (0, n.raf)(() => {
                            Object.assign(t.get("renderedElements"), {
                                title: !!i.getById(f(i)),
                                description: !!i.getById(b(i))
                            })
                        })
                    },
                    setInitialFocus(e) {
                        let {
                            prop: t,
                            scope: i
                        } = e;
                        t("modal") || (0, n.raf)(() => {
                            let e = (0, n.getInitialFocus)({
                                root: E(i),
                                getInitialEl: t("initialFocusEl"),
                                enabled: t("autoFocus")
                            });
                            null == e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    setFinalFocus(e) {
                        var t, i;
                        let {
                            event: o,
                            scope: a
                        } = e, r = null != (i = o.restoreFocus) ? i : null == (t = o.previousEvent) ? void 0 : t.restoreFocus;
                        (null == r || r) && (0, n.raf)(() => {
                            let e = y(a);
                            null == e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    invokeOnOpen(e) {
                        let {
                            prop: t,
                            flush: n
                        } = e;
                        n(() => {
                            var e;
                            null == (e = t("onOpenChange")) || e({
                                open: !0
                            })
                        })
                    },
                    invokeOnClose(e) {
                        let {
                            prop: t,
                            flush: n
                        } = e;
                        n(() => {
                            var e;
                            null == (e = t("onOpenChange")) || e({
                                open: !1
                            })
                        })
                    },
                    toggleVisibility(e) {
                        let {
                            event: t,
                            send: n,
                            prop: i
                        } = e;
                        n({
                            type: i("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: t
                        })
                    }
                }
            }
        }),
        k = (0, d.createProps)()(["autoFocus", "closeOnEscape", "closeOnInteractOutside", "dir", "getRootNode", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onRequestDismiss", "defaultOpen", "open", "persistentElements", "portalled", "positioning"]);
    (0, c.createSplitProps)(k), e.s(["anatomy", () => u, "connect", () => T, "machine", () => F])
}, 895315, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(30500),
        o = e.i(593006),
        a = e.i(409078),
        r = (0, t.createAnatomy)("avatar").parts("root", "image", "fallback"),
        s = r.build(),
        l = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.root) ? n : "avatar:".concat(e.id)
        },
        d = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.image) ? n : "avatar:".concat(e.id, ":image")
        },
        c = e => e.getById(d(e));

    function u(e, t) {
        let {
            state: n,
            send: i,
            prop: o,
            scope: a
        } = e, r = n.matches("loaded");
        return {
            loaded: r,
            setSrc(e) {
                let t = c(a);
                null == t || t.setAttribute("src", e)
            },
            setLoaded() {
                i({
                    type: "img.loaded",
                    src: "api"
                })
            },
            setError() {
                i({
                    type: "img.error",
                    src: "api"
                })
            },
            getRootProps: () => t.element({ ...s.root.attrs,
                dir: o("dir"),
                id: l(a)
            }),
            getImageProps: () => t.img({ ...s.image.attrs,
                hidden: !r,
                dir: o("dir"),
                id: d(a),
                "data-state": r ? "visible" : "hidden",
                onLoad() {
                    i({
                        type: "img.loaded",
                        src: "element"
                    })
                },
                onError() {
                    i({
                        type: "img.error",
                        src: "element"
                    })
                }
            }),
            getFallbackProps: () => {
                var e, n;
                return t.element({ ...s.fallback.attrs,
                    dir: o("dir"),
                    id: null != (n = null == (e = a.ids) ? void 0 : e.fallback) ? n : "avatar:".concat(a.id, ":fallback"),
                    hidden: r,
                    "data-state": r ? "hidden" : "visible"
                })
            }
        }
    }
    var p = (0, i.createMachine)({
            initialState: () => "loading",
            effects: ["trackImageRemoval", "trackSrcChange"],
            on: {
                "src.change": {
                    target: "loading"
                },
                "img.unmount": {
                    target: "error"
                }
            },
            states: {
                loading: {
                    entry: ["checkImageStatus"],
                    on: {
                        "img.loaded": {
                            target: "loaded",
                            actions: ["invokeOnLoad"]
                        },
                        "img.error": {
                            target: "error",
                            actions: ["invokeOnError"]
                        }
                    }
                },
                error: {
                    on: {
                        "img.loaded": {
                            target: "loaded",
                            actions: ["invokeOnLoad"]
                        }
                    }
                },
                loaded: {
                    on: {
                        "img.error": {
                            target: "error",
                            actions: ["invokeOnError"]
                        }
                    }
                }
            },
            implementations: {
                actions: {
                    invokeOnLoad(e) {
                        var t;
                        let {
                            prop: n
                        } = e;
                        null == (t = n("onStatusChange")) || t({
                            status: "loaded"
                        })
                    },
                    invokeOnError(e) {
                        var t;
                        let {
                            prop: n
                        } = e;
                        null == (t = n("onStatusChange")) || t({
                            status: "error"
                        })
                    },
                    checkImageStatus(e) {
                        var t;
                        let {
                            send: n,
                            scope: i
                        } = e, o = c(i);
                        (null == o ? void 0 : o.complete) && n({
                            type: (t = o).complete && 0 !== t.naturalWidth && 0 !== t.naturalHeight ? "img.loaded" : "img.error",
                            src: "ssr"
                        })
                    }
                },
                effects: {
                    trackImageRemoval(e) {
                        let {
                            send: t,
                            scope: i
                        } = e, o = i.getById(l(i));
                        return (0, n.observeChildren)(o, {
                            callback(e) {
                                Array.from(e[0].removedNodes).find(e => e.nodeType === Node.ELEMENT_NODE && e.matches("[data-scope=avatar][data-part=image]")) && t({
                                    type: "img.unmount"
                                })
                            }
                        })
                    },
                    trackSrcChange(e) {
                        let {
                            send: t,
                            scope: i
                        } = e, o = c(i);
                        return (0, n.observeAttributes)(o, {
                            attributes: ["src", "srcset"],
                            callback() {
                                t({
                                    type: "src.change"
                                })
                            }
                        })
                    }
                }
            }
        }),
        g = (0, o.createProps)()(["dir", "id", "ids", "onStatusChange", "getRootNode"]);
    (0, a.createSplitProps)(g), e.s(["anatomy", () => r, "connect", () => u, "machine", () => p])
}, 570140, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(409078),
        o = e.i(30500),
        a = e.i(593006),
        r = (0, t.createAnatomy)("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator"),
        s = r.build(),
        l = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.root) ? n : "accordion:".concat(e.id)
        },
        d = (e, t) => {
            var n, i, o;
            return null != (o = null == (i = e.ids) || null == (n = i.itemContent) ? void 0 : n.call(i, t)) ? o : "accordion:".concat(e.id, ":content:").concat(t)
        },
        c = (e, t) => {
            var n, i, o;
            return null != (o = null == (i = e.ids) || null == (n = i.itemTrigger) ? void 0 : n.call(i, t)) ? o : "accordion:".concat(e.id, ":trigger:").concat(t)
        },
        u = e => {
            let t = CSS.escape(l(e));
            return (0, n.queryAll)(e.getById(l(e)), "[aria-controls][data-ownedby='".concat(t, "']:not([disabled])"))
        };

    function p(e, t) {
        let {
            send: i,
            context: o,
            prop: a,
            scope: r,
            computed: u
        } = e, p = o.get("focusedValue"), g = o.get("value"), h = a("multiple");

        function v(e) {
            var t;
            return {
                expanded: g.includes(e.value),
                focused: p === e.value,
                disabled: !!(null != (t = e.disabled) ? t : a("disabled"))
            }
        }
        return {
            focusedValue: p,
            value: g,
            setValue: function(e) {
                let t = e;
                !h && t.length > 1 && (t = [t[0]]), i({
                    type: "VALUE.SET",
                    value: t
                })
            },
            getItemState: v,
            getRootProps: () => t.element({ ...s.root.attrs,
                dir: a("dir"),
                id: l(r),
                "data-orientation": a("orientation")
            }),
            getItemProps(e) {
                var i, o, l, d;
                let c = v(e);
                return t.element({ ...s.item.attrs,
                    dir: a("dir"),
                    id: (i = e.value, null != (d = null == (l = r.ids) || null == (o = l.item) ? void 0 : o.call(l, i)) ? d : "accordion:".concat(r.id, ":item:").concat(i)),
                    "data-state": c.expanded ? "open" : "closed",
                    "data-focus": (0, n.dataAttr)(c.focused),
                    "data-disabled": (0, n.dataAttr)(c.disabled),
                    "data-orientation": a("orientation")
                })
            },
            getItemContentProps(e) {
                let i = v(e);
                return t.element({ ...s.itemContent.attrs,
                    dir: a("dir"),
                    role: "region",
                    id: d(r, e.value),
                    "aria-labelledby": c(r, e.value),
                    hidden: !i.expanded,
                    "data-state": i.expanded ? "open" : "closed",
                    "data-disabled": (0, n.dataAttr)(i.disabled),
                    "data-focus": (0, n.dataAttr)(i.focused),
                    "data-orientation": a("orientation")
                })
            },
            getItemIndicatorProps(e) {
                let i = v(e);
                return t.element({ ...s.itemIndicator.attrs,
                    dir: a("dir"),
                    "aria-hidden": !0,
                    "data-state": i.expanded ? "open" : "closed",
                    "data-disabled": (0, n.dataAttr)(i.disabled),
                    "data-focus": (0, n.dataAttr)(i.focused),
                    "data-orientation": a("orientation")
                })
            },
            getItemTriggerProps(e) {
                let {
                    value: o
                } = e, p = v(e);
                return t.button({ ...s.itemTrigger.attrs,
                    type: "button",
                    dir: a("dir"),
                    id: c(r, o),
                    "aria-controls": d(r, o),
                    "aria-expanded": p.expanded,
                    disabled: p.disabled,
                    "data-orientation": a("orientation"),
                    "aria-disabled": p.disabled,
                    "data-state": p.expanded ? "open" : "closed",
                    "data-ownedby": l(r),
                    onFocus() {
                        p.disabled || i({
                            type: "TRIGGER.FOCUS",
                            value: o
                        })
                    },
                    onBlur() {
                        p.disabled || i({
                            type: "TRIGGER.BLUR"
                        })
                    },
                    onClick(e) {
                        p.disabled || ((0, n.isSafari)() && e.currentTarget.focus(), i({
                            type: "TRIGGER.CLICK",
                            value: o
                        }))
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || p.disabled) return;
                        let t = {
                            ArrowDown() {
                                u("isHorizontal") || i({
                                    type: "GOTO.NEXT",
                                    value: o
                                })
                            },
                            ArrowUp() {
                                u("isHorizontal") || i({
                                    type: "GOTO.PREV",
                                    value: o
                                })
                            },
                            ArrowRight() {
                                u("isHorizontal") && i({
                                    type: "GOTO.NEXT",
                                    value: o
                                })
                            },
                            ArrowLeft() {
                                u("isHorizontal") && i({
                                    type: "GOTO.PREV",
                                    value: o
                                })
                            },
                            Home() {
                                i({
                                    type: "GOTO.FIRST",
                                    value: o
                                })
                            },
                            End() {
                                i({
                                    type: "GOTO.LAST",
                                    value: o
                                })
                            }
                        }[(0, n.getEventKey)(e, {
                            dir: a("dir"),
                            orientation: a("orientation")
                        })];
                        t && (t(e), e.preventDefault())
                    }
                })
            }
        }
    }
    var {
        and: g,
        not: h
    } = (0, o.createGuards)(), v = (0, o.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                collapsible: !1,
                multiple: !1,
                orientation: "vertical",
                defaultValue: [],
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: n
            } = e;
            return {
                focusedValue: n(() => ({
                    defaultValue: null,
                    sync: !0,
                    onChange(e) {
                        var n;
                        null == (n = t("onFocusChange")) || n({
                            value: e
                        })
                    }
                })),
                value: n(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var n;
                        null == (n = t("onValueChange")) || n({
                            value: e
                        })
                    }
                }))
            }
        },
        computed: {
            isHorizontal: e => {
                let {
                    prop: t
                } = e;
                return "horizontal" === t("orientation")
            }
        },
        on: {
            "VALUE.SET": {
                actions: ["setValue"]
            }
        },
        states: {
            idle: {
                on: {
                    "TRIGGER.FOCUS": {
                        target: "focused",
                        actions: ["setFocusedValue"]
                    }
                }
            },
            focused: {
                on: {
                    "GOTO.NEXT": {
                        actions: ["focusNextTrigger"]
                    },
                    "GOTO.PREV": {
                        actions: ["focusPrevTrigger"]
                    },
                    "TRIGGER.CLICK": [{
                        guard: g("isExpanded", "canToggle"),
                        actions: ["collapse"]
                    }, {
                        guard: h("isExpanded"),
                        actions: ["expand"]
                    }],
                    "GOTO.FIRST": {
                        actions: ["focusFirstTrigger"]
                    },
                    "GOTO.LAST": {
                        actions: ["focusLastTrigger"]
                    },
                    "TRIGGER.BLUR": {
                        target: "idle",
                        actions: ["clearFocusedValue"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                canToggle: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("collapsible") || !!t("multiple")
                },
                isExpanded: e => {
                    let {
                        context: t,
                        event: n
                    } = e;
                    return t.get("value").includes(n.value)
                }
            },
            actions: {
                collapse(e) {
                    let {
                        context: t,
                        prop: n,
                        event: o
                    } = e, a = n("multiple") ? (0, i.remove)(t.get("value"), o.value) : [];
                    t.set("value", a)
                },
                expand(e) {
                    let {
                        context: t,
                        prop: n,
                        event: o
                    } = e, a = n("multiple") ? (0, i.add)(t.get("value"), o.value) : [o.value];
                    t.set("value", a)
                },
                focusFirstTrigger(e) {
                    var t;
                    let {
                        scope: n
                    } = e;
                    null === (t = (0, i.first)(u(n))) || void 0 === t || t.focus()
                },
                focusLastTrigger(e) {
                    var t;
                    let {
                        scope: n
                    } = e;
                    null === (t = (0, i.last)(u(n))) || void 0 === t || t.focus()
                },
                focusNextTrigger(e) {
                    let {
                        context: t,
                        scope: i
                    } = e, o = t.get("focusedValue");
                    if (!o) return;
                    let a = (0, n.nextById)(u(i), c(i, o));
                    null == a || a.focus()
                },
                focusPrevTrigger(e) {
                    let {
                        context: t,
                        scope: i
                    } = e, o = t.get("focusedValue");
                    if (!o) return;
                    let a = (0, n.prevById)(u(i), c(i, o));
                    null == a || a.focus()
                },
                setFocusedValue(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("focusedValue", n.value)
                },
                clearFocusedValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedValue", null)
                },
                setValue(e) {
                    let {
                        context: t,
                        event: n
                    } = e;
                    t.set("value", n.value)
                },
                coarseValue(e) {
                    let {
                        context: t,
                        prop: n
                    } = e;
                    !n("multiple") && t.get("value").length > 1 && ((0, i.warn)("The value of accordion should be a single value when multiple is false."), t.set("value", [t.get("value")[0]]))
                }
            }
        }
    }), m = (0, a.createProps)()(["collapsible", "dir", "disabled", "getRootNode", "id", "ids", "multiple", "onFocusChange", "onValueChange", "orientation", "value", "defaultValue"]);
    (0, i.createSplitProps)(m);
    var f = (0, a.createProps)()(["value", "disabled"]);
    (0, i.createSplitProps)(f), e.s(["anatomy", () => r, "connect", () => p, "machine", () => v])
}, 301594, e => {
    "use strict";
    var t = e.i(360706),
        n = e.i(841158),
        i = e.i(409078),
        o = e.i(30500),
        a = e.i(593006),
        r = (0, t.createAnatomy)("collapsible").parts("root", "trigger", "content", "indicator"),
        s = r.build(),
        l = e => {
            var t, n;
            return null != (n = null == (t = e.ids) ? void 0 : t.content) ? n : "collapsible:".concat(e.id, ":content")
        },
        d = e => e.getById(l(e));

    function c(e, t) {
        let {
            state: o,
            send: a,
            context: r,
            scope: d,
            prop: c
        } = e, u = o.matches("open") || o.matches("closing"), p = o.matches("open"), g = o.matches("closed"), {
            width: h,
            height: v
        } = r.get("size"), m = !!c("disabled"), f = c("collapsedHeight"), b = c("collapsedWidth"), O = null != f, y = null != b, E = O || y, C = !r.get("initial") && p;
        return {
            disabled: m,
            visible: u,
            open: p,
            measureSize() {
                a({
                    type: "size.measure"
                })
            },
            setOpen(e) {
                o.matches("open") !== e && a({
                    type: e ? "open" : "close"
                })
            },
            getRootProps: () => {
                var e, n;
                return t.element({ ...s.root.attrs,
                    "data-state": p ? "open" : "closed",
                    dir: c("dir"),
                    id: null != (n = null == (e = d.ids) ? void 0 : e.root) ? n : "collapsible:".concat(d.id)
                })
            },
            getContentProps: () => t.element({ ...s.content.attrs,
                id: l(d),
                "data-collapsible": "",
                "data-state": C ? void 0 : p ? "open" : "closed",
                "data-disabled": (0, n.dataAttr)(m),
                "data-has-collapsed-size": (0, n.dataAttr)(E),
                hidden: !u && !E,
                dir: c("dir"),
                style: {
                    "--height": (0, i.toPx)(v),
                    "--width": (0, i.toPx)(h),
                    "--collapsed-height": (0, i.toPx)(f),
                    "--collapsed-width": (0, i.toPx)(b),
                    ...g && O && {
                        overflow: "hidden",
                        minHeight: (0, i.toPx)(f),
                        maxHeight: (0, i.toPx)(f)
                    },
                    ...g && y && {
                        overflow: "hidden",
                        minWidth: (0, i.toPx)(b),
                        maxWidth: (0, i.toPx)(b)
                    }
                }
            }),
            getTriggerProps: () => {
                var e, i;
                return t.element({ ...s.trigger.attrs,
                    id: null != (i = null == (e = d.ids) ? void 0 : e.trigger) ? i : "collapsible:".concat(d.id, ":trigger"),
                    dir: c("dir"),
                    type: "button",
                    "data-state": p ? "open" : "closed",
                    "data-disabled": (0, n.dataAttr)(m),
                    "aria-controls": l(d),
                    "aria-expanded": u || !1,
                    onClick(e) {
                        e.defaultPrevented || m || a({
                            type: p ? "close" : "open"
                        })
                    }
                })
            },
            getIndicatorProps: () => t.element({ ...s.indicator.attrs,
                dir: c("dir"),
                "data-state": p ? "open" : "closed",
                "data-disabled": (0, n.dataAttr)(m)
            })
        }
    }
    var u = (0, o.createMachine)({
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
                    size: t(() => ({
                        defaultValue: {
                            height: 0,
                            width: 0
                        },
                        sync: !0
                    })),
                    initial: t(() => ({
                        defaultValue: !1
                    }))
                }
            },
            refs: () => ({
                cleanup: void 0,
                stylesRef: void 0
            }),
            watch(e) {
                let {
                    track: t,
                    prop: n,
                    action: i
                } = e;
                t([() => n("open")], () => {
                    i(["setInitial", "computeSize", "toggleVisibility"])
                })
            },
            exit: ["clearInitial", "cleanupNode"],
            states: {
                closed: {
                    effects: ["trackTabbableElements"],
                    on: {
                        "controlled.open": {
                            target: "open"
                        },
                        open: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["setInitial", "computeSize", "invokeOnOpen"]
                        }]
                    }
                },
                closing: {
                    effects: ["trackExitAnimation"],
                    on: {
                        "controlled.close": {
                            target: "closed"
                        },
                        "controlled.open": {
                            target: "open"
                        },
                        open: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["setInitial", "invokeOnOpen"]
                        }],
                        close: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnExitComplete"]
                        }, {
                            target: "closed",
                            actions: ["setInitial", "computeSize", "invokeOnExitComplete"]
                        }],
                        "animation.end": {
                            target: "closed",
                            actions: ["invokeOnExitComplete", "clearInitial"]
                        }
                    }
                },
                open: {
                    effects: ["trackEnterAnimation"],
                    on: {
                        "controlled.close": {
                            target: "closing"
                        },
                        close: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "closing",
                            actions: ["setInitial", "computeSize", "invokeOnClose"]
                        }],
                        "size.measure": {
                            actions: ["measureSize"]
                        },
                        "animation.end": {
                            actions: ["clearInitial"]
                        }
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
                    trackEnterAnimation: e => {
                        let t, {
                                send: i,
                                scope: o
                            } = e,
                            a = (0, n.raf)(() => {
                                let e = d(o);
                                if (!e) return;
                                let a = (0, n.getComputedStyle)(e).animationName;
                                if (!a || "none" === a) return void i({
                                    type: "animation.end"
                                });
                                let r = t => {
                                    (0, n.getEventTarget)(t) === e && i({
                                        type: "animation.end"
                                    })
                                };
                                e.addEventListener("animationend", r), t = () => {
                                    e.removeEventListener("animationend", r)
                                }
                            });
                        return () => {
                            a(), null == t || t()
                        }
                    },
                    trackExitAnimation: e => {
                        let t, {
                                send: i,
                                scope: o
                            } = e,
                            a = (0, n.raf)(() => {
                                let e = d(o);
                                if (!e) return;
                                let a = (0, n.getComputedStyle)(e).animationName;
                                if (!a || "none" === a) return void i({
                                    type: "animation.end"
                                });
                                let r = t => {
                                    (0, n.getEventTarget)(t) === e && i({
                                        type: "animation.end"
                                    })
                                };
                                e.addEventListener("animationend", r);
                                let s = (0, n.setStyle)(e, {
                                    animationFillMode: "forwards"
                                });
                                t = () => {
                                    e.removeEventListener("animationend", r), (0, n.nextTick)(() => s())
                                }
                            });
                        return () => {
                            a(), null == t || t()
                        }
                    },
                    trackTabbableElements: e => {
                        let {
                            scope: t,
                            prop: i
                        } = e;
                        if (!i("collapsedHeight") && !i("collapsedWidth")) return;
                        let o = d(t);
                        if (!o) return;
                        let a = () => {
                                let e = (0, n.getTabbables)(o).map(e => (0, n.setAttribute)(e, "inert", ""));
                                return () => {
                                    e.forEach(e => e())
                                }
                            },
                            r = a(),
                            s = (0, n.observeChildren)(o, {
                                callback() {
                                    r(), r = a()
                                }
                            });
                        return () => {
                            r(), s()
                        }
                    }
                },
                actions: {
                    setInitial: e => {
                        let {
                            context: t,
                            flush: n
                        } = e;
                        n(() => {
                            t.set("initial", !0)
                        })
                    },
                    clearInitial: e => {
                        let {
                            context: t
                        } = e;
                        t.set("initial", !1)
                    },
                    cleanupNode: e => {
                        let {
                            refs: t
                        } = e;
                        t.set("stylesRef", null)
                    },
                    measureSize: e => {
                        let {
                            context: t,
                            scope: n
                        } = e, i = d(n);
                        if (!i) return;
                        let {
                            height: o,
                            width: a
                        } = i.getBoundingClientRect();
                        t.set("size", {
                            height: o,
                            width: a
                        })
                    },
                    computeSize: e => {
                        var t;
                        let {
                            refs: i,
                            scope: o,
                            context: a
                        } = e;
                        null == (t = i.get("cleanup")) || t();
                        let r = (0, n.raf)(() => {
                            let e = d(o);
                            if (!e) return;
                            let t = e.hidden;
                            e.style.animationName = "none", e.style.animationDuration = "0s", e.hidden = !1;
                            let n = e.getBoundingClientRect();
                            a.set("size", {
                                height: n.height,
                                width: n.width
                            }), a.get("initial") && (e.style.animationName = "", e.style.animationDuration = ""), e.hidden = t
                        });
                        i.set("cleanup", r)
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
                    invokeOnExitComplete: e => {
                        var t;
                        let {
                            prop: n
                        } = e;
                        null == (t = n("onExitComplete")) || t()
                    },
                    toggleVisibility: e => {
                        let {
                            prop: t,
                            send: n
                        } = e;
                        n({
                            type: t("open") ? "controlled.open" : "controlled.close"
                        })
                    }
                }
            }
        }),
        p = (0, a.createProps)()(["dir", "disabled", "getRootNode", "id", "ids", "collapsedHeight", "collapsedWidth", "onExitComplete", "onOpenChange", "defaultOpen", "open"]);
    (0, i.createSplitProps)(p), e.s(["anatomy", () => r, "connect", () => c, "machine", () => u])
}]);

//# debugId=f317ecb3-69e6-7b55-6bfa-58234393f8d5
//# sourceMappingURL=2f1819f3b9a99c46.js.map