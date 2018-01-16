var PatrickStar = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.oldStep = Dancer.prototype.step();
  this.$node.prepend('<img id="patrickStar" src="images/patrick.gif"/>');
};

PatrickStar.prototype = Object.create(Dancer.prototype);
PatrickStar.prototype.constructor = PatrickStar;

PatrickStar.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

var makePatrickStar = function(top, left, timeBetweenSteps){

  var patrick = new PatrickStar(top, left, timeBetweenSteps);
  window.dancers.push(patrick);
  return patrick;
};
