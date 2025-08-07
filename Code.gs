/**
 * @fileoverview App Script to create a custom menu with multiple functions.
 */

/**
 * A special function that runs when the spreadsheet is opened.
 * It creates a custom menu to open a new tab.
 */
function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Utilities')
      .addItem('PhoneCall', 'showSidebar')
      .addToUi();
}

/**
 * Opens a sidebar with a button to launch a new tab.
 */
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Phonecall');
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * A server-side function to get the value of the active cell and prepend a base URL.
 * @return {object} An object with the original cell value and the concatenated URL.
 */
function getConcatenatedUrl() {
  const activeCell = SpreadsheetApp.getActive().getActiveCell();
  const cellValue = activeCell.getValue();
  const baseUrl = 'tel:';
  
  return {
    originalValue: cellValue,
    concatenatedUrl: baseUrl + cellValue
  };
}
