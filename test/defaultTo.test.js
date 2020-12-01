import defaultTo from '../src/defaultTo.js'

test(`Returns 1 with parameters: 1, 10`, () => {
    expect(defaultTo(1, 10)).toEqual(1);
});

test(`Returns 10 with parameters: undefined, 10`, () => {
    expect(defaultTo(undefined, 10)).toEqual(10);
});

test(`Returns 10 with parameters: null, 10`, () => {
    expect(defaultTo(null, 10)).toEqual(10);
});

test(`Returns 10 with parameters: "hello", 10`, () => {
    expect(defaultTo("hello", 10)).toEqual(10);
});

test(`Returns 1.5 with parameters: 1.5, 10`, () => {
    expect(defaultTo(1.5, 10)).toEqual(1.5);
});

test(`Returns 2 with parameters: 2, 15`, () => {
    expect(defaultTo(2, 15)).toEqual(2);
});

test(`Returns 3 with parameters: 3, 20`, () => {
    expect(defaultTo(3, 20)).toEqual(3);
});

test(`Returns null with parameters: "hello", null`, () => {
    expect(defaultTo("hello", null)).toBeNull();
});

test(`Returns null with parameters: null, null`, () => {
    expect(defaultTo(null, null)).toBeNull();
});

test(`Returns 2 with parameters: 2, undefined`, () => {
    expect(defaultTo(2, undefined)).toEqual(2);
});