import compact from '../src/compact.js'

test(`Returns [1, 2, 3] with parameters: [0, 1, false, 2, '', 3]`, () => {
    const array = [0, 1, false, 2, '', 3]
    expect(compact(array)).toEqual([1, 2, 3]);
});

test(`Returns [1, 2, "hello", 3] with parameters: [0, 1, null, 2, "hello", 3]`, () => {
    const array = [0, 1, null, 2, "hello", 3]
    expect(compact(array)).toEqual([1, 2, "hello", 3]);
});

test(`Returns [1, 2, 3] with parameters: [0, 1, undefined, 2, NaN, 3]`, () => {
    const array = [0, 1, undefined, 2, NaN, 3]
    expect(compact(array)).toEqual([1, 2, 3]);
});

test(`Returns [1, 2, 3] with parameters: [1, 2, 3]`, () => {
    const array = [1, 2, 3]
    expect(compact(array)).toEqual([1, 2, 3]);
});

test(`Returns [] with parameters: [undefined, undefined, undefined]`, () => {
    const array = [undefined, undefined, undefined]
    expect(compact(array)).toEqual([]);
});

test(`Returns [] with parameters: []`, () => {
    const array = []
    expect(compact(array)).toEqual([]);
});

test(`Returns null with parameters: undefined`, () => {
    const array = undefined
    expect(compact(array)).toBeNull();
});

test(`Returns [] without parameters`, () => {
    expect(compact()).toEqual([]);
});