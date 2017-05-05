
"use strict";

(function () {

$('ul.navbar-nav a').on('click',function(){
    $('.nav li a').removeClass('active');
    $(this).addClass('active');
});

    
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        console.log('in mobile');
        $('.navbar-nav li a').on('click', function(){
            
            $("body").scrollTop(10000);

        });
    }



$(document).keyup(function(e) {
    var code = e.keyCode || e.which;
     if (code == 27) { 
        var audioElement = document.getElementById('audio-player');
        $('.song-title').removeClass('active');
        $('.btn-play').removeClass('active');
        
        audioElement.pause();

       // audioElement.style.display = (audioElement.style.display != 'none' ? 'none' : '' );
 
    }
});

/*
var music = document.getElementById('audioplayer');
  
function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
}
function setVolume(volume) {
   music.volume = volume;
}
*/

})(window);










