var app = angular.module('SimpleMailApp', ['ngRoute']);

function emailRouteConfig($routeProvider){
    $routeProvider.when('/', {
        controller: 'ListController',
        templateUrl: 'list.html'
    }).when('/view/:id', {
        controller: 'DetailController',
        templateUrl: 'detail.html'
    }).otherwise({
        redirectTo: '/'
    });
}

// setup route
app.config(emailRouteConfig);

// fake messages
var messages = [
    {
        id: 0,
        sender: 'aaa',
        subject: 'aaaa',
        date: 'Dec 7, 2013 12:32:00',
        recipients: ['bbb'],
        message: 'aaaaa'
    },{
        id: 1,
        sender: 'bbb',
        subject: 'bbbb',
        date: 'Dec 7, 2013 12:33:00',
        recipients: ['ccc'],
        message: 'bbbbb'
    },{
        id: 2,
        sender: 'ccc',
        subject: 'cccc',
        date: 'Dec 7, 2013 12:34:00',
        recipients: ['aaa'],
        message: 'ccccc'
    }
];

// view a list of emails
app.controller('ListController', ['$scope', '$http', function( $scope, $http ){
	$scope.messages = messages;

    $scope.test = function(id){
        console.log('test: '+id);
        $http.get('json.json').success(function(data, status, headers, config){
            console.log(data);
            // console.log(status); // 200
            // console.log(headers); // function(name)
            // console.log(config); // method="GET"...

            messages[id].sender = data[id].email;

            data.forEach(function(e, i){
                // console.log(e); is the data, i is the index
            });
        });
    }
}]);

// view email in detail
app.controller('DetailController', ['$scope', '$routeParams', function( $scope, $routeParams ){
	$scope.message = messages[$routeParams.id];
}]);

// autofocus directive
app.directive('ngbkFocus', function(){
    return {
        link: function(scope, element, attrs, controller){
            element[0].focus();
        }
    };
});
