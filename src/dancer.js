// Creates and returns a new Dancer object that can step
// use jQuery to create an HTML <span> tag
var Dancer = function(top, left, timeBetweenSteps) {
  var dancer = {};
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};

dancer.protoype.step = function() {
  // the basic Dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

dancer.protoype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
// now that we have defined the Dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
