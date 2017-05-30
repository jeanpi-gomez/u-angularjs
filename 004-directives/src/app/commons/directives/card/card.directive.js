(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      restrict: 'E',
      scope: {
        card: '=',
        reservedBy: '=',
        saveFavourite: '&'
      },
      link: function (scope, element, attrs) {
      },
      bindToController: true,
      controller: 'CardController',
      controllerAs: 'cardCtrl',
      templateUrl: 'app/commons/directives/card/card.html'
    };
  }

})();
