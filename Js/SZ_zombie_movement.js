//let's create a zombie
function SZ_createZombie(whichOne){
  //create a new div to hold the zombie SS
  var div = document.createElement('div');
  //we need to hard code the CSS styles we want
  div.setAttribute('style', 'position:fixed; top:0; left:0;');
  //we want to position our zombie exactly at the tip of the planet
  var top_position = $('#SZ0_0').height()*0.435;
  //Xpos can be anywhere on our x axis
  var left_position = Math.floor(Math.random()*($('#SZ0_0').width())-(ratio*50))+
  (ratio*50);
  //let's position our zombie
  div.style.left = left_position+'px';
  div.style.top = top_position + 'px';
  //give it an id
  div.id = 'zombie' + whichOne;
  //finally let's add our zombie to the screen
  document.body.appendChild(div);
  //put this new zombie through our SS function
  setup_zombie_SS(whichOne);
  //put this new zombie through our animate function
  SZ_animateZombie(whichOne);
}

//let's animate our zombie toward us
function SZ_animateZombie(whichOne){
  //assign the speed for each of our zombies
  var timex = [13000,8000,16000,14000,10000,18000];
  //assign a user friendly name for our div
  var $zombiex = $("#zombie"+whichOne);
  //work out the amount the zombie has to come towards us
  var amty = ($(window).height()*0.7); // -($zombiex.height()*2); //topx);
  //each type of zombie will have their own walking style
  var SZ_ease = ['easeInSine','easeOutQuart','easeInOutQuad','easeInSine',
  'easeOutQuart','easeInOutQuad'];
  //finally we are ready to animate
    $zombiex.animate({
      //first bring our zombie slowly down the screen
      left: amty+ "px",},
      {
        easing:SZ_ease[whichOne-1],
        duration: timex[whichOne-1],
        step: function(now, fx){
          //at each step we can manipulate the scale of our zombie
          if (fx.prop == "left") {
            //work out the amount to scale
            var xx = (fx.pos)*16;
            //apply the scale
            $(this).css('transform','scale('+xx+')');
          }
        },
        complete: function() {
      }
    });
}
