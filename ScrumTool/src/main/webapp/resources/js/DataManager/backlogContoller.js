(function (angular) {
    'use strict';

    angular.module('app').controller('backlogController', backlogController);
    backlogController.$inject = ['$scope', 'backlogRepository', '$timeout', '$rootScope'];

    //EstruturaBase para um controller
    function backlogController($scope, backlogRepository, $timeout, $rootScope) {
        $scope.itemBacklog = {};
        $scope.nome = "";
        $scope.rows = [];
        function init() {
            backlogRepository.open().then(function () {
                listToDo();
            });
        }

        init();

        $scope.createItem = function () {
            var ele = $('#createItem');
            ele.modal('show');
        };

        function listToDo() {
            backlogRepository.getbacklogs()
                .then(function (sucesso) {
                    $scope.rows = sucesso;
                });
        };
        $scope.salvar = function (item) {
            var ele = $('#createItem').modal('hide');
            var promisse = backlogRepository.saveBacklog(item);
            promisse.then(
                function () {
                    listToDo();
                },
                function (erro) {
                    console.log(erro)
                });
        }
    }
})
(window.angular);


