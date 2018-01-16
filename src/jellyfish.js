var JellyFish = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.oldStep = Dancer.prototype.step();
  this.$node.prepend('<img id="jellyFish" src="images/jellyfish.gif"/>');
};

JellyFish.prototype = Object.create(Dancer.prototype);
JellyFish.prototype.constructor = JellyFish;

JellyFish.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

var makeJellyFish = function(top, left, timeBetweenSteps){

  var jelly = new JellyFish(top, left, timeBetweenSteps);
  window.dancers.push(jelly);
  return jelly;
};
