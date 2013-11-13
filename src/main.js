var app = angular.module('app', []);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "ViewCtrl"
        })
        .when('/new', {
            templateUrl: "new.html",
            controller: "NewCtrl",
            resolve: {
                loadData: viewCtrl.loadData
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

app.controller("AppCtrl", function($scope, $rootScope, $route, $location){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log(rejection);
    })
    $rootScope.$on("$routeChangeStart", function(event, current, previous, rejection){
        console.log("start");
        console.log($scope, $rootScope, $route, $location);
    })
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous, rejection){
        console.log("success");
        console.log($scope, $rootScope, $route, $location);
    })
})

app.controller("NewCtrl", function($scope, loadData, $template){
    console.log("done");
    console.log($scope, loadData, $template)
})

var viewCtrl = app.controller("ViewCtrl", function($scope, $route, $location){

    console.log($route);

    $scope.changeRoute = function(){
        console.log("changeRoute invoked");
        console.log($scope);
        $location.path("/new");
    }

    $scope.model = {
        message: "Change Route!!!"
    }
})

viewCtrl.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve({message: "success"});
        //defer.reject("your network is down");
    }, 500);
    return defer.promise;
}
