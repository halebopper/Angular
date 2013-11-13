var app = angular.module('app', []);

//app.provider("game", function(){
//    var type;
//    return{
//        setType: function(value){
//            type = value;
//        },
//        $get: function(){
//            return {
//                title: type + "Craft"
//            }
//        }
//    }
//})


//app.config(function(gameProvider){
//    gameProvider.setType("War");
//});

app.factory("game", function(){
    return {
        title: "StarCraft"
    }
})


app.controller("AppCtrl", function($scope, game, $injector){
    $injector.invoke(function(game){
        alert(game.title);
    })
    $scope.title = game.title;
})