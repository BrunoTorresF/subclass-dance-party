var SquidWard = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

 this.$node.addClass('squidward').prepend("<img src='squidward.gif' height=200px width=200px/>");
};

SquidWard.prototype = Object.create(Dancer.prototype);
SquidWard.prototype.constructor = SquidWard;

SquidWard.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
