var app = angular.module('twitterApp', []);

app.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function(){
        alert("Loading tweets!");
    }
})

app.directive("enter", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            //console.log("enter");
            //element.addClass(attrs.enter);
            scope.$apply(attrs.enter);
        })
    }
})

app.directive("leave", function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            element.removeClass(attrs.enter);
        })
    }
})
