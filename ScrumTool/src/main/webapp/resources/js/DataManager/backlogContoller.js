(function (angular) {
    'use strict';

    angular.module('app').controller('backlogController', backlogController);
    backlogController.$inject = ['$scope', 'backlogRepository', '$timeout', '$rootScope'];

    //EstruturaBase para um controller
    function backlogController($scope, backlogRepository, $timeout, $rootScope) {
        $scope.itemBacklog = {};
        $scope.nome = "";
        //$scope.add = createItem();
        function init(){
            backlogRepository.open().then(function(){
                listToDo();
            });
        }

        init();

        $scope.createItem = function () {
            var ele = $('#createItem');
            ele.modal('show');

        }
        function listToDo() {
            $timeout(function () {
            }, 250);
            backlogRepository.getbacklogs()
                .then(
                    function (sucesso) {
                        $scope.rows = sucesso;
                    },
                    function (erro) {
                        console.log(erro)
                    });
    };
    $scope.salvar = function (item) {
        var ele = $('#createItem').modal('hide');
        $timeout(function () {
        }, 250);

        backlogRepository.saveBacklog(item)
            .then(
                function (sucesso) {
                    listToDo();
                },
                function (erro) {
                    console.log(erro)
                });
    }
}
})
(window.angular);


