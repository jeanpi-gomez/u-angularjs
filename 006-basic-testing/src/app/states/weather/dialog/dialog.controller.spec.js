(function () {
  'use strict';

  describe('Dialog controller', function () {
    var $controller, $rootScope, data, dialogCtrl;

    beforeEach(module('angularApp'));
    beforeEach(inject(function ($injector) {
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
    }));

    describe('data.success', function () {
      it('should enter in conditional', function () {
        data = {
          success: true
        };

        dialogCtrl = $controller('DialogController', {
          data: data
        });

        expect(dialogCtrl.success).toEqual(true);
      });

      it('if data.weather should go and save weather', function () {
        data = {
          success: true,
          weather: 'Rainy',
          place: 'Tokyo',
          temp: 320
        };

        dialogCtrl = $controller('DialogController', {
          data: data
        });

        expect(dialogCtrl.weather).toEqual('Rainy');
      });

      it('if data.uv should go and save uv', function () {
        data = {
          success: true,
          uv: '2.0'
        };

        dialogCtrl = $controller('DialogController', {
          data: data
        });

        expect(dialogCtrl.uv).toEqual('2.0');
      });

      it('data.success = false it should not do anything', function () {
        data = {
          success: false
        };

        dialogCtrl = $controller('DialogController', {
          data: data
        });

        expect(dialogCtrl.success).toEqual(false);
      });
    });

  });

})();
