import keys from '../src/keys.js'

test('returns keys', () => {
  const object = {
    'a' : 1,
    'b' : 2
  }

  expect(keys(object)).toEqual(['a', 'b']);
  expect(keys('ok')).toEqual(['0', '1'])
});