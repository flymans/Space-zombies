//We need a flag to keep track to avoid repetition of animations before the
//first has finished
var canIclick = 0;

//this function is called to reload our gun
function reloadGun(e){
  //Let's check if we can allow this to occur
  if(canIclick==0 && $("#SZ0_2").css('opacity') == 1){
    //looks like we can so we better set our flag
    canIclick = 1;
    $("#SZ0_1").animateSprite("play","reload");
    //reset the current shots
    current_shots=0;
    //hide the reload button
    $("#SZ0_2").css({opacity:0});
  }
}
//place a maximum number of shots
var max_shots=5;
//keep track of current number of shots
var current_shots=0;
//this function is called to fire our gun
function fireGun(e) {
  //Let's check if we can allow this to occur
    if(canIclick==0 && gameEnded==0 && $("#SZ0_2").css('opacity') != 1){
      //looks like we can so we beter set our flag
      canIclick = 1;
      $("#SZ0_1").animateSprite("play", "fire");
      //increment our shots
      current_shots++;
      //check to see if we have reached the maximum
      if(current_shots>=max_shots){
        //show the reload button
        $("#SZ0_2").css({opacity:1});
      } //if
    }
}
//array to keep track of the zombie hits
var zombieHits_counter = [0,0,0,0,0,0];
//array for each zombies limit
var zombieHits_limits = [2,1,3,2,1,3];
//this function will keep track of the zombie hits and act accordingly
function zombieHit(whichOne){
  //increment the counter
  zombieHits_counter[whichOne]++;
  //check to see if this zombie has reached its limit
  if(zombieHits_counter[whichOne] >= zombieHits_limits[whichOne]){
    //reset this zombie
    SZ_resetZombie(whichOne+1,1);
  }
}
