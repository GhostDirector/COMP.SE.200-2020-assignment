import upperFirst from '../src/upperFirst.js'

test('returns a string with uppercase letter', () => {
  expect(upperFirst('test')).toEqual('Test');
  expect(upperFirst('TEST')).toEqual('TEST');
  expect(upperFirst('123')).toEqual('123');
});

test('returns an empty string for undefined parameters', () => {
  expect(upperFirst(null)).toEqual('');
  expect(upperFirst(undefined)).toEqual('');
});