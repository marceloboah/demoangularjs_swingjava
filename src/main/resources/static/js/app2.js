
var appCliente = angular.module("appCliente", ['ngRoute']);


appCliente.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when("/clients", {
		templateUrl : 'view/cliente.html',
		controller : 'clienteController'
	})
	.when("/login", {
		templateUrl : 'view/login.html',
		controller : 'loginController'
	})
	.otherwise({
		redirectTo : '/'
	});

	$locationProvider.html5Mode(true);
});


