function onEdit(e) {
    var sheet = e.source.getSheetByName('Log'); // Specify the sheet name
    var range = e.range;
    var row = range.getRow();
    var column = range.getColumn();
    
    // Check if the edited cell is in columns C, D, or E (feeding start, wet diaper, or bowel movement)
    if (sheet.getName() === 'Log' && row >= 499 && (column === 3 || column === 4 || column === 5) && e.value === "TRUE") {
      // Get current date and time in Pacific Time Zone (San Francisco)
      var timeZone = "America/Los_Angeles"; // Pacific Time Zone
      var now = Utilities.formatDate(new Date(), timeZone, "MM/dd/yyyy HH:mm");
      var dateTime = now.split(' ');
  
      // Update columns A (Date) and B (Hour and Minute)
      sheet.getRange(row, 1).setValue(dateTime[0]); // Date
      sheet.getRange(row, 2).setValue(dateTime[1]); // Hour and Minute
    }
  }
  