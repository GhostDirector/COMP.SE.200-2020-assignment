import memoize from '../src/memoize.js'

test(`Returns [1, 2] with parameters: <object with contents: { 'a': 1, 'b': 2 }`, () => {
    const object = { 'a': 1, 'b': 2 }
    const values = memoize(values)

    expect(values(object)).toEqual([1, 2]);
});

test(`Returns [3, 4] with parameters: <object with contents: { 'c': 3, 'd': 4 }`, () => {
    const other = { 'c': 3, 'd': 4 }
    const values = memoize(values)

    expect(values(other)).toEqual([3, 4]);
});

test(`Returns [1, 2] with parameters: <object with contents: { 'a': 1, 'b': 2 }`, () => {
    const object = { 'a': 1, 'b': 2 }
    object.a = 2

    const values = memoize(values)

    expect(values(object)).toEqual([1, 2]);
});

test(`Returns ['a', 'b'] with result modifying and parameters: <object with contents: { 'a': 1, 'b': 2 }`, () => {
    const object = { 'a': 1, 'b': 2 }
    values.cache.set(object, ['a', 'b'])

    const values = memoize(values)

    expect(values(object)).toEqual(['a', 'b']);
});