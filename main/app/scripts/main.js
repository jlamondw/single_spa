/*jshint unused: vars */
require.config({
  paths: {
    'angular': '../../bower_components/angular/angular',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'workbench1': '../../../workbench1/app/main'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route': ['angular']
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route'
], function(angular, app, ngRoutes) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
