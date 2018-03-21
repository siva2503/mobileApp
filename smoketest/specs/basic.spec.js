var assert = require('assert');

describe('Verify Page title', function() {
  it('should have the right title', function () {
    browser.url('http://localhost:8010/');
    var title = browser.getTitle();
    assert.equal(title, 'React Native Web');
  });
});

describe('Verify whether the elements are present', function() {
  it('should get all the text inputs', function () {
    assert(browser.isExisting('.//*[@data-testid="firstname"]'), 'Firsname field not present');
    assert(browser.isExisting('.//*[@data-testid="lastname"]'), 'lastname field not present');
    assert(browser.isExisting('.//*[@data-testid="username"]'), 'username field not present');
    assert(browser.isExisting('.//*[@data-testid="password"]'), 'password field not present');
    assert(browser.isExisting('.//*[@data-testid="emailid"]'), 'emailid field not present');
    assert(browser.isExisting('.//*[@data-testid="register"]'), 'Register button is present');
  });
});

describe('Verify whether the text labels are present', function() {
  it('should get all the text inputs', function () {
    assert(browser.isExisting('.//*[@data-testid="firstname"]'), 'Firsname field not present');
    assert(browser.isExisting('.//*[@data-testid="lastname"]'), 'lastname field not present');
    assert(browser.isExisting('.//*[@data-testid="username"]'), 'username field not present');
    assert(browser.isExisting('.//*[@data-testid="password"]'), 'password field not present');
    assert(browser.isExisting('.//*[@data-testid="emailid"]'), 'emailid field not present');
    assert(browser.isExisting('.//*[@data-testid="register"]'), 'Register button is present');
  });
});
