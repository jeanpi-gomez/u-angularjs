(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('dashboard', {
      template: '<section class="dashboard" ui-view></section>'
    });
})();
