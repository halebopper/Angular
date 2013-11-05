var app = angular.module('phoneApp', []);

var phoneAppStuff = {};

phoneAppStuff.controllers = {}
phoneAppStuff.controllers.AppCtrl = function($scope){
    this.sayHi = function(){
        alert("Hi!");
    }

    return $scope.AppCtrl = this;
}

phoneAppStuff.directives = {};
phoneAppStuff.directives.panel = function(){
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel" ng-transclude>This is a panel component</div>'
    };
}

app.controller(phoneAppStuff.controllers);
app.directive(phoneAppStuff.directives);