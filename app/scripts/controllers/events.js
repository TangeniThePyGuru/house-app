'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('EventsCtrl', ["auth", "$scope", "$location", "eventsFactory", function (auth, $scope, $location, eventsFactory) {
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

    $scope.events = eventsFactory.EVENTS;

    $scope.delete = function (id) {
      eventsFactory.delete(id).then(function (ref) {
        console.log("deleted: "+ref)
      }, function (error) {
        console.log("error: "+error);
      })
    }

  }]);
