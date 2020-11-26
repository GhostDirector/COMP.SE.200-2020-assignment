import divide from '../src/divide.js'

test(`Returns 1.5 with parameters: 6, 4`, () => {
    expect(divide(6, 4)).toEqual(1.5);
});

test(`Returns 1 with parameters: 4, 4`, () => {
    expect(divide(4, 4)).toEqual(1);
});

test(`Returns 3 with parameters: 9, 3`, () => {
    expect(divide(9, 3)).toEqual(3);
});

test(`Returns 0.25 with parameters: 2, 8`, () => {
    expect(divide(2, 8)).toEqual(0.25);
});

test(`Returns 2 with parameters: 3, 1.5`, () => {
    expect(divide(3, 1.5)).toEqual(2);
});

test(`Returns Infinity with parameters: 3, 0`, () => {
    expect(divide(3, 0)).toEqual(Infinity);
});

test(`Returns -Infinity with parameters: 3, -0`, () => {
    expect(divide(3, -0)).toEqual(-Infinity);
});