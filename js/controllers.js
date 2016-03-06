(function(){

	var app = angular.module('sheepApp', ['ngRoute']);

	app.config(['$routeProvider',
    	function($routeProvider) {
    		$routeProvider.
      			when('/portfolio', {
        			templateUrl: 'partials/portfolio.html',
        			controller: 'PortfolioController'
      		    }).
			    when('/contact', {
			        templateUrl: 'partials/contact.html',
			        controller: 'ContactController'
			      }).
          when('/about', {
              templateUrl: 'partials/about.html',
              controller: 'aboutController'
            }).
          when('/portfolio/:projectTitle', {
              templateUrl: 'partials/project.html',
              controller: 'projectController' 
            }).
			    otherwise({
			        redirectTo: '/portfolio'
			    });
  	}]);
 
 
	app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
  });

  app.controller('aboutController', ['$scope', '$http', function($scope, $http) {

      $scope.testFunc = function() {

         var titles = ['Genius', 'Lactose Intolerant', 'Blah Blah Blah', 'Really into The Wire', 'Djangophile', 'hippopotomonstrosesquipedaliophobic'];
         var rand = titles[Math.floor(Math.random() * titles.length)];
         var result = [rand];

          $('#aboutButton').fadeOut();
          $('#variable').airport(result);
      }; 
 
  }]);

  app.controller('PortfolioController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

    $scope.filters = { };

      $http.get('projects/projects.json').success(function(data) {
        $scope.projects = data;
      });

    //$scope.projectTitle = $routeParams.projectTitle;

  }]);

  app.controller('projectController', ['$scope', '$routeParams', '$http', 
    function($scope, $routeParams, $http) {

    $http.get('projects/' + $routeParams.projectTitle + '.json').success(function(data) {
      $scope.project = data;
    });


  }]);

})()