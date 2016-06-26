
myapp.controller('MainCtrl', ['$scope', '$http', 'designService','$rootScope', function($scope, $http, designService,$rootScope) {
    var self = this;

    designService.getMembers().then(function(data) {
        $scope.members = data.data;
    });

    designService.getSongs().then(function(data) {
        $scope.songs = data.data;
    });

	$scope.songFilter = function (item) { 
	    return item.meta.active === 'true' || item === ''; 
	};

	$scope.formData = {};
	  $scope.processForm = function() {
	    alert('valid form!')
	    $http({
	      method  : 'POST',
	      url     : 'process.php',
	      data    : $scope.formData,
	      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	    });
	}

}]);



