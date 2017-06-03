(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routerDashboard);

  /** @ngInject */
  function routerDashboard ($stateProvider) {
    $stateProvider
      .state('app.dashboard.userList', {
        url: '/user-list',
        component: 'userList',
        resolve: {
          users: function () {
            return [
              {
                id: 1,
                firstName: 'Andres',
                lastName: 'Lopez',
                age: 22,
                phone: 321123456
              },
              {
                id: 2,
                firstName: 'Jhon',
                lastName: 'Doe',
                age: 33,
                phone: 425108324
              },
              {
                id: 3,
                firstName: 'Jane',
                lastName: 'Roe',
                age: 28,
                phone: 42515712
              }
            ];
          }
        }
      });
  }
})();
