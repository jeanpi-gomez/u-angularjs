(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('auth', {
      template: '<section class="general-section" ui-view></section>'
    });
})();
