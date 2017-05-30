(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
