import {isNum, formatTime} from '../src/index';
import chai from 'chai';
const {expect, to, equal, be} = chai;

let words = [
  `<small>aaa</small> bbb <b>ccc</b>`
];

// console.log(/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test('<small>aaa</small>'));
// console.log(/<([a-z]+)>/.test('<b>'));

const regSmall = /<small\b[^<>]*>.*<\/small>/g;
const regB = /<b\b[^<>]*>.*<\/b>/g;
const regText = /(<\/small\b[^<>]*>.*<small>)|(<\/small\b[^<>]*>.*<b>)|(<\/b\b[^<>]*>.*<b>)|(<\/b\b[^<>]*>.*<small>)/g;
const braces = words[0];

const smalls = braces.match(regSmall);
const bs = braces.match(regB);
const texts = braces.match(regText);

let stack = [];


smalls.map((item, i) => {
  const index = brachs.indexOf(item);
  stack[index] = item;
});

bs.map((item, i) => {
  const index = brachs.indexOf(item);
  stack[index] = item;
});

texts.map((item, i) => {
  const index = brachs.indexOf(item);
  stack[index] = item;
});

stack = notempty(stack);

stack.map((item, i) => {
  
});

function notempty(arr) {
  const r = [];
  arr.map((value,i) => {
    if(value !== undefined) {
      r.push(value)
    }
    
  });
  return r;
}

describe('index.js', function(){
  it('isNum() should work fine', function(){
    expect(isNum(1)).to.be.true;
    expect(isNum('1')).to.equal(false);
  });

  it('formatTime() should work fine', function() {
    expect(formatTime("2018-12-4 00:00:00")).to.equal("00:00");
    expect(formatTime("2018-12-4 01:00:00")).to.equal("01:00");
    expect(formatTime("2018-12-4 08:00:00")).to.equal("08:00");
    expect(formatTime("2018-12-4 12:00:00")).to.equal("12:00");
    expect(formatTime("2018-12-4 18:00:00")).to.equal("18:00");
    expect(formatTime("2018-12-4 23:00:00")).to.equal("23:00");
    expect(formatTime("2018-12-5 00:00:00")).to.equal("00:00");
  });
});
