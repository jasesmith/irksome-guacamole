(function($angular, _) {
    'use strict';

    angular.module('app')
    .controller('MainController', ['$scope', function($scope) {

        window.console.log('hello main');

    }])
    .controller('SplashController', ['$scope', function($scope) {

        window.console.log('hello splash');

    }])
    .controller('MenuController', ['$scope', function($scope) {

        window.console.log('hello main');

    }])
    .controller('SettingsController', ['$scope', function($scope) {

        window.console.log('hello settings');

    }]);


})(window.angular, window._);
