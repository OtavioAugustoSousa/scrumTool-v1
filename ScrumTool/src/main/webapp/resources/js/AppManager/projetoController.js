(function(angular) {
	'use strict';

	angular.module('app').controller('projetoController', projetoController);
	projetoController.$inject = [ '$scope', 'projetoRepository', '$timeout',
			'$rootScope' ];

	function projetoController($scope, projetoRepository, $timeout, $rootScope) {
		$scope.projeto = {};
		$scope.projetos = [];
		
		$scope.createProject = function() {
			var ele = $('#createProjeto');
			ele.modal('show');
		}
		function init() {
			projetoRepository.open().then(function() {
				listarProjetos();
				
			});
		}

		init();
		$scope.salvar = function(projeto) {
			var ele = $('#createProjeto').modal('hide');
			salvar(projeto);
		};

		function salvar(projeto) {
			var promisse = projetoRepository.saveProjeto(projeto);
			promisse.then(function() {
			}, function(erro) {
				console.log(erro)
			});
		}
		 function listarProjetos() {
			 projetoRepository.getProjetos()
	                .then(function (sucesso) {
	                    $scope.projetos = sucesso;
	                });
	        };
	}
	;
})(window.angular);
