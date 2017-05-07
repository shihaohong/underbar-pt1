_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps through every string in the array and adds a \'-desu\' to the end of each string', () => {
    const arr = ['kawaii', 'sou', 'watashiwa shihao'];
    const mappedArr = _.map(arr, (el) => el + '-desu');
    expect(mappedArr).toEqual(['kawaii-desu', 'sou-desu', 'watashiwa shihao-desu']);
  });
});