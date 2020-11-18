import isArrayLikeObject from '../src/isArrayLikeObject.js'

test('returns true if parameter is an array like object', () => {
  const withNumbers = [1,2,3]
  expect(isArrayLikeObject(withNumbers)).toBe(true);

  const withDocBodyChild = (document.body.children)
  expect(isArrayLikeObject(withNumbers)).toBe(true);
});

test('returns false if parameter is not an array like object', () => {
  const withString = 'abc'
  expect(isArrayLikeObject(withString)).toBe(false);

  const withFunction = Function
  expect(isArrayLikeObject(withFunction)).toBe(false);
})