(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        component: 'auth',
        resolve: {
          security: function($q, $state, AuthFactory) {
            if (AuthFactory.currentUser()) {
              $state.go('app.dashboard.main');
              return $q.reject('User already logged');
            }
          }
        }
      });
  }
})();
