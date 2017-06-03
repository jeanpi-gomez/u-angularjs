(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.dashboard.main', {
      url: '/main',
      component: 'main'
    });
  }
})();
