(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('signUp', {
      templateUrl: 'app/components/auth/sign-up/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'
    });
})();
