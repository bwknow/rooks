      var myapp = angular.module('myapp', ["ui.router"])
        .config(function($stateProvider) {
         
            $stateProvider
                .state('index', {
                    url: "",
                     views: {
                        "viewA@": {
                            templateUrl: "views/group-photo.html"
                        },
                        "viewB@": {
                            templateUrl: "views/about.html"
                        },
                        "viewC@": {
                            templateUrl: "views/aside.html"
                        },
                        "viewD@": {
                            templateUrl: "views/songs.html"
                        }
      
                    }
                })
                .state('route1', {
                    url: "/route1",
                     views: {
                        "viewA": {
                            templateUrl: "views/emailform.html"
                        },
                        "viewB": {
                            templateUrl: "views/about.html"
                        },
                        "viewC": {
                            templateUrl: "views/aside.html"
                        },
                        "viewD": {
                            templateUrl: "views/members.html"
                        }
                    }
                })
                .state('route2', {
                    url: "/route2",
                      views: {
                        "viewA": {
                            templateUrl: "views/group-photo.html"
                        },
                        "viewB": {
                            templateUrl: "views/about.html"
                        },
                        "viewC": {
                            templateUrl: "views/aside.html"
                        },
                        "viewD": {
                            templateUrl: "views/songs.html"
                        }
                    }
                })
                 .state('route3', {
                    url: "/route3",
                      views: {
                        "viewA": {
                           templateUrl: "views/group-photo.html"
                        },
                        "viewB": {
                            templateUrl: "views/about.html"
                        },
                        "viewC": {
                            templateUrl: "views/aside.html"
                        },
                        "viewD": {
                            templateUrl: "views/members.html"
                        }
                    }
                })

        })
