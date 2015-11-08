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
        controller: 'blogCtrl'
        
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
    
  
 
    $urlRouterProvider.otherwise('/home');
    
    
});  

























