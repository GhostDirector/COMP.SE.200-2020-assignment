import isObject from '../src/isObject.js'

test('returns true if parameter is a valid object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([1,2])).toBe(true);
  expect(isObject(Function)).toBe(true);
});

test('returns false if parameter is not a object', () => {
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject('Text')).toBe(false);
})