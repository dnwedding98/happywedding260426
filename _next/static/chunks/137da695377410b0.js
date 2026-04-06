;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "c50c9afa-a6ce-ece8-b9bd-e435ceb2314a")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 57222, 703135, 525006, 941387, 879205, e => {
    "use strict";
    let t;
    var a, r, i, o, l, n, s, d, c, u, g, p, h, m, f, v, b, x, y, S, k, C, I, w, E, P, V, T, R, z, _, O, A, N, F, D, L, W, M, B, H, j, U, G, q, Y, K, X, $, Z, J, Q, ee, et, ea, er, ei, eo, el, en, es, ed, ec, eu, eg, ep = new Map("WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,WebkitUserSelect,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,anchorName,anchorScope,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationRange,animationRangeEnd,animationRangeStart,animationTimeline,animationTimingFunction,appearance,aspectRatio,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockSize,border,borderBlock,borderBlockColor,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBlockStyle,borderBlockWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineColor,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderInlineStyle,borderInlineWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,clipRule,color,colorInterpolationFilters,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,counterIncrement,counterReset,counterSet,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fieldSizing,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontSynthesisPosition,fontSynthesisSmallCaps,fontSynthesisStyle,fontSynthesisWeight,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontVariationSettings,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,interpolateSize,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lightingColor,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,marker,markerEnd,markerMid,markerStart,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overlay,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,positionAnchor,positionArea,positionTry,positionTryFallbacks,positionTryOrder,positionVisibility,printColorAdjust,quotes,r,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,rx,ry,scale,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,scrollbarColor,scrollbarGutter,scrollbarWidth,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textBox,textBoxEdge,textBoxTrim,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textSpacingTrim,textTransform,textUnderlineOffset,textUnderlinePosition,textWrap,textWrapMode,textWrapStyle,timelineScope,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionBehavior,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,vectorEffect,verticalAlign,viewTimeline,viewTimelineAxis,viewTimelineInset,viewTimelineName,viewTransitionName,visibility,whiteSpace,whiteSpaceCollapse,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom,alignmentBaseline,baselineShift,colorInterpolation,colorRendering,glyphOrientationVertical".split(",").concat("".split(",")).map(e => [e, !0])),
        eh = /&|@/,
        em = (eu = e => ep.has(e) || e.startsWith("--") || eh.test(e), t = Object.create(null), e => (void 0 === t[e] && (t[e] = eu(e)), t[e])),
        ef = e.i(453852);

    function ev(e, t) {
        let a = {};
        for (let r in e) {
            let i = t(r, e[r]);
            a[i[0]] = i[1]
        }
        return a
    }
    var eb = e.i(875111);

    function ex(e, t) {
        let a = {};
        return (0, eb.walkObject)(e, (e, t) => {
            e && (a[t.join(".")] = e.value)
        }, {
            stop: t
        }), a
    }
    var ey = e.i(855404),
        eS = Object.defineProperty,
        ek = (e, t, a) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? eS(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[r] = a
        };

    function eC(e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        let t = typeof e;
        if ("string" === t) return "s:".concat(e);
        if ("number" === t) return "n:".concat(e);
        if ("boolean" === t) return "b:".concat(e);
        if ("function" === t) return "f:".concat(e.name || "anonymous");
        if (Array.isArray(e)) return "a:[".concat(e.map(eC).join(","), "]");
        if ("object" === t) {
            let t = Object.keys(e).sort();
            return "o:{".concat(t.map(t => "".concat(t, ":").concat(eC(e[t]))).join(","), "}")
        }
        return String(e)
    }
    class eI {
        get(e) {
            let t = this.cache.get(e);
            return void 0 !== t && (this.cache.delete(e), this.cache.set(e, t)), t
        }
        set(e, t) {
            if (this.cache.has(e)) this.cache.delete(e);
            else if (this.cache.size >= this.maxSize) {
                let e = this.cache.keys().next().value;
                void 0 !== e && this.cache.delete(e)
            }
            this.cache.set(e, t)
        }
        clear() {
            this.cache.clear()
        }
        constructor(e = 500) {
            ek(this, "cache", new Map), ek(this, "maxSize"), this.maxSize = e
        }
    }
    let ew = e => {
        let t = new eI;
        return function() {
            for (var a = arguments.length, r = Array(a), i = 0; i < a; i++) r[i] = arguments[i];
            let o = 1 === r.length ? eC(r[0]) : r.map(eC).join("|"),
                l = t.get(o);
            return void 0 === l && (l = e.apply(this, r), t.set(o, l)), l
        }
    };

    function eE(e) {
        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
        for (let t of a) ! function e(t, a) {
            if (null == a) return t;
            for (let r of Object.keys(a))
                if (void 0 !== a[r] && "__proto__" !== r)
                    if (!(0, ey.isObject)(t[r]) && (0, ey.isObject)(a[r])) Object.assign(t, {
                        [r]: a[r]
                    });
                    else if (t[r] && (0, ey.isObject)(a[r])) e(t[r], a[r]);
            else if (Array.isArray(a[r]) && Array.isArray(t[r])) {
                let i = 0;
                for (; i < a[r].length; i++)(0, ey.isObject)(t[r][i]) && (0, ey.isObject)(a[r][i]) ? e(t[r][i], a[r][i]) : t[r][i] = a[r][i]
            } else Object.assign(t, {
                [r]: a[r]
            });
            return t
        }(e, t);
        return e
    }
    var eP = e.i(186510),
        eV = e.i(403541),
        eT = e.i(230840);

    function eR() {
        let e = (0, eT._)(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]);
        return eR = function() {
            return e
        }, e
    }

    function ez() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = new RegExp(String.raw(eR())),
            a = new RegExp("".concat("px", "|").concat("em", "|").concat("rem")),
            r = e.match(new RegExp("".concat(t.source, "(").concat(a.source, ")")));
        return null == r ? void 0 : r[1]
    }

    function e_() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("number" == typeof e) return "".concat(e, "px");
        let t = ez(e);
        return t && "px" !== t ? "em" === t || "rem" === t ? "".concat(16 * parseFloat(e)).concat("px") : void 0 : e
    }

    function eO() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = ez(e);
        return t && "rem" !== t ? "em" === t ? "".concat(parseFloat(e)).concat("rem") : "px" === t ? "".concat(parseFloat(e) / 16).concat("rem") : void 0 : e
    }

    function eA(e) {
        var t;
        let a = parseFloat(null != (t = e_(e)) ? t : "") - .04;
        return eO("".concat(a, "px"))
    }

    function eN(e) {
        let {
            min: t,
            max: a
        } = e;
        return null == t && null == a ? "" : ["@media screen", t && "(min-width: ".concat(t, ")"), a && "(max-width: ".concat(a, ")")].filter(Boolean).join(" and ")
    }
    let eF = /^@|&|&$/,
        eD = ["value", "type", "description"],
        eL = function() {
            for (var e, t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
            let i = eE({}, ...a.map(function e(t) {
                if (null === t || "object" != typeof t) return t;
                if (Array.isArray(t)) return t.map(t => e(t));
                let a = Object.create(Object.getPrototypeOf(t));
                for (let r of Object.keys(t)) a[r] = e(t[r]);
                return a
            }));
            return (null == (e = i.theme) ? void 0 : e.tokens) && (0, eb.walkObject)(i.theme.tokens, e => {
                let t = Object.keys(e).filter(e => !eD.includes(e)).length > 0,
                    a = eD.some(t => null != e[t]);
                return t && a && (e.DEFAULT || (e.DEFAULT = {}), eD.forEach(t => {
                    var a;
                    null != e[t] && ((a = e.DEFAULT)[t] || (a[t] = e[t]), delete e[t])
                })), e
            }, {
                stop: e => e && "object" == typeof e && !Array.isArray(e) && Object.keys(e).some(e => eD.includes(e) || e !== e.toLowerCase() && e !== e.toUpperCase())
            }), i
        },
        eW = Object.freeze(Object.create(null)),
        eM = Object.freeze([]);

    function eB() {
        return Object.create(null)
    }
    let eH = e => ({
            minMax: RegExp("(!?\\(\\s*min(-device-)?-".concat(e, ")(.|\n)+\\(\\s*max(-device)?-").concat(e), "i"),
            min: RegExp("\\(\\s*min(-device)?-".concat(e), "i"),
            maxMin: RegExp("(!?\\(\\s*max(-device)?-".concat(e, ")(.|\n)+\\(\\s*min(-device)?-").concat(e), "i"),
            max: RegExp("\\(\\s*max(-device)?-".concat(e), "i")
        }),
        ej = eH("width"),
        eU = eH("height"),
        eG = e => ({
            isMin: e5(e.minMax, e.maxMin, e.min),
            isMax: e5(e.maxMin, e.minMax, e.max)
        }),
        {
            isMin: eq,
            isMax: eY
        } = eG(ej),
        {
            isMin: eK,
            isMax: eX
        } = eG(eU),
        e$ = /print/i,
        eZ = /^print$/i,
        eJ = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/,
        eQ = /(\d)/,
        e0 = Number.MAX_VALUE,
        e1 = {
            ch: 8.8984375,
            em: 16,
            rem: 16,
            ex: 8.296875,
            px: 1
        };

    function e2(e) {
        let t = eJ.exec(e) || (eq(e) || eK(e) ? eQ.exec(e) : null);
        return t ? "0" === t[0] ? 0 : parseFloat(t[1]) * (e1[t[2]] || 1) : e0
    }

    function e5(e, t, a) {
        return r => e.test(r) || !t.test(r) && a.test(r)
    }
    let e3 = ew((e, t) => {
        var a, r;
        let i, o, l, n, s = (a = e, r = t, i = e$.test(a), o = eZ.test(a), l = e$.test(r), n = eZ.test(r), i && l ? !o && n ? 1 : o && !n ? -1 : a.localeCompare(r) : i ? 1 : l ? -1 : null);
        if (null !== s) return s;
        let d = eq(e) || eK(e),
            c = eY(e) || eX(e),
            u = eq(t) || eK(t),
            g = eY(t) || eX(t);
        if (d && g) return -1;
        if (c && u) return 1;
        let p = e2(e),
            h = e2(t);
        return p === e0 && h === e0 ? e.localeCompare(t) : p === e0 ? 1 : h === e0 ? -1 : p !== h ? p > h ? c ? -1 : 1 : c ? 1 : -1 : e.localeCompare(t)
    });

    function e4(e) {
        return e.sort((e, t) => {
            let [a] = e, [r] = t;
            return e3(a, r)
        })
    }
    let e6 = /\s*!(important)?/i,
        e8 = ew(e => !!(0, ey.isString)(e) && e6.test(e)),
        e7 = ew(e => (0, ey.isString)(e) ? e.replace(e6, "").trim() : e);

    function e9(e) {
        var t;
        let {
            transform: a,
            conditions: r,
            normalize: i
        } = e, o = (t = e, ew(function() {
            let e;
            for (var a = arguments.length, r = Array(a), i = 0; i < a; i++) r[i] = arguments[i];
            return eE({}, ...1 === (e = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return t.filter(e => !!(0, ey.isObject)(e) && Object.keys((0, ef.compact)(e)).length > 0)
            }(...r)).length ? e : e.map(e => t.normalize(e)))
        }));
        return ew(function() {
            for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
            let n = i(o(...t)),
                s = eB();
            return (0, eb.walkObject)(n, (e, t) => {
                    var i;
                    let o = e8(e);
                    if (null == e) return;
                    let [l, ...n] = r.sort(t).map(r.resolve);
                    o && (e = e7(e));
                    let d = null != (i = a(l, e)) ? i : eW;
                    d = (0, eb.walkObject)(d, e => (0, ey.isString)(e) && o ? "".concat(e, " !important") : e, {
                            getKey: e => r.expandAtRule(e)
                        }),
                        function(e, t, a) {
                            let r = e;
                            for (let e of t) e && (r[e] || (r[e] = eB()), r = r[e]);
                            eE(r, a)
                        }(s, n.flat(), d)
                }),
                function e(t) {
                    let a = [],
                        r = [],
                        i = {};
                    for (let [o, l] of Object.entries(t)) o.startsWith("@media") ? a.push([o, l]) : o.startsWith("@container") ? r.push([o, l]) : (0, ey.isObject)(l) ? i[o] = e(l) : i[o] = l;
                    let o = e4(a),
                        l = e4(r);
                    return { ...i,
                        ...Object.fromEntries(o),
                        ...Object.fromEntries(l)
                    }
                }(s)
        })
    }
    var te = e.i(87065),
        tt = e.i(792506);
    let ta = e => ({
            base: eW,
            variants: eW,
            defaultVariants: eW,
            compoundVariants: [],
            ...e
        }),
        tr = {
            reset: "reset",
            base: "base",
            tokens: "tokens",
            recipes: "recipes"
        },
        ti = {
            reset: 0,
            base: 1,
            tokens: 2,
            recipes: 3
        },
        to = function() {
            var e, t;
            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW,
                r = (null != (e = a.slots) ? e : []).map(e => {
                    var t, r, i;
                    return [e, {
                        base: null != (r = null == (t = a.base) ? void 0 : t[e]) ? r : eW,
                        variants: eB(),
                        defaultVariants: null != (i = a.defaultVariants) ? i : eW,
                        compoundVariants: a.compoundVariants ? tl(a.compoundVariants, e) : eM
                    }]
                });
            for (let [e, i] of Object.entries(null != (t = a.variants) ? t : {}))
                for (let [t, a] of Object.entries(i)) r.forEach(r => {
                    var i, o;
                    let [l, n] = r;
                    null != (i = n.variants)[e] || (i[e] = {}), n.variants[e][t] = null != (o = a[l]) ? o : eW
                });
            return Object.fromEntries(r)
        },
        tl = (e, t) => e.filter(e => e.css[t]).map(e => ({ ...e,
            css: e.css[t]
        })),
        tn = /[^a-zA-Z0-9_\u0081-\uffff-]/g,
        ts = /[A-Z]/g;

    function td(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                fallback: a = "",
                prefix: r = ""
            } = t,
            i = ["-", r, "".concat(e).replace(tn, e => "\\".concat(e))].filter(Boolean).join("-").replace(ts, e => "-".concat(e.toLowerCase()));
        return {
            var: i,
            ref: "var(".concat(i).concat(a ? ", ".concat(a) : "", ")")
        }
    }
    let tc = /([\0-\x1f\x7f]|^-?\d)|^-$|^-|[^\x80-\uFFFF\w-]/g,
        tu = function(e, t) {
            return t ? "\0" === e ? "�" : "-" === e && 1 === e.length ? "\\-" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) : "\\" + e
        },
        tg = e => (e + "").replace(tc, tu),
        tp = (e, t) => {
            let a = "",
                r = 0,
                i = "char",
                o = "",
                l = "",
                n = [];
            for (; r < e.length;) {
                var s, d, c, u;
                let g = e[r];
                if ("{" === g) {
                    let i = e.indexOf("}", r);
                    if (-1 === i) break;
                    let o = e.slice(r + 1, i),
                        l = t(o);
                    a += null != l ? l : o, r = i + 1;
                    continue
                }
                if ("token" === i && "," === g) {
                    "" === e[r] && r++, i = "fallback", n.push(i);
                    let s = t(o);
                    (null == s ? void 0 : s.endsWith(")")) && (a += s.slice(0, -1)), o = "", l = "";
                    continue
                }
                if ("fallback" === i && ", var(" === l + g) {
                    let t = th(e.slice(r + 1)) + r + 1,
                        o = e.slice(r + 1, t);
                    if (-1 === t) break;
                    a += ", var(" + o + ")", r = t + 1, i = null != (s = n.pop()) ? s : i, l = "";
                    continue
                }
                if ("token" === i || "fallback" === i) {
                    if (r++, ")" === g) {
                        i = null != (c = null != (d = n.pop()) ? d : i) ? c : "char", l += g;
                        let e = o ? null != (u = t(o)) ? u : tg(o) : o;
                        if (l) {
                            if (!(l = l.slice(1).trim()).startsWith("token(") && l.endsWith(")") && (l = l.slice(0, -1)), l.includes("token(")) {
                                let e = tp(l, t);
                                e && (l = e.slice(0, -1))
                            } else if (l) {
                                let e = t(l);
                                e && (l = e)
                            }
                        }
                        let r = a.at(-1);
                        l ? (null == r ? void 0 : r.trim()) ? a += e.slice(0, -1) + ", " + l + ")" : a += l : a += e || ")", o = "", l = "", i = "char";
                        continue
                    }
                    "token" === i && (o += g), "fallback" === i && (l += g);
                    continue
                }
                let p = e.indexOf("token(", r);
                if (-1 !== p) {
                    let t = p + 6;
                    a += e.slice(r, p), r = t, i = "token", n.push(i);
                    continue
                }
                a += g, r++
            }
            return a
        },
        th = e => {
            let t = 0,
                a = ["("];
            for (; t < e.length;) {
                let r = e[t];
                if ("(" === r) a.push(r);
                else if (")" === r && (a.pop(), 0 === a.length)) break;
                t++
            }
            return t
        };

    function tm(e) {
        let t = {};
        return e.forEach((e, a) => {
            e instanceof Map ? t[a] = Object.fromEntries(e) : t[a] = e
        }), t
    }
    let tf = /({([^}]*)})/g,
        tv = /[{}]/g,
        tb = /\w+\.\w+/,
        tx = e => {
            if (!(0, ey.isString)(e)) return [];
            let t = e.match(tf);
            return t ? t.map(e => e.replace(tv, "").trim()) : []
        },
        ty = /calc/g;

    function tS(e) {
        return (0, ey.isObject)(e) && e.reference ? e.reference : String(e)
    }
    let tk = function(e) {
            for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
            return a.map(tS).join(" ".concat(e, " ")).replace(ty, "")
        },
        tC = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return "calc(".concat(tk("+", ...t), ")")
        },
        tI = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return "calc(".concat(tk("-", ...t), ")")
        },
        tw = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return "calc(".concat(tk("*", ...t), ")")
        },
        tE = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return "calc(".concat(tk("/", ...t), ")")
        },
        tP = e => {
            let t = tS(e);
            return null == t || Number.isNaN(parseFloat(t)) ? tw(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : "-".concat(t)
        },
        tV = Object.assign(e => ({
            add: function() {
                for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                return tV(tC(e, ...a))
            },
            subtract: function() {
                for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                return tV(tI(e, ...a))
            },
            multiply: function() {
                for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                return tV(tw(e, ...a))
            },
            divide: function() {
                for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                return tV(tE(e, ...a))
            },
            negate: () => tV(tP(e)),
            toString: () => e.toString()
        }), {
            add: tC,
            subtract: tI,
            multiply: tw,
            divide: tE,
            negate: tP
        }),
        tT = new Set(["spacing", "sizes", "borderWidths", "fontSizes", "radii"]),
        tR = [{
            enforce: "pre",
            transform(e) {
                let {
                    prefix: t,
                    allTokens: a,
                    formatCssVar: r,
                    formatTokenName: i,
                    registerToken: o
                } = e;
                a.filter(e => {
                    let {
                        extensions: t
                    } = e;
                    return "spacing" === t.category
                }).forEach(e => {
                    let a = e.path.slice(),
                        l = r(a, t);
                    if ((0, ey.isString)(e.value) && "0rem" === e.value) return;
                    let n = [...e.path],
                        s = n[n.length - 1];
                    null != s && (n[n.length - 1] = "-".concat(s)), o({ ...e,
                        value: tV.negate(l.ref),
                        name: i(n),
                        path: n,
                        extensions: { ...e.extensions,
                            negative: !0,
                            prop: "-".concat(e.extensions.prop),
                            originalPath: a
                        }
                    })
                })
            }
        }, {
            enforce: "post",
            transform(e) {
                let {
                    allTokens: t,
                    registerToken: a,
                    formatTokenName: r
                } = e, i = t.filter(e => {
                    let {
                        extensions: t
                    } = e;
                    return "colors" === t.category
                }), o = new Map, l = new Map;
                i.forEach(e => {
                    let {
                        colorPalette: t
                    } = e.extensions;
                    t && (t.keys.forEach(e => {
                        o.set(r(e), e)
                    }), t.roots.forEach(a => {
                        let i = r(a),
                            n = l.get(i) || [];
                        if (n.push(e), l.set(i, n), e.extensions.default && 1 === a.length) {
                            var s;
                            let e = null == (s = t.keys[0]) ? void 0 : s.filter(Boolean);
                            if (!e.length) return;
                            let i = a.concat(e);
                            o.set(r(i), [])
                        }
                    }))
                }), o.forEach(e => {
                    let t = ["colors", "colorPalette", ...e].filter(Boolean),
                        i = r(t),
                        o = r(t.slice(1));
                    a({
                        name: i,
                        value: i,
                        originalValue: i,
                        path: t,
                        extensions: {
                            condition: "base",
                            originalPath: t,
                            category: "colors",
                            prop: o,
                            virtual: !0
                        }
                    }, "pre")
                })
            }
        }, {
            enforce: "post",
            transform(e) {
                e.allTokens.filter(e => tT.has(e.extensions.category) && !e.extensions.negative).forEach(e => {
                    Object.assign(e.extensions, {
                        pixelValue: e_(e.value)
                    })
                })
            }
        }, {
            enforce: "post",
            transform(e) {
                e.allTokens = e.allTokens.filter(e => "" !== e.value)
            }
        }],
        tz = [{
            type: "extensions",
            enforce: "pre",
            name: "tokens/css-var",
            transform(e, t) {
                let {
                    prefix: a,
                    formatCssVar: r
                } = t, {
                    negative: i,
                    originalPath: o
                } = e.extensions;
                return {
                    cssVar: r((i ? o : e.path).filter(Boolean), a)
                }
            }
        }, {
            enforce: "post",
            type: "value",
            name: "tokens/conditionals",
            transform(e, t) {
                let {
                    prefix: a,
                    formatCssVar: r
                } = t, i = tx(e.value);
                return i.length && i.forEach(t => {
                    let i = r(t.split("."), a);
                    e.value = e.value.replace("{".concat(i.ref, "}"), i)
                }), e.value
            }
        }, {
            type: "extensions",
            enforce: "pre",
            name: "tokens/colors/colorPalette",
            match: e => "colors" === e.extensions.category && !e.extensions.virtual,
            transform(e, t) {
                let a = e.path.slice();
                if (a.pop(), a.shift(), 0 === a.length) {
                    let t = [...e.path];
                    t.shift(), a = t
                }
                if (0 === a.length) return {};
                let r = a.reduce((e, t, a, r) => {
                        let i = r.slice(0, a + 1);
                        return e.push(i), e
                    }, []),
                    i = a[0],
                    o = t.formatTokenName(a),
                    l = e.path.slice(e.path.indexOf(i) + 1).reduce((e, t, a, r) => (e.push(r.slice(a)), e), []);
                return 0 === l.length && l.push([""]), {
                    colorPalette: {
                        value: o,
                        roots: r,
                        keys: l
                    }
                }
            }
        }],
        t_ = e => (0, ey.isObject)(e) && Object.prototype.hasOwnProperty.call(e, "value");

    function tO(e) {
        return "DEFAULT" === e[0] ? e : e.filter(e => "DEFAULT" !== e)
    }

    function tA(e) {
        return e.filter(e => "base" !== e)
    }
    Array.from(new Set(["aspectRatios", "zIndex", "opacity", "colors", "fonts", "fontSizes", "fontWeights", "lineHeights", "letterSpacings", "sizes", "shadows", "spacing", "radii", "cursor", "borders", "borderWidths", "borderStyles", "durations", "easings", "animations", "blurs", "gradients", "breakpoints", "assets"]));
    let tN = e => (t, a) => {
        let r = a.utils.colorMix(t);
        if (r.invalid) return {
            [e]: t
        };
        let i = "--mix-" + e;
        return {
            [i]: r.value,
            [e]: "var(".concat(i, ", ").concat(r.color, ")")
        }
    };

    function tF() {
        let e, t, a;
        for (var r, i, o, l, n, s, d, c, u, g, p, h, m = arguments.length, f = Array(m), v = 0; v < m; v++) f[v] = arguments[v];
        let b = eL(...f),
            {
                theme: x = {},
                utilities: y = {},
                globalCss: S = {},
                cssVarsRoot: k = ":where(:root, :host)",
                cssVarsPrefix: C = "chakra",
                preflight: I
            } = b,
            w = {
                names: t = Object.values(e = null != (i = b.layers) ? i : tr).sort((e, t) => ti[e] - ti[t]),
                atRule: "@layer ".concat(t.join(", "), ";"),
                wrap(t, a) {
                    if (b.disableLayers) return a;
                    let r = e[t];
                    return {
                        ["@layer ".concat(r)]: a
                    }
                }
            },
            E = function(e) {
                let {
                    prefix: t = "",
                    tokens: a = {},
                    semanticTokens: r = {},
                    breakpoints: i = {}
                } = e, o = e => e.join("."), l = [], n = new Map, s = new Map, d = new Map, c = new Map, u = new Map, g = new Map, p = new Map, h = new Map, m = [];

                function f(e, t) {
                    l.push(e), n.set(e.name, e), t && h.forEach(a => {
                        a.enforce === t && w(a, e)
                    })
                }
                let v = i ? {
                        breakpoints: (0, eb.mapObject)(i, e => ({
                            value: e
                        })),
                        sizes: ev(i, (e, t) => ["breakpoint-".concat(e), {
                            value: t
                        }])
                    } : {
                        breakpoints: {},
                        sizes: {}
                    },
                    b = (0, ef.compact)({ ...a,
                        breakpoints: v.breakpoints,
                        sizes: { ...a.sizes,
                            ...v.sizes
                        }
                    });

                function x(e) {
                    return n.get(e)
                }
                let y = {},
                    S = ew((e, t) => {
                        var a;
                        return null != (a = u.get(e)) ? a : t
                    }),
                    k = ew(e => y[e] || null),
                    C = ew(e => tp(e, e => {
                        if (!e) return;
                        if (e.includes("/")) {
                            let t = ((e, t) => {
                                var a;
                                if (!e || "string" != typeof e) return {
                                    invalid: !0,
                                    value: e
                                };
                                let [r, i] = e.split("/");
                                if (!r || !i) return {
                                    invalid: !0,
                                    value: r
                                };
                                let o = t(r),
                                    l = null == (a = x("opacity.".concat(i))) ? void 0 : a.value;
                                if (!l && isNaN(Number(i))) return {
                                    invalid: !0,
                                    value: r
                                };
                                let n = l ? 100 * Number(l) + "%" : "".concat(i, "%"),
                                    s = null != o ? o : r;
                                return {
                                    invalid: !1,
                                    color: s,
                                    value: "color-mix(in srgb, ".concat(s, " ").concat(n, ", transparent)")
                                }
                            })(e, e => S(e));
                            if (t.invalid) throw Error("Invalid color mix at " + e + ": " + t.value);
                            return t.value
                        }
                        let t = S(e);
                        return t || (tb.test(e) ? tg(e) : e)
                    })),
                    I = {
                        prefix: t,
                        allTokens: l,
                        tokenMap: n,
                        registerToken: f,
                        getByName: x,
                        formatTokenName: o,
                        formatCssVar: (e, t) => td(e.join("-"), {
                            prefix: t
                        }),
                        flatMap: u,
                        cssVarMap: d,
                        categoryMap: p,
                        colorPaletteMap: c,
                        getVar: S,
                        getCategoryValues: k,
                        expandReferenceInValue: C
                    };

                function w(e, t) {
                    if (t.extensions.references || (0, ey.isFunction)(e.match) && !e.match(t)) return;
                    let a = e.transform(t, I);
                    switch (!0) {
                        case "extensions" === e.type:
                            Object.assign(t.extensions, a);
                            break;
                        case "value" === e.type:
                            t.value = a;
                            break;
                        default:
                            t[e.type] = a
                    }
                }

                function E(e) {
                    m.forEach(t => {
                        t.enforce === e && t.transform(I)
                    })
                }

                function P(e) {
                    h.forEach(t => {
                        t.enforce === e && l.forEach(e => {
                            w(t, e)
                        })
                    })
                }
                return (0, eb.walkObject)(b, (e, t) => {
                    let a = t.includes("DEFAULT"),
                        r = (t = tO(t))[0],
                        i = o(t),
                        l = (0, ey.isString)(e) ? {
                            value: e
                        } : e,
                        n = {
                            value: l.value,
                            originalValue: l.value,
                            name: i,
                            path: t,
                            extensions: {
                                condition: "base",
                                originalPath: t,
                                category: r,
                                prop: o(t.slice(1))
                            }
                        };
                    a && (n.extensions.default = !0), f(n)
                }, {
                    stop: t_
                }), (0, eb.walkObject)(r, (e, t) => {
                    let a = t.includes("DEFAULT"),
                        r = (t = tA(tO(t)))[0],
                        i = o(t),
                        l = (0, ey.isString)(e.value) ? {
                            value: {
                                base: e.value
                            }
                        } : e,
                        n = {
                            value: l.value.base || "",
                            originalValue: l.value.base || "",
                            name: i,
                            path: t,
                            extensions: {
                                originalPath: t,
                                category: r,
                                conditions: l.value,
                                condition: "base",
                                prop: o(t.slice(1))
                            }
                        };
                    a && (n.extensions.default = !0), f(n)
                }, {
                    stop: t_
                }), ! function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    t.forEach(e => {
                        h.set(e.name, e)
                    })
                }(...tz), ! function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    m.push(...t)
                }(...tR), E("pre"), P("pre"), l.forEach(e => {
                    let t = function(e) {
                        if (!e.extensions.conditions) return;
                        let {
                            conditions: t
                        } = e.extensions, a = [];
                        return (0, eb.walkObject)(t, (t, r) => {
                            let i = tA(r);
                            if (!i.length) return;
                            let o = { ...e,
                                value: t,
                                extensions: { ...e.extensions,
                                    condition: i.join(":")
                                }
                            };
                            a.push(o)
                        }), a
                    }(e);
                    t && 0 !== t.length && t.forEach(e => {
                        f(e)
                    })
                }), l.forEach(e => {
                    let t;
                    if (t = e.value, !tf.test(t)) return;
                    let a = function(e) {
                        let t = tx(e),
                            a = [];
                        for (let e = 0; e < t.length; e++) {
                            let r = x(t[e]);
                            r && a.push(r)
                        }
                        return a
                    }(e.value);
                    e.extensions.references = a.reduce((e, t) => (e[t.name] = t, e), {})
                }), l.forEach(e => {
                    ! function e(t) {
                        var a, r, i, o, l;
                        if (!(null == (a = t.extensions) ? void 0 : a.references)) return null != (o = null == (i = t.extensions) || null == (r = i.cssVar) ? void 0 : r.ref) ? o : t.value;
                        let n = null != (l = t.extensions.references) ? l : {},
                            s = t.value,
                            d = Object.keys(n);
                        for (let t = 0; t < d.length; t++) {
                            let a = d[t],
                                r = n[a];
                            if (r.extensions.conditions) continue;
                            let i = e(r);
                            s = s.replace("{".concat(a, "}"), i)
                        }
                        return t.value = s, delete t.extensions.references, t.value
                    }(e)
                }), E("post"), P("post"), l.forEach(e => {
                    ! function(e) {
                        let {
                            condition: t
                        } = e.extensions;
                        t && (s.has(t) || s.set(t, new Set), s.get(t).add(e))
                    }(e),
                    function(e) {
                        let {
                            category: t,
                            prop: a
                        } = e.extensions;
                        t && (p.has(t) || p.set(t, new Map), p.get(t).set(a, e))
                    }(e),
                    function(e) {
                        let {
                            condition: t,
                            negative: a,
                            virtual: r,
                            cssVar: i
                        } = e.extensions;
                        !a && !r && t && i && (d.has(t) || d.set(t, new Map), d.get(t).set(i.var, e.value))
                    }(e),
                    function(e) {
                        let {
                            category: t,
                            prop: a,
                            cssVar: r,
                            negative: i
                        } = e.extensions;
                        if (!t) return;
                        g.has(t) || g.set(t, new Map);
                        let o = i ? e.extensions.conditions ? e.originalValue : e.value : r.ref;
                        g.get(t).set(a, o), u.set([t, a].join("."), o)
                    }(e),
                    function(e) {
                        let {
                            colorPalette: t,
                            virtual: a,
                            default: r
                        } = e.extensions;
                        t && !a && t.roots.forEach(a => {
                            var i, l, n;
                            let s, d = o(a);
                            c.has(d) || c.set(d, new Map);
                            let u = x(o((i = [...e.path], l = [...a], -1 === (s = i.findIndex((e, t) => l.every((e, a) => i[t + a] === e))) || (i.splice(s, l.length), i.splice(s, 0, "colorPalette")), i)));
                            if (!u || !u.extensions.cssVar) return;
                            let {
                                var: g
                            } = u.extensions.cssVar;
                            if (c.get(d).set(g, e.extensions.cssVar.ref), r && 1 === a.length) {
                                let r = x(o(["colors", "colorPalette"]));
                                if (!r) return;
                                let i = x(o(e.path));
                                if (!i) return;
                                let l = null == (n = t.keys[0]) ? void 0 : n.filter(Boolean);
                                if (!l.length) return;
                                let s = o(a.concat(l));
                                c.has(s) || c.set(s, new Map), c.get(s).set(r.extensions.cssVar.var, i.extensions.cssVar.ref)
                            }
                        })
                    }(e)
                }), y = tm(g), I
            }({
                breakpoints: x.breakpoints,
                tokens: x.tokens,
                semanticTokens: x.semanticTokens,
                prefix: C
            }),
            P = function(e) {
                var t;
                let a, r, i, o = Object.fromEntries(Object.entries(e).sort((e, t) => {
                    let [, a] = e, [, r] = t;
                    return parseInt(a, 10) < parseInt(r, 10) ? -1 : 1
                }).map((e, t, a) => {
                    let [r, i] = e, o = null;
                    if (t <= a.length - 1) {
                        var l;
                        o = null == (l = a[t + 1]) ? void 0 : l[1]
                    }
                    return null != o && (o = eA(o)), [r, {
                        name: r,
                        min: eO(i),
                        max: o
                    }]
                }));

                function l(e) {
                    return eN(o[e])
                }
                let n = Object.fromEntries(Object.entries((r = Object.keys(o), a = [], (t = r).forEach((e, r) => {
                    let i = r,
                        o = t[++i];
                    for (; o;) a.push([e, o]), o = t[++i]
                }), i = a, Object.fromEntries(r.flatMap(e => {
                    let t = o[e],
                        a = ["".concat(e, "Down"), eN({
                            max: eA(t.min)
                        })];
                    return [
                        [e, eN({
                            min: t.min
                        })],
                        ["".concat(e, "Only"), l(e)], a
                    ]
                }).filter(e => {
                    let [, t] = e;
                    return "" !== t
                }).concat(i.map(e => {
                    let [t, a] = e, r = o[t], i = o[a];
                    return ["".concat(t, "To").concat(a.charAt(0).toUpperCase() + a.slice(1)), eN({
                        min: r.min,
                        max: eA(i.min)
                    })]
                }))))));
                return {
                    values: Object.values(o),
                    only: l,
                    keys: function() {
                        return (0, eV.uniq)(["base", ...Object.keys(o)])
                    },
                    conditions: n,
                    getCondition: e => n[e],
                    up: function(e) {
                        return eN({
                            min: o[e].min
                        })
                    },
                    down: function(e) {
                        return eN({
                            max: eA(o[e].min)
                        })
                    }
                }
            }(null != (o = x.breakpoints) ? o : eW),
            V = (e => {
                let {
                    breakpoints: t,
                    conditions: a = {}
                } = e, r = Object.assign({}, ev(a, (e, t) => ["_".concat(e), t]), t.conditions);

                function i() {
                    return Object.keys(r)
                }

                function o(e) {
                    return i().includes(e) || eF.test(e) || e.startsWith("_")
                }
                return {
                    keys: i,
                    sort: ew(e => e.filter(e => "base" !== e).sort((e, t) => {
                        let a = o(e),
                            r = o(t);
                        return a && !r ? 1 : !a && r ? -1 : 0
                    })),
                    has: o,
                    resolve: function(e) {
                        return Reflect.get(r, e) || e
                    },
                    breakpoints: t.keys(),
                    expandAtRule: function(e) {
                        return e.startsWith("@breakpoint") ? t.getCondition(e.replace("@breakpoint ", "")) : e
                    }
                }
            })({
                conditions: null != (l = b.conditions) ? l : eW,
                breakpoints: P
            }),
            T = function(e) {
                let t, a = ev(e.config, (e, t) => [e, t]),
                    r = e.tokens,
                    i = new Map,
                    o = new Map;

                function l(e, t) {
                    a[e] = t, n(e, t)
                }
                let n = (e, t) => {
                        let a = c(t);
                        a && (o.set(e, a), d(e, t))
                    },
                    s = new Map,
                    d = (e, t) => {
                        var a;
                        if (!t) return;
                        let r = c(t, e => 'type:Tokens["'.concat(e, '"]'));
                        if ("object" == typeof r && r.type) return void s.set(e, new Set(["type:".concat(r.type)]));
                        if (r) {
                            let t = new Set(Object.keys(r));
                            s.set(e, t)
                        }
                        let i = null != (a = s.get(e)) ? a : new Set;
                        t.property && s.set(e, i.add('CssProperties["'.concat(t.property, '"]')))
                    },
                    c = (e, t) => {
                        let {
                            values: a
                        } = e, i = e => {
                            let a = null == t ? void 0 : t(e);
                            return a ? {
                                [a]: a
                            } : void 0
                        };
                        if ((0, ey.isString)(a)) {
                            var o, l;
                            return null != (l = null != (o = null == i ? void 0 : i(a)) ? o : r.getCategoryValues(a)) ? l : eW
                        }
                        if (Array.isArray(a)) {
                            let e = {};
                            for (let t = 0; t < a.length; t++) e[a[t]] = a[t];
                            return e
                        }
                        return (0, ey.isFunction)(a) ? a(t ? i : r.getCategoryValues) : a
                    },
                    u = ew((e, t) => ({
                        [e]: e.startsWith("--") ? r.getVar(t, t) : t
                    })),
                    g = Object.assign(r.getVar, {
                        raw: e => r.getByName(e)
                    }),
                    p = ew((e, t) => {
                        var i;
                        let l = m(e);
                        (0, ey.isString)(t) && !t.includes("_EMO_") && (t = r.expandReferenceInValue(t));
                        let n = a[l];
                        if (!n) return u(l, t);
                        let s = null == (i = o.get(l)) ? void 0 : i[t];
                        return n.transform ? n.transform(null != s ? s : t, {
                            raw: t,
                            token: g,
                            utils: {
                                colorMix: e => ((e, t) => {
                                    var a;
                                    if (!e || "string" != typeof e) return {
                                        invalid: !0,
                                        value: e
                                    };
                                    let [r, i] = e.split("/");
                                    if (!r || !i || "currentBg" === r) return {
                                        invalid: !0,
                                        value: r
                                    };
                                    let o = t("colors.".concat(r)),
                                        l = null == (a = t.raw("opacity.".concat(i))) ? void 0 : a.value;
                                    if (!l && isNaN(Number(i))) return {
                                        invalid: !0,
                                        value: r
                                    };
                                    let n = l ? 100 * Number(l) + "%" : "".concat(i, "%"),
                                        s = null != o ? o : r;
                                    return {
                                        invalid: !1,
                                        color: s,
                                        value: "color-mix(in srgb, ".concat(s, " ").concat(n, ", transparent)")
                                    }
                                })(e, g)
                            }
                        }) : u(e, null != s ? s : t)
                    });
                for (let [e, t] of Object.entries(a)) {
                    let {
                        shorthand: a
                    } = null != t ? t : {};
                    a && (Array.isArray(a) ? a : [a]).forEach(t => i.set(t, e))
                }
                for (let [e, i] of (l("colorPalette", {
                        values: Object.keys(t = tm(r.colorPaletteMap)),
                        transform: ew(e => t[e])
                    }), Object.entries(a))) i && n(e, i);
                for (let [e, t] of Object.entries(a)) t && d(e, t);
                let h = i.size > 0,
                    m = ew(e => {
                        var t;
                        return null != (t = i.get(e)) ? t : e
                    });
                return {
                    keys: () => [...Array.from(i.keys()), ...Object.keys(a)],
                    hasShorthand: h,
                    transform: p,
                    shorthands: i,
                    resolveShorthand: m,
                    register: l,
                    getTypes: () => {
                        let e = new Map;
                        for (let [t, a] of s.entries()) {
                            if (0 === a.size) {
                                e.set(t, ["string"]);
                                continue
                            }
                            let r = Array.from(a).map(e => e.startsWith("CssProperties") ? e : e.startsWith("type:") ? e.replace("type:", "") : JSON.stringify(e));
                            e.set(t, r)
                        }
                        return e
                    },
                    addPropertyType: (e, t) => {
                        var a;
                        let r = null != (a = s.get(e)) ? a : new Set;
                        s.set(e, new Set([...r, ...t]))
                    }
                }
            }({
                config: y,
                tokens: E
            });
        ! function() {
            let {
                textStyles: e,
                layerStyles: t,
                animationStyles: a
            } = x;
            for (let [r, i] of Object.entries((0, ef.compact)({
                    textStyle: e,
                    layerStyle: t,
                    animationStyle: a
                }))) {
                let e = ex(null != i ? i : eW, tD);
                T.register(r, {
                    values: Object.keys(e),
                    transform: t => N(e[t])
                })
            }
        }(), T.addPropertyType("animationName", Object.keys(null != (n = x.keyframes) ? n : eW));
        let R = new Set(["css", ...T.keys(), ...V.keys()]),
            z = ew(e => R.has(e) || em(e)),
            _ = e => {
                if (Array.isArray(e)) {
                    let t = eB();
                    for (let a = 0; a < e.length; a++) {
                        let r = e[a];
                        null != r && (t[V.breakpoints[a]] = r)
                    }
                    return t
                }
                return e
            },
            O = function(e) {
                let {
                    utility: t,
                    normalize: a
                } = e, {
                    hasShorthand: r,
                    resolveShorthand: i
                } = t;
                return function(e) {
                    return (0, eb.walkObject)(e, a, {
                        stop: e => Array.isArray(e),
                        getKey: r ? i : void 0
                    })
                }
            }({
                utility: T,
                normalize: _
            }),
            A = function(e) {
                let {
                    conditions: t,
                    isValidProperty: a
                } = e;
                return function(e) {
                    return (0, eb.walkObject)(e, e => e, {
                        getKey: (e, r) => (0, ey.isObject)(r) ? t.has(e) || a(e) ? e : (function(e) {
                            let t = [],
                                a = 0,
                                r = "",
                                i = !1;
                            for (let o = 0; o < e.length; o++) {
                                let l = e[o];
                                if ("\\" === l && !i) {
                                    i = !0, r += l;
                                    continue
                                }
                                if (i) {
                                    i = !1, r += l;
                                    continue
                                }
                                "(" === l ? a++ : ")" === l && a--, "," === l && 0 === a ? (t.push(r.trim()), r = "") : r += l
                            }
                            return r && t.push(r.trim()), t
                        })(e).map(e => {
                            let t, a = e.startsWith("&") ? e.slice(1) : e;
                            return (t = a.toLowerCase()).startsWith(":host-context") || t.startsWith(":host") || t.startsWith("::slotted") ? "".concat(a, " &") : "&".concat(a)
                        }).join(", ") : e
                    })
                }
            }({
                conditions: V,
                isValidProperty: z
            }),
            N = e9({
                transform: T.transform,
                conditions: V,
                normalize: O
            }),
            F = function(e) {
                let {
                    css: t,
                    conditions: a,
                    normalize: r,
                    layers: i
                } = e;
                return function o() {
                    let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = ta(l),
                        {
                            base: s,
                            defaultVariants: d,
                            compoundVariants: c
                        } = n,
                        u = ev(n.variants, (e, t) => [e, ev(t, (e, t) => [e, r(t)])]),
                        g = e9({
                            conditions: a,
                            normalize: r,
                            transform(e, t) {
                                var a;
                                return null == (a = u[e]) ? void 0 : a[t]
                            }
                        }),
                        p = function() {
                            var e, a;
                            let o, l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = r({ ...d,
                                    ...(0, ef.compact)(l)
                                }),
                                u = { ...s
                                };
                            eE(u, g(n));
                            let p = (e = c, a = n, o = eW, e.forEach(e => {
                                Object.entries(e).every(e => {
                                    let [t, r] = e;
                                    return "css" === t || (Array.isArray(r) ? r : [r]).some(e => a[t] === e)
                                }) && (o = t(o, e.css))
                            }), o);
                            return i.wrap("recipes", t(u, p))
                        },
                        h = Object.keys(u),
                        m = ev(u, (e, t) => [e, Object.keys(t)]);
                    return Object.assign(e => t(p(e)), {
                        className: l.className,
                        __cva__: !0,
                        variantMap: m,
                        variantKeys: h,
                        raw: p,
                        config: l,
                        splitVariantProps: e => {
                            let t = (0, tt.omit)(e, ["recipe"]),
                                [a, r] = (0, eP.splitProps)(t, h),
                                i = h.includes("colorPalette"),
                                o = h.includes("orientation");
                            return i || (a.colorPalette = e.colorPalette || d.colorPalette), o && (r.orientation = e.orientation), [a, r]
                        },
                        merge(t) {
                            return o((function(e) {
                                let {
                                    css: t
                                } = e;
                                return function(e, a) {
                                    let r = ta(a.config),
                                        i = (0, eV.uniq)(e.variantKeys, Object.keys(a.variants)),
                                        o = t(e.base, r.base),
                                        l = Object.fromEntries(i.map(a => [a, t(e.config.variants[a], r.variants[a])])),
                                        n = eE(e.config.defaultVariants, r.defaultVariants),
                                        s = [...e.compoundVariants, ...r.compoundVariants];
                                    return {
                                        className: (0, te.cx)(e.className, a.className),
                                        base: o,
                                        variants: l,
                                        defaultVariants: n,
                                        compoundVariants: s
                                    }
                                }
                            })(e)(this, t))
                        }
                    })
                }
            }({
                css: N,
                conditions: V,
                normalize: O,
                layers: w
            }),
            D = function(e) {
                let {
                    cva: t
                } = e;
                return function() {
                    var e;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW,
                        r = Object.entries(to(a)).map(e => {
                            let [a, r] = e;
                            return [a, t(r)]
                        }),
                        i = null != (e = a.variants) ? e : eW,
                        o = Object.keys(i),
                        l = ev(i, (e, t) => [e, Object.keys(t)]),
                        n = {};
                    return a.className && (n = Object.fromEntries(a.slots.map(e => [e, "".concat(a.className, "__").concat(e)]))), Object.assign(function(e) {
                        return Object.fromEntries(r.map(t => {
                            let [a, r] = t;
                            return [a, r(e)]
                        }))
                    }, {
                        variantMap: l,
                        variantKeys: o,
                        splitVariantProps: function(e) {
                            let t = (0, tt.omit)(e, ["recipe"]),
                                [r, i] = (0, eP.splitProps)(t, o),
                                l = o.includes("colorPalette"),
                                n = o.includes("orientation");
                            if (!l) {
                                var s;
                                r.colorPalette = e.colorPalette || (null == (s = a.defaultVariants) ? void 0 : s.colorPalette)
                            }
                            return n && (i.orientation = e.orientation), [r, i]
                        },
                        classNameMap: n
                    })
                }
            }({
                cva: F
            });

        function L() {
            let e = {};
            for (let [t, a] of E.cssVarMap.entries()) {
                let r = Object.fromEntries(a);
                if (0 === Object.keys(r).length) continue;
                let i = "base" === t ? k : V.resolve(t),
                    o = i.startsWith("@");
                eE(e, N(A({
                    [i]: o ? {
                        [k]: r
                    } : r
                })))
            }
            return w.wrap("tokens", e)
        }

        function W() {
            var e;
            let t = Object.assign({}, ev(null != (e = x.keyframes) ? e : eW, (e, t) => ["@keyframes ".concat(e), t]), N(A(S)));
            return w.wrap("base", t)
        }

        function M() {
            let e = function(e) {
                let {
                    preflight: t
                } = e;
                if (!t) return {};
                let {
                    scope: a = "",
                    level: r = "parent"
                } = (0, ey.isObject)(t) ? t: {}, i = "";
                a && "parent" === r ? i = "".concat(a, " ") : a && "element" === r && (i = "&".concat(a));
                let o = {
                        "*": {
                            margin: "0px",
                            padding: "0px",
                            font: "inherit",
                            wordWrap: "break-word",
                            WebkitTapHighlightColor: "transparent"
                        },
                        "*, *::before, *::after, *::backdrop": {
                            boxSizing: "border-box",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "var(--global-color-border, currentColor)"
                        },
                        hr: {
                            height: "0px",
                            color: "inherit",
                            borderTopWidth: "1px"
                        },
                        body: {
                            minHeight: "100dvh",
                            position: "relative"
                        },
                        img: {
                            borderStyle: "none"
                        },
                        "img, svg, video, canvas, audio, iframe, embed, object": {
                            display: "block",
                            verticalAlign: "middle"
                        },
                        iframe: {
                            border: "none"
                        },
                        "img, video": {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        "p, h1, h2, h3, h4, h5, h6": {
                            overflowWrap: "break-word"
                        },
                        "ol, ul": {
                            listStyle: "none"
                        },
                        "code, kbd, pre, samp": {
                            fontSize: "1em"
                        },
                        "button, [type='button'], [type='reset'], [type='submit']": {
                            WebkitAppearance: "button",
                            backgroundColor: "transparent",
                            backgroundImage: "none"
                        },
                        "button, input, optgroup, select, textarea": {
                            color: "inherit"
                        },
                        "button, select": {
                            textTransform: "none"
                        },
                        table: {
                            textIndent: "0px",
                            borderColor: "inherit",
                            borderCollapse: "collapse"
                        },
                        "*::placeholder": {
                            opacity: "unset",
                            color: "#9ca3af",
                            userSelect: "none"
                        },
                        textarea: {
                            resize: "vertical"
                        },
                        summary: {
                            display: "list-item"
                        },
                        small: {
                            fontSize: "80%"
                        },
                        "sub, sup": {
                            fontSize: "75%",
                            lineHeight: 0,
                            position: "relative",
                            verticalAlign: "baseline"
                        },
                        sub: {
                            bottom: "-0.25em"
                        },
                        sup: {
                            top: "-0.5em"
                        },
                        dialog: {
                            padding: "0px"
                        },
                        a: {
                            color: "inherit",
                            textDecoration: "inherit"
                        },
                        "abbr:where([title])": {
                            textDecoration: "underline dotted"
                        },
                        "b, strong": {
                            fontWeight: "bolder"
                        },
                        "code, kbd, samp, pre": {
                            fontSize: "1em",
                            "--font-mono-fallback": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",
                            fontFamily: "var(--global-font-mono, var(--font-mono-fallback))"
                        },
                        'input[type="text"], input[type="email"], input[type="search"], input[type="password"]': {
                            WebkitAppearance: "none",
                            MozAppearance: "none"
                        },
                        "input[type='search']": {
                            WebkitAppearance: "textfield",
                            outlineOffset: "-2px"
                        },
                        "::-webkit-search-decoration, ::-webkit-search-cancel-button": {
                            WebkitAppearance: "none"
                        },
                        "::-webkit-file-upload-button": {
                            WebkitAppearance: "button",
                            font: "inherit"
                        },
                        'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
                            height: "auto"
                        },
                        "input[type='number']": {
                            MozAppearance: "textfield"
                        },
                        ":-moz-ui-invalid": {
                            boxShadow: "none"
                        },
                        ":-moz-focusring": {
                            outline: "auto"
                        },
                        "[hidden]:where(:not([hidden='until-found']))": {
                            display: "none !important"
                        }
                    },
                    l = {
                        [a || "html"]: {
                            lineHeight: 1.5,
                            "--font-fallback": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                            WebkitTextSizeAdjust: "100%",
                            WebkitFontSmoothing: "antialiased",
                            MozOsxFontSmoothing: "grayscale",
                            textRendering: "optimizeLegibility",
                            touchAction: "manipulation",
                            MozTabSize: "4",
                            tabSize: "4",
                            fontFamily: "var(--global-font-body, var(--font-fallback))"
                        }
                    };
                return "element" === r ? Object.assign(l, Object.entries(o).reduce((e, t) => {
                    let [a, r] = t;
                    return e[a] = {
                        [i]: r
                    }, e
                }, {})) : i ? l[i] = o : Object.assign(l, o), l
            }({
                preflight: I
            });
            return w.wrap("reset", e)
        }
        let B = (r = E, a = new Map, r.allTokens.forEach(e => {
                let {
                    cssVar: t,
                    virtual: r,
                    conditions: i
                } = e.extensions, o = i || r ? t.ref : e.value;
                a.set(e.name, {
                    value: o,
                    variable: t.ref
                })
            }), a),
            H = (e, t) => {
                var a;
                return (null == (a = B.get(e)) ? void 0 : a.value) || t
            };

        function j(e) {
            var t;
            return Object.hasOwnProperty.call(null != (t = x.recipes) ? t : eW, e)
        }

        function U(e) {
            var t;
            return Object.hasOwnProperty.call(null != (t = x.slotRecipes) ? t : eW, e)
        }
        H.var = (e, t) => {
            var a;
            return (null == (a = B.get(e)) ? void 0 : a.variable) || t
        };
        let G = [M(), W(), L()],
            q = {
                layerStyles: tL(null != (s = x.layerStyles) ? s : eW),
                textStyles: tL(null != (d = x.textStyles) ? d : eW),
                animationStyles: tL(null != (c = x.animationStyles) ? c : eW),
                tokens: tW(E, Object.keys(null != (u = x.tokens) ? u : eW), (e, t) => !e.extensions.conditions && !t.includes("colorPalette")),
                semanticTokens: tW(E, Object.keys(null != (g = x.semanticTokens) ? g : eW), e => !!e.extensions.conditions),
                keyframes: tM(null != (p = x.keyframes) ? p : eW),
                breakpoints: tM(null != (h = x.breakpoints) ? h : eW)
            };
        return {
            $$chakra: !0,
            _config: b,
            _global: G,
            breakpoints: P,
            tokens: E,
            conditions: V,
            utility: T,
            token: H,
            properties: R,
            layers: w,
            isValidProperty: z,
            splitCssProps: function(e) {
                return (0, eP.splitProps)(e, z)
            },
            normalizeValue: _,
            getTokenCss: L,
            getGlobalCss: W,
            getPreflightCss: M,
            css: N,
            cva: F,
            sva: D,
            getRecipe: function(e, t) {
                var a, r;
                return null != (r = null == (a = x.recipes) ? void 0 : a[e]) ? r : t
            },
            getSlotRecipe: function(e, t) {
                var a, r;
                return null != (r = null == (a = x.slotRecipes) ? void 0 : a[e]) ? r : t
            },
            hasRecipe: function(e) {
                return j(e) || U(e)
            },
            isRecipe: j,
            isSlotRecipe: U,
            query: q
        }
    }
    let tD = e => (0, ey.isObject)(e) && "value" in e,
        tL = e => ({
            list: () => Object.keys(ex(e, tD)),
            search(e) {
                return this.list().filter(t => t.includes(e))
            }
        }),
        tW = (e, t, a) => ({
            categoryKeys: t,
            list(t) {
                let r = e.categoryMap.get(t),
                    i = r ? [...r.entries()] : [],
                    o = [];
                for (let e = 0; e < i.length; e++) {
                    let [t, r] = i[e];
                    a(r, t) && o.push(t)
                }
                return o
            },
            search(e, t) {
                return this.list(e).filter(e => e.includes(t))
            }
        }),
        tM = e => ({
            list: () => Object.keys(e),
            search(e) {
                return this.list().filter(t => t.includes(e))
            }
        });
    var tB = e.i(897547);
    let tH = (e, t) => null != t ? "".concat(e, "(").concat(t, ")") : t,
        tj = e => {
            if (/^var\(--.+\)$/.test(e) || null == e) return e;
            let t = "string" == typeof e && !e.endsWith("deg");
            return "number" == typeof e || t ? "".concat(e, "deg") : e
        },
        tU = e => ({
            values: ["outside", "inside", "mixed", "none"],
            transform(t, a) {
                var r;
                let {
                    token: i
                } = a, o = i("colors.colorPalette.focusRing");
                return null != (r = ({
                    inside: {
                        "--focus-ring-color": o,
                        [e]: {
                            outlineOffset: "0px",
                            outlineWidth: "var(--focus-ring-width, 1px)",
                            outlineColor: "var(--focus-ring-color)",
                            outlineStyle: "var(--focus-ring-style, solid)",
                            borderColor: "var(--focus-ring-color)"
                        }
                    },
                    outside: {
                        "--focus-ring-color": o,
                        [e]: {
                            outlineWidth: "var(--focus-ring-width, 2px)",
                            outlineOffset: "var(--focus-ring-offset, 2px)",
                            outlineStyle: "var(--focus-ring-style, solid)",
                            outlineColor: "var(--focus-ring-color)"
                        }
                    },
                    mixed: {
                        "--focus-ring-color": o,
                        [e]: {
                            outlineWidth: "var(--focus-ring-width, 3px)",
                            outlineStyle: "var(--focus-ring-style, solid)",
                            outlineColor: "color-mix(in srgb, var(--focus-ring-color), transparent 60%)",
                            borderColor: "var(--focus-ring-color)"
                        }
                    },
                    none: {
                        "--focus-ring-color": o,
                        [e]: {
                            outline: "none"
                        }
                    }
                })[t]) ? r : {}
            }
        }),
        tG = tN("borderColor"),
        tq = e => ({
            transition: e,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        }),
        tY = (0, tB.defineConditions)({
            hover: ["@media (hover: hover)", "&:is(:hover, [data-hover]):not(:disabled, [data-disabled])"],
            active: "&:is(:active, [data-active]):not(:disabled, [data-disabled], [data-state=open])",
            focus: "&:is(:focus, [data-focus])",
            focusWithin: "&:is(:focus-within, [data-focus-within])",
            focusVisible: "&:is(:focus-visible, [data-focus-visible])",
            disabled: "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",
            visited: "&:visited",
            target: "&:target",
            readOnly: "&:is([data-readonly], [aria-readonly=true], [readonly])",
            readWrite: "&:read-write",
            empty: "&:is(:empty, [data-empty])",
            checked: "&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])",
            enabled: "&:enabled",
            expanded: "&:is([aria-expanded=true], [data-expanded], [data-state=expanded])",
            highlighted: "&[data-highlighted]",
            complete: "&[data-complete]",
            incomplete: "&[data-incomplete]",
            dragging: "&[data-dragging]",
            before: "&::before",
            after: "&::after",
            firstLetter: "&::first-letter",
            firstLine: "&::first-line",
            marker: "&::marker",
            selection: "&::selection",
            file: "&::file-selector-button",
            backdrop: "&::backdrop",
            first: "&:first-of-type",
            last: "&:last-of-type",
            notFirst: "&:not(:first-of-type)",
            notLast: "&:not(:last-of-type)",
            only: "&:only-child",
            even: "&:nth-of-type(even)",
            odd: "&:nth-of-type(odd)",
            peerFocus: ".peer:is(:focus, [data-focus]) ~ &",
            peerHover: ".peer:is(:hover, [data-hover]):not(:disabled, [data-disabled]) ~ &",
            peerActive: ".peer:is(:active, [data-active]):not(:disabled, [data-disabled]) ~ &",
            peerFocusWithin: ".peer:focus-within ~ &",
            peerFocusVisible: ".peer:is(:focus-visible, [data-focus-visible]) ~ &",
            peerDisabled: ".peer:is(:disabled, [disabled], [data-disabled]) ~ &",
            peerChecked: ".peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &",
            peerInvalid: ".peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &",
            peerExpanded: ".peer:is([aria-expanded=true], [data-expanded], [data-state=expanded]) ~ &",
            peerPlaceholderShown: ".peer:placeholder-shown ~ &",
            groupFocus: ".group:is(:focus, [data-focus]) &",
            groupHover: ".group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &",
            groupActive: ".group:is(:active, [data-active]):not(:disabled, [data-disabled]) &",
            groupFocusWithin: ".group:focus-within &",
            groupFocusVisible: ".group:is(:focus-visible, [data-focus-visible]) &",
            groupDisabled: ".group:is(:disabled, [disabled], [data-disabled]) &",
            groupChecked: ".group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &",
            groupExpanded: ".group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &",
            groupInvalid: ".group:invalid &",
            indeterminate: "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
            required: "&:is([data-required], [aria-required=true])",
            valid: "&:is([data-valid], [data-state=valid])",
            invalid: "&:is([data-invalid], [aria-invalid=true], [data-state=invalid])",
            autofill: "&:autofill",
            inRange: "&:is(:in-range, [data-in-range])",
            outOfRange: "&:is(:out-of-range, [data-outside-range])",
            placeholder: "&::placeholder, &[data-placeholder]",
            placeholderShown: "&:is(:placeholder-shown, [data-placeholder-shown])",
            pressed: "&:is([aria-pressed=true], [data-pressed])",
            selected: "&:is([aria-selected=true], [data-selected])",
            grabbed: "&:is([aria-grabbed=true], [data-grabbed])",
            underValue: "&[data-state=under-value]",
            overValue: "&[data-state=over-value]",
            atValue: "&[data-state=at-value]",
            default: "&:default",
            optional: "&:optional",
            open: "&:is([open], [data-open], [data-state=open])",
            closed: "&:is([closed], [data-closed], [data-state=closed])",
            fullscreen: "&:is(:fullscreen, [data-fullscreen])",
            loading: "&:is([data-loading], [aria-busy=true])",
            hidden: "&:is([hidden], [data-hidden])",
            current: "&[data-current]",
            currentPage: "&[aria-current=page]",
            currentStep: "&[aria-current=step]",
            today: "&[data-today]",
            unavailable: "&[data-unavailable]",
            rangeStart: "&[data-range-start]",
            rangeEnd: "&[data-range-end]",
            now: "&[data-now]",
            topmost: "&[data-topmost]",
            motionReduce: "@media (prefers-reduced-motion: reduce)",
            motionSafe: "@media (prefers-reduced-motion: no-preference)",
            print: "@media print",
            landscape: "@media (orientation: landscape)",
            portrait: "@media (orientation: portrait)",
            dark: ".dark &, .dark .chakra-theme:not(.light) &",
            light: ":root &, .light &",
            osDark: "@media (prefers-color-scheme: dark)",
            osLight: "@media (prefers-color-scheme: light)",
            highContrast: "@media (forced-colors: active)",
            lessContrast: "@media (prefers-contrast: less)",
            moreContrast: "@media (prefers-contrast: more)",
            ltr: "[dir=ltr] &",
            rtl: "[dir=rtl] &",
            scrollbar: "&::-webkit-scrollbar",
            scrollbarThumb: "&::-webkit-scrollbar-thumb",
            scrollbarTrack: "&::-webkit-scrollbar-track",
            horizontal: "&[data-orientation=horizontal]",
            vertical: "&[data-orientation=vertical]",
            icon: "& :where(svg)",
            starting: "@starting-style"
        }),
        tK = td("bg-currentcolor"),
        tX = e => e === tK.ref || "currentBg" === e,
        t$ = e => ({ ...e("colors"),
            currentBg: tK
        }),
        tZ = (0, tB.defineConfig)({
            conditions: tY,
            utilities: {
                background: {
                    values: t$,
                    shorthand: ["bg"],
                    transform(e, t) {
                        if (tX(t.raw)) return {
                            background: tK.ref
                        };
                        let a = tN("background")(e, t);
                        return { ...a,
                            [tK.var]: null == a ? void 0 : a.background
                        }
                    }
                },
                backgroundColor: {
                    values: t$,
                    shorthand: ["bgColor"],
                    transform(e, t) {
                        if (tX(t.raw)) return {
                            backgroundColor: tK.ref
                        };
                        let a = tN("backgroundColor")(e, t);
                        return { ...a,
                            [tK.var]: null == a ? void 0 : a.backgroundColor
                        }
                    }
                },
                backgroundSize: {
                    shorthand: ["bgSize"]
                },
                backgroundPosition: {
                    shorthand: ["bgPos"]
                },
                backgroundRepeat: {
                    shorthand: ["bgRepeat"]
                },
                backgroundAttachment: {
                    shorthand: ["bgAttachment"]
                },
                backgroundClip: {
                    shorthand: ["bgClip"],
                    values: ["text"],
                    transform: e => "text" === e ? {
                        color: "transparent",
                        backgroundClip: "text"
                    } : {
                        backgroundClip: e
                    }
                },
                backgroundGradient: {
                    shorthand: ["bgGradient"],
                    values: e => ({ ...e("gradients"),
                        "to-t": "linear-gradient(to top, var(--gradient))",
                        "to-tr": "linear-gradient(to top right, var(--gradient))",
                        "to-r": "linear-gradient(to right, var(--gradient))",
                        "to-br": "linear-gradient(to bottom right, var(--gradient))",
                        "to-b": "linear-gradient(to bottom, var(--gradient))",
                        "to-bl": "linear-gradient(to bottom left, var(--gradient))",
                        "to-l": "linear-gradient(to left, var(--gradient))",
                        "to-tl": "linear-gradient(to top left, var(--gradient))"
                    }),
                    transform: e => ({
                        "--gradient-stops": "var(--gradient-from), var(--gradient-to)",
                        "--gradient": "var(--gradient-via-stops, var(--gradient-stops))",
                        backgroundImage: e
                    })
                },
                gradientFrom: {
                    values: t$,
                    transform: tN("--gradient-from")
                },
                gradientTo: {
                    values: t$,
                    transform: tN("--gradient-to")
                },
                gradientVia: {
                    values: t$,
                    transform: (e, t) => ({ ...tN("--gradient-via")(e, t),
                        "--gradient-via-stops": "var(--gradient-from), var(--gradient-via), var(--gradient-to)"
                    })
                },
                backgroundImage: {
                    values: e => ({ ...e("gradients"),
                        ...e("assets")
                    }),
                    shorthand: ["bgImg", "bgImage"]
                },
                border: {
                    values: "borders"
                },
                borderTop: {
                    values: "borders"
                },
                borderLeft: {
                    values: "borders"
                },
                borderBlockStart: {
                    values: "borders"
                },
                borderRight: {
                    values: "borders"
                },
                borderBottom: {
                    values: "borders"
                },
                borderBlockEnd: {
                    values: "borders"
                },
                borderInlineStart: {
                    values: "borders",
                    shorthand: ["borderStart"]
                },
                borderInlineEnd: {
                    values: "borders",
                    shorthand: ["borderEnd"]
                },
                borderInline: {
                    values: "borders",
                    shorthand: ["borderX"]
                },
                borderBlock: {
                    values: "borders",
                    shorthand: ["borderY"]
                },
                borderColor: {
                    values: t$,
                    transform: tN("borderColor")
                },
                borderTopColor: {
                    values: t$,
                    transform: tN("borderTopColor")
                },
                borderBlockStartColor: {
                    values: t$,
                    transform: tN("borderBlockStartColor")
                },
                borderBottomColor: {
                    values: t$,
                    transform: tN("borderBottomColor")
                },
                borderBlockEndColor: {
                    values: t$,
                    transform: tN("borderBlockEndColor")
                },
                borderLeftColor: {
                    values: t$,
                    transform: tN("borderLeftColor")
                },
                borderInlineStartColor: {
                    values: t$,
                    shorthand: ["borderStartColor"],
                    transform: tN("borderInlineStartColor")
                },
                borderRightColor: {
                    values: t$,
                    transform: tN("borderRightColor")
                },
                borderInlineEndColor: {
                    values: t$,
                    shorthand: ["borderEndColor"],
                    transform: tN("borderInlineEndColor")
                },
                borderStyle: {
                    values: "borderStyles"
                },
                borderTopStyle: {
                    values: "borderStyles"
                },
                borderBlockStartStyle: {
                    values: "borderStyles"
                },
                borderBottomStyle: {
                    values: "borderStyles"
                },
                borderBlockEndStyle: {
                    values: "borderStyles"
                },
                borderInlineStartStyle: {
                    values: "borderStyles",
                    shorthand: ["borderStartStyle"]
                },
                borderInlineEndStyle: {
                    values: "borderStyles",
                    shorthand: ["borderEndStyle"]
                },
                borderLeftStyle: {
                    values: "borderStyles"
                },
                borderRightStyle: {
                    values: "borderStyles"
                },
                borderRadius: {
                    values: "radii",
                    shorthand: ["rounded"]
                },
                borderTopLeftRadius: {
                    values: "radii",
                    shorthand: ["roundedTopLeft"]
                },
                borderStartStartRadius: {
                    values: "radii",
                    shorthand: ["roundedStartStart", "borderTopStartRadius"]
                },
                borderEndStartRadius: {
                    values: "radii",
                    shorthand: ["roundedEndStart", "borderBottomStartRadius"]
                },
                borderTopRightRadius: {
                    values: "radii",
                    shorthand: ["roundedTopRight"]
                },
                borderStartEndRadius: {
                    values: "radii",
                    shorthand: ["roundedStartEnd", "borderTopEndRadius"]
                },
                borderEndEndRadius: {
                    values: "radii",
                    shorthand: ["roundedEndEnd", "borderBottomEndRadius"]
                },
                borderBottomLeftRadius: {
                    values: "radii",
                    shorthand: ["roundedBottomLeft"]
                },
                borderBottomRightRadius: {
                    values: "radii",
                    shorthand: ["roundedBottomRight"]
                },
                borderInlineStartRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedStart", "borderStartRadius"],
                    transform: e => ({
                        borderStartStartRadius: e,
                        borderEndStartRadius: e
                    })
                },
                borderInlineEndRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedEnd", "borderEndRadius"],
                    transform: e => ({
                        borderStartEndRadius: e,
                        borderEndEndRadius: e
                    })
                },
                borderTopRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedTop"],
                    transform: e => ({
                        borderTopLeftRadius: e,
                        borderTopRightRadius: e
                    })
                },
                borderBottomRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedBottom"],
                    transform: e => ({
                        borderBottomLeftRadius: e,
                        borderBottomRightRadius: e
                    })
                },
                borderLeftRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedLeft"],
                    transform: e => ({
                        borderTopLeftRadius: e,
                        borderBottomLeftRadius: e
                    })
                },
                borderRightRadius: {
                    values: "radii",
                    property: "borderRadius",
                    shorthand: ["roundedRight"],
                    transform: e => ({
                        borderTopRightRadius: e,
                        borderBottomRightRadius: e
                    })
                },
                borderWidth: {
                    values: "borderWidths"
                },
                borderBlockStartWidth: {
                    values: "borderWidths"
                },
                borderTopWidth: {
                    values: "borderWidths"
                },
                borderBottomWidth: {
                    values: "borderWidths"
                },
                borderBlockEndWidth: {
                    values: "borderWidths"
                },
                borderRightWidth: {
                    values: "borderWidths"
                },
                borderInlineWidth: {
                    values: "borderWidths",
                    shorthand: ["borderXWidth"]
                },
                borderInlineStartWidth: {
                    values: "borderWidths",
                    shorthand: ["borderStartWidth"]
                },
                borderInlineEndWidth: {
                    values: "borderWidths",
                    shorthand: ["borderEndWidth"]
                },
                borderLeftWidth: {
                    values: "borderWidths"
                },
                borderBlockWidth: {
                    values: "borderWidths",
                    shorthand: ["borderYWidth"]
                },
                color: {
                    values: t$,
                    transform: tN("color")
                },
                fill: {
                    values: t$,
                    transform: tN("fill")
                },
                stroke: {
                    values: t$,
                    transform: tN("stroke")
                },
                accentColor: {
                    values: t$,
                    transform: tN("accentColor")
                },
                divideX: {
                    values: {
                        type: "string"
                    },
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            borderInlineStartWidth: e,
                            borderInlineEndWidth: "0px"
                        }
                    })
                },
                divideY: {
                    values: {
                        type: "string"
                    },
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            borderTopWidth: e,
                            borderBottomWidth: "0px"
                        }
                    })
                },
                divideColor: {
                    values: t$,
                    transform: (e, t) => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": tG(e, t)
                    })
                },
                divideStyle: {
                    property: "borderStyle",
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            borderStyle: e
                        }
                    })
                },
                boxShadow: {
                    values: "shadows",
                    shorthand: ["shadow"]
                },
                boxShadowColor: {
                    values: t$,
                    transform: tN("--shadow-color"),
                    shorthand: ["shadowColor"]
                },
                mixBlendMode: {
                    shorthand: ["blendMode"]
                },
                backgroundBlendMode: {
                    shorthand: ["bgBlendMode"]
                },
                opacity: {
                    values: "opacity"
                },
                filter: {
                    transform: e => "auto" !== e ? {
                        filter: e
                    } : {
                        filter: "var(--blur) var(--brightness) var(--contrast) var(--grayscale) var(--hue-rotate) var(--invert) var(--saturate) var(--sepia) var(--drop-shadow)"
                    }
                },
                blur: {
                    values: "blurs",
                    transform: e => ({
                        "--blur": tH("blur", e)
                    })
                },
                brightness: {
                    transform: e => ({
                        "--brightness": tH("brightness", e)
                    })
                },
                contrast: {
                    transform: e => ({
                        "--contrast": tH("contrast", e)
                    })
                },
                grayscale: {
                    transform: e => ({
                        "--grayscale": tH("grayscale", e)
                    })
                },
                hueRotate: {
                    transform: e => ({
                        "--hue-rotate": tH("hue-rotate", tj(e))
                    })
                },
                invert: {
                    transform: e => ({
                        "--invert": tH("invert", e)
                    })
                },
                saturate: {
                    transform: e => ({
                        "--saturate": tH("saturate", e)
                    })
                },
                sepia: {
                    transform: e => ({
                        "--sepia": tH("sepia", e)
                    })
                },
                dropShadow: {
                    transform: e => ({
                        "--drop-shadow": tH("drop-shadow", e)
                    })
                },
                backdropFilter: {
                    transform: e => "auto" !== e ? {
                        backdropFilter: e
                    } : {
                        backdropFilter: "var(--backdrop-blur) var(--backdrop-brightness) var(--backdrop-contrast) var(--backdrop-grayscale) var(--backdrop-hue-rotate) var(--backdrop-invert) var(--backdrop-opacity) var(--backdrop-saturate) var(--backdrop-sepia)"
                    }
                },
                backdropBlur: {
                    values: "blurs",
                    transform: e => ({
                        "--backdrop-blur": tH("blur", e)
                    })
                },
                backdropBrightness: {
                    transform: e => ({
                        "--backdrop-brightness": tH("brightness", e)
                    })
                },
                backdropContrast: {
                    transform: e => ({
                        "--backdrop-contrast": tH("contrast", e)
                    })
                },
                backdropGrayscale: {
                    transform: e => ({
                        "--backdrop-grayscale": tH("grayscale", e)
                    })
                },
                backdropHueRotate: {
                    transform: e => ({
                        "--backdrop-hue-rotate": tH("hue-rotate", tj(e))
                    })
                },
                backdropInvert: {
                    transform: e => ({
                        "--backdrop-invert": tH("invert", e)
                    })
                },
                backdropOpacity: {
                    transform: e => ({
                        "--backdrop-opacity": tH("opacity", e)
                    })
                },
                backdropSaturate: {
                    transform: e => ({
                        "--backdrop-saturate": tH("saturate", e)
                    })
                },
                backdropSepia: {
                    transform: e => ({
                        "--backdrop-sepia": tH("sepia", e)
                    })
                },
                flexBasis: {
                    values: "sizes"
                },
                gap: {
                    values: "spacing"
                },
                rowGap: {
                    values: "spacing",
                    shorthand: ["gapY"]
                },
                columnGap: {
                    values: "spacing",
                    shorthand: ["gapX"]
                },
                flexDirection: {
                    shorthand: ["flexDir"]
                },
                gridGap: {
                    values: "spacing"
                },
                gridColumnGap: {
                    values: "spacing"
                },
                gridRowGap: {
                    values: "spacing"
                },
                outlineColor: {
                    values: t$,
                    transform: tN("outlineColor")
                },
                focusRing: tU("&:is(:focus, [data-focus])"),
                focusVisibleRing: tU("&:is(:focus-visible, [data-focus-visible])"),
                focusRingColor: {
                    values: t$,
                    transform: tN("--focus-ring-color")
                },
                focusRingOffset: {
                    values: "spacing",
                    transform: e => ({
                        "--focus-ring-offset": e
                    })
                },
                focusRingWidth: {
                    values: "borderWidths",
                    property: "outlineWidth",
                    transform: e => ({
                        "--focus-ring-width": e
                    })
                },
                focusRingStyle: {
                    values: "borderStyles",
                    property: "outlineStyle",
                    transform: e => ({
                        "--focus-ring-style": e
                    })
                },
                aspectRatio: {
                    values: "aspectRatios"
                },
                width: {
                    values: "sizes",
                    shorthand: ["w"]
                },
                inlineSize: {
                    values: "sizes"
                },
                height: {
                    values: "sizes",
                    shorthand: ["h"]
                },
                blockSize: {
                    values: "sizes"
                },
                boxSize: {
                    values: "sizes",
                    property: "width",
                    transform: e => ({
                        width: e,
                        height: e
                    })
                },
                minWidth: {
                    values: "sizes",
                    shorthand: ["minW"]
                },
                minInlineSize: {
                    values: "sizes"
                },
                minHeight: {
                    values: "sizes",
                    shorthand: ["minH"]
                },
                minBlockSize: {
                    values: "sizes"
                },
                maxWidth: {
                    values: "sizes",
                    shorthand: ["maxW"]
                },
                maxInlineSize: {
                    values: "sizes"
                },
                maxHeight: {
                    values: "sizes",
                    shorthand: ["maxH"]
                },
                maxBlockSize: {
                    values: "sizes"
                },
                hideFrom: {
                    values: "breakpoints",
                    transform: (e, t) => {
                        let {
                            raw: a,
                            token: r
                        } = t;
                        return {
                            [r.raw("breakpoints.".concat(a)) ? "@breakpoint ".concat(a) : "@media screen and (min-width: ".concat(e, ")")]: {
                                display: "none"
                            }
                        }
                    }
                },
                hideBelow: {
                    values: "breakpoints",
                    transform(e, t) {
                        let {
                            raw: a,
                            token: r
                        } = t;
                        return {
                            [r.raw("breakpoints.".concat(a)) ? "@breakpoint ".concat(a, "Down") : "@media screen and (max-width: ".concat(e, ")")]: {
                                display: "none"
                            }
                        }
                    }
                },
                overscrollBehavior: {
                    shorthand: ["overscroll"]
                },
                overscrollBehaviorX: {
                    shorthand: ["overscrollX"]
                },
                overscrollBehaviorY: {
                    shorthand: ["overscrollY"]
                },
                scrollbar: {
                    values: ["visible", "hidden"],
                    transform(e) {
                        switch (e) {
                            case "visible":
                                return {
                                    msOverflowStyle: "auto",
                                    scrollbarWidth: "auto",
                                    "&::-webkit-scrollbar": {
                                        display: "block"
                                    }
                                };
                            case "hidden":
                                return {
                                    msOverflowStyle: "none",
                                    scrollbarWidth: "none",
                                    "&::-webkit-scrollbar": {
                                        display: "none"
                                    }
                                };
                            default:
                                return {}
                        }
                    }
                },
                scrollbarColor: {
                    values: t$,
                    transform: tN("scrollbarColor")
                },
                scrollbarGutter: {
                    values: "spacing"
                },
                scrollbarWidth: {
                    values: "sizes"
                },
                scrollMargin: {
                    values: "spacing"
                },
                scrollMarginTop: {
                    values: "spacing"
                },
                scrollMarginBottom: {
                    values: "spacing"
                },
                scrollMarginLeft: {
                    values: "spacing"
                },
                scrollMarginRight: {
                    values: "spacing"
                },
                scrollMarginX: {
                    values: "spacing",
                    transform: e => ({
                        scrollMarginLeft: e,
                        scrollMarginRight: e
                    })
                },
                scrollMarginY: {
                    values: "spacing",
                    transform: e => ({
                        scrollMarginTop: e,
                        scrollMarginBottom: e
                    })
                },
                scrollPadding: {
                    values: "spacing"
                },
                scrollPaddingTop: {
                    values: "spacing"
                },
                scrollPaddingBottom: {
                    values: "spacing"
                },
                scrollPaddingLeft: {
                    values: "spacing"
                },
                scrollPaddingRight: {
                    values: "spacing"
                },
                scrollPaddingInline: {
                    values: "spacing",
                    shorthand: ["scrollPaddingX"]
                },
                scrollPaddingBlock: {
                    values: "spacing",
                    shorthand: ["scrollPaddingY"]
                },
                scrollSnapType: {
                    values: {
                        none: "none",
                        x: "x var(--scroll-snap-strictness)",
                        y: "y var(--scroll-snap-strictness)",
                        both: "both var(--scroll-snap-strictness)"
                    }
                },
                scrollSnapStrictness: {
                    values: ["mandatory", "proximity"],
                    transform: e => ({
                        "--scroll-snap-strictness": e
                    })
                },
                scrollSnapMargin: {
                    values: "spacing"
                },
                scrollSnapMarginTop: {
                    values: "spacing"
                },
                scrollSnapMarginBottom: {
                    values: "spacing"
                },
                scrollSnapMarginLeft: {
                    values: "spacing"
                },
                scrollSnapMarginRight: {
                    values: "spacing"
                },
                listStylePosition: {
                    shorthand: ["listStylePos"]
                },
                listStyleImage: {
                    values: "assets",
                    shorthand: ["listStyleImg"]
                },
                position: {
                    shorthand: ["pos"]
                },
                zIndex: {
                    values: "zIndex"
                },
                inset: {
                    values: "spacing"
                },
                insetInline: {
                    values: "spacing",
                    shorthand: ["insetX"]
                },
                insetBlock: {
                    values: "spacing",
                    shorthand: ["insetY"]
                },
                top: {
                    values: "spacing"
                },
                insetBlockStart: {
                    values: "spacing"
                },
                bottom: {
                    values: "spacing"
                },
                insetBlockEnd: {
                    values: "spacing"
                },
                left: {
                    values: "spacing"
                },
                right: {
                    values: "spacing"
                },
                insetInlineStart: {
                    values: "spacing",
                    shorthand: ["insetStart"]
                },
                insetInlineEnd: {
                    values: "spacing",
                    shorthand: ["insetEnd"]
                },
                ring: {
                    transform: e => ({
                        "--ring-offset-shadow": "var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
                        "--ring-shadow": "var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color)",
                        "--ring-width": e,
                        boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)"
                    })
                },
                ringColor: {
                    values: t$,
                    transform: tN("--ring-color")
                },
                ringOffset: {
                    transform: e => ({
                        "--ring-offset-width": e
                    })
                },
                ringOffsetColor: {
                    values: t$,
                    transform: tN("--ring-offset-color")
                },
                ringInset: {
                    transform: e => ({
                        "--ring-inset": e
                    })
                },
                margin: {
                    values: "spacing",
                    shorthand: ["m"]
                },
                marginTop: {
                    values: "spacing",
                    shorthand: ["mt"]
                },
                marginBlockStart: {
                    values: "spacing"
                },
                marginRight: {
                    values: "spacing",
                    shorthand: ["mr"]
                },
                marginBottom: {
                    values: "spacing",
                    shorthand: ["mb"]
                },
                marginBlockEnd: {
                    values: "spacing"
                },
                marginLeft: {
                    values: "spacing",
                    shorthand: ["ml"]
                },
                marginInlineStart: {
                    values: "spacing",
                    shorthand: ["ms", "marginStart"]
                },
                marginInlineEnd: {
                    values: "spacing",
                    shorthand: ["me", "marginEnd"]
                },
                marginInline: {
                    values: "spacing",
                    shorthand: ["mx", "marginX"]
                },
                marginBlock: {
                    values: "spacing",
                    shorthand: ["my", "marginY"]
                },
                padding: {
                    values: "spacing",
                    shorthand: ["p"]
                },
                paddingTop: {
                    values: "spacing",
                    shorthand: ["pt"]
                },
                paddingRight: {
                    values: "spacing",
                    shorthand: ["pr"]
                },
                paddingBottom: {
                    values: "spacing",
                    shorthand: ["pb"]
                },
                paddingBlockStart: {
                    values: "spacing"
                },
                paddingBlockEnd: {
                    values: "spacing"
                },
                paddingLeft: {
                    values: "spacing",
                    shorthand: ["pl"]
                },
                paddingInlineStart: {
                    values: "spacing",
                    shorthand: ["ps", "paddingStart"]
                },
                paddingInlineEnd: {
                    values: "spacing",
                    shorthand: ["pe", "paddingEnd"]
                },
                paddingInline: {
                    values: "spacing",
                    shorthand: ["px", "paddingX"]
                },
                paddingBlock: {
                    values: "spacing",
                    shorthand: ["py", "paddingY"]
                },
                textDecoration: {
                    shorthand: ["textDecor"]
                },
                textDecorationColor: {
                    values: t$,
                    transform: tN("textDecorationColor")
                },
                textShadow: {
                    values: "shadows"
                },
                transform: {
                    transform: e => {
                        let t = e;
                        return "auto" === e && (t = "translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"), "auto-gpu" === e && (t = "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"), {
                            transform: t
                        }
                    }
                },
                skewX: {
                    transform: e => ({
                        "--skew-x": tj(e)
                    })
                },
                skewY: {
                    transform: e => ({
                        "--skew-y": tj(e)
                    })
                },
                scaleX: {
                    transform: e => ({
                        "--scale-x": e
                    })
                },
                scaleY: {
                    transform: e => ({
                        "--scale-y": e
                    })
                },
                scale: {
                    transform: e => "auto" !== e ? {
                        scale: e
                    } : {
                        scale: "var(--scale-x, 1) var(--scale-y, 1)"
                    }
                },
                spaceXReverse: {
                    values: {
                        type: "boolean"
                    },
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            "--space-x-reverse": e ? "1" : void 0
                        }
                    })
                },
                spaceX: {
                    property: "marginInlineStart",
                    values: "spacing",
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            "--space-x-reverse": "0",
                            marginInlineStart: "calc(".concat(e, " * calc(1 - var(--space-x-reverse)))"),
                            marginInlineEnd: "calc(".concat(e, " * var(--space-x-reverse))")
                        }
                    })
                },
                spaceYReverse: {
                    values: {
                        type: "boolean"
                    },
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            "--space-y-reverse": e ? "1" : void 0
                        }
                    })
                },
                spaceY: {
                    property: "marginTop",
                    values: "spacing",
                    transform: e => ({
                        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
                            "--space-y-reverse": "0",
                            marginTop: "calc(".concat(e, " * calc(1 - var(--space-y-reverse)))"),
                            marginBottom: "calc(".concat(e, " * var(--space-y-reverse))")
                        }
                    })
                },
                rotate: {
                    transform: e => "auto" !== e ? {
                        rotate: tj(e)
                    } : {
                        rotate: "var(--rotate-x, 0) var(--rotate-y, 0) var(--rotate-z, 0)"
                    }
                },
                rotateX: {
                    transform: e => ({
                        "--rotate-x": tj(e)
                    })
                },
                rotateY: {
                    transform: e => ({
                        "--rotate-y": tj(e)
                    })
                },
                translate: {
                    transform: e => "auto" !== e ? {
                        translate: e
                    } : {
                        translate: "var(--translate-x) var(--translate-y)"
                    }
                },
                translateX: {
                    values: "spacing",
                    transform: e => ({
                        "--translate-x": e
                    })
                },
                translateY: {
                    values: "spacing",
                    transform: e => ({
                        "--translate-y": e
                    })
                },
                transition: {
                    values: ["all", "common", "colors", "opacity", "position", "backgrounds", "size", "shadow", "transform"],
                    transform(e) {
                        switch (e) {
                            case "all":
                                return tq("all");
                            case "position":
                                return tq("left, right, top, bottom, inset-inline, inset-block");
                            case "colors":
                                return tq("color, background-color, border-color, text-decoration-color, fill, stroke");
                            case "opacity":
                                return tq("opacity");
                            case "shadow":
                                return tq("box-shadow");
                            case "transform":
                                return tq("transform");
                            case "size":
                                return tq("width, height");
                            case "backgrounds":
                                return tq("background, background-color, background-image, background-position");
                            case "common":
                                return tq("color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter");
                            default:
                                return {
                                    transition: e
                                }
                        }
                    }
                },
                transitionDuration: {
                    values: "durations"
                },
                transitionProperty: {
                    values: {
                        common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, translate, transform",
                        colors: "background-color, border-color, color, fill, stroke",
                        size: "width, height",
                        position: "left, right, top, bottom, inset-inline, inset-block",
                        background: "background, background-color, background-image, background-position"
                    }
                },
                transitionTimingFunction: {
                    values: "easings"
                },
                animation: {
                    values: "animations"
                },
                animationDuration: {
                    values: "durations"
                },
                animationDelay: {
                    values: "durations"
                },
                animationTimingFunction: {
                    values: "easings"
                },
                fontFamily: {
                    values: "fonts"
                },
                fontSize: {
                    values: "fontSizes"
                },
                fontWeight: {
                    values: "fontWeights"
                },
                lineHeight: {
                    values: "lineHeights"
                },
                letterSpacing: {
                    values: "letterSpacings"
                },
                textIndent: {
                    values: "spacing"
                },
                truncate: {
                    values: {
                        type: "boolean"
                    },
                    transform: e => !0 === e ? {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    } : {}
                },
                lineClamp: {
                    transform: e => "none" === e ? {
                        WebkitLineClamp: "unset"
                    } : {
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: e,
                        WebkitBoxOrient: "vertical",
                        textWrap: "wrap"
                    }
                },
                borderSpacing: {
                    values: e => ({ ...e("spacing"),
                        auto: "var(--border-spacing-x, 0) var(--border-spacing-y, 0)"
                    })
                },
                borderSpacingX: {
                    values: "spacing",
                    transform: e => ({
                        "--border-spacing-x": e
                    })
                },
                borderSpacingY: {
                    values: "spacing",
                    transform: e => ({
                        "--border-spacing-y": e
                    })
                },
                srOnly: {
                    values: {
                        type: "boolean"
                    },
                    transform: e => tJ[e] || {}
                },
                debug: {
                    values: {
                        type: "boolean"
                    },
                    transform: e => e ? {
                        outline: "1px solid blue !important",
                        "& > *": {
                            outline: "1px solid red !important"
                        }
                    } : {}
                },
                caretColor: {
                    values: t$,
                    transform: tN("caretColor")
                },
                cursor: {
                    values: "cursor"
                }
            }
        }),
        tJ = {
            true: {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            },
            false: {
                position: "static",
                width: "auto",
                height: "auto",
                padding: "0",
                margin: "0",
                overflow: "visible",
                clip: "auto",
                whiteSpace: "normal"
            }
        },
        tQ = "var(--chakra-empty,/*!*/ /*!*/)",
        t0 = (0, tB.defineGlobalStyles)({
            "*": {
                fontFeatureSettings: '"cv11"',
                "--ring-inset": tQ,
                "--ring-offset-width": "0px",
                "--ring-offset-color": "#fff",
                "--ring-color": "rgba(66, 153, 225, 0.6)",
                "--ring-offset-shadow": "0 0 #0000",
                "--ring-shadow": "0 0 #0000",
                ...Object.fromEntries(["brightness", "contrast", "grayscale", "hue-rotate", "invert", "saturate", "sepia", "drop-shadow"].map(e => ["--".concat(e), tQ])),
                ...Object.fromEntries(["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"].map(e => ["--backdrop-".concat(e), tQ])),
                "--global-font-mono": "fonts.mono",
                "--global-font-body": "fonts.body",
                "--global-color-border": "colors.border"
            },
            html: {
                color: "fg",
                bg: "bg",
                lineHeight: "1.5",
                colorPalette: "gray"
            },
            "*::placeholder, *[data-placeholder]": {
                color: "fg.muted/80"
            },
            "*::selection": {
                bg: "colorPalette.emphasized/80"
            }
        }),
        t1 = (0, tB.defineLayerStyles)({
            "fill.muted": {
                value: {
                    background: "colorPalette.muted",
                    color: "colorPalette.fg"
                }
            },
            "fill.subtle": {
                value: {
                    background: "colorPalette.subtle",
                    color: "colorPalette.fg"
                }
            },
            "fill.surface": {
                value: {
                    background: "colorPalette.subtle",
                    color: "colorPalette.fg",
                    boxShadow: "0 0 0px 1px var(--shadow-color)",
                    boxShadowColor: "colorPalette.muted"
                }
            },
            "fill.solid": {
                value: {
                    background: "colorPalette.solid",
                    color: "colorPalette.contrast"
                }
            },
            "outline.subtle": {
                value: {
                    color: "colorPalette.fg",
                    boxShadow: "inset 0 0 0px 1px var(--shadow-color)",
                    boxShadowColor: "colorPalette.subtle"
                }
            },
            "outline.solid": {
                value: {
                    borderWidth: "1px",
                    borderColor: "colorPalette.solid",
                    color: "colorPalette.fg"
                }
            },
            "indicator.bottom": {
                value: {
                    position: "relative",
                    "--indicator-color-fallback": "colors.colorPalette.solid",
                    _before: {
                        content: '""',
                        position: "absolute",
                        bottom: "var(--indicator-offset-y, 0)",
                        insetInline: "var(--indicator-offset-x, 0)",
                        height: "var(--indicator-thickness, 2px)",
                        background: "var(--indicator-color, var(--indicator-color-fallback))"
                    }
                }
            },
            "indicator.top": {
                value: {
                    position: "relative",
                    "--indicator-color-fallback": "colors.colorPalette.solid",
                    _before: {
                        content: '""',
                        position: "absolute",
                        top: "var(--indicator-offset-y, 0)",
                        insetInline: "var(--indicator-offset-x, 0)",
                        height: "var(--indicator-thickness, 2px)",
                        background: "var(--indicator-color, var(--indicator-color-fallback))"
                    }
                }
            },
            "indicator.start": {
                value: {
                    position: "relative",
                    "--indicator-color-fallback": "colors.colorPalette.solid",
                    _before: {
                        content: '""',
                        position: "absolute",
                        insetInlineStart: "var(--indicator-offset-x, 0)",
                        insetBlock: "var(--indicator-offset-y, 0)",
                        width: "var(--indicator-thickness, 2px)",
                        background: "var(--indicator-color, var(--indicator-color-fallback))"
                    }
                }
            },
            "indicator.end": {
                value: {
                    position: "relative",
                    "--indicator-color-fallback": "colors.colorPalette.solid",
                    _before: {
                        content: '""',
                        position: "absolute",
                        insetInlineEnd: "var(--indicator-offset-x, 0)",
                        insetBlock: "var(--indicator-offset-y, 0)",
                        width: "var(--indicator-thickness, 2px)",
                        background: "var(--indicator-color, var(--indicator-color-fallback))"
                    }
                }
            },
            disabled: {
                value: {
                    opacity: "0.5",
                    cursor: "not-allowed"
                }
            },
            none: {
                value: {}
            }
        }),
        t2 = (0, tB.defineAnimationStyles)({
            "slide-fade-in": {
                value: {
                    transformOrigin: "var(--transform-origin)",
                    "&[data-placement^=top]": {
                        animationName: "slide-from-bottom, fade-in"
                    },
                    "&[data-placement^=bottom]": {
                        animationName: "slide-from-top, fade-in"
                    },
                    "&[data-placement^=left]": {
                        animationName: "slide-from-right, fade-in"
                    },
                    "&[data-placement^=right]": {
                        animationName: "slide-from-left, fade-in"
                    }
                }
            },
            "slide-fade-out": {
                value: {
                    transformOrigin: "var(--transform-origin)",
                    "&[data-placement^=top]": {
                        animationName: "slide-to-bottom, fade-out"
                    },
                    "&[data-placement^=bottom]": {
                        animationName: "slide-to-top, fade-out"
                    },
                    "&[data-placement^=left]": {
                        animationName: "slide-to-right, fade-out"
                    },
                    "&[data-placement^=right]": {
                        animationName: "slide-to-left, fade-out"
                    }
                }
            },
            "scale-fade-in": {
                value: {
                    transformOrigin: "var(--transform-origin)",
                    animationName: "scale-in, fade-in"
                }
            },
            "scale-fade-out": {
                value: {
                    transformOrigin: "var(--transform-origin)",
                    animationName: "scale-out, fade-out"
                }
            }
        }),
        t5 = (0, tB.defineRecipe)({
            className: "chakra-badge",
            base: {
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "l2",
                gap: "1",
                fontWeight: "medium",
                fontVariantNumeric: "tabular-nums",
                whiteSpace: "nowrap",
                userSelect: "none"
            },
            variants: {
                variant: {
                    solid: {
                        bg: "colorPalette.solid",
                        color: "colorPalette.contrast"
                    },
                    subtle: {
                        bg: "colorPalette.subtle",
                        color: "colorPalette.fg"
                    },
                    outline: {
                        color: "colorPalette.fg",
                        "--outline-shadow-legacy": "colors.colorPalette.muted",
                        "--outline-shadow": "colors.colorPalette.border",
                        shadow: "inset 0 0 0px 1px var(--shadow-color)",
                        shadowColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
                    },
                    surface: {
                        bg: "colorPalette.subtle",
                        color: "colorPalette.fg",
                        shadow: "inset 0 0 0px 1px var(--shadow-color)",
                        shadowColor: "colorPalette.muted"
                    },
                    plain: {
                        color: "colorPalette.fg"
                    }
                },
                size: {
                    xs: {
                        textStyle: "2xs",
                        px: "1",
                        minH: "4"
                    },
                    sm: {
                        textStyle: "xs",
                        px: "1.5",
                        minH: "5"
                    },
                    md: {
                        textStyle: "sm",
                        px: "2",
                        minH: "6"
                    },
                    lg: {
                        textStyle: "sm",
                        px: "2.5",
                        minH: "7"
                    }
                }
            },
            defaultVariants: {
                variant: "subtle",
                size: "sm"
            }
        }),
        t3 = (0, tB.defineRecipe)({
            className: "chakra-button",
            base: {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                borderRadius: "l2",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                borderWidth: "1px",
                borderColor: "transparent",
                cursor: "button",
                flexShrink: "0",
                outline: "0",
                lineHeight: "1.2",
                isolation: "isolate",
                fontWeight: "medium",
                transitionProperty: "common",
                transitionDuration: "moderate",
                focusVisibleRing: "outside",
                _disabled: {
                    layerStyle: "disabled"
                },
                _icon: {
                    flexShrink: "0"
                }
            },
            variants: {
                size: {
                    "2xs": {
                        h: "6",
                        minW: "6",
                        textStyle: "xs",
                        px: "2",
                        gap: "1",
                        _icon: {
                            width: "3.5",
                            height: "3.5"
                        }
                    },
                    xs: {
                        h: "8",
                        minW: "8",
                        textStyle: "xs",
                        px: "2.5",
                        gap: "1",
                        _icon: {
                            width: "4",
                            height: "4"
                        }
                    },
                    sm: {
                        h: "9",
                        minW: "9",
                        px: "3.5",
                        textStyle: "sm",
                        gap: "2",
                        _icon: {
                            width: "4",
                            height: "4"
                        }
                    },
                    md: {
                        h: "10",
                        minW: "10",
                        textStyle: "sm",
                        px: "4",
                        gap: "2",
                        _icon: {
                            width: "5",
                            height: "5"
                        }
                    },
                    lg: {
                        h: "11",
                        minW: "11",
                        textStyle: "md",
                        px: "5",
                        gap: "3",
                        _icon: {
                            width: "5",
                            height: "5"
                        }
                    },
                    xl: {
                        h: "12",
                        minW: "12",
                        textStyle: "md",
                        px: "5",
                        gap: "2.5",
                        _icon: {
                            width: "5",
                            height: "5"
                        }
                    },
                    "2xl": {
                        h: "16",
                        minW: "16",
                        textStyle: "lg",
                        px: "7",
                        gap: "3",
                        _icon: {
                            width: "6",
                            height: "6"
                        }
                    }
                },
                variant: {
                    solid: {
                        bg: "colorPalette.solid",
                        color: "colorPalette.contrast",
                        borderColor: "transparent",
                        _hover: {
                            bg: "colorPalette.solid/90"
                        },
                        _expanded: {
                            bg: "colorPalette.solid/90"
                        }
                    },
                    subtle: {
                        bg: "colorPalette.subtle",
                        color: "colorPalette.fg",
                        borderColor: "transparent",
                        _hover: {
                            bg: "colorPalette.muted"
                        },
                        _expanded: {
                            bg: "colorPalette.muted"
                        }
                    },
                    surface: {
                        bg: "colorPalette.subtle",
                        color: "colorPalette.fg",
                        shadow: "0 0 0px 1px var(--shadow-color)",
                        shadowColor: "colorPalette.muted",
                        _hover: {
                            bg: "colorPalette.muted"
                        },
                        _expanded: {
                            bg: "colorPalette.muted"
                        }
                    },
                    outline: {
                        borderWidth: "1px",
                        "--outline-color-legacy": "colors.colorPalette.muted",
                        "--outline-color": "colors.colorPalette.border",
                        borderColor: "var(--outline-color, var(--outline-color-legacy))",
                        color: "colorPalette.fg",
                        _hover: {
                            bg: "colorPalette.subtle"
                        },
                        _expanded: {
                            bg: "colorPalette.subtle"
                        }
                    },
                    ghost: {
                        bg: "transparent",
                        color: "colorPalette.fg",
                        _hover: {
                            bg: "colorPalette.subtle"
                        },
                        _expanded: {
                            bg: "colorPalette.subtle"
                        }
                    },
                    plain: {
                        color: "colorPalette.fg"
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "solid"
            }
        }),
        t4 = (0, tB.defineRecipe)({
            className: "chakra-checkmark",
            base: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: "0",
                color: "white",
                borderWidth: "1px",
                borderColor: "transparent",
                borderRadius: "l1",
                cursor: "checkbox",
                focusVisibleRing: "outside",
                _icon: {
                    boxSize: "full"
                },
                _invalid: {
                    colorPalette: "red",
                    borderColor: "border.error"
                },
                _disabled: {
                    opacity: "0.5",
                    cursor: "disabled"
                }
            },
            variants: {
                size: {
                    xs: {
                        boxSize: "3"
                    },
                    sm: {
                        boxSize: "4"
                    },
                    md: {
                        boxSize: "5",
                        p: "0.5"
                    },
                    lg: {
                        boxSize: "6",
                        p: "0.5"
                    }
                },
                variant: {
                    solid: {
                        borderColor: "border.emphasized",
                        "&:is([data-state=checked], [data-state=indeterminate])": {
                            bg: "colorPalette.solid",
                            color: "colorPalette.contrast",
                            borderColor: "colorPalette.solid"
                        }
                    },
                    outline: {
                        borderColor: "border",
                        "&:is([data-state=checked], [data-state=indeterminate])": {
                            color: "colorPalette.fg",
                            borderColor: "colorPalette.solid"
                        }
                    },
                    subtle: {
                        bg: "colorPalette.muted",
                        borderColor: "colorPalette.muted",
                        "&:is([data-state=checked], [data-state=indeterminate])": {
                            color: "colorPalette.fg"
                        }
                    },
                    plain: {
                        "&:is([data-state=checked], [data-state=indeterminate])": {
                            color: "colorPalette.fg"
                        }
                    },
                    inverted: {
                        borderColor: "border",
                        color: "colorPalette.fg",
                        "&:is([data-state=checked], [data-state=indeterminate])": {
                            borderColor: "colorPalette.solid"
                        }
                    }
                },
                filled: {
                    true: {
                        bg: "bg"
                    }
                }
            },
            defaultVariants: {
                variant: "solid",
                size: "md"
            }
        }),
        {
            variants: t6,
            defaultVariants: t8
        } = t5,
        t7 = (0, tB.defineRecipe)({
            className: "chakra-code",
            base: {
                fontFamily: "mono",
                alignItems: "center",
                display: "inline-flex",
                borderRadius: "l2"
            },
            variants: t6,
            defaultVariants: t8
        }),
        t9 = (0, tB.defineRecipe)({
            className: "color-swatch",
            base: {
                boxSize: "var(--swatch-size)",
                shadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
                "--checker-size": "8px",
                "--checker-bg": "colors.bg",
                "--checker-fg": "colors.bg.emphasized",
                background: "linear-gradient(var(--color), var(--color)), repeating-conic-gradient(var(--checker-fg) 0%, var(--checker-fg) 25%, var(--checker-bg) 0%, var(--checker-bg) 50%) 0% 50% / var(--checker-size) var(--checker-size) !important",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: "0"
            },
            variants: {
                size: {
                    "2xs": {
                        "--swatch-size": "sizes.3.5"
                    },
                    xs: {
                        "--swatch-size": "sizes.4"
                    },
                    sm: {
                        "--swatch-size": "sizes.4.5"
                    },
                    md: {
                        "--swatch-size": "sizes.5"
                    },
                    lg: {
                        "--swatch-size": "sizes.6"
                    },
                    xl: {
                        "--swatch-size": "sizes.7"
                    },
                    "2xl": {
                        "--swatch-size": "sizes.8"
                    },
                    inherit: {
                        "--swatch-size": "inherit"
                    },
                    full: {
                        "--swatch-size": "100%"
                    }
                },
                shape: {
                    square: {
                        borderRadius: "none"
                    },
                    circle: {
                        borderRadius: "full"
                    },
                    rounded: {
                        borderRadius: "l1"
                    }
                }
            },
            defaultVariants: {
                size: "md",
                shape: "rounded"
            }
        }),
        ae = (0, tB.defineRecipe)({
            className: "chakra-container",
            base: {
                position: "relative",
                maxWidth: "8xl",
                w: "100%",
                mx: "auto",
                px: {
                    base: "4",
                    md: "6",
                    lg: "8"
                }
            },
            variants: {
                centerContent: {
                    true: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }
                },
                fluid: {
                    true: {
                        maxWidth: "full"
                    }
                }
            }
        }),
        at = (0, tB.defineRecipe)({
            className: "chakra-heading",
            base: {
                fontFamily: "heading",
                fontWeight: "semibold"
            },
            variants: {
                size: {
                    xs: {
                        textStyle: "xs"
                    },
                    sm: {
                        textStyle: "sm"
                    },
                    md: {
                        textStyle: "md"
                    },
                    lg: {
                        textStyle: "lg"
                    },
                    xl: {
                        textStyle: "xl"
                    },
                    "2xl": {
                        textStyle: "2xl"
                    },
                    "3xl": {
                        textStyle: "3xl"
                    },
                    "4xl": {
                        textStyle: "4xl"
                    },
                    "5xl": {
                        textStyle: "5xl"
                    },
                    "6xl": {
                        textStyle: "6xl"
                    },
                    "7xl": {
                        textStyle: "7xl"
                    }
                }
            },
            defaultVariants: {
                size: "xl"
            }
        }),
        aa = (0, tB.defineRecipe)({
            className: "chakra-icon",
            base: {
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: "0",
                color: "currentcolor",
                verticalAlign: "middle"
            },
            variants: {
                size: {
                    inherit: {},
                    xs: {
                        boxSize: "3"
                    },
                    sm: {
                        boxSize: "4"
                    },
                    md: {
                        boxSize: "5"
                    },
                    lg: {
                        boxSize: "6"
                    },
                    xl: {
                        boxSize: "7"
                    },
                    "2xl": {
                        boxSize: "8"
                    }
                }
            },
            defaultVariants: {
                size: "inherit"
            }
        }),
        ar = (0, tB.defineRecipe)({
            className: "chakra-input",
            base: {
                width: "100%",
                minWidth: "0",
                outline: "0",
                position: "relative",
                appearance: "none",
                textAlign: "start",
                borderRadius: "l2",
                _disabled: {
                    layerStyle: "disabled"
                },
                height: "var(--input-height)",
                minW: "var(--input-height)",
                "--focus-color": "colors.colorPalette.focusRing",
                "--error-color": "colors.border.error",
                _invalid: {
                    focusRingColor: "var(--error-color)",
                    borderColor: "var(--error-color)"
                }
            },
            variants: {
                size: {
                    "2xs": {
                        textStyle: "xs",
                        px: "2",
                        "--input-height": "sizes.7"
                    },
                    xs: {
                        textStyle: "xs",
                        px: "2",
                        "--input-height": "sizes.8"
                    },
                    sm: {
                        textStyle: "sm",
                        px: "2.5",
                        "--input-height": "sizes.9"
                    },
                    md: {
                        textStyle: "sm",
                        px: "3",
                        "--input-height": "sizes.10"
                    },
                    lg: {
                        textStyle: "md",
                        px: "4",
                        "--input-height": "sizes.11"
                    },
                    xl: {
                        textStyle: "md",
                        px: "4.5",
                        "--input-height": "sizes.12"
                    },
                    "2xl": {
                        textStyle: "lg",
                        px: "5",
                        "--input-height": "sizes.16"
                    }
                },
                variant: {
                    outline: {
                        bg: "transparent",
                        borderWidth: "1px",
                        borderColor: "border",
                        focusVisibleRing: "inside",
                        focusRingColor: "var(--focus-color)"
                    },
                    subtle: {
                        borderWidth: "1px",
                        borderColor: "transparent",
                        bg: "bg.muted",
                        focusVisibleRing: "inside",
                        focusRingColor: "var(--focus-color)"
                    },
                    flushed: {
                        bg: "transparent",
                        borderBottomWidth: "1px",
                        borderBottomColor: "border",
                        borderRadius: "0",
                        px: "0",
                        _focusVisible: {
                            borderColor: "var(--focus-color)",
                            boxShadow: "0px 1px 0px 0px var(--focus-color)",
                            _invalid: {
                                borderColor: "var(--error-color)",
                                boxShadow: "0px 1px 0px 0px var(--error-color)"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        ai = (0, tB.defineRecipe)({
            className: "chakra-input-addon",
            base: {
                flex: "0 0 auto",
                width: "auto",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                alignSelf: "stretch",
                borderRadius: "l2"
            },
            variants: {
                size: ar.variants.size,
                variant: {
                    outline: {
                        borderWidth: "1px",
                        borderColor: "border",
                        bg: "bg.muted"
                    },
                    subtle: {
                        borderWidth: "1px",
                        borderColor: "transparent",
                        bg: "bg.emphasized"
                    },
                    flushed: {
                        borderBottom: "1px solid",
                        borderColor: "inherit",
                        borderRadius: "0",
                        px: "0",
                        bg: "transparent"
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        ao = (0, tB.defineRecipe)({
            className: "chakra-kbd",
            base: {
                display: "inline-flex",
                alignItems: "center",
                fontWeight: "medium",
                fontFamily: "mono",
                flexShrink: "0",
                whiteSpace: "nowrap",
                wordSpacing: "-0.5em",
                userSelect: "none",
                px: "1",
                borderRadius: "l2"
            },
            variants: {
                variant: {
                    raised: {
                        bg: "colorPalette.subtle",
                        color: "colorPalette.fg",
                        borderWidth: "1px",
                        borderBottomWidth: "2px",
                        borderColor: "colorPalette.muted"
                    },
                    outline: {
                        borderWidth: "1px",
                        color: "colorPalette.fg"
                    },
                    subtle: {
                        bg: "colorPalette.muted",
                        color: "colorPalette.fg"
                    },
                    plain: {
                        color: "colorPalette.fg"
                    }
                },
                size: {
                    sm: {
                        textStyle: "xs",
                        height: "4.5"
                    },
                    md: {
                        textStyle: "sm",
                        height: "5"
                    },
                    lg: {
                        textStyle: "md",
                        height: "6"
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "raised"
            }
        }),
        al = (0, tB.defineRecipe)({
            className: "chakra-link",
            base: {
                display: "inline-flex",
                alignItems: "center",
                outline: "none",
                gap: "1.5",
                cursor: "pointer",
                borderRadius: "l1",
                focusRing: "outside"
            },
            variants: {
                variant: {
                    underline: {
                        color: "colorPalette.fg",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                        textDecorationColor: "currentColor/20"
                    },
                    plain: {
                        color: "colorPalette.fg",
                        _hover: {
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            textDecorationColor: "currentColor/20"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "plain"
            }
        }),
        an = (0, tB.defineRecipe)({
            className: "chakra-mark",
            base: {
                bg: "transparent",
                color: "inherit",
                whiteSpace: "nowrap"
            },
            variants: {
                variant: {
                    subtle: {
                        bg: "colorPalette.subtle",
                        color: "inherit"
                    },
                    solid: {
                        bg: "colorPalette.solid",
                        color: "colorPalette.contrast"
                    },
                    text: {
                        fontWeight: "medium"
                    },
                    plain: {}
                }
            }
        }),
        as = (0, tB.defineRecipe)({
            className: "chakra-radiomark",
            base: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                verticalAlign: "top",
                color: "white",
                borderWidth: "1px",
                borderColor: "transparent",
                borderRadius: "full",
                cursor: "radio",
                _focusVisible: {
                    outline: "2px solid",
                    outlineColor: "colorPalette.focusRing",
                    outlineOffset: "2px"
                },
                _invalid: {
                    colorPalette: "red",
                    borderColor: "red.500"
                },
                _disabled: {
                    opacity: "0.5",
                    cursor: "disabled"
                },
                "& .dot": {
                    height: "100%",
                    width: "100%",
                    borderRadius: "full",
                    bg: "currentColor",
                    scale: "0.4"
                }
            },
            variants: {
                variant: {
                    solid: {
                        borderWidth: "1px",
                        borderColor: "border.emphasized",
                        _checked: {
                            bg: "colorPalette.solid",
                            color: "colorPalette.contrast",
                            borderColor: "colorPalette.solid"
                        }
                    },
                    subtle: {
                        borderWidth: "1px",
                        bg: "colorPalette.muted",
                        borderColor: "colorPalette.muted",
                        color: "transparent",
                        _checked: {
                            color: "colorPalette.fg"
                        }
                    },
                    outline: {
                        borderWidth: "1px",
                        borderColor: "inherit",
                        _checked: {
                            color: "colorPalette.fg",
                            borderColor: "colorPalette.solid"
                        },
                        "& .dot": {
                            scale: "0.6"
                        }
                    },
                    inverted: {
                        bg: "bg",
                        borderWidth: "1px",
                        borderColor: "inherit",
                        _checked: {
                            color: "colorPalette.solid",
                            borderColor: "currentcolor"
                        }
                    }
                },
                size: {
                    xs: {
                        boxSize: "3"
                    },
                    sm: {
                        boxSize: "4"
                    },
                    md: {
                        boxSize: "5"
                    },
                    lg: {
                        boxSize: "6"
                    }
                },
                filled: {
                    true: {
                        bg: "bg"
                    }
                }
            },
            defaultVariants: {
                variant: "solid",
                size: "md"
            }
        }),
        ad = (0, tB.defineRecipe)({
            className: "chakra-separator",
            base: {
                display: "block",
                borderColor: "border"
            },
            variants: {
                variant: {
                    solid: {
                        borderStyle: "solid"
                    },
                    dashed: {
                        borderStyle: "dashed"
                    },
                    dotted: {
                        borderStyle: "dotted"
                    }
                },
                orientation: {
                    vertical: {
                        borderInlineStartWidth: "var(--separator-thickness)"
                    },
                    horizontal: {
                        borderTopWidth: "var(--separator-thickness)"
                    }
                },
                size: {
                    xs: {
                        "--separator-thickness": "0.5px"
                    },
                    sm: {
                        "--separator-thickness": "1px"
                    },
                    md: {
                        "--separator-thickness": "2px"
                    },
                    lg: {
                        "--separator-thickness": "3px"
                    }
                }
            },
            defaultVariants: {
                size: "sm",
                variant: "solid",
                orientation: "horizontal"
            }
        }),
        ac = (0, tB.defineRecipe)({
            className: "chakra-skeleton",
            base: {},
            variants: {
                loading: {
                    true: {
                        borderRadius: "l2",
                        boxShadow: "none",
                        backgroundClip: "padding-box",
                        cursor: "default",
                        color: "transparent",
                        pointerEvents: "none",
                        userSelect: "none",
                        flexShrink: "0",
                        "&::before, &::after, *": {
                            visibility: "hidden"
                        }
                    },
                    false: {
                        background: "unset",
                        animation: "fade-in var(--fade-duration, 0.1s) ease-out !important"
                    }
                },
                variant: {
                    pulse: {
                        background: "bg.emphasized",
                        animation: "pulse",
                        animationDuration: "var(--duration, 1.2s)"
                    },
                    shine: {
                        "--animate-from": "200%",
                        "--animate-to": "-200%",
                        "--start-color": "colors.bg.muted",
                        "--end-color": "colors.bg.emphasized",
                        backgroundImage: "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
                        backgroundSize: "400% 100%",
                        animation: "bg-position var(--duration, 5s) ease-in-out infinite"
                    },
                    none: {
                        animation: "none"
                    }
                }
            },
            defaultVariants: {
                variant: "pulse",
                loading: !0
            }
        }),
        au = (0, tB.defineRecipe)({
            className: "chakra-skip-nav",
            base: {
                display: "inline-flex",
                bg: "bg.panel",
                padding: "2.5",
                borderRadius: "l2",
                fontWeight: "semibold",
                focusVisibleRing: "outside",
                textStyle: "sm",
                userSelect: "none",
                border: "0",
                height: "1px",
                width: "1px",
                margin: "-1px",
                outline: "0",
                overflow: "hidden",
                position: "absolute",
                clip: "rect(0 0 0 0)",
                _focusVisible: {
                    clip: "auto",
                    width: "auto",
                    height: "auto",
                    position: "fixed",
                    top: "6",
                    insetStart: "6"
                }
            }
        }),
        ag = (0, tB.defineRecipe)({
            className: "chakra-spinner",
            base: {
                display: "inline-block",
                borderColor: "currentColor",
                borderStyle: "solid",
                borderWidth: "2px",
                borderRadius: "full",
                width: "var(--spinner-size)",
                height: "var(--spinner-size)",
                animation: "spin",
                animationDuration: "slowest",
                "--spinner-track-color": "transparent",
                borderBottomColor: "var(--spinner-track-color)",
                borderInlineStartColor: "var(--spinner-track-color)"
            },
            variants: {
                size: {
                    inherit: {
                        "--spinner-size": "1em"
                    },
                    xs: {
                        "--spinner-size": "sizes.3"
                    },
                    sm: {
                        "--spinner-size": "sizes.4"
                    },
                    md: {
                        "--spinner-size": "sizes.5"
                    },
                    lg: {
                        "--spinner-size": "sizes.8"
                    },
                    xl: {
                        "--spinner-size": "sizes.10"
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        ap = (0, tB.defineRecipe)({
            className: "chakra-textarea",
            base: {
                width: "100%",
                minWidth: "0",
                outline: "0",
                position: "relative",
                appearance: "none",
                textAlign: "start",
                borderRadius: "l2",
                _disabled: {
                    layerStyle: "disabled"
                },
                "--focus-color": "colors.colorPalette.focusRing",
                "--error-color": "colors.border.error",
                _invalid: {
                    focusRingColor: "var(--error-color)",
                    borderColor: "var(--error-color)"
                }
            },
            variants: {
                size: {
                    xs: {
                        textStyle: "xs",
                        px: "2",
                        py: "1.5",
                        scrollPaddingBottom: "1.5"
                    },
                    sm: {
                        textStyle: "sm",
                        px: "2.5",
                        py: "2",
                        scrollPaddingBottom: "2"
                    },
                    md: {
                        textStyle: "sm",
                        px: "3",
                        py: "2",
                        scrollPaddingBottom: "2"
                    },
                    lg: {
                        textStyle: "md",
                        px: "4",
                        py: "3",
                        scrollPaddingBottom: "3"
                    },
                    xl: {
                        textStyle: "md",
                        px: "4.5",
                        py: "3.5",
                        scrollPaddingBottom: "3.5"
                    }
                },
                variant: {
                    outline: {
                        bg: "transparent",
                        borderWidth: "1px",
                        borderColor: "border",
                        focusVisibleRing: "inside"
                    },
                    subtle: {
                        borderWidth: "1px",
                        borderColor: "transparent",
                        bg: "bg.muted",
                        focusVisibleRing: "inside"
                    },
                    flushed: {
                        bg: "transparent",
                        borderBottomWidth: "1px",
                        borderBottomColor: "border",
                        borderRadius: "0",
                        px: "0",
                        _focusVisible: {
                            borderColor: "var(--focus-color)",
                            boxShadow: "0px 1px 0px 0px var(--focus-color)"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        ah = tB.defineSemanticTokens.colors({
            bg: {
                DEFAULT: {
                    value: {
                        _light: "{colors.white}",
                        _dark: "{colors.black}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.gray.50}",
                        _dark: "{colors.gray.950}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.gray.100}",
                        _dark: "{colors.gray.900}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.gray.200}",
                        _dark: "{colors.gray.800}"
                    }
                },
                inverted: {
                    value: {
                        _light: "{colors.black}",
                        _dark: "{colors.white}"
                    }
                },
                panel: {
                    value: {
                        _light: "{colors.white}",
                        _dark: "{colors.gray.950}"
                    }
                },
                error: {
                    value: {
                        _light: "{colors.red.50}",
                        _dark: "{colors.red.950}"
                    }
                },
                warning: {
                    value: {
                        _light: "{colors.orange.50}",
                        _dark: "{colors.orange.950}"
                    }
                },
                success: {
                    value: {
                        _light: "{colors.green.50}",
                        _dark: "{colors.green.950}"
                    }
                },
                info: {
                    value: {
                        _light: "{colors.blue.50}",
                        _dark: "{colors.blue.950}"
                    }
                }
            },
            fg: {
                DEFAULT: {
                    value: {
                        _light: "{colors.black}",
                        _dark: "{colors.gray.50}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.gray.600}",
                        _dark: "{colors.gray.400}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.gray.400}",
                        _dark: "{colors.gray.500}"
                    }
                },
                inverted: {
                    value: {
                        _light: "{colors.gray.50}",
                        _dark: "{colors.black}"
                    }
                },
                error: {
                    value: {
                        _light: "{colors.red.500}",
                        _dark: "{colors.red.400}"
                    }
                },
                warning: {
                    value: {
                        _light: "{colors.orange.600}",
                        _dark: "{colors.orange.300}"
                    }
                },
                success: {
                    value: {
                        _light: "{colors.green.600}",
                        _dark: "{colors.green.300}"
                    }
                },
                info: {
                    value: {
                        _light: "{colors.blue.600}",
                        _dark: "{colors.blue.300}"
                    }
                }
            },
            border: {
                DEFAULT: {
                    value: {
                        _light: "{colors.gray.200}",
                        _dark: "{colors.gray.800}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.gray.100}",
                        _dark: "{colors.gray.900}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.gray.50}",
                        _dark: "{colors.gray.950}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.gray.300}",
                        _dark: "{colors.gray.700}"
                    }
                },
                inverted: {
                    value: {
                        _light: "{colors.gray.800}",
                        _dark: "{colors.gray.200}"
                    }
                },
                error: {
                    value: {
                        _light: "{colors.red.500}",
                        _dark: "{colors.red.400}"
                    }
                },
                warning: {
                    value: {
                        _light: "{colors.orange.500}",
                        _dark: "{colors.orange.400}"
                    }
                },
                success: {
                    value: {
                        _light: "{colors.green.500}",
                        _dark: "{colors.green.400}"
                    }
                },
                info: {
                    value: {
                        _light: "{colors.blue.500}",
                        _dark: "{colors.blue.400}"
                    }
                }
            },
            gray: {
                contrast: {
                    value: {
                        _light: "{colors.white}",
                        _dark: "{colors.black}"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.gray.800}",
                        _dark: "{colors.gray.200}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.gray.100}",
                        _dark: "{colors.gray.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.gray.200}",
                        _dark: "{colors.gray.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.gray.300}",
                        _dark: "{colors.gray.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.gray.900}",
                        _dark: "{colors.white}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.gray.400}",
                        _dark: "{colors.gray.400}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.gray.200}",
                        _dark: "{colors.gray.800}"
                    }
                }
            },
            red: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.red.700}",
                        _dark: "{colors.red.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.red.100}",
                        _dark: "{colors.red.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.red.200}",
                        _dark: "{colors.red.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.red.300}",
                        _dark: "{colors.red.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.red.600}",
                        _dark: "{colors.red.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.red.500}",
                        _dark: "{colors.red.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.red.500}",
                        _dark: "{colors.red.400}"
                    }
                }
            },
            orange: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "black"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.orange.700}",
                        _dark: "{colors.orange.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.orange.100}",
                        _dark: "{colors.orange.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.orange.200}",
                        _dark: "{colors.orange.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.orange.300}",
                        _dark: "{colors.orange.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.orange.600}",
                        _dark: "{colors.orange.500}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.orange.500}",
                        _dark: "{colors.orange.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.orange.500}",
                        _dark: "{colors.orange.400}"
                    }
                }
            },
            green: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.green.700}",
                        _dark: "{colors.green.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.green.100}",
                        _dark: "{colors.green.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.green.200}",
                        _dark: "{colors.green.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.green.300}",
                        _dark: "{colors.green.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.green.600}",
                        _dark: "{colors.green.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.green.500}",
                        _dark: "{colors.green.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.green.500}",
                        _dark: "{colors.green.400}"
                    }
                }
            },
            blue: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.blue.700}",
                        _dark: "{colors.blue.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.blue.100}",
                        _dark: "{colors.blue.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.blue.200}",
                        _dark: "{colors.blue.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.blue.300}",
                        _dark: "{colors.blue.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.blue.600}",
                        _dark: "{colors.blue.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.blue.500}",
                        _dark: "{colors.blue.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.blue.500}",
                        _dark: "{colors.blue.400}"
                    }
                }
            },
            yellow: {
                contrast: {
                    value: {
                        _light: "black",
                        _dark: "black"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.yellow.800}",
                        _dark: "{colors.yellow.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.yellow.100}",
                        _dark: "{colors.yellow.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.yellow.200}",
                        _dark: "{colors.yellow.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.yellow.300}",
                        _dark: "{colors.yellow.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.yellow.300}",
                        _dark: "{colors.yellow.300}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.yellow.500}",
                        _dark: "{colors.yellow.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.yellow.500}",
                        _dark: "{colors.yellow.500}"
                    }
                }
            },
            teal: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.teal.700}",
                        _dark: "{colors.teal.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.teal.100}",
                        _dark: "{colors.teal.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.teal.200}",
                        _dark: "{colors.teal.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.teal.300}",
                        _dark: "{colors.teal.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.teal.600}",
                        _dark: "{colors.teal.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.teal.500}",
                        _dark: "{colors.teal.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.teal.500}",
                        _dark: "{colors.teal.400}"
                    }
                }
            },
            purple: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.purple.700}",
                        _dark: "{colors.purple.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.purple.100}",
                        _dark: "{colors.purple.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.purple.200}",
                        _dark: "{colors.purple.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.purple.300}",
                        _dark: "{colors.purple.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.purple.600}",
                        _dark: "{colors.purple.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.purple.500}",
                        _dark: "{colors.purple.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.purple.500}",
                        _dark: "{colors.purple.400}"
                    }
                }
            },
            pink: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.pink.700}",
                        _dark: "{colors.pink.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.pink.100}",
                        _dark: "{colors.pink.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.pink.200}",
                        _dark: "{colors.pink.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.pink.300}",
                        _dark: "{colors.pink.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.pink.600}",
                        _dark: "{colors.pink.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.pink.500}",
                        _dark: "{colors.pink.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.pink.500}",
                        _dark: "{colors.pink.400}"
                    }
                }
            },
            cyan: {
                contrast: {
                    value: {
                        _light: "white",
                        _dark: "white"
                    }
                },
                fg: {
                    value: {
                        _light: "{colors.cyan.700}",
                        _dark: "{colors.cyan.300}"
                    }
                },
                subtle: {
                    value: {
                        _light: "{colors.cyan.100}",
                        _dark: "{colors.cyan.900}"
                    }
                },
                muted: {
                    value: {
                        _light: "{colors.cyan.200}",
                        _dark: "{colors.cyan.800}"
                    }
                },
                emphasized: {
                    value: {
                        _light: "{colors.cyan.300}",
                        _dark: "{colors.cyan.700}"
                    }
                },
                solid: {
                    value: {
                        _light: "{colors.cyan.600}",
                        _dark: "{colors.cyan.600}"
                    }
                },
                focusRing: {
                    value: {
                        _light: "{colors.cyan.500}",
                        _dark: "{colors.cyan.500}"
                    }
                },
                border: {
                    value: {
                        _light: "{colors.cyan.500}",
                        _dark: "{colors.cyan.400}"
                    }
                }
            }
        }),
        am = tB.defineSemanticTokens.radii({
            l1: {
                value: "{radii.xs}"
            },
            l2: {
                value: "{radii.sm}"
            },
            l3: {
                value: "{radii.md}"
            }
        }),
        af = tB.defineSemanticTokens.shadows({
            xs: {
                value: {
                    _light: "0px 1px 2px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/20}",
                    _dark: "0px 1px 1px {black/64}, 0px 0px 1px inset {colors.gray.300/20}"
                }
            },
            sm: {
                value: {
                    _light: "0px 2px 4px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
                    _dark: "0px 2px 4px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
                }
            },
            md: {
                value: {
                    _light: "0px 4px 8px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
                    _dark: "0px 4px 8px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
                }
            },
            lg: {
                value: {
                    _light: "0px 8px 16px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
                    _dark: "0px 8px 16px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
                }
            },
            xl: {
                value: {
                    _light: "0px 16px 24px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
                    _dark: "0px 16px 24px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
                }
            },
            "2xl": {
                value: {
                    _light: "0px 24px 40px {colors.gray.900/16}, 0px 0px 1px {colors.gray.900/30}",
                    _dark: "0px 24px 40px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
                }
            },
            inner: {
                value: {
                    _light: "inset 0 2px 4px 0 {black/5}",
                    _dark: "inset 0 2px 4px 0 black"
                }
            },
            inset: {
                value: {
                    _light: "inset 0 0 0 1px {black/5}",
                    _dark: "inset 0 0 0 1px {colors.gray.300/5}"
                }
            }
        });
    var av = e.i(360706),
        ab = e.i(703144),
        ax = e.i(841158),
        ay = e.i(541356),
        aS = e.i(409078),
        ak = e.i(30500),
        aC = e.i(143713),
        aI = e.i(593006),
        aw = (0, av.createAnatomy)("combobox").parts("root", "clearTrigger", "content", "control", "input", "item", "itemGroup", "itemGroupLabel", "itemIndicator", "itemText", "label", "list", "positioner", "trigger");
    aw.build();
    var aE = e => new ab.ListCollection(e);
    aE.empty = () => new ab.ListCollection({
        items: []
    });
    var aP = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "combobox:".concat(e.id, ":content"))
        },
        aV = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.input) ? a : "combobox:".concat(e.id, ":input"))
        },
        aT = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.positioner) ? a : "combobox:".concat(e.id, ":popper"))
        },
        aR = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.control) ? a : "combobox:".concat(e.id, ":control"))
        },
        az = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.trigger) ? a : "combobox:".concat(e.id, ":toggle-btn"))
        },
        a_ = (e, t) => {
            if (null == t) return null;
            let a = '[role=option][data-value="'.concat(CSS.escape(t), '"]');
            return (0, ax.query)(aP(e), a)
        },
        aO = e => {
            let t = aV(e);
            e.isActiveElement(t) || null == t || t.focus({
                preventScroll: !0
            })
        },
        {
            guards: aA,
            createMachine: aN,
            choose: aF
        } = (0, ak.setup)(),
        {
            and: aD,
            not: aL
        } = aA;

    function aW(e) {
        return (e.previousEvent || e).src
    }
    aN({
        props(e) {
            let {
                props: t
            } = e;
            return {
                loopFocus: !0,
                openOnClick: !1,
                defaultValue: [],
                defaultInputValue: "",
                closeOnSelect: !t.multiple,
                allowCustomValue: !1,
                alwaysSubmitOnEnter: !1,
                inputBehavior: "none",
                selectionBehavior: t.multiple ? "clear" : "replace",
                openOnKeyPress: !0,
                openOnChange: !0,
                composite: !0,
                navigate(e) {
                    let {
                        node: t
                    } = e;
                    (0, ax.clickIfLink)(t)
                },
                collection: aE.empty(),
                ...t,
                positioning: {
                    placement: "bottom",
                    sameWidth: !0,
                    ...t.positioning
                },
                translations: {
                    triggerLabel: "Toggle suggestions",
                    clearTriggerLabel: "Clear value",
                    ...t.translations
                }
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("open") || t("defaultOpen") ? "suggesting" : "idle"
        },
        context(e) {
            let {
                prop: t,
                bindable: a,
                getContext: r,
                getEvent: i
            } = e;
            return {
                currentPlacement: a(() => ({
                    defaultValue: void 0
                })),
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    isEqual: aS.isEqual,
                    hash: e => e.join(","),
                    onChange(e) {
                        var a;
                        let i = r(),
                            o = i.get("selectedItems"),
                            l = t("collection"),
                            n = e.map(e => o.find(t => l.getItemValue(t) === e) || l.find(e));
                        i.set("selectedItems", n), null == (a = t("onValueChange")) || a({
                            value: e,
                            items: n
                        })
                    }
                })),
                highlightedValue: a(() => ({
                    defaultValue: t("defaultHighlightedValue") || null,
                    value: t("highlightedValue"),
                    onChange(e) {
                        var a;
                        let r = t("collection").find(e);
                        null == (a = t("onHighlightChange")) || a({
                            highlightedValue: e,
                            highlightedItem: r
                        })
                    }
                })),
                inputValue: a(() => {
                    let e = t("inputValue") || t("defaultInputValue"),
                        a = t("value") || t("defaultValue");
                    if (!e.trim() && !t("multiple")) {
                        let r = t("collection").stringifyMany(a);
                        e = (0, aS.match)(t("selectionBehavior"), {
                            preserve: e || r,
                            replace: r,
                            clear: ""
                        })
                    }
                    return {
                        defaultValue: e,
                        value: t("inputValue"),
                        onChange(e) {
                            var a;
                            let r = i(),
                                o = (r.previousEvent || r).src;
                            null == (a = t("onInputValueChange")) || a({
                                inputValue: e,
                                reason: o
                            })
                        }
                    }
                }),
                highlightedItem: a(() => {
                    let e = t("highlightedValue");
                    return {
                        defaultValue: t("collection").find(e)
                    }
                }),
                selectedItems: a(() => {
                    let e = t("value") || t("defaultValue") || [];
                    return {
                        defaultValue: t("collection").findMany(e)
                    }
                })
            }
        },
        computed: {
            isInputValueEmpty: e => {
                let {
                    context: t
                } = e;
                return 0 === t.get("inputValue").length
            },
            isInteractive: e => {
                let {
                    prop: t
                } = e;
                return !(t("readOnly") || t("disabled"))
            },
            autoComplete: e => {
                let {
                    prop: t
                } = e;
                return "autocomplete" === t("inputBehavior")
            },
            autoHighlight: e => {
                let {
                    prop: t
                } = e;
                return "autohighlight" === t("inputBehavior")
            },
            hasSelectedItems: e => {
                let {
                    context: t
                } = e;
                return t.get("value").length > 0
            },
            valueAsString: e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return a("collection").stringifyItems(t.get("selectedItems"))
            },
            isCustomValue: e => {
                let {
                    context: t,
                    computed: a
                } = e;
                return t.get("inputValue") !== a("valueAsString")
            }
        },
        watch(e) {
            let {
                context: t,
                prop: a,
                track: r,
                action: i,
                send: o
            } = e;
            r([() => t.hash("value")], () => {
                i(["syncSelectedItems"])
            }), r([() => t.get("inputValue")], () => {
                i(["syncInputValue"])
            }), r([() => t.get("highlightedValue")], () => {
                i(["syncHighlightedItem", "autofillInputValue"])
            }), r([() => a("open")], () => {
                i(["toggleVisibility"])
            }), r([() => a("collection").toString()], () => {
                o({
                    type: "CHILDREN_CHANGE"
                })
            })
        },
        on: {
            "SELECTED_ITEMS.SYNC": {
                actions: ["syncSelectedItems"]
            },
            "HIGHLIGHTED_VALUE.SET": {
                actions: ["setHighlightedValue"]
            },
            "HIGHLIGHTED_VALUE.CLEAR": {
                actions: ["clearHighlightedValue"]
            },
            "ITEM.SELECT": {
                actions: ["selectItem"]
            },
            "ITEM.CLEAR": {
                actions: ["clearItem"]
            },
            "VALUE.SET": {
                actions: ["setValue"]
            },
            "INPUT_VALUE.SET": {
                actions: ["setInputValue"]
            },
            "POSITIONING.SET": {
                actions: ["reposition"]
            }
        },
        entry: aF([{
            guard: "autoFocus",
            actions: ["setInitialFocus"]
        }]),
        states: {
            idle: {
                tags: ["idle", "closed"],
                entry: ["scrollContentToTop", "clearHighlightedValue"],
                on: {
                    "CONTROLLED.OPEN": {
                        target: "interacting"
                    },
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem", "invokeOnOpen"]
                    }],
                    "INPUT.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["highlightFirstSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["highlightFirstSelectedItem", "invokeOnOpen"]
                    }],
                    "INPUT.FOCUS": {
                        target: "focused"
                    },
                    OPEN: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["invokeOnOpen"]
                    }],
                    "VALUE.CLEAR": {
                        target: "focused",
                        actions: ["clearInputValue", "clearSelectedItems", "setInitialFocus"]
                    }
                }
            },
            focused: {
                tags: ["focused", "closed"],
                entry: ["scrollContentToTop", "clearHighlightedValue"],
                on: {
                    "CONTROLLED.OPEN": [{
                        guard: "isChangeEvent",
                        target: "suggesting"
                    }, {
                        target: "interacting"
                    }],
                    "INPUT.CHANGE": [{
                        guard: aD("isOpenControlled", "openOnChange"),
                        actions: ["setInputValue", "invokeOnOpen", "highlightFirstItemIfNeeded"]
                    }, {
                        guard: "openOnChange",
                        target: "suggesting",
                        actions: ["setInputValue", "invokeOnOpen", "highlightFirstItemIfNeeded"]
                    }, {
                        actions: ["setInputValue"]
                    }],
                    "LAYER.INTERACT_OUTSIDE": {
                        target: "idle"
                    },
                    "INPUT.ESCAPE": {
                        guard: aD("isCustomValue", aL("allowCustomValue")),
                        actions: ["revertInputValue"]
                    },
                    "INPUT.BLUR": {
                        target: "idle"
                    },
                    "INPUT.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["highlightFirstSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["highlightFirstSelectedItem", "invokeOnOpen"]
                    }],
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["setInitialFocus", "highlightFirstSelectedItem", "invokeOnOpen"]
                    }],
                    "INPUT.ARROW_DOWN": [{
                        guard: aD("isOpenControlled", "autoComplete"),
                        actions: ["invokeOnOpen"]
                    }, {
                        guard: "autoComplete",
                        target: "interacting",
                        actions: ["invokeOnOpen"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["highlightFirstOrSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["highlightFirstOrSelectedItem", "invokeOnOpen"]
                    }],
                    "INPUT.ARROW_UP": [{
                        guard: "autoComplete",
                        target: "interacting",
                        actions: ["invokeOnOpen"]
                    }, {
                        guard: "autoComplete",
                        target: "interacting",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["highlightLastOrSelectedItem", "invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["highlightLastOrSelectedItem", "invokeOnOpen"]
                    }],
                    OPEN: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnOpen"]
                    }, {
                        target: "interacting",
                        actions: ["invokeOnOpen"]
                    }],
                    "VALUE.CLEAR": {
                        actions: ["clearInputValue", "clearSelectedItems"]
                    }
                }
            },
            interacting: {
                tags: ["open", "focused"],
                entry: ["setInitialFocus"],
                effects: ["scrollToHighlightedItem", "trackDismissableLayer", "trackPlacement"],
                on: {
                    "CONTROLLED.CLOSE": [{
                        guard: "restoreFocus",
                        target: "focused",
                        actions: ["setFinalFocus"]
                    }, {
                        target: "idle"
                    }],
                    CHILDREN_CHANGE: [{
                        guard: "isHighlightedItemRemoved",
                        actions: ["clearHighlightedValue"]
                    }, {
                        actions: ["scrollToHighlightedItem"]
                    }],
                    "INPUT.HOME": {
                        actions: ["highlightFirstItem"]
                    },
                    "INPUT.END": {
                        actions: ["highlightLastItem"]
                    },
                    "INPUT.ARROW_DOWN": [{
                        guard: aD("autoComplete", "isLastItemHighlighted"),
                        actions: ["clearHighlightedValue", "scrollContentToTop"]
                    }, {
                        actions: ["highlightNextItem"]
                    }],
                    "INPUT.ARROW_UP": [{
                        guard: aD("autoComplete", "isFirstItemHighlighted"),
                        actions: ["clearHighlightedValue"]
                    }, {
                        actions: ["highlightPrevItem"]
                    }],
                    "INPUT.ENTER": [{
                        guard: aD("isOpenControlled", "isCustomValue", aL("hasHighlightedItem"), aL("allowCustomValue")),
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isCustomValue", aL("hasHighlightedItem"), aL("allowCustomValue")),
                        target: "focused",
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isOpenControlled", "closeOnSelect"),
                        actions: ["selectHighlightedItem", "invokeOnClose"]
                    }, {
                        guard: "closeOnSelect",
                        target: "focused",
                        actions: ["selectHighlightedItem", "invokeOnClose", "setFinalFocus"]
                    }, {
                        actions: ["selectHighlightedItem"]
                    }],
                    "INPUT.CHANGE": [{
                        guard: "autoComplete",
                        target: "suggesting",
                        actions: ["setInputValue"]
                    }, {
                        target: "suggesting",
                        actions: ["clearHighlightedValue", "setInputValue"]
                    }],
                    "ITEM.POINTER_MOVE": {
                        actions: ["setHighlightedValue"]
                    },
                    "ITEM.POINTER_LEAVE": {
                        actions: ["clearHighlightedValue"]
                    },
                    "ITEM.CLICK": [{
                        guard: aD("isOpenControlled", "closeOnSelect"),
                        actions: ["selectItem", "invokeOnClose"]
                    }, {
                        guard: "closeOnSelect",
                        target: "focused",
                        actions: ["selectItem", "invokeOnClose", "setFinalFocus"]
                    }, {
                        actions: ["selectItem"]
                    }],
                    "LAYER.ESCAPE": [{
                        guard: aD("isOpenControlled", "autoComplete"),
                        actions: ["syncInputValue", "invokeOnClose"]
                    }, {
                        guard: "autoComplete",
                        target: "focused",
                        actions: ["syncInputValue", "invokeOnClose"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose", "setFinalFocus"]
                    }],
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose"]
                    }],
                    "LAYER.INTERACT_OUTSIDE": [{
                        guard: aD("isOpenControlled", "isCustomValue", aL("allowCustomValue")),
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isCustomValue", aL("allowCustomValue")),
                        target: "idle",
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "idle",
                        actions: ["invokeOnClose"]
                    }],
                    CLOSE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose", "setFinalFocus"]
                    }],
                    "VALUE.CLEAR": [{
                        guard: "isOpenControlled",
                        actions: ["clearInputValue", "clearSelectedItems", "invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["clearInputValue", "clearSelectedItems", "invokeOnClose", "setFinalFocus"]
                    }]
                }
            },
            suggesting: {
                tags: ["open", "focused"],
                effects: ["trackDismissableLayer", "scrollToHighlightedItem", "trackPlacement"],
                entry: ["setInitialFocus"],
                on: {
                    "CONTROLLED.CLOSE": [{
                        guard: "restoreFocus",
                        target: "focused",
                        actions: ["setFinalFocus"]
                    }, {
                        target: "idle"
                    }],
                    CHILDREN_CHANGE: [{
                        guard: aD("isHighlightedItemRemoved", "hasCollectionItems", "autoHighlight"),
                        actions: ["clearHighlightedValue", "highlightFirstItem"]
                    }, {
                        guard: "isHighlightedItemRemoved",
                        actions: ["clearHighlightedValue"]
                    }, {
                        guard: "autoHighlight",
                        actions: ["highlightFirstItem"]
                    }],
                    "INPUT.ARROW_DOWN": {
                        target: "interacting",
                        actions: ["highlightNextItem"]
                    },
                    "INPUT.ARROW_UP": {
                        target: "interacting",
                        actions: ["highlightPrevItem"]
                    },
                    "INPUT.HOME": {
                        target: "interacting",
                        actions: ["highlightFirstItem"]
                    },
                    "INPUT.END": {
                        target: "interacting",
                        actions: ["highlightLastItem"]
                    },
                    "INPUT.ENTER": [{
                        guard: aD("isOpenControlled", "isCustomValue", aL("hasHighlightedItem"), aL("allowCustomValue")),
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isCustomValue", aL("hasHighlightedItem"), aL("allowCustomValue")),
                        target: "focused",
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isOpenControlled", "closeOnSelect"),
                        actions: ["selectHighlightedItem", "invokeOnClose"]
                    }, {
                        guard: "closeOnSelect",
                        target: "focused",
                        actions: ["selectHighlightedItem", "invokeOnClose", "setFinalFocus"]
                    }, {
                        actions: ["selectHighlightedItem"]
                    }],
                    "INPUT.CHANGE": {
                        actions: ["setInputValue"]
                    },
                    "LAYER.ESCAPE": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose"]
                    }],
                    "ITEM.POINTER_MOVE": {
                        target: "interacting",
                        actions: ["setHighlightedValue"]
                    },
                    "ITEM.POINTER_LEAVE": {
                        actions: ["clearHighlightedValue"]
                    },
                    "LAYER.INTERACT_OUTSIDE": [{
                        guard: aD("isOpenControlled", "isCustomValue", aL("allowCustomValue")),
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: aD("isCustomValue", aL("allowCustomValue")),
                        target: "idle",
                        actions: ["revertInputValue", "invokeOnClose"]
                    }, {
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "idle",
                        actions: ["invokeOnClose"]
                    }],
                    "TRIGGER.CLICK": [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose"]
                    }],
                    "ITEM.CLICK": [{
                        guard: aD("isOpenControlled", "closeOnSelect"),
                        actions: ["selectItem", "invokeOnClose"]
                    }, {
                        guard: "closeOnSelect",
                        target: "focused",
                        actions: ["selectItem", "invokeOnClose", "setFinalFocus"]
                    }, {
                        actions: ["selectItem"]
                    }],
                    CLOSE: [{
                        guard: "isOpenControlled",
                        actions: ["invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["invokeOnClose", "setFinalFocus"]
                    }],
                    "VALUE.CLEAR": [{
                        guard: "isOpenControlled",
                        actions: ["clearInputValue", "clearSelectedItems", "invokeOnClose"]
                    }, {
                        target: "focused",
                        actions: ["clearInputValue", "clearSelectedItems", "invokeOnClose", "setFinalFocus"]
                    }]
                }
            }
        },
        implementations: {
            guards: {
                isInputValueEmpty: e => {
                    let {
                        computed: t
                    } = e;
                    return t("isInputValueEmpty")
                },
                autoComplete: e => {
                    let {
                        computed: t,
                        prop: a
                    } = e;
                    return t("autoComplete") && !a("multiple")
                },
                autoHighlight: e => {
                    let {
                        computed: t
                    } = e;
                    return t("autoHighlight")
                },
                isFirstItemHighlighted: e => {
                    let {
                        prop: t,
                        context: a
                    } = e;
                    return t("collection").firstValue === a.get("highlightedValue")
                },
                isLastItemHighlighted: e => {
                    let {
                        prop: t,
                        context: a
                    } = e;
                    return t("collection").lastValue === a.get("highlightedValue")
                },
                isCustomValue: e => {
                    let {
                        computed: t
                    } = e;
                    return t("isCustomValue")
                },
                allowCustomValue: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("allowCustomValue")
                },
                hasHighlightedItem: e => {
                    let {
                        context: t
                    } = e;
                    return null != t.get("highlightedValue")
                },
                closeOnSelect: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("closeOnSelect")
                },
                isOpenControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return null != t("open")
                },
                openOnChange: e => {
                    let {
                        prop: t,
                        context: a
                    } = e, r = t("openOnChange");
                    return (0, aS.isBoolean)(r) ? r : !!(null == r ? void 0 : r({
                        inputValue: a.get("inputValue")
                    }))
                },
                restoreFocus: e => {
                    var t, a;
                    let {
                        event: r
                    } = e, i = null != (a = r.restoreFocus) ? a : null == (t = r.previousEvent) ? void 0 : t.restoreFocus;
                    return null == i || !!i
                },
                isChangeEvent: e => {
                    var t;
                    let {
                        event: a
                    } = e;
                    return (null == (t = a.previousEvent) ? void 0 : t.type) === "INPUT.CHANGE"
                },
                autoFocus: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("autoFocus")
                },
                isHighlightedItemRemoved: e => {
                    let {
                        prop: t,
                        context: a
                    } = e;
                    return !t("collection").has(a.get("highlightedValue"))
                },
                hasCollectionItems: e => {
                    let {
                        prop: t
                    } = e;
                    return t("collection").size > 0
                }
            },
            effects: {
                trackDismissableLayer(e) {
                    let {
                        send: t,
                        prop: a,
                        scope: r
                    } = e;
                    if (!a("disableLayer")) return (0, aC.trackDismissableElement)(() => aP(r), {
                        type: "listbox",
                        defer: !0,
                        exclude: () => {
                            var e, t;
                            return [aV(r), az(r), r.getById(null != (t = null == (e = r.ids) ? void 0 : e.clearTrigger) ? t : "combobox:".concat(r.id, ":clear-btn"))]
                        },
                        onFocusOutside: a("onFocusOutside"),
                        onPointerDownOutside: a("onPointerDownOutside"),
                        onInteractOutside: a("onInteractOutside"),
                        onEscapeKeyDown(e) {
                            e.preventDefault(), e.stopPropagation(), t({
                                type: "LAYER.ESCAPE",
                                src: "escape-key"
                            })
                        },
                        onDismiss() {
                            t({
                                type: "LAYER.INTERACT_OUTSIDE",
                                src: "interact-outside",
                                restoreFocus: !1
                            })
                        }
                    })
                },
                trackPlacement(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e;
                    return t.set("currentPlacement", a("positioning").placement), (0, ay.getPlacement)(() => aR(r) || az(r), () => aT(r), { ...a("positioning"),
                        defer: !0,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                scrollToHighlightedItem(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r,
                        event: i
                    } = e, o = aV(r), l = [], n = e => {
                        let o = i.current().type.includes("POINTER"),
                            n = t.get("highlightedValue");
                        if (o || !n) return;
                        let s = aP(r),
                            d = a("scrollToIndexFn");
                        if (d) return void d({
                            index: a("collection").indexOf(n),
                            immediate: e,
                            getElement: () => a_(r, n)
                        });
                        let c = a_(r, n),
                            u = (0, ax.raf)(() => {
                                (0, ax.scrollIntoView)(c, {
                                    rootEl: s,
                                    block: "nearest"
                                })
                            });
                        l.push(u)
                    }, s = (0, ax.raf)(() => n(!0));
                    l.push(s);
                    let d = (0, ax.observeAttributes)(o, {
                        attributes: ["aria-activedescendant"],
                        callback: () => n(!1)
                    });
                    return l.push(d), () => {
                        l.forEach(e => e())
                    }
                }
            },
            actions: {
                reposition(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r,
                        event: i
                    } = e;
                    (0, ay.getPlacement)(() => aR(r), () => aT(r), { ...a("positioning"),
                        ...i.options,
                        defer: !0,
                        listeners: !1,
                        onComplete(e) {
                            t.set("currentPlacement", e.placement)
                        }
                    })
                },
                setHighlightedValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    null != a.value && t.set("highlightedValue", a.value)
                },
                clearHighlightedValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("highlightedValue", null)
                },
                selectHighlightedItem(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e, i = r("collection"), o = a.get("highlightedValue");
                    if (!o || !i.has(o)) return;
                    let l = r("multiple") ? (0, aS.addOrRemove)(a.get("value"), o) : [o];
                    null == (t = r("onSelect")) || t({
                        value: l,
                        itemValue: o
                    }), a.set("value", l);
                    let n = (0, aS.match)(r("selectionBehavior"), {
                        preserve: a.get("inputValue"),
                        replace: i.stringifyMany(l),
                        clear: ""
                    });
                    a.set("inputValue", n)
                },
                scrollToHighlightedItem(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e;
                    (0, ax.nextTick)(() => {
                        let e = t.get("highlightedValue");
                        if (null == e) return;
                        let i = a_(r, e),
                            o = aP(r),
                            l = a("scrollToIndexFn");
                        l ? l({
                            index: a("collection").indexOf(e),
                            immediate: !0,
                            getElement: () => a_(r, e)
                        }) : (0, ax.scrollIntoView)(i, {
                            rootEl: o,
                            block: "nearest"
                        })
                    })
                },
                selectItem(e) {
                    let {
                        context: t,
                        event: a,
                        flush: r,
                        prop: i
                    } = e;
                    null != a.value && r(() => {
                        var e;
                        let r = i("multiple") ? (0, aS.addOrRemove)(t.get("value"), a.value) : [a.value];
                        null == (e = i("onSelect")) || e({
                            value: r,
                            itemValue: a.value
                        }), t.set("value", r);
                        let o = (0, aS.match)(i("selectionBehavior"), {
                            preserve: t.get("inputValue"),
                            replace: i("collection").stringifyMany(r),
                            clear: ""
                        });
                        t.set("inputValue", o)
                    })
                },
                clearItem(e) {
                    let {
                        context: t,
                        event: a,
                        flush: r,
                        prop: i
                    } = e;
                    null != a.value && r(() => {
                        let e = (0, aS.remove)(t.get("value"), a.value);
                        t.set("value", e);
                        let r = (0, aS.match)(i("selectionBehavior"), {
                            preserve: t.get("inputValue"),
                            replace: i("collection").stringifyMany(e),
                            clear: ""
                        });
                        t.set("inputValue", r)
                    })
                },
                setInitialFocus(e) {
                    let {
                        scope: t
                    } = e;
                    (0, ax.raf)(() => {
                        aO(t)
                    })
                },
                setFinalFocus(e) {
                    let {
                        scope: t
                    } = e;
                    (0, ax.raf)(() => {
                        let e = az(t);
                        if ((null == e ? void 0 : e.dataset.focusable) == null) aO(t);
                        else {
                            let e;
                            e = az(t), t.isActiveElement(e) || null == e || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                },
                syncInputValue(e) {
                    let {
                        context: t,
                        scope: a,
                        event: r
                    } = e, i = aV(a);
                    i && (i.value = t.get("inputValue"), queueMicrotask(() => {
                        "INPUT.CHANGE" !== r.current().type && (0, ax.setCaretToEnd)(i)
                    }))
                },
                setInputValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("inputValue", a.value)
                },
                clearInputValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("inputValue", "")
                },
                revertInputValue(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e, i = a("selectionBehavior"), o = (0, aS.match)(i, {
                        replace: r("hasSelectedItems") ? r("valueAsString") : "",
                        preserve: t.get("inputValue"),
                        clear: ""
                    });
                    t.set("inputValue", o)
                },
                setValue(e) {
                    let {
                        context: t,
                        flush: a,
                        event: r,
                        prop: i
                    } = e;
                    a(() => {
                        t.set("value", r.value);
                        let e = (0, aS.match)(i("selectionBehavior"), {
                            preserve: t.get("inputValue"),
                            replace: i("collection").stringifyMany(r.value),
                            clear: ""
                        });
                        t.set("inputValue", e)
                    })
                },
                clearSelectedItems(e) {
                    let {
                        context: t,
                        flush: a,
                        prop: r
                    } = e;
                    a(() => {
                        t.set("value", []);
                        let e = (0, aS.match)(r("selectionBehavior"), {
                            preserve: t.get("inputValue"),
                            replace: r("collection").stringifyMany([]),
                            clear: ""
                        });
                        t.set("inputValue", e)
                    })
                },
                scrollContentToTop(e) {
                    let {
                        prop: t,
                        scope: a
                    } = e, r = t("scrollToIndexFn");
                    if (r) {
                        let e = t("collection").firstValue;
                        r({
                            index: 0,
                            immediate: !0,
                            getElement: () => a_(a, e)
                        })
                    } else {
                        let e = aP(a);
                        if (!e) return;
                        e.scrollTop = 0
                    }
                },
                invokeOnOpen(e) {
                    var t;
                    let {
                        prop: a,
                        event: r,
                        context: i
                    } = e, o = aW(r);
                    null == (t = a("onOpenChange")) || t({
                        open: !0,
                        reason: o,
                        value: i.get("value")
                    })
                },
                invokeOnClose(e) {
                    var t;
                    let {
                        prop: a,
                        event: r,
                        context: i
                    } = e, o = aW(r);
                    null == (t = a("onOpenChange")) || t({
                        open: !1,
                        reason: o,
                        value: i.get("value")
                    })
                },
                highlightFirstItem(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e;
                    (aP(r) ? queueMicrotask : ax.raf)(() => {
                        let e = a("collection").firstValue;
                        e && t.set("highlightedValue", e)
                    })
                },
                highlightFirstItemIfNeeded(e) {
                    let {
                        computed: t,
                        action: a
                    } = e;
                    t("autoHighlight") && a(["highlightFirstItem"])
                },
                highlightLastItem(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e;
                    (aP(r) ? queueMicrotask : ax.raf)(() => {
                        let e = a("collection").lastValue;
                        e && t.set("highlightedValue", e)
                    })
                },
                highlightNextItem(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = null, i = t.get("highlightedValue"), o = a("collection");
                    i ? !(r = o.getNextValue(i)) && a("loopFocus") && (r = o.firstValue) : r = o.firstValue, r && t.set("highlightedValue", r)
                },
                highlightPrevItem(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = null, i = t.get("highlightedValue"), o = a("collection");
                    i ? !(r = o.getPreviousValue(i)) && a("loopFocus") && (r = o.lastValue) : r = o.lastValue, r && t.set("highlightedValue", r)
                },
                highlightFirstSelectedItem(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    (0, ax.raf)(() => {
                        let [e] = a("collection").sort(t.get("value"));
                        e && t.set("highlightedValue", e)
                    })
                },
                highlightFirstOrSelectedItem(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e;
                    (0, ax.raf)(() => {
                        let e = null;
                        (e = r("hasSelectedItems") ? a("collection").sort(t.get("value"))[0] : a("collection").firstValue) && t.set("highlightedValue", e)
                    })
                },
                highlightLastOrSelectedItem(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e;
                    (0, ax.raf)(() => {
                        let e = a("collection"),
                            i = null;
                        (i = r("hasSelectedItems") ? e.sort(t.get("value"))[0] : e.lastValue) && t.set("highlightedValue", i)
                    })
                },
                autofillInputValue(e) {
                    let {
                        context: t,
                        computed: a,
                        prop: r,
                        event: i,
                        scope: o
                    } = e, l = aV(o), n = r("collection");
                    if (!a("autoComplete") || !l || !i.keypress) return;
                    let s = n.stringify(t.get("highlightedValue"));
                    (0, ax.raf)(() => {
                        l.value = s || t.get("inputValue")
                    })
                },
                syncSelectedItems(e) {
                    queueMicrotask(() => {
                        let {
                            context: t,
                            prop: a
                        } = e, r = a("collection"), i = t.get("value"), o = i.map(e => t.get("selectedItems").find(t => r.getItemValue(t) === e) || r.find(e));
                        t.set("selectedItems", o);
                        let l = (0, aS.match)(a("selectionBehavior"), {
                            preserve: t.get("inputValue"),
                            replace: r.stringifyMany(i),
                            clear: ""
                        });
                        t.set("inputValue", l)
                    })
                },
                syncHighlightedItem(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection").find(t.get("highlightedValue"));
                    t.set("highlightedItem", r)
                },
                toggleVisibility(e) {
                    let {
                        event: t,
                        send: a,
                        prop: r
                    } = e;
                    a({
                        type: r("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                        previousEvent: t
                    })
                }
            }
        }
    });
    var aM = (0, aI.createProps)()(["allowCustomValue", "autoFocus", "closeOnSelect", "collection", "composite", "defaultHighlightedValue", "defaultInputValue", "defaultOpen", "defaultValue", "dir", "disabled", "disableLayer", "form", "getRootNode", "highlightedValue", "id", "ids", "inputBehavior", "inputValue", "invalid", "loopFocus", "multiple", "name", "navigate", "onFocusOutside", "onHighlightChange", "onInputValueChange", "onInteractOutside", "onOpenChange", "onOpenChange", "onPointerDownOutside", "onSelect", "onValueChange", "open", "openOnChange", "openOnClick", "openOnKeyPress", "placeholder", "positioning", "readOnly", "required", "scrollToIndexFn", "selectionBehavior", "translations", "value", "alwaysSubmitOnEnter"]);
    (0, aS.createSplitProps)(aM);
    var aB = (0, aI.createProps)()(["htmlFor"]);
    (0, aS.createSplitProps)(aB);
    var aH = (0, aI.createProps)()(["id"]);
    (0, aS.createSplitProps)(aH);
    var aj = (0, aI.createProps)()(["item", "persistFocus"]);
    (0, aS.createSplitProps)(aj);
    let aU = aw.extendWith("empty");
    var aG = e.i(570140),
        aG = aG,
        aq = (0, av.createAnatomy)("clipboard").parts("root", "control", "trigger", "indicator", "input", "label");
    aq.build(), (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                timeout: 3e3,
                defaultValue: "",
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e
                        })
                    }
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                context: a,
                action: r
            } = e;
            t([() => a.get("value")], () => {
                r(["syncInputElement"])
            })
        },
        on: {
            "VALUE.SET": {
                actions: ["setValue"]
            },
            COPY: {
                target: "copied",
                actions: ["copyToClipboard", "invokeOnCopy"]
            }
        },
        states: {
            idle: {
                on: {
                    "INPUT.COPY": {
                        target: "copied",
                        actions: ["invokeOnCopy"]
                    }
                }
            },
            copied: {
                effects: ["waitForTimeout"],
                on: {
                    "COPY.DONE": {
                        target: "idle"
                    },
                    COPY: {
                        target: "copied",
                        actions: ["copyToClipboard", "invokeOnCopy"]
                    },
                    "INPUT.COPY": {
                        actions: ["invokeOnCopy"]
                    }
                }
            }
        },
        implementations: {
            effects: {
                waitForTimeout(e) {
                    let {
                        prop: t,
                        send: a
                    } = e;
                    return (0, aS.setRafTimeout)(() => {
                        a({
                            type: "COPY.DONE"
                        })
                    }, t("timeout"))
                }
            },
            actions: {
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                copyToClipboard(e) {
                    let t, {
                        context: a,
                        scope: r
                    } = e;
                    t = a.get("value"),
                        function(e, t) {
                            var a;
                            let r, i = e.defaultView || window;
                            if ((null == (a = i.navigator.clipboard) ? void 0 : a.writeText) !== void 0) return i.navigator.clipboard.writeText(t);
                            if (!e.body) return Promise.reject(Error());
                            let o = (Object.assign((r = e.createElement("pre")).style, {
                                width: "1px",
                                height: "1px",
                                position: "fixed",
                                top: "5px"
                            }), r.textContent = t, r);
                            e.body.appendChild(o),
                                function(e) {
                                    let t = (0, ax.getWindow)(e).getSelection();
                                    if (null == t) return Promise.reject(Error());
                                    t.removeAllRanges();
                                    let a = e.ownerDocument,
                                        r = a.createRange();
                                    r.selectNodeContents(e), t.addRange(r), a.execCommand("copy"), t.removeAllRanges(), Promise.resolve()
                                }(o), e.body.removeChild(o), Promise.resolve()
                        }(r.getDoc(), t)
                },
                invokeOnCopy(e) {
                    var t;
                    let {
                        prop: a
                    } = e;
                    null == (t = a("onStatusChange")) || t({
                        copied: !0
                    })
                },
                syncInputElement(e) {
                    var t, a;
                    let {
                        context: r,
                        scope: i
                    } = e, o = i.getById(null != (a = null == (t = i.ids) ? void 0 : t.input) ? a : "clip:".concat(i.id, ":input"));
                    o && (0, ax.setElementValue)(o, r.get("value"))
                }
            }
        }
    });
    var aY = (0, aI.createProps)()(["getRootNode", "id", "ids", "value", "defaultValue", "timeout", "onStatusChange", "onValueChange"]);
    (0, aS.createSplitProps)(aY);
    var aK = (0, aI.createProps)()(["copied"]);
    (0, aS.createSplitProps)(aK);
    var aX = Object.defineProperty,
        a$ = (e, t, a) => {
            let r;
            return (r = t + "") in e ? aX(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[r] = a
        };

    function aZ(e, t) {
        var a, r, i, o, l, n, s, d, c;
        let {
            xChannel: u,
            yChannel: g,
            dir: p = "ltr"
        } = t, {
            zChannel: h
        } = e.getColorAxes({
            xChannel: u,
            yChannel: g
        }), m = e.getChannelValue(h), {
            minValue: f,
            maxValue: v
        } = e.getChannelRange(h), b = ["top", "rtl" === p ? "left" : "right"], x = !1, y = {
            areaStyles: {},
            areaGradientStyles: {}
        }, S = (m - f) / (v - f), k = "hsla" === e.getFormat();
        switch (h) {
            case "red":
                let C;
                a = x = "green" === u, C = "linear-gradient(to ".concat(b[Number(!a)], ", transparent, #000)"), y = {
                    areaStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(a)], ",rgb(").concat(m, ",0,0),rgb(").concat(m, ",255,0))")
                    },
                    areaGradientStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(a)], ",rgb(").concat(m, ",0,255),rgb(").concat(m, ",255,255))"),
                        WebkitMaskImage: C,
                        maskImage: C
                    }
                };
                break;
            case "green":
                let I;
                r = x = "red" === u, I = "linear-gradient(to ".concat(b[Number(!r)], ", transparent, #000)"), y = {
                    areaStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(r)], ",rgb(0,").concat(m, ",0),rgb(255,").concat(m, ",0))")
                    },
                    areaGradientStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(r)], ",rgb(0,").concat(m, ",255),rgb(255,").concat(m, ",255))"),
                        WebkitMaskImage: I,
                        maskImage: I
                    }
                };
                break;
            case "blue":
                let w;
                i = x = "red" === u, w = "linear-gradient(to ".concat(b[Number(!i)], ", transparent, #000)"), y = {
                    areaStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(i)], ",rgb(0,0,").concat(m, "),rgb(255,0,").concat(m, "))")
                    },
                    areaGradientStyles: {
                        backgroundImage: "linear-gradient(to ".concat(b[Number(i)], ",rgb(0,255,").concat(m, "),rgb(255,255,").concat(m, "))"),
                        WebkitMaskImage: w,
                        maskImage: w
                    }
                };
                break;
            case "hue":
                (x = "saturation" !== u, k) ? (o = x, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        background: ["linear-gradient(to ".concat(b[Number(o)], ", hsla(0,0%,0%,1) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,1) 100%)"), "linear-gradient(to ".concat(b[Number(!o)], ",hsl(0,0%,50%),hsla(0,0%,50%,0))"), "hsl(".concat(m, ", 100%, 50%)")].join(",")
                    }
                }) : (l = x, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        background: ["linear-gradient(to ".concat(b[Number(l)], ",hsl(0,0%,0%),hsla(0,0%,0%,0))"), "linear-gradient(to ".concat(b[Number(!l)], ",hsl(0,0%,100%),hsla(0,0%,100%,0))"), "hsl(".concat(m, ", 100%, 50%)")].join(",")
                    }
                });
                break;
            case "saturation":
                (x = "hue" === u, k) ? (n = x, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        background: ["linear-gradient(to ".concat(b[Number(!n)], ", hsla(0,0%,0%,").concat(S, ") 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,").concat(S, ") 100%)"), "linear-gradient(to ".concat(b[Number(n)], ",hsla(0,100%,50%,").concat(S, "),hsla(60,100%,50%,").concat(S, "),hsla(120,100%,50%,").concat(S, "),hsla(180,100%,50%,").concat(S, "),hsla(240,100%,50%,").concat(S, "),hsla(300,100%,50%,").concat(S, "),hsla(359,100%,50%,").concat(S, "))"), "hsl(0, 0%, 50%)"].join(",")
                    }
                }) : (s = x, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        background: ["linear-gradient(to ".concat(b[Number(!s)], ",hsla(0,0%,0%,").concat(S, "),hsla(0,0%,0%,0))"), "linear-gradient(to ".concat(b[Number(s)], ",hsla(0,100%,50%,").concat(S, "),hsla(60,100%,50%,").concat(S, "),hsla(120,100%,50%,").concat(S, "),hsla(180,100%,50%,").concat(S, "),hsla(240,100%,50%,").concat(S, "),hsla(300,100%,50%,").concat(S, "),hsla(359,100%,50%,").concat(S, "))"), "linear-gradient(to ".concat(b[Number(!s)], ",hsl(0,0%,0%),hsl(0,0%,100%))")].join(",")
                    }
                });
                break;
            case "brightness":
                d = x = "hue" === u, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        background: ["linear-gradient(to ".concat(b[Number(!d)], ",hsla(0,0%,100%,").concat(S, "),hsla(0,0%,100%,0))"), "linear-gradient(to ".concat(b[Number(d)], ",hsla(0,100%,50%,").concat(S, "),hsla(60,100%,50%,").concat(S, "),hsla(120,100%,50%,").concat(S, "),hsla(180,100%,50%,").concat(S, "),hsla(240,100%,50%,").concat(S, "),hsla(300,100%,50%,").concat(S, "),hsla(359,100%,50%,").concat(S, "))"), "#000"].join(",")
                    }
                };
                break;
            case "lightness":
                c = x = "hue" === u, y = {
                    areaStyles: {},
                    areaGradientStyles: {
                        backgroundImage: ["linear-gradient(to ".concat(b[Number(!c)], ",hsl(0,0%,").concat(m, "%),hsla(0,0%,").concat(m, "%,0))"), "linear-gradient(to ".concat(b[Number(c)], ",hsl(0,100%,").concat(m, "%),hsl(60,100%,").concat(m, "%),hsl(120,100%,").concat(m, "%),hsl(180,100%,").concat(m, "%),hsl(240,100%,").concat(m, "%),hsl(300,100%,").concat(m, "%),hsl(360,100%,").concat(m, "%))")].join(",")
                    }
                }
        }
        return y
    }
    var aJ = class {
            toHexInt() {
                return this.toFormat("rgba").toHexInt()
            }
            getChannelValue(e) {
                if (e in this) return this[e];
                throw Error("Unsupported color channel: " + e)
            }
            getChannelValuePercent(e, t) {
                let a = null != t ? t : this.getChannelValue(e),
                    {
                        minValue: r,
                        maxValue: i
                    } = this.getChannelRange(e);
                return (0, aS.getValuePercent)(a, r, i)
            }
            getChannelPercentValue(e, t) {
                let {
                    minValue: a,
                    maxValue: r,
                    step: i
                } = this.getChannelRange(e), o = (0, aS.getPercentValue)(t, a, r, i);
                return (0, aS.snapValueToStep)(o, a, r, i)
            }
            withChannelValue(e, t) {
                let {
                    minValue: a,
                    maxValue: r
                } = this.getChannelRange(e);
                if (e in this) {
                    let i = this.clone();
                    return i[e] = (0, aS.clampValue)(t, a, r), i
                }
                throw Error("Unsupported color channel: " + e)
            }
            getColorAxes(e) {
                let {
                    xChannel: t,
                    yChannel: a
                } = e, r = t || this.getChannels().find(e => e !== a), i = a || this.getChannels().find(e => e !== r), o = this.getChannels().find(e => e !== r && e !== i);
                return {
                    xChannel: r,
                    yChannel: i,
                    zChannel: o
                }
            }
            incrementChannel(e, t) {
                let {
                    minValue: a,
                    maxValue: r,
                    step: i
                } = this.getChannelRange(e), o = (0, aS.snapValueToStep)((0, aS.clampValue)(this.getChannelValue(e) + t, a, r), a, r, i);
                return this.withChannelValue(e, o)
            }
            decrementChannel(e, t) {
                return this.incrementChannel(e, -t)
            }
            isEqual(e) {
                return ((e, t) => {
                    if (Object.keys(e).length !== Object.keys(t).length) return !1;
                    for (let a in e)
                        if (e[a] !== t[a]) return !1;
                    return !0
                })(this.toJSON(), e.toJSON()) && this.getChannelValue("alpha") === e.getChannelValue("alpha")
            }
        },
        aQ = /^#[\da-f]+$/i,
        a0 = /^rgba?\((.*)\)$/,
        a1 = /[^#]/gi,
        a2 = class e extends aJ {
            static parse(t) {
                var a;
                let r = [];
                if (aQ.test(t) && [4, 5, 7, 9].includes(t.length)) {
                    let e = (t.length < 6 ? t.replace(a1, "$&$&") : t).slice(1).split("");
                    for (; e.length > 0;) r.push(parseInt(e.splice(0, 2).join(""), 16));
                    r[3] = void 0 !== r[3] ? r[3] / 255 : void 0
                }
                let i = t.match(a0);
                return (null == i ? void 0 : i[1]) && (r = i[1].split(",").map(e => Number(e.trim())).map((e, t) => (0, aS.clampValue)(e, 0, t < 3 ? 255 : 1))), r.length < 3 ? void 0 : new e(r[0], r[1], r[2], null != (a = r[3]) ? a : 1)
            }
            toString(e) {
                switch (e) {
                    case "hex":
                        return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0")).toUpperCase();
                    case "hexa":
                        return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0") + Math.round(255 * this.alpha).toString(16).padStart(2, "0")).toUpperCase();
                    case "rgb":
                        return "rgb(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ")");
                    case "css":
                    case "rgba":
                        return "rgba(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ", ").concat(this.alpha, ")");
                    case "hsl":
                        return this.toHSL().toString("hsl");
                    case "hsb":
                        return this.toHSB().toString("hsb");
                    default:
                        return this.toFormat(e).toString(e)
                }
            }
            toFormat(e) {
                switch (e) {
                    case "rgba":
                        return this;
                    case "hsba":
                        return this.toHSB();
                    case "hsla":
                        return this.toHSL();
                    default:
                        throw Error("Unsupported color conversion: rgb -> " + e)
                }
            }
            toHexInt() {
                return this.red << 16 | this.green << 8 | this.blue
            }
            toHSB() {
                let e = this.red / 255,
                    t = this.green / 255,
                    a = this.blue / 255,
                    r = Math.min(e, t, a),
                    i = Math.max(e, t, a),
                    o = i - r,
                    l = 0;
                if (0 !== o) {
                    switch (i) {
                        case e:
                            l = (t - a) / o + 6 * (t < a);
                            break;
                        case t:
                            l = (a - e) / o + 2;
                            break;
                        case a:
                            l = (e - t) / o + 4
                    }
                    l /= 6
                }
                return new a7((0, aS.toFixedNumber)(360 * l, 2), (0, aS.toFixedNumber)(100 * (0 === i ? 0 : o / i), 2), (0, aS.toFixedNumber)(100 * i, 2), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            toHSL() {
                let e = this.red / 255,
                    t = this.green / 255,
                    a = this.blue / 255,
                    r = Math.min(e, t, a),
                    i = Math.max(e, t, a),
                    o = (i + r) / 2,
                    l = i - r,
                    n = -1,
                    s = -1;
                if (0 === l) n = s = 0;
                else {
                    switch (s = l / (o < .5 ? i + r : 2 - i - r), i) {
                        case e:
                            n = (t - a) / l + 6 * (t < a);
                            break;
                        case t:
                            n = (a - e) / l + 2;
                            break;
                        case a:
                            n = (e - t) / l + 4
                    }
                    n /= 6
                }
                return new a4((0, aS.toFixedNumber)(360 * n, 2), (0, aS.toFixedNumber)(100 * s, 2), (0, aS.toFixedNumber)(100 * o, 2), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            clone() {
                return new e(this.red, this.green, this.blue, this.alpha)
            }
            getChannelFormatOptions(e) {
                switch (e) {
                    case "red":
                    case "green":
                    case "blue":
                        return {
                            style: "decimal"
                        };
                    case "alpha":
                        return {
                            style: "percent"
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            formatChannelValue(e, t) {
                let a = this.getChannelFormatOptions(e),
                    r = this.getChannelValue(e);
                return new Intl.NumberFormat(t, a).format(r)
            }
            getChannelRange(e) {
                switch (e) {
                    case "red":
                    case "green":
                    case "blue":
                        return {
                            minValue: 0,
                            maxValue: 255,
                            step: 1,
                            pageSize: 17
                        };
                    case "alpha":
                        return {
                            minValue: 0,
                            maxValue: 1,
                            step: .01,
                            pageSize: .1
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            toJSON() {
                return {
                    r: this.red,
                    g: this.green,
                    b: this.blue,
                    a: this.alpha
                }
            }
            getFormat() {
                return "rgba"
            }
            getChannels() {
                return e.colorChannels
            }
            constructor(e, t, a, r) {
                super(), this.red = e, this.green = t, this.blue = a, this.alpha = r
            }
        };
    a$(a2, "colorChannels", ["red", "green", "blue"]);
    var a5 = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,
        a3 = class e extends aJ {
            static parse(t) {
                let a;
                if (a = t.match(a5)) {
                    var r;
                    let [t, i, o, l] = (null != (r = a[1]) ? r : a[2]).split(",").map(e => Number(e.trim().replace("%", "")));
                    return new e((0, aS.mod)(t, 360), (0, aS.clampValue)(i, 0, 100), (0, aS.clampValue)(o, 0, 100), (0, aS.clampValue)(null != l ? l : 1, 0, 1))
                }
            }
            toString(e) {
                switch (e) {
                    case "hex":
                        return this.toRGB().toString("hex");
                    case "hexa":
                        return this.toRGB().toString("hexa");
                    case "hsl":
                        return "hsl(".concat(this.hue, ", ").concat((0, aS.toFixedNumber)(this.saturation, 2), "%, ").concat((0, aS.toFixedNumber)(this.lightness, 2), "%)");
                    case "css":
                    case "hsla":
                        return "hsla(".concat(this.hue, ", ").concat((0, aS.toFixedNumber)(this.saturation, 2), "%, ").concat((0, aS.toFixedNumber)(this.lightness, 2), "%, ").concat(this.alpha, ")");
                    case "hsb":
                        return this.toHSB().toString("hsb");
                    case "rgb":
                        return this.toRGB().toString("rgb");
                    default:
                        return this.toFormat(e).toString(e)
                }
            }
            toFormat(e) {
                switch (e) {
                    case "hsla":
                        return this;
                    case "hsba":
                        return this.toHSB();
                    case "rgba":
                        return this.toRGB();
                    default:
                        throw Error("Unsupported color conversion: hsl -> " + e)
                }
            }
            toHSB() {
                let e = this.saturation / 100,
                    t = this.lightness / 100,
                    a = t + e * Math.min(t, 1 - t);
                return e = 0 === a ? 0 : 2 * (1 - t / a), new a7((0, aS.toFixedNumber)(this.hue, 2), (0, aS.toFixedNumber)(100 * e, 2), (0, aS.toFixedNumber)(100 * a, 2), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            toRGB() {
                let e = this.hue,
                    t = this.saturation / 100,
                    a = this.lightness / 100,
                    r = t * Math.min(a, 1 - a),
                    i = function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (t + e / 30) % 12;
                        return a - r * Math.max(Math.min(i - 3, 9 - i, 1), -1)
                    };
                return new a2(Math.round(255 * i(0)), Math.round(255 * i(8)), Math.round(255 * i(4)), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            clone() {
                return new e(this.hue, this.saturation, this.lightness, this.alpha)
            }
            getChannelFormatOptions(e) {
                switch (e) {
                    case "hue":
                        return {
                            style: "unit",
                            unit: "degree",
                            unitDisplay: "narrow"
                        };
                    case "saturation":
                    case "lightness":
                    case "alpha":
                        return {
                            style: "percent"
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            formatChannelValue(e, t) {
                let a = this.getChannelFormatOptions(e),
                    r = this.getChannelValue(e);
                return ("saturation" === e || "lightness" === e) && (r /= 100), new Intl.NumberFormat(t, a).format(r)
            }
            getChannelRange(e) {
                switch (e) {
                    case "hue":
                        return {
                            minValue: 0,
                            maxValue: 360,
                            step: 1,
                            pageSize: 15
                        };
                    case "saturation":
                    case "lightness":
                        return {
                            minValue: 0,
                            maxValue: 100,
                            step: 1,
                            pageSize: 10
                        };
                    case "alpha":
                        return {
                            minValue: 0,
                            maxValue: 1,
                            step: .01,
                            pageSize: .1
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            toJSON() {
                return {
                    h: this.hue,
                    s: this.saturation,
                    l: this.lightness,
                    a: this.alpha
                }
            }
            getFormat() {
                return "hsla"
            }
            getChannels() {
                return e.colorChannels
            }
            constructor(e, t, a, r) {
                super(), this.hue = e, this.saturation = t, this.lightness = a, this.alpha = r
            }
        };
    a$(a3, "colorChannels", ["hue", "saturation", "lightness"]);
    var a4 = a3,
        a6 = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,
        a8 = class e extends aJ {
            static parse(t) {
                let a;
                if (a = t.match(a6)) {
                    var r;
                    let [t, i, o, l] = (null != (r = a[1]) ? r : a[2]).split(",").map(e => Number(e.trim().replace("%", "")));
                    return new e((0, aS.mod)(t, 360), (0, aS.clampValue)(i, 0, 100), (0, aS.clampValue)(o, 0, 100), (0, aS.clampValue)(null != l ? l : 1, 0, 1))
                }
            }
            toString(e) {
                switch (e) {
                    case "css":
                        return this.toHSL().toString("css");
                    case "hex":
                        return this.toRGB().toString("hex");
                    case "hexa":
                        return this.toRGB().toString("hexa");
                    case "hsb":
                        return "hsb(".concat(this.hue, ", ").concat((0, aS.toFixedNumber)(this.saturation, 2), "%, ").concat((0, aS.toFixedNumber)(this.brightness, 2), "%)");
                    case "hsba":
                        return "hsba(".concat(this.hue, ", ").concat((0, aS.toFixedNumber)(this.saturation, 2), "%, ").concat((0, aS.toFixedNumber)(this.brightness, 2), "%, ").concat(this.alpha, ")");
                    case "hsl":
                        return this.toHSL().toString("hsl");
                    case "rgb":
                        return this.toRGB().toString("rgb");
                    default:
                        return this.toFormat(e).toString(e)
                }
            }
            toFormat(e) {
                switch (e) {
                    case "hsba":
                        return this;
                    case "hsla":
                        return this.toHSL();
                    case "rgba":
                        return this.toRGB();
                    default:
                        throw Error("Unsupported color conversion: hsb -> " + e)
                }
            }
            toHSL() {
                let e = this.saturation / 100,
                    t = this.brightness / 100,
                    a = t * (1 - e / 2);
                return e = 0 === a || 1 === a ? 0 : (t - a) / Math.min(a, 1 - a), new a4((0, aS.toFixedNumber)(this.hue, 2), (0, aS.toFixedNumber)(100 * e, 2), (0, aS.toFixedNumber)(100 * a, 2), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            toRGB() {
                let e = this.hue,
                    t = this.saturation / 100,
                    a = this.brightness / 100,
                    r = function(r) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (r + e / 60) % 6;
                        return a - t * a * Math.max(Math.min(i, 4 - i, 1), 0)
                    };
                return new a2(Math.round(255 * r(5)), Math.round(255 * r(3)), Math.round(255 * r(1)), (0, aS.toFixedNumber)(this.alpha, 2))
            }
            clone() {
                return new e(this.hue, this.saturation, this.brightness, this.alpha)
            }
            getChannelFormatOptions(e) {
                switch (e) {
                    case "hue":
                        return {
                            style: "unit",
                            unit: "degree",
                            unitDisplay: "narrow"
                        };
                    case "saturation":
                    case "brightness":
                    case "alpha":
                        return {
                            style: "percent"
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            formatChannelValue(e, t) {
                let a = this.getChannelFormatOptions(e),
                    r = this.getChannelValue(e);
                return ("saturation" === e || "brightness" === e) && (r /= 100), new Intl.NumberFormat(t, a).format(r)
            }
            getChannelRange(e) {
                switch (e) {
                    case "hue":
                        return {
                            minValue: 0,
                            maxValue: 360,
                            step: 1,
                            pageSize: 15
                        };
                    case "saturation":
                    case "brightness":
                        return {
                            minValue: 0,
                            maxValue: 100,
                            step: 1,
                            pageSize: 10
                        };
                    case "alpha":
                        return {
                            minValue: 0,
                            maxValue: 1,
                            step: .01,
                            pageSize: .1
                        };
                    default:
                        throw Error("Unknown color channel: " + e)
                }
            }
            toJSON() {
                return {
                    h: this.hue,
                    s: this.saturation,
                    b: this.brightness,
                    a: this.alpha
                }
            }
            getFormat() {
                return "hsba"
            }
            getChannels() {
                return e.colorChannels
            }
            constructor(e, t, a, r) {
                super(), this.hue = e, this.saturation = t, this.brightness = a, this.alpha = r
            }
        };
    a$(a8, "colorChannels", ["hue", "saturation", "brightness"]);
    var a7 = a8,
        a9 = (e => {
            let t = new Map,
                a = e.split(",");
            for (let e = 0; e < a.length; e++) {
                let [r, i] = a[e].split(":");
                t.set(r, "#".concat(i)), r.includes("gray") && t.set(r.replace("gray", "grey"), "#".concat(i))
            }
            return t
        })("aliceblue:f0f8ff,antiquewhite:faebd7,aqua:00ffff,aquamarine:7fffd4,azure:f0ffff,beige:f5f5dc,bisque:ffe4c4,black:000000,blanchedalmond:ffebcd,blue:0000ff,blueviolet:8a2be2,brown:a52a2a,burlywood:deb887,cadetblue:5f9ea0,chartreuse:7fff00,chocolate:d2691e,coral:ff7f50,cornflowerblue:6495ed,cornsilk:fff8dc,crimson:dc143c,cyan:00ffff,darkblue:00008b,darkcyan:008b8b,darkgoldenrod:b8860b,darkgray:a9a9a9,darkgreen:006400,darkkhaki:bdb76b,darkmagenta:8b008b,darkolivegreen:556b2f,darkorange:ff8c00,darkorchid:9932cc,darkred:8b0000,darksalmon:e9967a,darkseagreen:8fbc8f,darkslateblue:483d8b,darkslategray:2f4f4f,darkturquoise:00ced1,darkviolet:9400d3,deeppink:ff1493,deepskyblue:00bfff,dimgray:696969,dodgerblue:1e90ff,firebrick:b22222,floralwhite:fffaf0,forestgreen:228b22,fuchsia:ff00ff,gainsboro:dcdcdc,ghostwhite:f8f8ff,gold:ffd700,goldenrod:daa520,gray:808080,green:008000,greenyellow:adff2f,honeydew:f0fff0,hotpink:ff69b4,indianred:cd5c5c,indigo:4b0082,ivory:fffff0,khaki:f0e68c,lavender:e6e6fa,lavenderblush:fff0f5,lawngreen:7cfc00,lemonchiffon:fffacd,lightblue:add8e6,lightcoral:f08080,lightcyan:e0ffff,lightgoldenrodyellow:fafad2,lightgrey:d3d3d3,lightgreen:90ee90,lightpink:ffb6c1,lightsalmon:ffa07a,lightseagreen:20b2aa,lightskyblue:87cefa,lightslategray:778899,lightsteelblue:b0c4de,lightyellow:ffffe0,lime:00ff00,limegreen:32cd32,linen:faf0e6,magenta:ff00ff,maroon:800000,mediumaquamarine:66cdaa,mediumblue:0000cd,mediumorchid:ba55d3,mediumpurple:9370d8,mediumseagreen:3cb371,mediumslateblue:7b68ee,mediumspringgreen:00fa9a,mediumturquoise:48d1cc,mediumvioletred:c71585,midnightblue:191970,mintcream:f5fffa,mistyrose:ffe4e1,moccasin:ffe4b5,navajowhite:ffdead,navy:000080,oldlace:fdf5e6,olive:808000,olivedrab:6b8e23,orange:ffa500,orangered:ff4500,orchid:da70d6,palegoldenrod:eee8aa,palegreen:98fb98,paleturquoise:afeeee,palevioletred:d87093,papayawhip:ffefd5,peachpuff:ffdab9,peru:cd853f,pink:ffc0cb,plum:dda0dd,powderblue:b0e0e6,purple:800080,rebeccapurple:663399,red:ff0000,rosybrown:bc8f8f,royalblue:4169e1,saddlebrown:8b4513,salmon:fa8072,sandybrown:f4a460,seagreen:2e8b57,seashell:fff5ee,sienna:a0522d,silver:c0c0c0,skyblue:87ceeb,slateblue:6a5acd,slategray:708090,snow:fffafa,springgreen:00ff7f,steelblue:4682b4,tan:d2b48c,teal:008080,thistle:d8bfd8,tomato:ff6347,turquoise:40e0d0,violet:ee82ee,wheat:f5deb3,white:ffffff,whitesmoke:f5f5f5,yellow:ffff00,yellowgreen:9acd32"),
        re = e => {
            if (a9.has(e)) return re(a9.get(e));
            let t = a2.parse(e) || a7.parse(e) || a4.parse(e);
            if (!t) {
                var a, r;
                let t = Error("Invalid color value: " + e);
                throw null == (a = (r = Error).captureStackTrace) || a.call(r, t, re), t
            }
            return t
        },
        rt = e => "string" == typeof e ? re(e) : e,
        ra = (0, av.createAnatomy)("color-picker", ["root", "label", "control", "trigger", "positioner", "content", "area", "areaThumb", "valueText", "areaBackground", "channelSlider", "channelSliderLabel", "channelSliderTrack", "channelSliderThumb", "channelSliderValueText", "channelInput", "transparencyGrid", "swatchGroup", "swatchTrigger", "swatchIndicator", "swatch", "eyeDropperTrigger", "formatTrigger", "formatSelect"]),
        rr = ra.build(),
        ri = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.label) ? a : "color-picker:".concat(e.id, ":label")
        },
        ro = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.hiddenInput) ? a : "color-picker:".concat(e.id, ":hidden-input")
        },
        rl = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.control) ? a : "color-picker:".concat(e.id, ":control")
        },
        rn = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.trigger) ? a : "color-picker:".concat(e.id, ":trigger")
        },
        rs = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "color-picker:".concat(e.id, ":content")
        },
        rd = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.positioner) ? a : "color-picker:".concat(e.id, ":positioner")
        },
        rc = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.area) ? a : "color-picker:".concat(e.id, ":area")
        },
        ru = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.areaThumb) ? a : "color-picker:".concat(e.id, ":area-thumb")
        },
        rg = (e, t) => {
            var a, r, i;
            return null != (i = null == (r = e.ids) || null == (a = r.channelSliderTrack) ? void 0 : a.call(r, t)) ? i : "color-picker:".concat(e.id, ":slider-track:").concat(t)
        },
        rp = (e, t) => {
            var a, r, i;
            return null != (i = null == (r = e.ids) || null == (a = r.channelSliderThumb) ? void 0 : a.call(r, t)) ? i : "color-picker:".concat(e.id, ":slider-thumb:").concat(t)
        },
        rh = e => e.getById(rs(e)),
        rm = e => e.getById(ro(e)),
        rf = e => e.getById(rl(e)),
        rv = e => e.getById(rn(e));

    function rb(e, t) {
        if (null == t) return "";
        if ("hex" === t) return e.toString("hex");
        if ("css" === t) return e.toString("css");
        if (t in e) return e.getChannelValue(t).toString();
        let a = "hsla" === e.getFormat();
        switch (t) {
            case "hue":
                return a ? e.toFormat("hsla").getChannelValue("hue").toString() : e.toFormat("hsba").getChannelValue("hue").toString();
            case "saturation":
                return a ? e.toFormat("hsla").getChannelValue("saturation").toString() : e.toFormat("hsba").getChannelValue("saturation").toString();
            case "lightness":
                return e.toFormat("hsla").getChannelValue("lightness").toString();
            case "brightness":
                return e.toFormat("hsba").getChannelValue("brightness").toString();
            case "red":
            case "green":
            case "blue":
                return e.toFormat("rgba").getChannelValue(t).toString();
            default:
                return e.getChannelValue(t).toString()
        }
    }

    function rx(e, t) {
        let {
            context: a,
            send: r,
            prop: i,
            computed: o,
            state: l,
            scope: n
        } = e, s = a.get("value"), d = a.get("format"), c = o("areaValue"), u = o("valueAsString"), g = o("disabled"), p = !!i("readOnly"), h = !!i("invalid"), m = !!i("required"), f = o("interactive"), v = l.hasTag("dragging"), b = l.hasTag("open"), x = l.hasTag("focused"), y = e => {
            var t, a;
            let r = c.getChannels();
            return {
                xChannel: null != (t = e.xChannel) ? t : r[1],
                yChannel: null != (a = e.yChannel) ? a : r[2]
            }
        }, S = a.get("currentPlacement"), k = (0, ay.getPlacementStyles)({ ...i("positioning"),
            placement: S
        });

        function C(e) {
            let t = rt(e.value).toFormat(a.get("format"));
            return {
                value: t,
                valueAsString: t.toString("hex"),
                checked: t.isEqual(s),
                disabled: e.disabled || !f
            }
        }
        return {
            dragging: v,
            open: b,
            valueAsString: u,
            value: s,
            inline: !!i("inline"),
            setOpen(e) {
                i("inline") || l.hasTag("open") !== e && r({
                    type: e ? "OPEN" : "CLOSE"
                })
            },
            setValue(e) {
                r({
                    type: "VALUE.SET",
                    value: rt(e),
                    src: "set-color"
                })
            },
            getChannelValue: e => rb(s, e),
            getChannelValueText: (e, t) => s.formatChannelValue(e, t),
            setChannelValue(e, t) {
                r({
                    type: "VALUE.SET",
                    value: s.withChannelValue(e, t),
                    src: "set-channel"
                })
            },
            format: a.get("format"),
            setFormat(e) {
                r({
                    type: "VALUE.SET",
                    value: s.toFormat(e),
                    src: "set-format"
                })
            },
            alpha: s.getChannelValue("alpha"),
            setAlpha(e) {
                r({
                    type: "VALUE.SET",
                    value: s.withChannelValue("alpha", e),
                    src: "set-alpha"
                })
            },
            getRootProps: () => {
                var e, a;
                return t.element({ ...rr.root.attrs,
                    dir: i("dir"),
                    id: null != (a = null == (e = n.ids) ? void 0 : e.root) ? a : "color-picker:".concat(n.id),
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-readonly": (0, ax.dataAttr)(p),
                    "data-invalid": (0, ax.dataAttr)(h),
                    style: {
                        "--value": s.toString("css")
                    }
                })
            },
            getLabelProps: () => t.element({ ...rr.label.attrs,
                dir: i("dir"),
                id: ri(n),
                htmlFor: ro(n),
                "data-disabled": (0, ax.dataAttr)(g),
                "data-readonly": (0, ax.dataAttr)(p),
                "data-invalid": (0, ax.dataAttr)(h),
                "data-required": (0, ax.dataAttr)(m),
                "data-focus": (0, ax.dataAttr)(x),
                onClick(e) {
                    e.preventDefault();
                    let t = (0, ax.query)(rf(n), "[data-channel=hex]");
                    null == t || t.focus({
                        preventScroll: !0
                    })
                }
            }),
            getControlProps: () => t.element({ ...rr.control.attrs,
                id: rl(n),
                dir: i("dir"),
                "data-disabled": (0, ax.dataAttr)(g),
                "data-readonly": (0, ax.dataAttr)(p),
                "data-invalid": (0, ax.dataAttr)(h),
                "data-state": b ? "open" : "closed",
                "data-focus": (0, ax.dataAttr)(x)
            }),
            getTriggerProps: () => t.button({ ...rr.trigger.attrs,
                id: rn(n),
                dir: i("dir"),
                disabled: g,
                "aria-label": "select color. current color is ".concat(u),
                "aria-controls": rs(n),
                "aria-labelledby": ri(n),
                "data-disabled": (0, ax.dataAttr)(g),
                "data-readonly": (0, ax.dataAttr)(p),
                "data-invalid": (0, ax.dataAttr)(h),
                "data-placement": S,
                "aria-expanded": (0, ax.dataAttr)(b),
                "data-state": b ? "open" : "closed",
                "data-focus": (0, ax.dataAttr)(x),
                type: "button",
                onClick() {
                    f && r({
                        type: "TRIGGER.CLICK"
                    })
                },
                onBlur() {
                    f && r({
                        type: "TRIGGER.BLUR"
                    })
                },
                style: {
                    position: "relative"
                }
            }),
            getPositionerProps: () => t.element({ ...rr.positioner.attrs,
                id: rd(n),
                dir: i("dir"),
                style: k.floating
            }),
            getContentProps: () => t.element({ ...rr.content.attrs,
                id: rs(n),
                dir: i("dir"),
                tabIndex: -1,
                "data-placement": S,
                "data-state": b ? "open" : "closed",
                hidden: !b
            }),
            getValueTextProps: () => t.element({ ...rr.valueText.attrs,
                dir: i("dir"),
                "data-disabled": (0, ax.dataAttr)(g),
                "data-focus": (0, ax.dataAttr)(x)
            }),
            getAreaProps() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        xChannel: a,
                        yChannel: o
                    } = y(e),
                    {
                        areaStyles: l
                    } = aZ(c, {
                        xChannel: a,
                        yChannel: o,
                        dir: i("dir")
                    });
                return t.element({ ...rr.area.attrs,
                    id: rc(n),
                    role: "group",
                    "data-invalid": (0, ax.dataAttr)(h),
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-readonly": (0, ax.dataAttr)(p),
                    onPointerDown(e) {
                        !f || !(0, ax.isLeftClick)(e) || (0, ax.isModifierKey)(e) || (r({
                            type: "AREA.POINTER_DOWN",
                            point: (0, ax.getEventPoint)(e),
                            channel: {
                                xChannel: a,
                                yChannel: o
                            },
                            id: "area"
                        }), e.preventDefault())
                    },
                    style: {
                        position: "relative",
                        touchAction: "none",
                        forcedColorAdjust: "none",
                        ...l
                    }
                })
            },
            getAreaBackgroundProps() {
                var e, a;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        xChannel: o,
                        yChannel: l
                    } = y(r),
                    {
                        areaGradientStyles: s
                    } = aZ(c, {
                        xChannel: o,
                        yChannel: l,
                        dir: i("dir")
                    });
                return t.element({ ...rr.areaBackground.attrs,
                    id: null != (a = null == (e = n.ids) ? void 0 : e.areaGradient) ? a : "color-picker:".concat(n.id, ":area-gradient"),
                    "data-invalid": (0, ax.dataAttr)(h),
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-readonly": (0, ax.dataAttr)(p),
                    style: {
                        position: "relative",
                        touchAction: "none",
                        forcedColorAdjust: "none",
                        ...s
                    }
                })
            },
            getAreaThumbProps() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        xChannel: a,
                        yChannel: o
                    } = y(e),
                    l = {
                        xChannel: a,
                        yChannel: o
                    },
                    s = c.getChannelValuePercent(a),
                    d = 1 - c.getChannelValuePercent(o),
                    u = "rtl" === i("dir"),
                    m = c.getChannelValue(a),
                    v = c.getChannelValue(o),
                    b = c.withChannelValue("alpha", 1).toString("css");
                return t.element({ ...rr.areaThumb.attrs,
                    id: ru(n),
                    dir: i("dir"),
                    tabIndex: g ? void 0 : 0,
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-invalid": (0, ax.dataAttr)(h),
                    "data-readonly": (0, ax.dataAttr)(p),
                    role: "slider",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": m,
                    "aria-label": "".concat(a, " and ").concat(o),
                    "aria-roledescription": "2d slider",
                    "aria-valuetext": "".concat(a, " ").concat(m, ", ").concat(o, " ").concat(v),
                    style: {
                        position: "absolute",
                        left: "".concat(100 * (u ? 1 - s : s), "%"),
                        top: "".concat(100 * d, "%"),
                        transform: "translate(-50%, -50%)",
                        touchAction: "none",
                        forcedColorAdjust: "none",
                        "--color": b,
                        background: b
                    },
                    onFocus() {
                        f && r({
                            type: "AREA.FOCUS",
                            id: "area",
                            channel: l
                        })
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || !f) return;
                        let t = (0, ax.getEventStep)(e),
                            a = {
                                ArrowUp() {
                                    r({
                                        type: "AREA.ARROW_UP",
                                        channel: l,
                                        step: t
                                    })
                                },
                                ArrowDown() {
                                    r({
                                        type: "AREA.ARROW_DOWN",
                                        channel: l,
                                        step: t
                                    })
                                },
                                ArrowLeft() {
                                    r({
                                        type: "AREA.ARROW_LEFT",
                                        channel: l,
                                        step: t
                                    })
                                },
                                ArrowRight() {
                                    r({
                                        type: "AREA.ARROW_RIGHT",
                                        channel: l,
                                        step: t
                                    })
                                },
                                PageUp() {
                                    r({
                                        type: "AREA.PAGE_UP",
                                        channel: l,
                                        step: t
                                    })
                                },
                                PageDown() {
                                    r({
                                        type: "AREA.PAGE_DOWN",
                                        channel: l,
                                        step: t
                                    })
                                },
                                Escape(e) {
                                    e.stopPropagation()
                                }
                            }[(0, ax.getEventKey)(e, {
                                dir: i("dir")
                            })];
                        a && (a(e), e.preventDefault())
                    }
                })
            },
            getTransparencyGridProps() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        size: a = "12px"
                    } = e;
                return t.element({ ...rr.transparencyGrid.attrs,
                    style: {
                        "--size": a,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        backgroundColor: "#fff",
                        backgroundImage: "conic-gradient(#eeeeee 0 25%, transparent 0 50%, #eeeeee 0 75%, transparent 0)",
                        backgroundSize: "var(--size) var(--size)",
                        inset: "0px",
                        zIndex: "auto",
                        pointerEvents: "none"
                    }
                })
            },
            getChannelSliderProps(e) {
                let {
                    orientation: a = "horizontal",
                    channel: i,
                    format: o
                } = e;
                return t.element({ ...rr.channelSlider.attrs,
                    "data-channel": i,
                    "data-orientation": a,
                    role: "presentation",
                    onPointerDown(e) {
                        !f || !(0, ax.isLeftClick)(e) || (0, ax.isModifierKey)(e) || (r({
                            type: "CHANNEL_SLIDER.POINTER_DOWN",
                            channel: i,
                            format: o,
                            point: (0, ax.getEventPoint)(e),
                            id: i,
                            orientation: a
                        }), e.preventDefault())
                    },
                    style: {
                        position: "relative",
                        touchAction: "none"
                    }
                })
            },
            getChannelSliderTrackProps(e) {
                let {
                    orientation: a = "horizontal",
                    channel: r,
                    format: o
                } = e, l = o ? s.toFormat(o) : c;
                return t.element({ ...rr.channelSliderTrack.attrs,
                    id: rg(n, r),
                    role: "group",
                    "data-channel": r,
                    "data-orientation": a,
                    style: {
                        position: "relative",
                        forcedColorAdjust: "none",
                        backgroundImage: (e => {
                            let {
                                channel: t,
                                value: a,
                                dir: r,
                                orientation: i
                            } = e, o = "vertical" === i ? "top" : "ltr" === r ? "right" : "left", {
                                minValue: l,
                                maxValue: n
                            } = a.getChannelRange(t);
                            switch (t) {
                                case "hue":
                                    return "linear-gradient(to ".concat(o, ", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)");
                                case "lightness":
                                    {
                                        let e = a.withChannelValue(t, l).toString("css"),
                                            r = a.withChannelValue(t, (n - l) / 2).toString("css"),
                                            i = a.withChannelValue(t, n).toString("css");
                                        return "linear-gradient(to ".concat(o, ", ").concat(e, ", ").concat(r, ", ").concat(i, ")")
                                    }
                                case "saturation":
                                case "brightness":
                                case "red":
                                case "green":
                                case "blue":
                                case "alpha":
                                    {
                                        let e = a.withChannelValue(t, l).toString("css"),
                                            r = a.withChannelValue(t, n).toString("css");
                                        return "linear-gradient(to ".concat(o, ", ").concat(e, ", ").concat(r, ")")
                                    }
                                default:
                                    throw Error("Unknown color channel: " + t)
                            }
                        })({
                            orientation: a,
                            channel: r,
                            dir: i("dir"),
                            value: l
                        })
                    }
                })
            },
            getChannelSliderLabelProps(e) {
                let {
                    channel: a
                } = e;
                return t.element({ ...rr.channelSliderLabel.attrs,
                    "data-channel": a,
                    onClick(e) {
                        var t;
                        if (!f) return;
                        e.preventDefault();
                        let r = rp(n, a);
                        null == (t = n.getById(r)) || t.focus({
                            preventScroll: !0
                        })
                    },
                    style: {
                        userSelect: "none",
                        WebkitUserSelect: "none"
                    }
                })
            },
            getChannelSliderValueTextProps: e => t.element({ ...rr.channelSliderValueText.attrs,
                "data-channel": e.channel
            }),
            getChannelSliderThumbProps(e) {
                let {
                    orientation: a = "horizontal",
                    channel: o,
                    format: l
                } = e, d = l ? s.toFormat(l) : c, u = d.getChannelRange(o), p = d.getChannelValue(o), h = (p - u.minValue) / (u.maxValue - u.minValue), m = "rtl" === i("dir"), v = "horizontal" === a && m ? 1 - h : h, b = "horizontal" === a ? {
                    left: "".concat(100 * v, "%"),
                    top: "50%"
                } : {
                    top: "".concat(100 * h, "%"),
                    left: "50%"
                };
                return t.element({ ...rr.channelSliderThumb.attrs,
                    id: rp(n, o),
                    role: "slider",
                    "aria-label": o,
                    tabIndex: g ? void 0 : 0,
                    "data-channel": o,
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-orientation": a,
                    "aria-disabled": (0, ax.dataAttr)(g),
                    "aria-orientation": a,
                    "aria-valuemax": u.maxValue,
                    "aria-valuemin": u.minValue,
                    "aria-valuenow": p,
                    "aria-valuetext": "".concat(o, " ").concat(p),
                    style: {
                        forcedColorAdjust: "none",
                        position: "absolute",
                        background: (function(e, t) {
                            switch (t) {
                                case "hue":
                                    return re("hsl(".concat(e.getChannelValue("hue"), ", 100%, 50%)"));
                                case "lightness":
                                case "brightness":
                                case "saturation":
                                case "red":
                                case "green":
                                case "blue":
                                    return e.withChannelValue("alpha", 1);
                                case "alpha":
                                    return e;
                                default:
                                    throw Error("Unknown color channel: " + t)
                            }
                        })(c, o).toString("css"),
                        ...b
                    },
                    onFocus() {
                        f && r({
                            type: "CHANNEL_SLIDER.FOCUS",
                            channel: o
                        })
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || !f) return;
                        let t = (0, ax.getEventStep)(e) * u.step,
                            a = {
                                ArrowUp() {
                                    r({
                                        type: "CHANNEL_SLIDER.ARROW_UP",
                                        channel: o,
                                        step: t
                                    })
                                },
                                ArrowDown() {
                                    r({
                                        type: "CHANNEL_SLIDER.ARROW_DOWN",
                                        channel: o,
                                        step: t
                                    })
                                },
                                ArrowLeft() {
                                    r({
                                        type: "CHANNEL_SLIDER.ARROW_LEFT",
                                        channel: o,
                                        step: t
                                    })
                                },
                                ArrowRight() {
                                    r({
                                        type: "CHANNEL_SLIDER.ARROW_RIGHT",
                                        channel: o,
                                        step: t
                                    })
                                },
                                PageUp() {
                                    r({
                                        type: "CHANNEL_SLIDER.PAGE_UP",
                                        channel: o
                                    })
                                },
                                PageDown() {
                                    r({
                                        type: "CHANNEL_SLIDER.PAGE_DOWN",
                                        channel: o
                                    })
                                },
                                Home() {
                                    r({
                                        type: "CHANNEL_SLIDER.HOME",
                                        channel: o
                                    })
                                },
                                End() {
                                    r({
                                        type: "CHANNEL_SLIDER.END",
                                        channel: o
                                    })
                                },
                                Escape(e) {
                                    e.stopPropagation()
                                }
                            }[(0, ax.getEventKey)(e, {
                                dir: i("dir")
                            })];
                        a && (a(e), e.preventDefault())
                    }
                })
            },
            getChannelInputProps(e) {
                let {
                    channel: a
                } = e, o = "hex" === a || "css" === a, l = function(e, t) {
                    switch (t) {
                        case "hex":
                            let a = re("#000000"),
                                r = re("#FFFFFF");
                            return {
                                minValue: a.toHexInt(),
                                maxValue: r.toHexInt(),
                                pageSize: 10,
                                step: 1
                            };
                        case "css":
                            return;
                        case "hue":
                        case "saturation":
                        case "lightness":
                            return e.toFormat("hsla").getChannelRange(t);
                        case "brightness":
                            return e.toFormat("hsba").getChannelRange(t);
                        case "red":
                        case "green":
                        case "blue":
                            return e.toFormat("rgba").getChannelRange(t);
                        default:
                            return e.getChannelRange(t)
                    }
                }(s, a);
                return t.input({ ...rr.channelInput.attrs,
                    dir: i("dir"),
                    type: o ? "text" : "number",
                    "data-channel": a,
                    "aria-label": a,
                    spellCheck: !1,
                    autoComplete: "off",
                    disabled: g,
                    "data-disabled": (0, ax.dataAttr)(g),
                    "data-invalid": (0, ax.dataAttr)(h),
                    "data-readonly": (0, ax.dataAttr)(p),
                    readOnly: p,
                    defaultValue: rb(s, a),
                    min: null == l ? void 0 : l.minValue,
                    max: null == l ? void 0 : l.maxValue,
                    step: null == l ? void 0 : l.step,
                    onBeforeInput(e) {
                        o || !f || e.currentTarget.value.match(/[^0-9.]/g) && e.preventDefault()
                    },
                    onFocus(e) {
                        f && (r({
                            type: "CHANNEL_INPUT.FOCUS",
                            channel: a
                        }), e.currentTarget.select())
                    },
                    onBlur(e) {
                        f && r({
                            type: "CHANNEL_INPUT.BLUR",
                            channel: a,
                            value: o ? e.currentTarget.value : e.currentTarget.valueAsNumber,
                            isTextField: o
                        })
                    },
                    onKeyDown(e) {
                        e.defaultPrevented || f && "Enter" === e.key && (r({
                            type: "CHANNEL_INPUT.CHANGE",
                            channel: a,
                            value: o ? e.currentTarget.value : e.currentTarget.valueAsNumber,
                            isTextField: o
                        }), e.preventDefault())
                    },
                    style: {
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "textfield"
                    }
                })
            },
            getHiddenInputProps: () => t.input({
                type: "text",
                disabled: g,
                name: i("name"),
                tabIndex: -1,
                readOnly: p,
                required: m,
                id: ro(n),
                style: ax.visuallyHiddenStyle,
                defaultValue: u
            }),
            getEyeDropperTriggerProps: () => t.button({ ...rr.eyeDropperTrigger.attrs,
                type: "button",
                dir: i("dir"),
                disabled: g,
                "data-disabled": (0, ax.dataAttr)(g),
                "data-invalid": (0, ax.dataAttr)(h),
                "data-readonly": (0, ax.dataAttr)(p),
                "aria-label": "Pick a color from the screen",
                onClick() {
                    f && r({
                        type: "EYEDROPPER.CLICK"
                    })
                }
            }),
            getSwatchGroupProps: () => t.element({ ...rr.swatchGroup.attrs,
                role: "group"
            }),
            getSwatchTriggerState: C,
            getSwatchTriggerProps(e) {
                let a = C(e);
                return t.button({ ...rr.swatchTrigger.attrs,
                    disabled: a.disabled,
                    dir: i("dir"),
                    type: "button",
                    "aria-label": "select ".concat(a.valueAsString, " as the color"),
                    "data-state": a.checked ? "checked" : "unchecked",
                    "data-value": a.valueAsString,
                    "data-disabled": (0, ax.dataAttr)(a.disabled),
                    onClick() {
                        a.disabled || r({
                            type: "SWATCH_TRIGGER.CLICK",
                            value: a.value
                        })
                    },
                    style: {
                        "--color": a.valueAsString,
                        position: "relative"
                    }
                })
            },
            getSwatchIndicatorProps(e) {
                let a = C(e);
                return t.element({ ...rr.swatchIndicator.attrs,
                    dir: i("dir"),
                    hidden: !a.checked
                })
            },
            getSwatchProps(e) {
                let {
                    respectAlpha: a = !0
                } = e, r = C(e), o = r.value.toString(a ? "css" : "hex");
                return t.element({ ...rr.swatch.attrs,
                    dir: i("dir"),
                    "data-state": r.checked ? "checked" : "unchecked",
                    "data-value": r.valueAsString,
                    style: {
                        "--color": o,
                        position: "relative",
                        background: o
                    }
                })
            },
            getFormatTriggerProps: () => t.button({ ...rr.formatTrigger.attrs,
                dir: i("dir"),
                type: "button",
                "aria-label": "change color format to ".concat(rk(d)),
                onClick(e) {
                    e.currentTarget.disabled || r({
                        type: "FORMAT.SET",
                        format: rk(d),
                        src: "format-trigger"
                    })
                }
            }),
            getFormatSelectProps: () => t.select({ ...rr.formatSelect.attrs,
                "aria-label": "change color format",
                dir: i("dir"),
                defaultValue: i("format"),
                disabled: g,
                onChange(e) {
                    r({
                        type: "FORMAT.SET",
                        format: function(e) {
                            if (rS.test(e)) return e;
                            throw Error("Unsupported color format: ".concat(e))
                        }(e.currentTarget.value),
                        src: "format-select"
                    })
                }
            })
        }
    }
    var ry = ["hsba", "hsla", "rgba"],
        rS = new RegExp("^(".concat(ry.join("|"), ")$"));

    function rk(e) {
        var t;
        let a = ry.indexOf(e);
        return null != (t = ry[a + 1]) ? t : ry[0]
    }
    var rC = e => re(e),
        rI = /^[0-9a-fA-F]{3,8}$/,
        {
            and: rw
        } = (0, ak.createGuards)(),
        rE = (0, ak.createMachine)({
            props(e) {
                let {
                    props: t
                } = e;
                return {
                    dir: "ltr",
                    defaultValue: rC("#000000"),
                    defaultFormat: "rgba",
                    openAutoFocus: !0,
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
                return t("open") || t("defaultOpen") || t("inline") ? "open" : "idle"
            },
            context(e) {
                let {
                    prop: t,
                    bindable: a,
                    getContext: r
                } = e;
                return {
                    value: a(() => ({
                        defaultValue: t("defaultValue"),
                        value: t("value"),
                        isEqual: (e, t) => e.toString("css") === (null == t ? void 0 : t.toString("css")),
                        hash: e => e.toString("css"),
                        onChange(e) {
                            var a;
                            let i = r(),
                                o = e.toString(i.get("format"));
                            null == (a = t("onValueChange")) || a({
                                value: e,
                                valueAsString: o
                            })
                        }
                    })),
                    format: a(() => ({
                        defaultValue: t("defaultFormat"),
                        value: t("format"),
                        onChange(e) {
                            var a;
                            null == (a = t("onFormatChange")) || a({
                                format: e
                            })
                        }
                    })),
                    activeId: a(() => ({
                        defaultValue: null
                    })),
                    activeChannel: a(() => ({
                        defaultValue: null
                    })),
                    activeOrientation: a(() => ({
                        defaultValue: null
                    })),
                    fieldsetDisabled: a(() => ({
                        defaultValue: !1
                    })),
                    restoreFocus: a(() => ({
                        defaultValue: !0
                    })),
                    currentPlacement: a(() => ({
                        defaultValue: void 0
                    }))
                }
            },
            computed: {
                rtl: e => {
                    let {
                        prop: t
                    } = e;
                    return "rtl" === t("dir")
                },
                disabled: e => {
                    let {
                        prop: t,
                        context: a
                    } = e;
                    return !!t("disabled") || a.get("fieldsetDisabled")
                },
                interactive: e => {
                    let {
                        prop: t
                    } = e;
                    return !(t("disabled") || t("readOnly"))
                },
                valueAsString: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("value").toString(t.get("format"))
                },
                areaValue: e => {
                    let {
                        context: t
                    } = e, a = t.get("format").startsWith("hsl") ? "hsla" : "hsba";
                    return t.get("value").toFormat(a)
                }
            },
            effects: ["trackFormControl"],
            watch(e) {
                let {
                    prop: t,
                    context: a,
                    action: r,
                    track: i
                } = e;
                i([() => a.hash("value")], () => {
                    r(["syncInputElements", "dispatchChangeEvent"])
                }), i([() => a.get("format")], () => {
                    r(["syncFormatSelectElement"])
                }), i([() => t("open")], () => {
                    r(["toggleVisibility"])
                })
            },
            on: {
                "VALUE.SET": {
                    actions: ["setValue"]
                },
                "FORMAT.SET": {
                    actions: ["setFormat"]
                },
                "CHANNEL_INPUT.CHANGE": {
                    actions: ["setChannelColorFromInput"]
                },
                "EYEDROPPER.CLICK": {
                    actions: ["openEyeDropper"]
                },
                "SWATCH_TRIGGER.CLICK": {
                    actions: ["setValue"]
                }
            },
            states: {
                idle: {
                    tags: ["closed"],
                    on: {
                        "CONTROLLED.OPEN": {
                            target: "open",
                            actions: ["setInitialFocus"]
                        },
                        OPEN: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        "TRIGGER.CLICK": [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        "CHANNEL_INPUT.FOCUS": {
                            target: "focused",
                            actions: ["setActiveChannel"]
                        }
                    }
                },
                focused: {
                    tags: ["closed", "focused"],
                    on: {
                        "CONTROLLED.OPEN": {
                            target: "open",
                            actions: ["setInitialFocus"]
                        },
                        OPEN: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        "TRIGGER.CLICK": [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnOpen"]
                        }, {
                            target: "open",
                            actions: ["invokeOnOpen", "setInitialFocus"]
                        }],
                        "CHANNEL_INPUT.FOCUS": {
                            actions: ["setActiveChannel"]
                        },
                        "CHANNEL_INPUT.BLUR": {
                            target: "idle",
                            actions: ["setChannelColorFromInput"]
                        },
                        "TRIGGER.BLUR": {
                            target: "idle"
                        }
                    }
                },
                open: {
                    tags: ["open"],
                    effects: ["trackPositioning", "trackDismissableElement"],
                    on: {
                        "CONTROLLED.CLOSE": [{
                            guard: "shouldRestoreFocus",
                            target: "focused",
                            actions: ["setReturnFocus"]
                        }, {
                            target: "idle"
                        }],
                        "TRIGGER.CLICK": [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "idle",
                            actions: ["invokeOnClose"]
                        }],
                        "AREA.POINTER_DOWN": {
                            target: "open:dragging",
                            actions: ["setActiveChannel", "setAreaColorFromPoint", "focusAreaThumb"]
                        },
                        "AREA.FOCUS": {
                            actions: ["setActiveChannel"]
                        },
                        "CHANNEL_SLIDER.POINTER_DOWN": {
                            target: "open:dragging",
                            actions: ["setActiveChannel", "setChannelColorFromPoint", "focusChannelThumb"]
                        },
                        "CHANNEL_SLIDER.FOCUS": {
                            actions: ["setActiveChannel"]
                        },
                        "AREA.ARROW_LEFT": {
                            actions: ["decrementAreaXChannel"]
                        },
                        "AREA.ARROW_RIGHT": {
                            actions: ["incrementAreaXChannel"]
                        },
                        "AREA.ARROW_UP": {
                            actions: ["incrementAreaYChannel"]
                        },
                        "AREA.ARROW_DOWN": {
                            actions: ["decrementAreaYChannel"]
                        },
                        "AREA.PAGE_UP": {
                            actions: ["incrementAreaXChannel"]
                        },
                        "AREA.PAGE_DOWN": {
                            actions: ["decrementAreaXChannel"]
                        },
                        "CHANNEL_SLIDER.ARROW_LEFT": {
                            actions: ["decrementChannel"]
                        },
                        "CHANNEL_SLIDER.ARROW_RIGHT": {
                            actions: ["incrementChannel"]
                        },
                        "CHANNEL_SLIDER.ARROW_UP": {
                            actions: ["incrementChannel"]
                        },
                        "CHANNEL_SLIDER.ARROW_DOWN": {
                            actions: ["decrementChannel"]
                        },
                        "CHANNEL_SLIDER.PAGE_UP": {
                            actions: ["incrementChannel"]
                        },
                        "CHANNEL_SLIDER.PAGE_DOWN": {
                            actions: ["decrementChannel"]
                        },
                        "CHANNEL_SLIDER.HOME": {
                            actions: ["setChannelToMin"]
                        },
                        "CHANNEL_SLIDER.END": {
                            actions: ["setChannelToMax"]
                        },
                        "CHANNEL_INPUT.BLUR": {
                            actions: ["setChannelColorFromInput"]
                        },
                        INTERACT_OUTSIDE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            guard: "shouldRestoreFocus",
                            target: "focused",
                            actions: ["invokeOnClose", "setReturnFocus"]
                        }, {
                            target: "idle",
                            actions: ["invokeOnClose"]
                        }],
                        CLOSE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "idle",
                            actions: ["invokeOnClose"]
                        }],
                        "SWATCH_TRIGGER.CLICK": [{
                            guard: rw("isOpenControlled", "closeOnSelect"),
                            actions: ["setValue", "invokeOnClose"]
                        }, {
                            guard: "closeOnSelect",
                            target: "focused",
                            actions: ["setValue", "invokeOnClose", "setReturnFocus"]
                        }, {
                            actions: ["setValue"]
                        }]
                    }
                },
                "open:dragging": {
                    tags: ["open"],
                    exit: ["clearActiveChannel"],
                    effects: ["trackPointerMove", "disableTextSelection", "trackPositioning", "trackDismissableElement"],
                    on: {
                        "CONTROLLED.CLOSE": [{
                            guard: "shouldRestoreFocus",
                            target: "focused",
                            actions: ["setReturnFocus"]
                        }, {
                            target: "idle"
                        }],
                        "AREA.POINTER_MOVE": {
                            actions: ["setAreaColorFromPoint", "focusAreaThumb"]
                        },
                        "AREA.POINTER_UP": {
                            target: "open",
                            actions: ["invokeOnChangeEnd"]
                        },
                        "CHANNEL_SLIDER.POINTER_MOVE": {
                            actions: ["setChannelColorFromPoint", "focusChannelThumb"]
                        },
                        "CHANNEL_SLIDER.POINTER_UP": {
                            target: "open",
                            actions: ["invokeOnChangeEnd"]
                        },
                        INTERACT_OUTSIDE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            guard: "shouldRestoreFocus",
                            target: "focused",
                            actions: ["invokeOnClose", "setReturnFocus"]
                        }, {
                            target: "idle",
                            actions: ["invokeOnClose"]
                        }],
                        CLOSE: [{
                            guard: "isOpenControlled",
                            actions: ["invokeOnClose"]
                        }, {
                            target: "idle",
                            actions: ["invokeOnClose"]
                        }]
                    }
                }
            },
            implementations: {
                guards: {
                    closeOnSelect: e => {
                        let {
                            prop: t
                        } = e;
                        return !!t("closeOnSelect")
                    },
                    isOpenControlled: e => {
                        let {
                            prop: t
                        } = e;
                        return null != t("open") || !!t("inline")
                    },
                    shouldRestoreFocus: e => {
                        let {
                            context: t
                        } = e;
                        return !!t.get("restoreFocus")
                    }
                },
                effects: {
                    trackPositioning(e) {
                        let {
                            context: t,
                            prop: a,
                            scope: r
                        } = e;
                        if (a("inline")) return;
                        if (!t.get("currentPlacement")) {
                            var i;
                            t.set("currentPlacement", null == (i = a("positioning")) ? void 0 : i.placement)
                        }
                        let o = rv(r);
                        return (0, ay.getPlacement)(o, () => r.getById(rd(r)), { ...a("positioning"),
                            defer: !0,
                            onComplete(e) {
                                t.set("currentPlacement", e.placement)
                            }
                        })
                    },
                    trackDismissableElement(e) {
                        let {
                            context: t,
                            scope: a,
                            prop: r,
                            send: i
                        } = e;
                        if (!r("inline")) return (0, aC.trackDismissableElement)(() => rh(a), {
                            type: "popover",
                            exclude: rv(a),
                            defer: !0,
                            onInteractOutside(e) {
                                var a;
                                null == (a = r("onInteractOutside")) || a(e), e.defaultPrevented || t.set("restoreFocus", !(e.detail.focusable || e.detail.contextmenu))
                            },
                            onPointerDownOutside: r("onPointerDownOutside"),
                            onFocusOutside: r("onFocusOutside"),
                            onDismiss() {
                                i({
                                    type: "INTERACT_OUTSIDE"
                                })
                            }
                        })
                    },
                    trackFormControl(e) {
                        let {
                            context: t,
                            scope: a,
                            send: r
                        } = e, i = rm(a);
                        return (0, ax.trackFormControl)(i, {
                            onFieldsetDisabledChange(e) {
                                t.set("fieldsetDisabled", e)
                            },
                            onFormReset() {
                                r({
                                    type: "VALUE.SET",
                                    value: t.initial("value"),
                                    src: "form.reset"
                                })
                            }
                        })
                    },
                    trackPointerMove(e) {
                        let {
                            context: t,
                            scope: a,
                            event: r,
                            send: i
                        } = e;
                        return (0, ax.trackPointerMove)(a.getDoc(), {
                            onPointerMove(e) {
                                let {
                                    point: a
                                } = e;
                                i({
                                    type: "area" === t.get("activeId") ? "AREA.POINTER_MOVE" : "CHANNEL_SLIDER.POINTER_MOVE",
                                    point: a,
                                    format: r.format
                                })
                            },
                            onPointerUp() {
                                i({
                                    type: "area" === t.get("activeId") ? "AREA.POINTER_UP" : "CHANNEL_SLIDER.POINTER_UP"
                                })
                            }
                        })
                    },
                    disableTextSelection(e) {
                        let {
                            scope: t
                        } = e;
                        return (0, ax.disableTextSelection)({
                            doc: t.getDoc(),
                            target: rh(t)
                        })
                    }
                },
                actions: {
                    openEyeDropper(e) {
                        let {
                            scope: t,
                            context: a
                        } = e, r = t.getWin();
                        "EyeDropper" in r && new r.EyeDropper().open().then(e => {
                            let {
                                sRGBHex: t
                            } = e, r = a.get("value").getFormat(), i = re(t).toFormat(r);
                            a.set("value", i)
                        }).catch(() => void 0)
                    },
                    setActiveChannel(e) {
                        let {
                            context: t,
                            event: a
                        } = e;
                        t.set("activeId", a.id), a.channel && t.set("activeChannel", a.channel), a.orientation && t.set("activeOrientation", a.orientation)
                    },
                    clearActiveChannel(e) {
                        let {
                            context: t
                        } = e;
                        t.set("activeChannel", null), t.set("activeId", null), t.set("activeOrientation", null)
                    },
                    setAreaColorFromPoint(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r,
                            scope: i,
                            prop: o
                        } = e, l = a.format ? t.get("value").toFormat(a.format) : r("areaValue"), {
                            xChannel: n,
                            yChannel: s
                        } = a.channel || t.get("activeChannel"), d = ((e, t, a) => {
                            let r = e.getById(rc(e));
                            if (!r) return;
                            let {
                                getPercentValue: i
                            } = (0, ax.getRelativePoint)(t, r);
                            return {
                                x: i({
                                    dir: a,
                                    orientation: "horizontal"
                                }),
                                y: i({
                                    orientation: "vertical"
                                })
                            }
                        })(i, a.point, o("dir"));
                        if (!d) return;
                        let c = l.getChannelPercentValue(n, d.x),
                            u = l.getChannelPercentValue(s, 1 - d.y),
                            g = l.withChannelValue(n, c).withChannelValue(s, u);
                        t.set("value", g)
                    },
                    setChannelColorFromPoint(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r,
                            scope: i,
                            prop: o
                        } = e, l = a.channel || t.get("activeId"), n = a.format ? t.get("value").toFormat(a.format) : r("areaValue"), s = ((e, t, a, r) => {
                            let i = e.getById(rg(e, a));
                            if (!i) return;
                            let {
                                getPercentValue: o
                            } = (0, ax.getRelativePoint)(t, i);
                            return {
                                x: o({
                                    dir: r,
                                    orientation: "horizontal"
                                }),
                                y: o({
                                    orientation: "vertical"
                                })
                            }
                        })(i, a.point, l, o("dir"));
                        if (!s) return;
                        let d = "horizontal" === (t.get("activeOrientation") || "horizontal") ? s.x : s.y,
                            c = n.getChannelPercentValue(l, d),
                            u = n.withChannelValue(l, c);
                        t.set("value", u)
                    },
                    setValue(e) {
                        let {
                            context: t,
                            event: a
                        } = e;
                        t.set("value", a.value)
                    },
                    setFormat(e) {
                        let {
                            context: t,
                            event: a
                        } = e;
                        t.set("format", a.format)
                    },
                    dispatchChangeEvent(e) {
                        let {
                            scope: t,
                            computed: a
                        } = e;
                        (0, ax.dispatchInputValueEvent)(rm(t), {
                            value: a("valueAsString")
                        })
                    },
                    syncInputElements(e) {
                        let {
                            context: t,
                            scope: a
                        } = e;
                        rP(a, t.get("value"))
                    },
                    invokeOnChangeEnd(e) {
                        var t;
                        let {
                            context: a,
                            prop: r,
                            computed: i
                        } = e;
                        null == (t = r("onValueChangeEnd")) || t({
                            value: a.get("value"),
                            valueAsString: i("valueAsString")
                        })
                    },
                    setChannelColorFromInput(e) {
                        var t;
                        let a, {
                                context: r,
                                event: i,
                                scope: o,
                                prop: l
                            } = e,
                            {
                                channel: n,
                                isTextField: s,
                                value: d
                            } = i,
                            c = r.get("value").getChannelValue("alpha");
                        if ("alpha" === n) {
                            let e = parseFloat(d);
                            e = Number.isNaN(e) ? c : e, a = r.get("value").withChannelValue("alpha", e)
                        } else if (s) a = (0, aS.tryCatch)(() => rC("hex" === n ? function(e) {
                            return e.startsWith("#") ? e : rI.test(e) ? "#".concat(e) : e
                        }(d) : d).withChannelValue("alpha", c), () => r.get("value"));
                        else {
                            let e = r.get("value").toFormat(r.get("format")),
                                t = Number.isNaN(d) ? e.getChannelValue(n) : d;
                            a = e.withChannelValue(n, t)
                        }
                        rP(o, r.get("value"), a), r.set("value", a), null == (t = l("onValueChangeEnd")) || t({
                            value: a,
                            valueAsString: a.toString(r.get("format"))
                        })
                    },
                    incrementChannel(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = t.get("value").incrementChannel(a.channel, a.step);
                        t.set("value", r)
                    },
                    decrementChannel(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = t.get("value").decrementChannel(a.channel, a.step);
                        t.set("value", r)
                    },
                    incrementAreaXChannel(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r
                        } = e, {
                            xChannel: i
                        } = a.channel, o = r("areaValue").incrementChannel(i, a.step);
                        t.set("value", o)
                    },
                    decrementAreaXChannel(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r
                        } = e, {
                            xChannel: i
                        } = a.channel, o = r("areaValue").decrementChannel(i, a.step);
                        t.set("value", o)
                    },
                    incrementAreaYChannel(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r
                        } = e, {
                            yChannel: i
                        } = a.channel, o = r("areaValue").incrementChannel(i, a.step);
                        t.set("value", o)
                    },
                    decrementAreaYChannel(e) {
                        let {
                            context: t,
                            event: a,
                            computed: r
                        } = e, {
                            yChannel: i
                        } = a.channel, o = r("areaValue").decrementChannel(i, a.step);
                        t.set("value", o)
                    },
                    setChannelToMax(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = t.get("value"), i = r.getChannelRange(a.channel), o = r.withChannelValue(a.channel, i.maxValue);
                        t.set("value", o)
                    },
                    setChannelToMin(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = t.get("value"), i = r.getChannelRange(a.channel), o = r.withChannelValue(a.channel, i.minValue);
                        t.set("value", o)
                    },
                    focusAreaThumb(e) {
                        let {
                            scope: t
                        } = e;
                        (0, ax.raf)(() => {
                            var e;
                            null == (e = t.getById(ru(t))) || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    focusChannelThumb(e) {
                        let {
                            event: t,
                            scope: a
                        } = e;
                        (0, ax.raf)(() => {
                            var e;
                            let r;
                            null === (r = t.channel, e = a.getById(rp(a, r))) || void 0 === e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    setInitialFocus(e) {
                        let {
                            prop: t,
                            scope: a
                        } = e;
                        t("openAutoFocus") && (0, ax.raf)(() => {
                            let e = (0, ax.getInitialFocus)({
                                root: rh(a),
                                getInitialEl: t("initialFocusEl")
                            });
                            null == e || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    setReturnFocus(e) {
                        let {
                            scope: t
                        } = e;
                        (0, ax.raf)(() => {
                            var e;
                            null == (e = rv(t)) || e.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    syncFormatSelectElement(e) {
                        let {
                            context: t,
                            scope: a
                        } = e;
                        ! function(e, t) {
                            var a, r;
                            let i = e.getById(null != (r = null == (a = e.ids) ? void 0 : a.formatSelect) ? r : "color-picker:".concat(e.id, ":format-select"));
                            i && (0, ax.raf)(() => (0, ax.setElementValue)(i, t))
                        }(a, t.get("format"))
                    },
                    invokeOnOpen(e) {
                        var t;
                        let {
                            prop: a,
                            context: r
                        } = e;
                        a("inline") || null == (t = a("onOpenChange")) || t({
                            open: !0,
                            value: r.get("value")
                        })
                    },
                    invokeOnClose(e) {
                        var t;
                        let {
                            prop: a,
                            context: r
                        } = e;
                        a("inline") || null == (t = a("onOpenChange")) || t({
                            open: !1,
                            value: r.get("value")
                        })
                    },
                    toggleVisibility(e) {
                        let {
                            prop: t,
                            event: a,
                            send: r
                        } = e;
                        r({
                            type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
                            previousEvent: a
                        })
                    }
                }
            }
        });

    function rP(e, t, a) {
        let r = [...(0, ax.queryAll)(rh(e), "input[data-channel]"), ...(0, ax.queryAll)(rf(e), "input[data-channel]")];
        (0, ax.raf)(() => {
            r.forEach(e => {
                let r = e.dataset.channel;
                (0, ax.setElementValue)(e, rb(a || t, r))
            })
        })
    }
    var rV = (0, aI.createProps)()(["closeOnSelect", "dir", "disabled", "format", "defaultFormat", "getRootNode", "id", "ids", "initialFocusEl", "inline", "name", "positioning", "onFocusOutside", "onFormatChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onValueChange", "onValueChangeEnd", "defaultOpen", "open", "positioning", "required", "readOnly", "value", "defaultValue", "invalid", "openAutoFocus"]);
    (0, aS.createSplitProps)(rV);
    var rT = (0, aI.createProps)()(["xChannel", "yChannel"]);
    (0, aS.createSplitProps)(rT);
    var rR = (0, aI.createProps)()(["channel", "orientation"]);
    (0, aS.createSplitProps)(rR);
    var rz = (0, aI.createProps)()(["value", "disabled"]);
    (0, aS.createSplitProps)(rz);
    var r_ = (0, aI.createProps)()(["value", "respectAlpha"]);
    (0, aS.createSplitProps)(r_);
    var rO = (0, aI.createProps)()(["size"]);
    (0, aS.createSplitProps)(rO), e.s(["anatomy", () => ra, "connect", () => rx, "machine", () => rE, "parse", () => rC], 703135);
    let rA = ra.extendWith("view");
    e.s(["colorPickerAnatomy", () => rA], 525006);
    var rN = e.i(943517),
        rN = rN,
        rF = e.i(17603),
        rD = (0, av.createAnatomy)("editable").parts("root", "area", "label", "preview", "input", "editTrigger", "submitTrigger", "cancelTrigger", "control");
    rD.build();
    var rL = e => {
        var t, a;
        return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.input) ? a : "editable:".concat(e.id, ":input"))
    };
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                activationMode: "focus",
                submitMode: "both",
                defaultValue: "",
                selectOnFocus: !0,
                ...t,
                translations: {
                    input: "editable input",
                    edit: "edit",
                    submit: "submit",
                    cancel: "cancel",
                    ...t.translations
                }
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("edit") || t("defaultEdit") ? "edit" : "preview"
        },
        entry: ["focusInputIfNeeded"],
        context: e => {
            let {
                bindable: t,
                prop: a
            } = e;
            return {
                value: t(() => ({
                    defaultValue: a("defaultValue"),
                    value: a("value"),
                    onChange(e) {
                        var t;
                        return null == (t = a("onValueChange")) ? void 0 : t({
                            value: e
                        })
                    }
                })),
                previousValue: t(() => ({
                    defaultValue: ""
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                action: a,
                context: r,
                prop: i
            } = e;
            t([() => r.get("value")], () => {
                a(["syncInputValue"])
            }), t([() => i("edit")], () => {
                a(["toggleEditing"])
            })
        },
        computed: {
            submitOnEnter(e) {
                let {
                    prop: t
                } = e, a = t("submitMode");
                return "both" === a || "enter" === a
            },
            submitOnBlur(e) {
                let {
                    prop: t
                } = e, a = t("submitMode");
                return "both" === a || "blur" === a
            },
            isInteractive(e) {
                let {
                    prop: t
                } = e;
                return !(t("disabled") || t("readOnly"))
            }
        },
        on: {
            "VALUE.SET": {
                actions: ["setValue"]
            }
        },
        states: {
            preview: {
                entry: ["blurInput"],
                on: {
                    "CONTROLLED.EDIT": {
                        target: "edit",
                        actions: ["setPreviousValue", "focusInput"]
                    },
                    EDIT: [{
                        guard: "isEditControlled",
                        actions: ["invokeOnEdit"]
                    }, {
                        target: "edit",
                        actions: ["setPreviousValue", "focusInput", "invokeOnEdit"]
                    }]
                }
            },
            edit: {
                effects: ["trackInteractOutside"],
                entry: ["syncInputValue"],
                on: {
                    "CONTROLLED.PREVIEW": [{
                        guard: "isSubmitEvent",
                        target: "preview",
                        actions: ["setPreviousValue", "restoreFocus", "invokeOnSubmit"]
                    }, {
                        target: "preview",
                        actions: ["revertValue", "restoreFocus", "invokeOnCancel"]
                    }],
                    CANCEL: [{
                        guard: "isEditControlled",
                        actions: ["invokeOnPreview"]
                    }, {
                        target: "preview",
                        actions: ["revertValue", "restoreFocus", "invokeOnCancel", "invokeOnPreview"]
                    }],
                    SUBMIT: [{
                        guard: "isEditControlled",
                        actions: ["invokeOnPreview"]
                    }, {
                        target: "preview",
                        actions: ["setPreviousValue", "restoreFocus", "invokeOnSubmit", "invokeOnPreview"]
                    }]
                }
            }
        },
        implementations: {
            guards: {
                isEditControlled: e => {
                    let {
                        prop: t
                    } = e;
                    return void 0 != t("edit")
                },
                isSubmitEvent: e => {
                    var t;
                    let {
                        event: a
                    } = e;
                    return (null == (t = a.previousEvent) ? void 0 : t.type) === "SUBMIT"
                }
            },
            effects: {
                trackInteractOutside(e) {
                    let {
                        send: t,
                        scope: a,
                        prop: r,
                        computed: i
                    } = e;
                    return (0, rF.trackInteractOutside)(rL(a), {
                        exclude(e) {
                            var t, r, i, o;
                            return [a.getById(null != (r = null == (t = a.ids) ? void 0 : t.cancelTrigger) ? r : "editable:".concat(a.id, ":cancel")), a.getById(null != (o = null == (i = a.ids) ? void 0 : i.submitTrigger) ? o : "editable:".concat(a.id, ":submit"))].some(t => (0, ax.contains)(t, e))
                        },
                        onFocusOutside: r("onFocusOutside"),
                        onPointerDownOutside: r("onPointerDownOutside"),
                        onInteractOutside(e) {
                            var a;
                            if (null == (a = r("onInteractOutside")) || a(e), e.defaultPrevented) return;
                            let {
                                focusable: o
                            } = e.detail;
                            t({
                                type: i("submitOnBlur") ? "SUBMIT" : "CANCEL",
                                src: "interact-outside",
                                focusable: o
                            })
                        }
                    })
                }
            },
            actions: {
                restoreFocus(e) {
                    let {
                        event: t,
                        scope: a,
                        prop: r
                    } = e;
                    t.focusable || (0, ax.raf)(() => {
                        var e, t, i, o;
                        let l = null != (t = null == (e = r("finalFocusEl")) ? void 0 : e()) ? t : a.getById(null != (o = null == (i = a.ids) ? void 0 : i.editTrigger) ? o : "editable:".concat(a.id, ":edit"));
                        null == l || l.focus({
                            preventScroll: !0
                        })
                    })
                },
                clearValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", "")
                },
                focusInputIfNeeded(e) {
                    let {
                        action: t,
                        prop: a
                    } = e;
                    (a("edit") || a("defaultEdit")) && t(["focusInput"])
                },
                focusInput(e) {
                    let {
                        scope: t,
                        prop: a
                    } = e;
                    (0, ax.raf)(() => {
                        let e = rL(t);
                        e && (a("selectOnFocus") ? e.select() : e.focus({
                            preventScroll: !0
                        }))
                    })
                },
                invokeOnCancel(e) {
                    var t;
                    let {
                        prop: a,
                        context: r
                    } = e, i = r.get("previousValue");
                    null == (t = a("onValueRevert")) || t({
                        value: i
                    })
                },
                invokeOnSubmit(e) {
                    var t;
                    let {
                        prop: a,
                        context: r
                    } = e, i = r.get("value");
                    null == (t = a("onValueCommit")) || t({
                        value: i
                    })
                },
                invokeOnEdit(e) {
                    var t;
                    let {
                        prop: a
                    } = e;
                    null == (t = a("onEditChange")) || t({
                        edit: !0
                    })
                },
                invokeOnPreview(e) {
                    var t;
                    let {
                        prop: a
                    } = e;
                    null == (t = a("onEditChange")) || t({
                        edit: !1
                    })
                },
                toggleEditing(e) {
                    let {
                        prop: t,
                        send: a,
                        event: r
                    } = e;
                    a({
                        type: t("edit") ? "CONTROLLED.EDIT" : "CONTROLLED.PREVIEW",
                        previousEvent: r
                    })
                },
                syncInputValue(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = rL(a);
                    r && (0, ax.setElementValue)(r, t.get("value"))
                },
                setValue(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r
                    } = e, i = a("maxLength"), o = null != i ? r.value.slice(0, i) : r.value;
                    t.set("value", o)
                },
                setPreviousValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("previousValue", t.get("value"))
                },
                revertValue(e) {
                    let {
                        context: t
                    } = e, a = t.get("previousValue");
                    a && t.set("value", a)
                },
                blurInput(e) {
                    var t;
                    let {
                        scope: a
                    } = e;
                    null == (t = rL(a)) || t.blur()
                }
            }
        }
    });
    var rW = (0, aI.createProps)()(["activationMode", "autoResize", "dir", "disabled", "finalFocusEl", "form", "getRootNode", "id", "ids", "invalid", "maxLength", "name", "onEditChange", "onFocusOutside", "onInteractOutside", "onPointerDownOutside", "onValueChange", "onValueCommit", "onValueRevert", "placeholder", "readOnly", "required", "selectOnFocus", "edit", "defaultEdit", "submitMode", "translations", "defaultValue", "value"]);
    (0, aS.createSplitProps)(rW);
    var rM = e.i(565398);
    let rB = (0, av.createAnatomy)("fieldset").parts("root", "errorText", "helperText", "legend");
    rB.build();
    var rH = e => "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e) || /^.*\.[\w]+$/.test(e),
        rj = (e, t) => e.name === t.name && e.size === t.size && e.type === t.type,
        rU = new Map("3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip".split("[").flatMap(e => {
            let [t, a] = e.split("_");
            return t.split(",").map(e => [e, a])
        }));

    function rG(e) {
        let t = new Map;
        return function(a, r) {
            let i = a + (r ? Object.entries(r).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
            if (t.has(i)) return t.get(i);
            let o = new e(a, r);
            return t.set(i, o), o
        }
    }
    rG(Intl.Collator);
    var rq = rG(Intl.Collator);

    function rY(e) {
        let {
            locale: t,
            ...a
        } = e || {}, r = rq(t || "en-US", {
            usage: "search",
            ...a
        });

        function i(e) {
            return e = e.normalize("NFC"), r.resolvedOptions().ignorePunctuation && (e = e.replace(/\p{P}/gu, "")), e
        }
        return {
            startsWith: function(e, t) {
                return 0 === t.length || (e = i(e), t = i(t), 0 === r.compare(e.slice(0, t.length), t))
            },
            endsWith: function(e, t) {
                return 0 === t.length || (e = i(e), t = i(t), 0 === r.compare(e.slice(-t.length), t))
            },
            contains: function(e, t) {
                if (0 === t.length) return !0;
                e = i(e);
                let a = 0,
                    o = (t = i(t)).length;
                for (; a + o <= e.length; a++) {
                    let i = e.slice(a, a + o);
                    if (0 === r.compare(t, i)) return !0
                }
                return !1
            }
        }
    }
    var rK = rG(Intl.NumberFormat),
        rX = ["", "kilo", "mega", "giga", "tera"],
        r$ = ["", "kilo", "mega", "giga", "tera", "peta"],
        rZ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (Number.isNaN(e)) return "";
            if (0 === e) return "0 B";
            let {
                unitSystem: r = "decimal",
                precision: i = 3,
                unit: o = "byte",
                unitDisplay: l = "short"
            } = a, n = "binary" === r ? 1024 : 1e3, s = "bit" === o ? rX : r$, d = Math.abs(e), c = 0;
            for (; d >= n && c < s.length - 1;) d /= n, c++;
            let u = parseFloat(d.toPrecision(i));
            return function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return rK(t, a).format(e)
            }(e < 0 ? -u : u, t, {
                style: "unit",
                unit: s[c] + o,
                unitDisplay: l
            })
        };
    rG(Intl.ListFormat), rG(Intl.RelativeTimeFormat), e.s(["createFilter", () => rY, "formatBytes", () => rZ], 941387);
    var rJ = (0, av.createAnatomy)("file-upload").parts("root", "dropzone", "item", "itemDeleteTrigger", "itemGroup", "itemName", "itemPreview", "itemPreviewImage", "itemSizeText", "label", "trigger", "clearTrigger");
    rJ.build();
    var rQ = e => {
        var t, a;
        return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.hiddenInput) ? a : "file:".concat(e.id, ":input"))
    };

    function r0(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            {
                prop: i,
                computed: o
            } = e,
            l = [],
            n = [],
            s = {
                acceptedFiles: a,
                rejectedFiles: r
            };
        return t.forEach(e => {
            var t, a;
            let r, [d, c] = (a = o("acceptAttr"), [r = "application/x-moz-file" === e.type || function(e, t) {
                    if (e && t) {
                        let a, r = Array.isArray(t) ? t : "string" == typeof t ? t.split(",") : [];
                        if (0 === r.length) return !0;
                        let i = e.name || "",
                            o = (e.type || (a = i.split(".").pop()) && rU.get(a) || "").toLowerCase(),
                            l = o.replace(/\/.*$/, "");
                        return r.some(e => {
                            let t = e.trim().toLowerCase();
                            return "." === t.charAt(0) ? i.toLowerCase().endsWith(t) : t.endsWith("/*") ? l === t.replace(/\/.*$/, "") : o === t
                        })
                    }
                    return !0
                }(e, a), r ? null : "FILE_INVALID_TYPE"]),
                [u, g] = function(e, t, a) {
                    if (null != e.size)
                        if (null != t && null != a) {
                            if (e.size > a) return [!1, "FILE_TOO_LARGE"];
                            if (e.size < t) return [!1, "FILE_TOO_SMALL"]
                        } else {
                            if (null != t && e.size < t) return [!1, "FILE_TOO_SMALL"];
                            if (null != a && e.size > a) return [!1, "FILE_TOO_LARGE"]
                        }
                    return [!0, null]
                }(e, i("minFileSize"), i("maxFileSize")),
                p = null == (t = i("validate")) ? void 0 : t(e, s),
                h = !p || 0 === p.length;
            if (d && u && h) l.push(e);
            else {
                let t = [c, g];
                h || t.push(...null != p ? p : []), n.push({
                    file: e,
                    errors: t.filter(Boolean)
                })
            }
        }), ! function(e, t, a) {
            let {
                prop: r,
                computed: i
            } = e;
            return (!!i("multiple") || !(t > 1)) && (!i("multiple") && t + a.length === 2 || !(t + a.length > r("maxFiles")))
        }(e, l.length, a) && (l.forEach(e => {
            n.push({
                file: e,
                errors: ["TOO_MANY_FILES"]
            })
        }), l.splice(0)), {
            acceptedFiles: l,
            rejectedFiles: n
        }
    }(0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                minFileSize: 0,
                maxFileSize: 1 / 0,
                maxFiles: 1,
                allowDrop: !0,
                preventDocumentDrop: !0,
                defaultAcceptedFiles: [],
                ...t,
                translations: {
                    dropzone: "dropzone",
                    itemPreview: e => "preview of ".concat(e.name),
                    deleteFile: e => "delete file ".concat(e.name),
                    ...t.translations
                }
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a,
                getContext: r
            } = e;
            return {
                acceptedFiles: a(() => ({
                    defaultValue: t("defaultAcceptedFiles"),
                    value: t("acceptedFiles"),
                    isEqual: (e, t) => e.length === (null == t ? void 0 : t.length) && e.every((e, a) => rj(e, t[a])),
                    hash: e => e.map(e => "".concat(e.name, "-").concat(e.size)).join(","),
                    onChange(e) {
                        var a, i;
                        let o = r();
                        null == (a = t("onFileAccept")) || a({
                            files: e
                        }), null == (i = t("onFileChange")) || i({
                            acceptedFiles: e,
                            rejectedFiles: o.get("rejectedFiles")
                        })
                    }
                })),
                rejectedFiles: a(() => ({
                    defaultValue: [],
                    isEqual: (e, t) => e.length === (null == t ? void 0 : t.length) && e.every((e, a) => rj(e.file, t[a].file)),
                    onChange(e) {
                        var a, i;
                        let o = r();
                        null == (a = t("onFileReject")) || a({
                            files: e
                        }), null == (i = t("onFileChange")) || i({
                            acceptedFiles: o.get("acceptedFiles"),
                            rejectedFiles: e
                        })
                    }
                })),
                transforming: a(() => ({
                    defaultValue: !1
                }))
            }
        },
        computed: {
            acceptAttr: e => {
                let {
                    prop: t
                } = e;
                var a = t("accept");
                if (null != a) return "string" == typeof a ? a : Array.isArray(a) ? a.filter(rH).join(",") : Object.entries(a).reduce((e, t) => {
                    let [a, r] = t;
                    return [...e, a, ...r]
                }, []).filter(rH).join(",")
            },
            multiple: e => {
                let {
                    prop: t
                } = e;
                return t("maxFiles") > 1
            }
        },
        watch(e) {
            let {
                track: t,
                context: a,
                action: r
            } = e;
            t([() => a.hash("acceptedFiles")], () => {
                r(["syncInputElement"])
            })
        },
        on: {
            "FILES.SET": {
                actions: ["setFiles"]
            },
            "FILE.SELECT": {
                actions: ["setEventFiles"]
            },
            "FILE.DELETE": {
                actions: ["removeFile"]
            },
            "FILES.CLEAR": {
                actions: ["clearFiles"]
            },
            "REJECTED_FILES.CLEAR": {
                actions: ["clearRejectedFiles"]
            }
        },
        effects: ["preventDocumentDrop"],
        states: {
            idle: {
                on: {
                    OPEN: {
                        actions: ["openFilePicker"]
                    },
                    "DROPZONE.CLICK": {
                        actions: ["openFilePicker"]
                    },
                    "DROPZONE.FOCUS": {
                        target: "focused"
                    },
                    "DROPZONE.DRAG_OVER": {
                        target: "dragging"
                    }
                }
            },
            focused: {
                on: {
                    "DROPZONE.BLUR": {
                        target: "idle"
                    },
                    OPEN: {
                        actions: ["openFilePicker"]
                    },
                    "DROPZONE.CLICK": {
                        actions: ["openFilePicker"]
                    },
                    "DROPZONE.DRAG_OVER": {
                        target: "dragging"
                    }
                }
            },
            dragging: {
                on: {
                    "DROPZONE.DROP": {
                        target: "idle",
                        actions: ["setEventFiles"]
                    },
                    "DROPZONE.DRAG_LEAVE": {
                        target: "idle"
                    }
                }
            }
        },
        implementations: {
            effects: {
                preventDocumentDrop(e) {
                    let {
                        prop: t,
                        scope: a
                    } = e;
                    if (!t("preventDocumentDrop") || !t("allowDrop") || t("disabled")) return;
                    let r = a.getDoc();
                    return (0, aS.callAll)((0, ax.addDomEvent)(r, "dragover", e => {
                        null == e || e.preventDefault()
                    }, !1), (0, ax.addDomEvent)(r, "drop", e => {
                        var t, r;
                        (0, ax.contains)(a.getById(null != (r = null == (t = a.ids) ? void 0 : t.root) ? r : "file:".concat(a.id)), (0, ax.getEventTarget)(e)) || e.preventDefault()
                    }, !1))
                }
            },
            actions: {
                syncInputElement(e) {
                    let {
                        scope: t,
                        context: a
                    } = e;
                    queueMicrotask(() => {
                        let e = rQ(t);
                        if (!e) return;
                        var r = a.get("acceptedFiles");
                        let i = (0, ax.getWindow)(e);
                        try {
                            if ("DataTransfer" in i) {
                                let t = new i.DataTransfer;
                                r.forEach(e => {
                                    t.items.add(e)
                                }), e.files = t.files
                            }
                        } catch {}
                        let o = t.getWin();
                        e.dispatchEvent(new o.Event("change", {
                            bubbles: !0
                        }))
                    })
                },
                openFilePicker(e) {
                    let {
                        scope: t
                    } = e;
                    (0, ax.raf)(() => {
                        var e;
                        null == (e = rQ(t)) || e.click()
                    })
                },
                setFiles(e) {
                    let {
                        computed: t,
                        context: a,
                        event: r
                    } = e, {
                        acceptedFiles: i,
                        rejectedFiles: o
                    } = r0(e, r.files);
                    a.set("acceptedFiles", t("multiple") ? i : i.length > 0 ? [i[0]] : []), a.set("rejectedFiles", o)
                },
                setEventFiles(e) {
                    let {
                        computed: t,
                        context: a,
                        event: r,
                        prop: i
                    } = e, o = a.get("acceptedFiles"), l = a.get("rejectedFiles"), {
                        acceptedFiles: n,
                        rejectedFiles: s
                    } = r0(e, r.files, o, l), d = e => {
                        if (t("multiple")) {
                            a.set("acceptedFiles", t => [...t, ...e]), a.set("rejectedFiles", s);
                            return
                        }
                        if (e.length) {
                            a.set("acceptedFiles", [e[0]]), a.set("rejectedFiles", s);
                            return
                        }
                        s.length && (a.set("acceptedFiles", a.get("acceptedFiles")), a.set("rejectedFiles", s))
                    }, c = i("transformFiles");
                    c ? (a.set("transforming", !0), c(n).then(d).catch(e => {
                        (0, aS.warn)("[zag-js/file-upload] error transforming files\n".concat(e))
                    }).finally(() => {
                        a.set("transforming", !1)
                    })) : d(n)
                },
                removeFile(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    if ("rejected" === a.itemType) {
                        let e = t.get("rejectedFiles").filter(e => !rj(e.file, a.file));
                        t.set("rejectedFiles", e)
                    } else {
                        let e = t.get("acceptedFiles").filter(e => !rj(e, a.file));
                        t.set("acceptedFiles", e)
                    }
                },
                clearRejectedFiles(e) {
                    let {
                        context: t
                    } = e;
                    t.set("rejectedFiles", [])
                },
                clearFiles(e) {
                    let {
                        context: t
                    } = e;
                    t.set("acceptedFiles", []), t.set("rejectedFiles", [])
                }
            }
        }
    });
    var r1 = (0, aI.createProps)()(["accept", "acceptedFiles", "allowDrop", "capture", "defaultAcceptedFiles", "dir", "directory", "disabled", "getRootNode", "id", "ids", "invalid", "locale", "maxFiles", "maxFileSize", "minFileSize", "name", "onFileAccept", "onFileChange", "onFileReject", "preventDocumentDrop", "required", "transformFiles", "translations", "validate"]);
    (0, aS.createSplitProps)(r1);
    var r2 = (0, aI.createProps)()(["file", "type"]);
    (0, aS.createSplitProps)(r2);
    var r5 = e.i(309966),
        r3 = (0, av.createAnatomy)("listbox").parts("label", "input", "item", "itemText", "itemIndicator", "itemGroup", "itemGroupLabel", "content", "root", "valueText");
    r3.build();
    var r4 = e => new ab.ListCollection(e);
    r4.empty = () => new ab.ListCollection({
        items: []
    });
    var r6 = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.content) ? a : "select:".concat(e.id, ":content"))
        },
        r8 = (e, t) => {
            var a, r, i;
            return e.getById(null != (i = null == (r = e.ids) || null == (a = r.item) ? void 0 : a.call(r, t)) ? i : "select:".concat(e.id, ":option:").concat(t))
        },
        {
            guards: r7,
            createMachine: r9
        } = (0, ak.setup)(),
        {
            or: ie
        } = r7;

    function it(e, t, a) {
        for (let r of ((e, t) => {
                let a = new Set(e);
                for (let e of t) a.delete(e);
                return a
            })(t, e)) null == a || a({
            value: r
        })
    }
    r9({
        props(e) {
            let {
                props: t
            } = e;
            return {
                loopFocus: !1,
                composite: !0,
                defaultValue: [],
                multiple: !1,
                typeahead: !0,
                collection: r4.empty(),
                orientation: "vertical",
                selectionMode: "single",
                ...t
            }
        },
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    isEqual: aS.isEqual,
                    onChange(e) {
                        var a;
                        let r = t("collection").findMany(e);
                        return null == (a = t("onValueChange")) ? void 0 : a({
                            value: e,
                            items: r
                        })
                    }
                })),
                highlightedValue: a(() => ({
                    defaultValue: t("defaultHighlightedValue") || null,
                    value: t("highlightedValue"),
                    sync: !0,
                    onChange(e) {
                        var a;
                        null == (a = t("onHighlightChange")) || a({
                            highlightedValue: e,
                            highlightedItem: t("collection").find(e),
                            highlightedIndex: t("collection").indexOf(e)
                        })
                    }
                })),
                highlightedItem: a(() => ({
                    defaultValue: null
                })),
                selectedItems: a(() => {
                    var e, a;
                    let r = null != (a = null != (e = t("value")) ? e : t("defaultValue")) ? a : [];
                    return {
                        defaultValue: t("collection").findMany(r)
                    }
                }),
                focused: a(() => ({
                    sync: !0,
                    defaultValue: !1
                }))
            }
        },
        refs: () => ({
            typeahead: { ...ax.getByTypeahead.defaultOptions
            },
            focusVisible: !1
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
            isInteractive: e => {
                let {
                    prop: t
                } = e;
                return !t("disabled")
            },
            selection: e => {
                let {
                    context: t,
                    prop: a
                } = e, r = new ab.Selection(t.get("value"));
                return r.selectionMode = a("selectionMode"), r.deselectable = !!a("deselectable"), r
            },
            multiple: e => {
                let {
                    prop: t
                } = e;
                return "multiple" === t("selectionMode") || "extended" === t("selectionMode")
            },
            valueAsString: e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return a("collection").stringifyItems(t.get("selectedItems"))
            }
        },
        initialState: () => "idle",
        watch(e) {
            let {
                context: t,
                prop: a,
                track: r,
                action: i
            } = e;
            r([() => t.get("value").toString()], () => {
                i(["syncSelectedItems"])
            }), r([() => t.get("highlightedValue")], () => {
                i(["syncHighlightedItem"])
            }), r([() => a("collection").toString()], () => {
                i(["syncHighlightedValue"])
            })
        },
        effects: ["trackFocusVisible"],
        on: {
            "HIGHLIGHTED_VALUE.SET": {
                actions: ["setHighlightedItem"]
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
            }
        },
        states: {
            idle: {
                effects: ["scrollToHighlightedItem"],
                on: {
                    "INPUT.FOCUS": {
                        actions: ["setFocused"]
                    },
                    "CONTENT.FOCUS": [{
                        guard: ie("hasSelectedValue", "hasHighlightedValue"),
                        actions: ["setFocused"]
                    }, {
                        actions: ["setFocused", "setDefaultHighlightedValue"]
                    }],
                    "CONTENT.BLUR": {
                        actions: ["clearFocused"]
                    },
                    "ITEM.CLICK": {
                        actions: ["setHighlightedItem", "selectHighlightedItem"]
                    },
                    "CONTENT.TYPEAHEAD": {
                        actions: ["setFocused", "highlightMatchingItem"]
                    },
                    "ITEM.POINTER_MOVE": {
                        actions: ["highlightItem"]
                    },
                    "ITEM.POINTER_LEAVE": {
                        actions: ["clearHighlightedItem"]
                    },
                    NAVIGATE: {
                        actions: ["setFocused", "setHighlightedItem", "selectWithKeyboard"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                hasSelectedValue: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("value").length > 0
                },
                hasHighlightedValue: e => {
                    let {
                        context: t
                    } = e;
                    return null != t.get("highlightedValue")
                }
            },
            effects: {
                trackFocusVisible: e => {
                    var t;
                    let {
                        scope: a,
                        refs: r
                    } = e;
                    return (0, r5.trackFocusVisible)({
                        root: null == (t = a.getRootNode) ? void 0 : t.call(a),
                        onChange(e) {
                            r.set("focusVisible", e.isFocusVisible)
                        }
                    })
                },
                scrollToHighlightedItem(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e, i = e => {
                        let i = t.get("highlightedValue");
                        if (null == i || "keyboard" !== (0, r5.getInteractionModality)()) return;
                        let o = r6(r),
                            l = a("scrollToIndexFn");
                        if (l) {
                            let t = a("collection").indexOf(i);
                            null == l || l({
                                index: t,
                                immediate: e,
                                getElement: () => r8(r, i)
                            });
                            return
                        }
                        let n = r8(r, i);
                        (0, ax.scrollIntoView)(n, {
                            rootEl: o,
                            block: "nearest"
                        })
                    };
                    return (0, ax.raf)(() => i(!0)), (0, ax.observeAttributes)(() => r6(r), {
                        defer: !0,
                        attributes: ["data-activedescendant"],
                        callback() {
                            i(!1)
                        }
                    })
                }
            },
            actions: {
                selectHighlightedItem(e) {
                    var t;
                    let {
                        context: a,
                        prop: r,
                        event: i,
                        computed: o
                    } = e, l = null != (t = i.value) ? t : a.get("highlightedValue"), n = r("collection");
                    if (null == l || !n.has(l)) return;
                    let s = o("selection");
                    if (i.shiftKey && o("multiple") && i.anchorValue) {
                        let e = s.extendSelection(n, i.anchorValue, l);
                        it(s, e, r("onSelect")), a.set("value", Array.from(e))
                    } else {
                        let e = s.select(n, l, i.metaKey);
                        it(s, e, r("onSelect")), a.set("value", Array.from(e))
                    }
                },
                selectWithKeyboard(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r,
                        computed: i
                    } = e, o = i("selection"), l = a("collection");
                    if (r.shiftKey && i("multiple") && r.anchorValue) {
                        let e = o.extendSelection(l, r.anchorValue, r.value);
                        it(o, e, a("onSelect")), t.set("value", Array.from(e));
                        return
                    }
                    if (a("selectOnHighlight")) {
                        let e = o.replaceSelection(l, r.value);
                        it(o, e, a("onSelect")), t.set("value", Array.from(e))
                    }
                },
                highlightItem(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("highlightedValue", a.value)
                },
                highlightMatchingItem(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r,
                        refs: i
                    } = e, o = a("collection").search(r.key, {
                        state: i.get("typeahead"),
                        currentValue: t.get("highlightedValue")
                    });
                    null != o && t.set("highlightedValue", o)
                },
                setHighlightedItem(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("highlightedValue", a.value)
                },
                clearHighlightedItem(e) {
                    let {
                        context: t
                    } = e;
                    t.set("highlightedValue", null)
                },
                selectItem(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r,
                        computed: i
                    } = e, o = a("collection"), l = i("selection"), n = l.select(o, r.value);
                    it(l, n, a("onSelect")), t.set("value", Array.from(n))
                },
                clearItem(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r
                    } = e, i = r("selection").deselect(a.value);
                    t.set("value", Array.from(i))
                },
                setSelectedItems(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                clearSelectedItems(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", [])
                },
                syncSelectedItems(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection"), i = t.get("selectedItems"), o = t.get("value").map(e => i.find(t => r.getItemValue(t) === e) || r.find(e));
                    t.set("selectedItems", o)
                },
                syncHighlightedItem(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection"), i = t.get("highlightedValue"), o = i ? r.find(i) : null;
                    t.set("highlightedItem", o)
                },
                syncHighlightedValue(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection"), i = t.get("highlightedValue");
                    null == i || r.has(i) || t.set("highlightedValue", null)
                },
                setFocused(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focused", !0)
                },
                setDefaultHighlightedValue(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection").firstValue;
                    null != r && t.set("highlightedValue", r)
                },
                clearFocused(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focused", !1)
                }
            }
        }
    });
    var ia = (0, aI.createProps)()(["collection", "defaultHighlightedValue", "defaultValue", "dir", "disabled", "deselectable", "disallowSelectAll", "getRootNode", "highlightedValue", "id", "ids", "loopFocus", "onHighlightChange", "onSelect", "onValueChange", "orientation", "scrollToIndexFn", "selectionMode", "selectOnHighlight", "typeahead", "value"]);
    (0, aS.createSplitProps)(ia);
    var ir = (0, aI.createProps)()(["item", "highlightOnHover"]);
    (0, aS.createSplitProps)(ir);
    var ii = (0, aI.createProps)()(["id"]);
    (0, aS.createSplitProps)(ii);
    var io = (0, aI.createProps)()(["htmlFor"]);
    (0, aS.createSplitProps)(io);
    let il = r3.extendWith("empty");
    var is = e.i(964358),
        is = is,
        id = e.i(358537),
        id = id,
        ic = e.i(941259),
        ic = ic,
        iu = (0, av.createAnatomy)("rating-group").parts("root", "label", "item", "control");
    iu.build();
    var ig = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.control) ? a : "rating:".concat(e.id, ":control"))
        },
        ip = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.hiddenInput) ? a : "rating:".concat(e.id, ":input"))
        };
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                name: "rating",
                count: 5,
                dir: "ltr",
                defaultValue: -1,
                ...t,
                translations: {
                    ratingValueText: e => "".concat(e, " stars"),
                    ...t.translations
                }
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e
                        })
                    }
                })),
                hoveredValue: a(() => ({
                    defaultValue: -1,
                    onChange(e) {
                        var a;
                        null == (a = t("onHoverChange")) || a({
                            hoveredValue: e
                        })
                    }
                })),
                fieldsetDisabled: a(() => ({
                    defaultValue: !1
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                action: a,
                prop: r,
                context: i
            } = e;
            t([() => r("allowHalf")], () => {
                a(["roundValueIfNeeded"])
            }), t([() => i.get("value")], () => {
                a(["dispatchChangeEvent"])
            })
        },
        computed: {
            isDisabled: e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return !!a("disabled") || t.get("fieldsetDisabled")
            },
            isInteractive: e => {
                let {
                    computed: t,
                    prop: a
                } = e;
                return !(t("isDisabled") || a("readOnly"))
            },
            isHovering: e => {
                let {
                    context: t
                } = e;
                return t.get("hoveredValue") > -1
            }
        },
        effects: ["trackFormControlState"],
        on: {
            SET_VALUE: {
                actions: ["setValue"]
            },
            CLEAR_VALUE: {
                actions: ["clearValue"]
            }
        },
        states: {
            idle: {
                entry: ["clearHoveredValue"],
                on: {
                    GROUP_POINTER_OVER: {
                        target: "hover"
                    },
                    FOCUS: {
                        target: "focus"
                    },
                    CLICK: {
                        actions: ["setValue", "focusActiveRadio"]
                    }
                }
            },
            focus: {
                on: {
                    POINTER_OVER: {
                        actions: ["setHoveredValue"]
                    },
                    GROUP_POINTER_LEAVE: {
                        actions: ["clearHoveredValue"]
                    },
                    BLUR: {
                        target: "idle"
                    },
                    SPACE: {
                        guard: "isValueEmpty",
                        actions: ["setValue"]
                    },
                    CLICK: {
                        actions: ["setValue", "focusActiveRadio"]
                    },
                    ARROW_LEFT: {
                        actions: ["setPrevValue", "focusActiveRadio"]
                    },
                    ARROW_RIGHT: {
                        actions: ["setNextValue", "focusActiveRadio"]
                    },
                    HOME: {
                        actions: ["setValueToMin", "focusActiveRadio"]
                    },
                    END: {
                        actions: ["setValueToMax", "focusActiveRadio"]
                    }
                }
            },
            hover: {
                on: {
                    POINTER_OVER: {
                        actions: ["setHoveredValue"]
                    },
                    GROUP_POINTER_LEAVE: [{
                        guard: "isRadioFocused",
                        target: "focus",
                        actions: ["clearHoveredValue"]
                    }, {
                        target: "idle",
                        actions: ["clearHoveredValue"]
                    }],
                    CLICK: {
                        actions: ["setValue", "focusActiveRadio"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                isInteractive: e => {
                    let {
                        prop: t
                    } = e;
                    return !(t("disabled") || t("readOnly"))
                },
                isHoveredValueEmpty: e => {
                    let {
                        context: t
                    } = e;
                    return -1 === t.get("hoveredValue")
                },
                isValueEmpty: e => {
                    let {
                        context: t
                    } = e;
                    return 0 >= t.get("value")
                },
                isRadioFocused: e => {
                    var t;
                    let {
                        scope: a
                    } = e;
                    return !!(null == (t = ig(a)) ? void 0 : t.contains(a.getActiveElement()))
                }
            },
            effects: {
                trackFormControlState(e) {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    return (0, ax.trackFormControl)(ip(a), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            t.set("value", t.initial("value"))
                        }
                    })
                }
            },
            actions: {
                clearHoveredValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("hoveredValue", -1)
                },
                focusActiveRadio(e) {
                    let {
                        scope: t,
                        context: a
                    } = e;
                    (0, ax.raf)(() => {
                        var e, r;
                        let i;
                        return null === (r = a.get("value"), i = "[role=radio][aria-posinset='".concat(Math.ceil(r), "']"), e = (0, ax.query)(ig(t), i)) || void 0 === e ? void 0 : e.focus()
                    })
                },
                setPrevValue(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("allowHalf") ? .5 : 1;
                    t.set("value", Math.max(0, t.get("value") - r))
                },
                setNextValue(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("allowHalf") ? .5 : 1, i = -1 === t.get("value") ? 0 : t.get("value");
                    t.set("value", Math.min(a("count"), i + r))
                },
                setValueToMin(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", 1)
                },
                setValueToMax(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    t.set("value", a("count"))
                },
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = t.get("hoveredValue"), i = -1 === r ? a.value : r;
                    t.set("value", i)
                },
                clearValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", -1)
                },
                setHoveredValue(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r
                    } = e, i = a("allowHalf") && r.isMidway;
                    t.set("hoveredValue", r.index - .5 * !!i)
                },
                roundValueIfNeeded(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    a("allowHalf") || t.set("value", Math.round(t.get("value")))
                },
                dispatchChangeEvent(e) {
                    var t;
                    let a, {
                        context: r,
                        scope: i
                    } = e;
                    t = r.get("value"), (a = ip(i)) && (0, ax.dispatchInputValueEvent)(a, {
                        value: t
                    })
                }
            }
        }
    });
    var ih = (0, aI.createProps)()(["allowHalf", "autoFocus", "count", "dir", "disabled", "form", "getRootNode", "id", "ids", "name", "onHoverChange", "onValueChange", "required", "readOnly", "translations", "value", "defaultValue"]);
    (0, aS.createSplitProps)(ih);
    var im = (0, aI.createProps)()(["index"]);
    (0, aS.createSplitProps)(im);
    var iv = e.i(303250),
        iv = iv,
        ib = (0, av.createAnatomy)("slider").parts("root", "label", "thumb", "valueText", "track", "range", "control", "markerGroup", "marker", "draggingIndicator"),
        ix = ib.build(),
        iy = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "slider:".concat(e.id)
        },
        iS = (e, t) => {
            var a, r, i;
            return null != (i = null == (r = e.ids) || null == (a = r.thumb) ? void 0 : a.call(r, t)) ? i : "slider:".concat(e.id, ":thumb:").concat(t)
        },
        ik = (e, t) => {
            var a, r, i;
            return null != (i = null == (r = e.ids) || null == (a = r.hiddenInput) ? void 0 : a.call(r, t)) ? i : "slider:".concat(e.id, ":input:").concat(t)
        },
        iC = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.control) ? a : "slider:".concat(e.id, ":control")
        },
        iI = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.label) ? a : "slider:".concat(e.id, ":label")
        },
        iw = e => (0, ax.queryAll)(iP(e), "[role=slider]"),
        iE = (e, t) => e.getById(ik(e, t)),
        iP = e => e.getById(iC(e)),
        iV = (e, t) => {
            var a, r;
            let {
                prop: i,
                scope: o,
                refs: l
            } = e, n = iP(o);
            if (!n) return;
            let s = l.get("thumbDragOffset"),
                d = {
                    x: t.x - (null != (a = null == s ? void 0 : s.x) ? a : 0),
                    y: t.y - (null != (r = null == s ? void 0 : s.y) ? r : 0)
                },
                c = (0, ax.getRelativePoint)(d, n).getPercentValue({
                    orientation: i("orientation"),
                    dir: i("dir"),
                    inverted: {
                        y: !0
                    }
                });
            return (0, aS.getPercentValue)(c, i("min"), i("max"), i("step"))
        };

    function iT(e, t) {
        let {
            prop: a
        } = e;
        return function(e, t, a) {
            let {
                computed: r,
                prop: i
            } = e;
            if ("center" === i("thumbAlignment")) return "".concat(t, "%");
            let o = r("isVertical") ? function(e, t) {
                var a;
                let {
                    context: r,
                    prop: i
                } = e, {
                    height: o = 0
                } = null != (a = r.get("thumbSize")) ? a : {};
                return parseFloat((0, aS.getValueTransformer)([i("min"), i("max")], [-o / 2, o / 2])(t).toFixed(2))
            }(e, a) : function(e, t) {
                var a;
                let {
                    computed: r,
                    context: i,
                    prop: o
                } = e, {
                    width: l = 0
                } = null != (a = i.get("thumbSize")) ? a : {};
                return r("isRtl") ? -1 * parseFloat((0, aS.getValueTransformer)([o("max"), o("min")], [-l / 2, l / 2])(t).toFixed(2)) : parseFloat((0, aS.getValueTransformer)([o("min"), o("max")], [-l / 2, l / 2])(t).toFixed(2))
            }(e, a);
            return "calc(".concat(t, "% - ").concat(o, "px)")
        }(e, 100 * (0, aS.getValuePercent)(t, a("min"), a("max")), t)
    }

    function iR(e) {
        let {
            computed: t,
            prop: a
        } = e, r = "visible";
        return "contain" !== a("thumbAlignment") || t("hasMeasuredThumbSize") || (r = "hidden"), r
    }

    function iz(e, t) {
        let {
            computed: a,
            context: r
        } = e, i = a("isVertical") ? "bottom" : "insetInlineStart", o = r.get("focusedIndex");
        return {
            visibility: iR(e),
            position: "absolute",
            transform: "var(--slider-thumb-transform)",
            [i]: "var(--slider-thumb-offset-".concat(t, ")"),
            zIndex: o === t ? 1 : void 0
        }
    }

    function i_(e, t) {
        let {
            context: a,
            prop: r
        } = e, i = r("step") * r("minStepsBetweenThumbs");
        return (0, aS.getValueRanges)(a.get("value"), r("min"), r("max"), i)[t]
    }

    function iO(e, t, a) {
        let {
            prop: r
        } = e, i = i_(e, a), o = (0, aS.snapValueToStep)(t, r("min"), r("max"), r("step"));
        return (0, aS.clampValue)(o, i.min, i.max)
    }

    function iA(e, t) {
        let {
            context: a,
            prop: r
        } = e, i = a.get("value"), o = r("max");
        if (i[t] === o) {
            let e = t;
            for (; e > 0 && i[e - 1] === o;) e -= 1;
            return e
        }
        return t
    }

    function iN(e, t) {
        let {
            state: a,
            send: r,
            context: i,
            prop: o,
            computed: l,
            scope: n
        } = e, s = o("aria-label"), d = o("aria-labelledby"), c = i.get("value"), u = i.get("focusedIndex"), g = a.matches("focus"), p = a.matches("dragging"), h = l("isDisabled"), m = o("invalid"), f = l("isInteractive"), v = "horizontal" === o("orientation"), b = "vertical" === o("orientation");

        function x(e) {
            return (0, aS.getValuePercent)(e, o("min"), o("max"))
        }

        function y(e) {
            return (0, aS.getPercentValue)(e, o("min"), o("max"), o("step"))
        }
        return {
            value: c,
            dragging: p,
            focused: g,
            setValue(e) {
                r({
                    type: "SET_VALUE",
                    value: e
                })
            },
            getThumbValue: e => c[e],
            setThumbValue(e, t) {
                r({
                    type: "SET_VALUE",
                    index: e,
                    value: t
                })
            },
            getValuePercent: x,
            getPercentValue: y,
            getThumbPercent: e => x(c[e]),
            setThumbPercent(e, t) {
                r({
                    type: "SET_VALUE",
                    index: e,
                    value: y(t)
                })
            },
            getThumbMin: t => i_(e, t).min,
            getThumbMax: t => i_(e, t).max,
            increment(e) {
                r({
                    type: "INCREMENT",
                    index: e
                })
            },
            decrement(e) {
                r({
                    type: "DECREMENT",
                    index: e
                })
            },
            focus() {
                f && r({
                    type: "FOCUS",
                    index: 0
                })
            },
            getLabelProps: () => t.label({ ...ix.label.attrs,
                dir: o("dir"),
                "data-disabled": (0, ax.dataAttr)(h),
                "data-orientation": o("orientation"),
                "data-invalid": (0, ax.dataAttr)(m),
                "data-dragging": (0, ax.dataAttr)(p),
                "data-focus": (0, ax.dataAttr)(g),
                id: iI(n),
                htmlFor: ik(n, 0),
                onClick(e) {
                    var t;
                    f && (e.preventDefault(), null == (t = iw(n)[0]) || t.focus())
                },
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            }),
            getRootProps: () => t.element({ ...ix.root.attrs,
                "data-disabled": (0, ax.dataAttr)(h),
                "data-orientation": o("orientation"),
                "data-dragging": (0, ax.dataAttr)(p),
                "data-invalid": (0, ax.dataAttr)(m),
                "data-focus": (0, ax.dataAttr)(g),
                id: iy(n),
                dir: o("dir"),
                style: function(e) {
                    let {
                        context: t,
                        computed: a
                    } = e, r = a("isVertical"), i = a("isRtl"), o = function(e) {
                        let {
                            prop: t,
                            computed: a
                        } = e, r = a("valuePercent"), [i, o] = [r[0], r[r.length - 1]];
                        if (1 === r.length) {
                            if ("center" === t("origin")) {
                                let e = r[0] < 50;
                                return {
                                    start: e ? "".concat(r[0], "%") : "50%",
                                    end: e ? "50%" : "".concat(100 - r[0], "%")
                                }
                            }
                            return "end" === t("origin") ? {
                                start: "".concat(o, "%"),
                                end: "0%"
                            } : {
                                start: "0%",
                                end: "".concat(100 - o, "%")
                            }
                        }
                        return {
                            start: "".concat(i, "%"),
                            end: "".concat(100 - o, "%")
                        }
                    }(e), l = t.get("thumbSize");
                    return { ...t.get("value").reduce((t, a, r) => {
                            let i = iT(e, a);
                            return { ...t,
                                ["--slider-thumb-offset-".concat(r)]: i
                            }
                        }, {}),
                        "--slider-thumb-width": (0, aS.toPx)(null == l ? void 0 : l.width),
                        "--slider-thumb-height": (0, aS.toPx)(null == l ? void 0 : l.height),
                        "--slider-thumb-transform": r ? "translateY(50%)" : i ? "translateX(50%)" : "translateX(-50%)",
                        "--slider-range-start": o.start,
                        "--slider-range-end": o.end
                    }
                }(e)
            }),
            getValueTextProps: () => {
                var e, a;
                return t.element({ ...ix.valueText.attrs,
                    dir: o("dir"),
                    "data-disabled": (0, ax.dataAttr)(h),
                    "data-orientation": o("orientation"),
                    "data-invalid": (0, ax.dataAttr)(m),
                    "data-focus": (0, ax.dataAttr)(g),
                    id: null != (a = null == (e = n.ids) ? void 0 : e.valueText) ? a : "slider:".concat(n.id, ":value-text")
                })
            },
            getTrackProps: () => {
                var e, a;
                return t.element({ ...ix.track.attrs,
                    dir: o("dir"),
                    id: null != (a = null == (e = n.ids) ? void 0 : e.track) ? a : "slider:".concat(n.id, ":track"),
                    "data-disabled": (0, ax.dataAttr)(h),
                    "data-invalid": (0, ax.dataAttr)(m),
                    "data-dragging": (0, ax.dataAttr)(p),
                    "data-orientation": o("orientation"),
                    "data-focus": (0, ax.dataAttr)(g),
                    style: {
                        position: "relative"
                    }
                })
            },
            getThumbProps(a) {
                var i;
                let {
                    index: l = 0,
                    name: m
                } = a, x = c[l], y = i_(e, l), S = null == (i = o("getAriaValueText")) ? void 0 : i({
                    value: x,
                    index: l
                }), k = Array.isArray(s) ? s[l] : s, C = Array.isArray(d) ? d[l] : d;
                return t.element({ ...ix.thumb.attrs,
                    dir: o("dir"),
                    "data-index": l,
                    "data-name": m,
                    id: iS(n, l),
                    "data-disabled": (0, ax.dataAttr)(h),
                    "data-orientation": o("orientation"),
                    "data-focus": (0, ax.dataAttr)(g && u === l),
                    "data-dragging": (0, ax.dataAttr)(p && u === l),
                    draggable: !1,
                    "aria-disabled": (0, ax.ariaAttr)(h),
                    "aria-label": k,
                    "aria-labelledby": null != C ? C : iI(n),
                    "aria-orientation": o("orientation"),
                    "aria-valuemax": y.max,
                    "aria-valuemin": y.min,
                    "aria-valuenow": c[l],
                    "aria-valuetext": S,
                    role: "slider",
                    tabIndex: h ? void 0 : 0,
                    style: iz(e, l),
                    onPointerDown(e) {
                        if (!f || !(0, ax.isLeftClick)(e)) return;
                        let t = e.currentTarget.getBoundingClientRect(),
                            a = {
                                x: t.left + t.width / 2,
                                y: t.top + t.height / 2
                            };
                        r({
                            type: "THUMB_POINTER_DOWN",
                            index: l,
                            offset: {
                                x: e.clientX - a.x,
                                y: e.clientY - a.y
                            }
                        }), e.stopPropagation()
                    },
                    onBlur() {
                        f && r({
                            type: "BLUR"
                        })
                    },
                    onFocus() {
                        f && r({
                            type: "FOCUS",
                            index: l
                        })
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || !f) return;
                        let t = (0, ax.getEventStep)(e) * o("step"),
                            a = {
                                ArrowUp() {
                                    v || r({
                                        type: "ARROW_INC",
                                        step: t,
                                        src: "ArrowUp"
                                    })
                                },
                                ArrowDown() {
                                    v || r({
                                        type: "ARROW_DEC",
                                        step: t,
                                        src: "ArrowDown"
                                    })
                                },
                                ArrowLeft() {
                                    b || r({
                                        type: "ARROW_DEC",
                                        step: t,
                                        src: "ArrowLeft"
                                    })
                                },
                                ArrowRight() {
                                    b || r({
                                        type: "ARROW_INC",
                                        step: t,
                                        src: "ArrowRight"
                                    })
                                },
                                PageUp() {
                                    r({
                                        type: "ARROW_INC",
                                        step: t,
                                        src: "PageUp"
                                    })
                                },
                                PageDown() {
                                    r({
                                        type: "ARROW_DEC",
                                        step: t,
                                        src: "PageDown"
                                    })
                                },
                                Home() {
                                    r({
                                        type: "HOME"
                                    })
                                },
                                End() {
                                    r({
                                        type: "END"
                                    })
                                }
                            }[(0, ax.getEventKey)(e, {
                                dir: o("dir"),
                                orientation: o("orientation")
                            })];
                        a && (a(e), e.preventDefault(), e.stopPropagation())
                    }
                })
            },
            getHiddenInputProps(e) {
                let {
                    index: a = 0,
                    name: r
                } = e;
                return t.input({
                    name: null != r ? r : o("name") ? o("name") + (c.length > 1 ? "[]" : "") : void 0,
                    form: o("form"),
                    type: "text",
                    hidden: !0,
                    defaultValue: c[a],
                    id: ik(n, a)
                })
            },
            getRangeProps: () => {
                var a, r;
                return t.element({
                    id: null != (r = null == (a = n.ids) ? void 0 : a.range) ? r : "slider:".concat(n.id, ":range"),
                    ...ix.range.attrs,
                    dir: o("dir"),
                    "data-dragging": (0, ax.dataAttr)(p),
                    "data-focus": (0, ax.dataAttr)(g),
                    "data-invalid": (0, ax.dataAttr)(m),
                    "data-disabled": (0, ax.dataAttr)(h),
                    "data-orientation": o("orientation"),
                    style: function(e) {
                        let {
                            computed: t
                        } = e, a = t("isVertical"), r = t("isRtl");
                        return a ? {
                            position: "absolute",
                            bottom: "var(--slider-range-start)",
                            top: "var(--slider-range-end)"
                        } : {
                            position: "absolute",
                            [r ? "right" : "left"]: "var(--slider-range-start)",
                            [r ? "left" : "right"]: "var(--slider-range-end)"
                        }
                    }(e)
                })
            },
            getControlProps: () => t.element({ ...ix.control.attrs,
                dir: o("dir"),
                id: iC(n),
                "data-dragging": (0, ax.dataAttr)(p),
                "data-disabled": (0, ax.dataAttr)(h),
                "data-orientation": o("orientation"),
                "data-invalid": (0, ax.dataAttr)(m),
                "data-focus": (0, ax.dataAttr)(g),
                style: {
                    touchAction: "none",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    position: "relative"
                },
                onPointerDown(e) {
                    !f || !(0, ax.isLeftClick)(e) || (0, ax.isModifierKey)(e) || (r({
                        type: "POINTER_DOWN",
                        point: (0, ax.getEventPoint)(e)
                    }), e.preventDefault(), e.stopPropagation())
                }
            }),
            getMarkerGroupProps: () => t.element({ ...ix.markerGroup.attrs,
                role: "presentation",
                dir: o("dir"),
                "aria-hidden": !0,
                "data-orientation": o("orientation"),
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    pointerEvents: "none",
                    position: "relative"
                }
            }),
            getMarkerProps(a) {
                var r, i, l, s;
                let d, u = function(e, t) {
                    let {
                        computed: a
                    } = e, r = a("isHorizontal"), i = a("isRtl");
                    return {
                        visibility: iR(e),
                        position: "absolute",
                        pointerEvents: "none",
                        [r ? "insetInlineStart" : "bottom"]: iT(e, t),
                        translate: "var(--translate-x) var(--translate-y)",
                        "--translate-x": r ? i ? "50%" : "-50%" : "0%",
                        "--translate-y": r ? "0%" : "50%"
                    }
                }(e, a.value);
                return d = a.value < (0, aS.first)(c) ? "under-value" : a.value > (0, aS.last)(c) ? "over-value" : "at-value", t.element({ ...ix.marker.attrs,
                    id: (r = a.value, null != (s = null == (l = n.ids) || null == (i = l.marker) ? void 0 : i.call(l, r)) ? s : "slider:".concat(n.id, ":marker:").concat(r)),
                    role: "presentation",
                    dir: o("dir"),
                    "data-orientation": o("orientation"),
                    "data-value": a.value,
                    "data-disabled": (0, ax.dataAttr)(h),
                    "data-state": d,
                    style: u
                })
            },
            getDraggingIndicatorProps(a) {
                let {
                    index: r = 0
                } = a, i = r === u && p;
                return t.element({ ...ix.draggingIndicator.attrs,
                    role: "presentation",
                    dir: o("dir"),
                    hidden: !i,
                    "data-orientation": o("orientation"),
                    "data-state": i ? "open" : "closed",
                    style: iz(e, r)
                })
            }
        }
    }
    var iF = (e, t, a, r, i) => (0, aS.getValueRanges)(e, t, a, i * r).map(e => {
            let i = (0, aS.snapValueToStep)(e.value, e.min, e.max, r),
                o = (0, aS.clampValue)(i, e.min, e.max);
            if (!(0, aS.isValueWithinRange)(o, t, a)) throw Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");
            return o
        }),
        iD = (0, ak.createMachine)({
            props(e) {
                var t, a, r, i, o;
                let {
                    props: l
                } = e, n = null != (t = l.min) ? t : 0, s = null != (a = l.max) ? a : 100, d = null != (r = l.step) ? r : 1, c = null != (i = l.defaultValue) ? i : [n], u = null != (o = l.minStepsBetweenThumbs) ? o : 0;
                return {
                    dir: "ltr",
                    thumbAlignment: "contain",
                    origin: "start",
                    orientation: "horizontal",
                    minStepsBetweenThumbs: u,
                    ...l,
                    defaultValue: iF(c, n, s, d, u),
                    value: l.value ? iF(l.value, n, s, d, u) : void 0,
                    max: s,
                    step: d,
                    min: n
                }
            },
            initialState: () => "idle",
            context(e) {
                let {
                    prop: t,
                    bindable: a,
                    getContext: r
                } = e;
                return {
                    thumbSize: a(() => ({
                        defaultValue: t("thumbSize") || null
                    })),
                    value: a(() => ({
                        defaultValue: t("defaultValue"),
                        value: t("value"),
                        isEqual: aS.isEqual,
                        hash: e => e.join(","),
                        onChange(e) {
                            var a;
                            null == (a = t("onValueChange")) || a({
                                value: e
                            })
                        }
                    })),
                    focusedIndex: a(() => ({
                        defaultValue: -1,
                        onChange(e) {
                            var a;
                            let i = r();
                            null == (a = t("onFocusChange")) || a({
                                focusedIndex: e,
                                value: i.get("value")
                            })
                        }
                    })),
                    fieldsetDisabled: a(() => ({
                        defaultValue: !1
                    }))
                }
            },
            refs: () => ({
                thumbDragOffset: null
            }),
            computed: {
                isHorizontal: e => {
                    let {
                        prop: t
                    } = e;
                    return "horizontal" === t("orientation")
                },
                isVertical: e => {
                    let {
                        prop: t
                    } = e;
                    return "vertical" === t("orientation")
                },
                isRtl: e => {
                    let {
                        prop: t
                    } = e;
                    return "horizontal" === t("orientation") && "rtl" === t("dir")
                },
                isDisabled: e => {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    return !!a("disabled") || t.get("fieldsetDisabled")
                },
                isInteractive: e => {
                    let {
                        prop: t,
                        computed: a
                    } = e;
                    return !(t("readOnly") || a("isDisabled"))
                },
                hasMeasuredThumbSize: e => {
                    let {
                        context: t
                    } = e;
                    return null != t.get("thumbSize")
                },
                valuePercent: (0, ak.memo)(e => {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    return [t.get("value"), a("min"), a("max")]
                }, e => {
                    let [t, a, r] = e;
                    return t.map(e => 100 * (0, aS.getValuePercent)(e, a, r))
                })
            },
            watch(e) {
                let {
                    track: t,
                    action: a,
                    context: r,
                    computed: i,
                    send: o
                } = e;
                t([() => r.hash("value")], () => {
                    a(["syncInputElements", "dispatchChangeEvent"])
                }), t([() => i("isDisabled")], () => {
                    i("isDisabled") && o({
                        type: "POINTER_CANCEL"
                    })
                })
            },
            effects: ["trackFormControlState", "trackThumbSize"],
            on: {
                SET_VALUE: [{
                    guard: "hasIndex",
                    actions: ["setValueAtIndex", "invokeOnChangeEnd"]
                }, {
                    actions: ["setValue", "invokeOnChangeEnd"]
                }],
                INCREMENT: {
                    actions: ["incrementThumbAtIndex", "invokeOnChangeEnd"]
                },
                DECREMENT: {
                    actions: ["decrementThumbAtIndex", "invokeOnChangeEnd"]
                }
            },
            states: {
                idle: {
                    on: {
                        POINTER_DOWN: {
                            target: "dragging",
                            actions: ["setClosestThumbIndex", "setPointerValue", "focusActiveThumb"]
                        },
                        FOCUS: {
                            target: "focus",
                            actions: ["setFocusedIndex"]
                        },
                        THUMB_POINTER_DOWN: {
                            target: "dragging",
                            actions: ["setFocusedIndex", "setThumbDragOffset", "focusActiveThumb"]
                        }
                    }
                },
                focus: {
                    entry: ["focusActiveThumb"],
                    on: {
                        POINTER_DOWN: {
                            target: "dragging",
                            actions: ["setClosestThumbIndex", "setPointerValue", "focusActiveThumb"]
                        },
                        THUMB_POINTER_DOWN: {
                            target: "dragging",
                            actions: ["setFocusedIndex", "setThumbDragOffset", "focusActiveThumb"]
                        },
                        ARROW_DEC: {
                            actions: ["decrementThumbAtIndex", "invokeOnChangeEnd"]
                        },
                        ARROW_INC: {
                            actions: ["incrementThumbAtIndex", "invokeOnChangeEnd"]
                        },
                        HOME: {
                            actions: ["setFocusedThumbToMin", "invokeOnChangeEnd"]
                        },
                        END: {
                            actions: ["setFocusedThumbToMax", "invokeOnChangeEnd"]
                        },
                        BLUR: {
                            target: "idle",
                            actions: ["clearFocusedIndex"]
                        }
                    }
                },
                dragging: {
                    entry: ["focusActiveThumb"],
                    effects: ["trackPointerMove"],
                    on: {
                        POINTER_UP: {
                            target: "focus",
                            actions: ["invokeOnChangeEnd", "clearThumbDragOffset"]
                        },
                        POINTER_MOVE: {
                            actions: ["setPointerValue"]
                        },
                        POINTER_CANCEL: {
                            target: "idle",
                            actions: ["clearFocusedIndex", "clearThumbDragOffset"]
                        }
                    }
                }
            },
            implementations: {
                guards: {
                    hasIndex: e => {
                        let {
                            event: t
                        } = e;
                        return null != t.index
                    }
                },
                effects: {
                    trackFormControlState(e) {
                        let {
                            context: t,
                            scope: a
                        } = e;
                        return (0, ax.trackFormControl)(a.getById(iy(a)), {
                            onFieldsetDisabledChange(e) {
                                t.set("fieldsetDisabled", e)
                            },
                            onFormReset() {
                                t.set("value", t.initial("value"))
                            }
                        })
                    },
                    trackPointerMove(e) {
                        let {
                            scope: t,
                            send: a
                        } = e;
                        return (0, ax.trackPointerMove)(t.getDoc(), {
                            onPointerMove(e) {
                                a({
                                    type: "POINTER_MOVE",
                                    point: e.point
                                })
                            },
                            onPointerUp() {
                                a({
                                    type: "POINTER_UP"
                                })
                            }
                        })
                    },
                    trackThumbSize(e) {
                        let {
                            context: t,
                            scope: a,
                            prop: r
                        } = e;
                        if ("contain" !== r("thumbAlignment") || r("thumbSize")) return;
                        let i = e => {
                                var a, r, i, o;
                                let l, n = {
                                        left: null != (a = null == e ? void 0 : e.offsetLeft) ? a : 0,
                                        top: null != (r = null == e ? void 0 : e.offsetTop) ? r : 0,
                                        width: null != (i = null == e ? void 0 : e.offsetWidth) ? i : 0,
                                        height: null != (o = null == e ? void 0 : e.offsetHeight) ? o : 0
                                    },
                                    s = (0, aS.pick)(n, ["width", "height"]);
                                l = t.get("thumbSize"), ((null == l ? void 0 : l.width) !== (null == s ? void 0 : s.width) || (null == l ? void 0 : l.height) !== (null == s ? void 0 : s.height)) && t.set("thumbSize", s)
                            },
                            o = iw(a);
                        o.forEach(i);
                        let l = o.map(e => ax.resizeObserverBorderBox.observe(e, () => i(e)));
                        return (0, aS.callAll)(...l)
                    }
                },
                actions: {
                    dispatchChangeEvent(e) {
                        let {
                            context: t,
                            scope: a
                        } = e;
                        t.get("value").forEach((e, t) => {
                            let r = iE(a, t);
                            r && (0, ax.dispatchInputValueEvent)(r, {
                                value: e
                            })
                        })
                    },
                    syncInputElements(e) {
                        let {
                            context: t,
                            scope: a
                        } = e;
                        t.get("value").forEach((e, t) => {
                            let r = iE(a, t);
                            (0, ax.setElementValue)(r, e.toString())
                        })
                    },
                    invokeOnChangeEnd(e) {
                        let {
                            prop: t,
                            context: a
                        } = e;
                        queueMicrotask(() => {
                            var e;
                            null == (e = t("onValueChangeEnd")) || e({
                                value: a.get("value")
                            })
                        })
                    },
                    setClosestThumbIndex(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = iV(e, a.point);
                        if (null == r) return;
                        let i = function(e, t) {
                            let {
                                context: a
                            } = e, r = a.get("value"), i = 0, o = Math.abs(r[0] - t);
                            for (let e = 1; e < r.length; e++) {
                                let a = Math.abs(r[e] - t);
                                a <= o && (i = e, o = a)
                            }
                            return iA(e, i)
                        }(e, r);
                        t.set("focusedIndex", i)
                    },
                    setFocusedIndex(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = iA(e, a.index);
                        t.set("focusedIndex", r)
                    },
                    clearFocusedIndex(e) {
                        let {
                            context: t
                        } = e;
                        t.set("focusedIndex", -1)
                    },
                    setThumbDragOffset(e) {
                        var t;
                        let {
                            refs: a,
                            event: r
                        } = e;
                        a.set("thumbDragOffset", null != (t = r.offset) ? t : null)
                    },
                    clearThumbDragOffset(e) {
                        let {
                            refs: t
                        } = e;
                        t.set("thumbDragOffset", null)
                    },
                    setPointerValue(e) {
                        queueMicrotask(() => {
                            let {
                                context: t,
                                event: a
                            } = e, r = iV(e, a.point);
                            if (null == r) return;
                            let i = t.get("focusedIndex"),
                                o = iO(e, r, i);
                            t.set("value", e => (0, aS.setValueAtIndex)(e, i, o))
                        })
                    },
                    focusActiveThumb(e) {
                        let {
                            scope: t,
                            context: a
                        } = e;
                        (0, ax.raf)(() => {
                            let e, r = (e = a.get("focusedIndex"), t.getById(iS(t, e)));
                            null == r || r.focus({
                                preventScroll: !0
                            })
                        })
                    },
                    decrementThumbAtIndex(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = function(e, t, a) {
                            let {
                                context: r,
                                prop: i
                            } = e, o = null != t ? t : r.get("focusedIndex"), l = i_(e, o), n = (0, aS.getPreviousStepValue)(o, { ...l,
                                step: null != a ? a : i("step"),
                                values: r.get("value")
                            });
                            return n[o] = (0, aS.clampValue)(n[o], l.min, l.max), n
                        }(e, a.index, a.step);
                        t.set("value", r)
                    },
                    incrementThumbAtIndex(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = function(e, t, a) {
                            let {
                                context: r,
                                prop: i
                            } = e, o = null != t ? t : r.get("focusedIndex"), l = i_(e, o), n = (0, aS.getNextStepValue)(o, { ...l,
                                step: null != a ? a : i("step"),
                                values: r.get("value")
                            });
                            return n[o] = (0, aS.clampValue)(n[o], l.min, l.max), n
                        }(e, a.index, a.step);
                        t.set("value", r)
                    },
                    setFocusedThumbToMin(e) {
                        let {
                            context: t
                        } = e, a = t.get("focusedIndex"), {
                            min: r
                        } = i_(e, a);
                        t.set("value", e => (0, aS.setValueAtIndex)(e, a, r))
                    },
                    setFocusedThumbToMax(e) {
                        let {
                            context: t
                        } = e, a = t.get("focusedIndex"), {
                            max: r
                        } = i_(e, a);
                        t.set("value", e => (0, aS.setValueAtIndex)(e, a, r))
                    },
                    setValueAtIndex(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = iO(e, a.value, a.index);
                        t.set("value", e => (0, aS.setValueAtIndex)(e, a.index, r))
                    },
                    setValue(e) {
                        let {
                            context: t,
                            event: a
                        } = e, r = a.value.map((t, a) => iO(e, t, a));
                        t.set("value", r)
                    }
                }
            }
        }),
        iL = (0, aI.createProps)()(["aria-label", "aria-labelledby", "dir", "disabled", "form", "getAriaValueText", "getRootNode", "id", "ids", "invalid", "max", "min", "minStepsBetweenThumbs", "name", "onFocusChange", "onValueChange", "onValueChangeEnd", "orientation", "origin", "readOnly", "step", "thumbAlignment", "thumbAlignment", "thumbSize", "value", "defaultValue"]);
    (0, aS.createSplitProps)(iL);
    var iW = (0, aI.createProps)()(["index", "name"]);
    (0, aS.createSplitProps)(iW);
    var iM = (0, aI.createProps)()(["value"]);
    (0, aS.createSplitProps)(iM), e.s(["anatomy", () => ib, "connect", () => iN, "machine", () => iD], 879205);
    var iB = (0, av.createAnatomy)("splitter").parts("root", "panel", "resizeTrigger", "resizeTriggerIndicator");
    iB.build();
    var iH = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "splitter:".concat(e.id)
        },
        ij = e => "splitter:".concat(e.id, ":global-cursor"),
        iU = e => e.getById(iH(e));

    function iG(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        return e.toFixed(a) === t.toFixed(a) ? 0 : e > t ? 1 : -1
    }

    function iq(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        return null != e && null != t && 0 === iG(e, t, a)
    }

    function iY(e, t, a) {
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
            if (!iq(e[r], t[r], a)) return !1;
        return !0
    }

    function iK(e, t) {
        return e.findIndex(e => e === t || e.id === t.id)
    }

    function iX(e, t, a) {
        var r;
        let i = (r = t.id, e.findIndex(e => e.id === r)),
            o = i === e.length - 1 ? [i - 1, i] : [i, i + 1],
            l = a[i];
        return { ...t,
            panelSize: l,
            pivotIndices: o
        }
    }

    function i$(e) {
        let {
            panels: t,
            index: a,
            size: r
        } = e, i = t[a];
        (0, aS.ensure)(i, () => "Panel data not found for index ".concat(a));
        let {
            collapsedSize: o = 0,
            collapsible: l,
            maxSize: n = 100,
            minSize: s = 0
        } = i;
        return 0 > iG(r, s) && (r = l && 0 > iG(r, (o + s) / 2) ? o : s), r = parseFloat((r = Math.min(n, r)).toFixed(10))
    }

    function iZ(e) {
        let {
            delta: t,
            initialSize: a,
            panels: r,
            pivotIndices: i,
            prevSize: o,
            trigger: l
        } = e;
        if (iq(t, 0)) return a;
        let n = [...a],
            [s, d] = i;
        (0, aS.ensure)(s, () => "Invalid first pivot index"), (0, aS.ensure)(d, () => "Invalid second pivot index");
        let c = 0;
        if ("keyboard" === l) {
            {
                let e = t < 0 ? d : s,
                    i = r[e];
                (0, aS.ensure)(i, () => "Panel data not found for index ".concat(e));
                let {
                    collapsedSize: o = 0,
                    collapsible: l,
                    minSize: n = 0
                } = i;
                if (l) {
                    let r = a[e];
                    if ((0, aS.ensure)(r, () => "Previous size not found for panel index ".concat(e)), iq(r, o)) {
                        let e = n - r;
                        iG(e, Math.abs(t)) > 0 && (t = t < 0 ? 0 - e : e)
                    }
                }
            } {
                let e = t < 0 ? s : d,
                    i = r[e];
                (0, aS.ensure)(i, () => "No panel data found for index ".concat(e));
                let {
                    collapsedSize: o = 0,
                    collapsible: l,
                    minSize: n = 0
                } = i;
                if (l) {
                    let r = a[e];
                    if ((0, aS.ensure)(r, () => "Previous size not found for panel index ".concat(e)), iq(r, n)) {
                        let e = r - o;
                        iG(e, Math.abs(t)) > 0 && (t = t < 0 ? 0 - e : e)
                    }
                }
            }
        } {
            let e = t < 0 ? 1 : -1,
                i = t < 0 ? d : s,
                o = 0;
            for (;;) {
                let t = a[i];
                if ((0, aS.ensure)(t, () => "Previous size not found for panel index ".concat(i)), o += i$({
                        panels: r,
                        index: i,
                        size: 100
                    }) - t, (i += e) < 0 || i >= r.length) break
            }
            let l = Math.min(Math.abs(t), Math.abs(o));
            t = t < 0 ? 0 - l : l
        } {
            let e = t < 0 ? s : d;
            for (; e >= 0 && e < r.length;) {
                let i = Math.abs(t) - Math.abs(c),
                    o = a[e];
                (0, aS.ensure)(o, () => "Previous size not found for panel index ".concat(e));
                let l = i$({
                    panels: r,
                    index: e,
                    size: o - i
                });
                if (!iq(o, l) && (c += o - l, n[e] = l, c.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3), void 0, {
                        numeric: !0
                    }) >= 0)) break;
                t < 0 ? e-- : e++
            }
        }
        if (iY(o, n)) return o; {
            let e = t < 0 ? d : s,
                i = a[e];
            (0, aS.ensure)(i, () => "Previous size not found for panel index ".concat(e));
            let o = i + c,
                l = i$({
                    panels: r,
                    index: e,
                    size: o
                });
            if (n[e] = l, !iq(l, o)) {
                let e = o - l,
                    a = t < 0 ? d : s;
                for (; a >= 0 && a < r.length;) {
                    let i = n[a];
                    (0, aS.ensure)(i, () => "Previous size not found for panel index ".concat(a));
                    let o = i$({
                        panels: r,
                        index: a,
                        size: i + e
                    });
                    if (iq(i, o) || (e -= o - i, n[a] = o), iq(e, 0)) break;
                    t > 0 ? a-- : a++
                }
            }
        }
        return iq(n.reduce((e, t) => t + e, 0), 100) ? n : o
    }

    function iJ(e) {
        let {
            size: t,
            panels: a
        } = e, r = [...t], i = r.reduce((e, t) => e + t, 0);
        if (r.length !== a.length) throw Error("Invalid ".concat(a.length, " panel size: ").concat(r.map(e => "".concat(e, "%")).join(", ")));
        if (!iq(i, 100) && r.length > 0)
            for (let e = 0; e < a.length; e++) {
                let t = r[e];
                (0, aS.ensure)(t, () => "No size data found for index ".concat(e));
                let a = 100 / i * t;
                r[e] = a
            }
        let o = 0;
        for (let e = 0; e < a.length; e++) {
            let t = r[e];
            (0, aS.ensure)(t, () => "No size data found for index ".concat(e));
            let i = i$({
                panels: a,
                index: e,
                size: t
            });
            t != i && (o += t - i, r[e] = i)
        }
        if (!iq(o, 0))
            for (let e = 0; e < a.length; e++) {
                let t = r[e];
                (0, aS.ensure)(t, () => "No size data found for index ".concat(e));
                let i = i$({
                    panels: a,
                    index: e,
                    size: t + o
                });
                if (t !== i && (o -= i - t, r[e] = i, iq(o, 0))) break
            }
        return r
    }

    function iQ(e, t) {
        let {
            refs: a,
            prop: r,
            context: i
        } = e, o = r("panels"), l = r("onCollapse"), n = r("onExpand"), s = a.get("panelIdToLastNotifiedSizeMap");
        i.set("size", t), t.forEach((e, t) => {
            let a = o[t];
            (0, aS.ensure)(a, () => "Panel data not found for index ".concat(t));
            let {
                collapsedSize: r = 0,
                collapsible: i,
                id: d
            } = a, c = s.get(d);
            (null == c || e !== c) && (s.set(d, e), i && (l || n) && ((null == c || iq(c, r)) && !iq(e, r) && (null == n || n({
                panelId: d,
                size: e
            })), l && (null == c || !iq(c, r)) && iq(e, r) && (null == l || l({
                panelId: d,
                size: e
            }))))
        })
    }(0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return (0, aS.ensureProps)(t, ["panels"]), {
                orientation: "horizontal",
                defaultSize: [],
                dir: "ltr",
                ...t,
                panels: t.panels.sort((e, t) => {
                    let a = e.order,
                        r = t.order;
                    return null == a && null == r ? 0 : null == a ? -1 : null == r ? 1 : a - r
                })
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a,
                getContext: r,
                getRefs: i
            } = e;
            return {
                size: a(() => ({
                    value: t("size"),
                    defaultValue: t("defaultSize"),
                    isEqual: (e, t) => null != t && iY(e, t),
                    onChange(e) {
                        var a, o, l;
                        let n = r(),
                            s = Object.fromEntries(i().get("panelSizeBeforeCollapse").entries()),
                            d = null != (l = null == (a = n.get("dragState")) ? void 0 : a.resizeTriggerId) ? l : null,
                            c = t("panels").map(e => e.id).sort().join(":");
                        null == (o = t("onResize")) || o({
                            size: e,
                            layout: c,
                            resizeTriggerId: d,
                            expandToSizes: s
                        })
                    }
                })),
                dragState: a(() => ({
                    defaultValue: null
                })),
                keyboardState: a(() => ({
                    defaultValue: null
                }))
            }
        },
        watch(e) {
            let {
                track: t,
                action: a,
                prop: r
            } = e;
            t([() => {
                var e;
                return (e = r("panels")).map(e => e.id).sort().map(t => JSON.stringify(e.find(e => e.id === t))).join(",")
            }], () => {
                a(["syncSize"])
            })
        },
        refs: () => ({
            panelSizeBeforeCollapse: new Map,
            prevDelta: 0,
            panelIdToLastNotifiedSizeMap: new Map
        }),
        computed: {
            horizontal(e) {
                let {
                    prop: t
                } = e;
                return "horizontal" === t("orientation")
            }
        },
        on: {
            "SIZE.SET": {
                actions: ["setSize"]
            },
            "PANEL.COLLAPSE": {
                actions: ["collapsePanel"]
            },
            "PANEL.EXPAND": {
                actions: ["expandPanel"]
            },
            "PANEL.RESIZE": {
                actions: ["resizePanel"]
            }
        },
        entry: ["syncSize"],
        exit: ["clearGlobalCursor"],
        states: {
            idle: {
                entry: ["clearDraggingState", "clearKeyboardState"],
                on: {
                    POINTER_OVER: {
                        target: "hover:temp",
                        actions: ["setKeyboardState"]
                    },
                    FOCUS: {
                        target: "focused",
                        actions: ["setKeyboardState"]
                    },
                    POINTER_DOWN: {
                        target: "dragging",
                        actions: ["setDraggingState"]
                    }
                }
            },
            "hover:temp": {
                effects: ["waitForHoverDelay"],
                on: {
                    HOVER_DELAY: {
                        target: "hover"
                    },
                    POINTER_DOWN: {
                        target: "dragging",
                        actions: ["setDraggingState"]
                    },
                    POINTER_LEAVE: {
                        target: "idle"
                    }
                }
            },
            hover: {
                tags: ["focus"],
                on: {
                    POINTER_DOWN: {
                        target: "dragging",
                        actions: ["setDraggingState"]
                    },
                    POINTER_LEAVE: {
                        target: "idle"
                    }
                }
            },
            focused: {
                tags: ["focus"],
                on: {
                    BLUR: {
                        target: "idle"
                    },
                    ENTER: {
                        actions: ["collapseOrExpandPanel"]
                    },
                    POINTER_DOWN: {
                        target: "dragging",
                        actions: ["setDraggingState"]
                    },
                    KEYBOARD_MOVE: {
                        actions: ["invokeOnResizeStart", "setKeyboardValue", "invokeOnResizeEnd"]
                    },
                    "FOCUS.CYCLE": {
                        actions: ["focusNextResizeTrigger"]
                    }
                }
            },
            dragging: {
                tags: ["focus"],
                effects: ["trackPointerMove"],
                entry: ["invokeOnResizeStart"],
                on: {
                    POINTER_MOVE: {
                        actions: ["setPointerValue", "setGlobalCursor"]
                    },
                    POINTER_UP: {
                        target: "idle",
                        actions: ["invokeOnResizeEnd", "clearGlobalCursor"]
                    }
                }
            }
        },
        implementations: {
            effects: {
                waitForHoverDelay: e => {
                    let {
                        send: t
                    } = e;
                    return (0, aS.setRafTimeout)(() => {
                        t({
                            type: "HOVER_DELAY"
                        })
                    }, 250)
                },
                trackPointerMove: e => {
                    let {
                        scope: t,
                        send: a
                    } = e, r = t.getDoc();
                    return (0, ax.trackPointerMove)(r, {
                        onPointerMove(e) {
                            a({
                                type: "POINTER_MOVE",
                                point: e.point
                            })
                        },
                        onPointerUp() {
                            a({
                                type: "POINTER_UP"
                            })
                        }
                    })
                }
            },
            actions: {
                setSize(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = a.size, o = t.get("size"), l = iJ({
                        size: i,
                        panels: r("panels")
                    });
                    (0, aS.isEqual)(o, l) || iQ(e, l)
                },
                syncSize(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("panels"), i = t.get("size"), o = null;
                    0 === i.length && (o = function(e) {
                        let {
                            panels: t,
                            size: a
                        } = e, r = Array(t.length), i = 0, o = 100;
                        for (let e = 0; e < t.length; e++) {
                            let l = t[e];
                            (0, aS.ensure)(l, () => "Panel data not found for index ".concat(e));
                            let n = a[e];
                            null != n && (i++, r[e] = n, o -= n)
                        }
                        for (let e = 0; e < t.length; e++) {
                            let l = t[e];
                            if ((0, aS.ensure)(l, () => "Panel data not found for index ".concat(e)), null != a[e]) continue;
                            let n = o / (t.length - i);
                            i++, r[e] = n, o -= n
                        }
                        return r
                    }({
                        panels: r,
                        size: t.initial("size")
                    }));
                    let l = iJ({
                        size: null != o ? o : i,
                        panels: r
                    });
                    (0, aS.isEqual)(i, l) || t.set("size", l)
                },
                setDraggingState(e) {
                    var t, a, r;
                    let {
                        context: i,
                        event: o,
                        prop: l,
                        scope: n
                    } = e, s = l("orientation"), d = i.get("size"), c = o.id;
                    if (!iU(n)) return;
                    let u = n.getById(null != (r = null == (a = n.ids) || null == (t = a.resizeTrigger) ? void 0 : t.call(a, c)) ? r : "splitter:".concat(n.id, ":splitter:").concat(c));
                    (0, aS.ensure)(u, () => 'Drag handle element not found for id "'.concat(c, '"'));
                    let g = "horizontal" === s ? o.point.x : o.point.y;
                    i.set("dragState", {
                        resizeTriggerId: o.id,
                        resizeTriggerRect: u.getBoundingClientRect(),
                        initialCursorPosition: g,
                        initialSize: d
                    })
                },
                clearDraggingState(e) {
                    let {
                        context: t
                    } = e;
                    t.set("dragState", null)
                },
                setKeyboardState(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("keyboardState", {
                        resizeTriggerId: a.id
                    })
                },
                clearKeyboardState(e) {
                    let {
                        context: t
                    } = e;
                    t.set("keyboardState", null)
                },
                collapsePanel(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r,
                        refs: i
                    } = e, o = t.get("size"), l = a("panels"), n = l.find(e => e.id === r.id);
                    if ((0, aS.ensure)(n, () => 'Panel data not found for id "'.concat(r.id, '"')), n.collapsible) {
                        let {
                            collapsedSize: t = 0,
                            panelSize: a,
                            pivotIndices: r
                        } = iX(l, n, o);
                        if ((0, aS.ensure)(a, () => 'Panel size not found for panel "'.concat(n.id, '"')), !iq(a, t)) {
                            i.get("panelSizeBeforeCollapse").set(n.id, a);
                            let s = iZ({
                                delta: iK(l, n) === l.length - 1 ? a - t : t - a,
                                initialSize: o,
                                panels: l,
                                pivotIndices: r,
                                prevSize: o,
                                trigger: "imperative-api"
                            });
                            (0, aS.isEqual)(o, s) || iQ(e, s)
                        }
                    }
                },
                expandPanel(e) {
                    let {
                        context: t,
                        prop: a,
                        event: r,
                        refs: i
                    } = e, o = a("panels"), l = t.get("size"), n = o.find(e => e.id === r.id);
                    if ((0, aS.ensure)(n, () => 'Panel data not found for id "'.concat(r.id, '"')), n.collapsible) {
                        var s;
                        let {
                            collapsedSize: t = 0,
                            panelSize: a = 0,
                            minSize: d = 0,
                            pivotIndices: c
                        } = iX(o, n, l), u = null != (s = r.minSize) ? s : d;
                        if (iq(a, t)) {
                            let t = i.get("panelSizeBeforeCollapse").get(n.id),
                                r = null != t && t >= u ? t : u,
                                s = iZ({
                                    delta: iK(o, n) === o.length - 1 ? a - r : r - a,
                                    initialSize: l,
                                    panels: o,
                                    pivotIndices: c,
                                    prevSize: l,
                                    trigger: "imperative-api"
                                });
                            (0, aS.isEqual)(l, s) || iQ(e, s)
                        }
                    }
                },
                resizePanel(e) {
                    var t;
                    let a, {
                            context: r,
                            prop: i,
                            event: o
                        } = e,
                        l = r.get("size"),
                        n = i("panels"),
                        s = (t = o.id, a = n.find(e => e.id === t), (0, aS.ensure)(a, () => 'Panel data not found for id "'.concat(t, '"')), a),
                        d = o.size,
                        {
                            panelSize: c,
                            pivotIndices: u
                        } = iX(n, s, l);
                    (0, aS.ensure)(c, () => 'Panel size not found for panel "'.concat(s.id, '"'));
                    let g = iZ({
                        delta: iK(n, s) === n.length - 1 ? c - d : d - c,
                        initialSize: l,
                        panels: n,
                        pivotIndices: u,
                        prevSize: l,
                        trigger: "imperative-api"
                    });
                    (0, aS.isEqual)(l, g) || iQ(e, g)
                },
                setPointerValue(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r,
                        scope: i
                    } = e, o = t.get("dragState");
                    if (!o) return;
                    let {
                        resizeTriggerId: l,
                        initialSize: n,
                        initialCursorPosition: s
                    } = o, d = r("panels"), c = iU(i);
                    (0, aS.ensure)(c, () => "Panel group element not found");
                    let u = l.split(":").map(e => d.findIndex(t => t.id === e)),
                        g = "horizontal" === r("orientation"),
                        p = g ? a.point.x : a.point.y,
                        h = c.getBoundingClientRect(),
                        m = g ? h.width : h.height,
                        f = t.get("size"),
                        v = iZ({
                            delta: (p - s) / m * 100,
                            initialSize: null != n ? n : f,
                            panels: d,
                            pivotIndices: u,
                            prevSize: f,
                            trigger: "mouse-or-touch"
                        });
                    (0, aS.isEqual)(f, v) || iQ(e, v)
                },
                setKeyboardValue(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = r("panels"), o = a.id, l = a.delta, n = o.split(":").map(e => i.findIndex(t => t.id === e)), s = t.get("size"), d = iZ({
                        delta: l,
                        initialSize: s,
                        panels: i,
                        pivotIndices: n,
                        prevSize: s,
                        trigger: "keyboard"
                    });
                    (0, aS.isEqual)(s, d) || iQ(e, d)
                },
                invokeOnResizeEnd(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    queueMicrotask(() => {
                        var e, r;
                        let i = t.get("dragState");
                        null == (e = a("onResizeEnd")) || e({
                            size: t.get("size"),
                            resizeTriggerId: null != (r = null == i ? void 0 : i.resizeTriggerId) ? r : null
                        })
                    })
                },
                invokeOnResizeStart(e) {
                    let {
                        prop: t
                    } = e;
                    queueMicrotask(() => {
                        var e;
                        null == (e = t("onResizeStart")) || e()
                    })
                },
                collapseOrExpandPanel(e) {
                    var t, a;
                    let {
                        context: r,
                        prop: i
                    } = e, o = i("panels"), l = r.get("size"), n = null == (t = r.get("keyboardState")) ? void 0 : t.resizeTriggerId, [s, d] = null != (a = null == n ? void 0 : n.split(":")) ? a : [], c = o.findIndex(e => e.id === s);
                    if (-1 === c) return;
                    let u = o[c];
                    (0, aS.ensure)(u, () => "No panel data found for index ".concat(c));
                    let g = l[c],
                        {
                            collapsedSize: p = 0,
                            collapsible: h,
                            minSize: m = 0
                        } = u;
                    if (null != g && h) {
                        let t = [s, d].map(e => o.findIndex(t => t.id === e)),
                            a = iZ({
                                delta: iq(g, p) ? m - p : p - g,
                                initialSize: r.initial("size"),
                                panels: o,
                                pivotIndices: t,
                                prevSize: l,
                                trigger: "keyboard"
                            });
                        (0, aS.isEqual)(l, a) || iQ(e, a)
                    }
                },
                setGlobalCursor(e) {
                    let {
                        context: t,
                        scope: a,
                        prop: r
                    } = e, i = t.get("dragState");
                    if (!i) return;
                    let o = r("panels"),
                        l = "horizontal" === r("orientation"),
                        [n] = i.resizeTriggerId.split(":"),
                        s = o.findIndex(e => e.id === n),
                        d = o[s],
                        c = function(e, t, a) {
                            let [r, i] = a.split(":"), o = t.findIndex(e => e.id === r), l = t.findIndex(e => e.id === i), {
                                valueMax: n,
                                valueMin: s,
                                valueNow: d
                            } = function(e) {
                                let {
                                    size: t,
                                    panels: a,
                                    pivotIndices: r
                                } = e, i = 0, o = 100, l = 0, n = 0, s = r[0];
                                return (0, aS.ensure)(s, () => "No pivot index found"), a.forEach((e, t) => {
                                    let {
                                        maxSize: a = 100,
                                        minSize: r = 0
                                    } = e;
                                    t === s ? (i = r, o = a) : (l += r, n += a)
                                }), {
                                    valueMax: Math.min(o, 100 - l),
                                    valueMin: Math.max(i, 100 - n),
                                    valueNow: t[s]
                                }
                            }({
                                size: e,
                                panels: t,
                                pivotIndices: [o, l]
                            });
                            return {
                                beforeId: r,
                                afterId: i,
                                valueMax: Math.round(n),
                                valueMin: Math.round(s),
                                valueNow: null != d ? Math.round(d) : void 0
                            }
                        }(t.get("size"), o, i.resizeTriggerId),
                        u = iq(c.valueNow, c.valueMin) || iq(c.valueNow, d.collapsedSize);
                    ((e, t, a, r) => {
                        let i, o = e.getById(ij(e)),
                            l = "* { cursor: ".concat((i = a ? "col-resize" : "row-resize", t.isAtMin && (i = a ? "e-resize" : "s-resize"), t.isAtMax && (i = a ? "w-resize" : "n-resize"), i), " !important; }");
                        if (o) o.textContent = l;
                        else {
                            let t = e.getDoc().createElement("style");
                            r && (t.nonce = r), t.id = ij(e), t.textContent = l, e.getDoc().head.appendChild(t)
                        }
                    })(a, {
                        isAtMin: u,
                        isAtMax: iq(c.valueNow, c.valueMax)
                    }, l, r("nonce"))
                },
                clearGlobalCursor(e) {
                    let t, {
                        scope: a
                    } = e;
                    null == (t = a.getById(ij(a))) || t.remove()
                },
                focusNextResizeTrigger(e) {
                    let {
                        event: t,
                        scope: a
                    } = e, r = (0, ax.queryAll)(iU(a), "[role=separator][data-ownedby='".concat(CSS.escape(iH(a)), "']")), i = r.findIndex(e => e.dataset.id === t.id), o = t.shiftKey ? (0, aS.prev)(r, i) : (0, aS.next)(r, i);
                    null == o || o.focus()
                }
            }
        }
    });
    var i0 = (0, aI.createProps)()(["dir", "getRootNode", "id", "ids", "onResize", "onResizeStart", "onResizeEnd", "onCollapse", "onExpand", "orientation", "size", "defaultSize", "panels", "keyboardResizeBy", "nonce"]);
    (0, aS.createSplitProps)(i0);
    var i1 = (0, aI.createProps)()(["id"]);
    (0, aS.createSplitProps)(i1);
    var i2 = (0, aI.createProps)()(["disabled", "id"]);
    (0, aS.createSplitProps)(i2);
    var i5 = e.i(727618),
        i5 = i5;
    let i3 = aG.anatomy.extendWith("itemBody"),
        i4 = (0, av.createAnatomy)("action-bar").parts("positioner", "content", "separator", "selectionTrigger", "closeTrigger"),
        i6 = (0, av.createAnatomy)("alert").parts("title", "description", "root", "indicator", "content"),
        i8 = (0, av.createAnatomy)("breadcrumb").parts("link", "currentLink", "item", "list", "root", "ellipsis", "separator"),
        i7 = (0, av.createAnatomy)("blockquote").parts("root", "icon", "content", "caption"),
        i9 = (0, av.createAnatomy)("card").parts("root", "header", "body", "footer", "title", "description"),
        oe = (0, av.createAnatomy)("checkbox-card", ["root", "control", "label", "description", "addon", "indicator", "content"]),
        ot = (0, av.createAnatomy)("data-list").parts("root", "item", "itemLabel", "itemValue"),
        oa = rN.anatomy.extendWith("header", "body", "footer", "backdrop"),
        or = rN.anatomy.extendWith("header", "body", "footer", "backdrop"),
        oi = rD.extendWith("textarea"),
        oo = (0, av.createAnatomy)("empty-state", ["root", "content", "indicator", "title", "description"]),
        ol = rM.fieldAnatomy.extendWith("requiredIndicator"),
        on = rB.extendWith("content"),
        os = rJ.extendWith("itemContent", "dropzoneContent", "fileText"),
        od = (0, av.createAnatomy)("list").parts("root", "item", "indicator"),
        oc = is.anatomy.extendWith("itemCommand"),
        ou = (0, av.createAnatomy)("select").parts("root", "field", "indicator"),
        og = id.anatomy.extendWith("header", "body", "footer"),
        op = ic.anatomy.extendWith("itemAddon", "itemIndicator"),
        oh = op.extendWith("itemContent", "itemDescription"),
        om = iu.extendWith("itemIndicator"),
        of = iv.anatomy.extendWith("indicatorGroup"),
        ov = aU.extendWith("indicatorGroup", "empty"),
        ob = ib.extendWith("markerIndicator"),
        ox = (0, av.createAnatomy)("stat").parts("root", "label", "helpText", "valueText", "valueUnit", "indicator"),
        oy = (0, av.createAnatomy)("status").parts("root", "indicator"),
        oS = (0, av.createAnatomy)("steps", ["root", "list", "item", "trigger", "indicator", "separator", "content", "title", "description", "nextTrigger", "prevTrigger", "progress"]),
        ok = i5.anatomy.extendWith("indicator"),
        oC = (0, av.createAnatomy)("table").parts("root", "header", "body", "row", "columnHeader", "cell", "footer", "caption"),
        oI = (0, av.createAnatomy)("toast").parts("root", "title", "description", "indicator", "closeTrigger", "actionTrigger"),
        ow = (0, av.createAnatomy)("tabs").parts("root", "trigger", "list", "content", "contentGroup", "indicator"),
        oE = (0, av.createAnatomy)("tag").parts("root", "label", "closeTrigger", "startElement", "endElement"),
        oP = (0, av.createAnatomy)("timeline").parts("root", "item", "content", "separator", "indicator", "connector", "title", "description"),
        oV = rA.extendWith("channelText"),
        oT = (0, av.createAnatomy)("code-block", ["root", "content", "title", "header", "footer", "control", "overlay", "code", "codeText", "copyTrigger", "copyIndicator", "collapseTrigger", "collapseIndicator", "collapseText"]),
        oR = iB.extendWith("resizeTriggerSeparator", "resizeTriggerIndicator");
    aq.extendWith("valueText");
    let oz = (0, tB.defineSlotRecipe)({
            className: "chakra-accordion",
            slots: i3.keys(),
            base: {
                root: {
                    width: "full",
                    "--accordion-radius": "radii.l2"
                },
                item: {
                    overflowAnchor: "none"
                },
                itemTrigger: {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "start",
                    width: "full",
                    outline: "0",
                    gap: "3",
                    fontWeight: "medium",
                    borderRadius: "var(--accordion-radius)",
                    _focusVisible: {
                        outline: "2px solid",
                        outlineColor: "colorPalette.focusRing"
                    },
                    _disabled: {
                        layerStyle: "disabled"
                    }
                },
                itemBody: {
                    pt: "var(--accordion-padding-y)",
                    pb: "calc(var(--accordion-padding-y) * 2)"
                },
                itemContent: {
                    overflow: "hidden",
                    borderRadius: "var(--accordion-radius)",
                    _open: {
                        animationName: "expand-height, fade-in",
                        animationDuration: "moderate"
                    },
                    _closed: {
                        animationName: "collapse-height, fade-out",
                        animationDuration: "moderate"
                    }
                },
                itemIndicator: {
                    transition: "rotate 0.2s",
                    transformOrigin: "center",
                    color: "fg.subtle",
                    _open: {
                        rotate: "180deg"
                    },
                    _icon: {
                        width: "1.2em",
                        height: "1.2em"
                    }
                }
            },
            variants: {
                variant: {
                    outline: {
                        item: {
                            borderBottomWidth: "1px"
                        }
                    },
                    subtle: {
                        itemTrigger: {
                            px: "var(--accordion-padding-x)"
                        },
                        itemContent: {
                            px: "var(--accordion-padding-x)"
                        },
                        item: {
                            borderRadius: "var(--accordion-radius)",
                            _open: {
                                bg: "colorPalette.subtle"
                            }
                        }
                    },
                    enclosed: {
                        root: {
                            borderWidth: "1px",
                            borderRadius: "var(--accordion-radius)",
                            divideY: "1px",
                            overflow: "hidden"
                        },
                        itemTrigger: {
                            px: "var(--accordion-padding-x)"
                        },
                        itemContent: {
                            px: "var(--accordion-padding-x)"
                        },
                        item: {
                            _open: {
                                bg: "bg.subtle"
                            }
                        }
                    },
                    plain: {}
                },
                size: {
                    sm: {
                        root: {
                            "--accordion-padding-x": "spacing.3",
                            "--accordion-padding-y": "spacing.2"
                        },
                        itemTrigger: {
                            textStyle: "sm",
                            py: "var(--accordion-padding-y)"
                        }
                    },
                    md: {
                        root: {
                            "--accordion-padding-x": "spacing.4",
                            "--accordion-padding-y": "spacing.2"
                        },
                        itemTrigger: {
                            textStyle: "md",
                            py: "var(--accordion-padding-y)"
                        }
                    },
                    lg: {
                        root: {
                            "--accordion-padding-x": "spacing.4.5",
                            "--accordion-padding-y": "spacing.2.5"
                        },
                        itemTrigger: {
                            textStyle: "lg",
                            py: "var(--accordion-padding-y)"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        o_ = (0, tB.defineSlotRecipe)({
            className: "chakra-action-bar",
            slots: i4.keys(),
            base: {
                positioner: {
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none",
                    insetInline: "0",
                    top: "unset",
                    bottom: "calc(env(safe-area-inset-bottom) + 20px)"
                },
                content: {
                    bg: "bg.panel",
                    shadow: "md",
                    display: "flex",
                    alignItems: "center",
                    gap: "3",
                    borderRadius: "l3",
                    py: "2.5",
                    px: "3",
                    pointerEvents: "auto",
                    translate: "calc(-1 * var(--scrollbar-width) / 2) 0px",
                    _open: {
                        animationName: "slide-from-bottom, fade-in",
                        animationDuration: "moderate"
                    },
                    _closed: {
                        animationName: "slide-to-bottom, fade-out",
                        animationDuration: "faster"
                    }
                },
                separator: {
                    width: "1px",
                    height: "5",
                    bg: "border"
                },
                selectionTrigger: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "2",
                    alignSelf: "stretch",
                    textStyle: "sm",
                    px: "4",
                    py: "1",
                    borderRadius: "l2",
                    borderWidth: "1px",
                    borderStyle: "dashed"
                }
            }
        }),
        oO = (0, tB.defineSlotRecipe)({
            slots: i6.keys(),
            className: "chakra-alert",
            base: {
                root: {
                    width: "full",
                    display: "flex",
                    alignItems: "flex-start",
                    position: "relative",
                    borderRadius: "l3"
                },
                title: {
                    fontWeight: "medium"
                },
                description: {
                    display: "inline"
                },
                indicator: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    width: "1em",
                    height: "1em",
                    _icon: {
                        boxSize: "full"
                    }
                },
                content: {
                    display: "flex",
                    flex: "1",
                    gap: "1"
                }
            },
            variants: {
                status: {
                    info: {
                        root: {
                            colorPalette: "blue"
                        }
                    },
                    warning: {
                        root: {
                            colorPalette: "orange"
                        }
                    },
                    success: {
                        root: {
                            colorPalette: "green"
                        }
                    },
                    error: {
                        root: {
                            colorPalette: "red"
                        }
                    },
                    neutral: {
                        root: {
                            colorPalette: "gray"
                        }
                    }
                },
                inline: {
                    true: {
                        content: {
                            display: "inline-flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    },
                    false: {
                        content: {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }
                },
                variant: {
                    subtle: {
                        root: {
                            bg: "colorPalette.subtle",
                            color: "colorPalette.fg"
                        }
                    },
                    surface: {
                        root: {
                            bg: "colorPalette.subtle",
                            color: "colorPalette.fg",
                            shadow: "inset 0 0 0px 1px var(--shadow-color)",
                            shadowColor: "colorPalette.muted"
                        },
                        indicator: {
                            color: "colorPalette.fg"
                        }
                    },
                    outline: {
                        root: {
                            color: "colorPalette.fg",
                            shadow: "inset 0 0 0px 1px var(--shadow-color)",
                            "--outline-shadow-legacy": "colors.colorPalette.muted",
                            "--outline-shadow": "colors.colorPalette.border",
                            shadowColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
                        },
                        indicator: {
                            color: "colorPalette.fg"
                        }
                    },
                    solid: {
                        root: {
                            bg: "colorPalette.solid",
                            color: "colorPalette.contrast"
                        },
                        indicator: {
                            color: "colorPalette.contrast"
                        }
                    }
                },
                size: {
                    sm: {
                        root: {
                            gap: "2",
                            px: "3",
                            py: "3",
                            textStyle: "xs"
                        },
                        indicator: {
                            textStyle: "lg"
                        }
                    },
                    md: {
                        root: {
                            gap: "3",
                            px: "4",
                            py: "4",
                            textStyle: "sm"
                        },
                        indicator: {
                            textStyle: "xl"
                        }
                    },
                    lg: {
                        root: {
                            gap: "3",
                            px: "4",
                            py: "4",
                            textStyle: "md"
                        },
                        indicator: {
                            textStyle: "2xl"
                        }
                    }
                }
            },
            defaultVariants: {
                status: "info",
                variant: "subtle",
                size: "md",
                inline: !1
            }
        });
    var oA = e.i(895315),
        oA = oA;
    let oN = (0, tB.defineSlotRecipe)({
            slots: oA.anatomy.keys(),
            className: "chakra-avatar",
            base: {
                root: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "medium",
                    position: "relative",
                    verticalAlign: "top",
                    flexShrink: "0",
                    userSelect: "none",
                    width: "var(--avatar-size)",
                    height: "var(--avatar-size)",
                    fontSize: "var(--avatar-font-size)",
                    borderRadius: "var(--avatar-radius)",
                    "&[data-group-item]": {
                        borderWidth: "2px",
                        borderColor: "bg"
                    }
                },
                image: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "var(--avatar-radius)"
                },
                fallback: {
                    lineHeight: "1",
                    textTransform: "uppercase",
                    fontWeight: "medium",
                    fontSize: "var(--avatar-font-size)",
                    borderRadius: "var(--avatar-radius)"
                }
            },
            variants: {
                size: {
                    full: {
                        root: {
                            "--avatar-size": "100%",
                            "--avatar-font-size": "100%"
                        }
                    },
                    "2xs": {
                        root: {
                            "--avatar-font-size": "fontSizes.2xs",
                            "--avatar-size": "sizes.6"
                        }
                    },
                    xs: {
                        root: {
                            "--avatar-font-size": "fontSizes.xs",
                            "--avatar-size": "sizes.8"
                        }
                    },
                    sm: {
                        root: {
                            "--avatar-font-size": "fontSizes.sm",
                            "--avatar-size": "sizes.9"
                        }
                    },
                    md: {
                        root: {
                            "--avatar-font-size": "fontSizes.md",
                            "--avatar-size": "sizes.10"
                        }
                    },
                    lg: {
                        root: {
                            "--avatar-font-size": "fontSizes.md",
                            "--avatar-size": "sizes.11"
                        }
                    },
                    xl: {
                        root: {
                            "--avatar-font-size": "fontSizes.lg",
                            "--avatar-size": "sizes.12"
                        }
                    },
                    "2xl": {
                        root: {
                            "--avatar-font-size": "fontSizes.xl",
                            "--avatar-size": "sizes.16"
                        }
                    }
                },
                variant: {
                    solid: {
                        root: {
                            bg: "colorPalette.solid",
                            color: "colorPalette.contrast"
                        }
                    },
                    subtle: {
                        root: {
                            bg: "colorPalette.muted",
                            color: "colorPalette.fg"
                        }
                    },
                    outline: {
                        root: {
                            color: "colorPalette.fg",
                            borderWidth: "1px",
                            "--outline-shadow-legacy": "colors.colorPalette.muted",
                            "--outline-shadow": "colors.colorPalette.border",
                            borderColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
                        }
                    }
                },
                shape: {
                    square: {},
                    rounded: {
                        root: {
                            "--avatar-radius": "radii.l3"
                        }
                    },
                    full: {
                        root: {
                            "--avatar-radius": "radii.full"
                        }
                    }
                },
                borderless: {
                    true: {
                        root: {
                            "&[data-group-item]": {
                                borderWidth: "0px"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                shape: "full",
                variant: "subtle"
            }
        }),
        oF = (0, tB.defineSlotRecipe)({
            className: "chakra-blockquote",
            slots: i7.keys(),
            base: {
                root: {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2"
                },
                caption: {
                    textStyle: "sm",
                    color: "fg.muted"
                },
                icon: {
                    boxSize: "5"
                }
            },
            variants: {
                justify: {
                    start: {
                        root: {
                            alignItems: "flex-start",
                            textAlign: "start"
                        }
                    },
                    center: {
                        root: {
                            alignItems: "center",
                            textAlign: "center"
                        }
                    },
                    end: {
                        root: {
                            alignItems: "flex-end",
                            textAlign: "end"
                        }
                    }
                },
                variant: {
                    subtle: {
                        root: {
                            paddingX: "5",
                            borderStartWidth: "4px",
                            borderStartColor: "colorPalette.muted"
                        },
                        icon: {
                            color: "colorPalette.fg"
                        }
                    },
                    solid: {
                        root: {
                            paddingX: "5",
                            borderStartWidth: "4px",
                            borderStartColor: "colorPalette.solid"
                        },
                        icon: {
                            color: "colorPalette.solid"
                        }
                    },
                    plain: {
                        root: {
                            paddingX: "5"
                        },
                        icon: {
                            color: "colorPalette.solid"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "subtle",
                justify: "start"
            }
        }),
        oD = (0, tB.defineSlotRecipe)({
            className: "chakra-breadcrumb",
            slots: i8.keys(),
            base: {
                list: {
                    display: "flex",
                    alignItems: "center",
                    wordBreak: "break-word",
                    color: "fg.muted",
                    listStyle: "none"
                },
                link: {
                    outline: "0",
                    textDecoration: "none",
                    borderRadius: "l1",
                    focusRing: "outside",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "2"
                },
                item: {
                    display: "inline-flex",
                    alignItems: "center"
                },
                separator: {
                    color: "fg.muted",
                    opacity: "0.8",
                    _icon: {
                        boxSize: "1em"
                    },
                    _rtl: {
                        rotate: "180deg"
                    }
                },
                ellipsis: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    _icon: {
                        boxSize: "1em"
                    }
                }
            },
            variants: {
                variant: {
                    underline: {
                        link: {
                            color: "colorPalette.fg",
                            textDecoration: "underline",
                            textUnderlineOffset: "0.2em",
                            textDecorationColor: "colorPalette.muted"
                        },
                        currentLink: {
                            color: "colorPalette.fg"
                        }
                    },
                    plain: {
                        link: {
                            color: "fg.muted",
                            _hover: {
                                color: "fg"
                            }
                        },
                        currentLink: {
                            color: "fg"
                        }
                    }
                },
                size: {
                    sm: {
                        list: {
                            gap: "1",
                            textStyle: "xs"
                        }
                    },
                    md: {
                        list: {
                            gap: "1.5",
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        list: {
                            gap: "2",
                            textStyle: "md"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "plain",
                size: "md"
            }
        }),
        oL = (0, tB.defineSlotRecipe)({
            className: "chakra-card",
            slots: i9.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    minWidth: "0",
                    wordWrap: "break-word",
                    borderRadius: "l3",
                    color: "fg",
                    textAlign: "start"
                },
                title: {
                    fontWeight: "semibold"
                },
                description: {
                    color: "fg.muted",
                    fontSize: "sm"
                },
                header: {
                    paddingInline: "var(--card-padding)",
                    paddingTop: "var(--card-padding)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5"
                },
                body: {
                    padding: "var(--card-padding)",
                    flex: "1",
                    display: "flex",
                    flexDirection: "column"
                },
                footer: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    paddingInline: "var(--card-padding)",
                    paddingBottom: "var(--card-padding)"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            "--card-padding": "spacing.4"
                        },
                        title: {
                            textStyle: "md"
                        }
                    },
                    md: {
                        root: {
                            "--card-padding": "spacing.6"
                        },
                        title: {
                            textStyle: "lg"
                        }
                    },
                    lg: {
                        root: {
                            "--card-padding": "spacing.7"
                        },
                        title: {
                            textStyle: "xl"
                        }
                    }
                },
                variant: {
                    elevated: {
                        root: {
                            bg: "bg.panel",
                            boxShadow: "md"
                        }
                    },
                    outline: {
                        root: {
                            bg: "bg.panel",
                            borderWidth: "1px",
                            borderColor: "border"
                        }
                    },
                    subtle: {
                        root: {
                            bg: "bg.muted"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "outline",
                size: "md"
            }
        });

    function oW(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = e.getBoundingClientRect(),
            r = {
                x: {
                    start: [],
                    center: [],
                    end: []
                },
                y: {
                    start: [],
                    center: [],
                    end: []
                }
            },
            i = t ? function e(t) {
                let a = [];
                for (let r of t.children) a = a.concat(r, e(r));
                return a
            }(e) : e.children;
        for (let t of ["x", "y"]) {
            let o = "x" === t ? "y" : "x",
                l = "x" === t ? "left" : "top",
                n = "x" === t ? "width" : "height",
                s = "x" === t ? "scrollLeft" : "scrollTop";
            for (let d of i) {
                let i = d.getBoundingClientRect();
                if (! function(e, t) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "both";
                        return "x" === a && e.right >= t.left && e.left <= t.right || "y" === a && e.bottom >= t.top && e.top <= t.bottom || "both" === a && e.right >= t.left && e.left <= t.right && e.bottom >= t.top && e.top <= t.bottom
                    }(a, i, o)) continue;
                let [c, u] = (0, ax.getComputedStyle)(d).getPropertyValue("scroll-snap-align").split(" ");
                void 0 === u && (u = c);
                let g = "x" === t ? u : c,
                    p = i[l] - a[l] + e[s];
                switch (g) {
                    case "none":
                        break;
                    case "start":
                        r[t].start.push({
                            node: d,
                            position: p
                        });
                        break;
                    case "center":
                        r[t].center.push({
                            node: d,
                            position: p + i[n] / 2
                        });
                        break;
                    case "end":
                        r[t].end.push({
                            node: d,
                            position: p + i[n]
                        })
                }
            }
        }
        return r
    }
    var oM = e => [...new Set(e)],
        oB = (e, t) => a => Math.max(e, Math.min(t, a)),
        oH = (0, av.createAnatomy)("carousel").parts("root", "itemGroup", "item", "control", "nextTrigger", "prevTrigger", "indicatorGroup", "indicator", "autoplayTrigger", "progressText");
    oH.build();
    var oj = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.itemGroup) ? a : "carousel:".concat(e.id, ":item-group"))
        },
        oU = e => (0, ax.queryAll)(oj(e), "[data-part=item]"),
        oG = e => {
            let t = oj(e);
            if (!t) return;
            let a = (0, ax.getTabbables)(t);
            t.setAttribute("tabindex", a.length > 0 ? "-1" : "0")
        };
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return (0, aS.ensureProps)(t, ["slideCount"], "carousel"), {
                dir: "ltr",
                defaultPage: 0,
                orientation: "horizontal",
                snapType: "mandatory",
                loop: !!t.autoplay,
                slidesPerPage: 1,
                slidesPerMove: "auto",
                spacing: "0px",
                autoplay: !1,
                allowMouseDrag: !1,
                inViewThreshold: .6,
                autoSize: !1,
                ...t,
                translations: {
                    nextTrigger: "Next slide",
                    prevTrigger: "Previous slide",
                    indicator: e => "Go to slide ".concat(e + 1),
                    item: (e, t) => "".concat(e + 1, " of ").concat(t),
                    autoplayStart: "Start slide rotation",
                    autoplayStop: "Stop slide rotation",
                    progressText: e => {
                        let {
                            page: t,
                            totalPages: a
                        } = e;
                        return "".concat(t, " / ").concat(a)
                    },
                    ...t.translations
                }
            }
        },
        refs: () => ({
            timeoutRef: void 0
        }),
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("autoplay") ? "autoplay" : "idle"
        },
        context(e) {
            let {
                prop: t,
                bindable: a,
                getContext: r
            } = e;
            return {
                page: a(() => ({
                    defaultValue: t("defaultPage"),
                    value: t("page"),
                    onChange(e) {
                        var a;
                        let i = r().get("pageSnapPoints");
                        null == (a = t("onPageChange")) || a({
                            page: e,
                            pageSnapPoint: i[e]
                        })
                    }
                })),
                pageSnapPoints: a(() => ({
                    defaultValue: t("autoSize") ? Array.from({
                        length: t("slideCount")
                    }, (e, t) => t) : function(e, t, a) {
                        if (null == e || a <= 0) return [];
                        let r = [],
                            i = "auto" === t ? Math.floor(a) : t;
                        if (i <= 0) return [];
                        for (let t = 0; t < e && !(t + a > e); t += i) r.push(t);
                        return r
                    }(t("slideCount"), t("slidesPerMove"), t("slidesPerPage"))
                })),
                slidesInView: a(() => ({
                    defaultValue: []
                }))
            }
        },
        computed: {
            isRtl: e => {
                let {
                    prop: t
                } = e;
                return "rtl" === t("dir")
            },
            isHorizontal: e => {
                let {
                    prop: t
                } = e;
                return "horizontal" === t("orientation")
            },
            canScrollNext: e => {
                let {
                    prop: t,
                    context: a
                } = e;
                return t("loop") || a.get("page") < a.get("pageSnapPoints").length - 1
            },
            canScrollPrev: e => {
                let {
                    prop: t,
                    context: a
                } = e;
                return t("loop") || a.get("page") > 0
            },
            autoplayInterval: e => {
                let {
                    prop: t
                } = e, a = t("autoplay");
                return (0, aS.isObject)(a) ? a.delay : 4e3
            }
        },
        watch(e) {
            let {
                track: t,
                action: a,
                context: r,
                prop: i,
                send: o
            } = e;
            t([() => i("slidesPerPage"), () => i("slidesPerMove")], () => {
                a(["setSnapPoints"])
            }), t([() => r.get("page")], () => {
                a(["scrollToPage", "focusIndicatorEl"])
            }), t([() => i("orientation"), () => i("autoSize")], () => {
                a(["setSnapPoints", "scrollToPage"])
            }), t([() => i("slideCount")], () => {
                o({
                    type: "SNAP.REFRESH",
                    src: "slide.count"
                })
            }), t([() => !!i("autoplay")], () => {
                o({
                    type: i("autoplay") ? "AUTOPLAY.START" : "AUTOPLAY.PAUSE",
                    src: "autoplay.prop.change"
                })
            })
        },
        on: {
            "PAGE.NEXT": {
                target: "idle",
                actions: ["clearScrollEndTimer", "setNextPage"]
            },
            "PAGE.PREV": {
                target: "idle",
                actions: ["clearScrollEndTimer", "setPrevPage"]
            },
            "PAGE.SET": {
                target: "idle",
                actions: ["clearScrollEndTimer", "setPage"]
            },
            "INDEX.SET": {
                target: "idle",
                actions: ["clearScrollEndTimer", "setMatchingPage"]
            },
            "SNAP.REFRESH": {
                actions: ["setSnapPoints", "clampPage"]
            },
            "PAGE.SCROLL": {
                actions: ["scrollToPage"]
            }
        },
        effects: ["trackSlideMutation", "trackSlideIntersections", "trackSlideResize"],
        entry: ["setSnapPoints", "setPage"],
        exit: ["clearScrollEndTimer"],
        states: {
            idle: {
                on: {
                    "DRAGGING.START": {
                        target: "dragging",
                        actions: ["invokeDragStart"]
                    },
                    "AUTOPLAY.START": {
                        target: "autoplay",
                        actions: ["invokeAutoplayStart"]
                    },
                    "USER.SCROLL": {
                        target: "userScroll"
                    },
                    "VIEWPORT.FOCUS": {
                        target: "focus"
                    }
                }
            },
            focus: {
                effects: ["trackKeyboardScroll"],
                on: {
                    "VIEWPORT.BLUR": {
                        target: "idle"
                    },
                    "PAGE.NEXT": {
                        actions: ["clearScrollEndTimer", "setNextPage"]
                    },
                    "PAGE.PREV": {
                        actions: ["clearScrollEndTimer", "setPrevPage"]
                    },
                    "PAGE.SET": {
                        actions: ["clearScrollEndTimer", "setPage"]
                    },
                    "INDEX.SET": {
                        actions: ["clearScrollEndTimer", "setMatchingPage"]
                    },
                    "USER.SCROLL": {
                        target: "userScroll"
                    }
                }
            },
            dragging: {
                effects: ["trackPointerMove"],
                entry: ["disableScrollSnap"],
                on: {
                    DRAGGING: {
                        actions: ["scrollSlides", "invokeDragging"]
                    },
                    "DRAGGING.END": {
                        target: "idle",
                        actions: ["endDragging", "invokeDraggingEnd"]
                    }
                }
            },
            userScroll: {
                effects: ["trackScroll"],
                on: {
                    "DRAGGING.START": {
                        target: "dragging",
                        actions: ["invokeDragStart"]
                    },
                    "SCROLL.END": [{
                        guard: "isFocused",
                        target: "focus",
                        actions: ["setClosestPage"]
                    }, {
                        target: "idle",
                        actions: ["setClosestPage"]
                    }]
                }
            },
            autoplay: {
                effects: ["trackDocumentVisibility", "trackScroll", "autoUpdateSlide"],
                exit: ["invokeAutoplayEnd"],
                on: {
                    "AUTOPLAY.TICK": {
                        actions: ["setNextPage", "invokeAutoplay"]
                    },
                    "DRAGGING.START": {
                        target: "dragging",
                        actions: ["invokeDragStart"]
                    },
                    "AUTOPLAY.PAUSE": {
                        target: "idle"
                    }
                }
            }
        },
        implementations: {
            guards: {
                isFocused: e => {
                    let {
                        scope: t
                    } = e;
                    return t.isActiveElement(oj(t))
                }
            },
            effects: {
                autoUpdateSlide(e) {
                    let {
                        computed: t,
                        send: a
                    } = e, r = setInterval(() => {
                        a({
                            type: t("canScrollNext") ? "AUTOPLAY.TICK" : "AUTOPLAY.PAUSE",
                            src: "autoplay.interval"
                        })
                    }, t("autoplayInterval"));
                    return () => clearInterval(r)
                },
                trackSlideMutation(e) {
                    let {
                        scope: t,
                        send: a
                    } = e, r = oj(t);
                    if (!r) return;
                    let i = new(t.getWin()).MutationObserver(() => {
                        a({
                            type: "SNAP.REFRESH",
                            src: "slide.mutation"
                        }), oG(t)
                    });
                    return oG(t), i.observe(r, {
                        childList: !0,
                        subtree: !0
                    }), () => i.disconnect()
                },
                trackSlideResize(e) {
                    let {
                        scope: t,
                        send: a
                    } = e;
                    if (!oj(t)) return;
                    let r = () => {
                        a({
                            type: "SNAP.REFRESH",
                            src: "slide.resize"
                        })
                    };
                    (0, ax.raf)(() => {
                        r(), (0, ax.raf)(() => {
                            a({
                                type: "PAGE.SCROLL",
                                instant: !0
                            })
                        })
                    });
                    let i = oU(t);
                    i.forEach(r);
                    let o = i.map(e => ax.resizeObserverBorderBox.observe(e, r));
                    return (0, aS.callAll)(...o)
                },
                trackSlideIntersections(e) {
                    let {
                        scope: t,
                        prop: a,
                        context: r
                    } = e, i = oj(t), o = new(t.getWin()).IntersectionObserver(e => {
                        let t = e.reduce((e, t) => {
                            var a;
                            let r = Number(null != (a = t.target.dataset.index) ? a : "-1");
                            return null == r || Number.isNaN(r) || -1 === r ? e : t.isIntersecting ? (0, aS.add)(e, r) : (0, aS.remove)(e, r)
                        }, r.get("slidesInView"));
                        r.set("slidesInView", (0, aS.uniq)(t))
                    }, {
                        root: i,
                        threshold: a("inViewThreshold")
                    });
                    return oU(t).forEach(e => o.observe(e)), () => o.disconnect()
                },
                trackScroll(e) {
                    let {
                        send: t,
                        refs: a,
                        scope: r
                    } = e, i = oj(r);
                    if (i) return (0, ax.addDomEvent)(i, "scroll", () => {
                        clearTimeout(a.get("timeoutRef")), a.set("timeoutRef", void 0), a.set("timeoutRef", setTimeout(() => {
                            t({
                                type: "SCROLL.END"
                            })
                        }, 150))
                    }, {
                        passive: !0
                    })
                },
                trackDocumentVisibility(e) {
                    let {
                        scope: t,
                        send: a
                    } = e, r = t.getDoc();
                    return (0, ax.addDomEvent)(r, "visibilitychange", () => {
                        "visible" !== r.visibilityState && a({
                            type: "AUTOPLAY.PAUSE",
                            src: "doc.hidden"
                        })
                    })
                },
                trackPointerMove(e) {
                    let {
                        scope: t,
                        send: a
                    } = e, r = t.getDoc();
                    return (0, ax.trackPointerMove)(r, {
                        onPointerMove(e) {
                            let {
                                event: t
                            } = e;
                            a({
                                type: "DRAGGING",
                                left: -t.movementX,
                                top: -t.movementY
                            })
                        },
                        onPointerUp() {
                            a({
                                type: "DRAGGING.END"
                            })
                        }
                    })
                },
                trackKeyboardScroll(e) {
                    let {
                        scope: t,
                        send: a,
                        context: r
                    } = e, i = t.getWin();
                    return (0, ax.addDomEvent)(i, "keydown", e => {
                        switch (e.key) {
                            case "ArrowRight":
                                e.preventDefault(), a({
                                    type: "PAGE.NEXT"
                                });
                                break;
                            case "ArrowLeft":
                                e.preventDefault(), a({
                                    type: "PAGE.PREV"
                                });
                                break;
                            case "Home":
                                e.preventDefault(), a({
                                    type: "PAGE.SET",
                                    index: 0
                                });
                                break;
                            case "End":
                                e.preventDefault(), a({
                                    type: "PAGE.SET",
                                    index: r.get("pageSnapPoints").length - 1
                                })
                        }
                    }, {
                        capture: !0
                    })
                }
            },
            actions: {
                clearScrollEndTimer(e) {
                    let {
                        refs: t
                    } = e;
                    null != t.get("timeoutRef") && (clearTimeout(t.get("timeoutRef")), t.set("timeoutRef", void 0))
                },
                scrollToPage(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        scope: i,
                        computed: o,
                        flush: l
                    } = e, n = r.instant ? "instant" : "smooth", s = (0, aS.clampValue)(null != (t = r.index) ? t : a.get("page"), 0, a.get("pageSnapPoints").length - 1), d = oj(i);
                    if (!d) return;
                    let c = o("isHorizontal") ? "left" : "top";
                    l(() => {
                        d.scrollTo({
                            [c]: a.get("pageSnapPoints")[s],
                            behavior: n
                        })
                    })
                },
                setClosestPage(e) {
                    let {
                        context: t,
                        scope: a,
                        computed: r
                    } = e, i = oj(a);
                    if (!i) return;
                    let o = r("isHorizontal") ? i.scrollLeft : i.scrollTop,
                        l = t.get("pageSnapPoints").findIndex(e => 1 > Math.abs(e - o)); - 1 !== l && t.set("page", l)
                },
                setNextPage(e) {
                    let {
                        context: t,
                        prop: a,
                        state: r
                    } = e, i = r.matches("autoplay") || a("loop"), o = (0, aS.nextIndex)(t.get("pageSnapPoints"), t.get("page"), {
                        loop: i
                    });
                    t.set("page", o)
                },
                setPrevPage(e) {
                    let {
                        context: t,
                        prop: a,
                        state: r
                    } = e, i = r.matches("autoplay") || a("loop"), o = (0, aS.prevIndex)(t.get("pageSnapPoints"), t.get("page"), {
                        loop: i
                    });
                    t.set("page", o)
                },
                setMatchingPage(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r,
                        scope: i
                    } = e, o = oj(i);
                    if (!o) return;
                    let l = function(e, t, a) {
                        let r = oW(e);
                        for (let e of [...r[t].start, ...r[t].center, ...r[t].end])
                            if (a(e.node)) return e.position
                    }(o, r("isHorizontal") ? "x" : "y", e => e.dataset.index === a.index.toString());
                    if (null == l) return;
                    let n = t.get("pageSnapPoints").findIndex(e => 1 > Math.abs(e - l));
                    t.set("page", n)
                },
                setPage(e) {
                    var t;
                    let {
                        context: a,
                        event: r
                    } = e, i = null != (t = r.index) ? t : a.get("page");
                    a.set("page", i)
                },
                clampPage(e) {
                    let {
                        context: t
                    } = e, a = (0, aS.clampValue)(t.get("page"), 0, t.get("pageSnapPoints").length - 1);
                    t.set("page", a)
                },
                setSnapPoints(e) {
                    let t, a, r, i, {
                            context: o,
                            computed: l,
                            scope: n
                        } = e,
                        s = oj(n);
                    if (!s) return;
                    let d = (t = s.getBoundingClientRect(), a = function(e) {
                        let t = (0, ax.getComputedStyle)(e),
                            a = e.getBoundingClientRect(),
                            r = t.getPropertyValue("scroll-padding-left").replace("auto", "0px"),
                            i = t.getPropertyValue("scroll-padding-top").replace("auto", "0px"),
                            o = t.getPropertyValue("scroll-padding-right").replace("auto", "0px"),
                            l = t.getPropertyValue("scroll-padding-bottom").replace("auto", "0px");

                        function n(e, t) {
                            let a = parseFloat(e);
                            return /%/.test(e) && (a /= 100, a *= t), Number.isNaN(a) ? 0 : a
                        }
                        let s = n(r, a.width),
                            d = n(i, a.height);
                        return {
                            x: {
                                before: s,
                                after: n(o, a.width)
                            },
                            y: {
                                before: d,
                                after: n(l, a.height)
                            }
                        }
                    }(s), r = oW(s), i = {
                        x: s.scrollWidth - s.offsetWidth,
                        y: s.scrollHeight - s.offsetHeight
                    }, {
                        x: oM([...r.x.start.map(e => e.position - a.x.before), ...r.x.center.map(e => e.position - t.width / 2), ...r.x.end.map(e => e.position - t.width + a.x.after)].map(oB(0, i.x))),
                        y: oM([...r.y.start.map(e => e.position - a.y.before), ...r.y.center.map(e => e.position - t.height / 2), ...r.y.end.map(e => e.position - t.height + a.y.after)].map(oB(0, i.y)))
                    });
                    o.set("pageSnapPoints", l("isHorizontal") ? d.x : d.y)
                },
                disableScrollSnap(e) {
                    let {
                        scope: t
                    } = e, a = oj(t);
                    if (!a) return;
                    let r = getComputedStyle(a);
                    a.dataset.scrollSnapType = r.getPropertyValue("scroll-snap-type"), a.style.setProperty("scroll-snap-type", "none")
                },
                scrollSlides(e) {
                    let {
                        scope: t,
                        event: a
                    } = e, r = oj(t);
                    null == r || r.scrollBy({
                        left: a.left,
                        top: a.top,
                        behavior: "instant"
                    })
                },
                endDragging(e) {
                    let {
                        scope: t,
                        context: a,
                        computed: r
                    } = e, i = oj(t);
                    if (!i) return;
                    let o = r("isHorizontal"),
                        l = o ? i.scrollLeft : i.scrollTop,
                        n = a.get("pageSnapPoints"),
                        s = n.reduce((e, t) => Math.abs(t - l) < Math.abs(e - l) ? t : e, n[0]);
                    (0, ax.raf)(() => {
                        i.scrollTo({
                            left: o ? s : i.scrollLeft,
                            top: o ? i.scrollTop : s,
                            behavior: "smooth"
                        }), a.set("page", n.indexOf(s));
                        let e = i.dataset.scrollSnapType;
                        e && (i.style.setProperty("scroll-snap-type", e), delete i.dataset.scrollSnapType)
                    })
                },
                focusIndicatorEl(e) {
                    var t, a, r, i;
                    let {
                        context: o,
                        event: l,
                        scope: n
                    } = e;
                    if ("indicator" !== l.src) return;
                    let s = (t = o.get("page"), n.getById(null != (i = null == (r = n.ids) || null == (a = r.indicator) ? void 0 : a.call(r, t)) ? i : "carousel:".concat(n.id, ":indicator:").concat(t)));
                    s && (0, ax.raf)(() => s.focus({
                        preventScroll: !0
                    }))
                },
                invokeDragStart(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onDragStatusChange")) || t({
                        type: "dragging.start",
                        isDragging: !0,
                        page: a.get("page")
                    })
                },
                invokeDragging(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onDragStatusChange")) || t({
                        type: "dragging",
                        isDragging: !0,
                        page: a.get("page")
                    })
                },
                invokeDraggingEnd(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onDragStatusChange")) || t({
                        type: "dragging.end",
                        isDragging: !1,
                        page: a.get("page")
                    })
                },
                invokeAutoplay(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onAutoplayStatusChange")) || t({
                        type: "autoplay",
                        isPlaying: !0,
                        page: a.get("page")
                    })
                },
                invokeAutoplayStart(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onAutoplayStatusChange")) || t({
                        type: "autoplay.start",
                        isPlaying: !0,
                        page: a.get("page")
                    })
                },
                invokeAutoplayEnd(e) {
                    var t;
                    let {
                        context: a,
                        prop: r
                    } = e;
                    null == (t = r("onAutoplayStatusChange")) || t({
                        type: "autoplay.stop",
                        isPlaying: !1,
                        page: a.get("page")
                    })
                }
            }
        }
    });
    var oq = (0, aI.createProps)()(["dir", "getRootNode", "id", "ids", "loop", "page", "defaultPage", "onPageChange", "orientation", "slideCount", "slidesPerPage", "slidesPerMove", "spacing", "padding", "autoplay", "allowMouseDrag", "inViewThreshold", "translations", "snapType", "autoSize", "onDragStatusChange", "onAutoplayStatusChange"]);
    (0, aS.createSplitProps)(oq);
    var oY = (0, aI.createProps)()(["index", "readOnly"]);
    (0, aS.createSplitProps)(oY);
    var oK = (0, aI.createProps)()(["index", "snapAlign"]);
    (0, aS.createSplitProps)(oK);
    let oX = oH.extendWith("progressText", "autoplayIndicator"),
        o$ = (0, tB.defineSlotRecipe)({
            className: "carousel",
            slots: oX.keys(),
            base: {
                root: {
                    position: "relative",
                    display: "flex",
                    gap: "2",
                    _horizontal: {
                        flexDirection: "column"
                    },
                    _vertical: {
                        flexDirection: "row"
                    }
                },
                item: {
                    _horizontal: {
                        width: "100%"
                    },
                    _vertical: {
                        height: "100%"
                    }
                },
                control: {
                    display: "flex",
                    alignItems: "center",
                    _horizontal: {
                        flexDirection: "row",
                        width: "100%"
                    },
                    _vertical: {
                        flexDirection: "column",
                        height: "100%"
                    }
                },
                indicatorGroup: {
                    display: "flex",
                    justifyContent: "center",
                    gap: "3",
                    _horizontal: {
                        flexDirection: "row"
                    },
                    _vertical: {
                        flexDirection: "column"
                    }
                },
                indicator: {
                    width: "2.5",
                    height: "2.5",
                    borderRadius: "full",
                    bg: "colorPalette.subtle",
                    cursor: "button",
                    _current: {
                        bg: "colorPalette.solid"
                    }
                }
            },
            defaultVariants: {}
        });
    var oZ = e.i(131825);
    let oJ = (0, tB.defineSlotRecipe)({
            slots: oZ.checkboxAnatomy.keys(),
            className: "chakra-checkbox",
            base: {
                root: {
                    display: "inline-flex",
                    gap: "2",
                    alignItems: "center",
                    verticalAlign: "top",
                    position: "relative"
                },
                control: t4.base,
                label: {
                    fontWeight: "medium",
                    userSelect: "none",
                    _disabled: {
                        opacity: "0.5"
                    }
                }
            },
            variants: {
                size: {
                    xs: {
                        root: {
                            gap: "1.5"
                        },
                        label: {
                            textStyle: "xs"
                        },
                        control: null == (r = t4.variants) || null == (a = r.size) ? void 0 : a.xs
                    },
                    sm: {
                        root: {
                            gap: "2"
                        },
                        label: {
                            textStyle: "sm"
                        },
                        control: null == (o = t4.variants) || null == (i = o.size) ? void 0 : i.sm
                    },
                    md: {
                        root: {
                            gap: "2.5"
                        },
                        label: {
                            textStyle: "sm"
                        },
                        control: null == (n = t4.variants) || null == (l = n.size) ? void 0 : l.md
                    },
                    lg: {
                        root: {
                            gap: "3"
                        },
                        label: {
                            textStyle: "md"
                        },
                        control: null == (d = t4.variants) || null == (s = d.size) ? void 0 : s.lg
                    }
                },
                variant: {
                    outline: {
                        control: null == (u = t4.variants) || null == (c = u.variant) ? void 0 : c.outline
                    },
                    solid: {
                        control: null == (p = t4.variants) || null == (g = p.variant) ? void 0 : g.solid
                    },
                    subtle: {
                        control: null == (m = t4.variants) || null == (h = m.variant) ? void 0 : h.subtle
                    }
                }
            },
            defaultVariants: {
                variant: "solid",
                size: "md"
            }
        }),
        oQ = (0, tB.defineSlotRecipe)({
            slots: oe.keys(),
            className: "chakra-checkbox-card",
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    userSelect: "none",
                    position: "relative",
                    borderRadius: "l2",
                    flex: "1",
                    focusVisibleRing: "outside",
                    _disabled: {
                        opacity: "0.8"
                    },
                    _invalid: {
                        outline: "2px solid",
                        outlineColor: "border.error"
                    }
                },
                control: {
                    display: "inline-flex",
                    flex: "1",
                    position: "relative",
                    borderRadius: "inherit",
                    justifyContent: "var(--checkbox-card-justify)",
                    alignItems: "var(--checkbox-card-align)"
                },
                label: {
                    fontWeight: "medium",
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    flex: "1",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                description: {
                    opacity: "0.64",
                    textStyle: "sm",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                addon: {
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                indicator: t4.base,
                content: {
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    gap: "1",
                    justifyContent: "var(--checkbox-card-justify)",
                    alignItems: "var(--checkbox-card-align)"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            textStyle: "sm"
                        },
                        control: {
                            padding: "3",
                            gap: "1.5"
                        },
                        addon: {
                            px: "3",
                            py: "1.5",
                            borderTopWidth: "1px"
                        },
                        indicator: null == (f = t4.variants) ? void 0 : f.size.sm
                    },
                    md: {
                        root: {
                            textStyle: "sm"
                        },
                        control: {
                            padding: "4",
                            gap: "2.5"
                        },
                        addon: {
                            px: "4",
                            py: "2",
                            borderTopWidth: "1px"
                        },
                        indicator: null == (v = t4.variants) ? void 0 : v.size.md
                    },
                    lg: {
                        root: {
                            textStyle: "md"
                        },
                        control: {
                            padding: "4",
                            gap: "3.5"
                        },
                        addon: {
                            px: "4",
                            py: "2",
                            borderTopWidth: "1px"
                        },
                        indicator: null == (b = t4.variants) ? void 0 : b.size.lg
                    }
                },
                variant: {
                    surface: {
                        root: {
                            borderWidth: "1px",
                            borderColor: "border",
                            _checked: {
                                bg: "colorPalette.subtle",
                                color: "colorPalette.fg",
                                borderColor: "colorPalette.muted"
                            },
                            _disabled: {
                                bg: "bg.muted"
                            }
                        },
                        indicator: null == (x = t4.variants) ? void 0 : x.variant.solid
                    },
                    subtle: {
                        root: {
                            bg: "bg.muted"
                        },
                        control: {
                            _checked: {
                                bg: "colorPalette.muted",
                                color: "colorPalette.fg"
                            }
                        },
                        indicator: null == (y = t4.variants) ? void 0 : y.variant.plain
                    },
                    outline: {
                        root: {
                            borderWidth: "1px",
                            borderColor: "border",
                            _checked: {
                                boxShadow: "0 0 0 1px var(--shadow-color)",
                                boxShadowColor: "colorPalette.solid",
                                borderColor: "colorPalette.solid"
                            }
                        },
                        indicator: null == (S = t4.variants) ? void 0 : S.variant.solid
                    },
                    solid: {
                        root: {
                            borderWidth: "1px",
                            _checked: {
                                bg: "colorPalette.solid",
                                color: "colorPalette.contrast",
                                borderColor: "colorPalette.solid"
                            }
                        },
                        indicator: null == (k = t4.variants) ? void 0 : k.variant.inverted
                    }
                },
                justify: {
                    start: {
                        root: {
                            "--checkbox-card-justify": "flex-start"
                        }
                    },
                    end: {
                        root: {
                            "--checkbox-card-justify": "flex-end"
                        }
                    },
                    center: {
                        root: {
                            "--checkbox-card-justify": "center"
                        }
                    }
                },
                align: {
                    start: {
                        root: {
                            "--checkbox-card-align": "flex-start"
                        },
                        content: {
                            textAlign: "start"
                        }
                    },
                    end: {
                        root: {
                            "--checkbox-card-align": "flex-end"
                        },
                        content: {
                            textAlign: "end"
                        }
                    },
                    center: {
                        root: {
                            "--checkbox-card-align": "center"
                        },
                        content: {
                            textAlign: "center"
                        }
                    }
                },
                orientation: {
                    vertical: {
                        control: {
                            flexDirection: "column"
                        }
                    },
                    horizontal: {
                        control: {
                            flexDirection: "row"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline",
                align: "start",
                orientation: "horizontal"
            }
        }),
        o0 = (0, tB.defineSlotRecipe)({
            slots: oT.keys(),
            className: "code-block",
            base: {
                root: {
                    colorPalette: "gray",
                    rounded: "var(--code-block-radius)",
                    overflow: "hidden",
                    bg: "bg",
                    color: "fg",
                    borderWidth: "1px",
                    "--code-block-max-height": "320px",
                    "--code-block-bg": "colors.bg",
                    "--code-block-fg": "colors.fg",
                    "--code-block-obscured-opacity": "0.5",
                    "--code-block-obscured-blur": "1px",
                    "--code-block-line-number-width": "sizes.3",
                    "--code-block-line-number-margin": "spacing.4",
                    "--code-block-highlight-bg": "{colors.teal.focusRing/20}",
                    "--code-block-highlight-border": "colors.teal.focusRing",
                    "--code-block-highlight-added-bg": "{colors.green.focusRing/20}",
                    "--code-block-highlight-added-border": "colors.green.focusRing",
                    "--code-block-highlight-removed-bg": "{colors.red.focusRing/20}",
                    "--code-block-highlight-removed-border": "colors.red.focusRing"
                },
                header: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    position: "relative",
                    px: "var(--code-block-padding)",
                    minH: "var(--code-block-header-height)",
                    mb: "calc(var(--code-block-padding) / 2 * -1)"
                },
                title: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1.5",
                    flex: "1",
                    color: "fg.muted"
                },
                control: {
                    gap: "1.5",
                    display: "inline-flex",
                    alignItems: "center"
                },
                footer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2",
                    px: "var(--code-block-padding)",
                    minH: "var(--code-block-header-height)"
                },
                content: {
                    position: "relative",
                    colorScheme: "dark",
                    overflowX: "auto",
                    overflowY: "hidden",
                    borderBottomRadius: "var(--code-block-radius)",
                    maxHeight: "var(--code-block-max-height)",
                    "& ::selection": {
                        bg: "blue.500/40"
                    },
                    _expanded: {
                        maxHeight: "unset"
                    }
                },
                overlay: {
                    "--bg": "{colors.black/50}",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    padding: "4",
                    bgImage: "linear-gradient(0deg,var(--bg) 25%,transparent 100%)",
                    color: "white",
                    minH: "5rem",
                    pos: "absolute",
                    bottom: "0",
                    insetInline: "0",
                    zIndex: "1",
                    fontWeight: "medium",
                    _expanded: {
                        display: "none"
                    }
                },
                code: {
                    fontFamily: "mono",
                    lineHeight: "tall",
                    whiteSpace: "pre",
                    counterReset: "line 0"
                },
                codeText: {
                    px: "var(--code-block-padding)",
                    py: "var(--code-block-padding)",
                    position: "relative",
                    display: "block",
                    width: "100%",
                    "&[data-has-focused]": {
                        "& [data-line]:not([data-focused])": {
                            transitionProperty: "opacity, filter",
                            transitionDuration: "moderate",
                            transitionTimingFunction: "ease-in-out",
                            opacity: "var(--code-block-obscured-opacity)",
                            filter: "blur(var(--code-block-obscured-blur))"
                        },
                        "&:hover": {
                            "--code-block-obscured-opacity": "1",
                            "--code-block-obscured-blur": "0px"
                        }
                    },
                    "&[data-has-line-numbers][data-plaintext]": {
                        paddingInlineStart: "calc(var(--code-block-line-number-width) + var(--code-block-line-number-margin) + var(--code-block-padding))"
                    },
                    "& [data-line]": {
                        position: "relative",
                        paddingInlineEnd: "var(--code-block-padding)",
                        "--highlight-bg": "var(--code-block-highlight-bg)",
                        "--highlight-border": "var(--code-block-highlight-border)",
                        "&[data-highlight], &[data-diff]": {
                            display: "inline-block",
                            width: "full",
                            "&:after": {
                                content: "''",
                                display: "block",
                                position: "absolute",
                                top: "0",
                                insetStart: "calc(var(--code-block-padding) * -1)",
                                insetEnd: "0px",
                                width: "calc(100% + var(--code-block-padding) * 2)",
                                height: "100%",
                                bg: "var(--highlight-bg)",
                                borderStartWidth: "2px",
                                borderStartColor: "var(--highlight-border)"
                            }
                        },
                        "&[data-diff='added']": {
                            "--highlight-bg": "var(--code-block-highlight-added-bg)",
                            "--highlight-border": "var(--code-block-highlight-added-border)"
                        },
                        "&[data-diff='removed']": {
                            "--highlight-bg": "var(--code-block-highlight-removed-bg)",
                            "--highlight-border": "var(--code-block-highlight-removed-border)"
                        }
                    },
                    "&[data-word-wrap]": {
                        "&[data-plaintext], & [data-line]": {
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-all"
                        }
                    },
                    "&[data-has-line-numbers]": {
                        "--content": "counter(line)",
                        "& [data-line]:before": {
                            content: "var(--content)",
                            counterIncrement: "line",
                            width: "var(--code-block-line-number-width)",
                            marginRight: "var(--code-block-line-number-margin)",
                            display: "inline-block",
                            textAlign: "end",
                            userSelect: "none",
                            whiteSpace: "nowrap",
                            opacity: .4
                        },
                        "& [data-diff='added']:before": {
                            content: "'+'"
                        },
                        "& [data-diff='removed']:before": {
                            content: "'-'"
                        }
                    }
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            "--code-block-padding": "spacing.4",
                            "--code-block-radius": "radii.md",
                            "--code-block-header-height": "sizes.8"
                        },
                        title: {
                            textStyle: "xs"
                        },
                        code: {
                            fontSize: "xs"
                        }
                    },
                    md: {
                        root: {
                            "--code-block-padding": "spacing.4",
                            "--code-block-radius": "radii.lg",
                            "--code-block-header-height": "sizes.10"
                        },
                        title: {
                            textStyle: "xs"
                        },
                        code: {
                            fontSize: "sm"
                        }
                    },
                    lg: {
                        root: {
                            "--code-block-padding": "spacing.5",
                            "--code-block-radius": "radii.xl",
                            "--code-block-header-height": "sizes.12"
                        },
                        title: {
                            textStyle: "sm"
                        },
                        code: {
                            fontSize: "sm"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        });
    var o1 = e.i(301594),
        o1 = o1;
    let o2 = (0, tB.defineSlotRecipe)({
            slots: o1.anatomy.keys(),
            className: "chakra-collapsible",
            base: {
                content: {
                    overflow: "hidden",
                    _open: {
                        animationName: "expand-height, fade-in",
                        animationDuration: "moderate",
                        "&[data-has-collapsed-size]": {
                            animationName: "expand-height"
                        }
                    },
                    _closed: {
                        animationName: "collapse-height, fade-out",
                        animationDuration: "moderate",
                        "&[data-has-collapsed-size]": {
                            animationName: "collapse-height"
                        }
                    }
                }
            }
        }),
        o5 = (0, tB.defineSlotRecipe)({
            className: "colorPicker",
            slots: oV.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5"
                },
                label: {
                    color: "fg",
                    fontWeight: "medium",
                    textStyle: "sm",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                valueText: {
                    textAlign: "start"
                },
                control: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "2",
                    position: "relative"
                },
                swatchTrigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                trigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexShrink: "0",
                    gap: "2",
                    textStyle: "sm",
                    minH: "var(--input-height)",
                    minW: "var(--input-height)",
                    px: "1",
                    rounded: "l2",
                    _disabled: {
                        opacity: "0.5"
                    },
                    "--focus-color": "colors.colorPalette.focusRing",
                    "&:focus-visible": {
                        borderColor: "var(--focus-color)",
                        outline: "1px solid var(--focus-color)"
                    },
                    "&[data-fit-content]": {
                        "--input-height": "unset",
                        px: "0",
                        border: "0"
                    }
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    bg: "bg.panel",
                    borderRadius: "l3",
                    boxShadow: "lg",
                    width: "64",
                    p: "4",
                    gap: "3",
                    zIndex: "dropdown",
                    _open: {
                        animationStyle: "slide-fade-in",
                        animationDuration: "fast"
                    },
                    _closed: {
                        animationStyle: "slide-fade-out",
                        animationDuration: "faster"
                    }
                },
                area: {
                    height: "180px",
                    borderRadius: "l2",
                    overflow: "hidden"
                },
                areaThumb: {
                    borderRadius: "full",
                    height: "var(--thumb-size)",
                    width: "var(--thumb-size)",
                    borderWidth: "2px",
                    borderColor: "white",
                    shadow: "sm",
                    focusVisibleRing: "mixed",
                    focusRingColor: "white"
                },
                areaBackground: {
                    height: "full"
                },
                channelSlider: {
                    borderRadius: "l2",
                    flex: "1"
                },
                channelSliderTrack: {
                    height: "var(--slider-height)",
                    borderRadius: "inherit",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
                },
                channelText: {
                    textStyle: "xs",
                    color: "fg.muted",
                    fontWeight: "medium",
                    textTransform: "capitalize"
                },
                swatchGroup: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "2"
                },
                swatch: { ...t9.base,
                    borderRadius: "l1"
                },
                swatchIndicator: {
                    color: "white",
                    rounded: "full"
                },
                channelSliderThumb: {
                    borderRadius: "full",
                    height: "var(--thumb-size)",
                    width: "var(--thumb-size)",
                    borderWidth: "2px",
                    borderColor: "white",
                    shadow: "sm",
                    transform: "translate(-50%, -50%)",
                    focusVisibleRing: "outside",
                    focusRingOffset: "1px"
                },
                channelInput: { ...ar.base,
                    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0
                    }
                },
                formatSelect: {
                    textStyle: "xs",
                    textTransform: "uppercase",
                    borderWidth: "1px",
                    minH: "6",
                    focusRing: "inside",
                    rounded: "l2"
                },
                transparencyGrid: {
                    borderRadius: "l2"
                },
                view: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2"
                }
            },
            variants: {
                size: {
                    "2xs": {
                        channelInput: null == (I = ar.variants) || null == (C = I.size) ? void 0 : C["2xs"],
                        swatch: {
                            "--swatch-size": "sizes.4.5"
                        },
                        trigger: {
                            "--input-height": "sizes.7"
                        },
                        area: {
                            "--thumb-size": "sizes.3"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3",
                            "--thumb-size": "sizes.3"
                        }
                    },
                    xs: {
                        channelInput: null == (E = ar.variants) || null == (w = E.size) ? void 0 : w.xs,
                        swatch: {
                            "--swatch-size": "sizes.5"
                        },
                        trigger: {
                            "--input-height": "sizes.8"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    },
                    sm: {
                        channelInput: null == (V = ar.variants) || null == (P = V.size) ? void 0 : P.sm,
                        swatch: {
                            "--swatch-size": "sizes.6"
                        },
                        trigger: {
                            "--input-height": "sizes.9"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    },
                    md: {
                        channelInput: null == (R = ar.variants) || null == (T = R.size) ? void 0 : T.md,
                        swatch: {
                            "--swatch-size": "sizes.7"
                        },
                        trigger: {
                            "--input-height": "sizes.10"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    },
                    lg: {
                        channelInput: null == (_ = ar.variants) || null == (z = _.size) ? void 0 : z.lg,
                        swatch: {
                            "--swatch-size": "sizes.7"
                        },
                        trigger: {
                            "--input-height": "sizes.11"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    },
                    xl: {
                        channelInput: null == (A = ar.variants) || null == (O = A.size) ? void 0 : O.xl,
                        swatch: {
                            "--swatch-size": "sizes.8"
                        },
                        trigger: {
                            "--input-height": "sizes.12"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    },
                    "2xl": {
                        channelInput: null == (F = ar.variants) || null == (N = F.size) ? void 0 : N["2xl"],
                        swatch: {
                            "--swatch-size": "sizes.10"
                        },
                        trigger: {
                            "--input-height": "sizes.16"
                        },
                        area: {
                            "--thumb-size": "sizes.3.5"
                        },
                        channelSlider: {
                            "--slider-height": "sizes.3.5",
                            "--thumb-size": "sizes.3.5"
                        }
                    }
                },
                variant: {
                    outline: {
                        channelInput: null == (L = ar.variants) || null == (D = L.variant) ? void 0 : D.outline,
                        trigger: {
                            borderWidth: "1px"
                        }
                    },
                    subtle: {
                        channelInput: null == (M = ar.variants) || null == (W = M.variant) ? void 0 : W.subtle,
                        trigger: {
                            borderWidth: "1px",
                            borderColor: "transparent",
                            bg: "bg.muted"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        o3 = (0, tB.defineSlotRecipe)({
            className: "chakra-combobox",
            slots: ov.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5",
                    width: "full"
                },
                label: {
                    fontWeight: "medium",
                    userSelect: "none",
                    textStyle: "sm",
                    _disabled: {
                        layerStyle: "disabled"
                    }
                },
                control: {
                    pos: "relative",
                    "--padding-factor": "1",
                    "--combobox-input-padding-end": "var(--combobox-input-padding-x)",
                    "&:has([data-part=trigger]), &:has([data-part=clear-trigger])": {
                        "--combobox-input-padding-end": "calc(var(--combobox-input-height) * var(--padding-factor))"
                    },
                    "&:has([data-part=trigger]):has([data-part=clear-trigger]:not([hidden]))": {
                        "--padding-factor": "1.5"
                    }
                },
                input: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "bg.panel",
                    width: "full",
                    minH: "var(--combobox-input-height)",
                    ps: "var(--combobox-input-padding-x)",
                    pe: "var(--combobox-input-padding-end)",
                    "--input-height": "var(--combobox-input-height)",
                    borderRadius: "l2",
                    outline: 0,
                    userSelect: "none",
                    textAlign: "start",
                    _placeholderShown: {
                        color: "fg.muted"
                    },
                    _disabled: {
                        layerStyle: "disabled"
                    },
                    "--focus-color": "colors.colorPalette.focusRing",
                    "--error-color": "colors.border.error",
                    _invalid: {
                        focusRingColor: "var(--error-color)",
                        borderColor: "var(--error-color)"
                    }
                },
                trigger: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "--input-height": "var(--combobox-input-height)"
                },
                clearTrigger: {
                    color: "fg.muted",
                    pointerEvents: "auto",
                    focusVisibleRing: "inside",
                    focusRingWidth: "2px",
                    rounded: "l1"
                },
                indicatorGroup: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1",
                    pos: "absolute",
                    insetEnd: "0",
                    top: "0",
                    bottom: "0",
                    px: "var(--combobox-input-padding-x)",
                    _icon: {
                        boxSize: "var(--combobox-indicator-size)"
                    },
                    "[data-disabled] &": {
                        opacity: .5
                    }
                },
                content: {
                    background: "bg.panel",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: "dropdown",
                    borderRadius: "l2",
                    outline: 0,
                    maxH: "96",
                    overflowY: "auto",
                    boxShadow: "md",
                    _open: {
                        animationStyle: "slide-fade-in",
                        animationDuration: "fast"
                    },
                    _closed: {
                        animationStyle: "slide-fade-out",
                        animationDuration: "0s"
                    },
                    "&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))": {
                        opacity: 0
                    }
                },
                item: {
                    position: "relative",
                    userSelect: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    py: "var(--combobox-item-padding-y)",
                    px: "var(--combobox-item-padding-x)",
                    cursor: "option",
                    justifyContent: "space-between",
                    flex: "1",
                    textAlign: "start",
                    borderRadius: "l1",
                    _highlighted: {
                        bg: "bg.emphasized/60"
                    },
                    _disabled: {
                        pointerEvents: "none",
                        opacity: "0.5"
                    },
                    _icon: {
                        boxSize: "var(--combobox-indicator-size)"
                    }
                },
                empty: {
                    py: "var(--combobox-item-padding-y)",
                    px: "var(--combobox-item-padding-x)"
                },
                itemText: {
                    flex: "1"
                },
                itemGroup: {
                    pb: "var(--combobox-item-padding-y)",
                    _last: {
                        pb: "0"
                    }
                },
                itemGroupLabel: {
                    fontWeight: "medium",
                    py: "var(--combobox-item-padding-y)",
                    px: "var(--combobox-item-padding-x)"
                }
            },
            variants: {
                variant: {
                    outline: {
                        input: {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderColor: "border",
                            focusVisibleRing: "inside"
                        }
                    },
                    subtle: {
                        input: {
                            borderWidth: "1px",
                            borderColor: "transparent",
                            bg: "bg.muted",
                            focusVisibleRing: "inside"
                        }
                    },
                    flushed: {
                        input: {
                            bg: "transparent",
                            borderBottomWidth: "1px",
                            borderBottomColor: "border",
                            borderRadius: "0",
                            px: "0",
                            _focusVisible: {
                                borderColor: "var(--focus-color)",
                                boxShadow: "0px 1px 0px 0px var(--focus-color)"
                            }
                        },
                        indicatorGroup: {
                            px: "0"
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            "--combobox-input-height": "sizes.8",
                            "--combobox-input-padding-x": "spacing.2",
                            "--combobox-indicator-size": "sizes.3.5"
                        },
                        input: {
                            textStyle: "xs"
                        },
                        content: {
                            "--combobox-item-padding-x": "spacing.1.5",
                            "--combobox-item-padding-y": "spacing.1",
                            "--combobox-indicator-size": "sizes.3.5",
                            p: "1",
                            textStyle: "xs"
                        },
                        trigger: {
                            textStyle: "xs",
                            gap: "1"
                        }
                    },
                    sm: {
                        root: {
                            "--combobox-input-height": "sizes.9",
                            "--combobox-input-padding-x": "spacing.2.5",
                            "--combobox-indicator-size": "sizes.4"
                        },
                        input: {
                            textStyle: "sm"
                        },
                        content: {
                            "--combobox-item-padding-x": "spacing.2",
                            "--combobox-item-padding-y": "spacing.1.5",
                            "--combobox-indicator-size": "sizes.4",
                            p: "1",
                            textStyle: "sm"
                        },
                        trigger: {
                            textStyle: "sm",
                            gap: "1"
                        }
                    },
                    md: {
                        root: {
                            "--combobox-input-height": "sizes.10",
                            "--combobox-input-padding-x": "spacing.3",
                            "--combobox-indicator-size": "sizes.4"
                        },
                        input: {
                            textStyle: "sm"
                        },
                        content: {
                            "--combobox-item-padding-x": "spacing.2",
                            "--combobox-item-padding-y": "spacing.1.5",
                            "--combobox-indicator-size": "sizes.4",
                            p: "1",
                            textStyle: "sm"
                        },
                        itemIndicator: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        trigger: {
                            textStyle: "sm",
                            gap: "2"
                        }
                    },
                    lg: {
                        root: {
                            "--combobox-input-height": "sizes.12",
                            "--combobox-input-padding-x": "spacing.4",
                            "--combobox-indicator-size": "sizes.5"
                        },
                        input: {
                            textStyle: "md"
                        },
                        content: {
                            "--combobox-item-padding-y": "spacing.2",
                            "--combobox-item-padding-x": "spacing.3",
                            "--combobox-indicator-size": "sizes.5",
                            p: "1.5",
                            textStyle: "md"
                        },
                        trigger: {
                            textStyle: "md",
                            py: "3",
                            gap: "2"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        o4 = (0, tB.defineSlotRecipe)({
            slots: ot.keys(),
            className: "chakra-data-list",
            base: {
                itemLabel: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1"
                },
                itemValue: {
                    display: "flex",
                    minWidth: "0",
                    flex: "1"
                }
            },
            variants: {
                orientation: {
                    horizontal: {
                        root: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        item: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4"
                        },
                        itemLabel: {
                            minWidth: "120px"
                        }
                    },
                    vertical: {
                        root: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        item: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1"
                        }
                    }
                },
                size: {
                    sm: {
                        root: {
                            gap: "3"
                        },
                        item: {
                            textStyle: "xs"
                        }
                    },
                    md: {
                        root: {
                            gap: "4"
                        },
                        item: {
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            gap: "5"
                        },
                        item: {
                            textStyle: "md"
                        }
                    }
                },
                variant: {
                    subtle: {
                        itemLabel: {
                            color: "fg.muted"
                        }
                    },
                    bold: {
                        itemLabel: {
                            fontWeight: "medium"
                        },
                        itemValue: {
                            color: "fg.muted"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                orientation: "vertical",
                variant: "subtle"
            }
        }),
        o6 = (0, tB.defineSlotRecipe)({
            slots: oa.keys(),
            className: "chakra-dialog",
            base: {
                backdrop: {
                    bg: "blackAlpha.500",
                    pos: "fixed",
                    left: 0,
                    top: 0,
                    w: "100dvw",
                    h: "100dvh",
                    zIndex: "var(--z-index)",
                    _open: {
                        animationName: "fade-in",
                        animationDuration: "slow"
                    },
                    _closed: {
                        animationName: "fade-out",
                        animationDuration: "moderate"
                    }
                },
                positioner: {
                    display: "flex",
                    width: "100dvw",
                    height: "100dvh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    "--dialog-z-index": "zIndex.modal",
                    zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
                    justifyContent: "center",
                    overscrollBehaviorY: "none"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    width: "100%",
                    outline: 0,
                    borderRadius: "l3",
                    textStyle: "sm",
                    my: "var(--dialog-margin, var(--dialog-base-margin))",
                    "--dialog-z-index": "zIndex.modal",
                    zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
                    bg: "bg.panel",
                    boxShadow: "lg",
                    _open: {
                        animationDuration: "moderate"
                    },
                    _closed: {
                        animationDuration: "faster"
                    }
                },
                header: {
                    display: "flex",
                    gap: "2",
                    flex: 0,
                    px: "6",
                    pt: "6",
                    pb: "4"
                },
                body: {
                    flex: "1",
                    px: "6",
                    pt: "2",
                    pb: "6"
                },
                footer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "3",
                    px: "6",
                    pt: "2",
                    pb: "4"
                },
                title: {
                    textStyle: "lg",
                    fontWeight: "semibold"
                },
                description: {
                    color: "fg.muted"
                },
                closeTrigger: {
                    pos: "absolute",
                    top: "2",
                    insetEnd: "2"
                }
            },
            variants: {
                placement: {
                    center: {
                        positioner: {
                            alignItems: "center"
                        },
                        content: {
                            "--dialog-base-margin": "auto",
                            mx: "auto"
                        }
                    },
                    top: {
                        positioner: {
                            alignItems: "flex-start"
                        },
                        content: {
                            "--dialog-base-margin": "spacing.16",
                            mx: "auto"
                        }
                    },
                    bottom: {
                        positioner: {
                            alignItems: "flex-end"
                        },
                        content: {
                            "--dialog-base-margin": "spacing.16",
                            mx: "auto"
                        }
                    }
                },
                scrollBehavior: {
                    inside: {
                        positioner: {
                            overflow: "hidden"
                        },
                        content: {
                            maxH: "calc(100% - 7.5rem)"
                        },
                        body: {
                            overflow: "auto"
                        }
                    },
                    outside: {
                        positioner: {
                            overflow: "auto",
                            pointerEvents: "auto"
                        }
                    }
                },
                size: {
                    xs: {
                        content: {
                            maxW: "sm"
                        }
                    },
                    sm: {
                        content: {
                            maxW: "md"
                        }
                    },
                    md: {
                        content: {
                            maxW: "lg"
                        }
                    },
                    lg: {
                        content: {
                            maxW: "2xl"
                        }
                    },
                    xl: {
                        content: {
                            maxW: "4xl"
                        }
                    },
                    cover: {
                        positioner: {
                            padding: "10"
                        },
                        content: {
                            width: "100%",
                            height: "100%",
                            "--dialog-margin": "0"
                        }
                    },
                    full: {
                        content: {
                            maxW: "100dvw",
                            minH: "100dvh",
                            "--dialog-margin": "0",
                            borderRadius: "0"
                        }
                    }
                },
                motionPreset: {
                    scale: {
                        content: {
                            _open: {
                                animationName: "scale-in, fade-in"
                            },
                            _closed: {
                                animationName: "scale-out, fade-out"
                            }
                        }
                    },
                    "slide-in-bottom": {
                        content: {
                            _open: {
                                animationName: "slide-from-bottom, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-bottom, fade-out"
                            }
                        }
                    },
                    "slide-in-top": {
                        content: {
                            _open: {
                                animationName: "slide-from-top, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-top, fade-out"
                            }
                        }
                    },
                    "slide-in-left": {
                        content: {
                            _open: {
                                animationName: "slide-from-left, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-left, fade-out"
                            }
                        }
                    },
                    "slide-in-right": {
                        content: {
                            _open: {
                                animationName: "slide-from-right, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-right, fade-out"
                            }
                        }
                    },
                    none: {}
                }
            },
            defaultVariants: {
                size: "md",
                scrollBehavior: "outside",
                placement: "top",
                motionPreset: "scale"
            }
        }),
        o8 = (0, tB.defineSlotRecipe)({
            slots: or.keys(),
            className: "chakra-drawer",
            base: {
                backdrop: {
                    bg: "blackAlpha.500",
                    pos: "fixed",
                    insetInlineStart: 0,
                    top: 0,
                    w: "100vw",
                    h: "100dvh",
                    zIndex: "overlay",
                    _open: {
                        animationName: "fade-in",
                        animationDuration: "slow"
                    },
                    _closed: {
                        animationName: "fade-out",
                        animationDuration: "moderate"
                    }
                },
                positioner: {
                    display: "flex",
                    width: "100vw",
                    height: "100dvh",
                    position: "fixed",
                    insetInlineStart: 0,
                    top: 0,
                    zIndex: "modal",
                    overscrollBehaviorY: "none"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    width: "100%",
                    outline: 0,
                    zIndex: "modal",
                    textStyle: "sm",
                    maxH: "100dvh",
                    color: "inherit",
                    bg: "bg.panel",
                    boxShadow: "lg",
                    _open: {
                        animationDuration: "slowest",
                        animationTimingFunction: "ease-in-smooth"
                    },
                    _closed: {
                        animationDuration: "slower",
                        animationTimingFunction: "ease-in-smooth"
                    }
                },
                header: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    flex: 0,
                    px: "6",
                    pt: "6",
                    pb: "4"
                },
                body: {
                    px: "6",
                    py: "2",
                    flex: "1",
                    overflow: "auto"
                },
                footer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "3",
                    px: "6",
                    pt: "2",
                    pb: "4"
                },
                title: {
                    flex: "1",
                    textStyle: "lg",
                    fontWeight: "semibold"
                },
                description: {
                    color: "fg.muted"
                },
                closeTrigger: {
                    pos: "absolute",
                    top: "3",
                    insetEnd: "2"
                }
            },
            variants: {
                size: {
                    xs: {
                        content: {
                            maxW: "xs"
                        }
                    },
                    sm: {
                        content: {
                            maxW: "md"
                        }
                    },
                    md: {
                        content: {
                            maxW: "lg"
                        }
                    },
                    lg: {
                        content: {
                            maxW: "2xl"
                        }
                    },
                    xl: {
                        content: {
                            maxW: "4xl"
                        }
                    },
                    full: {
                        content: {
                            maxW: "100vw",
                            h: "100dvh"
                        }
                    }
                },
                placement: {
                    start: {
                        positioner: {
                            justifyContent: "flex-start",
                            alignItems: "stretch"
                        },
                        content: {
                            _open: {
                                animationName: {
                                    base: "slide-from-left-full, fade-in",
                                    _rtl: "slide-from-right-full, fade-in"
                                }
                            },
                            _closed: {
                                animationName: {
                                    base: "slide-to-left-full, fade-out",
                                    _rtl: "slide-to-right-full, fade-out"
                                }
                            }
                        }
                    },
                    end: {
                        positioner: {
                            justifyContent: "flex-end",
                            alignItems: "stretch"
                        },
                        content: {
                            _open: {
                                animationName: {
                                    base: "slide-from-right-full, fade-in",
                                    _rtl: "slide-from-left-full, fade-in"
                                }
                            },
                            _closed: {
                                animationName: {
                                    base: "slide-to-right-full, fade-out",
                                    _rtl: "slide-to-left-full, fade-out"
                                }
                            }
                        }
                    },
                    top: {
                        positioner: {
                            justifyContent: "stretch",
                            alignItems: "flex-start"
                        },
                        content: {
                            maxW: "100%",
                            _open: {
                                animationName: "slide-from-top-full, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-top-full, fade-out"
                            }
                        }
                    },
                    bottom: {
                        positioner: {
                            justifyContent: "stretch",
                            alignItems: "flex-end"
                        },
                        content: {
                            maxW: "100%",
                            _open: {
                                animationName: "slide-from-bottom-full, fade-in"
                            },
                            _closed: {
                                animationName: "slide-to-bottom-full, fade-out"
                            }
                        }
                    }
                },
                contained: {
                    true: {
                        positioner: {
                            padding: "4"
                        },
                        content: {
                            borderRadius: "l3"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "xs",
                placement: "end"
            }
        }),
        o7 = (0, tB.defineStyle)({
            fontSize: "inherit",
            fontWeight: "inherit",
            textAlign: "inherit",
            bg: "transparent",
            borderRadius: "l2"
        }),
        o9 = (0, tB.defineSlotRecipe)({
            slots: oi.keys(),
            className: "chakra-editable",
            base: {
                root: {
                    display: "inline-flex",
                    alignItems: "center",
                    position: "relative",
                    gap: "1.5",
                    width: "full"
                },
                preview: { ...o7,
                    py: "1",
                    px: "1",
                    display: "inline-flex",
                    alignItems: "center",
                    transitionProperty: "common",
                    transitionDuration: "moderate",
                    cursor: "text",
                    _hover: {
                        bg: "bg.muted"
                    },
                    _disabled: {
                        userSelect: "none"
                    }
                },
                input: { ...o7,
                    outline: "0",
                    py: "1",
                    px: "1",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    width: "full",
                    focusVisibleRing: "inside",
                    focusRingWidth: "2px",
                    _placeholder: {
                        opacity: .6
                    }
                },
                control: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1.5"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            textStyle: "sm"
                        },
                        preview: {
                            minH: "8"
                        },
                        input: {
                            minH: "8"
                        }
                    },
                    md: {
                        root: {
                            textStyle: "sm"
                        },
                        preview: {
                            minH: "9"
                        },
                        input: {
                            minH: "9"
                        }
                    },
                    lg: {
                        root: {
                            textStyle: "md"
                        },
                        preview: {
                            minH: "10"
                        },
                        input: {
                            minH: "10"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        le = (0, tB.defineSlotRecipe)({
            slots: oo.keys(),
            className: "chakra-empty-state",
            base: {
                root: {
                    width: "full"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                indicator: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "fg.subtle",
                    _icon: {
                        boxSize: "1em"
                    }
                },
                title: {
                    fontWeight: "semibold"
                },
                description: {
                    textStyle: "sm",
                    color: "fg.muted"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            px: "4",
                            py: "6"
                        },
                        title: {
                            textStyle: "md"
                        },
                        content: {
                            gap: "4"
                        },
                        indicator: {
                            textStyle: "2xl"
                        }
                    },
                    md: {
                        root: {
                            px: "8",
                            py: "12"
                        },
                        title: {
                            textStyle: "lg"
                        },
                        content: {
                            gap: "6"
                        },
                        indicator: {
                            textStyle: "4xl"
                        }
                    },
                    lg: {
                        root: {
                            px: "12",
                            py: "16"
                        },
                        title: {
                            textStyle: "xl"
                        },
                        content: {
                            gap: "8"
                        },
                        indicator: {
                            textStyle: "6xl"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        lt = (0, tB.defineSlotRecipe)({
            className: "chakra-field",
            slots: ol.keys(),
            base: {
                requiredIndicator: {
                    color: "fg.error",
                    lineHeight: "1"
                },
                root: {
                    display: "flex",
                    width: "100%",
                    position: "relative",
                    gap: "1.5"
                },
                label: {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "start",
                    textStyle: "sm",
                    fontWeight: "medium",
                    gap: "1",
                    userSelect: "none",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                errorText: {
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: "medium",
                    gap: "1",
                    color: "fg.error",
                    textStyle: "xs"
                },
                helperText: {
                    color: "fg.muted",
                    textStyle: "xs"
                }
            },
            variants: {
                orientation: {
                    vertical: {
                        root: {
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }
                    },
                    horizontal: {
                        root: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        label: {
                            flex: "0 0 var(--field-label-width, 80px)"
                        }
                    }
                }
            },
            defaultVariants: {
                orientation: "vertical"
            }
        }),
        la = (0, tB.defineSlotRecipe)({
            className: "fieldset",
            slots: on.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    width: "full"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    width: "full"
                },
                legend: {
                    color: "fg",
                    fontWeight: "medium",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                helperText: {
                    color: "fg.muted",
                    textStyle: "sm"
                },
                errorText: {
                    display: "inline-flex",
                    alignItems: "center",
                    color: "fg.error",
                    gap: "2",
                    fontWeight: "medium",
                    textStyle: "sm"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            spaceY: "2"
                        },
                        content: {
                            gap: "1.5"
                        },
                        legend: {
                            textStyle: "sm"
                        }
                    },
                    md: {
                        root: {
                            spaceY: "4"
                        },
                        content: {
                            gap: "4"
                        },
                        legend: {
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            spaceY: "6"
                        },
                        content: {
                            gap: "4"
                        },
                        legend: {
                            textStyle: "md"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        lr = (0, tB.defineSlotRecipe)({
            className: "chakra-file-upload",
            slots: os.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                    width: "100%",
                    alignItems: "flex-start"
                },
                label: {
                    fontWeight: "medium",
                    textStyle: "sm"
                },
                dropzone: {
                    background: "bg",
                    borderRadius: "l3",
                    borderWidth: "2px",
                    borderStyle: "dashed",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "4",
                    justifyContent: "center",
                    minHeight: "2xs",
                    px: "3",
                    py: "2",
                    transition: "backgrounds",
                    focusVisibleRing: "outside",
                    _hover: {
                        bg: "bg.subtle"
                    },
                    _dragging: {
                        bg: "colorPalette.subtle",
                        borderStyle: "solid",
                        borderColor: "colorPalette.solid"
                    }
                },
                dropzoneContent: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1",
                    textStyle: "sm"
                },
                item: {
                    pos: "relative",
                    textStyle: "sm",
                    animationName: "fade-in",
                    animationDuration: "moderate",
                    background: "bg",
                    borderRadius: "l2",
                    borderWidth: "1px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "3",
                    p: "4"
                },
                itemGroup: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3",
                    _empty: {
                        display: "none"
                    }
                },
                itemName: {
                    color: "fg",
                    fontWeight: "medium",
                    lineClamp: "1"
                },
                itemContent: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5",
                    flex: "1"
                },
                itemSizeText: {
                    color: "fg.muted",
                    textStyle: "xs"
                },
                itemDeleteTrigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    boxSize: "5",
                    p: "2px",
                    color: "fg.muted",
                    cursor: "button"
                },
                itemPreview: {
                    color: "fg.muted",
                    _icon: {
                        boxSize: "4.5"
                    }
                }
            },
            defaultVariants: {}
        });
    var li = e.i(595941),
        li = li;
    let lo = (0, tB.defineSlotRecipe)({
            className: "chakra-hover-card",
            slots: li.anatomy.keys(),
            base: {
                content: {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    textStyle: "sm",
                    "--hovercard-bg": "colors.bg.panel",
                    bg: "var(--hovercard-bg)",
                    boxShadow: "lg",
                    maxWidth: "80",
                    borderRadius: "l3",
                    zIndex: "popover",
                    transformOrigin: "var(--transform-origin)",
                    outline: "0",
                    _open: {
                        animationStyle: "slide-fade-in",
                        animationDuration: "fast"
                    },
                    _closed: {
                        animationStyle: "slide-fade-out",
                        animationDuration: "faster"
                    }
                },
                arrow: {
                    "--arrow-size": "sizes.3",
                    "--arrow-background": "var(--hovercard-bg)"
                },
                arrowTip: {
                    borderTopWidth: "0.5px",
                    borderLeftWidth: "0.5px"
                }
            },
            variants: {
                size: {
                    xs: {
                        content: {
                            padding: "3"
                        }
                    },
                    sm: {
                        content: {
                            padding: "4"
                        }
                    },
                    md: {
                        content: {
                            padding: "5"
                        }
                    },
                    lg: {
                        content: {
                            padding: "6"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        ll = (0, tB.defineSlotRecipe)({
            className: "chakra-list",
            slots: od.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--list-gap)",
                    "& :where(ul, ol)": {
                        marginTop: "var(--list-gap)"
                    }
                },
                item: {
                    whiteSpace: "normal",
                    display: "list-item"
                },
                indicator: {
                    marginEnd: "2",
                    minHeight: "1lh",
                    flexShrink: 0,
                    display: "inline-block",
                    verticalAlign: "middle"
                }
            },
            variants: {
                variant: {
                    marker: {
                        root: {
                            listStyle: "revert"
                        },
                        item: {
                            _marker: {
                                color: "fg.subtle"
                            }
                        }
                    },
                    plain: {
                        item: {
                            alignItems: "flex-start",
                            display: "inline-flex"
                        }
                    }
                },
                align: {
                    center: {
                        item: {
                            alignItems: "center"
                        }
                    },
                    start: {
                        item: {
                            alignItems: "flex-start"
                        }
                    },
                    end: {
                        item: {
                            alignItems: "flex-end"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "marker"
            }
        }),
        ln = (0, tB.defineSlotRecipe)({
            className: "chakra-listbox",
            slots: il.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5",
                    width: "full"
                },
                content: {
                    display: "flex",
                    maxH: "96",
                    p: "1",
                    gap: "1",
                    textStyle: "sm",
                    outline: "none",
                    scrollPadding: "1",
                    _horizontal: {
                        flexDirection: "row",
                        overflowX: "auto"
                    },
                    _vertical: {
                        flexDirection: "column",
                        overflowY: "auto"
                    },
                    "--listbox-item-padding-x": "spacing.2",
                    "--listbox-item-padding-y": "spacing.1.5"
                },
                item: {
                    position: "relative",
                    userSelect: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    cursor: "pointer",
                    justifyContent: "space-between",
                    flex: "1",
                    textAlign: "start",
                    borderRadius: "l1",
                    py: "var(--listbox-item-padding-y)",
                    px: "var(--listbox-item-padding-x)",
                    _highlighted: {
                        outline: "2px solid",
                        outlineColor: "border.emphasized"
                    },
                    _disabled: {
                        pointerEvents: "none",
                        opacity: "0.5"
                    }
                },
                empty: {
                    py: "var(--listbox-item-padding-y)",
                    px: "var(--listbox-item-padding-x)"
                },
                itemText: {
                    flex: "1"
                },
                itemGroup: {
                    mt: "1.5",
                    _first: {
                        mt: "0"
                    }
                },
                itemGroupLabel: {
                    py: "1.5",
                    px: "2",
                    fontWeight: "medium"
                },
                label: {
                    fontWeight: "medium",
                    userSelect: "none",
                    textStyle: "sm",
                    _disabled: {
                        layerStyle: "disabled"
                    }
                },
                valueText: {
                    lineClamp: "1",
                    maxW: "80%"
                },
                itemIndicator: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    _icon: {
                        boxSize: "4"
                    }
                }
            },
            variants: {
                variant: {
                    subtle: {
                        content: {
                            bg: "bg.panel",
                            borderWidth: "1px",
                            borderRadius: "l2"
                        },
                        item: {
                            _hover: {
                                bg: "bg.emphasized/60"
                            },
                            _selected: {
                                bg: "bg.muted"
                            }
                        }
                    },
                    solid: {
                        content: {
                            bg: "bg.panel",
                            borderWidth: "1px",
                            borderRadius: "l2"
                        },
                        item: {
                            _selected: {
                                bg: "colorPalette.solid",
                                color: "colorPalette.contrast"
                            }
                        }
                    },
                    plain: {}
                }
            },
            defaultVariants: {
                variant: "subtle"
            }
        }),
        ls = (0, tB.defineSlotRecipe)({
            className: "chakra-menu",
            slots: oc.keys(),
            base: {
                content: {
                    outline: 0,
                    bg: "bg.panel",
                    boxShadow: "lg",
                    color: "fg",
                    maxHeight: "var(--available-height)",
                    "--menu-z-index": "zIndex.dropdown",
                    zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
                    borderRadius: "l2",
                    overflow: "hidden",
                    overflowY: "auto",
                    _open: {
                        animationStyle: "slide-fade-in",
                        animationDuration: "fast"
                    },
                    _closed: {
                        animationStyle: "slide-fade-out",
                        animationDuration: "faster"
                    }
                },
                item: {
                    textDecoration: "none",
                    color: "fg",
                    userSelect: "none",
                    borderRadius: "l1",
                    width: "100%",
                    display: "flex",
                    cursor: "menuitem",
                    alignItems: "center",
                    textAlign: "start",
                    position: "relative",
                    flex: "0 0 auto",
                    outline: 0,
                    _disabled: {
                        layerStyle: "disabled"
                    },
                    "&[data-type]": {
                        ps: "8"
                    }
                },
                itemText: {
                    flex: "1"
                },
                itemIndicator: {
                    position: "absolute",
                    insetStart: "2",
                    transform: "translateY(-50%)",
                    top: "50%"
                },
                itemGroupLabel: {
                    px: "2",
                    py: "1.5",
                    fontWeight: "semibold",
                    textStyle: "sm"
                },
                indicator: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0"
                },
                itemCommand: {
                    opacity: "0.6",
                    textStyle: "xs",
                    ms: "auto",
                    ps: "4",
                    letterSpacing: "widest",
                    fontFamily: "inherit"
                },
                separator: {
                    height: "1px",
                    bg: "bg.muted",
                    my: "1",
                    mx: "-1"
                }
            },
            variants: {
                variant: {
                    subtle: {
                        item: {
                            _highlighted: {
                                bg: "bg.emphasized/60"
                            }
                        }
                    },
                    solid: {
                        item: {
                            _highlighted: {
                                bg: "colorPalette.solid",
                                color: "colorPalette.contrast"
                            }
                        }
                    }
                },
                size: {
                    sm: {
                        content: {
                            minW: "8rem",
                            padding: "1",
                            scrollPadding: "1"
                        },
                        item: {
                            gap: "1",
                            textStyle: "xs",
                            py: "1",
                            px: "1.5"
                        }
                    },
                    md: {
                        content: {
                            minW: "8rem",
                            padding: "1.5",
                            scrollPadding: "1.5"
                        },
                        item: {
                            gap: "2",
                            textStyle: "sm",
                            py: "1.5",
                            px: "2"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "subtle"
            }
        }),
        ld = (0, tB.defineSlotRecipe)({
            className: "chakra-select",
            slots: of .keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5",
                    width: "full"
                },
                trigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "full",
                    minH: "var(--select-trigger-height)",
                    "--input-height": "var(--select-trigger-height)",
                    px: "var(--select-trigger-padding-x)",
                    borderRadius: "l2",
                    userSelect: "none",
                    textAlign: "start",
                    focusVisibleRing: "inside",
                    _placeholderShown: {
                        color: "fg.muted/80"
                    },
                    _disabled: {
                        layerStyle: "disabled"
                    },
                    _invalid: {
                        borderColor: "border.error"
                    }
                },
                indicatorGroup: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1",
                    pos: "absolute",
                    insetEnd: "0",
                    top: "0",
                    bottom: "0",
                    px: "var(--select-trigger-padding-x)",
                    pointerEvents: "none"
                },
                indicator: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: {
                        base: "fg.muted",
                        _disabled: "fg.subtle",
                        _invalid: "fg.error"
                    }
                },
                content: {
                    background: "bg.panel",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: "dropdown",
                    borderRadius: "l2",
                    outline: 0,
                    maxH: "96",
                    overflowY: "auto",
                    boxShadow: "md",
                    _open: {
                        animationStyle: "slide-fade-in",
                        animationDuration: "fast"
                    },
                    _closed: {
                        animationStyle: "slide-fade-out",
                        animationDuration: "fastest"
                    }
                },
                item: {
                    position: "relative",
                    userSelect: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    cursor: "option",
                    justifyContent: "space-between",
                    flex: "1",
                    textAlign: "start",
                    borderRadius: "l1",
                    _highlighted: {
                        bg: "bg.emphasized/60"
                    },
                    _disabled: {
                        pointerEvents: "none",
                        opacity: "0.5"
                    },
                    _icon: {
                        width: "4",
                        height: "4"
                    }
                },
                control: {
                    pos: "relative"
                },
                itemText: {
                    flex: "1"
                },
                itemGroup: {
                    _first: {
                        mt: "0"
                    }
                },
                itemGroupLabel: {
                    py: "1",
                    fontWeight: "medium"
                },
                label: {
                    fontWeight: "medium",
                    userSelect: "none",
                    textStyle: "sm",
                    _disabled: {
                        layerStyle: "disabled"
                    }
                },
                valueText: {
                    lineClamp: "1",
                    maxW: "80%"
                },
                clearTrigger: {
                    color: "fg.muted",
                    pointerEvents: "auto",
                    focusVisibleRing: "inside",
                    focusRingWidth: "2px",
                    rounded: "l1"
                }
            },
            variants: {
                variant: {
                    outline: {
                        trigger: {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderColor: "border",
                            _expanded: {
                                borderColor: "border.emphasized"
                            }
                        }
                    },
                    subtle: {
                        trigger: {
                            borderWidth: "1px",
                            borderColor: "transparent",
                            bg: "bg.muted"
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            "--select-trigger-height": "sizes.8",
                            "--select-trigger-padding-x": "spacing.2"
                        },
                        content: {
                            p: "1",
                            gap: "1",
                            textStyle: "xs"
                        },
                        trigger: {
                            textStyle: "xs",
                            gap: "1"
                        },
                        item: {
                            py: "1",
                            px: "2"
                        },
                        itemGroupLabel: {
                            py: "1",
                            px: "2"
                        },
                        indicator: {
                            _icon: {
                                width: "3.5",
                                height: "3.5"
                            }
                        }
                    },
                    sm: {
                        root: {
                            "--select-trigger-height": "sizes.9",
                            "--select-trigger-padding-x": "spacing.2.5"
                        },
                        content: {
                            p: "1",
                            textStyle: "sm"
                        },
                        trigger: {
                            textStyle: "sm",
                            gap: "1"
                        },
                        indicator: {
                            _icon: {
                                width: "4",
                                height: "4"
                            }
                        },
                        item: {
                            py: "1",
                            px: "1.5"
                        },
                        itemGroup: {
                            mt: "1"
                        },
                        itemGroupLabel: {
                            py: "1",
                            px: "1.5"
                        }
                    },
                    md: {
                        root: {
                            "--select-trigger-height": "sizes.10",
                            "--select-trigger-padding-x": "spacing.3"
                        },
                        content: {
                            p: "1",
                            textStyle: "sm"
                        },
                        itemGroup: {
                            mt: "1.5"
                        },
                        item: {
                            py: "1.5",
                            px: "2"
                        },
                        itemIndicator: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        itemGroupLabel: {
                            py: "1.5",
                            px: "2"
                        },
                        trigger: {
                            textStyle: "sm",
                            gap: "2"
                        },
                        indicator: {
                            _icon: {
                                width: "4",
                                height: "4"
                            }
                        }
                    },
                    lg: {
                        root: {
                            "--select-trigger-height": "sizes.12",
                            "--select-trigger-padding-x": "spacing.4"
                        },
                        content: {
                            p: "1.5",
                            textStyle: "md"
                        },
                        itemGroup: {
                            mt: "2"
                        },
                        item: {
                            py: "2",
                            px: "3"
                        },
                        itemGroupLabel: {
                            py: "2",
                            px: "3"
                        },
                        trigger: {
                            textStyle: "md",
                            py: "3",
                            gap: "2"
                        },
                        indicator: {
                            _icon: {
                                width: "5",
                                height: "5"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        lc = (0, tB.defineSlotRecipe)({
            className: "chakra-native-select",
            slots: ou.keys(),
            base: {
                root: {
                    height: "fit-content",
                    display: "flex",
                    width: "100%",
                    position: "relative"
                },
                field: {
                    width: "100%",
                    minWidth: "0",
                    outline: "0",
                    appearance: "none",
                    borderRadius: "l2",
                    "--error-color": "colors.border.error",
                    "--input-height": "var(--select-field-height)",
                    height: "var(--select-field-height)",
                    _disabled: {
                        layerStyle: "disabled"
                    },
                    _invalid: {
                        focusRingColor: "var(--error-color)",
                        borderColor: "var(--error-color)"
                    },
                    focusVisibleRing: "inside",
                    lineHeight: "normal",
                    "& > option, & > optgroup": {
                        bg: "bg"
                    }
                },
                indicator: {
                    position: "absolute",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: "100%",
                    color: "fg.muted",
                    _disabled: {
                        opacity: "0.5"
                    },
                    _invalid: {
                        color: "fg.error"
                    },
                    _icon: {
                        width: "1em",
                        height: "1em"
                    }
                }
            },
            variants: {
                variant: {
                    outline: {
                        field: null == (B = ld.variants) ? void 0 : B.variant.outline.trigger
                    },
                    subtle: {
                        field: null == (H = ld.variants) ? void 0 : H.variant.subtle.trigger
                    },
                    plain: {
                        field: {
                            bg: "transparent",
                            color: "fg",
                            focusRingWidth: "2px"
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            "--select-field-height": "sizes.8"
                        },
                        field: {
                            textStyle: "xs",
                            ps: "2",
                            pe: "6"
                        },
                        indicator: {
                            textStyle: "sm",
                            insetEnd: "1.5"
                        }
                    },
                    sm: {
                        root: {
                            "--select-field-height": "sizes.9"
                        },
                        field: {
                            textStyle: "sm",
                            ps: "2.5",
                            pe: "8"
                        },
                        indicator: {
                            textStyle: "md",
                            insetEnd: "2"
                        }
                    },
                    md: {
                        root: {
                            "--select-field-height": "sizes.10"
                        },
                        field: {
                            textStyle: "sm",
                            ps: "3",
                            pe: "8"
                        },
                        indicator: {
                            textStyle: "lg",
                            insetEnd: "2"
                        }
                    },
                    lg: {
                        root: {
                            "--select-field-height": "sizes.11"
                        },
                        field: {
                            textStyle: "md",
                            ps: "4",
                            pe: "8"
                        },
                        indicator: {
                            textStyle: "xl",
                            insetEnd: "3"
                        }
                    },
                    xl: {
                        root: {
                            "--select-field-height": "sizes.12"
                        },
                        field: {
                            textStyle: "md",
                            ps: "4.5",
                            pe: "10"
                        },
                        indicator: {
                            textStyle: "xl",
                            insetEnd: "3"
                        }
                    }
                }
            },
            defaultVariants: ld.defaultVariants
        }),
        lu = new Map,
        lg = !1;
    try {
        lg = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch {}
    let lp = !1;
    try {
        lp = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch {}
    let lh = {
        degree: {
            narrow: {
                default: "°",
                "ja-JP": " 度",
                "zh-TW": "度",
                "sl-SI": " °"
            }
        }
    };
    class lm {
        format(e) {
            let t = "";
            if (t = lg || null == this.options.signDisplay ? this.numberFormatter.format(e) : function(e, t, a) {
                    if ("auto" === t) return e.format(a); {
                        if ("never" === t) return e.format(Math.abs(a));
                        let r = !1;
                        if ("always" === t ? r = a > 0 || Object.is(a, 0) : "exceptZero" === t && (Object.is(a, -0) || Object.is(a, 0) ? a = Math.abs(a) : r = a > 0), !r) return e.format(a); {
                            let t = e.format(-a),
                                r = e.format(a),
                                i = t.replace(r, "").replace(/\u200e|\u061C/, "");
                            return 1 != [...i].length && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r)
                        }
                    }
                }(this.numberFormatter, this.options.signDisplay, e), "unit" === this.options.style && !lp) {
                var a;
                let {
                    unit: e,
                    unitDisplay: r = "short",
                    locale: i
                } = this.resolvedOptions();
                if (!e) return t;
                let o = null == (a = lh[e]) ? void 0 : a[r];
                t += o[i] || o.default
            }
            return t
        }
        formatToParts(e) {
            return this.numberFormatter.formatToParts(e)
        }
        formatRange(e, t) {
            if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return "".concat(this.format(e), " – ").concat(this.format(t))
        }
        formatRangeToParts(e, t) {
            if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            let a = this.numberFormatter.formatToParts(e),
                r = this.numberFormatter.formatToParts(t);
            return [...a.map(e => ({ ...e,
                source: "startRange"
            })), {
                type: "literal",
                value: " – ",
                source: "shared"
            }, ...r.map(e => ({ ...e,
                source: "endRange"
            }))]
        }
        resolvedOptions() {
            let e = this.numberFormatter.resolvedOptions();
            return lg || null == this.options.signDisplay || (e = { ...e,
                signDisplay: this.options.signDisplay
            }), lp || "unit" !== this.options.style || (e = { ...e,
                style: "unit",
                unit: this.options.unit,
                unitDisplay: this.options.unitDisplay
            }), e
        }
        constructor(e, t = {}) {
            this.numberFormatter = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        numberingSystem: a
                    } = t;
                if (a && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += "-nu-".concat(a)), "unit" === t.style && !lp) {
                    var r;
                    let {
                        unit: e,
                        unitDisplay: a = "short"
                    } = t;
                    if (!e) throw Error('unit option must be provided with style: "unit"');
                    if (!(null == (r = lh[e]) ? void 0 : r[a])) throw Error("Unsupported unit ".concat(e, " with unitDisplay = ").concat(a));
                    t = { ...t,
                        style: "decimal"
                    }
                }
                let i = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
                if (lu.has(i)) return lu.get(i);
                let o = new Intl.NumberFormat(e, t);
                return lu.set(i, o), o
            }(e, t), this.options = t
        }
    }
    let lf = RegExp("^.*\\(.*\\).*$"),
        lv = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
    class lb {
        parse(e) {
            return ly(this.locale, this.options, e).parse(e)
        }
        isValidPartialNumber(e, t, a) {
            return ly(this.locale, this.options, e).isValidPartialNumber(e, t, a)
        }
        getNumberingSystem(e) {
            return ly(this.locale, this.options, e).options.numberingSystem
        }
        constructor(e, t = {}) {
            this.locale = e, this.options = t
        }
    }
    let lx = new Map;

    function ly(e, t, a) {
        let r = lS(e, t);
        if (!e.includes("-nu-") && !r.isValidPartialNumber(a)) {
            for (let i of lv)
                if (i !== r.options.numberingSystem) {
                    let r = lS(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
                    if (r.isValidPartialNumber(a)) return r
                }
        }
        return r
    }

    function lS(e, t) {
        let a = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""),
            r = lx.get(a);
        return r || (r = new lk(e, t), lx.set(a, r)), r
    }
    class lk {
        parse(e) {
            let t = this.sanitize(e);
            if (this.symbols.group && (t = lw(t, this.symbols.group, "")), this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")), t = t.replace(this.symbols.numeral, this.symbols.index), "percent" === this.options.style) {
                let e = t.indexOf("-"),
                    a = (t = (t = t.replace("-", "")).replace("+", "")).indexOf("."); - 1 === a && (a = t.length), t = t.replace(".", ""), t = a - 2 == 0 ? "0.".concat(t) : a - 2 == -1 ? "0.0".concat(t) : a - 2 == -2 ? "0.00" : "".concat(t.slice(0, a - 2), ".").concat(t.slice(a - 2)), e > -1 && (t = "-".concat(t))
            }
            let a = t ? +t : NaN;
            if (isNaN(a)) return NaN;
            if ("percent" === this.options.style) {
                var r, i;
                let e = { ...this.options,
                    style: "decimal",
                    minimumFractionDigits: Math.min((null != (r = this.options.minimumFractionDigits) ? r : 0) + 2, 20),
                    maximumFractionDigits: Math.min((null != (i = this.options.maximumFractionDigits) ? i : 0) + 2, 20)
                };
                return new lb(this.locale, e).parse(new lm(this.locale, e).format(a))
            }
            return "accounting" === this.options.currencySign && lf.test(e) && (a *= -1), a
        }
        sanitize(e) {
            return e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), "arab" === this.options.numberingSystem && (this.symbols.decimal && (e = (e = e.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (e = lw(e, ".", this.symbols.group))), "’" === this.symbols.group && e.includes("'") && (e = lw(e, "'", this.symbols.group)), "fr-FR" === this.options.locale && this.symbols.group && (e = lw(e, " ", this.symbols.group), e = lw(e, /\u00A0/g, this.symbols.group)), e
        }
        isValidPartialNumber(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
            return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && a > 0 && (e = e.slice(this.symbols.plusSign.length)), !(this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && 0 === this.options.maximumFractionDigits) && (this.symbols.group && (e = lw(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), 0 === e.length)
        }
        constructor(e, t = {}) {
            var a, r;
            this.locale = e, 1 !== t.roundingIncrement && null != t.roundingIncrement && (null == t.maximumFractionDigits && null == t.minimumFractionDigits ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : null == t.maximumFractionDigits ? t.maximumFractionDigits = t.minimumFractionDigits : null == t.minimumFractionDigits && (t.minimumFractionDigits = t.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = function(e, t, a, r) {
                var i, o, l, n, s;
                let d = new Intl.NumberFormat(e, { ...a,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21,
                        roundingIncrement: 1,
                        roundingPriority: "auto",
                        roundingMode: "halfExpand"
                    }),
                    c = d.formatToParts(-10000.111),
                    u = d.formatToParts(10000.111),
                    g = lI.map(e => d.formatToParts(e)),
                    p = null != (s = null == (i = c.find(e => "minusSign" === e.type)) ? void 0 : i.value) ? s : "-",
                    h = null == (o = u.find(e => "plusSign" === e.type)) ? void 0 : o.value;
                h || (null == r ? void 0 : r.signDisplay) !== "exceptZero" && (null == r ? void 0 : r.signDisplay) !== "always" || (h = "+");
                let m = null == (l = new Intl.NumberFormat(e, { ...a,
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).formatToParts(.001).find(e => "decimal" === e.type)) ? void 0 : l.value,
                    f = null == (n = c.find(e => "group" === e.type)) ? void 0 : n.value,
                    v = [...new Set([...c.filter(e => !lC.has(e.type)).map(e => lE(e.value)), ...g.flatMap(e => e.filter(e => !lC.has(e.type)).map(e => lE(e.value)))])].sort((e, t) => t.length - e.length),
                    b = 0 === v.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp("".concat(v.join("|"), "|[\\p{White_Space}]"), "gu"),
                    x = [...new Intl.NumberFormat(a.locale, {
                        useGrouping: !1
                    }).format(0x24cb016ea)].reverse(),
                    y = new Map(x.map((e, t) => [e, t]));
                return {
                    minusSign: p,
                    plusSign: h,
                    decimal: m,
                    group: f,
                    literals: b,
                    numeral: RegExp("[".concat(x.join(""), "]"), "g"),
                    index: e => String(y.get(e))
                }
            }(e, this.formatter, this.options, t), "percent" === this.options.style && ((null != (a = this.options.minimumFractionDigits) ? a : 0) > 18 || (null != (r = this.options.maximumFractionDigits) ? r : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")
        }
    }
    let lC = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
        lI = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, .1, 1.1];

    function lw(e, t, a) {
        return e.replaceAll ? e.replaceAll(t, a) : e.split(t).join(a)
    }

    function lE(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    var lP = (0, av.createAnatomy)("numberInput").parts("root", "label", "input", "control", "valueText", "incrementTrigger", "decrementTrigger", "scrubber");
    lP.build();
    var lV = e => "number-input:".concat(e.id, ":cursor"),
        lT = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.input) ? a : "number-input:".concat(e.id, ":input"))
        },
        lR = e => e.getDoc().getElementById(lV(e));

    function lz(e, t, a) {
        let r = e.slice(0, a),
            i = e.slice(a),
            o = 0,
            l = Math.min(r.length, t.length);
        for (let e = 0; e < l; e++)
            if (r[e] === t[e]) o = e + 1;
            else break;
        let n = 0,
            s = Math.min(i.length, t.length - o);
        for (let e = 0; e < s; e++) {
            let a = i.length - 1 - e,
                r = t.length - 1 - e;
            if (i[a] === t[r]) n = e + 1;
            else break
        }
        return o >= r.length ? o : n >= i.length ? t.length - n : o > 0 ? o : n > 0 ? t.length - n : e.length > 0 ? Math.round(a / e.length * t.length) : t.length
    }
    var l_ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Intl.NumberFormat(e, t)
        },
        lO = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new lb(e, t)
        },
        lA = (e, t) => {
            let {
                prop: a,
                computed: r
            } = t;
            return a("formatOptions") ? "" === e ? NaN : r("parser").parse(e) : parseFloat(e)
        },
        lN = (e, t) => {
            let {
                prop: a,
                computed: r
            } = t;
            return Number.isNaN(e) ? "" : a("formatOptions") ? r("formatter").format(e) : e.toString()
        },
        {
            choose: lF,
            guards: lD,
            createMachine: lL
        } = (0, ak.setup)(),
        {
            not: lW,
            and: lM
        } = lD;
    lL({
        props(e) {
            var t, a;
            let r, {
                    props: i
                } = e,
                o = (t = i.step, a = i.formatOptions, r = void 0 === t || Number.isNaN(t) ? 1 : t, (null == a ? void 0 : a.style) === "percent" && (void 0 === t || Number.isNaN(t)) && (r = .01), r);
            return {
                dir: "ltr",
                locale: "en-US",
                focusInputOnChange: !0,
                clampValueOnBlur: !i.allowOverflow,
                allowOverflow: !1,
                inputMode: "decimal",
                pattern: "-?[0-9]*(.[0-9]+)?",
                defaultValue: "",
                step: o,
                min: Number.MIN_SAFE_INTEGER,
                max: Number.MAX_SAFE_INTEGER,
                spinOnPress: !0,
                ...i,
                translations: {
                    incrementLabel: "increment value",
                    decrementLabel: "decrease value",
                    ...i.translations
                }
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a,
                getComputed: r
            } = e;
            return {
                value: a(() => ({
                    defaultValue: t("defaultValue"),
                    value: t("value"),
                    onChange(e) {
                        var a;
                        let i = lA(e, {
                            computed: r(),
                            prop: t
                        });
                        null == (a = t("onValueChange")) || a({
                            value: e,
                            valueAsNumber: i
                        })
                    }
                })),
                hint: a(() => ({
                    defaultValue: null
                })),
                scrubberCursorPoint: a(() => ({
                    defaultValue: null,
                    hash: e => e ? "x:".concat(e.x, ", y:").concat(e.y) : ""
                })),
                fieldsetDisabled: a(() => ({
                    defaultValue: !1
                }))
            }
        },
        computed: {
            isRtl: e => {
                let {
                    prop: t
                } = e;
                return "rtl" === t("dir")
            },
            valueAsNumber: e => {
                let {
                    context: t,
                    computed: a,
                    prop: r
                } = e;
                return lA(t.get("value"), {
                    computed: a,
                    prop: r
                })
            },
            formattedValue: e => {
                let {
                    computed: t,
                    prop: a
                } = e;
                return lN(t("valueAsNumber"), {
                    computed: t,
                    prop: a
                })
            },
            isAtMin: e => {
                let {
                    computed: t,
                    prop: a
                } = e;
                return (0, aS.isValueAtMin)(t("valueAsNumber"), a("min"))
            },
            isAtMax: e => {
                let {
                    computed: t,
                    prop: a
                } = e;
                return (0, aS.isValueAtMax)(t("valueAsNumber"), a("max"))
            },
            isOutOfRange: e => {
                let {
                    computed: t,
                    prop: a
                } = e;
                return !(0, aS.isValueWithinRange)(t("valueAsNumber"), a("min"), a("max"))
            },
            isValueEmpty: e => {
                let {
                    context: t
                } = e;
                return "" === t.get("value")
            },
            isDisabled: e => {
                let {
                    prop: t,
                    context: a
                } = e;
                return !!t("disabled") || a.get("fieldsetDisabled")
            },
            canIncrement: e => {
                let {
                    prop: t,
                    computed: a
                } = e;
                return t("allowOverflow") || !a("isAtMax")
            },
            canDecrement: e => {
                let {
                    prop: t,
                    computed: a
                } = e;
                return t("allowOverflow") || !a("isAtMin")
            },
            valueText: e => {
                var t, a;
                let {
                    prop: r,
                    context: i
                } = e;
                return null == (t = (a = r("translations")).valueText) ? void 0 : t.call(a, i.get("value"))
            },
            formatter: (0, ak.memo)(e => {
                let {
                    prop: t
                } = e;
                return [t("locale"), t("formatOptions")]
            }, e => {
                let [t, a] = e;
                return l_(t, a)
            }),
            parser: (0, ak.memo)(e => {
                let {
                    prop: t
                } = e;
                return [t("locale"), t("formatOptions")]
            }, e => {
                let [t, a] = e;
                return lO(t, a)
            })
        },
        watch(e) {
            let {
                track: t,
                action: a,
                context: r,
                computed: i,
                prop: o
            } = e;
            t([() => r.get("value"), () => o("locale")], () => {
                a(["syncInputElement"])
            }), t([() => i("isOutOfRange")], () => {
                a(["invokeOnInvalid"])
            }), t([() => r.hash("scrubberCursorPoint")], () => {
                a(["setVirtualCursorPosition"])
            })
        },
        effects: ["trackFormControl"],
        on: {
            "VALUE.SET": {
                actions: ["setRawValue"]
            },
            "VALUE.CLEAR": {
                actions: ["clearValue"]
            },
            "VALUE.INCREMENT": {
                actions: ["increment"]
            },
            "VALUE.DECREMENT": {
                actions: ["decrement"]
            }
        },
        states: {
            idle: {
                on: {
                    "TRIGGER.PRESS_DOWN": [{
                        guard: "isTouchPointer",
                        target: "before:spin",
                        actions: ["setHint"]
                    }, {
                        target: "before:spin",
                        actions: ["focusInput", "invokeOnFocus", "setHint"]
                    }],
                    "SCRUBBER.PRESS_DOWN": {
                        target: "scrubbing",
                        actions: ["focusInput", "invokeOnFocus", "setHint", "setCursorPoint"]
                    },
                    "INPUT.FOCUS": {
                        target: "focused",
                        actions: ["focusInput", "invokeOnFocus"]
                    }
                }
            },
            focused: {
                tags: ["focus"],
                effects: ["attachWheelListener"],
                on: {
                    "TRIGGER.PRESS_DOWN": [{
                        guard: "isTouchPointer",
                        target: "before:spin",
                        actions: ["setHint"]
                    }, {
                        target: "before:spin",
                        actions: ["focusInput", "setHint"]
                    }],
                    "SCRUBBER.PRESS_DOWN": {
                        target: "scrubbing",
                        actions: ["focusInput", "setHint", "setCursorPoint"]
                    },
                    "INPUT.ARROW_UP": {
                        actions: ["increment"]
                    },
                    "INPUT.ARROW_DOWN": {
                        actions: ["decrement"]
                    },
                    "INPUT.HOME": {
                        actions: ["decrementToMin"]
                    },
                    "INPUT.END": {
                        actions: ["incrementToMax"]
                    },
                    "INPUT.CHANGE": {
                        actions: ["setValue", "setHint"]
                    },
                    "INPUT.BLUR": [{
                        guard: lM("clampValueOnBlur", lW("isInRange")),
                        target: "idle",
                        actions: ["setClampedValue", "clearHint", "invokeOnBlur"]
                    }, {
                        guard: lW("isInRange"),
                        target: "idle",
                        actions: ["setFormattedValue", "clearHint", "invokeOnBlur", "invokeOnInvalid"]
                    }, {
                        target: "idle",
                        actions: ["setFormattedValue", "clearHint", "invokeOnBlur"]
                    }],
                    "INPUT.ENTER": {
                        actions: ["setFormattedValue", "clearHint", "invokeOnBlur"]
                    }
                }
            },
            "before:spin": {
                tags: ["focus"],
                effects: ["trackButtonDisabled", "waitForChangeDelay"],
                entry: lF([{
                    guard: "isIncrementHint",
                    actions: ["increment"]
                }, {
                    guard: "isDecrementHint",
                    actions: ["decrement"]
                }]),
                on: {
                    CHANGE_DELAY: {
                        target: "spinning",
                        guard: lM("isInRange", "spinOnPress")
                    },
                    "TRIGGER.PRESS_UP": [{
                        guard: "isTouchPointer",
                        target: "focused",
                        actions: ["clearHint"]
                    }, {
                        target: "focused",
                        actions: ["focusInput", "clearHint"]
                    }]
                }
            },
            spinning: {
                tags: ["focus"],
                effects: ["trackButtonDisabled", "spinValue"],
                on: {
                    SPIN: [{
                        guard: "isIncrementHint",
                        actions: ["increment"]
                    }, {
                        guard: "isDecrementHint",
                        actions: ["decrement"]
                    }],
                    "TRIGGER.PRESS_UP": {
                        target: "focused",
                        actions: ["focusInput", "clearHint"]
                    }
                }
            },
            scrubbing: {
                tags: ["focus"],
                effects: ["activatePointerLock", "trackMousemove", "setupVirtualCursor", "preventTextSelection"],
                on: {
                    "SCRUBBER.POINTER_UP": {
                        target: "focused",
                        actions: ["focusInput", "clearCursorPoint"]
                    },
                    "SCRUBBER.POINTER_MOVE": [{
                        guard: "isIncrementHint",
                        actions: ["increment", "setCursorPoint"]
                    }, {
                        guard: "isDecrementHint",
                        actions: ["decrement", "setCursorPoint"]
                    }]
                }
            }
        },
        implementations: {
            guards: {
                clampValueOnBlur: e => {
                    let {
                        prop: t
                    } = e;
                    return t("clampValueOnBlur")
                },
                spinOnPress: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("spinOnPress")
                },
                isInRange: e => {
                    let {
                        computed: t
                    } = e;
                    return !t("isOutOfRange")
                },
                isDecrementHint: e => {
                    var t;
                    let {
                        context: a,
                        event: r
                    } = e;
                    return (null != (t = r.hint) ? t : a.get("hint")) === "decrement"
                },
                isIncrementHint: e => {
                    var t;
                    let {
                        context: a,
                        event: r
                    } = e;
                    return (null != (t = r.hint) ? t : a.get("hint")) === "increment"
                },
                isTouchPointer: e => {
                    let {
                        event: t
                    } = e;
                    return "touch" === t.pointerType
                }
            },
            effects: {
                waitForChangeDelay(e) {
                    let {
                        send: t
                    } = e, a = setTimeout(() => {
                        t({
                            type: "CHANGE_DELAY"
                        })
                    }, 300);
                    return () => clearTimeout(a)
                },
                spinValue(e) {
                    let {
                        send: t
                    } = e, a = setInterval(() => {
                        t({
                            type: "SPIN"
                        })
                    }, 50);
                    return () => clearInterval(a)
                },
                trackFormControl(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = lT(a);
                    return (0, ax.trackFormControl)(r, {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            t.set("value", t.initial("value"))
                        }
                    })
                },
                setupVirtualCursor(e) {
                    var t, a;
                    let r, i, {
                            context: o,
                            scope: l
                        } = e,
                        n = o.get("scrubberCursorPoint");
                    return (0, ax.isSafari)() ? void 0 : (t = l, a = n, (i = (r = t.getDoc()).createElement("div")).className = "scrubber--cursor", i.id = lV(t), Object.assign(i.style, {
                        width: "15px",
                        height: "15px",
                        position: "fixed",
                        pointerEvents: "none",
                        left: "0px",
                        top: "0px",
                        zIndex: ax.MAX_Z_INDEX,
                        transform: a ? "translate3d(".concat(a.x, "px, ").concat(a.y, "px, 0px)") : void 0,
                        willChange: "transform"
                    }), i.innerHTML = '\n      <svg width="46" height="15" style="left: -15.5px; position: absolute; top: 0; filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 1px 1.1px);">\n        <g transform="translate(2 3)">\n          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z" style="stroke-width: 2px; stroke: white;"></path>\n          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z"></path>\n        </g>\n      </svg>', r.body.appendChild(i), () => {
                        var e;
                        null == (e = lR(l)) || e.remove()
                    })
                },
                preventTextSelection(e) {
                    let t, a, r, {
                        scope: i
                    } = e;
                    return a = (t = i.getDoc()).documentElement, (r = t.body).style.pointerEvents = "none", a.style.userSelect = "none", a.style.cursor = "ew-resize", () => {
                        r.style.pointerEvents = "", a.style.userSelect = "", a.style.cursor = "", a.style.length || a.removeAttribute("style"), r.style.length || r.removeAttribute("style")
                    }
                },
                trackButtonDisabled(e) {
                    var t, a, r, i;
                    let o, {
                            context: l,
                            scope: n,
                            send: s
                        } = e,
                        d = l.get("hint"),
                        c = (o = null, "increment" === d && (o = n.getById(null != (a = null == (t = n.ids) ? void 0 : t.incrementTrigger) ? a : "number-input:".concat(n.id, ":inc"))), "decrement" === d && (o = n.getById(null != (i = null == (r = n.ids) ? void 0 : r.decrementTrigger) ? i : "number-input:".concat(n.id, ":dec"))), o);
                    return (0, ax.observeAttributes)(c, {
                        attributes: ["disabled"],
                        callback() {
                            s({
                                type: "TRIGGER.PRESS_UP",
                                src: "attr"
                            })
                        }
                    })
                },
                attachWheelListener(e) {
                    let {
                        scope: t,
                        send: a,
                        prop: r
                    } = e, i = lT(t);
                    if (i && t.isActiveElement(i) && r("allowMouseWheel")) return (0, ax.addDomEvent)(i, "wheel", function(e) {
                        e.preventDefault();
                        let t = -1 * Math.sign(e.deltaY);
                        1 === t ? a({
                            type: "VALUE.INCREMENT"
                        }) : -1 === t && a({
                            type: "VALUE.DECREMENT"
                        })
                    }, {
                        passive: !1
                    })
                },
                activatePointerLock(e) {
                    let {
                        scope: t
                    } = e;
                    if (!(0, ax.isSafari)()) return (0, ax.requestPointerLock)(t.getDoc())
                },
                trackMousemove(e) {
                    let {
                        scope: t,
                        send: a,
                        context: r,
                        computed: i
                    } = e, o = t.getDoc();
                    return (0, aS.callAll)((0, ax.addDomEvent)(o, "mousemove", function(e) {
                        let o = ((e, t) => {
                            let {
                                point: a,
                                isRtl: r,
                                event: i
                            } = t, o = e.getWin(), l = (0, aS.roundToDpr)(i.movementX, o.devicePixelRatio), n = (0, aS.roundToDpr)(i.movementY, o.devicePixelRatio), s = l > 0 ? "increment" : l < 0 ? "decrement" : null;
                            r && "increment" === s && (s = "decrement"), r && "decrement" === s && (s = "increment");
                            let d = {
                                    x: a.x + l,
                                    y: a.y + n
                                },
                                c = o.innerWidth,
                                u = (0, aS.roundToDpr)(7.5, o.devicePixelRatio);
                            return d.x = (0, aS.wrap)(d.x + u, c) - u, {
                                hint: s,
                                point: d
                            }
                        })(t, {
                            point: r.get("scrubberCursorPoint"),
                            isRtl: i("isRtl"),
                            event: e
                        });
                        o.hint && a({
                            type: "SCRUBBER.POINTER_MOVE",
                            hint: o.hint,
                            point: o.point
                        })
                    }, !1), (0, ax.addDomEvent)(o, "mouseup", function() {
                        a({
                            type: "SCRUBBER.POINTER_UP"
                        })
                    }, !1))
                }
            },
            actions: {
                focusInput(e) {
                    let {
                        scope: t,
                        prop: a
                    } = e;
                    if (!a("focusInputOnChange")) return;
                    let r = lT(t);
                    t.isActiveElement(r) || (0, ax.raf)(() => null == r ? void 0 : r.focus({
                        preventScroll: !0
                    }))
                },
                increment(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        prop: i,
                        computed: o
                    } = e, l = (0, aS.incrementValue)(o("valueAsNumber"), null != (t = r.step) ? t : i("step"));
                    i("allowOverflow") || (l = (0, aS.clampValue)(l, i("min"), i("max"))), a.set("value", lN(l, {
                        computed: o,
                        prop: i
                    }))
                },
                decrement(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        prop: i,
                        computed: o
                    } = e, l = (0, aS.decrementValue)(o("valueAsNumber"), null != (t = r.step) ? t : i("step"));
                    i("allowOverflow") || (l = (0, aS.clampValue)(l, i("min"), i("max"))), a.set("value", lN(l, {
                        computed: o,
                        prop: i
                    }))
                },
                setClampedValue(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e, i = (0, aS.clampValue)(r("valueAsNumber"), a("min"), a("max"));
                    t.set("value", lN(i, {
                        computed: r,
                        prop: a
                    }))
                },
                setRawValue(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r,
                        computed: i
                    } = e, o = lA(a.value, {
                        computed: i,
                        prop: r
                    });
                    r("allowOverflow") || (o = (0, aS.clampValue)(o, r("min"), r("max"))), t.set("value", lN(o, {
                        computed: i,
                        prop: r
                    }))
                },
                setValue(e) {
                    var t, a;
                    let {
                        context: r,
                        event: i
                    } = e, o = null != (a = null == (t = i.target) ? void 0 : t.value) ? a : i.value;
                    r.set("value", o)
                },
                clearValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("value", "")
                },
                incrementToMax(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e, i = lN(a("max"), {
                        computed: r,
                        prop: a
                    });
                    t.set("value", i)
                },
                decrementToMin(e) {
                    let {
                        context: t,
                        prop: a,
                        computed: r
                    } = e, i = lN(a("min"), {
                        computed: r,
                        prop: a
                    });
                    t.set("value", i)
                },
                setHint(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("hint", a.hint)
                },
                clearHint(e) {
                    let {
                        context: t
                    } = e;
                    t.set("hint", null)
                },
                invokeOnFocus(e) {
                    var t;
                    let {
                        computed: a,
                        prop: r
                    } = e;
                    null == (t = r("onFocusChange")) || t({
                        focused: !0,
                        value: a("formattedValue"),
                        valueAsNumber: a("valueAsNumber")
                    })
                },
                invokeOnBlur(e) {
                    var t;
                    let {
                        computed: a,
                        prop: r
                    } = e;
                    null == (t = r("onFocusChange")) || t({
                        focused: !1,
                        value: a("formattedValue"),
                        valueAsNumber: a("valueAsNumber")
                    })
                },
                invokeOnInvalid(e) {
                    var t;
                    let {
                        computed: a,
                        prop: r,
                        event: i
                    } = e;
                    if ("INPUT.CHANGE" === i.type) return;
                    let o = a("valueAsNumber") > r("max") ? "rangeOverflow" : "rangeUnderflow";
                    null == (t = r("onValueInvalid")) || t({
                        reason: o,
                        value: a("formattedValue"),
                        valueAsNumber: a("valueAsNumber")
                    })
                },
                syncInputElement(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r,
                        scope: i
                    } = e, o = a.type.endsWith("CHANGE") ? t.get("value") : r("formattedValue"), l = lT(i), n = a.selection;
                    (0, ax.raf)(() => {
                        (0, ax.setElementValue)(l, o),
                        function(e, t, a) {
                            if (e && a.isActiveElement(e)) {
                                if (!t) {
                                    let t = e.value.length;
                                    e.setSelectionRange(t, t);
                                    return
                                }
                                try {
                                    let a = e.value,
                                        {
                                            start: r,
                                            end: i,
                                            value: o
                                        } = t;
                                    if (a === o) return void e.setSelectionRange(r, i);
                                    let l = lz(o, a, r),
                                        n = r === i ? l : lz(o, a, i),
                                        s = Math.max(0, Math.min(l, a.length)),
                                        d = Math.max(s, Math.min(n, a.length));
                                    e.setSelectionRange(s, d)
                                } catch {
                                    let t = e.value.length;
                                    e.setSelectionRange(t, t)
                                }
                            }
                        }(l, n, i)
                    })
                },
                setFormattedValue(e) {
                    let {
                        context: t,
                        computed: a
                    } = e;
                    t.set("value", a("formattedValue"))
                },
                setCursorPoint(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("scrubberCursorPoint", a.point)
                },
                clearCursorPoint(e) {
                    let {
                        context: t
                    } = e;
                    t.set("scrubberCursorPoint", null)
                },
                setVirtualCursorPosition(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = lR(a), i = t.get("scrubberCursorPoint");
                    r && i && (r.style.transform = "translate3d(".concat(i.x, "px, ").concat(i.y, "px, 0px)"))
                }
            }
        }
    });
    var lB = (0, aI.createProps)()(["allowMouseWheel", "allowOverflow", "clampValueOnBlur", "dir", "disabled", "focusInputOnChange", "form", "formatOptions", "getRootNode", "id", "ids", "inputMode", "invalid", "locale", "max", "min", "name", "onFocusChange", "onValueChange", "onValueInvalid", "pattern", "required", "readOnly", "spinOnPress", "step", "translations", "value", "defaultValue"]);
    (0, aS.createSplitProps)(lB);
    let lH = (0, tB.defineStyle)({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1",
            userSelect: "none",
            cursor: "button",
            lineHeight: "1",
            color: "fg.muted",
            "--stepper-base-radius": "radii.l1",
            "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
            _icon: {
                boxSize: "1em"
            },
            _disabled: {
                opacity: "0.5"
            },
            _hover: {
                bg: "bg.muted"
            },
            _active: {
                bg: "bg.emphasized"
            }
        }),
        lj = (0, tB.defineSlotRecipe)({
            className: "chakra-number-input",
            slots: lP.keys(),
            base: {
                root: {
                    position: "relative",
                    zIndex: "0",
                    isolation: "isolate"
                },
                input: { ...ar.base,
                    verticalAlign: "top",
                    pe: "calc(var(--stepper-width) + 0.5rem)"
                },
                control: {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "0",
                    insetEnd: "0px",
                    margin: "1px",
                    width: "var(--stepper-width)",
                    height: "calc(100% - 2px)",
                    zIndex: "1",
                    borderStartWidth: "1px",
                    divideY: "1px"
                },
                incrementTrigger: { ...lH,
                    borderTopEndRadius: "var(--stepper-radius)"
                },
                decrementTrigger: { ...lH,
                    borderBottomEndRadius: "var(--stepper-radius)"
                },
                valueText: {
                    fontWeight: "medium",
                    fontFeatureSettings: "pnum",
                    fontVariantNumeric: "proportional-nums"
                }
            },
            variants: {
                size: {
                    xs: {
                        input: ar.variants.size.xs,
                        control: {
                            fontSize: "2xs",
                            "--stepper-width": "sizes.4"
                        }
                    },
                    sm: {
                        input: ar.variants.size.sm,
                        control: {
                            fontSize: "xs",
                            "--stepper-width": "sizes.5"
                        }
                    },
                    md: {
                        input: ar.variants.size.md,
                        control: {
                            fontSize: "sm",
                            "--stepper-width": "sizes.6"
                        }
                    },
                    lg: {
                        input: ar.variants.size.lg,
                        control: {
                            fontSize: "sm",
                            "--stepper-width": "sizes.6"
                        }
                    }
                },
                variant: ev(ar.variants.variant, (e, t) => [e, {
                    input: t
                }])
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        });
    var lU = (0, av.createAnatomy)("pinInput").parts("root", "label", "input", "control");
    lU.build();
    var lG = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "pin-input:".concat(e.id)
        },
        lq = e => {
            let t = CSS.escape(lG(e));
            return (0, ax.queryAll)(e.getById(lG(e)), "input[data-ownedby=".concat(t, "]"))
        },
        lY = (e, t) => lq(e)[t],
        lK = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.hiddenInput) ? a : "pin-input:".concat(e.id, ":hidden"))
        },
        lX = (e, t) => {
            e.value = t, e.setAttribute("value", t)
        },
        {
            choose: l$,
            createMachine: lZ
        } = (0, ak.setup)();

    function lJ(e, t) {
        let a = t;
        e[0] === t[0] ? a = t[1] : e[0] === t[1] && (a = t[0]);
        let r = a.split("");
        return null != (a = r[r.length - 1]) ? a : ""
    }

    function lQ(e, t) {
        return Array.from({
            length: t
        }).fill("").map((t, a) => e[a] || t)
    }
    lZ({
        props(e) {
            let {
                props: t
            } = e;
            return {
                placeholder: "○",
                otp: !1,
                type: "numeric",
                defaultValue: t.count ? lQ([], t.count) : [],
                ...t,
                translations: {
                    inputLabel: (e, t) => "pin code ".concat(e + 1, " of ").concat(t),
                    ...t.translations
                }
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    value: t("value"),
                    defaultValue: t("defaultValue"),
                    isEqual: aS.isEqual,
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e,
                            valueAsString: e.join("")
                        })
                    }
                })),
                focusedIndex: a(() => ({
                    sync: !0,
                    defaultValue: -1
                })),
                count: a(() => ({
                    defaultValue: t("count")
                }))
            }
        },
        computed: {
            _value: e => {
                let {
                    context: t
                } = e;
                return lQ(t.get("value"), t.get("count"))
            },
            valueLength: e => {
                let {
                    computed: t
                } = e;
                return t("_value").length
            },
            filledValueLength: e => {
                let {
                    computed: t
                } = e;
                return t("_value").filter(e => (null == e ? void 0 : e.trim()) !== "").length
            },
            isValueComplete: e => {
                let {
                    computed: t
                } = e;
                return t("valueLength") === t("filledValueLength")
            },
            valueAsString: e => {
                let {
                    computed: t
                } = e;
                return t("_value").join("")
            },
            focusedValue: e => {
                let {
                    computed: t,
                    context: a
                } = e;
                return t("_value")[a.get("focusedIndex")] || ""
            }
        },
        entry: l$([{
            guard: "autoFocus",
            actions: ["setInputCount", "setFocusIndexToFirst"]
        }, {
            actions: ["setInputCount"]
        }]),
        watch(e) {
            let {
                action: t,
                track: a,
                context: r,
                computed: i
            } = e;
            a([() => r.get("focusedIndex")], () => {
                t(["focusInput", "selectInputIfNeeded"])
            }), a([() => r.get("value").join(",")], () => {
                t(["syncInputElements", "dispatchInputEvent"])
            }), a([() => i("isValueComplete")], () => {
                t(["invokeOnComplete", "blurFocusedInputIfNeeded"])
            })
        },
        on: {
            "VALUE.SET": [{
                guard: "hasIndex",
                actions: ["setValueAtIndex"]
            }, {
                actions: ["setValue"]
            }],
            "VALUE.CLEAR": {
                actions: ["clearValue", "setFocusIndexToFirst"]
            }
        },
        states: {
            idle: {
                on: {
                    "INPUT.FOCUS": {
                        target: "focused",
                        actions: ["setFocusedIndex"]
                    }
                }
            },
            focused: {
                on: {
                    "INPUT.CHANGE": {
                        actions: ["setFocusedValue", "syncInputValue", "setNextFocusedIndex"]
                    },
                    "INPUT.PASTE": {
                        actions: ["setPastedValue", "setLastValueFocusIndex"]
                    },
                    "INPUT.FOCUS": {
                        actions: ["setFocusedIndex"]
                    },
                    "INPUT.BLUR": {
                        target: "idle",
                        actions: ["clearFocusedIndex"]
                    },
                    "INPUT.DELETE": {
                        guard: "hasValue",
                        actions: ["clearFocusedValue"]
                    },
                    "INPUT.ARROW_LEFT": {
                        actions: ["setPrevFocusedIndex"]
                    },
                    "INPUT.ARROW_RIGHT": {
                        actions: ["setNextFocusedIndex"]
                    },
                    "INPUT.BACKSPACE": [{
                        guard: "hasValue",
                        actions: ["clearFocusedValue"]
                    }, {
                        actions: ["setPrevFocusedIndex", "clearFocusedValue"]
                    }],
                    "INPUT.ENTER": {
                        guard: "isValueComplete",
                        actions: ["requestFormSubmit"]
                    },
                    "VALUE.INVALID": {
                        actions: ["invokeOnInvalid"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                autoFocus: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("autoFocus")
                },
                hasValue: e => {
                    let {
                        context: t
                    } = e;
                    return "" !== t.get("value")[t.get("focusedIndex")]
                },
                isValueComplete: e => {
                    let {
                        computed: t
                    } = e;
                    return t("isValueComplete")
                },
                hasIndex: e => {
                    let {
                        event: t
                    } = e;
                    return void 0 !== t.index
                }
            },
            actions: {
                dispatchInputEvent(e) {
                    let {
                        computed: t,
                        scope: a
                    } = e, r = lK(a);
                    (0, ax.dispatchInputValueEvent)(r, {
                        value: t("valueAsString")
                    })
                },
                setInputCount(e) {
                    let {
                        scope: t,
                        context: a,
                        prop: r
                    } = e;
                    if (r("count")) return;
                    let i = lq(t);
                    a.set("count", i.length)
                },
                focusInput(e) {
                    var t;
                    let {
                        context: a,
                        scope: r
                    } = e, i = a.get("focusedIndex"); - 1 !== i && (null == (t = lY(r, i)) || t.focus({
                        preventScroll: !0
                    }))
                },
                selectInputIfNeeded(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e, i = t.get("focusedIndex");
                    a("selectOnFocus") && -1 !== i && (0, ax.raf)(() => {
                        var e;
                        null == (e = lY(r, i)) || e.select()
                    })
                },
                invokeOnComplete(e) {
                    var t;
                    let {
                        computed: a,
                        prop: r
                    } = e;
                    a("isValueComplete") && (null == (t = r("onValueComplete")) || t({
                        value: a("_value"),
                        valueAsString: a("valueAsString")
                    }))
                },
                invokeOnInvalid(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        prop: i
                    } = e;
                    null == (t = i("onValueInvalid")) || t({
                        value: r.value,
                        index: a.get("focusedIndex")
                    })
                },
                clearFocusedIndex(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedIndex", -1)
                },
                setFocusedIndex(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("focusedIndex", a.index)
                },
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = lQ(a.value, t.get("count"));
                    t.set("value", r)
                },
                setFocusedValue(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r,
                        flush: i
                    } = e, o = r("focusedValue"), l = t.get("focusedIndex"), n = lJ(o, a.value);
                    i(() => {
                        t.set("value", (0, aS.setValueAtIndex)(r("_value"), l, n))
                    })
                },
                revertInputValue(e) {
                    let {
                        context: t,
                        computed: a,
                        scope: r
                    } = e;
                    lX(lY(r, t.get("focusedIndex")), a("focusedValue"))
                },
                syncInputValue(e) {
                    let {
                        context: t,
                        event: a,
                        scope: r
                    } = e, i = t.get("value");
                    lX(lY(r, a.index), i[a.index])
                },
                syncInputElements(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = lq(a), i = t.get("value");
                    r.forEach((e, t) => {
                        lX(e, i[t])
                    })
                },
                setPastedValue(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r,
                        flush: i
                    } = e;
                    (0, ax.raf)(() => {
                        let e = r("valueAsString"),
                            o = t.get("focusedIndex"),
                            l = r("valueLength"),
                            n = Math.min(o, r("filledValueLength")),
                            s = n > 0 ? e.substring(0, o) : "",
                            d = a.value.substring(0, l - n),
                            c = lQ("".concat(s).concat(d).split(""), l);
                        i(() => {
                            t.set("value", c)
                        })
                    })
                },
                setValueAtIndex(e) {
                    let {
                        context: t,
                        event: a,
                        computed: r
                    } = e, i = lJ(r("focusedValue"), a.value);
                    t.set("value", (0, aS.setValueAtIndex)(r("_value"), a.index, i))
                },
                clearValue(e) {
                    let {
                        context: t
                    } = e, a = Array.from({
                        length: t.get("count")
                    }).fill("");
                    queueMicrotask(() => {
                        t.set("value", a)
                    })
                },
                clearFocusedValue(e) {
                    let {
                        context: t,
                        computed: a
                    } = e, r = t.get("focusedIndex"); - 1 !== r && t.set("value", (0, aS.setValueAtIndex)(a("_value"), r, ""))
                },
                setFocusIndexToFirst(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedIndex", 0)
                },
                setNextFocusedIndex(e) {
                    let {
                        context: t,
                        computed: a
                    } = e;
                    t.set("focusedIndex", Math.min(t.get("focusedIndex") + 1, a("valueLength") - 1))
                },
                setPrevFocusedIndex(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedIndex", Math.max(t.get("focusedIndex") - 1, 0))
                },
                setLastValueFocusIndex(e) {
                    let {
                        context: t,
                        computed: a
                    } = e;
                    (0, ax.raf)(() => {
                        t.set("focusedIndex", Math.min(a("filledValueLength"), a("valueLength") - 1))
                    })
                },
                blurFocusedInputIfNeeded(e) {
                    let {
                        context: t,
                        prop: a,
                        scope: r
                    } = e;
                    a("blurOnComplete") && (0, ax.raf)(() => {
                        var e;
                        null == (e = lY(r, t.get("focusedIndex"))) || e.blur()
                    })
                },
                requestFormSubmit(e) {
                    var t;
                    let {
                        computed: a,
                        prop: r,
                        scope: i
                    } = e;
                    if (!r("name") || !a("isValueComplete")) return;
                    let o = lK(i);
                    null == o || null == (t = o.form) || t.requestSubmit()
                }
            }
        }
    });
    var l0 = (0, aI.createProps)()(["autoFocus", "blurOnComplete", "count", "defaultValue", "dir", "disabled", "form", "getRootNode", "id", "ids", "invalid", "mask", "name", "onValueChange", "onValueComplete", "onValueInvalid", "otp", "pattern", "placeholder", "readOnly", "required", "selectOnFocus", "translations", "type", "value"]);
    (0, aS.createSplitProps)(l0);
    let {
        variants: l1,
        defaultVariants: l2
    } = ar, l5 = (0, tB.defineSlotRecipe)({
        className: "chakra-pin-input",
        slots: lU.keys(),
        base: {
            input: { ...ar.base,
                textAlign: "center",
                width: "var(--input-height)"
            },
            control: {
                display: "inline-flex",
                gap: "2",
                isolation: "isolate"
            }
        },
        variants: {
            size: ev(l1.size, (e, t) => [e, {
                input: { ...t,
                    px: "1"
                }
            }]),
            variant: ev(l1.variant, (e, t) => [e, {
                input: t
            }]),
            attached: {
                true: {
                    control: {
                        gap: "0",
                        spaceX: "-1px"
                    },
                    input: {
                        _notFirst: {
                            borderStartRadius: "0"
                        },
                        _notLast: {
                            borderEndRadius: "0"
                        },
                        _focusVisible: {
                            zIndex: "1"
                        }
                    }
                }
            }
        },
        defaultVariants: l2
    }), l3 = (0, tB.defineSlotRecipe)({
        className: "chakra-popover",
        slots: og.keys(),
        base: {
            content: {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                textStyle: "sm",
                "--popover-bg": "colors.bg.panel",
                bg: "var(--popover-bg)",
                boxShadow: "lg",
                "--popover-size": "sizes.xs",
                "--popover-mobile-size": "calc(100dvw - 1rem)",
                width: {
                    base: "min(var(--popover-mobile-size), var(--popover-size))",
                    sm: "var(--popover-size)"
                },
                borderRadius: "l3",
                "--popover-z-index": "zIndex.popover",
                zIndex: "calc(var(--popover-z-index) + var(--layer-index, 0))",
                outline: "0",
                transformOrigin: "var(--transform-origin)",
                maxHeight: "var(--available-height)",
                _open: {
                    animationStyle: "scale-fade-in",
                    animationDuration: "fast"
                },
                _closed: {
                    animationStyle: "scale-fade-out",
                    animationDuration: "faster"
                }
            },
            header: {
                paddingInline: "var(--popover-padding)",
                paddingTop: "var(--popover-padding)"
            },
            body: {
                padding: "var(--popover-padding)",
                flex: "1"
            },
            footer: {
                display: "flex",
                alignItems: "center",
                paddingInline: "var(--popover-padding)",
                paddingBottom: "var(--popover-padding)"
            },
            arrow: {
                "--arrow-size": "sizes.3",
                "--arrow-background": "var(--popover-bg)"
            },
            arrowTip: {
                borderTopWidth: "1px",
                borderLeftWidth: "1px"
            }
        },
        variants: {
            size: {
                xs: {
                    content: {
                        "--popover-padding": "spacing.3"
                    }
                },
                sm: {
                    content: {
                        "--popover-padding": "spacing.4"
                    }
                },
                md: {
                    content: {
                        "--popover-padding": "spacing.5"
                    }
                },
                lg: {
                    content: {
                        "--popover-padding": "spacing.6"
                    }
                }
            }
        },
        defaultVariants: {
            size: "md"
        }
    });
    var l4 = e.i(132509),
        l4 = l4;
    let l6 = (0, tB.defineSlotRecipe)({
        slots: l4.anatomy.keys(),
        className: "chakra-progress",
        base: {
            root: {
                textStyle: "sm",
                position: "relative"
            },
            track: {
                overflow: "hidden",
                position: "relative"
            },
            range: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transitionProperty: "width, height",
                transitionDuration: "slow",
                height: "100%",
                bgColor: "var(--track-color)",
                _indeterminate: {
                    "--animate-from-x": "-40%",
                    "--animate-to-x": "100%",
                    position: "absolute",
                    willChange: "left",
                    minWidth: "50%",
                    animation: "position 1s ease infinite normal none running",
                    backgroundImage: "linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)"
                }
            },
            label: {
                display: "inline-flex",
                fontWeight: "medium",
                alignItems: "center",
                gap: "1"
            },
            valueText: {
                textStyle: "xs",
                lineHeight: "1",
                fontWeight: "medium"
            }
        },
        variants: {
            variant: {
                outline: {
                    track: {
                        shadow: "inset",
                        bgColor: "bg.muted"
                    },
                    range: {
                        bgColor: "colorPalette.solid"
                    }
                },
                subtle: {
                    track: {
                        bgColor: "colorPalette.muted"
                    },
                    range: {
                        bgColor: "colorPalette.solid/72"
                    }
                }
            },
            shape: {
                square: {},
                rounded: {
                    track: {
                        borderRadius: "l1"
                    }
                },
                full: {
                    track: {
                        borderRadius: "full"
                    }
                }
            },
            striped: {
                true: {
                    range: {
                        backgroundImage: "linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)",
                        backgroundSize: "var(--stripe-size) var(--stripe-size)",
                        "--stripe-size": "1rem",
                        "--stripe-color": {
                            _light: "rgba(255, 255, 255, 0.3)",
                            _dark: "rgba(0, 0, 0, 0.3)"
                        }
                    }
                }
            },
            animated: {
                true: {
                    range: {
                        "--animate-from": "var(--stripe-size)",
                        animation: "bg-position 1s linear infinite"
                    }
                }
            },
            size: {
                xs: {
                    track: {
                        h: "1.5"
                    }
                },
                sm: {
                    track: {
                        h: "2"
                    }
                },
                md: {
                    track: {
                        h: "2.5"
                    }
                },
                lg: {
                    track: {
                        h: "3"
                    }
                },
                xl: {
                    track: {
                        h: "4"
                    }
                }
            }
        },
        defaultVariants: {
            variant: "outline",
            size: "md",
            shape: "rounded"
        }
    });
    var l4 = l4;
    let l8 = (0, tB.defineSlotRecipe)({
        className: "chakra-progress-circle",
        slots: l4.anatomy.keys(),
        base: {
            root: {
                display: "inline-flex",
                textStyle: "sm",
                position: "relative"
            },
            circle: {
                _indeterminate: {
                    animation: "spin 2s linear infinite"
                }
            },
            circleTrack: {
                "--track-color": "colors.colorPalette.muted",
                stroke: "var(--track-color)"
            },
            circleRange: {
                stroke: "colorPalette.solid",
                transitionProperty: "stroke-dashoffset, stroke-dasharray",
                transitionDuration: "0.6s",
                _indeterminate: {
                    animation: "circular-progress 1.5s linear infinite"
                }
            },
            label: {
                display: "inline-flex"
            },
            valueText: {
                lineHeight: "1",
                fontWeight: "medium",
                letterSpacing: "tight",
                fontVariantNumeric: "tabular-nums"
            }
        },
        variants: {
            size: {
                xs: {
                    circle: {
                        "--size": "24px",
                        "--thickness": "4px"
                    },
                    valueText: {
                        textStyle: "2xs"
                    }
                },
                sm: {
                    circle: {
                        "--size": "32px",
                        "--thickness": "5px"
                    },
                    valueText: {
                        textStyle: "2xs"
                    }
                },
                md: {
                    circle: {
                        "--size": "40px",
                        "--thickness": "6px"
                    },
                    valueText: {
                        textStyle: "xs"
                    }
                },
                lg: {
                    circle: {
                        "--size": "48px",
                        "--thickness": "7px"
                    },
                    valueText: {
                        textStyle: "sm"
                    }
                },
                xl: {
                    circle: {
                        "--size": "64px",
                        "--thickness": "8px"
                    },
                    valueText: {
                        textStyle: "sm"
                    }
                }
            }
        },
        defaultVariants: {
            size: "md"
        }
    });
    var l7 = ((eg = l7 || {})[eg.Border = -1] = "Border", eg[eg.Data = 0] = "Data", eg[eg.Function = 1] = "Function", eg[eg.Position = 2] = "Position", eg[eg.Timing = 3] = "Timing", eg[eg.Alignment = 4] = "Alignment", eg),
        l9 = Object.defineProperty,
        ne = (e, t, a) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? l9(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[r] = a, a
        };
    let nt = [1, 0],
        na = [2, 3],
        nr = [3, 2],
        ni = {
            L: [0, 1],
            M: nt,
            Q: na,
            H: nr
        },
        no = /^[0-9]*$/,
        nl = /^[A-Z0-9 $%*+.\/:-]*$/,
        nn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
        ns = [
            [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
            [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        ],
        nd = [
            [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
            [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
            [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
            [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        ];
    class nc {
        getModule(e, t) {
            return e >= 0 && e < this.size && t >= 0 && t < this.size && this.modules[t][e]
        }
        drawFunctionPatterns() {
            for (let e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0, l7.Timing), this.setFunctionModule(e, 6, e % 2 == 0, l7.Timing);
            this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
            let e = this.getAlignmentPatternPositions(),
                t = e.length;
            for (let a = 0; a < t; a++)
                for (let r = 0; r < t; r++)(0 !== a || 0 !== r) && (0 !== a || r !== t - 1) && (a !== t - 1 || 0 !== r) && this.drawAlignmentPattern(e[a], e[r]);
            this.drawFormatBits(0), this.drawVersion()
        }
        drawFormatBits(e) {
            let t = this.ecc[1] << 3 | e,
                a = t;
            for (let e = 0; e < 10; e++) a = a << 1 ^ (a >>> 9) * 1335;
            let r = (t << 10 | a) ^ 21522;
            for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, ng(r, e));
            this.setFunctionModule(8, 7, ng(r, 6)), this.setFunctionModule(8, 8, ng(r, 7)), this.setFunctionModule(7, 8, ng(r, 8));
            for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, ng(r, e));
            for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, ng(r, e));
            for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, ng(r, e));
            this.setFunctionModule(8, this.size - 8, !0)
        }
        drawVersion() {
            if (this.version < 7) return;
            let e = this.version;
            for (let t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
            let t = this.version << 12 | e;
            for (let e = 0; e < 18; e++) {
                let a = ng(t, e),
                    r = this.size - 11 + e % 3,
                    i = Math.floor(e / 3);
                this.setFunctionModule(r, i, a), this.setFunctionModule(i, r, a)
            }
        }
        drawFinderPattern(e, t) {
            for (let a = -4; a <= 4; a++)
                for (let r = -4; r <= 4; r++) {
                    let i = Math.max(Math.abs(r), Math.abs(a)),
                        o = e + r,
                        l = t + a;
                    o >= 0 && o < this.size && l >= 0 && l < this.size && this.setFunctionModule(o, l, 2 !== i && 4 !== i, l7.Position)
                }
        }
        drawAlignmentPattern(e, t) {
            for (let a = -2; a <= 2; a++)
                for (let r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + a, 1 !== Math.max(Math.abs(r), Math.abs(a)), l7.Alignment)
        }
        setFunctionModule(e, t, a) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l7.Function;
            this.modules[t][e] = a, this.types[t][e] = r
        }
        addEccAndInterleave(e) {
            let t = this.version,
                a = this.ecc;
            if (e.length !== ny(t, a)) throw RangeError("Invalid argument");
            let r = nd[a[0]][t],
                i = ns[a[0]][t],
                o = Math.floor(nx(t) / 8),
                l = r - o % r,
                n = Math.floor(o / r),
                s = [],
                d = function(e) {
                    if (e < 1 || e > 255) throw RangeError("Degree out of range");
                    let t = [];
                    for (let a = 0; a < e - 1; a++) t.push(0);
                    t.push(1);
                    let a = 1;
                    for (let r = 0; r < e; r++) {
                        for (let e = 0; e < t.length; e++) t[e] = nS(t[e], a), e + 1 < t.length && (t[e] ^= t[e + 1]);
                        a = nS(a, 2)
                    }
                    return t
                }(i);
            for (let t = 0, a = 0; t < r; t++) {
                let r = e.slice(a, a + n - i + (t < l ? 0 : 1));
                a += r.length;
                let o = function(e, t) {
                    let a = t.map(e => 0);
                    for (let r of e) {
                        let e = r ^ a.shift();
                        a.push(0), t.forEach((t, r) => a[r] ^= nS(t, e))
                    }
                    return a
                }(r, d);
                t < l && r.push(0), s.push(r.concat(o))
            }
            let c = [];
            for (let e = 0; e < s[0].length; e++) s.forEach((t, a) => {
                (e !== n - i || a >= l) && c.push(t[e])
            });
            return c
        }
        drawCodewords(e) {
            if (e.length !== Math.floor(nx(this.version) / 8)) throw RangeError("Invalid argument");
            let t = 0;
            for (let a = this.size - 1; a >= 1; a -= 2) {
                6 === a && (a = 5);
                for (let r = 0; r < this.size; r++)
                    for (let i = 0; i < 2; i++) {
                        let o = a - i,
                            l = (a + 1 & 2) == 0 ? this.size - 1 - r : r;
                        !this.types[l][o] && t < 8 * e.length && (this.modules[l][o] = ng(e[t >>> 3], 7 - (7 & t)), t++)
                    }
            }
        }
        applyMask(e) {
            if (e < 0 || e > 7) throw RangeError("Mask value out of range");
            for (let t = 0; t < this.size; t++)
                for (let a = 0; a < this.size; a++) {
                    let r;
                    switch (e) {
                        case 0:
                            r = (a + t) % 2 == 0;
                            break;
                        case 1:
                            r = t % 2 == 0;
                            break;
                        case 2:
                            r = a % 3 == 0;
                            break;
                        case 3:
                            r = (a + t) % 3 == 0;
                            break;
                        case 4:
                            r = (Math.floor(a / 3) + Math.floor(t / 2)) % 2 == 0;
                            break;
                        case 5:
                            r = a * t % 2 + a * t % 3 == 0;
                            break;
                        case 6:
                            r = (a * t % 2 + a * t % 3) % 2 == 0;
                            break;
                        case 7:
                            r = ((a + t) % 2 + a * t % 3) % 2 == 0;
                            break;
                        default:
                            throw Error("Unreachable")
                    }!this.types[t][a] && r && (this.modules[t][a] = !this.modules[t][a])
                }
        }
        getPenaltyScore() {
            let e = 0;
            for (let t = 0; t < this.size; t++) {
                let a = !1,
                    r = 0,
                    i = [0, 0, 0, 0, 0, 0, 0];
                for (let o = 0; o < this.size; o++) this.modules[t][o] === a ? 5 == ++r ? e += 3 : r > 5 && e++ : (this.finderPenaltyAddHistory(r, i), a || (e += 40 * this.finderPenaltyCountPatterns(i)), a = this.modules[t][o], r = 1);
                e += 40 * this.finderPenaltyTerminateAndCount(a, r, i)
            }
            for (let t = 0; t < this.size; t++) {
                let a = !1,
                    r = 0,
                    i = [0, 0, 0, 0, 0, 0, 0];
                for (let o = 0; o < this.size; o++) this.modules[o][t] === a ? 5 == ++r ? e += 3 : r > 5 && e++ : (this.finderPenaltyAddHistory(r, i), a || (e += 40 * this.finderPenaltyCountPatterns(i)), a = this.modules[o][t], r = 1);
                e += 40 * this.finderPenaltyTerminateAndCount(a, r, i)
            }
            for (let t = 0; t < this.size - 1; t++)
                for (let a = 0; a < this.size - 1; a++) {
                    let r = this.modules[t][a];
                    r === this.modules[t][a + 1] && r === this.modules[t + 1][a] && r === this.modules[t + 1][a + 1] && (e += 3)
                }
            let t = 0;
            for (let e of this.modules) t = e.reduce((e, t) => e + +!!t, t);
            let a = this.size * this.size;
            return e + (Math.ceil(Math.abs(20 * t - 10 * a) / a) - 1) * 10
        }
        getAlignmentPatternPositions() {
            if (1 === this.version) return []; {
                let e = Math.floor(this.version / 7) + 2,
                    t = 32 === this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                    a = [6];
                for (let r = this.size - 7; a.length < e; r -= t) a.splice(1, 0, r);
                return a
            }
        }
        finderPenaltyCountPatterns(e) {
            let t = e[1],
                a = t > 0 && e[2] === t && e[3] === 3 * t && e[4] === t && e[5] === t;
            return (a && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (a && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
        }
        finderPenaltyTerminateAndCount(e, t, a) {
            return e && (this.finderPenaltyAddHistory(t, a), t = 0), t += this.size, this.finderPenaltyAddHistory(t, a), this.finderPenaltyCountPatterns(a)
        }
        finderPenaltyAddHistory(e, t) {
            0 === t[0] && (e += this.size), t.pop(), t.unshift(e)
        }
        constructor(e, t, a, r) {
            if (this.version = e, this.ecc = t, ne(this, "size"), ne(this, "mask"), ne(this, "modules", []), ne(this, "types", []), e < 1 || e > 40) throw RangeError("Version value out of range");
            if (r < -1 || r > 7) throw RangeError("Mask value out of range");
            this.size = 4 * e + 17;
            const i = Array.from({
                length: this.size
            }, () => !1);
            for (let e = 0; e < this.size; e++) this.modules.push(i.slice()), this.types.push(i.map(() => 0));
            this.drawFunctionPatterns();
            const o = this.addEccAndInterleave(a);
            if (this.drawCodewords(o), -1 === r) {
                let e = 1e9;
                for (let t = 0; t < 8; t++) {
                    this.applyMask(t), this.drawFormatBits(t);
                    const a = this.getPenaltyScore();
                    a < e && (r = t, e = a), this.applyMask(t)
                }
            }
            this.mask = r, this.applyMask(r), this.drawFormatBits(r)
        }
    }

    function nu(e, t, a) {
        if (t < 0 || t > 31 || e >>> t != 0) throw RangeError("Value out of range");
        for (let r = t - 1; r >= 0; r--) a.push(e >>> r & 1)
    }

    function ng(e, t) {
        return (e >>> t & 1) != 0
    }
    class np {
        getData() {
            return this.bitData.slice()
        }
        constructor(e, t, a) {
            if (this.mode = e, this.numChars = t, this.bitData = a, t < 0) throw RangeError("Invalid argument");
            this.bitData = a.slice()
        }
    }
    let nh = [1, 10, 12, 14],
        nm = [2, 9, 11, 13],
        nf = [4, 8, 16, 16];

    function nv(e, t) {
        return e[Math.floor((t + 7) / 17) + 1]
    }

    function nb(e) {
        let t = [];
        for (let a of e) nu(a, 8, t);
        return new np(nf, e.length, t)
    }

    function nx(e) {
        if (e < 1 || e > 40) throw RangeError("Version number out of range");
        let t = (16 * e + 128) * e + 64;
        if (e >= 2) {
            let a = Math.floor(e / 7) + 2;
            t -= (25 * a - 10) * a - 55, e >= 7 && (t -= 36)
        }
        return t
    }

    function ny(e, t) {
        return Math.floor(nx(e) / 8) - ns[t[0]][e] * nd[t[0]][e]
    }

    function nS(e, t) {
        if (e >>> 8 != 0 || t >>> 8 != 0) throw RangeError("Byte out of range");
        let a = 0;
        for (let r = 7; r >= 0; r--) a = a << 1 ^ (a >>> 7) * 285 ^ (t >>> r & 1) * e;
        return a
    }
    var nk = (0, av.createAnatomy)("qr-code").parts("root", "frame", "pattern", "overlay", "downloadTrigger");
    nk.build(), (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                defaultValue: "",
                pixelSize: 10,
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a
            } = e;
            return {
                value: a(() => ({
                    value: t("value"),
                    defaultValue: t("defaultValue"),
                    onChange(e) {
                        var a;
                        null == (a = t("onValueChange")) || a({
                            value: e
                        })
                    }
                }))
            }
        },
        computed: {
            encoded: (0, ak.memo)(e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return [t.get("value"), a("encoding")]
            }, e => {
                let [t, a] = e;
                return function(e, t) {
                    var a;
                    let {
                        ecc: r = "L",
                        boostEcc: i = !1,
                        minVersion: o = 1,
                        maxVersion: l = 40,
                        maskPattern: n = -1,
                        border: s = 1
                    } = t || {}, d = "string" == typeof e ? function(e) {
                        var t, a;
                        if ("" === e) return [];
                        if (t = e, no.test(t)) return [function(e) {
                            var t;
                            if (t = e, !no.test(t)) throw RangeError("String contains non-numeric characters");
                            let a = [];
                            for (let t = 0; t < e.length;) {
                                let r = Math.min(e.length - t, 3);
                                nu(Number.parseInt(e.substring(t, t + r), 10), 3 * r + 1, a), t += r
                            }
                            return new np(nh, e.length, a)
                        }(e)];
                        return (a = e, nl.test(a)) ? [function(e) {
                            var t;
                            let a;
                            if (t = e, !nl.test(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                            let r = [];
                            for (a = 0; a + 2 <= e.length; a += 2) {
                                let t = 45 * nn.indexOf(e.charAt(a));
                                nu(t += nn.indexOf(e.charAt(a + 1)), 11, r)
                            }
                            return a < e.length && nu(nn.indexOf(e.charAt(a)), 6, r), new np(nm, e.length, r)
                        }(e)] : [nb(function(e) {
                            e = encodeURI(e);
                            let t = [];
                            for (let a = 0; a < e.length; a++) "%" !== e.charAt(a) ? t.push(e.charCodeAt(a)) : (t.push(Number.parseInt(e.substring(a + 1, a + 3), 16)), a += 2);
                            return t
                        }(e))]
                    }(e) : Array.isArray(e) ? [nb(e)] : void 0;
                    if (!d) throw Error("uqr only supports encoding string and binary data, but got: ".concat(typeof e));
                    let c = function(e, t) {
                            let a, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40,
                                l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                                n = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                            if (!(1 <= i && i <= o && o <= 40) || l < -1 || l > 7) throw RangeError("Invalid value");
                            for (a = i;; a++) {
                                let i = 8 * ny(a, t),
                                    l = function(e, t) {
                                        let a = 0;
                                        for (let r of e) {
                                            let e = nv(r.mode, t);
                                            if (r.numChars >= 1 << e) return 1 / 0;
                                            a += 4 + e + r.bitData.length
                                        }
                                        return a
                                    }(e, a);
                                if (l <= i) {
                                    r = l;
                                    break
                                }
                                if (a >= o) throw RangeError("Data too long")
                            }
                            for (let e of [nt, na, nr]) n && r <= 8 * ny(a, e) && (t = e);
                            let s = [];
                            for (let t of e)
                                for (let e of (nu(t.mode[0], 4, s), nu(t.numChars, nv(t.mode, a), s), t.getData())) s.push(e);
                            let d = 8 * ny(a, t);
                            nu(0, Math.min(4, d - s.length), s), nu(0, (8 - s.length % 8) % 8, s);
                            for (let e = 236; s.length < d; e ^= 253) nu(e, 8, s);
                            let c = Array.from({
                                length: Math.ceil(s.length / 8)
                            }, () => 0);
                            return s.forEach((e, t) => c[t >>> 3] |= e << 7 - (7 & t)), new nc(a, t, c, l)
                        }(d, ni[r], o, l, n, i),
                        u = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            if (!t) return e;
                            let {
                                size: a
                            } = e, r = a + 2 * t;
                            e.size = r, e.data.forEach(e => {
                                for (let a = 0; a < t; a++) e.unshift(!1), e.push(!1)
                            });
                            for (let a = 0; a < t; a++) e.data.unshift(Array.from({
                                length: r
                            }, e => !1)), e.data.push(Array.from({
                                length: r
                            }, e => !1));
                            let i = l7.Border;
                            e.types.forEach(e => {
                                for (let a = 0; a < t; a++) e.unshift(i), e.push(i)
                            });
                            for (let a = 0; a < t; a++) e.types.unshift(Array.from({
                                length: r
                            }, e => i)), e.types.push(Array.from({
                                length: r
                            }, e => i));
                            return e
                        }({
                            version: c.version,
                            maskPattern: c.mask,
                            size: c.size,
                            data: c.modules,
                            types: c.types
                        }, s);
                    return (null == t ? void 0 : t.invert) && (u.data = u.data.map(e => e.map(e => !e))), null == t || null == (a = t.onEncoded) || a.call(t, u), u
                }(t, a)
            })
        },
        states: {
            idle: {
                on: {
                    "VALUE.SET": {
                        actions: ["setValue"]
                    },
                    "DOWNLOAD_TRIGGER.CLICK": {
                        actions: ["downloadQrCode"]
                    }
                }
            }
        },
        implementations: {
            actions: {
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                downloadQrCode(e) {
                    var t, a;
                    let {
                        event: r,
                        scope: i
                    } = e, {
                        mimeType: o,
                        quality: l,
                        fileName: n
                    } = r, s = i.getById(null != (a = null == (t = i.ids) ? void 0 : t.frame) ? a : "qrcode:".concat(i.id, ":frame")), d = i.getDoc();
                    (0, ax.getDataUrl)(s, {
                        type: o,
                        quality: l
                    }).then(e => {
                        let t = d.createElement("a");
                        t.href = e, t.rel = "noopener", t.download = n, t.click(), setTimeout(() => {
                            t.remove()
                        }, 0)
                    })
                }
            }
        }
    });
    var nC = (0, aI.createProps)()(["ids", "defaultValue", "value", "id", "encoding", "dir", "getRootNode", "onValueChange", "pixelSize"]);
    (0, aS.createSplitProps)(nC);
    let nI = (0, tB.defineSlotRecipe)({
            slots: nk.keys(),
            className: "chakra-qr-code",
            base: {
                root: {
                    position: "relative",
                    width: "fit-content",
                    "--qr-code-overlay-size": "calc(var(--qr-code-size) / 3)"
                },
                frame: {
                    width: "var(--qr-code-size)",
                    height: "var(--qr-code-size)",
                    fill: "currentColor"
                },
                overlay: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "var(--qr-code-overlay-size)",
                    height: "var(--qr-code-overlay-size)",
                    padding: "1",
                    bg: "bg",
                    rounded: "l1"
                }
            },
            variants: {
                size: {
                    "2xs": {
                        root: {
                            "--qr-code-size": "40px"
                        }
                    },
                    xs: {
                        root: {
                            "--qr-code-size": "64px"
                        }
                    },
                    sm: {
                        root: {
                            "--qr-code-size": "80px"
                        }
                    },
                    md: {
                        root: {
                            "--qr-code-size": "120px"
                        }
                    },
                    lg: {
                        root: {
                            "--qr-code-size": "160px"
                        }
                    },
                    xl: {
                        root: {
                            "--qr-code-size": "200px"
                        }
                    },
                    "2xl": {
                        root: {
                            "--qr-code-size": "240px"
                        }
                    },
                    full: {
                        root: {
                            "--qr-code-size": "100%"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        nw = (0, tB.defineSlotRecipe)({
            className: "chakra-radio-card",
            slots: oh.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5",
                    isolation: "isolate"
                },
                item: {
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    userSelect: "none",
                    position: "relative",
                    borderRadius: "l2",
                    _focus: {
                        bg: "colorPalette.muted/20"
                    },
                    _disabled: {
                        opacity: "0.8",
                        borderColor: "border.disabled"
                    },
                    _checked: {
                        zIndex: "1"
                    }
                },
                label: {
                    display: "inline-flex",
                    fontWeight: "medium",
                    textStyle: "sm",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                itemText: {
                    fontWeight: "medium",
                    flex: "1"
                },
                itemDescription: {
                    opacity: "0.64",
                    textStyle: "sm"
                },
                itemControl: {
                    display: "inline-flex",
                    flex: "1",
                    pos: "relative",
                    rounded: "inherit",
                    justifyContent: "var(--radio-card-justify)",
                    alignItems: "var(--radio-card-align)",
                    _disabled: {
                        bg: "bg.muted"
                    }
                },
                itemIndicator: as.base,
                itemAddon: {
                    roundedBottom: "inherit",
                    _disabled: {
                        color: "fg.muted"
                    }
                },
                itemContent: {
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    gap: "1",
                    justifyContent: "var(--radio-card-justify)",
                    alignItems: "var(--radio-card-align)"
                }
            },
            variants: {
                size: {
                    sm: {
                        item: {
                            textStyle: "sm"
                        },
                        itemControl: {
                            padding: "3",
                            gap: "1.5"
                        },
                        itemAddon: {
                            px: "3",
                            py: "1.5",
                            borderTopWidth: "1px"
                        },
                        itemIndicator: null == (j = as.variants) ? void 0 : j.size.sm
                    },
                    md: {
                        item: {
                            textStyle: "sm"
                        },
                        itemControl: {
                            padding: "4",
                            gap: "2.5"
                        },
                        itemAddon: {
                            px: "4",
                            py: "2",
                            borderTopWidth: "1px"
                        },
                        itemIndicator: null == (U = as.variants) ? void 0 : U.size.md
                    },
                    lg: {
                        item: {
                            textStyle: "md"
                        },
                        itemControl: {
                            padding: "4",
                            gap: "3.5"
                        },
                        itemAddon: {
                            px: "4",
                            py: "2",
                            borderTopWidth: "1px"
                        },
                        itemIndicator: null == (G = as.variants) ? void 0 : G.size.lg
                    }
                },
                variant: {
                    surface: {
                        item: {
                            borderWidth: "1px",
                            _checked: {
                                bg: "colorPalette.subtle",
                                color: "colorPalette.fg",
                                borderColor: "colorPalette.muted"
                            }
                        },
                        itemIndicator: null == (q = as.variants) ? void 0 : q.variant.solid
                    },
                    subtle: {
                        item: {
                            bg: "bg.muted"
                        },
                        itemControl: {
                            _checked: {
                                bg: "colorPalette.muted",
                                color: "colorPalette.fg"
                            }
                        },
                        itemIndicator: null == (Y = as.variants) ? void 0 : Y.variant.outline
                    },
                    outline: {
                        item: {
                            borderWidth: "1px",
                            _checked: {
                                boxShadow: "0 0 0 1px var(--shadow-color)",
                                boxShadowColor: "colorPalette.solid",
                                borderColor: "colorPalette.solid"
                            }
                        },
                        itemIndicator: null == (K = as.variants) ? void 0 : K.variant.solid
                    },
                    solid: {
                        item: {
                            borderWidth: "1px",
                            _checked: {
                                bg: "colorPalette.solid",
                                color: "colorPalette.contrast",
                                borderColor: "colorPalette.solid"
                            }
                        },
                        itemIndicator: null == (X = as.variants) ? void 0 : X.variant.inverted
                    }
                },
                justify: {
                    start: {
                        item: {
                            "--radio-card-justify": "flex-start"
                        }
                    },
                    end: {
                        item: {
                            "--radio-card-justify": "flex-end"
                        }
                    },
                    center: {
                        item: {
                            "--radio-card-justify": "center"
                        }
                    }
                },
                align: {
                    start: {
                        item: {
                            "--radio-card-align": "flex-start"
                        },
                        itemControl: {
                            textAlign: "start"
                        }
                    },
                    end: {
                        item: {
                            "--radio-card-align": "flex-end"
                        },
                        itemControl: {
                            textAlign: "end"
                        }
                    },
                    center: {
                        item: {
                            "--radio-card-align": "center"
                        },
                        itemControl: {
                            textAlign: "center"
                        }
                    }
                },
                orientation: {
                    vertical: {
                        itemControl: {
                            flexDirection: "column"
                        }
                    },
                    horizontal: {
                        itemControl: {
                            flexDirection: "row"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline",
                align: "start",
                orientation: "horizontal"
            }
        }),
        nE = (0, tB.defineSlotRecipe)({
            className: "chakra-radio-group",
            slots: op.keys(),
            base: {
                item: {
                    display: "inline-flex",
                    alignItems: "center",
                    position: "relative",
                    fontWeight: "medium",
                    _disabled: {
                        cursor: "disabled"
                    }
                },
                itemControl: as.base,
                label: {
                    userSelect: "none",
                    textStyle: "sm",
                    _disabled: {
                        opacity: "0.5"
                    }
                }
            },
            variants: {
                variant: {
                    outline: {
                        itemControl: null == (Z = as.variants) || null == ($ = Z.variant) ? void 0 : $.outline
                    },
                    subtle: {
                        itemControl: null == (Q = as.variants) || null == (J = Q.variant) ? void 0 : J.subtle
                    },
                    solid: {
                        itemControl: null == (et = as.variants) || null == (ee = et.variant) ? void 0 : ee.solid
                    }
                },
                size: {
                    xs: {
                        item: {
                            textStyle: "xs",
                            gap: "1.5"
                        },
                        itemControl: null == (er = as.variants) || null == (ea = er.size) ? void 0 : ea.xs
                    },
                    sm: {
                        item: {
                            textStyle: "sm",
                            gap: "2"
                        },
                        itemControl: null == (eo = as.variants) || null == (ei = eo.size) ? void 0 : ei.sm
                    },
                    md: {
                        item: {
                            textStyle: "sm",
                            gap: "2.5"
                        },
                        itemControl: null == (en = as.variants) || null == (el = en.size) ? void 0 : el.md
                    },
                    lg: {
                        item: {
                            textStyle: "md",
                            gap: "3"
                        },
                        itemControl: null == (ed = as.variants) || null == (es = ed.size) ? void 0 : es.lg
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "solid"
            }
        }),
        nP = (0, tB.defineSlotRecipe)({
            className: "chakra-rating-group",
            slots: om.keys(),
            base: {
                root: {
                    display: "inline-flex"
                },
                control: {
                    display: "inline-flex",
                    alignItems: "center"
                },
                item: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none"
                },
                itemIndicator: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "1em",
                    height: "1em",
                    position: "relative",
                    "--clip-path": {
                        base: "inset(0 50% 0 0)",
                        _rtl: "inset(0 0 0 50%)"
                    },
                    _icon: {
                        stroke: "currentColor",
                        width: "100%",
                        height: "100%",
                        display: "inline-block",
                        flexShrink: 0,
                        position: "absolute",
                        left: 0,
                        top: 0
                    },
                    "& [data-bg]": {
                        color: "bg.emphasized"
                    },
                    "& [data-fg]": {
                        color: "transparent"
                    },
                    "&[data-highlighted]:not([data-half])": {
                        "& [data-fg]": {
                            color: "colorPalette.solid"
                        }
                    },
                    "&[data-half]": {
                        "& [data-fg]": {
                            color: "colorPalette.solid",
                            clipPath: "var(--clip-path)"
                        }
                    }
                }
            },
            variants: {
                size: {
                    xs: {
                        item: {
                            textStyle: "sm"
                        }
                    },
                    sm: {
                        item: {
                            textStyle: "md"
                        }
                    },
                    md: {
                        item: {
                            textStyle: "xl"
                        }
                    },
                    lg: {
                        item: {
                            textStyle: "2xl"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        });
    var nV = Object.defineProperty,
        nT = (e, t, a) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? nV(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[r] = a
        },
        nR = (0, av.createAnatomy)("scroll-area").parts("root", "viewport", "content", "scrollbar", "thumb", "corner");
    nR.build();
    var nz = e => {
            var t, a;
            return null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "scroll-area-".concat(e.id)
        },
        n_ = e => e.getById(nz(e)),
        nO = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.viewport) ? a : "scroll-area-".concat(e.id, ":viewport"))
        },
        nA = e => (0, ax.query)(n_(e), '[data-part=scrollbar][data-orientation=horizontal][data-ownedby="'.concat(nz(e), '"]')),
        nN = e => (0, ax.query)(n_(e), '[data-part=scrollbar][data-orientation=vertical][data-ownedby="'.concat(nz(e), '"]')),
        nF = e => (0, ax.query)(nA(e), '[data-part=thumb][data-orientation=horizontal][data-ownedby="'.concat(nz(e), '"]')),
        nD = e => (0, ax.query)(nN(e), '[data-part=thumb][data-orientation=vertical][data-ownedby="'.concat(nz(e), '"]'));

    function nL(e, t, a) {
        if (!e) return 0;
        let r = (0, ax.getComputedStyle)(e),
            i = "x" === a ? "Inline" : "Block";
        return "x" === a && "margin" === t ? 2 * parseFloat(r["".concat(t, "InlineStart")]) : parseFloat(r["".concat(t).concat(i, "Start")]) + parseFloat(r["".concat(t).concat(i, "End")])
    }

    function nW(e, t) {
        let a = e.scrollTop,
            r = e.scrollLeft,
            i = e.scrollHeight - e.clientHeight > 1,
            o = e.scrollWidth - e.clientWidth > 1,
            l = e.scrollWidth - e.clientWidth,
            n = e.scrollHeight - e.clientHeight,
            s = !1,
            d = !1,
            c = !1,
            u = !1;
        return o && ("rtl" === t && r <= 0 ? (s = Math.abs(r) >= l - 1, d = 1 >= Math.abs(r)) : (s = r <= 1, d = r >= l - 1)), i && (c = a <= 1, u = a >= n - 1), {
            top: c,
            right: d,
            bottom: u,
            left: s
        }
    }
    var nM = class {
        start(e, t) {
            this.clear(), this.currentId = setTimeout(() => {
                this.currentId = 0, t()
            }, e)
        }
        isStarted() {
            return 0 !== this.currentId
        }
        constructor() {
            nT(this, "currentId", 0), nT(this, "clear", () => {
                0 !== this.currentId && (clearTimeout(this.currentId), this.currentId = 0)
            }), nT(this, "disposeEffect", () => this.clear)
        }
    };
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return (0, aS.ensureProps)(t, ["id"]), t
        },
        context(e) {
            let {
                bindable: t
            } = e;
            return {
                scrollingX: t(() => ({
                    defaultValue: !1
                })),
                scrollingY: t(() => ({
                    defaultValue: !1
                })),
                hovering: t(() => ({
                    defaultValue: !1
                })),
                dragging: t(() => ({
                    defaultValue: !1
                })),
                touchModality: t(() => ({
                    defaultValue: !1
                })),
                atSides: t(() => ({
                    defaultValue: {
                        top: !0,
                        right: !1,
                        bottom: !1,
                        left: !0
                    }
                })),
                cornerSize: t(() => ({
                    defaultValue: {
                        width: 0,
                        height: 0
                    }
                })),
                thumbSize: t(() => ({
                    defaultValue: {
                        width: 0,
                        height: 0
                    }
                })),
                hiddenState: t(() => ({
                    defaultValue: {
                        scrollbarYHidden: !1,
                        scrollbarXHidden: !1,
                        cornerHidden: !1
                    },
                    hash: e => "Y:".concat(e.scrollbarYHidden, " X:").concat(e.scrollbarXHidden, " C:").concat(e.cornerHidden)
                }))
            }
        },
        refs: () => ({
            orientation: "vertical",
            scrollPosition: {
                x: 0,
                y: 0
            },
            scrollYTimeout: new nM,
            scrollXTimeout: new nM,
            scrollEndTimeout: new nM,
            startX: 0,
            startY: 0,
            startScrollTop: 0,
            startScrollLeft: 0,
            programmaticScroll: !0
        }),
        initialState: () => "idle",
        watch(e) {
            let {
                track: t,
                prop: a,
                context: r,
                send: i
            } = e;
            t([() => a("dir"), () => r.hash("hiddenState")], () => {
                i({
                    type: "thumb.measure"
                })
            })
        },
        effects: ["trackContentResize", "trackViewportVisibility", "trackWheelEvent"],
        entry: ["checkHovering"],
        exit: ["clearTimeouts"],
        on: {
            "thumb.measure": {
                actions: ["setThumbSize"]
            },
            "viewport.scroll": {
                actions: ["setThumbSize", "setScrolling", "setProgrammaticScroll"]
            },
            "root.pointerenter": {
                actions: ["setTouchModality", "setHovering"]
            },
            "root.pointerdown": {
                actions: ["setTouchModality"]
            },
            "root.pointerleave": {
                actions: ["clearHovering"]
            }
        },
        states: {
            idle: {
                on: {
                    "scrollbar.pointerdown": {
                        target: "dragging",
                        actions: ["scrollToPointer", "startDragging"]
                    },
                    "thumb.pointerdown": {
                        target: "dragging",
                        actions: ["startDragging"]
                    }
                }
            },
            dragging: {
                effects: ["trackPointerMove"],
                on: {
                    "thumb.pointermove": {
                        actions: ["setDraggingScroll"]
                    },
                    "scrollbar.pointerup": {
                        target: "idle",
                        actions: ["stopDragging"]
                    },
                    "thumb.pointerup": {
                        target: "idle",
                        actions: ["clearScrolling", "stopDragging"]
                    }
                }
            }
        },
        implementations: {
            actions: {
                setTouchModality(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("touchModality", "touch" === a.pointerType)
                },
                setHovering(e) {
                    let {
                        context: t
                    } = e;
                    t.set("hovering", !0)
                },
                clearHovering(e) {
                    let {
                        context: t
                    } = e;
                    t.set("hovering", !1)
                },
                setProgrammaticScroll(e) {
                    let {
                        refs: t
                    } = e;
                    t.get("scrollEndTimeout").start(100, () => {
                        t.set("programmaticScroll", !0)
                    })
                },
                clearScrolling(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("vertical" === a.orientation ? "scrollingY" : "scrollingX", !1)
                },
                setThumbSize(e) {
                    let {
                        context: t,
                        scope: a,
                        prop: r
                    } = e, i = nO(a);
                    if (!i) return;
                    let o = i.scrollHeight,
                        l = i.scrollWidth;
                    if (0 === o || 0 === l) return;
                    let n = nN(a),
                        s = nA(a),
                        d = nD(a),
                        c = nF(a),
                        u = i.clientHeight,
                        g = i.clientWidth,
                        p = i.scrollTop,
                        h = i.scrollLeft,
                        m = u >= o,
                        f = g >= l,
                        v = nL(s, "padding", "x"),
                        b = nL(n, "padding", "y"),
                        x = nL(c, "margin", "x"),
                        y = nL(d, "margin", "y"),
                        S = (f ? 0 : g) - v - x,
                        k = (m ? 0 : u) - b - y,
                        C = s ? Math.min(s.offsetWidth, S) : S,
                        I = n ? Math.min(n.offsetHeight, k) : k,
                        w = Math.max(20, g / l * C),
                        E = Math.max(20, u / o * I);
                    if (t.set("thumbSize", e => e.height === E && e.width === w ? e : {
                            width: w,
                            height: E
                        }), n && d) {
                        let e = n.offsetHeight - E - b - y,
                            t = Math.min(e, Math.max(0, p / (o - u) * e));
                        d.style.transform = "translate3d(0,".concat(t, "px,0)")
                    }
                    if (s && c) {
                        let e = s.offsetWidth - w - v - x,
                            t = h / (l - g),
                            a = "rtl" === r("dir") ? (0, aS.clampValue)(t * e, -e, 0) : (0, aS.clampValue)(t * e, 0, e);
                        c.style.transform = "translate3d(".concat(a, "px,0,0)")
                    }
                    if ((0, ax.query)(n_(a), '[data-part=corner][data-ownedby="'.concat(nz(a), '"]'))) {
                        if (f || m) t.set("cornerSize", {
                            width: 0,
                            height: 0
                        });
                        else if (!f && !m) {
                            let e = (null == n ? void 0 : n.offsetWidth) || 0,
                                a = (null == s ? void 0 : s.offsetHeight) || 0;
                            t.set("cornerSize", {
                                width: e,
                                height: a
                            })
                        }
                    }
                    t.set("hiddenState", e => {
                        let t = m || f;
                        return e.scrollbarYHidden === m && e.scrollbarXHidden === f && e.cornerHidden === t ? e : {
                            scrollbarYHidden: m,
                            scrollbarXHidden: f,
                            cornerHidden: t
                        }
                    }), t.set("atSides", e => {
                        let t = nW(i, r("dir"));
                        return (0, aS.isEqual)(e, t) ? e : t
                    })
                },
                checkHovering(e) {
                    let {
                        scope: t,
                        context: a
                    } = e, r = nO(t);
                    (null == r ? void 0 : r.matches(":hover")) && a.set("hovering", !0)
                },
                setScrolling(e) {
                    let {
                        event: t,
                        refs: a,
                        context: r,
                        prop: i
                    } = e, o = {
                        x: t.target.scrollLeft,
                        y: t.target.scrollTop
                    }, l = a.get("scrollPosition"), n = o.x - l.x, s = o.y - l.y;
                    a.set("scrollPosition", o), r.set("atSides", e => {
                        let a = nW(t.target, i("dir"));
                        return (0, aS.isEqual)(e, a) ? e : a
                    }), 0 !== s && (r.set("scrollingY", !0), a.get("scrollYTimeout").start(1e3, () => {
                        r.set("scrollingY", !1)
                    })), 0 !== n && (r.set("scrollingX", !0), a.get("scrollXTimeout").start(1e3, () => {
                        r.set("scrollingX", !1)
                    }))
                },
                scrollToPointer(e) {
                    let {
                        event: t,
                        scope: a,
                        prop: r
                    } = e, i = nO(a);
                    if (!i) return;
                    let o = nD(a),
                        l = nN(a),
                        n = nF(a),
                        s = nA(a),
                        d = t.point;
                    if (o && l && "vertical" === t.orientation) {
                        let e = nL(o, "margin", "y"),
                            t = nL(l, "padding", "y"),
                            a = o.offsetHeight,
                            r = l.getBoundingClientRect(),
                            n = d.y - r.top - a / 2 - t + e / 2,
                            s = i.scrollHeight,
                            c = i.clientHeight;
                        i.scrollTop = n / (l.offsetHeight - a - t - e) * (s - c)
                    }
                    if (n && s && "horizontal" === t.orientation) {
                        let e, t = nL(n, "margin", "x"),
                            a = nL(s, "padding", "x"),
                            o = n.offsetWidth,
                            l = s.getBoundingClientRect(),
                            c = d.x - l.left - o / 2 - a + t / 2,
                            u = i.scrollWidth,
                            g = i.clientWidth,
                            p = c / (s.offsetWidth - o - a - t);
                        "rtl" === r("dir") ? (e = (1 - p) * (u - g), i.scrollLeft <= 0 && (e = -e)) : e = p * (u - g), i.scrollLeft = e
                    }
                },
                startDragging(e) {
                    let {
                        event: t,
                        refs: a,
                        scope: r
                    } = e;
                    a.set("startX", t.point.x), a.set("startY", t.point.y), a.set("orientation", t.orientation);
                    let i = nO(r);
                    i && (a.set("startScrollTop", i.scrollTop), a.set("startScrollLeft", i.scrollLeft))
                },
                setDraggingScroll(e) {
                    let {
                        event: t,
                        refs: a,
                        scope: r,
                        context: i
                    } = e, o = a.get("startY"), l = a.get("startX"), n = a.get("startScrollTop"), s = a.get("startScrollLeft"), d = t.point, c = d.y - o, u = d.x - l, g = nO(r);
                    if (!g) return;
                    let p = g.scrollHeight,
                        h = g.clientHeight,
                        m = g.scrollWidth,
                        f = g.clientWidth,
                        v = a.get("orientation"),
                        b = nD(r),
                        x = nN(r);
                    if (b && x && "vertical" === v) {
                        let e = nL(x, "padding", "y"),
                            t = nL(b, "margin", "y"),
                            r = b.offsetHeight;
                        g.scrollTop = n + c / (x.offsetHeight - r - e - t) * (p - h), i.set("scrollingY", !0), a.get("scrollYTimeout").start(1e3, () => {
                            i.set("scrollingY", !1)
                        })
                    }
                    let y = nF(r),
                        S = nA(r);
                    if (y && S && "horizontal" === v) {
                        let e = nL(S, "padding", "x"),
                            t = nL(y, "margin", "x"),
                            r = y.offsetWidth;
                        g.scrollLeft = s + u / (S.offsetWidth - r - e - t) * (m - f), i.set("scrollingX", !0), a.get("scrollXTimeout").start(1e3, () => {
                            i.set("scrollingX", !1)
                        })
                    }
                },
                stopDragging(e) {
                    let {
                        refs: t
                    } = e;
                    t.set("orientation", null)
                },
                clearTimeouts(e) {
                    let {
                        refs: t
                    } = e;
                    t.get("scrollYTimeout").clear(), t.get("scrollXTimeout").clear(), t.get("scrollEndTimeout").clear()
                }
            },
            effects: {
                trackContentResize(e) {
                    var t, a;
                    let {
                        scope: r,
                        send: i
                    } = e, o = r.getById(null != (a = null == (t = r.ids) ? void 0 : t.content) ? a : "scroll-area-".concat(r.id, ":content")), l = n_(r);
                    if (!o || !l) return;
                    let n = new(r.getWin()).ResizeObserver(() => {
                        setTimeout(() => {
                            i({
                                type: "thumb.measure"
                            })
                        }, 1)
                    });
                    return n.observe(o), n.observe(l), () => {
                        n.disconnect()
                    }
                },
                trackViewportVisibility(e) {
                    let {
                        scope: t,
                        send: a
                    } = e, r = t.getWin(), i = nO(t);
                    if (!i) return;
                    let o = new r.IntersectionObserver(e => {
                        e.forEach(e => {
                            e.intersectionRatio > 0 && (a({
                                type: "thumb.measure"
                            }), o.disconnect())
                        })
                    });
                    return o.observe(i), () => {
                        o.disconnect()
                    }
                },
                trackWheelEvent(e) {
                    let {
                        scope: t
                    } = e, a = nN(t), r = nA(t);
                    if (!a && !r) return;
                    let i = e => {
                        let a = nO(t);
                        if (!a || e.ctrlKey) return;
                        let r = e.currentTarget.dataset.orientation;
                        if ("vertical" === r) {
                            let t = a.scrollHeight > a.clientHeight,
                                r = 0 === a.scrollTop && e.deltaY < 0,
                                i = a.scrollTop === a.scrollHeight - a.clientHeight && e.deltaY > 0;
                            if (!(t && 0 !== e.deltaY && !(r || i))) return;
                            e.preventDefault(), a.scrollTop += e.deltaY
                        } else if ("horizontal" === r) {
                            let t = a.scrollWidth > a.clientWidth,
                                r = 0 === a.scrollLeft && e.deltaX < 0,
                                i = a.scrollLeft === a.scrollWidth - a.clientWidth && e.deltaX > 0;
                            if (!(t && 0 !== e.deltaX && !(r || i))) return;
                            e.preventDefault(), a.scrollLeft += e.deltaX
                        }
                    };
                    return (0, aS.callAll)(a && (0, ax.addDomEvent)(a, "wheel", i, {
                        passive: !1
                    }), r && (0, ax.addDomEvent)(r, "wheel", i, {
                        passive: !1
                    }))
                },
                trackPointerMove(e) {
                    let {
                        scope: t,
                        send: a,
                        refs: r
                    } = e, i = t.getDoc(), o = r.get("orientation");
                    return (0, ax.trackPointerMove)(i, {
                        onPointerMove(e) {
                            let {
                                point: t
                            } = e;
                            a({
                                type: "thumb.pointermove",
                                orientation: o,
                                point: t
                            })
                        },
                        onPointerUp() {
                            a({
                                type: "thumb.pointerup",
                                orientation: o
                            })
                        }
                    })
                }
            }
        }
    });
    var nB = (0, aI.createProps)()(["dir", "getRootNode", "ids", "id"]);
    (0, aS.createSplitProps)(nB);
    let nH = (0, tB.defineSlotRecipe)({
            className: "chakra-scroll-area",
            slots: nR.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    "--scrollbar-margin": "2px",
                    "--scrollbar-click-area": "calc(var(--scrollbar-size) + calc(var(--scrollbar-margin) * 2))"
                },
                viewport: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    borderRadius: "inherit",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                },
                content: {
                    minWidth: "100%"
                },
                scrollbar: {
                    display: "flex",
                    userSelect: "none",
                    touchAction: "none",
                    borderRadius: "full",
                    colorPalette: "gray",
                    transition: "opacity 150ms 300ms",
                    position: "relative",
                    margin: "var(--scrollbar-margin)",
                    "&:not([data-overflow-x], [data-overflow-y])": {
                        display: "none"
                    },
                    bg: "{colors.colorPalette.solid/10}",
                    "--thumb-bg": "{colors.colorPalette.solid/25}",
                    "&:is(:hover, :active)": {
                        "--thumb-bg": "{colors.colorPalette.solid/50}"
                    },
                    _before: {
                        content: '""',
                        position: "absolute"
                    },
                    _vertical: {
                        width: "var(--scrollbar-size)",
                        flexDirection: "column",
                        "&::before": {
                            width: "var(--scrollbar-click-area)",
                            height: "100%",
                            insetInlineStart: "calc(var(--scrollbar-margin) * -1)"
                        }
                    },
                    _horizontal: {
                        height: "var(--scrollbar-size)",
                        flexDirection: "row",
                        "&::before": {
                            height: "var(--scrollbar-click-area)",
                            width: "100%",
                            top: "calc(var(--scrollbar-margin) * -1)"
                        }
                    }
                },
                thumb: {
                    borderRadius: "inherit",
                    bg: "var(--thumb-bg)",
                    transition: "backgrounds",
                    _vertical: {
                        width: "full"
                    },
                    _horizontal: {
                        height: "full"
                    }
                },
                corner: {
                    bg: "bg.muted",
                    margin: "var(--scrollbar-margin)",
                    opacity: 0,
                    transition: "opacity 150ms 300ms",
                    "&[data-hover]": {
                        transitionDelay: "0ms",
                        opacity: 1
                    }
                }
            },
            variants: {
                variant: {
                    hover: {
                        scrollbar: {
                            opacity: "0",
                            "&[data-hover], &[data-scrolling]": {
                                opacity: "1",
                                transitionDuration: "faster",
                                transitionDelay: "0ms"
                            }
                        }
                    },
                    always: {
                        scrollbar: {
                            opacity: "1"
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            "--scrollbar-size": "sizes.1"
                        }
                    },
                    sm: {
                        root: {
                            "--scrollbar-size": "sizes.1.5"
                        }
                    },
                    md: {
                        root: {
                            "--scrollbar-size": "sizes.2"
                        }
                    },
                    lg: {
                        root: {
                            "--scrollbar-size": "sizes.3"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "hover"
            }
        }),
        nj = ic.anatomy.rename("segment-group");
    nj.build();
    let nU = (0, tB.defineSlotRecipe)({
            className: "chakra-segment-group",
            slots: nj.keys(),
            base: {
                root: {
                    "--segment-radius": "radii.l2",
                    "--segment-indicator-bg": {
                        _light: "colors.bg",
                        _dark: "colors.bg.emphasized"
                    },
                    "--segment-indicator-shadow": "shadows.sm",
                    borderRadius: "var(--segment-radius)",
                    display: "inline-flex",
                    boxShadow: "inset",
                    minW: "max-content",
                    textAlign: "center",
                    position: "relative",
                    isolation: "isolate",
                    bg: "bg.muted",
                    _vertical: {
                        flexDirection: "column"
                    }
                },
                item: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                    fontSize: "sm",
                    position: "relative",
                    color: "fg",
                    borderRadius: "var(--segment-radius)",
                    _disabled: {
                        opacity: "0.5"
                    },
                    "&:has(input:focus-visible)": {
                        focusRing: "outside"
                    },
                    _before: {
                        content: '""',
                        position: "absolute",
                        bg: "border",
                        transition: "opacity 0.2s"
                    },
                    _horizontal: {
                        _before: {
                            insetInlineStart: 0,
                            insetBlock: "1.5",
                            width: "1px"
                        }
                    },
                    _vertical: {
                        _before: {
                            insetBlockStart: 0,
                            insetInline: "1.5",
                            height: "1px"
                        }
                    },
                    "& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type": {
                        _before: {
                            opacity: "0"
                        }
                    },
                    "&[data-state=checked][data-ssr]": {
                        shadow: "sm",
                        bg: "bg",
                        borderRadius: "var(--segment-radius)"
                    }
                },
                indicator: {
                    shadow: "var(--segment-indicator-shadow)",
                    pos: "absolute",
                    bg: "var(--segment-indicator-bg)",
                    width: "var(--width)",
                    height: "var(--height)",
                    top: "var(--top)",
                    left: "var(--left)",
                    zIndex: -1,
                    borderRadius: "var(--segment-radius)"
                }
            },
            variants: {
                size: {
                    xs: {
                        item: {
                            textStyle: "xs",
                            px: "3",
                            gap: "1",
                            height: "6"
                        }
                    },
                    sm: {
                        item: {
                            textStyle: "sm",
                            px: "4",
                            gap: "2",
                            height: "8"
                        }
                    },
                    md: {
                        item: {
                            textStyle: "sm",
                            px: "4",
                            gap: "2",
                            height: "10"
                        }
                    },
                    lg: {
                        item: {
                            textStyle: "md",
                            px: "4.5",
                            gap: "3",
                            height: "11"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        nG = (0, tB.defineSlotRecipe)({
            className: "chakra-slider",
            slots: ob.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1",
                    textStyle: "sm",
                    position: "relative",
                    isolation: "isolate",
                    touchAction: "none"
                },
                label: {
                    fontWeight: "medium",
                    textStyle: "sm"
                },
                control: {
                    display: "inline-flex",
                    alignItems: "center",
                    position: "relative"
                },
                track: {
                    overflow: "hidden",
                    borderRadius: "full",
                    flex: "1"
                },
                range: {
                    width: "inherit",
                    height: "inherit",
                    _disabled: {
                        bg: "border.emphasized!"
                    }
                },
                markerGroup: {
                    position: "absolute!",
                    zIndex: "1"
                },
                marker: {
                    "--marker-bg": {
                        base: "white",
                        _underValue: "colors.bg"
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: "calc(var(--slider-thumb-size) / 2)",
                    color: "fg.muted",
                    textStyle: "xs"
                },
                markerIndicator: {
                    width: "var(--slider-marker-size)",
                    height: "var(--slider-marker-size)",
                    borderRadius: "full",
                    bg: "var(--marker-bg)"
                },
                thumb: {
                    width: "var(--slider-thumb-size)",
                    height: "var(--slider-thumb-size)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    outline: 0,
                    zIndex: "2",
                    borderRadius: "full",
                    _focusVisible: {
                        ring: "2px",
                        ringColor: "colorPalette.focusRing",
                        ringOffset: "2px",
                        ringOffsetColor: "bg"
                    }
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            "--slider-thumb-size": "sizes.4",
                            "--slider-track-size": "sizes.1.5",
                            "--slider-marker-center": "6px",
                            "--slider-marker-size": "sizes.1",
                            "--slider-marker-inset": "3px"
                        }
                    },
                    md: {
                        root: {
                            "--slider-thumb-size": "sizes.5",
                            "--slider-track-size": "sizes.2",
                            "--slider-marker-center": "8px",
                            "--slider-marker-size": "sizes.1",
                            "--slider-marker-inset": "4px"
                        }
                    },
                    lg: {
                        root: {
                            "--slider-thumb-size": "sizes.6",
                            "--slider-track-size": "sizes.2.5",
                            "--slider-marker-center": "9px",
                            "--slider-marker-size": "sizes.1.5",
                            "--slider-marker-inset": "5px"
                        }
                    }
                },
                variant: {
                    outline: {
                        track: {
                            shadow: "inset",
                            bg: "bg.emphasized/72"
                        },
                        range: {
                            bg: "colorPalette.solid"
                        },
                        thumb: {
                            borderWidth: "2px",
                            borderColor: "colorPalette.solid",
                            bg: "bg",
                            _disabled: {
                                bg: "border.emphasized",
                                borderColor: "border.emphasized"
                            }
                        }
                    },
                    solid: {
                        track: {
                            bg: "colorPalette.subtle",
                            _disabled: {
                                bg: "bg.muted"
                            }
                        },
                        range: {
                            bg: "colorPalette.solid"
                        },
                        thumb: {
                            bg: "colorPalette.solid",
                            _disabled: {
                                bg: "border.emphasized"
                            }
                        }
                    }
                },
                orientation: {
                    vertical: {
                        root: {
                            display: "inline-flex"
                        },
                        control: {
                            flexDirection: "column",
                            height: "100%",
                            minWidth: "var(--slider-thumb-size)",
                            "&[data-has-mark-label], &:has(.chakra-slider__marker-label)": {
                                marginEnd: "4"
                            }
                        },
                        track: {
                            width: "var(--slider-track-size)"
                        },
                        thumb: {
                            left: "50%",
                            translate: "-50% 0"
                        },
                        markerGroup: {
                            insetStart: "var(--slider-marker-center)",
                            insetBlock: "var(--slider-marker-inset)"
                        },
                        marker: {
                            flexDirection: "row"
                        }
                    },
                    horizontal: {
                        control: {
                            flexDirection: "row",
                            width: "100%",
                            minHeight: "var(--slider-thumb-size)",
                            "&[data-has-mark-label], &:has(.chakra-slider__marker-label)": {
                                marginBottom: "4"
                            }
                        },
                        track: {
                            height: "var(--slider-track-size)"
                        },
                        thumb: {
                            top: "50%",
                            translate: "0 -50%"
                        },
                        markerGroup: {
                            top: "var(--slider-marker-center)",
                            insetInline: "var(--slider-marker-inset)"
                        },
                        marker: {
                            flexDirection: "column"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline",
                orientation: "horizontal"
            }
        }),
        nq = (0, tB.defineSlotRecipe)({
            slots: oR.keys(),
            className: "splitter",
            base: {
                resizeTrigger: {
                    "--splitter-border-color": "colors.border",
                    "--splitter-thumb-color": "colors.bg",
                    "--splitter-thumb-size": "sizes.2",
                    "--splitter-thumb-inset": "calc(var(--splitter-thumb-size) * -0.5)",
                    "--splitter-border-size": "1px",
                    "--splitter-handle-size": "sizes.6",
                    outline: "0",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    _focus: {
                        "--splitter-border-color": "colors.border.emphasized",
                        "--splitter-thumb-color": "colors.colorPalette.subtle"
                    },
                    _dragging: {
                        "--splitter-thumb-color": "colors.colorPalette.focusRing"
                    },
                    _horizontal: {
                        minWidth: "var(--splitter-thumb-size)",
                        marginInline: "var(--splitter-thumb-inset)"
                    },
                    _vertical: {
                        minHeight: "var(--splitter-thumb-size)",
                        marginBlock: "var(--splitter-thumb-inset)"
                    }
                },
                resizeTriggerSeparator: {
                    position: "absolute",
                    bg: "var(--splitter-border-color)",
                    "[data-part='resize-trigger'][data-orientation=horizontal] &": {
                        insetInlineEnd: "calc(var(--splitter-thumb-size) * 0.5)",
                        insetBlock: "0",
                        insetInlineStart: "auto",
                        w: "var(--splitter-border-size)"
                    },
                    "[data-part='resize-trigger'][data-orientation=vertical] &": {
                        insetBlockEnd: "calc(var(--splitter-thumb-size) * 0.5)",
                        insetInline: "0",
                        insetBlockStart: "auto",
                        h: "var(--splitter-border-size)"
                    }
                },
                resizeTriggerIndicator: {
                    position: "relative",
                    rounded: "full",
                    bg: "var(--splitter-thumb-color)",
                    shadow: "xs",
                    borderWidth: "1px",
                    zIndex: "1",
                    "[data-part='resize-trigger'][data-orientation=horizontal] &": {
                        w: "full",
                        h: "var(--splitter-handle-size)"
                    },
                    "[data-part='resize-trigger'][data-orientation=vertical] &": {
                        w: "var(--splitter-handle-size)",
                        h: "full"
                    },
                    "[data-part='resize-trigger'][data-focus]:focus-visible &": {
                        outlineWidth: "2px",
                        outlineColor: "colorPalette.focusRing",
                        outlineStyle: "solid"
                    },
                    "[data-part='resize-trigger'][data-disabled] &": {
                        visibility: "hidden"
                    }
                }
            }
        }),
        nY = (0, tB.defineSlotRecipe)({
            className: "chakra-stat",
            slots: ox.keys(),
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1",
                    position: "relative",
                    flex: "1"
                },
                label: {
                    display: "inline-flex",
                    gap: "1.5",
                    alignItems: "center",
                    color: "fg.muted",
                    textStyle: "sm"
                },
                helpText: {
                    color: "fg.muted",
                    textStyle: "xs"
                },
                valueUnit: {
                    color: "fg.muted",
                    textStyle: "xs",
                    fontWeight: "initial",
                    letterSpacing: "initial"
                },
                valueText: {
                    verticalAlign: "baseline",
                    fontWeight: "semibold",
                    letterSpacing: "tight",
                    fontFeatureSettings: "pnum",
                    fontVariantNumeric: "proportional-nums",
                    display: "inline-flex",
                    gap: "1"
                },
                indicator: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginEnd: 1,
                    "& :where(svg)": {
                        w: "1em",
                        h: "1em"
                    },
                    "&[data-type=up]": {
                        color: "fg.success"
                    },
                    "&[data-type=down]": {
                        color: "fg.error"
                    }
                }
            },
            variants: {
                size: {
                    sm: {
                        valueText: {
                            textStyle: "xl"
                        }
                    },
                    md: {
                        valueText: {
                            textStyle: "2xl"
                        }
                    },
                    lg: {
                        valueText: {
                            textStyle: "3xl"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        nK = (0, tB.defineSlotRecipe)({
            className: "chakra-status",
            slots: oy.keys(),
            base: {
                root: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "2"
                },
                indicator: {
                    width: "0.64em",
                    height: "0.64em",
                    flexShrink: 0,
                    borderRadius: "full",
                    forcedColorAdjust: "none",
                    bg: "colorPalette.solid"
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            textStyle: "xs"
                        }
                    },
                    md: {
                        root: {
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            textStyle: "md"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md"
            }
        }),
        nX = (0, tB.defineSlotRecipe)({
            className: "chakra-steps",
            slots: oS.keys(),
            base: {
                root: {
                    display: "flex",
                    width: "full"
                },
                list: {
                    display: "flex",
                    justifyContent: "space-between",
                    "--steps-gutter": "spacing.3",
                    "--steps-thickness": "2px"
                },
                title: {
                    fontWeight: "medium",
                    color: "fg"
                },
                description: {
                    color: "fg.muted"
                },
                separator: {
                    bg: "border",
                    flex: "1"
                },
                indicator: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "full",
                    fontWeight: "medium",
                    width: "var(--steps-size)",
                    height: "var(--steps-size)",
                    _icon: {
                        flexShrink: "0",
                        width: "var(--steps-icon-size)",
                        height: "var(--steps-icon-size)"
                    }
                },
                item: {
                    position: "relative",
                    display: "flex",
                    gap: "3",
                    flex: "1 0 0",
                    "&:last-of-type": {
                        flex: "initial",
                        "& [data-part=separator]": {
                            display: "none"
                        }
                    }
                },
                trigger: {
                    display: "flex",
                    alignItems: "center",
                    gap: "3",
                    textAlign: "start",
                    focusVisibleRing: "outside",
                    borderRadius: "l2"
                },
                content: {
                    focusVisibleRing: "outside"
                }
            },
            variants: {
                orientation: {
                    vertical: {
                        root: {
                            flexDirection: "row",
                            height: "100%"
                        },
                        list: {
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        separator: {
                            position: "absolute",
                            width: "var(--steps-thickness)",
                            height: "100%",
                            maxHeight: "calc(100% - var(--steps-size) - var(--steps-gutter) * 2)",
                            top: "calc(var(--steps-size) + var(--steps-gutter))",
                            insetStart: "calc(var(--steps-size) / 2 - 1px)"
                        },
                        item: {
                            alignItems: "flex-start"
                        }
                    },
                    horizontal: {
                        root: {
                            flexDirection: "column",
                            width: "100%"
                        },
                        list: {
                            flexDirection: "row",
                            alignItems: "center"
                        },
                        separator: {
                            width: "100%",
                            height: "var(--steps-thickness)",
                            marginX: "var(--steps-gutter)"
                        },
                        item: {
                            alignItems: "center"
                        }
                    }
                },
                variant: {
                    solid: {
                        indicator: {
                            _incomplete: {
                                borderWidth: "var(--steps-thickness)"
                            },
                            _current: {
                                bg: "colorPalette.muted",
                                borderWidth: "var(--steps-thickness)",
                                borderColor: "colorPalette.solid",
                                color: "colorPalette.fg"
                            },
                            _complete: {
                                bg: "colorPalette.solid",
                                borderColor: "colorPalette.solid",
                                color: "colorPalette.contrast"
                            }
                        },
                        separator: {
                            _complete: {
                                bg: "colorPalette.solid"
                            }
                        }
                    },
                    subtle: {
                        indicator: {
                            _incomplete: {
                                bg: "bg.muted"
                            },
                            _current: {
                                bg: "colorPalette.muted",
                                color: "colorPalette.fg"
                            },
                            _complete: {
                                bg: "colorPalette.emphasized",
                                color: "colorPalette.fg"
                            }
                        },
                        separator: {
                            _complete: {
                                bg: "colorPalette.emphasized"
                            }
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            gap: "2.5"
                        },
                        list: {
                            "--steps-size": "sizes.6",
                            "--steps-icon-size": "sizes.3.5",
                            textStyle: "xs"
                        },
                        title: {
                            textStyle: "sm"
                        }
                    },
                    sm: {
                        root: {
                            gap: "3"
                        },
                        list: {
                            "--steps-size": "sizes.8",
                            "--steps-icon-size": "sizes.4",
                            textStyle: "xs"
                        },
                        title: {
                            textStyle: "sm"
                        }
                    },
                    md: {
                        root: {
                            gap: "4"
                        },
                        list: {
                            "--steps-size": "sizes.10",
                            "--steps-icon-size": "sizes.4",
                            textStyle: "sm"
                        },
                        title: {
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            gap: "6"
                        },
                        list: {
                            "--steps-size": "sizes.11",
                            "--steps-icon-size": "sizes.5",
                            textStyle: "md"
                        },
                        title: {
                            textStyle: "md"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "solid",
                orientation: "horizontal"
            }
        }),
        n$ = (0, tB.defineSlotRecipe)({
            slots: ok.keys(),
            className: "chakra-switch",
            base: {
                root: {
                    display: "inline-flex",
                    gap: "2.5",
                    alignItems: "center",
                    position: "relative",
                    verticalAlign: "middle",
                    "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
                    "--switch-x": {
                        base: "var(--switch-diff)",
                        _rtl: "calc(var(--switch-diff) * -1)"
                    }
                },
                label: {
                    lineHeight: "1",
                    userSelect: "none",
                    fontSize: "sm",
                    fontWeight: "medium",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                indicator: {
                    position: "absolute",
                    height: "var(--switch-height)",
                    width: "var(--switch-height)",
                    fontSize: "var(--switch-indicator-font-size)",
                    fontWeight: "medium",
                    flexShrink: 0,
                    userSelect: "none",
                    display: "grid",
                    placeContent: "center",
                    transition: "inset-inline-start 0.12s ease",
                    insetInlineStart: "calc(var(--switch-x) - 2px)",
                    _checked: {
                        insetInlineStart: "2px"
                    }
                },
                control: {
                    display: "inline-flex",
                    gap: "0.5rem",
                    flexShrink: 0,
                    justifyContent: "flex-start",
                    cursor: "switch",
                    borderRadius: "full",
                    position: "relative",
                    width: "var(--switch-width)",
                    height: "var(--switch-height)",
                    transition: "backgrounds",
                    _disabled: {
                        opacity: "0.5",
                        cursor: "not-allowed"
                    },
                    _invalid: {
                        outline: "2px solid",
                        outlineColor: "border.error",
                        outlineOffset: "2px"
                    }
                },
                thumb: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transitionProperty: "translate",
                    transitionDuration: "fast",
                    borderRadius: "inherit",
                    _checked: {
                        translate: "var(--switch-x) 0"
                    }
                }
            },
            variants: {
                variant: {
                    solid: {
                        control: {
                            borderRadius: "full",
                            bg: "bg.emphasized",
                            focusVisibleRing: "outside",
                            _checked: {
                                bg: "colorPalette.solid"
                            }
                        },
                        thumb: {
                            bg: "white",
                            width: "var(--switch-height)",
                            height: "var(--switch-height)",
                            scale: "0.8",
                            boxShadow: "sm",
                            _checked: {
                                bg: "colorPalette.contrast"
                            }
                        }
                    },
                    raised: {
                        control: {
                            borderRadius: "full",
                            height: "calc(var(--switch-height) / 2)",
                            bg: "bg.muted",
                            boxShadow: "inset",
                            _checked: {
                                bg: "colorPalette.solid/60"
                            }
                        },
                        thumb: {
                            width: "var(--switch-height)",
                            height: "var(--switch-height)",
                            position: "relative",
                            top: "calc(var(--switch-height) * -0.25)",
                            bg: "white",
                            boxShadow: "xs",
                            focusVisibleRing: "outside",
                            _checked: {
                                bg: "colorPalette.solid"
                            }
                        }
                    }
                },
                size: {
                    xs: {
                        root: {
                            "--switch-width": "sizes.6",
                            "--switch-height": "sizes.3",
                            "--switch-indicator-font-size": "fontSizes.xs"
                        }
                    },
                    sm: {
                        root: {
                            "--switch-width": "sizes.8",
                            "--switch-height": "sizes.4",
                            "--switch-indicator-font-size": "fontSizes.xs"
                        }
                    },
                    md: {
                        root: {
                            "--switch-width": "sizes.10",
                            "--switch-height": "sizes.5",
                            "--switch-indicator-font-size": "fontSizes.sm"
                        }
                    },
                    lg: {
                        root: {
                            "--switch-width": "sizes.12",
                            "--switch-height": "sizes.6",
                            "--switch-indicator-font-size": "fontSizes.md"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "solid",
                size: "md"
            }
        }),
        nZ = (0, tB.defineSlotRecipe)({
            className: "chakra-table",
            slots: oC.keys(),
            base: {
                root: {
                    fontVariantNumeric: "lining-nums tabular-nums",
                    borderCollapse: "collapse",
                    width: "full",
                    textAlign: "start",
                    verticalAlign: "top"
                },
                row: {
                    _selected: {
                        bg: "colorPalette.subtle"
                    }
                },
                cell: {
                    textAlign: "start",
                    alignItems: "center"
                },
                columnHeader: {
                    fontWeight: "medium",
                    textAlign: "start",
                    color: "fg"
                },
                caption: {
                    fontWeight: "medium",
                    textStyle: "xs"
                },
                footer: {
                    fontWeight: "medium"
                }
            },
            variants: {
                interactive: {
                    true: {
                        body: {
                            "& tr": {
                                _hover: {
                                    bg: "colorPalette.subtle"
                                }
                            }
                        }
                    }
                },
                stickyHeader: {
                    true: {
                        header: {
                            "& :where(tr)": {
                                top: "var(--table-sticky-offset, 0)",
                                position: "sticky",
                                zIndex: 1
                            }
                        }
                    }
                },
                striped: {
                    true: {
                        row: {
                            "&:nth-of-type(odd) td": {
                                bg: "bg.muted"
                            }
                        }
                    }
                },
                showColumnBorder: {
                    true: {
                        columnHeader: {
                            "&:not(:last-of-type)": {
                                borderInlineEndWidth: "1px"
                            }
                        },
                        cell: {
                            "&:not(:last-of-type)": {
                                borderInlineEndWidth: "1px"
                            }
                        }
                    }
                },
                variant: {
                    line: {
                        columnHeader: {
                            borderBottomWidth: "1px"
                        },
                        cell: {
                            borderBottomWidth: "1px"
                        },
                        row: {
                            bg: "bg"
                        }
                    },
                    outline: {
                        root: {
                            boxShadow: "0 0 0 1px {colors.border}"
                        },
                        columnHeader: {
                            borderBottomWidth: "1px"
                        },
                        header: {
                            bg: "bg.muted"
                        },
                        row: {
                            "&:not(:last-of-type)": {
                                borderBottomWidth: "1px"
                            }
                        },
                        footer: {
                            borderTopWidth: "1px"
                        }
                    }
                },
                size: {
                    sm: {
                        root: {
                            textStyle: "sm"
                        },
                        columnHeader: {
                            px: "2",
                            py: "2"
                        },
                        cell: {
                            px: "2",
                            py: "2"
                        }
                    },
                    md: {
                        root: {
                            textStyle: "sm"
                        },
                        columnHeader: {
                            px: "3",
                            py: "3"
                        },
                        cell: {
                            px: "3",
                            py: "3"
                        }
                    },
                    lg: {
                        root: {
                            textStyle: "md"
                        },
                        columnHeader: {
                            px: "4",
                            py: "3"
                        },
                        cell: {
                            px: "4",
                            py: "3"
                        }
                    }
                }
            },
            defaultVariants: {
                variant: "line",
                size: "md"
            }
        }),
        nJ = (0, tB.defineSlotRecipe)({
            slots: ow.keys(),
            className: "chakra-tabs",
            base: {
                root: {
                    "--tabs-trigger-radius": "radii.l2",
                    "--tabs-indicator-shadow": "shadows.xs",
                    "--tabs-indicator-bg": "colors.bg",
                    position: "relative",
                    _horizontal: {
                        display: "block"
                    },
                    _vertical: {
                        display: "flex"
                    }
                },
                list: {
                    display: "inline-flex",
                    position: "relative",
                    isolation: "isolate",
                    minH: "var(--tabs-height)",
                    _horizontal: {
                        flexDirection: "row"
                    },
                    _vertical: {
                        flexDirection: "column"
                    }
                },
                trigger: {
                    outline: "0",
                    minW: "var(--tabs-height)",
                    height: "var(--tabs-height)",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "medium",
                    position: "relative",
                    cursor: "button",
                    gap: "2",
                    _focusVisible: {
                        zIndex: 1,
                        outline: "2px solid",
                        outlineColor: "colorPalette.focusRing"
                    },
                    _disabled: {
                        cursor: "not-allowed",
                        opacity: .5
                    }
                },
                content: {
                    focusVisibleRing: "inside",
                    _horizontal: {
                        width: "100%",
                        pt: "var(--tabs-content-padding)"
                    },
                    _vertical: {
                        height: "100%",
                        ps: "var(--tabs-content-padding)"
                    }
                },
                indicator: {
                    width: "var(--width)",
                    height: "var(--height)",
                    borderRadius: "var(--tabs-trigger-radius)",
                    bg: "var(--tabs-indicator-bg)",
                    shadow: "var(--tabs-indicator-shadow)",
                    zIndex: -1
                }
            },
            variants: {
                fitted: {
                    true: {
                        list: {
                            display: "flex"
                        },
                        trigger: {
                            flex: 1,
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    }
                },
                justify: {
                    start: {
                        list: {
                            justifyContent: "flex-start"
                        }
                    },
                    center: {
                        list: {
                            justifyContent: "center"
                        }
                    },
                    end: {
                        list: {
                            justifyContent: "flex-end"
                        }
                    }
                },
                size: {
                    sm: {
                        root: {
                            "--tabs-height": "sizes.9",
                            "--tabs-content-padding": "spacing.3"
                        },
                        trigger: {
                            py: "1",
                            px: "3",
                            textStyle: "sm"
                        }
                    },
                    md: {
                        root: {
                            "--tabs-height": "sizes.10",
                            "--tabs-content-padding": "spacing.4"
                        },
                        trigger: {
                            py: "2",
                            px: "4",
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            "--tabs-height": "sizes.11",
                            "--tabs-content-padding": "spacing.4.5"
                        },
                        trigger: {
                            py: "2",
                            px: "4.5",
                            textStyle: "md"
                        }
                    }
                },
                variant: {
                    line: {
                        list: {
                            display: "flex",
                            borderColor: "border",
                            _horizontal: {
                                borderBottomWidth: "1px"
                            },
                            _vertical: {
                                borderEndWidth: "1px"
                            }
                        },
                        trigger: {
                            color: "fg.muted",
                            _disabled: {
                                _active: {
                                    bg: "initial"
                                }
                            },
                            _selected: {
                                color: "fg",
                                _horizontal: {
                                    layerStyle: "indicator.bottom",
                                    "--indicator-offset-y": "-1px",
                                    "--indicator-color": "colors.colorPalette.solid"
                                },
                                _vertical: {
                                    layerStyle: "indicator.end",
                                    "--indicator-offset-x": "-1px"
                                }
                            }
                        }
                    },
                    subtle: {
                        trigger: {
                            borderRadius: "var(--tabs-trigger-radius)",
                            color: "fg.muted",
                            _selected: {
                                bg: "colorPalette.subtle",
                                color: "colorPalette.fg"
                            }
                        }
                    },
                    enclosed: {
                        list: {
                            bg: "bg.muted",
                            padding: "1",
                            borderRadius: "l3",
                            minH: "calc(var(--tabs-height) - 4px)"
                        },
                        trigger: {
                            justifyContent: "center",
                            color: "fg.muted",
                            borderRadius: "var(--tabs-trigger-radius)",
                            _selected: {
                                bg: "bg",
                                color: "colorPalette.fg",
                                shadow: "xs"
                            }
                        }
                    },
                    outline: {
                        list: {
                            "--line-thickness": "1px",
                            "--line-offset": "calc(var(--line-thickness) * -1)",
                            borderColor: "border",
                            display: "flex",
                            _horizontal: {
                                _before: {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "0px",
                                    width: "100%",
                                    borderBottomWidth: "var(--line-thickness)",
                                    borderBottomColor: "border"
                                }
                            },
                            _vertical: {
                                _before: {
                                    content: '""',
                                    position: "absolute",
                                    insetInline: "var(--line-offset)",
                                    height: "calc(100% - calc(var(--line-thickness) * 2))",
                                    borderEndWidth: "var(--line-thickness)",
                                    borderEndColor: "border"
                                }
                            }
                        },
                        trigger: {
                            color: "fg.muted",
                            borderWidth: "1px",
                            borderColor: "transparent",
                            _selected: {
                                bg: "currentBg",
                                color: "colorPalette.fg"
                            },
                            _horizontal: {
                                borderTopRadius: "var(--tabs-trigger-radius)",
                                marginBottom: "var(--line-offset)",
                                marginEnd: {
                                    _notLast: "var(--line-offset)"
                                },
                                _selected: {
                                    borderColor: "border",
                                    borderBottomColor: "transparent"
                                }
                            },
                            _vertical: {
                                borderStartRadius: "var(--tabs-trigger-radius)",
                                marginEnd: "var(--line-offset)",
                                marginBottom: {
                                    _notLast: "var(--line-offset)"
                                },
                                _selected: {
                                    borderColor: "border",
                                    borderEndColor: "transparent"
                                }
                            }
                        }
                    },
                    plain: {
                        trigger: {
                            color: "fg.muted",
                            _selected: {
                                color: "colorPalette.fg"
                            },
                            borderRadius: "var(--tabs-trigger-radius)",
                            "&[data-selected][data-ssr]": {
                                bg: "var(--tabs-indicator-bg)",
                                shadow: "var(--tabs-indicator-shadow)",
                                borderRadius: "var(--tabs-trigger-radius)"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "line"
            }
        }),
        nQ = null == (ec = t5.variants) ? void 0 : ec.variant,
        n0 = (0, tB.defineSlotRecipe)({
            slots: oE.keys(),
            className: "chakra-tag",
            base: {
                root: {
                    display: "inline-flex",
                    alignItems: "center",
                    verticalAlign: "top",
                    maxWidth: "100%",
                    userSelect: "none",
                    borderRadius: "l2",
                    focusVisibleRing: "outside"
                },
                label: {
                    lineClamp: "1"
                },
                closeTrigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    outline: "0",
                    borderRadius: "l1",
                    color: "currentColor",
                    focusVisibleRing: "inside",
                    focusRingWidth: "2px"
                },
                startElement: {
                    flexShrink: 0,
                    boxSize: "var(--tag-element-size)",
                    ms: "var(--tag-element-offset)",
                    "&:has([data-scope=avatar])": {
                        boxSize: "var(--tag-avatar-size)",
                        ms: "calc(var(--tag-element-offset) * 1.5)"
                    },
                    _icon: {
                        boxSize: "100%"
                    }
                },
                endElement: {
                    flexShrink: 0,
                    boxSize: "var(--tag-element-size)",
                    me: "var(--tag-element-offset)",
                    _icon: {
                        boxSize: "100%"
                    },
                    "&:has(button)": {
                        ms: "calc(var(--tag-element-offset) * -1)"
                    }
                }
            },
            variants: {
                size: {
                    sm: {
                        root: {
                            px: "1.5",
                            minH: "4.5",
                            gap: "1",
                            "--tag-avatar-size": "spacing.3",
                            "--tag-element-size": "spacing.3",
                            "--tag-element-offset": "-2px"
                        },
                        label: {
                            textStyle: "xs"
                        }
                    },
                    md: {
                        root: {
                            px: "1.5",
                            minH: "5",
                            gap: "1",
                            "--tag-avatar-size": "spacing.3.5",
                            "--tag-element-size": "spacing.3.5",
                            "--tag-element-offset": "-2px"
                        },
                        label: {
                            textStyle: "xs"
                        }
                    },
                    lg: {
                        root: {
                            px: "2",
                            minH: "6",
                            gap: "1.5",
                            "--tag-avatar-size": "spacing.4.5",
                            "--tag-element-size": "spacing.4",
                            "--tag-element-offset": "-3px"
                        },
                        label: {
                            textStyle: "sm"
                        }
                    },
                    xl: {
                        root: {
                            px: "2.5",
                            minH: "8",
                            gap: "1.5",
                            "--tag-avatar-size": "spacing.6",
                            "--tag-element-size": "spacing.4.5",
                            "--tag-element-offset": "-4px"
                        },
                        label: {
                            textStyle: "sm"
                        }
                    }
                },
                variant: {
                    subtle: {
                        root: null == nQ ? void 0 : nQ.subtle
                    },
                    solid: {
                        root: null == nQ ? void 0 : nQ.solid
                    },
                    outline: {
                        root: null == nQ ? void 0 : nQ.outline
                    },
                    surface: {
                        root: null == nQ ? void 0 : nQ.surface
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "surface"
            }
        });
    var n1 = e.i(101759),
        n2 = "__live-region__",
        n5 = (0, av.createAnatomy)("tagsInput").parts("root", "label", "control", "input", "clearTrigger", "item", "itemPreview", "itemInput", "itemText", "itemDeleteTrigger");
    n5.build();
    var n3 = (e, t) => {
            var a, r, i;
            return null != (i = null == (r = e.ids) || null == (a = r.item) ? void 0 : a.call(r, t)) ? i : "tags-input:".concat(e.id, ":tag:").concat(t.value, ":").concat(t.index)
        },
        n4 = (e, t) => e.getById("".concat(t, ":input")),
        n6 = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.root) ? a : "tags-input:".concat(e.id))
        },
        n8 = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.input) ? a : "tags-input:".concat(e.id, ":input"))
        },
        n7 = e => {
            var t, a;
            return e.getById(null != (a = null == (t = e.ids) ? void 0 : t.hiddenInput) ? a : "tags-input:".concat(e.id, ":hidden-input"))
        },
        n9 = e => (0, ax.queryAll)(n6(e), "[data-part=item-preview]:not([data-disabled])"),
        se = (e, t) => (0, ax.indexOfId)(n9(e), t),
        {
            and: st,
            not: sa,
            or: sr
        } = (0, ak.createGuards)();
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                dir: "ltr",
                addOnPaste: !1,
                editable: !0,
                validate: () => !0,
                delimiter: ",",
                defaultValue: [],
                defaultInputValue: "",
                max: 1 / 0,
                ...t,
                translations: {
                    clearTriggerLabel: "Clear all tags",
                    deleteTagTriggerLabel: e => "Delete tag ".concat(e),
                    tagAdded: e => "Added tag ".concat(e),
                    tagsPasted: e => "Pasted ".concat(e.length, " tags"),
                    tagEdited: e => "Editing tag ".concat(e, ". Press enter to save or escape to cancel."),
                    tagUpdated: e => "Tag update to ".concat(e),
                    tagDeleted: e => "Tag ".concat(e, " deleted"),
                    tagSelected: e => "Tag ".concat(e, " selected. Press enter to edit, delete or backspace to remove."),
                    ...t.translations
                }
            }
        },
        initialState(e) {
            let {
                prop: t
            } = e;
            return t("autoFocus") ? "focused:input" : "idle"
        },
        refs: () => ({
            liveRegion: null,
            log: {
                current: null,
                prev: null
            }
        }),
        context(e) {
            let {
                bindable: t,
                prop: a
            } = e;
            return {
                value: t(() => ({
                    defaultValue: a("defaultValue"),
                    value: a("value"),
                    isEqual: aS.isEqual,
                    hash: e => e.join(", "),
                    onChange(e) {
                        var t;
                        null == (t = a("onValueChange")) || t({
                            value: e
                        })
                    }
                })),
                inputValue: t(() => ({
                    sync: !0,
                    defaultValue: a("defaultInputValue"),
                    value: a("inputValue"),
                    onChange(e) {
                        var t;
                        null == (t = a("onInputValueChange")) || t({
                            inputValue: e
                        })
                    }
                })),
                fieldsetDisabled: t(() => ({
                    defaultValue: !1
                })),
                editedTagValue: t(() => ({
                    defaultValue: ""
                })),
                editedTagId: t(() => ({
                    defaultValue: null
                })),
                editedTagIndex: t(() => ({
                    defaultValue: null,
                    sync: !0
                })),
                highlightedTagId: t(() => ({
                    defaultValue: null,
                    sync: !0,
                    onChange(e) {
                        var t;
                        null == (t = a("onHighlightChange")) || t({
                            highlightedValue: e
                        })
                    }
                }))
            }
        },
        computed: {
            count: e => {
                let {
                    context: t
                } = e;
                return t.get("value").length
            },
            valueAsString: e => {
                let {
                    context: t
                } = e;
                return t.hash("value")
            },
            trimmedInputValue: e => {
                let {
                    context: t
                } = e;
                return t.get("inputValue").trim()
            },
            isDisabled: e => {
                let {
                    prop: t
                } = e;
                return !!t("disabled")
            },
            isInteractive: e => {
                let {
                    prop: t
                } = e;
                return !(t("readOnly") || t("disabled"))
            },
            isAtMax: e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return t.get("value").length === a("max")
            },
            isOverflowing: e => {
                let {
                    context: t,
                    prop: a
                } = e;
                return t.get("value").length > a("max")
            }
        },
        watch(e) {
            let {
                track: t,
                context: a,
                action: r,
                computed: i,
                refs: o
            } = e;
            t([() => a.get("editedTagValue")], () => {
                r(["syncEditedTagInputValue"])
            }), t([() => a.get("inputValue")], () => {
                r(["syncInputValue"])
            }), t([() => a.get("highlightedTagId")], () => {
                r(["logHighlightedTag"])
            }), t([() => i("isOverflowing")], () => {
                r(["invokeOnInvalid"])
            }), t([() => JSON.stringify(o.get("log"))], () => {
                r(["announceLog"])
            })
        },
        effects: ["trackLiveRegion", "trackFormControlState"],
        exit: ["clearLog"],
        on: {
            DOUBLE_CLICK_TAG: {
                guard: "isTagEditable",
                target: "editing:tag",
                actions: ["setEditedId"]
            },
            POINTER_DOWN_TAG: {
                target: "navigating:tag",
                actions: ["highlightTag", "focusInput"]
            },
            CLICK_DELETE_TAG: {
                target: "focused:input",
                actions: ["deleteTag"]
            },
            SET_INPUT_VALUE: {
                actions: ["setInputValue"]
            },
            SET_VALUE: {
                actions: ["setValue"]
            },
            CLEAR_TAG: {
                actions: ["deleteTag"]
            },
            SET_VALUE_AT_INDEX: {
                actions: ["setValueAtIndex"]
            },
            CLEAR_VALUE: {
                actions: ["clearTags", "clearInputValue", "focusInput"]
            },
            ADD_TAG: {
                actions: ["addTag"]
            },
            INSERT_TAG: {
                guard: st(sr(sa("isAtMax"), "allowOverflow"), sa("isInputValueEmpty")),
                actions: ["addTag", "clearInputValue"]
            },
            EXTERNAL_BLUR: [{
                guard: "addOnBlur",
                actions: ["raiseInsertTagEvent"]
            }, {
                guard: "clearOnBlur",
                actions: ["clearInputValue"]
            }]
        },
        states: {
            idle: {
                on: {
                    FOCUS: {
                        target: "focused:input"
                    },
                    POINTER_DOWN: {
                        guard: sa("hasHighlightedTag"),
                        target: "focused:input"
                    }
                }
            },
            "focused:input": {
                tags: ["focused"],
                entry: ["focusInput", "clearHighlightedId"],
                effects: ["trackInteractOutside"],
                on: {
                    TYPE: {
                        actions: ["setInputValue"]
                    },
                    BLUR: [{
                        guard: "addOnBlur",
                        target: "idle",
                        actions: ["raiseInsertTagEvent"]
                    }, {
                        guard: "clearOnBlur",
                        target: "idle",
                        actions: ["clearInputValue"]
                    }, {
                        target: "idle"
                    }],
                    ENTER: {
                        actions: ["raiseInsertTagEvent"]
                    },
                    DELIMITER_KEY: {
                        actions: ["raiseInsertTagEvent"]
                    },
                    ARROW_LEFT: {
                        guard: st("hasTags", "isCaretAtStart"),
                        target: "navigating:tag",
                        actions: ["highlightLastTag"]
                    },
                    BACKSPACE: {
                        target: "navigating:tag",
                        guard: st("hasTags", "isCaretAtStart"),
                        actions: ["highlightLastTag"]
                    },
                    DELETE: {
                        guard: "hasHighlightedTag",
                        actions: ["deleteHighlightedTag", "highlightTagAtIndex"]
                    },
                    PASTE: [{
                        guard: "addOnPaste",
                        actions: ["setInputValue", "addTagFromPaste"]
                    }, {
                        actions: ["setInputValue"]
                    }]
                }
            },
            "navigating:tag": {
                tags: ["focused"],
                effects: ["trackInteractOutside"],
                on: {
                    ARROW_RIGHT: [{
                        guard: st("hasTags", "isCaretAtStart", sa("isLastTagHighlighted")),
                        actions: ["highlightNextTag"]
                    }, {
                        target: "focused:input"
                    }],
                    ARROW_LEFT: [{
                        guard: sa("isCaretAtStart"),
                        target: "focused:input"
                    }, {
                        actions: ["highlightPrevTag"]
                    }],
                    BLUR: {
                        target: "idle",
                        actions: ["clearHighlightedId"]
                    },
                    ENTER: {
                        guard: st("isTagEditable", "hasHighlightedTag"),
                        target: "editing:tag",
                        actions: ["setEditedId", "focusEditedTagInput"]
                    },
                    ARROW_DOWN: {
                        target: "focused:input"
                    },
                    ESCAPE: {
                        target: "focused:input"
                    },
                    TYPE: {
                        target: "focused:input",
                        actions: ["setInputValue"]
                    },
                    BACKSPACE: [{
                        guard: sa("isCaretAtStart"),
                        target: "focused:input"
                    }, {
                        guard: "isFirstTagHighlighted",
                        actions: ["deleteHighlightedTag", "highlightFirstTag"]
                    }, {
                        guard: "hasHighlightedTag",
                        actions: ["deleteHighlightedTag", "highlightPrevTag"]
                    }, {
                        actions: ["highlightLastTag"]
                    }],
                    DELETE: [{
                        guard: sa("isCaretAtStart"),
                        target: "focused:input"
                    }, {
                        target: "focused:input",
                        actions: ["deleteHighlightedTag", "highlightTagAtIndex"]
                    }],
                    PASTE: [{
                        guard: "addOnPaste",
                        target: "focused:input",
                        actions: ["setInputValue", "addTagFromPaste"]
                    }, {
                        target: "focused:input",
                        actions: ["setInputValue"]
                    }]
                }
            },
            "editing:tag": {
                tags: ["editing", "focused"],
                entry: ["focusEditedTagInput"],
                effects: ["autoResize"],
                on: {
                    TAG_INPUT_TYPE: {
                        actions: ["setEditedTagValue"]
                    },
                    TAG_INPUT_ESCAPE: {
                        target: "navigating:tag",
                        actions: ["clearEditedTagValue", "focusInput", "clearEditedId", "highlightTagAtIndex"]
                    },
                    TAG_INPUT_BLUR: [{
                        guard: "isInputRelatedTarget",
                        target: "navigating:tag",
                        actions: ["clearEditedTagValue", "clearHighlightedId", "clearEditedId"]
                    }, {
                        target: "idle",
                        actions: ["clearEditedTagValue", "clearHighlightedId", "clearEditedId", "raiseExternalBlurEvent"]
                    }],
                    TAG_INPUT_ENTER: [{
                        guard: "isEditedTagEmpty",
                        target: "navigating:tag",
                        actions: ["deleteHighlightedTag", "focusInput", "clearEditedId", "highlightTagAtIndex"]
                    }, {
                        target: "navigating:tag",
                        actions: ["submitEditedTagValue", "focusInput", "clearEditedId", "highlightTagAtIndex"]
                    }]
                }
            }
        },
        implementations: {
            guards: {
                isInputRelatedTarget: e => {
                    let {
                        scope: t,
                        event: a
                    } = e;
                    return a.relatedTarget === n8(t)
                },
                isAtMax: e => {
                    let {
                        computed: t
                    } = e;
                    return t("isAtMax")
                },
                hasHighlightedTag: e => {
                    let {
                        context: t
                    } = e;
                    return null != t.get("highlightedTagId")
                },
                isFirstTagHighlighted: e => {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    return n3(a, {
                        value: t.get("value")[0],
                        index: 0
                    }) === t.get("highlightedTagId")
                },
                isEditedTagEmpty: e => {
                    let {
                        context: t
                    } = e;
                    return "" === t.get("editedTagValue").trim()
                },
                isLastTagHighlighted: e => {
                    let {
                        context: t,
                        scope: a
                    } = e, r = t.get("value"), i = r.length - 1;
                    return n3(a, {
                        value: r[i],
                        index: i
                    }) === t.get("highlightedTagId")
                },
                isInputValueEmpty: e => {
                    let {
                        context: t
                    } = e;
                    return 0 === t.get("inputValue").trim().length
                },
                hasTags: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("value").length > 0
                },
                allowOverflow: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("allowOverflow")
                },
                autoFocus: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("autoFocus")
                },
                addOnBlur: e => {
                    let {
                        prop: t
                    } = e;
                    return "add" === t("blurBehavior")
                },
                clearOnBlur: e => {
                    let {
                        prop: t
                    } = e;
                    return "clear" === t("blurBehavior")
                },
                addOnPaste: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("addOnPaste")
                },
                isTagEditable: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("editable")
                },
                isCaretAtStart: e => {
                    let {
                        scope: t
                    } = e;
                    return (0, ax.isCaretAtStart)(n8(t))
                }
            },
            effects: {
                trackInteractOutside(e) {
                    let {
                        scope: t,
                        prop: a,
                        send: r
                    } = e;
                    return (0, rF.trackInteractOutside)(n8(t), {
                        exclude: e => (0, ax.queryAll)(n6(t), "[data-part=item]").some(t => (0, ax.contains)(t, e)),
                        onFocusOutside: a("onFocusOutside"),
                        onPointerDownOutside: a("onPointerDownOutside"),
                        onInteractOutside(e) {
                            var t;
                            null == (t = a("onInteractOutside")) || t(e), e.defaultPrevented || r({
                                type: "BLUR",
                                src: "interact-outside"
                            })
                        }
                    })
                },
                trackFormControlState(e) {
                    let {
                        context: t,
                        send: a,
                        scope: r
                    } = e;
                    return (0, ax.trackFormControl)(n7(r), {
                        onFieldsetDisabledChange(e) {
                            t.set("fieldsetDisabled", e)
                        },
                        onFormReset() {
                            a({
                                type: "SET_VALUE",
                                value: t.initial("value"),
                                src: "form-reset"
                            })
                        }
                    })
                },
                autoResize(e) {
                    let t, {
                        context: a,
                        prop: r,
                        scope: i
                    } = e;
                    return queueMicrotask(() => {
                        var e, o, l, n;
                        let s = a.get("editedTagValue"),
                            d = a.get("editedTagIndex");
                        if (!s || null == d || !r("editable")) return;
                        let c = (e = {
                            value: s,
                            index: d
                        }, i.getById(null != (n = null == (l = i.ids) || null == (o = l.itemInput) ? void 0 : o.call(l, e)) ? n : "".concat(n3(i, e), ":input")));
                        t = (0, n1.autoResizeInput)(c)
                    }), () => {
                        null == t || t()
                    }
                },
                trackLiveRegion(e) {
                    let {
                        scope: t,
                        refs: a
                    } = e, r = function() {
                        var e;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            {
                                level: a = "polite",
                                document: r = document,
                                root: i,
                                delay: o = 0
                            } = t,
                            l = null != (e = r.defaultView) ? e : window,
                            n = null != i ? i : r.body;
                        return {
                            announce: function(e, t) {
                                let i = r.getElementById(n2);
                                null == i || i.remove(), t = null != t ? t : o;
                                let s = r.createElement("span");
                                s.id = n2, s.dataset.liveAnnouncer = "true", s.setAttribute("aria-live", a), s.setAttribute("role", "assertive" !== a ? "status" : "alert"), Object.assign(s.style, {
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
                                }), n.appendChild(s), l.setTimeout(() => {
                                    s.textContent = e
                                }, t)
                            },
                            destroy: function() {
                                let e = r.getElementById(n2);
                                null == e || e.remove()
                            },
                            toJSON: () => n2
                        }
                    }({
                        level: "assertive",
                        document: t.getDoc()
                    });
                    return a.set("liveRegion", r), () => r.destroy()
                }
            },
            actions: {
                raiseInsertTagEvent(e) {
                    let {
                        send: t
                    } = e;
                    t({
                        type: "INSERT_TAG"
                    })
                },
                raiseExternalBlurEvent(e) {
                    let {
                        send: t,
                        event: a
                    } = e;
                    t({
                        type: "EXTERNAL_BLUR",
                        id: a.id
                    })
                },
                dispatchChangeEvent(e) {
                    var t;
                    let a, {
                        scope: r,
                        computed: i
                    } = e;
                    t = i("valueAsString"), (a = n7(r)) && (0, ax.dispatchInputValueEvent)(a, {
                        value: t
                    })
                },
                highlightNextTag(e) {
                    var t;
                    let {
                        context: a,
                        scope: r
                    } = e, i = a.get("highlightedTagId");
                    if (null == i) return;
                    let o = (0, ax.nextById)(n9(r), i, !1);
                    a.set("highlightedTagId", null != (t = null == o ? void 0 : o.id) ? t : null)
                },
                highlightFirstTag(e) {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    (0, ax.raf)(() => {
                        var e;
                        let r = n9(a)[0];
                        t.set("highlightedTagId", null != (e = null == r ? void 0 : r.id) ? e : null)
                    })
                },
                highlightLastTag(e) {
                    var t;
                    let {
                        context: a,
                        scope: r
                    } = e, i = n9(r)[n9(r).length - 1];
                    a.set("highlightedTagId", null != (t = null == i ? void 0 : i.id) ? t : null)
                },
                highlightPrevTag(e) {
                    var t;
                    let {
                        context: a,
                        scope: r
                    } = e, i = a.get("highlightedTagId");
                    if (null == i) return;
                    let o = (0, ax.prevById)(n9(r), i, !1);
                    a.set("highlightedTagId", null != (t = null == o ? void 0 : o.id) ? t : null)
                },
                highlightTag(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("highlightedTagId", a.id)
                },
                highlightTagAtIndex(e) {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    (0, ax.raf)(() => {
                        let e = t.get("editedTagIndex");
                        if (null == e) return;
                        let r = n9(a)[e];
                        null != r && (t.set("highlightedTagId", r.id), t.set("editedTagIndex", null))
                    })
                },
                deleteTag(e) {
                    let {
                        context: t,
                        scope: a,
                        event: r,
                        refs: i
                    } = e, o = se(a, r.id), l = t.get("value")[o], n = i.get("log");
                    i.set("log", {
                        prev: n.current,
                        current: {
                            type: "delete",
                            value: l
                        }
                    }), t.set("value", e => (0, aS.removeAt)(e, o))
                },
                deleteHighlightedTag(e) {
                    let {
                        context: t,
                        scope: a,
                        refs: r
                    } = e, i = t.get("highlightedTagId");
                    if (null == i) return;
                    let o = se(a, i);
                    t.set("editedTagIndex", o);
                    let l = t.get("value"),
                        n = r.get("log");
                    r.set("log", {
                        prev: n.current,
                        current: {
                            type: "delete",
                            value: l[o]
                        }
                    }), t.set("value", e => (0, aS.removeAt)(e, o))
                },
                setEditedId(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        scope: i
                    } = e, o = a.get("highlightedTagId"), l = null != (t = r.id) ? t : o;
                    a.set("editedTagId", l);
                    let n = se(i, l),
                        s = a.get("value")[n];
                    a.set("editedTagIndex", n), a.set("editedTagValue", s)
                },
                clearEditedId(e) {
                    let {
                        context: t
                    } = e;
                    t.set("editedTagId", null)
                },
                clearEditedTagValue(e) {
                    let {
                        context: t
                    } = e;
                    t.set("editedTagValue", "")
                },
                setEditedTagValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("editedTagValue", a.value)
                },
                submitEditedTagValue(e) {
                    let {
                        context: t,
                        scope: a,
                        refs: r
                    } = e, i = t.get("editedTagId");
                    if (!i) return;
                    let o = se(a, i);
                    t.set("value", e => {
                        let a = e.slice();
                        return a[o] = t.get("editedTagValue"), a
                    });
                    let l = r.get("log");
                    r.set("log", {
                        prev: l.current,
                        current: {
                            type: "update",
                            value: t.get("editedTagValue")
                        }
                    })
                },
                setValueAtIndex(e) {
                    let {
                        context: t,
                        event: a,
                        refs: r
                    } = e;
                    if (a.value) {
                        t.set("value", e => {
                            let t = e.slice();
                            return t[a.index] = a.value, t
                        });
                        let e = r.get("log");
                        r.set("log", {
                            prev: e.current,
                            current: {
                                type: "update",
                                value: a.value
                            }
                        })
                    } else(0, aS.warn)("You need to provide a value for the tag")
                },
                focusEditedTagInput(e) {
                    let {
                        context: t,
                        scope: a
                    } = e;
                    (0, ax.raf)(() => {
                        let e = t.get("editedTagId");
                        if (!e) return;
                        let r = n4(a, e);
                        null == r || r.select()
                    })
                },
                setInputValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("inputValue", a.value)
                },
                clearHighlightedId(e) {
                    let {
                        context: t
                    } = e;
                    t.set("highlightedTagId", null)
                },
                focusInput(e) {
                    let {
                        scope: t
                    } = e;
                    (0, ax.raf)(() => {
                        var e;
                        null == (e = n8(t)) || e.focus()
                    })
                },
                clearInputValue(e) {
                    let {
                        context: t
                    } = e;
                    (0, ax.raf)(() => {
                        t.set("inputValue", "")
                    })
                },
                syncInputValue(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = n8(a);
                    r && (0, ax.setElementValue)(r, t.get("inputValue"))
                },
                syncEditedTagInputValue(e) {
                    let {
                        context: t,
                        event: a,
                        scope: r
                    } = e, i = t.get("editedTagId") || t.get("highlightedTagId") || a.id;
                    if (null == i) return;
                    let o = n4(r, i);
                    o && (0, ax.setElementValue)(o, t.get("editedTagValue"))
                },
                addTag(e) {
                    var t, a, r;
                    let {
                        context: i,
                        event: o,
                        computed: l,
                        prop: n,
                        refs: s
                    } = e, d = null != (a = o.value) ? a : l("trimmedInputValue"), c = i.get("value");
                    if (null == (t = n("validate")) ? void 0 : t({
                            inputValue: d,
                            value: Array.from(c)
                        })) {
                        let e = (0, aS.uniq)(c.concat(d));
                        i.set("value", e);
                        let t = s.get("log");
                        s.set("log", {
                            prev: t.current,
                            current: {
                                type: "add",
                                value: d
                            }
                        })
                    } else null == (r = n("onValueInvalid")) || r({
                        reason: "invalidTag"
                    })
                },
                addTagFromPaste(e) {
                    let {
                        context: t,
                        computed: a,
                        prop: r,
                        refs: i
                    } = e;
                    (0, ax.raf)(() => {
                        var e, o;
                        let l = a("trimmedInputValue"),
                            n = t.get("value");
                        if (null == (e = r("validate")) ? void 0 : e({
                                inputValue: l,
                                value: Array.from(n)
                            })) {
                            let e = r("delimiter"),
                                a = e ? l.split(e).map(e => e.trim()) : [l],
                                o = (0, aS.uniq)(n.concat(...a));
                            t.set("value", o);
                            let s = i.get("log");
                            i.set("log", {
                                prev: s.current,
                                current: {
                                    type: "paste",
                                    values: a
                                }
                            })
                        } else null == (o = r("onValueInvalid")) || o({
                            reason: "invalidTag"
                        });
                        t.set("inputValue", "")
                    })
                },
                clearTags(e) {
                    let {
                        context: t,
                        refs: a
                    } = e;
                    t.set("value", []);
                    let r = a.get("log");
                    a.set("log", {
                        prev: r.current,
                        current: {
                            type: "clear"
                        }
                    })
                },
                setValue(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("value", a.value)
                },
                invokeOnInvalid(e) {
                    let {
                        prop: t,
                        computed: a
                    } = e;
                    if (a("isOverflowing")) {
                        var r;
                        null == (r = t("onValueInvalid")) || r({
                            reason: "rangeOverflow"
                        })
                    }
                },
                clearLog(e) {
                    let {
                        refs: t
                    } = e, a = t.get("log");
                    a.prev = a.current = null
                },
                logHighlightedTag(e) {
                    let {
                        refs: t,
                        context: a,
                        scope: r
                    } = e, i = a.get("highlightedTagId"), o = t.get("log");
                    if (null == i || !o.current) return;
                    let l = se(r, i),
                        n = a.get("value")[l],
                        s = t.get("log");
                    t.set("log", {
                        prev: s.current,
                        current: {
                            type: "select",
                            value: n
                        }
                    })
                },
                announceLog(e) {
                    let t, {
                            refs: a,
                            prop: r
                        } = e,
                        i = a.get("liveRegion"),
                        o = r("translations"),
                        l = a.get("log");
                    if (!l.current || null == i) return;
                    let {
                        current: n,
                        prev: s
                    } = l;
                    switch (n.type) {
                        case "add":
                            t = o.tagAdded(n.value);
                            break;
                        case "delete":
                            t = o.tagDeleted(n.value);
                            break;
                        case "update":
                            t = o.tagUpdated(n.value);
                            break;
                        case "paste":
                            t = o.tagsPasted(n.values);
                            break;
                        case "select":
                            t = o.tagSelected(n.value), (null == s ? void 0 : s.type) === "delete" ? t = "".concat(o.tagDeleted(s.value), ". ").concat(t) : (null == s ? void 0 : s.type) === "update" && (t = "".concat(o.tagUpdated(s.value), ". ").concat(t))
                    }
                    t && i.announce(t)
                }
            }
        }
    });
    var si = (0, aI.createProps)()(["addOnPaste", "allowOverflow", "autoFocus", "blurBehavior", "delimiter", "dir", "disabled", "editable", "form", "getRootNode", "id", "ids", "inputValue", "invalid", "max", "maxLength", "name", "onFocusOutside", "onHighlightChange", "onInputValueChange", "onInteractOutside", "onPointerDownOutside", "onValueChange", "onValueInvalid", "required", "readOnly", "translations", "validate", "value", "defaultValue", "defaultInputValue"]);
    (0, aS.createSplitProps)(si);
    var so = (0, aI.createProps)()(["index", "disabled", "value"]);
    (0, aS.createSplitProps)(so);
    let sl = (0, tB.defineSlotRecipe)({
            slots: n5.keys(),
            className: "tags-input",
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5",
                    width: "full"
                },
                label: {
                    fontWeight: "medium",
                    textStyle: "sm",
                    _disabled: {
                        opacity: "0.5"
                    }
                },
                control: {
                    "--focus-color": "colors.colorPalette.focusRing",
                    "--error-color": "colors.border.error",
                    minH: "var(--tags-input-height)",
                    "--input-height": "var(--tags-input-height)",
                    px: "var(--tags-input-px)",
                    py: "var(--tags-input-py)",
                    gap: "var(--tags-input-gap)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    borderRadius: "l2",
                    pos: "relative",
                    transitionProperty: "border-color, box-shadow",
                    transitionDuration: "normal",
                    _disabled: {
                        opacity: "0.5"
                    },
                    _invalid: {
                        borderColor: "var(--error-color)"
                    }
                },
                input: {
                    flex: "1",
                    minWidth: "20",
                    outline: "none",
                    bg: "transparent",
                    color: "fg",
                    px: "calc(var(--tags-input-item-px) / 1.25)",
                    height: "var(--tags-input-item-height)",
                    _readOnly: {
                        display: "none"
                    }
                },
                item: {
                    maxWidth: "100%",
                    minWidth: "0"
                },
                itemText: {
                    lineClamp: "1",
                    minWidth: "0"
                },
                itemInput: {
                    outline: "none",
                    bg: "transparent",
                    minWidth: "2ch",
                    color: "inherit",
                    px: "var(--tags-input-item-px)",
                    height: "var(--tags-input-item-height)"
                },
                itemPreview: {
                    height: "var(--tags-input-item-height)",
                    userSelect: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1",
                    rounded: "l1",
                    px: "var(--tags-input-item-px)",
                    maxWidth: "100%"
                },
                itemDeleteTrigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    boxSize: "calc(var(--tags-input-item-height) / 1.5)",
                    cursor: {
                        base: "button",
                        _disabled: "initial"
                    },
                    me: "-1",
                    opacity: "0.4",
                    _hover: {
                        opacity: "1"
                    },
                    "[data-highlighted] &": {
                        opacity: "1"
                    },
                    _icon: {
                        boxSize: "80%"
                    }
                },
                clearTrigger: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSize: "calc(var(--tags-input-item-height) / 1.5)",
                    cursor: {
                        base: "button",
                        _disabled: "initial"
                    },
                    color: "fg.muted",
                    focusVisibleRing: "inside",
                    focusRingWidth: "2px",
                    rounded: "l1",
                    _icon: {
                        boxSize: "5"
                    }
                }
            },
            variants: {
                size: {
                    xs: {
                        root: {
                            "--tags-input-height": "sizes.8",
                            "--tags-input-px": "spacing.1.5",
                            "--tags-input-py": "spacing.1",
                            "--tags-input-gap": "spacing.1",
                            "--tags-input-item-height": "sizes.6",
                            "--tags-input-item-px": "spacing.2",
                            textStyle: "xs"
                        }
                    },
                    sm: {
                        root: {
                            "--tags-input-height": "sizes.9",
                            "--tags-input-px": "spacing.1.5",
                            "--tags-input-py": "spacing.1",
                            "--tags-input-gap": "spacing.1",
                            "--tags-input-item-height": "sizes.6",
                            "--tags-input-item-px": "spacing.2",
                            textStyle: "sm"
                        }
                    },
                    md: {
                        root: {
                            "--tags-input-height": "sizes.10",
                            "--tags-input-px": "spacing.1.5",
                            "--tags-input-py": "spacing.1",
                            "--tags-input-gap": "spacing.1",
                            "--tags-input-item-height": "sizes.7",
                            "--tags-input-item-px": "spacing.2",
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            "--tags-input-height": "sizes.11",
                            "--tags-input-px": "spacing.1.5",
                            "--tags-input-py": "spacing.1",
                            "--tags-input-gap": "spacing.1",
                            "--tags-input-item-height": "sizes.8",
                            "--tags-input-item-px": "spacing.2",
                            textStyle: "md"
                        }
                    }
                },
                variant: {
                    outline: {
                        control: {
                            borderWidth: "1px",
                            bg: "bg",
                            _focus: {
                                outlineWidth: "1px",
                                outlineStyle: "solid",
                                outlineColor: "var(--focus-color)",
                                borderColor: "var(--focus-color)",
                                _invalid: {
                                    outlineColor: "var(--error-color)",
                                    borderColor: "var(--error-color)"
                                }
                            }
                        },
                        itemPreview: {
                            bg: "colorPalette.subtle",
                            _highlighted: {
                                bg: "colorPalette.muted"
                            }
                        }
                    },
                    subtle: {
                        control: {
                            bg: "bg.muted",
                            borderWidth: "1px",
                            borderColor: "transparent",
                            _focus: {
                                outlineWidth: "1px",
                                outlineStyle: "solid",
                                outlineColor: "var(--focus-color)",
                                borderColor: "var(--focus-color)",
                                _invalid: {
                                    outlineColor: "var(--error-color)",
                                    borderColor: "var(--error-color)"
                                }
                            }
                        },
                        itemPreview: {
                            bg: "bg",
                            borderWidth: "1px",
                            _highlighted: {
                                bg: "colorPalette.subtle",
                                borderColor: "colorPalette.emphasized"
                            }
                        }
                    },
                    flushed: {
                        control: {
                            borderRadius: "0",
                            px: "0",
                            bg: "transparent",
                            borderBottomWidth: "1px",
                            borderBottomColor: "border",
                            _focus: {
                                borderColor: "var(--focus-color)",
                                boxShadow: "0px 1px 0px 0px var(--focus-color)"
                            }
                        },
                        itemPreview: {
                            bg: "colorPalette.subtle",
                            _highlighted: {
                                bg: "colorPalette.muted"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "outline"
            }
        }),
        sn = (0, tB.defineSlotRecipe)({
            slots: oP.keys(),
            className: "chakra-timeline",
            base: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    width: "full",
                    "--timeline-thickness": "1px",
                    "--timeline-gutter": "4px"
                },
                item: {
                    "--timeline-content-gap": "spacing.6",
                    display: "flex",
                    position: "relative",
                    alignItems: "flex-start",
                    flexShrink: 0,
                    gap: "4",
                    _last: {
                        "--timeline-content-gap": "0"
                    }
                },
                separator: {
                    display: "var(--timeline-separator-display)",
                    position: "absolute",
                    borderStartWidth: "var(--timeline-thickness)",
                    ms: "calc(-1 * var(--timeline-thickness) / 2)",
                    insetInlineStart: "calc(var(--timeline-indicator-size) / 2)",
                    insetBlock: "0",
                    borderColor: "border"
                },
                indicator: {
                    outline: "2px solid {colors.bg}",
                    position: "relative",
                    flexShrink: "0",
                    boxSize: "var(--timeline-indicator-size)",
                    fontSize: "var(--timeline-font-size)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "full",
                    fontWeight: "medium"
                },
                connector: {
                    alignSelf: "stretch",
                    position: "relative"
                },
                content: {
                    pb: "var(--timeline-content-gap)",
                    display: "flex",
                    flexDirection: "column",
                    width: "full",
                    gap: "2"
                },
                title: {
                    display: "flex",
                    fontWeight: "medium",
                    flexWrap: "wrap",
                    gap: "1.5",
                    alignItems: "center",
                    mt: "var(--timeline-margin)"
                },
                description: {
                    color: "fg.muted",
                    textStyle: "xs"
                }
            },
            variants: {
                variant: {
                    subtle: {
                        indicator: {
                            bg: "colorPalette.muted"
                        }
                    },
                    solid: {
                        indicator: {
                            bg: "colorPalette.solid",
                            color: "colorPalette.contrast"
                        }
                    },
                    outline: {
                        indicator: {
                            bg: "currentBg",
                            borderWidth: "1px",
                            borderColor: "colorPalette.muted"
                        }
                    },
                    plain: {}
                },
                showLastSeparator: {
                    true: {
                        item: {
                            _last: {
                                "--timeline-separator-display": "initial"
                            }
                        }
                    },
                    false: {
                        item: {
                            _last: {
                                "--timeline-separator-display": "none"
                            }
                        }
                    }
                },
                size: {
                    sm: {
                        root: {
                            "--timeline-indicator-size": "sizes.4",
                            "--timeline-font-size": "fontSizes.2xs"
                        },
                        title: {
                            textStyle: "xs"
                        }
                    },
                    md: {
                        root: {
                            "--timeline-indicator-size": "sizes.5",
                            "--timeline-font-size": "fontSizes.xs"
                        },
                        title: {
                            textStyle: "sm"
                        }
                    },
                    lg: {
                        root: {
                            "--timeline-indicator-size": "sizes.6",
                            "--timeline-font-size": "fontSizes.xs"
                        },
                        title: {
                            mt: "0.5",
                            textStyle: "sm"
                        }
                    },
                    xl: {
                        root: {
                            "--timeline-indicator-size": "sizes.8",
                            "--timeline-font-size": "fontSizes.sm"
                        },
                        title: {
                            mt: "1.5",
                            textStyle: "sm"
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "solid",
                showLastSeparator: !1
            }
        }),
        ss = (0, tB.defineSlotRecipe)({
            slots: oI.keys(),
            className: "chakra-toast",
            base: {
                root: {
                    width: "full",
                    display: "flex",
                    alignItems: "flex-start",
                    position: "relative",
                    gap: "3",
                    py: "4",
                    ps: "4",
                    pe: "6",
                    borderRadius: "l2",
                    translate: "var(--x) var(--y)",
                    scale: "var(--scale)",
                    zIndex: "var(--z-index)",
                    height: "var(--height)",
                    opacity: "var(--opacity)",
                    willChange: "translate, opacity, scale",
                    transition: "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
                    transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
                    _closed: {
                        transition: "translate 400ms, scale 400ms, opacity 200ms",
                        transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)"
                    },
                    bg: "bg.panel",
                    color: "fg",
                    boxShadow: "xl",
                    "--toast-trigger-bg": "colors.bg.muted",
                    "&[data-type=warning]": {
                        bg: "orange.solid",
                        color: "orange.contrast",
                        "--toast-trigger-bg": "{white/10}",
                        "--toast-border-color": "{white/40}"
                    },
                    "&[data-type=success]": {
                        bg: "green.solid",
                        color: "green.contrast",
                        "--toast-trigger-bg": "{white/10}",
                        "--toast-border-color": "{white/40}"
                    },
                    "&[data-type=error]": {
                        bg: "red.solid",
                        color: "red.contrast",
                        "--toast-trigger-bg": "{white/10}",
                        "--toast-border-color": "{white/40}"
                    }
                },
                title: {
                    fontWeight: "medium",
                    textStyle: "sm",
                    marginEnd: "2"
                },
                description: {
                    display: "inline",
                    textStyle: "sm",
                    opacity: "0.8"
                },
                indicator: {
                    flexShrink: "0",
                    boxSize: "5"
                },
                actionTrigger: {
                    textStyle: "sm",
                    fontWeight: "medium",
                    height: "8",
                    px: "3",
                    borderRadius: "l2",
                    alignSelf: "center",
                    borderWidth: "1px",
                    borderColor: "var(--toast-border-color, inherit)",
                    transition: "background 200ms",
                    _hover: {
                        bg: "var(--toast-trigger-bg)"
                    }
                },
                closeTrigger: {
                    position: "absolute",
                    top: "1",
                    insetEnd: "1",
                    padding: "1",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "{currentColor/60}",
                    borderRadius: "l2",
                    textStyle: "md",
                    transition: "background 200ms",
                    _icon: {
                        boxSize: "1em"
                    }
                }
            }
        });
    var sd = e.i(458943),
        sd = sd;
    let sc = (0, tB.defineSlotRecipe)({
        slots: sd.anatomy.keys(),
        className: "chakra-tooltip",
        base: {
            content: {
                "--tooltip-bg": "colors.bg.inverted",
                bg: "var(--tooltip-bg)",
                color: "fg.inverted",
                px: "2.5",
                py: "1",
                borderRadius: "l2",
                fontWeight: "medium",
                textStyle: "xs",
                boxShadow: "md",
                maxW: "xs",
                zIndex: "tooltip",
                transformOrigin: "var(--transform-origin)",
                _open: {
                    animationStyle: "scale-fade-in",
                    animationDuration: "fast"
                },
                _closed: {
                    animationStyle: "scale-fade-out",
                    animationDuration: "fast"
                }
            },
            arrow: {
                "--arrow-size": "sizes.2",
                "--arrow-background": "var(--tooltip-bg)"
            },
            arrowTip: {
                borderTopWidth: "1px",
                borderLeftWidth: "1px",
                borderColor: "var(--tooltip-bg)"
            }
        }
    });
    var su = (0, av.createAnatomy)("tree-view").parts("branch", "branchContent", "branchControl", "branchIndentGuide", "branchIndicator", "branchText", "branchTrigger", "item", "itemIndicator", "itemText", "label", "nodeCheckbox", "nodeRenameInput", "root", "tree");
    su.build();
    var sg = e => new ab.TreeCollection(e);
    sg.empty = () => new ab.TreeCollection({
        rootNode: {
            children: []
        }
    });
    var sp = (e, t) => {
            var a, r, i, o;
            null != t && (null == (a = e.getById(null != (o = null == (i = e.ids) || null == (r = i.node) ? void 0 : r.call(i, t)) ? o : "tree:".concat(e.id, ":node:").concat(t))) || a.focus())
        },
        sh = (e, t) => e.getById("tree:".concat(e.id, ":rename-input:").concat(t));

    function sm(e, t) {
        let {
            context: a,
            prop: r,
            refs: i
        } = e;
        if (!r("loadChildren")) return void a.set("expandedValue", e => (0, aS.uniq)((0, aS.add)(e, ...t)));
        let o = a.get("loadingStatus"),
            [l, n] = (0, aS.partition)(t, e => "loaded" === o[e]);
        if (l.length > 0 && a.set("expandedValue", e => (0, aS.uniq)((0, aS.add)(e, ...l))), 0 === n.length) return;
        let s = r("collection"),
            [d, c] = (0, aS.partition)(n, e => {
                let t = s.findNode(e);
                return s.getNodeChildren(t).length > 0
            });
        if (d.length > 0 && a.set("expandedValue", e => (0, aS.uniq)((0, aS.add)(e, ...d))), 0 === c.length) return;
        a.set("loadingStatus", e => ({ ...e,
            ...c.reduce((e, t) => ({ ...e,
                [t]: "loading"
            }), {})
        }));
        let u = c.map(e => {
                let t = s.getIndexPath(e),
                    a = s.getValuePath(t),
                    r = s.findNode(e);
                return {
                    id: e,
                    indexPath: t,
                    valuePath: a,
                    node: r
                }
            }),
            g = i.get("pendingAborts"),
            p = r("loadChildren");
        (0, aS.ensure)(p, () => "[zag-js/tree-view] `loadChildren` is required for async expansion"), Promise.allSettled(u.map(e => {
            let {
                id: t,
                indexPath: a,
                valuePath: r,
                node: i
            } = e, o = g.get(t);
            o && (o.abort(), g.delete(t));
            let l = new AbortController;
            return g.set(t, l), p({
                valuePath: r,
                indexPath: a,
                node: i,
                signal: l.signal
            })
        })).then(e => {
            var t, i;
            let o = [],
                l = [],
                n = a.get("loadingStatus"),
                s = r("collection");
            e.forEach((e, t) => {
                let {
                    id: a,
                    indexPath: r,
                    node: i,
                    valuePath: d
                } = u[t];
                "fulfilled" === e.status ? (n[a] = "loaded", o.push(a), s = s.replace(r, { ...i,
                    children: e.value
                })) : (g.delete(a), Reflect.deleteProperty(n, a), l.push({
                    node: i,
                    error: e.reason,
                    indexPath: r,
                    valuePath: d
                }))
            }), a.set("loadingStatus", n), o.length && (a.set("expandedValue", e => (0, aS.uniq)((0, aS.add)(e, ...o))), null == (t = r("onLoadChildrenComplete")) || t({
                collection: s
            })), l.length && (null == (i = r("onLoadChildrenError")) || i({
                nodes: l
            }))
        })
    }

    function sf(e) {
        let {
            prop: t,
            context: a
        } = e;
        return function(e) {
            let {
                indexPath: r
            } = e;
            return t("collection").getValuePath(r).slice(0, -1).some(e => !a.get("expandedValue").includes(e))
        }
    }
    var {
        and: sv
    } = (0, ak.createGuards)();
    (0, ak.createMachine)({
        props(e) {
            let {
                props: t
            } = e;
            return {
                selectionMode: "single",
                collection: sg.empty(),
                typeahead: !0,
                expandOnClick: !0,
                defaultExpandedValue: [],
                defaultSelectedValue: [],
                ...t
            }
        },
        initialState: () => "idle",
        context(e) {
            let {
                prop: t,
                bindable: a,
                getContext: r
            } = e;
            return {
                expandedValue: a(() => ({
                    defaultValue: t("defaultExpandedValue"),
                    value: t("expandedValue"),
                    isEqual: aS.isEqual,
                    onChange(e) {
                        var a;
                        let i = r().get("focusedValue");
                        null == (a = t("onExpandedChange")) || a({
                            expandedValue: e,
                            focusedValue: i,
                            get expandedNodes() {
                                return t("collection").findNodes(e)
                            }
                        })
                    }
                })),
                selectedValue: a(() => ({
                    defaultValue: t("defaultSelectedValue"),
                    value: t("selectedValue"),
                    isEqual: aS.isEqual,
                    onChange(e) {
                        var a;
                        let i = r().get("focusedValue");
                        null == (a = t("onSelectionChange")) || a({
                            selectedValue: e,
                            focusedValue: i,
                            get selectedNodes() {
                                return t("collection").findNodes(e)
                            }
                        })
                    }
                })),
                focusedValue: a(() => ({
                    defaultValue: t("defaultFocusedValue") || null,
                    value: t("focusedValue"),
                    onChange(e) {
                        var a;
                        null == (a = t("onFocusChange")) || a({
                            focusedValue: e,
                            get focusedNode() {
                                return e ? t("collection").findNode(e) : null
                            }
                        })
                    }
                })),
                loadingStatus: a(() => ({
                    defaultValue: {}
                })),
                checkedValue: a(() => ({
                    defaultValue: t("defaultCheckedValue") || [],
                    value: t("checkedValue"),
                    isEqual: aS.isEqual,
                    onChange(e) {
                        var a;
                        null == (a = t("onCheckedChange")) || a({
                            checkedValue: e
                        })
                    }
                })),
                renamingValue: a(() => ({
                    sync: !0,
                    defaultValue: null
                }))
            }
        },
        refs: () => ({
            typeaheadState: { ...ax.getByTypeahead.defaultOptions
            },
            pendingAborts: new Map
        }),
        computed: {
            isMultipleSelection: e => {
                let {
                    prop: t
                } = e;
                return "multiple" === t("selectionMode")
            },
            isTypingAhead: e => {
                let {
                    refs: t
                } = e;
                return t.get("typeaheadState").keysSoFar.length > 0
            },
            visibleNodes: e => {
                let {
                    prop: t,
                    context: a
                } = e, r = [];
                return t("collection").visit({
                    skip: sf({
                        prop: t,
                        context: a
                    }),
                    onEnter: (e, t) => {
                        r.push({
                            node: e,
                            indexPath: t
                        })
                    }
                }), r
            }
        },
        on: {
            "EXPANDED.SET": {
                actions: ["setExpanded"]
            },
            "EXPANDED.CLEAR": {
                actions: ["clearExpanded"]
            },
            "EXPANDED.ALL": {
                actions: ["expandAllBranches"]
            },
            "BRANCH.EXPAND": {
                actions: ["expandBranches"]
            },
            "BRANCH.COLLAPSE": {
                actions: ["collapseBranches"]
            },
            "SELECTED.SET": {
                actions: ["setSelected"]
            },
            "SELECTED.ALL": [{
                guard: sv("isMultipleSelection", "moveFocus"),
                actions: ["selectAllNodes", "focusTreeLastNode"]
            }, {
                guard: "isMultipleSelection",
                actions: ["selectAllNodes"]
            }],
            "SELECTED.CLEAR": {
                actions: ["clearSelected"]
            },
            "NODE.SELECT": {
                actions: ["selectNode"]
            },
            "NODE.DESELECT": {
                actions: ["deselectNode"]
            },
            "CHECKED.TOGGLE": {
                actions: ["toggleChecked"]
            },
            "CHECKED.SET": {
                actions: ["setChecked"]
            },
            "CHECKED.CLEAR": {
                actions: ["clearChecked"]
            },
            "NODE.FOCUS": {
                actions: ["setFocusedNode"]
            },
            "NODE.ARROW_DOWN": [{
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["focusTreeNextNode", "extendSelectionToNextNode"]
            }, {
                actions: ["focusTreeNextNode"]
            }],
            "NODE.ARROW_UP": [{
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["focusTreePrevNode", "extendSelectionToPrevNode"]
            }, {
                actions: ["focusTreePrevNode"]
            }],
            "NODE.ARROW_LEFT": {
                actions: ["focusBranchNode"]
            },
            "BRANCH_NODE.ARROW_LEFT": [{
                guard: "isBranchExpanded",
                actions: ["collapseBranch"]
            }, {
                actions: ["focusBranchNode"]
            }],
            "BRANCH_NODE.ARROW_RIGHT": [{
                guard: sv("isBranchFocused", "isBranchExpanded"),
                actions: ["focusBranchFirstNode"]
            }, {
                actions: ["expandBranch"]
            }],
            "SIBLINGS.EXPAND": {
                actions: ["expandSiblingBranches"]
            },
            "NODE.HOME": [{
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["extendSelectionToFirstNode", "focusTreeFirstNode"]
            }, {
                actions: ["focusTreeFirstNode"]
            }],
            "NODE.END": [{
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["extendSelectionToLastNode", "focusTreeLastNode"]
            }, {
                actions: ["focusTreeLastNode"]
            }],
            "NODE.CLICK": [{
                guard: sv("isCtrlKey", "isMultipleSelection"),
                actions: ["toggleNodeSelection"]
            }, {
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["extendSelectionToNode"]
            }, {
                actions: ["selectNode"]
            }],
            "BRANCH_NODE.CLICK": [{
                guard: sv("isCtrlKey", "isMultipleSelection"),
                actions: ["toggleNodeSelection"]
            }, {
                guard: sv("isShiftKey", "isMultipleSelection"),
                actions: ["extendSelectionToNode"]
            }, {
                guard: "expandOnClick",
                actions: ["selectNode", "toggleBranchNode"]
            }, {
                actions: ["selectNode"]
            }],
            "BRANCH_TOGGLE.CLICK": {
                actions: ["toggleBranchNode"]
            },
            "TREE.TYPEAHEAD": {
                actions: ["focusMatchedNode"]
            }
        },
        exit: ["clearPendingAborts"],
        states: {
            idle: {
                on: {
                    "NODE.RENAME": {
                        target: "renaming",
                        actions: ["setRenamingValue"]
                    }
                }
            },
            renaming: {
                entry: ["syncRenameInput", "focusRenameInput"],
                on: {
                    "RENAME.SUBMIT": {
                        guard: "isRenameLabelValid",
                        target: "idle",
                        actions: ["submitRenaming"]
                    },
                    "RENAME.CANCEL": {
                        target: "idle",
                        actions: ["cancelRenaming"]
                    }
                }
            }
        },
        implementations: {
            guards: {
                isBranchFocused: e => {
                    let {
                        context: t,
                        event: a
                    } = e;
                    return t.get("focusedValue") === a.id
                },
                isBranchExpanded: e => {
                    let {
                        context: t,
                        event: a
                    } = e;
                    return t.get("expandedValue").includes(a.id)
                },
                isShiftKey: e => {
                    let {
                        event: t
                    } = e;
                    return t.shiftKey
                },
                isCtrlKey: e => {
                    let {
                        event: t
                    } = e;
                    return t.ctrlKey
                },
                hasSelectedItems: e => {
                    let {
                        context: t
                    } = e;
                    return t.get("selectedValue").length > 0
                },
                isMultipleSelection: e => {
                    let {
                        prop: t
                    } = e;
                    return "multiple" === t("selectionMode")
                },
                moveFocus: e => {
                    let {
                        event: t
                    } = e;
                    return !!t.moveFocus
                },
                expandOnClick: e => {
                    let {
                        prop: t
                    } = e;
                    return !!t("expandOnClick")
                },
                isRenameLabelValid: e => {
                    let {
                        event: t
                    } = e;
                    return "" !== t.label.trim()
                }
            },
            actions: {
                selectNode(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = a.id || a.value;
                    t.set("selectedValue", e => null == r ? e : !a.isTrusted && (0, aS.isArray)(r) ? e.concat(...r) : [(0, aS.isArray)(r) ? (0, aS.last)(r) : r].filter(Boolean))
                },
                deselectNode(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = (0, aS.toArray)(a.id || a.value);
                    t.set("selectedValue", e => (0, aS.remove)(e, ...r))
                },
                setFocusedNode(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("focusedValue", a.id)
                },
                clearFocusedNode(e) {
                    let {
                        context: t
                    } = e;
                    t.set("focusedValue", null)
                },
                clearSelectedItem(e) {
                    let {
                        context: t
                    } = e;
                    t.set("selectedValue", [])
                },
                toggleBranchNode(e) {
                    let {
                        context: t,
                        event: a,
                        action: r
                    } = e;
                    r(t.get("expandedValue").includes(a.id) ? ["collapseBranch"] : ["expandBranch"])
                },
                expandBranch(e) {
                    let {
                        event: t
                    } = e;
                    sm(e, [t.id])
                },
                expandBranches(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = (0, aS.toArray)(a.value);
                    sm(e, (0, aS.diff)(r, t.get("expandedValue")))
                },
                collapseBranch(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("expandedValue", e => (0, aS.remove)(e, a.id))
                },
                collapseBranches(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = (0, aS.toArray)(a.value);
                    t.set("expandedValue", e => (0, aS.remove)(e, ...r))
                },
                setExpanded(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    (0, aS.isArray)(a.value) && t.set("expandedValue", a.value)
                },
                clearExpanded(e) {
                    let {
                        context: t
                    } = e;
                    t.set("expandedValue", [])
                },
                setSelected(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    (0, aS.isArray)(a.value) && t.set("selectedValue", a.value)
                },
                clearSelected(e) {
                    let {
                        context: t
                    } = e;
                    t.set("selectedValue", [])
                },
                focusTreeFirstNode(e) {
                    let {
                        prop: t,
                        scope: a
                    } = e, r = t("collection"), i = r.getFirstNode();
                    sp(a, r.getNodeValue(i))
                },
                focusTreeLastNode(e) {
                    let {
                        prop: t,
                        scope: a
                    } = e, r = t("collection"), i = r.getLastNode(void 0, {
                        skip: sf(e)
                    });
                    sp(a, r.getNodeValue(i))
                },
                focusBranchFirstNode(e) {
                    let {
                        event: t,
                        prop: a,
                        scope: r
                    } = e, i = a("collection"), o = i.findNode(t.id), l = i.getFirstNode(o);
                    sp(r, i.getNodeValue(l))
                },
                focusTreeNextNode(e) {
                    let {
                        event: t,
                        prop: a,
                        scope: r
                    } = e, i = a("collection"), o = i.getNextNode(t.id, {
                        skip: sf(e)
                    });
                    o && sp(r, i.getNodeValue(o))
                },
                focusTreePrevNode(e) {
                    let {
                        event: t,
                        prop: a,
                        scope: r
                    } = e, i = a("collection"), o = i.getPreviousNode(t.id, {
                        skip: sf(e)
                    });
                    o && sp(r, i.getNodeValue(o))
                },
                focusBranchNode(e) {
                    let {
                        event: t,
                        prop: a,
                        scope: r
                    } = e, i = a("collection"), o = i.getParentNode(t.id);
                    sp(r, o ? i.getNodeValue(o) : void 0)
                },
                selectAllNodes(e) {
                    let {
                        context: t,
                        prop: a
                    } = e;
                    t.set("selectedValue", a("collection").getValues())
                },
                focusMatchedNode(e) {
                    let {
                        context: t,
                        prop: a,
                        refs: r,
                        event: i,
                        scope: o,
                        computed: l
                    } = e, n = l("visibleNodes").map(e => {
                        let {
                            node: t
                        } = e;
                        return {
                            textContent: a("collection").stringifyNode(t),
                            id: a("collection").getNodeValue(t)
                        }
                    }), s = (0, ax.getByTypeahead)(n, {
                        state: r.get("typeaheadState"),
                        activeId: t.get("focusedValue"),
                        key: i.key
                    });
                    sp(o, null == s ? void 0 : s.id)
                },
                toggleNodeSelection(e) {
                    let {
                        context: t,
                        event: a
                    } = e, r = (0, aS.addOrRemove)(t.get("selectedValue"), a.id);
                    t.set("selectedValue", r)
                },
                expandAllBranches(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection").getBranchValues();
                    sm(e, (0, aS.diff)(r, t.get("expandedValue")))
                },
                expandSiblingBranches(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = r("collection"), o = i.getIndexPath(a.id);
                    if (!o) return;
                    let l = i.getSiblingNodes(o).map(e => i.getNodeValue(e));
                    sm(e, (0, aS.diff)(l, t.get("expandedValue")))
                },
                extendSelectionToNode(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r,
                        computed: i
                    } = e, o = r("collection"), l = (0, aS.first)(t.get("selectedValue")) || o.getNodeValue(o.getFirstNode()), n = a.id, s = [l, n], d = 0;
                    i("visibleNodes").forEach(e => {
                        let {
                            node: t
                        } = e, a = o.getNodeValue(t);
                        1 === d && s.push(a), (a === l || a === n) && d++
                    }), t.set("selectedValue", (0, aS.uniq)(s))
                },
                extendSelectionToNextNode(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = r("collection"), o = i.getNextNode(a.id, {
                        skip: sf(e)
                    });
                    if (!o) return;
                    let l = new Set(t.get("selectedValue")),
                        n = i.getNodeValue(o);
                    null != n && (l.has(a.id) && l.has(n) ? l.delete(a.id) : l.has(n) || l.add(n), t.set("selectedValue", Array.from(l)))
                },
                extendSelectionToPrevNode(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = r("collection"), o = i.getPreviousNode(a.id, {
                        skip: sf(e)
                    });
                    if (!o) return;
                    let l = new Set(t.get("selectedValue")),
                        n = i.getNodeValue(o);
                    null != n && (l.has(a.id) && l.has(n) ? l.delete(a.id) : l.has(n) || l.add(n), t.set("selectedValue", Array.from(l)))
                },
                extendSelectionToFirstNode(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection"), i = (0, aS.first)(t.get("selectedValue")), o = [];
                    r.visit({
                        skip: sf(e),
                        onEnter: e => {
                            let t = r.getNodeValue(e);
                            if (o.push(t), t === i) return "stop"
                        }
                    }), t.set("selectedValue", o)
                },
                extendSelectionToLastNode(e) {
                    let {
                        context: t,
                        prop: a
                    } = e, r = a("collection"), i = (0, aS.first)(t.get("selectedValue")), o = [], l = !1;
                    r.visit({
                        skip: sf(e),
                        onEnter: e => {
                            let t = r.getNodeValue(e);
                            t === i && (l = !0), l && o.push(t)
                        }
                    }), t.set("selectedValue", o)
                },
                clearPendingAborts(e) {
                    let {
                        refs: t
                    } = e, a = t.get("pendingAborts");
                    a.forEach(e => e.abort()), a.clear()
                },
                toggleChecked(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e, i = r("collection");
                    t.set("checkedValue", e => {
                        var t;
                        let r, o;
                        return a.isBranch ? (t = a.value, o = (r = i.getDescendantValues(t)).every(t => e.includes(t)), (0, aS.uniq)(o ? (0, aS.remove)(e, ...r) : (0, aS.add)(e, ...r))) : (0, aS.addOrRemove)(e, a.value)
                    })
                },
                setChecked(e) {
                    let {
                        context: t,
                        event: a
                    } = e;
                    t.set("checkedValue", a.value)
                },
                clearChecked(e) {
                    let {
                        context: t
                    } = e;
                    t.set("checkedValue", [])
                },
                setRenamingValue(e) {
                    let {
                        context: t,
                        event: a,
                        prop: r
                    } = e;
                    t.set("renamingValue", a.value);
                    let i = r("onRenameStart");
                    if (i) {
                        let e = r("collection"),
                            t = e.getIndexPath(a.value);
                        if (t) {
                            let r = e.at(t);
                            r && i({
                                value: a.value,
                                node: r,
                                indexPath: t
                            })
                        }
                    }
                },
                submitRenaming(e) {
                    var t;
                    let {
                        context: a,
                        event: r,
                        prop: i,
                        scope: o
                    } = e, l = a.get("renamingValue");
                    if (!l) return;
                    let n = i("collection").getIndexPath(l);
                    if (!n) return;
                    let s = r.label.trim(),
                        d = i("onBeforeRename");
                    if (d && !d({
                            value: l,
                            label: s,
                            indexPath: n
                        })) {
                        a.set("renamingValue", null), sp(o, l);
                        return
                    }
                    null == (t = i("onRenameComplete")) || t({
                        value: l,
                        label: s,
                        indexPath: n
                    }), a.set("renamingValue", null), sp(o, l)
                },
                cancelRenaming(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = t.get("renamingValue");
                    t.set("renamingValue", null), r && sp(a, r)
                },
                syncRenameInput(e) {
                    let {
                        context: t,
                        scope: a,
                        prop: r
                    } = e, i = t.get("renamingValue");
                    if (!i) return;
                    let o = r("collection"),
                        l = o.findNode(i);
                    if (!l) return;
                    let n = o.stringifyNode(l),
                        s = sh(a, i);
                    (0, ax.setElementValue)(s, n)
                },
                focusRenameInput(e) {
                    let {
                        context: t,
                        scope: a
                    } = e, r = t.get("renamingValue");
                    if (!r) return;
                    let i = sh(a, r);
                    i && (i.focus(), i.select())
                }
            }
        }
    });
    var sb = (0, aI.createProps)()(["ids", "collection", "dir", "expandedValue", "expandOnClick", "defaultFocusedValue", "focusedValue", "getRootNode", "id", "onExpandedChange", "onFocusChange", "onSelectionChange", "checkedValue", "selectedValue", "selectionMode", "typeahead", "defaultExpandedValue", "defaultSelectedValue", "defaultCheckedValue", "onCheckedChange", "onLoadChildrenComplete", "onLoadChildrenError", "loadChildren", "canRename", "onRenameStart", "onBeforeRename", "onRenameComplete"]);
    (0, aS.createSplitProps)(sb);
    var sx = (0, aI.createProps)()(["node", "indexPath"]);
    (0, aS.createSplitProps)(sx);
    let sy = (0, tB.defineStyle)({
            display: "flex",
            alignItems: "center",
            gap: "var(--tree-item-gap)",
            rounded: "l2",
            userSelect: "none",
            position: "relative",
            "--tree-depth": "calc(var(--depth) - 1)",
            "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
            "--tree-icon-offset": "calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)",
            "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",
            ps: "var(--tree-offset)",
            pe: "var(--tree-padding-inline)",
            py: "var(--tree-padding-block)",
            focusVisibleRing: "inside",
            focusRingColor: "border.emphasized",
            focusRingWidth: "2px",
            "&:hover, &:focus-visible": {
                bg: "bg.muted"
            },
            _disabled: {
                layerStyle: "disabled"
            }
        }),
        sS = (0, tB.defineStyle)({
            flex: "1"
        }),
        sk = (0, tB.defineStyle)({
            _selected: {
                bg: "colorPalette.subtle",
                color: "colorPalette.fg"
            }
        }),
        sC = (0, tB.defineStyle)({
            _selected: {
                layerStyle: "fill.solid"
            }
        }),
        sI = (0, tB.defineSlotRecipe)({
            slots: su.keys(),
            className: "chakra-tree-view",
            base: {
                root: {
                    width: "full",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2"
                },
                tree: {
                    display: "flex",
                    flexDirection: "column",
                    "--tree-item-gap": "spacing.2",
                    _icon: {
                        boxSize: "var(--tree-icon-size)"
                    }
                },
                label: {
                    fontWeight: "medium",
                    textStyle: "sm"
                },
                branch: {
                    position: "relative"
                },
                branchContent: {
                    position: "relative"
                },
                branchIndentGuide: {
                    height: "100%",
                    width: "1px",
                    bg: "border",
                    position: "absolute",
                    "--tree-depth": "calc(var(--depth) - 1)",
                    "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
                    "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
                    "--tree-icon-offset": "calc(var(--tree-icon-size) * 0.5 * var(--depth))",
                    insetInlineStart: "calc(var(--tree-offset) + var(--tree-icon-offset))",
                    zIndex: "1"
                },
                branchIndicator: {
                    color: "fg.muted",
                    transformOrigin: "center",
                    transitionDuration: "normal",
                    transitionProperty: "transform",
                    transitionTimingFunction: "default",
                    _open: {
                        transform: "rotate(90deg)"
                    }
                },
                branchTrigger: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                branchControl: sy,
                item: sy,
                itemText: sS,
                branchText: sS,
                nodeCheckbox: {
                    display: "inline-flex"
                }
            },
            variants: {
                size: {
                    md: {
                        tree: {
                            textStyle: "sm",
                            "--tree-indentation": "spacing.4",
                            "--tree-padding-inline": "spacing.3",
                            "--tree-padding-block": "spacing.1.5",
                            "--tree-icon-size": "spacing.4"
                        }
                    },
                    sm: {
                        tree: {
                            textStyle: "sm",
                            "--tree-indentation": "spacing.4",
                            "--tree-padding-inline": "spacing.3",
                            "--tree-padding-block": "spacing.1",
                            "--tree-icon-size": "spacing.3"
                        }
                    },
                    xs: {
                        tree: {
                            textStyle: "xs",
                            "--tree-indentation": "spacing.4",
                            "--tree-padding-inline": "spacing.2",
                            "--tree-padding-block": "spacing.1",
                            "--tree-icon-size": "spacing.3"
                        }
                    }
                },
                variant: {
                    subtle: {
                        branchControl: sk,
                        item: sk
                    },
                    solid: {
                        branchControl: sC,
                        item: sC
                    }
                },
                animateContent: {
                    true: {
                        branchContent: {
                            _open: {
                                animationName: "expand-height, fade-in",
                                animationDuration: "moderate"
                            },
                            _closed: {
                                animationName: "collapse-height, fade-out",
                                animationDuration: "moderate"
                            }
                        }
                    }
                }
            },
            defaultVariants: {
                size: "md",
                variant: "subtle"
            }
        }),
        sw = (0, tB.defineTextStyles)({
            "2xs": {
                value: {
                    fontSize: "2xs",
                    lineHeight: "0.75rem"
                }
            },
            xs: {
                value: {
                    fontSize: "xs",
                    lineHeight: "1rem"
                }
            },
            sm: {
                value: {
                    fontSize: "sm",
                    lineHeight: "1.25rem"
                }
            },
            md: {
                value: {
                    fontSize: "md",
                    lineHeight: "1.5rem"
                }
            },
            lg: {
                value: {
                    fontSize: "lg",
                    lineHeight: "1.75rem"
                }
            },
            xl: {
                value: {
                    fontSize: "xl",
                    lineHeight: "1.875rem"
                }
            },
            "2xl": {
                value: {
                    fontSize: "2xl",
                    lineHeight: "2rem"
                }
            },
            "3xl": {
                value: {
                    fontSize: "3xl",
                    lineHeight: "2.375rem"
                }
            },
            "4xl": {
                value: {
                    fontSize: "4xl",
                    lineHeight: "2.75rem",
                    letterSpacing: "-0.025em"
                }
            },
            "5xl": {
                value: {
                    fontSize: "5xl",
                    lineHeight: "3.75rem",
                    letterSpacing: "-0.025em"
                }
            },
            "6xl": {
                value: {
                    fontSize: "6xl",
                    lineHeight: "4.5rem",
                    letterSpacing: "-0.025em"
                }
            },
            "7xl": {
                value: {
                    fontSize: "7xl",
                    lineHeight: "5.75rem",
                    letterSpacing: "-0.025em"
                }
            },
            none: {
                value: {}
            },
            label: {
                value: {
                    fontSize: "sm",
                    lineHeight: "1.25rem",
                    fontWeight: "medium"
                }
            }
        }),
        sE = tB.defineTokens.animations({
            spin: {
                value: "spin 1s linear infinite"
            },
            ping: {
                value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
            },
            pulse: {
                value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            },
            bounce: {
                value: "bounce 1s infinite"
            }
        }),
        sP = tB.defineTokens.aspectRatios({
            square: {
                value: "1 / 1"
            },
            landscape: {
                value: "4 / 3"
            },
            portrait: {
                value: "3 / 4"
            },
            wide: {
                value: "16 / 9"
            },
            ultrawide: {
                value: "18 / 5"
            },
            golden: {
                value: "1.618 / 1"
            }
        }),
        sV = tB.defineTokens.blurs({
            none: {
                value: " "
            },
            sm: {
                value: "4px"
            },
            md: {
                value: "8px"
            },
            lg: {
                value: "12px"
            },
            xl: {
                value: "16px"
            },
            "2xl": {
                value: "24px"
            },
            "3xl": {
                value: "40px"
            },
            "4xl": {
                value: "64px"
            }
        }),
        sT = tB.defineTokens.borders({
            xs: {
                value: "0.5px solid"
            },
            sm: {
                value: "1px solid"
            },
            md: {
                value: "2px solid"
            },
            lg: {
                value: "4px solid"
            },
            xl: {
                value: "8px solid"
            }
        }),
        sR = tB.defineTokens.colors({
            transparent: {
                value: "transparent"
            },
            current: {
                value: "currentColor"
            },
            black: {
                value: "#09090B"
            },
            white: {
                value: "#FFFFFF"
            },
            whiteAlpha: {
                50: {
                    value: "rgba(255, 255, 255, 0.04)"
                },
                100: {
                    value: "rgba(255, 255, 255, 0.06)"
                },
                200: {
                    value: "rgba(255, 255, 255, 0.08)"
                },
                300: {
                    value: "rgba(255, 255, 255, 0.16)"
                },
                400: {
                    value: "rgba(255, 255, 255, 0.24)"
                },
                500: {
                    value: "rgba(255, 255, 255, 0.36)"
                },
                600: {
                    value: "rgba(255, 255, 255, 0.48)"
                },
                700: {
                    value: "rgba(255, 255, 255, 0.64)"
                },
                800: {
                    value: "rgba(255, 255, 255, 0.80)"
                },
                900: {
                    value: "rgba(255, 255, 255, 0.92)"
                },
                950: {
                    value: "rgba(255, 255, 255, 0.95)"
                }
            },
            blackAlpha: {
                50: {
                    value: "rgba(0, 0, 0, 0.04)"
                },
                100: {
                    value: "rgba(0, 0, 0, 0.06)"
                },
                200: {
                    value: "rgba(0, 0, 0, 0.08)"
                },
                300: {
                    value: "rgba(0, 0, 0, 0.16)"
                },
                400: {
                    value: "rgba(0, 0, 0, 0.24)"
                },
                500: {
                    value: "rgba(0, 0, 0, 0.36)"
                },
                600: {
                    value: "rgba(0, 0, 0, 0.48)"
                },
                700: {
                    value: "rgba(0, 0, 0, 0.64)"
                },
                800: {
                    value: "rgba(0, 0, 0, 0.80)"
                },
                900: {
                    value: "rgba(0, 0, 0, 0.92)"
                },
                950: {
                    value: "rgba(0, 0, 0, 0.95)"
                }
            },
            gray: {
                50: {
                    value: "#fafafa"
                },
                100: {
                    value: "#f4f4f5"
                },
                200: {
                    value: "#e4e4e7"
                },
                300: {
                    value: "#d4d4d8"
                },
                400: {
                    value: "#a1a1aa"
                },
                500: {
                    value: "#71717a"
                },
                600: {
                    value: "#52525b"
                },
                700: {
                    value: "#3f3f46"
                },
                800: {
                    value: "#27272a"
                },
                900: {
                    value: "#18181b"
                },
                950: {
                    value: "#111111"
                }
            },
            red: {
                50: {
                    value: "#fef2f2"
                },
                100: {
                    value: "#fee2e2"
                },
                200: {
                    value: "#fecaca"
                },
                300: {
                    value: "#fca5a5"
                },
                400: {
                    value: "#f87171"
                },
                500: {
                    value: "#ef4444"
                },
                600: {
                    value: "#dc2626"
                },
                700: {
                    value: "#991919"
                },
                800: {
                    value: "#511111"
                },
                900: {
                    value: "#300c0c"
                },
                950: {
                    value: "#1f0808"
                }
            },
            orange: {
                50: {
                    value: "#fff7ed"
                },
                100: {
                    value: "#ffedd5"
                },
                200: {
                    value: "#fed7aa"
                },
                300: {
                    value: "#fdba74"
                },
                400: {
                    value: "#fb923c"
                },
                500: {
                    value: "#f97316"
                },
                600: {
                    value: "#ea580c"
                },
                700: {
                    value: "#92310a"
                },
                800: {
                    value: "#6c2710"
                },
                900: {
                    value: "#3b1106"
                },
                950: {
                    value: "#220a04"
                }
            },
            yellow: {
                50: {
                    value: "#fefce8"
                },
                100: {
                    value: "#fef9c3"
                },
                200: {
                    value: "#fef08a"
                },
                300: {
                    value: "#fde047"
                },
                400: {
                    value: "#facc15"
                },
                500: {
                    value: "#eab308"
                },
                600: {
                    value: "#ca8a04"
                },
                700: {
                    value: "#845209"
                },
                800: {
                    value: "#713f12"
                },
                900: {
                    value: "#422006"
                },
                950: {
                    value: "#281304"
                }
            },
            green: {
                50: {
                    value: "#f0fdf4"
                },
                100: {
                    value: "#dcfce7"
                },
                200: {
                    value: "#bbf7d0"
                },
                300: {
                    value: "#86efac"
                },
                400: {
                    value: "#4ade80"
                },
                500: {
                    value: "#22c55e"
                },
                600: {
                    value: "#16a34a"
                },
                700: {
                    value: "#116932"
                },
                800: {
                    value: "#124a28"
                },
                900: {
                    value: "#042713"
                },
                950: {
                    value: "#03190c"
                }
            },
            teal: {
                50: {
                    value: "#f0fdfa"
                },
                100: {
                    value: "#ccfbf1"
                },
                200: {
                    value: "#99f6e4"
                },
                300: {
                    value: "#5eead4"
                },
                400: {
                    value: "#2dd4bf"
                },
                500: {
                    value: "#14b8a6"
                },
                600: {
                    value: "#0d9488"
                },
                700: {
                    value: "#0c5d56"
                },
                800: {
                    value: "#114240"
                },
                900: {
                    value: "#032726"
                },
                950: {
                    value: "#021716"
                }
            },
            blue: {
                50: {
                    value: "#eff6ff"
                },
                100: {
                    value: "#dbeafe"
                },
                200: {
                    value: "#bfdbfe"
                },
                300: {
                    value: "#a3cfff"
                },
                400: {
                    value: "#60a5fa"
                },
                500: {
                    value: "#3b82f6"
                },
                600: {
                    value: "#2563eb"
                },
                700: {
                    value: "#173da6"
                },
                800: {
                    value: "#1a3478"
                },
                900: {
                    value: "#14204a"
                },
                950: {
                    value: "#0c142e"
                }
            },
            cyan: {
                50: {
                    value: "#ecfeff"
                },
                100: {
                    value: "#cffafe"
                },
                200: {
                    value: "#a5f3fc"
                },
                300: {
                    value: "#67e8f9"
                },
                400: {
                    value: "#22d3ee"
                },
                500: {
                    value: "#06b6d4"
                },
                600: {
                    value: "#0891b2"
                },
                700: {
                    value: "#0c5c72"
                },
                800: {
                    value: "#134152"
                },
                900: {
                    value: "#072a38"
                },
                950: {
                    value: "#051b24"
                }
            },
            purple: {
                50: {
                    value: "#faf5ff"
                },
                100: {
                    value: "#f3e8ff"
                },
                200: {
                    value: "#e9d5ff"
                },
                300: {
                    value: "#d8b4fe"
                },
                400: {
                    value: "#c084fc"
                },
                500: {
                    value: "#a855f7"
                },
                600: {
                    value: "#9333ea"
                },
                700: {
                    value: "#641ba3"
                },
                800: {
                    value: "#4a1772"
                },
                900: {
                    value: "#2f0553"
                },
                950: {
                    value: "#1a032e"
                }
            },
            pink: {
                50: {
                    value: "#fdf2f8"
                },
                100: {
                    value: "#fce7f3"
                },
                200: {
                    value: "#fbcfe8"
                },
                300: {
                    value: "#f9a8d4"
                },
                400: {
                    value: "#f472b6"
                },
                500: {
                    value: "#ec4899"
                },
                600: {
                    value: "#db2777"
                },
                700: {
                    value: "#a41752"
                },
                800: {
                    value: "#6d0e34"
                },
                900: {
                    value: "#45061f"
                },
                950: {
                    value: "#2c0514"
                }
            }
        }),
        sz = tB.defineTokens.cursor({
            button: {
                value: "pointer"
            },
            checkbox: {
                value: "default"
            },
            disabled: {
                value: "not-allowed"
            },
            menuitem: {
                value: "default"
            },
            option: {
                value: "default"
            },
            radio: {
                value: "default"
            },
            slider: {
                value: "default"
            },
            switch: {
                value: "pointer"
            }
        }),
        s_ = tB.defineTokens.durations({
            fastest: {
                value: "50ms"
            },
            faster: {
                value: "100ms"
            },
            fast: {
                value: "150ms"
            },
            moderate: {
                value: "200ms"
            },
            slow: {
                value: "300ms"
            },
            slower: {
                value: "400ms"
            },
            slowest: {
                value: "500ms"
            }
        }),
        sO = tB.defineTokens.easings({
            "ease-in": {
                value: "cubic-bezier(0.42, 0, 1, 1)"
            },
            "ease-out": {
                value: "cubic-bezier(0, 0, 0.58, 1)"
            },
            "ease-in-out": {
                value: "cubic-bezier(0.42, 0, 0.58, 1)"
            },
            "ease-in-smooth": {
                value: "cubic-bezier(0.32, 0.72, 0, 1)"
            }
        }),
        sA = tB.defineTokens.fontSizes({
            "2xs": {
                value: "0.625rem"
            },
            xs: {
                value: "0.75rem"
            },
            sm: {
                value: "0.875rem"
            },
            md: {
                value: "1rem"
            },
            lg: {
                value: "1.125rem"
            },
            xl: {
                value: "1.25rem"
            },
            "2xl": {
                value: "1.5rem"
            },
            "3xl": {
                value: "1.875rem"
            },
            "4xl": {
                value: "2.25rem"
            },
            "5xl": {
                value: "3rem"
            },
            "6xl": {
                value: "3.75rem"
            },
            "7xl": {
                value: "4.5rem"
            },
            "8xl": {
                value: "6rem"
            },
            "9xl": {
                value: "8rem"
            }
        }),
        sN = tB.defineTokens.fontWeights({
            thin: {
                value: "100"
            },
            extralight: {
                value: "200"
            },
            light: {
                value: "300"
            },
            normal: {
                value: "400"
            },
            medium: {
                value: "500"
            },
            semibold: {
                value: "600"
            },
            bold: {
                value: "700"
            },
            extrabold: {
                value: "800"
            },
            black: {
                value: "900"
            }
        }),
        sF = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        sD = tB.defineTokens.fonts({
            heading: {
                value: "Inter, ".concat(sF)
            },
            body: {
                value: "Inter, ".concat(sF)
            },
            mono: {
                value: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
            }
        }),
        sL = (0, tB.defineKeyframes)({
            spin: {
                "0%": {
                    transform: "rotate(0deg)"
                },
                "100%": {
                    transform: "rotate(360deg)"
                }
            },
            pulse: {
                "50%": {
                    opacity: "0.5"
                }
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0"
                }
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                }
            },
            "bg-position": {
                from: {
                    backgroundPosition: "var(--animate-from, 1rem) 0"
                },
                to: {
                    backgroundPosition: "var(--animate-to, 0) 0"
                }
            },
            position: {
                from: {
                    insetInlineStart: "var(--animate-from-x)",
                    insetBlockStart: "var(--animate-from-y)"
                },
                to: {
                    insetInlineStart: "var(--animate-to-x)",
                    insetBlockStart: "var(--animate-to-y)"
                }
            },
            "circular-progress": {
                "0%": {
                    strokeDasharray: "1, 400",
                    strokeDashoffset: "0"
                },
                "50%": {
                    strokeDasharray: "400, 400",
                    strokeDashoffset: "-100%"
                },
                "100%": {
                    strokeDasharray: "400, 400",
                    strokeDashoffset: "-260%"
                }
            },
            "expand-height": {
                from: {
                    height: "var(--collapsed-height, 0)"
                },
                to: {
                    height: "var(--height)"
                }
            },
            "collapse-height": {
                from: {
                    height: "var(--height)"
                },
                to: {
                    height: "var(--collapsed-height, 0)"
                }
            },
            "expand-width": {
                from: {
                    width: "var(--collapsed-width, 0)"
                },
                to: {
                    width: "var(--width)"
                }
            },
            "collapse-width": {
                from: {
                    height: "var(--width)"
                },
                to: {
                    height: "var(--collapsed-width, 0)"
                }
            },
            "fade-in": {
                from: {
                    opacity: 0
                },
                to: {
                    opacity: 1
                }
            },
            "fade-out": {
                from: {
                    opacity: 1
                },
                to: {
                    opacity: 0
                }
            },
            "slide-from-left-full": {
                from: {
                    translate: "-100% 0"
                },
                to: {
                    translate: "0 0"
                }
            },
            "slide-from-right-full": {
                from: {
                    translate: "100% 0"
                },
                to: {
                    translate: "0 0"
                }
            },
            "slide-from-top-full": {
                from: {
                    translate: "0 -100%"
                },
                to: {
                    translate: "0 0"
                }
            },
            "slide-from-bottom-full": {
                from: {
                    translate: "0 100%"
                },
                to: {
                    translate: "0 0"
                }
            },
            "slide-to-left-full": {
                from: {
                    translate: "0 0"
                },
                to: {
                    translate: "-100% 0"
                }
            },
            "slide-to-right-full": {
                from: {
                    translate: "0 0"
                },
                to: {
                    translate: "100% 0"
                }
            },
            "slide-to-top-full": {
                from: {
                    translate: "0 0"
                },
                to: {
                    translate: "0 -100%"
                }
            },
            "slide-to-bottom-full": {
                from: {
                    translate: "0 0"
                },
                to: {
                    translate: "0 100%"
                }
            },
            "slide-from-top": {
                "0%": {
                    translate: "0 -0.5rem"
                },
                to: {
                    translate: "0"
                }
            },
            "slide-from-bottom": {
                "0%": {
                    translate: "0 0.5rem"
                },
                to: {
                    translate: "0"
                }
            },
            "slide-from-left": {
                "0%": {
                    translate: "-0.5rem 0"
                },
                to: {
                    translate: "0"
                }
            },
            "slide-from-right": {
                "0%": {
                    translate: "0.5rem 0"
                },
                to: {
                    translate: "0"
                }
            },
            "slide-to-top": {
                "0%": {
                    translate: "0"
                },
                to: {
                    translate: "0 -0.5rem"
                }
            },
            "slide-to-bottom": {
                "0%": {
                    translate: "0"
                },
                to: {
                    translate: "0 0.5rem"
                }
            },
            "slide-to-left": {
                "0%": {
                    translate: "0"
                },
                to: {
                    translate: "-0.5rem 0"
                }
            },
            "slide-to-right": {
                "0%": {
                    translate: "0"
                },
                to: {
                    translate: "0.5rem 0"
                }
            },
            "scale-in": {
                from: {
                    scale: "0.95"
                },
                to: {
                    scale: "1"
                }
            },
            "scale-out": {
                from: {
                    scale: "1"
                },
                to: {
                    scale: "0.95"
                }
            }
        }),
        sW = tB.defineTokens.letterSpacings({
            tighter: {
                value: "-0.05em"
            },
            tight: {
                value: "-0.025em"
            },
            wide: {
                value: "0.025em"
            },
            wider: {
                value: "0.05em"
            },
            widest: {
                value: "0.1em"
            }
        }),
        sM = tB.defineTokens.lineHeights({
            shorter: {
                value: 1.25
            },
            short: {
                value: 1.375
            },
            moderate: {
                value: 1.5
            },
            tall: {
                value: 1.625
            },
            taller: {
                value: 2
            }
        }),
        sB = tB.defineTokens.radii({
            none: {
                value: "0"
            },
            "2xs": {
                value: "0.0625rem"
            },
            xs: {
                value: "0.125rem"
            },
            sm: {
                value: "0.25rem"
            },
            md: {
                value: "0.375rem"
            },
            lg: {
                value: "0.5rem"
            },
            xl: {
                value: "0.75rem"
            },
            "2xl": {
                value: "1rem"
            },
            "3xl": {
                value: "1.5rem"
            },
            "4xl": {
                value: "2rem"
            },
            full: {
                value: "9999px"
            }
        }),
        sH = tB.defineTokens.spacing({
            .5: {
                value: "0.125rem"
            },
            1: {
                value: "0.25rem"
            },
            1.5: {
                value: "0.375rem"
            },
            2: {
                value: "0.5rem"
            },
            2.5: {
                value: "0.625rem"
            },
            3: {
                value: "0.75rem"
            },
            3.5: {
                value: "0.875rem"
            },
            4: {
                value: "1rem"
            },
            4.5: {
                value: "1.125rem"
            },
            5: {
                value: "1.25rem"
            },
            6: {
                value: "1.5rem"
            },
            7: {
                value: "1.75rem"
            },
            8: {
                value: "2rem"
            },
            9: {
                value: "2.25rem"
            },
            10: {
                value: "2.5rem"
            },
            11: {
                value: "2.75rem"
            },
            12: {
                value: "3rem"
            },
            14: {
                value: "3.5rem"
            },
            16: {
                value: "4rem"
            },
            20: {
                value: "5rem"
            },
            24: {
                value: "6rem"
            },
            28: {
                value: "7rem"
            },
            32: {
                value: "8rem"
            },
            36: {
                value: "9rem"
            },
            40: {
                value: "10rem"
            },
            44: {
                value: "11rem"
            },
            48: {
                value: "12rem"
            },
            52: {
                value: "13rem"
            },
            56: {
                value: "14rem"
            },
            60: {
                value: "15rem"
            },
            64: {
                value: "16rem"
            },
            72: {
                value: "18rem"
            },
            80: {
                value: "20rem"
            },
            96: {
                value: "24rem"
            }
        }),
        sj = tB.defineTokens.sizes({
            "3xs": {
                value: "14rem"
            },
            "2xs": {
                value: "16rem"
            },
            xs: {
                value: "20rem"
            },
            sm: {
                value: "24rem"
            },
            md: {
                value: "28rem"
            },
            lg: {
                value: "32rem"
            },
            xl: {
                value: "36rem"
            },
            "2xl": {
                value: "42rem"
            },
            "3xl": {
                value: "48rem"
            },
            "4xl": {
                value: "56rem"
            },
            "5xl": {
                value: "64rem"
            },
            "6xl": {
                value: "72rem"
            },
            "7xl": {
                value: "80rem"
            },
            "8xl": {
                value: "90rem"
            }
        }),
        sU = tB.defineTokens.sizes({
            max: {
                value: "max-content"
            },
            min: {
                value: "min-content"
            },
            fit: {
                value: "fit-content"
            },
            prose: {
                value: "60ch"
            },
            full: {
                value: "100%"
            },
            dvh: {
                value: "100dvh"
            },
            svh: {
                value: "100svh"
            },
            lvh: {
                value: "100lvh"
            },
            dvw: {
                value: "100dvw"
            },
            svw: {
                value: "100svw"
            },
            lvw: {
                value: "100lvw"
            },
            vw: {
                value: "100vw"
            },
            vh: {
                value: "100vh"
            }
        }),
        sG = tB.defineTokens.sizes({
            "1/2": {
                value: "50%"
            },
            "1/3": {
                value: "33.333333%"
            },
            "2/3": {
                value: "66.666667%"
            },
            "1/4": {
                value: "25%"
            },
            "3/4": {
                value: "75%"
            },
            "1/5": {
                value: "20%"
            },
            "2/5": {
                value: "40%"
            },
            "3/5": {
                value: "60%"
            },
            "4/5": {
                value: "80%"
            },
            "1/6": {
                value: "16.666667%"
            },
            "2/6": {
                value: "33.333333%"
            },
            "3/6": {
                value: "50%"
            },
            "4/6": {
                value: "66.666667%"
            },
            "5/6": {
                value: "83.333333%"
            },
            "1/12": {
                value: "8.333333%"
            },
            "2/12": {
                value: "16.666667%"
            },
            "3/12": {
                value: "25%"
            },
            "4/12": {
                value: "33.333333%"
            },
            "5/12": {
                value: "41.666667%"
            },
            "6/12": {
                value: "50%"
            },
            "7/12": {
                value: "58.333333%"
            },
            "8/12": {
                value: "66.666667%"
            },
            "9/12": {
                value: "75%"
            },
            "10/12": {
                value: "83.333333%"
            },
            "11/12": {
                value: "91.666667%"
            }
        }),
        sq = tB.defineTokens.sizes({ ...sj,
            ...sH,
            ...sG,
            ...sU
        }),
        sY = tB.defineTokens.zIndex({
            hide: {
                value: -1
            },
            base: {
                value: 0
            },
            docked: {
                value: 10
            },
            dropdown: {
                value: 1e3
            },
            sticky: {
                value: 1100
            },
            banner: {
                value: 1200
            },
            overlay: {
                value: 1300
            },
            modal: {
                value: 1400
            },
            popover: {
                value: 1500
            },
            skipNav: {
                value: 1600
            },
            toast: {
                value: 1700
            },
            tooltip: {
                value: 1800
            },
            max: {
                value: 0x7fffffff
            }
        }),
        sK = eL(tZ, (0, tB.defineConfig)({
            preflight: !0,
            cssVarsPrefix: "chakra",
            cssVarsRoot: ":where(html, .chakra-theme)",
            globalCss: t0,
            theme: {
                breakpoints: {
                    sm: "480px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                },
                keyframes: sL,
                tokens: {
                    aspectRatios: sP,
                    animations: sE,
                    blurs: sV,
                    borders: sT,
                    colors: sR,
                    durations: s_,
                    easings: sO,
                    fonts: sD,
                    fontSizes: sA,
                    fontWeights: sN,
                    letterSpacings: sW,
                    lineHeights: sM,
                    radii: sB,
                    spacing: sH,
                    sizes: sq,
                    zIndex: sY,
                    cursor: sz
                },
                semanticTokens: {
                    colors: ah,
                    shadows: af,
                    radii: am
                },
                recipes: {
                    badge: t5,
                    button: t3,
                    code: t7,
                    container: ae,
                    heading: at,
                    input: ar,
                    inputAddon: ai,
                    kbd: ao,
                    link: al,
                    mark: an,
                    separator: ad,
                    skeleton: ac,
                    skipNavLink: au,
                    spinner: ag,
                    textarea: ap,
                    icon: aa,
                    checkmark: t4,
                    radiomark: as,
                    colorSwatch: t9
                },
                slotRecipes: {
                    accordion: oz,
                    actionBar: o_,
                    alert: oO,
                    avatar: oN,
                    blockquote: oF,
                    breadcrumb: oD,
                    card: oL,
                    carousel: o$,
                    checkbox: oJ,
                    checkboxCard: oQ,
                    codeBlock: o0,
                    collapsible: o2,
                    dataList: o4,
                    dialog: o6,
                    drawer: o8,
                    editable: o9,
                    emptyState: le,
                    field: lt,
                    fieldset: la,
                    fileUpload: lr,
                    hoverCard: lo,
                    list: ll,
                    listbox: ln,
                    menu: ls,
                    nativeSelect: lc,
                    numberInput: lj,
                    pinInput: l5,
                    popover: l3,
                    progress: l6,
                    progressCircle: l8,
                    radioCard: nw,
                    radioGroup: nE,
                    ratingGroup: nP,
                    scrollArea: nH,
                    segmentGroup: nU,
                    select: ld,
                    combobox: o3,
                    slider: nG,
                    splitter: nq,
                    stat: nY,
                    steps: nX,
                    switch: n$,
                    table: nZ,
                    tabs: nJ,
                    tag: n0,
                    tagsInput: sl,
                    toast: ss,
                    tooltip: sc,
                    status: nK,
                    timeline: sn,
                    colorPicker: o5,
                    qrCode: nI,
                    treeView: sI
                },
                textStyles: sw,
                layerStyles: t1,
                animationStyles: t2
            }
        }));
    tF(sK);
    let sX = (0, tB.defineConfig)({ ...sK,
            strictTokens: !0,
            preflight: !1,
            theme: {
                breakpoints: {
                    sm: "768px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                },
                tokens: {
                    colors: {
                        rose: {
                            50: {
                                value: "#fff1f2"
                            },
                            100: {
                                value: "#ffe4e6"
                            },
                            200: {
                                value: "#fecdd3"
                            },
                            300: {
                                value: "#fda4af"
                            },
                            400: {
                                value: "#fb7185"
                            },
                            500: {
                                value: "#f43f5e"
                            },
                            600: {
                                value: "#e11d48"
                            },
                            700: {
                                value: "#be123c"
                            },
                            800: {
                                value: "#9f1239"
                            },
                            900: {
                                value: "#881337"
                            }
                        }
                    }
                }
            },
            globalCss: {
                html: {
                    colorPalette: "red"
                },
                body: {
                    bg: {
                        base: "white",
                        _dark: "gray.900"
                    },
                    color: {
                        base: "gray.900",
                        _dark: "white"
                    }
                },
                ":focus-visible": {
                    outlineColor: "colorPalette.500"
                }
            }
        }),
        s$ = tF(sK, sX);
    e.s(["BRAND_COLOR", () => "red", "default", 0, s$, "selectorClasses", 0, {
        focusRing: "outline-none focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
    }], 57222)
}, 997837, e => {
    "use strict";
    var t = e.i(879994);

    function a(e) {
        return {
            onFetch: (a, o) => {
                var l, n, s, d, c;
                let u = a.options,
                    g = null == (s = a.fetchOptions) || null == (n = s.meta) || null == (l = n.fetchMore) ? void 0 : l.direction,
                    p = (null == (d = a.state.data) ? void 0 : d.pages) || [],
                    h = (null == (c = a.state.data) ? void 0 : c.pageParams) || [],
                    m = {
                        pages: [],
                        pageParams: []
                    },
                    f = 0,
                    v = async () => {
                        let o = !1,
                            l = (0, t.ensureQueryFn)(a.options, a.fetchOptions),
                            n = async (e, r, i) => {
                                let n;
                                if (o) return Promise.reject();
                                if (null == r && e.pages.length) return Promise.resolve(e);
                                let s = (Object.defineProperty(n = {
                                        client: a.client,
                                        queryKey: a.queryKey,
                                        pageParam: r,
                                        direction: i ? "backward" : "forward",
                                        meta: a.options.meta
                                    }, "signal", {
                                        enumerable: !0,
                                        get: () => (a.signal.aborted ? o = !0 : a.signal.addEventListener("abort", () => {
                                            o = !0
                                        }), a.signal)
                                    }), n),
                                    d = await l(s),
                                    {
                                        maxPages: c
                                    } = a.options,
                                    u = i ? t.addToStart : t.addToEnd;
                                return {
                                    pages: u(e.pages, d, c),
                                    pageParams: u(e.pageParams, r, c)
                                }
                            };
                        if (g && p.length) {
                            let e = "backward" === g,
                                t = {
                                    pages: p,
                                    pageParams: h
                                },
                                a = (e ? i : r)(u, t);
                            m = await n(t, a, e)
                        } else {
                            let t = null != e ? e : p.length;
                            do {
                                var s;
                                let e = 0 === f ? null != (s = h[0]) ? s : u.initialPageParam : r(u, m);
                                if (f > 0 && null == e) break;
                                m = await n(m, e), f++
                            } while (f < t)
                        }
                        return m
                    };
                a.options.persister ? a.fetchFn = () => {
                    var e, t;
                    return null == (e = (t = a.options).persister) ? void 0 : e.call(t, v, {
                        client: a.client,
                        queryKey: a.queryKey,
                        meta: a.options.meta,
                        signal: a.signal
                    }, o)
                } : a.fetchFn = v
            }
        }
    }

    function r(e, t) {
        let {
            pages: a,
            pageParams: r
        } = t, i = a.length - 1;
        return a.length > 0 ? e.getNextPageParam(a[i], a, r[i], r) : void 0
    }

    function i(e, t) {
        var a;
        let {
            pages: r,
            pageParams: i
        } = t;
        return r.length > 0 ? null == (a = e.getPreviousPageParam) ? void 0 : a.call(e, r[0], r, i[0], i) : void 0
    }

    function o(e, t) {
        return !!t && null != r(e, t)
    }

    function l(e, t) {
        return !!t && !!e.getPreviousPageParam && null != i(e, t)
    }
    e.s(["hasNextPage", () => o, "hasPreviousPage", () => l, "infiniteQueryBehavior", () => a])
}]);

//# debugId=c50c9afa-a6ce-ece8-b9bd-e435ceb2314a
//# sourceMappingURL=e7c19db8ef400db8.js.map