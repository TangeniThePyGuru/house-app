'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('GroupsCtrl', ["auth", "$scope", "$location", "groupFactory", function (auth, $scope, $location, groupFactory ) {
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

    $scope.groups = groupFactory.GROUPS;

  }])

  .run(function (groupFactory) {
      groupFactory.get();
  })
