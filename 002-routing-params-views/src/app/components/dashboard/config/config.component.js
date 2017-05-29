(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('configDashboard', {
      templateUrl: 'app/components/dashboard/config/config.html',
      controller: 'ConfigController',
      controllerAs: 'configCtrl',
      bindings: {
        configuration: '<'
      }
    });
})();
