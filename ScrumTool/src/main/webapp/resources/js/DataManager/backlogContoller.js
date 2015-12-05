(function (angular) {
    'use strict';

    angular.module('app').controller('backlogController', backlogController);
    backlogController.$inject = ['$scope', 'backlogRepository', '$timeout', '$rootScope'];

    //EstruturaBase para um controller
    function backlogController($scope, backlogRepository, $timeout, $rootScope) {
        $scope.itemBacklog = {};
        $scope.nome = "";
        $scope.list_Todo = [];
        $scope.list_Doing = [];
        $scope.list_Done = [];
        $scope.status="";
        function init() {
            backlogRepository.open().then(function () {
                listAll();
            });
        }

        init();

        $scope.createItem = function (status) {
            var ele = $('#createItem');
            ele.modal('show');
            $scope.status = status;
        };

        function listToDo() {
            backlogRepository.getBacklogByStatus("todo")
                .then(function (sucesso) {
                    $scope.list_Todo = sucesso;
                });
        };

        function listDoing() {
            backlogRepository.getBacklogByStatus("doing")
                .then(function (sucesso) {
                    $scope.list_Doing = sucesso;
                });
        };

        function listDones() {
            backlogRepository.getBacklogByStatus("done")
                .then(function (sucesso) {
                    $scope.list_Done = sucesso;
                });
        };
    function  listAll(){
        listToDo();
        listDoing();
        listDones();
    }
        $scope.salvar = function (item) {
            var ele = $('#createItem').modal('hide');
            item.status = $scope.status;
            var promisse = backlogRepository.saveBacklog(item);
            promisse.then(
                function () {
                    listAll();
                },
                function (erro) {
                    console.log(erro)
                });
        };


    }
})
(window.angular);
function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.style.border = "dashed";
    ev.effectAllowed = "copyMove";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
     var container;
    var id =  ev.dataTransfer.getData("text");
    var doing = document.getElementById("doin-area");
    //var cont = ;
    if(contain(doing, ev.target)){
       doing.appendChild(document.getElementById(id));
    }
   doing.style.border = "none";

}
function contain(parent, child) {
    if(child == null){ return false}
        if(parent == child) return true;
        return contain(parent, child.parentNode);
}


function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
