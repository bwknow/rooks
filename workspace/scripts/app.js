  var myapp = angular.module('myapp', ["ui.router"])

      .config(function($stateProvider,$urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/band');
        $stateProvider
        
            .state('home', {
                  url: "/home",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      }
                  }
              })
              .state('about', {
                  url: "/about",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                                          
                      "viewB@": {
                          templateUrl: "views/intro.html"
                      },

                      "viewD@": {
                          templateUrl: "views/aboutus.html"
                      }

                  }
              })
              .state('band', {
                  url: "/band",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                                          
                     

                      "viewD@": {
                          templateUrl: "views/aboutus.html"
                      }

                  }
              })
              .state('music', {
                  url: "/music",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                                          
                      

                      "viewD@": {
                          templateUrl: "views/songs.html"
                      }
                  }
              })
              .state('brian', {
                  url: "/brian",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                      "viewB@": {
                          templateUrl: "views/intro.html"
                      },
                      "viewD@": {
                          templateUrl: "views/songs-brian.html"
                      }
                  }
              })
              .state('bob', {
                  url: "/bob",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                                          
                      "viewB@": {
                          templateUrl: "views/intro.html"
                      },

                      "viewD@": {
                          templateUrl: "views/songs-bob.html"
                      }
                  }
              })
              .state('music-all', {
                  url: "/music-all",
                  views: {
                      "viewA@": {
                          templateUrl: "views/group-photo.html"
                      },
                                          
                      "viewB@": {
                          templateUrl: "views/intro.html"
                      },

                      "viewD@": {
                          templateUrl: "views/songs-all.html"
                      }
                  }
              })

      })