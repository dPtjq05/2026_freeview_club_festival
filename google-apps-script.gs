const SHEET_NAME = '교류팅 신청자';

function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['신청 시각', '이름', '전화번호', '소속', '참여 프로그램', '전달 사항', '신청 ID']);
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const required = ['id', 'name', 'phone', 'affiliation', 'program'];
    if (required.some(key => !String(data[key] || '').trim())) {
      throw new Error('필수 신청 정보가 없습니다.');
    }

    setupSheet();
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const id = String(data.id).trim();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const ids = sheet.getLastRow() >= 2
        ? sheet.getRange(2, 7, sheet.getLastRow() - 1, 1).getValues().flat().map(String)
        : [];
      if (ids.includes(id)) {
        return ContentService
          .createTextOutput(JSON.stringify({ ok: true, duplicate: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    sheet.appendRow([
      new Date(Number(data.t) || Date.now()),
      String(data.name).trim(),
      String(data.phone).trim(),
      String(data.affiliation).trim(),
      String(data.programName || data.program).trim(),
      String(data.note || '').trim(),
      id
    ]);
    } finally {
      lock.releaseLock();
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
