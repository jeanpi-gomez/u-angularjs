(function() {
  'use strict';

  angular
    .module('angularEx1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {
    $rootScope.$state = $state;
    $log.debug('runBlock AppRunning');
  }

})();
