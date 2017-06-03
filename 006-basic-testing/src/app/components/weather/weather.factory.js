(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('WeatherFactory', WeatherFactory);

  /** @ngInject */
  function WeatherFactory ($resource, $filter, $rootScope, WEATHER_API) {

   return {
    	getWeather: getWeather,
      getUV: getUV
    };

    function getWeather(lat, lon) {
      return $resource('http://api.openweathermap.org/data/2.5/weather?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon, {}, {
        'query': {
          method: 'GET'
        }
      });
    }

    function getUV() {
      return $resource('http://api.openweathermap.org/v3/uvi/:latlng/current.json?appid='+WEATHER_API, {}, {
        'query': {
          method: 'GET'
        }
      });
    }

  }

})();
