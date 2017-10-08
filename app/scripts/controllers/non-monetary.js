'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:NonMonetaryCtrl
 * @description
 * # NonMonetaryCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('NonMonetaryCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
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
