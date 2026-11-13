"use strict";

const translations = {
  "en": {
    "title": "Privacy Policy · Color Picker",
    "description": "Learn how Color Picker handles local storage, images, clipboard actions, drawing, and screen capture. Read the full privacy policy.",
    "skip": "Skip to privacy policy",
    "brand": "Color Picker, back to top",
    "center": "Privacy center",
    "badge": "On your device. In your control.",
    "heading": "Privacy policy.",
    "intro": "A clear look at how Color Picker handles your colors, images and drawings — and the choices you control.",
    "highlightsLabel": "Privacy at a glance",
    "highlights": [
      "Local processing",
      "No tracking",
      "You choose what to save"
    ],
    "highlightDetails": [
      "Your colors and images stay on your device.",
      "No accounts, ads or usage analytics.",
      "Exports happen when you request them."
    ],
    "contents": "On this page",
    "sectionsLabel": "Policy sections",
    "policyLabel": "Color Picker privacy policy",
    "headings": [
      "Your privacy, by design",
      "Local storage & your controls",
      "Picking a screen color",
      "Clipboard & paste",
      "Drawing on a webpage",
      "Desktop drawing companion",
      "Images & color analysis",
      "Saving your drawings",
      "Screen capture permissions"
    ],
    "paragraphs": [
      "Color Picker processes colors on your device. It does not transmit browsing history, page content, images, personal information or usage analytics to remote servers. It has no accounts, ads, remote scripts, external fonts or runtime network requests.",
      "The extension uses the storage permission to keep your selected language, current color, saved palette and recent colors in chrome.storage.local. It does not use browser account sync. Clear recent colors with the Clear button and remove saved colors with each swatch's remove button. Uninstalling the extension removes its local extension storage.",
      "When you click Pick screen color, the browser provides its native EyeDropper. The extension receives only the sRGB hexadecimal value of the pixel you explicitly select. The color picker does not record the screen or run background sampling. The selected color may then be stored in local history. Press Escape to cancel.",
      "Copy buttons write the selected color code to your clipboard in response to a click. When you explicitly paste an image with Ctrl+V / Cmd+V, the extension reads the image included in that paste event and processes it locally. Ordinary text paste is handled by the focused input. The extension does not poll the clipboard or request clipboard-read permission.",
      "When you click Draw on this page, the extension uses activeTab and scripting to add a local drawing overlay to that current webpage. It does not request permanent access to all websites or inject drawing tools automatically. Annotation strokes, text and undo history are held in that page session; you can explicitly export the transparent drawing layer as a PNG. Closing the drawing tools or leaving the page releases that session.",
      "Desktop drawing uses the separate Color Picker Draw application. It creates transparent windows above other applications. Ordinary drawing and drawing-only export do not capture the applications underneath. The app link shares only your chosen color and language. Drawings and typed annotation text remain in memory until you close the app, except for PNG files that you explicitly save. The desktop companion does not start a network service, use analytics or request a native messaging host installation.",
      "When you choose, drop or paste an image file, Color Picker decodes it locally to inspect pixels, list distinct colors and count how many pixels use each color. The original image and full image color inventory stay in memory for that popup or window session; they are not uploaded or written to extension storage. Removing the image or closing the view releases this session data. Colors explicitly selected from the image may be saved as the current color and in local history or your palette. Export all CSV creates a local file containing color codes, color channels and pixel counts, without the source image or file name.",
      "The drawing Save menu has three explicit modes. Drawing-only saves a transparent annotation PNG. Web view with drawings captures the visible webpage (or a region you select in the desktop companion), then composites annotations. Entire screen with drawings captures a selected screen in Chrome, or the active drawing display in the companion. These images are saved only to your device. Toolbars, eraser preview and selection UI are excluded.",
      "Chrome's desktopCapture permission opens the screen selector for your requested full-screen save. The temporary capture helper reads a screen video frame and stops every media track after saving or canceling. It does not keep a recording or run capture in the background after the save operation. Temporary session storage contains only the request ID and originating tab/window IDs for restoring the UI; it contains no captured image. The desktop app uses the OS desktop-capture API when you select a web/screen save mode; macOS may ask for Screen Recording permission. Canceling or denying capture restores the tools and preserves your drawing."
    ],
    "footer": "Color Picker · Privacy policy",
    "top": "Back to top ↑",
    "language": "Choose language"
  },
  "vi": {
    "title": "Chính sách quyền riêng tư · Color Picker",
    "description": "Tìm hiểu cách Color Picker xử lý bộ nhớ cục bộ, hình ảnh, bảng nhớ tạm, bản vẽ và việc chụp màn hình.",
    "skip": "Đến nội dung chính sách",
    "brand": "Color Picker, về đầu trang",
    "center": "Quyền riêng tư",
    "badge": "Trên thiết bị của bạn. Do bạn kiểm soát.",
    "heading": "Chính sách quyền riêng tư.",
    "intro": "Tìm hiểu cách Color Picker xử lý màu sắc, hình ảnh và bản vẽ, cùng những lựa chọn do bạn kiểm soát.",
    "highlightsLabel": "Tổng quan về quyền riêng tư",
    "highlights": [
      "Xử lý cục bộ",
      "Không theo dõi",
      "Bạn quyết định nội dung lưu"
    ],
    "highlightDetails": [
      "Màu sắc và hình ảnh nằm trên thiết bị của bạn.",
      "Không tài khoản, quảng cáo hay phân tích sử dụng.",
      "Chỉ xuất tệp khi bạn yêu cầu."
    ],
    "contents": "Nội dung trang",
    "sectionsLabel": "Các mục chính sách",
    "policyLabel": "Chính sách quyền riêng tư của Color Picker",
    "headings": [
      "Quyền riêng tư ngay từ thiết kế",
      "Lưu trữ cục bộ và quyền kiểm soát",
      "Chọn màu trên màn hình",
      "Bảng nhớ tạm và thao tác dán",
      "Vẽ trên trang web",
      "Ứng dụng vẽ trên máy tính",
      "Hình ảnh và phân tích màu",
      "Lưu bản vẽ",
      "Quyền chụp màn hình"
    ],
    "paragraphs": [
      "Color Picker xử lý màu sắc trên thiết bị của bạn. Tiện ích không gửi lịch sử duyệt web, nội dung trang, hình ảnh, thông tin cá nhân hay dữ liệu phân tích sử dụng đến máy chủ từ xa. Tiện ích không có tài khoản, quảng cáo, mã lệnh từ xa, phông chữ bên ngoài hay yêu cầu mạng khi hoạt động.",
      "Tiện ích dùng quyền storage để lưu ngôn ngữ đã chọn, màu hiện tại, bảng màu đã lưu và các màu gần đây trong chrome.storage.local. Tiện ích không dùng tính năng đồng bộ tài khoản trình duyệt. Bạn có thể xóa các màu gần đây bằng nút Xóa (Clear) và xóa từng màu đã lưu bằng nút xóa trên ô màu đó. Gỡ cài đặt tiện ích sẽ xóa dữ liệu lưu trữ cục bộ của tiện ích.",
      "Khi bạn nhấn Chọn màu màn hình (Pick screen color), trình duyệt cung cấp công cụ EyeDropper có sẵn. Tiện ích chỉ nhận giá trị thập lục phân sRGB của điểm ảnh mà bạn chủ động chọn. Công cụ chọn màu không ghi hình màn hình hay lấy mẫu trong nền. Màu đã chọn sau đó có thể được lưu vào lịch sử cục bộ. Nhấn Escape để hủy.",
      "Các nút Sao chép ghi mã màu đã chọn vào bảng nhớ tạm khi bạn nhấn nút. Khi bạn chủ động dán hình ảnh bằng Ctrl+V / Cmd+V, tiện ích đọc hình ảnh trong sự kiện dán đó và xử lý cục bộ. Thao tác dán văn bản thông thường do ô nhập đang được chọn xử lý. Tiện ích không kiểm tra bảng nhớ tạm định kỳ hay yêu cầu quyền clipboard-read.",
      "Khi bạn nhấn Vẽ trên trang này (Draw on this page), tiện ích dùng activeTab và scripting để thêm một lớp vẽ cục bộ lên trang web hiện tại. Tiện ích không yêu cầu quyền truy cập thường trực vào mọi trang web hay tự động chèn công cụ vẽ. Nét vẽ, văn bản chú thích và lịch sử hoàn tác được giữ trong phiên của trang đó; bạn có thể chủ động xuất lớp vẽ trong suốt thành PNG. Đóng công cụ vẽ hoặc rời trang sẽ giải phóng phiên này.",
      "Chức năng vẽ trên máy tính dùng ứng dụng Color Picker Draw riêng biệt. Ứng dụng tạo các cửa sổ trong suốt phía trên ứng dụng khác. Thao tác vẽ thông thường và xuất riêng bản vẽ không chụp các ứng dụng bên dưới. Liên kết mở ứng dụng chỉ chia sẻ màu và ngôn ngữ bạn đã chọn. Bản vẽ và văn bản chú thích đã nhập nằm trong bộ nhớ cho đến khi bạn đóng ứng dụng, ngoại trừ các tệp PNG do bạn chủ động lưu. Ứng dụng đồng hành trên máy tính không khởi chạy dịch vụ mạng, dùng phân tích sử dụng hay yêu cầu cài đặt native messaging host.",
      "Khi bạn chọn, thả hoặc dán một tệp hình ảnh, Color Picker giải mã ảnh cục bộ để kiểm tra điểm ảnh, liệt kê các màu riêng biệt và đếm số điểm ảnh của mỗi màu. Ảnh gốc và danh sách đầy đủ màu trong ảnh nằm trong bộ nhớ của phiên cửa sổ bật lên hoặc cửa sổ đó; chúng không được tải lên hay ghi vào bộ nhớ lưu trữ của tiện ích. Xóa ảnh hoặc đóng chế độ xem sẽ giải phóng dữ liệu phiên này. Các màu bạn chủ động chọn từ ảnh có thể được lưu làm màu hiện tại và vào lịch sử cục bộ hoặc bảng màu. Xuất toàn bộ CSV (Export all CSV) tạo tệp cục bộ chứa mã màu, các kênh màu và số lượng điểm ảnh, không kèm ảnh nguồn hay tên tệp.",
      "Menu Lưu (Save) của công cụ vẽ có ba chế độ riêng biệt. Chỉ bản vẽ (Drawing-only) lưu PNG chú thích trong suốt. Trang web kèm bản vẽ (Web view with drawings) chụp phần trang web đang hiển thị (hoặc vùng bạn chọn trong ứng dụng đồng hành trên máy tính), rồi ghép chú thích lên ảnh. Toàn màn hình kèm bản vẽ (Entire screen with drawings) chụp một màn hình được chọn trong Chrome, hoặc màn hình vẽ đang hoạt động trong ứng dụng đồng hành. Các ảnh này chỉ được lưu trên thiết bị của bạn. Thanh công cụ, hình xem trước của tẩy và giao diện chọn vùng không xuất hiện trong ảnh.",
      "Quyền desktopCapture của Chrome mở trình chọn màn hình khi bạn yêu cầu lưu toàn màn hình. Công cụ hỗ trợ chụp tạm thời đọc một khung hình video màn hình và dừng mọi luồng media sau khi lưu hoặc hủy. Công cụ không giữ bản ghi hay tiếp tục chụp trong nền sau thao tác lưu. Bộ nhớ phiên tạm thời chỉ chứa ID yêu cầu cùng ID tab/cửa sổ nguồn để khôi phục giao diện; không chứa ảnh đã chụp. Ứng dụng máy tính dùng API chụp màn hình của hệ điều hành khi bạn chọn chế độ lưu trang web/màn hình; macOS có thể yêu cầu quyền Ghi màn hình (Screen Recording). Hủy hoặc từ chối chụp sẽ khôi phục công cụ và giữ nguyên bản vẽ của bạn."
    ],
    "footer": "Color Picker · Chính sách quyền riêng tư",
    "top": "Về đầu trang ↑",
    "language": "Chọn ngôn ngữ"
  },
  "zh-CN": {
    "title": "隐私政策 · Color Picker",
    "description": "了解 Color Picker 如何处理本地存储、图片、剪贴板操作、绘图和屏幕捕获。",
    "skip": "跳转到隐私政策",
    "brand": "Color Picker，返回顶部",
    "center": "隐私中心",
    "badge": "保留在您的设备上。由您掌控。",
    "heading": "隐私政策。",
    "intro": "清楚了解 Color Picker 如何处理颜色、图片和绘图，以及您可以控制的选项。",
    "highlightsLabel": "隐私概览",
    "highlights": [
      "本地处理",
      "不进行跟踪",
      "由您决定保存内容"
    ],
    "highlightDetails": [
      "颜色和图片保留在您的设备上。",
      "无账户、广告或使用情况分析。",
      "仅在您请求时导出文件。"
    ],
    "contents": "本页内容",
    "sectionsLabel": "政策章节",
    "policyLabel": "Color Picker 隐私政策",
    "headings": [
      "从设计之初保护隐私",
      "本地存储与管理",
      "选取屏幕颜色",
      "剪贴板与粘贴",
      "在网页上绘图",
      "桌面绘图配套应用",
      "图片与颜色分析",
      "保存绘图",
      "屏幕捕获权限"
    ],
    "paragraphs": [
      "Color Picker 在您的设备上处理颜色。它不会将浏览历史、页面内容、图片、个人信息或使用情况分析数据传输到远程服务器。它没有账户、广告、远程脚本、外部字体或运行时网络请求。",
      "扩展使用 storage 权限，将您选择的语言、当前颜色、已保存的调色板和最近使用的颜色保存在 chrome.storage.local 中。它不使用浏览器账户同步。您可以通过清除（Clear）按钮清空最近使用的颜色，通过各色块的移除按钮删除已保存的颜色。卸载扩展会删除其本地扩展存储数据。",
      "当您点击选取屏幕颜色（Pick screen color）时，浏览器会提供原生 EyeDropper 工具。扩展仅接收您明确选择的像素的 sRGB 十六进制颜色值。取色工具不会录制屏幕，也不会在后台采样。所选颜色随后可能被存入本地历史记录。按 Escape 可取消。",
      "当您点击复制按钮时，所选颜色代码会写入剪贴板。当您使用 Ctrl+V / Cmd+V 主动粘贴图片时，扩展会读取该粘贴事件中的图片并在本地处理。普通文本粘贴由当前获得焦点的输入框处理。扩展不会轮询剪贴板，也不会请求 clipboard-read 权限。",
      "当您点击在此页面绘图（Draw on this page）时，扩展会使用 activeTab 和 scripting，在当前网页上添加本地绘图覆盖层。它不会请求对所有网站的永久访问权限，也不会自动注入绘图工具。标注笔画、文字和撤销历史保留在该页面会话中；您可以主动将透明绘图层导出为 PNG。关闭绘图工具或离开页面会释放该会话。",
      "桌面绘图使用独立的 Color Picker Draw 应用。它会在其他应用上方创建透明窗口。普通绘图和仅导出绘图不会捕获下方的应用。应用链接仅传递您选择的颜色和语言。绘图和输入的标注文字保留在内存中，直到您关闭应用，但您主动保存的 PNG 文件除外。桌面配套应用不会启动网络服务、使用分析功能或要求安装原生消息传递宿主（native messaging host）。",
      "当您选择、拖放或粘贴图片文件时，Color Picker 会在本地解码图片，以检查像素、列出不同颜色并统计每种颜色的像素数量。原始图片和完整的图片颜色清单保留在该弹出窗口或窗口会话的内存中；它们不会被上传，也不会写入扩展存储。移除图片或关闭视图会释放该会话数据。您从图片中明确选择的颜色可以保存为当前颜色，并存入本地历史记录或调色板。导出全部 CSV（Export all CSV）会创建一个包含颜色代码、颜色通道和像素数量的本地文件，不包含源图片或文件名。",
      "绘图的保存（Save）菜单有三种明确的模式。仅绘图（Drawing-only）保存透明标注 PNG。网页与绘图（Web view with drawings）捕获可见网页（或您在桌面配套应用中选择的区域），然后合成标注。整个屏幕与绘图（Entire screen with drawings）捕获您在 Chrome 中选择的屏幕，或配套应用中当前正在绘图的显示器。这些图片仅保存在您的设备上。工具栏、橡皮擦预览和选择界面不会包含在图片中。",
      "当您请求保存全屏图片时，Chrome 的 desktopCapture 权限会打开屏幕选择器。临时捕获辅助工具会读取一个屏幕视频帧，并在保存或取消后停止所有媒体轨道。它不会保留录像，也不会在保存操作结束后继续在后台捕获。临时会话存储仅包含请求 ID 和来源标签页/窗口 ID，用于恢复界面；其中没有捕获的图片。当您选择网页/屏幕保存模式时，桌面应用会使用操作系统的桌面捕获 API；macOS 可能要求授予屏幕录制（Screen Recording）权限。取消或拒绝捕获会恢复工具并保留您的绘图。"
    ],
    "footer": "Color Picker · 隐私政策",
    "top": "返回顶部 ↑",
    "language": "选择语言"
  }
};

