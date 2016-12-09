describe('Сценарий авторизации', function() {

  it('Авторизация в litecart', function() {
      browser.ignoreSynchronization = true; //If you need to navigate to a page which does not use Angular
      browser.get('http://localhost/litecart/public_html/en/');
      element(by.name('email')).sendKeys('admin');
      element(by.name('password')).sendKeys('admin');
      element(by.name('login')).click();
  });

  //в Protractor вроде как принудительное закрытие браузера не требуется, закрывает сам
    afterAll( function () {
        browser.sleep('5000');
        browser.quit();
    })
});
