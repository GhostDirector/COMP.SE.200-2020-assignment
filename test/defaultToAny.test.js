import defaultToAny from '../src/defaultToAny.js'

test(`Returns 1 with parameters: 1, 10, 20`, () => {
    expect(defaultToAny(1, 10, 20)).toEqual(1);
});

test(`Returns 10 with parameters: undefined, 10, 20`, () => {
    expect(defaultToAny(undefined, 10, 20)).toEqual(10);
});

test(`Returns 20 with parameters: undefined, null, 20`, () => {
    expect(defaultToAny(undefined, null, 20)).toEqual(20);
});

test(`Returns NaN with parameters: undefined, null, NaN`, () => {
    expect(defaultToAny(undefined, null, NaN)).toEqual(NaN);
});

test(`Returns 5 with parameters: undefined, null, null, 5`, () => {
    expect(defaultToAny(undefined, null, null, 5)).toEqual(5);
});
test(`Returns 5 with parameters: undefined, undefined, undefined, 5`, () => {
    expect(defaultToAny(undefined, undefined, undefined, 5)).toEqual(5);
});

test(`Returns 5 with parameters: undefined, null, NaN, 5`, () => {
    expect(defaultToAny(undefined, null, NaN, 5)).toEqual(5);
});