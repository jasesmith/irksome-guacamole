(function($angular, _) {
    'use strict';

    angular.module('app', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider
        .state('splash', {
          url: '/',
          templateUrl : 'views/splash.html',
          controller  : 'SplashController'
        })
        .state('main', {
          url: '/main',
          templateUrl : 'views/main.html',
          controller  : 'MainController'
        })
        .state('settings', {
          parent: 'main',
          url: '/settings',
          templateUrl : 'views/main.settings.html',
          controller  : 'SettingsController'
        })
        .state('menu', {
          parent: 'main',
          url: '/menu',
          templateUrl : 'views/main.menu.html',
          controller  : 'MenuController'
        });
    })

    .controller('AppController', ['$scope', function($scope) {

        $scope.headline = 'Irksome Guacamole';
        $scope.icon = 'map-o';

        $scope.snaps = [
          {view: 'settings' },
          {view: 'main' },
          {view: 'menu' }
        ];

        window.console.log('hello app');

    }]);

})(window.angular, window._);
