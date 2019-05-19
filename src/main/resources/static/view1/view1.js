'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope, $http) {
    $scope.onFormSubmit = function () {
      $http.post('/api/v1/students', {
        studentName: $scope.studentName
      })
        .then(function (data) {
          alert('success');
          console.log(data);
        }, function (data) {
        });
    };

  });