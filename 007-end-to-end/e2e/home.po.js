'use strict';

var HomePage = function () {

  this.icon = element(by.xpath('//*[@id="site"]/section/main/section/div/form/md-content/div[1]/div/button[1]'));
  this.title = element(by.model('homeCtrl.card.title'));
  this.background = element(by.model('homeCtrl.card.background'));
  this.textColor = element(by.model('homeCtrl.card.textColor'));
  this.description = element(by.model('homeCtrl.card.description'));
  this.directiveTitle = element(by.css('#cardTitle'));
  this.directiveDescription = element(by.css('#cardDescription'));
  this.directiveIcon = element(by.css('.icon'));
  this.directiveCard = element(by.css('#card'));
  this.directiveFavourite = element(by.css('#favoriteBtn'));
  this.listFavourites = element.all(by.repeater('favorite in homeCtrl.favoriteList'));

  this.addFavourite = addFavourite;
  this.selectIcon = selectICon;
  this.setBackground = setBackground;
  this.setTextColor = setTextColor;
  this.setTitle = setTitle;
  this.setDescription = setDescription;

  function addFavourite() {
    browser.driver.actions().mouseDown(this.directiveFavourite).click().perform();
  }

  function selectICon() {
    browser.driver.actions().mouseDown(this.icon).click().perform();
  }

  function setBackground(color) {
    browser.driver.actions().mouseDown(this.background).click().sendKeys(color).perform();
  }

  function setTextColor(color) {
    browser.driver.actions().mouseDown(this.textColor).click().sendKeys(color).perform();
  }

  function setTitle(title) {
    this.title.sendKeys(title);
  }

  function setDescription(description) {
    this.description.sendKeys(description);
  }
};

module.exports = new HomePage();
