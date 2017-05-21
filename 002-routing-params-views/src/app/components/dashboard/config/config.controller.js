(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ConfigController', ConfigController);

  /** @ngInject */
  function ConfigController ($state) {
    var vm = this;
    vm.goToDetails = goToDetails;
    vm.goToMain = goToMain;

    function goToDetails () {
      $state.go('app.dashboard.details');
    }

    function goToMain () {
      $state.go('app.dashboard.main');
    }
  }
})();
