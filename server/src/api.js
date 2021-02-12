function onOpen() {
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

function addSIO() {
  var currentPage = SlidesApp.getActivePresentation().getSelection().getCurrentPage()
  var pageId = Utilities.getUuid();
  var currentPage = SlidesApp.getActivePresentation().getSelection().getCurrentPage()
  var slides = SlidesApp.getActivePresentation().getSlides()
  var selectionId = currentPage.asSlide().getObjectId()
  
  var currentSlideIndex = 0
  for (let i = 0; i<slides.length; i++) {
    if (slides[i].getObjectId()===selectionId) {
      currentSlideIndex = i
    }
  }
  var slide = SlidesApp.getActivePresentation().insertSlide(currentSlideIndex)
  //var slide = SlidesApp.getActivePresentation().getSlideById('SLIDES_API689459190_0')
  // Get the Drive image file with the given ID.
  var fileId = "https://static.classlab.com/activities/shout-it-out/wizard/intro.gif";
  var size = {width: 500, height: 200};
  var image = slide.insertImage(fileId, 0, 0, size.width, size.height);
  var textbox = slide.insertTextBox("This is a Shout it Out activity. Do not modify this page.");

  image.alignOnPage(SlidesApp.AlignmentPosition.CENTER)  
 
  textbox.setWidth(500) 
  var paragraphStyle =  textbox.getText().getParagraphs()[0].getRange().getParagraphStyle();
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  textbox.alignOnPage(SlidesApp.AlignmentPosition.CENTER) 
  textbox.setTop(300);
  slide.getNotesPage().getSpeakerNotesShape().getText().appendText('insert_instant_SIO')
}