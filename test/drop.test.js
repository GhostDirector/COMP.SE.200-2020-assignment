import drop from '../src/drop.js'

test(`Returns [2, 3] with parameters: [1, 2, 3]`, () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
});

test(`Returns [3] with parameters: [1, 2, 3], 2`, () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
});

test(`Returns [] with parameters: [1, 2, 3], 5`, () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
});

test(`Returns [] with parameters: [1, 2, 3, 6, 7, 8, 9], 5`, () => {
    expect(drop([1, 2, 3, 6, 7, 8, 9], 5)).toEqual([8, 9]);
});

test(`Returns [1, 2, 3] with parameters: [1, 2, 3], 0`, () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});

test(`Returns [2, 3] with parameters: [1, 2, 3], undefined`, () => {
    expect(drop([1, 2, 3], undefined)).toEqual([2, 3]);
});

test(`Returns [] with parameters: []`, () => {
    expect(drop([])).toEqual([]);
});

test(`Returns Null with parameters: undefined`, () => {
    expect(drop(undefined)).toBeNull();
});

test(`Returns ["potato", "carrot", "beetroot"] with parameters: ["potato", "carrot", "beetroot"], 0`, () => {
    expect(drop(["potato", "carrot", "beetroot"], 0)).toEqual(["potato", "carrot", "beetroot"]);
});

test(`Returns ["beetroot"] with parameters: ["potato", "carrot", "beetroot"], 2`, () => {
    expect(drop(["potato", "carrot", "beetroot"], 2)).toEqual(["beetroot"]);
});