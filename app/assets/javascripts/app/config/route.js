var routerConfig;

routerConfig = [
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when("/welcome", {
      templateUrl: "welcome/index.html",
      controller: "AppCtrl"
    });
  }
];

myApp.config(routerConfig);