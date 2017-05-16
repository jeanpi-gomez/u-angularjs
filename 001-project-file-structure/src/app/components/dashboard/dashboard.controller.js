(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log, SITE_NAME) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $log.debug('signUpToday clicked!');
    }

  }
})();
