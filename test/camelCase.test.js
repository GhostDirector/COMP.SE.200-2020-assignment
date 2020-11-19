import camelCase from '../src/camelCase.js'

test(`Returns 'fooBar' with parameters: 'Foo Bar' || '--foo-bar--' || '__FOO_BAR__'`, () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
});

test(`Returns 'fooBar' with parameters: '--foo<new line>bar--'`, () => {
    expect(camelCase('--foo\nbar--')).toBe('fooBar');
});

test(`Returns 'fooBar' with parameters: '  Foo Bar  '`, () => {
    expect(camelCase('  Foo Bar  ')).toBe('fooBar');
});

test(`Returns 'fooBarFooBar' with parameters: 'Foo Bar Foo Bar'`, () => {
    expect(camelCase('Foo Bar Foo Bar')).toBe('fooBarFooBar');
});

test(`Returns '' with parameters: ''`, () => {
    expect(camelCase('')).toBe('');
});

test(`Returns undefined with parameters: undefined`, () => {
    expect(camelCase(undefined)).toBe(undefined);
});