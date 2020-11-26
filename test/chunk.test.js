import chunk from '../src/chunk.js'

test(`Returns [['a', 'b'], ['c', 'd']] with parameters: ['a', 'b', 'c', 'd'], 2`, () => {
    const array = ['a', 'b', 'c', 'd']
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd']]);
});

test(`Returns [['a', 'b', 'c'], ['d']] with parameters: ['a', 'b', 'c', 'd'], 3`, () => {
    const array = ['a', 'b', 'c', 'd']
    expect(chunk(array, 3)).toEqual([['a', 'b', 'c'], ['d']]);
});

test(`Returns [[1, 2], [3]] with parameters: [1, 2, 3], 2`, () => {
    const array = [1, 2, 3]
    expect(chunk(array, 2)).toEqual([[1, 2], [3]]);
});

test(`Returns [[1], [2], [3]] with parameters: [1, 2, 3], 1`, () => {
    const array = [1, 2, 3]
    expect(chunk(array, 1)).toEqual([[1], [2], [3]]);
});

test(`Returns [] with parameters: undefined, 1`, () => {
    const array = undefined
    expect(chunk(array, 1)).toEqual([])
});