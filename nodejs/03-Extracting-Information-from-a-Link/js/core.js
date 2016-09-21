var app=angular.module('status_app',[]);
app.controller('status_controller',function($scope,$http,$sce){
  
  $scope.embed = 0;
  $scope.add_status=function(){
	  
	$scope.embed = 1;
    var url=$scope.status_box;
    var request = $http({
        method: "post",
        url: "/get_meta",
        data: {
        data: url
        },
        headers: { 'Content-Type': 'application/json' }
    });

    /* Check whether the HTTP Request is successful or not. */
    request.success(function (data) {
		$scope.embed = 0;
        if(data.error) {
            $scope.response_data = $sce.trustAsHtml(data.link);
        } else {    
            $scope.response_data = $sce.trustAsHtml("<h3>"+data.title+"</h3>" + data.html);
        }
    });
    };
});