import capitalize from '../src/capitalize.js'

test(`Returns 'Fred' with parameters: 'FRED'`, () => {
  expect(capitalize('FRED')).toBe('Fred');
});

test(`Returns '' with parameters: ''`, () => {
  expect(capitalize('')).toBe('');
});

test(`Returns undefined with parameters: 'undefined'`, () => {
  expect(capitalize(undefined)).toBe('Undefined');
});

test(`Returns 'Foobarfoobar' with parameters: 'Foo Bar Foo Bar'`, () => {
  expect(capitalize('Foo Bar Foo Bar')).toBe('Foo bar foo bar');
});

test(`Returns 'Foobarfoobar' with parameters: 'FOO BAR FOO BAR'`, () => {
  expect(capitalize('FOO BAR FOO BAR')).toBe('Foo bar foo bar');
});

test(`Returns '  Foo Bar  ' with parameters: '  Foo Bar  '`, () => {
  expect(capitalize('  Foo Bar  ')).toBe('  foo bar  ');
});