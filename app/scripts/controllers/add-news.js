'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:AddNewsCtrl
 * @description
 * # AddNewsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('AddNewsCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
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
