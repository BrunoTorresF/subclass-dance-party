var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.oldStep = Dancer.prototype.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  var blinky = new BlinkyDancer(top, left, timeBetweenSteps);
  window.dancers.push(blinky);
  return blinky;
};
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// call the old version of step at the beginning of any call to this new version of step
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
