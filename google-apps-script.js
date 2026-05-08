// ============================================
// Google Apps Script — Deploy as Web App
// ============================================
// Hướng dẫn:
// 1. Vào Google Sheets → Tạo sheet mới (trống)
// 2. Extensions → Apps Script → Dán code dưới đây
// 3. Chạy hàm setupSheet() 1 lần để tự tạo header
// 4. Deploy → New deployment → Web app → Execute as Me → Anyone can access
// 5. Copy URL → Dán vào NEXT_PUBLIC_GOOGLE_SHEET_URL trong .env.local

var HEADERS = [
  "Timestamp", "Tên SP", "CPU", "RAM", "Ổ cứng", "Loại ổ",
  "Màn hình", "Độ phân giải", "Card", "Tính năng",
  "Tình trạng", "Mô tả", "Giá mong muốn",
  "Họ tên", "SĐT", "Email", "Địa chỉ", "Ghi chú"
];

// ── Chạy 1 lần để tạo header + format ──
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.setName("Leads");

  // Ghi header
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#FEF3C7"); // amber-100
  headerRange.setFontSize(10);

  // Đóng băng hàng 1
  sheet.setFrozenRows(1);

  // Auto resize
  for (var i = 1; i <= HEADERS.length; i++) {
    sheet.autoResizeColumn(i);
  }

  // Cột SĐT (15) rộng hơn
  sheet.setColumnWidth(15, 140);
  // Cột Timestamp (1) rộng hơn
  sheet.setColumnWidth(1, 170);

  SpreadsheetApp.getUi().alert("✅ Sheet đã sẵn sàng nhận dữ liệu!");
}

// ── Nhận form data ──
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
    if (!sheet) sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    // Tự tạo header nếu sheet trống
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Anti-spam: check SĐT trùng trong 10 phút
    var lastRows = sheet.getLastRow();
    if (lastRows > 1) {
      var checkCount = Math.min(20, lastRows - 1);
      var startRow = lastRows - checkCount + 1;
      var recentPhones = sheet.getRange(startRow, 15, checkCount, 1).getValues();
      var recentTimes = sheet.getRange(startRow, 1, checkCount, 1).getValues();
      var now = new Date();

      for (var i = 0; i < recentPhones.length; i++) {
        if (recentPhones[i][0] === data.phone && recentTimes[i][0]) {
          var diff = (now - new Date(recentTimes[i][0])) / 1000 / 60;
          if (diff < 10) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              message: "Bạn đã gửi yêu cầu gần đây. Vui lòng đợi 10 phút."
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }
    }

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Spam detected"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Ghi dữ liệu
    sheet.appendRow([
      new Date().toLocaleString("vi-VN"),
      data.productName || "",
      data.cpu || "",
      data.ram || "",
      data.storage || "",
      data.storageType || "",
      data.screen || "",
      data.resolution || "",
      data.gpu || "",
      data.features || "",
      data.condition || "",
      data.description || "",
      data.desiredPrice || "",
      data.name || "",
      data.phone || "",
      data.email || "",
      data.address || "",
      data.note || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Đã nhận thông tin thành công!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
