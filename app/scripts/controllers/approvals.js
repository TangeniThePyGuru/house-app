'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:ApprovalsCtrl
 * @description
 * # ApprovalsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('ApprovalsCtrl', ["auth", "$scope", "$location", "approvalsFactory", function (auth, $scope, $location, approvalsFactory) {


    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };


    $scope.ServiceApprovals = approvalsFactory.ServiceAPPROVALS;
    $scope.MaterialApprovals = approvalsFactory.MaterialAPPROVALS;
    $scope.allApprovals = $scope.ServiceApprovals + $scope.MaterialApprovals;

    // angular.ServiceAPPROVALS.forEach(function (item) {
    //   allApprovals.push(item);
    // });

    angular.allApprovals.forEach(function(approval) {
      if(approval.status == 'pending'){
        $scope.PendingApproval.push(approval)
      }
      else{
        $scope.Approved.push(approval)
      }
    });

  }])

  .run(function (approvalsFactory) {
    // load all the approvals data initialy
    approvalsFactory.get();
  })