const languageSwitch = document.querySelector(".language-switch");
const languageButtons = languageSwitch.querySelectorAll("button");

function setLanguage(language, remember = false) {
  const copy = translations[language] || translations.en;
  const selectedLanguage = Object.hasOwn(translations, language) ? language : "en";

  document.documentElement.lang = selectedLanguage;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector(".skip-link").textContent = copy.skip;
  document.querySelector(".brand").setAttribute("aria-label", copy.brand);
  document.querySelector(".header-label").textContent = copy.center;
  document.querySelector(".eyebrow").textContent = copy.badge;
  document.querySelector("h1").textContent = copy.heading;
  document.querySelector(".intro").textContent = copy.intro;
  document.querySelector(".highlights").setAttribute("aria-label", copy.highlightsLabel);

  document.querySelectorAll(".highlight").forEach((element, index) => {
    const title = element.querySelector("strong");
    const dot = title.querySelector(".dot");
    title.replaceChildren(dot, document.createTextNode(copy.highlights[index]));
    element.querySelector("p").textContent = copy.highlightDetails[index];
  });

  document.querySelector(".nav-title").textContent = copy.contents;
  document.querySelector("nav").setAttribute("aria-label", copy.sectionsLabel);
  document.querySelector("article").setAttribute("aria-label", copy.policyLabel);

  document.querySelectorAll("nav a").forEach((link, index) => {
    const number = link.querySelector("span");
    link.replaceChildren(number, document.createTextNode(copy.headings[index]));
  });

  document.querySelectorAll("article section").forEach((section, index) => {
    section.querySelector("h2").textContent = copy.headings[index];
    const paragraph = section.querySelector("p");
    paragraph.replaceChildren();

    // These are API identifiers in all three languages, not translated prose.
    copy.paragraphs[index].split(/(chrome\.storage\.local|\bstorage\b)/g).forEach((part) => {
      if (part === "chrome.storage.local" || part === "storage") {
        const token = document.createElement(part === "storage" ? "strong" : "code");
        token.textContent = part;
        paragraph.append(token);
      } else {
        paragraph.append(document.createTextNode(part));
      }
    });
  });

  document.querySelector(".footer-inner p").textContent = copy.footer;
  document.querySelector(".footer-inner a").textContent = copy.top;
  languageSwitch.setAttribute("aria-label", copy.language);

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });

  if (remember) {
    try {
      localStorage.setItem("color-picker-policy-language", selectedLanguage);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }
}

let initialLanguage = "en";

try {
  const savedLanguage = localStorage.getItem("color-picker-policy-language");
  if (Object.hasOwn(translations, savedLanguage)) {
    initialLanguage = savedLanguage;
  }
} catch {
  // Keep English as the default when browser storage is unavailable.
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language, true);
  });
});

setLanguage(initialLanguage);
languageSwitch.hidden = false;
