import words from '../src/words.js'

test('returns words', () => {
  expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  expect(words('1,2,3')).toEqual(['1','2','3']);
});

test('returns words with given pattern', () => {
  expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
});

test('returns words with undefined pattern', () => {
  expect(words('fred, barney', undefined)).toEqual(['fred', 'barney']);
});

test('returns an empty array for empty string', () => {
  expect(words('')).toEqual([]);
});
