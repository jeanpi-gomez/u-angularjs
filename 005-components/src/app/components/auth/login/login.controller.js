(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController ($log, $stateParams, $state, AuthFactory) {
    var vm = this;
    vm.error = false;
    vm.currentUser = $stateParams.currentUser;
    vm.form = {};

    vm.login = login;

    function login () {
      if (AuthFactory.login(vm.currentUser)) {
        $log.info('Great logged', AuthFactory.currentUser());
        $state.go('app.dashboard.main');
      } else {
        vm.error = true;
      }
    }
  }
})();
