'use strict';

angular.module('doggerApp.controllers')
  .controller('HomeCtrl', ['$rootScope', '$scope', '$timeout', 'notifications', function($rootScope, $scope, $timeout, notifications) {

    // Testing notifications
    $timeout(function() {
      notifications.success('Ohh yeah!');
    }, 1000);

    $timeout(function() {
      notifications.error('Ohh no...');
    }, 2000);

  }]);
