(function($angular, _) {
    'use strict';

    angular.module('app', ['jamfu','ui.sortable']).controller('AppController', ['$scope', '$location', 'StorageService', 'UtilityService', function($scope, $location, storage, utils) {

        $scope.headline = 'Irksome Guacamole';
        $scope.icon = 'map-o';

    }]);

})(window.angular, window._);
