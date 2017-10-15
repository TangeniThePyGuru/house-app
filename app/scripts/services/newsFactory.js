'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.news
 * @description
 * # news
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('newsFactory', function ($firebaseArray, $firebaseObject, $routeParams) {
    // Service logic
    // ...



    // Public API here
    return {
      NEWS: [],

      ref: firebase.database().ref('news/'),

      get: function () {
        this.NEWS = $firebaseArray(this.ref);
        return this.NEWS;
      }
      ,
      getItem: function (id) {
        return $firebaseObject(this.ref.child(id))
      }
      ,
      delete: function (id) {
        // deletes a node
        return $firebaseObject(this.ref.child(id)).$remove();
      }
      ,
      update: function (object) {
        // var news = $firebaseObject(this.ref.child(object.$id));
        return object.$save();
      }
      ,
      add: function (object) {
        // add news item
        return $firebaseArray(this.ref).$add(object);
      }

    };
  });
