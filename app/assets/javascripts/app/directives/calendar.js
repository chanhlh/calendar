myApp.directive('calendar', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    templateUrl: "directives/calendar.html",
    scope: {
      posLeft: '=',
      posRight: '=',
      posCenter: '=',
      defaultDate: '=',
      ngData: '='
    },
    link: function (scope, element, attr) {
      $(element).fullCalendar({
        theme: true,
        header: {
          left: scope.posLeft,
          center: scope.posCenter,
          right: scope.posRight
        },
        defaultDate: scope.defaultDate,
        editable: true,
        eventLimit: true,
        events: scope.ngData
      });

      // scope.$on("reloadEvent" , function(){
      //   console.log("============")
      //   console.log(scope.ngData)
      //   $(element).fullCalendar('addEventSource', scope.ngData)
      // });

      scope.$watch('ngData', function() {
        console.log("Changed");
        $(element).fullCalendar( 'removeEventSource', scope.ngData )
        $(element).fullCalendar('addEventSource', scope.ngData)
      }, true);
    }
  }
}]);