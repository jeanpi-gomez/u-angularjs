(function () {
  'use strict';

  angular
    .module('angularApp')
    .service('WeatherService', WeatherService);

  function WeatherService($http, $q, WEATHER_API) {

    var apiKey = WEATHER_API;

    return {
      getWeather: getWeather,
      getUV: getUV
    };

    function getWeather(lat, lng) {
      if (!lat || !lng) {
        $q.reject('Invalid arguments');
      }
      return $http.get(
        'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=' + apiKey).then(function (response) {
          return response.data;
        }, function (error) {
          return error;
        });
    }

    function getUV(lat, lng) {
      if (!lat || !lng) {
        $q.reject('Invalid arguments');
      }
      var latLng = [Math.round(lat), Math.round(lng)];
      return $http.get(
        'http://api.openweathermap.org/v3/uvi/' + latLng + '/current.json?appid=' + apiKey).then(function (response) {
          return response.data;
        }, function (error) {
          return error;
        });
    }

  }
})();
