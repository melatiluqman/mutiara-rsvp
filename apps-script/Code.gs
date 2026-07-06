/**
 * Endpoint RSVP — Mutiara's Sweet Seventeen
 *
 * Cara pakai:
 * 1. Buat Google Spreadsheet baru.
 * 2. Menu: Extensions > Apps Script, lalu tempel seluruh isi file ini.
 * 3. Deploy > New deployment > pilih "Web app":
 *      - Execute as : Me
 *      - Who has access : Anyone
 * 4. Salin URL Web App (berakhiran /exec) ke .env.local sebagai APPS_SCRIPT_URL.
 *
 * Data yang diterima (JSON): { nama, kehadiran, telepon }
 * Baris yang ditulis: Timestamp | Nama | Kehadiran | Nomor Telepon
 */

var SHEET_NAME = "RSVP";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);

    var nama = String(data.nama || "").trim();
    var kehadiran = String(data.kehadiran || "").trim();
    var telepon = String(data.telepon || "").trim();

    if (!nama || !telepon || (kehadiran !== "Hadir" && kehadiran !== "Tidak Hadir")) {
      return jsonResponse({ ok: false, error: "Data tidak lengkap atau tidak valid." });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Buat baris header saat pertama kali dipakai.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Nama", "Kehadiran", "Nomor Telepon"]);
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Apostrof di depan memaksa Sheets menyimpan nomor sebagai teks,
    // sehingga tanda "+" pada +62 tidak hilang.
    sheet.appendRow([new Date(), nama, kehadiran, "'" + telepon]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Untuk mengetes cepat lewat browser: buka URL /exec, harus tampil "OK".
function doGet() {
  return ContentService.createTextOutput("OK");
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
