import countBy from '../src/countBy.js'

test(`Returns { 'true': 2, 'false': 1 } with parameters: Array containing three objects with two properties`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
        ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

test(`Returns { '1': 1, 'hello': 1, 'false': 1 } with parameters: Array containing three objects with two properties of various types`, () => {
    const users = [
        { 'user': 'barney', 'active': 1 },
        { 'user': 'betty', 'active': "hello" },
        { 'user': 'fred', 'active': false }
        ]
    expect(countBy(users, value => value.active)).toEqual({ '1': 1, 'hello': 1, 'false': 1 });
});

test(`Returns { 'true': 3, 'false': 2 } with parameters: Array containing five objects with two properties`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'john', 'active': false },
        { 'user': 'peter', 'active': true },
        { 'user': 'fred', 'active': false }
        ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 3, 'false': 2 });
});

test(`Returns { 'true': 2, 'false': 1 } with parameters: Array containing three objects with three properties`, () => {
    const users = [
        { 'user': 'barney', 'active': true, 'test': false },
        { 'user': 'betty', 'active': true, 'test': true },
        { 'user': 'fred', 'active': false, 'test': false }
        ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

test(`Returns { 'true': 1, 'false': 2 } with parameters: Array containing three objects with three properties`, () => {
    const users = [
        { 'user': 'barney', 'active': true, 'test': false },
        { 'user': 'betty', 'active': true, 'test': true },
        { 'user': 'fred', 'active': false, 'test': false }
        ]
    expect(countBy(users, value => value.test)).toEqual({ 'true': 1, 'false': 2 });
});

test(`Returns null with parameters: []`, () => {
    const users = []
    expect(countBy(users, value => value.active)).toEqual({});
});

test(`Returns null with parameters: undefined`, () => {
    const users = undefined
    expect(countBy(users, value => value.active)).toEqual({});
});