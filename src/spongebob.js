var SpongeBob = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.oldStep = Dancer.prototype.step();
  this.$node.prepend('<img id="spongeBob" src="images/spongebob.gif"/>');
};

SpongeBob.prototype = Object.create(Dancer.prototype);
SpongeBob.prototype.constructor = SpongeBob;

SpongeBob.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

var makeSpongeBob = function(top, left, timeBetweenSteps){

  var sponge = new SpongeBob(top, left, timeBetweenSteps);
  window.dancers.push(sponge);
  return sponge;
};
