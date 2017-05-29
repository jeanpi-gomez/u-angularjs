(function () {
  'use strict';
  
  angular
    .module('angularApp')
    .controller('NavbarHeaderController', NavbarHeaderController);
  
  /** @ngInject */
  function NavbarHeaderController(Auth, $state) {
    var vm = this;
    vm.currentUser = Auth.currentUser();
    vm.logout = logout;
    
    function logout () {
      Auth.logout();
      $state.go('auth.login');
    }
  }
})();
