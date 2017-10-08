'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('EventsCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
