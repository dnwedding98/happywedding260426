;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "5b162338-e31c-256e-da4e-50ee8dd326be")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 797550, i => {
    "use strict";
    i.s(["pricingFeatures", 0, [{
        name: "meHappy sẽ Thiết kế thiệp, cài đặt thiệp cho bạn từ A-z.",
        description: "meHappy sẽ Thiết kế thiệp, cài đặt thiệp cho bạn từ A-z.",
        tooltip: "Áp dụng cho gói thiệp Yêu cầu meHappy thiết kế hộ",
        basic: !1,
        basicPlus: !0,
        pro: !1,
        proPlus: !0,
        vip: !1,
        vipPlus: !0
    }, {
        name: "Hỗ trợ mọi lúc mọi nơi.",
        description: "Hỗ trợ mọi lúc mọi nơi.",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Chỉnh sửa không giới hạn số lần hay thời gian trên Website meHappy",
        description: "Chỉnh sửa không giới hạn số lần hay thời gian trên Website meHappy",
        tooltip: "Trình thiết kế, chỉnh sửa Website/Thiệp cưới",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Gửi mời và truy cập không giới hạn",
        description: "Gửi mời và truy cập không giới hạn",
        tooltip: "Khách mời, mọi người có thể xem thiệp thoải mái không có giới hạn số lượt xem hay lượt truy cập",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Các tính năng cơ bản (Nhạc nền, hiệu ứng tim tuyết, hiệu ứng chuyển động)",
        description: "Các tính năng cơ bản (Nhạc nền, hiệu ứng tim tuyết, hiệu ứng chuyển động)",
        tooltip: "Có thể lựa chọn Nhạc nền theo danh sách nhạc có sẵn cho từng gói",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Quản ký kế hoạch cưới, ngân sách cưới",
        description: "Quản ký kế hoạch cưới, ngân sách cưới",
        tooltip: "Sử dụng MIỄN PHÍ công cụ Lập kế hoạch cưới, dự trù chi phí đám cưới của meHappy",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: 'Thông tin các "Sự kiện cưới", thời gian, địa điểm, time line.',
        description: 'Thông tin các "Sự kiện cưới", thời gian, địa điểm, time line.',
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thông tin về cô Dâu chú Rể.",
        description: "Thông tin về cô Dâu chú Rể.",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: 'Thông tin "Song Thân Phụ Mẫu" ,Tư gia địa chỉ 2 nhà.',
        description: 'Thông tin "Song Thân Phụ Mẫu" ,Tư gia địa chỉ 2 nhà.',
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Hộp mừng cưới (Thông tin chuyển khoản, QR Code).",
        description: "Hộp mừng cưới (Thông tin chuyển khoản, QR Code).",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Số lượng Ảnh cưới",
        description: "Số lượng Ảnh cưới",
        tooltip: "Là số lượng ảnh tối đa mà 1 gói có thể tải lên",
        basic: "10 Ảnh cưới",
        basicPlus: "20 Ảnh cưới",
        pro: "40 Ảnh cưới",
        proPlus: "40 Ảnh cưới",
        vip: "100 Ảnh cưới",
        vipPlus: "100 Ảnh cưới"
    }, {
        name: "Thời gian Công khai Thiệp cưới",
        description: "Thời gian Công khai Thiệp cưới",
        tooltip: "Link thiệp cưới sẽ bị đóng sau thời gian giới hạn. Bạn vẫn có thể vào xem và chỉnh sửa thiệp nhưng không thể gửi công khai cho người khác.",
        basic: "6 Tháng",
        basicPlus: "6 Tháng",
        pro: "2 Năm",
        proPlus: "2 Năm",
        vip: "Trọn đời",
        vipPlus: "Trọn đời"
    }, {
        name: "Số lượng Thiệp có thể tạo (Tạo thiệp nhà Trai, nhà Gái riêng nhau, Thiệp cho bố mẹ người thân hoặc Tách riêng các sự kiện cưới - Chỉ sử dụng cho 1 cô dâu chú rể)",
        description: "Số lượng Thiệp có thể tạo",
        tooltip: "Số lượng thiệp tối đa mà gói có thể tạo hoặc nhân bản.",
        basic: "1 Thiệp",
        basicPlus: "1 Thiệp",
        pro: "2 Thiệp",
        proPlus: "2 Thiệp",
        vip: "3 Thiệp",
        vipPlus: "3 Thiệp"
    }, {
        name: "Tạo mã QR cho thiệp cưới (in lên thiệp giấy, gửi cho bạn bè)",
        description: "Tạo mã QR cho thiệp cưới (in lên thiệp giấy, gửi cho bạn bè)",
        tooltip: "Mã QR dùng để dẫn đến thiệp cưới. Khách quét mã QR sẽ mở ra thiệp cưới.",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: 'Tính năng "Đếm ngược thời gian" đến sự kiện cưới.',
        description: 'Tính năng "Đếm ngược thời gian" đến sự kiện cưới.',
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Google Maps chỉ dẫn đến tận nơi diễn ra sự kiện cưới.",
        description: "Google Maps chỉ dẫn đến tận nơi diễn ra sự kiện cưới.",
        basic: !0,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tuỳ chỉnh hiệu ứng hiển thị tim, tuyết, hoa rơi",
        description: "Tuỳ chỉnh hiệu ứng hiển thị tim, tuyết, hoa rơi",
        tooltip: "Bạn có thể lựa chọn các hiệu ứng có sẵn của meHappy",
        basic: !1,
        basicPlus: !0,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Loại bỏ quảng cáo trên Website meHappy, meWedding",
        description: "Loại bỏ quảng cáo trên Website meHappy, meWedding",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thống kê thiệp (Đếm lượt truy cập vào Thiệp cưới, Khách mời, Lời chúc,...)",
        description: "Thống kê thiệp (Đếm lượt truy cập vào Thiệp cưới, Khách mời, Lời chúc,...)",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tuỳ chỉnh màu sắc, Font chữ cho Thiệp cưới",
        description: "Tuỳ chỉnh màu sắc, Font chữ cho Thiệp cưới",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tuỳ chỉnh thay đổi, sắp xếp các mục, các thiết kế giữa các mẫu với nhau",
        description: "Tuỳ chỉnh thay đổi, sắp xếp các mục, các thiết kế giữa các mẫu với nhau",
        tooltip: "Lắp ghép các phần từ thiệp này sang thiệp khác bằng tính năng thêm và tạo mẫu có sẵn của meHappy",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tuỳ chọn hiệu ứng mở thiệp",
        description: "Tuỳ chọn hiệu ứng mở thiệp",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tính năng Photobook online",
        description: "Tính năng Photobook online",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Cài mật khẩu cho Thiệp cưới",
        description: "Cài mật khẩu cho Thiệp cưới",
        tooltip: "Chỉ những người có mật khẩu mới có thể truy cập và xem thiệp của bạn",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thiết lập thông báo cho người xem Thiệp cưới (Poppup hiển thị trên thiệp cưới)",
        description: "Thiết lập thông báo cho người xem Thiệp cưới (Poppup hiển thị trên thiệp cưới)",
        tooltip: "Khi xem thiệp, sau 1 thời gian do bạn cài, sẽ mở ra 1 cửa sổ với thông tin mà bạn muốn khách mời xem được. Ví dụ các lưu ý khi đi cưới, xe đưa đón,...khách mời sẽ xem được trực tiếp trên màn hình luôn",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thay đổi giao diện Thiệp khác",
        description: "Thay đổi giao diện Thiệp khác",
        basic: !1,
        basicPlus: "MeHappy thiết kế hộ phí sẽ là 50%",
        pro: !0,
        proPlus: "MeHappy thiết kế hộ phí sẽ là 50%",
        vip: !0,
        vipPlus: "MeHappy thiết kế hộ phí sẽ là 50%"
    }, {
        name: "Gửi lời chúc mừng cưới và quản lý, phản hồi lời chúc của bạn bè",
        description: "Gửi lời chúc mừng cưới và quản lý, phản hồi lời chúc của bạn bè",
        tooltip: "Tính năng này cho phép khách mời có thể gửi lời chúc mừng tới bạn, và bạn cũng có thể quản lý và phản hồi lại lời chúc đấy, tất cả đều hiển thị trực tiếp trên thiệp của bạn luôn.",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tải xuống danh sách lời chúc, (danh sách khách mời cho VIP)",
        description: "Tải xuống danh sách lời chúc, (danh sách khách mời cho VIP)",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tải lên Video, Video cưới, Video khác",
        description: "Tải lên Video, Video cưới, Video khác",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tính năng Xác nhận tham dự và quản lý khách mời dự tiệc (Tiền mừng, Nhóm khách mời, Số lượng tham dự, Đi được hay không, Khách mời của ai,......)",
        description: "Tính năng Xác nhận tham dự và quản lý khách mời dự tiệc",
        tooltip: "Tính năng này cho phép khách mời sẽ xác nhận có tham dự đám cưới của bạn được hay không, đi bao nhiêu người,....giúp bạn dễ dàng hơn trong việc quản lý khách mời dự tiệc, chuẩn bị tốt hơn cho cỗ cưới, tiếp đón khách mời. Cùng nhiều tính năng hữu ích khác. Gói Pro Không thể custom thêm các phần, hoặc mở các câu hỏi khác cho Form",
        basic: !1,
        basicPlus: !1,
        pro: !0,
        proPlus: !0,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tải lên Font chữ yêu thích.",
        description: "Tải lên Font chữ yêu thích.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tải lên bài hát Yêu thích.",
        description: "Tải lên bài hát Yêu thích.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tải lên hiệu ứng yêu thích",
        description: "Tải lên hiệu ứng yêu thích",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: 'Sử dụng "Giao diện VIP" được thiết kế tỉ mỉ, đa dạng, đặc biệt dành riêng gói VIP.',
        description: 'Sử dụng "Giao diện VIP" được thiết kế tỉ mỉ, đa dạng, đặc biệt dành riêng gói VIP.',
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tính năng Tạo và gửi thiệp mời online cho từng khách (Ghi tên khách mời cá nhân hoá, không giới hạn số lượng)",
        description: "Tính năng Tạo và gửi thiệp mời online cho từng khách (Ghi tên khách mời cá nhân hoá, không giới hạn số lượng)",
        tooltip: "Cho phép bạn có thể tạo và gửi thiệp cho từng khách mời, tên khách sẽ được hiển thị ngay khi bạn gửi bên ngoài thiệp và cả bên trong thiệp mời. Được dùng thử 3 khách mời cho gói Basic và Pro",
        basic: "Được dùng thử 3 khách mời",
        basicPlus: "Được dùng thử 3 khách mời",
        pro: "Được dùng thử 3 khách mời",
        proPlus: "Được dùng thử 3 khách mời",
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thiệp mời báo cưới (Save the Date) + Ghi tên từng khách mời",
        description: "Thiệp mời báo cưới (Save the Date) + Ghi tên từng khách mời",
        tooltip: "Là thiệp mời invite tương tự như thiệp giấy cổ điển, nhưng được làm online, dùng để hiện tên khách mời, ngày giờ địa điểm, sự kiện cưới. Tạo sự sang trọng khi mời khách. Được dùng thử 3 khách mời cho gói Basic và Pro",
        basic: "Được dùng thử 3 khách mời",
        basicPlus: "Được dùng thử 3 khách mời",
        pro: "Được dùng thử 3 khách mời",
        proPlus: "Được dùng thử 3 khách mời",
        vip: !0,
        vipPlus: !0
    }, {
        name: "Ghi tên khách mời VIP (Kèm hình ảnh cá nhân hoá Khách mời)",
        description: "Ghi tên khách mời VIP (Kèm hình ảnh cá nhân hoá Khách mời)",
        tooltip: "Cho phép hiện ảnh khách mời lên thiệp khi gửi mời. Chỉ áp dụng hiển thị ở 1 số thiệp invite. Được dùng thử 3 khách mời cho gói Basic và Pro",
        basic: "Được dùng thử 3 khách mời",
        basicPlus: "Được dùng thử 3 khách mời",
        pro: "Được dùng thử 3 khách mời",
        proPlus: "Được dùng thử 3 khách mời",
        vip: !0,
        vipPlus: !0
    }, {
        name: "Thiệp mời hiển thị bên trong thiệp chính + hiện tên khách mời",
        description: "Thiệp mời hiển thị bên trong thiệp chính + hiện tên khách mời",
        tooltip: "Là thiệp mời hiển thị bên trong thiệp cưới của bạn, hiện tên khách mời, ngày giờ địa điểm, giúp thiệp của bạn trở nên sang trọng và đẩy đủ hơn.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: 'Tính năng "Đếm số thời gian đã cưới" sau khi kết thúc đám cưới',
        description: 'Tính năng "Đếm số thời gian đã cưới" sau khi kết thúc đám cưới',
        tooltip: "Giúp bạn biết được 2 bạn đã về chung 1 nhà được bao nhiêu ngày bắt đầu từ ngày cưới",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tính năng nhắc lịch hẹn đến ngày cưới",
        description: "Tính năng nhắc lịch hẹn đến ngày cưới",
        tooltip: "Cho phép lưu lịch cưới của bạn vào điện thoại, máy tính của khách mời. Đến ngày sẽ nhắc nhở khách mời về sự kiện đám cưới của bạn. Giúp khách mời chủ động hơn trong việc chuẩn bị tham dự đám cưới của bạn.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tính năng Gửi Mail nhắc ngày cưới",
        description: "Tính năng Gửi Mail nhắc ngày cưới",
        tooltip: "Cho phép bạn có thể tạo và lên lịch gửi mail nhắc nhở khách mời trước ngày cưới. Giúp khách mời chủ động chuẩn bị trước để tham dự đám cưới của bạn.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tạo Logo riêng cho Đám cưới",
        description: "Tạo Logo riêng cho Đám cưới",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Loại bỏ Logo meHappy, meWedding",
        description: "Loại bỏ Logo meHappy, meWedding",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tích hợp tên miền riêng (Custom Domain)",
        description: "Tích hợp tên miền riêng (Custom Domain)",
        tooltip: "Cho phép bạn có thể tích hợp Domain (Tên miền) riêng của bạn vào cho thiệp cưới.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Yêu cầu toàn quyền (Admin)",
        description: "Yêu cầu toàn quyền (Admin)",
        tooltip: "Mở full tất cả các quyền cho bạn để có thể tùy chỉnh thiệp theo ý mình. (Phù hợp với người biết về thiết kế, code web...)",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tuỳ chỉnh mã QRcode",
        description: "Tuỳ chỉnh mã QRcode",
        tooltip: "Cho phép bạn có thể tùy chỉnh mã QR, màu sắc, kiểu dáng, thêm icon, hình ảnh,...",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !0,
        vipPlus: !0
    }, {
        name: "Tặng thiệp thôi nôi, thiệp sinh nhật gói PRO miễn phí",
        description: "Tặng thiệp thôi nôi, thiệp sinh nhật gói PRO miễn phí",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !1,
        vipPlus: !0
    }, {
        name: "Tặng Video cưới Chibi, Animation vui nhộn, có thể trình chiếu ở sự kiện.",
        description: "Tặng Video cưới Chibi, Animation vui nhộn, có thể trình chiếu ở sự kiện.",
        basic: !1,
        basicPlus: !1,
        pro: !1,
        proPlus: !1,
        vip: !1,
        vipPlus: !0
    }]])
}, 618110, i => {
    "use strict";
    var e = i.i(483632),
        n = i.i(564668),
        t = i.i(791089),
        r = i.i(118190),
        o = i.i(215669),
        a = i.i(676525),
        s = i.i(649760);
    i.i(308972);
    var c = i.i(445979),
        l = i.i(797550),
        h = i.i(84723),
        d = i.i(728231);
    i.s(["default", 0, i => {
        let {
            isOpen: p,
            onClose: g,
            plan: u,
            onBuyFeatures: m,
            onUpgrade: b,
            zIndex: x
        } = i, {
            t: y
        } = (0, c.useTranslation)();
        if (!u) return null;
        u.startsWith("basic") || u.startsWith("pro");
        let f = u.includes("Plus");
        return (0, e.jsxs)(s.default, {
            isOpen: p,
            onClose: g,
            title: y("pricing.planDetailsModal.title", {
                plan: y("pricing.plans.".concat(u))
            }),
            maxWidth: "800px",
            maxHeight: "85vh",
            zIndex: x,
            children: [(0, e.jsxs)(r.VStack, {
                gap: 4,
                align: "stretch",
                children: [(0, e.jsx)(n.Box, {
                    py: 2,
                    px: {
                        base: 3,
                        md: 4
                    },
                    bg: {
                        base: "gray.50",
                        _dark: "gray.700"
                    },
                    borderBottomWidth: "1px",
                    borderColor: {
                        base: "gray.200",
                        _dark: "gray.600"
                    },
                    children: (0, e.jsxs)(o.HStack, {
                        justify: "space-between",
                        gap: 2,
                        children: [(0, e.jsx)(t.Text, {
                            fontWeight: "bold",
                            color: {
                                base: "gray.600",
                                _dark: "gray.300"
                            },
                            flex: 1,
                            fontSize: {
                                base: "sm",
                                md: "md"
                            },
                            children: "Tính năng"
                        }), (0, e.jsx)(t.Text, {
                            fontWeight: "bold",
                            color: {
                                base: "gray.600",
                                _dark: "gray.300"
                            },
                            w: {
                                base: "80px",
                                md: "120px"
                            },
                            textAlign: "center",
                            fontSize: {
                                base: "sm",
                                md: "md"
                            },
                            children: "Trạng thái"
                        })]
                    })
                }), (0, e.jsx)(n.Box, {
                    overflowY: "auto",
                    maxH: "calc(85vh - 280px)",
                    children: l.pricingFeatures.map((i, r) => {
                        let a = i[u];
                        return (0, e.jsx)(n.Box, {
                            py: {
                                base: 2.5,
                                md: 3
                            },
                            px: {
                                base: 3,
                                md: 4
                            },
                            _hover: {
                                bg: {
                                    base: "gray.50",
                                    _dark: "gray.700"
                                }
                            },
                            borderBottomWidth: r === l.pricingFeatures.length - 1 ? 0 : "1px",
                            borderColor: {
                                base: "gray.100",
                                _dark: "gray.700"
                            },
                            children: (0, e.jsxs)(o.HStack, {
                                justify: "space-between",
                                align: "start",
                                gap: 2,
                                children: [(0, e.jsx)(n.Box, {
                                    flex: 1,
                                    pr: {
                                        base: 2,
                                        md: 4
                                    },
                                    children: i.tooltip ? (0, e.jsx)(d.Tooltip, {
                                        content: i.tooltip,
                                        positioning: {
                                            placement: "top",
                                            strategy: "fixed"
                                        },
                                        openOnClick: !0,
                                        portalled: !0,
                                        contentProps: {
                                            zIndex: 99999
                                        },
                                        children: (0, e.jsxs)(o.HStack, {
                                            gap: 1.5,
                                            cursor: "pointer",
                                            children: [(0, e.jsx)(t.Text, {
                                                fontSize: {
                                                    base: "xs",
                                                    md: "sm"
                                                },
                                                color: {
                                                    base: "gray.800",
                                                    _dark: "gray.200"
                                                },
                                                lineHeight: "1.4",
                                                children: i.description
                                            }), (0, e.jsx)(n.Box, {
                                                as: h.FiInfo,
                                                w: {
                                                    base: "12px",
                                                    md: "14px"
                                                },
                                                h: {
                                                    base: "12px",
                                                    md: "14px"
                                                },
                                                color: "blue.500",
                                                flexShrink: 0
                                            })]
                                        })
                                    }) : (0, e.jsx)(t.Text, {
                                        fontSize: {
                                            base: "xs",
                                            md: "sm"
                                        },
                                        color: {
                                            base: "gray.800",
                                            _dark: "gray.200"
                                        },
                                        lineHeight: "1.4",
                                        children: i.description
                                    })
                                }), (0, e.jsx)(n.Box, {
                                    w: {
                                        base: "80px",
                                        md: "120px"
                                    },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: "boolean" == typeof a ? a ? (0, e.jsx)(n.Box, {
                                        as: h.FiCheck,
                                        w: "18px",
                                        h: "18px",
                                        color: "green.500"
                                    }) : (0, e.jsx)(n.Box, {
                                        as: h.FiX,
                                        w: "18px",
                                        h: "18px",
                                        color: "gray.400"
                                    }) : (0, e.jsx)(t.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.700",
                                            _dark: "gray.300"
                                        },
                                        fontWeight: "medium",
                                        textAlign: "center",
                                        children: a
                                    })
                                })]
                            })
                        }, r)
                    })
                })]
            }), (0, e.jsxs)(n.Box, {
                mt: 6,
                children: ["vipPlus" !== u && (0, e.jsxs)(n.Box, {
                    mb: 4,
                    children: [(0, e.jsx)(t.Text, {
                        fontSize: "sm",
                        color: "gray.600",
                        mb: 3,
                        textAlign: "center",
                        fontWeight: "medium",
                        children: f ? "Nâng cấp lên gói cao hơn để mở khóa thêm tính năng" : "Thêm dịch vụ thiết kế hộ hoặc nâng cấp lên gói cao hơn"
                    }), (0, e.jsxs)(o.HStack, {
                        justify: "center",
                        gap: 3,
                        children: [(0, e.jsx)(a.default, {
                            onClick: m,
                            variant: "purple",
                            size: "sm",
                            children: y("pricing.planDetailsModal.buyMoreFeatures")
                        }), (0, e.jsx)(a.default, {
                            onClick: b,
                            variant: "fill",
                            size: "sm",
                            children: y("pricing.planDetailsModal.upgradePlan")
                        })]
                    })]
                }), (0, e.jsx)(n.Box, {
                    display: "flex",
                    justifyContent: "flex-end",
                    children: (0, e.jsx)(a.default, {
                        onClick: g,
                        variant: "outline",
                        size: "sm",
                        children: y("pricing.planDetailsModal.close")
                    })
                })]
            })]
        })
    }])
}, 819060, 76e3, i => {
    "use strict";
    var e = i.i(483632),
        n = i.i(251570),
        t = i.i(564668),
        r = i.i(165341),
        o = i.i(791089),
        a = i.i(118190),
        s = i.i(215669),
        c = i.i(119887),
        l = i.i(789757),
        h = i.i(494114),
        d = i.i(51715),
        p = i.i(643736),
        g = i.i(676525),
        u = i.i(625959),
        m = i.i(649760),
        b = i.i(986530),
        x = i.i(201975),
        y = i.i(940948),
        f = i.i(79663),
        v = i.i(297272),
        T = i.i(951629);
    i.i(308972);
    var P = i.i(445979),
        k = i.i(476659);
    let j = "discount_countdown_end_time",
        S = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        C = i => {
            if (!i) return null;
            let e = Date.parse(i);
            return Number.isNaN(e) ? null : e
        },
        _ = i => i <= 0 ? S : {
            days: Math.floor(i / 864e5),
            hours: Math.floor(i / 36e5 % 24),
            minutes: Math.floor(i / 6e4 % 60),
            seconds: Math.floor(i / 1e3 % 60)
        },
        I = i => {
            let e = i => i.toString().padStart(2, "0");
            return "".concat(e(i.days), "d ").concat(e(i.hours), "h ").concat(e(i.minutes), "m ").concat(e(i.seconds), "s")
        },
        N = () => {
            let i = k.safeLocalStorage.getItem(j),
                e = Date.now();
            return (!i || Number.parseInt(i, 10) <= e) && (i = (e + 24 * (Math.floor(5 * Math.random()) + 3) * 36e5).toString(), k.safeLocalStorage.setItem(j, i)), Number.parseInt(i, 10)
        },
        w = i => {
            let [e, t] = (0, n.useState)(null), [r, o] = (0, n.useState)(0), [a, s] = (0, n.useState)({ ...S,
                isExpired: !1
            }), c = (0, n.useMemo)(() => C(i), [i]);
            return (0, n.useEffect)(() => {
                o(Date.now());
                let i = setInterval(() => {
                    o(Date.now())
                }, 1e3);
                return () => clearInterval(i)
            }, []), (0, n.useEffect)(() => {
                c || t(N())
            }, [c]), (0, n.useEffect)(() => {
                let i = null != c ? c : e;
                if (!i) return void s({ ...S,
                    isExpired: !1
                });
                let n = i - r;
                if (n <= 0) {
                    c || (k.safeLocalStorage.removeItem(j), t(N())), s({ ...S,
                        isExpired: !0
                    });
                    return
                }
                s({ ..._(n),
                    isExpired: !1
                })
            }, [c, e, r]), { ...a,
                formatTime: () => I(a),
                formatTimeTo: i => {
                    let e = C(i);
                    if (!e) return null;
                    let n = e - r;
                    return n <= 0 ? null : I(_(n))
                }
            }
        };
    i.s(["useDiscountCountdown", 0, w], 76e3);
    var B = i.i(419703),
        z = i.i(555481),
        D = i.i(533681),
        M = i.i(241277);
    i.s(["default", 0, i => {
        var k, j, S, C, _, I, N, O, F;
        let {
            isOpen: L,
            onClose: R,
            selectedPlan: W,
            onPaymentSuccess: A,
            zIndex: H
        } = i, {
            t: E
        } = (0, P.useTranslation)(), [U, V] = (0, n.useState)(""), [G, q] = (0, n.useState)(!1), [Y, K] = (0, n.useState)(!1), [Q, X] = (0, n.useState)(null), [Z, J] = (0, n.useState)(null), [$, ii] = (0, n.useState)(""), [ie, it] = (0, n.useState)(D.DEFAULT_BILLING_PAYMENT_METHOD), [ir, io] = (0, n.useState)(!1), {
            formatTimeTo: ia
        } = w(), is = null != (C = (0, p.useBreakpointValue)({
            base: !1,
            lg: !0
        })) && C, ic = (0, y.useQueryClient)(), il = (0, x.useCreatePagePlanOrder)(), ih = (0, x.useSyncOrderPaymentStatus)(), id = (0, v.usePaymentNotifications)(), {
            data: ip,
            isLoading: ig,
            isError: iu
        } = (0, T.useGetPublicPromotions)(), im = (() => {
            var i, e;
            if (!W) return {
                planPriceCents: 0,
                designPriceCents: 0,
                upgradeCreditCents: 0,
                subtotalCents: 0,
                promotionBaseCents: 0,
                discountCents: 0,
                totalCents: 0
            };
            let n = W.priceCents,
                t = 0;
            W.isCurrentPlan ? n = 0 : (null == (i = W.upgradeInfo) ? void 0 : i.isUpgrade) && (t = Math.max(0, n + W.upgradeInfo.savingsCents), n = Math.max(0, n - t));
            let r = Y && null != (e = W.designPriceCents) ? e : 0,
                o = Math.max(0, n + r);
            return {
                planPriceCents: n,
                designPriceCents: r,
                upgradeCreditCents: t,
                subtotalCents: o,
                promotionBaseCents: o,
                discountCents: 0,
                totalCents: o
            }
        })(), ib = (0, T.useDebouncedPromotionValidation)(U, (null == W ? void 0 : W.id) ? Number(W.id) : void 0, Y, im.subtotalCents, 1e3), ix = (0, n.useRef)(null), iy = (null == Q ? void 0 : Q.paymentMethod) || ie, iv = (0, D.isZaloPayPaymentMethod)(iy) || (0, D.isZaloPayProvider)(null == Q ? void 0 : Q.provider), {
            data: iT
        } = (0, x.useGetOrderDetails)(Z, {
            enablePolling: !iv
        }), iP = (0, D.isZaloPayPaymentMethod)(iy) && is, ik = !!Z && iv && (ir || iP), {
            isSyncing: ij,
            isAutoSyncing: iS,
            syncNow: iC,
            startAutoSync: i_,
            stopAutoSync: iI
        } = (0, M.useOrderPaymentSync)({
            orderId: Z,
            enabled: ik,
            status: null == iT ? void 0 : iT.status,
            onSync: async i => {
                await ih.mutateAsync(i)
            }
        });
        (0, n.useEffect)(() => {
            if (L) {
                var i;
                V(""), K(null != (i = null == W ? void 0 : W.isCurrentPlan) && i), ii(""), X(null), J(null), it(D.DEFAULT_BILLING_PAYMENT_METHOD), io(!1), ix.current = null
            } else q(!1), iI()
        }, [L, W, iI]), (0, n.useEffect)(() => {
            if (!ir || !iv || !Z) return;
            let i = () => {
                    i_()
                },
                e = () => {
                    "visible" === document.visibilityState && i_()
                };
            return window.addEventListener("focus", i), document.addEventListener("visibilitychange", e), () => {
                window.removeEventListener("focus", i), document.removeEventListener("visibilitychange", e)
            }
        }, [Z, ir, iv, i_]), (0, n.useEffect)(() => {
            Z && iP && i_()
        }, [Z, iP, i_]), (0, n.useEffect)(() => {
            let i = null == iT ? void 0 : iT.status;
            i && ix.current !== i && ("paid" === i ? (ix.current = i, ic.invalidateQueries({
                queryKey: f.BILLING_QUERY_KEYS.currentSubscription
            }), ic.invalidateQueries({
                queryKey: ["plans"]
            }), id.showPaymentSuccess(), null == A || A(), iv && (iI(), R())) : "failed" === i ? (ix.current = i, id.showPaymentFailed()) : "canceled" === i && (ix.current = i, id.showPaymentFailed(E("pricing.purchaseModal.status.canceled"))))
        }, [null == iT ? void 0 : iT.status, ic, A, id, E, iv, R, iI]);
        let iN = i => new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            }).format(i),
            iw = (null == W ? void 0 : W.discountEndsAt) ? ia(W.discountEndsAt) : null,
            iB = ib.data,
            iz = null == iB ? void 0 : iB.data,
            iD = (null == iz ? void 0 : iz.valid) ? iz.breakdown : void 0,
            iM = async () => {
                if (W) try {
                    var i;
                    ii("");
                    let e = await il.mutateAsync({
                        catalogId: Number(W.id),
                        designRequested: Y,
                        couponCode: (null == iB || null == (i = iB.data) ? void 0 : i.valid) ? U : void 0,
                        paymentMethod: ie,
                        designBrief: Y ? {
                            note: "Design request from pricing modal"
                        } : void 0
                    });
                    X(e), J(e.orderId), id.showOrderCreated()
                } catch (e) {
                    let i = (0, x.getOrderErrorMessage)(e);
                    ii(i), id.showOrderError(i)
                }
            },
            iO = null != (_ = null == iD ? void 0 : iD.subtotalCents) ? _ : im.subtotalCents,
            iF = null != (N = null != (I = null == iD ? void 0 : iD.discountCents) ? I : null == iz ? void 0 : iz.discountCents) ? N : 0,
            iL = null != (O = null == iD ? void 0 : iD.totalCents) ? O : Math.max(0, iO - iF),
            iR = null != (F = null == iD ? void 0 : iD.upgradeCreditCents) ? F : im.upgradeCreditCents,
            iW = "PERCENT" === (null == iz || null == (k = iz.discountType) ? void 0 : k.toUpperCase()),
            iA = null == iz ? void 0 : iz.amount,
            iH = iW && "number" == typeof iA ? "".concat(iA, "% (-").concat(iN(iF), ")") : iN(iF),
            iE = iW && "number" == typeof iA ? "".concat(E("pricing.purchaseModal.discount", {
                amount: U
            }), " (").concat(iA, "%)") : E("pricing.purchaseModal.discount", {
                amount: U
            }),
            iU = (i => {
                if (!i || i.valid) return "";
                if (i.message) return i.message;
                if ("PROMOTION_MIN_SUBTOTAL_NOT_MET" === i.errorCode) {
                    var e, n;
                    let t = null == (e = i.details) ? void 0 : e.minSubtotalCents,
                        r = null == (n = i.details) ? void 0 : n.currentSubtotalCents;
                    if ("number" == typeof t && "number" == typeof r) return "Đơn hàng tối thiểu ".concat(iN(t), " (hiện tại ").concat(iN(r), ")")
                }
                return i.errorCode && ({
                    PROMOTION_INVALID: "Mã giảm giá không hợp lệ",
                    PROMOTION_NOT_FOUND: "Mã giảm giá không tồn tại",
                    PROMOTION_EXPIRED: "Mã giảm giá đã hết hạn",
                    PROMOTION_NOT_STARTED: "Mã giảm giá chưa đến thời gian áp dụng",
                    PROMOTION_MAX_REDEMPTIONS_REACHED: "Mã giảm giá đã hết lượt sử dụng",
                    PROMOTION_USER_LIMIT_REACHED: "Bạn đã vượt quá số lần sử dụng mã này",
                    PROMOTION_MIN_SUBTOTAL_NOT_MET: "Đơn hàng chưa đạt giá trị tối thiểu để áp dụng mã",
                    PROMOTION_NOT_APPLICABLE: "Mã giảm giá không áp dụng cho đơn hàng này"
                })[i.errorCode] || E("pricing.purchaseModal.invalidCoupon")
            })(iz);
        return W ? (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(m.default, {
                isOpen: L,
                onClose: R,
                title: E("pricing.purchaseModal.title"),
                maxWidth: {
                    base: "96vw",
                    md: "920px",
                    lg: "980px"
                },
                maxHeight: {
                    base: "88vh",
                    md: "92vh"
                },
                zIndex: H,
                children: Q ? (0, e.jsxs)(a.VStack, {
                    gap: 5,
                    align: "stretch",
                    textAlign: "center",
                    w: "full",
                    children: [iT && (0, e.jsx)(s.HStack, {
                        justify: "center",
                        children: (0, e.jsxs)(l.Badge, {
                            size: "lg",
                            colorScheme: "paid" === iT.status ? "green" : "failed" === iT.status || "canceled" === iT.status ? "red" : "blue",
                            px: 4,
                            py: 1,
                            borderRadius: "full",
                            children: ["paid" === iT.status && E("pricing.purchaseModal.status.paid"), "requires_payment" === iT.status && E("pricing.purchaseModal.status.requiresPayment"), "created" === iT.status && E("pricing.purchaseModal.status.created"), "failed" === iT.status && E("pricing.purchaseModal.status.failed"), "canceled" === iT.status && E("pricing.purchaseModal.status.canceled")]
                        })
                    }), (null == iT ? void 0 : iT.status) === "paid" ? (0, e.jsxs)(a.VStack, {
                        gap: 2,
                        py: 8,
                        children: [(0, e.jsx)(o.Text, {
                            fontSize: "xl",
                            fontWeight: "bold",
                            color: "green.600",
                            children: E("pricing.purchaseModal.paymentSuccess")
                        }), (0, e.jsx)(o.Text, {
                            color: "gray.600",
                            children: E("pricing.purchaseModal.paymentSuccessDesc")
                        })]
                    }) : (null == iT ? void 0 : iT.status) === "failed" || (null == iT ? void 0 : iT.status) === "canceled" ? (0, e.jsxs)(a.VStack, {
                        gap: 2,
                        py: 8,
                        children: [(0, e.jsx)(o.Text, {
                            fontSize: "xl",
                            fontWeight: "bold",
                            color: "red.600",
                            children: E("pricing.purchaseModal.paymentFailed")
                        }), (0, e.jsx)(o.Text, {
                            color: "gray.600",
                            children: E("pricing.purchaseModal.paymentFailedDesc")
                        })]
                    }) : iv ? (0, e.jsx)(t.Box, {
                        p: 5,
                        borderRadius: "xl",
                        boxShadow: "sm",
                        border: "1px solid",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        w: "full",
                        children: (0, e.jsx)(z.default, {
                            paymentMethod: iy,
                            paymentUrl: Q.paymentUrl,
                            isSyncing: ij,
                            isAutoSyncing: iS,
                            hasOpenedPaymentLink: ir,
                            canSync: !!Z,
                            onOpenPaymentLink: () => {
                                (null == Q ? void 0 : Q.paymentUrl) && (window.open(Q.paymentUrl, "_blank", "noopener,noreferrer"), io(!0))
                            },
                            onSyncNow: () => void iC(),
                            onCopyError: i => id.showOrderError(i)
                        })
                    }) : (0, e.jsxs)(t.Box, {
                        display: {
                            base: "flex",
                            md: "grid"
                        },
                        flexDirection: "column",
                        gridTemplateColumns: {
                            base: "1fr",
                            md: "minmax(260px, 340px) 1fr"
                        },
                        gap: 4,
                        alignItems: "start",
                        children: [(0, e.jsx)(t.Box, {
                            p: 5,
                            borderRadius: "xl",
                            boxShadow: "sm",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.100",
                                _dark: "gray.700"
                            },
                            w: "full",
                            children: (0, e.jsxs)(a.VStack, {
                                gap: 4,
                                children: [(0, e.jsx)(o.Text, {
                                    fontSize: "md",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "white"
                                    },
                                    children: E("pricing.purchaseModal.scanQR")
                                }), (0, e.jsx)(t.Box, {
                                    p: 2,
                                    bg: "white",
                                    borderRadius: "lg",
                                    boxShadow: "md",
                                    border: "1px solid",
                                    borderColor: "gray.100",
                                    children: Q.qrImgUrl ? (0, e.jsx)(c.Image, {
                                        src: Q.qrImgUrl,
                                        alt: "QR Code Payment",
                                        boxSize: {
                                            base: "220px",
                                            md: "250px"
                                        },
                                        objectFit: "contain"
                                    }) : (0, e.jsx)(h.Flex, {
                                        w: {
                                            base: "220px",
                                            md: "250px"
                                        },
                                        h: {
                                            base: "220px",
                                            md: "250px"
                                        },
                                        align: "center",
                                        justify: "center",
                                        bg: "gray.50",
                                        borderRadius: "md",
                                        children: (0, e.jsx)(o.Text, {
                                            color: "gray.500",
                                            fontSize: "sm",
                                            children: E("pricing.purchaseModal.generatingQR")
                                        })
                                    })
                                }), (0, e.jsx)(o.Text, {
                                    fontSize: "xs",
                                    color: "gray.500",
                                    children: E("pricing.purchaseModal.autoUpdate")
                                })]
                            })
                        }), Q.bank && Q.accountNumber && (0, e.jsx)(t.Box, {
                            w: "full",
                            p: 4,
                            borderRadius: "xl",
                            border: "1px solid",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: (0, e.jsxs)(a.VStack, {
                                gap: 3,
                                align: "stretch",
                                children: [(0, e.jsx)(o.Text, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "white"
                                    },
                                    mb: 1,
                                    children: E("pricing.purchaseModal.bankTransferInfo")
                                }), (0, e.jsxs)(s.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.bank")
                                    }), (0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: {
                                            base: "gray.800",
                                            _dark: "white"
                                        },
                                        children: Q.bank
                                    })]
                                }), (0, e.jsxs)(s.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.accountNumber")
                                    }), (0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: "blue.600",
                                        fontFamily: "mono",
                                        children: Q.accountNumber
                                    })]
                                }), Q.transferDescription && (0, e.jsxs)(s.HStack, {
                                    justify: "space-between",
                                    py: 1,
                                    borderBottom: "1px dashed",
                                    borderColor: {
                                        base: "gray.200",
                                        _dark: "gray.600"
                                    },
                                    children: [(0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.content")
                                    }), (0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        fontWeight: "semibold",
                                        color: "purple.600",
                                        fontFamily: "mono",
                                        children: Q.transferDescription
                                    })]
                                }), (0, e.jsxs)(s.HStack, {
                                    justify: "space-between",
                                    pt: 1,
                                    children: [(0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: E("pricing.purchaseModal.total")
                                    }), (0, e.jsx)(o.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: "rose.500",
                                        children: iN(Q.summary.total)
                                    })]
                                })]
                            })
                        })]
                    })]
                }) : (0, e.jsxs)(t.Box, {
                    display: {
                        base: "flex",
                        lg: "grid"
                    },
                    flexDirection: "column",
                    gridTemplateColumns: {
                        base: "1fr",
                        lg: "1.35fr 1fr"
                    },
                    alignItems: "start",
                    gap: 4,
                    w: "full",
                    children: [(0, e.jsxs)(a.VStack, {
                        align: "stretch",
                        gap: 4,
                        children: [(0, e.jsxs)(t.Box, {
                            borderRadius: "lg",
                            p: 4,
                            borderWidth: "1px",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "md",
                                fontWeight: "bold",
                                mb: 2,
                                textAlign: "center",
                                color: {
                                    base: "gray.800",
                                    _dark: "white"
                                },
                                children: E("pricing.purchaseModal.orderInfo")
                            }), (0, e.jsx)(t.Box, {
                                borderRadius: "lg",
                                p: 3,
                                boxShadow: "sm",
                                borderWidth: "1px",
                                borderColor: {
                                    base: "gray.100",
                                    _dark: "gray.600"
                                },
                                children: (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    direction: {
                                        base: "column",
                                        sm: "row"
                                    },
                                    gap: 2,
                                    children: [(0, e.jsxs)(a.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, e.jsx)(o.Text, {
                                            fontWeight: "bold",
                                            fontSize: "md",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: W.name
                                        }), W.description && (0, e.jsx)(o.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: W.description
                                        })]
                                    }), (0, e.jsxs)(t.Box, {
                                        textAlign: {
                                            base: "center",
                                            sm: "right"
                                        },
                                        children: [W.originalPriceCents && W.priceCents < W.originalPriceCents && (0, e.jsxs)(a.VStack, {
                                            align: "end",
                                            gap: 0,
                                            mb: 1,
                                            children: [(0, e.jsx)(o.Text, {
                                                fontSize: "sm",
                                                color: "gray.400",
                                                textDecoration: "line-through",
                                                children: iN(W.originalPriceCents)
                                            }), iw && (0, e.jsxs)(o.Text, {
                                                fontSize: "xs",
                                                color: "red.500",
                                                fontWeight: "bold",
                                                children: [E("pricing.endsIn"), ": ", iw]
                                            })]
                                        }), (0, e.jsx)(o.Text, {
                                            fontSize: "lg",
                                            fontWeight: "bold",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: W.isCurrentPlan ? E("pricing.owned") : iN(W.priceCents)
                                        })]
                                    })]
                                })
                            })]
                        }), (0, e.jsxs)(t.Box, {
                            borderRadius: "lg",
                            p: 4,
                            borderWidth: "1px",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "md",
                                fontWeight: "bold",
                                mb: 2,
                                textAlign: "center",
                                color: {
                                    base: "gray.800",
                                    _dark: "white"
                                },
                                children: E("pricing.purchaseModal.coupon")
                            }), (null == iB ? void 0 : iB.data) && iB.data.valid ? (0, e.jsx)(t.Box, {
                                p: 3,
                                bg: "green.50",
                                borderWidth: "1px",
                                borderColor: "green.200",
                                borderRadius: "lg",
                                children: (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    direction: {
                                        base: "column",
                                        sm: "row"
                                    },
                                    gap: 2,
                                    children: [(0, e.jsxs)(a.VStack, {
                                        align: "start",
                                        gap: 2,
                                        flex: 1,
                                        children: [(0, e.jsxs)(s.HStack, {
                                            justify: {
                                                base: "center",
                                                sm: "start"
                                            },
                                            children: [(0, e.jsx)(l.Badge, {
                                                colorScheme: "green",
                                                color: "green.600",
                                                children: "Đã áp dụng"
                                            }), (0, e.jsx)(o.Text, {
                                                fontWeight: "bold",
                                                color: "green.800",
                                                textAlign: {
                                                    base: "center",
                                                    sm: "left"
                                                },
                                                children: E("pricing.purchaseModal.couponApplied", {
                                                    code: U
                                                })
                                            })]
                                        }), (0, e.jsx)(o.Text, {
                                            fontSize: "sm",
                                            color: "green.600",
                                            textAlign: {
                                                base: "center",
                                                sm: "left"
                                            },
                                            fontWeight: "medium",
                                            children: E("pricing.purchaseModal.discount", {
                                                amount: iH
                                            })
                                        })]
                                    }), (0, e.jsx)(g.default, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: () => {
                                            V("")
                                        },
                                        className: "w-full sm:w-auto text-red-500 border-red-200 hover:bg-red-50",
                                        children: E("pricing.purchaseModal.remove")
                                    })]
                                })
                            }) : (0, e.jsxs)(a.VStack, {
                                align: "stretch",
                                children: [(0, e.jsx)(b.Field, {
                                    label: E("pricing.purchaseModal.enterCoupon"),
                                    children: (0, e.jsxs)(a.VStack, {
                                        gap: 2,
                                        w: "full",
                                        children: [(0, e.jsxs)(s.HStack, {
                                            w: "full",
                                            align: "stretch",
                                            children: [(0, e.jsx)(r.Input, {
                                                placeholder: E("pricing.purchaseModal.couponPlaceholder"),
                                                value: U,
                                                onChange: i => V(i.target.value.toUpperCase()),
                                                disabled: ib.isLoading,
                                                w: "full",
                                                textAlign: "center",
                                                fontWeight: "medium",
                                                size: "md"
                                            }), (0, e.jsx)(g.default, {
                                                type: "button",
                                                variant: "outline",
                                                onClick: () => q(!0),
                                                className: "whitespace-nowrap",
                                                children: "Danh sách mã"
                                            })]
                                        }), ib.isLoading && (0, e.jsx)(o.Text, {
                                            fontSize: "sm",
                                            color: "blue.500",
                                            textAlign: "center",
                                            fontWeight: "medium",
                                            children: E("pricing.purchaseModal.checking")
                                        })]
                                    })
                                }), (null == iB ? void 0 : iB.data) && !iB.data.valid && (0, e.jsx)(t.Box, {
                                    p: 3,
                                    bg: "red.50",
                                    borderWidth: "1px",
                                    borderColor: "red.200",
                                    borderRadius: "lg",
                                    children: (0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: "red.600",
                                        textAlign: "center",
                                        fontWeight: "medium",
                                        children: iU
                                    })
                                })]
                            }), (null == iB || null == (j = iB.data) ? void 0 : j.valid) && iB.data.warnings && iB.data.warnings.length > 0 && (0, e.jsx)(t.Box, {
                                p: 3,
                                borderWidth: 1,
                                borderColor: "orange.200",
                                bg: "orange.50",
                                borderRadius: "md",
                                mt: 2,
                                children: (0, e.jsx)(o.Text, {
                                    fontSize: "sm",
                                    color: "orange.700",
                                    children: iB.data.warnings.join(", ")
                                })
                            })]
                        }), W.designPriceCents && (0, e.jsxs)(t.Box, {
                            borderRadius: "lg",
                            p: 4,
                            borderWidth: "1px",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "md",
                                fontWeight: "bold",
                                mb: 2,
                                textAlign: "center",
                                color: {
                                    base: "gray.800",
                                    _dark: "white"
                                },
                                children: E("pricing.purchaseModal.additionalOptions")
                            }), (0, e.jsx)(t.Box, {
                                borderRadius: "lg",
                                p: 3,
                                boxShadow: "sm",
                                borderWidth: "2px",
                                borderColor: Y ? "purple.500" : "transparent",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                opacity: !W.canAddDesignRequest || W.isCurrentPlan ? .75 : 1,
                                _hover: {
                                    borderColor: Y ? "purple.600" : "gray.300"
                                },
                                onClick: () => {
                                    !1 === W.canAddDesignRequest || W.isCurrentPlan || K(!Y)
                                },
                                children: (0, e.jsxs)(s.HStack, {
                                    align: "start",
                                    gap: 3,
                                    children: [(0, e.jsx)(u.Checkbox, {
                                        checked: Y || !1 === W.canAddDesignRequest,
                                        disabled: !1 === W.canAddDesignRequest || !!W.isCurrentPlan,
                                        onCheckedChange: i => {
                                            if (!1 !== W.canAddDesignRequest && !W.isCurrentPlan) {
                                                var e;
                                                K(!!("boolean" == typeof i ? i : null != (e = null == i ? void 0 : i.checked) && e))
                                            }
                                        },
                                        mt: 1,
                                        onClick: i => i.stopPropagation()
                                    }), (0, e.jsxs)(a.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, e.jsxs)(h.Flex, {
                                            justify: "space-between",
                                            w: "full",
                                            align: "center",
                                            children: [(0, e.jsx)(o.Text, {
                                                fontWeight: "bold",
                                                fontSize: "sm",
                                                color: {
                                                    base: "gray.800",
                                                    _dark: "white"
                                                },
                                                children: E("pricing.purchaseModal.designRequest")
                                            }), (0, e.jsx)(l.Badge, {
                                                colorScheme: "purple",
                                                variant: "solid",
                                                fontSize: "xs",
                                                children: !1 === W.canAddDesignRequest ? E("pricing.included") : "+".concat(iN(W.designPriceCents))
                                            })]
                                        }), (0, e.jsx)(o.Text, {
                                            fontSize: "xs",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            lineHeight: "relaxed",
                                            children: !1 === W.canAddDesignRequest ? E("pricing.designRequestIncluded") : E("pricing.purchaseModal.designRequestDesc")
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }), (0, e.jsxs)(a.VStack, {
                        align: "stretch",
                        gap: 4,
                        children: [(0, e.jsxs)(t.Box, {
                            borderRadius: "lg",
                            p: 4,
                            borderWidth: "1px",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "md",
                                fontWeight: "bold",
                                mb: 2,
                                textAlign: "center",
                                color: {
                                    base: "gray.800",
                                    _dark: "white"
                                },
                                children: E("pricing.purchaseModal.orderSummary")
                            }), (0, e.jsx)(t.Box, {
                                borderRadius: "lg",
                                p: 3,
                                boxShadow: "sm",
                                children: (0, e.jsxs)(a.VStack, {
                                    gap: 2,
                                    align: "stretch",
                                    children: [(0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        align: "center",
                                        py: 1,
                                        borderBottomWidth: "1px",
                                        borderColor: {
                                            base: "gray.100",
                                            _dark: "gray.700"
                                        },
                                        children: [(0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: [E("pricing.purchaseModal.originalPrice"), ":"]
                                        }), (0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            fontWeight: "medium",
                                            children: [W.originalPriceCents && W.priceCents < W.originalPriceCents && (0, e.jsx)(o.Text, {
                                                as: "span",
                                                fontSize: "sm",
                                                fontWeight: "medium",
                                                textDecoration: "line-through",
                                                color: "gray.400",
                                                mr: 1,
                                                children: iN(W.originalPriceCents)
                                            }), W.isCurrentPlan ? E("pricing.owned") : iN(W.priceCents)]
                                        })]
                                    }), Y && W.designPriceCents && (0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        align: "center",
                                        py: 1,
                                        borderBottomWidth: "1px",
                                        borderColor: {
                                            base: "gray.100",
                                            _dark: "gray.700"
                                        },
                                        children: [(0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: [E("pricing.purchaseModal.designRequest"), ":"]
                                        }), (0, e.jsx)(o.Text, {
                                            fontSize: "sm",
                                            fontWeight: "medium",
                                            color: "purple.600",
                                            children: !1 === W.canAddDesignRequest ? E("pricing.included") : "+".concat(iN(W.designPriceCents))
                                        })]
                                    }), (null == (S = W.upgradeInfo) ? void 0 : S.isUpgrade) && iR > 0 && (0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        align: "center",
                                        py: 1,
                                        borderBottomWidth: "1px",
                                        borderColor: {
                                            base: "gray.100",
                                            _dark: "gray.700"
                                        },
                                        children: [(0, e.jsxs)(a.VStack, {
                                            align: "start",
                                            gap: 0,
                                            children: [(0, e.jsxs)(o.Text, {
                                                fontSize: "sm",
                                                color: "green.600",
                                                fontWeight: "medium",
                                                children: [E("pricing.upgradeDiscount"), ":"]
                                            }), (0, e.jsxs)(o.Text, {
                                                fontSize: "xs",
                                                color: "gray.500",
                                                children: ["(", E("pricing.upgradeFrom", {
                                                    plan: W.upgradeInfo.fromTier.toUpperCase()
                                                }), ")"]
                                            })]
                                        }), (0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            fontWeight: "bold",
                                            color: "green.600",
                                            children: ["-", iN(iR)]
                                        })]
                                    }), iF > 0 && (0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        align: "center",
                                        py: 1,
                                        borderBottomWidth: "1px",
                                        borderColor: {
                                            base: "gray.100",
                                            _dark: "gray.700"
                                        },
                                        children: [(0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            color: "green.600",
                                            fontWeight: "medium",
                                            children: [iE, ":"]
                                        }), (0, e.jsxs)(o.Text, {
                                            fontSize: "sm",
                                            fontWeight: "bold",
                                            color: "green.600",
                                            children: ["-", iN(iF)]
                                        })]
                                    }), (0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        align: "center",
                                        py: 2,
                                        borderRadius: "lg",
                                        px: 3,
                                        mt: 2,
                                        children: [(0, e.jsxs)(o.Text, {
                                            fontSize: "md",
                                            fontWeight: "bold",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: [E("pricing.purchaseModal.total"), ":"]
                                        }), (0, e.jsx)(o.Text, {
                                            fontSize: "lg",
                                            fontWeight: "bold",
                                            color: {
                                                base: "blue.600",
                                                _dark: "blue.300"
                                            },
                                            children: iN(iL)
                                        })]
                                    })]
                                })
                            })]
                        }), (0, e.jsx)(B.default, {
                            value: ie,
                            onChange: it,
                            disabled: il.isPending
                        }), (0, e.jsxs)(t.Box, {
                            borderRadius: "lg",
                            p: 4,
                            borderWidth: "1px",
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.600"
                            },
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "md",
                                fontWeight: "bold",
                                mb: 2,
                                textAlign: "center",
                                color: {
                                    base: "gray.800",
                                    _dark: "white"
                                },
                                children: E("pricing.purchaseModal.confirmOrder")
                            }), (0, e.jsxs)(a.VStack, {
                                gap: 3,
                                children: [$ && (0, e.jsx)(t.Box, {
                                    p: 3,
                                    bg: "red.50",
                                    borderWidth: "1px",
                                    borderColor: "red.200",
                                    borderRadius: "lg",
                                    w: "full",
                                    children: (0, e.jsx)(o.Text, {
                                        fontSize: "sm",
                                        color: "red.600",
                                        textAlign: "center",
                                        fontWeight: "medium",
                                        children: $
                                    })
                                }), (0, e.jsx)(g.default, {
                                    variant: "rose",
                                    size: "large",
                                    onClick: iM,
                                    disabled: il.isPending,
                                    className: "w-full h-10 text-sm font-bold",
                                    children: il.isPending ? E("pricing.purchaseModal.creatingOrder") : E("pricing.purchaseModal.createOrder")
                                })]
                            })]
                        })]
                    })]
                })
            }), (0, e.jsx)(m.default, {
                isOpen: G,
                onClose: () => q(!1),
                title: "Chọn mã giảm giá",
                maxWidth: "620px",
                maxHeight: "75vh",
                zIndex: "number" == typeof H ? H + 10 : void 0,
                children: (0, e.jsxs)(a.VStack, {
                    align: "stretch",
                    gap: 3,
                    children: [ig ? (0, e.jsxs)(s.HStack, {
                        py: 8,
                        justify: "center",
                        children: [(0, e.jsx)(d.Spinner, {
                            size: "sm",
                            color: "rose.500"
                        }), (0, e.jsx)(o.Text, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: "Đang tải mã giảm giá..."
                        })]
                    }) : iu ? (0, e.jsx)(t.Box, {
                        p: 3,
                        bg: "red.50",
                        borderWidth: "1px",
                        borderColor: "red.200",
                        borderRadius: "lg",
                        children: (0, e.jsx)(o.Text, {
                            fontSize: "sm",
                            color: "red.600",
                            children: "Không tải được danh sách mã giảm giá."
                        })
                    }) : (null == ip ? void 0 : ip.length) ? (0, e.jsx)(a.VStack, {
                        align: "stretch",
                        gap: 2,
                        maxH: "52vh",
                        overflowY: "auto",
                        pr: 1,
                        children: ip.map(i => {
                            var n;
                            let r = U.trim().toUpperCase() === i.code.toUpperCase();
                            return (0, e.jsx)(t.Box, {
                                p: 3,
                                borderWidth: "1px",
                                borderColor: r ? "green.300" : {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                bg: r ? "green.50" : {
                                    base: "white",
                                    _dark: "gray.800"
                                },
                                borderRadius: "lg",
                                cursor: "pointer",
                                onClick: () => {
                                    V(i.code.toUpperCase()), q(!1)
                                },
                                _hover: {
                                    borderColor: "green.300"
                                },
                                children: (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "start",
                                    gap: 2,
                                    children: [(0, e.jsxs)(a.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, e.jsxs)(s.HStack, {
                                            gap: 2,
                                            children: [(0, e.jsx)(o.Text, {
                                                fontWeight: "bold",
                                                color: "rose.500",
                                                children: i.code
                                            }), r && (0, e.jsx)(l.Badge, {
                                                colorScheme: "green",
                                                children: "Đang chọn"
                                            })]
                                        }), i.description && (0, e.jsx)(o.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.300"
                                            },
                                            children: i.description
                                        }), (0, e.jsxs)(s.HStack, {
                                            gap: 3,
                                            wrap: "wrap",
                                            children: [(0, e.jsx)(o.Text, {
                                                fontSize: "xs",
                                                color: {
                                                    base: "gray.500",
                                                    _dark: "gray.400"
                                                },
                                                children: i.minSubtotalCents > 0 ? "Tối thiểu ".concat(i.minSubtotalCents.toLocaleString("vi-VN"), "đ") : "Không yêu cầu tối thiểu"
                                            }), (0, e.jsx)(o.Text, {
                                                fontSize: "xs",
                                                color: {
                                                    base: "gray.500",
                                                    _dark: "gray.400"
                                                },
                                                children: (n = i.expiresAt) ? "HSD ".concat(new Date(n).toLocaleDateString("vi-VN")) : "Không giới hạn"
                                            })]
                                        })]
                                    }), (0, e.jsx)(l.Badge, {
                                        colorScheme: "rose",
                                        variant: "subtle",
                                        children: "PERCENT" === i.discountType ? "-".concat(i.amount, "%") : "-".concat(i.amount.toLocaleString("vi-VN"), "đ")
                                    })]
                                })
                            }, i.id)
                        })
                    }) : (0, e.jsx)(t.Box, {
                        p: 3,
                        bg: {
                            base: "gray.50",
                            _dark: "gray.800"
                        },
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        borderRadius: "lg",
                        children: (0, e.jsx)(o.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.600",
                                _dark: "gray.400"
                            },
                            children: "Hiện chưa có mã giảm giá."
                        })
                    }), (0, e.jsx)(s.HStack, {
                        justify: "flex-end",
                        children: (0, e.jsx)(g.default, {
                            variant: "outline",
                            onClick: () => q(!1),
                            children: "Đóng"
                        })
                    })]
                })
            })]
        }) : null
    }], 819060)
}, 788318, 126537, i => {
    "use strict";
    var e = i.i(483632),
        n = i.i(453151),
        t = i.i(564668),
        r = i.i(215669),
        o = i.i(791089),
        a = i.i(118190),
        s = i.i(119887),
        c = i.i(676525),
        l = i.i(251570);
    i.i(308972);
    var h = i.i(445979),
        d = i.i(84723);
    i.s(["default", 0, i => {
        let {
            plan: p,
            price: g,
            designPrice: u,
            features: m,
            isPopular: b = !1,
            isCurrent: x = !1,
            isDisabled: y = !1,
            borderColor: f = "gray.200",
            badgeColor: v = "rose.400",
            onSelect: T,
            adjustedPrice: P,
            savings: k,
            isUpgrade: j,
            canAddDesignOnly: S,
            onViewDetails: C,
            onBuyFeatures: _,
            showVipLogo: I,
            originalPrice: N,
            discountPercent: w,
            countdown: B,
            isUpgradeOffer: z = !1,
            upgradeFromTier: D,
            density: M = "desktop-compact",
            featurePreviewCount: O,
            expandableFeatures: F = !0,
            showUpgradeDetailsBox: L = !0
        } = i, {
            t: R
        } = (0, h.useTranslation)(), [W, A] = (0, l.useState)(!1), H = "mobile-detail" === M, E = null != O ? O : H ? 3 : 4, U = F && m.length > E, V = !F || W ? m : m.slice(0, E), G = x ? {
            bg: "blue.500",
            label: R("pricing.upsell.currentPlanRibbon"),
            Icon: d.FiStar
        } : z ? {
            bg: "teal.500",
            label: R("pricing.upsell.specialUpgradeRibbon"),
            Icon: d.FiTag
        } : "number" == typeof w && w > 0 ? {
            bg: "red.500",
            label: R("pricing.upsell.promotionRibbon", {
                percent: w
            }),
            Icon: d.FiTag
        } : !x && (b || "vip" === p) ? {
            bg: "vip" === p ? "amber.500" : v,
            label: R("vip" === p ? "pricing.cards.vip.badge" : "pricing.cards.pro.badge"),
            Icon: d.FiStar
        } : null, q = x ? {
            bg: "teal.500",
            label: R("pricing.upsell.currentPlanRibbon"),
            Icon: d.FiStar
        } : z ? {
            bg: "teal.500",
            label: R("pricing.upsell.mobileUpgradeTag"),
            Icon: d.FiTag
        } : !x && (b || "vip" === p) ? {
            bg: "vip" === p ? "yellow.500" : v,
            label: R("vip" === p ? "pricing.cards.vip.badge" : "pricing.cards.pro.badge"),
            Icon: d.FiStar
        } : null, Y = !H && "number" == typeof w && w > 0, K = !!(q || Y), Q = !x && !z && "number" == typeof w && w > 0 && (H ? (null == G ? void 0 : G.bg) !== "red.500" : !Y), X = z ? "teal.600" : "rose.600", Z = D ? R("pricing.cards.".concat(D.toLowerCase(), ".name"), D.toUpperCase()) : "", J = R("pricing.cards.".concat(p, ".name")), $ = z ? "teal.500" : v, ii = "vip" === p && z && !!P && "pro" === String(D || "").toLowerCase(), ie = R(y ? "pricing.usingPlan" : S ? "pricing.addDesignRequest" : j ? "pricing.upgradeNow" : "pricing.selectPlan");
        return (0, e.jsxs)(t.Box, {
            position: "relative",
            bg: n.PUBLIC_LANDING_SURFACE.bg,
            borderRadius: "2xl",
            border: "1px solid",
            borderColor: {
                base: f,
                _dark: "gray.300" === f ? "gray.700" : f
            },
            px: {
                base: H ? 4 : 5,
                md: 6
            },
            pb: {
                base: H ? 4 : 5,
                md: 6
            },
            pt: {
                base: H ? 4 : 8,
                md: H ? 6 : K ? 14 : 6
            },
            boxShadow: n.PUBLIC_LANDING_SURFACE.shadow,
            w: "full",
            h: "full",
            minH: {
                base: "auto",
                md: H ? "auto" : "420px"
            },
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            opacity: y ? .86 : 1,
            transition: "all 0.25s ease",
            cursor: y ? "not-allowed" : "pointer",
            _hover: y ? {} : {
                transform: {
                    base: "none",
                    md: "translateY(-2px)"
                },
                boxShadow: {
                    base: n.PUBLIC_LANDING_SURFACE.shadow,
                    md: "lg"
                }
            },
            children: [!H && q && (0, e.jsxs)(r.HStack, {
                position: "absolute",
                top: "10px",
                left: "10px",
                bg: q.bg,
                color: "white",
                px: 3,
                py: 1.5,
                borderRadius: "full",
                minH: "28px",
                zIndex: 2,
                gap: 1.5,
                children: [(0, e.jsx)(q.Icon, {
                    size: 12
                }), (0, e.jsx)(o.Text, {
                    fontSize: "xs",
                    fontWeight: "700",
                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                    lineHeight: "1",
                    children: q.label
                })]
            }), Y && (0, e.jsxs)(r.HStack, {
                position: "absolute",
                top: "10px",
                right: "10px",
                bg: "red.500",
                color: "white",
                px: 2.5,
                py: 1.5,
                borderRadius: "full",
                minH: "28px",
                zIndex: 2,
                gap: 1,
                children: [(0, e.jsx)(d.FiTag, {
                    size: 11
                }), (0, e.jsxs)(o.Text, {
                    fontSize: "xs",
                    fontWeight: "700",
                    lineHeight: "1",
                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                    children: ["-", w, "%"]
                })]
            }), H && G && (0, e.jsxs)(r.HStack, {
                bg: G.bg,
                color: "white",
                px: {
                    base: 4,
                    md: 5
                },
                minH: {
                    base: "36px",
                    md: "40px"
                },
                mb: 4,
                gap: 2,
                justify: "center",
                borderRadius: "lg",
                children: [(0, e.jsx)(G.Icon, {
                    size: 14
                }), (0, e.jsx)(o.Text, {
                    fontSize: {
                        base: "sm",
                        md: "sm"
                    },
                    fontWeight: "700",
                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                    children: G.label
                })]
            }), (0, e.jsxs)(a.VStack, {
                gap: 0,
                align: "stretch",
                flex: 1,
                children: [(0, e.jsxs)(a.VStack, {
                    gap: 2,
                    align: "center",
                    children: [(0, e.jsxs)(r.HStack, {
                        justify: "center",
                        align: "center",
                        gap: 2,
                        children: [(0, e.jsx)(o.Text, {
                            fontSize: {
                                base: "2xl",
                                md: "4xl"
                            },
                            fontWeight: "700",
                            color: z ? "teal.700" : {
                                base: "gray.800",
                                _dark: "white"
                            },
                            textAlign: "center",
                            fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                            letterSpacing: "-0.01em",
                            lineHeight: "1.1",
                            children: R("pricing.cards.".concat(p, ".name"))
                        }), I && (0, e.jsx)(s.Image, {
                            src: "/images/vip-icon.png",
                            alt: "VIP Logo",
                            w: {
                                base: "22px",
                                md: "28px"
                            },
                            h: {
                                base: "22px",
                                md: "28px"
                            }
                        })]
                    }), (0, e.jsx)(o.Text, {
                        fontSize: {
                            base: "xs",
                            md: "sm"
                        },
                        color: {
                            base: "gray.600",
                            _dark: "gray.300"
                        },
                        textAlign: "center",
                        fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                        children: R("pricing.cards.".concat(p, ".subtitle"))
                    }), (0, e.jsxs)(a.VStack, {
                        gap: .5,
                        mt: 2,
                        children: [P ? (0, e.jsxs)(a.VStack, {
                            align: "center",
                            gap: 0,
                            children: [(0, e.jsx)(o.Text, {
                                fontSize: "sm",
                                color: "gray.400",
                                textDecoration: "line-through",
                                fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                children: g
                            }), (0, e.jsx)(o.Text, {
                                fontSize: {
                                    base: "3xl",
                                    md: "4xl"
                                },
                                fontWeight: "700",
                                color: X,
                                fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                                lineHeight: "1.05",
                                children: P
                            }), k && !ii && (0, e.jsx)(t.Box, {
                                bg: z ? "teal.50" : "green.50",
                                color: z ? "teal.700" : "green.700",
                                border: "1px solid",
                                borderColor: z ? "teal.200" : "green.200",
                                borderRadius: "full",
                                px: 2.5,
                                py: .5,
                                mt: 1,
                                children: (0, e.jsxs)(o.Text, {
                                    fontSize: "xs",
                                    fontWeight: "700",
                                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                    children: [R("pricing.save"), " ", k]
                                })
                            }), ii && (0, e.jsx)(t.Box, {
                                mt: 1,
                                px: 2.5,
                                py: .5,
                                borderRadius: "full",
                                bg: "teal.50",
                                border: "1px solid",
                                borderColor: "teal.200",
                                children: (0, e.jsx)(o.Text, {
                                    fontSize: "xs",
                                    fontWeight: "700",
                                    color: "teal.700",
                                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                    children: R("pricing.upsell.vipUpgradeRemaining", {
                                        amount: P
                                    })
                                })
                            })]
                        }) : (0, e.jsxs)(a.VStack, {
                            align: "center",
                            gap: 0,
                            children: [N && (0, e.jsx)(o.Text, {
                                fontSize: "sm",
                                color: "gray.400",
                                textDecoration: "line-through",
                                fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                children: N
                            }), (0, e.jsx)(o.Text, {
                                fontSize: {
                                    base: "3xl",
                                    md: "4xl"
                                },
                                fontWeight: "700",
                                color: x ? "red.600" : {
                                    base: "gray.900",
                                    _dark: "white"
                                },
                                fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                                lineHeight: "1.05",
                                children: g
                            })]
                        }), Q && (0, e.jsx)(o.Text, {
                            fontSize: "xs",
                            color: "red.500",
                            fontWeight: "700",
                            fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                            children: R("pricing.upsell.priceDiscountInline", {
                                percent: w
                            })
                        }), B && (0, e.jsxs)(o.Text, {
                            fontSize: "xs",
                            color: "red.500",
                            fontWeight: "700",
                            fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                            children: [R("pricing.endsIn"), ": ", B]
                        }), u && (0, e.jsxs)(o.Text, {
                            fontSize: "xs",
                            color: "teal.600",
                            fontWeight: "600",
                            fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                            children: ["+ ", u, " ", R("pricing.designFee")]
                        })]
                    })]
                }), L && z && P && (0, e.jsxs)(t.Box, {
                    mt: 4,
                    borderRadius: "lg",
                    bg: "teal.50",
                    border: "1px solid",
                    borderColor: "teal.200",
                    px: 3,
                    py: 2.5,
                    children: [(0, e.jsx)(o.Text, {
                        fontSize: "xs",
                        color: "teal.800",
                        fontWeight: "700",
                        fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                        children: R("pricing.upsell.specialOfferTitle")
                    }), (0, e.jsx)(o.Text, {
                        mt: .5,
                        fontSize: "xs",
                        color: "teal.700",
                        lineHeight: "1.5",
                        fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                        children: R("pricing.upsell.specialOfferDescription", {
                            fromPlan: Z || R("pricing.currentPlan"),
                            amount: P,
                            toPlan: J
                        })
                    }), B && (0, e.jsxs)(r.HStack, {
                        mt: 1.5,
                        gap: 1.5,
                        color: "teal.700",
                        children: [(0, e.jsx)(d.FiClock, {
                            size: 12
                        }), (0, e.jsx)(o.Text, {
                            fontSize: "xs",
                            fontWeight: "700",
                            fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                            children: R("pricing.upsell.specialOfferCountdown", {
                                time: B
                            })
                        })]
                    })]
                }), (0, e.jsx)(t.Box, {
                    flex: 1,
                    mt: {
                        base: 4,
                        md: 5
                    },
                    children: (0, e.jsx)(a.VStack, {
                        gap: {
                            base: 2.5,
                            md: 2.5
                        },
                        align: "stretch",
                        children: V.map((i, a) => (0, e.jsxs)(r.HStack, {
                            gap: 2.5,
                            align: "flex-start",
                            children: [(0, e.jsx)(t.Box, {
                                flexShrink: 0,
                                pt: 1,
                                children: (0, e.jsx)(t.Box, {
                                    w: "9px",
                                    h: "9px",
                                    bg: $,
                                    borderRadius: "full"
                                })
                            }), (0, e.jsx)(o.Text, {
                                fontSize: {
                                    base: "sm",
                                    md: "sm"
                                },
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                lineHeight: {
                                    base: "1.5",
                                    md: "1.5"
                                },
                                children: i
                            })]
                        }, "".concat(i, "-").concat(a)))
                    })
                }), U && (0, e.jsx)(c.default, {
                    variant: "ghost",
                    className: "mt-3 w-full min-h-[40px]",
                    onClick: () => A(i => !i),
                    children: R(W ? "pricing.upsell.showLessFeatures" : "pricing.upsell.showMoreFeatures")
                }), !H && C && (0, e.jsx)(c.default, {
                    variant: "ghost",
                    className: "mt-2 w-full min-h-[40px]",
                    onClick: C,
                    children: R("pricing.viewDetails")
                }), _ && (0, e.jsx)(t.Box, {
                    mt: 2,
                    children: (0, e.jsx)(c.default, {
                        variant: "outline",
                        className: "w-full min-h-[44px]",
                        onClick: _,
                        children: R("vip" === p ? "pricing.customDesign" : "pricing.buyFeatures")
                    })
                }), (0, e.jsx)(t.Box, {
                    mt: 2,
                    children: (0, e.jsx)(c.default, {
                        variant: "vip" === p ? "gold" : "pro" === p ? "blue" : "outline",
                        size: "large",
                        className: "w-full min-h-[46px]",
                        onClick: T,
                        disabled: y,
                        children: ie
                    })
                })]
            })]
        })
    }], 788318);
    let p = {
        basic: {
            active: {
                bg: "gray.200",
                borderColor: "gray.500",
                textColor: "gray.800"
            },
            inactive: {
                bg: "gray.100",
                borderColor: "gray.300",
                textColor: "gray.700"
            }
        },
        pro: {
            active: {
                bg: "blue.100",
                borderColor: "blue.500",
                textColor: "blue.800"
            },
            inactive: {
                bg: "blue.50",
                borderColor: "blue.200",
                textColor: "blue.700"
            }
        },
        vip: {
            active: {
                bg: "orange.100",
                borderColor: "orange.400",
                textColor: "orange.800"
            },
            inactive: {
                bg: "orange.50",
                borderColor: "orange.200",
                textColor: "orange.700"
            }
        }
    };
    i.s(["default", 0, i => {
        let {
            plan: n,
            price: r,
            isCurrent: s = !1,
            isUpgradeOffer: c = !1,
            isActive: l = !1,
            onSelect: g
        } = i, {
            t: u
        } = (0, h.useTranslation)(), m = p[n], b = l ? m.active : m.inactive, x = s ? u("pricing.upsell.miniCurrentTag") : c ? u("pricing.upsell.miniUpgradeTag") : null;
        return (0, e.jsx)("button", {
            type: "button",
            onClick: g,
            "aria-pressed": l,
            className: "min-h-[88px] w-full rounded-xl border px-2 py-2 text-center transition-colors",
            style: {
                background: "var(--chakra-colors-".concat(b.bg.replace(".", "-"), ")"),
                borderColor: "var(--chakra-colors-".concat(b.borderColor.replace(".", "-"), ")")
            },
            children: (0, e.jsxs)(a.VStack, {
                gap: .5,
                align: "center",
                children: [(0, e.jsx)(o.Text, {
                    fontSize: "sm",
                    lineHeight: "1.2",
                    fontWeight: "700",
                    color: b.textColor,
                    children: u("pricing.cards.".concat(n, ".name"))
                }), x && (0, e.jsx)(t.Box, {
                    mt: .5,
                    px: 1.5,
                    py: .5,
                    borderRadius: "md",
                    bg: s ? "blue.100" : "teal.100",
                    children: (0, e.jsxs)(t.Box, {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        children: [s ? (0, e.jsx)(d.FiStar, {
                            size: 10,
                            color: "#1D4ED8"
                        }) : (0, e.jsx)(d.FiTag, {
                            size: 10,
                            color: "#0F766E"
                        }), (0, e.jsx)(o.Text, {
                            fontSize: "10px",
                            lineHeight: "1.2",
                            fontWeight: "700",
                            color: s ? "blue.700" : "teal.700",
                            children: x
                        })]
                    })
                }), (0, e.jsx)(t.Box, {
                    mt: .5,
                    px: 1.5,
                    py: .5,
                    borderRadius: "md",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "gray.200",
                    children: (0, e.jsx)(o.Text, {
                        fontSize: "xs",
                        lineHeight: "1.2",
                        fontWeight: "700",
                        color: "gray.800",
                        children: r
                    })
                })]
            })
        })
    }], 126537)
}]);

//# debugId=5b162338-e31c-256e-da4e-50ee8dd326be
//# sourceMappingURL=16bc3e4b4edaef4f.js.map