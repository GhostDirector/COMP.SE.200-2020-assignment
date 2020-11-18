import isEmpty from '../src/isEmpty.js'

test('returns true if parameter is empty', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(1)).toBe(true);
  expect(isEmpty(true)).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

test('returns false if parameter is not empty', () => {
  expect(isEmpty('text')).toBe(false);
  expect(isEmpty({ 'a': 1 })).toBe(false);
  expect(isEmpty([1])).toBe(false);
})