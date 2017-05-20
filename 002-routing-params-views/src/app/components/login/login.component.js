(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('login', {
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
})();
