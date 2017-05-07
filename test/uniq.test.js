const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of people', () => {
    const people = {
      'person1': 'Shi-Hao',
      'person2': 'Ryan',
      'person3': 'Steve',
      'person4': 'Ryan',
      'person5': 'Benjamin',
      'person6': 'Steve'
    }

    expect(_.uniq(people)).toEqual(['Shi-Hao', 'Ryan', 'Steve', 'Benjamin']);
  });
});