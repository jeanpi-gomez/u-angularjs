(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('navbarHeader', navbarHeader);

  /** @ngInject */
  function navbarHeader () {
    return {
      restrict: 'E',
      controller: 'NavbarHeaderController',
      controllerAs: 'navbarHeaderCtrl',
      templateUrl: 'app/commons/directives/navbar/navbar.html'
    };
  }
})();
