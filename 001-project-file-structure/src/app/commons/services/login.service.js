(function () {
  'use strict';

  angular
    .module('angularEx1')
    .service('LoginService', LoginService);

  function LoginService ($q, $localStorage) {
    var defaultUser = {
      email: 'admin@talosdigital.com',
      password: 'admin123'
    };

    return {
      login: login,
      logout: logout
    };

    function login (credentials) {
      if (!credentials || !credentials.email || !credentials.password) {
        return $q.reject('Invalid arguments');
      }

      if (credentials.email === defaultUser.email && credentials.password === defaultUser.password) {
        $localStorage.username = credentials.email;
        return $q.resolve('Welcome ' + credentials.email);
      }

      return $q.reject('Invalid credentials');
    }

    function logout () {
      delete $localStorage.username;
      return $q.resolve();
    }
  }
})();