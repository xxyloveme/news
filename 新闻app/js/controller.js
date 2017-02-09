angular.module("controllers",["Service"])

.controller("homeCtrl",["$scope","HomeData",function($scope,HomeData){
	HomeData.datalist();
	$scope.$on("dataList",function(event,data){
		$scope.dataList = data;
	})
}])

.controller("healthCtrl",["$scope",function($scope){
	
}])

.controller("findCtrl",["$scope","HomeData",function($scope,HomeData){
	HomeData.health();
//	$scope.healthList = [];
	$scope.$on("healthData",function(event,data){
		$scope.healthList = data;
		$scope.oturn = []
		for(var i=0;i<data.length;i++){
			$scope.oturn.push(data[i].ifActive);
		}
		$scope.dataList = $scope.healthList[0].data
	})
	$scope.getData = function(index){
		$scope.dataList = $scope.healthList[index].data;
		for(var i=0;i<$scope.oturn.length;i++){
			$scope.oturn[i] = false;
		}
		$scope.oturn[index] = true;
	}
}])

.controller("detailCtrl",["$scope","HomeData","$ionicPopup",function($scope,HomeData,$ionicPopup){
	HomeData.detail();
	$scope.$on("detailData",function(event,data){
		console.log(data);
		$scope.detailList = data;
	})
	$scope.isBiggest = false;
	$scope.isBig = false;
	$scope.isMiddle = false;
	$scope.isSmall = false;
	$scope.isRed = false;
	$scope.isGreen = false;
	$scope.isBlue = false;
	$scope.isPurple = false;
	$scope.radioList = [
			{
				text:"特大字号",
			},
			{
				text:"大字号",
			},
			{
				text:"中字号",
			},
			{
				text:"小字号",
			}
		];
	$scope.bgList = [
			{
				text:"红色",
			},
			{
				text:"绿色",
			},
			{
				text:"蓝色",
			},
			{
				text:"紫色",
			}
		];
	$scope.user={};
	$scope.user.choice='中字号';
	
	$scope.bg={};
	$scope.bg.choice='紫色';
	$scope.font = function(){
		var confirmPopup = $ionicPopup.confirm({
	     	title: '正文字体',
	     	okText:"确定",
	     	cancelText:"取消",
	     	scope: $scope,
	     	template:'<ion-list><ion-radio ng-model="user.choice" value="{{item.text}}" ng-repeat="item in radioList">{{item.text}}</ion-radio></ion-list>'
	   });
//		.item-radio input:checked <ion-radio ng-model
		
		confirmPopup.then(function(res) {
		    if(res) {
		       	if($scope.user.choice=="特大字号"){
		       		$scope.isBiggest=true;
		       		$scope.isBig = false;
					$scope.isMiddle = false;
					$scope.isSmall = false;
		       	}
		       	else if($scope.user.choice=="大字号"){
		       		$scope.isBiggest=false;
		       		$scope.isBig = true;
					$scope.isMiddle = false;
					$scope.isSmall = false;
		       	}
		       	else if($scope.user.choice=="中字号"){
		       		$scope.isBiggest=false;
		       		$scope.isBig = false;
					$scope.isMiddle = true;
					$scope.isSmall = false;
		       	}
		       	else if($scope.user.choice=="小字号"){
		       		$scope.isBiggest=false;
		       		$scope.isBig = false;
					$scope.isMiddle = false;
					$scope.isSmall = true;
		       	}
		       	else{
		       		$scope.isBiggest=false;
		       		$scope.isBig = false;
					$scope.isMiddle = false;
					$scope.isSmall = false;
		       	}
		    }else{
		    }
		});
	};
	
	$scope.bgColor = function(){
		var confirmPopup = $ionicPopup.confirm({
	     	title: '背景颜色',
	     	okText:"确定",
	     	cancelText:"取消",
	     	scope: $scope,
	     	template:'<ion-list><ion-radio ng-model="bg.choice" value="{{item.text}}" ng-repeat="item in bgList">{{item.text}}</ion-radio></ion-list>'
	  });
		confirmPopup.then(function(res) {
		    if(res) {
		       	if($scope.bg.choice=="红色"){
		       		$scope.isRed = true;
					$scope.isGreen = false;
					$scope.isBlue = false;
					$scope.isPurple = false;
		       	}
		       	else if($scope.bg.choice=="绿色"){
		       		$scope.isRed = false;
					$scope.isGreen = true;
					$scope.isBlue = false;
					$scope.isPurple = false;
		       	}
		       	else if($scope.bg.choice=="蓝色"){
		       		$scope.isRed = false;
					$scope.isGreen = false;
					$scope.isBlue = true;
					$scope.isPurple = false;
		       	}
		       	else if($scope.bg.choice=="紫色"){
		       		$scope.isRed = false;
					$scope.isGreen = false;
					$scope.isBlue = false;
					$scope.isPurple = true;
		       	}
		       	else{
		       		$scope.isRed = false;
					$scope.isGreen = false;
					$scope.isBlue = false;
					$scope.isPurple = false;
		       	}
		    }else{
		    }
		});
	}
	
	
}])
.controller("personalCtrl",["$scope",function($scope){
	
}])