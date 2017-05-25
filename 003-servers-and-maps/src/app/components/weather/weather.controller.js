(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController(WeatherService, $mdDialog, $scope) {
    var vm = this;
    vm.showDialog = showDialog;

    vm.kind = '0';

    vm.map = {
      center: {
        lat: 38.8225909761771,
        lng: -96.5478515625,
        zoom: 4
      },
      defaults: {
        scrollWheelZoom: false
      },
      events: {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      }
    };

    $scope.$on('leafletDirectiveMap.map.click', onMapClick);

    function onMapClick(event, args) {
      var lat = args.leafletEvent.latlng.lat;
      var lng = args.leafletEvent.latlng.lng;
      if (vm.kind === '0') {
        WeatherService.getWeather(lat, lng).then(function (response) {
          if (response && response.weather && response.weather[0]) {
            vm.data = {
              success: true,
              weather: {
                main: response.weather[0].main || 'No available data',
                description: response.weather[0].description || 'No available data',
                temp: Math.round(response.main.temp - 273) || 'No available data'
              }
            };
          }
          vm.showDialog();
        }, function (error) {
          $log.error(error);
        });
      } else if (vm.kind === '1') {
        WeatherService.getUV(lat, lng).then(function (response) {
          if (response && response.data) {
            vm.data = {
              success: true,
              uv: {
                uvIndex: response.data || 'No available data'
              }
            };
          }
          vm.showDialog();
        }, function (error) {
          $log.error(error);
        });
      }
    }

    function showDialog() {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        clickOutsideToClose: true,
        templateUrl: 'app/components/weather/dialog/dialog.html',
        locals: {
          data: vm.data
        },
        controller: 'DialogController',
        controllerAs: 'dialogCtrl'
      });
    }

  }

})();
