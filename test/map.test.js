import map from '../src/map.js'

test('returns an array of values', () => {
  const square = (n) => {
    return n * n
  }
  expect(map([4, 8], square)).toEqual([16, 64]);
});