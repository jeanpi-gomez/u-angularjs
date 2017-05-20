(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('dashboard', {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboardCtrl'
    });
})();
