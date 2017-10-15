'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.functions
 * @description
 * # functions
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('functions', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
