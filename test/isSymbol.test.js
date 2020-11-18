import isSymbol from '../src/isSymbol.js'

test('returns true if parameter is a symbol', () => {
  expect(isSymbol(Symbol.iterator)).toBe(true);
  expect(isSymbol(Symbol('foo'))).toBe(true);
});

test('returns false if parameter is not a symbol', () => {
  expect(isSymbol(Function)).toBe(false);
  expect(isSymbol(null)).toBe(false);
  expect(isSymbol(undefined)).toBe(false);
  expect(isSymbol(1)).toBe(false);
  expect(isSymbol('Text')).toBe(false);
})