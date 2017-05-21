(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainDashboardController', MainDashboardController);

  /** @ngInject */
  function MainDashboardController (SITE_NAME, $state) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.goToDetails = goToDetails;
    vm.goToConfig = goToConfig;

    function goToDetails () {
      $state.go('app.dashboard.details');
    }

    function goToConfig () {
      $state.go('app.dashboard.config');
    }
  }
})();
