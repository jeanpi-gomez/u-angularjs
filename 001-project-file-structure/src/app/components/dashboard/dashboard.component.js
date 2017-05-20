(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('dashboard', {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboardCtrl'
    });
})();
