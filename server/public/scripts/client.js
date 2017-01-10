var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "/views/routes/home.html",
            controller: "HomeController"
        })
        .when("/char1", {
            templateUrl: "/views/routes/char1.html",
            controller: "Char1Controller"
        })
        .when("/char2", {
            templateUrl: "/views/routes/char2.html",
            controller: "Char2Controller"
        })
        .when("/char3", {
            templateUrl: "/views/routes/char3.html",
            controller: "Char3Controller"
        })
        .otherwise({
            redirectTo: "home"
        });
}]);

myApp.factory('charFactory', function(){
  var charFactory = {};
  charFactory.char1HighFives = 0;
  charFactory.char2HighFives = 0;
  charFactory.char3HighFives = 0;
  charFactory.totalHighFives = function(){
    return (charFactory.char1HighFives + charFactory.char2HighFives + charFactory.char3HighFives);
  };
  charFactory.randomNumGenerator = function(){
    return Math.random();
  };
  charFactory.char1NumberToBeat = charFactory.randomNumGenerator();
  charFactory.char2NumberToBeat = charFactory.randomNumGenerator();
  charFactory.char3NumberToBeat = charFactory.randomNumGenerator();
  return charFactory;
});

function randomNumGenerator(){
  return Math.random();
}

myApp.controller("HomeController", ["$scope", function($scope) {
    console.log("home...its working....");
}]);

myApp.controller("Char1Controller", ["$scope", "charFactory", function($scope, charFactory) {
    console.log("char1 working....");
    $scope.numChar1HighFives = charFactory.char1HighFives;
    $scope.total = charFactory.totalHighFives();
    $scope.highFive = function(){
      var rolledNumber = charFactory.randomNumGenerator();
      if (rolledNumber > charFactory.char1NumberToBeat) {
        charFactory.char1HighFives++;
        $scope.numChar1HighFives = charFactory.char1HighFives;
      }
      console.log('rolledNumber = ', rolledNumber, '; NumberToBeat = ', charFactory.char1NumberToBeat);
      $scope.total = charFactory.totalHighFives();
      return;
    };
  }]);

myApp.controller("Char2Controller", ["$scope", "charFactory", function($scope, charFactory) {
    console.log("char2 working....");
    $scope.numChar2HighFives = charFactory.char2HighFives;
    $scope.total = charFactory.totalHighFives();
    $scope.highFive = function(){
      var rolledNumber = charFactory.randomNumGenerator();
      if (rolledNumber > charFactory.char2NumberToBeat) {
        charFactory.char2HighFives++;
        $scope.numChar2HighFives = charFactory.char2HighFives;
      }
      console.log('rolledNumber = ', rolledNumber, '; NumberToBeat = ', charFactory.char2NumberToBeat);
      $scope.total = charFactory.totalHighFives();
      return;
    };
  }]);

myApp.controller("Char3Controller", ["$scope", "charFactory", function($scope, charFactory) {
    console.log("char3 working....");
    $scope.numChar3HighFives = charFactory.char3HighFives;
    $scope.total = charFactory.totalHighFives();
    $scope.highFive = function(){
      var rolledNumber = charFactory.randomNumGenerator();
      if (rolledNumber > charFactory.char3NumberToBeat) {
        charFactory.char3HighFives++;
        $scope.numChar3HighFives = charFactory.char3HighFives;
      }
      console.log('rolledNumber = ', rolledNumber, '; NumberToBeat = ', charFactory.char3NumberToBeat);
      $scope.total = charFactory.totalHighFives();
      return;
    };
  }]);
