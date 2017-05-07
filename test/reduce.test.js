const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a multiple, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc * num, 2);
    expect(result).toEqual(240);
  });

  it('reduces an array of numbers to a multiple, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc * num);
    expect(result).toEqual(120);
  });

  it('reduces an array of strings into one concatenated string, *without* an explicit initial value for the accumulator', () => {
    const strings = ['hello', 'its', 'me', 'Mario'];
    const result = _.reduce(strings, (acc, strings) => acc + ' ' + strings);
    expect(result).toEqual('hello its me Mario');
  });

});