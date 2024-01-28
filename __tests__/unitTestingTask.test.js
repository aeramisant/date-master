const {
  leadingZeroes,
  tokens,
  languages,
  lang,
} = require('../unitTestingTask');
const unitTestingTask = require('../unitTestingTask');
const assert = require('assert');

describe('leadingZeroes', () => {
  test('should handle numbers already at or above the specified length', () => {
    const result = leadingZeroes(123, 2);
    expect(result).toBe('123');
  });
});

describe('unitTestingTask - languages', () => {
  test('should set and get the current language', () => {
    const defaultLang = lang(); // Save the default language
    expect(lang()).toBe('en');

    // Reset the language to the default after the test
    lang(defaultLang);
  });
  // Add more tests to cover different scenarios.
});

describe('tokens', () => {
  const mockDate = new Date('2022-01-28T12:34:56');

  test('should format month (MMMM)', () => {
    const result = tokens.MMMM(mockDate, 'format');
    // Add your assertions based on the expected result
  });

  test('should format month (MMM)', () => {
    const result = tokens.MMM(mockDate, 'format');
    // Add your assertions based on the expected result
  });

  test('should format month (M)', () => {
    const result = tokens.M(mockDate);
    expect(result).toBe(1);
  });

  test('should format weekday (D)', () => {
    const result = tokens.D(mockDate);
    // Add your assertions based on the expected result
  });

  test('should format day (d)', () => {
    const result = tokens.d(mockDate);
    expect(result).toBe(28);
  });

  test('should format hour (H)', () => {
    const result = tokens.H(mockDate);
    expect(result).toBe(12);
  });

  test('should format hour (hh)', () => {
    const result = tokens.hh(mockDate);
    expect(result).toBe('12');
  });

  test('should format hour (h)', () => {
    const result = tokens.h(mockDate);
    expect(result).toBe(12);
  });

  test('should format minute (mm)', () => {
    const result = tokens.mm(mockDate);
    expect(result).toBe('34');
  });

  test('should format minute (m)', () => {
    const result = tokens.m(mockDate);
    expect(result).toBe(34);
  });

  test('should format second (ss)', () => {
    const result = tokens.ss(mockDate);
    expect(result).toBe('56');
  });

  test('should format second (s)', () => {
    const result = tokens.s(mockDate);
    expect(result).toBe(56);
  });

  test('should format millisecond (ff)', () => {
    const result = tokens.ff(mockDate);
    // Add your assertions based on the expected result
  });

  test('should format millisecond (f)', () => {
    const result = tokens.f(mockDate);
    // Add your assertions based on the expected result
  });

  test('should format meridiem (a)', () => {
    const result = tokens.a(mockDate);
    // Add your assertions based on the expected result
  });

  test('should format timezone (Z)', () => {
    const result = tokens.Z(mockDate);
    // Add your assertions based on the expected result
  });
});
describe('date formatting', () => {
  const date = new Date(2022, 0, 1, 13, 14, 15, 123); // January 1, 2022 13:14:15.123

  it('should format YYYY', () => {
    expect(unitTestingTask('YYYY', date)).toBe('2022');
  });

  it('should format YY', () => {
    expect(unitTestingTask('YY', date)).toBe('22');
  });
});

describe('unitTestingTask', () => {
  // Line 180
  test('should throw TypeError when format is not a string', () => {
    expect(() => unitTestingTask(123)).toThrow(TypeError);
  });

  // Line 225
  test('should return formatted date string', () => {
    const date = new Date(2022, 0, 1); // January 1, 2022
    expect(unitTestingTask('YYYY-MM-DD', date)).toBe('2022-01-Sat');
  });

  // Line 234
  test('should return formatted date string using token', () => {
    const date = new Date(2022, 0, 1, 12); // January 1, 2022, 12:00
    expect(unitTestingTask('HH', date)).toBe('12');
  });

  // Line 195
  test('should throw error when invalid date is provided', () => {
    expect(() => unitTestingTask('YYYY-MM-DD', {})).toThrow();
  });
});
describe('unitTestingTask function', () => {
  it('should handle future dates', () => {
    // Define a future date
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);

    // Call the function with the future date
    const result = unitTestingTask('YYYY', futureDate);

    // Check the output
    expect(result).toBe(futureDate.getFullYear().toString());
  });
});
describe('unitTestingTask', () => {
  it('should use existing formatter if available', () => {
    unitTestingTask.register('testFormat', 'YYYY');
    const date = new Date(2022, 0, 1); // January 1, 2022
    assert.strictEqual(unitTestingTask('testFormat', date), '2022');
  });
  // Test for the case when date is not provided
  test('should handle when date is not provided', () => {
    const date = new Date();
    expect(unitTestingTask('YYYY')).toBe(date.getFullYear().toString());
  });
});
describe('unitTestingTask.noConflict', () => {
  it('should restore previous value of window.unitTestingTask', () => {
    // Save the current value of window.unitTestingTask
    const original = window.unitTestingTask;
    // Set window.unitTestingTask to a new value
    window.unitTestingTask = 'test';
    // Call unitTestingTask.noConflict
    const result = unitTestingTask.noConflict();
    // Check if window.unitTestingTask is restored to the original value
    assert.strictEqual(window.unitTestingTask, original);
    // Check if unitTestingTask.noConflict returned the current unitTestingTask function
    assert.strictEqual(result, unitTestingTask);
  });
});
