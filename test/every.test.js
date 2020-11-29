import every from '../src/every.js'

test(`Returns false with parameters: [true, 1, null, 'yes'], Boolean`, () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toEqual(false);
});

test(`Returns true with parameters: [], Boolean`, () => {
    expect(every([], Boolean)).toEqual(true);
});