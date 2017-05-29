(function() {
  'use strict';

  angular
    .module('angularApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {
    $rootScope.$state = $state;
    $log.debug('runBlock AppRunning');
  }

})();
