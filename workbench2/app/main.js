// define(['bower_components/componentName/file'])
define([
  'angular',
  '../../../workbench2/node_modules/cool-lib/cool-lib'
], function(angular) {

  const moduleName = 'workbench2'

  angular.module(moduleName, [
    // module conflicts go here
    'coollib'
    /*
      show global app
        that loads modules
        that refer to different versions of third party libs


    */


  ])
  .directive('foo', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the foo directive');
      }
    };
  });

  return moduleName;
});
