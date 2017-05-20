(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('app', {
      templateUrl: 'app/components/layout/app.html',
      controller: 'AppController',
      controllerAs: 'appCtrl'
    });
})();
