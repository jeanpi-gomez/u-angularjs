(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('login', {
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
})();
