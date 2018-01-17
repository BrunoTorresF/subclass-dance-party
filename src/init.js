
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  //var audio = $("#audio_play")[0];
  //$(".addDancerButton").on('click', function() {
  //    audio.play();
//  });​
  $('#audio_play').get(0).play();
  $('.lineUpButton').on('click', function(event) {
    $('.dancer').animate({left: '200px'});
  });
});
/*
body {
  background-color: #333;
  color: #333;
  font-family: 'Raleway', sans-serif;
  font-weight:400;
}
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var color = Math.floor(Math.random() * colors.length);
     $("html body").animate({
       backgroundColor: colors[color],
       color: colors[color]
     }, 1000);
     $(".button").animate({
       backgroundColor: colors[color]
     }, 1000);
   }
 });*/
