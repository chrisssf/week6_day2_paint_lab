const PaintCan = function ( litres ) {
  this.litres = litres;
};

PaintCan.prototype.checkIfEmpty = function() {
  if (this.litres === 0) {
    return true
  }
  else {
    return false
  }
};

PaintCan.prototype.emptySelf = function () {
  this.litres = 0
  };

module.exports = PaintCan;
