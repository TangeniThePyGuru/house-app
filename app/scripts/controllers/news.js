'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('NewsCtrl', ["auth", "$scope", "$location","newsFactory", function (auth, $scope, $location, newsFactory) {


    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    // get all the news
    $scope.news = newsFactory.NEWS;

    $scope.getNewsItem = function(){
      return newsFactory.getNewsItem()
    }

    $scope.delete = function (id) {
      return newsFactory.delete(id).then(function (ref) {
        console.log("success");
      }, function(error){
        console.log('Error: '+error);
      })
    }

  }])
// get all the news when the app loads
  .run(function (newsFactory) {
      newsFactory.get();
  })
