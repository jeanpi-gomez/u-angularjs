(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('detailsDashboard', {
      templateUrl: 'app/components/dashboard/details/details.html',
      controller: 'DetailsController',
      controllerAs: 'detailsCtrl'
    });
})();
