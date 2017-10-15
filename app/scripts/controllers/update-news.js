'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:UpdateNewsCtrl
 * @description
 * # UpdateNewsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('UpdateNewsCtrl', ["auth", "$scope", "$location", "newsFactory", "$routeParams", function (auth, $scope, $location, newsFactory, $routeParams) {

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    console.log(newsFactory.getItem($routeParams.id));

    $scope.news = newsFactory.getItem($routeParams.id);

    $scope.update = function () {
      newsFactory.update($scope.news).then(function (ref) {
        console.log('success: '+ref);
      }, function (error) {
        console.log('error: '+error);
      })
    }

  }]);
