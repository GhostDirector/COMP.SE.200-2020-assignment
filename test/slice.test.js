import slice from '../src/slice.js'

test(`Returns [3, 4] with parameters: [1, 2, 3, 4], 2`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, 2)).toEqual([3, 4]);
});

test(`Returns [1, 2, 3, 4] with parameters: [1, 2, 3, 4], 0`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, 0)).toEqual([1, 2, 3, 4]);
});

test(`Returns [2, 3, 4] with parameters: [1, 2, 3, 4], 1`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, 1)).toEqual([2, 3, 4]);
});

test(`Returns [] with parameters: [1, 2, 3, 4], 5`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, 5)).toEqual([]);
});

test(`Returns [6, 3] with parameters: [1, 2, 3, 4, 7, 6, 3], 5`, () => {
    var array = [1, 2, 3, 4, 7, 6, 3]

    expect(slice(array, 5)).toEqual([6, 3]);
});

test(`Returns [1, 2, 3, 4] with parameters: [1, 2, 3, 4], undefined`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, undefined)).toEqual([1, 2, 3, 4]);
});

test(`Returns [1, 2] with parameters: [1, 2, 3, 4], -2`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, -2)).toEqual([1, 2]);
});

test(`Returns [2, 3] with parameters: [1, 2, 3, 4], 1, 3`, () => {
    var array = [1, 2, 3, 4]

    expect(slice(array, 1, 3)).toEqual([2, 3]);
});