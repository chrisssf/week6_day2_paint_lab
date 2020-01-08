const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint.js')
const Room = require('../room.js')



describe('Decorator', function() {

let decorator;
let paintCan;
let room;

  beforeEach( function() {
    decorator = new Decorator();
    paintCan = new PaintCan(10);
    paintCan2 = new PaintCan(5);
    paintCan3 = new PaintCan(2);
    room = new Room(15);

  });
  it('should start with an empty paint stock', function() {
    const actual = decorator.paintStock;
    assert.deepStrictEqual( actual, [] );
  });
  it('should be able to add a can of paint', function() {
    decorator.addPaintCan(paintCan);
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 1);
  });
  it('should be able to calculate total litres of paint in stock', function(){
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan2);
    const actual = decorator.totalPaintLitres();
    assert.strictEqual(actual, 15);
  });
  it('should calculate if has enough paint to paint a room (true)', function(){
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan2);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true);
  });
  it('should calculate if has enough paint to paint a room (false)', function(){
    decorator.addPaintCan(paintCan);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false);
  });
  it('should paint a room', function(){
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan2);
    decorator.paintRoom(room);
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  })
  it('should not be able to paint a room', function(){
    decorator.addPaintCan(paintCan);
    const actual = decorator.paintRoom(room);
    assert.strictEqual(actual, "Not enough paint for this room");
  })
  it('should return the number of cans used if room has been painted', function(){
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan3);
    const actual = decorator.paintRoom(room);
    assert.strictEqual(actual, 5)
  });
  it('should delete cans after use', function(){
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan3);
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan2);
    decorator.addPaintCan(paintCan3);
    decorator.paintRoom(room);
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [paintCan2, paintCan3])
  })
});
