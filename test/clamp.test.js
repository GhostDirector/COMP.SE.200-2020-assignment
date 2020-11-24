import clamp from '../src/clamp.js'

test(`Returns -5 with parameters: -10, -5, 5`, () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

test(`Returns 5 with parameters: 10, -5, 5`, () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

test(`Returns 2 with parameters: 10, -5, 5`, () => {
    expect(clamp(2, -5, 5)).toBe(2);
});

test(`Returns NaN with parameters: undefined, -5, 5`, () => {
    expect(clamp(undefined, -5, 5)).toBeNaN();
});

test(`Returns -100 with parameters: -100, undefined, 5`, () => {
    expect(clamp(-100, undefined, 5)).toBe(-100);
});

test(`Returns 100 with parameters: 100, -5, undefined`, () => {
    expect(clamp(100, -5, undefined)).toBe(100);
});

test(`Returns -5 with parameters: 100, -5, -7`, () => {
    expect(clamp(100, -5, -7)).toBe(-5);
});

test(`Returns 5 with parameters: 100, 5, -5`, () => {
    expect(clamp(100, 5, -5)).toBe(5);
});