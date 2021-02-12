function doGet() {
  onOpen()
}

function onOpen() {
  console.log("Hello world!")
  //SlidesApp.getUi().prompt('Getting to know you', 'May I know your name?', SlidesApp.getUi().ButtonSet.YES_NO)
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('SLSO')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('index')
      .setTitle('SLSO');
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}
