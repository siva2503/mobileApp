var assert = require('assert');

describe('Verify Page title', function() {
  it('should have the right title', function () {
    browser.url('http://localhost:8080/');
    var title = browser.getTitle();
    assert.equal(title, 'React Native Web');
  });
});

describe('Text Input Verification', function() {
  it('should get all the text inputs', function () {
    browser.setValue('.//*[@data-testid="firstname"]', 'Matthew')
    browser.setValue('.//*[@data-testid="lastname"]', 'Hayden')
    browser.setValue('.//*[@data-testid="username"]', 'matt2502')
    browser.setValue('.//*[@data-testid="password"]', 'Siva2503')
    browser.setValue('.//*[@data-testid="emailid"]', 'siva2503@gmail.com')
    browser.click('.//*[@data-testid="register"]');
    assert(browser.isExisting('.//*[@data-testid="reregister"]'), 'Registration failed');
    assert(browser.isExisting('.//*[@data-testid="registeredData"]'), 'Re-registeration button is displayed');
    
  });
});

describe('Verify Re-registration', function() {
  it('Values are cleared after re-registration', function () {
    browser.click('.//*[@data-testid="reregister"]');
    assert.equal(browser.isExisting('.//*[@data-testid="registeredData"]'), false);
  });
});
