import { ContactDemoPage } from './app.po';

describe('contact-demo App', () => {
  let page: ContactDemoPage;

  beforeEach(() => {
    page = new ContactDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
