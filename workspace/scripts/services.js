"use strict";

myapp.service("designService", function($http, $q) {
var self = this;

    self.getMembers = function() {
        return $http.get('data/members.json').then(function(data) {
            return data;
        });
    }

    self.getSongs = function() {
        return $http.get('data/songs.json').then(function(data) {
            return data;
        });
    }

})