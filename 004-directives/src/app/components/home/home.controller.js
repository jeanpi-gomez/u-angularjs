(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.card = {};
    vm.favourites = [];
    vm.saveFavourite = saveFavourite;
    vm.setIcon = setIcon;

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function saveFavourite(title) {
      vm.favourites.push(title);
    }
  }

})();
