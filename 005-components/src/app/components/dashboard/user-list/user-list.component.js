(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('userList', {
      controller: 'UserListController',
      templateUrl: 'app/components/dashboard/user-list/user-list.html',
      controllerAs: 'userListCtrl',
      bindings: {
        users: '<'
      }
    })
})();
