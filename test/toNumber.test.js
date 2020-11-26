import toNumber from '../src/toNumber.js'

test('returns a number', () => {
  expect(toNumber(2)).toEqual(2);
  expect(toNumber('2')).toEqual(2);
  expect(toNumber(Infinity)).toEqual(Infinity);
  expect(toNumber(null)).toEqual(0);
});

test('returns a number for hexadecimal parameter', () => {
  expect(toNumber('0x32')).toEqual(50);
});

test('returns a number for octal parameter', () => {
  expect(toNumber('0o24')).toEqual(20);
});

test('returns a number for binary parameter', () => {
  expect(toNumber('0b1100')).toEqual(12);
});

test('returns NaN for undefined parameter', () => {
  expect(toNumber(undefined)).toEqual(NaN);
  expect(toNumber('hello')).toEqual(NaN);
});

