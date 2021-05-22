$(document).ready(function(){
var change = $('.site-blocks-cover');

var backgrounds = new Array(
    'url(images/hero_3.jpg)'
  , 'url(images/hero_44.jpg)'
  , 'url(images/hero_22.jpg)'
  , 'url(images/hero_55.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    change.css('background-image', backgrounds[current]);
}  
                    
setInterval(nextBackground, 5000);

change.css('background-image', backgrounds[0]);
});