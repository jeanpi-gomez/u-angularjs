(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('UserListController', UserListController);

  /** @ngInject */
  function UserListController ($timeout) {
    var vm = this;

    vm.selectedUser = function (user) {
      vm.user = user;
    };

    vm.blurUser = function (user) {
      $timeout(function () {
        if (vm.user === user) {
          delete vm.user;
        }
      }, 100);
    }

  }
})();
