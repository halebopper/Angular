var app = angular.module('app', []);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "AppCtrl"
        })
        .when('/pizza', {
            template: "Yumm!"
        })
        .otherwise({
            template: "this does not exist!"
        })
})

app.controller("AppCtrl", function($scope){
    $scope.model = {
        message: "This is my app!!!"
    }
})