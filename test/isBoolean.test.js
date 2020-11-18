import isBoolean from '../src/isBoolean.js'

test('returns true if parameter is boolean', () => {
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean(true)).toBe(true);
});

test('returns false if parameter is not boolean', () => {
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean(0)).toBe(false);
  expect(isBoolean('true')).toBe(false);
  expect(isBoolean('false')).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
})