import capitalize from '../src/capitalize.js'

test('capitalizes string', () => {
  expect(capitalize("test")).toBe("Test");
});