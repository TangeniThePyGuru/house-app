'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:TimepickerCtrl
 * @description
 * # TimepickerCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('TimepickerCtrl', ["auth", "$scope", "$location", "$log", function (auth, $scope, $location, $log) {

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
      $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function () {
      var d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      $scope.mytime = d;
    };

    $scope.changed = function () {
      $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function () {
      $scope.mytime = null;
    };

  }]);
