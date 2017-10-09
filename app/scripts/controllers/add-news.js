'use strict';

/**
 * @ngdoc function
 * @name myHouseAppApp.controller:AddNewsCtrl
 * @description
 * # AddNewsCtrl
 * Controller of the myHouseAppApp
 */
angular.module('myHouseAppApp')
  .controller('AddNewsCtrl', ["auth", "$scope", "$location", "newsFactory", "$timeout", function (auth, $scope, $location, newsFactory, $timeout) {


    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.success = false;

    // upload image

    var uploader = document.getElementById('uploader');
      var fileButton = document.getElementById('fileButton')

      try {
        fileButton.addEventListener('change', function (e) {
          //   get the file
          var file = e.target.files[0];
          //    create storage ref
          var storageRef = firebase.storage().ref('News/' + file.name);

          //    upload file
          var task = storageRef.put(file);
          //    update the progress bar
          task.on('state_changed',
            function progress(snapshot) {
              var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              // uploader.value = percentage + "%" ;
              uploader.style.width = percentage + '%';
              if (percentage === 100) {
                $scope.uploadDone = true;
              }
            },
            function error(err) {
              console.log("Error occured during upload: " + err)
            },
            function complete() {
              // $scope.uploadDone = true;
              console.log("Upload completed successfully!");
              $scope.imageUrl = task.snapshot.downloadURL;
              $timeout(function () {
                // $scope.uploadDone = false;
                console.log('debug');
              }, 3000);
            }
          );
        });
      } catch (error) {
        // console.log(error)
      }

    $scope.add = function () {
      newsFactory.add({
        title: $scope.title,
        description: $scope.description,
        image_url: $scope.imageUrl
      }).then(function () {
        // action when successfully added
        $scope.success = true;
        $timeout(function () {
          $scope.success = false;
        }, 3000)
        console.log("x");
      });

    }
    // reset the loading bar
    $scope.clear = function(){
      uploader.style.width = 0 + '%';
    }



  }]);
