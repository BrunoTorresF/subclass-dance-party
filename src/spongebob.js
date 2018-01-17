var SpongeBob = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

this.$node.addClass('spongbob').prepend("<img src='spongebob.gif' height=200px width=200px/>");
};

SpongeBob.prototype = Object.create(Dancer.prototype);
SpongeBob.prototype.constructor = SpongeBob;

SpongeBob.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
