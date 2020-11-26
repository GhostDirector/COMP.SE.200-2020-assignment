import difference from '../src/difference.js'

test(`Returns [1] with parameters: [2, 1], [2, 3]`, () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
});

test(`Returns [1] with parameters: [2, 3, 1], [2, 3]`, () => {
    expect(difference([2, 3, 1], [2, 3])).toEqual([1]);
});

test(`Returns [1, 4] with parameters: [2, 1, 4], [2, 3, 4]`, () => {
    expect(difference([2, 1, 4], [2, 3, 5])).toEqual([1, 4]);
});

test(`Returns [1] with parameters: [2, 1, 4], [2, 3, 4]`, () => {
    expect(difference([2, 1, 4], [2, 3, 4])).toEqual([1]);
});

test(`Returns [] with parameters: [2, 1], [2, 3, 1]`, () => {
    expect(difference([2, 1], [2, 3, 1])).toEqual([]);
});

test(`Returns [3] with parameters: [2, 3], [2, 1]`, () => {
    expect(difference([2, 3], [2, 1])).toEqual([3]);
});

test(`Returns ["potato"] with parameters: ["carrot", "potato"], ["carrot", "beetroot"]`, () => {
    expect(difference(["carrot", "potato"], ["carrot", "beetroot"])).toEqual(["potato"]);
});

test(`Returns [] with parameters: [], []`, () => {
    expect(difference([], [])).toEqual([]);
});

test(`Returns [1, 2] with parameters: [1, 2], undefined`, () => {
    expect(difference([1, 2], undefined)).toEqual([1, 2]);
});

test(`Returns [1, 2] with parameters: [1, 2], []`, () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
});

test(`Returns null with parameters: undefined, undefined`, () => {
    expect(difference(undefined, undefined)).toBeNull();
});

test(`Returns null with parameters: undefined, [1, 4, 5]`, () => {
    expect(difference(undefined, [1, 4, 5])).toBeNull();
});

test(`Returns "lo" with parameters: "hello", "hel"`, () => {
    expect(difference("hello", "hel")).toBeNull();
});