(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('DialogController', DialogController);

  /** @ngInject */
  function DialogController(data, $mdDialog) {
    var vm = this;
    vm.data = data;
    vm.closeDialog = function () {
      $mdDialog.hide();
    };
  }
})();
