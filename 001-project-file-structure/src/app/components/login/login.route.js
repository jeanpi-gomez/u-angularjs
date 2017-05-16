(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      component: 'login',
      data: {
        viewClass: 'login'
      },
      resolve: {
        security: function($q, $state, $localStorage) {
          if ($localStorage.username) {
            $state.go('app.dashboard');
            return $q.reject('User already logged');
          }
        }
      }
    });
  }
})();
