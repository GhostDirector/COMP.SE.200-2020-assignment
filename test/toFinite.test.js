import toFinite from '../src/toFinite.js'

test('returns a finite', () => {
  expect(toFinite(2)).toEqual(2);
  expect(toFinite('2')).toEqual(2);
  expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
  expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308);
});

test('returns 0 with undefined parameters', () => {
  expect(toFinite(undefined)).toEqual(0);
  expect(toFinite(null)).toEqual(0);
  expect(toFinite([])).toEqual(0);
  expect(toFinite([1,2])).toEqual(0);
})