var app = angular.module('app', []);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "AppCtrl",
            resolve: {
                loadData: app.loadData,
                prepData: app.prepData
            }
        })
})

app.controller("AppCtrl", function($scope, $route){

    console.log($route);

    $scope.model = {
        message: "This is my app!!!"
    }
})

app.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve("loadDataText");
    }, 2000);
    return defer.promise;
}

app.prepData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve("prepDataText");
    }, 2000);
    return defer.promise;
}