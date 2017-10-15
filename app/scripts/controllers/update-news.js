'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:UpdateNewsCtrl
 * @description
 * # UpdateNewsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('UpdateNewsCtrl', ["auth", "$scope", "$location", "newsFactory", "$routeParams", "$timeout", function (auth, $scope, $location, newsFactory, $routeParams, $timeout) {

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    console.log(newsFactory.getItem($routeParams.id));

    $scope.success = false;
    $scope.notsuccess = false;
    $scope.news = newsFactory.getItem($routeParams.id);

    $scope.update = function () {
      newsFactory.update($scope.news).then(function (ref) {
        $scope.success = true;
        $timeout(function () {
          $scope.success = false
        }, 3000)
        console.log('success: '+ref);
      }, function (error) {
        $scope.notsuccess = true
        console.log('error: '+error);
      })
    }

  }]);
