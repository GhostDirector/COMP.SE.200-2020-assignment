import isLength from '../src/isLength.js'

test('returns true if parameter is valid array-like length', () => {
  expect(isLength(1)).toBe(true);
  expect(isLength(0)).toBe(true);
  expect(isLength(9007199254740991)).toBe(true);
});

test('returns false if parameter is not valid array-like length', () => {
  expect(isLength(null)).toBe(false);
  expect(isLength(undefined)).toBe(false);
  expect(isLength('1')).toBe(false);
  expect(isLength(-1)).toBe(false);
  expect(isLength(90071992547409911)).toBe(false);
})