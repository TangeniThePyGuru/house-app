'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.eventsFactory
 * @description
 * # eventsFactory
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('eventsFactory', function ($firebaseArray, $firebaseObject) {
    // Service logic
    // ...



    // Public API here
    return {
      EVENTS : [],

      ref : firebase.database().ref('events/'),

      get : function () {
        this.EVENTS = $firebaseArray(this.ref);
        return this.EVENTS;
      },

      getItem : function (id) {
        return $firebaseObject(this.ref.child(id));
      },

      update : function (object) {
        return object.$save();
      },

      delete: function (id) {
        return $firebaseObject(this.ref.child(id)).$remove();
      },

      add : function (object) {
        return $firebaseArray(this.ref).$add(object);
      }







    };
  });
