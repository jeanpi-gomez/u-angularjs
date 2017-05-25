(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('weather', {
        url: '/',
        templateUrl: 'app/components/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'weatherCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
