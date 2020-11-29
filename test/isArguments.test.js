import isArguments from '../src/isArguments.js'

test(`Returns true with parameters: function() { return arguments }()`, () => {
    expect(isArguments(function() { return arguments }())).toEqual(true);
});

test(`Returns false with parameters: [1, 2, 3]`, () => {
    expect([1, 2, 3]).toEqual(false);
});

test(`Returns false with parameters: 'a', 'b', 'c'`, () => {
    expect(['a', 'b', 'c']).toEqual(false);
});

test(`Returns false with parameters: {}`, () => {
    expect({}).toEqual(false);
});

test(`Returns false with parameters: {'key': 'value'}`, () => {
    expect({'key': 'value'}).toEqual(false);
});

test(`Returns true with parameters: arguments`, () => {
    let args = function() { return arguments }()

    expect(args).toEqual(true);
});