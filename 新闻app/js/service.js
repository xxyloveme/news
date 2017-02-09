angular.module("Service",[])

.service("HomeData",["$http","$rootScope",function($http,$rootScope){
	return {
		"datalist":function(){
			$http(
				{
					method:"get",
					url:"js/data.json"
				}
			).then(function successCallback(data){
				console.log(data);
				$rootScope.$broadcast("dataList",data.data);
				
			},function errorCallback(error){
				console.log(error)
			})
		},
		
		"health":function(){
			$http({
				method:"get",
				url:"js/healthData.json"
			}).then(function successCallback(data){
//				console.log(data);
				$rootScope.$broadcast("healthData",data.data);
//				$rootScope.$broadcast("healthData",data.data);
			},function errorCallback(error){
				console.log(error)
			})
		},
		
		"detail":function(){
			$http({
				method:"get",
				url:"js/detail.json"
			}).then(function successCallback(data){
				console.log(data);
				$rootScope.$broadcast("detailData",data.data[0]);
			},function errorCallback(error){
				console.log(error)
			})
		},
	}
}])