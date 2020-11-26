import toInteger from '../src/toInteger.js'

test('returns an integer value', () => {
  expect(toInteger(3.2)).toEqual(3);
  expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308);
  expect(toInteger('3.2')).toEqual(3);
  expect(toInteger(null)).toEqual(0);
  expect(toInteger(undefined)).toEqual(0);
});