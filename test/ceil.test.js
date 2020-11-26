import ceil from '../src/ceil.js'

test(`Returns 5 with parameters: 4.006`, () => {
    expect(ceil(4.006)).toEqual(5);
});

test(`Returns 5 with parameters: 4.006, undefined`, () => {
    expect(ceil(4.006, undefined)).toEqual(5);
});

test(`Returns NaN with parameters: undefined, undefined`, () => {
    expect(ceil(undefined, undefined)).toBeNaN();
});

test(`Returns NaN with parameters: undefined, 2`, () => {
    expect(ceil(undefined, 2)).toBeNaN();
});

test(`Returns 6.01 with parameters: 6.004, 2`, () => {
    expect(ceil(6.004, 2)).toEqual(6.01);
});

test(`Returns 6.1 with parameters: 6.004, 1`, () => {
    expect(ceil(6.004, 1)).toEqual(6.1);
});

test(`Returns 6.0001 with parameters: 6.000002, 4`, () => {
    expect(ceil(6.000002, 4)).toEqual(6.0001);
});

test(`Returns 6100 with parameters: 6040, -2`, () => {
    expect(ceil(6040, -2)).toEqual(6100);
});

test(`Returns 4 with parameters: 4`, () => {
    expect(ceil(4)).toEqual(4);
});

test(`Returns -1 with parameters: -1.5`, () => {
    expect(ceil(-1.5)).toEqual(-1);
});

test(`Returns -6.04 with parameters: -6.044, 2`, () => {
    expect(ceil(-6.044, 2)).toEqual(-6.04);
});

test(`Returns 6.000 with parameters: 6.000`, () => {
    expect(ceil(6.000)).toEqual(6.000);
});

test(`Returns 6.00 with parameters: 6.000, 2`, () => {
    expect(ceil(6.000, 2)).toEqual(6.00);
});