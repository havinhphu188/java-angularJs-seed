'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .controller('View1Ctrl', function ($scope, $http) {
    $scope.onFormSubmit = function () {
      $http.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(function (data) {
          alert('success');
          console.log(data);
        }, function (data) {
          console.log(data);
        });
    };

  });