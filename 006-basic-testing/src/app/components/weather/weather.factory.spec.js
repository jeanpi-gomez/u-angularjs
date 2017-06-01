(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory, httpBackend, WEATHER_API;
    var baseUrl = 'http://api.openweathermap.org';

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      httpBackend = $injector.get('$httpBackend');
      WEATHER_API = $injector.get('WEATHER_API');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });
    });

    describe('getWeather', function() {
      it('should return resource after call the function', function() {
        var lat = 23.43;
        var lng = 42.54;
        httpBackend.expect('GET', baseUrl + '/data/2.5/weather?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lng)
          .respond(200, {data: {main: 'Cloudy'}});
        weatherFactory.getWeather(lat, lng).query().$promise.then(function (response) {
          expect(response.data).toEqual({main: 'Cloudy'});
        });
        httpBackend.flush();
      });
    });

    describe('getUV', function() {
      it('should return resource after call the function', function() {
        var lat = 23.43;
        var lng = 42.54;
        var latlng = [Math.round(lat), Math.round(lng)];
        httpBackend.expect('GET', baseUrl + '/v3/uvi/'+latlng+'/current.json?appid='+WEATHER_API)
          .respond(200, {data: {index: '1.0'}});
        weatherFactory.getUV().query({latlng: latlng}).$promise.then(function (response) {
          expect(response.data).toEqual({index: '1.0'});
        });
        httpBackend.flush();
      });
    });

  });
})();
