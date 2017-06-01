
(function() {
  'use strict';

    angular
    .module('angularApp')
    .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController(data) {
        var vm = this;
        vm.success = false;

        if(data.success){
            vm.success = true;
            if(data.weather){
                vm.place = data.place;
                vm.weather = data.weather;
                vm.temp =  Math.round(data.temp - 273.15); 
            }else if(data.uv){
                vm.uv = data.uv;
            }
        }
        
    }

})();
