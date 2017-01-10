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

myApp.controller("HomeController", ["$scope", function($scope) {
    console.log("home...its working....");
}]);

myApp.controller("Char1Controller", ["$scope", function($scope) {
    console.log("char1 working....");
}]);

myApp.controller("Char2Controller", ["$scope", function($scope) {
    console.log("char2 working....");
}]);

myApp.controller("Char3Controller", ["$scope", function($scope) {
    console.log("char3 working....");
}]);
