import get from '../src/get.js'

test(`Returns 3 with parameters: <{ 'a': [{ 'b': { 'c': 3 } }] }>, <'a[0].b.c'>`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    expect(get(object, 'a[0].b.c')).toEqual(3);
});

test(`Returns 3 with parameters: <{ 'a': [{ 'b': { 'c': 3 } }] }>, <['a', '0', 'b', 'c']>`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    expect(get(object, ['a', '0', 'b', 'c'])).toEqual(3);
});

test(`Returns 'default' with parameters: <{ 'a': [{ 'b': { 'c': 3 } }] }>, 'a.b.c', 'default'`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    expect(get(object, 'a.b.c', 'default')).toEqual('default');
});

test(`Returns 'default' with parameters: undefined, <'a[0].b.c'>, 'default'`, () => {
    expect(get(undefined, 'a[0].b.c', 'default')).toEqual('default');
});

test(`Returns null with parameters: undefined, <'a[0].b.c'>`, () => {
    expect(get(undefined, 'a[0].b.c')).toEqual(null);
});

test(`Returns null with parameters: <{ 'a': [{ 'b': { 'c': 3 } }] }>, undefined`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    expect(get(object, undefined)).toEqual(null);
});

test(`Returns 'default' with parameters: <{ 'a': [{ 'b': { 'c': 3 } }] }>, undefined, 'default'`, () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    expect(get(object, undefined, 'default')).toEqual('default');
});