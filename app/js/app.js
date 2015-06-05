'use strict';

angular.module('doggerApp', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap',
  'ngAnimate',
  'angular-growl',

  // All templates are compiled in this module
  'templates',

  // App Modules
  'doggerApp.factories',
  'doggerApp.filters',
  'doggerApp.services',
  'doggerApp.directives',
  'doggerApp.controllers'
]);

angular.module('doggerApp.controllers', []);
angular.module('doggerApp.directives', []);
angular.module('doggerApp.services', []);
angular.module('doggerApp.filters', []);
angular.module('doggerApp.factories', []);

// Config Routes
angular.module('doggerApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({ redirectTo: '/' });

    // Set HTML5 mode
    $locationProvider.html5Mode(true);
  }]);
