(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('userCard', {
      templateUrl: 'app/components/dashboard/user-list/user-card/user-card.html',
      bindings: {
        user: '<',
        onUserSelected: '&',
        onUserLeft: '&'
      }
    });
})();
