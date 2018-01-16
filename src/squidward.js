var SquidWard = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.oldStep = Dancer.prototype.step();
  this.$node.prepend('<img id="squidWard" src="images/squidward.gif"/>');
};

SquidWard.prototype = Object.create(Dancer.prototype);
SquidWard.prototype.constructor = SquidWard;

SquidWard.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

var makeSquidWard = function(top, left, timeBetweenSteps){

  var squid = new SquidWard(top, left, timeBetweenSteps);
  window.dancers.push(squid);
  return squid;
};
