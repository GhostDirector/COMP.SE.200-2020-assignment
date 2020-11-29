import filter from '../src/filter.js'

test(`Returns [{"active": true, "user": "barney"}] with parameters: <Array containing 2 user objects>, <'active' key>`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([{"active": true, "user": "barney"}]);
});


test(`Returns [{'active': false, "activeInLastWeek": true, "user": "fred"}] with parameters: <Array containing 3 user objects with multiple keys>, <'activeInLastWeek' key>`, () => {
    const users = [
        { 'user': 'barney', 'active': true, 'activeInLastWeek': false },
        { 'user': 'fred',   'active': false, 'activeInLastWeek': true },
        { 'user': 'peter',   'active': true, 'activeInLastWeek': false }
    ];

    expect(filter(users, ({ activeInLastWeek }) => activeInLastWeek)).toEqual([{'active': false, "activeInLastWeek": true, "user": "fred"}]);
});

test(`Returns <Array containing objects for 'barney', 'peter' and 'kate'> with parameters: <Array containing 6 user objects>, <'active' key>`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false },
        { 'user': 'peter',   'active': true },
        { 'user': 'maria',   'active': false },
        { 'user': 'jake',   'active': false },
        { 'user': 'kate',   'active': true }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([{"active": true, "user": "barney"}, { 'user': 'peter',   'active': true }, { 'user': 'kate',   'active': true }]);
});

test(`Returns <Array given as parameter> with parameters: <Array containing user objects>, <'active' key>`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': true }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': true }
    ]);
});

test(`Returns [] with parameters: <Array containing user objects>, <'active' key>`, () => {
    const users = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred',   'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([]);
});

test(`Returns [] with parameters: [], <'active' key>`, () => {
    expect(filter([], ({ active }) => active)).toEqual([]);
});

test(`Returns [] with parameters: undefined, <'active' key>`, () => {
    expect(filter(undefined, ({ active }) => active)).toEqual([]);
});

test(`Returns <Array given as parameter> with parameters: <Array containing 2 user objects>, undefined`, () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    expect(filter(users, undefined)).toEqual([
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ]);
});