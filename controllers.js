var app = new angular.module('myApp', []);

app.controller( 'HelloController', ['$scope', function( $scope ){
	// console.log($scope);
	$scope.greeting = {
		text: 'Hello'
	};
}] )