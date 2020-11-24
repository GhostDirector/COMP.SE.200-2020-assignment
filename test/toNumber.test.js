import toNumber from '../src/toNumber.js'

test('returns a number', () => {
  expect(toNumber(2)).toEqual(2);
  expect(toNumber('2')).toEqual(2);
  expect(toNumber(Infinity)).toEqual(Infinity);
});