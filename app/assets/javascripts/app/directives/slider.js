myApp.directive('sliderDirective', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    templateUrl: "directives/slider.html",
    scope: {
      slideItems: '='
    },
    link: function (scope, element, attr) {
      if(element){
        $timeout(function() {
          $('.jcarousel').jcarousel();
          $('.jcarousel-control-prev')
              .on('jcarouselcontrol:active', function() {
                  $(this).removeClass('inactive');
              })
              .on('jcarouselcontrol:inactive', function() {
                  $(this).addClass('inactive');
              })
              .jcarouselControl({
                  target: '-=1'
              });

          $('.jcarousel-control-next')
              .on('jcarouselcontrol:active', function() {
                  $(this).removeClass('inactive');
              })
              .on('jcarouselcontrol:inactive', function() {
                  $(this).addClass('inactive');
              })
              .jcarouselControl({
                  target: '+=1'
              });

          $('.jcarousel-pagination')
              .on('jcarouselpagination:active', 'a', function() {
                  $(this).addClass('active');
              })
              .on('jcarouselpagination:inactive', 'a', function() {
                  $(this).removeClass('active');
              })
              .jcarouselPagination();
        }, 0)

      }


    }
  }
}]);