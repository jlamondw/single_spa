define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name demoApp.directive:myDirective
   * @description
   * # myDirective
   */
  angular.module('demoApp.directives.MyDirective', [])
    .directive('myDirective', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the myDirective directive');
        }
      };
    });
});
