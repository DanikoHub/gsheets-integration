function doGet(e) {
  var ss = SpreadsheetApp.getActive().getSheetByName('Лист1')
  var limit = ss.getLastRow()
  var info = {"last_row" : limit}
  Logger.log(info)
  return ContentService.createTextOutput(JSON.stringify(info)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var ss = SpreadsheetApp.getActive().getSheetByName('Лист1')

  var data = JSON.parse(e.postData.contents)
  var issue_number = ss.getRange(data["row"], 1);
  var jira_number = ss.getRange(data["row"], 2);
  var issue_desc = ss.getRange(data["row"], 3);
  var team_name = ss.getRange(data["row"], 4);

  var richValue = SpreadsheetApp.newRichTextValue()
   .setText(data["issue_number"])
   .setLinkUrl("https://google.com")
   .build();
  issue_number.setRichTextValue(richValue);

  jira_number.setValue(data["jira_number"]);
  issue_desc.setValue(data["issue_desc"]);
  team_name.setValue(data["team_name"]);

  return "ok";
}
