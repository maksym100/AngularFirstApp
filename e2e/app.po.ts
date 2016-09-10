export class FirstAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('first-app h1')).getText();
  }
}
