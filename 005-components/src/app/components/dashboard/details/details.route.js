(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.dashboard.details', {
      url: '/details',
      component: 'detailsDashboard'
    });
  }
})();
