(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('login', {
      templateUrl: 'app/components/auth/login/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
})();
