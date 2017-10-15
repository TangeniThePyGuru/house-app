'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:AccordionCtrl
 * @description
 * # AccordionCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('AccordionCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {


    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.isNavCollapsed = true;
    $scope.isCollapsed = true;

    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };

  }]);
