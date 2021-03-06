const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addPaintCan = function (paintCan) {
  this.paintStock.push(paintCan);
};

Decorator.prototype.totalPaintLitres = function () {
  let total = 0;
  for (let paintCan of this.paintStock) {
    total += paintCan.litres;
  }
  return total;
};

Decorator.prototype.canPaintRoom = function (room) {
  if (this.totalPaintLitres() >= room.area) {
    return true;
  } else {
    return false;
  };
};

Decorator.prototype.paintRoom = function (room) {
  if (this.canPaintRoom(room)) {
    room.isPainted = true;
    let usedPaint = 0;
    let cansUsed = 0;
    for (let paintCan of this.paintStock){
      if (usedPaint < room.area){
        usedPaint += paintCan.litres
        cansUsed++
      }
    }
    this.paintStock = this.paintStock.splice(cansUsed);
    return cansUsed;
  } else {
    return "Not enough paint for this room"
  }

};

module.exports = Decorator;
