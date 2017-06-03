(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.dashboard', {
      url: 'dashboard',
      abstract: true,
      component: 'dashboard',
      resolve: {
        security: function($q, $state, AuthFactory) {
          if (!AuthFactory.currentUser()) {
            $state.go('auth.login');
            return $q.reject('Not authorized');
          }
        }
      }
    });
  }
})();
