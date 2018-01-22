define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the demoApp
   */
  angular.module('demoApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
