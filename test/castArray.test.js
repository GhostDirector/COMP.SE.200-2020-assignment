import castArray from '../src/castArray.js'

test(`Returns [1] with parameters: 1`, () => {
    expect(castArray(1)).toEqual([1]);
});

test(`Returns [{ 'a': 1 }] with parameters: { 'a': 1 }`, () => {
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
});

test(`Returns ['abc'] with parameters: 'abc'`, () => {
    expect(castArray('abc')).toEqual(['abc']);
});

test(`Returns [null] with parameters: null`, () => {
    expect(castArray(null)).toEqual([null]);
});

test(`Returns [undefined] with parameters: undefined`, () => {
    expect(castArray(undefined)).toEqual([undefined]);
});

test(`Returns [] without parameters`, () => {
    expect(castArray()).toEqual([]);
});

test(`Returns object equal to array with parameters: [1, 2, 3]`, () => {
    const array = [1, 2, 3]
    expect(castArray(array)).toStrictEqual(array);
});