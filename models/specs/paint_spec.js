const assert = require('assert');
const PaintCan = require('../paint.js')

describe('PaintCan', function() {

let paintCan;
let paintCan2;

  beforeEach( function() {
    paintCan = new PaintCan( 10 )
    paintCan2 = new PaintCan( 0 )
  });
  it('should have a number of litres', function () {
    const actual = paintCan.litres;
    assert.strictEqual( actual, 10 )
  });
  it('should be an empty can', function () {
    const actual = paintCan2.checkIfEmpty();
    assert.strictEqual( actual, true );
  });
  it('should not be an empty can', function () {
    const actual = paintCan.checkIfEmpty();
    assert.strictEqual( actual, false );
  });
  it('should empty itself', function() {
    paintCan.emptySelf()
    const actual = paintCan.litres;
    assert.strictEqual( actual, 0 );
  });
});
