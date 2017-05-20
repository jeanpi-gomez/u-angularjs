(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      component: 'login',
      params: {
        currentUser: {}
      },
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
