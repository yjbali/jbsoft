
var app = angular.module('myApp', [ 'ngRoute', 'applicationControllers',
		'applicationServices' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/contempconfig', {
		templateUrl : 'views/contempconfig.html',
		controller : 'contractController'
	}).when('/temp', {
		templateUrl : 'views/template.html',
		controller : 'templateController'
	}).when('/index', {
		templateUrl : 'index.html',
		controller : 'loginPageConroller'
	}).when('/monthlybillpayment', {
		templateUrl : 'views/monthlybillpayment.html',
		controller : 'monthlyBillController'
	}).otherwise({
		redirectTo : '/index'
	});
} ]);




