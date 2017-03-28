angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mapaDeSeguranA'
      2) Using $state.go programatically:
        $state.go('tabsController.mapaDeSeguranA');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab4/page2
      /page1/tab5/page2
      /page1/tab6/page2
      /page1/tab7/page2
  */
  .state('tabsController.mapaDeSeguranA', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/mapaDeSeguranA.html',
        controller: 'mapaDeSeguranACtrl'
      },
      'tab4': {
        templateUrl: 'templates/mapaDeSeguranA.html',
        controller: 'mapaDeSeguranACtrl'
      },
      'tab5': {
        templateUrl: 'templates/mapaDeSeguranA.html',
        controller: 'mapaDeSeguranACtrl'
      },
      'tab6': {
        templateUrl: 'templates/mapaDeSeguranA.html',
        controller: 'mapaDeSeguranACtrl'
      },
      'tab7': {
        templateUrl: 'templates/mapaDeSeguranA.html',
        controller: 'mapaDeSeguranACtrl'
      }
    }
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mapa'
      2) Using $state.go programatically:
        $state.go('tabsController.mapa');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab4/page6
      /page1/tab5/page6
      /page1/tab6/page6
      /page1/tab7/page6
      /page1/tab8/page6
  */
  .state('tabsController.mapa', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      },
      'tab4': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      },
      'tab5': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      },
      'tab6': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      },
      'tab7': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      },
      'tab8': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});