import endsWith from '../src/endsWith.js'

test(`Returns true with parameters: 'abc', 'c'`, () => {
    expect(endsWith('abc', 'c')).toEqual(true);
});

test(`Returns false with parameters: 'abc', 'b'`, () => {
    expect(endsWith('abc', 'b')).toEqual(false);
});

test(`Returns true with parameters: 'abc', 'b', 2`, () => {
    expect(endsWith('abc', 'b', 2)).toEqual(true);
});

test(`Returns false with parameters: 'abc', 'a', 0`, () => {
    expect(endsWith('abc', 'a', 0)).toEqual(false);
});

test(`Returns false with parameters: 'abc', 'a', -1`, () => {
    expect(endsWith('abc', 'a', -1)).toEqual(false);
});

test(`Returns false with parameters: 'abc', 'c', 5`, () => {
    expect(endsWith('abc', 'c', 5)).toEqual(true);
});

test(`Returns true with parameters: 'hello', 'o'`, () => {
    expect(endsWith('hello', 'o')).toEqual(true);
});

test(`Returns true with parameters: 'hello', 'e', 2`, () => {
    expect(endsWith('hello', 'e', 2)).toEqual(true);
});

test(`Returns true with parameters: 'hello', 'lo'`, () => {
    expect(endsWith('hello', 'lo')).toEqual(true);
});

test(`Returns true with parameters: 'hello', 'hel', 3`, () => {
    expect(endsWith('hello', 'hel', 3)).toEqual(true);
});

test(`Returns true with parameters: 'hello', <every character in the word>`, () => {
    expect(endsWith('hello', 'h', 0)).toEqual(false);
    expect(endsWith('hello', 'h', 1)).toEqual(true);
    expect(endsWith('hello', 'e', 2)).toEqual(true);
    expect(endsWith('hello', 'l', 3)).toEqual(true);
    expect(endsWith('hello', 'l', 4)).toEqual(true);
    expect(endsWith('hello', 'o', 5)).toEqual(true);
    expect(endsWith('hello', 'o', 6)).toEqual(true);
});

test(`Returns false with parameters: undefined, 'o', 2`, () => {
    expect(endsWith(undefined, 'o', 2)).toEqual(false);
});

test(`Returns false with parameters: 'hello', undefined, 2`, () => {
    expect(endsWith('hello', undefined, 2)).toEqual(false);
});

test(`Returns true with parameters: 'hello', 'o', undefined`, () => {
    expect(endsWith('hello', 'o', undefined)).toEqual(true);
});