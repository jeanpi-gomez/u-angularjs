(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.dashboard.config', {
      url: '/config',
      component: 'configDashboard',
      resolve: {
        configuration: function ($http) {
          return $http.get('/assets/data/configuration.json').then(function (config) {
            return config.data;
          });
        }
      }
    });
  }
})();
