myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
    return {message:"I am a data from a service"}
})

myApp.filter("reverse", function(){
    return function(message){
        return message.split("").reverse().join("");
    }
})

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }

}
