(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('app', {
      templateUrl: 'app/components/layout/app.html',
      controller: 'AppController',
      controllerAs: 'appCtrl'
    });
})();
