(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(SITE_NAME) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $state.go('signin');
    }

  }
})();
