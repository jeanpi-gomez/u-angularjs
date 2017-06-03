(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('auth.signUp', {
      url: '/sign-up',
      component: 'signUp',
      data: {
        viewClass: 'sign-up'
      }
    });
  }
})();
