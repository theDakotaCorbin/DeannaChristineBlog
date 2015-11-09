angular.module('deannaBlogApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
    
    
    
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: '../Views/homeView.html',
        controller: 'homeCtrl'
    })
    
    .state('about', {
        url: '/about',
        templateUrl: '../Views/aboutView.html',
        controller: 'aboutCtrl'
        
    })
    
     .state('blog', {
        url: '/blog',
        templateUrl: '../Views/blogView.html',
        controller: 'newBlogCtrl'
        
    })
    
     .state('fashion', {
        url: '/fashion',
        templateUrl: '../Views/fashionView.html',
        controller: 'fashionCtrl'
        
    })
    
     .state('makeup', {
        url: '/makeup',
        templateUrl: '../Views/makeupView.html',
        controller: 'makeupCtrl'
        
    })
    
     .state('contact', {
        url: '/contact',
        templateUrl: '../Views/contactView.html',
        controller: 'contactCtrl'
        
    })
      .state('admin', {
        url: '/admin',
        templateUrl: '../Views/adminView.html',
        controller: 'newBlogCtrl'
        
    })
    
  
 
    $urlRouterProvider.otherwise('/home');
    
    
});


app.controller('mainCtrl', function($scope, mainService) {
  mainService.getBlog().then(function(response) {
  $scope.persons = response.data
        console.log(response);
  })
  $scope.newBlog = function(blog) {
  mainService.newBlog(blog).then(function(response) {
    console.log(response);
       mainService.getBlog().then(function(response) {
  $scope.blogs = response.data
        console.log(response);
  })
  }) 
  }
  
  
  $scope.deleteBlog = function(blog) {
    mainService.deleteBlog(blog).then(function(response){
        console.log(response);
             mainService.getBlog().then(function(response) {
  $scope.blogs = response.data
        console.log(response);
  })
    });
  }
  
  
})
app.service('mainService', function($http) {
    this.getBlog = function () {
        return $http.get('/api/Blogs')
    }
    this.newBlog = function (newBlog) {
        return $http.post('/api/newBlog', newBlog)
    }
    this.deleteBlog = function (deleteBlog) {
        return $http({
            method: 'DELETE',
            url: '/api/delete/' + deleteBlog
        }).then(function(resp){
            return resp;
        });
        
    };
    
    
});

























