myApp.directive('datePicker', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    templateUrl: "directives/datepicker.html",
    scope: {
      ngModel: '='
    },
    controller: function($scope, $timeout){
      $('.date').datepicker({
        autoclose: true,
        clearBtn: true,
        format: 'yyyy-mm-dd'
      });
    }
  }
}]);