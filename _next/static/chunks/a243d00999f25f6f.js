;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "42eb781d-28fc-49f6-efb4-443afbaca210")
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
        s = i.i(215669),
        c = i.i(676525),
        o = i.i(649760);
    i.i(308972);
    var a = i.i(445979),
        l = i.i(797550),
        h = i.i(84723),
        d = i.i(728231);
    i.s(["default", 0, i => {
        let {
            isOpen: p,
            onClose: g,
            plan: u,
            onBuyFeatures: m,
            onUpgrade: x,
            zIndex: b
        } = i, {
            t: y
        } = (0, a.useTranslation)();
        if (!u) return null;
        u.startsWith("basic") || u.startsWith("pro");
        let f = u.includes("Plus");
        return (0, e.jsxs)(o.default, {
            isOpen: p,
            onClose: g,
            title: y("pricing.planDetailsModal.title", {
                plan: y("pricing.plans.".concat(u))
            }),
            maxWidth: "800px",
            maxHeight: "85vh",
            zIndex: b,
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
                    children: (0, e.jsxs)(s.HStack, {
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
                        let c = i[u];
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
                            children: (0, e.jsxs)(s.HStack, {
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
                                        children: (0, e.jsxs)(s.HStack, {
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
                                    children: "boolean" == typeof c ? c ? (0, e.jsx)(n.Box, {
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
                                        children: c
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
                    }), (0, e.jsxs)(s.HStack, {
                        justify: "center",
                        gap: 3,
                        children: [(0, e.jsx)(c.default, {
                            onClick: m,
                            variant: "purple",
                            size: "sm",
                            children: y("pricing.planDetailsModal.buyMoreFeatures")
                        }), (0, e.jsx)(c.default, {
                            onClick: x,
                            variant: "fill",
                            size: "sm",
                            children: y("pricing.planDetailsModal.upgradePlan")
                        })]
                    })]
                }), (0, e.jsx)(n.Box, {
                    display: "flex",
                    justifyContent: "flex-end",
                    children: (0, e.jsx)(c.default, {
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
        s = i.i(791089),
        c = i.i(118190),
        o = i.i(215669),
        a = i.i(119887),
        l = i.i(789757),
        h = i.i(494114),
        d = i.i(51715),
        p = i.i(676525),
        g = i.i(625959),
        u = i.i(649760),
        m = i.i(986530),
        x = i.i(201975),
        b = i.i(940948),
        y = i.i(79663),
        f = i.i(297272),
        k = i.i(951629);
    i.i(308972);
    var v = i.i(445979),
        P = i.i(476659);
    let T = "discount_countdown_end_time",
        j = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        S = i => {
            if (!i) return null;
            let e = Date.parse(i);
            return Number.isNaN(e) ? null : e
        },
        C = i => i <= 0 ? j : {
            days: Math.floor(i / 864e5),
            hours: Math.floor(i / 36e5 % 24),
            minutes: Math.floor(i / 6e4 % 60),
            seconds: Math.floor(i / 1e3 % 60)
        },
        _ = i => {
            let e = i => i.toString().padStart(2, "0");
            return "".concat(e(i.days), "d ").concat(e(i.hours), "h ").concat(e(i.minutes), "m ").concat(e(i.seconds), "s")
        },
        w = () => {
            let i = P.safeLocalStorage.getItem(T),
                e = Date.now();
            return (!i || Number.parseInt(i, 10) <= e) && (i = (e + 24 * (Math.floor(5 * Math.random()) + 3) * 36e5).toString(), P.safeLocalStorage.setItem(T, i)), Number.parseInt(i, 10)
        },
        I = i => {
            let [e, t] = (0, n.useState)(null), [r, s] = (0, n.useState)(0), [c, o] = (0, n.useState)({ ...j,
                isExpired: !1
            }), a = (0, n.useMemo)(() => S(i), [i]);
            return (0, n.useEffect)(() => {
                s(Date.now());
                let i = setInterval(() => {
                    s(Date.now())
                }, 1e3);
                return () => clearInterval(i)
            }, []), (0, n.useEffect)(() => {
                a || t(w())
            }, [a]), (0, n.useEffect)(() => {
                let i = null != a ? a : e;
                if (!i) return void o({ ...j,
                    isExpired: !1
                });
                let n = i - r;
                if (n <= 0) {
                    a || (P.safeLocalStorage.removeItem(T), t(w())), o({ ...j,
                        isExpired: !0
                    });
                    return
                }
                o({ ...C(n),
                    isExpired: !1
                })
            }, [a, e, r]), { ...c,
                formatTime: () => _(c),
                formatTimeTo: i => {
                    let e = S(i);
                    if (!e) return null;
                    let n = e - r;
                    return n <= 0 ? null : _(C(n))
                }
            }
        };
    i.s(["useDiscountCountdown", 0, I], 76e3), i.s(["default", 0, i => {
        var P, T, j, S, C, _, w, N;
        let {
            isOpen: B,
            onClose: M,
            selectedPlan: z,
            onPaymentSuccess: R,
            zIndex: W
        } = i, {
            t: D
        } = (0, v.useTranslation)(), [A, O] = (0, n.useState)(""), [L, F] = (0, n.useState)(!1), [H, V] = (0, n.useState)(!1), [E, G] = (0, n.useState)(null), [q, U] = (0, n.useState)(null), [K, Q] = (0, n.useState)(""), {
            formatTimeTo: Y
        } = I(), X = (0, b.useQueryClient)(), J = (0, x.useCreatePagePlanOrder)(), {
            data: Z
        } = (0, x.useGetOrderDetails)(q), $ = (0, f.usePaymentNotifications)(), {
            data: ii,
            isLoading: ie,
            isError: it
        } = (0, k.useGetPublicPromotions)(), ir = (() => {
            var i, e;
            if (!z) return {
                planPriceCents: 0,
                designPriceCents: 0,
                upgradeCreditCents: 0,
                subtotalCents: 0,
                promotionBaseCents: 0,
                discountCents: 0,
                totalCents: 0
            };
            let n = z.priceCents,
                t = 0;
            z.isCurrentPlan ? n = 0 : (null == (i = z.upgradeInfo) ? void 0 : i.isUpgrade) && (t = Math.max(0, n + z.upgradeInfo.savingsCents), n = Math.max(0, n - t));
            let r = H && null != (e = z.designPriceCents) ? e : 0,
                s = Math.max(0, n + r);
            return {
                planPriceCents: n,
                designPriceCents: r,
                upgradeCreditCents: t,
                subtotalCents: s,
                promotionBaseCents: s,
                discountCents: 0,
                totalCents: s
            }
        })(), is = (0, k.useDebouncedPromotionValidation)(A, (null == z ? void 0 : z.id) ? Number(z.id) : void 0, H, ir.subtotalCents, 1e3), ic = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
            if (B) {
                var i;
                O(""), V(null != (i = null == z ? void 0 : z.isCurrentPlan) && i), Q(""), G(null), U(null), ic.current = null
            } else F(!1)
        }, [B, z]), (0, n.useEffect)(() => {
            let i = null == Z ? void 0 : Z.status;
            i && ic.current !== i && ("paid" === i ? (ic.current = i, X.invalidateQueries({
                queryKey: y.BILLING_QUERY_KEYS.currentSubscription
            }), X.invalidateQueries({
                queryKey: ["plans"]
            }), $.showPaymentSuccess(), null == R || R()) : "failed" === i ? (ic.current = i, $.showPaymentFailed()) : "canceled" === i && (ic.current = i, $.showPaymentFailed(D("pricing.purchaseModal.status.canceled"))))
        }, [null == Z ? void 0 : Z.status, X, R, $, D]);
        let io = i => new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            }).format(i),
            ia = (null == z ? void 0 : z.discountEndsAt) ? Y(z.discountEndsAt) : null,
            il = is.data,
            ih = null == il ? void 0 : il.data,
            id = (null == ih ? void 0 : ih.valid) ? ih.breakdown : void 0,
            ip = async () => {
                if (z) try {
                    var i;
                    Q("");
                    let e = await J.mutateAsync({
                        catalogId: Number(z.id),
                        designRequested: H,
                        couponCode: (null == il || null == (i = il.data) ? void 0 : i.valid) ? A : void 0,
                        designBrief: H ? {
                            note: "Design request from pricing modal"
                        } : void 0
                    });
                    G(e), U(e.orderId), $.showOrderCreated()
                } catch (e) {
                    let i = (0, x.getOrderErrorMessage)(e);
                    Q(i), $.showOrderError(i)
                }
            },
            ig = null != (S = null == id ? void 0 : id.subtotalCents) ? S : ir.subtotalCents,
            iu = null != (_ = null != (C = null == id ? void 0 : id.discountCents) ? C : null == ih ? void 0 : ih.discountCents) ? _ : 0,
            im = null != (w = null == id ? void 0 : id.totalCents) ? w : Math.max(0, ig - iu),
            ix = null != (N = null == id ? void 0 : id.upgradeCreditCents) ? N : ir.upgradeCreditCents,
            ib = "PERCENT" === (null == ih || null == (P = ih.discountType) ? void 0 : P.toUpperCase()),
            iy = null == ih ? void 0 : ih.amount,
            ik = ib && "number" == typeof iy ? "".concat(iy, "% (-").concat(io(iu), ")") : io(iu),
            iv = ib && "number" == typeof iy ? "".concat(D("pricing.purchaseModal.discount", {
                amount: A
            }), " (").concat(iy, "%)") : D("pricing.purchaseModal.discount", {
                amount: A
            }),
            iP = (i => {
                if (!i || i.valid) return "";
                if (i.message) return i.message;
                if ("PROMOTION_MIN_SUBTOTAL_NOT_MET" === i.errorCode) {
                    var e, n;
                    let t = null == (e = i.details) ? void 0 : e.minSubtotalCents,
                        r = null == (n = i.details) ? void 0 : n.currentSubtotalCents;
                    if ("number" == typeof t && "number" == typeof r) return "Đơn hàng tối thiểu ".concat(io(t), " (hiện tại ").concat(io(r), ")")
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
                })[i.errorCode] || D("pricing.purchaseModal.invalidCoupon")
            })(ih);
        return z ? (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(u.default, {
                isOpen: B,
                onClose: M,
                title: D("pricing.purchaseModal.title"),
                maxWidth: "450px",
                maxHeight: "85vh",
                zIndex: W,
                children: (0, e.jsxs)(c.VStack, {
                    gap: 4,
                    align: "stretch",
                    w: "full",
                    children: [!E && (0, e.jsxs)(t.Box, {
                        borderRadius: "lg",
                        p: 4,
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        children: [(0, e.jsx)(s.Text, {
                            fontSize: "md",
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            children: D("pricing.purchaseModal.orderInfo")
                        }), (0, e.jsx)(c.VStack, {
                            align: "stretch",
                            gap: 2,
                            children: (0, e.jsx)(t.Box, {
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
                                    children: [(0, e.jsxs)(c.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, e.jsx)(s.Text, {
                                            fontWeight: "bold",
                                            fontSize: "md",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: z.name
                                        }), z.description && (0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: z.description
                                        })]
                                    }), (0, e.jsxs)(t.Box, {
                                        textAlign: {
                                            base: "center",
                                            sm: "right"
                                        },
                                        children: [z.originalPriceCents && z.priceCents < z.originalPriceCents && (0, e.jsxs)(c.VStack, {
                                            align: "end",
                                            gap: 0,
                                            mb: 1,
                                            children: [(0, e.jsx)(s.Text, {
                                                fontSize: "sm",
                                                color: "gray.400",
                                                textDecoration: "line-through",
                                                children: io(z.originalPriceCents)
                                            }), ia && (0, e.jsxs)(s.Text, {
                                                fontSize: "xs",
                                                color: "red.500",
                                                fontWeight: "bold",
                                                children: [D("pricing.endsIn"), ": ", ia]
                                            })]
                                        }), (0, e.jsx)(s.Text, {
                                            fontSize: "lg",
                                            fontWeight: "bold",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: z.isCurrentPlan ? D("pricing.owned") : io(z.priceCents)
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), !E && z && (0, e.jsxs)(t.Box, {
                        borderRadius: "lg",
                        p: 4,
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        children: [(0, e.jsx)(s.Text, {
                            fontSize: "md",
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            children: D("pricing.purchaseModal.coupon")
                        }), (null == il ? void 0 : il.data) && il.data.valid ? (0, e.jsx)(t.Box, {
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
                                children: [(0, e.jsxs)(c.VStack, {
                                    align: "start",
                                    gap: 2,
                                    flex: 1,
                                    children: [(0, e.jsxs)(o.HStack, {
                                        justify: {
                                            base: "center",
                                            sm: "start"
                                        },
                                        children: [(0, e.jsx)(l.Badge, {
                                            colorScheme: "green",
                                            color: "green.600",
                                            children: "✓"
                                        }), (0, e.jsx)(s.Text, {
                                            fontWeight: "bold",
                                            color: "green.800",
                                            textAlign: {
                                                base: "center",
                                                sm: "left"
                                            },
                                            children: D("pricing.purchaseModal.couponApplied", {
                                                code: A
                                            })
                                        })]
                                    }), (0, e.jsxs)(s.Text, {
                                        fontSize: "md",
                                        color: "green.600",
                                        textAlign: {
                                            base: "center",
                                            sm: "left"
                                        },
                                        fontWeight: "medium",
                                        children: ["💰 ", D("pricing.purchaseModal.discount", {
                                            amount: ik
                                        })]
                                    })]
                                }), (0, e.jsx)(p.default, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => {
                                        O("")
                                    },
                                    className: "w-full sm:w-auto text-red-500 border-red-200 hover:bg-red-50",
                                    children: D("pricing.purchaseModal.remove")
                                })]
                            })
                        }) : (0, e.jsxs)(c.VStack, {
                            align: "stretch",
                            children: [(0, e.jsx)(m.Field, {
                                label: D("pricing.purchaseModal.enterCoupon"),
                                children: (0, e.jsxs)(c.VStack, {
                                    gap: 2,
                                    w: "full",
                                    children: [(0, e.jsxs)(o.HStack, {
                                        w: "full",
                                        align: "stretch",
                                        children: [(0, e.jsx)(r.Input, {
                                            placeholder: D("pricing.purchaseModal.couponPlaceholder"),
                                            value: A,
                                            onChange: i => O(i.target.value.toUpperCase()),
                                            disabled: is.isLoading,
                                            w: "full",
                                            textAlign: "center",
                                            fontWeight: "medium",
                                            size: "md"
                                        }), (0, e.jsx)(p.default, {
                                            type: "button",
                                            variant: "outline",
                                            onClick: () => F(!0),
                                            className: "whitespace-nowrap",
                                            children: "Danh sách mã"
                                        })]
                                    }), is.isLoading && (0, e.jsx)(s.Text, {
                                        fontSize: "sm",
                                        color: "blue.500",
                                        textAlign: "center",
                                        fontWeight: "medium",
                                        children: D("pricing.purchaseModal.checking")
                                    })]
                                })
                            }), (null == il ? void 0 : il.data) && !il.data.valid && (0, e.jsx)(t.Box, {
                                p: 4,
                                bg: "red.50",
                                borderWidth: "1px",
                                borderColor: "red.200",
                                borderRadius: "lg",
                                children: (0, e.jsxs)(s.Text, {
                                    fontSize: "sm",
                                    color: "red.600",
                                    textAlign: "center",
                                    fontWeight: "medium",
                                    children: ["❌ ", iP]
                                })
                            })]
                        }), (null == il || null == (T = il.data) ? void 0 : T.valid) && il.data.warnings && il.data.warnings.length > 0 && (0, e.jsx)(t.Box, {
                            p: 3,
                            borderWidth: 1,
                            borderColor: "orange.200",
                            bg: "orange.50",
                            borderRadius: "md",
                            mt: 2,
                            children: (0, e.jsxs)(s.Text, {
                                fontSize: "sm",
                                color: "orange.700",
                                children: ["⚠️ ", il.data.warnings.join(", ")]
                            })
                        })]
                    }), !E && z.designPriceCents && (0, e.jsxs)(t.Box, {
                        borderRadius: "lg",
                        p: 4,
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        children: [(0, e.jsx)(s.Text, {
                            fontSize: "md",
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            children: D("pricing.purchaseModal.additionalOptions")
                        }), (0, e.jsx)(t.Box, {
                            borderRadius: "lg",
                            p: 3,
                            boxShadow: "sm",
                            borderWidth: "2px",
                            borderColor: H ? "purple.500" : "transparent",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            opacity: !z.canAddDesignRequest || z.isCurrentPlan ? .75 : 1,
                            _hover: {
                                borderColor: H ? "purple.600" : "gray.300"
                            },
                            onClick: () => {
                                !1 === z.canAddDesignRequest || z.isCurrentPlan || V(!H)
                            },
                            children: (0, e.jsxs)(o.HStack, {
                                align: "start",
                                gap: 3,
                                children: [(0, e.jsx)(g.Checkbox, {
                                    checked: H || !1 === z.canAddDesignRequest,
                                    disabled: !1 === z.canAddDesignRequest || !!z.isCurrentPlan,
                                    onCheckedChange: i => {
                                        if (!1 !== z.canAddDesignRequest && !z.isCurrentPlan) {
                                            var e;
                                            V(!!("boolean" == typeof i ? i : null != (e = null == i ? void 0 : i.checked) && e))
                                        }
                                    },
                                    mt: 1,
                                    onClick: i => i.stopPropagation()
                                }), (0, e.jsxs)(c.VStack, {
                                    align: "start",
                                    gap: 1,
                                    flex: 1,
                                    children: [(0, e.jsxs)(h.Flex, {
                                        justify: "space-between",
                                        w: "full",
                                        align: "center",
                                        children: [(0, e.jsx)(s.Text, {
                                            fontWeight: "bold",
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: D("pricing.purchaseModal.designRequest")
                                        }), (0, e.jsx)(l.Badge, {
                                            colorScheme: "purple",
                                            variant: "solid",
                                            fontSize: "xs",
                                            children: !1 === z.canAddDesignRequest ? D("pricing.included") : "+".concat(io(z.designPriceCents))
                                        })]
                                    }), (0, e.jsx)(s.Text, {
                                        fontSize: "xs",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        lineHeight: "relaxed",
                                        children: !1 === z.canAddDesignRequest ? D("pricing.designRequestIncluded") : D("pricing.purchaseModal.designRequestDesc")
                                    })]
                                })]
                            })
                        })]
                    }), !E && (0, e.jsxs)(t.Box, {
                        borderRadius: "lg",
                        p: 4,
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        children: [(0, e.jsx)(s.Text, {
                            fontSize: "md",
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            children: D("pricing.purchaseModal.orderSummary")
                        }), (0, e.jsx)(t.Box, {
                            borderRadius: "lg",
                            p: 3,
                            boxShadow: "sm",
                            children: (0, e.jsxs)(c.VStack, {
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
                                    children: [(0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: [D("pricing.purchaseModal.originalPrice"), ":"]
                                    }), (0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        children: [z.originalPriceCents && z.priceCents < z.originalPriceCents && (0, e.jsx)(s.Text, {
                                            as: "span",
                                            fontSize: "sm",
                                            fontWeight: "medium",
                                            textDecoration: "line-through",
                                            color: "gray.400",
                                            mr: 1,
                                            children: io(z.originalPriceCents)
                                        }), z.isCurrentPlan ? D("pricing.owned") : io(z.priceCents)]
                                    })]
                                }), H && z.designPriceCents && (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    py: 1,
                                    borderBottomWidth: "1px",
                                    borderColor: {
                                        base: "gray.100",
                                        _dark: "gray.700"
                                    },
                                    children: [(0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        color: {
                                            base: "gray.600",
                                            _dark: "gray.400"
                                        },
                                        children: [D("pricing.purchaseModal.designRequest"), ":"]
                                    }), (0, e.jsx)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: "purple.600",
                                        children: !1 === z.canAddDesignRequest ? D("pricing.included") : "+".concat(io(z.designPriceCents))
                                    })]
                                }), (null == (j = z.upgradeInfo) ? void 0 : j.isUpgrade) && ix > 0 && (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    py: 1,
                                    borderBottomWidth: "1px",
                                    borderColor: {
                                        base: "gray.100",
                                        _dark: "gray.700"
                                    },
                                    children: [(0, e.jsxs)(c.VStack, {
                                        align: "start",
                                        gap: 0,
                                        children: [(0, e.jsxs)(s.Text, {
                                            fontSize: "sm",
                                            color: "green.600",
                                            fontWeight: "medium",
                                            children: [D("pricing.upgradeDiscount"), ":"]
                                        }), (0, e.jsxs)(s.Text, {
                                            fontSize: "xs",
                                            color: "gray.500",
                                            children: ["(", D("pricing.upgradeFrom", {
                                                plan: z.upgradeInfo.fromTier.toUpperCase()
                                            }), ")"]
                                        })]
                                    }), (0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "bold",
                                        color: "green.600",
                                        children: ["-", io(ix)]
                                    })]
                                }), iu > 0 && (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    py: 1,
                                    borderBottomWidth: "1px",
                                    borderColor: {
                                        base: "gray.100",
                                        _dark: "gray.700"
                                    },
                                    children: [(0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        color: "green.600",
                                        fontWeight: "medium",
                                        children: [iv, ":"]
                                    }), (0, e.jsxs)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "bold",
                                        color: "green.600",
                                        children: ["-", io(iu)]
                                    })]
                                }), (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "center",
                                    py: 2,
                                    borderRadius: "lg",
                                    px: 3,
                                    mt: 2,
                                    children: [(0, e.jsxs)(s.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "gray.800",
                                            _dark: "white"
                                        },
                                        children: [D("pricing.purchaseModal.total"), ":"]
                                    }), (0, e.jsx)(s.Text, {
                                        fontSize: "lg",
                                        fontWeight: "bold",
                                        color: {
                                            base: "blue.600",
                                            _dark: "blue.300"
                                        },
                                        children: io(im)
                                    })]
                                })]
                            })
                        })]
                    }), E ? (0, e.jsxs)(c.VStack, {
                        gap: 6,
                        textAlign: "center",
                        w: "full",
                        children: [Z && (0, e.jsxs)(l.Badge, {
                            size: "lg",
                            colorScheme: "paid" === Z.status ? "green" : "failed" === Z.status || "canceled" === Z.status ? "red" : "blue",
                            px: 4,
                            py: 1,
                            borderRadius: "full",
                            children: ["paid" === Z.status && D("pricing.purchaseModal.status.paid"), "requires_payment" === Z.status && D("pricing.purchaseModal.status.requiresPayment"), "created" === Z.status && D("pricing.purchaseModal.status.created"), "failed" === Z.status && D("pricing.purchaseModal.status.failed"), "canceled" === Z.status && D("pricing.purchaseModal.status.canceled")]
                        }), (null == Z ? void 0 : Z.status) === "paid" ? (0, e.jsxs)(c.VStack, {
                            gap: 4,
                            py: 8,
                            children: [(0, e.jsx)(t.Box, {
                                className: "text-5xl",
                                children: "🎉"
                            }), (0, e.jsxs)(c.VStack, {
                                gap: 2,
                                children: [(0, e.jsx)(s.Text, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    color: "green.600",
                                    children: D("pricing.purchaseModal.paymentSuccess")
                                }), (0, e.jsx)(s.Text, {
                                    color: "gray.600",
                                    children: D("pricing.purchaseModal.paymentSuccessDesc")
                                })]
                            })]
                        }) : (null == Z ? void 0 : Z.status) === "failed" || (null == Z ? void 0 : Z.status) === "canceled" ? (0, e.jsxs)(c.VStack, {
                            gap: 4,
                            py: 8,
                            children: [(0, e.jsx)(t.Box, {
                                className: "text-5xl",
                                children: "❌"
                            }), (0, e.jsxs)(c.VStack, {
                                gap: 2,
                                children: [(0, e.jsx)(s.Text, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    color: "red.600",
                                    children: D("pricing.purchaseModal.paymentFailed")
                                }), (0, e.jsx)(s.Text, {
                                    color: "gray.600",
                                    children: D("pricing.purchaseModal.paymentFailedDesc")
                                })]
                            })]
                        }) : (0, e.jsxs)(c.VStack, {
                            gap: 6,
                            w: "full",
                            children: [(0, e.jsx)(t.Box, {
                                p: 6,
                                borderRadius: "xl",
                                boxShadow: "sm",
                                border: "1px solid",
                                borderColor: {
                                    base: "gray.100",
                                    _dark: "gray.700"
                                },
                                w: "full",
                                children: (0, e.jsxs)(c.VStack, {
                                    gap: 4,
                                    children: [(0, e.jsx)(s.Text, {
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        color: {
                                            base: "gray.700",
                                            _dark: "white"
                                        },
                                        children: D("pricing.purchaseModal.scanQR")
                                    }), (0, e.jsx)(t.Box, {
                                        p: 2,
                                        bg: "white",
                                        borderRadius: "lg",
                                        boxShadow: "md",
                                        border: "1px solid",
                                        borderColor: "gray.100",
                                        children: E.qrImgUrl ? (0, e.jsx)(a.Image, {
                                            src: E.qrImgUrl,
                                            alt: "QR Code Payment",
                                            boxSize: "200px",
                                            objectFit: "contain"
                                        }) : (0, e.jsx)(h.Flex, {
                                            w: "200px",
                                            h: "200px",
                                            align: "center",
                                            justify: "center",
                                            bg: "gray.50",
                                            borderRadius: "md",
                                            children: (0, e.jsx)(s.Text, {
                                                color: "gray.500",
                                                fontSize: "sm",
                                                children: D("pricing.purchaseModal.generatingQR")
                                            })
                                        })
                                    }), (0, e.jsx)(s.Text, {
                                        fontSize: "xs",
                                        color: "gray.500",
                                        children: D("pricing.purchaseModal.autoUpdate")
                                    })]
                                })
                            }), E.bank && E.accountNumber && (0, e.jsx)(t.Box, {
                                w: "full",
                                p: 4,
                                borderRadius: "xl",
                                border: "1px solid",
                                borderColor: {
                                    base: "gray.200",
                                    _dark: "gray.600"
                                },
                                children: (0, e.jsxs)(c.VStack, {
                                    gap: 3,
                                    align: "stretch",
                                    children: [(0, e.jsx)(s.Text, {
                                        fontSize: "sm",
                                        fontWeight: "bold",
                                        color: {
                                            base: "gray.700",
                                            _dark: "white"
                                        },
                                        mb: 1,
                                        children: D("pricing.purchaseModal.bankTransferInfo")
                                    }), (0, e.jsxs)(o.HStack, {
                                        justify: "space-between",
                                        py: 1,
                                        borderBottom: "1px dashed",
                                        borderColor: {
                                            base: "gray.200",
                                            _dark: "gray.600"
                                        },
                                        children: [(0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: D("pricing.purchaseModal.bank")
                                        }), (0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            fontWeight: "semibold",
                                            color: {
                                                base: "gray.800",
                                                _dark: "white"
                                            },
                                            children: E.bank
                                        })]
                                    }), (0, e.jsxs)(o.HStack, {
                                        justify: "space-between",
                                        py: 1,
                                        borderBottom: "1px dashed",
                                        borderColor: {
                                            base: "gray.200",
                                            _dark: "gray.600"
                                        },
                                        children: [(0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: D("pricing.purchaseModal.accountNumber")
                                        }), (0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            fontWeight: "semibold",
                                            color: "blue.600",
                                            fontFamily: "mono",
                                            children: E.accountNumber
                                        })]
                                    }), E.transferDescription && (0, e.jsxs)(o.HStack, {
                                        justify: "space-between",
                                        py: 1,
                                        borderBottom: "1px dashed",
                                        borderColor: {
                                            base: "gray.200",
                                            _dark: "gray.600"
                                        },
                                        children: [(0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: D("pricing.purchaseModal.content")
                                        }), (0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            fontWeight: "semibold",
                                            color: "purple.600",
                                            fontFamily: "mono",
                                            children: E.transferDescription
                                        })]
                                    }), (0, e.jsxs)(o.HStack, {
                                        justify: "space-between",
                                        pt: 1,
                                        children: [(0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.400"
                                            },
                                            children: D("pricing.purchaseModal.total")
                                        }), (0, e.jsx)(s.Text, {
                                            fontSize: "md",
                                            fontWeight: "bold",
                                            color: "rose.500",
                                            children: io(E.summary.total)
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }) : (0, e.jsxs)(t.Box, {
                        borderRadius: "lg",
                        p: 4,
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.600"
                        },
                        children: [(0, e.jsx)(s.Text, {
                            fontSize: "md",
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            color: {
                                base: "gray.800",
                                _dark: "white"
                            },
                            children: D("pricing.purchaseModal.confirmOrder")
                        }), (0, e.jsxs)(c.VStack, {
                            gap: 3,
                            children: [K && (0, e.jsx)(t.Box, {
                                p: 3,
                                bg: "red.50",
                                borderWidth: "1px",
                                borderColor: "red.200",
                                borderRadius: "lg",
                                w: "full",
                                children: (0, e.jsxs)(s.Text, {
                                    fontSize: "sm",
                                    color: "red.600",
                                    textAlign: "center",
                                    fontWeight: "medium",
                                    children: ["❌ ", K]
                                })
                            }), (0, e.jsx)(p.default, {
                                variant: "rose",
                                size: "large",
                                onClick: ip,
                                disabled: J.isPending,
                                className: "w-full h-10 text-sm font-bold",
                                children: J.isPending ? D("pricing.purchaseModal.creatingOrder") : D("pricing.purchaseModal.createOrder")
                            })]
                        })]
                    })]
                })
            }), (0, e.jsx)(u.default, {
                isOpen: L,
                onClose: () => F(!1),
                title: "Chọn mã giảm giá",
                maxWidth: "620px",
                maxHeight: "75vh",
                zIndex: "number" == typeof W ? W + 10 : void 0,
                children: (0, e.jsxs)(c.VStack, {
                    align: "stretch",
                    gap: 3,
                    children: [ie ? (0, e.jsxs)(o.HStack, {
                        py: 8,
                        justify: "center",
                        children: [(0, e.jsx)(d.Spinner, {
                            size: "sm",
                            color: "rose.500"
                        }), (0, e.jsx)(s.Text, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: "Đang tải mã giảm giá..."
                        })]
                    }) : it ? (0, e.jsx)(t.Box, {
                        p: 3,
                        bg: "red.50",
                        borderWidth: "1px",
                        borderColor: "red.200",
                        borderRadius: "lg",
                        children: (0, e.jsx)(s.Text, {
                            fontSize: "sm",
                            color: "red.600",
                            children: "Không tải được danh sách mã giảm giá."
                        })
                    }) : (null == ii ? void 0 : ii.length) ? (0, e.jsx)(c.VStack, {
                        align: "stretch",
                        gap: 2,
                        maxH: "52vh",
                        overflowY: "auto",
                        pr: 1,
                        children: ii.map(i => {
                            var n;
                            let r = A.trim().toUpperCase() === i.code.toUpperCase();
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
                                    O(i.code.toUpperCase()), F(!1)
                                },
                                _hover: {
                                    borderColor: "green.300"
                                },
                                children: (0, e.jsxs)(h.Flex, {
                                    justify: "space-between",
                                    align: "start",
                                    gap: 2,
                                    children: [(0, e.jsxs)(c.VStack, {
                                        align: "start",
                                        gap: 1,
                                        flex: 1,
                                        children: [(0, e.jsxs)(o.HStack, {
                                            gap: 2,
                                            children: [(0, e.jsx)(s.Text, {
                                                fontWeight: "bold",
                                                color: "rose.500",
                                                children: i.code
                                            }), r && (0, e.jsx)(l.Badge, {
                                                colorScheme: "green",
                                                children: "Đang chọn"
                                            })]
                                        }), i.description && (0, e.jsx)(s.Text, {
                                            fontSize: "sm",
                                            color: {
                                                base: "gray.600",
                                                _dark: "gray.300"
                                            },
                                            children: i.description
                                        }), (0, e.jsxs)(o.HStack, {
                                            gap: 3,
                                            wrap: "wrap",
                                            children: [(0, e.jsx)(s.Text, {
                                                fontSize: "xs",
                                                color: {
                                                    base: "gray.500",
                                                    _dark: "gray.400"
                                                },
                                                children: i.minSubtotalCents > 0 ? "Tối thiểu ".concat(i.minSubtotalCents.toLocaleString("vi-VN"), "đ") : "Không yêu cầu tối thiểu"
                                            }), (0, e.jsx)(s.Text, {
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
                        children: (0, e.jsx)(s.Text, {
                            fontSize: "sm",
                            color: {
                                base: "gray.600",
                                _dark: "gray.400"
                            },
                            children: "Hiện chưa có mã giảm giá."
                        })
                    }), (0, e.jsx)(o.HStack, {
                        justify: "flex-end",
                        children: (0, e.jsx)(p.default, {
                            variant: "outline",
                            onClick: () => F(!1),
                            children: "Đóng"
                        })
                    })]
                })
            })]
        }) : null
    }], 819060)
}, 788318, i => {
    "use strict";
    var e = i.i(483632),
        n = i.i(453151),
        t = i.i(564668),
        r = i.i(215669),
        s = i.i(791089),
        c = i.i(118190),
        o = i.i(789757),
        a = i.i(119887),
        l = i.i(676525);
    i.i(308972);
    var h = i.i(445979);
    i.s(["default", 0, i => {
        let {
            plan: d,
            price: p,
            designPrice: g,
            features: u,
            isPopular: m = !1,
            isCurrent: x = !1,
            isDisabled: b = !1,
            borderColor: y = "gray.200",
            badgeColor: f = "rose.400",
            onSelect: k,
            adjustedPrice: v,
            savings: P,
            isUpgrade: T,
            canAddDesignOnly: j,
            onViewDetails: S,
            onBuyFeatures: C,
            showVipLogo: _,
            originalPrice: w,
            discountPercent: I,
            countdown: N
        } = i, {
            t: B
        } = (0, h.useTranslation)();
        return (0, e.jsxs)(t.Box, {
            position: "relative",
            bg: n.PUBLIC_LANDING_SURFACE.bg,
            borderRadius: "2xl",
            border: "1px solid",
            borderColor: {
                base: y,
                _dark: "gray.300" === y ? "gray.700" : y
            },
            p: {
                base: 4,
                md: 7
            },
            boxShadow: n.PUBLIC_LANDING_SURFACE.shadow,
            w: "full",
            minH: {
                base: "auto",
                md: "548px"
            },
            display: "flex",
            flexDirection: "column",
            opacity: b ? .64 : 1,
            transition: "all 0.25s ease",
            _hover: b ? {} : {
                transform: {
                    base: "none",
                    md: "translateY(-4px)"
                },
                boxShadow: {
                    base: n.PUBLIC_LANDING_SURFACE.shadow,
                    md: "lg"
                }
            },
            children: [x && (0, e.jsx)(t.Box, {
                position: "absolute",
                top: "10px",
                left: "10px",
                bg: "teal.500",
                borderRadius: "full",
                px: 3,
                py: 1,
                minH: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: (0, e.jsx)(s.Text, {
                    color: "white",
                    fontSize: "xs",
                    fontWeight: "700",
                    textAlign: "center",
                    children: B("pricing.currentPlan")
                })
            }), !x && (m || "vip" === d) && (0, e.jsx)(t.Box, {
                position: "absolute",
                top: "10px",
                left: "10px",
                bg: "vip" === d ? "yellow.500" : f,
                borderRadius: "full",
                px: 3,
                py: 1,
                minH: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                children: (0, e.jsx)(s.Text, {
                    color: "white",
                    fontSize: "xs",
                    fontWeight: "700",
                    textAlign: "center",
                    children: B("vip" === d ? "pricing.cards.vip.badge" : "pricing.cards.pro.badge")
                })
            }), I && (0, e.jsx)(t.Box, {
                position: "absolute",
                top: "10px",
                right: "10px",
                bg: "red.500",
                borderRadius: "full",
                px: 2.5,
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                children: (0, e.jsxs)(s.Text, {
                    color: "white",
                    fontSize: "xs",
                    fontWeight: "700",
                    children: ["-", I, "%"]
                })
            }), (0, e.jsxs)(c.VStack, {
                gap: 0,
                align: "stretch",
                flex: 1,
                children: [(0, e.jsx)(t.Box, {
                    minH: {
                        base: "146px",
                        md: "196px"
                    },
                    children: (0, e.jsxs)(c.VStack, {
                        gap: 2,
                        align: "center",
                        children: [(0, e.jsxs)(r.HStack, {
                            justify: "center",
                            align: "center",
                            gap: 2,
                            pt: {
                                base: 5,
                                md: 6
                            },
                            children: [(0, e.jsx)(s.Text, {
                                fontSize: {
                                    base: "xl",
                                    md: "3xl"
                                },
                                fontWeight: "700",
                                color: {
                                    base: "gray.900",
                                    _dark: "white"
                                },
                                textAlign: "center",
                                fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                                letterSpacing: "-0.01em",
                                children: B("pricing.cards.".concat(d, ".name"))
                            }), _ && (0, e.jsx)(a.Image, {
                                src: "/images/vip-icon.png",
                                alt: "VIP Logo",
                                w: {
                                    base: "24px",
                                    md: "32px"
                                },
                                h: {
                                    base: "24px",
                                    md: "32px"
                                }
                            })]
                        }), (0, e.jsx)(s.Text, {
                            fontSize: {
                                base: "xs",
                                md: "base"
                            },
                            color: {
                                base: "gray.600",
                                _dark: "gray.300"
                            },
                            textAlign: "center",
                            fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                            children: B("pricing.cards.".concat(d, ".subtitle"))
                        }), (0, e.jsxs)(c.VStack, {
                            gap: 1,
                            mt: {
                                base: 2.5,
                                md: 3
                            },
                            children: [v ? (0, e.jsxs)(c.VStack, {
                                align: "center",
                                gap: 0,
                                children: [(0, e.jsx)(s.Text, {
                                    fontSize: "sm",
                                    color: "gray.400",
                                    textDecoration: "line-through",
                                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                    children: p
                                }), (0, e.jsx)(s.Text, {
                                    fontSize: {
                                        base: "2xl",
                                        md: "4xl"
                                    },
                                    fontWeight: "700",
                                    color: "rose.500",
                                    fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                                    children: v
                                }), P && (0, e.jsxs)(o.Badge, {
                                    colorScheme: "green",
                                    variant: "solid",
                                    fontSize: "xs",
                                    mt: 1,
                                    children: [B("pricing.save"), " ", P]
                                })]
                            }) : (0, e.jsxs)(c.VStack, {
                                align: "center",
                                gap: 0,
                                children: [w && (0, e.jsx)(s.Text, {
                                    fontSize: "sm",
                                    color: "gray.400",
                                    textDecoration: "line-through",
                                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                    children: w
                                }), (0, e.jsx)(s.Text, {
                                    fontSize: {
                                        base: "2xl",
                                        md: "4xl"
                                    },
                                    fontWeight: "700",
                                    color: {
                                        base: "gray.900",
                                        _dark: "white"
                                    },
                                    fontFamily: n.PUBLIC_LANDING_FONT_HEADING,
                                    children: p
                                }), N && (0, e.jsxs)(s.Text, {
                                    fontSize: "xs",
                                    color: "red.500",
                                    fontWeight: "700",
                                    fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                    children: [B("pricing.endsIn"), ": ", N]
                                })]
                            }), g && (0, e.jsxs)(s.Text, {
                                fontSize: "xs",
                                color: "teal.600",
                                fontWeight: "600",
                                fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                children: ["+ ", g, " ", B("pricing.designFee")]
                            })]
                        })]
                    })
                }), (0, e.jsx)(t.Box, {
                    flex: 1,
                    mt: {
                        base: 5,
                        md: 7
                    },
                    mb: {
                        base: 5,
                        md: 6
                    },
                    children: (0, e.jsx)(c.VStack, {
                        gap: {
                            base: 3,
                            md: 3.5
                        },
                        align: "stretch",
                        children: u.map((i, c) => (0, e.jsxs)(r.HStack, {
                            gap: 2.5,
                            align: "flex-start",
                            children: [(0, e.jsx)(t.Box, {
                                flexShrink: 0,
                                pt: 1,
                                children: (0, e.jsx)(t.Box, {
                                    w: "10px",
                                    h: "10px",
                                    bg: f,
                                    borderRadius: "full"
                                })
                            }), (0, e.jsx)(s.Text, {
                                fontSize: {
                                    base: "xs",
                                    md: "sm"
                                },
                                color: {
                                    base: "gray.700",
                                    _dark: "gray.300"
                                },
                                fontFamily: n.PUBLIC_LANDING_FONT_BODY,
                                lineHeight: {
                                    base: "1.55",
                                    md: "1.6"
                                },
                                children: i
                            })]
                        }, c))
                    })
                }), (0, e.jsx)(t.Box, {
                    mb: 2.5,
                    children: (0, e.jsx)(l.default, {
                        variant: "ghost",
                        className: "w-full min-h-[44px]",
                        onClick: S,
                        children: B("pricing.viewDetails")
                    })
                }), C && (0, e.jsx)(t.Box, {
                    mb: 2.5,
                    children: (0, e.jsx)(l.default, {
                        variant: "outline",
                        className: "w-full min-h-[44px]",
                        onClick: C,
                        children: B("vip" === d ? "pricing.customDesign" : "pricing.buyFeatures")
                    })
                }), (0, e.jsx)(t.Box, {
                    mt: "auto",
                    children: (0, e.jsx)(l.default, {
                        variant: "vip" === d ? "gold" : "pro" === d ? "blue" : "outline",
                        size: "large",
                        className: "w-full min-h-[46px]",
                        onClick: k,
                        disabled: b,
                        children: B(b ? "pricing.usingPlan" : j ? "pricing.addDesignRequest" : T ? "pricing.upgradeNow" : "pricing.selectPlan")
                    })
                })]
            })]
        })
    }])
}]);

//# debugId=42eb781d-28fc-49f6-efb4-443afbaca210
//# sourceMappingURL=7531142143ca5b42.js.map