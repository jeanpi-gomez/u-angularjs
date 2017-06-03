(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');

      $stateProvider
        .state('app', {
          url: '/',
          abstract: true,
          component: 'app'
        });
      $urlRouterProvider.otherwise('/dashboard/main');
    }

})();
