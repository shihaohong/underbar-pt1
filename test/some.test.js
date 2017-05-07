const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any element is not a number', () => {
    const arr = [2, 4, 6, 'Not a number :)'];
    expect(_.some(arr, value => isNaN(arr))).toBe(true);
  });

  it('returns false if any element is a number', () => {
    const arr = ['hi', 'my', 'name', 'is', 5];
    expect(_.some(arr, value => !isNaN(arr))).toBe(false);
  });
});