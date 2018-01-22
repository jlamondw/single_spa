// define(['bower_components/componentName/file'])
define(['angular'], function(angular) {

  const moduleName = 'workbench1'

  angular.module(moduleName, [
    // module conflicts go here
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
