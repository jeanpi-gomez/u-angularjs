(function () {
  'use strict';

  describe('Weather controller', function () {
    var $q, $controller, $rootScope, $mdDialog, $log, weatherFactoryMock, weatherController, queryDeferred;

    beforeEach(module('angularApp'));
    beforeEach(inject(function ($injector) {
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
      $q = $injector.get('$q');
      $mdDialog = $injector.get('$mdDialog');
      $log = $injector.get('$log');

      weatherFactoryMock = {
        getUV: function () {
          return {
            query: function () {
              queryDeferred = $q.defer();
              return {
                $promise: $q.resolve({
                  data: 3.1
                })
              };
            }
          }
        },
        getWeather: function () {
          return {
            query: function () {
              queryDeferred = $q.defer();
              return {
                $promise: $q.resolve({
                  name: 'Test',
                  weather: [
                    {
                      description: 'Rainy'
                    }
                  ],
                  main: {
                    temp: 353
                  }
                })
              };
            }
          }
        }
      };

      weatherController = $controller('WeatherController', {
        $scope: $rootScope,
        $mdDialog: $mdDialog,
        WeatherFactory: weatherFactoryMock,
        $log: $log
      });

    }));

    describe('triggerClick on leaflet', function () {

      describe('getWeather', function () {

        it('kind = 0, getWeather should be called and open dialog', function () {
          spyOn(weatherController, 'triggerClick').and.callThrough();
          spyOn(weatherFactoryMock, 'getWeather').and.callThrough();
          spyOn(weatherController, 'openModal').and.callThrough();

          var args = {
            leafletEvent: {
              latlng: {
                lat: '34.4',
                lon: '62.8'
              }
            }
          };
          weatherController.triggerClick(null, args);
          $rootScope.$digest();
          expect(weatherController.triggerClick).toHaveBeenCalled();
          expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
          expect(weatherController.openModal).toHaveBeenCalled();
          expect(weatherController.response.success).toEqual(true);
          expect(weatherController.response.weather).toEqual('Rainy');
        });

        it('kind = 0, getWeather should be called but not response retrieve', function () {
          spyOn(weatherController, 'triggerClick').and.callThrough();
          spyOn(weatherController, 'openModal').and.callThrough();
          spyOn(weatherFactoryMock, 'getWeather').and.returnValue({
            query: function () {
              return {$promise: $q.resolve({name: 'Test', weather: []})};
            }
          });

          var args = {
            leafletEvent: {
              latlng: {
                lat: '34.4',
                lon: '62.8'
              }
            }
          };
          weatherController.triggerClick(null, args);
          $rootScope.$digest();
          expect(weatherController.triggerClick).toHaveBeenCalled();
          expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
          expect(weatherController.openModal).toHaveBeenCalled();
          expect(weatherController.response.success).toEqual(false);
        });

        it('kind = 0, getWeather should be called but it will fail', function () {
          spyOn(weatherController, 'triggerClick').and.callThrough();
          spyOn(weatherController, 'openModal').and.callThrough();
          spyOn(weatherFactoryMock, 'getWeather').and.returnValue({
            query: function () {
              return {$promise: $q.reject('error')};
            }
          });

          var args = {
            leafletEvent: {
              latlng: {
                lat: '34.4',
                lon: '62.8'
              }
            }
          };
          weatherController.triggerClick(null, args);
          $rootScope.$digest();
          expect(weatherController.triggerClick).toHaveBeenCalled();
          expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
          expect(weatherController.openModal).not.toHaveBeenCalled();
        });

      });

      describe('getUV', function () {

        it('kind = 1, getUV should be called and open dialog', function () {
          weatherController.kind = '1';
          spyOn(weatherController, 'triggerClick').and.callThrough();
          spyOn(weatherFactoryMock, 'getUV').and.callThrough();
          spyOn(weatherController, 'openModal').and.callThrough();

          var args = {
            leafletEvent: {
              latlng: {
                lat: '34.4',
                lon: '62.8'
              }
            }
          };
          weatherController.triggerClick(null, args);
          $rootScope.$digest();
          expect(weatherController.triggerClick).toHaveBeenCalled();
          expect(weatherFactoryMock.getUV).toHaveBeenCalled();
          expect(weatherController.openModal).toHaveBeenCalled();
          expect(weatherController.response.success).toEqual(true);
          expect(weatherController.response.uv).toEqual(3.1);
        });
      });

      it('kind = 1, getUV should be called but not response retrieve', function () {
        weatherController.kind = '1';
        spyOn(weatherController, 'triggerClick').and.callThrough();
        spyOn(weatherController, 'openModal').and.callThrough();
        spyOn(weatherFactoryMock, 'getUV').and.returnValue({
          query: function () {
            return {$promise: $q.resolve()};
          }
        });
        var args = {
          leafletEvent: {
            latlng: {
              lat: '34.4',
              lon: '62.8'
            }
          }
        };
        weatherController.triggerClick(null, args);
        $rootScope.$digest();
        expect(weatherController.triggerClick).toHaveBeenCalled();
        expect(weatherFactoryMock.getUV).toHaveBeenCalled();
        expect(weatherController.openModal).toHaveBeenCalled();
        expect(weatherController.response.success).toEqual(false);
      });

      it('kind = 1, getWeather should be called but it will fail', function () {
        weatherController.kind = '1';
        spyOn(weatherController, 'triggerClick').and.callThrough();
        spyOn(weatherController, 'openModal').and.callThrough();
        spyOn(weatherFactoryMock, 'getUV').and.returnValue({
          query: function () {
            return {$promise: $q.reject('error')};
          }
        });

        var args = {
          leafletEvent: {
            latlng: {
              lat: '34.4',
              lon: '62.8'
            }
          }
        };
        weatherController.triggerClick(null, args);
        $rootScope.$digest();
        expect(weatherController.triggerClick).toHaveBeenCalled();
        expect(weatherFactoryMock.getUV).toHaveBeenCalled();
        expect(weatherController.openModal).not.toHaveBeenCalled();
      });

    });

  });

})();
