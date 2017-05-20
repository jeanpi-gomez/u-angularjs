(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.dashboard', {
      url: '',
      component: 'dashboard',
      data: {
        viewClass: 'dashboard'
      },
      resolve: {
        security: function($q, $state, $localStorage) {
          if (!$localStorage.username) {
            $state.go('login');
            return $q.reject('Not authorized');
          }
        }
      }
    });
  }
})();
