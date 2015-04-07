myApp.controller("AppCtrl", [
  '$scope', '$timeout', function($scope, $timeout) {

    $scope.posLeft = 'prev,next today';
    $scope.posCenter = 'title';
    $scope.posRight = 'month,agendaWeek,agendaDay';
    $scope.eventData = {}
    $scope.eventDataList = [
      {
        title: 'All Day Event',
        start: '2015-02-01'
      },
      {
        title: 'Long Event',
        start: '2015-02-07',
        end: '2015-02-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2015-02-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2015-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2015-02-11',
        end: '2015-02-13'
      },
      {
        title: 'Meeting',
        start: '2015-02-12T10:30:00',
        end: '2015-02-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2015-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2015-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2015-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2015-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2015-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2015-02-28'
      }
    ]

    $scope.addEvent = function(){
      if($scope.eventData.title || $scope.eventData.endDate || $scope.eventData.startDate){
        $scope.eventDataList.push($scope.eventData)
        $scope.eventData = {}
        // $scope.$broadcast("reloadEvent")
      }else{
        alert("Data is not enought!")
        return
      }
    }
    // $scope.date = "04/22/2015"
    // $scope.test = function(){
    //   console.log("-------------")
    //   console.log($scope.date)
    // }


    // console.log($scope.)
    // $scope.slideItems = [{
    //         url: 'http://slider.styletagassets.com/banners/enigmatic_lehengas_dec_cr.jpg'
    //     }, {
    //         url: 'http://slider.styletagassets.com/banners/poetic_cr.jpg'
    //     }, {
    //         url: 'http://slider.styletagassets.com/banners/enigmatic_lehengas_dec_cr.jpg'
    //     }, {
    //         url: 'http://slider.styletagassets.com/banners/poetic_cr.jpg'
    //     }, {
    //         url: 'http://slider.styletagassets.com/banners/enigmatic_lehengas_dec_cr.jpg'
    //     }, {
    //         url: 'http://slider.styletagassets.com/banners/poetic_cr.jpg'
    //     }];

  }
]);