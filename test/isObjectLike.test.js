import isObjectLike from '../src/isObjectLike.js'

test('returns true if parameter is object-like', () => {
  expect(isObjectLike({})).toBe(true);
  expect(isObjectLike([1,2])).toBe(true);
});

test('returns false if parameter is not object-like', () => {
  expect(isObjectLike(Function)).toBe(false);
  expect(isObjectLike(null)).toBe(false);
  expect(isObjectLike(undefined)).toBe(false);
  expect(isObjectLike(1)).toBe(false);
  expect(isObjectLike('Text')).toBe(false);
})