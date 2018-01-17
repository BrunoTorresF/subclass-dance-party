var jellyFish = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jellyfish').prepend("<img src='jellyfish.gif' height=200px width=200px/>");
};

jellyFish.prototype = Object.create(Dancer.prototype);
jellyFish.prototype.constructor = jellyFish;

jellyFish.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
