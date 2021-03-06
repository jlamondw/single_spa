// define(['bower_components/componentName/file'])
define([
  'angular',
  '../../../workbench1/node_modules/cool-lib/cool-lib'
], function(angular) {

  const moduleName = 'workbench1'

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
      template: '<div>yo</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the foo directive');
      }
    };
  });

  return moduleName;
});
