'use strict';

var u256 = require('../lib/u256.js');
var expect = require("chai").expect;

describe("u256 Object", function() {
  describe("creation", function() {
    it("should create a u64", function() {
      var _u256 = new u256();
      expect(_u256).to.be.instanceof(u256);
    });
    it("string", function() {
      expect(new u256("123").u32).to.deep.equal([123,0,0,0,0,0,0,0]);
    });
    it("empty string", function() {
      expect(new u256("").u32).to.deep.equal([0,0,0,0,0,0,0,0]);
    });
    it("long string", function() {
      expect(new u256("").u32).to.deep.equal([0,0,0,0,0,0,0,0]);
    });
  });
  describe('arithmetics', function(){
    it('should addOne',function(){
      expect(new u256().addOne().u32).to.deep.equal([1,0,0,0,0,0,0,0])
    });
    it('should neg',function(){
      expect(new u256().neg().u32).to.deep.equal([-1,-1,-1,-1,-1,-1,-1,-1])
    });
    it('should subtract', function(){
      var first = new u256([10,9,8,7,6,5,4,3]);
      var second = new u256([7,6,5,4,3,2,1,0]);
      expect(first.subtract(second).u32).to.deep.equal([3,3,3,3,3,3,3,3])
    })
    it('multiplyWithInteger', function(){
      expect(new u256([10,9,8,7,6,5,4,3]).multiplyWithInteger(10).u32).to.deep.equal([100,90,80,70,60,50,40,30]);
    })
  });
  describe('misc',function(){
  
  })
});
