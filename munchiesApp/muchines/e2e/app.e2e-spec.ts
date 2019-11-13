import { MuchinesPage } from './app.po';

describe('muchines App', function() {
  let page: MuchinesPage;

  beforeEach(() => {
    page = new MuchinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
