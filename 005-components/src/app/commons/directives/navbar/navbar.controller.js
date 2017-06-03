(function () {
  'use strict';
  
  angular
    .module('angularApp')
    .controller('NavbarHeaderController', NavbarHeaderController);
  
  /** @ngInject */
  function NavbarHeaderController(AuthFactory, $state) {
    var vm = this;
    vm.currentUser = AuthFactory.currentUser();
    vm.logout = logout;
    
    function logout () {
      AuthFactory.logout();
      $state.go('auth.login');
    }
  }
})();
