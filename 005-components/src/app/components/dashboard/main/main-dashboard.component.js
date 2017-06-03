(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('main', {
      templateUrl: 'app/components/dashboard/main/main-dashboard.html',
      controller: 'MainDashboardController',
      controllerAs: 'mainDashboardCtrl'
    });
})();
