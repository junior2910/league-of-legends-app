angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page2',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('page', {
      url: '/page3',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('partida', {
      url: '/page4',
      templateUrl: 'templates/partida.html',
      controller: 'partidaCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2');

});