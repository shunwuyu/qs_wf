const { add } = require("../main");
const expect = require("chai").expect;

describe('两法相加等于和', () => {
  it('1加1应该等于2', () => {
    expect(add(1,1)).to.be.equal(2);
    expect(add(2,7)).to.be.equal(9);
  })
  it('非数字相加返回NaN', () => {
    expect(isNaN(add(1, undefined))).to.be.equal(true);
  })
})