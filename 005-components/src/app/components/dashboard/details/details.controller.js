(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController ($state, $stateParams) {
    var vm = this;
    vm.goToConfig = goToConfig;
    vm.goToMain = goToMain;
    vm.userId = $stateParams.id || 1;

    vm.users = [
      {
        id: "1",
        name: "Juan"
      },
      {
        id: "2",
        name: "Roberto"
      },
      {
        id: "3",
        name: "Camilo"
      },
      {
        id: "4",
        name: "Ricardo"
      },
      {
        id: "5",
        name: "Mateo"
      }
    ];

    function goToConfig () {
      $state.go('app.dashboard.config');
    }

    function goToMain () {
      $state.go('app.dashboard.main');
    }
  }
})();
