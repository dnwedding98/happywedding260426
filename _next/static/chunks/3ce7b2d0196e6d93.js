;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "8de00c8b-5502-6644-fbb7-0ea1ec291335")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 694582, e => {
    "use strict";
    let n = "https://www.youtube.com/playlist?list=PL6-hGeKxQQeujdHrT-ZhJFPXUsBB97Sri",
        t = {
            panelTitle: "Xin chào! Bạn cần hỗ trợ gì?",
            searchPlaceholder: "Tìm kiếm câu hỏi...",
            categoriesTitle: "DANH MỤC CÂU HỎI",
            contactCtaLabel: "Không tìm thấy? Liên hệ hỗ trợ trực tiếp",
            contactPanelTitle: "Liên hệ hỗ trợ trực tiếp",
            backToFaqLabel: "Quay lại hướng dẫn",
            categories: [{
                id: "getting-started",
                title: "Bắt đầu nhanh",
                iconKey: "rocket",
                itemIds: ["quick-start"]
            }, {
                id: "edit-content",
                title: "Chỉnh sửa nội dung thiệp",
                iconKey: "cardEdit",
                itemIds: ["edit-title-cover", "new-element", "crop-image", "section-adjustment"]
            }, {
                id: "guest-gift-maps",
                title: "Khách mời, Quà tặng & Google Maps",
                iconKey: "guestGift",
                itemIds: ["edit-gift-box", "edit-maps", "guest-name"]
            }, {
                id: "sharing-devices",
                title: "Gửi mời, Chia sẻ & Thiết bị",
                iconKey: "share",
                itemIds: ["send-invite", "seo-still-old", "toggle-device-ui"]
            }, {
                id: "basic-effects",
                title: "Nhạc nền & Hiệu ứng",
                iconKey: "settings",
                itemIds: ["basic-effects"]
            }, {
                id: "upgrade-backup",
                title: "Mua tính năng & Khôi phục",
                iconKey: "billingBackup",
                itemIds: ["feature-purchase", "restore-backup"]
            }],
            items: [{
                id: "quick-start",
                title: "Cách làm thiệp nhanh chỉ trong vài phút.",
                shortAnswer: "Tạo thiệp theo 3 bước: Bước 1: Chọn mẫu thiệp yêu thích, nhập các thông tin cơ bản để bắt đầu. Bước 2: Chỉnh sửa trực tiếp hoặc chọn “Làm thiệp nhanh” để bắt đầu tạo thiệp. Bước 3: Lưu và Công khai/Xuất bản thiệp để bắt đầu gửi đến bạn bè và người thân.",
                keywords: ["nhanh", "3 bước", "bắt đầu", "quick start", "làm thiệp"],
                imageUrls: ["/guide/floating/1-1.jpg", "/guide/floating/1-2.jpg", "/guide/floating/1-3.jpg", "/guide/floating/1-4.jpg", "/guide/floating/1-5.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n,
                cta: {
                    label: "Mở luồng hướng dẫn chi tiết",
                    href: "/builder/guide"
                }
            }, {
                id: "edit-title-cover",
                title: "Hướng dẫn chỉnh sửa tiêu đề, mô tả thiệp và hình ảnh bìa cho thiệp.",
                shortAnswer: "Chỉnh sửa ở phần cài đặt thiệp cưới khi ở màn hình quản lý hoặc cài đặt SEO trong trình chỉnh sửa thiệp (tự mở sau khi xuất bản thành công hoặc trong mục cài đặt).",
                keywords: ["tiêu đề", "mô tả", "ảnh bìa", "cover", "hero"],
                imageUrls: ["/guide/floating/2-1.jpg", "/guide/floating/2-2.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "edit-gift-box",
                title: "Hướng dẫn chỉnh sửa hộp mừng cưới.",
                shortAnswer: "Mở section Hộp mừng cưới hoặc popup để cập nhật tên ngân hàng, số tài khoản và chủ tài khoản. Sau khi lưu, hãy kiểm tra lại QR hoặc thông tin hiển thị công khai.",
                keywords: ["hộp mừng cưới", "quà tặng", "chuyển khoản", "qr"],
                imageUrls: ["/guide/floating/6-1.jpg", "/guide/floating/6-2.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "edit-maps",
                title: "Hướng dẫn chỉnh sửa và thay đổi Google maps.",
                shortAnswer: "Tại section địa điểm hoặc các nút ấn mở google link, ấn vào các phần tử đó và cài đặt phần SỰ KIỆN, dán link Google Maps hoặc toạ độ mới. Đảm bảo link mở đúng vị trí bằng cách bấm thử trên mobile trước khi gửi khách mời.",
                keywords: ["google maps", "bản đồ", "địa điểm", "tọa độ"],
                imageUrls: ["/guide/floating/7-1.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "guest-name",
                title: "Hướng dẫn ghi tên khách mời.",
                shortAnswer: "Tại mỗi thiệp nhà meHappy sẽ có các phần tử được đánh dấu là nội dung tên khách mời, bạn có thể sửa thông tin khi gửi link ( phần hiển thị khi gửi link ở messenger/zalo ) tại cài đặt SEO hoặc cài đặt thiệp mời. Sau đó bạn mở phần Quản lý khách mời để thêm khách và xuất bản link riêng cho từng khách. Lưu ý: nhớ xuất bản trang trước khi gửi link và hãy ấn nút copy link thiệp thay vì tự bôi đen và copy để link được cập nhật ngay sau khi bạn cài đặt xong.",
                keywords: ["khách mời", "ghi tên", "cá nhân hóa", "import"],
                imageUrls: ["/guide/floating/8-1.jpg", "/guide/floating/8-2.jpg", "/guide/floating/8-3.jpg", "/guide/floating/8-4.jpg", "/guide/floating/8-5.jpg", "/guide/floating/8-6.jpg", "/guide/floating/8-7.jpg", "/guide/floating/8-8.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "send-invite",
                title: "Hướng dẫn gửi mời và chia sẻ thiệp.",
                shortAnswer: "Sau khi xuất bản, lấy link hoặc QR để gửi qua Zalo, Messenger, Email. Nên gửi thử cho chính bạn để kiểm tra hiển thị trước khi gửi hàng loạt.",
                keywords: ["gửi mời", "chia sẻ", "qr", "xuất bản", "publish"],
                imageUrls: ["/guide/floating/9-1.jpg", "/guide/floating/9-2.jpg", "/guide/floating/9-3.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "seo-still-old",
                title: "Đã cập nhật thông tin nhưng khi gửi link vẫn hiện nội dung cũ, phải làm sao?",
                shortAnswer: 'Các ứng dụng chat như Zalo, Messenger, Facebook thường lưu sẵn bản xem trước cũ của link. Sau khi bạn đổi tiêu đề, mô tả hoặc ảnh đại diện thiệp và đã xuất bản, hãy dùng nút "Copy xóa cache ( dùng khi bạn vừa có thay đổi về thiệp)" để lấy link mới rồi gửi lại. Nếu vẫn chưa cập nhật, chờ 1-5 phút và gửi lại, hoặc gửi trong cuộc trò chuyện mới.',
                keywords: ["nội dung cũ", "ảnh cũ", "cache", "zalo", "messenger", "facebook", "preview", "copy xóa cache"],
                imageUrls: ["/guide/floating/14-1.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "new-element",
                title: "Hướng dẫn tạo và thêm 1 phần tử mới.",
                shortAnswer: "Trong editor, bấm thêm phần tử và chọn loại phù hợp (text, ảnh, nút, gallery...). Đặt tên dễ nhớ cho section để chỉnh sửa nhanh về sau.",
                keywords: ["phần tử", "section mới", "add element", "editor"],
                imageUrls: ["/guide/floating/3-1.jpg", "/guide/floating/3-2.jpg", "/guide/floating/3-3.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "basic-effects",
                title: "Hướng dẫn thay đổi các phần cơ bản như: Nhạc nền, Hiệu ứng tim tuyết, Mở thiệp,….",
                shortAnswer: "Trong phần cài đặt hiệu ứng, bạn có thể bật/tắt nhạc nền, hiệu ứng tim/tuyết, hiệu ứng mở thiệp. Kiểm tra tốc độ tải sau khi bật nhiều hiệu ứng cùng lúc.",
                keywords: ["nhạc nền", "tim tuyết", "mở thiệp", "hiệu ứng"],
                imageUrls: ["/guide/floating/11-1.jpg", "/guide/floating/11-2.jpg", "/guide/floating/11-3.jpg", "/guide/floating/11-4.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "crop-image",
                title: "Hướng dẫn Crop/Cắt sửa hình ảnh.",
                shortAnswer: "Khi upload ảnh, dùng công cụ crop để căn chủ thể vào trung tâm và giữ tỷ lệ phù hợp. Ưu tiên kiểm tra bằng ảnh preview trên desktop/mobile trước khi lưu.",
                keywords: ["crop", "cắt ảnh", "chỉnh ảnh", "upload"],
                imageUrls: ["/guide/floating/4-1.jpg", "/guide/floating/4-2.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "section-adjustment",
                title: "Hướng dẫn điều chỉnh 1 Section/Danh mục trên thiệp.",
                shortAnswer: "Chọn section / phần tử cần chỉnh, cập nhật nội dung, khoảng cách, màu nền và thứ tự hiển thị bằng cách giữ và kéo thả phần tử, chỉnh sửa phần tử sau khi chọn ở cửa sổ cài đặt. Xem trước toàn trang để tránh lệch bố cục giữa các section.",
                keywords: ["section", "danh mục", "bố cục", "layout"],
                imageUrls: ["/guide/floating/5-1.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "toggle-device-ui",
                title: "Hướng dẫn Tắt/Bật hoặc chỉnh sửa giao diện Máy tính/Mobile.",
                shortAnswer: "Dùng nút chuyển chế độ chỉnh sửa để kiểm tra desktop/mobile. Nếu một thành phần bị lệch, ưu tiên sửa ở breakpoint tương ứng rồi xem lại cả hai chế độ. Nếu bạn muốn chỉ mở giao diện mobile thì cài đặt ở phần Mode trong Cài đặt toàn trang. Lưu ý, khi chỉnh sửa ở điện thoại thì bạn sẽ chỉ chỉnh sửa được phiên bản thiệp ở điện thoại, hãy dùng máy tính để có thể thấy nút chuyển này.",
                keywords: ["desktop", "mobile", "responsive", "preview"],
                imageUrls: ["/guide/floating/10-1.jpg", "/guide/floating/10-2.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "feature-purchase",
                title: "Hướng dẫn mua thêm tính năng cho user.",
                shortAnswer: "Vào phần nâng cấp để xem tính năng mở khoá theo gói. Chọn đúng tính năng cần dùng trước để tối ưu chi phí và tránh mua nhầm.",
                keywords: ["mua thêm", "nâng cấp", "unlock feature", "gói"],
                imageUrls: ["/guide/floating/12-1.jpg", "/guide/floating/12-2.jpg", "/guide/floating/12-3.jpg", "/guide/floating/12-4.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }, {
                id: "restore-backup",
                title: "Hướng dẫn khôi phục bản sao lưu chỉnh sửa trước đó.",
                shortAnswer: "Mở lịch sử/chế độ sao lưu để chọn phiên bản muốn khôi phục. Nên kiểm tra mốc thời gian và tạo bản sao hiện tại trước khi rollback để tránh mất dữ liệu.",
                keywords: ["khôi phục", "backup", "rollback", "lịch sử"],
                imageUrls: ["/guide/floating/13-1.jpg", "/guide/floating/13-2.jpg"],
                videoUrls: [n],
                imageUrl: null,
                videoUrl: n
            }]
        };
    e.s(["resolveFloatingFaqConfig", 0, e => ({ ...t,
        ...e,
        categories: (null == e ? void 0 : e.categories) || t.categories,
        items: (null == e ? void 0 : e.items) || t.items
    })])
}, 938367, e => {
    "use strict";
    var n = e.i(230840),
        t = e.i(483632),
        i = e.i(564668),
        o = e.i(811779),
        l = e.i(119887),
        r = e.i(165341),
        a = e.i(878262),
        s = e.i(791089),
        c = e.i(184600),
        h = e.i(251570),
        d = e.i(972004),
        g = e.i(569210),
        u = e.i(901407),
        p = e.i(476659),
        m = e.i(694582);

    function x() {
        let e = (0, n._)(["\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"]);
        return x = function() {
            return e
        }, e
    }

    function f() {
        let e = (0, n._)(["\n  0% { transform: translateX(0); opacity: 1; }\n  100% { transform: translateX(-100%); opacity: 0; }\n"]);
        return f = function() {
            return e
        }, e
    }

    function b() {
        let e = (0, n._)(["\n  0% { transform: translateX(100%); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n"]);
        return b = function() {
            return e
        }, e
    }

    function y() {
        let e = (0, n._)(["\n  0% { transform: translateX(100%); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n"]);
        return y = function() {
            return e
        }, e
    }
    let w = (0, c.keyframes)(x()),
        v = (0, c.keyframes)(f()),
        j = (0, c.keyframes)(b()),
        k = (0, c.keyframes)(y()),
        C = "mehappy:floating-widget",
        z = ["zalo", "messenger", "phone", "email", "whatsapp"],
        B = e => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim(),
        U = e => {
            try {
                let n = new URL(e);
                if (n.hostname.includes("youtu.be")) return n.pathname.split("/").filter(Boolean)[0] || null;
                if (n.hostname.includes("youtube.com")) {
                    if ("/watch" === n.pathname) return n.searchParams.get("v");
                    if (n.pathname.startsWith("/shorts/") || n.pathname.startsWith("/embed/")) return n.pathname.split("/")[2] || null
                }
            } catch {}
            return null
        },
        S = e => {
            let n = U(e);
            if (n) return "https://www.youtube.com/embed/".concat(n);
            try {
                let n = new URL(e);
                if (n.hostname.includes("vimeo.com")) {
                    let e = n.pathname.split("/").filter(Boolean)[0];
                    if (e && /^\d+$/.test(e)) return "https://player.vimeo.com/video/".concat(e)
                }
            } catch {}
            return null
        },
        I = e => {
            let n = U(e);
            return n ? "https://img.youtube.com/vi/".concat(n, "/hqdefault.jpg") : null
        },
        L = (e, n) => {
            let t = Array.isArray(e) ? e.map(e => e.trim()).filter(Boolean) : [];
            return t.length > 0 ? t : n && n.trim() ? [n.trim()] : []
        },
        T = () => ({
            hiddenUntil: 0,
            position: null
        }),
        A = () => {
            try {
                let e = p.safeLocalStorage.getItem(C);
                if (!e) return T();
                let n = JSON.parse(e);
                return {
                    hiddenUntil: "number" == typeof n.hiddenUntil ? n.hiddenUntil : 0,
                    position: n.position && "number" == typeof n.position.x && "number" == typeof n.position.y ? n.position : null
                }
            } catch {
                return T()
            }
        },
        F = e => {
            p.safeLocalStorage.setItem(C, JSON.stringify(e))
        },
        R = (e, n, t) => Math.min(Math.max(e, n), t),
        _ = e => 12 + (window.innerWidth < 768 ? "manager-safe" === e ? 132 : 96 : 0),
        H = (e, n, t, i) => ({
            x: R(e.x, 12, window.innerWidth - n - 12),
            y: R(e.y, 12, window.innerHeight - t - _(i))
        }),
        W = (e, n, t) => {
            let i = window.innerWidth < 768 ? "manager-safe" === t ? 132 : 96 : 0,
                o = "manager-safe" === t && window.innerWidth < 768 ? Math.max(18, Math.round(.02 * window.innerHeight)) : Math.max(24, Math.round(.05 * window.innerHeight));
            return {
                x: window.innerWidth - e - 12,
                y: window.innerHeight - n - o - i
            }
        };

    function M(e) {
        var n, c, p, x, f, b, y, C, U, T, M, E, q, D, P, K, N, X, O, G, V, Q, Z, Y, J, $, ee;
        let en, et, ei, eo, {
                contactPhone: el = "0848753999",
                contactZalo: er = "https://zalo.me/3304755126989386670",
                contactFacebook: ea = "mehappy.vn",
                contactEmail: es = "meweddingg@gmail.com",
                contactWhatsApp: ec = "",
                mobileDockMode: eh = "default",
                chatWidgetConfig: ed = null,
                chatTextOverrides: eg = null,
                faqEnabled: eu = !0,
                faqConfig: ep = null
            } = e,
            em = "manager-safe" === eh && window.innerWidth < 768,
            ex = A(),
            ef = W(64, 140, eh),
            [eb, ey] = (0, h.useState)(!0),
            [ew, ev] = (0, h.useState)(!1),
            [ej, ek] = (0, h.useState)(!0),
            [eC, ez] = (0, h.useState)(!1),
            [eB, eU] = (0, h.useState)(0 === ex.hiddenUntil),
            [eS, eI] = (0, h.useState)(ef),
            [eL, eT] = (0, h.useState)(null),
            [eA, eF] = (0, h.useState)("faq"),
            [eR, e_] = (0, h.useState)("home"),
            [eH, eW] = (0, h.useState)(""),
            [eM, eE] = (0, h.useState)(null),
            [eq, eD] = (0, h.useState)(null),
            [eP, eK] = (0, h.useState)(null),
            [eN, eX] = (0, h.useState)(window.innerWidth < 768),
            eO = (0, h.useRef)(null),
            eG = (0, h.useRef)(null),
            eV = (0, h.useRef)(null),
            eQ = (0, h.useMemo)(() => (0, m.resolveFloatingFaqConfig)(ep), [ep]),
            eZ = () => {
                ez(!1), eK(null)
            },
            eY = (0, h.useMemo)(() => eP && "image" === eP.type ? eP.imageUrls && eP.imageUrls.length > 0 ? eP.imageUrls : eP.url ? [eP.url] : [] : [], [eP]),
            eJ = (0, h.useMemo)(() => {
                if (!eP || "image" !== eP.type) return 0;
                if ("number" == typeof eP.activeIndex) return eP.activeIndex;
                let e = eY.indexOf(eP.url);
                return e >= 0 ? e : 0
            }, [eY, eP]),
            e$ = e => {
                eK(n => {
                    if (!n || "image" !== n.type) return n;
                    let t = n.imageUrls && n.imageUrls.length > 0 ? n.imageUrls : n.url ? [n.url] : [];
                    if (t.length <= 1) return n;
                    let i = ("number" == typeof n.activeIndex ? n.activeIndex : Math.max(0, t.indexOf(n.url))) + e;
                    return i < 0 || i >= t.length ? n : { ...n,
                        activeIndex: i,
                        url: t[i]
                    }
                })
            },
            e0 = (null == eP ? void 0 : eP.type) === "image" && eJ > 0,
            e1 = (null == eP ? void 0 : eP.type) === "image" && eJ < eY.length - 1,
            e2 = (0, h.useMemo)(() => new Map(eQ.items.map(e => [e.id, e])), [eQ.items]),
            e3 = (0, h.useMemo)(() => eQ.categories.map(e => ({ ...e,
                items: e.itemIds.map(e => e2.get(e)).filter(Boolean)
            })), [e2, eQ.categories]),
            e6 = (0, h.useMemo)(() => B(eH), [eH]),
            e5 = (0, h.useMemo)(() => {
                var e;
                return eM || (null == (e = e3[0]) ? void 0 : e.id) || null
            }, [eM, e3]),
            e8 = (0, h.useMemo)(() => e3.find(e => e.id === e5) || null, [e5, e3]),
            e4 = (0, h.useMemo)(() => e6 && "category" !== eR ? e3.filter(e => B([e.title, ...e.items.map(e => [e.title, e.shortAnswer, ...e.keywords].join(" "))].join(" ")).includes(e6)) : e3, [e3, eR, e6]),
            e7 = (0, h.useMemo)(() => {
                if (!eu || !e8) return [];
                let e = e8.items;
                return e6 ? e.filter(e => B([e.title, e.shortAnswer, ...e.keywords].join(" ")).includes(e6)) : e
            }, [eu, e6, e8]),
            e9 = (0, h.useMemo)(() => eq && e7.some(e => e.id === eq) ? eq : null, [eq, e7]);
        (0, h.useEffect)(() => {
            let e = () => {
                eX(window.innerWidth < 768)
            };
            return e(), window.addEventListener("resize", e), () => {
                window.removeEventListener("resize", e)
            }
        }, []), (0, h.useEffect)(() => {
            let e = setInterval(() => {
                ev(!0), setTimeout(() => {
                    ek(!1), ey(e => !e), setTimeout(() => {
                        ek(!0), ev(!1)
                    }, 10)
                }, 300)
            }, 3e3);
            return () => clearInterval(e)
        }, []), (0, h.useEffect)(() => {
            let e = Date.now(),
                n = A();
            return n.hiddenUntil > e ? (window.setTimeout(() => eU(!1), 0), eV.current = window.setTimeout(() => {
                eU(!0);
                let e = W(64, 140, eh);
                eI(e), F({
                    hiddenUntil: 0,
                    position: e
                })
            }, n.hiddenUntil - e)) : (window.setTimeout(() => eU(!0), 0), 0 !== n.hiddenUntil && F({
                hiddenUntil: 0,
                position: W(64, 140, eh)
            })), () => {
                eV.current && window.clearTimeout(eV.current)
            }
        }, [em, eh]), (0, h.useEffect)(() => {
            if (!eB || !eS || !eO.current) return;
            let e = eO.current.getBoundingClientRect(),
                n = H(eS, e.width, e.height, eh);
            (n.x !== eS.x || n.y !== eS.y) && eI(n)
        }, [eB, eh, eS]), (0, h.useEffect)(() => {
            if (!eB || !eS || !eO.current) return;
            let e = () => {
                if (!eO.current) return;
                let e = eO.current.getBoundingClientRect(),
                    n = em ? W(e.width, e.height, eh) : H(eS, e.width, e.height, eh);
                eI(n), F({
                    hiddenUntil: 0,
                    position: n
                })
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [em, eB, eh, eS]), (0, h.useEffect)(() => {
            let e = e => {
                let n = e.target;
                eG.current && !eG.current.contains(n) && eO.current && !eO.current.contains(n) && eZ()
            };
            return eC && !eP && document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [eP, eC]), (0, h.useEffect)(() => {
            if (!eP) return;
            let e = e => {
                "Escape" === e.key ? eK(null) : "image" === eP.type && "ArrowLeft" === e.key ? e$(-1) : "image" === eP.type && "ArrowRight" === e.key && e$(1)
            };
            return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
            }
        }, [eP]), (0, h.useEffect)(() => {
            if (!eC || !eO.current || !eS || eN) return;
            let e = () => {
                    var e;
                    if (!eO.current) return;
                    let n = eO.current.getBoundingClientRect(),
                        t = (null == (e = eG.current) ? void 0 : e.offsetHeight) || 620,
                        i = n.right - 360;
                    i = R(i, 12, window.innerWidth - 360 - 12);
                    let o = n.top - t - 10;
                    o < 12 && (o = R(n.bottom + 10, 12, window.innerHeight - t - 12)), eT({
                        x: i,
                        y: o
                    })
                },
                n = window.requestAnimationFrame(e);
            return window.addEventListener("resize", e), () => {
                window.cancelAnimationFrame(n), window.removeEventListener("resize", e)
            }
        }, [eA, eN, eS, eC]);
        let ne = (et = (en = (null == ed ? void 0 : ed.channelOrder) || z).filter((e, n) => z.includes(e) && en.indexOf(e) === n), ei = z.filter(e => !et.includes(e)), [...et, ...ei]),
            nn = (null == ed || null == (c = ed.channels) || null == (n = c.phone) ? void 0 : n.value) || el || "0848753999",
            nt = (null == ed || null == (x = ed.channels) || null == (p = x.zalo) ? void 0 : p.value) || er || "https://zalo.me/3304755126989386670",
            ni = (null == ed || null == (b = ed.channels) || null == (f = b.messenger) ? void 0 : f.value) || ea || "mehappy.vn",
            no = (null == ed || null == (C = ed.channels) || null == (y = C.email) ? void 0 : y.value) || es || "meweddingg@gmail.com",
            nl = (e => {
                if (!e) return null;
                let n = e.trim();
                if (!n) return null;
                if (/^https?:\/\//i.test(n)) return n;
                let t = n.replace(/[^\d]/g, "");
                return t ? "https://wa.me/".concat(t) : null
            })((null == ed || null == (T = ed.channels) || null == (U = T.whatsapp) ? void 0 : U.value) || ec),
            nr = {};
        if ((null == (V = null == ed || null == (E = ed.channels) || null == (M = E.phone) ? void 0 : M.enabled) || V) && nn && (nr.phone = {
                key: "phone",
                icon: (0, t.jsx)(d.FcPhone, {
                    size: 20
                }),
                title: (null == eg ? void 0 : eg.phone) || nn,
                onClick: () => window.open("tel:".concat(nn), "_blank")
            }), (null == (Q = null == ed || null == (D = ed.channels) || null == (q = D.zalo) ? void 0 : q.enabled) || Q) && nt) {
            let e = nt.startsWith("http") ? nt : "https://zalo.me/".concat(nt);
            nr.zalo = {
                key: "zalo",
                icon: (0, t.jsx)(l.Image, {
                    src: "/zalo.svg",
                    alt: "Zalo",
                    boxSize: {
                        base: "20px",
                        md: "22px"
                    },
                    objectFit: "contain"
                }),
                title: (null == eg ? void 0 : eg.zalo) || "Chat Zalo",
                onClick: () => window.open(e, "_blank")
            }
        }
        if ((null == (Z = null == ed || null == (K = ed.channels) || null == (P = K.messenger) ? void 0 : P.enabled) || Z) && ni) {
            let e = ni.startsWith("http") ? ni : "https://www.messenger.com/t/".concat(ni);
            nr.messenger = {
                key: "messenger",
                icon: (0, t.jsx)(l.Image, {
                    src: "/messenger.svg",
                    alt: "Messenger",
                    boxSize: {
                        base: "24px",
                        md: "26px"
                    },
                    transform: "scale(2)",
                    objectFit: "contain"
                }),
                title: (null == eg ? void 0 : eg.messenger) || "Chat Facebook",
                onClick: () => window.open(e, "_blank")
            }
        }(null == (Y = null == ed || null == (X = ed.channels) || null == (N = X.email) ? void 0 : N.enabled) || Y) && no && (nr.email = {
            key: "email",
            icon: (0, t.jsx)(l.Image, {
                src: "/icons/gmail.png",
                alt: "Email",
                boxSize: {
                    base: "20px",
                    md: "22px"
                },
                objectFit: "contain"
            }),
            title: (null == eg ? void 0 : eg.email) || no,
            onClick: () => window.open("mailto:".concat(no), "_blank")
        }), null != (J = null == ed || null == (G = ed.channels) || null == (O = G.whatsapp) ? void 0 : O.enabled) && J && nl && (nr.whatsapp = {
            key: "whatsapp",
            icon: (0, t.jsx)(g.FaWhatsapp, {
                size: 20,
                color: "#25D366"
            }),
            title: (null == eg ? void 0 : eg.whatsapp) || "Chat WhatsApp",
            onClick: () => window.open(nl, "_blank")
        });
        let na = ne.map(e => nr[e]).filter(Boolean),
            ns = [];
        nr.messenger && ns.push("messenger"), nr.zalo && ns.push("zalo"), nr.whatsapp && ns.push("whatsapp"), 0 === ns.length && ns.push("messenger", "zalo");
        let nc = ns[0],
            nh = ns[1] || ns[0],
            nd = eb ? nc : nh,
            ng = () => {
                0 !== na.length && (eF("contacts"), ez(!0))
            };
        if (!eB || !eS) return null;
        let nu = _(eh);
        return (0, t.jsxs)(a.Portal, {
            children: [(0, t.jsxs)(i.Box, {
                ref: eO,
                position: "fixed",
                top: "".concat(eS.y, "px"),
                left: "".concat(eS.x, "px"),
                rounded: "2xl",
                p: {
                    base: 1,
                    md: 1.5
                },
                bg: {
                    base: "white",
                    _dark: "gray.800"
                },
                border: "1px solid",
                borderColor: {
                    base: "rose.200",
                    _dark: "rose.700"
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: {
                    base: 1.5,
                    md: 2
                },
                w: "fit-content",
                animation: "".concat(w, " 2s ease-in-out infinite"),
                boxShadow: "0 18px 36px -18px rgba(244,63,94,0.55)",
                zIndex: 9999,
                children: [(0, t.jsx)(i.Box, {
                    w: "full",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: 1,
                    children: (0, t.jsx)(i.Box, {
                        as: "button",
                        onClick: () => {
                            var e, n, t;
                            eZ();
                            let i = null == (e = eO.current) ? void 0 : e.getBoundingClientRect(),
                                o = W(null != (n = null == i ? void 0 : i.width) ? n : 64, null != (t = null == i ? void 0 : i.height) ? t : 140, eh);
                            eI(o), eU(!1), F({
                                hiddenUntil: Date.now() + 12e4,
                                position: o
                            }), eV.current && window.clearTimeout(eV.current), eV.current = window.setTimeout(() => {
                                eU(!0), F({
                                    hiddenUntil: 0,
                                    position: o
                                })
                            }, 12e4)
                        },
                        cursor: "pointer",
                        p: 1,
                        borderRadius: "full",
                        color: {
                            base: "gray.600",
                            _dark: "gray.300"
                        },
                        _hover: {
                            bg: {
                                base: "rose.50",
                                _dark: "rose.900/20"
                            }
                        },
                        "aria-label": "Hide floating widget",
                        children: (0, t.jsx)(u.LuX, {
                            size: 14
                        })
                    })
                }), (0, t.jsxs)(i.Box, {
                    as: "button",
                    onClick: () => {
                        if (eu) {
                            if (eC && "faq" === eA) return void eZ();
                            e_("home"), eW(""), eD(null), eF("faq"), ez(!0)
                        }
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    cursor: eu ? "pointer" : "not-allowed",
                    opacity: eu ? 1 : .6,
                    children: [(0, t.jsx)(o.Circle, {
                        size: {
                            base: "36px",
                            md: "44px"
                        },
                        bg: "rose.500",
                        color: "white",
                        boxShadow: "0 8px 18px -8px rgba(225,29,72,0.8)",
                        children: (0, t.jsx)(u.LuBadgeHelp, {
                            size: eN ? 18 : 20
                        })
                    }), (0, t.jsx)(s.Text, {
                        fontSize: {
                            base: "10px",
                            md: "11px"
                        },
                        fontWeight: "700",
                        letterSpacing: "0.02em",
                        color: {
                            base: "rose.700",
                            _dark: "rose.200"
                        },
                        children: "Hỗ trợ"
                    })]
                }), (0, t.jsx)(o.Circle, {
                    size: {
                        base: "30px",
                        md: "36px"
                    },
                    bg: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    overflow: "hidden",
                    position: "relative",
                    onClick: () => {
                        if (0 !== na.length) {
                            if (eC && "contacts" === eA) return void eZ();
                            ng()
                        }
                    },
                    cursor: na.length > 0 ? "pointer" : "not-allowed",
                    opacity: na.length > 0 ? 1 : .6,
                    children: ej && (0, t.jsx)(i.Box, {
                        animation: ew ? "".concat(v, " 0.3s ease") : "".concat(j, " 0.3s ease"),
                        position: "absolute",
                        children: "whatsapp" === nd ? (0, t.jsx)(g.FaWhatsapp, {
                            size: 24,
                            color: "#25D366"
                        }) : "zalo" === nd ? (0, t.jsx)(l.Image, {
                            src: "/zalo.svg",
                            alt: "Zalo",
                            boxSize: {
                                base: "22px",
                                md: "24px"
                            },
                            objectFit: "contain"
                        }) : (0, t.jsx)(l.Image, {
                            src: "/messenger.svg",
                            alt: "Messenger",
                            boxSize: {
                                base: "26px",
                                md: "28px"
                            },
                            transform: "scale(2)",
                            objectFit: "contain"
                        })
                    }, nd)
                })]
            }), eC && (eN || eL) && (0, t.jsxs)(i.Box, {
                ref: eG,
                position: "fixed",
                top: eN ? void 0 : "".concat(null != ($ = null == eL ? void 0 : eL.y) ? $ : 12, "px"),
                left: eN ? "".concat(12, "px") : "".concat(null != (ee = null == eL ? void 0 : eL.x) ? ee : 12, "px"),
                bottom: eN ? "".concat(nu, "px") : void 0,
                bg: {
                    base: "white",
                    _dark: "gray.800"
                },
                boxShadow: "0 24px 52px -18px rgba(15, 23, 42, 0.35)",
                borderRadius: {
                    base: "2xl",
                    md: "md"
                },
                zIndex: 1e4,
                w: eN ? "calc(100vw - ".concat(24, "px)") : "".concat(360, "px"),
                h: eN ? "min(78vh, calc(100vh - ".concat(nu + 12, "px))") : "min(".concat(620, "px, 76vh)"),
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animation: "".concat(k, " 0.3s ease forwards"),
                border: "1px solid",
                borderColor: {
                    base: "rose.100",
                    _dark: "rose.800"
                },
                children: [(0, t.jsxs)(i.Box, {
                    bg: {
                        base: "white",
                        _dark: "gray.800"
                    },
                    px: 4,
                    pt: 3,
                    pb: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    borderBottom: "1px solid",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.700"
                    },
                    position: "relative",
                    children: [(0, t.jsx)(i.Box, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        h: "3px",
                        bgGradient: "linear(to-r, rose.500, pink.400, orange.300)"
                    }), (0, t.jsxs)(i.Box, {
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        minW: 0,
                        children: ["contacts" === eA && eu || "faq" === eA && "category" === eR ? (0, t.jsx)(i.Box, {
                            as: "button",
                            onClick: () => {
                                "contacts" === eA ? eF("faq") : (e_("home"), eW(""), eD(null))
                            },
                            borderRadius: "full",
                            p: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: {
                                base: "gray.600",
                                _dark: "gray.300"
                            },
                            _hover: {
                                bg: {
                                    base: "rose.50",
                                    _dark: "rose.900/20"
                                }
                            },
                            "aria-label": eQ.backToFaqLabel,
                            children: (0, t.jsx)(u.LuArrowLeft, {
                                size: 16
                            })
                        }) : null, (0, t.jsx)(s.Text, {
                            fontSize: {
                                base: "md",
                                md: "lg"
                            },
                            fontWeight: "800",
                            color: {
                                base: "gray.800",
                                _dark: "gray.100"
                            },
                            lineHeight: "1.2",
                            lineClamp: 1,
                            children: "contacts" === eA ? eQ.contactPanelTitle : "category" === eR && (null == e8 ? void 0 : e8.title) || eQ.panelTitle
                        })]
                    }), (0, t.jsx)(i.Box, {
                        as: "button",
                        onClick: eZ,
                        "aria-label": "Close floating panel",
                        borderRadius: "full",
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: {
                            base: "gray.600",
                            _dark: "gray.300"
                        },
                        _hover: {
                            bg: {
                                base: "rose.50",
                                _dark: "rose.900/20"
                            }
                        },
                        children: (0, t.jsx)(u.LuX, {
                            size: 16
                        })
                    })]
                }), "faq" === eA ? (0, t.jsxs)(i.Box, {
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    overflowY: "auto",
                    minH: 0,
                    children: [(0, t.jsxs)(i.Box, {
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        border: "1px solid",
                        borderColor: "rose.100",
                        borderRadius: "xl",
                        px: 3,
                        py: 2.5,
                        bg: "rose.50",
                        children: [(0, t.jsx)(u.LuSearch, {
                            size: 16,
                            color: "#BE123C"
                        }), (0, t.jsx)(r.Input, {
                            value: eH,
                            onChange: e => eW(e.target.value),
                            placeholder: eQ.searchPlaceholder,
                            flex: "1",
                            variant: "flushed",
                            fontSize: "sm",
                            fontWeight: "500",
                            color: "gray.700",
                            bg: "transparent",
                            borderBottom: "none",
                            _focusVisible: {
                                outline: "none",
                                boxShadow: "none",
                                borderColor: "transparent"
                            },
                            _placeholder: {
                                color: "gray.400"
                            }
                        })]
                    }), (0, t.jsx)(s.Text, {
                        fontSize: "xs",
                        fontWeight: "800",
                        letterSpacing: "0.08em",
                        color: "rose.500",
                        children: eQ.categoriesTitle
                    }), "home" === eR ? (0, t.jsx)(i.Box, {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        children: e4.map(e => {
                            var n;
                            let l;
                            return (0, t.jsxs)(i.Box, {
                                as: "button",
                                onClick: () => {
                                    eE(e.id), eD(null), eW(""), e_("category")
                                },
                                border: "1px solid",
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.700"
                                },
                                bg: "linear-gradient(180deg, #FFFFFF 0%, #FFF7F9 100%)",
                                borderRadius: "xl",
                                px: 3,
                                py: 3,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 2,
                                textAlign: "left",
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                                _hover: {
                                    borderColor: "rose.300",
                                    boxShadow: "0 8px 20px -14px rgba(225,29,72,0.45)"
                                },
                                children: [(0, t.jsxs)(i.Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2.5,
                                    minW: 0,
                                    flex: "1",
                                    children: [(0, t.jsx)(o.Circle, {
                                        size: "34px",
                                        bg: "rose.50",
                                        border: "1px solid",
                                        borderColor: "rose.100",
                                        flexShrink: 0,
                                        children: (n = e.iconKey, l = "#E11D48", "rocket" === n ? (0, t.jsx)(u.LuRocket, {
                                            size: 20,
                                            color: l
                                        }) : "cardEdit" === n ? (0, t.jsx)(u.LuPencil, {
                                            size: 20,
                                            color: l
                                        }) : "share" === n ? (0, t.jsx)(u.LuShare2, {
                                            size: 20,
                                            color: l
                                        }) : "guestGift" === n ? (0, t.jsx)(u.LuGift, {
                                            size: 20,
                                            color: l
                                        }) : "settings" === n ? (0, t.jsx)(u.LuSettings2, {
                                            size: 20,
                                            color: l
                                        }) : (0, t.jsx)(u.LuCoins, {
                                            size: 20,
                                            color: l
                                        }))
                                    }), (0, t.jsx)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "700",
                                        color: "gray.800",
                                        lineHeight: "1.3",
                                        lineClamp: 2,
                                        children: e.title
                                    })]
                                }), (0, t.jsxs)(i.Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    flexShrink: 0,
                                    children: [(0, t.jsxs)(s.Text, {
                                        fontSize: "11px",
                                        color: "rose.700",
                                        bg: "rose.100",
                                        px: 2,
                                        py: .5,
                                        borderRadius: "full",
                                        fontWeight: "600",
                                        children: [e.items.length, " câu hỏi"]
                                    }), (0, t.jsx)(i.Box, {
                                        color: "rose.600",
                                        children: (0, t.jsx)(u.LuChevronRight, {
                                            size: 14
                                        })
                                    })]
                                })]
                            }, e.id)
                        })
                    }) : (0, t.jsxs)(i.Box, {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        children: [e6 ? (0, t.jsx)(s.Text, {
                            fontSize: "xs",
                            color: "gray.500",
                            px: .5,
                            children: e7.length > 0 ? "Tìm thấy ".concat(e7.length, " kết quả") : "Không tìm thấy kết quả phù hợp"
                        }) : null, e7.map(e => {
                            let n = e9 === e.id,
                                r = L(e.imageUrls, e.imageUrl),
                                a = L(e.videoUrls, e.videoUrl);
                            return (0, t.jsxs)(i.Box, {
                                border: "1px solid",
                                borderColor: n ? "rose.300" : "gray.200",
                                borderRadius: "xl",
                                px: 3,
                                py: 2.5,
                                bg: n ? "rose.50" : "white",
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                                boxShadow: n ? "0 8px 20px -16px rgba(225,29,72,0.45)" : "none",
                                children: [(0, t.jsxs)(i.Box, {
                                    as: "button",
                                    onClick: () => eD(n => n === e.id ? null : e.id),
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "full",
                                    textAlign: "left",
                                    gap: 2,
                                    cursor: "pointer",
                                    children: [(0, t.jsx)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "700",
                                        color: "gray.800",
                                        lineHeight: "1.35",
                                        lineClamp: 2,
                                        children: e.title
                                    }), (0, t.jsx)(i.Box, {
                                        color: n ? "rose.600" : "gray.500",
                                        flexShrink: 0,
                                        children: n ? (0, t.jsx)(u.LuChevronDown, {
                                            size: 16
                                        }) : (0, t.jsx)(u.LuChevronRight, {
                                            size: 16
                                        })
                                    })]
                                }), n ? (0, t.jsxs)(i.Box, {
                                    mt: 2.5,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5,
                                    children: [(0, t.jsx)(s.Text, {
                                        fontSize: "sm",
                                        color: "gray.600",
                                        lineHeight: "1.5",
                                        children: e.shortAnswer
                                    }), r.length > 0 || a.length > 0 ? (0, t.jsxs)(i.Box, {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2.5,
                                        children: [r.length > 0 ? (0, t.jsxs)(i.Box, {
                                            border: "1px dashed",
                                            borderColor: "rose.200",
                                            borderRadius: "lg",
                                            p: 2.5,
                                            bg: "white",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 2,
                                            children: [(0, t.jsxs)(i.Box, {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                children: [(0, t.jsx)(u.LuImage, {
                                                    size: 15,
                                                    color: "#BE123C"
                                                }), (0, t.jsx)(s.Text, {
                                                    fontSize: "xs",
                                                    fontWeight: "700",
                                                    color: "gray.700",
                                                    children: "Hình ảnh hướng dẫn"
                                                })]
                                            }), (0, t.jsx)(i.Box, {
                                                display: "grid",
                                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                                gap: 2,
                                                children: r.map((n, o) => (0, t.jsxs)(i.Box, {
                                                    as: "button",
                                                    onClick: () => eK({
                                                        type: "image",
                                                        url: n,
                                                        title: e.title,
                                                        imageUrls: r,
                                                        activeIndex: o
                                                    }),
                                                    borderRadius: "md",
                                                    overflow: "hidden",
                                                    border: "1px solid",
                                                    borderColor: "rose.100",
                                                    bg: "gray.100",
                                                    position: "relative",
                                                    textAlign: "left",
                                                    _hover: {
                                                        borderColor: "rose.300",
                                                        boxShadow: "0 6px 18px -14px rgba(225,29,72,0.55)"
                                                    },
                                                    children: [(0, t.jsxs)(i.Box, {
                                                        position: "absolute",
                                                        top: 1,
                                                        left: 1,
                                                        px: 1.5,
                                                        py: .5,
                                                        borderRadius: "sm",
                                                        bg: "blackAlpha.700",
                                                        color: "white",
                                                        fontSize: "10px",
                                                        fontWeight: "700",
                                                        zIndex: 1,
                                                        children: ["#", o + 1]
                                                    }), (0, t.jsx)(l.Image, {
                                                        src: n,
                                                        alt: "Hình minh hoạ ".concat(o + 1, " cho ").concat(e.title),
                                                        objectFit: "contain",
                                                        h: "92px",
                                                        w: "full"
                                                    })]
                                                }, "".concat(e.id, "-image-").concat(o)))
                                            }), (0, t.jsx)(s.Text, {
                                                fontSize: "xs",
                                                color: "gray.600",
                                                children: "Chạm vào ảnh để xem đầy đủ"
                                            })]
                                        }) : null, a.length > 0 ? (0, t.jsxs)(i.Box, {
                                            border: "1px dashed",
                                            borderColor: "rose.200",
                                            borderRadius: "lg",
                                            p: 2.5,
                                            bg: "white",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 2,
                                            children: [(0, t.jsxs)(i.Box, {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                minW: 0,
                                                children: [(0, t.jsx)(u.LuCirclePlay, {
                                                    size: 16,
                                                    color: "#BE123C"
                                                }), (0, t.jsx)(s.Text, {
                                                    fontSize: "xs",
                                                    fontWeight: "700",
                                                    color: "gray.700",
                                                    lineClamp: 1,
                                                    children: "Video hướng dẫn"
                                                })]
                                            }), (0, t.jsx)(i.Box, {
                                                display: "grid",
                                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                                gap: 2,
                                                children: a.map((n, r) => (0, t.jsx)(i.Box, {
                                                    as: "button",
                                                    onClick: () => {
                                                        (e => {
                                                            try {
                                                                let n = new URL(e);
                                                                return n.hostname.includes("youtube.com") || n.hostname.includes("youtu.be")
                                                            } catch {
                                                                return !1
                                                            }
                                                        })(n) ? window.open(n, "_blank", "noopener,noreferrer"): eK({
                                                            type: "video",
                                                            url: n,
                                                            title: e.title
                                                        })
                                                    },
                                                    borderRadius: "md",
                                                    overflow: "hidden",
                                                    border: "1px solid",
                                                    borderColor: "rose.100",
                                                    bg: "gray.900",
                                                    textAlign: "left",
                                                    _hover: {
                                                        borderColor: "rose.300",
                                                        boxShadow: "0 6px 18px -14px rgba(225,29,72,0.55)"
                                                    },
                                                    children: I(n) ? (0, t.jsxs)(i.Box, {
                                                        position: "relative",
                                                        children: [(0, t.jsx)(l.Image, {
                                                            src: I(n) || "",
                                                            alt: "Video preview ".concat(r + 1, " cho ").concat(e.title),
                                                            objectFit: "cover",
                                                            h: "92px",
                                                            w: "full"
                                                        }), (0, t.jsx)(i.Box, {
                                                            position: "absolute",
                                                            inset: "0",
                                                            bg: "blackAlpha.500",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            children: (0, t.jsx)(o.Circle, {
                                                                size: "30px",
                                                                bg: "whiteAlpha.900",
                                                                color: "gray.900",
                                                                children: (0, t.jsx)(u.LuCirclePlay, {
                                                                    size: 16
                                                                })
                                                            })
                                                        })]
                                                    }) : (0, t.jsxs)(i.Box, {
                                                        h: "90px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "white",
                                                        gap: 1.5,
                                                        px: 2,
                                                        children: [(0, t.jsx)(u.LuCirclePlay, {
                                                            size: 16
                                                        }), (0, t.jsxs)(s.Text, {
                                                            fontSize: "xs",
                                                            fontWeight: "700",
                                                            children: ["Video ", r + 1]
                                                        })]
                                                    })
                                                }, "".concat(e.id, "-video-").concat(r)))
                                            }), (0, t.jsx)(s.Text, {
                                                fontSize: "xs",
                                                color: "gray.600",
                                                children: "Chạm vào video để mở toàn màn hình"
                                            })]
                                        }) : null]
                                    }) : null, e.cta ? (0, t.jsx)(i.Box, {
                                        as: "button",
                                        onClick: () => {
                                            var n;
                                            (null == (n = e.cta) ? void 0 : n.href) && window.open(e.cta.href, "_blank")
                                        },
                                        border: "1px solid",
                                        borderColor: "rose.200",
                                        borderRadius: "md",
                                        px: 3,
                                        py: 2,
                                        bg: "rose.50",
                                        color: "rose.700",
                                        fontSize: "xs",
                                        fontWeight: "700",
                                        textAlign: "left",
                                        _hover: {
                                            bg: "rose.100"
                                        },
                                        children: e.cta.label
                                    }) : null]
                                }) : null]
                            }, e.id)
                        }), 0 === e7.length ? (0, t.jsx)(i.Box, {
                            border: "1px dashed",
                            borderColor: "gray.300",
                            borderRadius: "xl",
                            px: 3,
                            py: 4,
                            textAlign: "center",
                            bg: "gray.50",
                            children: (0, t.jsx)(s.Text, {
                                fontSize: "sm",
                                color: "gray.600",
                                children: "Chưa có câu hỏi phù hợp. Hãy thử từ khóa khác."
                            })
                        }) : null]
                    }), (0, t.jsxs)(i.Box, {
                        as: "button",
                        onClick: () => {
                            0 !== na.length && ng()
                        },
                        border: "1px dashed",
                        borderColor: "rose.200",
                        borderRadius: "xl",
                        px: 3,
                        py: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        bg: "linear-gradient(180deg, #FFFFFF 0%, #FFF7F9 100%)",
                        _hover: {
                            bg: "rose.50",
                            borderColor: "rose.300"
                        },
                        opacity: 0 === na.length ? .6 : 1,
                        cursor: 0 === na.length ? "not-allowed" : "pointer",
                        "aria-disabled": 0 === na.length,
                        children: [(0, t.jsxs)(i.Box, {
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            minW: 0,
                            children: [(0, t.jsx)(u.LuBadgeHelp, {
                                size: 16,
                                color: "#BE123C"
                            }), (0, t.jsx)(s.Text, {
                                fontSize: "sm",
                                color: "gray.700",
                                fontWeight: "600",
                                lineClamp: 1,
                                children: eQ.contactCtaLabel
                            })]
                        }), (0, t.jsx)(i.Box, {
                            color: "rose.600",
                            flexShrink: 0,
                            children: (0, t.jsx)(u.LuChevronRight, {
                                size: 16
                            })
                        })]
                    })]
                }) : (0, t.jsxs)(i.Box, {
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    overflowY: "auto",
                    minH: 0,
                    children: [eu ? (0, t.jsxs)(i.Box, {
                        as: "button",
                        onClick: () => {
                            eF("faq"), e_("home"), eW(""), eD(null)
                        },
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "lg",
                        px: 3,
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bg: "gray.50",
                        _hover: {
                            bg: "gray.100"
                        },
                        children: [(0, t.jsx)(s.Text, {
                            fontSize: "sm",
                            color: "gray.700",
                            fontWeight: "600",
                            children: eQ.backToFaqLabel
                        }), (0, t.jsx)(i.Box, {
                            color: "gray.600",
                            children: (0, t.jsx)(u.LuArrowLeft, {
                                size: 14
                            })
                        })]
                    }) : null, na.map((e, n) => {
                        let {
                            key: l,
                            icon: r,
                            title: a,
                            onClick: c
                        } = e;
                        return (0, t.jsxs)(i.Box, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                            border: "1px solid",
                            borderColor: "gray.200",
                            borderRadius: "lg",
                            px: 3,
                            py: 2,
                            bg: "white",
                            cursor: "pointer",
                            _hover: {
                                bg: "gray.50",
                                borderColor: "gray.300"
                            },
                            onClick: c,
                            children: [(0, t.jsxs)(i.Box, {
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                minW: 0,
                                children: [(0, t.jsx)(o.Circle, {
                                    size: "30px",
                                    bg: {
                                        base: "gray.200",
                                        _dark: "gray.700"
                                    },
                                    overflow: "hidden",
                                    position: "relative",
                                    children: r
                                }), (0, t.jsx)(s.Text, {
                                    fontWeight: "600",
                                    fontSize: "sm",
                                    color: {
                                        base: "gray.900",
                                        _dark: "white"
                                    },
                                    lineClamp: 1,
                                    children: a
                                })]
                            }), (0, t.jsx)(i.Box, {
                                color: "gray.500",
                                flexShrink: 0,
                                children: (0, t.jsx)(u.LuChevronRight, {
                                    size: 14
                                })
                            })]
                        }, "floating-channel-".concat(l, "-").concat(n))
                    })]
                })]
            }), eP ? (0, t.jsx)(i.Box, {
                position: "fixed",
                inset: "0",
                zIndex: 11e3,
                bg: "blackAlpha.700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 3,
                py: 5,
                onClick: () => eK(null),
                children: (0, t.jsxs)(i.Box, {
                    onClick: e => e.stopPropagation(),
                    bg: "white",
                    borderRadius: "xl",
                    border: "1px solid",
                    borderColor: "gray.200",
                    boxShadow: "2xl",
                    w: {
                        base: "100%",
                        md: "min(92vw, 900px)"
                    },
                    h: {
                        base: "min(82vh, 620px)",
                        md: "min(86vh, 720px)"
                    },
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    children: [(0, t.jsxs)(i.Box, {
                        px: 4,
                        py: 3,
                        bg: "gray.50",
                        borderBottom: "1px solid",
                        borderColor: "gray.200",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        children: [(0, t.jsx)(s.Text, {
                            fontSize: "sm",
                            fontWeight: "700",
                            color: "gray.800",
                            lineClamp: 1,
                            children: "image" === eP.type ? "Ảnh hướng dẫn ".concat(eY.length > 0 ? "(".concat(eJ + 1, "/").concat(eY.length, ")") : "") : "Video hướng dẫn"
                        }), (0, t.jsx)(i.Box, {
                            as: "button",
                            onClick: () => eK(null),
                            "aria-label": "Close media preview",
                            borderRadius: "full",
                            p: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            _hover: {
                                bg: "gray.200"
                            },
                            children: (0, t.jsx)(u.LuX, {
                                size: 16
                            })
                        })]
                    }), (0, t.jsx)(i.Box, {
                        flex: "1",
                        minH: 0,
                        bg: "gray.900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        position: "relative",
                        overflow: "hidden",
                        children: "image" === eP.type ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.Box, {
                                w: "full",
                                h: "full",
                                minH: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                children: (0, t.jsx)(l.Image, {
                                    src: eP.url,
                                    alt: eP.title,
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    w: "100%",
                                    h: "100%"
                                })
                            }), (0, t.jsx)(i.Box, {
                                as: "button",
                                onClick: () => {
                                    e0 && e$(-1)
                                },
                                "aria-label": "Previous image",
                                position: "absolute",
                                left: 2,
                                top: "50%",
                                transform: "translateY(-50%)",
                                w: "36px",
                                h: "36px",
                                borderRadius: "full",
                                bg: e0 ? "blackAlpha.700" : "blackAlpha.400",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                _hover: e0 ? {
                                    bg: "blackAlpha.800"
                                } : void 0,
                                cursor: e0 ? "pointer" : "not-allowed",
                                children: (0, t.jsx)(u.LuChevronLeft, {
                                    size: 18
                                })
                            }), (0, t.jsx)(i.Box, {
                                as: "button",
                                onClick: () => {
                                    e1 && e$(1)
                                },
                                "aria-label": "Next image",
                                position: "absolute",
                                right: 2,
                                top: "50%",
                                transform: "translateY(-50%)",
                                w: "36px",
                                h: "36px",
                                borderRadius: "full",
                                bg: e1 ? "blackAlpha.700" : "blackAlpha.400",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                _hover: e1 ? {
                                    bg: "blackAlpha.800"
                                } : void 0,
                                cursor: e1 ? "pointer" : "not-allowed",
                                children: (0, t.jsx)(u.LuChevronRight, {
                                    size: 18
                                })
                            })]
                        }) : S(eP.url) ? (0, t.jsx)("iframe", {
                            src: S(eP.url) || "",
                            title: "Video hướng dẫn ".concat(eP.title),
                            width: "100%",
                            height: "100%",
                            style: {
                                border: 0,
                                borderRadius: "8px"
                            },
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0
                        }) : (eo = eP.url, /\.(mp4|webm|ogg|m4v|mov)(\?|#|$)/i.test(eo)) ? (0, t.jsx)("video", {
                            src: eP.url,
                            controls: !0,
                            style: {
                                width: "100%",
                                height: "100%",
                                borderRadius: "8px"
                            }
                        }) : (0, t.jsxs)(i.Box, {
                            textAlign: "center",
                            color: "white",
                            px: 5,
                            children: [(0, t.jsx)(s.Text, {
                                fontSize: "sm",
                                mb: 3,
                                children: "Video này chưa hỗ trợ preview trực tiếp."
                            }), (0, t.jsx)(i.Box, {
                                as: "button",
                                onClick: () => window.open(eP.url, "_blank"),
                                px: 3,
                                py: 2,
                                borderRadius: "md",
                                bg: "blue.600",
                                fontSize: "sm",
                                fontWeight: "700",
                                _hover: {
                                    bg: "blue.700"
                                },
                                children: "Mở video ở tab mới"
                            })]
                        })
                    })]
                })
            }) : null]
        })
    }
    e.s(["default", () => M])
}]);

//# debugId=8de00c8b-5502-6644-fbb7-0ea1ec291335
//# sourceMappingURL=9e52f0049b36455b.js.map