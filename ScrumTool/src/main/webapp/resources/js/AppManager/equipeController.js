(function(angular) {
	'use strict';

	angular.module('app').controller('equipeController', equipeController);
	equipeController.$inject = [ '$scope', '$timeout', '$rootScope' ];

	function equipeController($scope, $timeout, $rootScope) {
		
		   $scope.allowDrop = function (ev) {
	            ev.preventDefault();
	            ev.currentTarget.style.border = "dashed";
	            ev.effectAllowed = "copyMove";
	        }

	        $scope.drag = function (ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }

	        $scope.drop = function (ev) {
	            ev.preventDefault();
	            var container;
	            var id = ev.dataTransfer.getData("text");
	            var productOwner = document.getElementById("productOwner");
	            var stakeholders = document.getElementById("stakeholders");
	            var done = document.getElementById("done-area");

	            if (contain(productOwner, ev.target)) {
	                productOwner.appendChild(document.getElementById(id));
	            }
	            //var cont = ;
	            if (contain(stakeholders, ev.target)) {
	                stakeholders.appendChild(document.getElementById(id));
	            }
	            if (contain(done, ev.target)) {
	                done.appendChild(document.getElementById(id));
	            }
	            productOwner.style.border = "none";
	            stakeholders.style.border = "none";
	            done.style.border = "none";

	        }
	        function contain(parent, child) {
	            if (child == null) {
	                return false
	            }
	            if (parent == child) return true;
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


	};
})(window.angular);
