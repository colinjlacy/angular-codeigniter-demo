/**
 * Created by colinjlacy on 9/2/14.
 */
angular.module("ng-ci")
	.controller("ciCtrl", function($scope, ciSrvc) {

		// set a default
		$scope.word = "Nothing yet, you monster.";
		$scope.default = true;

		// define the function that gets the random word from the database
		$scope.getWord = function() {
			ciSrvc.getWord().then(function(data) {
				$scope.word = data;
				$scope.default = false;
			});
		};
	});
