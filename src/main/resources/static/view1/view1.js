'use strict';

angular.module('myApp.view1', ['ngRoute'])

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