import isArrayLike from '../src/isArrayLike.js'

test(`Returns true with parameters: [1, 2, 3]`, () => {
    expect(isArrayLike([1, 2, 3])).toEqual(true);
});

test(`Returns true with parameters: document.body.children`, () => {
    expect(isArrayLike(document.body.children)).toEqual(true);
});

test(`Returns true with parameters: 'abc'`, () => {
    expect(isArrayLike('abc')).toEqual(true);
});

test(`Returns false with parameters: Function`, () => {
    expect(isArrayLike(Function)).toEqual(false);
});

test(`Returns false with parameters: {'key': 'value'}`, () => {
    expect(isArrayLike({'key': 'value'})).toEqual(false);
});

test(`Returns false with parameters: 1`, () => {
    expect(isArrayLike(1)).toEqual(false);
});

test(`Returns false with parameters: undefined`, () => {
    expect(isArrayLike(undefined)).toEqual(false);
});

test(`Returns true with parameters: 'parameter'`, () => {
    expect(isArrayLike('parameter')).toEqual(true);
});