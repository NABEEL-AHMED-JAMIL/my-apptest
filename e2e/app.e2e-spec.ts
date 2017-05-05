import { MyApptestPage } from './app.po';

describe('my-apptest App', () => {
  let page: MyApptestPage;

  beforeEach(() => {
    page = new MyApptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
