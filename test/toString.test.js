import toString from '../src/toString.js'

test('returns a string', () => {
  expect(toString(123)).toEqual('123');
  expect(toString([1,2,3])).toEqual('1,2,3');
  expect(toString('test')).toEqual('test');

  // ???
  expect(toString(null)).toEqual('null');
  expect(toString(undefined)).toEqual('undefined');
});