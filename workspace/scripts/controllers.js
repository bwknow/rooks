myapp.controller('MainCtrl', ['$scope', '$http', 'designService', '$rootScope', function($scope, $http, designService, $rootScope) {
	var self = this;

	designService.getMembers().then(function(data) {
		$scope.members = data.data;
	});

	designService.getSongs().then(function(data) {
		$scope.songs = data.data;
	});

	$scope.songFilter = function(item) {
		return item.meta.active === 'true' || item === '';
	};

	$scope.brianFilter = function(item) {
		return item.vocals === 'brian' && item.meta.active === 'true' || item === '';
	};
	$scope.bobFilter = function(item) {
		return item.vocals === 'bob'  && item.meta.active === 'true' || item === '';
	};
	$scope.singerFilter = function(item) {
		return item.vocals === 'bob' || item.vocals === 'brian';
	};


}]);