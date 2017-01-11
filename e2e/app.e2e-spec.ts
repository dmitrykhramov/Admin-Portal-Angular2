import { AdminPortalPage } from './app.po';

describe('admin-portal App', function() {
  let page: AdminPortalPage;

  beforeEach(() => {
    page = new AdminPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
