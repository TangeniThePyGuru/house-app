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
      console.log($scope.event.starting_date.toDateString() + " -> "+ $scope.event.starting_time.toTimeString())
      eventsFactory.add({
        title : $scope.event.title,
        starting_date : $scope.event.starting_date.toDateString(),
        starting_time: $scope.event.starting_time.toTimeString(),
        ending_date : $scope.event.ending_date.toDateString(),
        ending_time: $scope.event.ending_time.toTimeString(),
        description: $scope.event.description
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
