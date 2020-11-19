import add from '../src/add.js'

test('returns 10 with parameters: 6 and 4', () => {
    expect(add(6, 4)).toEqual(10);
});

test('returns 10.5 with parameters: 6.5 and 4', () => {
    expect(add(6.5, 4)).toEqual(10.5);
});

test('returns 3 with parameters: -1 and 4', () => {
    expect(add(-1, 4)).toEqual(3);
});

test('returns 2 with parameters: 6 and -4', () => {
    expect(add(6, -4)).toEqual(2);
});

test('returns -3 with parameters: 1 and -4', () => {
    expect(add(1, -4)).toEqual(-3);
});

test('returns 0 with parameters: undefined and undefined', () => {
    expect(add(undefined, undefined)).toEqual(0);
});

test('returns 0 with parameters: undefined and 1', () => {
    expect(add(undefined, 1)).toEqual(0);
});

test('returns 0 with parameters: 1 and undefined', () => {
    expect(add(1, undefined)).toEqual(0);
});

test('returns 0 with parameters: "6" and "4"', () => {
    expect(add("6", "4")).toEqual(0);
});

test('returns 0 with parameters: "6" and "-4"', () => {
    expect(add("6", "-4")).toEqual(0);
});

test(`returns 0 with parameters: '6' and '4'`, () => {
    expect(add('6', '4')).toEqual(0);
});

test(`returns 0 with parameters: '6' and '-4'`, () => {
    expect(add('6', '-4')).toEqual(0);
});

test(`returns 0 with parameters: 'a' and 4`, () => {
    expect(add('a', 4)).toEqual(0);
});

test(`returns 0 with parameters: '\\n' and 5`, () => {
    expect(add('\n', 5)).toEqual(0);
});