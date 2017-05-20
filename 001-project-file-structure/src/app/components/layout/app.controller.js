(function () {
  'use strict';

  angular
    .module('angularEx1')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController ($state) {
    var vm = this;
    vm.$state = $state;
  }
})();
