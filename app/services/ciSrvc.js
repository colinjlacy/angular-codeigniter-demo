/**
 * Created by colinjlacy on 9/2/14.
 */
angular.module("ng-ci")
	.service("ciSrvc", function($http, $q) {
		return {
			getWord: function() {
				var returnData = $q.defer();

				$http({
					url: 'server/index.php/angular/index/', // note that this could be shortened to just "server/"
					method: 'GET'
				})
					.success(function(data) {
						returnData.resolve(data);
						console.log(data);
					})
					.error(function(error) {
						console.log(error);
						returnData.reject();
					});
				// returns the promise of the API call - whether successful or not
				return returnData.promise;
			}
		}
	});
