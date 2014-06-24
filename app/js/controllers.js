(function() {
  'use strict';
  angular.module('myApp.controllers', []).controller('MyCtrl1', function($scope) {
    return $scope.ololo = 'alala2';
  }).controller('MyCtrl2', function($scope) {});

}).call(this);
