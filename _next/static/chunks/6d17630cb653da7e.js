;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "266d6dd3-9054-8cca-b0e1-62399f4f03b6")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 156594, t => {
    "use strict";
    var h = t.i(955343);

    function a(t) {
        return (0, h.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"
                },
                child: []
            }]
        })(t)
    }

    function i(t) {
        return (0, h.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M16.121 6.465 14 4.344V10h5.656l-2.121-2.121 3.172-3.172-1.414-1.414zM4.707 3.293 3.293 4.707l3.172 3.172L4.344 10H10V4.344L7.879 6.465zM19.656 14H14v5.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172zM6.465 16.121l-3.172 3.172 1.414 1.414 3.172-3.172L10 19.656V14H4.344z"
                },
                child: []
            }]
        })(t)
    }

    function c(t) {
        return (0, h.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "m21 15.344-2.121 2.121-3.172-3.172-1.414 1.414 3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121-3.172 3.172 1.414 1.414 3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121 3.172-3.172-1.414-1.414-3.172 3.172L3 15.344z"
                },
                child: []
            }]
        })(t)
    }
    t.s(["BiBuildings", () => a, "BiCollapse", () => i, "BiExpand", () => c])
}]);

//# debugId=266d6dd3-9054-8cca-b0e1-62399f4f03b6
//# sourceMappingURL=c5ced4131ea7b677.js.map