(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(LoginService, $log, $state) {
    var vm = this;
    vm.form = {};

    vm.login = login;

    function login (credentials) {
      LoginService.login(credentials).then(function (response) {
        $log.info(response);
        $state.go('app.dashboard');
      }, function (error) {
        $log.error(error);
      });
    }
  }
})();
