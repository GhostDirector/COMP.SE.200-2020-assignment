import toFinite from '../src/toFinite.js'

test('returns a finite', () => {
  expect(toFinite(2)).toEqual(2);
  expect(toFinite('2')).toEqual(2);
  expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
  expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308);
});