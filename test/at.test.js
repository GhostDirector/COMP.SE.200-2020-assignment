import at from '../src/at.js'

test(`Returns [3, 4] with parameters: { 'a': [{ 'b': { 'c': 3 } }, 4] }`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
});

test(`Returns [6, 4] with parameters: { 'a': [{ 'b': { 'c': 3 } }, 4, 6] }`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4, 6] }
    expect(at(object, ['a[2]', 'a[1]'])).toEqual([6, 4]);
});

test(`Returns ["test", 4] with parameters: { 'a': [{ 'b': { 'c': 3 } }, 4, "test"] }`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4, "test"] }
    expect(at(object, ['a[2]', 'a[1]'])).toEqual(["test", 4]);
});

test(`Returns [undefined, undefined] with parameters: { 'b': [{ 'c': { 'd': 3 } }, 4] }`, () => {
    const object = { 'b': [{ 'c': { 'd': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([undefined, undefined]);
});

test(`Returns [undefined, undefined] with parameters: undefined`, () => {
    const object = undefined
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([undefined, undefined]);
});