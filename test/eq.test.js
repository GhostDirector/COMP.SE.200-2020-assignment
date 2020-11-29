import eq from '../src/eq.js'

test(`Returns true with parameters: <object with contents: { 'a': 1 }`, () => {
    const object = { 'a': 1 }

    expect(eq(object, object)).toEqual(true);
});

test(`Returns false with parameters: <two different objects with same contents: { 'a': 1 }`, () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }

    expect(eq(object, other)).toEqual(false);
});

test(`Returns true with parameters: 'a', 'a'`, () => {
    expect(eq('a', 'a')).toEqual(true);
});

test(`Returns false with parameters: 'a', Object('a')`, () => {
    expect(eq('a', Object('a'))).toEqual(false);
});

test(`Returns true with parameters: NaN, NaN`, () => {
    expect(eq(NaN, NaN)).toEqual(false);
});

test(`Returns true with parameters: undefined, undefined`, () => {
    expect(eq(undefined, undefined)).toStrictEqual(true);
});

test(`Returns false with parameters: undefined, null`, () => {
    expect(eq(undefined, null)).toStrictEqual(false);
});