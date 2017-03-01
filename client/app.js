var app= angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{templateUrl:'partials/login.html'})
	.when('/dash',{templateUrl:'partials/dash.html'})
	.when('/addQuestion',{templateUrl:'partials/addQuestion.html'})
	.when('/answer/:qId',{templateUrl:'partials/answer.html'})
	.when('/show/:id',{templateUrl:'partials/show.html'})
	.when('/like/answer',{templateUrl:'partials/show.html'})
	.otherwise({redirectTo:'/login'})
})