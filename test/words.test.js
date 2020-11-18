import words from '../src/words.js'

test('returns words', () => {
  expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  expect(words('1,2,3')).toEqual(['1','2','3']);
});