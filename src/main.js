var app = angular.module('app', []);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "ViewCtrl",
            resolve: {
                loadData: app.loadData
            }
        })
})

app.controller("AppCtrl", function($rootScope){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log(rejection);
    })
})

app.controller("ViewCtrl", function($scope, $route){

    console.log($route);

    $scope.model = {
        message: "This is my app!!!"
    }
})

app.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.reject("your network is down");
    }, 500);
    return defer.promise;
}
