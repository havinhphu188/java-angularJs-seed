'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .controller('View1Ctrl', function ($scope, $http) {
    $scope.onFormSubmit = function () {
      $http.get('https://api.map.baidu.com/place/v2/suggestion?query=Tiananmen&region=%E5%8C%97%E4%BA%AC&output=json&ak=bdmgzuhlBu9mOxg8KTmhbBERbLOTKKHO')
        .then(function (data) {
          alert('success');
          console.log(data);
        }, function (data) {
          console.log(data);
        });
    };
    
    $scope.onFormSubmitAjax = function () {
    	$.ajax({ 
			type: "GET",
			url: "https://api.map.baidu.com/place/v2/suggestion?query=Tiananmen&region=%E5%8C%97%E4%BA%AC&output=json&ak=bdmgzuhlBu9mOxg8KTmhbBERbLOTKKHO",
			success: function(data){        
				alert('success');
		        console.log(data);
			},
			error: function(data){
				console.log(data);
			}
		});
      };

  });