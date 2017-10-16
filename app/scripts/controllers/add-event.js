'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:AddEventCtrl
 * @description
 * # AddEventCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('AddEventCtrl', ["auth", "$scope", "$location","eventsFactory","$timeout", function (auth, $scope, $location, eventsFactory, $timeout) {
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

    $scope.success = false;
    $scope.notsuccess = false;

    $scope.add = function () {
      console.log($scope.starting_date + " -> "+ $scope.starting_time)
      eventsFactory.add({
        title : $scope.title,
        starting_date : $scope.starting_date,
        starting_time: $scope.starting_time,
        ending_date : $scope.ending_date,
        ending_time: $scope.ending_time,
        description: $scope.description
      }).then(function (ref) {
        console.log("success: "+ref)
        $scope.success = true;
        $timeout(function () {
          $scope.success = false;
        }, 3000)
      }, function (error) {
        console.log("error: "+error);
        $scope.notsuccess = true;
        $timeout(function () {
          $scope.notsuccess = false;
        }, 3000)
      });

    }

  }]);
