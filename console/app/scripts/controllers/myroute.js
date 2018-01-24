define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:MyrouteCtrl
   * @description
   * # MyrouteCtrl
   * Controller of the demoApp
   */
  angular.module('demoApp.controllers.MyrouteCtrl', [])
    .controller('MyrouteCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
