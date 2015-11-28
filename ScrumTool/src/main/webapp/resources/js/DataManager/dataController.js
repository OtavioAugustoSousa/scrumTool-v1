(function(angular){
    'use strict';
    //EstruturaBase para um controller
    function dataController($scope){
        function render (tx, rs){
            var rows = rs.rows;
            for(var i=0; i< rows.length; i++){
                $scope.rows.push(rows.item(i));
                $scope.$apply();
            }
        }
        init();
        scrumTool.webdb.addItem([1, "Como", "Quero","Para","titulo", "tag", 1, 1,"estado"]);
        $scope.rows=[];
        scrumTool.webdb.getAllItems(render);
        console.log($scope.rows);


    }

    angular.module('app').controller('dataController', dataController);
})(window.angular);