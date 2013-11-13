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

app.directive("error", function($rootScope){
    return {
        restrict: "E",
        template: "<div class='alert-box alert' ng-show='isError'>Error!!!</div>",
        link: function(scope) {
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
                scope.isError = true;
            })
        }
    }
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
        //defer.resolve();
        defer.reject("your network is down");
    }, 500);
    return defer.promise;
}
