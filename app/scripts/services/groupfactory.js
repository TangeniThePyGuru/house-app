'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.groupFactory
 * @description
 * # groupFactory
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('groupFactory', function ($firebaseArray, $firebaseObject) {
    // Service logic
    // ...



    // Public API here
    return {
      GROUPS: [],

      ref : firebase.database().ref('GroupFund/'),

      get: function () {
        this.GROUPS = $firebaseArray(this.ref);
        return this.GROUPS;
      }
    };
  });
