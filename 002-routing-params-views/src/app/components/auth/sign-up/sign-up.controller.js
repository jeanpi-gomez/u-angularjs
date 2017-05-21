(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('SignUpController', SignUpController);

  /** @ngInject */
  function SignUpController ($timeout, $state, Auth) {
    var vm = this;
    vm.newUser = {};
    vm.form = {};

    vm.signUp = signUp;

    function signUp () {
      if (Auth.registerUser(vm.newUser)) {
        vm.alert = 'Successfully Registered, redirecting...';
      } else {
        vm.alert = 'Email already been used, redirecting...';
      }
      redirect();
    }

    function redirect () {
      $timeout(function () {
        $state.go('auth.login', {currentUser: vm.newUser});
      }, 2000);
    }
  }
})();
