(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('auth.login', {
      url: '/login',
      component: 'login',
      params: {
        currentUser: {}
      },
      data: {
        viewClass: 'login'
      }
    });
  }
})();
