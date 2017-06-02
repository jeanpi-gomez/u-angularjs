'use strict';

describe('Home View', function () {
  var page;

  function fillForm() {
    page.selectIcon();
    page.setBackground('#bababa');
    page.setTextColor('#aa3355');
    page.setTitle('Jean Pierre');
    page.setDescription('This is a generated business card');
  }

  function convertHex(color) {
    color = color.replace('rgba(', '').replace(')', '').split(',');
    var r = parseInt(color[0]);
    var g = parseInt(color[1]);
    var b = parseInt(color[2]);
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
  }

  beforeEach(function () {
    browser.get('/');
    page = require('./home.po');
  });

  it('should be right data into directive', function () {
    fillForm();
    expect(page.directiveIcon.evaluate('icon')).toBe('account_circle');
    expect(page.directiveTitle.evaluate('title')).toBe('Jean Pierre');
    expect(page.directiveDescription.evaluate('description')).toBe('This is a generated business card');
    page.directiveCard.getCssValue('background-color').then(function (color) {
      expect(convertHex(color)).toBe('#bababa');
    });
    page.directiveIcon.getCssValue('color').then(function (color) {
      expect(convertHex(color)).toBe('#aa3355');
    });
  });

  it('should favorite list major than 1', function () {
    expect(page.listFavourites.count()).toBe(0);
    fillForm();
    page.addFavourite();
    expect(page.listFavourites.count()).toBe(1);
    page.addFavourite();
    expect(page.listFavourites.count()).toBe(2);
  });

});
