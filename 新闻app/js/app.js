angular.module("myApp",["ionic","controllers"])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
	//设置安卓机下面的tab选项卡，一直在下面
	$ionicConfigProvider.platform.android.tabs.position("bottom");
	$ionicConfigProvider.tabs.style('standard');

	//设置在安卓机下，头部的导航条标题一直居中
	$ionicConfigProvider.navBar.alignTitle('center');
	
	$stateProvider
	
	.state("tab",{
		url:"/tab",
		abstract:true,
		templateUrl:"template/tab.html"
	})
	
	.state("tab.home",{
		url:"/home",
		views:{
			"home-tab":{
				templateUrl:"template/home.html",
				controller:"homeCtrl"
			}
		}
	})
	
	.state("tab.health",{
		url:"/health",
		views:{
			"health-tab":{
				templateUrl:"template/health.html",
				controller:"healthCtrl"
			}
		}
	})
	
	.state("tab.find",{
		url:"/find",
		views:{
			"find-tab":{
				templateUrl:"template/find.html",
				controller:"findCtrl"
			}
		}
	})
	
	.state("detail",{
		url:"/detail",
		templateUrl:"template/detail.html",
		controller:"detailCtrl"
	})
	
	.state("tab.personal",{
		url:"/personal",
		views:{
			"personal-tab":{
				templateUrl:"template/personal.html",
				controller:"personalCtrl"
			}
		}
	})
	
	$urlRouterProvider.otherwise("tab/home");
})