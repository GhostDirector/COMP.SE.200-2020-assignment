import isBuffer from '../src/isBuffer.js'

test('returns true if parameter is buffer', () => {
  const bufferWithOneValue = new Buffer(2)
  expect(isBuffer(bufferWithOneValue)).toBe(true);

  const bufferWithTwoValues = new Buffer(67, 3)
  expect(isBuffer(bufferWithTwoValues)).toBe(true);
  
  const bufferWithString = new Buffer('test')
  expect(isBuffer(bufferWithString)).toBe(true);
  
  const bufferWithArray = new Buffer([1,2,3])
  expect(isBuffer(bufferWithArray)).toBe(true);
});

test('returns false if parameter is not buffer', () => {
  expect(isBuffer(Function)).toBe(false);
  expect(isBuffer(null)).toBe(false);
  expect(isBuffer(undefined)).toBe(false);
  expect(isBuffer(1)).toBe(false);
  expect(isBuffer('Text')).toBe(false);
})