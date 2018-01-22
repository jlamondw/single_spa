/*jshint unused: vars */
define([
  'angular',
  'angular-route',
  'workbench1',
  'controllers/main',
  'controllers/about',
  'controllers/myroute',
  'controllers/user',
  'directives/mydirective',
  'services/myservice'
]/*deps*/, function (
  angular,
  MainCtrl,
  AboutCtrl,
  MyrouteCtrl,
  UserCtrl,
  MyDirectiveDirective,
  MyServiceService
)/*invoke*/ {
  'use strict';

  return angular
    .module('demoApp', [
    'demoApp.controllers.MainCtrl',
    'demoApp.controllers.AboutCtrl',
    'demoApp.controllers.MyrouteCtrl',
    'demoApp.controllers.UserCtrl',
    'demoApp.directives.MyDirective',
    'demoApp.services.MyService',
    'ngRoute',
    'workbench1'
  ])
    .config(function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/myroute', {
          templateUrl: 'views/myroute.html',
          controller: 'MyrouteCtrl',
          controllerAs: 'myroute'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
