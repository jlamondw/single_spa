define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name demoApp.MyService
   * @description
   * # MyService
   * Service in the demoApp.
   */
  angular.module('demoApp.services.MyService', [])
	.service('MyService', function () {
	// AngularJS will instantiate a singleton by calling "new" on this function
	});
});
