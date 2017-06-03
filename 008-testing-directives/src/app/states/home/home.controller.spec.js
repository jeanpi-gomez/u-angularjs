(function() {
  'use strict';

  describe('HomeController', function() {
    var homeCtrl, RESERVED_BY, $controller;

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      $controller = $injector.get('$controller');
      RESERVED_BY = $injector.get('RESERVED_BY');
    }));

    beforeEach(function () {
      homeCtrl = $controller('HomeController', {
        RESERVED_BY: RESERVED_BY
      });
    });

    it('should be registered', function() {
      expect(homeCtrl).not.toEqual(undefined);
    });

    describe('set favorite', function () {
      it('should set item as favorite', function () {
        spyOn(homeCtrl.card, 'setFavorite').and.callThrough();

        expect(homeCtrl.favoriteList.length).toEqual(0);

        homeCtrl.card.setFavorite('Test');

        expect(homeCtrl.card.setFavorite).toHaveBeenCalledWith('Test');
        expect(homeCtrl.favoriteList.length).toEqual(1);
      });
    });

    describe('set icon', function () {
      it('should set given icon', function () {
        spyOn(homeCtrl, 'setIcon').and.callThrough();

        expect(homeCtrl.card.icon).toEqual(undefined);

        homeCtrl.setIcon('home');

        expect(homeCtrl.setIcon).toHaveBeenCalledWith('home');
        expect(homeCtrl.card.icon).toEqual('home');
      });
    });

  });
})();