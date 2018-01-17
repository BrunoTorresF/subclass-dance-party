var PatrickStar = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('patrick').prepend("<img src='patrick.gif' height=200px width=200px/>");;
};

PatrickStar.prototype = Object.create(Dancer.prototype);
PatrickStar.prototype.constructor = PatrickStar;

PatrickStar.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
