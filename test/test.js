import {isNum} from '../src/index';
import chai from 'chai';
const {expect, to, equal, be} = chai;

describe('index.js', function(){
  it('isNum() should work fine 88', function(){
    expect(isNum(1)).to.be.true
    ;
    expect(isNum('1')).to.equal(false);
  })
})