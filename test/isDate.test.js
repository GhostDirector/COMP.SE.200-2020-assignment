import isDate from '../src/isDate.js'

test('returns true if parameter is a date object', () => {
  const currentDate = new Date
  expect(isDate(currentDate)).toBe(true);
  
  const anotherDate = new Date(2020,11,18)
  expect(isDate(anotherDate)).toBe(true);
});

test('returns false if parameter is not a date object', () => {
  expect(isDate('Mon April 23 2012')).toBe(false);
  expect(isDate('07/06/2013')).toBe(false);
  expect(isDate('05.04.2014')).toBe(false);
  expect(isDate('04-04-2013')).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
})