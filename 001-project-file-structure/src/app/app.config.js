(function() {
  'use strict';

  angular
    .module('angularEx1')
    .config(config);

  /** @ngInject */
  function config($logProvider, $localStorageProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $localStorageProvider.setKeyPrefix('talosUniversity');
  }	

})();
