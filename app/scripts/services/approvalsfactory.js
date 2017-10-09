'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.approvalsFactory
 * @description
 * # approvalsFactory
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('approvalsFactory', function ($firebaseArray, $firebaseObject) {
    // Service logic
    // ...



    // Public API here
    return {
        ServiceAPPROVALS: [],
        MaterialAPPROVALS: [],


        ref : function(filter){
          return firebase.database().ref(filter + '/');
        },

        get : function () {
          this.ServiceAPPROVALS =  $firebaseArray(this.ref('services'));
          this.MaterialAPPROVALS = $firebaseArray(this.ref('material'));
        }
    };
  });
