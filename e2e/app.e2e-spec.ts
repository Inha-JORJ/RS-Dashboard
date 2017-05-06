import { RSDashboardPage } from './app.po';

describe('rs-dashboard App', () => {
  let page: RSDashboardPage;

  beforeEach(() => {
    page = new RSDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
