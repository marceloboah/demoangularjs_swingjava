appCliente.controller("clienteController", function ($scope,$http){
	

	$scope.clientes=[];
	$scope.cliente={};

	$scope.carregarClientes=function(){
		token = localStorage.getItem("userToken");
		$http.defaults.headers.common.Authorization= 'Bearer '+token;
		
		
		$http({method:'GET',url:"http://localhost:8080/admin/clientes"})
		.then(function(response){
			$scope.clientes=response.data;
			
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.salvarCliente=function(){
		$http({method:'POST',url:"http://localhost:8080/admin/clientes", data:$scope.cliente})
		.then(function(response){

			$scope.clientes.push(response.data);
			$scope.carregarClientes();
			$scope.cliente={};
			
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.excluirCliente=function(cliente){
		$http({method:'DELETE',url:"http://localhost:8080/admin/clientes/"+cliente.id})
		.then(function(response){


			pos = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(pos, 1);
			
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.alterarCliente=function(cli){
		$scope.cliente = angular.copy(cli);
		//$scope.cliente = cli;
	}
	
	$scope.cancelarAlteacaoCliente=function(){
		$scope.cliente={};
		
	}
	
	$scope.carregarClientes();
	
});