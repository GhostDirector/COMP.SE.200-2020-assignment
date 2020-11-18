import isTypedArray from '../src/isTypedArray.js'

test('returns true if parameter is a typed array', () => {
  const typedArray = new Uint8Array([21,31]);
  expect(isTypedArray(typedArray)).toBe(true);

  const uint8 = new Uint8Array(2);
  expect(isTypedArray(uint8)).toBe(true);
});

test('returns false if parameter is not a typed array', () => {
  expect(isTypedArray([1,2])).toBe(false);
  expect(isTypedArray(null)).toBe(false);
  expect(isTypedArray(undefined)).toBe(false);
})