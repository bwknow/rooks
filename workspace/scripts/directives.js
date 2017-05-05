"use strict";

myapp.directive('playsong', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
        var elementid = $(element).attr('id');
        var elementsrc = $(element).attr('src');
        var elementtitle = $(element).attr('title');
        var audioElement = document.getElementById('audio-player');
        
        audioElement.src = elementsrc;
        audioElement.play();
  
        $('span.btn-play, .song, .song-title, .song-title span').removeClass('active');
       
        $("#"+elementid).parent().parent().addClass('active');
        $(".aside #"+elementid).addClass('active');
        $("#band-photo").css('opacity','0');
        $("#player-control,#song-title").fadeIn('slow');
        $("#aside").css('margin-top','3px');
        $('#song-title-container').html("<i>[now playing] </i><b>"+elementtitle+"</b>");
       //console.log('now playing...');
    };
    element.bind('click', Callback);
  }
});


myapp.directive('pausesong', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
        var elementid = $(element).attr('id');
        var elementsrc = $(element).attr('src');
        var audioElement = document.getElementById('audio-player');
        $('.song-title').removeClass('active');
        $('.btn-play').removeClass('active');
        audioElement.src = elementsrc;
        audioElement.pause();
        console.log('pause play...');
    };
    element.bind('click', Callback);
  }
});



myapp.directive('lyrics', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
    var elementid = $(element).attr('id');
   
    $("#band-photo-container").fadeOut(0).css('padding-top','0').fadeIn('slow')
    .load("./views/lyrics.html #"+elementid, function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "success")
        $('.lineitem p ').html(' ').css('height','0');
        
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
        
        console.log('show lyrics');
    }
    element.bind('click', Callback);
  }
});


myapp.directive('reset', function() {
  return function(scope, element, attrs) {
      var Callback = function() {
        var audioElement = document.getElementById('audio-player');
        $("#player-control,#song-title,#song-title-container").fadeOut('slow');
        audioElement.pause();
        
      }
      element.bind('click', Callback);
    }
});



