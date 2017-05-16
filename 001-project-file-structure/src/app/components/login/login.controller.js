(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(LoginService, $log, $state) {
    var vm = this;
    vm.form = {};

    vm.login = function (credentials) {
      LoginService.login(credentials).then(function (response) {
        $log.info(response);
        $state.go('app.dashboard');
      }, function (error) {
        $log.error(error);
      });
    };
  }
})();
