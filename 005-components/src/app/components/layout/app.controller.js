(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController ($state) {
    var vm = this;
    vm.$state = $state;
  }
})();
