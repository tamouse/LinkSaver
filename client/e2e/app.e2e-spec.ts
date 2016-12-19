import { LinkSaverPage } from './app.po';

describe('link-saver App', function() {
  let page: LinkSaverPage;

  beforeEach(() => {
    page = new LinkSaverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
