var html5Config;

html5Config = function($locationProvider) {
  return $locationProvider.html5Mode(true);
};

html5Config.$inject = ['$locationProvider'];

myApp.config(html5Config);